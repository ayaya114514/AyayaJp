"use strict";

// Pre-renders every spoken text with a local VOICEVOX engine so the page can
// play clips through <audio> (which mixes with other apps' music on iOS)
// instead of speechSynthesis (which iOS always lets interrupt it).
//
// Usage: start VOICEVOX engine (default http://127.0.0.1:50021), then
//   node scripts/build-audio.js [--prune]
// Only texts without a clip are rendered; --prune deletes clips no longer used.
//
// Every clip fails closed: the engine's final mora sequence must equal the
// reviewed reading, or no clip is written and the app keeps speechSynthesis.
// Texts listed in audio-prosody.tsv get their reviewed accent phrases instead
// of the engine's; a notation whose morae no longer match is not rendered.

const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const { buildRuntime, rootDir } = require("./validation-lib");
const {
  audioClipKey,
  audioManifestFile,
  audioReportFile,
  collectSpokenTexts,
  katakanaMoras,
  loadAudioManifest,
  loadAudioProsody,
  normalizeMoras,
  spellMoras,
  readingMoras,
  spokenTextOf,
  toKatakana,
} = require("./audio-lib");

const engineUrl = process.env.VOICEVOX_URL || "http://127.0.0.1:50021";
// Changing the voice or any synthesis setting needs a new directory so cached
// clips under the old URLs are never mixed with the new ones.
const voice = {
  directory: "audio/no7-announce-v5",
  credit: "VOICEVOX:No.7",
  speaker: 30, // No.7 アナウンス
  speedScale: 0.9,
  prePhonemeLength: 0.08,
  postPhonemeLength: 0.12,
};
const concurrency = 3;

// Spoken Latin letters in reviewed readings.
const latinReadings = { CD: "シーディー", ATM: "エーティーエム" };

// Kana-module texts are read literally (は is ha, not the particle) except the
// three particle cards, which teach the particle pronunciation.
const kanaPronunciations = { わたしは: "わたしわ", えきへ: "えきえ", ほんを: "ほんお" };
// Tokyo accents for the kana-module example words (Kanjium accents.txt, checked
// entry by entry); the particle cards keep the noun's accent.
const kanaAccents = {
  おかあさん: 2,
  おにいさん: 2,
  くうき: 1,
  せんせい: 3,
  おねえさん: 2,
  こうこう: 0,
  おおきい: 3,
  コーヒー: 3,
  がっこう: 0,
  ざっし: 0,
  きって: 0,
  きっぷ: 0,
  こっち: 3,
  バッグ: 1,
  ベッド: 1,
  ほん: 1,
  しんぶん: 0,
  きんようび: 3,
  わたしは: 0,
  えきへ: 1,
  ほんを: 1,
};

// Reviewed spellings whose standard pronunciation differs: いう (言う) is said ゆう.
const reviewedPronunciations = {
  "あ、そういういみですか": "あ、そうゆういみですか",
  "なるほど、そういういみですか": "なるほど、そうゆういみですか",
  "『おはなみ』って、どういういみですか": "『おはなみ』って、どうゆういみですか",
  "こういうケースわめずらしいです": "こうゆうケースわめずらしいです",
  "つまり、どういうことですか": "つまり、どうゆうことですか",
};

async function engine(pathname, params, body) {
  const url = new URL(pathname, engineUrl);
  Object.entries(params).forEach(([key, value]) => url.searchParams.set(key, String(value)));
  const response = await fetch(url, {
    method: "POST",
    headers: body ? { "Content-Type": "application/json" } : {},
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!response.ok) {
    throw new Error(`${pathname} ${response.status}: ${(await response.text()).slice(0, 200)}`);
  }
  return pathname === "/synthesis" ? Buffer.from(await response.arrayBuffer()) : response.json();
}

// Quote brackets make the engine pause around the quoted word (「はなちゃん」、と).
function audioQuery(text) {
  return engine("/audio_query", { text: text.replace(/[「」『』]/gu, ""), speaker: voice.speaker });
}

function phraseMoras(query) {
  return normalizeMoras(query.accent_phrases.flatMap((phrase) => phrase.moras.map((mora) => mora.text)));
}

function sameMoras(left, right) {
  return left.length === right.length && left.every((mora, index) => mora === right[index]);
}

// AquesTalk-style kana with the accent nucleus marked; accent 0 (heiban) is
// written as a mark after the last mora, which VOICEVOX treats the same.
async function kanaNotationQuery(reading, accent, { finalU = false } = {}) {
  const moras = katakanaMoras(toKatakana(reading));
  if (!moras) return null;
  const spelled = spellMoras(moras, { finalU });
  const nucleus = accent === 0 ? spelled.length : accent;
  if (nucleus < 1 || nucleus > spelled.length) return null;
  const notation = `${spelled.slice(0, nucleus).join("")}'${spelled.slice(nucleus).join("")}`;
  const query = await audioQuery(reading);
  query.accent_phrases = await engine("/accent_phrases", {
    text: notation,
    speaker: voice.speaker,
    is_kana: true,
  });
  return query;
}

// Splits the reviewed speech along the example's ruby: kanji segments speak
// their reading, kana segments their (particle-converted) kana.
function rubySegments(ruby, speech) {
  if (!Array.isArray(ruby) || !ruby.length) return null;
  let offset = 0;
  let position = 0;
  const segments = ruby.map(([surface, reading]) => {
    const length = reading ? reading.length : surface.length;
    const spoken = speech.slice(offset, offset + length);
    offset += length;
    const moraCount = (readingMoras(spoken, latinReadings) || []).length;
    const segment = { surface, spoken, kanji: Boolean(reading), start: position, end: position + moraCount };
    position += moraCount;
    return segment;
  });
  return offset === speech.length ? segments : null;
}

// Marks the kanji segments around the first differing mora, widened to the
// whole contiguous kanji run (毎+年). Returns false when nothing new was marked.
function markMisread(segments, replaced, expected, actual) {
  let prefix = 0;
  while (prefix < expected.length && expected[prefix] === actual[prefix]) prefix += 1;
  let suffix = 0;
  while (
    suffix < expected.length - prefix &&
    suffix < actual.length - prefix &&
    expected[expected.length - 1 - suffix] === actual[actual.length - 1 - suffix]
  ) {
    suffix += 1;
  }
  const start = Math.max(0, prefix - 1);
  const end = Math.min(expected.length, expected.length - suffix + 1);
  const before = replaced.size;
  segments.forEach((segment, index) => {
    if (segment.kanji && segment.start < end && segment.end > start) replaced.add(index);
  });
  for (let index = 0; index < segments.length; index += 1) {
    [index - 1, index + 1].forEach((neighbor) => {
      if (replaced.has(index) && segments[neighbor]?.kanji) replaced.add(neighbor);
    });
  }
  for (let index = segments.length - 1; index >= 0; index -= 1) {
    [index - 1, index + 1].forEach((neighbor) => {
      if (replaced.has(index) && segments[neighbor]?.kanji) replaced.add(neighbor);
    });
  }
  return replaced.size > before;
}

// Misread kanji are swapped for their reviewed reading in katakana: katakana
// stays one word, where hiragana would fuse with a neighbor (父はせいが → 派生).
function substitutedSurface(segments, replaced) {
  return segments
    .map((segment, index) => (replaced.has(index) ? toKatakana(segment.spoken) : segment.surface))
    .join("");
}

// OpenJTalk splits 〜んです into its own phrase (ア'ル/ン'デス); fold it back
// into the predicate, whose nucleus already follows the のです rule (ア'ルンデス,
// イル'ンデスカ). The morae are unchanged, so the reading check still holds.
function joinNPhrases(query) {
  const phrases = [];
  query.accent_phrases.forEach((phrase) => {
    const previous = phrases[phrases.length - 1];
    if (previous && !previous.pause_mora && phrase.moras[0]?.text === "ン") {
      previous.moras.push(...phrase.moras);
      previous.pause_mora = phrase.pause_mora;
      previous.is_interrogative = phrase.is_interrogative;
    } else {
      phrases.push(phrase);
    }
  });
  query.accent_phrases = phrases;
  return query;
}

// Same notation as audio-prosody.tsv: "/" between accent phrases, "'" after
// the nucleus (after the last mora = no fall), "？" rising question, "、" pause.
function describeQuery(query) {
  return query.accent_phrases
    .map((phrase) => {
      const moras = phrase.moras.map((mora) => mora.text);
      moras.splice(phrase.accent, 0, "'");
      return moras.join("") + (phrase.is_interrogative ? "？" : "") + (phrase.pause_mora ? "、" : "");
    })
    .join("/");
}

function parseProsody(notation) {
  const phrases = notation.split("/").map((raw) => {
    const pause = raw.endsWith("、");
    const interrogative = raw.replace(/、$/u, "").endsWith("？");
    const body = raw.replace(/、$/u, "").replace(/？$/u, "");
    const nucleus = body.indexOf("'");
    if (nucleus < 0 || body.indexOf("'", nucleus + 1) >= 0) return null;
    const moras = katakanaMoras(body.replace("'", ""));
    const before = katakanaMoras(body.slice(0, nucleus));
    if (!moras || !before || before.length < 1) return null;
    return { moras, accent: before.length, pause, interrogative };
  });
  return phrases.every(Boolean) ? phrases : null;
}

// A devoiced nucleus (ス in デ'ス) cannot carry the fall; voice it. Returns
// whether anything changed.
function voiceNuclei(accentPhrases) {
  let changed = false;
  accentPhrases.forEach((phrase) => {
    const nucleus = phrase.moras[phrase.accent - 1];
    if (phrase.accent < phrase.moras.length && /^[AIUEO]$/u.test(nucleus.vowel)) {
      nucleus.vowel = nucleus.vowel.toLowerCase();
      changed = true;
    }
  });
  return changed;
}

// The engine's own contour is kept: reshaping every phrase into the textbook
// pattern (5-semitone falls, forced phrase-initial rises) made each sentence a
// mechanical staircase. Only two things that change which accent a listener
// hears are repaired, by the smallest step that fixes them:
// - the peak lands after the nucleus (秋 ア'キ comes out ア < キ, like あき'),
//   so the nucleus takes that peak and everything after it falls below;
// - a phrase that is not 頭高 starts clearly above its second mora (ください
//   クダサ'イ comes out ク > ダ, like く'ださい), so the first mora is lowered.
const accentDrop = 0.08; // natural-log pitch: about 1.4 semitones
const lateFallTolerance = 0.02;
const initialFallTolerance = 0.05;
const initialRise = 0.03;

// ン, ッ and the second half of a long vowel share the syllable's pitch.
function isSpecialMora(moras, index) {
  const mora = moras[index];
  if (index === 0 || !mora) return false;
  if (mora.text === "ン" || mora.text === "ッ") return true;
  return !mora.consonant && mora.vowel.toLowerCase() === moras[index - 1].vowel.toLowerCase();
}

function shapeAccentPhrase(phrase) {
  const moras = phrase.moras;
  if (moras.length < 2) return;
  const voiced = (index) => moras[index]?.pitch > 0;
  const nucleus = phrase.accent - 1;
  if (phrase.accent < moras.length && voiced(nucleus)) {
    const after = moras.slice(nucleus + 1).filter((mora) => mora.pitch > 0);
    if (after.length && after[0].pitch > moras[nucleus].pitch - lateFallTolerance) {
      const peak = Math.max(moras[nucleus].pitch, after[0].pitch);
      moras[nucleus].pitch = peak;
      after.forEach((mora) => {
        mora.pitch = Math.min(mora.pitch, peak - accentDrop);
      });
    }
  }
  const highStart = phrase.accent === 1 || isSpecialMora(moras, 1) ? 0 : 1;
  if (highStart === 1 && voiced(0) && voiced(1) && moras[0].pitch > moras[1].pitch + initialFallTolerance) {
    moras[0].pitch = moras[1].pitch - initialRise;
  }
}

async function realizeAccents(query) {
  if (voiceNuclei(query.accent_phrases)) {
    query.accent_phrases = await engine("/mora_pitch", { speaker: voice.speaker }, query.accent_phrases);
  }
  query.accent_phrases.forEach(shapeAccentPhrase);
  return query;
}

// Regroups the engine's own morae (keeping its devoicing and timing model) into
// the reviewed accent phrases, then lets the engine recompute pitch and length.
async function applyProsody(query, notation) {
  const phrases = parseProsody(notation);
  if (!phrases) return `invalid prosody notation ${notation}`;
  const moras = query.accent_phrases.flatMap((phrase) => phrase.moras);
  const expected = normalizeMoras(phrases.flatMap((phrase) => phrase.moras));
  if (!sameMoras(normalizeMoras(moras.map((mora) => mora.text)), expected)) {
    return `prosody morae ${expected.join("")} differ from the engine's ${moras.map((mora) => mora.text).join("")}`;
  }
  const pause = query.accent_phrases.find((phrase) => phrase.pause_mora)?.pause_mora || {
    text: "、",
    consonant: null,
    consonant_length: null,
    vowel: "pau",
    vowel_length: 0,
    pitch: 0,
  };
  let offset = 0;
  const accentPhrases = phrases.map((phrase) => {
    const own = moras.slice(offset, offset + phrase.moras.length).map((mora) => ({ ...mora }));
    offset += phrase.moras.length;
    return {
      moras: own,
      accent: phrase.accent,
      pause_mora: phrase.pause ? { ...pause } : null,
      is_interrogative: phrase.interrogative,
    };
  });
  voiceNuclei(accentPhrases);
  query.accent_phrases = await engine("/mora_data", { speaker: voice.speaker }, accentPhrases);
  return describeQuery(query) === notation ? null : `prosody applied as ${describeQuery(query)}`;
}

async function planReading(clipText, sources, pitchAccents, verbIds) {
  const text = spokenTextOf(clipText);
  const kanaSource = sources.find((source) => source.kind === "kana");
  const wordSource = sources.find((source) => source.kind === "word");
  const sentenceSource = sources.find((source) => source.kind === "sentence");
  const pronunciation = (kanaSource ? kanaPronunciations[text] : reviewedPronunciations[text]) || text;
  const expected = readingMoras(pronunciation, latinReadings);
  if (!expected) return { error: "reading is not pure kana" };

  const attempts = [];
  const accept = async (method, queryPromise) => {
    const query = await queryPromise;
    if (!query) return null;
    joinNPhrases(query);
    const actual = phraseMoras(query);
    if (sameMoras(actual, expected)) return { method, query };
    attempts.push(`${method}:${actual.join("")}`);
    return { mismatch: actual };
  };

  const pitch = wordSource ? pitchAccents[wordSource.sourceId] : null;
  if (pitch && sources.every((source) => source.kind !== "sentence")) {
    // A verb's dictionary-form う is its own mora: おもう is オモウ, not オモー.
    const finalU = verbIds.has(wordSource.sourceId);
    const result = await accept("pitch", kanaNotationQuery(pronunciation, pitch[0], { finalU }));
    if (result?.query) return result;
  }
  if (kanaSource) {
    const accent = kanaAccents[text] ?? (expected.length === 1 ? 1 : null);
    if (accent === null) return { error: "kana text has no reviewed accent" };
    const result = await accept("kana-accent", kanaNotationQuery(pronunciation, accent));
    if (result?.query) return result;
    return { error: `kana notation mismatch ${attempts.join(" ")}` };
  }

  const surfaceSource = sentenceSource || wordSource;
  const surface = surfaceSource?.surface;
  if (surface && surface !== text) {
    const result = await accept("surface", audioQuery(surface));
    if (result?.query) return result;
    const segments = rubySegments(surfaceSource.ruby, text);
    if (segments) {
      const replaced = new Set();
      let actual = result.mismatch;
      for (let round = 0; round < 3 && markMisread(segments, replaced, expected, actual); round += 1) {
        const input = substitutedSurface(segments, replaced);
        const next = await accept("ruby-kana", audioQuery(input));
        if (next?.query) return { ...next, input };
        actual = next.mismatch;
      }
      segments.forEach((segment, index) => segment.kanji && replaced.add(index));
      const input = substitutedSurface(segments, replaced);
      const allKana = await accept("ruby-kana", audioQuery(input));
      if (allKana?.query) return { ...allKana, input };
    }
  }
  const kanaResult = await accept("kana", audioQuery(text));
  if (kanaResult?.query) return kanaResult;
  return { error: `reading mismatch expected ${expected.join("")} ${attempts.join(" ")}` };
}

async function planQuery(text, sources, pitchAccents, verbIds, prosody) {
  const plan = await planReading(text, sources, pitchAccents, verbIds);
  if (plan.error || !prosody) return plan;
  const error = await applyProsody(plan.query, prosody);
  return error ? { error } : { ...plan, method: `${plan.method}+prosody` };
}

// VOICEVOX output is quiet and soft, and a lone mora is far quieter than a
// sentence. Every clip is shaped for listening over music: cut rumble and
// boxiness, lift presence and air, compress, then level the voiced part to
// targetRmsDb (about -11.5 LUFS for a sentence) with a limiter catching peaks.
const sampleRate = 24000;
const toneFilters = [
  "highpass=f=90",
  "equalizer=f=250:t=q:w=1:g=-2",
  "equalizer=f=3000:t=q:w=1.2:g=4",
  "equalizer=f=6000:t=q:w=1:g=2",
  "acompressor=threshold=-30dB:ratio=4:attack=3:release=60:makeup=1",
].join(",");
const targetRmsDb = -10.5;
const limiter = "alimiter=limit=0.84:attack=2:release=40:level=false"; // -1.5 dBFS, room for MP3 overshoot

// An ffmpeg run takes well under a second, but about one in a few thousand
// hangs for good reading its stdin. A run past the timeout is killed and
// retried; runs are async so a hung one never stalls the other workers'
// engine requests.
const ffmpegTimeoutMs = 30000;
const ffmpegAttempts = 3;

function ffmpegOnce(args, input) {
  return new Promise((resolve, reject) => {
    const child = spawn("ffmpeg", args, { stdio: [input ? "pipe" : "ignore", "pipe", "pipe"] });
    const stdout = [];
    const stderr = [];
    let timedOut = false;
    const timer = setTimeout(() => {
      timedOut = true;
      child.kill("SIGKILL"); // a hung ffmpeg ignores SIGTERM
    }, ffmpegTimeoutMs);
    child.stdout.on("data", (chunk) => stdout.push(chunk));
    child.stderr.on("data", (chunk) => stderr.push(chunk));
    child.on("error", (error) => {
      clearTimeout(timer);
      reject(error);
    });
    child.on("close", (code, signal) => {
      clearTimeout(timer);
      if (code === 0) {
        resolve(Buffer.concat(stdout));
        return;
      }
      const reason = timedOut
        ? `timed out after ${ffmpegTimeoutMs} ms`
        : `exited with ${code ?? signal}: ${Buffer.concat(stderr).toString().trim().slice(0, 200)}`;
      reject(Object.assign(new Error(`ffmpeg ${reason}`), { timedOut }));
    });
    if (input) {
      child.stdin.on("error", () => {}); // EPIPE if ffmpeg exits early; close reports why
      child.stdin.end(input);
    }
  });
}

async function ffmpeg(args, input) {
  for (let attempt = 1; ; attempt += 1) {
    try {
      return await ffmpegOnce(args, input);
    } catch (error) {
      if (!error.timedOut || attempt === ffmpegAttempts) throw error;
      console.warn(`  ffmpeg hung, retrying (${attempt}/${ffmpegAttempts - 1}): ${args.at(-1)}`);
    }
  }
}

// Float32 mono PCM at sampleRate, so nothing is clipped before the limiter.
async function shapedSamples(wav) {
  const pcm = await ffmpeg(
    [
      "-v", "error", "-f", "wav", "-i", "pipe:0",
      "-af", toneFilters,
      "-ac", "1", "-ar", String(sampleRate), "-f", "f32le", "pipe:1",
    ],
    wav,
  );
  return { pcm, samples: new Float32Array(pcm.buffer, pcm.byteOffset, pcm.length / 4) };
}

function voicedRmsDb(samples) {
  const windowSize = sampleRate / 100; // 10 ms
  const windows = [];
  for (let start = 0; start + windowSize <= samples.length; start += windowSize) {
    let power = 0;
    for (let index = start; index < start + windowSize; index += 1) power += samples[index] * samples[index];
    windows.push(power / windowSize);
  }
  const loudest = Math.max(...windows);
  if (!loudest) throw new Error("silent clip");
  // Voiced windows: within 30 dB of the loudest one.
  const voiced = windows.filter((power) => power >= loudest / 1000);
  return 10 * Math.log10(voiced.reduce((sum, power) => sum + power, 0) / voiced.length);
}

async function decodedPeak(file) {
  const pcm = await ffmpeg(["-v", "error", "-i", file, "-f", "f32le", "pipe:1"]);
  const samples = new Float32Array(pcm.buffer, pcm.byteOffset, pcm.length / 4);
  return samples.reduce((peak, sample) => Math.max(peak, Math.abs(sample)), 0);
}

// MP3 encoding can overshoot the limiter; a decoded peak above -0.5 dBFS would
// clip on playback, so the clip is trimmed by the overshoot and re-encoded.
const decodedPeakCeiling = 0.94;

async function encodeMp3(wav, destination) {
  const { pcm, samples } = await shapedSamples(wav);
  const gainDb = targetRmsDb - voicedRmsDb(samples);
  let trimDb = 0;
  for (let attempt = 0; attempt < 4; attempt += 1) {
    await ffmpeg(
      [
        "-v", "error", "-y", "-f", "f32le", "-ar", String(sampleRate), "-ac", "1", "-i", "pipe:0",
        "-af", `volume=${gainDb.toFixed(2)}dB,${limiter},volume=${trimDb.toFixed(2)}dB`,
        "-codec:a", "libmp3lame", "-b:a", "48k",
        "-map_metadata", "-1",
        destination,
      ],
      pcm,
    );
    const peak = await decodedPeak(destination);
    if (peak <= decodedPeakCeiling) return;
    trimDb += 20 * Math.log10(decodedPeakCeiling / peak) - 0.2;
  }
  throw new Error("decoded peak stays above the ceiling");
}

function writeManifest(keys) {
  const sortedKeys = [...keys].sort();
  const source = `// Generated by scripts/build-audio.js; do not edit by hand.
// Voice: ${voice.credit} (https://voicevox.hiroshiba.jp/), non-commercial use with credit.
window.AYAYA_AUDIO = {
  credit: ${JSON.stringify(voice.credit)},
  directory: ${JSON.stringify(`${voice.directory}/`)},
  keys: ${JSON.stringify(sortedKeys.join(" "))},
};
`;
  fs.writeFileSync(path.join(rootDir, audioManifestFile), source);
}

function writeReport(rows) {
  const lines = ["key\tstatus\tmethod\ttext\tpronunciation"];
  [...rows].sort((left, right) => left.text.localeCompare(right.text, "ja")).forEach((row) => {
    lines.push([row.key, row.status, row.method, row.text, row.detail].join("\t"));
  });
  fs.mkdirSync(path.dirname(path.join(rootDir, audioReportFile)), { recursive: true });
  fs.writeFileSync(path.join(rootDir, audioReportFile), `${lines.join("\n")}\n`);
}

function readReport() {
  const filePath = path.join(rootDir, audioReportFile);
  if (!fs.existsSync(filePath)) return new Map();
  const rows = fs.readFileSync(filePath, "utf8").trim().split("\n").slice(1);
  return new Map(
    rows.map((line) => {
      const [key, status, method, text, detail] = line.split("\t");
      return [text, { key, status, method, text, detail }];
    }),
  );
}

async function main() {
  const prune = process.argv.includes("--prune");
  const runtime = buildRuntime();
  const pitchAccents = runtime.data.pitchAccent?.entries || {};
  const verbIds = new Set(
    [runtime.data.n5, runtime.data.n4, runtime.data.n3, runtime.data.n2]
      .flatMap((data) => data?.entries || [])
      .filter((entry) => (entry.part_of_speech || "").split("/").includes("verb"))
      .map((entry) => entry.id),
  );
  const texts = collectSpokenTexts(runtime);
  const prosodies = loadAudioProsody();
  const unused = [...prosodies.keys()].filter((text) => !texts.has(text));
  if (unused.length) throw new Error(`audio-prosody.tsv lists texts nothing speaks: ${unused.slice(0, 5).join(", ")}`);
  const outputDirectory = path.join(rootDir, voice.directory);
  fs.mkdirSync(outputDirectory, { recursive: true });

  const previous = readReport();
  const manifest = loadAudioManifest();
  const previousKeys =
    manifest?.directory === `${voice.directory}/` ? new Set(manifest.keys.split(" ").filter(Boolean)) : new Set();
  const rows = [];
  const pending = [];
  texts.forEach((sources, text) => {
    const key = audioClipKey(text);
    const old = previous.get(text);
    const file = path.join(outputDirectory, `${key}.mp3`);
    const prosody = prosodies.get(text);
    // A clip is reused only if it was rendered with the prosody now on file.
    const sameProsody = prosody
      ? old?.method.endsWith("+prosody") && old.detail.split(" ← ")[0] === prosody
      : !old?.method.endsWith("+prosody");
    if (old?.status === "ok" && sameProsody && previousKeys.has(key) && fs.existsSync(file)) rows.push(old);
    else pending.push({ text, sources, key, file, prosody });
  });

  console.log(`${texts.size} spoken texts, ${pending.length} to render`);
  let done = 0;
  const work = async () => {
    while (pending.length) {
      const item = pending.shift();
      try {
        const plan = await planQuery(item.text, item.sources, pitchAccents, verbIds, item.prosody);
        if (plan.error) {
          rows.push({ key: item.key, status: "skipped", method: "-", text: item.text, detail: plan.error });
        } else {
          await realizeAccents(plan.query);
          Object.assign(plan.query, {
            speedScale: voice.speedScale,
            prePhonemeLength: voice.prePhonemeLength,
            postPhonemeLength: voice.postPhonemeLength,
          });
          const wav = await engine("/synthesis", { speaker: voice.speaker }, plan.query);
          await encodeMp3(wav, item.file);
          const detail = describeQuery(plan.query) + (plan.input ? ` ← ${plan.input}` : "");
          rows.push({ key: item.key, status: "ok", method: plan.method, text: item.text, detail });
        }
      } catch (error) {
        rows.push({ key: item.key, status: "skipped", method: "-", text: item.text, detail: `error ${error.message}` });
      }
      done += 1;
      if (done % 200 === 0) console.log(`  ${done} rendered`);
    }
  };
  await Promise.all(Array.from({ length: concurrency }, work));

  const keys = new Set(rows.filter((row) => row.status === "ok").map((row) => row.key));
  writeManifest(keys);
  writeReport(rows);

  const stale = fs.readdirSync(outputDirectory).filter((name) => !keys.has(name.replace(/\.mp3$/u, "")));
  if (prune) stale.forEach((name) => fs.unlinkSync(path.join(outputDirectory, name)));
  const skipped = rows.filter((row) => row.status !== "ok");
  const methods = {};
  rows.forEach((row) => {
    methods[row.method] = (methods[row.method] || 0) + 1;
  });
  console.log(`clips: ${keys.size}, skipped (speechSynthesis fallback): ${skipped.length}`, methods);
  skipped.slice(0, 20).forEach((row) => console.log(`  skipped ${row.text}: ${row.detail}`));
  if (stale.length) console.log(`${stale.length} unused clip(s) ${prune ? "deleted" : "kept; run with --prune to delete"}`);
}

if (require.main === module) {
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
}

module.exports = { describeQuery, encodeMp3, latinReadings, parseProsody, planQuery, realizeAccents };
