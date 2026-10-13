"use strict";

// Shared by scripts/build-audio.js and validation: which texts the app speaks,
// how a text maps to its clip file, and the mora form used to check that a
// generated clip says exactly the reviewed reading.

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const rootDir = path.resolve(__dirname, "..");
const audioManifestFile = "audio-manifest.js";
const audioReportFile = "audio/report.tsv";
const audioProsodyFile = "audio-prosody.tsv";

// Must stay identical to audioClipKey() in app.js (validation compares them).
// cyrb53: a fast synchronous 53-bit string hash, so the page can find a clip
// inside the tap handler without awaiting crypto.subtle (iOS needs play() there).
function audioClipKey(text) {
  let h1 = 0xdeadbeef;
  let h2 = 0x41c6ce57;
  for (let index = 0; index < text.length; index += 1) {
    const code = text.charCodeAt(index);
    h1 = Math.imul(h1 ^ code, 2654435761);
    h2 = Math.imul(h2 ^ code, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507);
  h1 ^= Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507);
  h2 ^= Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(36);
}

// Every text app.js can hand to speak(): front/primary speech, the kana-card
// sentence answer, and each example. Sources keep what the generator needs to
// pick the best synthesis input (kanji surface, ruby, pitch accent).
function collectSpokenTexts(runtime) {
  const texts = new Map();
  const add = (text, source) => {
    if (!text) return;
    if (!texts.has(text)) texts.set(text, []);
    texts.get(text).push(source);
  };

  [...runtime.kanaCards, ...runtime.vocabCards, ...runtime.grammarCards].forEach((card) => {
    const examples = card.examples || [];
    const exampleFor = (text) => examples.find((example) => (example.speech || example.ja) === text);
    const sourceFor = (text) => {
      const example = exampleFor(text);
      if (example) return { kind: "sentence", surface: example.ja, ruby: example.ruby };
      if (runtime.kanaCards.includes(card)) return { kind: "kana" };
      if (card.isVocab) {
        const surface = card.promptLang === "ja" ? card.prompt : card.answer;
        return { kind: "word", surface, sourceId: card.sourceId };
      }
      return { kind: "sentence", surface: text };
    };

    const primary = card.speech || card.sentenceAnswer || card.answer;
    add(primary, sourceFor(primary));
    add(card.frontSpeech, sourceFor(card.frontSpeech));
    if (card.speech) add(card.speech, sourceFor(card.speech));
    if (card.sentenceAnswer && !card.isGrammar && !card.isVocab) {
      add(card.sentenceAnswer, sourceFor(card.sentenceAnswer));
    }
    examples.forEach((example) => {
      const text = example.speech || example.ja;
      add(text, { kind: "sentence", surface: example.ja, ruby: example.ruby });
    });
  });
  return texts;
}

const smallKana = new Set([..."ァィゥェォャュョヮ"]);
const vowelRows = {
  ア: "アカガサザタダナハバパマヤラワァャヮ",
  イ: "イキギシジチヂニヒビピミリヰィ",
  ウ: "ウクグスズツヅヌフブプムユルゥュヴ",
  エ: "エケゲセゼテデネヘベペメレヱェ",
  オ: "オコゴソゾトドノホボポモヨロヲォョ",
};
const vowelOfKana = new Map();
Object.entries(vowelRows).forEach(([vowel, row]) => {
  [...row].forEach((character) => vowelOfKana.set(character, vowel));
});
const sameSoundKana = new Map([
  ["ヲ", "オ"],
  ["ヂ", "ジ"],
  ["ヅ", "ズ"],
  ["ヰ", "イ"],
  ["ヱ", "エ"],
]);
// Punctuation and symbols the voice does not pronounce.
const silentCharacters = /[、。，．,.!！?？・「」『』（）()〜～…\s　]/gu;

function toKatakana(text) {
  return [...text]
    .map((character) => {
      const code = character.codePointAt(0);
      return code >= 0x3041 && code <= 0x3096 ? String.fromCodePoint(code + 0x60) : character;
    })
    .join("");
}

// Splits katakana into morae (キャ is one, ン/ッ/ー are their own). Returns null
// when the text holds anything but kana, so unknown scripts fail closed.
function katakanaMoras(katakana) {
  const moras = [];
  for (const character of katakana) {
    if (smallKana.has(character) && moras.length) {
      moras[moras.length - 1] += character;
    } else if (vowelOfKana.has(character) || "ンッー".includes(character)) {
      moras.push(character);
    } else {
      return null;
    }
  }
  return moras;
}

function moraVowel(mora) {
  return vowelOfKana.get(mora[mora.length - 1]) || "";
}

// Spelling-level differences that are the same sound: ー vs the repeated vowel,
// えい/おう long vowels (せんせい = センセエ), を/ぢ/づ.
function normalizeMoras(moras) {
  const result = [];
  moras.forEach((mora) => {
    let value = [...mora].map((character) => sameSoundKana.get(character) || character).join("");
    const previousVowel = result.length ? moraVowel(result[result.length - 1]) : "";
    if (value === "ー" && previousVowel) value = previousVowel;
    else if (value === "イ" && previousVowel === "エ") value = "エ";
    else if (value === "ウ" && previousVowel === "オ") value = "オ";
    result.push(value);
  });
  return result;
}

// Reviewed reading → normalized morae, or null if it is not pure kana.
function readingMoras(reading, latinReadings = {}) {
  let text = reading;
  Object.entries(latinReadings).forEach(([latin, kana]) => {
    text = text.split(latin).join(kana);
  });
  const moras = katakanaMoras(toKatakana(text.replace(silentCharacters, "")));
  return moras ? normalizeMoras(moras) : null;
}

function loadAudioManifest(directory = rootDir) {
  const filePath = path.join(directory, audioManifestFile);
  if (!fs.existsSync(filePath)) return null;
  const context = { window: {} };
  vm.createContext(context);
  vm.runInContext(fs.readFileSync(filePath, "utf8"), context, { filename: audioManifestFile });
  return context.window.AYAYA_AUDIO || null;
}

// Reviewed Tokyo-accent prosody (text → notation) for clips whose VOICEVOX
// default accent, phrasing or intonation is wrong. See audio-prosody.tsv.
function loadAudioProsody(directory = rootDir) {
  const filePath = path.join(directory, audioProsodyFile);
  const prosody = new Map();
  if (!fs.existsSync(filePath)) return prosody;
  fs.readFileSync(filePath, "utf8")
    .split("\n")
    .filter((line) => line && !line.startsWith("#"))
    .slice(1)
    .forEach((line) => {
      const [text, notation] = line.split("\t");
      prosody.set(text, notation);
    });
  return prosody;
}

module.exports = {
  audioClipKey,
  audioManifestFile,
  audioProsodyFile,
  audioReportFile,
  collectSpokenTexts,
  katakanaMoras,
  loadAudioManifest,
  loadAudioProsody,
  normalizeMoras,
  readingMoras,
  toKatakana,
};
