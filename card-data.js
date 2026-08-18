(() => {
const sourceNotes = {
  jlpt: "JLPT 官方不发布固定的词汇/汉字/语法项目清单；本项目的语法覆盖按官方等级说明、题型说明、样题/官方问题集说明，以及常见 N5/N4 教学清单整理。",
  kana: "假名和发音规则按现代学习写法整理；进阶发音是代表性规则与外来音组合精选，不表示使用频率，也不是完整外来音表。单个假名「を」的键盘输入写作 wo；例句罗马字采用便于学习的 Hepburn 式 ASCII 写法：助词「は・へ・を」写作 wa・e・o，「ん」在同一词内的元音或 y 前写作 n'，长音保留假名拼写（如 ou、ei）或重复元音。",
  vocabulary: "N5/N4 标签是项目维护的教学分级，不是官方固定词表。规范词形、原始词形、变体和人工校订说明保存在随项目版本控制的数据文件中。",
  examples: "词汇例句是为本项目编写和校订的短学习句，不作为语料库引文；无法可靠生成纯拉丁字母罗马音时，界面会明确隐藏该行而不显示混合脚本结果。",
};
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
const grammarEntries = window.AYAYA_GRAMMAR_DATA?.entries || [];

const specialRows = [
  {
    id: "special-long-aa",
    legacyIds: ["special-0", "special-1"],
    type: "特殊拍 · 长音",
    prompt: "ああ",
    answer: "aa（あ段长音）",
    meta: "练习目标是延长元音 a。例：おかあさん（妈妈）、おばあさん（奶奶）。",
    speech: "おかあさん",
  },
  {
    id: "special-long-ii",
    legacyIds: ["special-2", "special-3"],
    type: "特殊拍 · 长音",
    prompt: "いい",
    answer: "ii（い段长音）",
    meta: "练习目标是延长元音 i。例：おにいさん（哥哥）、おじいさん（爷爷）。",
    speech: "おにいさん",
  },
  {
    id: "special-long-uu",
    legacyIds: ["special-4", "special-5"],
    type: "特殊拍 · 长音",
    prompt: "うう",
    answer: "uu（う段长音）",
    meta: "练习目标是延长元音 u。例：くうき（空气）、すうじ（数字）。",
    speech: "くうき",
  },
  {
    id: "special-long-ei",
    legacyIds: ["special-6", "special-7"],
    type: "特殊拍 · 长音",
    prompt: "えい",
    answer: "ei（常读作长音 [eː]，也可能保留 [ei]）",
    meta: "拼写是「えい」，实际发音依词而异，不能一律把 ei 当成两个音或一律合成长音。例：せんせい（老师）、えいが（电影）。",
    speech: "せんせい",
  },
  {
    id: "special-long-ee",
    legacyIds: ["special-8"],
    type: "特殊拍 · 长音",
    prompt: "ええ",
    answer: "ee（え段长音）",
    meta: "有些词用「ええ」表示长音。例：おねえさん（姐姐）。",
    speech: "おねえさん",
  },
  {
    id: "special-long-ou",
    legacyIds: ["special-9", "special-10"],
    type: "特殊拍 · 长音",
    prompt: "おう",
    answer: "ou（常读作长音 [oː]）",
    meta: "お段长音常写作「おう」。例：こうこう（高中）、おとうさん（爸爸）。",
    speech: "こうこう",
  },
  {
    id: "special-long-oo",
    legacyIds: ["special-11"],
    type: "特殊拍 · 长音",
    prompt: "おお",
    answer: "oo（お段长音）",
    meta: "有些词用「おお」表示长音。例：おおきい（大的）。",
    speech: "おおきい",
  },
  {
    id: "special-long-katakana",
    legacyIds: ["special-12", "special-13", "special-14"],
    type: "特殊拍 · 长音",
    prompt: "ー",
    answer: "片假名长音符",
    meta: "「ー」把前一个元音延长一拍。例：スーパー（超市）、タクシー（出租车）、コーヒー（咖啡）；这些词只是发音示例，不在本模块重复考词义。",
    speech: "コーヒー",
  },
  {
    id: "special-sokuon-k",
    legacyIds: ["special-15"],
    type: "特殊拍 · 促音",
    prompt: "っ + k",
    answer: "kk",
    meta: "先停顿一拍，再发 k。例：がっこう → gakkou（学校）。",
    speech: "がっこう",
  },
  {
    id: "special-sokuon-s",
    legacyIds: ["special-16"],
    type: "特殊拍 · 促音",
    prompt: "っ + s",
    answer: "ss",
    meta: "先停顿一拍，再发 s。例：ざっし → zasshi（杂志）。",
    speech: "ざっし",
  },
  {
    id: "special-sokuon-t",
    legacyIds: ["special-17", "special-18"],
    type: "特殊拍 · 促音",
    prompt: "っ + t",
    answer: "tt",
    meta: "先停顿一拍，再发 t。例：きって → kitte（邮票）、まって → matte（等一下）。",
    speech: "きって",
  },
  {
    id: "special-sokuon-p",
    legacyIds: ["special-19", "special-20", "special-24"],
    type: "特殊拍 · 促音",
    prompt: "っ／ッ + p",
    answer: "pp",
    meta: "先停顿一拍，再发 p。例：いっぱい → ippai、きっぷ → kippu、カップ → kappu。",
    speech: "きっぷ",
  },
  {
    id: "special-sokuon-ch",
    legacyIds: ["special-21"],
    type: "特殊拍 · 促音",
    prompt: "っ + ch",
    answer: "cch",
    meta: "先停顿一拍，再发 ch。例：こっち → kocchi（这边）。",
    speech: "こっち",
  },
  {
    id: "special-sokuon-g",
    legacyIds: ["special-22"],
    type: "特殊拍 · 促音",
    prompt: "ッ + g",
    answer: "gg",
    meta: "先停顿一拍，再发 g。例：バッグ → baggu（包）。",
    speech: "バッグ",
  },
  {
    id: "special-sokuon-d",
    legacyIds: ["special-23"],
    type: "特殊拍 · 促音",
    prompt: "ッ + d",
    answer: "dd",
    meta: "先停顿一拍，再发 d。例：ベッド → beddo（床）。",
    speech: "ベッド",
  },
  {
    id: "special-hatsuon-final",
    legacyIds: ["special-25"],
    type: "特殊拍 · 拨音",
    prompt: "ん（词尾）",
    answer: "n",
    meta: "词尾的「ん」单独占一拍。例：ほん → hon（书）。",
    speech: "ほん",
  },
  {
    id: "special-hatsuon-bpm",
    legacyIds: ["special-26", "special-27"],
    type: "特殊拍 · 拨音",
    prompt: "ん + b／p／m",
    answer: "n（发音会受后音影响）",
    meta: "鼻音会在发音位置上接近后面的 b、p、m；本项目罗马字仍统一写 n。例：しんぶん → shinbun、さんぽ → sanpo。",
    speech: "しんぶん",
  },
  {
    id: "special-hatsuon-vowel-y",
    legacyIds: [],
    type: "特殊拍 · 拨音",
    prompt: "ん + 元音／y",
    answer: "n'",
    meta: "用撇号划清音节边界。例：きんようび → kin'youbi（金曜日）、げんいん → gen'in（原因）。",
    speech: "きんようび",
  },
  {
    id: "special-particle-wa",
    legacyIds: ["special-28"],
    type: "助词特殊读音",
    prompt: "助词 は",
    answer: "wa",
    meta: "作主题或对比助词时读 wa，不读 ha。例：わたしは → watashi wa（至于我……）。",
    speech: "わたしは",
  },
  {
    id: "special-particle-e",
    legacyIds: ["special-29"],
    type: "助词特殊读音",
    prompt: "助词 へ",
    answer: "e",
    meta: "作方向助词时读 e，不读 he。例：えきへ → eki e（向车站／往车站）。",
    speech: "えきへ",
  },
  {
    id: "special-particle-o",
    legacyIds: ["special-30"],
    type: "助词特殊读音",
    prompt: "助词 を",
    answer: "o",
    meta: "现代标准语中通常读 o；单个假名的键盘输入仍写 wo。例：ほんを → hon o（把书……）。",
    speech: "ほんを",
  },
  ...[
    ["fa", "ファ", "外来音 · 小写ァ", "ファイル"],
    ["fi", "フィ", "外来音 · 小写ィ", "フィルム"],
    ["fe", "フェ", "外来音 · 小写ェ", "フェリー"],
    ["fo", "フォ", "外来音 · 小写ォ", "フォーク"],
    ["she", "シェ", "外来音 · 特殊音", "シェア"],
    ["je", "ジェ", "外来音 · 特殊音", "ジェット"],
    ["che", "チェ", "外来音 · 特殊音", "チェック"],
    ["ti", "ティ", "外来音 · 小写ィ", "パーティー"],
    ["di", "ディ", "外来音 · 小写ィ", "ディナー"],
    ["tu", "トゥ", "外来音 · 小写ゥ", "トゥール"],
    ["du", "ドゥ", "外来音 · 小写ゥ", "ヒンドゥー"],
    ["dyu", "デュ", "外来音 · 小写ュ", "デュエット"],
    ["wi", "ウィ", "外来音 · 小写ィ", "ウィーン"],
    ["we", "ウェ", "外来音 · 小写ェ", "ウェブ"],
    ["wo", "ウォ", "外来音 · 小写ォ", "ウォーター"],
    ["tsa", "ツァ", "外来音 · 小写ァ", "モーツァルト"],
    ["tsi", "ツィ", "外来音 · 小写ィ", "ツィター"],
    ["tse", "ツェ", "外来音 · 小写ェ", "ツェッペリン"],
    ["tso", "ツォ", "外来音 · 小写ォ", "カンツォーネ"],
    ["va", "ヴァ", "外来音 · v", "ヴァイオリン"],
    ["vi", "ヴィ", "外来音 · v", "ヴィーナス"],
    ["vu", "ヴ", "外来音 · 单个假名", "ヴ（ウ加浊点；不是小写假名）"],
    ["ve", "ヴェ", "外来音 · v", "ヴェネツィア"],
    ["vo", "ヴォ", "外来音 · v", "ヴォーカル"],
  ].map(([romaji, prompt, type, example], index) => ({
    id: `special-foreign-${romaji}`,
    legacyIds: [`special-${index + 31}`],
    type,
    prompt,
    answer: romaji,
    meta: `练习目标是外来音「${prompt}」。例：${example}。`,
    speech: prompt,
  })),
];

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

function stripSentencePeriods(text = "") {
  return String(text).trim().replace(/[。．.]+$/g, "");
}

function kanaSurfaceToHiragana(text) {
  return text.replace(/[\u30a1-\u30f6]/g, (char) =>
    String.fromCharCode(char.charCodeAt(0) - 0x60),
  );
}

const kanaRomajiRows = kanaRows
  .flatMap(([hiragana, katakana, romaji]) => [
    [kanaSurfaceToHiragana(hiragana), romaji],
    [kanaSurfaceToHiragana(katakana), romaji],
  ])
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
  ["n5-588", [["降り", "ふり"], ["降っ", "ふっ"]]],
  ["n4-569", [["開き", "ひらき"]]],
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
泣き声|なきこえ
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
`.trim().split("\n").map((line) => line.split("|"));

const allVocabReadingEntries = [...n5Entries, ...n4Entries].flatMap((entry) =>
  readingEntriesForVocabEntry(entry),
);
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

function readingEntriesForText(preferredReadings = []) {
  const entries = [];
  const seenSurfaces = new Set();
  [...preferredReadings, ...furiganaByLength].forEach(([surface, reading]) => {
    if (!surface || !reading || seenSurfaces.has(surface)) return;
    seenSurfaces.add(surface);
    entries.push([surface, reading]);
  });
  return entries.sort((left, right) => right[0].length - left[0].length);
}

function applyKnownReadings(text, preferredReadings = []) {
  const readingEntries = readingEntriesForText(preferredReadings);
  let result = "";
  let index = 0;

  while (index < text.length) {
    const entry = readingEntries.find(([surface]) => {
      if (!text.startsWith(surface, index)) return false;
      const previousCharacter = text[index - 1] || "";
      const nextCharacter = text[index + surface.length] || "";
      const startsInsideCompound =
        isKanjiCharacter(surface[0]) && isKanjiCharacter(previousCharacter);
      const endsInsideCompound =
        isKanjiCharacter(surface.at(-1)) && isKanjiCharacter(nextCharacter);
      return !startsInsideCompound && !endsInsideCompound;
    });
    if (entry) {
      result += entry[1];
      index += entry[0].length;
    } else {
      result += text[index];
      index += 1;
    }
  }

  return result;
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
]);
const particleKanaMarkers = new Map([
  ["は", "\ue000"],
  ["へ", "\ue001"],
  ["を", "\ue002"],
]);
const reviewedExampleTexts = [...new Set(
  [...n5Entries, ...n4Entries, ...grammarEntries]
    .flatMap((entry) => (entry.examples || []).map((example) => stripSentencePeriods(example.ja)))
    .filter(Boolean),
)].sort();
const reviewedExampleTextSet = new Set(reviewedExampleTexts);

function corpusSignature(parts) {
  let hash = 0xcbf29ce484222325n;
  const joined = parts.join("\0");
  for (let index = 0; index < joined.length; index += 1) {
    hash ^= BigInt(joined.charCodeAt(index));
    hash = BigInt.asUintN(64, hash * 0x100000001b3n);
  }
  return `${parts.length}:${hash.toString(16).padStart(16, "0")}`;
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
// corpus. Every other literal は/へ/を position in that exact corpus was
// reviewed as a grammatical particle. No runtime tokenization or conjugation
// guessing is used.
const reviewedLexicalKanaSpans = reviewedSpanMap([
  ["はさみ", [
    "このはさみは紙を切るのに使います",
    "紙をはさみで切ります",
  ]],
  ["はき", [
    "雨の日はこの靴をはきます",
    "海へ行くのでサンダルをはきました",
    "靴をはきます",
    "靴下をはきます",
    "黒いズボンをはきます",
    "朝、靴下をはきました",
  ]],
  ["はいて", [
    "黒いズボンをはいています",
    "白い靴下をはいています",
    "妹は青いスカートをはいています",
    "両方の靴をはいて比べました",
  ]],
  ["はめ", ["寒いので手袋をはめました"]],
  ["はい", [
    "はい、お願いします",
    "はい、そうです",
    "はい、分かりました",
  ]],
  ["おはよう", ["皆さん、おはようございます"]],
  ["はっきり", [
    "今日は山がはっきり見えます",
    "名前をはっきり書いてください",
    "理由をはっきり説明しました",
  ]],
  ["やはり", [
    "やはり雨が降りました",
    "やはり日本語は面白いです",
    "考えてみても、やはり行きたいです",
  ]],
  ["はず", [
    "この道で合っているはずです",
    "この道を行けば、駅に出るはずです",
    "この問題が簡単なはずがありません",
    "まだ七時ですから、店が閉まっているはずがないです",
    "今日は休みのはずです",
    "田中さんはもう着いたはずです",
    "彼がそんなことを言うはずがありません",
    "彼はもう着いたはずです",
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
  ]],
  ["たくさん|歩いて", ["たくさん歩いて疲れました"]],
  ["たくさん|います", ["駅には人がたくさんいます"]],
  ["たくさん|雨", ["昨日、たくさん雨が降りました"]],
  ["たくさん|写しました", ["旅行で写真をたくさん写しました"]],
  ["十分|あります", ["時間は十分あります"]],
  ["もちろん|行きます", ["もちろん行きます"]],
  ["十分|おき", ["このバスは十分おきに来ます"]],
  ["本|より", ["この本はあの本より新しいです"]],
  ["確認|いたします", ["荷物を確認いたします"]],
  ["本|や", [
    "机の上に本やノートなどがあります",
    "机の上に本やノートがあります",
    "本や雑誌などを買いました",
    "本や雑誌などを読みます",
  ]],
]);
const attachedWaTokens = ["こんにちは", "こんばんは", "それでは", "または"];

function reviewedPairSignatureParts(label, pairs) {
  return pairs.map(([surface, reading]) => `${label}:${surface}\u0001${reading}`).sort();
}

function reviewedSpanSignatureParts(label, map) {
  return [...map]
    .map(([text, spans]) => `${label}:${text}\u0001${[...spans].sort().join("\u0002")}`)
    .sort();
}

const reviewedVocabEntries = [...n5Entries, ...n4Entries]
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
  ...attachedWaTokens.map((token) => `attached-wa:${token}`).sort(),
  ...[...unsafeGlobalReadingSurfaces].sort().map((surface) => `unsafe:${surface}`),
  ...kanaRows.map((row) => `kana:${row.join("\u0001")}`).sort(),
];
const reviewedPronunciationSourceSignature = "10271:fdb9538d1db48668";

function reviewedTableMatchesCorpus(map) {
  return [...map].every(([text, spans]) =>
    reviewedExampleTextSet.has(text) && spans.every((span) => text.includes(span.replace("|", ""))),
  );
}

const reviewedPronunciationCorpusIsCurrent =
  corpusSignature(reviewedPronunciationSourceParts) === reviewedPronunciationSourceSignature &&
  reviewedTableMatchesCorpus(reviewedLexicalKanaSpans) &&
  reviewedTableMatchesCorpus(reviewedMoraicNWordBoundaries);

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
  return indexes;
}

function markReviewedPronunciations(text) {
  if (!reviewedPronunciationCorpusIsCurrent || !reviewedExampleTextSet.has(text)) return null;
  const lexicalIndexes = indexesForSpans(text, reviewedLexicalKanaSpans.get(text));
  const boundaryIndexes = boundaryIndexesForText(text);
  const attachedWaIndexes = attachedWaIndexesForText(text);
  let result = "";

  [...text].forEach((character, index) => {
    if (boundaryIndexes.has(index)) result += "\ue004";
    if (lexicalIndexes.has(index)) {
      result += character;
    } else if (attachedWaIndexes.has(index)) {
      result += "\ue003";
    } else {
      result += particleKanaMarkers.get(character) || character;
    }
  });
  return result;
}

function romajiAt(kanaText, index) {
  const markerRomaji = particleRomajiMarkers.get(kanaText[index]);
  if (markerRomaji) return markerRomaji;
  return kanaRomajiRows.find(([surface]) => kanaText.startsWith(surface, index))?.[1] || "";
}

function kanaToRomaji(text) {
  const kanaText = kanaSurfaceToHiragana(text);
  let result = "";
  let index = 0;
  let shouldDoubleNextConsonant = false;

  while (index < kanaText.length) {
    const char = kanaText[index];

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
      result += `${shouldDoubleNextConsonant ? firstConsonant(romaji) : ""}${romaji}${moraSeparator}`;
      shouldDoubleNextConsonant = false;
      index += match[0].length;
      continue;
    }

    result += char;
    shouldDoubleNextConsonant = false;
    index += 1;
  }

  return result.trim();
}

function sentenceToRomaji(text, preferredReadings = []) {
  const reviewedText = stripSentencePeriods(text);
  const pronunciationAwareText = markReviewedPronunciations(reviewedText);
  if (pronunciationAwareText === null) return "";
  const normalizedPunctuation = pronunciationAwareText
    .replace(/[。．]/g, ". ")
    .replace(/、/g, ", ")
    .replace(/[！？]/g, (mark) => (mark === "！" ? "!" : "?"))
    .replace(/[：；]/g, (mark) => (mark === "：" ? ":" : ";"))
    .replace(/[「」『』]/g, "")
    .replace(/[〜～・]/g, " ");
  return kanaToRomaji(applyKnownReadings(normalizedPunctuation, preferredReadings))
    .replace(/\s+/g, " ")
    .replace(/\s+([,!?/:;.])/g, "$1")
    .trim();
}

function isSafeRomaji(text) {
  return /^[A-Za-z0-9\s,.'!?/:;()\-]+$/.test(text);
}

function normalizeExamples(examples = [], preferredReadings = []) {
  return examples.map((example) => {
    const ja = stripSentencePeriods(example.ja || "");
    const zh = stripSentencePeriods(example.zh || "");
    const generatedRomaji = sentenceToRomaji(ja, preferredReadings);
    const hasSafeRomaji = isSafeRomaji(generatedRomaji);
    return {
      ...example,
      ja,
      romaji: hasSafeRomaji ? generatedRomaji : "",
      romajiStatus: hasSafeRomaji ? "available" : "unavailable",
      furiganaEntries: preferredReadings,
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

function makeVocabDeckCards({
  deckJaZh,
  deckZhJa,
  idPrefix,
  typePrefix,
  words,
}) {
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
    const examples = buildExamples(
      word,
      reading,
      meaning,
      example,
      translation,
      entryExamples,
      sourceEntry,
    );
    const sentencePrompt = examples[0]?.zh || "";
    const sentenceAnswer = examples[0]?.ja || "";
    const speechReading = sourceEntry?.speech_reading || reading;
    const meaningMeta = "";
    const speechMeta = sourceEntry?.speech_reading && sourceEntry.speech_reading !== reading
      ? `　语音示范：${sourceEntry.speech_reading}`
      : "";
    const readingMeta = `读音：${reading}${romaji ? `　罗马音：${romaji}` : ""}${speechMeta}${meaningMeta}`;
    // Keep stable IDs in a namespace that can never collide with the old
    // array-index IDs (for example, old `vocab-n4-100-ja`).
    const cardBaseId = `vocab-entry-${sourceId}`;
    const sourceNumber = Number.parseInt(String(sourceId).split("-").at(-1), 10);
    const legacyIndexes = Number.isInteger(sourceNumber) ? [sourceNumber - 1] : [index];
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
    ])];

    return [
      {
        id: `${cardBaseId}-ja`,
        deck: deckJaZh,
        sourceId,
        isVocab: true,
        wordKey: cardBaseId,
        legacyIds: legacyIdsFor("ja"),
        type: `${typePrefix} 日文 → 中文`,
        prompt: word,
        promptLang: "ja",
        subtle: `读音：${reading}`,
        subtleLang: "zh-CN",
        answer: shortMeaning,
        answerLang: "zh-CN",
        meta: readingMeta,
        speech: speechReading,
        frontSpeech: speechReading,
        examples,
      },
      {
        id: `${cardBaseId}-zh`,
        deck: deckZhJa,
        sourceId,
        isVocab: true,
        wordKey: cardBaseId,
        legacyIds: legacyIdsFor("zh"),
        type: `${typePrefix} 中文 → 日文`,
        prompt: shortMeaning,
        promptLang: "zh-CN",
        subtle: sentencePrompt,
        subtleLang: "zh-CN",
        answer: word,
        answerLang: "ja",
        meta: readingMeta,
        sentenceAnswer,
        speech: speechReading,
        frontSpeech: "",
        examples,
      },
    ];
  });
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

  if (level === "N5") return n5Cards();
  if (level === "N4") return n4Cards();
  return [...n5Cards(), ...n4Cards()];
}

const grammarChoiceCount = 4;

function grammarChoiceText(entry) {
  return `意思：${entry.meaningZh}\n接续：${entry.formation}`;
}

function grammarChoiceKeywords(entry) {
  return `${entry.pattern} ${entry.meaningZh} ${entry.formation}`
    .replace(/[〜、。；;：:（）()／/｜|]/g, " ")
    .split(/\s+/)
    .filter((item) => item.length >= 2);
}

function grammarDistractorScore(entry, candidate) {
  const entryKeywords = new Set(grammarChoiceKeywords(entry));
  const candidateKeywords = grammarChoiceKeywords(candidate);
  const sharedKeywordScore = candidateKeywords.filter((item) => entryKeywords.has(item)).length * 4;
  const sameFormationHeadScore =
    entry.formation.slice(0, 2) === candidate.formation.slice(0, 2) ? 4 : 0;
  const meaningOverlapScore = [...entry.meaningZh].filter((char) =>
    candidate.meaningZh.includes(char),
  ).length;

  return sharedKeywordScore + sameFormationHeadScore + meaningOverlapScore;
}

function getGrammarDistractors(entry) {
  const usedTexts = new Set([grammarChoiceText(entry)]);
  return grammarEntries
    .filter((candidate) => candidate.id !== entry.id && candidate.level === entry.level)
    .map((candidate) => ({
      entry: candidate,
      score: grammarDistractorScore(entry, candidate),
    }))
    .sort((left, right) => {
      if (right.score !== left.score) return right.score - left.score;
      return left.entry.id.localeCompare(right.entry.id);
    })
    .filter(({ entry: candidate }) => {
      const text = grammarChoiceText(candidate);
      if (usedTexts.has(text)) return false;
      usedTexts.add(text);
      return true;
    })
    .slice(0, grammarChoiceCount - 1)
    .map(({ entry: candidate }) => candidate);
}

function makeGrammarChoiceCard(entry, examples) {
  const levelKey = entry.level.toLowerCase();
  const correctChoiceId = `${entry.id}-correct`;
  const choices = [
    {
      id: correctChoiceId,
      isCorrect: true,
      sourcePattern: entry.pattern,
      text: grammarChoiceText(entry),
      reason: `正确。${entry.pattern} 表示「${entry.meaningZh}」，接续是「${entry.formation}」。${entry.note ? `记忆点：${entry.note}` : "这个意思和接续都与题干文型一致。"}`,
    },
    ...getGrammarDistractors(entry).map((candidate) => ({
      id: `${entry.id}-distractor-${candidate.id}`,
      isCorrect: false,
      sourcePattern: candidate.pattern,
      text: grammarChoiceText(candidate),
      reason: `错误。这是「${candidate.pattern}」的意思和接续：${candidate.meaningZh} / ${candidate.formation}；它会把题干「${entry.pattern}」的语义或接续链条带偏。`,
    })),
  ];

  return {
    id: `grammar-${entry.id}-choice`,
    deck: `grammar-${levelKey}-choice`,
    isGrammar: true,
    isChoice: true,
    grammarKey: entry.id,
    grammarLevel: entry.level,
    type: `${entry.level} 语法选择题`,
    prompt: `选择「${entry.pattern}」的正确意思和接续`,
    promptLang: "zh-CN",
    subtle: examples[0]?.ja || "",
    subtleLang: "ja",
    answer: grammarChoiceText(entry),
    answerLang: "zh-CN",
    meta: `正确文型：${entry.pattern}${entry.note ? `　提示：${entry.note}` : ""}`,
    sentenceAnswer: examples[0]?.ja || stripSentencePeriods(entry.answerJa),
    speech: examples[0]?.ja || stripSentencePeriods(entry.answerJa),
    frontSpeech: "",
    choices,
    correctChoiceId,
    examples,
  };
}

function makeGrammarCards(level) {
  return grammarEntries.filter((entry) => !level || entry.level === level).flatMap((entry) => {
    const levelKey = entry.level.toLowerCase();
    const examples = normalizeExamples(Array.isArray(entry.examples) ? entry.examples.slice(0, 3) : []);
    const baseMeta = `接续：${entry.formation}　意思：${entry.meaningZh}${entry.note ? `　提示：${entry.note}` : ""}`;
    const answerJa = stripSentencePeriods(entry.answerJa);
    const promptZh = stripSentencePeriods(entry.promptZh);
    const firstExample = examples[0] || { ja: answerJa || "", zh: promptZh || "" };

    return [
      {
        id: `grammar-${entry.id}-zh`,
        deck: `grammar-${levelKey}-zh-ja`,
        isGrammar: true,
        grammarKey: entry.id,
        grammarLevel: entry.level,
        type: `${entry.level} 语法 中文 → 日文`,
        prompt: promptZh,
        promptLang: "zh-CN",
        subtle: `文型：${entry.pattern}`,
        subtleLang: "zh-CN",
        answer: answerJa,
        answerLang: "ja",
        meta: baseMeta,
        sentenceAnswer: answerJa,
        speech: answerJa,
        frontSpeech: "",
        examples,
      },
      {
        id: `grammar-${entry.id}-ja`,
        deck: `grammar-${levelKey}-ja-zh`,
        isGrammar: true,
        grammarKey: entry.id,
        grammarLevel: entry.level,
        type: `${entry.level} 语法 日文 → 中文`,
        prompt: answerJa,
        promptLang: "ja",
        subtle: `文型：${entry.pattern}`,
        subtleLang: "zh-CN",
        answer: promptZh,
        answerLang: "zh-CN",
        meta: baseMeta,
        sentenceAnswer: promptZh,
        speech: answerJa,
        frontSpeech: answerJa,
        examples,
      },
      {
        id: `grammar-${entry.id}-pattern`,
        deck: `grammar-${levelKey}-pattern-zh`,
        isGrammar: true,
        grammarKey: entry.id,
        grammarLevel: entry.level,
        type: `${entry.level} 文型 → 含义/接续`,
        prompt: entry.pattern,
        promptLang: "ja",
        subtle: firstExample.ja,
        subtleLang: "ja",
        answer: `${entry.meaningZh}｜${entry.formation}`,
        answerLang: "zh-CN",
        meta: entry.note ? `提示：${entry.note}` : "",
        sentenceAnswer: firstExample.zh,
        speech: firstExample.ja,
        frontSpeech: "",
        examples,
      },
      makeGrammarChoiceCard(entry, examples),
    ];
  });
}

window.AYAYA_JP_CARD_DATA = {
  sourceNotes,
  furiganaEntries: furiganaByLength,
  makeGrammarCards,
  makeKanaCards,
  makeVocabCards,
};
})();
