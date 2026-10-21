// Kana and pronunciation cards. Loaded on its own, ahead of the vocabulary and
// grammar data, so the 基础 modules are ready on the first screen; card-data.js
// reads kanaRows from here for romaji and its reviewed-reading signature.
(() => {
const kanaRows = [
  [
    "あ",
    "ア",
    "a"
  ],
  [
    "い",
    "イ",
    "i"
  ],
  [
    "う",
    "ウ",
    "u"
  ],
  [
    "え",
    "エ",
    "e"
  ],
  [
    "お",
    "オ",
    "o"
  ],
  [
    "か",
    "カ",
    "ka"
  ],
  [
    "き",
    "キ",
    "ki"
  ],
  [
    "く",
    "ク",
    "ku"
  ],
  [
    "け",
    "ケ",
    "ke"
  ],
  [
    "こ",
    "コ",
    "ko"
  ],
  [
    "さ",
    "サ",
    "sa"
  ],
  [
    "し",
    "シ",
    "shi"
  ],
  [
    "す",
    "ス",
    "su"
  ],
  [
    "せ",
    "セ",
    "se"
  ],
  [
    "そ",
    "ソ",
    "so"
  ],
  [
    "た",
    "タ",
    "ta"
  ],
  [
    "ち",
    "チ",
    "chi"
  ],
  [
    "つ",
    "ツ",
    "tsu"
  ],
  [
    "て",
    "テ",
    "te"
  ],
  [
    "と",
    "ト",
    "to"
  ],
  [
    "な",
    "ナ",
    "na"
  ],
  [
    "に",
    "ニ",
    "ni"
  ],
  [
    "ぬ",
    "ヌ",
    "nu"
  ],
  [
    "ね",
    "ネ",
    "ne"
  ],
  [
    "の",
    "ノ",
    "no"
  ],
  [
    "は",
    "ハ",
    "ha"
  ],
  [
    "ひ",
    "ヒ",
    "hi"
  ],
  [
    "ふ",
    "フ",
    "fu"
  ],
  [
    "へ",
    "ヘ",
    "he"
  ],
  [
    "ほ",
    "ホ",
    "ho"
  ],
  [
    "ま",
    "マ",
    "ma"
  ],
  [
    "み",
    "ミ",
    "mi"
  ],
  [
    "む",
    "ム",
    "mu"
  ],
  [
    "め",
    "メ",
    "me"
  ],
  [
    "も",
    "モ",
    "mo"
  ],
  [
    "や",
    "ヤ",
    "ya"
  ],
  [
    "ゆ",
    "ユ",
    "yu"
  ],
  [
    "よ",
    "ヨ",
    "yo"
  ],
  [
    "ら",
    "ラ",
    "ra"
  ],
  [
    "り",
    "リ",
    "ri"
  ],
  [
    "る",
    "ル",
    "ru"
  ],
  [
    "れ",
    "レ",
    "re"
  ],
  [
    "ろ",
    "ロ",
    "ro"
  ],
  [
    "わ",
    "ワ",
    "wa"
  ],
  [
    "を",
    "ヲ",
    "wo"
  ],
  [
    "ん",
    "ン",
    "n"
  ],
  [
    "が",
    "ガ",
    "ga"
  ],
  [
    "ぎ",
    "ギ",
    "gi"
  ],
  [
    "ぐ",
    "グ",
    "gu"
  ],
  [
    "げ",
    "ゲ",
    "ge"
  ],
  [
    "ご",
    "ゴ",
    "go"
  ],
  [
    "ざ",
    "ザ",
    "za"
  ],
  [
    "じ",
    "ジ",
    "ji"
  ],
  [
    "ず",
    "ズ",
    "zu"
  ],
  [
    "ぜ",
    "ゼ",
    "ze"
  ],
  [
    "ぞ",
    "ゾ",
    "zo"
  ],
  [
    "だ",
    "ダ",
    "da"
  ],
  [
    "ぢ",
    "ヂ",
    "ji"
  ],
  [
    "づ",
    "ヅ",
    "zu"
  ],
  [
    "で",
    "デ",
    "de"
  ],
  [
    "ど",
    "ド",
    "do"
  ],
  [
    "ば",
    "バ",
    "ba"
  ],
  [
    "び",
    "ビ",
    "bi"
  ],
  [
    "ぶ",
    "ブ",
    "bu"
  ],
  [
    "べ",
    "ベ",
    "be"
  ],
  [
    "ぼ",
    "ボ",
    "bo"
  ],
  [
    "ぱ",
    "パ",
    "pa"
  ],
  [
    "ぴ",
    "ピ",
    "pi"
  ],
  [
    "ぷ",
    "プ",
    "pu"
  ],
  [
    "ぺ",
    "ペ",
    "pe"
  ],
  [
    "ぽ",
    "ポ",
    "po"
  ],
  [
    "きゃ",
    "キャ",
    "kya"
  ],
  [
    "きゅ",
    "キュ",
    "kyu"
  ],
  [
    "きょ",
    "キョ",
    "kyo"
  ],
  [
    "ぎゃ",
    "ギャ",
    "gya"
  ],
  [
    "ぎゅ",
    "ギュ",
    "gyu"
  ],
  [
    "ぎょ",
    "ギョ",
    "gyo"
  ],
  [
    "しゃ",
    "シャ",
    "sha"
  ],
  [
    "しゅ",
    "シュ",
    "shu"
  ],
  [
    "しょ",
    "ショ",
    "sho"
  ],
  [
    "じゃ",
    "ジャ",
    "ja"
  ],
  [
    "じゅ",
    "ジュ",
    "ju"
  ],
  [
    "じょ",
    "ジョ",
    "jo"
  ],
  [
    "ちゃ",
    "チャ",
    "cha"
  ],
  [
    "ちゅ",
    "チュ",
    "chu"
  ],
  [
    "ちょ",
    "チョ",
    "cho"
  ],
  [
    "にゃ",
    "ニャ",
    "nya"
  ],
  [
    "にゅ",
    "ニュ",
    "nyu"
  ],
  [
    "にょ",
    "ニョ",
    "nyo"
  ],
  [
    "ひゃ",
    "ヒャ",
    "hya"
  ],
  [
    "ひゅ",
    "ヒュ",
    "hyu"
  ],
  [
    "ひょ",
    "ヒョ",
    "hyo"
  ],
  [
    "びゃ",
    "ビャ",
    "bya"
  ],
  [
    "びゅ",
    "ビュ",
    "byu"
  ],
  [
    "びょ",
    "ビョ",
    "byo"
  ],
  [
    "ぴゃ",
    "ピャ",
    "pya"
  ],
  [
    "ぴゅ",
    "ピュ",
    "pyu"
  ],
  [
    "ぴょ",
    "ピョ",
    "pyo"
  ],
  [
    "みゃ",
    "ミャ",
    "mya"
  ],
  [
    "みゅ",
    "ミュ",
    "myu"
  ],
  [
    "みょ",
    "ミョ",
    "myo"
  ],
  [
    "りゃ",
    "リャ",
    "rya"
  ],
  [
    "りゅ",
    "リュ",
    "ryu"
  ],
  [
    "りょ",
    "リョ",
    "ryo"
  ]
];

const specialRows = [
  {
    id: "special-long-aa",
    legacyIds: ["special-0", "special-1"],
    type: "长音",
    prompt: "ああ",
    answer: "aa（あ段长音）",
    meta: "长音：ああ　罗马音：aa　例词：おかあさん",
    speech: "おかあさん",
  },
  {
    id: "special-long-ii",
    legacyIds: ["special-2", "special-3"],
    type: "长音",
    prompt: "いい",
    answer: "ii（い段长音）",
    meta: "长音：いい　罗马音：ii　例词：おにいさん",
    speech: "おにいさん",
  },
  {
    id: "special-long-uu",
    legacyIds: ["special-4", "special-5"],
    type: "长音",
    prompt: "うう",
    answer: "uu（う段长音）",
    meta: "长音：うう　罗马音：uu　例词：くうき",
    speech: "くうき",
  },
  {
    id: "special-long-ei",
    legacyIds: ["special-6", "special-7"],
    type: "长音",
    prompt: "えい",
    answer: "ei（常读作长音 [eː]，也可能保留 [ei]）",
    meta: "长音：えい　罗马音：ei　例词：せんせい",
    speech: "せんせい",
  },
  {
    id: "special-long-ee",
    legacyIds: ["special-8"],
    type: "长音",
    prompt: "ええ",
    answer: "ee（え段长音）",
    meta: "长音：ええ　罗马音：ee　例词：おねえさん",
    speech: "おねえさん",
  },
  {
    id: "special-long-ou",
    legacyIds: ["special-9", "special-10"],
    type: "长音",
    prompt: "おう",
    answer: "ou（常读作长音 [oː]）",
    meta: "长音：おう　罗马音：ou　例词：こうこう",
    speech: "こうこう",
  },
  {
    id: "special-long-oo",
    legacyIds: ["special-11"],
    type: "长音",
    prompt: "おお",
    answer: "oo（お段长音）",
    meta: "长音：おお　罗马音：oo　例词：おおきい",
    speech: "おおきい",
  },
  {
    id: "special-long-katakana",
    legacyIds: ["special-12", "special-13", "special-14"],
    type: "长音",
    prompt: "ー",
    answer: "片假名长音符",
    meta: "长音符：ー　例词：コーヒー",
    speech: "コーヒー",
  },
  {
    id: "special-sokuon-k",
    legacyIds: ["special-15"],
    type: "促音",
    prompt: "っ + k",
    answer: "kk",
    meta: "促音：っ + k　罗马音：kk　例词：がっこう",
    speech: "がっこう",
  },
  {
    id: "special-sokuon-s",
    legacyIds: ["special-16"],
    type: "促音",
    prompt: "っ + s",
    answer: "ss",
    meta: "促音：っ + s　罗马音：ss　例词：ざっし",
    speech: "ざっし",
  },
  {
    id: "special-sokuon-t",
    legacyIds: ["special-17", "special-18"],
    type: "促音",
    prompt: "っ + t",
    answer: "tt",
    meta: "促音：っ + t　罗马音：tt　例词：きって",
    speech: "きって",
  },
  {
    id: "special-sokuon-p",
    legacyIds: ["special-19", "special-20", "special-24"],
    type: "促音",
    prompt: "っ／ッ + p",
    answer: "pp",
    meta: "促音：っ／ッ + p　罗马音：pp　例词：きっぷ",
    speech: "きっぷ",
  },
  {
    id: "special-sokuon-ch",
    legacyIds: ["special-21"],
    type: "促音",
    prompt: "っ + ch",
    answer: "tch",
    meta: "促音：っ + ch　罗马音：tch　例词：こっち",
    speech: "こっち",
  },
  {
    id: "special-sokuon-g",
    legacyIds: ["special-22"],
    type: "促音",
    prompt: "ッ + g",
    answer: "gg",
    meta: "促音：ッ + g　罗马音：gg　例词：バッグ",
    speech: "バッグ",
  },
  {
    id: "special-sokuon-d",
    legacyIds: ["special-23"],
    type: "促音",
    prompt: "ッ + d",
    answer: "dd",
    meta: "促音：ッ + d　罗马音：dd　例词：ベッド",
    speech: "ベッド",
  },
  {
    id: "special-hatsuon-final",
    legacyIds: ["special-25"],
    type: "拨音",
    prompt: "ん（词尾）",
    answer: "n",
    meta: "拨音：ん（词尾）　罗马音：n　例词：ほん",
    speech: "ほん",
  },
  {
    id: "special-hatsuon-bpm",
    legacyIds: ["special-26", "special-27"],
    type: "拨音",
    prompt: "ん + b／p／m",
    answer: "n（发音会受后音影响）",
    meta: "拨音：ん + b／p／m　罗马音：n　例词：しんぶん",
    speech: "しんぶん",
  },
  {
    id: "special-hatsuon-vowel-y",
    legacyIds: [],
    type: "拨音",
    prompt: "ん + 元音／y",
    answer: "n'",
    meta: "拨音：ん + 元音／y　罗马音：n'　例词：きんようび",
    speech: "きんようび",
  },
  {
    id: "special-particle-wa",
    legacyIds: ["special-28"],
    type: "助词",
    prompt: "助词 は",
    answer: "wa",
    meta: "助词：は　读音：wa　例：わたしは",
    speech: "わたしは",
  },
  {
    id: "special-particle-e",
    legacyIds: ["special-29"],
    type: "助词",
    prompt: "助词 へ",
    answer: "e",
    meta: "助词：へ　读音：e　例：えきへ",
    speech: "えきへ",
  },
  {
    id: "special-particle-o",
    legacyIds: ["special-30"],
    type: "助词",
    prompt: "助词 を",
    answer: "o",
    meta: "助词：を　读音：o　例：ほんを",
    speech: "ほんを",
  },
  ...[
    ["fa", "ファ", "外来音", "ファイル"],
    ["fi", "フィ", "外来音", "フィルム"],
    ["fe", "フェ", "外来音", "フェリー"],
    ["fo", "フォ", "外来音", "フォーク"],
    ["she", "シェ", "外来音", "シェア"],
    ["je", "ジェ", "外来音", "ジェット"],
    ["che", "チェ", "外来音", "チェック"],
    ["ti", "ティ", "外来音", "パーティー"],
    ["di", "ディ", "外来音", "ディナー"],
    ["tu", "トゥ", "外来音", "タトゥー"],
    ["du", "ドゥ", "外来音", "ヒンドゥー"],
    ["dyu", "デュ", "外来音", "デュエット"],
    ["wi", "ウィ", "外来音", "ウィーン"],
    ["we", "ウェ", "外来音", "ウェブ"],
    ["wo", "ウォ", "外来音", "ウォーター"],
    ["tsa", "ツァ", "外来音", "モーツァルト"],
    ["tsi", "ツィ", "外来音", "ツィター"],
    ["tse", "ツェ", "外来音", "ツェッペリン"],
    ["tso", "ツォ", "外来音", "カンツォーネ"],
    ["va", "ヴァ", "外来音", "ヴァイオリン"],
    ["vi", "ヴィ", "外来音", "ヴィーナス"],
    ["vu", "ヴ", "外来音", ""],
    ["ve", "ヴェ", "外来音", "ヴェネツィア"],
    ["vo", "ヴォ", "外来音", "ヴォーカル"],
  ].map(([romaji, prompt, type, example], index) => ({
    id: `special-foreign-${romaji}`,
    legacyIds: [`special-${index + 31}`],
    type,
    prompt,
    answer: romaji,
    meta: `外来音：${prompt}　罗马音：${romaji}${example ? `　例词：${example}` : ""}`,
    speech: prompt,
  })),
];

function makeKanaCards() {
  const pureGojuon = new Set([
    "あ",
    "い",
    "う",
    "え",
    "お",
    "か",
    "き",
    "く",
    "け",
    "こ",
    "さ",
    "し",
    "す",
    "せ",
    "そ",
    "た",
    "ち",
    "つ",
    "て",
    "と",
    "な",
    "に",
    "ぬ",
    "ね",
    "の",
    "は",
    "ひ",
    "ふ",
    "へ",
    "ほ",
    "ま",
    "み",
    "む",
    "め",
    "も",
    "や",
    "ゆ",
    "よ",
    "ら",
    "り",
    "る",
    "れ",
    "ろ",
    "わ",
    "を",
    "ん",
  ]);
  const coreRows = kanaRows.filter(([hiragana]) => pureGojuon.has(hiragana));
  const markedRows = kanaRows.filter(
    ([hiragana]) => hiragana.length === 1 && !pureGojuon.has(hiragana),
  );
  const comboRows = kanaRows.filter(([hiragana]) => hiragana.length > 1);
  const handakutenRows = new Set(["ぱ", "ぴ", "ぷ", "ぺ", "ぽ"]);

  const cards = [
    ...coreRows.map(([hiragana, katakana, romaji], index) => ({
      id: `hiragana-${index}`,
      deck: "hiragana",
      type: "平假名",
      prompt: hiragana,
      answer:
        hiragana === "を" ? `${katakana} / wo（作助词时通常读 o）` : `${katakana} / ${romaji}`,
      meta:
        hiragana === "を"
          ? "片假名：ヲ　键盘输入／单个假名罗马字：wo　助词读音：o"
          : `片假名：${katakana}　罗马音：${romaji}`,
      speech: hiragana,
    })),
    ...coreRows.map(([hiragana, katakana, romaji], index) => ({
      id: `katakana-${index}`,
      deck: "katakana",
      type: "片假名",
      prompt: katakana,
      answer:
        hiragana === "を" ? `${hiragana} / wo（作助词时通常读 o）` : `${hiragana} / ${romaji}`,
      meta:
        hiragana === "を"
          ? "平假名：を　键盘输入／单个假名罗马字：wo　助词读音：o"
          : `平假名：${hiragana}　罗马音：${romaji}`,
      speech: hiragana,
    })),
    ...coreRows.map(([hiragana, katakana, romaji], index) => ({
      id: `romaji-${index}`,
      deck: "romaji",
      type: "罗马音",
      prompt: romaji,
      answer: `${hiragana} / ${katakana}`,
      meta:
        hiragana === "を"
          ? "平假名：を　片假名：ヲ　wo 是键盘输入／单个假名写法；作助词时通常读 o"
          : `平假名：${hiragana}　片假名：${katakana}`,
      speech: hiragana,
    })),
    ...markedRows.map(([hiragana, katakana, romaji], index) => {
      const type = handakutenRows.has(hiragana) ? "半浊音" : "浊音";
      return {
        id: `special-marked-${index}`,
        deck: "special",
        type,
        prompt: hiragana,
        answer: `${katakana} / ${romaji}`,
        meta: `${type}：${hiragana}　片假名：${katakana}　罗马音：${romaji}`,
        speech: hiragana,
      };
    }),
    ...comboRows.map(([hiragana, katakana, romaji], index) => ({
      id: `special-yoon-${index}`,
      deck: "special",
      type: "拗音",
      prompt: hiragana,
      answer: `${katakana} / ${romaji}`,
      meta: `拗音：${hiragana}　片假名：${katakana}　罗马音：${romaji}`,
      speech: hiragana,
    })),
    ...specialRows.map((card) => ({
      deck: "special",
      ...card,
    })),
  ];

  return cards.map((card) => ({
    ...card,
    promptLang: card.deck === "romaji" ? "en" : "ja",
    answerLang: "ja",
    subtle: card.deck === "special" ? card.type : card.subtle,
    subtleLang: card.deck === "special" ? "zh-CN" : card.subtleLang,
    frontSpeech:
      card.deck === "romaji" || (card.deck === "special" && card.speech !== card.prompt)
        ? ""
        : card.speech,
  }));
}

window.AYAYA_KANA_CARDS = { kanaRows, makeKanaCards };
})();
