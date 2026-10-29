"use strict";

// Regenerates pitch-accent-data.js from Kanjium's accents.txt
// (https://github.com/mifunetoshiro/kanjium, data/source_files/raw/accents.txt,
// CC BY-SA 4.0). Usage: node scripts/build-pitch-accents.js <path/to/accents.txt>
//
// Matching fails closed: an entry only gets an accent when Kanjium lists its
// exact headword + reading (or, for kana-only headwords, exactly one kanji
// variant with that reading, or a reviewed kanji spelling), every value is a
// plain mora index (unless review picked one part of a part-of-speech split),
// and the manual review below did not exclude it.

const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "..");
const outputPath = path.join(rootDir, "pitch-accent-data.js");
const vocabSources = ["n5-codex-vocab.json", "ayaya-n4-codex-vocab.json", "ayaya-n3-codex-vocab.json"];

// Manual review of every generated value against standard Tokyo accents.
const reviewedExclusions = {
  "n5-001": "ああ is the interjection (①); Kanjium's kana-only entry is the adverb sense",
  "n5-091": "ええ lists 1,2,0 without a sense split",
  "n4-195": "君（くん） is a suffix with no independent accent",
  "n4-426": "ちゃん is a suffix with no independent accent",
  "n4-222": "講義 is both ① and ③ in Tokyo usage (Wiktionary); Kanjium lists only ③",
  "n3-0187": "おや (interjection) lists 2,1 without a sense split from 親",
};
// Kanjium files the demonstrative senses under kanji forms; its kana-only
// これ / それ rows (1) belong to the interjection sense.
const reviewedKanjiForms = {
  "n5-268": "此れ",
  "n5-368": "其れ",
  // ひと月 is listed under its 一月 spelling (ひとつき ②, distinct from いちがつ).
  "n5-566": "一月",
  // Words the vocab writes in kana that Kanjium only lists under a kanji
  // spelling; each form was picked for the card's sense (かばん is 鞄, not 下番).
  // 背広 and 三 are listed only as 脊広 and ３.
  "n5-017": "彼処",
  "n5-022": "彼方",
  "n5-026": "彼方",
  "n5-028": "貴方",
  "n5-043": "彼",
  "n5-044": "良い",
  "n5-048": "如何",
  "n5-050": "幾つ",
  "n5-060": "何時",
  "n5-064": "何時も",
  "n5-071": "居る",
  "n5-075": "色々",
  "n5-081": "家",
  "n5-085": "煩い",
  "n5-111": "お祖父さん",
  "n5-122": "一昨年",
  "n5-129": "お祖母さん",
  "n5-133": "お巡りさん",
  "n5-153": "掛かる",
  "n5-166": "片仮名",
  "n5-172": "鞄",
  "n5-174": "被る",
  "n5-187": "可愛い",
  "n5-211": "綺麗",
  "n5-212": "瓩",
  "n5-213": "粁",
  "n5-218": "下さい",
  "n5-252": "此処",
  "n5-258": "此方",
  "n5-259": "此方",
  "n5-264": "此の",
  "n5-288": "３",
  "n5-293": "然し",
  "n5-334": "直ぐに",
  "n5-343": "為る",
  "n5-349": "脊広",
  "n5-361": "其処",
  "n5-362": "其方",
  "n5-363": "其方",
  "n5-365": "其の",
  "n5-366": "側",
  "n5-386": "縦",
  "n5-390": "煙草",
  "n5-410": "丁度",
  "n5-411": "一寸",
  "n5-419": "付ける",
  "n5-421": "詰まらない",
  "n5-430": "出来る",
  "n5-447": "如何して",
  "n5-457": "何処",
  "n5-461": "何方",
  "n5-462": "何方",
  "n5-463": "迚も",
  "n5-464": "何方",
  "n5-466": "何の",
  "n5-475": "何れ",
  "n5-477": "無い",
  "n5-483": "何故",
  "n5-494": "成る",
  "n5-497": "賑やか",
  "n5-524": "履く",
  "n5-592": "頁",
  "n5-624": "不味い",
  "n5-625": "又",
  "n5-626": "未だ",
  "n5-629": "真っ直ぐ",
  "n5-649": "皆",
  "n5-656": "米",
  "n5-675": "遣る",
  "n5-685": "良く",
  "n5-698": "立派",
  "n5-719": "有難う",
  "n5-722": "お目出度う",
  "n5-724": "今日は",
  "n5-725": "済みません",
  "n4-003": "挨拶",
  "n4-026": "虐める",
  "n4-030": "頂く",
  "n4-041": "伺う",
  "n4-046": "内",
  "n4-052": "旨い",
  "n4-055": "嬉しい",
  "n4-063": "お出でになる",
  "n4-066": "お陰",
  "n4-067": "可笑しい",
  "n4-080": "仰る",
  "n4-089": "御祭り",
  "n4-094": "玩具",
  "n4-137": "構う",
  "n4-160": "屹度",
  "n4-193": "呉れる",
  "n4-204": "怪我",
  "n4-212": "喧嘩",
  "n4-220": "斯う",
  "n4-241": "事",
  "n4-244": "この頃",
  "n4-249": "此れから",
  "n4-260": "ご馳走",
  "n4-261": "塵",
  "n4-287": "叱る",
  "n4-292": "確り",
  "n4-296": "暫く",
  "n4-352": "素晴らしい",
  "n4-356": "掏摸",
  "n4-359": "随分",
  "n4-375": "是非",
  "n4-387": "それ程",
  "n4-409": "偶に",
  "n4-419": "駄目",
  "n4-425": "些とも",
  "n4-466": "到頭",
  "n4-496": "為さる",
  "n4-499": "成る可く",
  "n4-500": "成る程",
  "n4-527": "喉",
  "n4-560": "髭",
  "n4-566": "酷い",
  "n4-589": "葡萄",
  "n4-603": "殆ど",
  "n4-605": "程々",
  "n4-614": "先ず",
  "n4-615": "又は",
  "n4-646": "勿論",
  "n4-650": "貰う",
  "n4-659": "矢張り",
  "n4-682": "宜しい",
  "n4-712": "瓦斯",
  "n4-715": "硝子",
  "n3-0082": "何時でも",
  "n3-0085": "何時までも",
  "n3-0112": "含嗽",
  "n3-0167": "お喋り",
  "n3-0191": "居る",
  "n3-0254": "可成",
  "n3-0267": "可愛らしい",
  "n3-0506": "此れ等",
  "n3-0545": "扨",
  "n3-0567": "然も",
  "n3-0619": "喋る",
  "n3-0818": "其処で",
  "n3-0826": "その内",
  "n3-0827": "其の儘",
  "n3-0830": "其れ其れ",
  "n3-0968": "辛い",
  "n3-1011": "如何しても",
  "n3-1030": "何処か",
  "n3-1043": "兎に角",
  "n3-1058": "噸",
  "n3-1071": "何故なら",
  "n3-1083": "何で",
  "n3-1121": "後",
  "n3-1301": "略",
  "n3-1315": "正に",
  "n3-1380": "若しも",
  "n3-1393": "軈て",
  "n3-1436": "止す",
  "n3-1479": "我儘",
  "n3-1483": "態と",
};
// Left unannotated on review: たくさん (n5-381) and ひらがな (n5-572) are ⓪ as
// well as ③ and Kanjium lists only ③; 余り, だんだん, いっぱい and 大事 have
// cards spanning senses Kanjium accents differently; ほど is a particle; and
// さっき and 缶 have no Kanjium row in their sense.

// Kanjium rows that split the accent by part of speech, e.g. 多分
// "(名;形動)0,(副)1". The card's sense picks one part; the row must still read
// exactly as reviewed, so a changed source fails instead of guessing.
const reviewedSenseAccents = {
  "n5-051": { form: "幾ら", row: "(名)1,(副)1,0", accent: "1", sense: "名: how much" },
  "n5-237": { form: "結構", row: "(名)0,3,(形動;副)1", accent: "1", sense: "形動・副: fine, quite" },
  "n5-358": { form: "然う", row: "(副)0,(感)1", accent: "0", sense: "副: so, that way" },
  "n5-391": { form: "多分", row: "(名;形動)0,(副)1", accent: "1", sense: "副: probably" },
  "n4-378": { form: "然う", row: "(副)0,(感)1", accent: "0", sense: "副: that way" },
  "n4-416": { form: "大体", row: "(副)0,(名)0,3", accent: "0", sense: "副・名 share ⓪" },
  "n4-438": { form: "都合", row: "(名)0,(副)1", accent: "0", sense: "名: circumstances" },
  "n4-467": { form: "遠く", row: "(名)3,(副)0", accent: "3", sense: "名: a distant place" },
  "n3-0079": { form: "一層", row: "(名)1,(副)0", accent: "0", sense: "副: all the more" },
  "n3-0098": { form: "苛々", row: "(副)1,(名)0", accent: "1", sense: "副・する: irritated" },
  "n3-0421": { form: "結局", row: "(名)4,0,(副)0", accent: "0", sense: "名・副 share ⓪" },
  "n3-0807": { form: "全体", row: "(名)0,(副)1", accent: "0", sense: "名: the whole" },
  "n3-0963": { form: "詰まり", row: "(名)3,(副)1", accent: "1", sense: "副: in other words" },
  "n3-1164": { form: "発明", row: "(名)0,(形動)2", accent: "0", sense: "名・する: invention" },
  "n3-1449": { form: "楽", row: "(名;形動)2,(名)1", accent: "2", sense: "形動: easy, comfortable" },
  "n3-1514": { form: "自体", row: "(名)1,(副)0,1", accent: "1", sense: "名: itself" },
};

const kanjiPattern = /[㐀-鿿々]/u;
const accentValuePattern = /^\d+(?:,\d+)*$/u;
const smallKanaPattern = /[ぁぃぅぇぉゃゅょゎァィゥェォャュョヮ]/u;

function moraCount(reading) {
  return [...reading].filter((character) => !smallKanaPattern.test(character)).length;
}

function loadAccents(sourcePath) {
  const accents = new Map();
  fs.readFileSync(sourcePath, "utf8")
    .split("\n")
    .forEach((line) => {
      const [word, reading, value] = line.replace(/\r$/u, "").split("\t");
      if (!word || value === undefined) return;
      const key = `${word}\t${reading || word}`;
      if (!accents.has(key)) accents.set(key, []);
      accents.get(key).push(value);
    });
  return accents;
}

function accentFor(entry, accents) {
  const lookup = (form) => {
    const values = accents.get(`${form}\t${entry.reading}`);
    if (!values || new Set(values).size !== 1) return null;
    return accentValuePattern.test(values[0]) ? values[0] : null;
  };

  const sense = reviewedSenseAccents[entry.id];
  if (sense) {
    const values = accents.get(`${sense.form}\t${entry.reading}`) || [];
    if (values.length !== 1 || values[0] !== sense.row) {
      throw new Error(`${entry.id} ${sense.form} row is ${values.join(" | ") || "missing"}, reviewed ${sense.row}`);
    }
    return sense.accent;
  }

  const reviewedForm = reviewedKanjiForms[entry.id];
  if (reviewedForm) return lookup(reviewedForm);

  const exact = accents.has(`${entry.headword}\t${entry.reading}`);
  if (exact) return lookup(entry.headword);
  if (kanjiPattern.test(entry.headword)) return null;

  const kanjiForms = new Set([
    ...(entry.variants || []),
    ...(entry.kanji_readings || [])
      .filter((item) => item.reading === entry.reading)
      .map((item) => item.form),
  ]);
  const candidates = new Set(
    [...kanjiForms]
      .filter((form) => kanjiPattern.test(form) && accents.has(`${form}\t${entry.reading}`))
      .map(lookup),
  );
  return candidates.size === 1 ? [...candidates][0] : null;
}

function main() {
  const sourcePath = process.argv[2];
  if (!sourcePath) {
    console.error("Usage: node scripts/build-pitch-accents.js <path/to/kanjium/accents.txt>");
    process.exitCode = 1;
    return;
  }

  const accents = loadAccents(sourcePath);
  const entries = {};
  vocabSources.forEach((file) => {
    JSON.parse(fs.readFileSync(path.join(rootDir, file), "utf8")).entries.forEach((entry) => {
      if (reviewedExclusions[entry.id]) return;
      const value = accentFor(entry, accents);
      if (!value) return;
      const moras = moraCount(entry.reading);
      const positions = value.split(",").map(Number);
      if (positions.some((position) => position > moras)) {
        throw new Error(`${entry.id} accent ${value} exceeds ${moras} morae`);
      }
      entries[entry.id] = positions;
    });
  });

  const meta = {
    source: "Kanjium accents.txt (https://github.com/mifunetoshiro/kanjium)",
    license: "CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/)",
    attribution:
      "Pitch accent notation provided by Uros O. through his free database, distributed by the Kanjium project.",
  };
  const lines = [
    "// Generated by scripts/build-pitch-accents.js; do not edit by hand.",
    "// Pitch accent data: Kanjium (https://github.com/mifunetoshiro/kanjium), CC BY-SA 4.0.",
    "// This file is a derivative of that data and is distributed under the same license.",
    "window.AYAYA_PITCH_ACCENT = {",
    ...Object.entries(meta).map(([key, value]) => `  ${key}: ${JSON.stringify(value)},`),
    "  entries: {",
    ...Object.entries(entries).map(([id, positions]) => `    "${id}": ${JSON.stringify(positions)},`),
    "  },",
    "};",
    "",
  ];
  fs.writeFileSync(outputPath, lines.join("\n"));
  console.log(`Wrote ${Object.keys(entries).length} pitch accents to pitch-accent-data.js`);
}

main();
