(() => {
const sourceNotes = {
  jlpt: "JLPT 官方不发布固定的词汇/汉字/语法项目清单；本项目的语法覆盖按官方等级说明、题型说明、样题/官方问题集说明，以及常见 N5/N4/N3/N2 教学清单整理。",
  kana: "假名和发音规则按现代学习写法整理；进阶发音是代表性规则与外来音组合精选，不表示使用频率，也不是完整外来音表。单个假名「を」的键盘输入写作 wo；例句罗马字采用便于学习的 Hepburn 式 ASCII 写法：助词「は・へ・を」写作 wa・e・o，「ん」在同一词内的元音或 y 前写作 n'，长音保留假名拼写（如 ou、ei）或重复元音。",
  vocabulary: "N5/N4/N3/N2 标签是项目维护的教学分级，不是官方固定词表。卡片会区分词汇、量词、词缀、表达、复合词、派生形式、固定表达和搭配；纯语法 pattern 只在语法模块学习。规范词形、原始词形、变体和人工校订说明保存在随项目版本控制的数据文件中。",
  examples: "词汇与表达例句是为本项目编写和校订的短学习句，不作为语料库引文；无法可靠生成纯拉丁字母罗马音时，界面会明确隐藏该行而不显示混合脚本结果。",
};
// Kana rows and the kana-module cards live in kana-cards.js, loaded first.
const kanaCards = window.AYAYA_KANA_CARDS || {};
const kanaRows = Array.isArray(kanaCards.kanaRows) ? kanaCards.kanaRows : [];

const n5Entries = window.AYAYA_N5_CODEX_VOCAB?.entries || [];
const n5Words = n5Entries.map((entry) => [
  entry.id,
  entry.headword,
  entry.reading,
  entry.romaji,
  entry.meaning_zh,
  entry.examples?.[0]?.ja || "",
  entry.examples?.[0]?.zh || "",
  entry.examples || [],
  entry,
]);
const n4Entries = window.AYAYA_N4_CODEX_VOCAB?.entries || [];
const n4Words = n4Entries.map((entry) => [
  entry.id,
  entry.headword,
  entry.reading,
  entry.romaji,
  entry.meaning_zh,
  entry.examples?.[0]?.ja || "",
  entry.examples?.[0]?.zh || "",
  entry.examples || [],
  entry,
]);
const n3Entries = window.AYAYA_N3_CODEX_VOCAB?.entries || [];
const n3Words = n3Entries.map((entry) => [
  entry.id,
  entry.headword,
  entry.reading,
  entry.romaji,
  entry.meaning_zh,
  entry.examples?.[0]?.ja || "",
  entry.examples?.[0]?.zh || "",
  entry.examples || [],
  entry,
]);
const n2Entries = window.AYAYA_N2_CODEX_VOCAB?.entries || [];
const n2Words = n2Entries.map((entry) => [
  entry.id,
  entry.headword,
  entry.reading,
  entry.romaji,
  entry.meaning_zh,
  entry.examples?.[0]?.ja || "",
  entry.examples?.[0]?.zh || "",
  entry.examples || [],
  entry,
]);
const allVocabEntries = [...n5Entries, ...n4Entries, ...n3Entries, ...n2Entries];
const allVocabWords = [...n5Words, ...n4Words, ...n3Words, ...n2Words];
const grammarEntries = window.AYAYA_GRAMMAR_DATA?.entries || [];
// Adverbs and conjunctions that were also grammar cards (もう, きっと, それに)
// are taught by their vocab cards only; the old grammar card IDs become legacy
// aliases there so their progress carries over.
const retiredGrammarIdsByVocab = new Map();
(window.AYAYA_GRAMMAR_DATA?.retiredEntries || []).forEach(({ id, vocabId }) => {
  if (!retiredGrammarIdsByVocab.has(vocabId)) retiredGrammarIdsByVocab.set(vocabId, []);
  retiredGrammarIdsByVocab.get(vocabId).push(id);
});
// Reviewed Kanjium pitch accents keyed by vocab source ID; entries without a
// reliable value stay unannotated.
// The label is the accent nucleus position ("2", or "1/2" for two accepted
// accents); the page sets it as a superscript on the word or kana, since
// circled digits number the homophones.
const pitchAccentEntries = window.AYAYA_PITCH_ACCENT?.entries || {};

function pitchAccentLabel(sourceId) {
  const positions = pitchAccentEntries[sourceId];
  if (!Array.isArray(positions) || !positions.length) return "";
  if (!positions.every((position) => Number.isInteger(position) && position >= 0 && position <= 10)) {
    return "";
  }
  return positions.join("/");
}

// The part of speech set before a word's meaning (名 / 动 / 形动…), read from
// the entry's coarse part_of_speech ("suru-verb/noun" → "名·サ变"). Qualifiers
// such as demonstrative add nothing to the label, and "expression" is not a
// part of speech: the card's 表达 tag already says it, so a pure expression
// has no label. An unknown token hides the whole label rather than show part
// of it (validate.js rejects unknown tokens).
const partOfSpeechLabels = [
  ["noun", "名"],
  ["pronoun", "代"],
  ["numeral", "数"],
  ["counter", "量"],
  ["verb", "动"],
  ["i-adjective", "形"],
  ["na-adjective", "形动"],
  ["adverb", "副"],
  ["suru-verb", "サ变"],
  ["pre-noun", "连体"],
  ["conjunction", "接续"],
  ["interjection", "感叹"],
  ["particle", "助"],
  ["prefix", "前缀"],
  ["suffix", "后缀"],
];
const partOfSpeechQualifiers = new Set(["demonstrative", "interrogative", "pattern", "expression"]);

function partOfSpeechLabel(entry) {
  const tokens = String(entry?.part_of_speech || "")
    .split("/")
    .map((token) => token.trim().replace(/^indefinite\s+/u, ""))
    .filter((token) => token && !partOfSpeechQualifiers.has(token));
  const order = partOfSpeechLabels.map(([token]) => token);
  if (!tokens.length || tokens.some((token) => !order.includes(token))) return "";
  return [...new Set(tokens)]
    .sort((left, right) => order.indexOf(left) - order.indexOf(right))
    .map((token) => partOfSpeechLabels[order.indexOf(token)][1])
    .join("·");
}

// Homophone groups (homophone-data.js), most frequent word first: every word in
// a group lists the whole group, each with its gloss and accent, as its answer.
const vocabWordsById = new Map(allVocabWords.map((word) => [word[0], word]));
const homophoneGroupById = new Map();
(window.AYAYA_HOMOPHONES?.groups || []).forEach(([reading, members]) => {
  const group = members
    .filter(([sourceId]) => vocabWordsById.get(sourceId)?.[2] === reading)
    .map(([sourceId, gloss]) => ({
      sourceId,
      word: vocabWordsById.get(sourceId)[1],
      gloss,
      accent: pitchAccentLabel(sourceId),
      partOfSpeech: partOfSpeechLabel(vocabWordsById.get(sourceId)[8]),
    }));
  if (group.length < 2) return;
  group.forEach(({ sourceId }) => homophoneGroupById.set(sourceId, { reading, group }));
});

// The card's own word keeps its full meaning; the others show their gloss.
function homophonesFor(sourceId, meaning) {
  const entry = homophoneGroupById.get(sourceId);
  if (!entry) return {};
  return {
    homophoneKey: entry.reading,
    homophones: entry.group.map(({ sourceId: id, word, gloss, accent, partOfSpeech }) => ({
      word,
      ...(partOfSpeech ? { partOfSpeech } : {}),
      ...(id === sourceId ? { gloss: meaning, accent, isCurrent: true } : { gloss, accent }),
    })),
  };
}


const furiganaEntries = [
  [
    "日本語能力試験",
    "にほんごのうりょくしけん"
  ],
  [
    "電話番号",
    "でんわばんごう"
  ],
  [
    "お客さん",
    "おきゃくさん"
  ],
  [
    "日本語",
    "にほんご"
  ],
  [
    "中国語",
    "ちゅうごくご"
  ],
  [
    "朝ご飯",
    "あさごはん"
  ],
  [
    "昼ご飯",
    "ひるごはん"
  ],
  [
    "晩ご飯",
    "ばんごはん"
  ],
  [
    "食べ物",
    "たべもの"
  ],
  [
    "飲み物",
    "のみもの"
  ],
  [
    "会社員",
    "かいしゃいん"
  ],
  [
    "郵便局",
    "ゆうびんきょく"
  ],
  [
    "図書館",
    "としょかん"
  ],
  [
    "映画館",
    "えいがかん"
  ],
  [
    "美術館",
    "びじゅつかん"
  ],
  [
    "住所録",
    "じゅうしょろく"
  ],
  [
    "大丈夫",
    "だいじょうぶ"
  ],
  [
    "研究室",
    "けんきゅうしつ"
  ],
  [
    "お客様",
    "おきゃくさま"
  ],
  [
    "夏休み",
    "なつやすみ"
  ],
  [
    "冬休み",
    "ふゆやすみ"
  ],
  [
    "春休み",
    "はるやすみ"
  ],
  [
    "昼休み",
    "ひるやすみ"
  ],
  [
    "午前中",
    "ごぜんちゅう"
  ],
  [
    "一日中",
    "いちにちじゅう"
  ],
  [
    "甘い物",
    "あまいもの"
  ],
  [
    "辛い物",
    "からいもの"
  ],
  [
    "富士山",
    "ふじさん"
  ],
  [
    "北海道",
    "ほっかいどう"
  ],
  [
    "自転車",
    "じてんしゃ"
  ],
  [
    "飛行機",
    "ひこうき"
  ],
  [
    "地下鉄",
    "ちかてつ"
  ],
  [
    "自動車",
    "じどうしゃ"
  ],
  [
    "自動詞",
    "じどうし"
  ],
  [
    "他動詞",
    "たどうし"
  ],
  [
    "受身形",
    "うけみけい"
  ],
  [
    "使役形",
    "しえきけい"
  ],
  [
    "可能形",
    "かのうけい"
  ],
  [
    "意向形",
    "いこうけい"
  ],
  [
    "辞書形",
    "じしょけい"
  ],
  [
    "普通形",
    "ふつうけい"
  ],
  [
    "丁寧形",
    "ていねいけい"
  ],
  [
    "否定形",
    "ひていけい"
  ],
  [
    "条件形",
    "じょうけんけい"
  ],
  [
    "間違い",
    "まちがい"
  ],
  [
    "手続き",
    "てつづき"
  ],
  [
    "出かけ",
    "でかけ"
  ],
  [
    "英語",
    "えいご"
  ],
  [
    "田中",
    "たなか"
  ],
  [
    "山田",
    "やまだ"
  ],
  [
    "名前",
    "なまえ"
  ],
  [
    "映画",
    "えいが"
  ],
  [
    "四人",
    "よにん"
  ],
  [
    "一人",
    "ひとり"
  ],
  [
    "二人",
    "ふたり"
  ],
  [
    "公園",
    "こうえん"
  ],
  [
    "料理",
    "りょうり"
  ],
  [
    "上手",
    "じょうず"
  ],
  [
    "下手",
    "へた"
  ],
  [
    "お金",
    "おかね"
  ],
  [
    "九時",
    "くじ"
  ],
  [
    "毎日",
    "まいにち"
  ],
  [
    "毎朝",
    "まいあさ"
  ],
  [
    "毎晩",
    "まいばん"
  ],
  [
    "毎週",
    "まいしゅう"
  ],
  [
    "六時",
    "ろくじ"
  ],
  [
    "音楽",
    "おんがく"
  ],
  [
    "何時",
    "なんじ"
  ],
  [
    "切符",
    "きっぷ"
  ],
  [
    "切手",
    "きって"
  ],
  [
    "手紙",
    "てがみ"
  ],
  [
    "旅行",
    "りょこう"
  ],
  [
    "問題",
    "もんだい"
  ],
  [
    "質問",
    "しつもん"
  ],
  [
    "天気",
    "てんき"
  ],
  [
    "気分",
    "きぶん"
  ],
  [
    "元気",
    "げんき"
  ],
  [
    "銀行",
    "ぎんこう"
  ],
  [
    "病院",
    "びょういん"
  ],
  [
    "学校",
    "がっこう"
  ],
  [
    "先生",
    "せんせい"
  ],
  [
    "学生",
    "がくせい"
  ],
  [
    "生徒",
    "せいと"
  ],
  [
    "友達",
    "ともだち"
  ],
  [
    "家族",
    "かぞく"
  ],
  [
    "子供",
    "こども"
  ],
  [
    "日本",
    "にほん"
  ],
  [
    "中国",
    "ちゅうごく"
  ],
  [
    "会社",
    "かいしゃ"
  ],
  [
    "部屋",
    "へや"
  ],
  [
    "新聞",
    "しんぶん"
  ],
  [
    "雑誌",
    "ざっし"
  ],
  [
    "野菜",
    "やさい"
  ],
  [
    "果物",
    "くだもの"
  ],
  [
    "今日",
    "きょう"
  ],
  [
    "明日",
    "あした"
  ],
  [
    "昨日",
    "きのう"
  ],
  [
    "時間",
    "じかん"
  ],
  [
    "勉強",
    "べんきょう"
  ],
  [
    "復習",
    "ふくしゅう"
  ],
  [
    "練習",
    "れんしゅう"
  ],
  [
    "説明",
    "せつめい"
  ],
  [
    "確認",
    "かくにん"
  ],
  [
    "連絡",
    "れんらく"
  ],
  [
    "予約",
    "よやく"
  ],
  [
    "準備",
    "じゅんび"
  ],
  [
    "会議",
    "かいぎ"
  ],
  [
    "受付",
    "うけつけ"
  ],
  [
    "入口",
    "いりぐち"
  ],
  [
    "出口",
    "でぐち"
  ],
  [
    "右側",
    "みぎがわ"
  ],
  [
    "左側",
    "ひだりがわ"
  ],
  [
    "場合",
    "ばあい"
  ],
  [
    "必要",
    "ひつよう"
  ],
  [
    "予定",
    "よてい"
  ],
  [
    "約束",
    "やくそく"
  ],
  [
    "規則",
    "きそく"
  ],
  [
    "資料",
    "しりょう"
  ],
  [
    "書類",
    "しょるい"
  ],
  [
    "料金",
    "りょうきん"
  ],
  [
    "現金",
    "げんきん"
  ],
  [
    "返事",
    "へんじ"
  ],
  [
    "電話",
    "でんわ"
  ],
  [
    "番号",
    "ばんごう"
  ],
  [
    "住所",
    "じゅうしょ"
  ],
  [
    "大切",
    "たいせつ"
  ],
  [
    "大変",
    "たいへん"
  ],
  [
    "簡単",
    "かんたん"
  ],
  [
    "静か",
    "しずか"
  ],
  [
    "親切",
    "しんせつ"
  ],
  [
    "便利",
    "べんり"
  ],
  [
    "有名",
    "ゆうめい"
  ],
  [
    "安全",
    "あんぜん"
  ],
  [
    "危険",
    "きけん"
  ],
  [
    "失敗",
    "しっぱい"
  ],
  [
    "努力",
    "どりょく"
  ],
  [
    "成功",
    "せいこう"
  ],
  [
    "合格",
    "ごうかく"
  ],
  [
    "試験",
    "しけん"
  ],
  [
    "宿題",
    "しゅくだい"
  ],
  [
    "授業",
    "じゅぎょう"
  ],
  [
    "教室",
    "きょうしつ"
  ],
  [
    "社長",
    "しゃちょう"
  ],
  [
    "部長",
    "ぶちょう"
  ],
  [
    "店員",
    "てんいん"
  ],
  [
    "休み",
    "やすみ"
  ],
  [
    "今朝",
    "けさ"
  ],
  [
    "今晩",
    "こんばん"
  ],
  [
    "今週",
    "こんしゅう"
  ],
  [
    "今月",
    "こんげつ"
  ],
  [
    "今年",
    "ことし"
  ],
  [
    "来週",
    "らいしゅう"
  ],
  [
    "来月",
    "らいげつ"
  ],
  [
    "来年",
    "らいねん"
  ],
  [
    "先週",
    "せんしゅう"
  ],
  [
    "先月",
    "せんげつ"
  ],
  [
    "去年",
    "きょねん"
  ],
  [
    "夕方",
    "ゆうがた"
  ],
  [
    "午前",
    "ごぜん"
  ],
  [
    "午後",
    "ごご"
  ],
  [
    "夜中",
    "よなか"
  ],
  [
    "途中",
    "とちゅう"
  ],
  [
    "食事",
    "しょくじ"
  ],
  [
    "外食",
    "がいしょく"
  ],
  [
    "和食",
    "わしょく"
  ],
  [
    "洋食",
    "ようしょく"
  ],
  [
    "味噌",
    "みそ"
  ],
  [
    "大豆",
    "だいず"
  ],
  [
    "葡萄",
    "ぶどう"
  ],
  [
    "砂糖",
    "さとう"
  ],
  [
    "牛乳",
    "ぎゅうにゅう"
  ],
  [
    "京都",
    "きょうと"
  ],
  [
    "大阪",
    "おおさか"
  ],
  [
    "東京",
    "とうきょう"
  ],
  [
    "奈良",
    "なら"
  ],
  [
    "神社",
    "じんじゃ"
  ],
  [
    "本屋",
    "ほんや"
  ],
  [
    "花屋",
    "はなや"
  ],
  [
    "肉屋",
    "にくや"
  ],
  [
    "場所",
    "ばしょ"
  ],
  [
    "道路",
    "どうろ"
  ],
  [
    "階段",
    "かいだん"
  ],
  [
    "財布",
    "さいふ"
  ],
  [
    "荷物",
    "にもつ"
  ],
  [
    "上着",
    "うわぎ"
  ],
  [
    "帽子",
    "ぼうし"
  ],
  [
    "眼鏡",
    "めがね"
  ],
  [
    "時計",
    "とけい"
  ],
  [
    "電車",
    "でんしゃ"
  ],
  [
    "後ろ",
    "うしろ"
  ],
  [
    "近く",
    "ちかく"
  ],
  [
    "遠く",
    "とおく"
  ],
  [
    "椅子",
    "いす"
  ],
  [
    "本棚",
    "ほんだな"
  ],
  [
    "お腹",
    "おなか"
  ],
  [
    "漢字",
    "かんじ"
  ],
  [
    "言葉",
    "ことば"
  ],
  [
    "意味",
    "いみ"
  ],
  [
    "文法",
    "ぶんぽう"
  ],
  [
    "発音",
    "はつおん"
  ],
  [
    "読解",
    "どっかい"
  ],
  [
    "聴解",
    "ちょうかい"
  ],
  [
    "答え",
    "こたえ"
  ],
  [
    "理由",
    "りゆう"
  ],
  [
    "結果",
    "けっか"
  ],
  [
    "経験",
    "けいけん"
  ],
  [
    "習慣",
    "しゅうかん"
  ],
  [
    "生活",
    "せいかつ"
  ],
  [
    "仕事",
    "しごと"
  ],
  [
    "作文",
    "さくぶん"
  ],
  [
    "招待",
    "しょうたい"
  ],
  [
    "紹介",
    "しょうかい"
  ],
  [
    "降り",
    "おり"
  ],
  [
    "卵",
    "たまご"
  ],
  [
    "寺",
    "てら"
  ],
  [
    "駅",
    "えき"
  ],
  [
    "店",
    "みせ"
  ],
  [
    "道",
    "みち"
  ],
  [
    "橋",
    "はし"
  ],
  [
    "川",
    "かわ"
  ],
  [
    "海",
    "うみ"
  ],
  [
    "山",
    "やま"
  ],
  [
    "空",
    "そら"
  ],
  [
    "雨",
    "あめ"
  ],
  [
    "雪",
    "ゆき"
  ],
  [
    "風",
    "かぜ"
  ],
  [
    "桜",
    "さくら"
  ],
  [
    "花",
    "はな"
  ],
  [
    "鳥",
    "とり"
  ],
  [
    "犬",
    "いぬ"
  ],
  [
    "猫",
    "ねこ"
  ],
  [
    "鍵",
    "かぎ"
  ],
  [
    "靴",
    "くつ"
  ],
  [
    "服",
    "ふく"
  ],
  [
    "私",
    "わたし"
  ],
  [
    "人",
    "ひと"
  ],
  [
    "父",
    "ちち"
  ],
  [
    "母",
    "はは"
  ],
  [
    "兄",
    "あに"
  ],
  [
    "姉",
    "あね"
  ],
  [
    "弟",
    "おとうと"
  ],
  [
    "妹",
    "いもうと"
  ],
  [
    "家",
    "いえ"
  ],
  [
    "机",
    "つくえ"
  ],
  [
    "上",
    "うえ"
  ],
  [
    "下",
    "した"
  ],
  [
    "前",
    "まえ"
  ],
  [
    "後",
    "あと"
  ],
  [
    "右",
    "みぎ"
  ],
  [
    "左",
    "ひだり"
  ],
  [
    "中",
    "なか"
  ],
  [
    "外",
    "そと"
  ],
  [
    "横",
    "よこ"
  ],
  [
    "隣",
    "となり"
  ],
  [
    "窓",
    "まど"
  ],
  [
    "戸",
    "と"
  ],
  [
    "門",
    "もん"
  ],
  [
    "箱",
    "はこ"
  ],
  [
    "紙",
    "かみ"
  ],
  [
    "皿",
    "さら"
  ],
  [
    "水",
    "みず"
  ],
  [
    "茶",
    "ちゃ"
  ],
  [
    "肉",
    "にく"
  ],
  [
    "魚",
    "さかな"
  ],
  [
    "体",
    "からだ"
  ],
  [
    "頭",
    "あたま"
  ],
  [
    "顔",
    "かお"
  ],
  [
    "目",
    "め"
  ],
  [
    "耳",
    "みみ"
  ],
  [
    "口",
    "くち"
  ],
  [
    "鼻",
    "はな"
  ],
  [
    "歯",
    "は"
  ],
  [
    "手",
    "て"
  ],
  [
    "足",
    "あし"
  ],
  [
    "背",
    "せ"
  ],
  [
    "心",
    "こころ"
  ],
  [
    "行",
    "い"
  ],
  [
    "来",
    "き"
  ],
  [
    "帰",
    "かえ"
  ],
  [
    "食",
    "た"
  ],
  [
    "飲",
    "の"
  ],
  [
    "見",
    "み"
  ],
  [
    "聞",
    "き"
  ],
  [
    "読",
    "よ"
  ],
  [
    "書",
    "か"
  ],
  [
    "話",
    "はな"
  ],
  [
    "買",
    "か"
  ],
  [
    "会",
    "あ"
  ],
  [
    "寝",
    "ね"
  ],
  [
    "起",
    "お"
  ],
  [
    "歩",
    "ある"
  ],
  [
    "走",
    "はし"
  ],
  [
    "遊",
    "あそ"
  ],
  [
    "働",
    "はたら"
  ],
  [
    "休",
    "やす"
  ],
  [
    "使",
    "つか"
  ],
  [
    "作",
    "つく"
  ],
  [
    "開",
    "あ"
  ],
  [
    "閉",
    "し"
  ],
  [
    "入",
    "はい"
  ],
  [
    "出",
    "で"
  ],
  [
    "持",
    "も"
  ],
  [
    "待",
    "ま"
  ],
  [
    "貸",
    "か"
  ],
  [
    "借",
    "か"
  ],
  [
    "返",
    "かえ"
  ],
  [
    "教",
    "おし"
  ],
  [
    "習",
    "なら"
  ],
  [
    "覚",
    "おぼ"
  ],
  [
    "忘",
    "わす"
  ],
  [
    "決",
    "き"
  ],
  [
    "続",
    "つづ"
  ],
  [
    "始",
    "はじ"
  ],
  [
    "終",
    "お"
  ],
  [
    "降",
    "ふ"
  ],
  [
    "晴",
    "は"
  ],
  [
    "曇",
    "くも"
  ],
  [
    "泣",
    "な"
  ],
  [
    "笑",
    "わら"
  ],
  [
    "洗",
    "あら"
  ],
  [
    "磨",
    "みが"
  ],
  [
    "切",
    "き"
  ],
  [
    "着",
    "き"
  ],
  [
    "脱",
    "ぬ"
  ],
  [
    "乗",
    "の"
  ],
  [
    "渡",
    "わた"
  ],
  [
    "曲",
    "ま"
  ],
  [
    "押",
    "お"
  ],
  [
    "引",
    "ひ"
  ],
  [
    "急",
    "いそ"
  ],
  [
    "遅",
    "おそ"
  ],
  [
    "早",
    "はや"
  ],
  [
    "速",
    "はや"
  ],
  [
    "強",
    "つよ"
  ],
  [
    "弱",
    "よわ"
  ],
  [
    "暑",
    "あつ"
  ],
  [
    "寒",
    "さむ"
  ],
  [
    "暖",
    "あたた"
  ],
  [
    "涼",
    "すず"
  ],
  [
    "新",
    "あたら"
  ],
  [
    "古",
    "ふる"
  ],
  [
    "高",
    "たか"
  ],
  [
    "安",
    "やす"
  ],
  [
    "広",
    "ひろ"
  ],
  [
    "狭",
    "せま"
  ],
  [
    "長",
    "なが"
  ],
  [
    "短",
    "みじか"
  ],
  [
    "重",
    "おも"
  ],
  [
    "軽",
    "かる"
  ],
  [
    "明",
    "あか"
  ],
  [
    "暗",
    "くら"
  ],
  [
    "悪",
    "わる"
  ],
  [
    "良",
    "よ"
  ],
  [
    "楽",
    "たの"
  ],
  [
    "難",
    "むずか"
  ],
  [
    "易",
    "やさ"
  ],
  [
    "好",
    "す"
  ],
  [
    "嫌",
    "きら"
  ],
  [
    "怖",
    "こわ"
  ],
  [
    "恥",
    "は"
  ],
  [
    "欲",
    "ほ"
  ],
  [
    "眠",
    "ねむ"
  ],
  [
    "痛",
    "いた"
  ],
  [
    "忙",
    "いそが"
  ],
  [
    "若",
    "わか"
  ]
].sort((a, b) => b[0].length - a[0].length);


function stripSentencePeriods(text = "") {
  return String(text).trim().replace(/[。．.]+$/g, "");
}

function kanaSurfaceToHiragana(text) {
  return text.replace(/[\u30a1-\u30f6]/g, (char) =>
    String.fromCharCode(char.charCodeAt(0) - 0x60),
  );
}

// Loanword digraphs that are not kana cards but occur in the example corpus
// (パーティー, ファックス, フィルム, フォーク, チェック, カフェ, ジェット機,
// シェークスピア, ストップウォッチ), spelled in standard Hepburn.
const loanwordKanaRomajiRows = [
  ["てぃ", "ti"],
  ["ふぁ", "fa"],
  ["ふぃ", "fi"],
  ["ふぇ", "fe"],
  ["ふぉ", "fo"],
  ["ちぇ", "che"],
  ["しぇ", "she"],
  ["じぇ", "je"],
  ["うぉ", "wo"],
];
const kanaRomajiRows = kanaRows
  .flatMap(([hiragana, katakana, romaji]) => [
    [kanaSurfaceToHiragana(hiragana), romaji],
    [kanaSurfaceToHiragana(katakana), romaji],
  ])
  .concat(loanwordKanaRomajiRows)
  .sort((left, right) => right[0].length - left[0].length);

const kanjiCharacterPattern = /[\u3400-\u9fff]/u;
const affixMarkerPattern = /[~〜～]/u;

// These exact surface forms were reviewed against the frozen example corpus.
// Keeping context-dependent forms per entry avoids guessing a conjugation
// class from the dictionary ending.
const reviewedPreferredReadingsByEntryId = new Map([
  ["n5-009", [["開き", "あき"]]],
  ["n5-137", [["降り", "おり"]]],
  ["n5-192", [["消え", "きえ"]]],
  ["n5-230", [
    ["来ます", "きます"],
    ["来ました", "きました"],
    ["来ません", "きません"],
    ["来て", "きて"],
    ["来た", "きた"],
    ["来ない", "こない"],
    ["来なかった", "こなかった"],
    ["来られ", "こられ"],
    ["来れば", "くれば"],
    ["来よう", "こよう"],
  ]],
  ["n5-315", [["一年中", "いちねんじゅう"], ["世界中", "せかいじゅう"]]],
  ["n5-385", [["立っ", "たっ"], ["人が", "ひとが"]]],
  ["n5-500", [
    ["十一日", "じゅういちにち"],
    ["二十五日", "にじゅうごにち"],
    ["何日", "なんにち"],
  ]],
  ["n5-588", [["降り", "ふり"], ["降っ", "ふっ"]]],
  ["n5-622", [
    ["三年前", "さんねんまえ"],
    ["十年前", "じゅうねんまえ"],
    ["二時間前", "にじかんまえ"],
  ]],
  ["n4-116", [["掛かっ", "かかっ"]]],
  ["n4-569", [["開き", "ひらき"]]],
  ["n4-644", [["申し", "もうし"], ["一度申し", "いちどもうし"]]],
  ["n4-694", [["沸き", "わき"], ["拍手", "はくしゅ"]]],
  ["n4-764", [["下町", "したまち"], ["港町", "みなとまち"]]],
]);

function isKanjiCharacter(character = "") {
  return kanjiCharacterPattern.test(character);
}

function addReadingEntry(entries, seen, surface, reading) {
  const cleanSurface = surface?.trim();
  const cleanReading = reading?.split(";")[0]?.trim();
  const key = `${cleanSurface}:${cleanReading}`;
  if (!cleanSurface || !cleanReading || seen.has(key)) return;
  seen.add(key);
  entries.push([cleanSurface, cleanReading]);
}

function readingEntriesForVocabEntry(entry) {
  const entries = [];
  const seen = new Set();

  const formReadings = new Map(
    (entry?.kanji_readings || []).map(({ form, reading }) => [form?.trim(), reading?.trim()]),
  );
  const surfaces = [
    entry?.headword,
    ...(entry?.variants || []),
    ...(entry?.kanji_readings || []).map(({ form }) => form),
  ];

  surfaces.forEach((surface) => {
    const cleanSurface = surface?.trim();
    if (!cleanSurface || !kanjiCharacterPattern.test(cleanSurface)) return;

    const reading = formReadings.get(cleanSurface) || entry?.reading;
    addReadingEntry(entries, seen, cleanSurface, reading);
  });

  (reviewedPreferredReadingsByEntryId.get(entry?.id) || []).forEach(([surface, reading]) =>
    addReadingEntry(entries, seen, surface, reading),
  );

  return entries.sort((left, right) => right[0].length - left[0].length);
}

const contextSpecificReadings = [
  ["九時", "くじ"],
  ["九月", "くがつ"],
  ["日本人", "にほんじん"],
  ["中国人", "ちゅうごくじん"],
  ["あの人", "あのひと"],
  ["思い出", "おもいで"],
  ["調子", "ちょうし"],
  ["気温", "きおん"],
  ["小屋", "こや"],
  ["温かい", "あたたかい"],
  ["区役所", "くやくしょ"],
  ["市役所", "しやくしょ"],
  ["木製", "もくせい"],
  ["物語", "ものがたり"],
  ["正直", "しょうじき"],
  ["小学生", "しょうがくせい"],
  ["明治", "めいじ"],
  ["明治時代", "めいじじだい"],
  ["十分間", "じゅっぷんかん"],
  // 十分 means "ten minutes" in these reviewed examples (their translations say
  // 十分钟); every other 十分 in the corpus is じゅうぶん ("enough").
  ["十分かかり", "じゅっぷんかかり"],
  ["十分くらい", "じゅっぷんくらい"],
  ["十分ほど", "じゅっぷんほど"],
  ["十分待ちました", "じゅっぷんまちました"],
  ["十分以内", "じゅっぷんいない"],
  ["大体十分", "だいたいじゅっぷん"],
  ["集合場所", "しゅうごうばしょ"],
  ["食文化", "しょくぶんか"],
  ["正確さ", "せいかくさ"],
  ["東京都", "とうきょうと"],
  ["都道府県", "とどうふけん"],
  ["都庁", "とちょう"],
  ["新宿", "しんじゅく"],
  ["降り出しました", "ふりだしました"],
  ["話しました", "はなしました"],
  ["悲しかった", "かなしかった"],
  ["作りたい", "つくりたい"],
  ["聞きました", "ききました"],
  ["建物", "たてもの"],
  ["時代", "じだい"],
  ["建てられました", "たてられました"],
  ["駅", "えき"],
  ["店", "みせ"],
  ["雨", "あめ"],
  ["急に", "きゅうに"],
  ["南口", "みなみぐち"],
  ["日本", "にほん"],
  ["興味", "きょうみ"],
  ["速さ", "はやさ"],
  ["必要", "ひつよう"],
  ["仕事", "しごと"],
  ["両方", "りょうほう"],
  ["歩いて", "あるいて"],
  ["行きます", "いきます"],
  ["机", "つくえ"],
  ["木", "き"],
  ["心", "こころ"],
  ["買いました", "かいました"],
  ["市民", "しみん"],
  ["意見", "いけん"],
  ["留学", "りゅうがく"],
  ["毎日復習", "まいにちふくしゅう"],
  ["毎日", "まいにち"],
  ["復習", "ふくしゅう"],
  ["大雪", "おおゆき"],
  ["混んで", "こんで"],
  ["体調", "たいちょう"],
  ["百人", "ひゃくにん"],
  ["一時間", "いちじかん"],
  ["五冊", "ごさつ"],
  // Numerals before a kana counter can geminate (一か月 → いっかげつ); these
  // keep 一 / 六 / 月 from falling back to their standalone readings.
  ["一か月", "いっかげつ"],
  ["一か", "いっか"],
  ["三か月", "さんかげつ"],
  ["六か月", "ろっかげつ"],
  ["六か", "ろっか"],
  ["十二か月", "じゅうにかげつ"],
  ["一そう", "いっそう"],
  // The noun 光 is ひかり, but the verb 光る conjugates as ひかっ-.
  ["光って", "ひかって"],
  ["光っ", "ひかっ"],
  // Inflected forms whose Kanji would otherwise take the reading of a
  // different word: 行う (not 行く), 思い出す (not 思い出), 間に合う (not 間),
  // 召し上がる (not 上), and 開かれる (held/opened, not 開く as あく).
  ["行われ", "おこなわれ"],
  ["思い出す", "おもいだす"],
  ["思い出さ", "おもいださ"],
  ["思い出し", "おもいだし"],
  ["思い出せ", "おもいだせ"],
  ["間に合", "まにあ"],
  ["召し上が", "めしあが"],
  // 教わる is not a vocab entry, so 教 would otherwise take 教える's おし.
  ["教わり", "おそわり"],
  // ページを開いてください opens a book (transitive ひらく), unlike ドアが開く.
  ["開いてください", "ひらいてください"],
  // 上がる is not a vocab entry, so without these 上 falls back to the noun うえ.
  ["上がっ", "あがっ"],
  ["上がり", "あがり"],
  ["開かれ", "ひらかれ"],
  // 明日 has multiple readings; these reviewed beginner examples use あした.
  ["明日\ue000", "あした\ue000"],
  // markReviewedPronunciations replaces the object particle before readings
  // are applied, so this exact marked form preserves 何を → なにを.
  ["何\ue002", "なに\ue002"],
];

// Exact non-dictionary surfaces that occur in the frozen examples. These are
// data, not conjugation rules: adding or changing an example invalidates the
// pronunciation corpus lock below and requires this list to be reviewed again.
const reviewedExactReadings = `
いい加減|いいかげん
お子さん|おこさん
お寺|おてら
お手伝い|おてつだい
お世話|おせわ
お先に|おさきに
お待ち|おまち
お伝え|おつたえ
お湯|おゆ
この先|このさき
この辺|このへん
の通り|のとおり
もう一度|もういちど
もう少し|もうすこし
移り|うつり
違い|ちがい
育て|そだて
引き|ひき
引っ越し|ひっこし
運び|はこび
泳ぎ|およぎ
汚れ|よごれ
押し|おし
押して|おして
下がり|さがり
下げ|さげ
下り|おり
下る|くだる
下ろします|おろします
下さい|ください
何でも|なんでも
何と|なんと
何か|なにか
何が|なにが
何も|なにも
会える|あえる
回り|まわり
上り|のぼり
覚え|おぼえ
覚める|さめる
掛け|かけ
割れ|われ
割れ物|われもの
滑らか|なめらか
滑り|すべり
乾き|かわき
寒さ|さむさ
喜び|よろこび
寄り|より
祈り|いのり
急ぎ|いそぎ
泣き|なき
泣き声|なきごえ
教え|おしえ
驚き|おどろき
勤め|つとめ
近づく|ちかづく
苦しみ|くるしみ
兄さん|にいさん
迎え|むかえ
決まって|きまって
決め|きめ
建て|たて
見え|みえ
見舞い|みまい
言い方|いいかた
後で|あとで
向かい|むかい
考え|かんがえ
考え方|かんがえかた
行い|おこない
行き|いき
行き先|いきさき
光り|ひかり
高め|たかめ
合わせ|あわせ
差し|さし
座り|すわり
済み|すみ
祭り|まつり
咲き|さき
作り|つくり
残り|のこり
使い|つかい
使い方|つかいかた
使える|つかえる
始まり|はじまり
始めて|はじめて
姉さん|ねえさん
子ども|こども
思い|おもい
止まり|とまり
止め|とめ
持ち|もち
写し|うつし
借り|かり
若く|わかく
取り|とり
取り消し|とりけし
手すり|てすり
手のひら|てのひら
手洗い|てあらい
手伝い|てつだい
受け|うけ
受け取り|うけとり
受け付け|うけつけ
終わらせる|おわらせる
習い|ならい
集まり|あつまり
集め|あつめ
柔らか|やわらか
祝う|いわう
出し|だし
出さなくて|ださなくて
書き|かき
書き込み|かきこみ
書き方|かきかた
勝ち|かち
消し|けし
焼き|やき
焼け|やけ
笑い|わらい
笑える|わらえる
上げ|あげ
乗り|のり
飾り|かざり
色々|いろいろ
触り|さわり
心から|こころから
召し上がって|めしあがって
正しく|ただしく
生き|いき
生まれ|うまれ
切り|きり
切れ|きれ
先に|さきに
洗い|あらい
選び|えらび
早く|はやく
早め|はやめ
走り|はしり
送り|おくり
騒ぎ|さわぎ
増え|ふえ
続き|つづき
多く|おおく
足り|たり
足し|たし
打ち|うち
待ち|まち
貸し|かし
代え|かえ
大きく|おおきく
暖か|あたたか
知らせ|しらせ
遅れ|おくれ
調べ|しらべ
直し|なおし
通い|かよい
漬け|つけ
釣り|つり
締め|しめ
締めて|しめて
締め切り|しめきり
伝え|つたえ
塗り|ぬり
渡し|わたし
渡り|わたり
登り|のぼり
空いて|あいて
盗み|ぬすみ
逃げ|にげ
働き|はたらき
動き|うごき
読み|よみ
読み方|よみかた
届け|とどけ
入り|はいり
入れ|いれ
濡れ|ぬれ
買い|かい
買い方|かいかた
買える|かえる
売り|うり
売り上げ|うりあげ
泊まり|とまり
髪の毛|かみのけ
比べ|くらべ
疲れ|つかれ
付き|つき
付け|つけ
負け|まけ
払い|はらい
分かれ|わかれ
分け|わけ
聞きにくい|ききにくい
閉じ|とじ
並び|ならび
並べて|ならべて
別に|べつに
別れ|わかれ
変え|かえ
変わった|かわった
変わって|かわって
変わり|かわり
片付け|かたづけ
返し|かえし
歩き|あるき
暮らし|くらし
暮れ|くれ
忘れ|わすれ
本当に|ほんとうに
磨き|みがき
眠り|ねむり
鳴き|なき
鳴り|なり
木の葉|きのは
戻り|もどり
揺れ|ゆれ
頼み|たのみ
落ち|おち
落とし|おとし
立ち|たち
立て|たて
良い|よい
良く|よく
冷え|ひえ
冷や|ひや
連れ|つれ
話し合い|はなしあい
話し方|はなしかた
分かった|わかった
分かってきました|わかってきました
分からない|わからない
分からなくて|わからなくて
分からなければ|わからなければ
分かりました|わかりました
分かります|わかります
分かりません|わかりません
分かりませんでした|わかりませんでした
分かりやすい|わかりやすい
分かりやすく|わかりやすく
話さないで|はなさないで
話したい|はなしたい
話して|はなして
話しました|はなしました
話しましょう|はなしましょう
話します|はなします
話しやすい|はなしやすい
話せる|はなせる
住みたい|すみたい
住みやすい|すみやすい
住んでいた|すんでいた
住んでいました|すんでいました
住んでいます|すんでいます
住んでいる|すんでいる
撮っています|とっています
撮って|とって
撮らないで|とらないで
撮りました|とりました
撮りましょう|とりましょう
撮ります|とります
撮れます|とれます
言いました|いいました
言いません|いいません
言いづらい|いいづらい
言った|いった
言って|いって
言わずに|いわずに
言わないで|いわないで
言わないまま|いわないまま
言われています|いわれています
言われました|いわれました
合いました|あいました
合います|あいます
合いません|あいません
合っています|あっています
合って|あって
合わない|あわない
座っています|すわっています
座って|すわって
座りました|すわりました
座ります|すわります
座れません|すわれません
呼ばれて|よばれて
呼びました|よびました
呼びます|よびます
呼んでいます|よんでいます
呼んで|よんで
探しています|さがしています
探しました|さがしました
探します|さがします
青く|あおく
赤く|あかく
暖かく|あたたかく
厚く|あつく
忙しくて|いそがしくて
痛くて|いたくて
重くて|おもくて
黄色く|きいろく
丸く|まるく
易しかった|やさしかった
安かった|やすかった
担当者|たんとうしゃ
佐藤|さとう
豊か|ゆたか
`.trim().split("\n").map((line) => line.split("|"));

// Reviewed per-sentence readings from example-readings.js: each span lists its
// words as [surface, reading]; they apply only to that exact example sentence.
const exampleReadingSpansByText = new Map(
  Object.entries(window.AYAYA_EXAMPLE_READINGS?.entries || {}).map(([text, spans]) => [
    text,
    spans.map((span) => span.split(" ").map((word) => word.split("|"))),
  ]),
);

// The word division one sentence's reviewed spans use for ruby, keyed by span.
function exampleReadingSplitFor(text, surface) {
  const words = (exampleReadingSpansByText.get(text) || []).find(
    (span) => span.map(([word]) => word).join("") === surface,
  );
  return words
    ? { surfaces: words.map(([word]) => word), readings: words.map(([, reading]) => reading) }
    : null;
}

function exampleReadingsForText(text) {
  return (exampleReadingSpansByText.get(text) || []).map((words) => [
    words.map(([surface]) => surface).join(""),
    words.map(([, reading]) => reading).join(""),
  ]);
}

// N3 headwords whose reading must not become a shared fallback: as a single
// Kanji they would mislabel other words written with it (楽しい is たの, 生きる
// い, 数える かぞ, 分かる わ, お金 かね, 量る はか, 下りる お, 運ぶ はこ, 表 is also おもて),
// so their reading applies only to their own card's examples.
const entryScopedReadingIds = new Set([
  "n3-0074", // いつか (何時か would turn 何時から into いつか+ら)
  "n3-0238", // 数 かず
  "n3-0359", // 金 きん
  "n3-0379", // 下り くだり
  "n3-1077", // 生 なま
  "n3-1209", // 表 ひょう
  "n3-1244", // 縁 ふち
  "n3-1261", // 分 ぶん
  "n3-1335", // 実 み
  "n3-1449", // 楽 らく
  "n3-1460", // 量 りょう
  "n3-1497", // 運 うん
  "n3-1507", // 曲 きょく (曲がる is まが)
]);
const allVocabReadingEntries = allVocabEntries
  .filter((entry) => !entryScopedReadingIds.has(entry.id))
  .flatMap((entry) => readingEntriesForVocabEntry(entry));
// Keep broad coverage without allowing readings that are known to change by
// grammatical role or suffix. Longer lexical/inflected forms are considered
// before shorter ones, ambiguous readings are rejected below, and the tokenizer
// also refuses to match a Kanji surface from inside a larger Kanji compound.
const unsafeGlobalReadingSurfaces = new Set([
  "後",
  "降",
  "降り",
  "人",
  "着",
  "中",
  "話",
  "背",
  "来",
]);
const globalReadingCandidates = [
  ...reviewedExactReadings,
  ...allVocabReadingEntries,
  ...furiganaEntries,
].filter(
  ([surface]) =>
    !affixMarkerPattern.test(surface) && !unsafeGlobalReadingSurfaces.has(surface),
);
const readingsBySurface = new Map();
globalReadingCandidates.forEach(([surface, reading]) => {
  if (!readingsBySurface.has(surface)) readingsBySurface.set(surface, new Set());
  readingsBySurface.get(surface).add(reading);
});
const ambiguousReadingSurfaces = new Set(
  [...readingsBySurface]
    .filter(([, readings]) => readings.size > 1)
    .map(([surface]) => surface),
);
const furiganaByLength = [];
const globalReadingKeys = new Set();
[...contextSpecificReadings, ...globalReadingCandidates]
  .filter(([surface], index) =>
    index < contextSpecificReadings.length || !ambiguousReadingSurfaces.has(surface),
  )
  .forEach(([surface, reading]) => addReadingEntry(furiganaByLength, globalReadingKeys, surface, reading));
furiganaByLength.sort((left, right) => right[0].length - left[0].length);

// Groups reading entries by their first character, longest surface first, and
// keeps only the first entry for each surface. The shared table is indexed once;
// scanning all of it at every character made each deck build several times slower.
function readingEntriesByFirstCharacter(entries, skipSurfaces = new Set()) {
  const groups = new Map();
  const seenSurfaces = new Set();
  entries.forEach(([surface, reading]) => {
    if (!surface || !reading || seenSurfaces.has(surface) || skipSurfaces.has(surface)) return;
    seenSurfaces.add(surface);
    if (!groups.has(surface[0])) groups.set(surface[0], []);
    groups.get(surface[0]).push([surface, reading]);
  });
  groups.forEach((group) => group.sort((left, right) => right[0].length - left[0].length));
  return { groups, surfaces: seenSurfaces };
}

let sharedReadingIndex = null;

// Candidates starting at one character: longest first, and a sentence's own
// readings before shared ones of the same length (shared entries whose surface
// the sentence overrides are skipped).
function* readingCandidatesAt(character, preferredIndex) {
  if (!sharedReadingIndex) sharedReadingIndex = readingEntriesByFirstCharacter(furiganaByLength);
  const preferred = preferredIndex.groups.get(character) || [];
  const shared = sharedReadingIndex.groups.get(character) || [];
  let preferredPosition = 0;
  let sharedPosition = 0;
  while (preferredPosition < preferred.length || sharedPosition < shared.length) {
    const nextPreferred = preferred[preferredPosition];
    const nextShared = shared[sharedPosition];
    if (nextPreferred && (!nextShared || nextPreferred[0].length >= nextShared[0].length)) {
      preferredPosition += 1;
      yield nextPreferred;
    } else {
      sharedPosition += 1;
      if (!preferredIndex.surfaces.has(nextShared[0])) yield nextShared;
    }
  }
}

// Splits text into reading matches and single unmatched characters. A Kanji
// surface is never matched from inside a larger Kanji compound, so 明日 or 観光
// cannot be assembled from the readings of 明 / 日 or 光 on their own.
function tokenizeKnownReadings(text, preferredReadings = []) {
  const preferredIndex = readingEntriesByFirstCharacter(preferredReadings);
  const tokens = [];
  let index = 0;

  while (index < text.length) {
    let entry = null;
    for (const candidate of readingCandidatesAt(text[index], preferredIndex)) {
      const surface = candidate[0];
      if (!text.startsWith(surface, index)) continue;
      const previousCharacter = text[index - 1] || "";
      const nextCharacter = text[index + surface.length] || "";
      const startsInsideCompound =
        isKanjiCharacter(surface[0]) && isKanjiCharacter(previousCharacter);
      const endsInsideCompound =
        isKanjiCharacter(surface.at(-1)) && isKanjiCharacter(nextCharacter);
      if (!startsInsideCompound && !endsInsideCompound) {
        entry = candidate;
        break;
      }
    }
    if (entry) {
      tokens.push({ start: index, surface: entry[0], reading: entry[1] });
      index += entry[0].length;
    } else {
      tokens.push({ start: index, surface: text[index], reading: null });
      index += 1;
    }
  }

  return tokens;
}

function lastVowel(text) {
  const match = text.match(/[aeiou](?!.*[aeiou])/);
  return match ? match[0] : "";
}

function firstConsonant(text) {
  return /^[bcdfghjklmnpqrstvwxyz]/.test(text) ? text[0] : "";
}

const particleRomajiMarkers = new Map([
  ["\ue000", " wa "],
  ["\ue001", " e "],
  ["\ue002", " o "],
  ["\ue003", "wa"],
  ["\ue004", " "],
  ["\ue005", "-"],
]);
// Edges of an example's focus span, carried through romaji conversion so the
// romaji of the word can be marked; kanaToRomaji passes them through untouched.
const focusOpenMarker = "";
const focusCloseMarker = "";
const isFocusMarker = (character) => character === focusOpenMarker || character === focusCloseMarker;
const particleKanaMarkers = new Map([
  ["は", "\ue000"],
  ["へ", "\ue001"],
  ["を", "\ue002"],
]);
const reviewedExampleTexts = [...new Set(
  [...allVocabEntries, ...grammarEntries]
    .flatMap((entry) => (entry.examples || []).map((example) => stripSentencePeriods(example.ja)))
    .filter(Boolean),
)].sort();
const reviewedExampleTextSet = new Set(reviewedExampleTexts);

// FNV-1a 64 over UTF-16 code units, kept in four 16-bit limbs (prime 2^40 +
// 0x1b3) so every partial product stays below 2^32 and the loop runs on small
// integers instead of BigInt; the digest is the same.
function corpusSignature(parts) {
  let h0 = 0x2325;
  let h1 = 0x8422;
  let h2 = 0x9ce4;
  let h3 = 0xcbf2;
  const joined = parts.join("\0");
  for (let index = 0; index < joined.length; index += 1) {
    h0 ^= joined.charCodeAt(index);
    const r0 = h0 * 0x1b3;
    const r1 = h1 * 0x1b3 + (r0 >>> 16);
    const r2 = h2 * 0x1b3 + h0 * 0x100 + (r1 >>> 16);
    const r3 = h3 * 0x1b3 + h1 * 0x100 + (r2 >>> 16);
    h0 = r0 & 0xffff;
    h1 = r1 & 0xffff;
    h2 = r2 & 0xffff;
    h3 = r3 & 0xffff;
  }
  const hex = (limb) => limb.toString(16).padStart(4, "0");
  return `${parts.length}:${hex(h3)}${hex(h2)}${hex(h1)}${hex(h0)}`;
}

function reviewedSpanMap(groups) {
  const map = new Map();
  groups.forEach(([span, texts]) => {
    texts.forEach((text) => {
      if (!map.has(text)) map.set(text, []);
      map.get(text).push(span);
    });
  });
  return map;
}

// These are the only lexical は occurrences in the reviewed static example
// corpus (N5/N4/N3/N2). Every other literal は/へ/を position in that exact corpus was
// reviewed as a grammatical particle. No runtime tokenization or conjugation
// guessing is used.
const reviewedLexicalKanaSpans = reviewedSpanMap([
  ["はさみ", [
    "使ったはさみを消毒しました",
    "このはさみは紙を切るのに使います",
    "紙をはさみで切ります",
    "はさみで紙を切ります",
    "はさみを貸してください",
    "このはさみはよく切れます",
  ]],
  ["はき", [
    "雨の日はこの靴をはきます",
    "海へ行くのでサンダルをはきました",
    "靴をはきます",
    "靴下をはきます",
    "黒いズボンをはきます",
    "朝、靴下をはきました",
    "休みの日はジーンズをはきます",
  ]],
  ["はいて", [
    "黒いズボンをはいています",
    "白い靴下をはいています",
    "妹は青いスカートをはいています",
    "試しにこの靴をはいてみてください",
  ]],
  ["はめ", ["寒いので手袋をはめました"]],
  ["はい", [
    "はい、お願いします",
    "はい、そうです",
    "はい、分かりました",
    "はい、おまちどおさま。ラーメンです",
    "はい、かしこまりました",
    "「お元気ですか。」「はい、おかげさまで。」",
  ]],
  ["はじめまして", [
    "はじめまして。リンです",
    "はじめまして。どうぞよろしく",
    "新しいクラスで「はじめまして」とあいさつしました",
  ]],
  ["おはよう", ["皆さん、おはようございます"]],
  ["はっきり", [
    "今日は山がはっきり見えます",
    "名前をはっきり書いてください",
    "理由をはっきり説明しました",
    "自分の意思をはっきり伝えてください",
    "文句があるなら、はっきり言ってください",
    "面接ではっきり話せませんでした",
    "この地方は四季がはっきりしています",
  ]],
  ["やはり", [
    "やはり雨が降りました",
    "やはり日本語は面白いです",
    "考えてみても、やはり行きたいです",
  ]],
  ["はし", ["彼は器用にはしを使います"]],
  ["はまっ", ["型にはまった考え方はよくないです"]],
  ["はね", ["車に泥がはねました"]],
  ["おはよう", [
    "おはよう。今日も暑いね",
    "朝、母に「おはよう」と言いました",
    "学校で友達に会って、「おはよう」とあいさつしました",
  ]],
  ["へそ", [
    "赤ちゃんのへそを消毒しました",
    "シャツが短くて、へそが見えています",
    "雷が鳴ったら、へそを隠しなさいと言われました",
  ]],
  ["はり", ["壁に映画のポスターをはりました"]],
  ["はがし", [
    "壁のポスターをはがしました",
    "値段のシールをはがしてから、プレゼントします",
    "古いペンキをはがして、塗り直しました",
  ]],
  ["はしご", [
    "はしごに登って、電球を替えました",
    "屋根にはしごをかけました",
    "友達と居酒屋をはしごしました",
  ]],
  ["はめ", [
    "指に指輪をはめました",
    "窓に新しいガラスをはめました",
    "寒いので、手袋をはめて出かけます",
  ]],
  ["はんこ", [
    "書類にはんこを押してください",
    "銀行に行く時は、はんこを持っていきます",
    "はんこをなくしてしまいました",
  ]],
  ["当てはま", [
    "この規則はすべての場合に当てはまるわけではありません",
    "次の条件に当てはまる人は、申し込むことができます",
    "当てはまるものに丸をつけてください",
  ]],
  ["当てはめ", [
    "数字を公式に当てはめて計算します",
    "自分の経験に当てはめて考えてみました",
    "古い規則を今の時代に当てはめるのは難しいです",
  ]],
  ["はじめ", [
    "社長をはじめ、社員全員が会議に出ました",
    "東京をはじめ、日本の大きな町を旅行しました",
    "寿司をはじめ、日本料理はどれもおいしいです",
    "病気になってはじめて、健康の大切さが分かりました",
    "一人で住んではじめて、親のありがたさを知りました",
    "日本に来てはじめて、雪を見ました",
  ]],
  ["はず", [
    "この道を行けば、駅に出るはずです",
    "この問題が簡単なはずがありません",
    "まだ七時ですから、店が閉まっているはずがないです",
    "今日は休みのはずです",
    "田中さんはもう着いたはずです",
    "彼がそんなことを言うはずがありません",
  ]],
]);

// A space, rather than n', is required where moraic ん ends one word and the
// next word/particle begins with a vowel or y. Internal boundaries such as
// 金曜日・店員・今夜・原因・翻訳・本屋 deliberately remain unmarked.
const reviewedMoraicNWordBoundaries = reviewedSpanMap([
  ["大変|お世話", ["長い間、大変お世話になりました"]],
  ["たくさん|読み", ["本をたくさん読みます"]],
  ["たくさん|あります", [
    "この店には日本の食べ物がたくさんあります",
    "家の周りに木がたくさんあります",
    "下町には小さな店がたくさんあります",
  ]],
  ["たくさん|歩いて", ["たくさん歩いて疲れました"]],
  ["たくさん|います", [
    "駅には人がたくさんいます",
    "人がたくさんいます",
    "池に魚がたくさんいます",
    "私の大学には留学生がたくさんいます",
  ]],
  ["たくさん|集まりました", ["若い人がたくさん集まりました"]],
  ["たくさん|雨", ["昨日、たくさん雨が降りました"]],
  ["たくさん|写しました", ["旅行で写真をたくさん写しました"]],
  ["十分|あります", ["時間は十分あります"]],
  ["もちろん|行きます", ["もちろん行きます"]],
  ["本|より", ["この本はあの本より新しいです"]],
  ["確認|いたします", ["荷物を確認いたします"]],
  ["たぶん|雨", ["明日はたぶん雨です"]],
  ["百人|います", ["学校に学生が百人います"]],
  ["三人|います", ["田中さんには子供が三人います"]],
  ["何人|います", ["兄弟は何人いますか"]],
  ["一本|あります", ["庭に高い木が一本あります"]],
  ["二本|あります", ["机の上に鉛筆が二本あります"]],
  ["三本|あります", ["かばんにボールペンが三本あります"]],
  ["毎晩|遅く", ["お父さんは毎晩遅く帰ります"]],
  ["本|や", [
    "机の上に本やノートがあります",
    "本や雑誌などを読みます",
  ]],
]);
const attachedWaTokens = ["こんにちは", "こんばんは", "それでは", "または", "あるいは"];
// The conjunction では (dewa) only opens a sentence in the reviewed corpus; inside
// a sentence では is the particle pair で + は (de wa), so it is not matched there.
const sentenceInitialAttachedWaTokens = ["では、"];

function reviewedPairSignatureParts(label, pairs) {
  return pairs.map(([surface, reading]) => `${label}:${surface}\u0001${reading}`).sort();
}

function reviewedSpanSignatureParts(label, map) {
  return [...map]
    .map(([text, spans]) => `${label}:${text}\u0001${[...spans].sort().join("\u0002")}`)
    .sort();
}

const reviewedVocabEntries = [...allVocabEntries]
  .sort((left, right) => left.id.localeCompare(right.id));
const reviewedPronunciationSourceParts = [
  ...reviewedExampleTexts.map((text) => `example:${text}`),
  ...reviewedVocabEntries.map((entry) => JSON.stringify([
    "vocab",
    entry.id,
    entry.headword || "",
    entry.reading || "",
    entry.speech_reading || "",
    entry.reading_variants || [],
    entry.variants || [],
    entry.kanji_readings || [],
  ])),
  ...reviewedVocabEntries.map((entry) => JSON.stringify([
    "preferred",
    entry.id,
    readingEntriesForVocabEntry(entry),
  ])),
  ...reviewedPairSignatureParts("exact", reviewedExactReadings),
  ...reviewedPairSignatureParts("context", contextSpecificReadings),
  ...reviewedPairSignatureParts("furigana", furiganaEntries),
  ...reviewedPairSignatureParts("effective", furiganaByLength),
  ...reviewedSpanSignatureParts("lexical", reviewedLexicalKanaSpans),
  ...reviewedSpanSignatureParts("n-boundary", reviewedMoraicNWordBoundaries),
  ...[...exampleReadingSpansByText]
    .map(([text, spans]) =>
      `example-reading:${text}\u0001${spans.map((words) => words.map((word) => word.join("|")).join(" ")).join("\u0002")}`,
    )
    .sort(),
  ...attachedWaTokens.map((token) => `attached-wa:${token}`).sort(),
  ...sentenceInitialAttachedWaTokens.map((token) => `initial-attached-wa:${token}`).sort(),
  ...[...unsafeGlobalReadingSurfaces].sort().map((surface) => `unsafe:${surface}`),
  ...[...entryScopedReadingIds].sort().map((id) => `entry-scoped:${id}`),
  ...kanaRows.map((row) => `kana:${row.join("\u0001")}`).sort(),
  ...loanwordKanaRomajiRows.map((row) => `loanword-kana:${row.join("\u0001")}`).sort(),
];
const reviewedPronunciationSourceSignature = "32662:e4f243b6854b6c96";

function reviewedTableMatchesCorpus(map) {
  return [...map].every(([text, spans]) =>
    reviewedExampleTextSet.has(text) && spans.every((span) => text.includes(span.replace("|", ""))),
  );
}

const reviewedPronunciationCorpusIsCurrent =
  corpusSignature(reviewedPronunciationSourceParts) === reviewedPronunciationSourceSignature &&
  reviewedTableMatchesCorpus(reviewedLexicalKanaSpans) &&
  reviewedTableMatchesCorpus(reviewedMoraicNWordBoundaries) &&
  [...exampleReadingSpansByText].every(([text, spans]) =>
    reviewedExampleTextSet.has(text) &&
      spans.every((words) => text.includes(words.map(([surface]) => surface).join(""))),
  );

function indexesForSpans(text, spans = []) {
  const indexes = new Set();
  spans.forEach((span) => {
    let fromIndex = 0;
    while (fromIndex < text.length) {
      const index = text.indexOf(span, fromIndex);
      if (index < 0) break;
      for (let offset = 0; offset < span.length; offset += 1) indexes.add(index + offset);
      fromIndex = index + span.length;
    }
  });
  return indexes;
}

function boundaryIndexesForText(text) {
  const indexes = new Set();
  (reviewedMoraicNWordBoundaries.get(text) || []).forEach((markedSpan) => {
    const [left, right] = markedSpan.split("|");
    const surface = `${left}${right}`;
    const index = text.indexOf(surface);
    if (index >= 0) indexes.add(index + left.length);
  });
  return indexes;
}

function attachedWaIndexesForText(text) {
  const indexes = new Set();
  attachedWaTokens.forEach((token) => {
    let fromIndex = 0;
    while (fromIndex < text.length) {
      const index = text.indexOf(token, fromIndex);
      if (index < 0) break;
      indexes.add(index + token.lastIndexOf("は"));
      fromIndex = index + token.length;
    }
  });
  sentenceInitialAttachedWaTokens.forEach((token) => {
    if (text.startsWith(token)) indexes.add(token.lastIndexOf("は"));
  });
  return indexes;
}

// Returns the marked text plus, for each marked character, the index of the
// source character it stands for (-1 for inserted word-boundary markers).
function markReviewedPronunciationsWithSourceIndexes(text) {
  if (!reviewedPronunciationCorpusIsCurrent || !reviewedExampleTextSet.has(text)) return null;
  const lexicalIndexes = indexesForSpans(text, reviewedLexicalKanaSpans.get(text));
  const boundaryIndexes = boundaryIndexesForText(text);
  const attachedWaIndexes = attachedWaIndexesForText(text);
  let result = "";
  const sourceIndexes = [];

  [...text].forEach((character, index) => {
    if (boundaryIndexes.has(index)) {
      result += "\ue004";
      sourceIndexes.push(-1);
    }
    if (lexicalIndexes.has(index)) {
      result += character;
    } else if (attachedWaIndexes.has(index)) {
      result += "\ue003";
    } else {
      result += particleKanaMarkers.get(character) || character;
    }
    sourceIndexes.push(index);
  });
  return { marked: result, sourceIndexes };
}

function markReviewedPronunciations(text) {
  return markReviewedPronunciationsWithSourceIndexes(text)?.marked ?? null;
}

function romajiAt(kanaText, index) {
  while (isFocusMarker(kanaText[index])) index += 1;
  const markerRomaji = particleRomajiMarkers.get(kanaText[index]);
  if (markerRomaji) return markerRomaji;
  return kanaRomajiRows.find(([surface]) => kanaText.startsWith(surface, index))?.[1] || "";
}

function kanaToRomaji(text) {
  const kanaText = kanaSurfaceToHiragana(text);
  let result = "";
  let index = 0;
  let shouldDoubleNextConsonant = false;
  // A focus edge right after っ goes after the doubled consonant, which is
  // the っ's own sound: 減っ|ていく → het|te iku.
  let pendingMarkers = "";

  while (index < kanaText.length) {
    const char = kanaText[index];

    if (isFocusMarker(char)) {
      if (shouldDoubleNextConsonant) pendingMarkers += char;
      else result += char;
      index += 1;
      continue;
    }

    if (char !== "っ" && !kanaRomajiRows.some(([surface]) => kanaText.startsWith(surface, index))) {
      result += pendingMarkers;
      pendingMarkers = "";
    }

    if (char === "っ") {
      shouldDoubleNextConsonant = true;
      index += 1;
      continue;
    }

    if (char === "ー") {
      result += lastVowel(result);
      index += 1;
      continue;
    }

    if (char === "、") {
      result += ", ";
      index += 1;
      continue;
    }

    const particleRomaji = particleRomajiMarkers.get(char);
    if (particleRomaji) {
      result += particleRomaji;
      shouldDoubleNextConsonant = false;
      index += 1;
      continue;
    }

    const match = kanaRomajiRows.find(([surface]) => kanaText.startsWith(surface, index));
    if (match) {
      const romaji = match[1];
      const moraSeparator =
        match[0] === "ん" && /^[aeiouy]/.test(romajiAt(kanaText, index + match[0].length))
          ? "'"
          : "";
      // Hepburn writes っ before ch as t: こっち → kotchi, not kocchi.
      const geminate = romaji.startsWith("ch") ? "t" : firstConsonant(romaji);
      result += `${shouldDoubleNextConsonant ? geminate : ""}${pendingMarkers}${romaji}${moraSeparator}`;
      shouldDoubleNextConsonant = false;
      pendingMarkers = "";
      index += match[0].length;
      continue;
    }

    result += char;
    shouldDoubleNextConsonant = false;
    index += 1;
  }

  return `${result}${pendingMarkers}`.trim();
}

// Reviewed word division for sentence romaji. romaji-word-spacing.js lists every
// displayed example with a space between words and "-" before a name suffix
// (田中-さん); those positions are the only places a space may be added. The
// spaced result must match the unspaced romaji letter for letter, otherwise the
// sentence keeps its unspaced romaji, so word division can never change a reading.
const romajiSpacingEntries = new Map(
  (window.AYAYA_ROMAJI_SPACING?.entries || []).map((spaced) => [spaced.replace(/[ -]/gu, ""), spaced]),
);

function reviewedWordBoundaries(text) {
  const spaced = romajiSpacingEntries.get(text);
  if (!spaced) return null;
  const boundaries = new Map();
  let index = 0;
  for (const character of spaced) {
    if (character === " " || character === "-") {
      boundaries.set(index, character === "-" ? "" : "");
    } else {
      index += character.length;
    }
  }
  return boundaries;
}

function punctuationRomajiSource(character) {
  if (/[。．]/u.test(character)) return ". ";
  if (character === "、") return ", ";
  if (character === "！") return "! ";
  if (character === "？") return "? ";
  if (character === "：") return ":";
  if (character === "；") return ";";
  if (/[「」『』]/u.test(character)) return "";
  if (/[〜～・]/u.test(character)) return " ";
  return character;
}

// Multi-word Kanji spans that one reviewed reading covers as a whole (the
// tokenizer never matches a Kanji word from inside a longer Kanji run). Each
// entry lists the words and their readings so word division can split them.
const reviewedCompoundWordSplits = new Map(
  [
    ["毎日復習", "毎日|復習", "まいにち|ふくしゅう"],
    ["明治時代", "明治|時代", "めいじ|じだい"],
    ["十分以内", "十分|以内", "じゅっぷん|いない"],
    ["大体十分", "大体|十分", "だいたい|じゅっぷん"],
    ["十分待ちました", "十分|待ちました", "じゅっぷん|まちました"],
    ["一度申し", "一度|申し", "いちど|もうし"],
    ["三年前", "三年|前", "さんねん|まえ"],
    ["十年前", "十年|前", "じゅうねん|まえ"],
    ["二時間前", "二時間|前", "にじかん|まえ"],
  ].map(([surface, surfaces, readings]) => [
    surface,
    { surfaces: surfaces.split("|"), readings: readings.split("|") },
  ]),
);
// Multi-word spans from example-readings.js split the same way.
exampleReadingSpansByText.forEach((spans) => {
  spans.filter((words) => words.length > 1).forEach((words) => {
    const surface = words.map(([word]) => word).join("");
    if (reviewedCompoundWordSplits.has(surface)) return;
    reviewedCompoundWordSplits.set(surface, {
      surfaces: words.map(([word]) => word),
      readings: words.map(([, reading]) => reading),
    });
  });
});

// Splits one reading token at a reviewed word boundary. Kana runs shared by the
// surface and its reading anchor the split (具合が悪い → ぐあい|が|わるい,
// 十分かかり → じゅっぷん|かかり); a boundary inside a Kanji run needs a
// reviewedCompoundWordSplits entry, otherwise the sentence's spacing is rejected.
function splitReadingAt(surface, reading, offset) {
  const compound = reviewedCompoundWordSplits.get(surface);
  if (
    compound &&
    compound.surfaces.join("") === surface &&
    compound.readings.join("") === reading
  ) {
    let surfaceOffset = 0;
    let readingOffset = 0;
    for (let index = 0; index < compound.surfaces.length - 1; index += 1) {
      surfaceOffset += compound.surfaces[index].length;
      readingOffset += compound.readings[index].length;
      if (surfaceOffset === offset) {
        return [reading.slice(0, readingOffset), reading.slice(readingOffset)];
      }
    }
  }
  const readingOffset = alignedReadingOffset(surface, reading, offset);
  return readingOffset === null
    ? null
    : [reading.slice(0, readingOffset), reading.slice(readingOffset)];
}

// Maps a surface offset to a reading offset using the kana runs as anchors;
// every Kanji run must be followed by a kana run that occurs exactly once in
// the rest of the reading, so the alignment is never a guess.
function alignedReadingOffset(surface, reading, offset) {
  const runs = surface.match(/[ぁ-ゖァ-ヺー\ue000-\ue003]+|[^ぁ-ゖァ-ヺー\ue000-\ue003]+/gu) || [];
  const normalizedReading = kanaSurfaceToHiragana(reading);
  let surfaceIndex = 0;
  let readingIndex = 0;
  for (let runIndex = 0; runIndex < runs.length; runIndex += 1) {
    const run = runs[runIndex];
    const runEnd = surfaceIndex + run.length;
    if (isKanaOrMarker(run[0])) {
      const kana = kanaSurfaceToHiragana(run);
      if (!normalizedReading.startsWith(kana, readingIndex)) return null;
      if (offset >= surfaceIndex && offset < runEnd) return readingIndex + (offset - surfaceIndex);
      readingIndex += kana.length;
    } else {
      if (offset > surfaceIndex && offset < runEnd) return null;
      if (offset === surfaceIndex) return readingIndex;
      const nextRun = runs[runIndex + 1];
      if (nextRun === undefined) return null;
      const nextKana = kanaSurfaceToHiragana(nextRun);
      const found = normalizedReading.indexOf(nextKana, readingIndex + 1);
      if (found < 0 || normalizedReading.indexOf(nextKana, found + 1) >= 0) return null;
      readingIndex = found;
    }
    surfaceIndex = runEnd;
  }
  return null;
}

function isKanaOrMarker(character) {
  return isKanaCharacter(character) || /[-]/u.test(character);
}

function spacedReadingStream(tokens, sourceIndexes, boundaries, text = "") {
  const used = new Set();
  const parts = [];
  for (const token of tokens) {
    const output = token.reading ?? token.surface;
    const inner = [];
    [...token.surface].forEach((_, offset) => {
      const sourceIndex = sourceIndexes[token.start + offset];
      if (sourceIndex < 0 || !boundaries.has(sourceIndex) || used.has(sourceIndex)) return;
      used.add(sourceIndex);
      if (offset === 0) parts.push(boundaries.get(sourceIndex));
      else inner.push([offset, boundaries.get(sourceIndex)]);
    });
    if (!inner.length) {
      parts.push(output);
      continue;
    }
    if (token.reading === null) return null;
    // Word boundaries of a reviewed multi-word span, in whole-token offsets, so
    // a span with several words (毎朝|三十分|歩き) can be split more than once.
    const compound =
      exampleReadingSplitFor(text, token.surface) || reviewedCompoundWordSplits.get(token.surface);
    const compoundOffsets = new Map();
    if (
      compound &&
      compound.surfaces.join("") === token.surface &&
      compound.readings.join("") === token.reading
    ) {
      let surfaceOffset = 0;
      let readingOffset = 0;
      compound.surfaces.forEach((word, index) => {
        surfaceOffset += word.length;
        readingOffset += compound.readings[index].length;
        compoundOffsets.set(surfaceOffset, readingOffset);
      });
    }
    let surface = token.surface;
    let reading = token.reading;
    let consumed = 0;
    let readingConsumed = 0;
    for (const [offset, marker] of inner) {
      const split = compoundOffsets.has(offset)
        ? [
            reading.slice(0, compoundOffsets.get(offset) - readingConsumed),
            reading.slice(compoundOffsets.get(offset) - readingConsumed),
          ]
        : splitReadingAt(surface, reading, offset - consumed);
      if (!split) return null;
      parts.push(split[0], marker);
      surface = surface.slice(offset - consumed);
      reading = split[1];
      consumed = offset;
      readingConsumed += split[0].length;
    }
    parts.push(reading);
  }
  return used.size === boundaries.size ? parts.join("") : null;
}

function finishSentenceRomaji(kana) {
  return tidySentenceRomaji(kanaToRomaji(kana));
}

function tidySentenceRomaji(romaji) {
  return romaji
    .replace(/\s+/g, " ")
    .replace(/\s+([,!?/:;.])/g, "$1")
    .replace(/ ?- ?/g, "-")
    .trim();
}

// Mirrors app.js focusRanges: [start, end) ranges of the reviewed focus spans,
// each a string or { after, text } looked for only past after.
function focusRanges(text, focus) {
  const ranges = [];
  let from = 0;
  for (const span of Array.isArray(focus) ? focus : []) {
    const anchored = span && typeof span === "object";
    const piece = anchored ? span.text : span;
    if (anchored) {
      const after = typeof span.after === "string" && span.after ? text.indexOf(span.after, from) : -1;
      if (after < 0) return [];
      from = after + span.after.length;
    }
    const at = typeof piece === "string" && piece ? text.indexOf(piece, from) : -1;
    if (at < 0) return [];
    ranges.push([at, at + piece.length]);
    from = at + piece.length;
  }
  return ranges;
}

// [start, end) ranges of the focus word in the sentence's romaji. Its edges ride
// through the same reading stream as the word spaces; an edge inside a Kanji
// reading that cannot be split is widened to the whole furigana word, as the
// sentence marks it (何人来ますか|人 → nannin), else to the whole reading token.
// The marks are dropped unless the romaji without them is the shown romaji.
function romajiFocusRanges(text, tokens, sourceIndexes, boundaries, romaji, focus, rubySpans) {
  // An edge on a character with no romaji (the 」 after 「ありがとう) moves on
  // to the next one that has some.
  const spoken = new Set(sourceIndexes);
  const edge = (index) => {
    while (index < text.length && !spoken.has(index)) index += 1;
    return index;
  };
  const ranges = focusRanges(text, focus)
    .map(([from, to]) => [edge(from), edge(Math.min(to, text.length))])
    .filter(([from, to]) => from < to);
  if (!ranges.length || !romaji) return [];
  const tokenSpans = tokens
    .filter((token) => token.reading !== null)
    .map((token) => {
      const indexes = sourceIndexes
        .slice(token.start, token.start + token.surface.length)
        .filter((index) => index >= 0);
      return indexes.length ? [Math.min(...indexes), Math.max(...indexes) + 1] : null;
    })
    .filter(Boolean);
  const widenedTo = (spans) => ranges.map(([from, to]) => {
    spans.forEach(([start, end]) => {
      if (start < from && from < end) from = start;
      if (start < to && to < end) to = end;
    });
    return [from, to];
  });
  for (const candidate of [ranges, widenedTo(rubySpans), widenedTo(tokenSpans)]) {
    const marked = markedRomaji(text, tokens, sourceIndexes, boundaries, candidate);
    if (marked && marked.plain === romaji) return marked.ranges;
  }
  return [];
}

function markedRomaji(text, tokens, sourceIndexes, boundaries, ranges) {
  const markers = new Map();
  [...new Set([...(boundaries?.keys() || []), ...ranges.flat()])].forEach((index) => {
    const closes = ranges.some(([, to]) => to === index) ? focusCloseMarker : "";
    const opens = ranges.some(([from]) => from === index) ? focusOpenMarker : "";
    if (index < text.length) markers.set(index, `${closes}${boundaries?.get(index) || ""}${opens}`);
  });
  const stream = spacedReadingStream(tokens, sourceIndexes, markers, text);
  if (stream === null) return null;
  const tail = ranges.some(([, to]) => to === text.length) ? focusCloseMarker : "";
  // Spaces around a particle or word break stay outside the mark.
  let romaji = kanaToRomaji(`${stream}${tail}`);
  for (let previous = ""; previous !== romaji; ) {
    previous = romaji;
    romaji = romaji
      .replace(/(\s+)/gu, "$1")
      .replace(/(\s+)/gu, "$1");
  }
  romaji = tidySentenceRomaji(romaji);
  let plain = "";
  let start = -1;
  const found = [];
  for (const character of romaji) {
    if (character === focusOpenMarker) start = plain.length;
    else if (character === focusCloseMarker) {
      if (start >= 0 && plain.length > start) found.push([start, plain.length]);
      start = -1;
    } else plain += character;
  }
  return found.length === ranges.length ? { plain, ranges: found } : null;
}

function sentenceRomaji(text, preferredReadings = [], focus = [], ruby = []) {
  const reviewedText = stripSentencePeriods(text);
  const marked = markReviewedPronunciationsWithSourceIndexes(reviewedText);
  if (!marked) return { romaji: "", spacing: "unavailable", focus: [] };
  let normalized = "";
  const sourceIndexes = [];
  [...marked.marked].forEach((character, index) => {
    for (const output of punctuationRomajiSource(character)) {
      normalized += output;
      sourceIndexes.push(marked.sourceIndexes[index]);
    }
  });
  const tokens = tokenizeKnownReadings(normalized, [
    ...preferredReadings,
    ...exampleReadingsForText(reviewedText),
  ]);
  const unspaced = finishSentenceRomaji(tokens.map((token) => token.reading ?? token.surface).join(""));
  let rubyOffset = 0;
  const rubySpans = ruby.flatMap(([surface, reading]) => {
    rubyOffset += surface.length;
    return reading ? [[rubyOffset - surface.length, rubyOffset]] : [];
  });
  const result = (romaji, spacing, wordBoundaries = null) => ({
    romaji,
    spacing,
    focus: romajiFocusRanges(reviewedText, tokens, sourceIndexes, wordBoundaries, romaji, focus, rubySpans),
  });
  const boundaries = reviewedWordBoundaries(reviewedText);
  if (!boundaries) return result(unspaced, "unreviewed");
  const spacedKana = spacedReadingStream(tokens, sourceIndexes, boundaries, reviewedText);
  const spaced = spacedKana === null ? null : finishSentenceRomaji(spacedKana);
  const letters = (value) => value.replace(/[\s'-]/g, "");
  if (spaced === null || letters(spaced) !== letters(unspaced)) {
    return result(unspaced, "rejected");
  }
  return result(spaced, "reviewed", boundaries);
}

const pronunciationMarkerPattern = /[-]/u;

function isKanaCharacter(character = "") {
  return /[ぁ-ゖァ-ヺー]/u.test(character);
}

// Keeps okurigana and other surrounding kana outside <rt>: 待ち/まち → 待(ま)ち.
function splitRubyAroundKana(surface, reading) {
  let prefixLength = 0;
  while (
    prefixLength < surface.length &&
    prefixLength < reading.length &&
    isKanaCharacter(surface[prefixLength]) &&
    kanaSurfaceToHiragana(surface[prefixLength]) === kanaSurfaceToHiragana(reading[prefixLength])
  ) {
    prefixLength += 1;
  }
  let suffixLength = 0;
  while (
    suffixLength < surface.length - prefixLength &&
    suffixLength < reading.length - prefixLength &&
    isKanaCharacter(surface.at(-1 - suffixLength)) &&
    kanaSurfaceToHiragana(surface.at(-1 - suffixLength)) ===
      kanaSurfaceToHiragana(reading.at(-1 - suffixLength))
  ) {
    suffixLength += 1;
  }
  const core = surface.slice(prefixLength, surface.length - suffixLength);
  const coreReading = reading.slice(prefixLength, reading.length - suffixLength);
  if (!core || !coreReading || !kanjiCharacterPattern.test(core)) return [[surface, null]];
  return [
    [surface.slice(0, prefixLength), null],
    ...splitRubyAtInnerKana(core, coreReading),
    [surface.slice(surface.length - suffixLength), null],
  ].filter(([text]) => text);
}

// 六か月/ろっかげつ → 六(ろっ)か月(げつ), but only when every inner kana run
// occurs exactly once in the remaining reading; otherwise keep one ruby span.
function splitRubyAtInnerKana(core, coreReading) {
  const parts = core.match(/[ぁ-ゖァ-ヺー]+|[^ぁ-ゖァ-ヺー]+/gu) || [];
  const isKanaPart = (part) => isKanaCharacter(part[0]);
  if (parts.length < 3 || isKanaPart(parts[0]) || isKanaPart(parts.at(-1))) {
    return [[core, coreReading]];
  }
  const segments = [];
  let readingIndex = 0;
  for (let index = 0; index < parts.length; index += 2) {
    const kanjiPart = parts[index];
    const kanaPart = parts[index + 1];
    if (kanaPart === undefined) {
      const rest = coreReading.slice(readingIndex);
      if (!rest) return [[core, coreReading]];
      segments.push([kanjiPart, rest]);
      break;
    }
    const target = kanaSurfaceToHiragana(kanaPart);
    const remaining = kanaSurfaceToHiragana(coreReading.slice(readingIndex + 1));
    const found = remaining.indexOf(target);
    if (found < 0 || remaining.indexOf(target, found + 1) >= 0) return [[core, coreReading]];
    const kanaStart = readingIndex + 1 + found;
    segments.push([kanjiPart, coreReading.slice(readingIndex, kanaStart)], [kanaPart, null]);
    readingIndex = kanaStart + kanaPart.length;
  }
  return segments;
}

// Furigana uses exactly the same context-guarded tokenizer as romaji. Kanji
// that no reviewed reading covers are left without <rt> instead of being
// annotated from a guessed per-character reading.
function rubySegmentsForText(text, preferredReadings = []) {
  const markedSource = [...text].length === text.length
    ? markReviewedPronunciationsWithSourceIndexes(text)
    : null;
  const marked = markedSource?.marked ?? text;
  const sourceIndexes = markedSource?.sourceIndexes ?? [...text].map((_, index) => index);
  const segments = [];
  const pushPlain = (value) => {
    if (!value) return;
    if (segments.length && segments.at(-1)[1] === null) segments.at(-1)[0] += value;
    else segments.push([value, null]);
  };
  let consumed = 0;

  tokenizeKnownReadings(marked, [...preferredReadings, ...exampleReadingsForText(text)]).forEach(({ start, surface, reading }) => {
    let surfaceLength = surface.length;
    let rubyReading = reading;
    while (
      rubyReading &&
      surfaceLength > 0 &&
      pronunciationMarkerPattern.test(surface[surfaceLength - 1]) &&
      rubyReading.at(-1) === surface[surfaceLength - 1]
    ) {
      surfaceLength -= 1;
      rubyReading = rubyReading.slice(0, -1);
    }
    const coveredIndexes = sourceIndexes.slice(start, start + surface.length).filter((i) => i >= 0);
    if (!coveredIndexes.length) return;
    const sourceStart = coveredIndexes[0];
    const sourceEnd = coveredIndexes.at(-1) + 1;
    const rubySourceIndexes = sourceIndexes.slice(start, start + surfaceLength);
    const canAnnotate =
      rubyReading &&
      !pronunciationMarkerPattern.test(surface.slice(0, surfaceLength)) &&
      !pronunciationMarkerPattern.test(rubyReading) &&
      rubySourceIndexes.every((i) => i >= 0) &&
      kanjiCharacterPattern.test(surface.slice(0, surfaceLength));
    pushPlain(text.slice(consumed, sourceStart));
    if (!canAnnotate) {
      pushPlain(text.slice(sourceStart, sourceEnd));
    } else {
      const rubyEnd = rubySourceIndexes.at(-1) + 1;
      const rubySurface = text.slice(sourceStart, rubyEnd);
      // A reviewed multi-word reading (一度申し → 一度|申し) is annotated word by
      // word, so one ruby never spans two words.
      const compound =
        exampleReadingSplitFor(text, rubySurface) || reviewedCompoundWordSplits.get(rubySurface);
      const rubyParts = compound && compound.readings.join("") === rubyReading
        ? compound.surfaces.map((part, partIndex) => [part, compound.readings[partIndex]])
        : [[rubySurface, rubyReading]];
      rubyParts.flatMap(([part, partReading]) => splitRubyAroundKana(part, partReading)).forEach(([part, rt]) => {
        if (rt) segments.push([part, rt]);
        else pushPlain(part);
      });
      pushPlain(text.slice(rubyEnd, sourceEnd));
    }
    consumed = sourceEnd;
  });
  pushPlain(text.slice(consumed));
  return segments;
}

function isSafeRomaji(text) {
  return /^[A-Za-z0-9\s,.'!?/:;()\-]+$/.test(text);
}

const speechParticleKana = new Map([
  ["", "わ"],
  ["", "え"],
  ["", "を"],
  ["", "わ"],
]);

// Text handed to speechSynthesis for an example: Kanji replaced by their reviewed
// furigana and particle は/へ spelled わ/え as the romaji reads them, so the voice
// says the displayed reading instead of guessing one (毎年 → まいねん, not まいとし).
// Unreviewed sentences keep their text; validation requires every example be reviewed.
function speechTextFor(text, ruby) {
  const marked = markReviewedPronunciationsWithSourceIndexes(text);
  if (!marked || ruby.map(([surface]) => surface).join("") !== text) return text;
  const markedBySource = new Map();
  [...marked.marked].forEach((character, index) => {
    if (marked.sourceIndexes[index] >= 0) markedBySource.set(marked.sourceIndexes[index], character);
  });
  let sourceIndex = 0;
  return ruby
    .map(([surface, reading]) => {
      const start = sourceIndex;
      sourceIndex += surface.length;
      if (reading) return reading;
      return [...surface]
        .map((character, offset) => speechParticleKana.get(markedBySource.get(start + offset)) || character)
        .join("");
    })
    .join("");
}

function sentenceSpeech(text, examples = []) {
  return examples.find((example) => example.ja === text)?.speech ?? speechTextFor(text, rubySegmentsForText(text));
}

// Other standard readings of the same headword (何 なん／なに, 毎年 まいねん／まいとし),
// so an example read with one of them never contradicts the card. Longer
// phrase forms (そう → そうです) and readings already in the label are skipped.
// A variant that only extends the reading (けっこん (する), そうです, ゆっくりと)
// is not another reading; だいぶん for だいぶ is.
function otherReadingsLabel(entry, reading) {
  const bare = (value) => String(value || "").replace(/[～〜]/gu, "");
  const extendsReading = (variant) => {
    const rest = bare(variant).slice(bare(reading).length);
    return bare(variant).startsWith(bare(reading)) && (/^[\s(（]/u.test(rest) || ["と", "です"].includes(rest));
  };
  const others = (Array.isArray(entry?.reading_variants) ? entry.reading_variants : []).filter(
    (variant) => !bare(reading).includes(bare(variant)) && !extendsReading(variant),
  );
  return others.length ? `（也读 ${others.join("／")}）` : "";
}

// Text the browser voice reads for a word card: without the affix mark ～, and
// with a particle は/へ spelled わ/え when the reviewed romaji reads it that way
// (では → でわ), so the voice never says "deha" for a word shown as "dewa".
function vocabSpeechKana(reading, romaji) {
  const kana = String(reading || "").replace(/[～〜]/gu, "");
  const target = String(romaji || "").replace(/[~～]/gu, "");
  const letters = (value) => value.toLowerCase().replace(/[^a-z]/gu, "");
  if (!target || target.includes("/") || letters(kanaToRomaji(kana)) === letters(target)) return kana;
  const positions = [...kana].flatMap((character, index) => ("はへ".includes(character) ? [index] : []));
  for (let mask = 1; mask < 2 ** positions.length; mask += 1) {
    const characters = [...kana];
    positions.forEach((position, bit) => {
      if (mask & (1 << bit)) characters[position] = characters[position] === "は" ? "わ" : "え";
    });
    const candidate = characters.join("");
    if (letters(kanaToRomaji(candidate)) === letters(target)) return candidate;
  }
  return kana;
}

function normalizeExamples(examples = [], preferredReadings = []) {
  return examples.map((example) => {
    const ja = stripSentencePeriods(example.ja || "");
    const zh = stripSentencePeriods(example.zh || "");
    const ruby = rubySegmentsForText(ja, preferredReadings);
    const generated = sentenceRomaji(ja, preferredReadings, example.focus, ruby);
    const hasSafeRomaji = isSafeRomaji(generated.romaji);
    return {
      ...example,
      ja,
      romaji: hasSafeRomaji ? generated.romaji : "",
      romajiFocus: hasSafeRomaji ? generated.focus : [],
      romajiStatus: hasSafeRomaji ? "available" : "unavailable",
      romajiSpacing: hasSafeRomaji ? generated.spacing : "unavailable",
      furiganaEntries: preferredReadings,
      ruby,
      speech: speechTextFor(ja, ruby),
      zh,
    };
  });
}

function hasRealExample(example) {
  return Boolean(example) && !example.includes("N5の単語です");
}

function buildExamples(
  word,
  reading,
  meaning,
  example,
  translation,
  entryExamples = [],
  sourceEntry = null,
) {
  const preferredReadings = sourceEntry ? readingEntriesForVocabEntry(sourceEntry) : [];
  if (entryExamples.length) {
    return normalizeExamples(entryExamples.slice(0, 3), preferredReadings);
  }

  return hasRealExample(example)
    ? normalizeExamples([{ ja: example, zh: translation }], preferredReadings)
    : [];
}

const explicitVocabCategoryLabels = {
  collocation: "搭配",
  compound: "复合词",
  "derived-form": "派生形式",
  "fixed-expression": "固定表达",
};

function vocabCategoryLabel(entry) {
  const explicitLabel = explicitVocabCategoryLabels[entry?.learning_category];
  if (explicitLabel) return explicitLabel;

  const partOfSpeech = String(entry?.part_of_speech || "");
  if (partOfSpeech.includes("counter")) return "量词";
  if (partOfSpeech.includes("suffix") || partOfSpeech.includes("prefix")) return "词缀";
  if (partOfSpeech.includes("expression")) return "表达";
  if (partOfSpeech.includes("particle")) return "助词";
  return "词汇";
}

function makeVocabDeckCards({
  deckJaZh,
  deckZhJa,
  hasLegacyIndexIds = true,
  idPrefix,
  typePrefix,
  words,
}) {
  // Words written the same way (十 じゅう／とお, 一日 いちにち／ついたち) cannot be
  // told apart from the kanji alone, so their 日→中 answers list every reading
  // with its meaning, this card's own first; the front keeps the kana hidden.
  // Group across all levels: 空（そら, N5）and 空（から, N4）list each other
  // even though they sit in different decks.
  const wordsBySpelling = new Map();
  allVocabWords.forEach((vocabWord) => {
    const spelling = vocabWord[1];
    if (!wordsBySpelling.has(spelling)) wordsBySpelling.set(spelling, []);
    wordsBySpelling.get(spelling).push(vocabWord);
  });
  const homographsFor = (sourceId, word) => {
    const group = wordsBySpelling.get(word) || [];
    if (group.length < 2) return {};
    const homographs = group.map(([id, , kana, , meaning, , , , entry]) => {
      const gloss = entry?.answer_zh || meaning;
      const accent = pitchAccentLabel(id);
      const partOfSpeech = partOfSpeechLabel(entry);
      return {
        reading: kana,
        gloss,
        ...(accent ? { accent } : {}),
        ...(partOfSpeech ? { partOfSpeech } : {}),
        ...(id === sourceId ? { isCurrent: true } : {}),
      };
    });
    return {
      homographs: [
        ...homographs.filter((item) => item.isCurrent),
        ...homographs.filter((item) => !item.isCurrent),
      ],
    };
  };
  const clipTexts = homophoneClipTexts();
  return words.flatMap(([
    sourceId,
    word,
    reading,
    romaji,
    meaning,
    example,
    translation,
    entryExamples,
    sourceEntry,
  ], index) => {
    const shortMeaning = meaning;
    // 日→中 answers drop notes that only restate the part of speech shown
    // before them (仕事 工作；职业（名词）→ 工作；职业); 中→日 prompts keep them
    // to tell 仕事 from 働く.
    const answerMeaning = sourceEntry?.answer_zh || meaning;
    const categoryLabel = vocabCategoryLabel(sourceEntry);
    const partOfSpeech = partOfSpeechLabel(sourceEntry);
    // Reviewed sense groups of the 日→中 meaning, most common first; a note on
    // the whole word (（自动词）) stays apart from the last sense. validate.js
    // checks that senses and note join back into that meaning unchanged.
    const senses = Array.isArray(sourceEntry?.senses_zh) ? sourceEntry.senses_zh : [];
    // Furigana, romaji and speech for the examples are worked out the first time
    // a card shows them: building them for a whole level up front froze the
    // first opening of a vocab deck for over half a second on phones. Both
    // directions share the result.
    let builtExamples = null;
    const examplesOf = () => {
      if (!builtExamples) {
        builtExamples = buildExamples(
          word,
          reading,
          meaning,
          example,
          translation,
          entryExamples,
          sourceEntry,
        );
      }
      return builtExamples;
    };
    const firstExample = entryExamples.length
      ? entryExamples[0]
      : hasRealExample(example)
        ? { ja: example, zh: translation }
        : null;
    const sentencePrompt = stripSentencePeriods(firstExample?.zh || "");
    const sentenceAnswer = stripSentencePeriods(firstExample?.ja || "");
    const speechReading = vocabSpeechKana(sourceEntry?.speech_reading || reading, romaji);
    // The kana sit under the word like a dictionary's phonetics (the accent as a
    // superscript between them and the note); vocab cards have no 说明 section.
    const speechNote = sourceEntry?.speech_reading && sourceEntry.speech_reading !== reading
      ? `（语音示范：${sourceEntry.speech_reading}）`
      : "";
    const readingNote = `${otherReadingsLabel(sourceEntry, reading)}${speechNote}`;
    const pitchAccent = pitchAccentLabel(sourceId);
    const speechClip = clipTexts.get(sourceId) ? { speechClip: clipTexts.get(sourceId) } : {};
    const homophoneFields = homophonesFor(sourceId, answerMeaning);
    const readingFields = {
      reading,
      ...(pitchAccent ? { pitchAccent } : {}),
      ...(readingNote ? { readingNote } : {}),
    };
    // Keep stable IDs in a namespace that can never collide with the old
    // array-index IDs (for example, old `vocab-n4-100-ja`).
    const cardBaseId = `vocab-entry-${sourceId}`;
    const sourceNumber = Number.parseInt(String(sourceId).split("-").at(-1), 10);
    // N3 and N2 cards were introduced with stable IDs, so they have no array-index aliases.
    const legacyIndexes = !hasLegacyIndexIds
      ? []
      : Number.isInteger(sourceNumber) ? [sourceNumber - 1] : [index];
    if (sourceId === "n5-040") legacyIndexes.push(40);
    const uniqueLegacyIndexes = [...new Set(legacyIndexes.filter((value) => value >= 0))];
    const mergedSourceIds = Array.isArray(sourceEntry?.merged_source_ids)
      ? sourceEntry.merged_source_ids
      : [];
    const mergedLegacyIndexes = mergedSourceIds.flatMap((mergedId) => {
      const mergedNumber = Number.parseInt(String(mergedId).split("-").at(-1), 10);
      if (!Number.isInteger(mergedNumber) || mergedNumber < 1) return [];
      const mergedPrefix = String(mergedId).startsWith("n4-") ? "vocab-n4" : "vocab";
      const indexes = [mergedNumber - 1];
      if (mergedId === "n5-040") indexes.push(40);
      return [...new Set(indexes)].map((legacyIndex) => [mergedPrefix, legacyIndex]);
    });
    const legacyIdsFor = (direction) => [...new Set([
      ...uniqueLegacyIndexes.map((legacyIndex) => `${idPrefix}-${legacyIndex}-${direction}`),
      ...mergedLegacyIndexes.map(
        ([mergedPrefix, legacyIndex]) => `${mergedPrefix}-${legacyIndex}-${direction}`,
      ),
      ...mergedSourceIds.map((mergedId) => `vocab-entry-${mergedId}-${direction}`),
      ...(retiredGrammarIdsByVocab.get(sourceId) || []).map(
        (grammarId) => `grammar-${grammarId}-${direction}`,
      ),
    ])];

    return [
      {
        id: `${cardBaseId}-ja`,
        deck: deckJaZh,
        sourceId,
        isVocab: true,
        wordKey: cardBaseId,
        legacyIds: legacyIdsFor("ja"),
        type: `${typePrefix} ${categoryLabel} 日文 → 中文`,
        prompt: word,
        promptLang: "ja",
        answer: answerMeaning,
        answerLang: "zh-CN",
        // Only 日→中 answers lead their meaning with the part of speech and
        // list a meaning with several senses one per line.
        ...(partOfSpeech ? { partOfSpeech } : {}),
        ...(senses.length > 1 ? { senses } : {}),
        ...(senses.length > 1 && sourceEntry?.sense_note_zh ? { senseNote: sourceEntry.sense_note_zh } : {}),
        ...homographsFor(sourceId, word),
        meta: "",
        ...readingFields,
        ...homophoneFields,
        speech: speechReading,
        ...speechClip,
        frontSpeech: speechReading,
        get examples() {
          return examplesOf();
        },
      },
      {
        id: `${cardBaseId}-zh`,
        deck: deckZhJa,
        sourceId,
        isVocab: true,
        wordKey: cardBaseId,
        legacyIds: legacyIdsFor("zh"),
        type: `${typePrefix} ${categoryLabel} 中文 → 日文`,
        prompt: shortMeaning,
        promptLang: "zh-CN",
        subtle: sentencePrompt,
        subtleLang: "zh-CN",
        answer: word,
        answerLang: "ja",
        meta: "",
        ...readingFields,
        ...homophoneFields,
        sentenceAnswer,
        speech: speechReading,
        ...speechClip,
        frontSpeech: "",
        get examples() {
          return examplesOf();
        },
      },
    ];
  });
}

// Homophones speak the same kana but not always with the same accent (雨 ア'メ /
// 飴 アメ, 橋 ハシ / 箸 ハ'シ), and clips are keyed by text. Words in a group
// whose isolated accent differs get the clip text 「kana｜headword」 so each
// card plays its own accent; a word without a Kanjium accent counts as differing.
// Affixes (～回) keep the shared kana clip: they have no isolated accent.
// Isolated, an accent on the last mora (尾高) sounds the same as 平板.
function homophoneClipTexts() {
  const moraCount = (kana) => [...kana].filter((character) => !"ゃゅょぁぃぅぇぉゎャュョァィゥェォヮ".includes(character)).length;
  const groups = new Map();
  allVocabWords.forEach(([sourceId, word, reading, romaji, , , , , sourceEntry]) => {
    if (/[～〜]/u.test(word)) return;
    const speech = vocabSpeechKana(sourceEntry?.speech_reading || reading, romaji);
    if (!groups.has(speech)) groups.set(speech, []);
    const accent = pitchAccentEntries[sourceId]?.[0];
    const accentShape = Number.isInteger(accent) ? (accent === moraCount(speech) ? 0 : accent) : `?${word}`;
    // A verb's final う is its own mora (酔う ヨウ), unlike a long vowel (用 ヨー).
    const verbU =
      (sourceEntry?.part_of_speech || "").split("/").includes("verb") && /[おこそとのほもよろごぞどぼぽょ]う$/u.test(speech);
    const shape = `${accentShape}${verbU ? "u" : ""}`;
    groups.get(speech).push({ sourceId, word, shape });
  });
  const clipTexts = new Map();
  groups.forEach((members, speech) => {
    if (new Set(members.map(({ shape }) => shape)).size < 2) return;
    members.forEach(({ sourceId, word }) => clipTexts.set(sourceId, `${speech}｜${word}`));
  });
  return clipTexts;
}

function makeVocabCards(level) {
  const n5Cards = () =>
    makeVocabDeckCards({
      deckJaZh: "vocab-ja-zh",
      deckZhJa: "vocab-zh-ja",
      idPrefix: "vocab",
      typePrefix: "N5",
      words: n5Words,
    });
  const n4Cards = () =>
    makeVocabDeckCards({
      deckJaZh: "vocab-n4-ja-zh",
      deckZhJa: "vocab-n4-zh-ja",
      idPrefix: "vocab-n4",
      typePrefix: "N4",
      words: n4Words,
    });

  const n3Cards = () =>
    makeVocabDeckCards({
      deckJaZh: "vocab-n3-ja-zh",
      deckZhJa: "vocab-n3-zh-ja",
      hasLegacyIndexIds: false,
      idPrefix: "vocab-n3",
      typePrefix: "N3",
      words: n3Words,
    });

  const n2Cards = () =>
    makeVocabDeckCards({
      deckJaZh: "vocab-n2-ja-zh",
      deckZhJa: "vocab-n2-zh-ja",
      hasLegacyIndexIds: false,
      idPrefix: "vocab-n2",
      typePrefix: "N2",
      words: n2Words,
    });

  if (level === "N5") return n5Cards();
  if (level === "N4") return n4Cards();
  if (level === "N3") return n3Cards();
  if (level === "N2") return n2Cards();
  return [...n5Cards(), ...n4Cards(), ...n3Cards(), ...n2Cards()];
}

// Groups bundle confusable patterns (ば・たら・と・なら, そうだ・ようだ・らしい)
// so a level can be studied one group at a time; every grammar card is tagged
// with its group's label.
const grammarGroups = Array.isArray(window.AYAYA_GRAMMAR_DATA?.groups)
  ? window.AYAYA_GRAMMAR_DATA.groups
  : [];
const grammarGroupLabels = new Map(grammarGroups.map((group) => [group.id, group.label]));

// 说明 rows of a grammar point's sentence cards. Its 辨析 (how it differs from
// the points it is most often confused with) is shown on the pattern-focused
// 文型 and 选择题 cards, whose answers are short enough to keep it on one screen.
function grammarMeta(entry) {
  return [
    `接续：${entry.formation}`,
    `意思：${entry.meaningZh}`,
    entry.note ? `提示：${entry.note}` : "",
  ].filter(Boolean).join("　");
}

const grammarBlank = "（　　）";

// Ends a choice explanation with 。 unless it already ends in its own mark
// (……怎么样？ would otherwise read ？。).
function asSentence(text) {
  return /[。？！]$/u.test(text) ? text : `${text}。`;
}

// The 选择题 deck is a fill-in drill: each reviewed example with the pattern
// blanked out and its Chinese translation as the cue, one card per example so a
// point is practised in several sentences. The three wrong options are reviewed
// one by one (a confusable pattern, a wrong conjugation or a form that changes
// the meaning) and each says why it does not fit; validation checks that the
// blank stands for exactly one place in the sentence. The first drill keeps the
// ids it had when every point had a single drill, so its progress carries over.
function makeGrammarChoiceCard(entry, examples, drill, drillIndex) {
  const levelKey = entry.level.toLowerCase();
  const example = examples[drill.example];
  const suffix = drillIndex === 0 ? "" : `-${drillIndex + 1}`;
  const choicePrefix = drillIndex === 0 ? entry.id : `${entry.id}-${drillIndex + 1}`;
  const correctChoiceId = `${choicePrefix}-correct`;
  const choices = [
    {
      id: correctChoiceId,
      isCorrect: true,
      text: drill.blank,
      reason: asSentence(`正确。${entry.pattern}：${entry.meaningZh}`),
    },
    ...drill.distractors.map((distractor, index) => ({
      id: `${choicePrefix}-drill-${index + 1}`,
      isCorrect: false,
      text: distractor.text,
      reason: asSentence(`错误。${distractor.why}`),
    })),
  ];

  return {
    id: `grammar-${entry.id}-choice${suffix}`,
    legacyIds: retiredGrammarIdsFor(entry, "choice", drillIndex),
    deck: `grammar-${levelKey}-choice`,
    isGrammar: true,
    isChoice: true,
    grammarKey: entry.id,
    grammarLevel: entry.level,
    grammarGroup: entry.group,
    tag: grammarGroupLabels.get(entry.group) || "",
    type: `${entry.level} 语法填空`,
    prompt: example.ja.replace(drill.blank, grammarBlank),
    promptLang: "ja",
    subtle: example.zh,
    subtleLang: "zh-CN",
    choiceLang: "ja",
    answer: example.ja,
    answerLang: "ja",
    // The correct option's explanation already names the pattern and meaning.
    meta: entry.contrast ? `辨析：${entry.contrast}` : "",
    // 提示 before answering: the pattern and its formation; the learner still
    // has to fit them to this sentence.
    hint: { pattern: entry.pattern, formation: entry.formation },
    sentenceAnswer: example.ja,
    speech: example.speech,
    frontSpeech: "",
    choices,
    correctChoiceId,
    // Answered, the card shows the completed sentence only.
    examples: [example],
  };
}

function legacyVocabIdsForGrammar(entry, direction) {
  return (Array.isArray(entry?.retiredVocabSourceIds) ? entry.retiredVocabSourceIds : [])
    .flatMap((sourceId) => {
      const sourceNumber = Number.parseInt(String(sourceId).split("-").at(-1), 10);
      const prefix = String(sourceId).startsWith("n4-") ? "vocab-n4" : "vocab";
      return [
        `vocab-entry-${sourceId}-${direction}`,
        ...(Number.isInteger(sourceNumber) && sourceNumber > 0
          ? [`${prefix}-${sourceNumber - 1}-${direction}`]
          : []),
      ];
    });
}

// A grammar point retired into a near-identical one at another level (N4
// 〜の中で into N5 〜の中で〜が一番) hands each of its cards' progress to the
// same kind of card here: card is "zh", "ja", "pattern" or "choice", and a
// drill keeps its index.
function retiredGrammarIdsFor(entry, card, drillIndex = 0) {
  return (Array.isArray(entry?.retiredGrammarIds) ? entry.retiredGrammarIds : []).map((grammarId) =>
    card === "choice"
      ? `grammar-${grammarId}-choice${drillIndex === 0 ? "" : `-${drillIndex + 1}`}`
      : `grammar-${grammarId}-${card}`,
  );
}

function makeGrammarCards(level) {
  return grammarEntries.filter((entry) => !level || entry.level === level).flatMap((entry) => {
    const levelKey = entry.level.toLowerCase();
    const examples = normalizeExamples(Array.isArray(entry.examples) ? entry.examples.slice(0, 3) : []);
    const baseMeta = grammarMeta(entry);
    const groupFields = {
      grammarGroup: entry.group,
      tag: grammarGroupLabels.get(entry.group) || "",
    };
    const answerJa = stripSentencePeriods(entry.answerJa);
    const promptZh = stripSentencePeriods(entry.promptZh);
    const firstExample = examples[0] || { ja: answerJa || "", zh: promptZh || "" };
    const answerSpeech = sentenceSpeech(answerJa, examples);

    return [
      {
        id: `grammar-${entry.id}-zh`,
        legacyIds: [...legacyVocabIdsForGrammar(entry, "zh"), ...retiredGrammarIdsFor(entry, "zh")],
        deck: `grammar-${levelKey}-zh-ja`,
        isGrammar: true,
        grammarKey: entry.id,
        grammarLevel: entry.level,
        ...groupFields,
        type: `${entry.level} 语法 中文 → 日文`,
        prompt: promptZh,
        promptLang: "zh-CN",
        subtle: entry.pattern,
        subtleLang: "ja",
        answer: answerJa,
        answerLang: "ja",
        meta: baseMeta,
        sentenceAnswer: answerJa,
        speech: answerSpeech,
        frontSpeech: "",
        examples,
      },
      {
        id: `grammar-${entry.id}-ja`,
        legacyIds: [...legacyVocabIdsForGrammar(entry, "ja"), ...retiredGrammarIdsFor(entry, "ja")],
        deck: `grammar-${levelKey}-ja-zh`,
        isGrammar: true,
        grammarKey: entry.id,
        grammarLevel: entry.level,
        ...groupFields,
        type: `${entry.level} 语法 日文 → 中文`,
        prompt: answerJa,
        promptLang: "ja",
        subtle: entry.pattern,
        subtleLang: "ja",
        answer: promptZh,
        answerLang: "zh-CN",
        meta: baseMeta,
        sentenceAnswer: promptZh,
        speech: answerSpeech,
        frontSpeech: answerSpeech,
        examples,
      },
      {
        id: `grammar-${entry.id}-pattern`,
        legacyIds: retiredGrammarIdsFor(entry, "pattern"),
        deck: `grammar-${levelKey}-pattern-zh`,
        isGrammar: true,
        grammarKey: entry.id,
        grammarLevel: entry.level,
        ...groupFields,
        type: `${entry.level} 文型 → 含义/接续`,
        // The pattern alone: an example on the front gives the meaning away.
        prompt: entry.pattern,
        promptLang: "ja",
        answer: entry.meaningZh,
        answerLang: "zh-CN",
        meta: [
          `接续：${entry.formation}`,
          entry.note ? `提示：${entry.note}` : "",
          entry.contrast ? `辨析：${entry.contrast}` : "",
        ].filter(Boolean).join("　"),
        sentenceAnswer: firstExample.zh,
        speech: firstExample.speech || sentenceSpeech(firstExample.ja),
        frontSpeech: "",
        examples,
      },
      ...entry.drills.map((drill, drillIndex) =>
        makeGrammarChoiceCard(entry, examples, drill, drillIndex)),
    ];
  });
}

// Reviewed word divisions (example-readings.js spans and multi-word readings)
// whose surface starts at index in text; used to audit word-by-word ruby.
function reviewedWordSplitsAt(text, index) {
  return [
    ...(exampleReadingSpansByText.get(text) || []).map((words) => words.map(([word]) => word)),
    ...[...reviewedCompoundWordSplits.values()].map(({ surfaces }) => surfaces),
  ].filter((surfaces) => text.startsWith(surfaces.join(""), index));
}

window.AYAYA_JP_CARD_DATA = {
  sourceNotes,
  grammarGroups,
  furiganaEntries: furiganaByLength,
  kanaToRomaji,
  makeGrammarCards,
  makeKanaCards: kanaCards.makeKanaCards,
  makeVocabCards,
  reviewedWordSplitsAt,
};
})();
