// Ayaya JP - Codex-readable curated JLPT N2 vocabulary data.
// Generated from ayaya-n2-codex-vocab.json (npm run sync:vocab); same schema and app compatibility shape as N4.
// Codex extraction target: window.AYAYA_N2_CODEX_VOCAB.entries
// App compatibility: this file also defines window.AYAYA_N2_WORDS and window.AYAYA_N2_TATOEBA_EXAMPLES.

window.AYAYA_N2_CODEX_VOCAB = {
  "schema": {
    "schema_version": "1.0.0",
    "generated_on": "2026-10-29",
    "purpose": "Codex-readable, app-compatible JLPT N2 learning data with Simplified Chinese meanings and natural short Japanese examples written for this project. Public N2 lists vary, so this file follows the community Jonathan Waller N2 list minus words already taught in the N5/N4/N3 files, with pure grammar patterns moved to grammar cards.",
    "fields": {
      "headword": "学习用规范词形。旧写法或不常用写法会保留在 source_form。",
      "source_form": "来源词形；多个常见写法用分号保留。",
      "variants": "可接受写法或变体。",
      "reading": "主读音，通常为平假名；外来语保留片假名。",
      "speech_reading": "可选的 TTS 代表读音；仅在展示读音包含多个候选、不能直接朗读时使用。",
      "reading_variants": "原始读音字段中的所有读音。",
      "romaji": "词条主读音的学习用 Hepburn 式 ASCII 罗马字，用于检索和卡片显示。",
      "part_of_speech": "粗粒度词性，供 Codex 和应用生成卡片使用。",
      "meaning_zh": "学习用简体中文释义。",
      "answer_zh": "可选：日→中卡答案用的释义，只去掉 meaning_zh 里重述词性的括注（如「（名词）」「（连体词，远称）」→「（远称）」）；中→日卡题面仍用 meaning_zh 区分近义词。",
      "senses_zh": "可选：一词多义时按常用度分组的释义（同义词在同一组），依次用「；」连接后与 meaning_zh 完全一致；只用于日→中卡逐行显示。",
      "sense_note_zh": "可选：适用于整个词的说明（如「（自动词）」），接在 senses_zh 之后与 meaning_zh 一致。",
      "kanji_readings": "含汉字词形的整词读音，用于生成 ruby/furigana。",
      "examples": "三个自然、短句优先的日语例句；zh 为简体中文翻译；focus 是句中本词出现的位置（按顺序查找的片段，活用词只到活用形；{after, text} 表示在 after 之后查找 text）；zhFocus 用同样格式标出 zh 中对应的词，没有干净对应时省略。",
      "note_zh": "必要时说明写法、用法或兼容注意。",
      "learning_category": "可选的教学分类：复合词、派生形式、固定表达或常用搭配；未填写时按词性推导卡片标签。"
    },
    "compatibility": {
      "AYAYA_N2_WORDS": "[headword, reading, meaning_zh, first_example_ja, first_example_zh]",
      "AYAYA_N2_TATOEBA_EXAMPLES": "按规范词形、全部 variants 与全部 source_form 写法建立精选例句索引；有歧义的别名不建立唯一映射。"
    },
    "source_notes": [
      "Word selection follows Jonathan Waller's community JLPT N2 list (tanos.co.uk, mirrored with JMdict sequence numbers by stephenmk/yomitan-jlpt-vocab); no official JEES/JF fixed vocabulary list exists for the current JLPT.",
      "Words already in the N5/N4/N3 files are excluded; spellings, readings and parts of speech are checked against JMdict (jmdict-simplified 3.6.2, 2026-10-26)."
    ],
    "entry_count": 828
  },
  "entries": [
    {
      "id": "n2-0001",
      "jlpt": "N2",
      "headword": "改正",
      "source_form": "改正",
      "variants": [
        "改正"
      ],
      "reading": "かいせい",
      "reading_variants": [
        "かいせい"
      ],
      "romaji": "kaisei",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "修改；修订（法律、规则等）",
      "kanji_readings": [
        {
          "form": "改正",
          "reading": "かいせい"
        }
      ],
      "examples": [
        {
          "ja": "法律が改正されて、来年から新しいルールになります。",
          "zh": "法律修改后，从明年起实行新规定。",
          "focus": ["改正"],
          "zhFocus": ["修改"]
        },
        {
          "ja": "電車の時刻表が改正されたので、確認してください。",
          "zh": "电车时刻表修订了，请确认一下。",
          "focus": ["改正"],
          "zhFocus": ["修订"]
        },
        {
          "ja": "会社の規則を改正することになりました。",
          "zh": "公司决定修改规章。",
          "focus": ["改正"],
          "zhFocus": ["修改"]
        }
      ]
    },
    {
      "id": "n2-0002",
      "jlpt": "N2",
      "headword": "基準",
      "source_form": "基準;規準",
      "variants": [
        "基準",
        "規準"
      ],
      "reading": "きじゅん",
      "reading_variants": [
        "きじゅん"
      ],
      "romaji": "kijun",
      "part_of_speech": "noun",
      "meaning_zh": "标准；基准",
      "kanji_readings": [
        {
          "form": "基準",
          "reading": "きじゅん"
        },
        {
          "form": "規準",
          "reading": "きじゅん"
        }
      ],
      "examples": [
        {
          "ja": "安全の基準を満たしていない商品は売れません。",
          "zh": "不符合安全标准的商品不能卖。",
          "focus": ["基準"],
          "zhFocus": ["标准"]
        },
        {
          "ja": "何を基準に選べばいいか分かりません。",
          "zh": "不知道该以什么为标准来选。",
          "focus": ["基準"],
          "zhFocus": ["标准"]
        },
        {
          "ja": "この会社は採用の基準が厳しいです。",
          "zh": "这家公司的录用标准很严格。",
          "focus": ["基準"],
          "zhFocus": ["标准"]
        }
      ]
    },
    {
      "id": "n2-0003",
      "jlpt": "N2",
      "headword": "強化",
      "source_form": "強化",
      "variants": [
        "強化"
      ],
      "reading": "きょうか",
      "reading_variants": [
        "きょうか"
      ],
      "romaji": "kyouka",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "加强；强化",
      "kanji_readings": [
        {
          "form": "強化",
          "reading": "きょうか"
        }
      ],
      "examples": [
        {
          "ja": "警察は駅の警備を強化しました。",
          "zh": "警察加强了车站的警备。",
          "focus": ["強化"],
          "zhFocus": ["加强"]
        },
        {
          "ja": "チームを強化するために、新しい選手を入れました。",
          "zh": "为了加强球队，引进了新选手。",
          "focus": ["強化"],
          "zhFocus": ["加强"]
        },
        {
          "ja": "政府は環境対策を強化すると発表しました。",
          "zh": "政府宣布将加强环境对策。",
          "focus": ["強化"],
          "zhFocus": ["加强"]
        }
      ]
    },
    {
      "id": "n2-0004",
      "jlpt": "N2",
      "headword": "交流",
      "source_form": "交流",
      "variants": [
        "交流"
      ],
      "reading": "こうりゅう",
      "reading_variants": [
        "こうりゅう"
      ],
      "romaji": "kouryuu",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "交流；往来",
      "kanji_readings": [
        {
          "form": "交流",
          "reading": "こうりゅう"
        }
      ],
      "examples": [
        {
          "ja": "留学生と交流するイベントに参加しました。",
          "zh": "参加了和留学生交流的活动。",
          "focus": ["交流"],
          "zhFocus": ["交流"]
        },
        {
          "ja": "二つの町は昔から交流があります。",
          "zh": "两座城镇自古就有往来。",
          "focus": ["交流"],
          "zhFocus": ["往来"]
        },
        {
          "ja": "国際交流の仕事に興味があります。",
          "zh": "对国际交流的工作感兴趣。",
          "focus": ["交流"],
          "zhFocus": ["交流"]
        }
      ]
    },
    {
      "id": "n2-0005",
      "jlpt": "N2",
      "headword": "構造",
      "source_form": "構造",
      "variants": [
        "構造"
      ],
      "reading": "こうぞう",
      "reading_variants": [
        "こうぞう"
      ],
      "romaji": "kouzou",
      "part_of_speech": "noun",
      "meaning_zh": "结构；构造",
      "kanji_readings": [
        {
          "form": "構造",
          "reading": "こうぞう"
        }
      ],
      "examples": [
        {
          "ja": "この建物は地震に強い構造になっています。",
          "zh": "这栋建筑采用了抗震的结构。",
          "focus": ["構造"],
          "zhFocus": ["结构"]
        },
        {
          "ja": "文の構造を図で説明しました。",
          "zh": "用图解释了句子的结构。",
          "focus": ["構造"],
          "zhFocus": ["结构"]
        },
        {
          "ja": "人間の体の構造はとても複雑です。",
          "zh": "人体的构造非常复杂。",
          "focus": ["構造"],
          "zhFocus": ["构造"]
        }
      ]
    },
    {
      "id": "n2-0006",
      "jlpt": "N2",
      "headword": "姿勢",
      "source_form": "姿勢",
      "variants": [
        "姿勢"
      ],
      "reading": "しせい",
      "reading_variants": [
        "しせい"
      ],
      "romaji": "shisei",
      "part_of_speech": "noun",
      "meaning_zh": "姿势；态度",
      "senses_zh": [
        "姿势",
        "态度"
      ],
      "kanji_readings": [
        {
          "form": "姿勢",
          "reading": "しせい"
        }
      ],
      "examples": [
        {
          "ja": "姿勢が悪いと、腰が痛くなります。",
          "zh": "姿势不好的话，腰会疼。",
          "focus": ["姿勢"],
          "zhFocus": ["姿势"]
        },
        {
          "ja": "長い時間同じ姿勢で座っていると疲れます。",
          "zh": "长时间以同一个姿势坐着会累。",
          "focus": ["姿勢"],
          "zhFocus": ["姿势"]
        },
        {
          "ja": "彼の前向きな姿勢を見習いたいです。",
          "zh": "我想学习他积极的态度。",
          "focus": ["姿勢"],
          "zhFocus": ["态度"]
        }
      ]
    },
    {
      "id": "n2-0007",
      "jlpt": "N2",
      "headword": "周辺",
      "source_form": "周辺",
      "variants": [
        "周辺"
      ],
      "reading": "しゅうへん",
      "reading_variants": [
        "しゅうへん"
      ],
      "romaji": "shuuhen",
      "part_of_speech": "noun",
      "meaning_zh": "周边；周围；附近",
      "kanji_readings": [
        {
          "form": "周辺",
          "reading": "しゅうへん"
        }
      ],
      "examples": [
        {
          "ja": "駅の周辺にはレストランが多いです。",
          "zh": "车站周边餐馆很多。",
          "focus": ["周辺"],
          "zhFocus": ["周边"]
        },
        {
          "ja": "事故のせいで、周辺の道が混んでいます。",
          "zh": "因为事故，周围的道路很拥堵。",
          "focus": ["周辺"],
          "zhFocus": ["周围"]
        },
        {
          "ja": "ホテルの周辺を散歩しました。",
          "zh": "在酒店附近散了步。",
          "focus": ["周辺"],
          "zhFocus": ["附近"]
        }
      ]
    },
    {
      "id": "n2-0008",
      "jlpt": "N2",
      "headword": "政党",
      "source_form": "政党",
      "variants": [
        "政党"
      ],
      "reading": "せいとう",
      "reading_variants": [
        "せいとう"
      ],
      "romaji": "seitou",
      "part_of_speech": "noun",
      "meaning_zh": "政党",
      "kanji_readings": [
        {
          "form": "政党",
          "reading": "せいとう"
        }
      ],
      "examples": [
        {
          "ja": "新しい政党ができました。",
          "zh": "成立了一个新政党。",
          "focus": ["政党"],
          "zhFocus": ["政党"]
        },
        {
          "ja": "あなたはどの政党を支持していますか。",
          "zh": "你支持哪个政党？",
          "focus": ["政党"],
          "zhFocus": ["政党"]
        },
        {
          "ja": "選挙の前に、それぞれの政党が意見を発表しました。",
          "zh": "选举前，各个政党发表了意见。",
          "focus": ["政党"],
          "zhFocus": ["政党"]
        }
      ]
    },
    {
      "id": "n2-0009",
      "jlpt": "N2",
      "headword": "体制",
      "source_form": "体制",
      "variants": [
        "体制"
      ],
      "reading": "たいせい",
      "reading_variants": [
        "たいせい"
      ],
      "romaji": "taisei",
      "part_of_speech": "noun",
      "meaning_zh": "体制；机制",
      "kanji_readings": [
        {
          "form": "体制",
          "reading": "たいせい"
        }
      ],
      "examples": [
        {
          "ja": "会社は新しい体制でスタートしました。",
          "zh": "公司以新的体制起步了。",
          "focus": ["体制"],
          "zhFocus": ["体制"]
        },
        {
          "ja": "この病院は、夜も患者を受け入れる体制が整っています。",
          "zh": "这家医院建立了夜间也能接收患者的机制。",
          "focus": ["体制"],
          "zhFocus": ["机制"]
        },
        {
          "ja": "その国の政治体制について学びました。",
          "zh": "学习了那个国家的政治体制。",
          "focus": ["体制"],
          "zhFocus": ["体制"]
        }
      ]
    },
    {
      "id": "n2-0010",
      "jlpt": "N2",
      "headword": "対策",
      "source_form": "対策",
      "variants": [
        "対策"
      ],
      "reading": "たいさく",
      "reading_variants": [
        "たいさく"
      ],
      "romaji": "taisaku",
      "part_of_speech": "noun",
      "meaning_zh": "对策；措施",
      "kanji_readings": [
        {
          "form": "対策",
          "reading": "たいさく"
        }
      ],
      "examples": [
        {
          "ja": "地震の対策をしておきましょう。",
          "zh": "事先做好地震的应对措施吧。",
          "focus": ["対策"],
          "zhFocus": ["措施"]
        },
        {
          "ja": "試験の対策として、過去の問題を解きました。",
          "zh": "作为考试的对策，做了往年的题目。",
          "focus": ["対策"],
          "zhFocus": ["对策"]
        },
        {
          "ja": "会社は事故を防ぐための対策を取りました。",
          "zh": "公司采取了防止事故的措施。",
          "focus": ["対策"],
          "zhFocus": ["措施"]
        }
      ]
    },
    {
      "id": "n2-0011",
      "jlpt": "N2",
      "headword": "段階",
      "source_form": "段階",
      "variants": [
        "段階"
      ],
      "reading": "だんかい",
      "reading_variants": [
        "だんかい"
      ],
      "romaji": "dankai",
      "part_of_speech": "noun",
      "meaning_zh": "阶段；步骤",
      "kanji_readings": [
        {
          "form": "段階",
          "reading": "だんかい"
        }
      ],
      "examples": [
        {
          "ja": "計画はまだ最初の段階です。",
          "zh": "计划还处在最初的阶段。",
          "focus": ["段階"],
          "zhFocus": ["阶段"]
        },
        {
          "ja": "段階を追って説明します。",
          "zh": "我按步骤来说明。",
          "focus": ["段階"],
          "zhFocus": ["步骤"]
        },
        {
          "ja": "今の段階では、まだ何も決まっていません。",
          "zh": "现阶段还什么都没有定。",
          "focus": ["段階"],
          "zhFocus": ["阶段"]
        }
      ]
    },
    {
      "id": "n2-0012",
      "jlpt": "N2",
      "headword": "調整",
      "source_form": "調整",
      "variants": [
        "調整"
      ],
      "reading": "ちょうせい",
      "reading_variants": [
        "ちょうせい"
      ],
      "romaji": "chousei",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "调整；协调",
      "kanji_readings": [
        {
          "form": "調整",
          "reading": "ちょうせい"
        }
      ],
      "examples": [
        {
          "ja": "会議の日程を調整します。",
          "zh": "我来协调会议的日程。",
          "focus": ["調整"],
          "zhFocus": ["协调"]
        },
        {
          "ja": "椅子の高さを調整してください。",
          "zh": "请调整椅子的高度。",
          "focus": ["調整"],
          "zhFocus": ["调整"]
        },
        {
          "ja": "みんなの意見を調整するのは大変です。",
          "zh": "协调大家的意见很不容易。",
          "focus": ["調整"],
          "zhFocus": ["协调"]
        }
      ]
    },
    {
      "id": "n2-0013",
      "jlpt": "N2",
      "headword": "長男",
      "source_form": "長男",
      "variants": [
        "長男"
      ],
      "reading": "ちょうなん",
      "reading_variants": [
        "ちょうなん"
      ],
      "romaji": "chounan",
      "part_of_speech": "noun",
      "meaning_zh": "长子",
      "kanji_readings": [
        {
          "form": "長男",
          "reading": "ちょうなん"
        }
      ],
      "examples": [
        {
          "ja": "彼は三人兄弟の長男です。",
          "zh": "他是三兄弟中的长子。",
          "focus": ["長男"],
          "zhFocus": ["长子"]
        },
        {
          "ja": "長男が今年、大学に入りました。",
          "zh": "长子今年上了大学。",
          "focus": ["長男"],
          "zhFocus": ["长子"]
        },
        {
          "ja": "長男が生まれたのは十年前です。",
          "zh": "长子是十年前出生的。",
          "focus": ["長男"],
          "zhFocus": ["长子"]
        }
      ],
      "note_zh": "对应「長女（长女）」。"
    },
    {
      "id": "n2-0014",
      "jlpt": "N2",
      "headword": "統一",
      "source_form": "統一",
      "variants": [
        "統一"
      ],
      "reading": "とういつ",
      "reading_variants": [
        "とういつ"
      ],
      "romaji": "touitsu",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "统一",
      "kanji_readings": [
        {
          "form": "統一",
          "reading": "とういつ"
        }
      ],
      "examples": [
        {
          "ja": "書き方を統一してください。",
          "zh": "请统一写法。",
          "focus": ["統一"],
          "zhFocus": ["统一"]
        },
        {
          "ja": "その国は百年ほど前に統一されました。",
          "zh": "那个国家大约在一百年前统一了。",
          "focus": ["統一"],
          "zhFocus": ["统一"]
        },
        {
          "ja": "制服の色を青に統一しました。",
          "zh": "把制服的颜色统一成了蓝色。",
          "focus": ["統一"],
          "zhFocus": ["统一"]
        }
      ]
    },
    {
      "id": "n2-0015",
      "jlpt": "N2",
      "headword": "方針",
      "source_form": "方針",
      "variants": [
        "方針"
      ],
      "reading": "ほうしん",
      "reading_variants": [
        "ほうしん"
      ],
      "romaji": "houshin",
      "part_of_speech": "noun",
      "meaning_zh": "方针",
      "kanji_readings": [
        {
          "form": "方針",
          "reading": "ほうしん"
        }
      ],
      "examples": [
        {
          "ja": "会社の方針が変わりました。",
          "zh": "公司的方针变了。",
          "focus": ["方針"],
          "zhFocus": ["方针"]
        },
        {
          "ja": "今後の方針について話し合いました。",
          "zh": "讨论了今后的方针。",
          "focus": ["方針"],
          "zhFocus": ["方针"]
        },
        {
          "ja": "子供の教育方針は家庭によって違います。",
          "zh": "孩子的教育方针因家庭而异。",
          "focus": ["方針"],
          "zhFocus": ["方针"]
        }
      ]
    },
    {
      "id": "n2-0016",
      "jlpt": "N2",
      "headword": "本部",
      "source_form": "本部",
      "variants": [
        "本部"
      ],
      "reading": "ほんぶ",
      "reading_variants": [
        "ほんぶ"
      ],
      "romaji": "honbu",
      "part_of_speech": "noun",
      "meaning_zh": "总部；本部",
      "kanji_readings": [
        {
          "form": "本部",
          "reading": "ほんぶ"
        }
      ],
      "examples": [
        {
          "ja": "会社の本部は東京にあります。",
          "zh": "公司总部在东京。",
          "focus": ["本部"],
          "zhFocus": ["总部"]
        },
        {
          "ja": "事故の後、対策本部が作られました。",
          "zh": "事故发生后，成立了对策本部。",
          "focus": ["本部"],
          "zhFocus": ["本部"]
        },
        {
          "ja": "本部に連絡してから行動してください。",
          "zh": "请先联系总部再行动。",
          "focus": ["本部"],
          "zhFocus": ["总部"]
        }
      ]
    },
    {
      "id": "n2-0017",
      "jlpt": "N2",
      "headword": "民間",
      "source_form": "民間",
      "variants": [
        "民間"
      ],
      "reading": "みんかん",
      "reading_variants": [
        "みんかん"
      ],
      "romaji": "minkan",
      "part_of_speech": "noun",
      "meaning_zh": "民间；私营（非政府）",
      "kanji_readings": [
        {
          "form": "民間",
          "reading": "みんかん"
        }
      ],
      "examples": [
        {
          "ja": "彼は役所をやめて、民間の会社に入りました。",
          "zh": "他辞去了公职，进了私营公司。",
          "focus": ["民間"],
          "zhFocus": ["私营"]
        },
        {
          "ja": "このサービスは民間の団体が運営しています。",
          "zh": "这项服务由民间团体运营。",
          "focus": ["民間"],
          "zhFocus": ["民间"]
        },
        {
          "ja": "宇宙の開発に民間の企業も参加しています。",
          "zh": "民间企业也参与了宇宙开发。",
          "focus": ["民間"],
          "zhFocus": ["民间"]
        }
      ]
    },
    {
      "id": "n2-0018",
      "jlpt": "N2",
      "headword": "問い合わせ",
      "source_form": "問い合わせ",
      "variants": [
        "問い合わせ",
        "問合せ"
      ],
      "reading": "といあわせ",
      "reading_variants": [
        "といあわせ"
      ],
      "romaji": "toiawase",
      "part_of_speech": "noun",
      "meaning_zh": "询问；咨询",
      "kanji_readings": [
        {
          "form": "問い合わせ",
          "reading": "といあわせ"
        },
        {
          "form": "問合せ",
          "reading": "といあわせ"
        }
      ],
      "examples": [
        {
          "ja": "新しい商品についての問い合わせが多いです。",
          "zh": "关于新商品的咨询很多。",
          "focus": ["問い合わせ"],
          "zhFocus": ["咨询"]
        },
        {
          "ja": "お問い合わせは、こちらの番号までお願いします。",
          "zh": "咨询请拨打这个号码。",
          "focus": ["問い合わせ"],
          "zhFocus": ["咨询"]
        },
        {
          "ja": "問い合わせのメールに返事をしました。",
          "zh": "回复了询问的邮件。",
          "focus": ["問い合わせ"],
          "zhFocus": ["询问"]
        }
      ]
    },
    {
      "id": "n2-0019",
      "jlpt": "N2",
      "headword": "連合",
      "source_form": "連合",
      "variants": [
        "連合"
      ],
      "reading": "れんごう",
      "reading_variants": [
        "れんごう"
      ],
      "romaji": "rengou",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "联合；联盟",
      "kanji_readings": [
        {
          "form": "連合",
          "reading": "れんごう"
        }
      ],
      "examples": [
        {
          "ja": "国際連合の本部はニューヨークにあります。",
          "zh": "联合国的总部在纽约。",
          "focus": ["連合"],
          "zhFocus": ["联合国"]
        },
        {
          "ja": "三つの大学が連合して、研究を進めています。",
          "zh": "三所大学联合起来推进研究。",
          "focus": ["連合"],
          "zhFocus": ["联合"]
        },
        {
          "ja": "いくつかの小さな会社が連合を作りました。",
          "zh": "几家小公司组成了联盟。",
          "focus": ["連合"],
          "zhFocus": ["联盟"]
        }
      ]
    },
    {
      "id": "n2-0020",
      "jlpt": "N2",
      "headword": "少なくとも",
      "source_form": "すくなくとも",
      "variants": [
        "少なくとも"
      ],
      "reading": "すくなくとも",
      "reading_variants": [
        "すくなくとも"
      ],
      "romaji": "sukunakutomo",
      "part_of_speech": "adverb",
      "meaning_zh": "至少",
      "kanji_readings": [
        {
          "form": "少なくとも",
          "reading": "すくなくとも"
        }
      ],
      "examples": [
        {
          "ja": "少なくとも一日一時間は勉強しています。",
          "zh": "每天至少学习一个小时。",
          "focus": ["少なくとも"],
          "zhFocus": ["至少"]
        },
        {
          "ja": "少なくとも週に一度は運動したほうがいいです。",
          "zh": "最好至少每周运动一次。",
          "focus": ["少なくとも"],
          "zhFocus": ["至少"]
        },
        {
          "ja": "少なくとも私はそう思います。",
          "zh": "至少我是这么认为的。",
          "focus": ["少なくとも"],
          "zhFocus": ["至少"]
        }
      ]
    },
    {
      "id": "n2-0021",
      "jlpt": "N2",
      "headword": "延長",
      "source_form": "延長",
      "variants": [
        "延長"
      ],
      "reading": "えんちょう",
      "reading_variants": [
        "えんちょう"
      ],
      "romaji": "enchou",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "延长；（比赛）加时",
      "senses_zh": [
        "延长",
        "（比赛）加时"
      ],
      "kanji_readings": [
        {
          "form": "延長",
          "reading": "えんちょう"
        }
      ],
      "examples": [
        {
          "ja": "会議が延長されて、帰りが遅くなりました。",
          "zh": "会议延长了，回去得晚了。",
          "focus": ["延長"],
          "zhFocus": ["延长"]
        },
        {
          "ja": "ビザの期間を延長しました。",
          "zh": "延长了签证的期限。",
          "focus": ["延長"],
          "zhFocus": ["延长"]
        },
        {
          "ja": "試合は延長に入りました。",
          "zh": "比赛进入了加时。",
          "focus": ["延長"],
          "zhFocus": ["加时"]
        }
      ]
    },
    {
      "id": "n2-0022",
      "jlpt": "N2",
      "headword": "会館",
      "source_form": "会館",
      "variants": [
        "会館"
      ],
      "reading": "かいかん",
      "reading_variants": [
        "かいかん"
      ],
      "romaji": "kaikan",
      "part_of_speech": "noun",
      "meaning_zh": "会馆；会堂",
      "kanji_readings": [
        {
          "form": "会館",
          "reading": "かいかん"
        }
      ],
      "examples": [
        {
          "ja": "市民会館でコンサートがあります。",
          "zh": "市民会馆有一场音乐会。",
          "focus": ["会館"],
          "zhFocus": ["会馆"]
        },
        {
          "ja": "結婚式は町の会館で行われました。",
          "zh": "婚礼是在镇上的会堂举行的。",
          "focus": ["会館"],
          "zhFocus": ["会堂"]
        },
        {
          "ja": "学生会館に食堂があります。",
          "zh": "学生会馆里有食堂。",
          "focus": ["会館"],
          "zhFocus": ["会馆"]
        }
      ]
    },
    {
      "id": "n2-0023",
      "jlpt": "N2",
      "headword": "解散",
      "source_form": "解散",
      "variants": [
        "解散"
      ],
      "reading": "かいさん",
      "reading_variants": [
        "かいさん"
      ],
      "romaji": "kaisan",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "解散；散会",
      "kanji_readings": [
        {
          "form": "解散",
          "reading": "かいさん"
        }
      ],
      "examples": [
        {
          "ja": "今日はここで解散します。",
          "zh": "今天就在这里解散。",
          "focus": ["解散"],
          "zhFocus": ["解散"]
        },
        {
          "ja": "そのバンドは去年解散しました。",
          "zh": "那支乐队去年解散了。",
          "focus": ["解散"],
          "zhFocus": ["解散"]
        },
        {
          "ja": "国会が解散されて、選挙が行われることになりました。",
          "zh": "国会被解散，将举行选举。",
          "focus": ["解散"],
          "zhFocus": ["解散"]
        }
      ]
    },
    {
      "id": "n2-0024",
      "jlpt": "N2",
      "headword": "回答",
      "source_form": "回答",
      "variants": [
        "回答"
      ],
      "reading": "かいとう",
      "reading_variants": [
        "かいとう"
      ],
      "romaji": "kaitou",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "回答；答复",
      "kanji_readings": [
        {
          "form": "回答",
          "reading": "かいとう"
        }
      ],
      "examples": [
        {
          "ja": "アンケートに回答してください。",
          "zh": "请填写问卷作答。",
          "focus": ["回答"],
          "zhFocus": ["作答"]
        },
        {
          "ja": "会社からまだ回答がありません。",
          "zh": "公司还没有答复。",
          "focus": ["回答"],
          "zhFocus": ["答复"]
        },
        {
          "ja": "質問への回答をメールで送りました。",
          "zh": "用邮件发送了对提问的答复。",
          "focus": ["回答"],
          "zhFocus": ["答复"]
        }
      ]
    },
    {
      "id": "n2-0025",
      "jlpt": "N2",
      "headword": "開放",
      "source_form": "開放",
      "variants": [
        "開放"
      ],
      "reading": "かいほう",
      "reading_variants": [
        "かいほう"
      ],
      "romaji": "kaihou",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "开放；敞开",
      "kanji_readings": [
        {
          "form": "開放",
          "reading": "かいほう"
        }
      ],
      "examples": [
        {
          "ja": "夏休みの間、学校のプールを開放します。",
          "zh": "暑假期间开放学校的游泳池。",
          "focus": ["開放"],
          "zhFocus": ["开放"]
        },
        {
          "ja": "窓を開放して、空気を入れ替えました。",
          "zh": "敞开窗户换了换空气。",
          "focus": ["開放"],
          "zhFocus": ["敞开"]
        },
        {
          "ja": "この公園は夜も開放されています。",
          "zh": "这个公园晚上也开放。",
          "focus": ["開放"],
          "zhFocus": ["开放"]
        }
      ],
      "note_zh": "与「解放（解放；释放）」同音。"
    },
    {
      "id": "n2-0026",
      "jlpt": "N2",
      "headword": "観測",
      "source_form": "観測",
      "variants": [
        "観測"
      ],
      "reading": "かんそく",
      "reading_variants": [
        "かんそく"
      ],
      "romaji": "kansoku",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "观测",
      "kanji_readings": [
        {
          "form": "観測",
          "reading": "かんそく"
        }
      ],
      "examples": [
        {
          "ja": "星を観測するために山に登りました。",
          "zh": "为了观测星星爬上了山。",
          "focus": ["観測"],
          "zhFocus": ["观测"]
        },
        {
          "ja": "この施設では毎日、天気を観測しています。",
          "zh": "这个设施每天观测天气。",
          "focus": ["観測"],
          "zhFocus": ["观测"]
        },
        {
          "ja": "今年は観測が始まってから一番暑い夏でした。",
          "zh": "今年是有观测记录以来最热的夏天。",
          "focus": ["観測"],
          "zhFocus": ["观测"]
        }
      ]
    },
    {
      "id": "n2-0027",
      "jlpt": "N2",
      "headword": "関西",
      "source_form": "関西",
      "variants": [
        "関西"
      ],
      "reading": "かんさい",
      "reading_variants": [
        "かんさい"
      ],
      "romaji": "kansai",
      "part_of_speech": "noun",
      "meaning_zh": "关西（以京都、大阪为中心的地区）",
      "kanji_readings": [
        {
          "form": "関西",
          "reading": "かんさい"
        }
      ],
      "examples": [
        {
          "ja": "関西に住んでいる友達に会いに行きます。",
          "zh": "去见住在关西的朋友。",
          "focus": ["関西"],
          "zhFocus": ["关西"]
        },
        {
          "ja": "関西の人は話が面白いとよく言われます。",
          "zh": "常有人说关西人说话很有意思。",
          "focus": ["関西"],
          "zhFocus": ["关西"]
        },
        {
          "ja": "関西の方言を少し話せます。",
          "zh": "我会说一点关西方言。",
          "focus": ["関西"],
          "zhFocus": ["关西"]
        }
      ],
      "note_zh": "与「関東（关东）」相对。"
    },
    {
      "id": "n2-0028",
      "jlpt": "N2",
      "headword": "基礎",
      "source_form": "基礎",
      "variants": [
        "基礎"
      ],
      "reading": "きそ",
      "reading_variants": [
        "きそ"
      ],
      "romaji": "kiso",
      "part_of_speech": "noun",
      "meaning_zh": "基础；地基",
      "senses_zh": [
        "基础",
        "地基"
      ],
      "kanji_readings": [
        {
          "form": "基礎",
          "reading": "きそ"
        }
      ],
      "examples": [
        {
          "ja": "基礎からもう一度勉強し直します。",
          "zh": "从基础开始重新学一遍。",
          "focus": ["基礎"],
          "zhFocus": ["基础"]
        },
        {
          "ja": "今は建物の基礎を作る工事をしています。",
          "zh": "现在正在进行打建筑地基的工程。",
          "focus": ["基礎"],
          "zhFocus": ["地基"]
        },
        {
          "ja": "何をするにも、基礎が大切です。",
          "zh": "做什么事情基础都很重要。",
          "focus": ["基礎"],
          "zhFocus": ["基础"]
        }
      ]
    },
    {
      "id": "n2-0029",
      "jlpt": "N2",
      "headword": "基地",
      "source_form": "基地",
      "variants": [
        "基地"
      ],
      "reading": "きち",
      "reading_variants": [
        "きち"
      ],
      "romaji": "kichi",
      "part_of_speech": "noun",
      "meaning_zh": "基地",
      "kanji_readings": [
        {
          "form": "基地",
          "reading": "きち"
        }
      ],
      "examples": [
        {
          "ja": "その島には軍の基地があります。",
          "zh": "那座岛上有军事基地。",
          "focus": ["基地"],
          "zhFocus": ["基地"]
        },
        {
          "ja": "南極の基地で研究をしています。",
          "zh": "在南极的基地做研究。",
          "focus": ["基地"],
          "zhFocus": ["基地"]
        },
        {
          "ja": "この町は登山の基地として人気があります。",
          "zh": "这个小镇作为登山基地很受欢迎。",
          "focus": ["基地"],
          "zhFocus": ["基地"]
        }
      ]
    },
    {
      "id": "n2-0030",
      "jlpt": "N2",
      "headword": "公共",
      "source_form": "公共",
      "variants": [
        "公共"
      ],
      "reading": "こうきょう",
      "reading_variants": [
        "こうきょう"
      ],
      "romaji": "koukyou",
      "part_of_speech": "noun",
      "meaning_zh": "公共",
      "kanji_readings": [
        {
          "form": "公共",
          "reading": "こうきょう"
        }
      ],
      "examples": [
        {
          "ja": "公共の場所では静かにしましょう。",
          "zh": "在公共场所请保持安静。",
          "focus": ["公共"],
          "zhFocus": ["公共"]
        },
        {
          "ja": "できるだけ公共の交通機関を利用してください。",
          "zh": "请尽量利用公共交通工具。",
          "focus": ["公共"],
          "zhFocus": ["公共"]
        },
        {
          "ja": "図書館は公共の施設です。",
          "zh": "图书馆是公共设施。",
          "focus": ["公共"],
          "zhFocus": ["公共"]
        }
      ]
    },
    {
      "id": "n2-0031",
      "jlpt": "N2",
      "headword": "公式",
      "source_form": "公式",
      "variants": [
        "公式"
      ],
      "reading": "こうしき",
      "reading_variants": [
        "こうしき"
      ],
      "romaji": "koushiki",
      "part_of_speech": "noun",
      "meaning_zh": "正式；官方；（数学等的）公式",
      "senses_zh": [
        "正式；官方",
        "（数学等的）公式"
      ],
      "kanji_readings": [
        {
          "form": "公式",
          "reading": "こうしき"
        }
      ],
      "examples": [
        {
          "ja": "試合の結果は公式のサイトで確認できます。",
          "zh": "比赛结果可以在官方网站上确认。",
          "focus": ["公式"],
          "zhFocus": ["官方"]
        },
        {
          "ja": "大統領が日本を公式に訪問しました。",
          "zh": "总统正式访问了日本。",
          "focus": ["公式"],
          "zhFocus": ["正式"]
        },
        {
          "ja": "数学の公式を覚えました。",
          "zh": "记住了数学公式。",
          "focus": ["公式"],
          "zhFocus": ["公式"]
        }
      ]
    },
    {
      "id": "n2-0032",
      "jlpt": "N2",
      "headword": "工事",
      "source_form": "工事",
      "variants": [
        "工事"
      ],
      "reading": "こうじ",
      "reading_variants": [
        "こうじ"
      ],
      "romaji": "kouji",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "工程；施工",
      "kanji_readings": [
        {
          "form": "工事",
          "reading": "こうじ"
        }
      ],
      "examples": [
        {
          "ja": "駅の前で道路の工事をしています。",
          "zh": "车站前正在进行道路施工。",
          "focus": ["工事"],
          "zhFocus": ["施工"]
        },
        {
          "ja": "工事の音がうるさくて眠れません。",
          "zh": "施工的声音太吵，睡不着。",
          "focus": ["工事"],
          "zhFocus": ["施工"]
        },
        {
          "ja": "来月からビルの工事が始まります。",
          "zh": "下个月开始大楼的工程。",
          "focus": ["工事"],
          "zhFocus": ["工程"]
        }
      ]
    },
    {
      "id": "n2-0033",
      "jlpt": "N2",
      "headword": "国籍",
      "source_form": "国籍",
      "variants": [
        "国籍"
      ],
      "reading": "こくせき",
      "reading_variants": [
        "こくせき"
      ],
      "romaji": "kokuseki",
      "part_of_speech": "noun",
      "meaning_zh": "国籍",
      "kanji_readings": [
        {
          "form": "国籍",
          "reading": "こくせき"
        }
      ],
      "examples": [
        {
          "ja": "国籍はどちらですか。",
          "zh": "您的国籍是哪里？",
          "focus": ["国籍"],
          "zhFocus": ["国籍"]
        },
        {
          "ja": "このクラスにはいろいろな国籍の学生がいます。",
          "zh": "这个班里有各种国籍的学生。",
          "focus": ["国籍"],
          "zhFocus": ["国籍"]
        },
        {
          "ja": "彼は日本の国籍を取りました。",
          "zh": "他取得了日本国籍。",
          "focus": ["国籍"],
          "zhFocus": ["国籍"]
        }
      ]
    },
    {
      "id": "n2-0034",
      "jlpt": "N2",
      "headword": "国立",
      "source_form": "国立",
      "variants": [
        "国立"
      ],
      "reading": "こくりつ",
      "reading_variants": [
        "こくりつ"
      ],
      "romaji": "kokuritsu",
      "part_of_speech": "noun",
      "meaning_zh": "国立",
      "kanji_readings": [
        {
          "form": "国立",
          "reading": "こくりつ"
        }
      ],
      "examples": [
        {
          "ja": "兄は国立大学に合格しました。",
          "zh": "哥哥考上了国立大学。",
          "focus": ["国立"],
          "zhFocus": ["国立"]
        },
        {
          "ja": "週末に国立の美術館へ行きました。",
          "zh": "周末去了国立美术馆。",
          "focus": ["国立"],
          "zhFocus": ["国立"]
        },
        {
          "ja": "国立の病院で検査を受けました。",
          "zh": "在国立医院接受了检查。",
          "focus": ["国立"],
          "zhFocus": ["国立"]
        }
      ],
      "note_zh": "与「私立（私立）」相对。"
    },
    {
      "id": "n2-0035",
      "jlpt": "N2",
      "headword": "自治",
      "source_form": "自治",
      "variants": [
        "自治"
      ],
      "reading": "じち",
      "reading_variants": [
        "じち"
      ],
      "romaji": "jichi",
      "part_of_speech": "noun",
      "meaning_zh": "自治",
      "kanji_readings": [
        {
          "form": "自治",
          "reading": "じち"
        }
      ],
      "examples": [
        {
          "ja": "この地域では住民の自治が進んでいます。",
          "zh": "这个地区的居民自治正在推进。",
          "focus": ["自治"],
          "zhFocus": ["自治"]
        },
        {
          "ja": "大学の自治は大切にされるべきです。",
          "zh": "大学的自治应当受到重视。",
          "focus": ["自治"],
          "zhFocus": ["自治"]
        },
        {
          "ja": "週末に自治会の集まりに参加しました。",
          "zh": "周末参加了自治会的聚会。",
          "focus": ["自治"],
          "zhFocus": ["自治"]
        }
      ]
    },
    {
      "id": "n2-0036",
      "jlpt": "N2",
      "headword": "実績",
      "source_form": "実績",
      "variants": [
        "実績"
      ],
      "reading": "じっせき",
      "reading_variants": [
        "じっせき"
      ],
      "romaji": "jisseki",
      "part_of_speech": "noun",
      "meaning_zh": "实际成绩；业绩",
      "kanji_readings": [
        {
          "form": "実績",
          "reading": "じっせき"
        }
      ],
      "examples": [
        {
          "ja": "彼は営業で大きな実績を上げました。",
          "zh": "他在销售上取得了很大的业绩。",
          "focus": ["実績"],
          "zhFocus": ["业绩"]
        },
        {
          "ja": "実績のある会社に仕事を頼みたいです。",
          "zh": "想把工作委托给有实际成绩的公司。",
          "focus": ["実績"],
          "zhFocus": ["实际成绩"]
        },
        {
          "ja": "去年の実績をもとに、今年の目標を決めました。",
          "zh": "根据去年的业绩定了今年的目标。",
          "focus": ["実績"],
          "zhFocus": ["业绩"]
        }
      ]
    },
    {
      "id": "n2-0037",
      "jlpt": "N2",
      "headword": "実力",
      "source_form": "実力",
      "variants": [
        "実力"
      ],
      "reading": "じつりょく",
      "reading_variants": [
        "じつりょく"
      ],
      "romaji": "jitsuryoku",
      "part_of_speech": "noun",
      "meaning_zh": "实力",
      "kanji_readings": [
        {
          "form": "実力",
          "reading": "じつりょく"
        }
      ],
      "examples": [
        {
          "ja": "試験で実力を出し切りました。",
          "zh": "在考试中发挥出了全部实力。",
          "focus": ["実力"],
          "zhFocus": ["实力"]
        },
        {
          "ja": "彼は実力のある選手です。",
          "zh": "他是有实力的选手。",
          "focus": ["実力"],
          "zhFocus": ["实力"]
        },
        {
          "ja": "実力をつけるために、毎日練習しています。",
          "zh": "为了提高实力，每天都在练习。",
          "focus": ["実力"],
          "zhFocus": ["实力"]
        }
      ]
    },
    {
      "id": "n2-0038",
      "jlpt": "N2",
      "headword": "受験",
      "source_form": "受験",
      "variants": [
        "受験"
      ],
      "reading": "じゅけん",
      "reading_variants": [
        "じゅけん"
      ],
      "romaji": "juken",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "参加考试；应考（多指升学考试）",
      "kanji_readings": [
        {
          "form": "受験",
          "reading": "じゅけん"
        }
      ],
      "examples": [
        {
          "ja": "来年、大学を受験します。",
          "zh": "明年要考大学。",
          "focus": ["受験"],
          "zhFocus": ["考"]
        },
        {
          "ja": "受験の前の日は、よく眠れませんでした。",
          "zh": "考试前一天没睡好。",
          "focus": ["受験"],
          "zhFocus": ["考试"]
        },
        {
          "ja": "受験生は毎日遅くまで勉強しています。",
          "zh": "考生每天都学习到很晚。",
          "focus": ["受験"],
          "zhFocus": ["考生"]
        }
      ]
    },
    {
      "id": "n2-0039",
      "jlpt": "N2",
      "headword": "就任",
      "source_form": "就任",
      "variants": [
        "就任"
      ],
      "reading": "しゅうにん",
      "reading_variants": [
        "しゅうにん"
      ],
      "romaji": "shuunin",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "就任；上任",
      "kanji_readings": [
        {
          "form": "就任",
          "reading": "しゅうにん"
        }
      ],
      "examples": [
        {
          "ja": "新しい社長が就任しました。",
          "zh": "新社长上任了。",
          "focus": ["就任"],
          "zhFocus": ["上任"]
        },
        {
          "ja": "彼は四月に部長に就任します。",
          "zh": "他将于四月就任部长。",
          "focus": ["就任"],
          "zhFocus": ["就任"]
        },
        {
          "ja": "就任してから、もう一年がたちました。",
          "zh": "上任以来已经过了一年。",
          "focus": ["就任"],
          "zhFocus": ["上任"]
        }
      ]
    },
    {
      "id": "n2-0040",
      "jlpt": "N2",
      "headword": "集会",
      "source_form": "集会",
      "variants": [
        "集会"
      ],
      "reading": "しゅうかい",
      "reading_variants": [
        "しゅうかい"
      ],
      "romaji": "shuukai",
      "part_of_speech": "noun",
      "meaning_zh": "集会；聚会",
      "kanji_readings": [
        {
          "form": "集会",
          "reading": "しゅうかい"
        }
      ],
      "examples": [
        {
          "ja": "駅前で大きな集会が開かれました。",
          "zh": "车站前举行了大型集会。",
          "focus": ["集会"],
          "zhFocus": ["集会"]
        },
        {
          "ja": "町の集会で、ごみの出し方について話し合いました。",
          "zh": "在镇上的聚会上讨论了扔垃圾的方法。",
          "focus": ["集会"],
          "zhFocus": ["聚会"]
        },
        {
          "ja": "集会では、静かに話を聞いてください。",
          "zh": "集会时请安静听讲。",
          "focus": ["集会"],
          "zhFocus": ["集会"]
        }
      ]
    },
    {
      "id": "n2-0041",
      "jlpt": "N2",
      "headword": "焦点",
      "source_form": "焦点",
      "variants": [
        "焦点"
      ],
      "reading": "しょうてん",
      "reading_variants": [
        "しょうてん"
      ],
      "romaji": "shouten",
      "part_of_speech": "noun",
      "meaning_zh": "焦点",
      "kanji_readings": [
        {
          "form": "焦点",
          "reading": "しょうてん"
        }
      ],
      "examples": [
        {
          "ja": "カメラの焦点を合わせてください。",
          "zh": "请把相机的焦点对准。",
          "focus": ["焦点"],
          "zhFocus": ["焦点"]
        },
        {
          "ja": "話し合いの焦点は予算の問題でした。",
          "zh": "讨论的焦点是预算问题。",
          "focus": ["焦点"],
          "zhFocus": ["焦点"]
        },
        {
          "ja": "この映画は家族の関係に焦点を当てています。",
          "zh": "这部电影把焦点放在家庭关系上。",
          "focus": ["焦点"],
          "zhFocus": ["焦点"]
        }
      ]
    },
    {
      "id": "n2-0042",
      "jlpt": "N2",
      "headword": "成立",
      "source_form": "成立",
      "variants": [
        "成立"
      ],
      "reading": "せいりつ",
      "reading_variants": [
        "せいりつ"
      ],
      "romaji": "seiritsu",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "成立；达成；（法案）通过",
      "kanji_readings": [
        {
          "form": "成立",
          "reading": "せいりつ"
        }
      ],
      "examples": [
        {
          "ja": "新しい法律が成立しました。",
          "zh": "新法律通过了。",
          "focus": ["成立"],
          "zhFocus": ["通过"]
        },
        {
          "ja": "二つの会社の間で契約が成立しました。",
          "zh": "两家公司之间达成了合同。",
          "focus": ["成立"],
          "zhFocus": ["达成"]
        },
        {
          "ja": "人数が足りなくて、試合が成立しませんでした。",
          "zh": "人数不够，比赛没能成立。",
          "focus": ["成立"],
          "zhFocus": ["成立"]
        }
      ]
    },
    {
      "id": "n2-0043",
      "jlpt": "N2",
      "headword": "整備",
      "source_form": "整備",
      "variants": [
        "整備"
      ],
      "reading": "せいび",
      "reading_variants": [
        "せいび"
      ],
      "romaji": "seibi",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "维修；保养；（设施、制度的）建设、完善",
      "senses_zh": [
        "维修；保养",
        "（设施、制度的）建设、完善"
      ],
      "kanji_readings": [
        {
          "form": "整備",
          "reading": "せいび"
        }
      ],
      "examples": [
        {
          "ja": "出発の前に車を整備しました。",
          "zh": "出发前保养了车。",
          "focus": ["整備"],
          "zhFocus": ["保养"]
        },
        {
          "ja": "町は駅前の道路を整備しています。",
          "zh": "镇里正在修整车站前的道路。",
          "focus": ["整備"],
          "zhFocus": ["修整"]
        },
        {
          "ja": "子育てしやすい環境を整備する必要があります。",
          "zh": "需要完善便于育儿的环境。",
          "focus": ["整備"],
          "zhFocus": ["完善"]
        }
      ]
    },
    {
      "id": "n2-0044",
      "jlpt": "N2",
      "headword": "狙い",
      "source_form": "狙い",
      "variants": [
        "狙い"
      ],
      "reading": "ねらい",
      "reading_variants": [
        "ねらい"
      ],
      "romaji": "nerai",
      "part_of_speech": "noun",
      "meaning_zh": "目的；目标；瞄准",
      "kanji_readings": [
        {
          "form": "狙い",
          "reading": "ねらい"
        }
      ],
      "examples": [
        {
          "ja": "この計画の狙いは何ですか。",
          "zh": "这个计划的目的是什么？",
          "focus": ["狙い"],
          "zhFocus": ["目的"]
        },
        {
          "ja": "狙いを定めて、ボールを投げました。",
          "zh": "瞄准后投出了球。",
          "focus": ["狙い"],
          "zhFocus": ["瞄准"]
        },
        {
          "ja": "社長の狙いは若い客を増やすことです。",
          "zh": "社长的目标是增加年轻顾客。",
          "focus": ["狙い"],
          "zhFocus": ["目标"]
        }
      ],
      "note_zh": "动词「狙う（瞄准）」的名词形。"
    },
    {
      "id": "n2-0045",
      "jlpt": "N2",
      "headword": "相互",
      "source_form": "相互",
      "variants": [
        "相互"
      ],
      "reading": "そうご",
      "reading_variants": [
        "そうご"
      ],
      "romaji": "sougo",
      "part_of_speech": "noun",
      "meaning_zh": "相互；互相",
      "kanji_readings": [
        {
          "form": "相互",
          "reading": "そうご"
        }
      ],
      "examples": [
        {
          "ja": "国と国の相互の理解が大切です。",
          "zh": "国与国之间的相互理解很重要。",
          "focus": ["相互"],
          "zhFocus": ["相互"]
        },
        {
          "ja": "二つの会社は相互に協力しています。",
          "zh": "两家公司互相合作。",
          "focus": ["相互"],
          "zhFocus": ["互相"]
        },
        {
          "ja": "このアプリでは、利用者が相互にメッセージを送れます。",
          "zh": "在这个应用里，用户之间可以互相发消息。",
          "focus": ["相互"],
          "zhFocus": ["互相"]
        }
      ]
    },
    {
      "id": "n2-0046",
      "jlpt": "N2",
      "headword": "対立",
      "source_form": "対立",
      "variants": [
        "対立"
      ],
      "reading": "たいりつ",
      "reading_variants": [
        "たいりつ"
      ],
      "romaji": "tairitsu",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "对立；冲突",
      "kanji_readings": [
        {
          "form": "対立",
          "reading": "たいりつ"
        }
      ],
      "examples": [
        {
          "ja": "二人の意見が対立しています。",
          "zh": "两个人的意见对立。",
          "focus": ["対立"],
          "zhFocus": ["对立"]
        },
        {
          "ja": "親と子の対立はよくあることです。",
          "zh": "父母和孩子之间的冲突很常见。",
          "focus": ["対立"],
          "zhFocus": ["冲突"]
        },
        {
          "ja": "会社と組合が対立して、交渉が進みません。",
          "zh": "公司和工会对立，谈判没有进展。",
          "focus": ["対立"],
          "zhFocus": ["对立"]
        }
      ]
    },
    {
      "id": "n2-0047",
      "jlpt": "N2",
      "headword": "中間",
      "source_form": "中間",
      "variants": [
        "中間"
      ],
      "reading": "ちゅうかん",
      "reading_variants": [
        "ちゅうかん"
      ],
      "romaji": "chuukan",
      "part_of_speech": "noun",
      "meaning_zh": "中间；中途；中期",
      "kanji_readings": [
        {
          "form": "中間",
          "reading": "ちゅうかん"
        }
      ],
      "examples": [
        {
          "ja": "駅と学校の中間にコンビニがあります。",
          "zh": "车站和学校中间有家便利店。",
          "focus": ["中間"],
          "zhFocus": ["中间"]
        },
        {
          "ja": "二人の意見の中間をとって決めました。",
          "zh": "取了两人意见的折中来决定。",
          "focus": ["中間"],
          "zhFocus": ["折中"]
        },
        {
          "ja": "プロジェクトの中間報告をしました。",
          "zh": "做了项目的中期报告。",
          "focus": ["中間"],
          "zhFocus": ["中期"]
        }
      ]
    },
    {
      "id": "n2-0048",
      "jlpt": "N2",
      "headword": "直後",
      "source_form": "直後",
      "variants": [
        "直後"
      ],
      "reading": "ちょくご",
      "reading_variants": [
        "ちょくご"
      ],
      "romaji": "chokugo",
      "part_of_speech": "noun",
      "meaning_zh": "刚……之后；紧接着",
      "kanji_readings": [
        {
          "form": "直後",
          "reading": "ちょくご"
        }
      ],
      "examples": [
        {
          "ja": "地震の直後に、電車が止まりました。",
          "zh": "地震刚过，电车就停了。",
          "focus": ["直後"],
          "zhFocus": ["刚过"]
        },
        {
          "ja": "食事の直後に運動するのはよくないです。",
          "zh": "刚吃完饭就运动不好。",
          "focus": ["直後"],
          "zhFocus": ["刚"]
        },
        {
          "ja": "家を出た直後に、雨が降り出しました。",
          "zh": "刚出门就下起了雨。",
          "focus": ["直後"],
          "zhFocus": ["刚"]
        }
      ],
      "note_zh": "与「直前」相对。"
    },
    {
      "id": "n2-0049",
      "jlpt": "N2",
      "headword": "直前",
      "source_form": "直前",
      "variants": [
        "直前"
      ],
      "reading": "ちょくぜん",
      "reading_variants": [
        "ちょくぜん"
      ],
      "romaji": "chokuzen",
      "part_of_speech": "noun",
      "meaning_zh": "就在……之前；……前夕",
      "kanji_readings": [
        {
          "form": "直前",
          "reading": "ちょくぜん"
        }
      ],
      "examples": [
        {
          "ja": "出発の直前に、忘れ物に気づきました。",
          "zh": "临出发时发现落了东西。",
          "focus": ["直前"],
          "zhFocus": ["临"]
        },
        {
          "ja": "試験の直前は、新しいことを覚えないほうがいいです。",
          "zh": "考试前夕最好不要记新东西。",
          "focus": ["直前"],
          "zhFocus": ["前夕"]
        },
        {
          "ja": "電車が来る直前に、駅に着きました。",
          "zh": "就在电车来之前到了车站。",
          "focus": ["直前"],
          "zhFocus": ["就在"]
        }
      ],
      "note_zh": "与「直後」相对。"
    },
    {
      "id": "n2-0050",
      "jlpt": "N2",
      "headword": "通貨",
      "source_form": "通貨",
      "variants": [
        "通貨"
      ],
      "reading": "つうか",
      "reading_variants": [
        "つうか"
      ],
      "romaji": "tsuuka",
      "part_of_speech": "noun",
      "meaning_zh": "货币；通货",
      "kanji_readings": [
        {
          "form": "通貨",
          "reading": "つうか"
        }
      ],
      "examples": [
        {
          "ja": "日本の通貨は円です。",
          "zh": "日本的货币是日元。",
          "focus": ["通貨"],
          "zhFocus": ["货币"]
        },
        {
          "ja": "ヨーロッパの多くの国は同じ通貨を使っています。",
          "zh": "欧洲很多国家使用同一种货币。",
          "focus": ["通貨"],
          "zhFocus": ["货币"]
        },
        {
          "ja": "旅行の前に、現地の通貨に両替しました。",
          "zh": "旅行前换了当地的货币。",
          "focus": ["通貨"],
          "zhFocus": ["货币"]
        }
      ]
    },
    {
      "id": "n2-0051",
      "jlpt": "N2",
      "headword": "停止",
      "source_form": "停止",
      "variants": [
        "停止"
      ],
      "reading": "ていし",
      "reading_variants": [
        "ていし"
      ],
      "romaji": "teishi",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "停止；停顿",
      "kanji_readings": [
        {
          "form": "停止",
          "reading": "ていし"
        }
      ],
      "examples": [
        {
          "ja": "大雪のため、電車の運転が停止しました。",
          "zh": "由于大雪，电车停止运行了。",
          "focus": ["停止"],
          "zhFocus": ["停止"]
        },
        {
          "ja": "機械が急に停止しました。",
          "zh": "机器突然停止了。",
          "focus": ["停止"],
          "zhFocus": ["停止"]
        },
        {
          "ja": "規則を守らなかったので、その店は営業停止になりました。",
          "zh": "因为没有遵守规定，那家店被勒令停业了。",
          "focus": ["停止"],
          "zhFocus": ["停业"]
        }
      ]
    },
    {
      "id": "n2-0052",
      "jlpt": "N2",
      "headword": "天皇",
      "source_form": "天皇",
      "variants": [
        "天皇"
      ],
      "reading": "てんのう",
      "reading_variants": [
        "てんのう"
      ],
      "romaji": "tennou",
      "part_of_speech": "noun",
      "meaning_zh": "天皇",
      "kanji_readings": [
        {
          "form": "天皇",
          "reading": "てんのう"
        }
      ],
      "examples": [
        {
          "ja": "天皇は日本の象徴です。",
          "zh": "天皇是日本的象征。",
          "focus": ["天皇"],
          "zhFocus": ["天皇"]
        },
        {
          "ja": "天皇の誕生日は国民の祝日です。",
          "zh": "天皇的生日是国民节日。",
          "focus": ["天皇"],
          "zhFocus": ["天皇"]
        },
        {
          "ja": "天皇がテレビでお言葉を述べました。",
          "zh": "天皇在电视上发表了讲话。",
          "focus": ["天皇"],
          "zhFocus": ["天皇"]
        }
      ]
    },
    {
      "id": "n2-0053",
      "jlpt": "N2",
      "headword": "展開",
      "source_form": "展開",
      "variants": [
        "展開"
      ],
      "reading": "てんかい",
      "reading_variants": [
        "てんかい"
      ],
      "romaji": "tenkai",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "展开；发展；开展",
      "kanji_readings": [
        {
          "form": "展開",
          "reading": "てんかい"
        }
      ],
      "examples": [
        {
          "ja": "話が意外な方向に展開しました。",
          "zh": "事情朝着意想不到的方向发展了。",
          "focus": ["展開"],
          "zhFocus": ["发展"]
        },
        {
          "ja": "この小説は展開が速くて面白いです。",
          "zh": "这部小说情节发展很快，很有意思。",
          "focus": ["展開"],
          "zhFocus": ["发展"]
        },
        {
          "ja": "その会社は海外でも事業を展開しています。",
          "zh": "那家公司在海外也开展了业务。",
          "focus": ["展開"],
          "zhFocus": ["开展"]
        }
      ]
    },
    {
      "id": "n2-0054",
      "jlpt": "N2",
      "headword": "南北",
      "source_form": "南北",
      "variants": [
        "南北"
      ],
      "reading": "なんぼく",
      "reading_variants": [
        "なんぼく"
      ],
      "romaji": "nanboku",
      "part_of_speech": "noun",
      "meaning_zh": "南北",
      "kanji_readings": [
        {
          "form": "南北",
          "reading": "なんぼく"
        }
      ],
      "examples": [
        {
          "ja": "この国は南北に長いです。",
          "zh": "这个国家南北狭长。",
          "focus": ["南北"],
          "zhFocus": ["南北"]
        },
        {
          "ja": "大きな道が町を南北に通っています。",
          "zh": "一条大路南北贯穿城镇。",
          "focus": ["南北"],
          "zhFocus": ["南北"]
        },
        {
          "ja": "川が町を南北に分けています。",
          "zh": "河流把城镇分成南北两部分。",
          "focus": ["南北"],
          "zhFocus": ["南北"]
        }
      ],
      "note_zh": "与「東西（东西）」相对。"
    },
    {
      "id": "n2-0055",
      "jlpt": "N2",
      "headword": "日程",
      "source_form": "日程",
      "variants": [
        "日程"
      ],
      "reading": "にってい",
      "reading_variants": [
        "にってい"
      ],
      "romaji": "nittei",
      "part_of_speech": "noun",
      "meaning_zh": "日程；日期安排",
      "kanji_readings": [
        {
          "form": "日程",
          "reading": "にってい"
        }
      ],
      "examples": [
        {
          "ja": "旅行の日程を決めました。",
          "zh": "定好了旅行的日程。",
          "focus": ["日程"],
          "zhFocus": ["日程"]
        },
        {
          "ja": "会議の日程が変わりました。",
          "zh": "会议的日程变了。",
          "focus": ["日程"],
          "zhFocus": ["日程"]
        },
        {
          "ja": "日程が合わなくて、参加できません。",
          "zh": "日程安排不开，没法参加。",
          "focus": ["日程"],
          "zhFocus": ["日程安排"]
        }
      ]
    },
    {
      "id": "n2-0056",
      "jlpt": "N2",
      "headword": "編集",
      "source_form": "編集",
      "variants": [
        "編集"
      ],
      "reading": "へんしゅう",
      "reading_variants": [
        "へんしゅう"
      ],
      "romaji": "henshuu",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "编辑",
      "kanji_readings": [
        {
          "form": "編集",
          "reading": "へんしゅう"
        }
      ],
      "examples": [
        {
          "ja": "雑誌の編集の仕事をしています。",
          "zh": "在做杂志的编辑工作。",
          "focus": ["編集"],
          "zhFocus": ["编辑"]
        },
        {
          "ja": "撮った動画を編集しました。",
          "zh": "编辑了拍好的视频。",
          "focus": ["編集"],
          "zhFocus": ["编辑"]
        },
        {
          "ja": "この辞書は大勢の人が編集しました。",
          "zh": "这本词典由很多人编辑而成。",
          "focus": ["編集"],
          "zhFocus": ["编辑"]
        }
      ]
    },
    {
      "id": "n2-0057",
      "jlpt": "N2",
      "headword": "輸送",
      "source_form": "輸送",
      "variants": [
        "輸送"
      ],
      "reading": "ゆそう",
      "reading_variants": [
        "ゆそう"
      ],
      "romaji": "yusou",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "运输；输送",
      "kanji_readings": [
        {
          "form": "輸送",
          "reading": "ゆそう"
        }
      ],
      "examples": [
        {
          "ja": "荷物はトラックで輸送されます。",
          "zh": "货物用卡车运输。",
          "focus": ["輸送"],
          "zhFocus": ["运输"]
        },
        {
          "ja": "大雪で、物の輸送が遅れています。",
          "zh": "因为大雪，物资运输延误了。",
          "focus": ["輸送"],
          "zhFocus": ["运输"]
        },
        {
          "ja": "船は大量の荷物を輸送できます。",
          "zh": "船可以运输大量货物。",
          "focus": ["輸送"],
          "zhFocus": ["运输"]
        }
      ]
    },
    {
      "id": "n2-0058",
      "jlpt": "N2",
      "headword": "臨時",
      "source_form": "臨時",
      "variants": [
        "臨時"
      ],
      "reading": "りんじ",
      "reading_variants": [
        "りんじ"
      ],
      "romaji": "rinji",
      "part_of_speech": "noun",
      "meaning_zh": "临时",
      "kanji_readings": [
        {
          "form": "臨時",
          "reading": "りんじ"
        }
      ],
      "examples": [
        {
          "ja": "祭りの日は臨時の電車が出ます。",
          "zh": "节日那天会开出临时电车。",
          "focus": ["臨時"],
          "zhFocus": ["临时"]
        },
        {
          "ja": "今日は臨時の会議があります。",
          "zh": "今天有临时会议。",
          "focus": ["臨時"],
          "zhFocus": ["临时"]
        },
        {
          "ja": "その店は明日、臨時休業します。",
          "zh": "那家店明天临时停业。",
          "focus": ["臨時"],
          "zhFocus": ["临时"]
        }
      ]
    },
    {
      "id": "n2-0059",
      "jlpt": "N2",
      "headword": "きっかけ",
      "source_form": "きっかけ",
      "variants": [
        "きっかけ",
        "切っ掛け"
      ],
      "reading": "きっかけ",
      "reading_variants": [
        "きっかけ"
      ],
      "romaji": "kikkake",
      "part_of_speech": "noun",
      "meaning_zh": "契机；起因；机会",
      "kanji_readings": [
        {
          "form": "切っ掛け",
          "reading": "きっかけ"
        }
      ],
      "examples": [
        {
          "ja": "日本の映画がきっかけで、日本語の勉強を始めました。",
          "zh": "以日本电影为契机，开始学日语。",
          "focus": ["きっかけ"],
          "zhFocus": ["契机"]
        },
        {
          "ja": "話しかけるきっかけがなかなかつかめません。",
          "zh": "总也找不到搭话的机会。",
          "focus": ["きっかけ"],
          "zhFocus": ["机会"]
        },
        {
          "ja": "けんかのきっかけは小さなことでした。",
          "zh": "吵架的起因是件小事。",
          "focus": ["きっかけ"],
          "zhFocus": ["起因"]
        }
      ],
      "note_zh": "常写作假名；汉字为「切っ掛け」。"
    },
    {
      "id": "n2-0060",
      "jlpt": "N2",
      "headword": "為替",
      "source_form": "為替",
      "variants": [
        "為替"
      ],
      "reading": "かわせ",
      "reading_variants": [
        "かわせ"
      ],
      "romaji": "kawase",
      "part_of_speech": "noun",
      "meaning_zh": "汇兑；汇率",
      "kanji_readings": [
        {
          "form": "為替",
          "reading": "かわせ"
        }
      ],
      "examples": [
        {
          "ja": "円の為替レートは毎日変わります。",
          "zh": "日元的汇率每天都在变。",
          "focus": ["為替"],
          "zhFocus": ["汇率"]
        },
        {
          "ja": "為替の影響で、輸入品の値段が上がりました。",
          "zh": "受汇率影响，进口商品涨价了。",
          "focus": ["為替"],
          "zhFocus": ["汇率"]
        },
        {
          "ja": "銀行で外国為替の手続きをしました。",
          "zh": "在银行办了外汇手续。",
          "focus": ["為替"],
          "zhFocus": ["外汇"]
        }
      ]
    },
    {
      "id": "n2-0061",
      "jlpt": "N2",
      "headword": "一定",
      "source_form": "一定",
      "variants": [
        "一定"
      ],
      "reading": "いってい",
      "reading_variants": [
        "いってい"
      ],
      "romaji": "ittei",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "固定；恒定；一定（程度）的",
      "senses_zh": [
        "固定；恒定",
        "一定（程度）的"
      ],
      "kanji_readings": [
        {
          "form": "一定",
          "reading": "いってい"
        }
      ],
      "examples": [
        {
          "ja": "部屋の温度を一定に保っています。",
          "zh": "把房间温度保持恒定。",
          "focus": ["一定"],
          "zhFocus": ["恒定"]
        },
        {
          "ja": "一定のスピードで走ってください。",
          "zh": "请以一定的速度跑。",
          "focus": ["一定"],
          "zhFocus": ["一定"]
        },
        {
          "ja": "この方法には一定の効果があります。",
          "zh": "这个方法有一定的效果。",
          "focus": ["一定"],
          "zhFocus": ["一定"]
        }
      ]
    },
    {
      "id": "n2-0062",
      "jlpt": "N2",
      "headword": "応援",
      "source_form": "応援",
      "variants": [
        "応援"
      ],
      "reading": "おうえん",
      "reading_variants": [
        "おうえん"
      ],
      "romaji": "ouen",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "加油；助威；支持；支援",
      "senses_zh": [
        "加油；助威",
        "支持；支援"
      ],
      "kanji_readings": [
        {
          "form": "応援",
          "reading": "おうえん"
        }
      ],
      "examples": [
        {
          "ja": "サッカーの試合で、日本のチームを応援しました。",
          "zh": "在足球比赛中为日本队加油。",
          "focus": ["応援"],
          "zhFocus": ["加油"]
        },
        {
          "ja": "家族が私の夢を応援してくれています。",
          "zh": "家人支持我的梦想。",
          "focus": ["応援"],
          "zhFocus": ["支持"]
        },
        {
          "ja": "忙しい部署に、ほかの部署から応援が来ました。",
          "zh": "其他部门来支援忙碌的部门了。",
          "focus": ["応援"],
          "zhFocus": ["支援"]
        }
      ]
    },
    {
      "id": "n2-0063",
      "jlpt": "N2",
      "headword": "下車",
      "source_form": "下車",
      "variants": [
        "下車"
      ],
      "reading": "げしゃ",
      "reading_variants": [
        "げしゃ"
      ],
      "romaji": "gesha",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "下车",
      "kanji_readings": [
        {
          "form": "下車",
          "reading": "げしゃ"
        }
      ],
      "examples": [
        {
          "ja": "次の駅で下車します。",
          "zh": "在下一站下车。",
          "focus": ["下車"],
          "zhFocus": ["下车"]
        },
        {
          "ja": "途中で下車して、町を見物しました。",
          "zh": "中途下车，游览了城镇。",
          "focus": ["下車"],
          "zhFocus": ["下车"]
        },
        {
          "ja": "この切符では、途中下車ができません。",
          "zh": "这张票不能中途下车。",
          "focus": ["下車"],
          "zhFocus": ["下车"]
        }
      ],
      "note_zh": "多用于广播和车票；口语一般说「降りる」。"
    },
    {
      "id": "n2-0064",
      "jlpt": "N2",
      "headword": "課税",
      "source_form": "課税",
      "variants": [
        "課税"
      ],
      "reading": "かぜい",
      "reading_variants": [
        "かぜい"
      ],
      "romaji": "kazei",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "征税；课税",
      "kanji_readings": [
        {
          "form": "課税",
          "reading": "かぜい"
        }
      ],
      "examples": [
        {
          "ja": "外国から持ち込んだ品物に課税されることがあります。",
          "zh": "从国外带进来的物品有时要征税。",
          "focus": ["課税"],
          "zhFocus": ["征税"]
        },
        {
          "ja": "政府はたばこへの課税を強化しました。",
          "zh": "政府加强了对香烟的征税。",
          "focus": ["課税"],
          "zhFocus": ["征税"]
        },
        {
          "ja": "この商品には課税されません。",
          "zh": "这件商品不征税。",
          "focus": ["課税"],
          "zhFocus": ["征税"]
        }
      ]
    },
    {
      "id": "n2-0065",
      "jlpt": "N2",
      "headword": "解放",
      "source_form": "解放",
      "variants": [
        "解放"
      ],
      "reading": "かいほう",
      "reading_variants": [
        "かいほう"
      ],
      "romaji": "kaihou",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "解放；释放；摆脱",
      "kanji_readings": [
        {
          "form": "解放",
          "reading": "かいほう"
        }
      ],
      "examples": [
        {
          "ja": "やっと試験から解放されました。",
          "zh": "终于从考试中解脱出来了。",
          "focus": ["解放"],
          "zhFocus": ["解脱"]
        },
        {
          "ja": "犯人は人質を解放しました。",
          "zh": "犯人释放了人质。",
          "focus": ["解放"],
          "zhFocus": ["释放"]
        },
        {
          "ja": "戦争が終わって、その国は解放されました。",
          "zh": "战争结束，那个国家获得了解放。",
          "focus": ["解放"],
          "zhFocus": ["解放"]
        }
      ],
      "note_zh": "与「開放（开放）」同音。"
    },
    {
      "id": "n2-0066",
      "jlpt": "N2",
      "headword": "基盤",
      "source_form": "基盤",
      "variants": [
        "基盤"
      ],
      "reading": "きばん",
      "reading_variants": [
        "きばん"
      ],
      "romaji": "kiban",
      "part_of_speech": "noun",
      "meaning_zh": "基础；根基",
      "kanji_readings": [
        {
          "form": "基盤",
          "reading": "きばん"
        }
      ],
      "examples": [
        {
          "ja": "生活の基盤を作るのに時間がかかりました。",
          "zh": "打下生活的基础花了不少时间。",
          "focus": ["基盤"],
          "zhFocus": ["基础"]
        },
        {
          "ja": "会社の経営の基盤が弱くなっています。",
          "zh": "公司的经营根基在变弱。",
          "focus": ["基盤"],
          "zhFocus": ["根基"]
        },
        {
          "ja": "交通は経済の基盤です。",
          "zh": "交通是经济的基础。",
          "focus": ["基盤"],
          "zhFocus": ["基础"]
        }
      ]
    },
    {
      "id": "n2-0067",
      "jlpt": "N2",
      "headword": "継続",
      "source_form": "継続",
      "variants": [
        "継続"
      ],
      "reading": "けいぞく",
      "reading_variants": [
        "けいぞく"
      ],
      "romaji": "keizoku",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "继续；持续",
      "kanji_readings": [
        {
          "form": "継続",
          "reading": "けいぞく"
        }
      ],
      "examples": [
        {
          "ja": "毎日の練習を継続することが大切です。",
          "zh": "坚持每天练习很重要。",
          "focus": ["継続"],
          "zhFocus": ["坚持"]
        },
        {
          "ja": "この契約は来年も継続します。",
          "zh": "这份合同明年也继续。",
          "focus": ["継続"],
          "zhFocus": ["继续"]
        },
        {
          "ja": "調査は来月まで継続される予定です。",
          "zh": "调查预计持续到下个月。",
          "focus": ["継続"],
          "zhFocus": ["持续"]
        }
      ]
    },
    {
      "id": "n2-0068",
      "jlpt": "N2",
      "headword": "研修",
      "source_form": "研修",
      "variants": [
        "研修"
      ],
      "reading": "けんしゅう",
      "reading_variants": [
        "けんしゅう"
      ],
      "romaji": "kenshuu",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "进修；培训",
      "kanji_readings": [
        {
          "form": "研修",
          "reading": "けんしゅう"
        }
      ],
      "examples": [
        {
          "ja": "新しい社員は四月に研修を受けます。",
          "zh": "新员工四月接受培训。",
          "focus": ["研修"],
          "zhFocus": ["培训"]
        },
        {
          "ja": "海外の工場で研修しました。",
          "zh": "在海外工厂进修了。",
          "focus": ["研修"],
          "zhFocus": ["进修"]
        },
        {
          "ja": "研修の内容をレポートにまとめました。",
          "zh": "把培训的内容整理成了报告。",
          "focus": ["研修"],
          "zhFocus": ["培训"]
        }
      ]
    },
    {
      "id": "n2-0069",
      "jlpt": "N2",
      "headword": "交代",
      "source_form": "交替",
      "variants": [
        "交代",
        "交替"
      ],
      "reading": "こうたい",
      "reading_variants": [
        "こうたい"
      ],
      "romaji": "koutai",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "交替；轮换；替换",
      "kanji_readings": [
        {
          "form": "交代",
          "reading": "こうたい"
        },
        {
          "form": "交替",
          "reading": "こうたい"
        }
      ],
      "examples": [
        {
          "ja": "夜は二人で交代して運転しました。",
          "zh": "晚上两个人轮流开车。",
          "focus": ["交代"],
          "zhFocus": ["轮流"]
        },
        {
          "ja": "試合の途中で選手が交代しました。",
          "zh": "比赛中途换了选手。",
          "focus": ["交代"],
          "zhFocus": ["换"]
        },
        {
          "ja": "店員は三時に交代します。",
          "zh": "店员三点交班。",
          "focus": ["交代"],
          "zhFocus": ["交班"]
        }
      ]
    },
    {
      "id": "n2-0070",
      "jlpt": "N2",
      "headword": "講師",
      "source_form": "講師",
      "variants": [
        "講師"
      ],
      "reading": "こうし",
      "reading_variants": [
        "こうし"
      ],
      "romaji": "koushi",
      "part_of_speech": "noun",
      "meaning_zh": "讲师",
      "kanji_readings": [
        {
          "form": "講師",
          "reading": "こうし"
        }
      ],
      "examples": [
        {
          "ja": "大学で英語の講師をしています。",
          "zh": "在大学当英语讲师。",
          "focus": ["講師"],
          "zhFocus": ["讲师"]
        },
        {
          "ja": "今日の講演の講師は有名な作家です。",
          "zh": "今天演讲的讲师是位著名作家。",
          "focus": ["講師"],
          "zhFocus": ["讲师"]
        },
        {
          "ja": "料理教室の講師に質問しました。",
          "zh": "向烹饪教室的讲师提了问。",
          "focus": ["講師"],
          "zhFocus": ["讲师"]
        }
      ]
    },
    {
      "id": "n2-0071",
      "jlpt": "N2",
      "headword": "合同",
      "source_form": "合同",
      "variants": [
        "合同"
      ],
      "reading": "ごうどう",
      "reading_variants": [
        "ごうどう"
      ],
      "romaji": "goudou",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "联合；共同",
      "kanji_readings": [
        {
          "form": "合同",
          "reading": "ごうどう"
        }
      ],
      "examples": [
        {
          "ja": "二つの学校が合同で運動会を開きました。",
          "zh": "两所学校联合举办了运动会。",
          "focus": ["合同"],
          "zhFocus": ["联合"]
        },
        {
          "ja": "三つのクラスで合同の授業をしました。",
          "zh": "三个班一起上了联合课。",
          "focus": ["合同"],
          "zhFocus": ["联合"]
        },
        {
          "ja": "地域の団体が合同でイベントを企画しました。",
          "zh": "地区的团体共同策划了活动。",
          "focus": ["合同"],
          "zhFocus": ["共同"]
        }
      ]
    },
    {
      "id": "n2-0072",
      "jlpt": "N2",
      "headword": "撮影",
      "source_form": "撮影",
      "variants": [
        "撮影"
      ],
      "reading": "さつえい",
      "reading_variants": [
        "さつえい"
      ],
      "romaji": "satsuei",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "摄影；拍摄",
      "kanji_readings": [
        {
          "form": "撮影",
          "reading": "さつえい"
        }
      ],
      "examples": [
        {
          "ja": "ここで写真を撮影してもいいですか。",
          "zh": "可以在这里拍照吗？",
          "focus": ["撮影"],
          "zhFocus": ["拍照"]
        },
        {
          "ja": "この映画は京都で撮影されました。",
          "zh": "这部电影是在京都拍摄的。",
          "focus": ["撮影"],
          "zhFocus": ["拍摄"]
        },
        {
          "ja": "館内での撮影は禁止されています。",
          "zh": "馆内禁止摄影。",
          "focus": ["撮影"],
          "zhFocus": ["摄影"]
        }
      ]
    },
    {
      "id": "n2-0073",
      "jlpt": "N2",
      "headword": "指定",
      "source_form": "指定",
      "variants": [
        "指定"
      ],
      "reading": "してい",
      "reading_variants": [
        "してい"
      ],
      "romaji": "shitei",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "指定",
      "kanji_readings": [
        {
          "form": "指定",
          "reading": "してい"
        }
      ],
      "examples": [
        {
          "ja": "指定された時間に来てください。",
          "zh": "请在指定的时间来。",
          "focus": ["指定"],
          "zhFocus": ["指定"]
        },
        {
          "ja": "新幹線の指定席を予約しました。",
          "zh": "预订了新干线的对号座位。",
          "focus": ["指定"],
          "zhFocus": ["对号"]
        },
        {
          "ja": "会場はこちらで指定します。",
          "zh": "会场由我们来指定。",
          "focus": ["指定"],
          "zhFocus": ["指定"]
        }
      ]
    },
    {
      "id": "n2-0074",
      "jlpt": "N2",
      "headword": "氏名",
      "source_form": "氏名",
      "variants": [
        "氏名"
      ],
      "reading": "しめい",
      "reading_variants": [
        "しめい"
      ],
      "romaji": "shimei",
      "part_of_speech": "noun",
      "meaning_zh": "姓名",
      "kanji_readings": [
        {
          "form": "氏名",
          "reading": "しめい"
        }
      ],
      "examples": [
        {
          "ja": "ここに氏名と住所を書いてください。",
          "zh": "请在这里写上姓名和地址。",
          "focus": ["氏名"],
          "zhFocus": ["姓名"]
        },
        {
          "ja": "書類には必ず氏名を記入してください。",
          "zh": "文件上请务必填写姓名。",
          "focus": ["氏名"],
          "zhFocus": ["姓名"]
        },
        {
          "ja": "合格した人の氏名が発表されました。",
          "zh": "公布了合格者的姓名。",
          "focus": ["氏名"],
          "zhFocus": ["姓名"]
        }
      ],
      "note_zh": "书面语；口语一般说「名前」。"
    },
    {
      "id": "n2-0075",
      "jlpt": "N2",
      "headword": "私立",
      "source_form": "私立",
      "variants": [
        "私立"
      ],
      "reading": "しりつ",
      "reading_variants": [
        "しりつ"
      ],
      "romaji": "shiritsu",
      "part_of_speech": "noun",
      "meaning_zh": "私立",
      "kanji_readings": [
        {
          "form": "私立",
          "reading": "しりつ"
        }
      ],
      "examples": [
        {
          "ja": "妹は私立の高校に通っています。",
          "zh": "妹妹在上私立高中。",
          "focus": ["私立"],
          "zhFocus": ["私立"]
        },
        {
          "ja": "私立の大学は学費が高いです。",
          "zh": "私立大学学费很贵。",
          "focus": ["私立"],
          "zhFocus": ["私立"]
        },
        {
          "ja": "この病院は私立です。",
          "zh": "这家医院是私立的。",
          "focus": ["私立"],
          "zhFocus": ["私立"]
        }
      ],
      "note_zh": "与「国立」「公立」相对；为与同音的「市立」区分，也读作「わたくしりつ」。"
    },
    {
      "id": "n2-0076",
      "jlpt": "N2",
      "headword": "勝負",
      "source_form": "勝負",
      "variants": [
        "勝負"
      ],
      "reading": "しょうぶ",
      "reading_variants": [
        "しょうぶ"
      ],
      "romaji": "shoubu",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "胜负；比赛；较量",
      "kanji_readings": [
        {
          "form": "勝負",
          "reading": "しょうぶ"
        }
      ],
      "examples": [
        {
          "ja": "勝負はまだ分かりません。",
          "zh": "胜负还不知道。",
          "focus": ["勝負"],
          "zhFocus": ["胜负"]
        },
        {
          "ja": "友達とテニスで勝負しました。",
          "zh": "和朋友打网球比了一场。",
          "focus": ["勝負"],
          "zhFocus": ["比"]
        },
        {
          "ja": "最後の一点で勝負が決まりました。",
          "zh": "最后一分决定了胜负。",
          "focus": ["勝負"],
          "zhFocus": ["胜负"]
        }
      ]
    },
    {
      "id": "n2-0077",
      "jlpt": "N2",
      "headword": "深夜",
      "source_form": "深夜",
      "variants": [
        "深夜"
      ],
      "reading": "しんや",
      "reading_variants": [
        "しんや"
      ],
      "romaji": "shin'ya",
      "part_of_speech": "noun",
      "meaning_zh": "深夜",
      "kanji_readings": [
        {
          "form": "深夜",
          "reading": "しんや"
        }
      ],
      "examples": [
        {
          "ja": "深夜まで仕事をしました。",
          "zh": "工作到了深夜。",
          "focus": ["深夜"],
          "zhFocus": ["深夜"]
        },
        {
          "ja": "深夜のテレビ番組をよく見ます。",
          "zh": "我常看深夜电视节目。",
          "focus": ["深夜"],
          "zhFocus": ["深夜"]
        },
        {
          "ja": "深夜に大きな音を出さないでください。",
          "zh": "深夜请不要发出很大的声音。",
          "focus": ["深夜"],
          "zhFocus": ["深夜"]
        }
      ]
    },
    {
      "id": "n2-0078",
      "jlpt": "N2",
      "headword": "申請",
      "source_form": "申請",
      "variants": [
        "申請"
      ],
      "reading": "しんせい",
      "reading_variants": [
        "しんせい"
      ],
      "romaji": "shinsei",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "申请",
      "kanji_readings": [
        {
          "form": "申請",
          "reading": "しんせい"
        }
      ],
      "examples": [
        {
          "ja": "大使館でビザを申請しました。",
          "zh": "在大使馆申请了签证。",
          "focus": ["申請"],
          "zhFocus": ["申请"]
        },
        {
          "ja": "申請の書類は来週までに出してください。",
          "zh": "申请文件请在下周之前提交。",
          "focus": ["申請"],
          "zhFocus": ["申请"]
        },
        {
          "ja": "奨学金を申請するつもりです。",
          "zh": "打算申请奖学金。",
          "focus": ["申請"],
          "zhFocus": ["申请"]
        }
      ]
    },
    {
      "id": "n2-0079",
      "jlpt": "N2",
      "headword": "制作",
      "source_form": "制作",
      "variants": [
        "制作"
      ],
      "reading": "せいさく",
      "reading_variants": [
        "せいさく"
      ],
      "romaji": "seisaku",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "制作；创作（艺术作品、节目等）",
      "kanji_readings": [
        {
          "form": "制作",
          "reading": "せいさく"
        }
      ],
      "examples": [
        {
          "ja": "この番組はテレビ局が制作しました。",
          "zh": "这个节目是电视台制作的。",
          "focus": ["制作"],
          "zhFocus": ["制作"]
        },
        {
          "ja": "美術の授業で作品を制作しています。",
          "zh": "在美术课上创作作品。",
          "focus": ["制作"],
          "zhFocus": ["创作"]
        },
        {
          "ja": "その映画の制作には二年かかりました。",
          "zh": "那部电影的制作花了两年。",
          "focus": ["制作"],
          "zhFocus": ["制作"]
        }
      ],
      "note_zh": "与「製作（制造产品等）」同音；艺术作品、节目多用「制作」。"
    },
    {
      "id": "n2-0080",
      "jlpt": "N2",
      "headword": "相撲",
      "source_form": "相撲",
      "variants": [
        "相撲"
      ],
      "reading": "すもう",
      "reading_variants": [
        "すもう"
      ],
      "romaji": "sumou",
      "part_of_speech": "noun",
      "meaning_zh": "相扑",
      "kanji_readings": [
        {
          "form": "相撲",
          "reading": "すもう"
        }
      ],
      "examples": [
        {
          "ja": "テレビで相撲を見るのが好きです。",
          "zh": "我喜欢在电视上看相扑。",
          "focus": ["相撲"],
          "zhFocus": ["相扑"]
        },
        {
          "ja": "相撲は日本の伝統的なスポーツです。",
          "zh": "相扑是日本的传统体育运动。",
          "focus": ["相撲"],
          "zhFocus": ["相扑"]
        },
        {
          "ja": "子供たちが公園で相撲をとっています。",
          "zh": "孩子们在公园里玩相扑。",
          "focus": ["相撲"],
          "zhFocus": ["相扑"]
        }
      ]
    },
    {
      "id": "n2-0081",
      "jlpt": "N2",
      "headword": "追加",
      "source_form": "追加",
      "variants": [
        "追加"
      ],
      "reading": "ついか",
      "reading_variants": [
        "ついか"
      ],
      "romaji": "tsuika",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "追加；添加；额外",
      "kanji_readings": [
        {
          "form": "追加",
          "reading": "ついか"
        }
      ],
      "examples": [
        {
          "ja": "料理を一品追加しました。",
          "zh": "加点了一道菜。",
          "focus": ["追加"],
          "zhFocus": ["加点"]
        },
        {
          "ja": "メンバーを二人追加してください。",
          "zh": "请再加两个成员。",
          "focus": ["追加"],
          "zhFocus": ["加"]
        },
        {
          "ja": "追加の料金はかかりません。",
          "zh": "不需要额外的费用。",
          "focus": ["追加"],
          "zhFocus": ["额外"]
        }
      ]
    },
    {
      "id": "n2-0082",
      "jlpt": "N2",
      "headword": "低下",
      "source_form": "低下",
      "variants": [
        "低下"
      ],
      "reading": "ていか",
      "reading_variants": [
        "ていか"
      ],
      "romaji": "teika",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "下降；降低",
      "kanji_readings": [
        {
          "form": "低下",
          "reading": "ていか"
        }
      ],
      "examples": [
        {
          "ja": "年を取ると、体力が低下します。",
          "zh": "上了年纪，体力就会下降。",
          "focus": ["低下"],
          "zhFocus": ["下降"]
        },
        {
          "ja": "子供の学力の低下が問題になっています。",
          "zh": "孩子学习能力的下降成了问题。",
          "focus": ["低下"],
          "zhFocus": ["下降"]
        },
        {
          "ja": "気温の低下で、野菜の値段が上がりました。",
          "zh": "由于气温下降，蔬菜涨价了。",
          "focus": ["低下"],
          "zhFocus": ["下降"]
        }
      ]
    },
    {
      "id": "n2-0083",
      "jlpt": "N2",
      "headword": "電力",
      "source_form": "電力",
      "variants": [
        "電力"
      ],
      "reading": "でんりょく",
      "reading_variants": [
        "でんりょく"
      ],
      "romaji": "denryoku",
      "part_of_speech": "noun",
      "meaning_zh": "电力",
      "kanji_readings": [
        {
          "form": "電力",
          "reading": "でんりょく"
        }
      ],
      "examples": [
        {
          "ja": "夏は電力の使用量が増えます。",
          "zh": "夏天电力的使用量会增加。",
          "focus": ["電力"],
          "zhFocus": ["电力"]
        },
        {
          "ja": "地震の後、電力が足りなくなりました。",
          "zh": "地震后电力不足了。",
          "focus": ["電力"],
          "zhFocus": ["电力"]
        },
        {
          "ja": "この工場は太陽の光で電力を作っています。",
          "zh": "这家工厂利用阳光生产电力。",
          "focus": ["電力"],
          "zhFocus": ["电力"]
        }
      ]
    },
    {
      "id": "n2-0084",
      "jlpt": "N2",
      "headword": "東西",
      "source_form": "東西",
      "variants": [
        "東西"
      ],
      "reading": "とうざい",
      "reading_variants": [
        "とうざい"
      ],
      "romaji": "touzai",
      "part_of_speech": "noun",
      "meaning_zh": "东西（方向）；东方和西方",
      "kanji_readings": [
        {
          "form": "東西",
          "reading": "とうざい"
        }
      ],
      "examples": [
        {
          "ja": "この道は町を東西に走っています。",
          "zh": "这条路东西向贯穿城镇。",
          "focus": ["東西"],
          "zhFocus": ["东西"]
        },
        {
          "ja": "東西の文化の違いについて研究しています。",
          "zh": "在研究东西方文化的差异。",
          "focus": ["東西"],
          "zhFocus": ["东西方"]
        },
        {
          "ja": "駅の東西に出口があります。",
          "zh": "车站东西两侧都有出口。",
          "focus": ["東西"],
          "zhFocus": ["东西"]
        }
      ],
      "note_zh": "与「南北（南北）」相对。"
    },
    {
      "id": "n2-0085",
      "jlpt": "N2",
      "headword": "特定",
      "source_form": "特定",
      "variants": [
        "特定"
      ],
      "reading": "とくてい",
      "reading_variants": [
        "とくてい"
      ],
      "romaji": "tokutei",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "特定；查明；锁定",
      "senses_zh": [
        "特定",
        "查明；锁定"
      ],
      "kanji_readings": [
        {
          "form": "特定",
          "reading": "とくてい"
        }
      ],
      "examples": [
        {
          "ja": "特定の人だけが入れる部屋です。",
          "zh": "这是只有特定的人才能进的房间。",
          "focus": ["特定"],
          "zhFocus": ["特定"]
        },
        {
          "ja": "警察は犯人を特定しました。",
          "zh": "警察锁定了犯人。",
          "focus": ["特定"],
          "zhFocus": ["锁定"]
        },
        {
          "ja": "事故の原因はまだ特定されていません。",
          "zh": "事故原因还没有查明。",
          "focus": ["特定"],
          "zhFocus": ["查明"]
        }
      ]
    },
    {
      "id": "n2-0086",
      "jlpt": "N2",
      "headword": "年度",
      "source_form": "年度",
      "variants": [
        "年度"
      ],
      "reading": "ねんど",
      "reading_variants": [
        "ねんど"
      ],
      "romaji": "nendo",
      "part_of_speech": "noun",
      "meaning_zh": "年度",
      "kanji_readings": [
        {
          "form": "年度",
          "reading": "ねんど"
        }
      ],
      "examples": [
        {
          "ja": "日本の会社の年度は四月に始まります。",
          "zh": "日本公司的年度从四月开始。",
          "focus": ["年度"],
          "zhFocus": ["年度"]
        },
        {
          "ja": "今年度の予算が決まりました。",
          "zh": "本年度的预算定下来了。",
          "focus": ["年度"],
          "zhFocus": ["年度"]
        },
        {
          "ja": "年度の終わりは仕事が忙しいです。",
          "zh": "年度末工作很忙。",
          "focus": ["年度"],
          "zhFocus": ["年度"]
        }
      ]
    },
    {
      "id": "n2-0087",
      "jlpt": "N2",
      "headword": "売り上げ",
      "source_form": "売上",
      "variants": [
        "売り上げ",
        "売上"
      ],
      "reading": "うりあげ",
      "reading_variants": [
        "うりあげ"
      ],
      "romaji": "uriage",
      "part_of_speech": "noun",
      "meaning_zh": "销售额；营业额",
      "kanji_readings": [
        {
          "form": "売り上げ",
          "reading": "うりあげ"
        },
        {
          "form": "売上",
          "reading": "うりあげ"
        }
      ],
      "examples": [
        {
          "ja": "今月の売り上げは先月より多いです。",
          "zh": "这个月的销售额比上个月多。",
          "focus": ["売り上げ"],
          "zhFocus": ["销售额"]
        },
        {
          "ja": "新しい商品のおかげで、売り上げが伸びました。",
          "zh": "多亏新商品，销售额增长了。",
          "focus": ["売り上げ"],
          "zhFocus": ["销售额"]
        },
        {
          "ja": "店の一日の売り上げを計算しました。",
          "zh": "计算了店里一天的营业额。",
          "focus": ["売り上げ"],
          "zhFocus": ["营业额"]
        }
      ]
    },
    {
      "id": "n2-0088",
      "jlpt": "N2",
      "headword": "売買",
      "source_form": "売買",
      "variants": [
        "売買"
      ],
      "reading": "ばいばい",
      "reading_variants": [
        "ばいばい"
      ],
      "romaji": "baibai",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "买卖；交易",
      "kanji_readings": [
        {
          "form": "売買",
          "reading": "ばいばい"
        }
      ],
      "examples": [
        {
          "ja": "インターネットで古い本を売買しています。",
          "zh": "在网上买卖旧书。",
          "focus": ["売買"],
          "zhFocus": ["买卖"]
        },
        {
          "ja": "土地の売買には時間がかかります。",
          "zh": "土地交易很花时间。",
          "focus": ["売買"],
          "zhFocus": ["交易"]
        },
        {
          "ja": "株の売買で利益を得ました。",
          "zh": "通过股票买卖获得了利润。",
          "focus": ["売買"],
          "zhFocus": ["买卖"]
        }
      ]
    },
    {
      "id": "n2-0089",
      "jlpt": "N2",
      "headword": "迫る",
      "source_form": "迫る",
      "variants": [
        "迫る"
      ],
      "reading": "せまる",
      "reading_variants": [
        "せまる"
      ],
      "romaji": "semaru",
      "part_of_speech": "verb",
      "meaning_zh": "逼近；临近；逼迫",
      "senses_zh": [
        "逼近；临近",
        "逼迫"
      ],
      "kanji_readings": [
        {
          "form": "迫る",
          "reading": "せまる"
        }
      ],
      "examples": [
        {
          "ja": "レポートの締め切りが迫っています。",
          "zh": "报告的截止日期临近了。",
          "focus": ["迫っ"],
          "zhFocus": ["临近"]
        },
        {
          "ja": "台風が東京に迫っています。",
          "zh": "台风正在逼近东京。",
          "focus": ["迫っ"],
          "zhFocus": ["逼近"]
        },
        {
          "ja": "相手に早く返事をするように迫りました。",
          "zh": "逼对方尽快答复。",
          "focus": ["迫り"],
          "zhFocus": ["逼"]
        }
      ]
    },
    {
      "id": "n2-0090",
      "jlpt": "N2",
      "headword": "発売",
      "source_form": "発売",
      "variants": [
        "発売"
      ],
      "reading": "はつばい",
      "reading_variants": [
        "はつばい"
      ],
      "romaji": "hatsubai",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "发售；上市",
      "kanji_readings": [
        {
          "form": "発売",
          "reading": "はつばい"
        }
      ],
      "examples": [
        {
          "ja": "新しいゲームが来月発売されます。",
          "zh": "新游戏下个月发售。",
          "focus": ["発売"],
          "zhFocus": ["发售"]
        },
        {
          "ja": "この本は発売してすぐに売り切れました。",
          "zh": "这本书一发售就卖光了。",
          "focus": ["発売"],
          "zhFocus": ["发售"]
        },
        {
          "ja": "チケットの発売は明日の十時からです。",
          "zh": "门票明天十点开始发售。",
          "focus": ["発売"],
          "zhFocus": ["发售"]
        }
      ]
    },
    {
      "id": "n2-0091",
      "jlpt": "N2",
      "headword": "付近",
      "source_form": "付近",
      "variants": [
        "付近"
      ],
      "reading": "ふきん",
      "reading_variants": [
        "ふきん"
      ],
      "romaji": "fukin",
      "part_of_speech": "noun",
      "meaning_zh": "附近",
      "kanji_readings": [
        {
          "form": "付近",
          "reading": "ふきん"
        }
      ],
      "examples": [
        {
          "ja": "駅の付近で事故がありました。",
          "zh": "车站附近发生了事故。",
          "focus": ["付近"],
          "zhFocus": ["附近"]
        },
        {
          "ja": "この付近に郵便局はありますか。",
          "zh": "这附近有邮局吗？",
          "focus": ["付近"],
          "zhFocus": ["附近"]
        },
        {
          "ja": "学校の付近では、車のスピードを落としてください。",
          "zh": "学校附近请放慢车速。",
          "focus": ["付近"],
          "zhFocus": ["附近"]
        }
      ]
    },
    {
      "id": "n2-0092",
      "jlpt": "N2",
      "headword": "普及",
      "source_form": "普及",
      "variants": [
        "普及"
      ],
      "reading": "ふきゅう",
      "reading_variants": [
        "ふきゅう"
      ],
      "romaji": "fukyuu",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "普及",
      "kanji_readings": [
        {
          "form": "普及",
          "reading": "ふきゅう"
        }
      ],
      "examples": [
        {
          "ja": "スマートフォンは世界中に普及しました。",
          "zh": "智能手机普及到了全世界。",
          "focus": ["普及"],
          "zhFocus": ["普及"]
        },
        {
          "ja": "インターネットの普及で、生活が便利になりました。",
          "zh": "随着互联网的普及，生活变方便了。",
          "focus": ["普及"],
          "zhFocus": ["普及"]
        },
        {
          "ja": "環境に優しい車の普及を進めています。",
          "zh": "正在推进环保汽车的普及。",
          "focus": ["普及"],
          "zhFocus": ["普及"]
        }
      ]
    },
    {
      "id": "n2-0093",
      "jlpt": "N2",
      "headword": "部品",
      "source_form": "部品",
      "variants": [
        "部品"
      ],
      "reading": "ぶひん",
      "reading_variants": [
        "ぶひん"
      ],
      "romaji": "buhin",
      "part_of_speech": "noun",
      "meaning_zh": "零件；部件",
      "kanji_readings": [
        {
          "form": "部品",
          "reading": "ぶひん"
        }
      ],
      "examples": [
        {
          "ja": "車の部品を交換しました。",
          "zh": "更换了汽车的零件。",
          "focus": ["部品"],
          "zhFocus": ["零件"]
        },
        {
          "ja": "この工場では自転車の部品を作っています。",
          "zh": "这家工厂生产自行车的零件。",
          "focus": ["部品"],
          "zhFocus": ["零件"]
        },
        {
          "ja": "部品が一つ足りません。",
          "zh": "少了一个零件。",
          "focus": ["部品"],
          "zhFocus": ["零件"]
        }
      ]
    },
    {
      "id": "n2-0094",
      "jlpt": "N2",
      "headword": "複数",
      "source_form": "複数",
      "variants": [
        "複数"
      ],
      "reading": "ふくすう",
      "reading_variants": [
        "ふくすう"
      ],
      "romaji": "fukusuu",
      "part_of_speech": "noun",
      "meaning_zh": "多个；复数",
      "kanji_readings": [
        {
          "form": "複数",
          "reading": "ふくすう"
        }
      ],
      "examples": [
        {
          "ja": "複数の人から同じ話を聞きました。",
          "zh": "从好几个人那里听到了同样的话。",
          "focus": ["複数"],
          "zhFocus": ["好几个"]
        },
        {
          "ja": "答えを複数選んでもいいです。",
          "zh": "答案可以选多个。",
          "focus": ["複数"],
          "zhFocus": ["多个"]
        },
        {
          "ja": "英語の名詞には複数の形があります。",
          "zh": "英语的名词有复数形式。",
          "focus": ["複数"],
          "zhFocus": ["复数"]
        }
      ]
    },
    {
      "id": "n2-0095",
      "jlpt": "N2",
      "headword": "本来",
      "source_form": "本来",
      "variants": [
        "本来"
      ],
      "reading": "ほんらい",
      "reading_variants": [
        "ほんらい"
      ],
      "romaji": "honrai",
      "part_of_speech": "noun/adverb",
      "meaning_zh": "本来；原本；按理说",
      "kanji_readings": [
        {
          "form": "本来",
          "reading": "ほんらい"
        }
      ],
      "examples": [
        {
          "ja": "この部屋は本来、倉庫でした。",
          "zh": "这个房间原本是仓库。",
          "focus": ["本来"],
          "zhFocus": ["原本"]
        },
        {
          "ja": "本来なら、私が行くべきでした。",
          "zh": "按理说，本该我去。",
          "focus": ["本来"],
          "zhFocus": ["按理说"]
        },
        {
          "ja": "本来の目的を忘れないでください。",
          "zh": "请不要忘记本来的目的。",
          "focus": ["本来"],
          "zhFocus": ["本来"]
        }
      ]
    },
    {
      "id": "n2-0096",
      "jlpt": "N2",
      "headword": "友好",
      "source_form": "友好",
      "variants": [
        "友好"
      ],
      "reading": "ゆうこう",
      "reading_variants": [
        "ゆうこう"
      ],
      "romaji": "yuukou",
      "part_of_speech": "noun",
      "meaning_zh": "友好",
      "kanji_readings": [
        {
          "form": "友好",
          "reading": "ゆうこう"
        }
      ],
      "examples": [
        {
          "ja": "二つの国は友好関係を結んでいます。",
          "zh": "两国缔结了友好关系。",
          "focus": ["友好"],
          "zhFocus": ["友好"]
        },
        {
          "ja": "姉妹都市との友好を深めました。",
          "zh": "加深了与姐妹城市的友好。",
          "focus": ["友好"],
          "zhFocus": ["友好"]
        },
        {
          "ja": "友好のしるしに、木を植えました。",
          "zh": "作为友好的象征种了树。",
          "focus": ["友好"],
          "zhFocus": ["友好"]
        }
      ]
    },
    {
      "id": "n2-0097",
      "jlpt": "N2",
      "headword": "来日",
      "source_form": "来日",
      "variants": [
        "来日"
      ],
      "reading": "らいにち",
      "reading_variants": [
        "らいにち"
      ],
      "romaji": "rainichi",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "来日本；访日",
      "kanji_readings": [
        {
          "form": "来日",
          "reading": "らいにち"
        }
      ],
      "examples": [
        {
          "ja": "有名な歌手が来日しました。",
          "zh": "著名歌手来日本了。",
          "focus": ["来日"],
          "zhFocus": ["来日本"]
        },
        {
          "ja": "来日してから三年になります。",
          "zh": "来日本已经三年了。",
          "focus": ["来日"],
          "zhFocus": ["来日本"]
        },
        {
          "ja": "大統領の来日が決まりました。",
          "zh": "总统访日一事已经确定。",
          "focus": ["来日"],
          "zhFocus": ["访日"]
        }
      ]
    },
    {
      "id": "n2-0098",
      "jlpt": "N2",
      "headword": "話し合い",
      "source_form": "話合い",
      "variants": [
        "話し合い",
        "話合い"
      ],
      "reading": "はなしあい",
      "reading_variants": [
        "はなしあい"
      ],
      "romaji": "hanashiai",
      "part_of_speech": "noun",
      "meaning_zh": "商量；协商；讨论",
      "kanji_readings": [
        {
          "form": "話し合い",
          "reading": "はなしあい"
        },
        {
          "form": "話合い",
          "reading": "はなしあい"
        }
      ],
      "examples": [
        {
          "ja": "話し合いで問題を解決しました。",
          "zh": "通过协商解决了问题。",
          "focus": ["話し合い"],
          "zhFocus": ["协商"]
        },
        {
          "ja": "家族で話し合いをして、引っ越しを決めました。",
          "zh": "家人商量后决定搬家。",
          "focus": ["話し合い"],
          "zhFocus": ["商量"]
        },
        {
          "ja": "話し合いは夜遅くまで続きました。",
          "zh": "讨论一直持续到深夜。",
          "focus": ["話し合い"],
          "zhFocus": ["讨论"]
        }
      ],
      "note_zh": "动词「話し合う」的名词形。"
    },
    {
      "id": "n2-0099",
      "jlpt": "N2",
      "headword": "意義",
      "source_form": "意義",
      "variants": [
        "意義"
      ],
      "reading": "いぎ",
      "reading_variants": [
        "いぎ"
      ],
      "romaji": "igi",
      "part_of_speech": "noun",
      "meaning_zh": "意义；意思",
      "kanji_readings": [
        {
          "form": "意義",
          "reading": "いぎ"
        }
      ],
      "examples": [
        {
          "ja": "この研究には大きな意義があります。",
          "zh": "这项研究有重大意义。",
          "focus": ["意義"],
          "zhFocus": ["意义"]
        },
        {
          "ja": "参加することに意義があります。",
          "zh": "参与本身就有意义。",
          "focus": ["意義"],
          "zhFocus": ["意义"]
        },
        {
          "ja": "言葉の意義を辞書で調べました。",
          "zh": "在词典里查了词语的意思。",
          "focus": ["意義"],
          "zhFocus": ["意思"]
        }
      ],
      "note_zh": "与「異議（异议）」同音。"
    },
    {
      "id": "n2-0100",
      "jlpt": "N2",
      "headword": "移転",
      "source_form": "移転",
      "variants": [
        "移転"
      ],
      "reading": "いてん",
      "reading_variants": [
        "いてん"
      ],
      "romaji": "iten",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "迁移；搬迁",
      "kanji_readings": [
        {
          "form": "移転",
          "reading": "いてん"
        }
      ],
      "examples": [
        {
          "ja": "事務所が駅前に移転しました。",
          "zh": "办事处搬到了车站前。",
          "focus": ["移転"],
          "zhFocus": ["搬"]
        },
        {
          "ja": "工場の移転が決まりました。",
          "zh": "工厂搬迁的事定下来了。",
          "focus": ["移転"],
          "zhFocus": ["搬迁"]
        },
        {
          "ja": "その店は来月、新しい場所に移転します。",
          "zh": "那家店下个月将迁到新地点。",
          "focus": ["移転"],
          "zhFocus": ["迁"]
        }
      ]
    },
    {
      "id": "n2-0101",
      "jlpt": "N2",
      "headword": "一斉",
      "source_form": "一斉",
      "variants": [
        "一斉"
      ],
      "reading": "いっせい",
      "reading_variants": [
        "いっせい"
      ],
      "romaji": "issei",
      "part_of_speech": "noun/adverb",
      "meaning_zh": "一齐；同时",
      "kanji_readings": [
        {
          "form": "一斉",
          "reading": "いっせい"
        }
      ],
      "examples": [
        {
          "ja": "合図と同時に、選手たちは一斉に走り出しました。",
          "zh": "信号一响，选手们一齐跑了出去。",
          "focus": ["一斉"],
          "zhFocus": ["一齐"]
        },
        {
          "ja": "全国で一斉に試験が行われます。",
          "zh": "全国同时举行考试。",
          "focus": ["一斉"],
          "zhFocus": ["同时"]
        },
        {
          "ja": "ベルが鳴ると、学生は一斉に立ち上がりました。",
          "zh": "铃一响，学生们一齐站了起来。",
          "focus": ["一斉"],
          "zhFocus": ["一齐"]
        }
      ]
    },
    {
      "id": "n2-0102",
      "jlpt": "N2",
      "headword": "演劇",
      "source_form": "演劇",
      "variants": [
        "演劇"
      ],
      "reading": "えんげき",
      "reading_variants": [
        "えんげき"
      ],
      "romaji": "engeki",
      "part_of_speech": "noun",
      "meaning_zh": "戏剧；话剧",
      "kanji_readings": [
        {
          "form": "演劇",
          "reading": "えんげき"
        }
      ],
      "examples": [
        {
          "ja": "大学で演劇のクラブに入っています。",
          "zh": "在大学参加了戏剧社。",
          "focus": ["演劇"],
          "zhFocus": ["戏剧"]
        },
        {
          "ja": "週末に演劇を見に行きました。",
          "zh": "周末去看了话剧。",
          "focus": ["演劇"],
          "zhFocus": ["话剧"]
        },
        {
          "ja": "彼は演劇の勉強をするためにロンドンへ行きました。",
          "zh": "他为了学习戏剧去了伦敦。",
          "focus": ["演劇"],
          "zhFocus": ["戏剧"]
        }
      ]
    },
    {
      "id": "n2-0103",
      "jlpt": "N2",
      "headword": "火山",
      "source_form": "火山",
      "variants": [
        "火山"
      ],
      "reading": "かざん",
      "reading_variants": [
        "かざん"
      ],
      "romaji": "kazan",
      "part_of_speech": "noun",
      "meaning_zh": "火山",
      "kanji_readings": [
        {
          "form": "火山",
          "reading": "かざん"
        }
      ],
      "examples": [
        {
          "ja": "日本には火山がたくさんあります。",
          "zh": "日本有很多火山。",
          "focus": ["火山"],
          "zhFocus": ["火山"]
        },
        {
          "ja": "火山が噴火して、空が暗くなりました。",
          "zh": "火山喷发，天空变暗了。",
          "focus": ["火山"],
          "zhFocus": ["火山"]
        },
        {
          "ja": "火山の近くには温泉が多いです。",
          "zh": "火山附近温泉很多。",
          "focus": ["火山"],
          "zhFocus": ["火山"]
        }
      ]
    },
    {
      "id": "n2-0104",
      "jlpt": "N2",
      "headword": "過半数",
      "source_form": "過半数",
      "variants": [
        "過半数"
      ],
      "reading": "かはんすう",
      "reading_variants": [
        "かはんすう"
      ],
      "romaji": "kahansuu",
      "part_of_speech": "noun",
      "meaning_zh": "过半数；半数以上",
      "kanji_readings": [
        {
          "form": "過半数",
          "reading": "かはんすう"
        }
      ],
      "examples": [
        {
          "ja": "賛成が過半数を超えました。",
          "zh": "赞成票超过了半数。",
          "focus": ["過半数"],
          "zhFocus": ["半数"]
        },
        {
          "ja": "過半数の人がその案に反対しました。",
          "zh": "过半数的人反对那个方案。",
          "focus": ["過半数"],
          "zhFocus": ["过半数"]
        },
        {
          "ja": "その政党は選挙で過半数の議席を取りました。",
          "zh": "那个政党在选举中获得了过半数的议席。",
          "focus": ["過半数"],
          "zhFocus": ["过半数"]
        }
      ]
    },
    {
      "id": "n2-0105",
      "jlpt": "N2",
      "headword": "解説",
      "source_form": "解説",
      "variants": [
        "解説"
      ],
      "reading": "かいせつ",
      "reading_variants": [
        "かいせつ"
      ],
      "romaji": "kaisetsu",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "解说；讲解",
      "kanji_readings": [
        {
          "form": "解説",
          "reading": "かいせつ"
        }
      ],
      "examples": [
        {
          "ja": "先生が問題の答えを解説しました。",
          "zh": "老师讲解了题目的答案。",
          "focus": ["解説"],
          "zhFocus": ["讲解"]
        },
        {
          "ja": "ニュースの解説を聞いて、よく分かりました。",
          "zh": "听了新闻解说，就明白了。",
          "focus": ["解説"],
          "zhFocus": ["解说"]
        },
        {
          "ja": "この本には詳しい解説が付いています。",
          "zh": "这本书附有详细的解说。",
          "focus": ["解説"],
          "zhFocus": ["解说"]
        }
      ]
    },
    {
      "id": "n2-0106",
      "jlpt": "N2",
      "headword": "改造",
      "source_form": "改造",
      "variants": [
        "改造"
      ],
      "reading": "かいぞう",
      "reading_variants": [
        "かいぞう"
      ],
      "romaji": "kaizou",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "改造；改建；（内阁等的）改组",
      "senses_zh": [
        "改造；改建",
        "（内阁等的）改组"
      ],
      "kanji_readings": [
        {
          "form": "改造",
          "reading": "かいぞう"
        }
      ],
      "examples": [
        {
          "ja": "古い家を改造して、カフェにしました。",
          "zh": "把旧房子改造成了咖啡馆。",
          "focus": ["改造"],
          "zhFocus": ["改造"]
        },
        {
          "ja": "倉庫を改造して、子供の部屋を作りました。",
          "zh": "把仓库改建成了孩子的房间。",
          "focus": ["改造"],
          "zhFocus": ["改建"]
        },
        {
          "ja": "首相は内閣を改造しました。",
          "zh": "首相改组了内阁。",
          "focus": ["改造"],
          "zhFocus": ["改组"]
        }
      ]
    },
    {
      "id": "n2-0107",
      "jlpt": "N2",
      "headword": "開会",
      "source_form": "開会",
      "variants": [
        "開会"
      ],
      "reading": "かいかい",
      "reading_variants": [
        "かいかい"
      ],
      "romaji": "kaikai",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "开会；开幕",
      "kanji_readings": [
        {
          "form": "開会",
          "reading": "かいかい"
        }
      ],
      "examples": [
        {
          "ja": "会議は十時に開会します。",
          "zh": "会议十点开会。",
          "focus": ["開会"],
          "zhFocus": ["开会"]
        },
        {
          "ja": "大会の開会の言葉を述べました。",
          "zh": "致了大会的开幕词。",
          "focus": ["開会"],
          "zhFocus": ["开幕"]
        },
        {
          "ja": "開会式にはたくさんの人が集まりました。",
          "zh": "开幕式聚集了很多人。",
          "focus": ["開会"],
          "zhFocus": ["开幕式"]
        }
      ],
      "note_zh": "与「閉会（闭会）」相对。"
    },
    {
      "id": "n2-0108",
      "jlpt": "N2",
      "headword": "学会",
      "source_form": "学会",
      "variants": [
        "学会"
      ],
      "reading": "がっかい",
      "reading_variants": [
        "がっかい"
      ],
      "romaji": "gakkai",
      "part_of_speech": "noun",
      "meaning_zh": "学会；学术会议",
      "kanji_readings": [
        {
          "form": "学会",
          "reading": "がっかい"
        }
      ],
      "examples": [
        {
          "ja": "来月、京都で学会があります。",
          "zh": "下个月在京都有学术会议。",
          "focus": ["学会"],
          "zhFocus": ["学术会议"]
        },
        {
          "ja": "研究の成果を学会で発表しました。",
          "zh": "在学术会议上发表了研究成果。",
          "focus": ["学会"],
          "zhFocus": ["学术会议"]
        },
        {
          "ja": "彼は言語学の学会に入っています。",
          "zh": "他加入了语言学学会。",
          "focus": ["学会"],
          "zhFocus": ["学会"]
        }
      ]
    },
    {
      "id": "n2-0109",
      "jlpt": "N2",
      "headword": "活躍",
      "source_form": "活躍",
      "variants": [
        "活躍"
      ],
      "reading": "かつやく",
      "reading_variants": [
        "かつやく"
      ],
      "romaji": "katsuyaku",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "活跃；大显身手",
      "kanji_readings": [
        {
          "form": "活躍",
          "reading": "かつやく"
        }
      ],
      "examples": [
        {
          "ja": "彼女は世界で活躍している歌手です。",
          "zh": "她是活跃在世界舞台上的歌手。",
          "focus": ["活躍"],
          "zhFocus": ["活跃"]
        },
        {
          "ja": "新しい選手の活躍で、チームが勝ちました。",
          "zh": "由于新选手的出色表现，球队赢了。",
          "focus": ["活躍"],
          "zhFocus": ["出色表现"]
        },
        {
          "ja": "将来、国際的に活躍したいです。",
          "zh": "将来想在国际上大显身手。",
          "focus": ["活躍"],
          "zhFocus": ["大显身手"]
        }
      ]
    },
    {
      "id": "n2-0110",
      "jlpt": "N2",
      "headword": "感想",
      "source_form": "感想",
      "variants": [
        "感想"
      ],
      "reading": "かんそう",
      "reading_variants": [
        "かんそう"
      ],
      "romaji": "kansou",
      "part_of_speech": "noun",
      "meaning_zh": "感想",
      "kanji_readings": [
        {
          "form": "感想",
          "reading": "かんそう"
        }
      ],
      "examples": [
        {
          "ja": "映画の感想を聞かせてください。",
          "zh": "请说说你对电影的感想。",
          "focus": ["感想"],
          "zhFocus": ["感想"]
        },
        {
          "ja": "読んだ本の感想を書きました。",
          "zh": "写了读书感想。",
          "focus": ["感想"],
          "zhFocus": ["感想"]
        },
        {
          "ja": "旅行の感想はどうでしたか。",
          "zh": "旅行的感想如何？",
          "focus": ["感想"],
          "zhFocus": ["感想"]
        }
      ]
    },
    {
      "id": "n2-0111",
      "jlpt": "N2",
      "headword": "警備",
      "source_form": "警備",
      "variants": [
        "警備"
      ],
      "reading": "けいび",
      "reading_variants": [
        "けいび"
      ],
      "romaji": "keibi",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "警备；保安",
      "kanji_readings": [
        {
          "form": "警備",
          "reading": "けいび"
        }
      ],
      "examples": [
        {
          "ja": "空港の警備が厳しくなりました。",
          "zh": "机场的警备变严了。",
          "focus": ["警備"],
          "zhFocus": ["警备"]
        },
        {
          "ja": "夜はビルを警備する仕事をしています。",
          "zh": "晚上做大楼保安的工作。",
          "focus": ["警備"],
          "zhFocus": ["保安"]
        },
        {
          "ja": "イベントの会場には警備の人がたくさんいます。",
          "zh": "活动会场有很多保安人员。",
          "focus": ["警備"],
          "zhFocus": ["保安"]
        }
      ]
    },
    {
      "id": "n2-0112",
      "jlpt": "N2",
      "headword": "原理",
      "source_form": "原理",
      "variants": [
        "原理"
      ],
      "reading": "げんり",
      "reading_variants": [
        "げんり"
      ],
      "romaji": "genri",
      "part_of_speech": "noun",
      "meaning_zh": "原理",
      "kanji_readings": [
        {
          "form": "原理",
          "reading": "げんり"
        }
      ],
      "examples": [
        {
          "ja": "飛行機が飛ぶ原理を説明しました。",
          "zh": "讲解了飞机飞行的原理。",
          "focus": ["原理"],
          "zhFocus": ["原理"]
        },
        {
          "ja": "この機械の原理は簡単です。",
          "zh": "这台机器的原理很简单。",
          "focus": ["原理"],
          "zhFocus": ["原理"]
        },
        {
          "ja": "民主主義の原理について学びました。",
          "zh": "学习了民主主义的原理。",
          "focus": ["原理"],
          "zhFocus": ["原理"]
        }
      ]
    },
    {
      "id": "n2-0113",
      "jlpt": "N2",
      "headword": "項目",
      "source_form": "項目",
      "variants": [
        "項目"
      ],
      "reading": "こうもく",
      "reading_variants": [
        "こうもく"
      ],
      "romaji": "koumoku",
      "part_of_speech": "noun",
      "meaning_zh": "项目；条目",
      "kanji_readings": [
        {
          "form": "項目",
          "reading": "こうもく"
        }
      ],
      "examples": [
        {
          "ja": "必要な項目を全部書いてください。",
          "zh": "请填写全部必要的项目。",
          "focus": ["項目"],
          "zhFocus": ["项目"]
        },
        {
          "ja": "調査は五つの項目に分かれています。",
          "zh": "调查分为五个项目。",
          "focus": ["項目"],
          "zhFocus": ["项目"]
        },
        {
          "ja": "リストの項目を一つずつ確認しました。",
          "zh": "逐条确认了清单上的条目。",
          "focus": ["項目"],
          "zhFocus": ["条目"]
        }
      ]
    },
    {
      "id": "n2-0114",
      "jlpt": "N2",
      "headword": "高級",
      "source_form": "高級",
      "variants": [
        "高級"
      ],
      "reading": "こうきゅう",
      "reading_variants": [
        "こうきゅう"
      ],
      "romaji": "koukyuu",
      "part_of_speech": "na-adjective/noun",
      "meaning_zh": "高级；高档",
      "kanji_readings": [
        {
          "form": "高級",
          "reading": "こうきゅう"
        }
      ],
      "examples": [
        {
          "ja": "高級なレストランで食事をしました。",
          "zh": "在高级餐厅吃了饭。",
          "focus": ["高級"],
          "zhFocus": ["高级"]
        },
        {
          "ja": "このかばんは高級すぎて買えません。",
          "zh": "这个包太高档了，买不起。",
          "focus": ["高級"],
          "zhFocus": ["高档"]
        },
        {
          "ja": "駅前に高級なホテルが建ちました。",
          "zh": "车站前建起了高级酒店。",
          "focus": ["高級"],
          "zhFocus": ["高级"]
        }
      ]
    },
    {
      "id": "n2-0115",
      "jlpt": "N2",
      "headword": "重点",
      "source_form": "重点",
      "variants": [
        "重点"
      ],
      "reading": "じゅうてん",
      "reading_variants": [
        "じゅうてん"
      ],
      "romaji": "juuten",
      "part_of_speech": "noun",
      "meaning_zh": "重点",
      "kanji_readings": [
        {
          "form": "重点",
          "reading": "じゅうてん"
        }
      ],
      "examples": [
        {
          "ja": "今年は英語の勉強に重点を置きます。",
          "zh": "今年把重点放在英语学习上。",
          "focus": ["重点"],
          "zhFocus": ["重点"]
        },
        {
          "ja": "会議では、安全の問題を重点的に話し合いました。",
          "zh": "会议上重点讨论了安全问题。",
          "focus": ["重点"],
          "zhFocus": ["重点"]
        },
        {
          "ja": "試験の重点を先生に教えてもらいました。",
          "zh": "请老师告诉了我考试的重点。",
          "focus": ["重点"],
          "zhFocus": ["重点"]
        }
      ]
    },
    {
      "id": "n2-0116",
      "jlpt": "N2",
      "headword": "書店",
      "source_form": "書店",
      "variants": [
        "書店"
      ],
      "reading": "しょてん",
      "reading_variants": [
        "しょてん"
      ],
      "romaji": "shoten",
      "part_of_speech": "noun",
      "meaning_zh": "书店",
      "kanji_readings": [
        {
          "form": "書店",
          "reading": "しょてん"
        }
      ],
      "examples": [
        {
          "ja": "駅前の書店で雑誌を買いました。",
          "zh": "在车站前的书店买了杂志。",
          "focus": ["書店"],
          "zhFocus": ["书店"]
        },
        {
          "ja": "この書店は夜遅くまで開いています。",
          "zh": "这家书店营业到很晚。",
          "focus": ["書店"],
          "zhFocus": ["书店"]
        },
        {
          "ja": "大きな書店には外国の本もあります。",
          "zh": "大书店里也有外国的书。",
          "focus": ["書店"],
          "zhFocus": ["书店"]
        }
      ],
      "note_zh": "口语多说「本屋」。"
    },
    {
      "id": "n2-0117",
      "jlpt": "N2",
      "headword": "助教授",
      "source_form": "助教授",
      "variants": [
        "助教授"
      ],
      "reading": "じょきょうじゅ",
      "reading_variants": [
        "じょきょうじゅ"
      ],
      "romaji": "jokyouju",
      "part_of_speech": "noun",
      "meaning_zh": "副教授（旧称）",
      "kanji_readings": [
        {
          "form": "助教授",
          "reading": "じょきょうじゅ"
        }
      ],
      "examples": [
        {
          "ja": "父は大学の助教授でした。",
          "zh": "父亲曾是大学的副教授。",
          "focus": ["助教授"],
          "zhFocus": ["副教授"]
        },
        {
          "ja": "彼は助教授から教授になりました。",
          "zh": "他从副教授升为了教授。",
          "focus": ["助教授"],
          "zhFocus": ["副教授"]
        },
        {
          "ja": "その助教授は経済学を教えていました。",
          "zh": "那位副教授以前教经济学。",
          "focus": ["助教授"],
          "zhFocus": ["副教授"]
        }
      ],
      "note_zh": "2007年起改称「准教授」。"
    },
    {
      "id": "n2-0118",
      "jlpt": "N2",
      "headword": "商業",
      "source_form": "商業",
      "variants": [
        "商業"
      ],
      "reading": "しょうぎょう",
      "reading_variants": [
        "しょうぎょう"
      ],
      "romaji": "shougyou",
      "part_of_speech": "noun",
      "meaning_zh": "商业",
      "kanji_readings": [
        {
          "form": "商業",
          "reading": "しょうぎょう"
        }
      ],
      "examples": [
        {
          "ja": "この町は商業が盛んです。",
          "zh": "这个城镇商业繁荣。",
          "focus": ["商業"],
          "zhFocus": ["商业"]
        },
        {
          "ja": "高校で商業を勉強しました。",
          "zh": "在高中学习了商业。",
          "focus": ["商業"],
          "zhFocus": ["商业"]
        },
        {
          "ja": "駅の周りはこの町の商業の中心です。",
          "zh": "车站周围是这个城镇的商业中心。",
          "focus": ["商業"],
          "zhFocus": ["商业"]
        }
      ]
    },
    {
      "id": "n2-0119",
      "jlpt": "N2",
      "headword": "商社",
      "source_form": "商社",
      "variants": [
        "商社"
      ],
      "reading": "しょうしゃ",
      "reading_variants": [
        "しょうしゃ"
      ],
      "romaji": "shousha",
      "part_of_speech": "noun",
      "meaning_zh": "贸易公司；商社",
      "kanji_readings": [
        {
          "form": "商社",
          "reading": "しょうしゃ"
        }
      ],
      "examples": [
        {
          "ja": "兄は商社で働いています。",
          "zh": "哥哥在贸易公司工作。",
          "focus": ["商社"],
          "zhFocus": ["贸易公司"]
        },
        {
          "ja": "商社は外国と取引をする会社です。",
          "zh": "商社是和外国做生意的公司。",
          "focus": ["商社"],
          "zhFocus": ["商社"]
        },
        {
          "ja": "大きな商社に就職しました。",
          "zh": "进了一家大贸易公司工作。",
          "focus": ["商社"],
          "zhFocus": ["贸易公司"]
        }
      ]
    },
    {
      "id": "n2-0120",
      "jlpt": "N2",
      "headword": "小学生",
      "source_form": "小学生",
      "variants": [
        "小学生"
      ],
      "reading": "しょうがくせい",
      "reading_variants": [
        "しょうがくせい"
      ],
      "romaji": "shougakusei",
      "part_of_speech": "noun",
      "meaning_zh": "小学生",
      "kanji_readings": [
        {
          "form": "小学生",
          "reading": "しょうがくせい"
        }
      ],
      "examples": [
        {
          "ja": "弟はまだ小学生です。",
          "zh": "弟弟还是小学生。",
          "focus": ["小学生"],
          "zhFocus": ["小学生"]
        },
        {
          "ja": "小学生のころ、よくこの公園で遊びました。",
          "zh": "上小学的时候常在这个公园玩。",
          "focus": ["小学生"],
          "zhFocus": ["上小学"]
        },
        {
          "ja": "小学生向けの本を探しています。",
          "zh": "在找面向小学生的书。",
          "focus": ["小学生"],
          "zhFocus": ["小学生"]
        }
      ]
    },
    {
      "id": "n2-0121",
      "jlpt": "N2",
      "headword": "賞金",
      "source_form": "賞金",
      "variants": [
        "賞金"
      ],
      "reading": "しょうきん",
      "reading_variants": [
        "しょうきん"
      ],
      "romaji": "shoukin",
      "part_of_speech": "noun",
      "meaning_zh": "奖金",
      "kanji_readings": [
        {
          "form": "賞金",
          "reading": "しょうきん"
        }
      ],
      "examples": [
        {
          "ja": "大会で優勝して、賞金をもらいました。",
          "zh": "在比赛中获胜，得到了奖金。",
          "focus": ["賞金"],
          "zhFocus": ["奖金"]
        },
        {
          "ja": "このコンテストの賞金は百万円です。",
          "zh": "这次比赛的奖金是一百万日元。",
          "focus": ["賞金"],
          "zhFocus": ["奖金"]
        },
        {
          "ja": "賞金は全部、旅行に使いました。",
          "zh": "奖金全都用在了旅行上。",
          "focus": ["賞金"],
          "zhFocus": ["奖金"]
        }
      ]
    },
    {
      "id": "n2-0122",
      "jlpt": "N2",
      "headword": "森林",
      "source_form": "森林",
      "variants": [
        "森林"
      ],
      "reading": "しんりん",
      "reading_variants": [
        "しんりん"
      ],
      "romaji": "shinrin",
      "part_of_speech": "noun",
      "meaning_zh": "森林",
      "kanji_readings": [
        {
          "form": "森林",
          "reading": "しんりん"
        }
      ],
      "examples": [
        {
          "ja": "この国の半分は森林です。",
          "zh": "这个国家有一半是森林。",
          "focus": ["森林"],
          "zhFocus": ["森林"]
        },
        {
          "ja": "森林を守ることは大切です。",
          "zh": "保护森林很重要。",
          "focus": ["森林"],
          "zhFocus": ["森林"]
        },
        {
          "ja": "森林の中を歩くと、気持ちがいいです。",
          "zh": "在森林里走一走，心情很舒畅。",
          "focus": ["森林"],
          "zhFocus": ["森林"]
        }
      ]
    },
    {
      "id": "n2-0123",
      "jlpt": "N2",
      "headword": "正面",
      "source_form": "正面",
      "variants": [
        "正面"
      ],
      "reading": "しょうめん",
      "reading_variants": [
        "しょうめん"
      ],
      "romaji": "shoumen",
      "part_of_speech": "noun",
      "meaning_zh": "正面；前面",
      "kanji_readings": [
        {
          "form": "正面",
          "reading": "しょうめん"
        }
      ],
      "examples": [
        {
          "ja": "建物の正面に入り口があります。",
          "zh": "建筑物正面有入口。",
          "focus": ["正面"],
          "zhFocus": ["正面"]
        },
        {
          "ja": "正面から写真を撮りました。",
          "zh": "从正面拍了照片。",
          "focus": ["正面"],
          "zhFocus": ["正面"]
        },
        {
          "ja": "駅の正面にホテルがあります。",
          "zh": "车站正对面有一家酒店。",
          "focus": ["正面"],
          "zhFocus": ["正对面"]
        }
      ]
    },
    {
      "id": "n2-0124",
      "jlpt": "N2",
      "headword": "製作",
      "source_form": "製作",
      "variants": [
        "製作"
      ],
      "reading": "せいさく",
      "reading_variants": [
        "せいさく"
      ],
      "romaji": "seisaku",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "制造；制作（产品、器物等）",
      "kanji_readings": [
        {
          "form": "製作",
          "reading": "せいさく"
        }
      ],
      "examples": [
        {
          "ja": "この工場では家具を製作しています。",
          "zh": "这家工厂制造家具。",
          "focus": ["製作"],
          "zhFocus": ["制造"]
        },
        {
          "ja": "模型の製作に一か月かかりました。",
          "zh": "制作模型花了一个月。",
          "focus": ["製作"],
          "zhFocus": ["制作"]
        },
        {
          "ja": "機械の部品を製作する会社です。",
          "zh": "这是一家制造机器零件的公司。",
          "focus": ["製作"],
          "zhFocus": ["制造"]
        }
      ],
      "note_zh": "与「制作（制作艺术作品、节目等）」同音；工业产品、器物多用「製作」。"
    },
    {
      "id": "n2-0125",
      "jlpt": "N2",
      "headword": "先頭",
      "source_form": "先頭",
      "variants": [
        "先頭"
      ],
      "reading": "せんとう",
      "reading_variants": [
        "せんとう"
      ],
      "romaji": "sentou",
      "part_of_speech": "noun",
      "meaning_zh": "最前头；排头",
      "kanji_readings": [
        {
          "form": "先頭",
          "reading": "せんとう"
        }
      ],
      "examples": [
        {
          "ja": "列の先頭に並びました。",
          "zh": "排在了队伍的最前头。",
          "focus": ["先頭"],
          "zhFocus": ["最前头"]
        },
        {
          "ja": "先頭の車が急に止まりました。",
          "zh": "最前面的车突然停下了。",
          "focus": ["先頭"],
          "zhFocus": ["最前面"]
        },
        {
          "ja": "彼はレースで先頭を走っています。",
          "zh": "他在比赛中跑在最前头。",
          "focus": ["先頭"],
          "zhFocus": ["最前头"]
        }
      ]
    },
    {
      "id": "n2-0126",
      "jlpt": "N2",
      "headword": "窓口",
      "source_form": "窓口",
      "variants": [
        "窓口"
      ],
      "reading": "まどぐち",
      "reading_variants": [
        "まどぐち"
      ],
      "romaji": "madoguchi",
      "part_of_speech": "noun",
      "meaning_zh": "窗口；（办事的）对口部门",
      "senses_zh": [
        "窗口",
        "（办事的）对口部门"
      ],
      "kanji_readings": [
        {
          "form": "窓口",
          "reading": "まどぐち"
        }
      ],
      "examples": [
        {
          "ja": "駅の窓口で切符を買いました。",
          "zh": "在车站窗口买了票。",
          "focus": ["窓口"],
          "zhFocus": ["窗口"]
        },
        {
          "ja": "手続きは二番の窓口でお願いします。",
          "zh": "手续请到二号窗口办理。",
          "focus": ["窓口"],
          "zhFocus": ["窗口"]
        },
        {
          "ja": "問い合わせの窓口は営業部です。",
          "zh": "咨询的对口部门是营业部。",
          "focus": ["窓口"],
          "zhFocus": ["对口部门"]
        }
      ]
    },
    {
      "id": "n2-0127",
      "jlpt": "N2",
      "headword": "造る",
      "source_form": "造る",
      "variants": [
        "造る"
      ],
      "reading": "つくる",
      "reading_variants": [
        "つくる"
      ],
      "romaji": "tsukuru",
      "part_of_speech": "verb",
      "meaning_zh": "建造；修建；酿造",
      "senses_zh": [
        "建造；修建",
        "酿造"
      ],
      "kanji_readings": [
        {
          "form": "造る",
          "reading": "つくる"
        }
      ],
      "examples": [
        {
          "ja": "このお寺はずっと昔に造られました。",
          "zh": "这座寺庙是很久以前建造的。",
          "focus": ["造ら"],
          "zhFocus": ["建造"]
        },
        {
          "ja": "町に新しい橋を造る計画があります。",
          "zh": "镇上有修建新桥的计划。",
          "focus": ["造る"],
          "zhFocus": ["修建"]
        },
        {
          "ja": "この地方では昔から酒を造っています。",
          "zh": "这个地方自古以来就酿酒。",
          "focus": ["造っ"],
          "zhFocus": ["酿"]
        }
      ],
      "note_zh": "与「作る」相比，多用于建筑物、船、酒等大型或工艺性的制造。"
    },
    {
      "id": "n2-0128",
      "jlpt": "N2",
      "headword": "大学院",
      "source_form": "大学院",
      "variants": [
        "大学院"
      ],
      "reading": "だいがくいん",
      "reading_variants": [
        "だいがくいん"
      ],
      "romaji": "daigakuin",
      "part_of_speech": "noun",
      "meaning_zh": "研究生院",
      "kanji_readings": [
        {
          "form": "大学院",
          "reading": "だいがくいん"
        }
      ],
      "examples": [
        {
          "ja": "大学を卒業して、大学院に進みました。",
          "zh": "大学毕业后进了研究生院。",
          "focus": ["大学院"],
          "zhFocus": ["研究生院"]
        },
        {
          "ja": "大学院で経済を研究しています。",
          "zh": "在研究生院研究经济。",
          "focus": ["大学院"],
          "zhFocus": ["研究生院"]
        },
        {
          "ja": "姉は大学院の学生です。",
          "zh": "姐姐是研究生。",
          "focus": ["大学院"],
          "zhFocus": ["研究生"]
        }
      ]
    },
    {
      "id": "n2-0129",
      "jlpt": "N2",
      "headword": "短期",
      "source_form": "短期",
      "variants": [
        "短期"
      ],
      "reading": "たんき",
      "reading_variants": [
        "たんき"
      ],
      "romaji": "tanki",
      "part_of_speech": "noun",
      "meaning_zh": "短期",
      "kanji_readings": [
        {
          "form": "短期",
          "reading": "たんき"
        }
      ],
      "examples": [
        {
          "ja": "夏休みに短期のアルバイトをしました。",
          "zh": "暑假打了短期工。",
          "focus": ["短期"],
          "zhFocus": ["短期"]
        },
        {
          "ja": "短期の留学でイギリスへ行きました。",
          "zh": "去英国短期留学了。",
          "focus": ["短期"],
          "zhFocus": ["短期"]
        },
        {
          "ja": "この薬は短期間で効果が出ます。",
          "zh": "这种药短期内就能见效。",
          "focus": ["短期"],
          "zhFocus": ["短期"]
        }
      ],
      "note_zh": "与「長期（长期）」相对。"
    },
    {
      "id": "n2-0130",
      "jlpt": "N2",
      "headword": "知人",
      "source_form": "知人",
      "variants": [
        "知人"
      ],
      "reading": "ちじん",
      "reading_variants": [
        "ちじん"
      ],
      "romaji": "chijin",
      "part_of_speech": "noun",
      "meaning_zh": "熟人；相识的人",
      "kanji_readings": [
        {
          "form": "知人",
          "reading": "ちじん"
        }
      ],
      "examples": [
        {
          "ja": "知人の紹介で、この会社に入りました。",
          "zh": "经熟人介绍进了这家公司。",
          "focus": ["知人"],
          "zhFocus": ["熟人"]
        },
        {
          "ja": "駅で偶然、知人に会いました。",
          "zh": "在车站偶然遇到了熟人。",
          "focus": ["知人"],
          "zhFocus": ["熟人"]
        },
        {
          "ja": "知人から本を借りました。",
          "zh": "从熟人那里借了书。",
          "focus": ["知人"],
          "zhFocus": ["熟人"]
        }
      ],
      "note_zh": "书面语；口语多说「知り合い」。"
    },
    {
      "id": "n2-0131",
      "jlpt": "N2",
      "headword": "地帯",
      "source_form": "地帯",
      "variants": [
        "地帯"
      ],
      "reading": "ちたい",
      "reading_variants": [
        "ちたい"
      ],
      "romaji": "chitai",
      "part_of_speech": "noun",
      "meaning_zh": "地带",
      "kanji_readings": [
        {
          "form": "地帯",
          "reading": "ちたい"
        }
      ],
      "examples": [
        {
          "ja": "この辺りは工業地帯です。",
          "zh": "这一带是工业地带。",
          "focus": ["地帯"],
          "zhFocus": ["地带"]
        },
        {
          "ja": "山の多い地帯では、雪がたくさん降ります。",
          "zh": "多山的地带雪下得很多。",
          "focus": ["地帯"],
          "zhFocus": ["地带"]
        },
        {
          "ja": "安全地帯で待っていてください。",
          "zh": "请在安全地带等着。",
          "focus": ["地帯"],
          "zhFocus": ["地带"]
        }
      ]
    },
    {
      "id": "n2-0132",
      "jlpt": "N2",
      "headword": "竹",
      "source_form": "竹",
      "variants": [
        "竹"
      ],
      "reading": "たけ",
      "reading_variants": [
        "たけ"
      ],
      "romaji": "take",
      "part_of_speech": "noun",
      "meaning_zh": "竹子",
      "kanji_readings": [
        {
          "form": "竹",
          "reading": "たけ"
        }
      ],
      "examples": [
        {
          "ja": "庭に竹が生えています。",
          "zh": "院子里长着竹子。",
          "focus": ["竹"],
          "zhFocus": ["竹子"]
        },
        {
          "ja": "竹で箸を作りました。",
          "zh": "用竹子做了筷子。",
          "focus": ["竹"],
          "zhFocus": ["竹子"]
        },
        {
          "ja": "この地方は竹の産地です。",
          "zh": "这个地方是竹子的产地。",
          "focus": ["竹"],
          "zhFocus": ["竹子"]
        }
      ]
    },
    {
      "id": "n2-0133",
      "jlpt": "N2",
      "headword": "中身",
      "source_form": "中身;中味",
      "variants": [
        "中身",
        "中味"
      ],
      "reading": "なかみ",
      "reading_variants": [
        "なかみ"
      ],
      "romaji": "nakami",
      "part_of_speech": "noun",
      "meaning_zh": "里面的东西；内容；实质",
      "senses_zh": [
        "里面的东西",
        "内容；实质"
      ],
      "kanji_readings": [
        {
          "form": "中身",
          "reading": "なかみ"
        },
        {
          "form": "中味",
          "reading": "なかみ"
        }
      ],
      "examples": [
        {
          "ja": "箱の中身は何ですか。",
          "zh": "箱子里装的是什么？",
          "focus": ["中身"],
          "zhFocus": ["里装的"]
        },
        {
          "ja": "かばんの中身を全部出しました。",
          "zh": "把包里的东西全拿了出来。",
          "focus": ["中身"],
          "zhFocus": ["包里的东西"]
        },
        {
          "ja": "この本は中身が濃いです。",
          "zh": "这本书内容充实。",
          "focus": ["中身"],
          "zhFocus": ["内容"]
        }
      ]
    },
    {
      "id": "n2-0134",
      "jlpt": "N2",
      "headword": "長女",
      "source_form": "長女",
      "variants": [
        "長女"
      ],
      "reading": "ちょうじょ",
      "reading_variants": [
        "ちょうじょ"
      ],
      "romaji": "choujo",
      "part_of_speech": "noun",
      "meaning_zh": "长女",
      "kanji_readings": [
        {
          "form": "長女",
          "reading": "ちょうじょ"
        }
      ],
      "examples": [
        {
          "ja": "長女は今年、高校を卒業します。",
          "zh": "长女今年高中毕业。",
          "focus": ["長女"],
          "zhFocus": ["长女"]
        },
        {
          "ja": "彼女は三人姉妹の長女です。",
          "zh": "她是三姐妹中的长女。",
          "focus": ["長女"],
          "zhFocus": ["长女"]
        },
        {
          "ja": "長女が生まれて、家がにぎやかになりました。",
          "zh": "长女出生后，家里热闹了起来。",
          "focus": ["長女"],
          "zhFocus": ["长女"]
        }
      ],
      "note_zh": "对应「長男（长子）」。"
    },
    {
      "id": "n2-0135",
      "jlpt": "N2",
      "headword": "定員",
      "source_form": "定員",
      "variants": [
        "定員"
      ],
      "reading": "ていいん",
      "reading_variants": [
        "ていいん"
      ],
      "romaji": "teiin",
      "part_of_speech": "noun",
      "meaning_zh": "定员；名额",
      "kanji_readings": [
        {
          "form": "定員",
          "reading": "ていいん"
        }
      ],
      "examples": [
        {
          "ja": "このバスの定員は何人ですか。",
          "zh": "这辆巴士的定员是多少人？",
          "focus": ["定員"],
          "zhFocus": ["定员"]
        },
        {
          "ja": "申し込みが定員を超えました。",
          "zh": "报名人数超过了名额。",
          "focus": ["定員"],
          "zhFocus": ["名额"]
        },
        {
          "ja": "定員がいっぱいで、参加できませんでした。",
          "zh": "名额已满，没能参加。",
          "focus": ["定員"],
          "zhFocus": ["名额"]
        }
      ]
    },
    {
      "id": "n2-0136",
      "jlpt": "N2",
      "headword": "東洋",
      "source_form": "東洋",
      "variants": [
        "東洋"
      ],
      "reading": "とうよう",
      "reading_variants": [
        "とうよう"
      ],
      "romaji": "touyou",
      "part_of_speech": "noun",
      "meaning_zh": "东洋；东方",
      "kanji_readings": [
        {
          "form": "東洋",
          "reading": "とうよう"
        }
      ],
      "examples": [
        {
          "ja": "東洋の文化に興味があります。",
          "zh": "对东方文化感兴趣。",
          "focus": ["東洋"],
          "zhFocus": ["东方"]
        },
        {
          "ja": "東洋と西洋では考え方が違います。",
          "zh": "东方和西方的思维方式不同。",
          "focus": ["東洋"],
          "zhFocus": ["东方"]
        },
        {
          "ja": "美術館で東洋の絵を見ました。",
          "zh": "在美术馆看了东方的画。",
          "focus": ["東洋"],
          "zhFocus": ["东方"]
        }
      ],
      "note_zh": "与「西洋（西洋）」相对。"
    },
    {
      "id": "n2-0137",
      "jlpt": "N2",
      "headword": "統計",
      "source_form": "統計",
      "variants": [
        "統計"
      ],
      "reading": "とうけい",
      "reading_variants": [
        "とうけい"
      ],
      "romaji": "toukei",
      "part_of_speech": "noun",
      "meaning_zh": "统计",
      "kanji_readings": [
        {
          "form": "統計",
          "reading": "とうけい"
        }
      ],
      "examples": [
        {
          "ja": "統計によると、人口が減っています。",
          "zh": "据统计，人口在减少。",
          "focus": ["統計"],
          "zhFocus": ["统计"]
        },
        {
          "ja": "統計を取って、結果をグラフにしました。",
          "zh": "进行了统计，并把结果做成了图表。",
          "focus": ["統計"],
          "zhFocus": ["统计"]
        },
        {
          "ja": "大学で統計を勉強しました。",
          "zh": "在大学学了统计学。",
          "focus": ["統計"],
          "zhFocus": ["统计学"]
        }
      ]
    },
    {
      "id": "n2-0138",
      "jlpt": "N2",
      "headword": "特殊",
      "source_form": "特殊",
      "variants": [
        "特殊"
      ],
      "reading": "とくしゅ",
      "reading_variants": [
        "とくしゅ"
      ],
      "romaji": "tokushu",
      "part_of_speech": "na-adjective/noun",
      "meaning_zh": "特殊",
      "kanji_readings": [
        {
          "form": "特殊",
          "reading": "とくしゅ"
        }
      ],
      "examples": [
        {
          "ja": "これは特殊な材料で作られています。",
          "zh": "这是用特殊材料制成的。",
          "focus": ["特殊"],
          "zhFocus": ["特殊"]
        },
        {
          "ja": "特殊な事情があって、休みました。",
          "zh": "因为有特殊情况，请了假。",
          "focus": ["特殊"],
          "zhFocus": ["特殊"]
        },
        {
          "ja": "この仕事には特殊な技術が必要です。",
          "zh": "这项工作需要特殊技术。",
          "focus": ["特殊"],
          "zhFocus": ["特殊"]
        }
      ]
    },
    {
      "id": "n2-0139",
      "jlpt": "N2",
      "headword": "入社",
      "source_form": "入社",
      "variants": [
        "入社"
      ],
      "reading": "にゅうしゃ",
      "reading_variants": [
        "にゅうしゃ"
      ],
      "romaji": "nyuusha",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "进入公司；入职",
      "kanji_readings": [
        {
          "form": "入社",
          "reading": "にゅうしゃ"
        }
      ],
      "examples": [
        {
          "ja": "今年の四月にこの会社に入社しました。",
          "zh": "今年四月进入了这家公司。",
          "focus": ["入社"],
          "zhFocus": ["进入"]
        },
        {
          "ja": "入社して三年がたちました。",
          "zh": "入职已经三年了。",
          "focus": ["入社"],
          "zhFocus": ["入职"]
        },
        {
          "ja": "入社の試験に合格しました。",
          "zh": "通过了入职考试。",
          "focus": ["入社"],
          "zhFocus": ["入职"]
        }
      ],
      "note_zh": "与「退社（下班；辞职）」相对。"
    },
    {
      "id": "n2-0140",
      "jlpt": "N2",
      "headword": "農村",
      "source_form": "農村",
      "variants": [
        "農村"
      ],
      "reading": "のうそん",
      "reading_variants": [
        "のうそん"
      ],
      "romaji": "nouson",
      "part_of_speech": "noun",
      "meaning_zh": "农村",
      "kanji_readings": [
        {
          "form": "農村",
          "reading": "のうそん"
        }
      ],
      "examples": [
        {
          "ja": "祖父は農村で生まれました。",
          "zh": "祖父出生在农村。",
          "focus": ["農村"],
          "zhFocus": ["农村"]
        },
        {
          "ja": "農村では若い人が減っています。",
          "zh": "农村的年轻人在减少。",
          "focus": ["農村"],
          "zhFocus": ["农村"]
        },
        {
          "ja": "週末に農村の生活を体験しました。",
          "zh": "周末体验了农村生活。",
          "focus": ["農村"],
          "zhFocus": ["农村"]
        }
      ]
    },
    {
      "id": "n2-0141",
      "jlpt": "N2",
      "headword": "農薬",
      "source_form": "農薬",
      "variants": [
        "農薬"
      ],
      "reading": "のうやく",
      "reading_variants": [
        "のうやく"
      ],
      "romaji": "nouyaku",
      "part_of_speech": "noun",
      "meaning_zh": "农药",
      "kanji_readings": [
        {
          "form": "農薬",
          "reading": "のうやく"
        }
      ],
      "examples": [
        {
          "ja": "この野菜は農薬を使わずに育てました。",
          "zh": "这种蔬菜是不用农药种出来的。",
          "focus": ["農薬"],
          "zhFocus": ["农药"]
        },
        {
          "ja": "野菜についた農薬を水で洗い流します。",
          "zh": "用水冲洗掉蔬菜上的农药。",
          "focus": ["農薬"],
          "zhFocus": ["农药"]
        },
        {
          "ja": "農薬を使いすぎると、体に悪いです。",
          "zh": "农药用得太多对身体不好。",
          "focus": ["農薬"],
          "zhFocus": ["农药"]
        }
      ]
    },
    {
      "id": "n2-0142",
      "jlpt": "N2",
      "headword": "発想",
      "source_form": "発想",
      "variants": [
        "発想"
      ],
      "reading": "はっそう",
      "reading_variants": [
        "はっそう"
      ],
      "romaji": "hassou",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "想法；构思；思路",
      "kanji_readings": [
        {
          "form": "発想",
          "reading": "はっそう"
        }
      ],
      "examples": [
        {
          "ja": "それは面白い発想ですね。",
          "zh": "那是个有意思的想法啊。",
          "focus": ["発想"],
          "zhFocus": ["想法"]
        },
        {
          "ja": "子供の自由な発想に驚きました。",
          "zh": "对孩子自由的想法感到吃惊。",
          "focus": ["発想"],
          "zhFocus": ["想法"]
        },
        {
          "ja": "発想を変えれば、問題が解決するかもしれません。",
          "zh": "换个思路的话，问题或许就能解决。",
          "focus": ["発想"],
          "zhFocus": ["思路"]
        }
      ]
    },
    {
      "id": "n2-0143",
      "jlpt": "N2",
      "headword": "反省",
      "source_form": "反省",
      "variants": [
        "反省"
      ],
      "reading": "はんせい",
      "reading_variants": [
        "はんせい"
      ],
      "romaji": "hansei",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "反省；总结",
      "kanji_readings": [
        {
          "form": "反省",
          "reading": "はんせい"
        }
      ],
      "examples": [
        {
          "ja": "自分の行動を反省しています。",
          "zh": "我在反省自己的行为。",
          "focus": ["反省"],
          "zhFocus": ["反省"]
        },
        {
          "ja": "試合の後、チームで反省会をしました。",
          "zh": "比赛后，球队开了总结会。",
          "focus": ["反省"],
          "zhFocus": ["总结会"]
        },
        {
          "ja": "失敗を反省して、次に生かします。",
          "zh": "反省这次失败，在下一次加以利用。",
          "focus": ["反省"],
          "zhFocus": ["反省"]
        }
      ]
    },
    {
      "id": "n2-0144",
      "jlpt": "N2",
      "headword": "標準",
      "source_form": "標準",
      "variants": [
        "標準"
      ],
      "reading": "ひょうじゅん",
      "reading_variants": [
        "ひょうじゅん"
      ],
      "romaji": "hyoujun",
      "part_of_speech": "noun",
      "meaning_zh": "标准；平均水平",
      "kanji_readings": [
        {
          "form": "標準",
          "reading": "ひょうじゅん"
        }
      ],
      "examples": [
        {
          "ja": "これは標準の大きさです。",
          "zh": "这是标准尺寸。",
          "focus": ["標準"],
          "zhFocus": ["标准"]
        },
        {
          "ja": "彼の身長は標準より少し高いです。",
          "zh": "他的身高比平均水平稍高。",
          "focus": ["標準"],
          "zhFocus": ["平均水平"]
        },
        {
          "ja": "ニュースでは標準語が使われます。",
          "zh": "新闻里使用标准语。",
          "focus": ["標準"],
          "zhFocus": ["标准语"]
        }
      ]
    },
    {
      "id": "n2-0145",
      "jlpt": "N2",
      "headword": "夫妻",
      "source_form": "夫妻",
      "variants": [
        "夫妻"
      ],
      "reading": "ふさい",
      "reading_variants": [
        "ふさい"
      ],
      "romaji": "fusai",
      "part_of_speech": "noun",
      "meaning_zh": "夫妻；夫妇",
      "kanji_readings": [
        {
          "form": "夫妻",
          "reading": "ふさい"
        }
      ],
      "examples": [
        {
          "ja": "田中さん夫妻が家に遊びに来ました。",
          "zh": "田中夫妇来家里玩了。",
          "focus": ["夫妻"],
          "zhFocus": ["夫妇"]
        },
        {
          "ja": "社長夫妻はパーティーに出席しました。",
          "zh": "社长夫妇出席了派对。",
          "focus": ["夫妻"],
          "zhFocus": ["夫妇"]
        },
        {
          "ja": "二人は結婚して、夫妻で店を始めました。",
          "zh": "两人结婚后，夫妻俩开了一家店。",
          "focus": ["夫妻"],
          "zhFocus": ["夫妻俩"]
        }
      ],
      "note_zh": "多用于称呼他人夫妇，较书面。"
    },
    {
      "id": "n2-0146",
      "jlpt": "N2",
      "headword": "保健",
      "source_form": "保健",
      "variants": [
        "保健"
      ],
      "reading": "ほけん",
      "reading_variants": [
        "ほけん"
      ],
      "romaji": "hoken",
      "part_of_speech": "noun",
      "meaning_zh": "保健；卫生",
      "kanji_readings": [
        {
          "form": "保健",
          "reading": "ほけん"
        }
      ],
      "examples": [
        {
          "ja": "気分が悪くなって、保健室で休みました。",
          "zh": "身体不舒服，在保健室休息了。",
          "focus": ["保健"],
          "zhFocus": ["保健室"]
        },
        {
          "ja": "保健所で健康の相談をしました。",
          "zh": "在保健所做了健康咨询。",
          "focus": ["保健"],
          "zhFocus": ["保健所"]
        },
        {
          "ja": "学校で保健の授業があります。",
          "zh": "学校有保健课。",
          "focus": ["保健"],
          "zhFocus": ["保健"]
        }
      ],
      "note_zh": "与「保険（保险）」同音。"
    },
    {
      "id": "n2-0147",
      "jlpt": "N2",
      "headword": "募集",
      "source_form": "募集",
      "variants": [
        "募集"
      ],
      "reading": "ぼしゅう",
      "reading_variants": [
        "ぼしゅう"
      ],
      "romaji": "boshuu",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "招募；招聘；募集",
      "kanji_readings": [
        {
          "form": "募集",
          "reading": "ぼしゅう"
        }
      ],
      "examples": [
        {
          "ja": "その店はアルバイトを募集しています。",
          "zh": "那家店正在招聘兼职。",
          "focus": ["募集"],
          "zhFocus": ["招聘"]
        },
        {
          "ja": "ボランティアの募集に申し込みました。",
          "zh": "报名参加了志愿者招募。",
          "focus": ["募集"],
          "zhFocus": ["招募"]
        },
        {
          "ja": "新しい社員の募集が始まりました。",
          "zh": "新员工的招聘开始了。",
          "focus": ["募集"],
          "zhFocus": ["招聘"]
        }
      ]
    },
    {
      "id": "n2-0148",
      "jlpt": "N2",
      "headword": "摩擦",
      "source_form": "摩擦",
      "variants": [
        "摩擦"
      ],
      "reading": "まさつ",
      "reading_variants": [
        "まさつ"
      ],
      "romaji": "masatsu",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "摩擦；（人际、国家间的）摩擦、冲突",
      "kanji_readings": [
        {
          "form": "摩擦",
          "reading": "まさつ"
        }
      ],
      "examples": [
        {
          "ja": "手をこすると、摩擦で温かくなります。",
          "zh": "搓手会因为摩擦而变暖。",
          "focus": ["摩擦"],
          "zhFocus": ["摩擦"]
        },
        {
          "ja": "二つの国の間で貿易の摩擦が起きています。",
          "zh": "两国之间发生了贸易摩擦。",
          "focus": ["摩擦"],
          "zhFocus": ["摩擦"]
        },
        {
          "ja": "親子の間で摩擦が起きることもあります。",
          "zh": "父母和孩子之间有时也会产生摩擦。",
          "focus": ["摩擦"],
          "zhFocus": ["摩擦"]
        }
      ]
    },
    {
      "id": "n2-0149",
      "jlpt": "N2",
      "headword": "未満",
      "source_form": "未満",
      "variants": [
        "未満"
      ],
      "reading": "みまん",
      "reading_variants": [
        "みまん"
      ],
      "romaji": "miman",
      "part_of_speech": "noun",
      "meaning_zh": "未满；不足（不含本数）",
      "kanji_readings": [
        {
          "form": "未満",
          "reading": "みまん"
        }
      ],
      "examples": [
        {
          "ja": "二十歳未満の人はお酒を飲めません。",
          "zh": "未满二十岁的人不能喝酒。",
          "focus": ["未満"],
          "zhFocus": ["未满"]
        },
        {
          "ja": "千円未満の買い物には、このカードは使えません。",
          "zh": "不满一千日元的购物不能用这张卡。",
          "focus": ["未満"],
          "zhFocus": ["不满"]
        },
        {
          "ja": "一時間未満の駐車は無料です。",
          "zh": "停车不满一小时免费。",
          "focus": ["未満"],
          "zhFocus": ["不满"]
        }
      ],
      "note_zh": "不包括该数本身；「以下」包括本数。"
    },
    {
      "id": "n2-0150",
      "jlpt": "N2",
      "headword": "面積",
      "source_form": "面積",
      "variants": [
        "面積"
      ],
      "reading": "めんせき",
      "reading_variants": [
        "めんせき"
      ],
      "romaji": "menseki",
      "part_of_speech": "noun",
      "meaning_zh": "面积",
      "kanji_readings": [
        {
          "form": "面積",
          "reading": "めんせき"
        }
      ],
      "examples": [
        {
          "ja": "日本の面積はどのくらいですか。",
          "zh": "日本的面积大约是多少？",
          "focus": ["面積"],
          "zhFocus": ["面积"]
        },
        {
          "ja": "森林が国の面積の半分を占めています。",
          "zh": "森林占了国土面积的一半。",
          "focus": ["面積"],
          "zhFocus": ["面积"]
        },
        {
          "ja": "部屋の面積を測りました。",
          "zh": "测量了房间的面积。",
          "focus": ["面積"],
          "zhFocus": ["面积"]
        }
      ]
    },
    {
      "id": "n2-0151",
      "jlpt": "N2",
      "headword": "予備",
      "source_form": "予備",
      "variants": [
        "予備"
      ],
      "reading": "よび",
      "reading_variants": [
        "よび"
      ],
      "romaji": "yobi",
      "part_of_speech": "noun",
      "meaning_zh": "备用；预备",
      "kanji_readings": [
        {
          "form": "予備",
          "reading": "よび"
        }
      ],
      "examples": [
        {
          "ja": "予備の電池を持っていきます。",
          "zh": "带上备用电池。",
          "focus": ["予備"],
          "zhFocus": ["备用"]
        },
        {
          "ja": "予備の鍵を友達に預けました。",
          "zh": "把备用钥匙寄放在朋友那里。",
          "focus": ["予備"],
          "zhFocus": ["备用"]
        },
        {
          "ja": "予備校に通って、受験の勉強をしました。",
          "zh": "上补习学校准备了升学考试。",
          "focus": ["予備"],
          "zhFocus": ["补习学校"]
        }
      ]
    },
    {
      "id": "n2-0152",
      "jlpt": "N2",
      "headword": "育児",
      "source_form": "育児",
      "variants": [
        "育児"
      ],
      "reading": "いくじ",
      "reading_variants": [
        "いくじ"
      ],
      "romaji": "ikuji",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "育儿",
      "kanji_readings": [
        {
          "form": "育児",
          "reading": "いくじ"
        }
      ],
      "examples": [
        {
          "ja": "父親も育児に参加するべきです。",
          "zh": "父亲也应该参与育儿。",
          "focus": ["育児"],
          "zhFocus": ["育儿"]
        },
        {
          "ja": "育児のために、仕事を休んでいます。",
          "zh": "为了育儿，正在休假。",
          "focus": ["育児"],
          "zhFocus": ["育儿"]
        },
        {
          "ja": "育児について母に相談しました。",
          "zh": "关于育儿向母亲请教了。",
          "focus": ["育児"],
          "zhFocus": ["育儿"]
        }
      ]
    },
    {
      "id": "n2-0153",
      "jlpt": "N2",
      "headword": "一段",
      "source_form": "一段",
      "variants": [
        "一段"
      ],
      "reading": "いちだん",
      "reading_variants": [
        "いちだん"
      ],
      "romaji": "ichidan",
      "part_of_speech": "adverb/noun",
      "meaning_zh": "更加；一级；一层",
      "senses_zh": [
        "更加",
        "一级；一层"
      ],
      "kanji_readings": [
        {
          "form": "一段",
          "reading": "いちだん"
        }
      ],
      "examples": [
        {
          "ja": "雨が降って、寒さが一段と厳しくなりました。",
          "zh": "下了雨，天气更加寒冷了。",
          "focus": ["一段"],
          "zhFocus": ["更加"]
        },
        {
          "ja": "彼女は一段ときれいになりました。",
          "zh": "她变得更漂亮了。",
          "focus": ["一段"],
          "zhFocus": ["更"]
        },
        {
          "ja": "階段を一段ずつ上ります。",
          "zh": "一级一级地上楼梯。",
          "focus": ["一段"],
          "zhFocus": ["一级"]
        }
      ],
      "note_zh": "「更加」的意思用「一段と」的形式。"
    },
    {
      "id": "n2-0154",
      "jlpt": "N2",
      "headword": "下旬",
      "source_form": "下旬",
      "variants": [
        "下旬"
      ],
      "reading": "げじゅん",
      "reading_variants": [
        "げじゅん"
      ],
      "romaji": "gejun",
      "part_of_speech": "noun",
      "meaning_zh": "下旬",
      "kanji_readings": [
        {
          "form": "下旬",
          "reading": "げじゅん"
        }
      ],
      "examples": [
        {
          "ja": "三月下旬に桜が咲きます。",
          "zh": "樱花在三月下旬开放。",
          "focus": ["下旬"],
          "zhFocus": ["下旬"]
        },
        {
          "ja": "工事は来月の下旬に終わる予定です。",
          "zh": "工程预计下个月下旬结束。",
          "focus": ["下旬"],
          "zhFocus": ["下旬"]
        },
        {
          "ja": "八月下旬はまだ暑いです。",
          "zh": "八月下旬还很热。",
          "focus": ["下旬"],
          "zhFocus": ["下旬"]
        }
      ],
      "note_zh": "一个月分为「上旬」「中旬」「下旬」。"
    },
    {
      "id": "n2-0155",
      "jlpt": "N2",
      "headword": "回数",
      "source_form": "回数",
      "variants": [
        "回数"
      ],
      "reading": "かいすう",
      "reading_variants": [
        "かいすう"
      ],
      "romaji": "kaisuu",
      "part_of_speech": "noun",
      "meaning_zh": "次数",
      "kanji_readings": [
        {
          "form": "回数",
          "reading": "かいすう"
        }
      ],
      "examples": [
        {
          "ja": "運動の回数を増やしました。",
          "zh": "增加了运动的次数。",
          "focus": ["回数"],
          "zhFocus": ["次数"]
        },
        {
          "ja": "最近、電話の回数が減りました。",
          "zh": "最近打电话的次数减少了。",
          "focus": ["回数"],
          "zhFocus": ["次数"]
        },
        {
          "ja": "使える回数は決まっています。",
          "zh": "可使用的次数是有限的。",
          "focus": ["回数"],
          "zhFocus": ["次数"]
        }
      ]
    },
    {
      "id": "n2-0156",
      "jlpt": "N2",
      "headword": "海洋",
      "source_form": "海洋",
      "variants": [
        "海洋"
      ],
      "reading": "かいよう",
      "reading_variants": [
        "かいよう"
      ],
      "romaji": "kaiyou",
      "part_of_speech": "noun",
      "meaning_zh": "海洋",
      "kanji_readings": [
        {
          "form": "海洋",
          "reading": "かいよう"
        }
      ],
      "examples": [
        {
          "ja": "海洋の汚染が問題になっています。",
          "zh": "海洋污染成了问题。",
          "focus": ["海洋"],
          "zhFocus": ["海洋"]
        },
        {
          "ja": "大学で海洋の生物を研究しています。",
          "zh": "在大学研究海洋生物。",
          "focus": ["海洋"],
          "zhFocus": ["海洋"]
        },
        {
          "ja": "日本は海洋に囲まれた国です。",
          "zh": "日本是被海洋环绕的国家。",
          "focus": ["海洋"],
          "zhFocus": ["海洋"]
        }
      ]
    },
    {
      "id": "n2-0157",
      "jlpt": "N2",
      "headword": "官庁",
      "source_form": "官庁",
      "variants": [
        "官庁"
      ],
      "reading": "かんちょう",
      "reading_variants": [
        "かんちょう"
      ],
      "romaji": "kanchou",
      "part_of_speech": "noun",
      "meaning_zh": "政府机关；官厅",
      "kanji_readings": [
        {
          "form": "官庁",
          "reading": "かんちょう"
        }
      ],
      "examples": [
        {
          "ja": "官庁は土曜日と日曜日は休みです。",
          "zh": "政府机关周六周日休息。",
          "focus": ["官庁"],
          "zhFocus": ["政府机关"]
        },
        {
          "ja": "卒業したら、官庁で働きたいです。",
          "zh": "毕业后想在政府机关工作。",
          "focus": ["官庁"],
          "zhFocus": ["政府机关"]
        },
        {
          "ja": "この辺りには官庁が集まっています。",
          "zh": "这一带聚集着政府机关。",
          "focus": ["官庁"],
          "zhFocus": ["政府机关"]
        }
      ]
    },
    {
      "id": "n2-0158",
      "jlpt": "N2",
      "headword": "看板",
      "source_form": "看板",
      "variants": [
        "看板"
      ],
      "reading": "かんばん",
      "reading_variants": [
        "かんばん"
      ],
      "romaji": "kanban",
      "part_of_speech": "noun",
      "meaning_zh": "招牌；广告牌",
      "kanji_readings": [
        {
          "form": "看板",
          "reading": "かんばん"
        }
      ],
      "examples": [
        {
          "ja": "店の前に大きな看板があります。",
          "zh": "店门前有一块大招牌。",
          "focus": ["看板"],
          "zhFocus": ["招牌"]
        },
        {
          "ja": "看板を見て、このレストランに入りました。",
          "zh": "看到招牌，进了这家餐厅。",
          "focus": ["看板"],
          "zhFocus": ["招牌"]
        },
        {
          "ja": "夜になると、看板の明かりがつきます。",
          "zh": "一到晚上，招牌的灯就亮了。",
          "focus": ["看板"],
          "zhFocus": ["招牌"]
        }
      ]
    },
    {
      "id": "n2-0159",
      "jlpt": "N2",
      "headword": "まもなく",
      "source_form": "間も無く",
      "variants": [
        "まもなく",
        "間もなく",
        "間も無く"
      ],
      "reading": "まもなく",
      "reading_variants": [
        "まもなく"
      ],
      "romaji": "mamonaku",
      "part_of_speech": "adverb",
      "meaning_zh": "不久；马上；即将",
      "kanji_readings": [
        {
          "form": "間もなく",
          "reading": "まもなく"
        },
        {
          "form": "間も無く",
          "reading": "まもなく"
        }
      ],
      "examples": [
        {
          "ja": "まもなく電車が参ります。",
          "zh": "电车马上就要进站了。",
          "focus": ["まもなく"],
          "zhFocus": ["马上"]
        },
        {
          "ja": "父はまもなく帰ってきます。",
          "zh": "父亲不久就回来。",
          "focus": ["まもなく"],
          "zhFocus": ["不久"]
        },
        {
          "ja": "映画はまもなく始まります。",
          "zh": "电影即将开始。",
          "focus": ["まもなく"],
          "zhFocus": ["即将"]
        }
      ],
      "note_zh": "也写作「間もなく」。"
    },
    {
      "id": "n2-0160",
      "jlpt": "N2",
      "headword": "給与",
      "source_form": "給与",
      "variants": [
        "給与"
      ],
      "reading": "きゅうよ",
      "reading_variants": [
        "きゅうよ"
      ],
      "romaji": "kyuuyo",
      "part_of_speech": "noun",
      "meaning_zh": "工资；薪水",
      "kanji_readings": [
        {
          "form": "給与",
          "reading": "きゅうよ"
        }
      ],
      "examples": [
        {
          "ja": "給与は毎月、月末に支払われます。",
          "zh": "工资每月月底发放。",
          "focus": ["給与"],
          "zhFocus": ["工资"]
        },
        {
          "ja": "今年から給与が上がりました。",
          "zh": "从今年开始工资涨了。",
          "focus": ["給与"],
          "zhFocus": ["工资"]
        },
        {
          "ja": "給与のほかに、交通費も出ます。",
          "zh": "除了工资，还给交通费。",
          "focus": ["給与"],
          "zhFocus": ["工资"]
        }
      ],
      "note_zh": "书面语；口语多说「給料」。"
    },
    {
      "id": "n2-0161",
      "jlpt": "N2",
      "headword": "漁業",
      "source_form": "漁業",
      "variants": [
        "漁業"
      ],
      "reading": "ぎょぎょう",
      "reading_variants": [
        "ぎょぎょう"
      ],
      "romaji": "gyogyou",
      "part_of_speech": "noun",
      "meaning_zh": "渔业",
      "kanji_readings": [
        {
          "form": "漁業",
          "reading": "ぎょぎょう"
        }
      ],
      "examples": [
        {
          "ja": "この町は漁業が盛んです。",
          "zh": "这个镇渔业很发达。",
          "focus": ["漁業"],
          "zhFocus": ["渔业"]
        },
        {
          "ja": "漁業で生活している人が多いです。",
          "zh": "靠渔业为生的人很多。",
          "focus": ["漁業"],
          "zhFocus": ["渔业"]
        },
        {
          "ja": "海の汚染は漁業に大きな影響を与えます。",
          "zh": "海洋污染对渔业有很大影响。",
          "focus": ["漁業"],
          "zhFocus": ["渔业"]
        }
      ]
    },
    {
      "id": "n2-0162",
      "jlpt": "N2",
      "headword": "競馬",
      "source_form": "競馬",
      "variants": [
        "競馬"
      ],
      "reading": "けいば",
      "reading_variants": [
        "けいば"
      ],
      "romaji": "keiba",
      "part_of_speech": "noun",
      "meaning_zh": "赛马",
      "kanji_readings": [
        {
          "form": "競馬",
          "reading": "けいば"
        }
      ],
      "examples": [
        {
          "ja": "父は週末に競馬を見に行きます。",
          "zh": "父亲周末去看赛马。",
          "focus": ["競馬"],
          "zhFocus": ["赛马"]
        },
        {
          "ja": "競馬で負けて、お金がなくなりました。",
          "zh": "赌赛马输了，钱都没了。",
          "focus": ["競馬"],
          "zhFocus": ["赛马"]
        },
        {
          "ja": "競馬場は駅から近いです。",
          "zh": "赛马场离车站很近。",
          "focus": ["競馬"],
          "zhFocus": ["赛马场"]
        }
      ]
    },
    {
      "id": "n2-0163",
      "jlpt": "N2",
      "headword": "琴",
      "source_form": "琴",
      "variants": [
        "琴"
      ],
      "reading": "こと",
      "reading_variants": [
        "こと"
      ],
      "romaji": "koto",
      "part_of_speech": "noun",
      "meaning_zh": "筝（日本传统弦乐器）",
      "kanji_readings": [
        {
          "form": "琴",
          "reading": "こと"
        }
      ],
      "examples": [
        {
          "ja": "祖母は琴を弾くのが上手です。",
          "zh": "祖母很擅长弹筝。",
          "focus": ["琴"],
          "zhFocus": ["筝"]
        },
        {
          "ja": "正月に琴の音楽を聞きました。",
          "zh": "正月里听了筝曲。",
          "focus": ["琴"],
          "zhFocus": ["筝曲"]
        },
        {
          "ja": "子供のころから琴を習っています。",
          "zh": "从小就在学筝。",
          "focus": ["琴"],
          "zhFocus": ["筝"]
        }
      ],
      "note_zh": "日本传统弦乐器，通常有十三根弦。"
    },
    {
      "id": "n2-0164",
      "jlpt": "N2",
      "headword": "形式",
      "source_form": "形式",
      "variants": [
        "形式"
      ],
      "reading": "けいしき",
      "reading_variants": [
        "けいしき"
      ],
      "romaji": "keishiki",
      "part_of_speech": "noun",
      "meaning_zh": "形式；格式",
      "kanji_readings": [
        {
          "form": "形式",
          "reading": "けいしき"
        }
      ],
      "examples": [
        {
          "ja": "決まった形式で書類を作ってください。",
          "zh": "请按规定的格式制作文件。",
          "focus": ["形式"],
          "zhFocus": ["格式"]
        },
        {
          "ja": "試験は面接の形式で行われます。",
          "zh": "考试以面试的形式进行。",
          "focus": ["形式"],
          "zhFocus": ["形式"]
        },
        {
          "ja": "形式だけの会議は意味がありません。",
          "zh": "流于形式的会议没有意义。",
          "focus": ["形式"],
          "zhFocus": ["形式"]
        }
      ]
    },
    {
      "id": "n2-0165",
      "jlpt": "N2",
      "headword": "芸能",
      "source_form": "芸能",
      "variants": [
        "芸能"
      ],
      "reading": "げいのう",
      "reading_variants": [
        "げいのう"
      ],
      "romaji": "geinou",
      "part_of_speech": "noun",
      "meaning_zh": "演艺；表演艺术",
      "senses_zh": [
        "演艺",
        "表演艺术"
      ],
      "kanji_readings": [
        {
          "form": "芸能",
          "reading": "げいのう"
        }
      ],
      "examples": [
        {
          "ja": "彼女は芸能の仕事をしています。",
          "zh": "她从事演艺工作。",
          "focus": ["芸能"],
          "zhFocus": ["演艺"]
        },
        {
          "ja": "伝統的な芸能を守ることは大切です。",
          "zh": "保护传统表演艺术很重要。",
          "focus": ["芸能"],
          "zhFocus": ["表演艺术"]
        },
        {
          "ja": "姉は芸能人に詳しいです。",
          "zh": "姐姐对艺人很了解。",
          "focus": ["芸能"],
          "zhFocus": ["艺人"]
        }
      ]
    },
    {
      "id": "n2-0166",
      "jlpt": "N2",
      "headword": "血液",
      "source_form": "血液",
      "variants": [
        "血液"
      ],
      "reading": "けつえき",
      "reading_variants": [
        "けつえき"
      ],
      "romaji": "ketsueki",
      "part_of_speech": "noun",
      "meaning_zh": "血液",
      "kanji_readings": [
        {
          "form": "血液",
          "reading": "けつえき"
        }
      ],
      "examples": [
        {
          "ja": "病院で血液の検査を受けました。",
          "zh": "在医院接受了血液检查。",
          "focus": ["血液"],
          "zhFocus": ["血液"]
        },
        {
          "ja": "血液は体の中を流れています。",
          "zh": "血液在体内流动。",
          "focus": ["血液"],
          "zhFocus": ["血液"]
        },
        {
          "ja": "あなたの血液型は何ですか。",
          "zh": "你的血型是什么？",
          "focus": ["血液"],
          "zhFocus": ["血型"]
        }
      ]
    },
    {
      "id": "n2-0167",
      "jlpt": "N2",
      "headword": "公表",
      "source_form": "公表",
      "variants": [
        "公表"
      ],
      "reading": "こうひょう",
      "reading_variants": [
        "こうひょう"
      ],
      "romaji": "kouhyou",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "公布；公开发表",
      "kanji_readings": [
        {
          "form": "公表",
          "reading": "こうひょう"
        }
      ],
      "examples": [
        {
          "ja": "政府は調査の結果を公表しました。",
          "zh": "政府公布了调查结果。",
          "focus": ["公表"],
          "zhFocus": ["公布"]
        },
        {
          "ja": "その情報はまだ公表されていません。",
          "zh": "那个信息还没有公开。",
          "focus": ["公表"],
          "zhFocus": ["公开"]
        },
        {
          "ja": "事故の原因が公表されました。",
          "zh": "事故的原因被公布了。",
          "focus": ["公表"],
          "zhFocus": ["公布"]
        }
      ]
    },
    {
      "id": "n2-0168",
      "jlpt": "N2",
      "headword": "工夫",
      "source_form": "工夫",
      "variants": [
        "工夫"
      ],
      "reading": "くふう",
      "reading_variants": [
        "くふう"
      ],
      "romaji": "kufuu",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "下功夫；想办法",
      "kanji_readings": [
        {
          "form": "工夫",
          "reading": "くふう"
        }
      ],
      "examples": [
        {
          "ja": "料理の味に工夫をしました。",
          "zh": "在菜的味道上下了功夫。",
          "focus": ["工夫"],
          "zhFocus": ["功夫"]
        },
        {
          "ja": "狭い部屋を広く使うために、いろいろ工夫しています。",
          "zh": "为了充分利用狭小的房间，想了各种办法。",
          "focus": ["工夫"],
          "zhFocus": ["办法"]
        },
        {
          "ja": "子供が楽しく学べるように、授業を工夫しました。",
          "zh": "为了让孩子快乐地学习，在课上下了功夫。",
          "focus": ["工夫"],
          "zhFocus": ["功夫"]
        }
      ]
    },
    {
      "id": "n2-0169",
      "jlpt": "N2",
      "headword": "広場",
      "source_form": "広場",
      "variants": [
        "広場"
      ],
      "reading": "ひろば",
      "reading_variants": [
        "ひろば"
      ],
      "romaji": "hiroba",
      "part_of_speech": "noun",
      "meaning_zh": "广场",
      "kanji_readings": [
        {
          "form": "広場",
          "reading": "ひろば"
        }
      ],
      "examples": [
        {
          "ja": "駅前の広場で待ち合わせをしました。",
          "zh": "在车站前的广场碰了面。",
          "focus": ["広場"],
          "zhFocus": ["广场"]
        },
        {
          "ja": "広場で子供たちが遊んでいます。",
          "zh": "孩子们在广场上玩。",
          "focus": ["広場"],
          "zhFocus": ["广场"]
        },
        {
          "ja": "祭りの日には、広場にたくさんの店が出ます。",
          "zh": "节日那天，广场上会出很多摊位。",
          "focus": ["広場"],
          "zhFocus": ["广场"]
        }
      ]
    },
    {
      "id": "n2-0170",
      "jlpt": "N2",
      "headword": "行事",
      "source_form": "行事",
      "variants": [
        "行事"
      ],
      "reading": "ぎょうじ",
      "reading_variants": [
        "ぎょうじ"
      ],
      "romaji": "gyouji",
      "part_of_speech": "noun",
      "meaning_zh": "（例行的）活动；仪式",
      "kanji_readings": [
        {
          "form": "行事",
          "reading": "ぎょうじ"
        }
      ],
      "examples": [
        {
          "ja": "学校の行事に家族も参加しました。",
          "zh": "家人也参加了学校的活动。",
          "focus": ["行事"],
          "zhFocus": ["活动"]
        },
        {
          "ja": "日本には季節の行事がたくさんあります。",
          "zh": "日本有很多应季的传统活动。",
          "focus": ["行事"],
          "zhFocus": ["传统活动"]
        },
        {
          "ja": "年末は行事が多くて忙しいです。",
          "zh": "年底活动多，很忙。",
          "focus": ["行事"],
          "zhFocus": ["活动"]
        }
      ]
    },
    {
      "id": "n2-0171",
      "jlpt": "N2",
      "headword": "国王",
      "source_form": "国王",
      "variants": [
        "国王"
      ],
      "reading": "こくおう",
      "reading_variants": [
        "こくおう"
      ],
      "romaji": "kokuou",
      "part_of_speech": "noun",
      "meaning_zh": "国王",
      "kanji_readings": [
        {
          "form": "国王",
          "reading": "こくおう"
        }
      ],
      "examples": [
        {
          "ja": "その国の国王が日本を訪問しました。",
          "zh": "那个国家的国王访问了日本。",
          "focus": ["国王"],
          "zhFocus": ["国王"]
        },
        {
          "ja": "国王は国民に人気があります。",
          "zh": "国王很受国民欢迎。",
          "focus": ["国王"],
          "zhFocus": ["国王"]
        },
        {
          "ja": "昔、この城には国王が住んでいました。",
          "zh": "以前这座城堡里住着国王。",
          "focus": ["国王"],
          "zhFocus": ["国王"]
        }
      ]
    },
    {
      "id": "n2-0172",
      "jlpt": "N2",
      "headword": "作成",
      "source_form": "作成",
      "variants": [
        "作成"
      ],
      "reading": "さくせい",
      "reading_variants": [
        "さくせい"
      ],
      "romaji": "sakusei",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "制作；编写（文件、计划等）",
      "kanji_readings": [
        {
          "form": "作成",
          "reading": "さくせい"
        }
      ],
      "examples": [
        {
          "ja": "会議の資料を作成しました。",
          "zh": "编写了会议资料。",
          "focus": ["作成"],
          "zhFocus": ["编写"]
        },
        {
          "ja": "パソコンで書類を作成します。",
          "zh": "用电脑制作文件。",
          "focus": ["作成"],
          "zhFocus": ["制作"]
        },
        {
          "ja": "来年の計画を作成しているところです。",
          "zh": "正在制定明年的计划。",
          "focus": ["作成"],
          "zhFocus": ["制定"]
        }
      ]
    },
    {
      "id": "n2-0173",
      "jlpt": "N2",
      "headword": "主役",
      "source_form": "主役",
      "variants": [
        "主役"
      ],
      "reading": "しゅやく",
      "reading_variants": [
        "しゅやく"
      ],
      "romaji": "shuyaku",
      "part_of_speech": "noun",
      "meaning_zh": "主角",
      "kanji_readings": [
        {
          "form": "主役",
          "reading": "しゅやく"
        }
      ],
      "examples": [
        {
          "ja": "彼はその映画で主役を演じました。",
          "zh": "他在那部电影里演主角。",
          "focus": ["主役"],
          "zhFocus": ["主角"]
        },
        {
          "ja": "今日の主役は誕生日の娘です。",
          "zh": "今天的主角是过生日的女儿。",
          "focus": ["主役"],
          "zhFocus": ["主角"]
        },
        {
          "ja": "劇の主役に選ばれて、うれしいです。",
          "zh": "被选为戏剧的主角，很开心。",
          "focus": ["主役"],
          "zhFocus": ["主角"]
        }
      ]
    },
    {
      "id": "n2-0174",
      "jlpt": "N2",
      "headword": "終了",
      "source_form": "終了",
      "variants": [
        "終了"
      ],
      "reading": "しゅうりょう",
      "reading_variants": [
        "しゅうりょう"
      ],
      "romaji": "shuuryou",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "结束；终了",
      "kanji_readings": [
        {
          "form": "終了",
          "reading": "しゅうりょう"
        }
      ],
      "examples": [
        {
          "ja": "試合は予定どおりに終了しました。",
          "zh": "比赛按计划结束了。",
          "focus": ["終了"],
          "zhFocus": ["结束"]
        },
        {
          "ja": "今日の受付は終了しました。",
          "zh": "今天的受理已经结束了。",
          "focus": ["終了"],
          "zhFocus": ["结束"]
        },
        {
          "ja": "工事が終了するまで、この道は通れません。",
          "zh": "工程结束之前，这条路不能通行。",
          "focus": ["終了"],
          "zhFocus": ["结束"]
        }
      ],
      "note_zh": "与「開始（开始）」相对。"
    },
    {
      "id": "n2-0175",
      "jlpt": "N2",
      "headword": "商店",
      "source_form": "商店",
      "variants": [
        "商店"
      ],
      "reading": "しょうてん",
      "reading_variants": [
        "しょうてん"
      ],
      "romaji": "shouten",
      "part_of_speech": "noun",
      "meaning_zh": "商店",
      "kanji_readings": [
        {
          "form": "商店",
          "reading": "しょうてん"
        }
      ],
      "examples": [
        {
          "ja": "この通りには小さな商店が並んでいます。",
          "zh": "这条街上排列着小商店。",
          "focus": ["商店"],
          "zhFocus": ["商店"]
        },
        {
          "ja": "近所の商店で野菜を買います。",
          "zh": "在附近的商店买菜。",
          "focus": ["商店"],
          "zhFocus": ["商店"]
        },
        {
          "ja": "駅前の商店街はいつもにぎやかです。",
          "zh": "车站前的商业街总是很热闹。",
          "focus": ["商店"],
          "zhFocus": ["商业街"]
        }
      ]
    },
    {
      "id": "n2-0176",
      "jlpt": "N2",
      "headword": "将棋",
      "source_form": "将棋",
      "variants": [
        "将棋"
      ],
      "reading": "しょうぎ",
      "reading_variants": [
        "しょうぎ"
      ],
      "romaji": "shougi",
      "part_of_speech": "noun",
      "meaning_zh": "将棋（日本象棋）",
      "kanji_readings": [
        {
          "form": "将棋",
          "reading": "しょうぎ"
        }
      ],
      "examples": [
        {
          "ja": "祖父と将棋をしました。",
          "zh": "和祖父下了将棋。",
          "focus": ["将棋"],
          "zhFocus": ["将棋"]
        },
        {
          "ja": "将棋のルールを覚えました。",
          "zh": "记住了将棋的规则。",
          "focus": ["将棋"],
          "zhFocus": ["将棋"]
        },
        {
          "ja": "彼は将棋がとても強いです。",
          "zh": "他将棋下得非常好。",
          "focus": ["将棋"],
          "zhFocus": ["将棋"]
        }
      ]
    },
    {
      "id": "n2-0177",
      "jlpt": "N2",
      "headword": "消極的",
      "source_form": "消極的",
      "variants": [
        "消極的"
      ],
      "reading": "しょうきょくてき",
      "reading_variants": [
        "しょうきょくてき"
      ],
      "romaji": "shoukyokuteki",
      "part_of_speech": "na-adjective",
      "meaning_zh": "消极的；被动的",
      "kanji_readings": [
        {
          "form": "消極的",
          "reading": "しょうきょくてき"
        }
      ],
      "examples": [
        {
          "ja": "彼は何事にも消極的です。",
          "zh": "他对什么事都很消极。",
          "focus": ["消極的"],
          "zhFocus": ["消极"]
        },
        {
          "ja": "消極的な態度では、成功しません。",
          "zh": "态度消极是不会成功的。",
          "focus": ["消極的"],
          "zhFocus": ["消极"]
        },
        {
          "ja": "会議では消極的な意見ばかり出ました。",
          "zh": "会议上尽是些消极的意见。",
          "focus": ["消極的"],
          "zhFocus": ["消极"]
        }
      ],
      "note_zh": "与「積極的（积极的）」相对。"
    },
    {
      "id": "n2-0178",
      "jlpt": "N2",
      "headword": "上下",
      "source_form": "上下",
      "variants": [
        "上下"
      ],
      "reading": "じょうげ",
      "reading_variants": [
        "じょうげ"
      ],
      "romaji": "jouge",
      "part_of_speech": "noun",
      "meaning_zh": "上下；高低",
      "kanji_readings": [
        {
          "form": "上下",
          "reading": "じょうげ"
        }
      ],
      "examples": [
        {
          "ja": "箱を上下に振りました。",
          "zh": "上下摇了摇箱子。",
          "focus": ["上下"],
          "zhFocus": ["上下"]
        },
        {
          "ja": "この会社は上下の関係が厳しいです。",
          "zh": "这家公司上下级关系很严格。",
          "focus": ["上下"],
          "zhFocus": ["上下级"]
        },
        {
          "ja": "この服は上下で色が違います。",
          "zh": "这身衣服上下颜色不同。",
          "focus": ["上下"],
          "zhFocus": ["上下"]
        }
      ]
    },
    {
      "id": "n2-0179",
      "jlpt": "N2",
      "headword": "診断",
      "source_form": "診断",
      "variants": [
        "診断"
      ],
      "reading": "しんだん",
      "reading_variants": [
        "しんだん"
      ],
      "romaji": "shindan",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "诊断",
      "kanji_readings": [
        {
          "form": "診断",
          "reading": "しんだん"
        }
      ],
      "examples": [
        {
          "ja": "医者はかぜだと診断しました。",
          "zh": "医生诊断为感冒。",
          "focus": ["診断"],
          "zhFocus": ["诊断"]
        },
        {
          "ja": "毎年、健康診断を受けています。",
          "zh": "每年都做健康检查。",
          "focus": ["診断"],
          "zhFocus": ["检查"]
        },
        {
          "ja": "診断の結果を聞いて、安心しました。",
          "zh": "听了诊断结果，放心了。",
          "focus": ["診断"],
          "zhFocus": ["诊断"]
        }
      ]
    },
    {
      "id": "n2-0180",
      "jlpt": "N2",
      "headword": "推定",
      "source_form": "推定",
      "variants": [
        "推定"
      ],
      "reading": "すいてい",
      "reading_variants": [
        "すいてい"
      ],
      "romaji": "suitei",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "推定；估计",
      "kanji_readings": [
        {
          "form": "推定",
          "reading": "すいてい"
        }
      ],
      "examples": [
        {
          "ja": "専門家が事故の原因を推定しました。",
          "zh": "专家推定了事故的原因。",
          "focus": ["推定"],
          "zhFocus": ["推定"]
        },
        {
          "ja": "この建物は江戸時代のものと推定されています。",
          "zh": "这座建筑被推定为江户时代的东西。",
          "focus": ["推定"],
          "zhFocus": ["推定"]
        },
        {
          "ja": "参加者の数を推定するのは難しいです。",
          "zh": "估计参加的人数很难。",
          "focus": ["推定"],
          "zhFocus": ["估计"]
        }
      ]
    },
    {
      "id": "n2-0181",
      "jlpt": "N2",
      "headword": "宣伝",
      "source_form": "宣伝",
      "variants": [
        "宣伝"
      ],
      "reading": "せんでん",
      "reading_variants": [
        "せんでん"
      ],
      "romaji": "senden",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "宣传；广告",
      "kanji_readings": [
        {
          "form": "宣伝",
          "reading": "せんでん"
        }
      ],
      "examples": [
        {
          "ja": "新しい商品をテレビで宣伝しています。",
          "zh": "在电视上宣传新商品。",
          "focus": ["宣伝"],
          "zhFocus": ["宣传"]
        },
        {
          "ja": "宣伝のおかげで、客が増えました。",
          "zh": "多亏了宣传，客人增加了。",
          "focus": ["宣伝"],
          "zhFocus": ["宣传"]
        },
        {
          "ja": "インターネットの宣伝を見て、この店を知りました。",
          "zh": "看了网上的广告，知道了这家店。",
          "focus": ["宣伝"],
          "zhFocus": ["广告"]
        }
      ]
    },
    {
      "id": "n2-0182",
      "jlpt": "N2",
      "headword": "率直",
      "source_form": "卒直",
      "variants": [
        "率直"
      ],
      "reading": "そっちょく",
      "reading_variants": [
        "そっちょく"
      ],
      "romaji": "sotchoku",
      "part_of_speech": "na-adjective/noun",
      "meaning_zh": "坦率；直率",
      "kanji_readings": [
        {
          "form": "率直",
          "reading": "そっちょく"
        }
      ],
      "examples": [
        {
          "ja": "率直な意見を聞かせてください。",
          "zh": "请告诉我你坦率的意见。",
          "focus": ["率直"],
          "zhFocus": ["坦率"]
        },
        {
          "ja": "率直に言うと、その計画には反対です。",
          "zh": "坦率地说，我反对那个计划。",
          "focus": ["率直"],
          "zhFocus": ["坦率"]
        },
        {
          "ja": "彼は率直な性格で、みんなに好かれています。",
          "zh": "他性格直率，大家都喜欢他。",
          "focus": ["率直"],
          "zhFocus": ["直率"]
        }
      ]
    },
    {
      "id": "n2-0183",
      "jlpt": "N2",
      "headword": "地点",
      "source_form": "地点",
      "variants": [
        "地点"
      ],
      "reading": "ちてん",
      "reading_variants": [
        "ちてん"
      ],
      "romaji": "chiten",
      "part_of_speech": "noun",
      "meaning_zh": "地点",
      "kanji_readings": [
        {
          "form": "地点",
          "reading": "ちてん"
        }
      ],
      "examples": [
        {
          "ja": "事故が起きた地点に花が置いてあります。",
          "zh": "事故发生的地点放着花。",
          "focus": ["地点"],
          "zhFocus": ["地点"]
        },
        {
          "ja": "この地点から山の頂上が見えます。",
          "zh": "从这个地点可以看到山顶。",
          "focus": ["地点"],
          "zhFocus": ["地点"]
        },
        {
          "ja": "マラソンの折り返し地点で水を飲みました。",
          "zh": "在马拉松的折返点喝了水。",
          "focus": ["地点"],
          "zhFocus": ["折返点"]
        }
      ]
    },
    {
      "id": "n2-0184",
      "jlpt": "N2",
      "headword": "中旬",
      "source_form": "中旬",
      "variants": [
        "中旬"
      ],
      "reading": "ちゅうじゅん",
      "reading_variants": [
        "ちゅうじゅん"
      ],
      "romaji": "chuujun",
      "part_of_speech": "noun",
      "meaning_zh": "中旬",
      "kanji_readings": [
        {
          "form": "中旬",
          "reading": "ちゅうじゅん"
        }
      ],
      "examples": [
        {
          "ja": "四月中旬に入学式があります。",
          "zh": "四月中旬有入学典礼。",
          "focus": ["中旬"],
          "zhFocus": ["中旬"]
        },
        {
          "ja": "来月の中旬に引っ越します。",
          "zh": "下个月中旬搬家。",
          "focus": ["中旬"],
          "zhFocus": ["中旬"]
        },
        {
          "ja": "今月の中旬までに返事をください。",
          "zh": "请在本月中旬之前回复。",
          "focus": ["中旬"],
          "zhFocus": ["中旬"]
        }
      ],
      "note_zh": "一个月分为「上旬」「中旬」「下旬」。"
    },
    {
      "id": "n2-0185",
      "jlpt": "N2",
      "headword": "電波",
      "source_form": "電波",
      "variants": [
        "電波"
      ],
      "reading": "でんぱ",
      "reading_variants": [
        "でんぱ"
      ],
      "romaji": "denpa",
      "part_of_speech": "noun",
      "meaning_zh": "电波；（手机等的）信号",
      "senses_zh": [
        "电波",
        "（手机等的）信号"
      ],
      "kanji_readings": [
        {
          "form": "電波",
          "reading": "でんぱ"
        }
      ],
      "examples": [
        {
          "ja": "ここは電波が弱くて、電話がつながりません。",
          "zh": "这里信号弱，电话打不通。",
          "focus": ["電波"],
          "zhFocus": ["信号"]
        },
        {
          "ja": "ラジオの電波が届かない地域もあります。",
          "zh": "也有收不到广播电波的地区。",
          "focus": ["電波"],
          "zhFocus": ["电波"]
        },
        {
          "ja": "地下では携帯電話の電波が入りません。",
          "zh": "地下没有手机信号。",
          "focus": ["電波"],
          "zhFocus": ["信号"]
        }
      ]
    },
    {
      "id": "n2-0186",
      "jlpt": "N2",
      "headword": "登場",
      "source_form": "登場",
      "variants": [
        "登場"
      ],
      "reading": "とうじょう",
      "reading_variants": [
        "とうじょう"
      ],
      "romaji": "toujou",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "登场；出场；问世",
      "kanji_readings": [
        {
          "form": "登場",
          "reading": "とうじょう"
        }
      ],
      "examples": [
        {
          "ja": "主人公が舞台に登場しました。",
          "zh": "主人公登上了舞台。",
          "focus": ["登場"],
          "zhFocus": ["登上"]
        },
        {
          "ja": "この小説には多くの人物が登場します。",
          "zh": "这部小说里出场的人物很多。",
          "focus": ["登場"],
          "zhFocus": ["出场"]
        },
        {
          "ja": "新しいスマートフォンが登場しました。",
          "zh": "新款智能手机问世了。",
          "focus": ["登場"],
          "zhFocus": ["问世"]
        }
      ]
    },
    {
      "id": "n2-0187",
      "jlpt": "N2",
      "headword": "都心",
      "source_form": "都心",
      "variants": [
        "都心"
      ],
      "reading": "としん",
      "reading_variants": [
        "としん"
      ],
      "romaji": "toshin",
      "part_of_speech": "noun",
      "meaning_zh": "市中心（尤指东京）",
      "kanji_readings": [
        {
          "form": "都心",
          "reading": "としん"
        }
      ],
      "examples": [
        {
          "ja": "都心に住むのは便利ですが、家賃が高いです。",
          "zh": "住在市中心很方便，但是房租贵。",
          "focus": ["都心"],
          "zhFocus": ["市中心"]
        },
        {
          "ja": "都心まで電車で一時間かかります。",
          "zh": "坐电车到市中心要一个小时。",
          "focus": ["都心"],
          "zhFocus": ["市中心"]
        },
        {
          "ja": "週末の都心は人が多いです。",
          "zh": "周末的市中心人很多。",
          "focus": ["都心"],
          "zhFocus": ["市中心"]
        }
      ]
    },
    {
      "id": "n2-0188",
      "jlpt": "N2",
      "headword": "当日",
      "source_form": "当日",
      "variants": [
        "当日"
      ],
      "reading": "とうじつ",
      "reading_variants": [
        "とうじつ"
      ],
      "romaji": "toujitsu",
      "part_of_speech": "noun",
      "meaning_zh": "当天",
      "kanji_readings": [
        {
          "form": "当日",
          "reading": "とうじつ"
        }
      ],
      "examples": [
        {
          "ja": "当日は雨でしたが、たくさんの人が来ました。",
          "zh": "当天下了雨，但来了很多人。",
          "focus": ["当日"],
          "zhFocus": ["当天"]
        },
        {
          "ja": "チケットは当日でも買えます。",
          "zh": "票当天也能买。",
          "focus": ["当日"],
          "zhFocus": ["当天"]
        },
        {
          "ja": "試験の当日に寝坊してしまいました。",
          "zh": "考试当天睡过头了。",
          "focus": ["当日"],
          "zhFocus": ["当天"]
        }
      ]
    },
    {
      "id": "n2-0189",
      "jlpt": "N2",
      "headword": "透明",
      "source_form": "透明",
      "variants": [
        "透明"
      ],
      "reading": "とうめい",
      "reading_variants": [
        "とうめい"
      ],
      "romaji": "toumei",
      "part_of_speech": "na-adjective/noun",
      "meaning_zh": "透明",
      "kanji_readings": [
        {
          "form": "透明",
          "reading": "とうめい"
        }
      ],
      "examples": [
        {
          "ja": "透明なガラスのコップを買いました。",
          "zh": "买了透明的玻璃杯。",
          "focus": ["透明"],
          "zhFocus": ["透明"]
        },
        {
          "ja": "この川の水はとても透明です。",
          "zh": "这条河的水非常清澈透明。",
          "focus": ["透明"],
          "zhFocus": ["透明"]
        },
        {
          "ja": "会社の経営を透明にする必要があります。",
          "zh": "需要让公司的经营透明化。",
          "focus": ["透明"],
          "zhFocus": ["透明化"]
        }
      ]
    },
    {
      "id": "n2-0190",
      "jlpt": "N2",
      "headword": "俳句",
      "source_form": "俳句",
      "variants": [
        "俳句"
      ],
      "reading": "はいく",
      "reading_variants": [
        "はいく"
      ],
      "romaji": "haiku",
      "part_of_speech": "noun",
      "meaning_zh": "俳句",
      "kanji_readings": [
        {
          "form": "俳句",
          "reading": "はいく"
        }
      ],
      "examples": [
        {
          "ja": "国語の授業で俳句を作りました。",
          "zh": "在国语课上作了俳句。",
          "focus": ["俳句"],
          "zhFocus": ["俳句"]
        },
        {
          "ja": "俳句は世界でいちばん短い詩だと言われます。",
          "zh": "俳句被称为世界上最短的诗。",
          "focus": ["俳句"],
          "zhFocus": ["俳句"]
        },
        {
          "ja": "祖父の趣味は俳句です。",
          "zh": "祖父的爱好是俳句。",
          "focus": ["俳句"],
          "zhFocus": ["俳句"]
        }
      ]
    },
    {
      "id": "n2-0191",
      "jlpt": "N2",
      "headword": "発電",
      "source_form": "発電",
      "variants": [
        "発電"
      ],
      "reading": "はつでん",
      "reading_variants": [
        "はつでん"
      ],
      "romaji": "hatsuden",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "发电",
      "kanji_readings": [
        {
          "form": "発電",
          "reading": "はつでん"
        }
      ],
      "examples": [
        {
          "ja": "この家は太陽の光で発電しています。",
          "zh": "这栋房子利用阳光发电。",
          "focus": ["発電"],
          "zhFocus": ["发电"]
        },
        {
          "ja": "風の力で発電する施設があります。",
          "zh": "有利用风力发电的设施。",
          "focus": ["発電"],
          "zhFocus": ["发电"]
        },
        {
          "ja": "近くに発電所があります。",
          "zh": "附近有发电站。",
          "focus": ["発電"],
          "zhFocus": ["发电站"]
        }
      ]
    },
    {
      "id": "n2-0192",
      "jlpt": "N2",
      "headword": "付属",
      "source_form": "附属",
      "variants": [
        "付属",
        "附属"
      ],
      "reading": "ふぞく",
      "reading_variants": [
        "ふぞく"
      ],
      "romaji": "fuzoku",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "附属；附带",
      "kanji_readings": [
        {
          "form": "付属",
          "reading": "ふぞく"
        },
        {
          "form": "附属",
          "reading": "ふぞく"
        }
      ],
      "examples": [
        {
          "ja": "姉は大学の付属病院で働いています。",
          "zh": "姐姐在大学附属医院工作。",
          "focus": ["付属"],
          "zhFocus": ["附属"]
        },
        {
          "ja": "付属のケーブルを使ってください。",
          "zh": "请使用附带的数据线。",
          "focus": ["付属"],
          "zhFocus": ["附带"]
        },
        {
          "ja": "この高校は大学に付属しています。",
          "zh": "这所高中附属于大学。",
          "focus": ["付属"],
          "zhFocus": ["附属"]
        }
      ]
    },
    {
      "id": "n2-0193",
      "jlpt": "N2",
      "headword": "要旨",
      "source_form": "要旨",
      "variants": [
        "要旨"
      ],
      "reading": "ようし",
      "reading_variants": [
        "ようし"
      ],
      "romaji": "youshi",
      "part_of_speech": "noun",
      "meaning_zh": "要点；大意；摘要",
      "kanji_readings": [
        {
          "form": "要旨",
          "reading": "ようし"
        }
      ],
      "examples": [
        {
          "ja": "話の要旨をまとめてください。",
          "zh": "请归纳讲话的要点。",
          "focus": ["要旨"],
          "zhFocus": ["要点"]
        },
        {
          "ja": "論文の要旨を先に読みました。",
          "zh": "先读了论文的摘要。",
          "focus": ["要旨"],
          "zhFocus": ["摘要"]
        },
        {
          "ja": "彼の説明の要旨はこうです。",
          "zh": "他说明的大意是这样的。",
          "focus": ["要旨"],
          "zhFocus": ["大意"]
        }
      ]
    },
    {
      "id": "n2-0194",
      "jlpt": "N2",
      "headword": "例外",
      "source_form": "例外",
      "variants": [
        "例外"
      ],
      "reading": "れいがい",
      "reading_variants": [
        "れいがい"
      ],
      "romaji": "reigai",
      "part_of_speech": "noun",
      "meaning_zh": "例外",
      "kanji_readings": [
        {
          "form": "例外",
          "reading": "れいがい"
        }
      ],
      "examples": [
        {
          "ja": "どんな規則にも例外があります。",
          "zh": "任何规则都有例外。",
          "focus": ["例外"],
          "zhFocus": ["例外"]
        },
        {
          "ja": "例外として、今回だけ認めます。",
          "zh": "作为例外，只在这次允许。",
          "focus": ["例外"],
          "zhFocus": ["例外"]
        },
        {
          "ja": "子供も例外ではありません。",
          "zh": "孩子也不例外。",
          "focus": ["例外"],
          "zhFocus": ["例外"]
        }
      ]
    },
    {
      "id": "n2-0195",
      "jlpt": "N2",
      "headword": "当たり前",
      "source_form": "あたりまえ",
      "variants": [
        "当たり前"
      ],
      "reading": "あたりまえ",
      "reading_variants": [
        "あたりまえ"
      ],
      "romaji": "atarimae",
      "part_of_speech": "na-adjective/noun",
      "meaning_zh": "当然；理所当然",
      "kanji_readings": [
        {
          "form": "当たり前",
          "reading": "あたりまえ"
        }
      ],
      "examples": [
        {
          "ja": "約束を守るのは当たり前のことです。",
          "zh": "遵守约定是理所当然的事。",
          "focus": ["当たり前"],
          "zhFocus": ["理所当然"]
        },
        {
          "ja": "毎日水が使えるのは当たり前ではありません。",
          "zh": "每天都能用上水并不是理所当然的。",
          "focus": ["当たり前"],
          "zhFocus": ["理所当然"]
        },
        {
          "ja": "失敗したら、悔しいのは当たり前です。",
          "zh": "失败了会不甘心，这是当然的。",
          "focus": ["当たり前"],
          "zhFocus": ["当然"]
        }
      ]
    },
    {
      "id": "n2-0196",
      "jlpt": "N2",
      "headword": "以後",
      "source_form": "以後",
      "variants": [
        "以後"
      ],
      "reading": "いご",
      "reading_variants": [
        "いご"
      ],
      "romaji": "igo",
      "part_of_speech": "noun",
      "meaning_zh": "以后；今后",
      "kanji_readings": [
        {
          "form": "以後",
          "reading": "いご"
        }
      ],
      "examples": [
        {
          "ja": "夜十時以後は静かにしてください。",
          "zh": "晚上十点以后请保持安静。",
          "focus": ["以後"],
          "zhFocus": ["以后"]
        },
        {
          "ja": "以後、気をつけます。",
          "zh": "今后我会注意的。",
          "focus": ["以後"],
          "zhFocus": ["今后"]
        },
        {
          "ja": "入学以後、毎日図書館に通っています。",
          "zh": "入学以后，每天都去图书馆。",
          "focus": ["以後"],
          "zhFocus": ["以后"]
        }
      ]
    },
    {
      "id": "n2-0197",
      "jlpt": "N2",
      "headword": "往復",
      "source_form": "往復",
      "variants": [
        "往復"
      ],
      "reading": "おうふく",
      "reading_variants": [
        "おうふく"
      ],
      "romaji": "oufuku",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "往返；来回",
      "kanji_readings": [
        {
          "form": "往復",
          "reading": "おうふく"
        }
      ],
      "examples": [
        {
          "ja": "駅まで往復で一時間かかります。",
          "zh": "到车站往返要一个小时。",
          "focus": ["往復"],
          "zhFocus": ["往返"]
        },
        {
          "ja": "往復の切符を買いました。",
          "zh": "买了往返票。",
          "focus": ["往復"],
          "zhFocus": ["往返"]
        },
        {
          "ja": "家と会社を往復するだけの毎日です。",
          "zh": "每天只是往返于家和公司之间。",
          "focus": ["往復"],
          "zhFocus": ["往返"]
        }
      ]
    },
    {
      "id": "n2-0198",
      "jlpt": "N2",
      "headword": "温泉",
      "source_form": "温泉",
      "variants": [
        "温泉"
      ],
      "reading": "おんせん",
      "reading_variants": [
        "おんせん"
      ],
      "romaji": "onsen",
      "part_of_speech": "noun",
      "meaning_zh": "温泉",
      "kanji_readings": [
        {
          "form": "温泉",
          "reading": "おんせん"
        }
      ],
      "examples": [
        {
          "ja": "週末に温泉に行きました。",
          "zh": "周末去泡温泉了。",
          "focus": ["温泉"],
          "zhFocus": ["温泉"]
        },
        {
          "ja": "この温泉は体にいいと言われています。",
          "zh": "据说这个温泉对身体有好处。",
          "focus": ["温泉"],
          "zhFocus": ["温泉"]
        },
        {
          "ja": "雪を見ながら温泉に入りました。",
          "zh": "一边看雪一边泡了温泉。",
          "focus": ["温泉"],
          "zhFocus": ["温泉"]
        }
      ]
    },
    {
      "id": "n2-0199",
      "jlpt": "N2",
      "headword": "果たして",
      "source_form": "果して",
      "variants": [
        "果たして"
      ],
      "reading": "はたして",
      "reading_variants": [
        "はたして"
      ],
      "romaji": "hatashite",
      "part_of_speech": "adverb",
      "meaning_zh": "果然；究竟；到底",
      "kanji_readings": [
        {
          "form": "果たして",
          "reading": "はたして"
        }
      ],
      "examples": [
        {
          "ja": "果たして、彼の言ったとおりになりました。",
          "zh": "果然如他所说。",
          "focus": ["果たして"],
          "zhFocus": ["果然"]
        },
        {
          "ja": "この計画は果たしてうまくいくでしょうか。",
          "zh": "这个计划究竟能不能顺利呢？",
          "focus": ["果たして"],
          "zhFocus": ["究竟"]
        },
        {
          "ja": "果たして本当に雨が降るのでしょうか。",
          "zh": "到底真的会下雨吗？",
          "focus": ["果たして"],
          "zhFocus": ["到底"]
        }
      ]
    },
    {
      "id": "n2-0200",
      "jlpt": "N2",
      "headword": "貨物",
      "source_form": "貨物",
      "variants": [
        "貨物"
      ],
      "reading": "かもつ",
      "reading_variants": [
        "かもつ"
      ],
      "romaji": "kamotsu",
      "part_of_speech": "noun",
      "meaning_zh": "货物",
      "kanji_readings": [
        {
          "form": "貨物",
          "reading": "かもつ"
        }
      ],
      "examples": [
        {
          "ja": "この船は貨物を運びます。",
          "zh": "这艘船运送货物。",
          "focus": ["貨物"],
          "zhFocus": ["货物"]
        },
        {
          "ja": "貨物列車が駅を通りました。",
          "zh": "货运列车经过了车站。",
          "focus": ["貨物"],
          "zhFocus": ["货运"]
        },
        {
          "ja": "空港で貨物を積んでいます。",
          "zh": "正在机场装货物。",
          "focus": ["貨物"],
          "zhFocus": ["货物"]
        }
      ]
    },
    {
      "id": "n2-0201",
      "jlpt": "N2",
      "headword": "外部",
      "source_form": "外部",
      "variants": [
        "外部"
      ],
      "reading": "がいぶ",
      "reading_variants": [
        "がいぶ"
      ],
      "romaji": "gaibu",
      "part_of_speech": "noun",
      "meaning_zh": "外部；外面",
      "kanji_readings": [
        {
          "form": "外部",
          "reading": "がいぶ"
        }
      ],
      "examples": [
        {
          "ja": "会社の情報が外部に漏れました。",
          "zh": "公司的信息泄露到了外部。",
          "focus": ["外部"],
          "zhFocus": ["外部"]
        },
        {
          "ja": "外部の人はこの部屋に入れません。",
          "zh": "外部人员不能进入这个房间。",
          "focus": ["外部"],
          "zhFocus": ["外部"]
        },
        {
          "ja": "外部の専門家に相談しました。",
          "zh": "向外部的专家咨询了。",
          "focus": ["外部"],
          "zhFocus": ["外部"]
        }
      ],
      "note_zh": "与「内部（内部）」相对。"
    },
    {
      "id": "n2-0202",
      "jlpt": "N2",
      "headword": "学科",
      "source_form": "学科",
      "variants": [
        "学科"
      ],
      "reading": "がっか",
      "reading_variants": [
        "がっか"
      ],
      "romaji": "gakka",
      "part_of_speech": "noun",
      "meaning_zh": "学科；（大学的）系、专业",
      "kanji_readings": [
        {
          "form": "学科",
          "reading": "がっか"
        }
      ],
      "examples": [
        {
          "ja": "大学では経済学科に入りました。",
          "zh": "在大学进了经济系。",
          "focus": ["学科"],
          "zhFocus": ["系"]
        },
        {
          "ja": "運転免許の学科の試験に合格しました。",
          "zh": "通过了驾照的笔试。",
          "focus": ["学科"],
          "zhFocus": ["笔试"]
        },
        {
          "ja": "どの学科を選ぶか迷っています。",
          "zh": "正在犹豫选哪个专业。",
          "focus": ["学科"],
          "zhFocus": ["专业"]
        }
      ]
    },
    {
      "id": "n2-0203",
      "jlpt": "N2",
      "headword": "冠",
      "source_form": "冠",
      "variants": [
        "冠"
      ],
      "reading": "かんむり",
      "reading_variants": [
        "かんむり"
      ],
      "romaji": "kanmuri",
      "part_of_speech": "noun",
      "meaning_zh": "冠；王冠；（汉字的）字头",
      "senses_zh": [
        "冠；王冠",
        "（汉字的）字头"
      ],
      "kanji_readings": [
        {
          "form": "冠",
          "reading": "かんむり"
        }
      ],
      "examples": [
        {
          "ja": "王様は金の冠をかぶっています。",
          "zh": "国王戴着金冠。",
          "focus": ["冠"],
          "zhFocus": ["金冠"]
        },
        {
          "ja": "花で冠を作りました。",
          "zh": "用花做了花冠。",
          "focus": ["冠"],
          "zhFocus": ["花冠"]
        },
        {
          "ja": "漢字の上の部分を冠といいます。",
          "zh": "汉字上面的部分叫作“冠”（字头）。",
          "focus": ["冠"],
          "zhFocus": ["冠"]
        }
      ]
    },
    {
      "id": "n2-0204",
      "jlpt": "N2",
      "headword": "気配",
      "source_form": "気配",
      "variants": [
        "気配"
      ],
      "reading": "けはい",
      "reading_variants": [
        "けはい"
      ],
      "romaji": "kehai",
      "part_of_speech": "noun",
      "meaning_zh": "动静；迹象；气息",
      "kanji_readings": [
        {
          "form": "気配",
          "reading": "けはい"
        }
      ],
      "examples": [
        {
          "ja": "後ろに人の気配を感じました。",
          "zh": "感觉到身后有人的动静。",
          "focus": ["気配"],
          "zhFocus": ["动静"]
        },
        {
          "ja": "外はもう春の気配がします。",
          "zh": "外面已经有了春天的气息。",
          "focus": ["気配"],
          "zhFocus": ["气息"]
        },
        {
          "ja": "雨がやむ気配はありません。",
          "zh": "雨没有要停的迹象。",
          "focus": ["気配"],
          "zhFocus": ["迹象"]
        }
      ]
    },
    {
      "id": "n2-0205",
      "jlpt": "N2",
      "headword": "強気",
      "source_form": "強気",
      "variants": [
        "強気"
      ],
      "reading": "つよき",
      "reading_variants": [
        "つよき"
      ],
      "romaji": "tsuyoki",
      "part_of_speech": "na-adjective/noun",
      "meaning_zh": "强势；强硬；有信心",
      "kanji_readings": [
        {
          "form": "強気",
          "reading": "つよき"
        }
      ],
      "examples": [
        {
          "ja": "彼はいつも強気です。",
          "zh": "他总是很强势。",
          "focus": ["強気"],
          "zhFocus": ["强势"]
        },
        {
          "ja": "交渉では強気な態度を取りました。",
          "zh": "在谈判中采取了强硬的态度。",
          "focus": ["強気"],
          "zhFocus": ["强硬"]
        },
        {
          "ja": "試合の前、彼は強気な発言をしました。",
          "zh": "比赛前，他发表了很有信心的言论。",
          "focus": ["強気"],
          "zhFocus": ["很有信心"]
        }
      ],
      "note_zh": "与「弱気（软弱；没信心）」相对。"
    },
    {
      "id": "n2-0206",
      "jlpt": "N2",
      "headword": "区域",
      "source_form": "区域",
      "variants": [
        "区域"
      ],
      "reading": "くいき",
      "reading_variants": [
        "くいき"
      ],
      "romaji": "kuiki",
      "part_of_speech": "noun",
      "meaning_zh": "区域",
      "kanji_readings": [
        {
          "form": "区域",
          "reading": "くいき"
        }
      ],
      "examples": [
        {
          "ja": "この区域では、たばこを吸ってはいけません。",
          "zh": "在这个区域不能吸烟。",
          "focus": ["区域"],
          "zhFocus": ["区域"]
        },
        {
          "ja": "危険な区域に入らないでください。",
          "zh": "请不要进入危险区域。",
          "focus": ["区域"],
          "zhFocus": ["区域"]
        },
        {
          "ja": "町はいくつかの区域に分かれています。",
          "zh": "城镇分成几个区域。",
          "focus": ["区域"],
          "zhFocus": ["区域"]
        }
      ]
    },
    {
      "id": "n2-0207",
      "jlpt": "N2",
      "headword": "原稿",
      "source_form": "原稿",
      "variants": [
        "原稿"
      ],
      "reading": "げんこう",
      "reading_variants": [
        "げんこう"
      ],
      "romaji": "genkou",
      "part_of_speech": "noun",
      "meaning_zh": "原稿；稿子",
      "kanji_readings": [
        {
          "form": "原稿",
          "reading": "げんこう"
        }
      ],
      "examples": [
        {
          "ja": "雑誌の原稿を書いています。",
          "zh": "在写杂志的稿子。",
          "focus": ["原稿"],
          "zhFocus": ["稿子"]
        },
        {
          "ja": "スピーチの原稿を覚えました。",
          "zh": "记住了演讲稿。",
          "focus": ["原稿"],
          "zhFocus": ["演讲稿"]
        },
        {
          "ja": "原稿の締め切りは明日です。",
          "zh": "原稿的截止日期是明天。",
          "focus": ["原稿"],
          "zhFocus": ["原稿"]
        }
      ]
    },
    {
      "id": "n2-0208",
      "jlpt": "N2",
      "headword": "高層",
      "source_form": "高層",
      "variants": [
        "高層"
      ],
      "reading": "こうそう",
      "reading_variants": [
        "こうそう"
      ],
      "romaji": "kousou",
      "part_of_speech": "noun",
      "meaning_zh": "高层",
      "kanji_readings": [
        {
          "form": "高層",
          "reading": "こうそう"
        }
      ],
      "examples": [
        {
          "ja": "駅の周りに高層ビルが建ちました。",
          "zh": "车站周围建起了高层大楼。",
          "focus": ["高層"],
          "zhFocus": ["高层"]
        },
        {
          "ja": "高層マンションからの景色はすばらしいです。",
          "zh": "从高层公寓看到的景色很美。",
          "focus": ["高層"],
          "zhFocus": ["高层"]
        },
        {
          "ja": "高層の建物は地震に強く作られています。",
          "zh": "高层建筑造得很抗震。",
          "focus": ["高層"],
          "zhFocus": ["高层"]
        }
      ]
    },
    {
      "id": "n2-0209",
      "jlpt": "N2",
      "headword": "高度",
      "source_form": "高度",
      "variants": [
        "高度"
      ],
      "reading": "こうど",
      "reading_variants": [
        "こうど"
      ],
      "romaji": "koudo",
      "part_of_speech": "noun/na-adjective",
      "meaning_zh": "高度；海拔；高水平的",
      "senses_zh": [
        "高度；海拔",
        "高水平的"
      ],
      "kanji_readings": [
        {
          "form": "高度",
          "reading": "こうど"
        }
      ],
      "examples": [
        {
          "ja": "飛行機が高度を上げました。",
          "zh": "飞机提升了高度。",
          "focus": ["高度"],
          "zhFocus": ["高度"]
        },
        {
          "ja": "山の高度が上がるにつれて、気温が下がります。",
          "zh": "随着山的海拔升高，气温下降。",
          "focus": ["高度"],
          "zhFocus": ["海拔"]
        },
        {
          "ja": "この仕事には高度な技術が必要です。",
          "zh": "这项工作需要高水平的技术。",
          "focus": ["高度"],
          "zhFocus": ["高水平"]
        }
      ]
    },
    {
      "id": "n2-0210",
      "jlpt": "N2",
      "headword": "高等",
      "source_form": "高等",
      "variants": [
        "高等"
      ],
      "reading": "こうとう",
      "reading_variants": [
        "こうとう"
      ],
      "romaji": "koutou",
      "part_of_speech": "noun/na-adjective",
      "meaning_zh": "高等；高级",
      "kanji_readings": [
        {
          "form": "高等",
          "reading": "こうとう"
        }
      ],
      "examples": [
        {
          "ja": "兄は高等学校の先生です。",
          "zh": "哥哥是高中老师。",
          "focus": ["高等"],
          "zhFocus": ["高中"]
        },
        {
          "ja": "高等教育を受けた人が増えています。",
          "zh": "受过高等教育的人在增加。",
          "focus": ["高等"],
          "zhFocus": ["高等"]
        },
        {
          "ja": "この問題は高等な知識がないと解けません。",
          "zh": "这道题没有高深的知识解不出来。",
          "focus": ["高等"],
          "zhFocus": ["高深"]
        }
      ]
    },
    {
      "id": "n2-0211",
      "jlpt": "N2",
      "headword": "作者",
      "source_form": "作者",
      "variants": [
        "作者"
      ],
      "reading": "さくしゃ",
      "reading_variants": [
        "さくしゃ"
      ],
      "romaji": "sakusha",
      "part_of_speech": "noun",
      "meaning_zh": "作者",
      "kanji_readings": [
        {
          "form": "作者",
          "reading": "さくしゃ"
        }
      ],
      "examples": [
        {
          "ja": "この小説の作者は有名です。",
          "zh": "这部小说的作者很有名。",
          "focus": ["作者"],
          "zhFocus": ["作者"]
        },
        {
          "ja": "作者の気持ちを考えながら読みます。",
          "zh": "一边体会作者的心情一边阅读。",
          "focus": ["作者"],
          "zhFocus": ["作者"]
        },
        {
          "ja": "この絵の作者は分かっていません。",
          "zh": "这幅画的作者不明。",
          "focus": ["作者"],
          "zhFocus": ["作者"]
        }
      ]
    },
    {
      "id": "n2-0212",
      "jlpt": "N2",
      "headword": "死体",
      "source_form": "死体",
      "variants": [
        "死体"
      ],
      "reading": "したい",
      "reading_variants": [
        "したい"
      ],
      "romaji": "shitai",
      "part_of_speech": "noun",
      "meaning_zh": "尸体",
      "kanji_readings": [
        {
          "form": "死体",
          "reading": "したい"
        }
      ],
      "examples": [
        {
          "ja": "川で死体が見つかりました。",
          "zh": "在河里发现了尸体。",
          "focus": ["死体"],
          "zhFocus": ["尸体"]
        },
        {
          "ja": "警察は死体を詳しく調べました。",
          "zh": "警察仔细检查了尸体。",
          "focus": ["死体"],
          "zhFocus": ["尸体"]
        },
        {
          "ja": "道に鳥の死体がありました。",
          "zh": "路上有一只鸟的尸体。",
          "focus": ["死体"],
          "zhFocus": ["尸体"]
        }
      ]
    },
    {
      "id": "n2-0213",
      "jlpt": "N2",
      "headword": "実用",
      "source_form": "実用",
      "variants": [
        "実用"
      ],
      "reading": "じつよう",
      "reading_variants": [
        "じつよう"
      ],
      "romaji": "jitsuyou",
      "part_of_speech": "noun",
      "meaning_zh": "实用",
      "kanji_readings": [
        {
          "form": "実用",
          "reading": "じつよう"
        }
      ],
      "examples": [
        {
          "ja": "この道具はとても実用的です。",
          "zh": "这个工具非常实用。",
          "focus": ["実用"],
          "zhFocus": ["实用"]
        },
        {
          "ja": "新しい技術が実用化されました。",
          "zh": "新技术被投入了实际应用。",
          "focus": ["実用"],
          "zhFocus": ["实际应用"]
        },
        {
          "ja": "デザインより実用を重視します。",
          "zh": "比起设计，更重视实用性。",
          "focus": ["実用"],
          "zhFocus": ["实用性"]
        }
      ]
    },
    {
      "id": "n2-0214",
      "jlpt": "N2",
      "headword": "縮小",
      "source_form": "縮小",
      "variants": [
        "縮小"
      ],
      "reading": "しゅくしょう",
      "reading_variants": [
        "しゅくしょう"
      ],
      "romaji": "shukushou",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "缩小；削减",
      "kanji_readings": [
        {
          "form": "縮小",
          "reading": "しゅくしょう"
        }
      ],
      "examples": [
        {
          "ja": "写真を縮小して印刷しました。",
          "zh": "把照片缩小后打印了。",
          "focus": ["縮小"],
          "zhFocus": ["缩小"]
        },
        {
          "ja": "会社は事業を縮小しました。",
          "zh": "公司缩小了业务规模。",
          "focus": ["縮小"],
          "zhFocus": ["缩小"]
        },
        {
          "ja": "今年は予算が縮小されました。",
          "zh": "今年预算被削减了。",
          "focus": ["縮小"],
          "zhFocus": ["削减"]
        }
      ],
      "note_zh": "与「拡大（扩大）」相对。"
    },
    {
      "id": "n2-0215",
      "jlpt": "N2",
      "headword": "前後",
      "source_form": "前後",
      "variants": [
        "前後"
      ],
      "reading": "ぜんご",
      "reading_variants": [
        "ぜんご"
      ],
      "romaji": "zengo",
      "part_of_speech": "noun",
      "meaning_zh": "前后；先后",
      "kanji_readings": [
        {
          "form": "前後",
          "reading": "ぜんご"
        }
      ],
      "examples": [
        {
          "ja": "車の前後をよく確認してください。",
          "zh": "请仔细确认车的前后。",
          "focus": ["前後"],
          "zhFocus": ["前后"]
        },
        {
          "ja": "食事の前後に薬を飲みます。",
          "zh": "在吃饭前后服药。",
          "focus": ["前後"],
          "zhFocus": ["前后"]
        },
        {
          "ja": "彼の話は前後が合いません。",
          "zh": "他的话前后对不上。",
          "focus": ["前後"],
          "zhFocus": ["前后"]
        }
      ]
    },
    {
      "id": "n2-0216",
      "jlpt": "N2",
      "headword": "地盤",
      "source_form": "地盤",
      "variants": [
        "地盤"
      ],
      "reading": "じばん",
      "reading_variants": [
        "じばん"
      ],
      "romaji": "jiban",
      "part_of_speech": "noun",
      "meaning_zh": "地基；地面；（势力的）地盘",
      "senses_zh": [
        "地基；地面",
        "（势力的）地盘"
      ],
      "kanji_readings": [
        {
          "form": "地盤",
          "reading": "じばん"
        }
      ],
      "examples": [
        {
          "ja": "地震で地盤が弱くなりました。",
          "zh": "因为地震，地基变得松软了。",
          "focus": ["地盤"],
          "zhFocus": ["地基"]
        },
        {
          "ja": "この辺りは地盤がかたいです。",
          "zh": "这一带地基很坚固。",
          "focus": ["地盤"],
          "zhFocus": ["地基"]
        },
        {
          "ja": "彼はこの町を地盤にして選挙に出ました。",
          "zh": "他以这个镇为地盘参加了选举。",
          "focus": ["地盤"],
          "zhFocus": ["地盘"]
        }
      ]
    },
    {
      "id": "n2-0217",
      "jlpt": "N2",
      "headword": "彫刻",
      "source_form": "彫刻",
      "variants": [
        "彫刻"
      ],
      "reading": "ちょうこく",
      "reading_variants": [
        "ちょうこく"
      ],
      "romaji": "choukoku",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "雕刻",
      "kanji_readings": [
        {
          "form": "彫刻",
          "reading": "ちょうこく"
        }
      ],
      "examples": [
        {
          "ja": "美術館で有名な彫刻を見ました。",
          "zh": "在美术馆看了著名的雕刻。",
          "focus": ["彫刻"],
          "zhFocus": ["雕刻"]
        },
        {
          "ja": "木に動物の姿を彫刻しました。",
          "zh": "在木头上雕刻了动物的样子。",
          "focus": ["彫刻"],
          "zhFocus": ["雕刻"]
        },
        {
          "ja": "祖父の趣味は彫刻です。",
          "zh": "祖父的爱好是雕刻。",
          "focus": ["彫刻"],
          "zhFocus": ["雕刻"]
        }
      ]
    },
    {
      "id": "n2-0218",
      "jlpt": "N2",
      "headword": "通勤",
      "source_form": "通勤",
      "variants": [
        "通勤"
      ],
      "reading": "つうきん",
      "reading_variants": [
        "つうきん"
      ],
      "romaji": "tsuukin",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "通勤；上下班",
      "kanji_readings": [
        {
          "form": "通勤",
          "reading": "つうきん"
        }
      ],
      "examples": [
        {
          "ja": "毎日電車で通勤しています。",
          "zh": "每天坐电车上下班。",
          "focus": ["通勤"],
          "zhFocus": ["上下班"]
        },
        {
          "ja": "通勤に一時間かかります。",
          "zh": "上下班要花一个小时。",
          "focus": ["通勤"],
          "zhFocus": ["上下班"]
        },
        {
          "ja": "朝の通勤の時間は電車が混みます。",
          "zh": "早上通勤时段电车很挤。",
          "focus": ["通勤"],
          "zhFocus": ["通勤"]
        }
      ]
    },
    {
      "id": "n2-0219",
      "jlpt": "N2",
      "headword": "締め切り",
      "source_form": "締切",
      "variants": [
        "締め切り",
        "締切"
      ],
      "reading": "しめきり",
      "reading_variants": [
        "しめきり"
      ],
      "romaji": "shimekiri",
      "part_of_speech": "noun",
      "meaning_zh": "截止（日期）",
      "kanji_readings": [
        {
          "form": "締め切り",
          "reading": "しめきり"
        },
        {
          "form": "締切",
          "reading": "しめきり"
        }
      ],
      "examples": [
        {
          "ja": "レポートの締め切りは金曜日です。",
          "zh": "报告的截止日期是星期五。",
          "focus": ["締め切り"],
          "zhFocus": ["截止日期"]
        },
        {
          "ja": "締め切りに間に合いませんでした。",
          "zh": "没赶上截止日期。",
          "focus": ["締め切り"],
          "zhFocus": ["截止日期"]
        },
        {
          "ja": "申し込みの締め切りが近づいています。",
          "zh": "报名的截止日期快到了。",
          "focus": ["締め切り"],
          "zhFocus": ["截止日期"]
        }
      ]
    },
    {
      "id": "n2-0220",
      "jlpt": "N2",
      "headword": "銅",
      "source_form": "銅",
      "variants": [
        "銅"
      ],
      "reading": "どう",
      "reading_variants": [
        "どう"
      ],
      "romaji": "dou",
      "part_of_speech": "noun",
      "meaning_zh": "铜",
      "kanji_readings": [
        {
          "form": "銅",
          "reading": "どう"
        }
      ],
      "examples": [
        {
          "ja": "この鍋は銅でできています。",
          "zh": "这口锅是铜做的。",
          "focus": ["銅"],
          "zhFocus": ["铜"]
        },
        {
          "ja": "銅は電気をよく通します。",
          "zh": "铜很容易导电。",
          "focus": ["銅"],
          "zhFocus": ["铜"]
        },
        {
          "ja": "オリンピックで銅メダルを取りました。",
          "zh": "在奥运会上获得了铜牌。",
          "focus": ["銅"],
          "zhFocus": ["铜牌"]
        }
      ],
      "note_zh": "与「どう（怎样）」同音。"
    },
    {
      "id": "n2-0221",
      "jlpt": "N2",
      "headword": "農産物",
      "source_form": "農産物",
      "variants": [
        "農産物"
      ],
      "reading": "のうさんぶつ",
      "reading_variants": [
        "のうさんぶつ"
      ],
      "romaji": "nousanbutsu",
      "part_of_speech": "noun",
      "meaning_zh": "农产品",
      "kanji_readings": [
        {
          "form": "農産物",
          "reading": "のうさんぶつ"
        }
      ],
      "examples": [
        {
          "ja": "この地方の農産物は有名です。",
          "zh": "这个地方的农产品很有名。",
          "focus": ["農産物"],
          "zhFocus": ["农产品"]
        },
        {
          "ja": "農産物の値段が上がっています。",
          "zh": "农产品的价格在上涨。",
          "focus": ["農産物"],
          "zhFocus": ["农产品"]
        },
        {
          "ja": "外国から農産物を輸入しています。",
          "zh": "从国外进口农产品。",
          "focus": ["農産物"],
          "zhFocus": ["农产品"]
        }
      ]
    },
    {
      "id": "n2-0222",
      "jlpt": "N2",
      "headword": "売れ行き",
      "source_form": "売行き",
      "variants": [
        "売れ行き"
      ],
      "reading": "うれゆき",
      "reading_variants": [
        "うれゆき"
      ],
      "romaji": "ureyuki",
      "part_of_speech": "noun",
      "meaning_zh": "销路；销售情况",
      "kanji_readings": [
        {
          "form": "売れ行き",
          "reading": "うれゆき"
        }
      ],
      "examples": [
        {
          "ja": "新しい商品の売れ行きがいいです。",
          "zh": "新商品的销路很好。",
          "focus": ["売れ行き"],
          "zhFocus": ["销路"]
        },
        {
          "ja": "雨の日は傘の売れ行きが伸びます。",
          "zh": "下雨天伞的销量会增长。",
          "focus": ["売れ行き"],
          "zhFocus": ["销量"]
        },
        {
          "ja": "売れ行きが悪くて、店を閉めることにしました。",
          "zh": "销路不好，决定关店了。",
          "focus": ["売れ行き"],
          "zhFocus": ["销路"]
        }
      ]
    },
    {
      "id": "n2-0223",
      "jlpt": "N2",
      "headword": "判事",
      "source_form": "判事",
      "variants": [
        "判事"
      ],
      "reading": "はんじ",
      "reading_variants": [
        "はんじ"
      ],
      "romaji": "hanji",
      "part_of_speech": "noun",
      "meaning_zh": "法官；审判员",
      "kanji_readings": [
        {
          "form": "判事",
          "reading": "はんじ"
        }
      ],
      "examples": [
        {
          "ja": "判事は判決を言い渡しました。",
          "zh": "法官宣读了判决。",
          "focus": ["判事"],
          "zhFocus": ["法官"]
        },
        {
          "ja": "父は長い間、判事を務めました。",
          "zh": "父亲长期担任法官。",
          "focus": ["判事"],
          "zhFocus": ["法官"]
        },
        {
          "ja": "判事は公平でなければなりません。",
          "zh": "法官必须公正。",
          "focus": ["判事"],
          "zhFocus": ["法官"]
        }
      ]
    },
    {
      "id": "n2-0224",
      "jlpt": "N2",
      "headword": "半島",
      "source_form": "半島",
      "variants": [
        "半島"
      ],
      "reading": "はんとう",
      "reading_variants": [
        "はんとう"
      ],
      "romaji": "hantou",
      "part_of_speech": "noun",
      "meaning_zh": "半岛",
      "kanji_readings": [
        {
          "form": "半島",
          "reading": "はんとう"
        }
      ],
      "examples": [
        {
          "ja": "半島の先に灯台があります。",
          "zh": "半岛的尖端有座灯塔。",
          "focus": ["半島"],
          "zhFocus": ["半岛"]
        },
        {
          "ja": "半島の海岸をドライブしました。",
          "zh": "开车沿着半岛的海岸兜风了。",
          "focus": ["半島"],
          "zhFocus": ["半岛"]
        },
        {
          "ja": "夏休みに半島の小さな村を訪ねました。",
          "zh": "暑假去了半岛上的一个小村子。",
          "focus": ["半島"],
          "zhFocus": ["半岛"]
        }
      ]
    },
    {
      "id": "n2-0225",
      "jlpt": "N2",
      "headword": "敷地",
      "source_form": "敷地",
      "variants": [
        "敷地"
      ],
      "reading": "しきち",
      "reading_variants": [
        "しきち"
      ],
      "romaji": "shikichi",
      "part_of_speech": "noun",
      "meaning_zh": "（建筑）用地；地皮",
      "kanji_readings": [
        {
          "form": "敷地",
          "reading": "しきち"
        }
      ],
      "examples": [
        {
          "ja": "学校の敷地はとても広いです。",
          "zh": "学校的占地面积很大。",
          "focus": ["敷地"],
          "zhFocus": ["占地"]
        },
        {
          "ja": "工場の敷地の中に入らないでください。",
          "zh": "请不要进入工厂的用地内。",
          "focus": ["敷地"],
          "zhFocus": ["用地"]
        },
        {
          "ja": "この敷地に新しい家を建てる予定です。",
          "zh": "打算在这块地皮上盖新房子。",
          "focus": ["敷地"],
          "zhFocus": ["地皮"]
        }
      ]
    },
    {
      "id": "n2-0226",
      "jlpt": "N2",
      "headword": "父母",
      "source_form": "父母",
      "variants": [
        "父母"
      ],
      "reading": "ふぼ",
      "reading_variants": [
        "ふぼ"
      ],
      "romaji": "fubo",
      "part_of_speech": "noun",
      "meaning_zh": "父母",
      "kanji_readings": [
        {
          "form": "父母",
          "reading": "ふぼ"
        }
      ],
      "examples": [
        {
          "ja": "父母にはとても感謝しています。",
          "zh": "我非常感激父母。",
          "focus": ["父母"],
          "zhFocus": ["父母"]
        },
        {
          "ja": "学校で父母会が開かれました。",
          "zh": "学校召开了家长会。",
          "focus": ["父母"],
          "zhFocus": ["家长会"]
        },
        {
          "ja": "父母の世話をするために、実家に帰りました。",
          "zh": "为了照顾父母，回了老家。",
          "focus": ["父母"],
          "zhFocus": ["父母"]
        }
      ],
      "note_zh": "书面语；口语多说「両親」。"
    },
    {
      "id": "n2-0227",
      "jlpt": "N2",
      "headword": "噴火",
      "source_form": "噴火",
      "variants": [
        "噴火"
      ],
      "reading": "ふんか",
      "reading_variants": [
        "ふんか"
      ],
      "romaji": "funka",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "（火山）喷发",
      "kanji_readings": [
        {
          "form": "噴火",
          "reading": "ふんか"
        }
      ],
      "examples": [
        {
          "ja": "山が噴火して、灰が降りました。",
          "zh": "火山喷发，落下了火山灰。",
          "focus": ["噴火"],
          "zhFocus": ["喷发"]
        },
        {
          "ja": "噴火のニュースを見て、驚きました。",
          "zh": "看到火山喷发的新闻，吃了一惊。",
          "focus": ["噴火"],
          "zhFocus": ["喷发"]
        },
        {
          "ja": "火山の噴火に備えて、訓練をしています。",
          "zh": "为防备火山喷发，正在进行训练。",
          "focus": ["噴火"],
          "zhFocus": ["喷发"]
        }
      ]
    },
    {
      "id": "n2-0228",
      "jlpt": "N2",
      "headword": "文芸",
      "source_form": "文芸",
      "variants": [
        "文芸"
      ],
      "reading": "ぶんげい",
      "reading_variants": [
        "ぶんげい"
      ],
      "romaji": "bungei",
      "part_of_speech": "noun",
      "meaning_zh": "文艺；文学",
      "kanji_readings": [
        {
          "form": "文芸",
          "reading": "ぶんげい"
        }
      ],
      "examples": [
        {
          "ja": "大学で文芸を学んでいます。",
          "zh": "在大学学习文学。",
          "focus": ["文芸"],
          "zhFocus": ["文学"]
        },
        {
          "ja": "文芸雑誌に小説を発表しました。",
          "zh": "在文艺杂志上发表了小说。",
          "focus": ["文芸"],
          "zhFocus": ["文艺"]
        },
        {
          "ja": "高校の文芸部に入りました。",
          "zh": "加入了高中的文学社。",
          "focus": ["文芸"],
          "zhFocus": ["文学社"]
        }
      ]
    },
    {
      "id": "n2-0229",
      "jlpt": "N2",
      "headword": "放る",
      "source_form": "放る",
      "variants": [
        "放る"
      ],
      "reading": "ほうる",
      "reading_variants": [
        "ほうる"
      ],
      "romaji": "houru",
      "part_of_speech": "verb",
      "meaning_zh": "扔；抛；丢下不管",
      "senses_zh": [
        "扔；抛",
        "丢下不管"
      ],
      "kanji_readings": [
        {
          "form": "放る",
          "reading": "ほうる"
        }
      ],
      "examples": [
        {
          "ja": "ボールを遠くへ放りました。",
          "zh": "把球扔得远远的。",
          "focus": ["放り"],
          "zhFocus": ["扔"]
        },
        {
          "ja": "脱いだ服をベッドに放らないでください。",
          "zh": "请不要把脱下的衣服扔在床上。",
          "focus": ["放ら"],
          "zhFocus": ["扔"]
        },
        {
          "ja": "仕事を途中で放ってはいけません。",
          "zh": "工作不能半途丢下不管。",
          "focus": ["放っ"],
          "zhFocus": ["丢下不管"]
        }
      ]
    },
    {
      "id": "n2-0230",
      "jlpt": "N2",
      "headword": "方面",
      "source_form": "方面",
      "variants": [
        "方面"
      ],
      "reading": "ほうめん",
      "reading_variants": [
        "ほうめん"
      ],
      "romaji": "houmen",
      "part_of_speech": "noun",
      "meaning_zh": "方向；一带；方面；领域",
      "senses_zh": [
        "方向；一带",
        "方面；领域"
      ],
      "kanji_readings": [
        {
          "form": "方面",
          "reading": "ほうめん"
        }
      ],
      "examples": [
        {
          "ja": "東京方面の電車に乗ってください。",
          "zh": "请乘坐开往东京方向的电车。",
          "focus": ["方面"],
          "zhFocus": ["方向"]
        },
        {
          "ja": "明日、大阪方面は雨になるでしょう。",
          "zh": "明天大阪一带将会下雨。",
          "focus": ["方面"],
          "zhFocus": ["一带"]
        },
        {
          "ja": "彼は経済の方面に詳しいです。",
          "zh": "他在经济方面很在行。",
          "focus": ["方面"],
          "zhFocus": ["方面"]
        }
      ]
    },
    {
      "id": "n2-0231",
      "jlpt": "N2",
      "headword": "膨大",
      "source_form": "膨大",
      "variants": [
        "膨大"
      ],
      "reading": "ぼうだい",
      "reading_variants": [
        "ぼうだい"
      ],
      "romaji": "boudai",
      "part_of_speech": "na-adjective/noun",
      "meaning_zh": "庞大；巨大",
      "kanji_readings": [
        {
          "form": "膨大",
          "reading": "ぼうだい"
        }
      ],
      "examples": [
        {
          "ja": "膨大な量の資料を読みました。",
          "zh": "读了大量的资料。",
          "focus": ["膨大"],
          "zhFocus": ["大量"]
        },
        {
          "ja": "工事には膨大な費用がかかります。",
          "zh": "工程要花巨额费用。",
          "focus": ["膨大"],
          "zhFocus": ["巨额"]
        },
        {
          "ja": "インターネットには膨大な情報があります。",
          "zh": "网上有庞大的信息。",
          "focus": ["膨大"],
          "zhFocus": ["庞大"]
        }
      ]
    },
    {
      "id": "n2-0232",
      "jlpt": "N2",
      "headword": "夜間",
      "source_form": "夜間",
      "variants": [
        "夜間"
      ],
      "reading": "やかん",
      "reading_variants": [
        "やかん"
      ],
      "romaji": "yakan",
      "part_of_speech": "noun",
      "meaning_zh": "夜间",
      "kanji_readings": [
        {
          "form": "夜間",
          "reading": "やかん"
        }
      ],
      "examples": [
        {
          "ja": "夜間は門が閉まっています。",
          "zh": "夜间大门关着。",
          "focus": ["夜間"],
          "zhFocus": ["夜间"]
        },
        {
          "ja": "夜間の工事はうるさいです。",
          "zh": "夜间施工很吵。",
          "focus": ["夜間"],
          "zhFocus": ["夜间"]
        },
        {
          "ja": "兄は夜間の大学に通っています。",
          "zh": "哥哥在上夜大。",
          "focus": ["夜間"],
          "zhFocus": ["夜大"]
        }
      ],
      "note_zh": "与「やかん（水壶）」同音。"
    },
    {
      "id": "n2-0233",
      "jlpt": "N2",
      "headword": "役所",
      "source_form": "役所",
      "variants": [
        "役所"
      ],
      "reading": "やくしょ",
      "reading_variants": [
        "やくしょ"
      ],
      "romaji": "yakusho",
      "part_of_speech": "noun",
      "meaning_zh": "政府机关；公所",
      "kanji_readings": [
        {
          "form": "役所",
          "reading": "やくしょ"
        }
      ],
      "examples": [
        {
          "ja": "役所で住民票をもらいました。",
          "zh": "在政府机关开了居民证明。",
          "focus": ["役所"],
          "zhFocus": ["政府机关"]
        },
        {
          "ja": "役所の手続きは時間がかかります。",
          "zh": "政府机关的手续很费时间。",
          "focus": ["役所"],
          "zhFocus": ["政府机关"]
        },
        {
          "ja": "父は市の役所に勤めています。",
          "zh": "父亲在市里的政府机关工作。",
          "focus": ["役所"],
          "zhFocus": ["政府机关"]
        }
      ]
    },
    {
      "id": "n2-0234",
      "jlpt": "N2",
      "headword": "欄",
      "source_form": "欄",
      "variants": [
        "欄"
      ],
      "reading": "らん",
      "reading_variants": [
        "らん"
      ],
      "romaji": "ran",
      "part_of_speech": "noun",
      "meaning_zh": "栏；栏目",
      "kanji_readings": [
        {
          "form": "欄",
          "reading": "らん"
        }
      ],
      "examples": [
        {
          "ja": "この欄に名前を書いてください。",
          "zh": "请在这一栏写上名字。",
          "focus": ["欄"],
          "zhFocus": ["栏"]
        },
        {
          "ja": "新聞のスポーツ欄を読みました。",
          "zh": "看了报纸的体育栏目。",
          "focus": ["欄"],
          "zhFocus": ["栏目"]
        },
        {
          "ja": "空いている欄には何も書かなくていいです。",
          "zh": "空着的栏什么都不用写。",
          "focus": ["欄"],
          "zhFocus": ["栏"]
        }
      ]
    },
    {
      "id": "n2-0235",
      "jlpt": "N2",
      "headword": "列島",
      "source_form": "列島",
      "variants": [
        "列島"
      ],
      "reading": "れっとう",
      "reading_variants": [
        "れっとう"
      ],
      "romaji": "rettou",
      "part_of_speech": "noun",
      "meaning_zh": "列岛",
      "kanji_readings": [
        {
          "form": "列島",
          "reading": "れっとう"
        }
      ],
      "examples": [
        {
          "ja": "日本列島は南北に長いです。",
          "zh": "日本列岛南北狭长。",
          "focus": ["列島"],
          "zhFocus": ["列岛"]
        },
        {
          "ja": "台風が日本列島に近づいています。",
          "zh": "台风正在接近日本列岛。",
          "focus": ["列島"],
          "zhFocus": ["列岛"]
        },
        {
          "ja": "冷たい空気が列島を覆っています。",
          "zh": "冷空气笼罩着列岛。",
          "focus": ["列島"],
          "zhFocus": ["列岛"]
        }
      ]
    },
    {
      "id": "n2-0236",
      "jlpt": "N2",
      "headword": "相変わらず",
      "source_form": "あいかわらず",
      "variants": [
        "相変わらず"
      ],
      "reading": "あいかわらず",
      "reading_variants": [
        "あいかわらず"
      ],
      "romaji": "aikawarazu",
      "part_of_speech": "adverb",
      "meaning_zh": "依然；照旧；还是老样子",
      "kanji_readings": [
        {
          "form": "相変わらず",
          "reading": "あいかわらず"
        }
      ],
      "examples": [
        {
          "ja": "彼は相変わらず忙しそうです。",
          "zh": "他还是那么忙。",
          "focus": ["相変わらず"],
          "zhFocus": ["还是"]
        },
        {
          "ja": "相変わらず元気ですね。",
          "zh": "你还是那么精神啊。",
          "focus": ["相変わらず"],
          "zhFocus": ["还是"]
        },
        {
          "ja": "駅前は相変わらず人が多いです。",
          "zh": "车站前依然人很多。",
          "focus": ["相変わらず"],
          "zhFocus": ["依然"]
        }
      ]
    },
    {
      "id": "n2-0237",
      "jlpt": "N2",
      "headword": "安易",
      "source_form": "安易",
      "variants": [
        "安易"
      ],
      "reading": "あんい",
      "reading_variants": [
        "あんい"
      ],
      "romaji": "an'i",
      "part_of_speech": "na-adjective/noun",
      "meaning_zh": "轻率；草率；轻易",
      "kanji_readings": [
        {
          "form": "安易",
          "reading": "あんい"
        }
      ],
      "examples": [
        {
          "ja": "安易な考えで仕事を辞めてはいけません。",
          "zh": "不能凭草率的想法就辞掉工作。",
          "focus": ["安易"],
          "zhFocus": ["草率"]
        },
        {
          "ja": "安易に人を信じないほうがいいです。",
          "zh": "最好不要轻易相信别人。",
          "focus": ["安易"],
          "zhFocus": ["轻易"]
        },
        {
          "ja": "その問題は安易に解決できるものではありません。",
          "zh": "那个问题不是能轻易解决的。",
          "focus": ["安易"],
          "zhFocus": ["轻易"]
        }
      ]
    },
    {
      "id": "n2-0238",
      "jlpt": "N2",
      "headword": "一流",
      "source_form": "一流",
      "variants": [
        "一流"
      ],
      "reading": "いちりゅう",
      "reading_variants": [
        "いちりゅう"
      ],
      "romaji": "ichiryuu",
      "part_of_speech": "noun",
      "meaning_zh": "一流；第一流",
      "kanji_readings": [
        {
          "form": "一流",
          "reading": "いちりゅう"
        }
      ],
      "examples": [
        {
          "ja": "彼は一流の料理人です。",
          "zh": "他是一流的厨师。",
          "focus": ["一流"],
          "zhFocus": ["一流"]
        },
        {
          "ja": "一流のホテルに泊まりました。",
          "zh": "住了一流的酒店。",
          "focus": ["一流"],
          "zhFocus": ["一流"]
        },
        {
          "ja": "一流の大学を目指して勉強しています。",
          "zh": "以一流大学为目标在学习。",
          "focus": ["一流"],
          "zhFocus": ["一流"]
        }
      ]
    },
    {
      "id": "n2-0239",
      "jlpt": "N2",
      "headword": "有無",
      "source_form": "有無",
      "variants": [
        "有無"
      ],
      "reading": "うむ",
      "reading_variants": [
        "うむ"
      ],
      "romaji": "umu",
      "part_of_speech": "noun",
      "meaning_zh": "有无；是否",
      "kanji_readings": [
        {
          "form": "有無",
          "reading": "うむ"
        }
      ],
      "examples": [
        {
          "ja": "経験の有無は問いません。",
          "zh": "不问有无经验。",
          "focus": ["有無"],
          "zhFocus": ["有无"]
        },
        {
          "ja": "参加の有無を教えてください。",
          "zh": "请告诉我是否参加。",
          "focus": ["有無"],
          "zhFocus": ["是否"]
        },
        {
          "ja": "事故の後、けがの有無を確認しました。",
          "zh": "事故后确认了有没有受伤。",
          "focus": ["有無"],
          "zhFocus": ["有没有"]
        }
      ]
    },
    {
      "id": "n2-0240",
      "jlpt": "N2",
      "headword": "回転",
      "source_form": "回転",
      "variants": [
        "回転"
      ],
      "reading": "かいてん",
      "reading_variants": [
        "かいてん"
      ],
      "romaji": "kaiten",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "旋转；转动；（头脑）运转；（客人、资金的）周转",
      "senses_zh": [
        "旋转；转动",
        "（头脑）运转",
        "（客人、资金的）周转"
      ],
      "kanji_readings": [
        {
          "form": "回転",
          "reading": "かいてん"
        }
      ],
      "examples": [
        {
          "ja": "地球は回転しながら太陽の周りを回っています。",
          "zh": "地球一边旋转一边绕着太阳转。",
          "focus": ["回転"],
          "zhFocus": ["旋转"]
        },
        {
          "ja": "彼は頭の回転が速いです。",
          "zh": "他脑子转得快。",
          "focus": ["回転"],
          "zhFocus": ["转"]
        },
        {
          "ja": "この店は客の回転が速いです。",
          "zh": "这家店客人周转很快。",
          "focus": ["回転"],
          "zhFocus": ["周转"]
        }
      ]
    },
    {
      "id": "n2-0241",
      "jlpt": "N2",
      "headword": "架空",
      "source_form": "架空",
      "variants": [
        "架空"
      ],
      "reading": "かくう",
      "reading_variants": [
        "かくう"
      ],
      "romaji": "kakuu",
      "part_of_speech": "noun",
      "meaning_zh": "虚构；空想",
      "kanji_readings": [
        {
          "form": "架空",
          "reading": "かくう"
        }
      ],
      "examples": [
        {
          "ja": "この小説の人物はすべて架空です。",
          "zh": "这部小说的人物全都是虚构的。",
          "focus": ["架空"],
          "zhFocus": ["虚构"]
        },
        {
          "ja": "架空の町を舞台にした映画です。",
          "zh": "这是以虚构的小镇为舞台的电影。",
          "focus": ["架空"],
          "zhFocus": ["虚构"]
        },
        {
          "ja": "彼は架空の話を本当のように話します。",
          "zh": "他把虚构的事说得像真的一样。",
          "focus": ["架空"],
          "zhFocus": ["虚构"]
        }
      ]
    },
    {
      "id": "n2-0242",
      "jlpt": "N2",
      "headword": "学術",
      "source_form": "学術",
      "variants": [
        "学術"
      ],
      "reading": "がくじゅつ",
      "reading_variants": [
        "がくじゅつ"
      ],
      "romaji": "gakujutsu",
      "part_of_speech": "noun",
      "meaning_zh": "学术",
      "kanji_readings": [
        {
          "form": "学術",
          "reading": "がくじゅつ"
        }
      ],
      "examples": [
        {
          "ja": "この論文は学術雑誌に載りました。",
          "zh": "这篇论文登在了学术杂志上。",
          "focus": ["学術"],
          "zhFocus": ["学术"]
        },
        {
          "ja": "学術の発展のために研究を続けます。",
          "zh": "为了学术的发展继续研究。",
          "focus": ["学術"],
          "zhFocus": ["学术"]
        },
        {
          "ja": "彼は学術の分野で活躍しています。",
          "zh": "他活跃在学术领域。",
          "focus": ["学術"],
          "zhFocus": ["学术"]
        }
      ]
    },
    {
      "id": "n2-0243",
      "jlpt": "N2",
      "headword": "楽器",
      "source_form": "楽器",
      "variants": [
        "楽器"
      ],
      "reading": "がっき",
      "reading_variants": [
        "がっき"
      ],
      "romaji": "gakki",
      "part_of_speech": "noun",
      "meaning_zh": "乐器",
      "kanji_readings": [
        {
          "form": "楽器",
          "reading": "がっき"
        }
      ],
      "examples": [
        {
          "ja": "何か楽器を弾けますか。",
          "zh": "你会弹什么乐器吗？",
          "focus": ["楽器"],
          "zhFocus": ["乐器"]
        },
        {
          "ja": "子供のころから楽器を習っています。",
          "zh": "从小就在学乐器。",
          "focus": ["楽器"],
          "zhFocus": ["乐器"]
        },
        {
          "ja": "楽器の店でギターを買いました。",
          "zh": "在乐器店买了吉他。",
          "focus": ["楽器"],
          "zhFocus": ["乐器"]
        }
      ]
    },
    {
      "id": "n2-0244",
      "jlpt": "N2",
      "headword": "休業",
      "source_form": "休業",
      "variants": [
        "休業"
      ],
      "reading": "きゅうぎょう",
      "reading_variants": [
        "きゅうぎょう"
      ],
      "romaji": "kyuugyou",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "停业；歇业",
      "kanji_readings": [
        {
          "form": "休業",
          "reading": "きゅうぎょう"
        }
      ],
      "examples": [
        {
          "ja": "本日は休業です。",
          "zh": "今天停业。",
          "focus": ["休業"],
          "zhFocus": ["停业"]
        },
        {
          "ja": "工事のため、店はしばらく休業します。",
          "zh": "因为施工，店铺暂时停业。",
          "focus": ["休業"],
          "zhFocus": ["停业"]
        },
        {
          "ja": "台風で多くの店が休業しました。",
          "zh": "因为台风，很多店都停业了。",
          "focus": ["休業"],
          "zhFocus": ["停业"]
        }
      ]
    },
    {
      "id": "n2-0245",
      "jlpt": "N2",
      "headword": "空中",
      "source_form": "空中",
      "variants": [
        "空中"
      ],
      "reading": "くうちゅう",
      "reading_variants": [
        "くうちゅう"
      ],
      "romaji": "kuuchuu",
      "part_of_speech": "noun",
      "meaning_zh": "空中",
      "kanji_readings": [
        {
          "form": "空中",
          "reading": "くうちゅう"
        }
      ],
      "examples": [
        {
          "ja": "鳥が空中を飛んでいます。",
          "zh": "鸟在空中飞。",
          "focus": ["空中"],
          "zhFocus": ["空中"]
        },
        {
          "ja": "風船が空中に浮かんでいます。",
          "zh": "气球飘在空中。",
          "focus": ["空中"],
          "zhFocus": ["空中"]
        },
        {
          "ja": "ボールが空中で止まったように見えました。",
          "zh": "球看起来像是停在了空中。",
          "focus": ["空中"],
          "zhFocus": ["空中"]
        }
      ]
    },
    {
      "id": "n2-0246",
      "jlpt": "N2",
      "headword": "苦情",
      "source_form": "苦情",
      "variants": [
        "苦情"
      ],
      "reading": "くじょう",
      "reading_variants": [
        "くじょう"
      ],
      "romaji": "kujou",
      "part_of_speech": "noun",
      "meaning_zh": "投诉；抱怨；不满",
      "kanji_readings": [
        {
          "form": "苦情",
          "reading": "くじょう"
        }
      ],
      "examples": [
        {
          "ja": "隣の人から騒音の苦情が来ました。",
          "zh": "邻居来投诉噪音了。",
          "focus": ["苦情"],
          "zhFocus": ["投诉"]
        },
        {
          "ja": "客の苦情に丁寧に対応しました。",
          "zh": "认真处理了顾客的投诉。",
          "focus": ["苦情"],
          "zhFocus": ["投诉"]
        },
        {
          "ja": "苦情を言う前に、話を聞いてください。",
          "zh": "在抱怨之前，请先听我说。",
          "focus": ["苦情"],
          "zhFocus": ["抱怨"]
        }
      ]
    },
    {
      "id": "n2-0247",
      "jlpt": "N2",
      "headword": "外科",
      "source_form": "外科",
      "variants": [
        "外科"
      ],
      "reading": "げか",
      "reading_variants": [
        "げか"
      ],
      "romaji": "geka",
      "part_of_speech": "noun",
      "meaning_zh": "外科",
      "kanji_readings": [
        {
          "form": "外科",
          "reading": "げか"
        }
      ],
      "examples": [
        {
          "ja": "足をけがして、外科で診てもらいました。",
          "zh": "脚受伤了，去外科看了。",
          "focus": ["外科"],
          "zhFocus": ["外科"]
        },
        {
          "ja": "兄は外科の医者です。",
          "zh": "哥哥是外科医生。",
          "focus": ["外科"],
          "zhFocus": ["外科"]
        },
        {
          "ja": "外科の手術を受けました。",
          "zh": "接受了外科手术。",
          "focus": ["外科"],
          "zhFocus": ["外科"]
        }
      ],
      "note_zh": "与「内科（内科）」相对。"
    },
    {
      "id": "n2-0248",
      "jlpt": "N2",
      "headword": "限度",
      "source_form": "限度",
      "variants": [
        "限度"
      ],
      "reading": "げんど",
      "reading_variants": [
        "げんど"
      ],
      "romaji": "gendo",
      "part_of_speech": "noun",
      "meaning_zh": "限度；极限",
      "kanji_readings": [
        {
          "form": "限度",
          "reading": "げんど"
        }
      ],
      "examples": [
        {
          "ja": "我慢にも限度があります。",
          "zh": "忍耐也是有限度的。",
          "focus": ["限度"],
          "zhFocus": ["限度"]
        },
        {
          "ja": "カードで使える金額には限度があります。",
          "zh": "用卡能花的金额有限度。",
          "focus": ["限度"],
          "zhFocus": ["限度"]
        },
        {
          "ja": "限度を超えて働くと、体を壊します。",
          "zh": "超过极限地工作，会把身体搞垮。",
          "focus": ["限度"],
          "zhFocus": ["极限"]
        }
      ]
    },
    {
      "id": "n2-0249",
      "jlpt": "N2",
      "headword": "原料",
      "source_form": "原料",
      "variants": [
        "原料"
      ],
      "reading": "げんりょう",
      "reading_variants": [
        "げんりょう"
      ],
      "romaji": "genryou",
      "part_of_speech": "noun",
      "meaning_zh": "原料",
      "kanji_readings": [
        {
          "form": "原料",
          "reading": "げんりょう"
        }
      ],
      "examples": [
        {
          "ja": "パンの原料は小麦粉です。",
          "zh": "面包的原料是面粉。",
          "focus": ["原料"],
          "zhFocus": ["原料"]
        },
        {
          "ja": "この会社は外国から原料を輸入しています。",
          "zh": "这家公司从国外进口原料。",
          "focus": ["原料"],
          "zhFocus": ["原料"]
        },
        {
          "ja": "原料の値段が上がりました。",
          "zh": "原料的价格上涨了。",
          "focus": ["原料"],
          "zhFocus": ["原料"]
        }
      ]
    },
    {
      "id": "n2-0250",
      "jlpt": "N2",
      "headword": "古典",
      "source_form": "古典",
      "variants": [
        "古典"
      ],
      "reading": "こてん",
      "reading_variants": [
        "こてん"
      ],
      "romaji": "koten",
      "part_of_speech": "noun",
      "meaning_zh": "古典；经典（作品）",
      "kanji_readings": [
        {
          "form": "古典",
          "reading": "こてん"
        }
      ],
      "examples": [
        {
          "ja": "学校で日本の古典を勉強しました。",
          "zh": "在学校学习了日本的古典作品。",
          "focus": ["古典"],
          "zhFocus": ["古典"]
        },
        {
          "ja": "この本は文学の古典です。",
          "zh": "这本书是文学经典。",
          "focus": ["古典"],
          "zhFocus": ["经典"]
        },
        {
          "ja": "古典音楽を聞くのが好きです。",
          "zh": "喜欢听古典音乐。",
          "focus": ["古典"],
          "zhFocus": ["古典"]
        }
      ]
    },
    {
      "id": "n2-0251",
      "jlpt": "N2",
      "headword": "再三",
      "source_form": "再三",
      "variants": [
        "再三"
      ],
      "reading": "さいさん",
      "reading_variants": [
        "さいさん"
      ],
      "romaji": "saisan",
      "part_of_speech": "adverb",
      "meaning_zh": "再三；屡次",
      "kanji_readings": [
        {
          "form": "再三",
          "reading": "さいさん"
        }
      ],
      "examples": [
        {
          "ja": "再三注意しましたが、彼は聞きませんでした。",
          "zh": "再三提醒过，但他就是不听。",
          "focus": ["再三"],
          "zhFocus": ["再三"]
        },
        {
          "ja": "再三お願いしたのに、返事がありません。",
          "zh": "屡次请求了，却没有回音。",
          "focus": ["再三"],
          "zhFocus": ["屡次"]
        },
        {
          "ja": "彼は再三の警告を無視しました。",
          "zh": "他无视了再三的警告。",
          "focus": ["再三"],
          "zhFocus": ["再三"]
        }
      ]
    },
    {
      "id": "n2-0252",
      "jlpt": "N2",
      "headword": "産地",
      "source_form": "産地",
      "variants": [
        "産地"
      ],
      "reading": "さんち",
      "reading_variants": [
        "さんち"
      ],
      "romaji": "sanchi",
      "part_of_speech": "noun",
      "meaning_zh": "产地",
      "kanji_readings": [
        {
          "form": "産地",
          "reading": "さんち"
        }
      ],
      "examples": [
        {
          "ja": "このみかんの産地はどこですか。",
          "zh": "这橘子的产地是哪里？",
          "focus": ["産地"],
          "zhFocus": ["产地"]
        },
        {
          "ja": "静岡はお茶の産地として有名です。",
          "zh": "静冈作为茶叶产地很有名。",
          "focus": ["産地"],
          "zhFocus": ["产地"]
        },
        {
          "ja": "野菜を買うときは産地を確認します。",
          "zh": "买蔬菜时会确认产地。",
          "focus": ["産地"],
          "zhFocus": ["产地"]
        }
      ]
    },
    {
      "id": "n2-0253",
      "jlpt": "N2",
      "headword": "自衛",
      "source_form": "自衛",
      "variants": [
        "自衛"
      ],
      "reading": "じえい",
      "reading_variants": [
        "じえい"
      ],
      "romaji": "jiei",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "自卫；自我保护",
      "kanji_readings": [
        {
          "form": "自衛",
          "reading": "じえい"
        }
      ],
      "examples": [
        {
          "ja": "自衛のために、ドアのかぎを替えました。",
          "zh": "为了自我保护，换了门锁。",
          "focus": ["自衛"],
          "zhFocus": ["自我保护"]
        },
        {
          "ja": "詐欺から自衛する方法を学びました。",
          "zh": "学习了防范诈骗、保护自己的方法。",
          "focus": ["自衛"],
          "zhFocus": ["保护自己"]
        },
        {
          "ja": "国には自衛の権利があります。",
          "zh": "国家拥有自卫的权利。",
          "focus": ["自衛"],
          "zhFocus": ["自卫"]
        }
      ]
    },
    {
      "id": "n2-0254",
      "jlpt": "N2",
      "headword": "時速",
      "source_form": "時速",
      "variants": [
        "時速"
      ],
      "reading": "じそく",
      "reading_variants": [
        "じそく"
      ],
      "romaji": "jisoku",
      "part_of_speech": "noun",
      "meaning_zh": "时速",
      "kanji_readings": [
        {
          "form": "時速",
          "reading": "じそく"
        }
      ],
      "examples": [
        {
          "ja": "自転車の時速はどのくらいですか。",
          "zh": "自行车的时速大概多少？",
          "focus": ["時速"],
          "zhFocus": ["时速"]
        },
        {
          "ja": "スピードメーターで時速を確認しました。",
          "zh": "看速度表确认了时速。",
          "focus": ["時速"],
          "zhFocus": ["时速"]
        },
        {
          "ja": "算数の授業で時速の計算を習いました。",
          "zh": "在算术课上学了时速的计算。",
          "focus": ["時速"],
          "zhFocus": ["时速"]
        }
      ]
    },
    {
      "id": "n2-0255",
      "jlpt": "N2",
      "headword": "重量",
      "source_form": "重量",
      "variants": [
        "重量"
      ],
      "reading": "じゅうりょう",
      "reading_variants": [
        "じゅうりょう"
      ],
      "romaji": "juuryou",
      "part_of_speech": "noun",
      "meaning_zh": "重量；分量",
      "kanji_readings": [
        {
          "form": "重量",
          "reading": "じゅうりょう"
        }
      ],
      "examples": [
        {
          "ja": "荷物の重量を量ってください。",
          "zh": "请称一下行李的重量。",
          "focus": ["重量"],
          "zhFocus": ["重量"]
        },
        {
          "ja": "飛行機の荷物は重量に制限があります。",
          "zh": "飞机行李有重量限制。",
          "focus": ["重量"],
          "zhFocus": ["重量"]
        },
        {
          "ja": "重量のある荷物は下に置いてください。",
          "zh": "有分量的行李请放在下面。",
          "focus": ["重量"],
          "zhFocus": ["分量"]
        }
      ]
    },
    {
      "id": "n2-0256",
      "jlpt": "N2",
      "headword": "書道",
      "source_form": "書道",
      "variants": [
        "書道"
      ],
      "reading": "しょどう",
      "reading_variants": [
        "しょどう"
      ],
      "romaji": "shodou",
      "part_of_speech": "noun",
      "meaning_zh": "书法",
      "kanji_readings": [
        {
          "form": "書道",
          "reading": "しょどう"
        }
      ],
      "examples": [
        {
          "ja": "小学生のころ、書道を習っていました。",
          "zh": "小学时学过书法。",
          "focus": ["書道"],
          "zhFocus": ["书法"]
        },
        {
          "ja": "書道の授業で自分の名前を書きました。",
          "zh": "在书法课上写了自己的名字。",
          "focus": ["書道"],
          "zhFocus": ["书法"]
        },
        {
          "ja": "祖父は書道が上手です。",
          "zh": "祖父书法写得很好。",
          "focus": ["書道"],
          "zhFocus": ["书法"]
        }
      ]
    },
    {
      "id": "n2-0257",
      "jlpt": "N2",
      "headword": "素直",
      "source_form": "素直",
      "variants": [
        "素直"
      ],
      "reading": "すなお",
      "reading_variants": [
        "すなお"
      ],
      "romaji": "sunao",
      "part_of_speech": "na-adjective",
      "meaning_zh": "老实；听话；坦率；直率",
      "senses_zh": [
        "老实；听话",
        "坦率；直率"
      ],
      "kanji_readings": [
        {
          "form": "素直",
          "reading": "すなお"
        }
      ],
      "examples": [
        {
          "ja": "あの子は素直で、親の言うことをよく聞きます。",
          "zh": "那孩子很老实，父母说的话都听。",
          "focus": ["素直"],
          "zhFocus": ["老实"]
        },
        {
          "ja": "自分の間違いを素直に認めました。",
          "zh": "坦率地承认了自己的错误。",
          "focus": ["素直"],
          "zhFocus": ["坦率"]
        },
        {
          "ja": "人の意見を素直に聞くことも大切です。",
          "zh": "虚心听取别人的意见也很重要。",
          "focus": ["素直"],
          "zhFocus": ["虚心"]
        }
      ]
    },
    {
      "id": "n2-0258",
      "jlpt": "N2",
      "headword": "姓",
      "source_form": "姓",
      "variants": [
        "姓"
      ],
      "reading": "せい",
      "reading_variants": [
        "せい"
      ],
      "romaji": "sei",
      "part_of_speech": "noun",
      "meaning_zh": "姓",
      "kanji_readings": [
        {
          "form": "姓",
          "reading": "せい"
        }
      ],
      "examples": [
        {
          "ja": "結婚して姓が変わりました。",
          "zh": "结婚后姓变了。",
          "focus": ["姓"],
          "zhFocus": ["姓"]
        },
        {
          "ja": "用紙に姓と名を書いてください。",
          "zh": "请在表格上写上姓和名。",
          "focus": ["姓"],
          "zhFocus": ["姓"]
        },
        {
          "ja": "日本では、夫婦は同じ姓を使います。",
          "zh": "在日本，夫妻使用同一个姓。",
          "focus": ["姓"],
          "zhFocus": ["姓"]
        }
      ]
    },
    {
      "id": "n2-0259",
      "jlpt": "N2",
      "headword": "青少年",
      "source_form": "青少年",
      "variants": [
        "青少年"
      ],
      "reading": "せいしょうねん",
      "reading_variants": [
        "せいしょうねん"
      ],
      "romaji": "seishounen",
      "part_of_speech": "noun",
      "meaning_zh": "青少年",
      "kanji_readings": [
        {
          "form": "青少年",
          "reading": "せいしょうねん"
        }
      ],
      "examples": [
        {
          "ja": "青少年の読書の時間が減っています。",
          "zh": "青少年的读书时间在减少。",
          "focus": ["青少年"],
          "zhFocus": ["青少年"]
        },
        {
          "ja": "この施設は青少年のために作られました。",
          "zh": "这个设施是为青少年建造的。",
          "focus": ["青少年"],
          "zhFocus": ["青少年"]
        },
        {
          "ja": "青少年がスポーツをする機会を増やしたいです。",
          "zh": "想增加青少年运动的机会。",
          "focus": ["青少年"],
          "zhFocus": ["青少年"]
        }
      ]
    },
    {
      "id": "n2-0260",
      "jlpt": "N2",
      "headword": "生存",
      "source_form": "生存",
      "variants": [
        "生存"
      ],
      "reading": "せいぞん",
      "reading_variants": [
        "せいぞん"
      ],
      "romaji": "seizon",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "生存",
      "kanji_readings": [
        {
          "form": "生存",
          "reading": "せいぞん"
        }
      ],
      "examples": [
        {
          "ja": "事故の生存者が見つかりました。",
          "zh": "找到了事故的幸存者。",
          "focus": ["生存"],
          "zhFocus": ["幸存"]
        },
        {
          "ja": "水がなければ、人は生存できません。",
          "zh": "没有水，人就无法生存。",
          "focus": ["生存"],
          "zhFocus": ["生存"]
        },
        {
          "ja": "この動物は寒い地域でも生存できます。",
          "zh": "这种动物在寒冷地区也能生存。",
          "focus": ["生存"],
          "zhFocus": ["生存"]
        }
      ]
    },
    {
      "id": "n2-0261",
      "jlpt": "N2",
      "headword": "成分",
      "source_form": "成分",
      "variants": [
        "成分"
      ],
      "reading": "せいぶん",
      "reading_variants": [
        "せいぶん"
      ],
      "romaji": "seibun",
      "part_of_speech": "noun",
      "meaning_zh": "成分",
      "kanji_readings": [
        {
          "form": "成分",
          "reading": "せいぶん"
        }
      ],
      "examples": [
        {
          "ja": "この薬の成分を調べました。",
          "zh": "查了这种药的成分。",
          "focus": ["成分"],
          "zhFocus": ["成分"]
        },
        {
          "ja": "食品の成分を見てから買います。",
          "zh": "看了食品的成分再买。",
          "focus": ["成分"],
          "zhFocus": ["成分"]
        },
        {
          "ja": "この化粧品は自然の成分でできています。",
          "zh": "这款化妆品是用天然成分制成的。",
          "focus": ["成分"],
          "zhFocus": ["成分"]
        }
      ]
    },
    {
      "id": "n2-0262",
      "jlpt": "N2",
      "headword": "先端",
      "source_form": "先端",
      "variants": [
        "先端"
      ],
      "reading": "せんたん",
      "reading_variants": [
        "せんたん"
      ],
      "romaji": "sentan",
      "part_of_speech": "noun",
      "meaning_zh": "尖端；前端；（时代、技术的）最前沿",
      "senses_zh": [
        "尖端；前端",
        "（时代、技术的）最前沿"
      ],
      "kanji_readings": [
        {
          "form": "先端",
          "reading": "せんたん"
        }
      ],
      "examples": [
        {
          "ja": "鉛筆の先端が折れました。",
          "zh": "铅笔的尖端断了。",
          "focus": ["先端"],
          "zhFocus": ["尖端"]
        },
        {
          "ja": "棒の先端に旗を付けました。",
          "zh": "在棍子的前端挂上了旗子。",
          "focus": ["先端"],
          "zhFocus": ["前端"]
        },
        {
          "ja": "彼の会社は技術の先端を行っています。",
          "zh": "他的公司走在技术的最前沿。",
          "focus": ["先端"],
          "zhFocus": ["最前沿"]
        }
      ]
    },
    {
      "id": "n2-0263",
      "jlpt": "N2",
      "headword": "全般",
      "source_form": "全般",
      "variants": [
        "全般"
      ],
      "reading": "ぜんぱん",
      "reading_variants": [
        "ぜんぱん"
      ],
      "romaji": "zenpan",
      "part_of_speech": "noun",
      "meaning_zh": "全面；整体；总体",
      "kanji_readings": [
        {
          "form": "全般",
          "reading": "ぜんぱん"
        }
      ],
      "examples": [
        {
          "ja": "日本文化全般に興味があります。",
          "zh": "对日本文化整体都感兴趣。",
          "focus": ["全般"],
          "zhFocus": ["整体"]
        },
        {
          "ja": "仕事全般について説明します。",
          "zh": "就工作的整体情况进行说明。",
          "focus": ["全般"],
          "zhFocus": ["整体"]
        },
        {
          "ja": "全般的に、今年の成績はよかったです。",
          "zh": "总体来说，今年的成绩不错。",
          "focus": ["全般"],
          "zhFocus": ["总体"]
        }
      ]
    },
    {
      "id": "n2-0264",
      "jlpt": "N2",
      "headword": "倉庫",
      "source_form": "倉庫",
      "variants": [
        "倉庫"
      ],
      "reading": "そうこ",
      "reading_variants": [
        "そうこ"
      ],
      "romaji": "souko",
      "part_of_speech": "noun",
      "meaning_zh": "仓库",
      "kanji_readings": [
        {
          "form": "倉庫",
          "reading": "そうこ"
        }
      ],
      "examples": [
        {
          "ja": "古い家具を倉庫にしまいました。",
          "zh": "把旧家具收进了仓库。",
          "focus": ["倉庫"],
          "zhFocus": ["仓库"]
        },
        {
          "ja": "この倉庫には米が保管されています。",
          "zh": "这个仓库里保管着大米。",
          "focus": ["倉庫"],
          "zhFocus": ["仓库"]
        },
        {
          "ja": "倉庫で荷物を運ぶ仕事をしています。",
          "zh": "在仓库做搬运货物的工作。",
          "focus": ["倉庫"],
          "zhFocus": ["仓库"]
        }
      ]
    },
    {
      "id": "n2-0265",
      "jlpt": "N2",
      "headword": "大工",
      "source_form": "大工",
      "variants": [
        "大工"
      ],
      "reading": "だいく",
      "reading_variants": [
        "だいく"
      ],
      "romaji": "daiku",
      "part_of_speech": "noun",
      "meaning_zh": "木匠；木工",
      "kanji_readings": [
        {
          "form": "大工",
          "reading": "だいく"
        }
      ],
      "examples": [
        {
          "ja": "父は大工です。",
          "zh": "爸爸是木匠。",
          "focus": ["大工"],
          "zhFocus": ["木匠"]
        },
        {
          "ja": "大工さんが家を建てています。",
          "zh": "木匠师傅正在盖房子。",
          "focus": ["大工"],
          "zhFocus": ["木匠"]
        },
        {
          "ja": "大工の仕事には体力が必要です。",
          "zh": "木工活需要体力。",
          "focus": ["大工"],
          "zhFocus": ["木工"]
        }
      ]
    },
    {
      "id": "n2-0266",
      "jlpt": "N2",
      "headword": "体系",
      "source_form": "体系",
      "variants": [
        "体系"
      ],
      "reading": "たいけい",
      "reading_variants": [
        "たいけい"
      ],
      "romaji": "taikei",
      "part_of_speech": "noun",
      "meaning_zh": "体系；系统",
      "kanji_readings": [
        {
          "form": "体系",
          "reading": "たいけい"
        }
      ],
      "examples": [
        {
          "ja": "日本語の文法の体系を学びます。",
          "zh": "学习日语语法的体系。",
          "focus": ["体系"],
          "zhFocus": ["体系"]
        },
        {
          "ja": "知識を体系的に整理しました。",
          "zh": "系统地整理了知识。",
          "focus": ["体系"],
          "zhFocus": ["系统"]
        },
        {
          "ja": "新しい給料の体系が導入されました。",
          "zh": "引入了新的工资体系。",
          "focus": ["体系"],
          "zhFocus": ["体系"]
        }
      ]
    },
    {
      "id": "n2-0267",
      "jlpt": "N2",
      "headword": "体操",
      "source_form": "体操",
      "variants": [
        "体操"
      ],
      "reading": "たいそう",
      "reading_variants": [
        "たいそう"
      ],
      "romaji": "taisou",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "体操；做操",
      "kanji_readings": [
        {
          "form": "体操",
          "reading": "たいそう"
        }
      ],
      "examples": [
        {
          "ja": "毎朝ラジオ体操をしています。",
          "zh": "每天早上做广播体操。",
          "focus": ["体操"],
          "zhFocus": ["体操"]
        },
        {
          "ja": "運動の前に体操をしましょう。",
          "zh": "运动前先做做操吧。",
          "focus": ["体操"],
          "zhFocus": ["做操"]
        },
        {
          "ja": "妹は体操の選手です。",
          "zh": "妹妹是体操运动员。",
          "focus": ["体操"],
          "zhFocus": ["体操"]
        }
      ]
    },
    {
      "id": "n2-0268",
      "jlpt": "N2",
      "headword": "通知",
      "source_form": "通知",
      "variants": [
        "通知"
      ],
      "reading": "つうち",
      "reading_variants": [
        "つうち"
      ],
      "romaji": "tsuuchi",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "通知",
      "kanji_readings": [
        {
          "form": "通知",
          "reading": "つうち"
        }
      ],
      "examples": [
        {
          "ja": "試験の結果は郵便で通知します。",
          "zh": "考试结果将通过邮寄通知。",
          "focus": ["通知"],
          "zhFocus": ["通知"]
        },
        {
          "ja": "大学から合格の通知が届きました。",
          "zh": "收到了大学的录取通知。",
          "focus": ["通知"],
          "zhFocus": ["通知"]
        },
        {
          "ja": "スマホの通知を切りました。",
          "zh": "关掉了手机的通知。",
          "focus": ["通知"],
          "zhFocus": ["通知"]
        }
      ]
    },
    {
      "id": "n2-0269",
      "jlpt": "N2",
      "headword": "通訳",
      "source_form": "通訳",
      "variants": [
        "通訳"
      ],
      "reading": "つうやく",
      "reading_variants": [
        "つうやく"
      ],
      "romaji": "tsuuyaku",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "口译；口译员；翻译",
      "senses_zh": [
        "口译",
        "口译员；翻译"
      ],
      "kanji_readings": [
        {
          "form": "通訳",
          "reading": "つうやく"
        }
      ],
      "examples": [
        {
          "ja": "社長の話を英語に通訳しました。",
          "zh": "把社长的话口译成了英语。",
          "focus": ["通訳"],
          "zhFocus": ["口译"]
        },
        {
          "ja": "彼女は国際会議の通訳をしています。",
          "zh": "她在国际会议上做口译。",
          "focus": ["通訳"],
          "zhFocus": ["口译"]
        },
        {
          "ja": "通訳がいなかったので、話が通じませんでした。",
          "zh": "因为没有翻译，话说不通。",
          "focus": ["通訳"],
          "zhFocus": ["翻译"]
        }
      ]
    },
    {
      "id": "n2-0270",
      "jlpt": "N2",
      "headword": "特色",
      "source_form": "特色",
      "variants": [
        "特色"
      ],
      "reading": "とくしょく",
      "reading_variants": [
        "とくしょく"
      ],
      "romaji": "tokushoku",
      "part_of_speech": "noun",
      "meaning_zh": "特色；特点",
      "kanji_readings": [
        {
          "form": "特色",
          "reading": "とくしょく"
        }
      ],
      "examples": [
        {
          "ja": "この町の特色は古い建物です。",
          "zh": "这个小镇的特色是古老的建筑。",
          "focus": ["特色"],
          "zhFocus": ["特色"]
        },
        {
          "ja": "それぞれの学校に特色があります。",
          "zh": "每所学校都有各自的特点。",
          "focus": ["特色"],
          "zhFocus": ["特点"]
        },
        {
          "ja": "地方の特色を生かした料理です。",
          "zh": "这是发挥了地方特色的菜。",
          "focus": ["特色"],
          "zhFocus": ["特色"]
        }
      ]
    },
    {
      "id": "n2-0271",
      "jlpt": "N2",
      "headword": "なる",
      "source_form": "生る",
      "variants": [
        "なる",
        "生る"
      ],
      "reading": "なる",
      "reading_variants": [
        "なる"
      ],
      "romaji": "naru",
      "part_of_speech": "verb",
      "meaning_zh": "（果实）结；结果",
      "kanji_readings": [
        {
          "form": "生る",
          "reading": "なる"
        }
      ],
      "examples": [
        {
          "ja": "庭の木にりんごがなりました。",
          "zh": "院子里的树结了苹果。",
          "focus": ["なり"],
          "zhFocus": ["结"]
        },
        {
          "ja": "今年は柿がたくさんなっています。",
          "zh": "今年柿子结了很多。",
          "focus": ["なっ"],
          "zhFocus": ["结"]
        },
        {
          "ja": "この木は実がなるまで何年もかかります。",
          "zh": "这棵树要好几年才结果。",
          "focus": ["なる"],
          "zhFocus": ["结果"]
        }
      ],
      "note_zh": "本条只讲“（果实）结出”的「なる」，汉字写作「生る」，一般写假名；表示“成为、变成”的「なる」已在 N5 学习。"
    },
    {
      "id": "n2-0272",
      "jlpt": "N2",
      "headword": "南米",
      "source_form": "南米",
      "variants": [
        "南米"
      ],
      "reading": "なんべい",
      "reading_variants": [
        "なんべい"
      ],
      "romaji": "nanbei",
      "part_of_speech": "noun",
      "meaning_zh": "南美",
      "kanji_readings": [
        {
          "form": "南米",
          "reading": "なんべい"
        }
      ],
      "examples": [
        {
          "ja": "去年、南米を旅行しました。",
          "zh": "去年去南美旅行了。",
          "focus": ["南米"],
          "zhFocus": ["南美"]
        },
        {
          "ja": "ブラジルは南米で一番大きい国です。",
          "zh": "巴西是南美最大的国家。",
          "focus": ["南米"],
          "zhFocus": ["南美"]
        },
        {
          "ja": "南米の音楽が好きです。",
          "zh": "喜欢南美的音乐。",
          "focus": ["南米"],
          "zhFocus": ["南美"]
        }
      ]
    },
    {
      "id": "n2-0273",
      "jlpt": "N2",
      "headword": "濃度",
      "source_form": "濃度",
      "variants": [
        "濃度"
      ],
      "reading": "のうど",
      "reading_variants": [
        "のうど"
      ],
      "romaji": "noudo",
      "part_of_speech": "noun",
      "meaning_zh": "浓度",
      "kanji_readings": [
        {
          "form": "濃度",
          "reading": "のうど"
        }
      ],
      "examples": [
        {
          "ja": "海水の塩分の濃度を測りました。",
          "zh": "测量了海水的盐分浓度。",
          "focus": ["濃度"],
          "zhFocus": ["浓度"]
        },
        {
          "ja": "薬の濃度が高すぎると危険です。",
          "zh": "药的浓度太高会很危险。",
          "focus": ["濃度"],
          "zhFocus": ["浓度"]
        },
        {
          "ja": "この洗剤は濃度が高いので、水で薄めて使います。",
          "zh": "这种洗涤剂浓度高，要兑水稀释后使用。",
          "focus": ["濃度"],
          "zhFocus": ["浓度"]
        }
      ]
    },
    {
      "id": "n2-0274",
      "jlpt": "N2",
      "headword": "広げる",
      "source_form": "広げる",
      "variants": [
        "広げる"
      ],
      "reading": "ひろげる",
      "reading_variants": [
        "ひろげる"
      ],
      "romaji": "hirogeru",
      "part_of_speech": "verb",
      "meaning_zh": "摊开；展开；扩大；扩展",
      "senses_zh": [
        "摊开；展开",
        "扩大；扩展"
      ],
      "kanji_readings": [
        {
          "form": "広げる",
          "reading": "ひろげる"
        }
      ],
      "examples": [
        {
          "ja": "机の上に地図を広げました。",
          "zh": "在桌上摊开了地图。",
          "focus": ["広げ"],
          "zhFocus": ["摊开"]
        },
        {
          "ja": "鳥が羽を広げて飛びました。",
          "zh": "鸟展开翅膀飞走了。",
          "focus": ["広げ"],
          "zhFocus": ["展开"]
        },
        {
          "ja": "会社は海外に事業を広げています。",
          "zh": "公司正在向海外扩展业务。",
          "focus": ["広げ"],
          "zhFocus": ["扩展"]
        }
      ]
    },
    {
      "id": "n2-0275",
      "jlpt": "N2",
      "headword": "堀",
      "source_form": "堀",
      "variants": [
        "堀"
      ],
      "reading": "ほり",
      "reading_variants": [
        "ほり"
      ],
      "romaji": "hori",
      "part_of_speech": "noun",
      "meaning_zh": "护城河；沟渠",
      "kanji_readings": [
        {
          "form": "堀",
          "reading": "ほり"
        }
      ],
      "examples": [
        {
          "ja": "お城の周りに堀があります。",
          "zh": "城堡周围有护城河。",
          "focus": ["堀"],
          "zhFocus": ["护城河"]
        },
        {
          "ja": "堀の水の中を魚が泳いでいます。",
          "zh": "护城河的水里有鱼在游。",
          "focus": ["堀"],
          "zhFocus": ["护城河"]
        },
        {
          "ja": "昔は堀が町を守っていました。",
          "zh": "以前护城河守护着城镇。",
          "focus": ["堀"],
          "zhFocus": ["护城河"]
        }
      ]
    },
    {
      "id": "n2-0276",
      "jlpt": "N2",
      "headword": "矛盾",
      "source_form": "矛盾",
      "variants": [
        "矛盾"
      ],
      "reading": "むじゅん",
      "reading_variants": [
        "むじゅん"
      ],
      "romaji": "mujun",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "矛盾",
      "kanji_readings": [
        {
          "form": "矛盾",
          "reading": "むじゅん"
        }
      ],
      "examples": [
        {
          "ja": "彼の話には矛盾があります。",
          "zh": "他的话里有矛盾。",
          "focus": ["矛盾"],
          "zhFocus": ["矛盾"]
        },
        {
          "ja": "言うこととやることが矛盾しています。",
          "zh": "说的和做的互相矛盾。",
          "focus": ["矛盾"],
          "zhFocus": ["矛盾"]
        },
        {
          "ja": "この二つの意見は矛盾していません。",
          "zh": "这两个意见并不矛盾。",
          "focus": ["矛盾"],
          "zhFocus": ["矛盾"]
        }
      ]
    },
    {
      "id": "n2-0277",
      "jlpt": "N2",
      "headword": "面接",
      "source_form": "面接",
      "variants": [
        "面接"
      ],
      "reading": "めんせつ",
      "reading_variants": [
        "めんせつ"
      ],
      "romaji": "mensetsu",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "面试；面谈",
      "kanji_readings": [
        {
          "form": "面接",
          "reading": "めんせつ"
        }
      ],
      "examples": [
        {
          "ja": "明日、会社の面接があります。",
          "zh": "明天有公司的面试。",
          "focus": ["面接"],
          "zhFocus": ["面试"]
        },
        {
          "ja": "面接ではっきり話せませんでした。",
          "zh": "面试时没能说清楚。",
          "focus": ["面接"],
          "zhFocus": ["面试"]
        },
        {
          "ja": "先生が学生一人一人と面接しました。",
          "zh": "老师和学生逐一进行了面谈。",
          "focus": ["面接"],
          "zhFocus": ["面谈"]
        }
      ]
    },
    {
      "id": "n2-0278",
      "jlpt": "N2",
      "headword": "木材",
      "source_form": "木材",
      "variants": [
        "木材"
      ],
      "reading": "もくざい",
      "reading_variants": [
        "もくざい"
      ],
      "romaji": "mokuzai",
      "part_of_speech": "noun",
      "meaning_zh": "木材；木料",
      "kanji_readings": [
        {
          "form": "木材",
          "reading": "もくざい"
        }
      ],
      "examples": [
        {
          "ja": "この家は木材で作られています。",
          "zh": "这座房子是用木材建造的。",
          "focus": ["木材"],
          "zhFocus": ["木材"]
        },
        {
          "ja": "山から木材を運び出しました。",
          "zh": "从山里运出了木料。",
          "focus": ["木材"],
          "zhFocus": ["木料"]
        },
        {
          "ja": "木材の値段が上がっています。",
          "zh": "木材的价格在上涨。",
          "focus": ["木材"],
          "zhFocus": ["木材"]
        }
      ]
    },
    {
      "id": "n2-0279",
      "jlpt": "N2",
      "headword": "役者",
      "source_form": "役者",
      "variants": [
        "役者"
      ],
      "reading": "やくしゃ",
      "reading_variants": [
        "やくしゃ"
      ],
      "romaji": "yakusha",
      "part_of_speech": "noun",
      "meaning_zh": "演员（多指戏剧演员）",
      "kanji_readings": [
        {
          "form": "役者",
          "reading": "やくしゃ"
        }
      ],
      "examples": [
        {
          "ja": "彼は有名な歌舞伎の役者です。",
          "zh": "他是有名的歌舞伎演员。",
          "focus": ["役者"],
          "zhFocus": ["演员"]
        },
        {
          "ja": "役者になるのが子供のころの夢でした。",
          "zh": "当演员是我小时候的梦想。",
          "focus": ["役者"],
          "zhFocus": ["演员"]
        },
        {
          "ja": "あの役者は演技が上手です。",
          "zh": "那个演员演技很好。",
          "focus": ["役者"],
          "zhFocus": ["演员"]
        }
      ]
    },
    {
      "id": "n2-0280",
      "jlpt": "N2",
      "headword": "有料",
      "source_form": "有料",
      "variants": [
        "有料"
      ],
      "reading": "ゆうりょう",
      "reading_variants": [
        "ゆうりょう"
      ],
      "romaji": "yuuryou",
      "part_of_speech": "noun",
      "meaning_zh": "收费；付费",
      "kanji_readings": [
        {
          "form": "有料",
          "reading": "ゆうりょう"
        }
      ],
      "examples": [
        {
          "ja": "この駐車場は有料です。",
          "zh": "这个停车场是收费的。",
          "focus": ["有料"],
          "zhFocus": ["收费"]
        },
        {
          "ja": "レジ袋は有料になりました。",
          "zh": "购物袋变成收费的了。",
          "focus": ["有料"],
          "zhFocus": ["收费"]
        },
        {
          "ja": "有料のサービスを申し込みました。",
          "zh": "申请了付费服务。",
          "focus": ["有料"],
          "zhFocus": ["付费"]
        }
      ],
      "note_zh": "与「無料（免费）」相对。"
    },
    {
      "id": "n2-0281",
      "jlpt": "N2",
      "headword": "用語",
      "source_form": "用語",
      "variants": [
        "用語"
      ],
      "reading": "ようご",
      "reading_variants": [
        "ようご"
      ],
      "romaji": "yougo",
      "part_of_speech": "noun",
      "meaning_zh": "用语；术语",
      "kanji_readings": [
        {
          "form": "用語",
          "reading": "ようご"
        }
      ],
      "examples": [
        {
          "ja": "この本は専門用語が多くて難しいです。",
          "zh": "这本书专业术语多，很难。",
          "focus": ["用語"],
          "zhFocus": ["术语"]
        },
        {
          "ja": "医学の用語を覚えるのは大変です。",
          "zh": "记医学术语很辛苦。",
          "focus": ["用語"],
          "zhFocus": ["术语"]
        },
        {
          "ja": "子供にも分かる用語で説明してください。",
          "zh": "请用孩子也能听懂的用语来解释。",
          "focus": ["用語"],
          "zhFocus": ["用语"]
        }
      ]
    },
    {
      "id": "n2-0282",
      "jlpt": "N2",
      "headword": "幼稚園",
      "source_form": "幼稚園",
      "variants": [
        "幼稚園"
      ],
      "reading": "ようちえん",
      "reading_variants": [
        "ようちえん"
      ],
      "romaji": "youchien",
      "part_of_speech": "noun",
      "meaning_zh": "幼儿园",
      "kanji_readings": [
        {
          "form": "幼稚園",
          "reading": "ようちえん"
        }
      ],
      "examples": [
        {
          "ja": "娘は幼稚園に通っています。",
          "zh": "女儿在上幼儿园。",
          "focus": ["幼稚園"],
          "zhFocus": ["幼儿园"]
        },
        {
          "ja": "幼稚園の先生になりたいです。",
          "zh": "想当幼儿园老师。",
          "focus": ["幼稚園"],
          "zhFocus": ["幼儿园"]
        },
        {
          "ja": "毎朝、子供を幼稚園まで送ります。",
          "zh": "每天早上送孩子去幼儿园。",
          "focus": ["幼稚園"],
          "zhFocus": ["幼儿园"]
        }
      ]
    },
    {
      "id": "n2-0283",
      "jlpt": "N2",
      "headword": "寮",
      "source_form": "寮",
      "variants": [
        "寮"
      ],
      "reading": "りょう",
      "reading_variants": [
        "りょう"
      ],
      "romaji": "ryou",
      "part_of_speech": "noun",
      "meaning_zh": "宿舍",
      "kanji_readings": [
        {
          "form": "寮",
          "reading": "りょう"
        }
      ],
      "examples": [
        {
          "ja": "大学の寮に住んでいます。",
          "zh": "住在大学的宿舍里。",
          "focus": ["寮"],
          "zhFocus": ["宿舍"]
        },
        {
          "ja": "会社の寮は駅から近いです。",
          "zh": "公司的宿舍离车站很近。",
          "focus": ["寮"],
          "zhFocus": ["宿舍"]
        },
        {
          "ja": "寮の食事はおいしいです。",
          "zh": "宿舍的伙食很好吃。",
          "focus": ["寮"],
          "zhFocus": ["宿舍"]
        }
      ]
    },
    {
      "id": "n2-0284",
      "jlpt": "N2",
      "headword": "押さえる",
      "source_form": "押える",
      "variants": [
        "押さえる",
        "押える"
      ],
      "reading": "おさえる",
      "reading_variants": [
        "おさえる"
      ],
      "romaji": "osaeru",
      "part_of_speech": "verb",
      "meaning_zh": "按住；压住；捂住；抓住（要点、证据）",
      "senses_zh": [
        "按住；压住；捂住",
        "抓住（要点、证据）"
      ],
      "kanji_readings": [
        {
          "form": "押さえる",
          "reading": "おさえる"
        },
        {
          "form": "押える",
          "reading": "おさえる"
        }
      ],
      "examples": [
        {
          "ja": "風で飛ばないように紙を押さえてください。",
          "zh": "请按住纸，别让风吹走。",
          "focus": ["押さえ"],
          "zhFocus": ["按住"]
        },
        {
          "ja": "彼は痛そうにおなかを押さえていました。",
          "zh": "他好像很疼，捂着肚子。",
          "focus": ["押さえ"],
          "zhFocus": ["捂着"]
        },
        {
          "ja": "説明のポイントを押さえておきましょう。",
          "zh": "先把说明的要点抓住吧。",
          "focus": ["押さえ"],
          "zhFocus": ["抓住"]
        }
      ],
      "note_zh": "表示“抑制、控制（感情、价格等）”时一般写作「抑える」。"
    },
    {
      "id": "n2-0285",
      "jlpt": "N2",
      "headword": "拡充",
      "source_form": "拡充",
      "variants": [
        "拡充"
      ],
      "reading": "かくじゅう",
      "reading_variants": [
        "かくじゅう"
      ],
      "romaji": "kakujuu",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "扩充",
      "kanji_readings": [
        {
          "form": "拡充",
          "reading": "かくじゅう"
        }
      ],
      "examples": [
        {
          "ja": "市は保育園を拡充する計画です。",
          "zh": "市里计划扩充保育园。",
          "focus": ["拡充"],
          "zhFocus": ["扩充"]
        },
        {
          "ja": "図書館の設備が拡充されました。",
          "zh": "图书馆的设备得到了扩充。",
          "focus": ["拡充"],
          "zhFocus": ["扩充"]
        },
        {
          "ja": "サービスの拡充を求める声が多いです。",
          "zh": "要求扩充服务的呼声很多。",
          "focus": ["拡充"],
          "zhFocus": ["扩充"]
        }
      ]
    },
    {
      "id": "n2-0286",
      "jlpt": "N2",
      "headword": "貸し出し",
      "source_form": "貸し出し",
      "variants": [
        "貸し出し",
        "貸出"
      ],
      "reading": "かしだし",
      "reading_variants": [
        "かしだし"
      ],
      "romaji": "kashidashi",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "出借；借出",
      "kanji_readings": [
        {
          "form": "貸し出し",
          "reading": "かしだし"
        },
        {
          "form": "貸出",
          "reading": "かしだし"
        }
      ],
      "examples": [
        {
          "ja": "図書館で本の貸し出しの手続きをしました。",
          "zh": "在图书馆办理了借书手续。",
          "focus": ["貸し出し"],
          "zhFocus": ["借书"]
        },
        {
          "ja": "傘の貸し出しを始めました。",
          "zh": "开始出借雨伞了。",
          "focus": ["貸し出し"],
          "zhFocus": ["出借"]
        },
        {
          "ja": "この資料は貸し出しできません。",
          "zh": "这份资料不能外借。",
          "focus": ["貸し出し"],
          "zhFocus": ["外借"]
        }
      ]
    },
    {
      "id": "n2-0287",
      "jlpt": "N2",
      "headword": "過失",
      "source_form": "過失",
      "variants": [
        "過失"
      ],
      "reading": "かしつ",
      "reading_variants": [
        "かしつ"
      ],
      "romaji": "kashitsu",
      "part_of_speech": "noun",
      "meaning_zh": "过失；过错",
      "kanji_readings": [
        {
          "form": "過失",
          "reading": "かしつ"
        }
      ],
      "examples": [
        {
          "ja": "事故は運転手の過失によるものでした。",
          "zh": "事故是由司机的过失造成的。",
          "focus": ["過失"],
          "zhFocus": ["过失"]
        },
        {
          "ja": "自分の過失を認めて謝りました。",
          "zh": "承认了自己的过错并道了歉。",
          "focus": ["過失"],
          "zhFocus": ["过错"]
        },
        {
          "ja": "これは会社の過失ではありません。",
          "zh": "这不是公司的过失。",
          "focus": ["過失"],
          "zhFocus": ["过失"]
        }
      ]
    },
    {
      "id": "n2-0288",
      "jlpt": "N2",
      "headword": "過剰",
      "source_form": "過剰",
      "variants": [
        "過剰"
      ],
      "reading": "かじょう",
      "reading_variants": [
        "かじょう"
      ],
      "romaji": "kajou",
      "part_of_speech": "na-adjective/noun",
      "meaning_zh": "过剩；过度",
      "kanji_readings": [
        {
          "form": "過剰",
          "reading": "かじょう"
        }
      ],
      "examples": [
        {
          "ja": "商品が過剰に作られました。",
          "zh": "商品生产过剩了。",
          "focus": ["過剰"],
          "zhFocus": ["过剩"]
        },
        {
          "ja": "過剰な期待はしないでください。",
          "zh": "请不要抱过度的期待。",
          "focus": ["過剰"],
          "zhFocus": ["过度"]
        },
        {
          "ja": "薬の飲みすぎは体に過剰な負担をかけます。",
          "zh": "吃药过量会给身体带来过度的负担。",
          "focus": ["過剰"],
          "zhFocus": ["过度"]
        }
      ]
    },
    {
      "id": "n2-0289",
      "jlpt": "N2",
      "headword": "活力",
      "source_form": "活力",
      "variants": [
        "活力"
      ],
      "reading": "かつりょく",
      "reading_variants": [
        "かつりょく"
      ],
      "romaji": "katsuryoku",
      "part_of_speech": "noun",
      "meaning_zh": "活力",
      "kanji_readings": [
        {
          "form": "活力",
          "reading": "かつりょく"
        }
      ],
      "examples": [
        {
          "ja": "若い人が町に活力を与えています。",
          "zh": "年轻人给城镇带来了活力。",
          "focus": ["活力"],
          "zhFocus": ["活力"]
        },
        {
          "ja": "朝ご飯は一日の活力になります。",
          "zh": "早饭是一天的活力来源。",
          "focus": ["活力"],
          "zhFocus": ["活力"]
        },
        {
          "ja": "この会社は活力にあふれています。",
          "zh": "这家公司充满活力。",
          "focus": ["活力"],
          "zhFocus": ["活力"]
        }
      ]
    },
    {
      "id": "n2-0290",
      "jlpt": "N2",
      "headword": "教養",
      "source_form": "教養",
      "variants": [
        "教養"
      ],
      "reading": "きょうよう",
      "reading_variants": [
        "きょうよう"
      ],
      "romaji": "kyouyou",
      "part_of_speech": "noun",
      "meaning_zh": "教养；修养；学识",
      "kanji_readings": [
        {
          "form": "教養",
          "reading": "きょうよう"
        }
      ],
      "examples": [
        {
          "ja": "彼女は教養のある人です。",
          "zh": "她是个有教养的人。",
          "focus": ["教養"],
          "zhFocus": ["教养"]
        },
        {
          "ja": "本を読んで教養を身につけたいです。",
          "zh": "想通过读书增长学识。",
          "focus": ["教養"],
          "zhFocus": ["学识"]
        },
        {
          "ja": "大学の一年生は教養の授業が多いです。",
          "zh": "大学一年级的通识课很多。",
          "focus": ["教養"],
          "zhFocus": ["通识"]
        }
      ]
    },
    {
      "id": "n2-0291",
      "jlpt": "N2",
      "headword": "崩れる",
      "source_form": "崩れる",
      "variants": [
        "崩れる"
      ],
      "reading": "くずれる",
      "reading_variants": [
        "くずれる"
      ],
      "romaji": "kuzureru",
      "part_of_speech": "verb",
      "meaning_zh": "崩塌；倒塌；（形状、状态）走样；（天气）变坏",
      "senses_zh": [
        "崩塌；倒塌",
        "（形状、状态）走样",
        "（天气）变坏"
      ],
      "kanji_readings": [
        {
          "form": "崩れる",
          "reading": "くずれる"
        }
      ],
      "examples": [
        {
          "ja": "大雨で山が崩れました。",
          "zh": "因为大雨，山体崩塌了。",
          "focus": ["崩れ"],
          "zhFocus": ["崩塌"]
        },
        {
          "ja": "地震で古い家が崩れました。",
          "zh": "因为地震，旧房子倒塌了。",
          "focus": ["崩れ"],
          "zhFocus": ["倒塌"]
        },
        {
          "ja": "午後から天気が崩れるそうです。",
          "zh": "听说下午开始天气会变坏。",
          "focus": ["崩れる"],
          "zhFocus": ["变坏"]
        }
      ]
    },
    {
      "id": "n2-0292",
      "jlpt": "N2",
      "headword": "見学",
      "source_form": "見学",
      "variants": [
        "見学"
      ],
      "reading": "けんがく",
      "reading_variants": [
        "けんがく"
      ],
      "romaji": "kengaku",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "参观；参观学习",
      "kanji_readings": [
        {
          "form": "見学",
          "reading": "けんがく"
        }
      ],
      "examples": [
        {
          "ja": "工場を見学しました。",
          "zh": "参观了工厂。",
          "focus": ["見学"],
          "zhFocus": ["参观"]
        },
        {
          "ja": "社会科の見学で新聞社に行きました。",
          "zh": "社会课参观学习时去了报社。",
          "focus": ["見学"],
          "zhFocus": ["参观学习"]
        },
        {
          "ja": "授業を見学してもいいですか。",
          "zh": "可以旁听一下课吗？",
          "focus": ["見学"],
          "zhFocus": ["旁听"]
        }
      ]
    },
    {
      "id": "n2-0293",
      "jlpt": "N2",
      "headword": "強引",
      "source_form": "強引",
      "variants": [
        "強引"
      ],
      "reading": "ごういん",
      "reading_variants": [
        "ごういん"
      ],
      "romaji": "gouin",
      "part_of_speech": "na-adjective",
      "meaning_zh": "强行；强硬；蛮横",
      "kanji_readings": [
        {
          "form": "強引",
          "reading": "ごういん"
        }
      ],
      "examples": [
        {
          "ja": "彼は強引に話を進めました。",
          "zh": "他强行推进了话题。",
          "focus": ["強引"],
          "zhFocus": ["强行"]
        },
        {
          "ja": "強引なやり方では、人はついてきません。",
          "zh": "用强硬的做法，别人不会跟随你。",
          "focus": ["強引"],
          "zhFocus": ["强硬"]
        },
        {
          "ja": "セールスの人が強引で困りました。",
          "zh": "推销员很蛮横，真让人头疼。",
          "focus": ["強引"],
          "zhFocus": ["蛮横"]
        }
      ]
    },
    {
      "id": "n2-0294",
      "jlpt": "N2",
      "headword": "工芸",
      "source_form": "工芸",
      "variants": [
        "工芸"
      ],
      "reading": "こうげい",
      "reading_variants": [
        "こうげい"
      ],
      "romaji": "kougei",
      "part_of_speech": "noun",
      "meaning_zh": "工艺",
      "kanji_readings": [
        {
          "form": "工芸",
          "reading": "こうげい"
        }
      ],
      "examples": [
        {
          "ja": "この町は伝統的な工芸で有名です。",
          "zh": "这个小镇以传统工艺闻名。",
          "focus": ["工芸"],
          "zhFocus": ["工艺"]
        },
        {
          "ja": "工芸の展示会を見に行きました。",
          "zh": "去看了工艺展览会。",
          "focus": ["工芸"],
          "zhFocus": ["工艺"]
        },
        {
          "ja": "彼は大学で工芸を学んでいます。",
          "zh": "他在大学学习工艺。",
          "focus": ["工芸"],
          "zhFocus": ["工艺"]
        }
      ]
    },
    {
      "id": "n2-0295",
      "jlpt": "N2",
      "headword": "校舎",
      "source_form": "校舎",
      "variants": [
        "校舎"
      ],
      "reading": "こうしゃ",
      "reading_variants": [
        "こうしゃ"
      ],
      "romaji": "kousha",
      "part_of_speech": "noun",
      "meaning_zh": "校舍",
      "kanji_readings": [
        {
          "form": "校舎",
          "reading": "こうしゃ"
        }
      ],
      "examples": [
        {
          "ja": "新しい校舎が完成しました。",
          "zh": "新的校舍建成了。",
          "focus": ["校舎"],
          "zhFocus": ["校舍"]
        },
        {
          "ja": "古い校舎を大切に使っています。",
          "zh": "一直爱惜地使用着旧校舍。",
          "focus": ["校舎"],
          "zhFocus": ["校舍"]
        },
        {
          "ja": "校舎の中を走ってはいけません。",
          "zh": "不能在校舍里奔跑。",
          "focus": ["校舎"],
          "zhFocus": ["校舍"]
        }
      ]
    },
    {
      "id": "n2-0296",
      "jlpt": "N2",
      "headword": "後輩",
      "source_form": "後輩",
      "variants": [
        "後輩"
      ],
      "reading": "こうはい",
      "reading_variants": [
        "こうはい"
      ],
      "romaji": "kouhai",
      "part_of_speech": "noun",
      "meaning_zh": "后辈；晚辈；（学校的）学弟学妹",
      "kanji_readings": [
        {
          "form": "後輩",
          "reading": "こうはい"
        }
      ],
      "examples": [
        {
          "ja": "会社の後輩に仕事を教えています。",
          "zh": "在教公司的后辈做工作。",
          "focus": ["後輩"],
          "zhFocus": ["后辈"]
        },
        {
          "ja": "彼は高校の後輩です。",
          "zh": "他是我高中的学弟。",
          "focus": ["後輩"],
          "zhFocus": ["学弟"]
        },
        {
          "ja": "後輩に優しくしてください。",
          "zh": "请对晚辈好一点。",
          "focus": ["後輩"],
          "zhFocus": ["晚辈"]
        }
      ],
      "note_zh": "与「先輩（前辈）」相对。"
    },
    {
      "id": "n2-0297",
      "jlpt": "N2",
      "headword": "酸性",
      "source_form": "酸性",
      "variants": [
        "酸性"
      ],
      "reading": "さんせい",
      "reading_variants": [
        "さんせい"
      ],
      "romaji": "sansei",
      "part_of_speech": "noun",
      "meaning_zh": "酸性",
      "kanji_readings": [
        {
          "form": "酸性",
          "reading": "さんせい"
        }
      ],
      "examples": [
        {
          "ja": "レモンの汁は酸性です。",
          "zh": "柠檬汁是酸性的。",
          "focus": ["酸性"],
          "zhFocus": ["酸性"]
        },
        {
          "ja": "酸性の雨が森を枯らしています。",
          "zh": "酸雨正在使森林枯死。",
          "focus": ["酸性"],
          "zhFocus": ["酸"]
        },
        {
          "ja": "この土は酸性が強いです。",
          "zh": "这片土壤酸性很强。",
          "focus": ["酸性"],
          "zhFocus": ["酸性"]
        }
      ],
      "note_zh": "与「アルカリ性（碱性）」相对。"
    },
    {
      "id": "n2-0298",
      "jlpt": "N2",
      "headword": "寺院",
      "source_form": "寺院",
      "variants": [
        "寺院"
      ],
      "reading": "じいん",
      "reading_variants": [
        "じいん"
      ],
      "romaji": "jiin",
      "part_of_speech": "noun",
      "meaning_zh": "寺院",
      "kanji_readings": [
        {
          "form": "寺院",
          "reading": "じいん"
        }
      ],
      "examples": [
        {
          "ja": "京都には古い寺院がたくさんあります。",
          "zh": "京都有很多古老的寺院。",
          "focus": ["寺院"],
          "zhFocus": ["寺院"]
        },
        {
          "ja": "この寺院は観光客に人気があります。",
          "zh": "这座寺院很受游客欢迎。",
          "focus": ["寺院"],
          "zhFocus": ["寺院"]
        },
        {
          "ja": "寺院の中では静かにしてください。",
          "zh": "在寺院里请保持安静。",
          "focus": ["寺院"],
          "zhFocus": ["寺院"]
        }
      ]
    },
    {
      "id": "n2-0299",
      "jlpt": "N2",
      "headword": "司会",
      "source_form": "司会",
      "variants": [
        "司会"
      ],
      "reading": "しかい",
      "reading_variants": [
        "しかい"
      ],
      "romaji": "shikai",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "主持（会议、节目等）；主持人",
      "senses_zh": [
        "主持（会议、节目等）",
        "主持人"
      ],
      "kanji_readings": [
        {
          "form": "司会",
          "reading": "しかい"
        }
      ],
      "examples": [
        {
          "ja": "会議の司会を頼まれました。",
          "zh": "被拜托主持会议。",
          "focus": ["司会"],
          "zhFocus": ["主持"]
        },
        {
          "ja": "彼女は結婚式で司会をしました。",
          "zh": "她在婚礼上当了主持人。",
          "focus": ["司会"],
          "zhFocus": ["主持人"]
        },
        {
          "ja": "この番組の司会は有名な俳優です。",
          "zh": "这个节目的主持人是有名的演员。",
          "focus": ["司会"],
          "zhFocus": ["主持人"]
        }
      ]
    },
    {
      "id": "n2-0300",
      "jlpt": "N2",
      "headword": "実感",
      "source_form": "実感",
      "variants": [
        "実感"
      ],
      "reading": "じっかん",
      "reading_variants": [
        "じっかん"
      ],
      "romaji": "jikkan",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "切身感受；真实感；切实感到",
      "kanji_readings": [
        {
          "form": "実感",
          "reading": "じっかん"
        }
      ],
      "examples": [
        {
          "ja": "優勝した実感がまだありません。",
          "zh": "还没有夺冠的真实感。",
          "focus": ["実感"],
          "zhFocus": ["真实感"]
        },
        {
          "ja": "一人で暮らして、親のありがたさを実感しました。",
          "zh": "一个人生活后，切实感受到了父母的可贵。",
          "focus": ["実感"],
          "zhFocus": ["切实感受"]
        },
        {
          "ja": "景気がよくなったという実感はありません。",
          "zh": "感受不到经济变好了。",
          "focus": ["実感"],
          "zhFocus": ["感受"]
        }
      ]
    },
    {
      "id": "n2-0301",
      "jlpt": "N2",
      "headword": "執筆",
      "source_form": "執筆",
      "variants": [
        "執筆"
      ],
      "reading": "しっぴつ",
      "reading_variants": [
        "しっぴつ"
      ],
      "romaji": "shippitsu",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "执笔；写作；撰写",
      "kanji_readings": [
        {
          "form": "執筆",
          "reading": "しっぴつ"
        }
      ],
      "examples": [
        {
          "ja": "先生は今、新しい本を執筆しています。",
          "zh": "老师现在正在撰写新书。",
          "focus": ["執筆"],
          "zhFocus": ["撰写"]
        },
        {
          "ja": "この記事の執筆にはずいぶん時間がかかりました。",
          "zh": "写这篇文章花了很长时间。",
          "focus": ["執筆"],
          "zhFocus": ["写"]
        },
        {
          "ja": "彼は雑誌の執筆を頼まれました。",
          "zh": "他被约请给杂志写稿。",
          "focus": ["執筆"],
          "zhFocus": ["写稿"]
        }
      ]
    },
    {
      "id": "n2-0302",
      "jlpt": "N2",
      "headword": "住居",
      "source_form": "住居",
      "variants": [
        "住居"
      ],
      "reading": "じゅうきょ",
      "reading_variants": [
        "じゅうきょ"
      ],
      "romaji": "juukyo",
      "part_of_speech": "noun",
      "meaning_zh": "住所；住宅",
      "kanji_readings": [
        {
          "form": "住居",
          "reading": "じゅうきょ"
        }
      ],
      "examples": [
        {
          "ja": "新しい住居を探しています。",
          "zh": "正在找新的住所。",
          "focus": ["住居"],
          "zhFocus": ["住所"]
        },
        {
          "ja": "地震で多くの人が住居を失いました。",
          "zh": "因为地震，很多人失去了住宅。",
          "focus": ["住居"],
          "zhFocus": ["住宅"]
        },
        {
          "ja": "この辺りは住居が少ないです。",
          "zh": "这一带住宅很少。",
          "focus": ["住居"],
          "zhFocus": ["住宅"]
        }
      ]
    },
    {
      "id": "n2-0303",
      "jlpt": "N2",
      "headword": "親類",
      "source_form": "親類",
      "variants": [
        "親類"
      ],
      "reading": "しんるい",
      "reading_variants": [
        "しんるい"
      ],
      "romaji": "shinrui",
      "part_of_speech": "noun",
      "meaning_zh": "亲戚",
      "kanji_readings": [
        {
          "form": "親類",
          "reading": "しんるい"
        }
      ],
      "examples": [
        {
          "ja": "正月に親類が集まりました。",
          "zh": "新年时亲戚们聚在一起。",
          "focus": ["親類"],
          "zhFocus": ["亲戚"]
        },
        {
          "ja": "彼とは遠い親類です。",
          "zh": "我和他是远房亲戚。",
          "focus": ["親類"],
          "zhFocus": ["亲戚"]
        },
        {
          "ja": "親類の家に泊まりました。",
          "zh": "在亲戚家住了一晚。",
          "focus": ["親類"],
          "zhFocus": ["亲戚"]
        }
      ],
      "note_zh": "意思同「親戚」。"
    },
    {
      "id": "n2-0304",
      "jlpt": "N2",
      "headword": "神話",
      "source_form": "神話",
      "variants": [
        "神話"
      ],
      "reading": "しんわ",
      "reading_variants": [
        "しんわ"
      ],
      "romaji": "shinwa",
      "part_of_speech": "noun",
      "meaning_zh": "神话",
      "kanji_readings": [
        {
          "form": "神話",
          "reading": "しんわ"
        }
      ],
      "examples": [
        {
          "ja": "ギリシャの神話を読みました。",
          "zh": "读了希腊神话。",
          "focus": ["神話"],
          "zhFocus": ["神话"]
        },
        {
          "ja": "この話は日本の神話がもとになっています。",
          "zh": "这个故事是以日本神话为蓝本的。",
          "focus": ["神話"],
          "zhFocus": ["神话"]
        },
        {
          "ja": "神話にはたくさんの神様が出てきます。",
          "zh": "神话里出现了很多神。",
          "focus": ["神話"],
          "zhFocus": ["神话"]
        }
      ]
    },
    {
      "id": "n2-0305",
      "jlpt": "N2",
      "headword": "水産",
      "source_form": "水産",
      "variants": [
        "水産"
      ],
      "reading": "すいさん",
      "reading_variants": [
        "すいさん"
      ],
      "romaji": "suisan",
      "part_of_speech": "noun",
      "meaning_zh": "水产",
      "kanji_readings": [
        {
          "form": "水産",
          "reading": "すいさん"
        }
      ],
      "examples": [
        {
          "ja": "この町は水産業がさかんです。",
          "zh": "这个小镇的水产业很兴旺。",
          "focus": ["水産"],
          "zhFocus": ["水产"]
        },
        {
          "ja": "兄は水産の仕事をしています。",
          "zh": "哥哥从事水产方面的工作。",
          "focus": ["水産"],
          "zhFocus": ["水产"]
        },
        {
          "ja": "水産物の輸出が増えました。",
          "zh": "水产品的出口增加了。",
          "focus": ["水産"],
          "zhFocus": ["水产"]
        }
      ]
    },
    {
      "id": "n2-0306",
      "jlpt": "N2",
      "headword": "性能",
      "source_form": "性能",
      "variants": [
        "性能"
      ],
      "reading": "せいのう",
      "reading_variants": [
        "せいのう"
      ],
      "romaji": "seinou",
      "part_of_speech": "noun",
      "meaning_zh": "性能",
      "kanji_readings": [
        {
          "form": "性能",
          "reading": "せいのう"
        }
      ],
      "examples": [
        {
          "ja": "このカメラは性能がいいです。",
          "zh": "这台相机性能很好。",
          "focus": ["性能"],
          "zhFocus": ["性能"]
        },
        {
          "ja": "新しい車は性能が上がりました。",
          "zh": "新车的性能提高了。",
          "focus": ["性能"],
          "zhFocus": ["性能"]
        },
        {
          "ja": "値段より性能で選びます。",
          "zh": "比起价格，更看性能来选。",
          "focus": ["性能"],
          "zhFocus": ["性能"]
        }
      ]
    },
    {
      "id": "n2-0307",
      "jlpt": "N2",
      "headword": "創作",
      "source_form": "創作",
      "variants": [
        "創作"
      ],
      "reading": "そうさく",
      "reading_variants": [
        "そうさく"
      ],
      "romaji": "sousaku",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "创作；（编造的）虚构",
      "senses_zh": [
        "创作",
        "（编造的）虚构"
      ],
      "kanji_readings": [
        {
          "form": "創作",
          "reading": "そうさく"
        }
      ],
      "examples": [
        {
          "ja": "彼は小説の創作を続けています。",
          "zh": "他在继续创作小说。",
          "focus": ["創作"],
          "zhFocus": ["创作"]
        },
        {
          "ja": "子供たちが自由に絵を創作しました。",
          "zh": "孩子们自由地创作了画。",
          "focus": ["創作"],
          "zhFocus": ["创作"]
        },
        {
          "ja": "その話は彼の創作だと思います。",
          "zh": "我觉得那件事是他编造的。",
          "focus": ["創作"],
          "zhFocus": ["编造"]
        }
      ]
    },
    {
      "id": "n2-0308",
      "jlpt": "N2",
      "headword": "造船",
      "source_form": "造船",
      "variants": [
        "造船"
      ],
      "reading": "ぞうせん",
      "reading_variants": [
        "ぞうせん"
      ],
      "romaji": "zousen",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "造船",
      "kanji_readings": [
        {
          "form": "造船",
          "reading": "ぞうせん"
        }
      ],
      "examples": [
        {
          "ja": "この町は昔から造船がさかんです。",
          "zh": "这个小镇自古造船业就很兴旺。",
          "focus": ["造船"],
          "zhFocus": ["造船"]
        },
        {
          "ja": "父は造船の会社で働いていました。",
          "zh": "父亲以前在造船公司工作。",
          "focus": ["造船"],
          "zhFocus": ["造船"]
        },
        {
          "ja": "港の近くに大きな造船所があります。",
          "zh": "港口附近有一座大造船厂。",
          "focus": ["造船"],
          "zhFocus": ["造船"]
        }
      ]
    },
    {
      "id": "n2-0309",
      "jlpt": "N2",
      "headword": "増大",
      "source_form": "増大",
      "variants": [
        "増大"
      ],
      "reading": "ぞうだい",
      "reading_variants": [
        "ぞうだい"
      ],
      "romaji": "zoudai",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "增大；增加",
      "kanji_readings": [
        {
          "form": "増大",
          "reading": "ぞうだい"
        }
      ],
      "examples": [
        {
          "ja": "医療費が年々増大しています。",
          "zh": "医疗费逐年增加。",
          "focus": ["増大"],
          "zhFocus": ["增加"]
        },
        {
          "ja": "仕事の量が増大しました。",
          "zh": "工作量增大了。",
          "focus": ["増大"],
          "zhFocus": ["增大"]
        },
        {
          "ja": "不安の増大が社会の問題になっています。",
          "zh": "不安情绪的增大成了社会问题。",
          "focus": ["増大"],
          "zhFocus": ["增大"]
        }
      ]
    },
    {
      "id": "n2-0310",
      "jlpt": "N2",
      "headword": "続々",
      "source_form": "続々",
      "variants": [
        "続々"
      ],
      "reading": "ぞくぞく",
      "reading_variants": [
        "ぞくぞく"
      ],
      "romaji": "zokuzoku",
      "part_of_speech": "adverb",
      "meaning_zh": "陆续；接连不断",
      "kanji_readings": [
        {
          "form": "続々",
          "reading": "ぞくぞく"
        }
      ],
      "examples": [
        {
          "ja": "会場に人が続々と集まってきました。",
          "zh": "人们陆续聚集到会场来了。",
          "focus": ["続々"],
          "zhFocus": ["陆续"]
        },
        {
          "ja": "新しい店が続々とできています。",
          "zh": "新店接连不断地开张。",
          "focus": ["続々"],
          "zhFocus": ["接连不断"]
        },
        {
          "ja": "参加の申し込みが続々と届いています。",
          "zh": "参加报名陆续寄到。",
          "focus": ["続々"],
          "zhFocus": ["陆续"]
        }
      ],
      "note_zh": "多用「続々と」的形式。"
    },
    {
      "id": "n2-0311",
      "jlpt": "N2",
      "headword": "測定",
      "source_form": "測定",
      "variants": [
        "測定"
      ],
      "reading": "そくてい",
      "reading_variants": [
        "そくてい"
      ],
      "romaji": "sokutei",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "测定；测量",
      "kanji_readings": [
        {
          "form": "測定",
          "reading": "そくてい"
        }
      ],
      "examples": [
        {
          "ja": "体力の測定をしました。",
          "zh": "进行了体能测定。",
          "focus": ["測定"],
          "zhFocus": ["测定"]
        },
        {
          "ja": "川の水の温度を測定します。",
          "zh": "测量河水的温度。",
          "focus": ["測定"],
          "zhFocus": ["测量"]
        },
        {
          "ja": "この機械で音の大きさを測定できます。",
          "zh": "用这台机器可以测量声音的大小。",
          "focus": ["測定"],
          "zhFocus": ["测量"]
        }
      ]
    },
    {
      "id": "n2-0312",
      "jlpt": "N2",
      "headword": "団地",
      "source_form": "団地",
      "variants": [
        "団地"
      ],
      "reading": "だんち",
      "reading_variants": [
        "だんち"
      ],
      "romaji": "danchi",
      "part_of_speech": "noun",
      "meaning_zh": "（集合住宅）小区；住宅区",
      "kanji_readings": [
        {
          "form": "団地",
          "reading": "だんち"
        }
      ],
      "examples": [
        {
          "ja": "子供のころ、団地に住んでいました。",
          "zh": "小时候住在集合住宅小区里。",
          "focus": ["団地"],
          "zhFocus": ["小区"]
        },
        {
          "ja": "この団地には公園があります。",
          "zh": "这个小区里有公园。",
          "focus": ["団地"],
          "zhFocus": ["小区"]
        },
        {
          "ja": "駅の近くに大きな団地ができました。",
          "zh": "车站附近建起了一个大型住宅区。",
          "focus": ["団地"],
          "zhFocus": ["住宅区"]
        }
      ]
    },
    {
      "id": "n2-0313",
      "jlpt": "N2",
      "headword": "中年",
      "source_form": "中年",
      "variants": [
        "中年"
      ],
      "reading": "ちゅうねん",
      "reading_variants": [
        "ちゅうねん"
      ],
      "romaji": "chuunen",
      "part_of_speech": "noun",
      "meaning_zh": "中年",
      "kanji_readings": [
        {
          "form": "中年",
          "reading": "ちゅうねん"
        }
      ],
      "examples": [
        {
          "ja": "中年の男性が道を聞いてきました。",
          "zh": "一位中年男子来问路。",
          "focus": ["中年"],
          "zhFocus": ["中年"]
        },
        {
          "ja": "中年になって、体力が落ちました。",
          "zh": "到了中年，体力下降了。",
          "focus": ["中年"],
          "zhFocus": ["中年"]
        },
        {
          "ja": "中年の人に人気のある歌手です。",
          "zh": "这是很受中年人欢迎的歌手。",
          "focus": ["中年"],
          "zhFocus": ["中年"]
        }
      ]
    },
    {
      "id": "n2-0314",
      "jlpt": "N2",
      "headword": "長短",
      "source_form": "長短",
      "variants": [
        "長短"
      ],
      "reading": "ちょうたん",
      "reading_variants": [
        "ちょうたん"
      ],
      "romaji": "choutan",
      "part_of_speech": "noun",
      "meaning_zh": "长短；优缺点",
      "senses_zh": [
        "长短",
        "优缺点"
      ],
      "kanji_readings": [
        {
          "form": "長短",
          "reading": "ちょうたん"
        }
      ],
      "examples": [
        {
          "ja": "線の長短を比べてください。",
          "zh": "请比较线的长短。",
          "focus": ["長短"],
          "zhFocus": ["长短"]
        },
        {
          "ja": "どちらの方法にも長短があります。",
          "zh": "哪种方法都各有优缺点。",
          "focus": ["長短"],
          "zhFocus": ["优缺点"]
        },
        {
          "ja": "それぞれの長短をよく考えて選びます。",
          "zh": "仔细考虑各自的优缺点再选。",
          "focus": ["長短"],
          "zhFocus": ["优缺点"]
        }
      ]
    },
    {
      "id": "n2-0315",
      "jlpt": "N2",
      "headword": "頂点",
      "source_form": "頂点",
      "variants": [
        "頂点"
      ],
      "reading": "ちょうてん",
      "reading_variants": [
        "ちょうてん"
      ],
      "romaji": "chouten",
      "part_of_speech": "noun",
      "meaning_zh": "顶点；顶峰；巅峰",
      "senses_zh": [
        "顶点",
        "顶峰；巅峰"
      ],
      "kanji_readings": [
        {
          "form": "頂点",
          "reading": "ちょうてん"
        }
      ],
      "examples": [
        {
          "ja": "三角形の頂点に点を打ちます。",
          "zh": "在三角形的顶点上打个点。",
          "focus": ["頂点"],
          "zhFocus": ["顶点"]
        },
        {
          "ja": "山の頂点からの景色は最高でした。",
          "zh": "从山顶看到的景色棒极了。",
          "focus": ["頂点"],
          "zhFocus": ["山顶"]
        },
        {
          "ja": "彼はスポーツ界の頂点に立ちました。",
          "zh": "他站上了体育界的巅峰。",
          "focus": ["頂点"],
          "zhFocus": ["巅峰"]
        }
      ]
    },
    {
      "id": "n2-0316",
      "jlpt": "N2",
      "headword": "手前",
      "source_form": "手前",
      "variants": [
        "手前"
      ],
      "reading": "てまえ",
      "reading_variants": [
        "てまえ"
      ],
      "romaji": "temae",
      "part_of_speech": "noun",
      "meaning_zh": "跟前；靠自己这边；（到达某处）之前",
      "senses_zh": [
        "跟前；靠自己这边",
        "（到达某处）之前"
      ],
      "kanji_readings": [
        {
          "form": "手前",
          "reading": "てまえ"
        }
      ],
      "examples": [
        {
          "ja": "手前にある皿から取ってください。",
          "zh": "请从靠自己这边的盘子里拿。",
          "focus": ["手前"],
          "zhFocus": ["靠自己这边"]
        },
        {
          "ja": "駅の手前で降ろしてください。",
          "zh": "请在快到车站的地方让我下车。",
          "focus": ["手前"],
          "zhFocus": ["快到"]
        },
        {
          "ja": "信号の手前に郵便局があります。",
          "zh": "红绿灯前面一点有邮局。",
          "focus": ["手前"],
          "zhFocus": ["前面一点"]
        }
      ]
    },
    {
      "id": "n2-0317",
      "jlpt": "N2",
      "headword": "発射",
      "source_form": "発射",
      "variants": [
        "発射"
      ],
      "reading": "はっしゃ",
      "reading_variants": [
        "はっしゃ"
      ],
      "romaji": "hassha",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "发射",
      "kanji_readings": [
        {
          "form": "発射",
          "reading": "はっしゃ"
        }
      ],
      "examples": [
        {
          "ja": "ロケットが発射されました。",
          "zh": "火箭发射了。",
          "focus": ["発射"],
          "zhFocus": ["发射"]
        },
        {
          "ja": "ロケットの発射は明日の朝に決まりました。",
          "zh": "火箭的发射定在了明天早上。",
          "focus": ["発射"],
          "zhFocus": ["发射"]
        },
        {
          "ja": "人工衛星を発射する計画があります。",
          "zh": "有发射人造卫星的计划。",
          "focus": ["発射"],
          "zhFocus": ["发射"]
        }
      ]
    },
    {
      "id": "n2-0318",
      "jlpt": "N2",
      "headword": "派手",
      "source_form": "派手",
      "variants": [
        "派手"
      ],
      "reading": "はで",
      "reading_variants": [
        "はで"
      ],
      "romaji": "hade",
      "part_of_speech": "na-adjective",
      "meaning_zh": "花哨；艳丽；铺张",
      "kanji_readings": [
        {
          "form": "派手",
          "reading": "はで"
        }
      ],
      "examples": [
        {
          "ja": "彼女はいつも派手な服を着ています。",
          "zh": "她总是穿着花哨的衣服。",
          "focus": ["派手"],
          "zhFocus": ["花哨"]
        },
        {
          "ja": "派手な色の車を買いました。",
          "zh": "买了一辆颜色艳丽的车。",
          "focus": ["派手"],
          "zhFocus": ["艳丽"]
        },
        {
          "ja": "結婚式は派手にしたくないです。",
          "zh": "不想把婚礼办得太铺张。",
          "focus": ["派手"],
          "zhFocus": ["铺张"]
        }
      ],
      "note_zh": "与「地味（朴素）」相对。"
    },
    {
      "id": "n2-0319",
      "jlpt": "N2",
      "headword": "皮膚",
      "source_form": "皮膚",
      "variants": [
        "皮膚"
      ],
      "reading": "ひふ",
      "reading_variants": [
        "ひふ"
      ],
      "romaji": "hifu",
      "part_of_speech": "noun",
      "meaning_zh": "皮肤",
      "kanji_readings": [
        {
          "form": "皮膚",
          "reading": "ひふ"
        }
      ],
      "examples": [
        {
          "ja": "赤ちゃんの皮膚はやわらかいです。",
          "zh": "婴儿的皮肤很柔软。",
          "focus": ["皮膚"],
          "zhFocus": ["皮肤"]
        },
        {
          "ja": "日に焼けて皮膚が赤くなりました。",
          "zh": "晒得皮肤发红了。",
          "focus": ["皮膚"],
          "zhFocus": ["皮肤"]
        },
        {
          "ja": "皮膚の病気で病院に通っています。",
          "zh": "因为皮肤病一直去医院。",
          "focus": ["皮膚"],
          "zhFocus": ["皮肤"]
        }
      ]
    },
    {
      "id": "n2-0320",
      "jlpt": "N2",
      "headword": "評論",
      "source_form": "評論",
      "variants": [
        "評論"
      ],
      "reading": "ひょうろん",
      "reading_variants": [
        "ひょうろん"
      ],
      "romaji": "hyouron",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "评论；评论文章",
      "kanji_readings": [
        {
          "form": "評論",
          "reading": "ひょうろん"
        }
      ],
      "examples": [
        {
          "ja": "新聞に映画の評論を書きました。",
          "zh": "在报纸上写了电影评论。",
          "focus": ["評論"],
          "zhFocus": ["评论"]
        },
        {
          "ja": "彼はテレビで政治について評論しています。",
          "zh": "他在电视上评论政治。",
          "focus": ["評論"],
          "zhFocus": ["评论"]
        },
        {
          "ja": "その小説の評論を読みました。",
          "zh": "读了那部小说的评论文章。",
          "focus": ["評論"],
          "zhFocus": ["评论文章"]
        }
      ]
    },
    {
      "id": "n2-0321",
      "jlpt": "N2",
      "headword": "広さ",
      "source_form": "広さ",
      "variants": [
        "広さ"
      ],
      "reading": "ひろさ",
      "reading_variants": [
        "ひろさ"
      ],
      "romaji": "hirosa",
      "part_of_speech": "noun",
      "meaning_zh": "面积；宽度；广度",
      "kanji_readings": [
        {
          "form": "広さ",
          "reading": "ひろさ"
        }
      ],
      "examples": [
        {
          "ja": "この部屋の広さはどのくらいですか。",
          "zh": "这个房间的面积有多大？",
          "focus": ["広さ"],
          "zhFocus": ["面积"]
        },
        {
          "ja": "道の広さを測りました。",
          "zh": "测量了路的宽度。",
          "focus": ["広さ"],
          "zhFocus": ["宽度"]
        },
        {
          "ja": "彼の知識の広さに驚きました。",
          "zh": "对他知识的广度感到惊讶。",
          "focus": ["広さ"],
          "zhFocus": ["广度"]
        }
      ]
    },
    {
      "id": "n2-0322",
      "jlpt": "N2",
      "headword": "別荘",
      "source_form": "別荘",
      "variants": [
        "別荘"
      ],
      "reading": "べっそう",
      "reading_variants": [
        "べっそう"
      ],
      "romaji": "bessou",
      "part_of_speech": "noun",
      "meaning_zh": "别墅",
      "kanji_readings": [
        {
          "form": "別荘",
          "reading": "べっそう"
        }
      ],
      "examples": [
        {
          "ja": "夏は山の別荘で過ごします。",
          "zh": "夏天在山里的别墅度过。",
          "focus": ["別荘"],
          "zhFocus": ["别墅"]
        },
        {
          "ja": "海の近くに別荘を買いました。",
          "zh": "在海边买了别墅。",
          "focus": ["別荘"],
          "zhFocus": ["别墅"]
        },
        {
          "ja": "友達の別荘に招待されました。",
          "zh": "被朋友邀请去他的别墅。",
          "focus": ["別荘"],
          "zhFocus": ["别墅"]
        }
      ]
    },
    {
      "id": "n2-0323",
      "jlpt": "N2",
      "headword": "盆",
      "source_form": "盆",
      "variants": [
        "盆"
      ],
      "reading": "ぼん",
      "reading_variants": [
        "ぼん"
      ],
      "romaji": "bon",
      "part_of_speech": "noun",
      "meaning_zh": "托盘；盂兰盆节",
      "senses_zh": [
        "托盘",
        "盂兰盆节"
      ],
      "kanji_readings": [
        {
          "form": "盆",
          "reading": "ぼん"
        }
      ],
      "examples": [
        {
          "ja": "お茶をお盆にのせて運びました。",
          "zh": "把茶放在托盘上端了过去。",
          "focus": ["盆"],
          "zhFocus": ["托盘"]
        },
        {
          "ja": "お盆には家族で田舎に帰ります。",
          "zh": "盂兰盆节全家回乡下。",
          "focus": ["盆"],
          "zhFocus": ["盂兰盆节"]
        },
        {
          "ja": "今年のお盆はとても暑かったです。",
          "zh": "今年的盂兰盆节非常热。",
          "focus": ["盆"],
          "zhFocus": ["盂兰盆节"]
        }
      ],
      "note_zh": "两个意思一般都说「お盆」。"
    },
    {
      "id": "n2-0324",
      "jlpt": "N2",
      "headword": "見送る",
      "source_form": "見送る",
      "variants": [
        "見送る"
      ],
      "reading": "みおくる",
      "reading_variants": [
        "みおくる"
      ],
      "romaji": "miokuru",
      "part_of_speech": "verb",
      "meaning_zh": "送行；目送；搁置；暂缓",
      "senses_zh": [
        "送行；目送",
        "搁置；暂缓"
      ],
      "kanji_readings": [
        {
          "form": "見送る",
          "reading": "みおくる"
        }
      ],
      "examples": [
        {
          "ja": "駅で友達を見送りました。",
          "zh": "在车站给朋友送行。",
          "focus": ["見送り"],
          "zhFocus": ["送行"]
        },
        {
          "ja": "母は私が見えなくなるまで見送ってくれました。",
          "zh": "妈妈一直目送我，直到看不见为止。",
          "focus": ["見送っ"],
          "zhFocus": ["目送"]
        },
        {
          "ja": "予算が足りないので、計画を見送ることにしました。",
          "zh": "因为预算不够，决定暂缓这个计划。",
          "focus": ["見送る"],
          "zhFocus": ["暂缓"]
        }
      ]
    },
    {
      "id": "n2-0325",
      "jlpt": "N2",
      "headword": "見出し",
      "source_form": "見出し",
      "variants": [
        "見出し"
      ],
      "reading": "みだし",
      "reading_variants": [
        "みだし"
      ],
      "romaji": "midashi",
      "part_of_speech": "noun",
      "meaning_zh": "标题；大标题",
      "kanji_readings": [
        {
          "form": "見出し",
          "reading": "みだし"
        }
      ],
      "examples": [
        {
          "ja": "新聞の見出しだけ読みました。",
          "zh": "只看了报纸的标题。",
          "focus": ["見出し"],
          "zhFocus": ["标题"]
        },
        {
          "ja": "この記事に分かりやすい見出しを付けてください。",
          "zh": "请给这篇报道加一个好懂的标题。",
          "focus": ["見出し"],
          "zhFocus": ["标题"]
        },
        {
          "ja": "雑誌の見出しを見て、記事を読みたくなりました。",
          "zh": "看了杂志的大标题，就想读那篇文章了。",
          "focus": ["見出し"],
          "zhFocus": ["大标题"]
        }
      ]
    },
    {
      "id": "n2-0326",
      "jlpt": "N2",
      "headword": "見舞う",
      "source_form": "見舞う",
      "variants": [
        "見舞う"
      ],
      "reading": "みまう",
      "reading_variants": [
        "みまう"
      ],
      "romaji": "mimau",
      "part_of_speech": "verb",
      "meaning_zh": "探望（病人等）；慰问；（灾害等）袭击",
      "senses_zh": [
        "探望（病人等）；慰问",
        "（灾害等）袭击"
      ],
      "kanji_readings": [
        {
          "form": "見舞う",
          "reading": "みまう"
        }
      ],
      "examples": [
        {
          "ja": "入院している友達を見舞いました。",
          "zh": "探望了住院的朋友。",
          "focus": ["見舞い"],
          "zhFocus": ["探望"]
        },
        {
          "ja": "祖父を見舞うために病院へ行きました。",
          "zh": "为了探望祖父去了医院。",
          "focus": ["見舞う"],
          "zhFocus": ["探望"]
        },
        {
          "ja": "その町は大きな地震に見舞われました。",
          "zh": "那个城镇遭到了大地震的袭击。",
          "focus": ["見舞わ"],
          "zhFocus": ["袭击"]
        }
      ],
      "note_zh": "表示“遭受灾害”时多用被动形「〜に見舞われる」。"
    },
    {
      "id": "n2-0327",
      "jlpt": "N2",
      "headword": "目安",
      "source_form": "目安",
      "variants": [
        "目安"
      ],
      "reading": "めやす",
      "reading_variants": [
        "めやす"
      ],
      "romaji": "meyasu",
      "part_of_speech": "noun",
      "meaning_zh": "大致标准；参考；（大概的）目标",
      "kanji_readings": [
        {
          "form": "目安",
          "reading": "めやす"
        }
      ],
      "examples": [
        {
          "ja": "勉強する時間の目安を教えてください。",
          "zh": "请告诉我学习时长的大致标准。",
          "focus": ["目安"],
          "zhFocus": ["大致标准"]
        },
        {
          "ja": "この表を目安にして、計画を立てます。",
          "zh": "以这张表为参考来制订计划。",
          "focus": ["目安"],
          "zhFocus": ["参考"]
        },
        {
          "ja": "体重を健康の目安にしています。",
          "zh": "把体重当作健康的参考标准。",
          "focus": ["目安"],
          "zhFocus": ["参考标准"]
        }
      ]
    },
    {
      "id": "n2-0328",
      "jlpt": "N2",
      "headword": "役人",
      "source_form": "役人",
      "variants": [
        "役人"
      ],
      "reading": "やくにん",
      "reading_variants": [
        "やくにん"
      ],
      "romaji": "yakunin",
      "part_of_speech": "noun",
      "meaning_zh": "官员；公务员",
      "kanji_readings": [
        {
          "form": "役人",
          "reading": "やくにん"
        }
      ],
      "examples": [
        {
          "ja": "父は市の役人です。",
          "zh": "父亲是市里的公务员。",
          "focus": ["役人"],
          "zhFocus": ["公务员"]
        },
        {
          "ja": "役人に書類を出しました。",
          "zh": "把文件交给了官员。",
          "focus": ["役人"],
          "zhFocus": ["官员"]
        },
        {
          "ja": "昔の役人は大きな力を持っていました。",
          "zh": "以前的官员拥有很大的权力。",
          "focus": ["役人"],
          "zhFocus": ["官员"]
        }
      ]
    },
    {
      "id": "n2-0329",
      "jlpt": "N2",
      "headword": "夕刊",
      "source_form": "夕刊",
      "variants": [
        "夕刊"
      ],
      "reading": "ゆうかん",
      "reading_variants": [
        "ゆうかん"
      ],
      "romaji": "yuukan",
      "part_of_speech": "noun",
      "meaning_zh": "晚报",
      "kanji_readings": [
        {
          "form": "夕刊",
          "reading": "ゆうかん"
        }
      ],
      "examples": [
        {
          "ja": "夕刊にその事件の記事が出ました。",
          "zh": "晚报上登出了那件事的报道。",
          "focus": ["夕刊"],
          "zhFocus": ["晚报"]
        },
        {
          "ja": "父は毎日夕刊を読みます。",
          "zh": "父亲每天看晚报。",
          "focus": ["夕刊"],
          "zhFocus": ["晚报"]
        },
        {
          "ja": "最近は夕刊を取る家が減りました。",
          "zh": "最近订晚报的家庭变少了。",
          "focus": ["夕刊"],
          "zhFocus": ["晚报"]
        }
      ],
      "note_zh": "与「朝刊（早报）」相对。"
    },
    {
      "id": "n2-0330",
      "jlpt": "N2",
      "headword": "溶岩",
      "source_form": "溶岩",
      "variants": [
        "溶岩"
      ],
      "reading": "ようがん",
      "reading_variants": [
        "ようがん"
      ],
      "romaji": "yougan",
      "part_of_speech": "noun",
      "meaning_zh": "熔岩",
      "kanji_readings": [
        {
          "form": "溶岩",
          "reading": "ようがん"
        }
      ],
      "examples": [
        {
          "ja": "火山から溶岩が流れ出しました。",
          "zh": "熔岩从火山流了出来。",
          "focus": ["溶岩"],
          "zhFocus": ["熔岩"]
        },
        {
          "ja": "溶岩が固まって岩になりました。",
          "zh": "熔岩凝固成了岩石。",
          "focus": ["溶岩"],
          "zhFocus": ["熔岩"]
        },
        {
          "ja": "この島は溶岩でできています。",
          "zh": "这个岛是由熔岩形成的。",
          "focus": ["溶岩"],
          "zhFocus": ["熔岩"]
        }
      ]
    },
    {
      "id": "n2-0331",
      "jlpt": "N2",
      "headword": "利害",
      "source_form": "利害",
      "variants": [
        "利害"
      ],
      "reading": "りがい",
      "reading_variants": [
        "りがい"
      ],
      "romaji": "rigai",
      "part_of_speech": "noun",
      "meaning_zh": "利害；利益",
      "kanji_readings": [
        {
          "form": "利害",
          "reading": "りがい"
        }
      ],
      "examples": [
        {
          "ja": "二つの会社の利害が一致しました。",
          "zh": "两家公司的利害一致了。",
          "focus": ["利害"],
          "zhFocus": ["利害"]
        },
        {
          "ja": "自分の利害だけを考えてはいけません。",
          "zh": "不能只考虑自己的利益。",
          "focus": ["利害"],
          "zhFocus": ["利益"]
        },
        {
          "ja": "利害が対立して、話がまとまりません。",
          "zh": "利害冲突，谈不拢。",
          "focus": ["利害"],
          "zhFocus": ["利害"]
        }
      ]
    },
    {
      "id": "n2-0332",
      "jlpt": "N2",
      "headword": "一応",
      "source_form": "一応",
      "variants": [
        "一応"
      ],
      "reading": "いちおう",
      "reading_variants": [
        "いちおう"
      ],
      "romaji": "ichiou",
      "part_of_speech": "adverb",
      "meaning_zh": "大致；姑且；以防万一",
      "kanji_readings": [
        {
          "form": "一応",
          "reading": "いちおう"
        }
      ],
      "examples": [
        {
          "ja": "宿題は一応終わりました。",
          "zh": "作业大致做完了。",
          "focus": ["一応"],
          "zhFocus": ["大致"]
        },
        {
          "ja": "一応、傘を持っていきます。",
          "zh": "以防万一，带上伞。",
          "focus": ["一応"],
          "zhFocus": ["以防万一"]
        },
        {
          "ja": "一応話は聞きましたが、まだ決めていません。",
          "zh": "话姑且是听了，但还没决定。",
          "focus": ["一応"],
          "zhFocus": ["姑且"]
        }
      ]
    },
    {
      "id": "n2-0333",
      "jlpt": "N2",
      "headword": "井戸",
      "source_form": "井戸",
      "variants": [
        "井戸"
      ],
      "reading": "いど",
      "reading_variants": [
        "いど"
      ],
      "romaji": "ido",
      "part_of_speech": "noun",
      "meaning_zh": "井",
      "kanji_readings": [
        {
          "form": "井戸",
          "reading": "いど"
        }
      ],
      "examples": [
        {
          "ja": "昔はこの井戸の水を飲んでいました。",
          "zh": "以前喝这口井的水。",
          "focus": ["井戸"],
          "zhFocus": ["井"]
        },
        {
          "ja": "庭に古い井戸があります。",
          "zh": "院子里有一口旧井。",
          "focus": ["井戸"],
          "zhFocus": ["井"]
        },
        {
          "ja": "井戸から水をくみました。",
          "zh": "从井里打了水。",
          "focus": ["井戸"],
          "zhFocus": ["井"]
        }
      ]
    },
    {
      "id": "n2-0334",
      "jlpt": "N2",
      "headword": "埋める",
      "source_form": "埋める",
      "variants": [
        "埋める"
      ],
      "reading": "うめる",
      "reading_variants": [
        "うめる"
      ],
      "romaji": "umeru",
      "part_of_speech": "verb",
      "meaning_zh": "埋；填；填满；弥补",
      "senses_zh": [
        "埋",
        "填；填满；弥补"
      ],
      "kanji_readings": [
        {
          "form": "埋める",
          "reading": "うめる"
        }
      ],
      "examples": [
        {
          "ja": "犬が庭に骨を埋めました。",
          "zh": "狗把骨头埋在了院子里。",
          "focus": ["埋め"],
          "zhFocus": ["埋"]
        },
        {
          "ja": "空いているところに正しい言葉を埋めてください。",
          "zh": "请在空白处填上正确的词。",
          "focus": ["埋め"],
          "zhFocus": ["填"]
        },
        {
          "ja": "大勢の観客が会場を埋めました。",
          "zh": "大批观众填满了会场。",
          "focus": ["埋め"],
          "zhFocus": ["填满"]
        }
      ]
    },
    {
      "id": "n2-0335",
      "jlpt": "N2",
      "headword": "応用",
      "source_form": "応用",
      "variants": [
        "応用"
      ],
      "reading": "おうよう",
      "reading_variants": [
        "おうよう"
      ],
      "romaji": "ouyou",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "应用；运用",
      "kanji_readings": [
        {
          "form": "応用",
          "reading": "おうよう"
        }
      ],
      "examples": [
        {
          "ja": "習ったことを仕事に応用します。",
          "zh": "把学到的东西运用到工作中。",
          "focus": ["応用"],
          "zhFocus": ["运用"]
        },
        {
          "ja": "この技術はいろいろな分野に応用されています。",
          "zh": "这项技术被应用于各个领域。",
          "focus": ["応用"],
          "zhFocus": ["应用"]
        },
        {
          "ja": "基本ができたら、応用問題に挑戦しましょう。",
          "zh": "基础掌握了，就挑战应用题吧。",
          "focus": ["応用"],
          "zhFocus": ["应用"]
        }
      ]
    },
    {
      "id": "n2-0336",
      "jlpt": "N2",
      "headword": "恩恵",
      "source_form": "恩恵",
      "variants": [
        "恩恵"
      ],
      "reading": "おんけい",
      "reading_variants": [
        "おんけい"
      ],
      "romaji": "onkei",
      "part_of_speech": "noun",
      "meaning_zh": "恩惠；好处",
      "kanji_readings": [
        {
          "form": "恩恵",
          "reading": "おんけい"
        }
      ],
      "examples": [
        {
          "ja": "私たちは自然の恩恵を受けて生活しています。",
          "zh": "我们受着大自然的恩惠生活。",
          "focus": ["恩恵"],
          "zhFocus": ["恩惠"]
        },
        {
          "ja": "新しい制度の恩恵を受ける人は多いです。",
          "zh": "享受到新制度好处的人很多。",
          "focus": ["恩恵"],
          "zhFocus": ["好处"]
        },
        {
          "ja": "技術の進歩の恩恵は大きいです。",
          "zh": "技术进步带来的恩惠很大。",
          "focus": ["恩恵"],
          "zhFocus": ["恩惠"]
        }
      ]
    },
    {
      "id": "n2-0337",
      "jlpt": "N2",
      "headword": "角度",
      "source_form": "角度",
      "variants": [
        "角度"
      ],
      "reading": "かくど",
      "reading_variants": [
        "かくど"
      ],
      "romaji": "kakudo",
      "part_of_speech": "noun",
      "meaning_zh": "角度",
      "kanji_readings": [
        {
          "form": "角度",
          "reading": "かくど"
        }
      ],
      "examples": [
        {
          "ja": "二つの線の角度を測ってください。",
          "zh": "请测量两条线的角度。",
          "focus": ["角度"],
          "zhFocus": ["角度"]
        },
        {
          "ja": "写真を撮る角度を変えてみました。",
          "zh": "试着换了拍照的角度。",
          "focus": ["角度"],
          "zhFocus": ["角度"]
        },
        {
          "ja": "違う角度から問題を考えましょう。",
          "zh": "从不同的角度思考问题吧。",
          "focus": ["角度"],
          "zhFocus": ["角度"]
        }
      ]
    },
    {
      "id": "n2-0338",
      "jlpt": "N2",
      "headword": "重ねる",
      "source_form": "重ねる",
      "variants": [
        "重ねる"
      ],
      "reading": "かさねる",
      "reading_variants": [
        "かさねる"
      ],
      "romaji": "kasaneru",
      "part_of_speech": "verb",
      "meaning_zh": "叠放；摞；反复；多次",
      "senses_zh": [
        "叠放；摞",
        "反复；多次"
      ],
      "kanji_readings": [
        {
          "form": "重ねる",
          "reading": "かさねる"
        }
      ],
      "examples": [
        {
          "ja": "皿を重ねて棚にしまいました。",
          "zh": "把盘子摞起来放进了柜子。",
          "focus": ["重ね"],
          "zhFocus": ["摞"]
        },
        {
          "ja": "寒いので服を重ねて着ています。",
          "zh": "因为冷，叠穿了好几件衣服。",
          "focus": ["重ね"],
          "zhFocus": ["叠穿"]
        },
        {
          "ja": "失敗を重ねて、やっと成功しました。",
          "zh": "经历多次失败，终于成功了。",
          "focus": ["重ね"],
          "zhFocus": ["多次"]
        }
      ]
    },
    {
      "id": "n2-0339",
      "jlpt": "N2",
      "headword": "加速",
      "source_form": "加速",
      "variants": [
        "加速"
      ],
      "reading": "かそく",
      "reading_variants": [
        "かそく"
      ],
      "romaji": "kasoku",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "加速",
      "kanji_readings": [
        {
          "form": "加速",
          "reading": "かそく"
        }
      ],
      "examples": [
        {
          "ja": "車が急に加速しました。",
          "zh": "车突然加速了。",
          "focus": ["加速"],
          "zhFocus": ["加速"]
        },
        {
          "ja": "少子化が加速しています。",
          "zh": "少子化在加速。",
          "focus": ["加速"],
          "zhFocus": ["加速"]
        },
        {
          "ja": "ボールが坂を転がりながら加速しました。",
          "zh": "球一边滚下坡一边加速。",
          "focus": ["加速"],
          "zhFocus": ["加速"]
        }
      ]
    },
    {
      "id": "n2-0340",
      "jlpt": "N2",
      "headword": "瓦",
      "source_form": "瓦",
      "variants": [
        "瓦"
      ],
      "reading": "かわら",
      "reading_variants": [
        "かわら"
      ],
      "romaji": "kawara",
      "part_of_speech": "noun",
      "meaning_zh": "瓦",
      "kanji_readings": [
        {
          "form": "瓦",
          "reading": "かわら"
        }
      ],
      "examples": [
        {
          "ja": "屋根の瓦が台風で飛ばされました。",
          "zh": "屋顶的瓦被台风刮跑了。",
          "focus": ["瓦"],
          "zhFocus": ["瓦"]
        },
        {
          "ja": "この寺の屋根は瓦でできています。",
          "zh": "这座寺庙的屋顶是用瓦铺的。",
          "focus": ["瓦"],
          "zhFocus": ["瓦"]
        },
        {
          "ja": "古い瓦を新しいものに替えました。",
          "zh": "把旧瓦换成了新的。",
          "focus": ["瓦"],
          "zhFocus": ["瓦"]
        }
      ]
    },
    {
      "id": "n2-0341",
      "jlpt": "N2",
      "headword": "儀式",
      "source_form": "儀式",
      "variants": [
        "儀式"
      ],
      "reading": "ぎしき",
      "reading_variants": [
        "ぎしき"
      ],
      "romaji": "gishiki",
      "part_of_speech": "noun",
      "meaning_zh": "仪式",
      "kanji_readings": [
        {
          "form": "儀式",
          "reading": "ぎしき"
        }
      ],
      "examples": [
        {
          "ja": "神社で古い儀式が行われました。",
          "zh": "神社里举行了古老的仪式。",
          "focus": ["儀式"],
          "zhFocus": ["仪式"]
        },
        {
          "ja": "結婚の儀式は国によって違います。",
          "zh": "婚礼的仪式因国家而异。",
          "focus": ["儀式"],
          "zhFocus": ["仪式"]
        },
        {
          "ja": "儀式の間は静かにしてください。",
          "zh": "仪式期间请保持安静。",
          "focus": ["儀式"],
          "zhFocus": ["仪式"]
        }
      ]
    },
    {
      "id": "n2-0342",
      "jlpt": "N2",
      "headword": "境界",
      "source_form": "境界",
      "variants": [
        "境界"
      ],
      "reading": "きょうかい",
      "reading_variants": [
        "きょうかい"
      ],
      "romaji": "kyoukai",
      "part_of_speech": "noun",
      "meaning_zh": "边界；界线",
      "kanji_readings": [
        {
          "form": "境界",
          "reading": "きょうかい"
        }
      ],
      "examples": [
        {
          "ja": "隣の家との境界に木を植えました。",
          "zh": "在和邻居家的边界上种了树。",
          "focus": ["境界"],
          "zhFocus": ["边界"]
        },
        {
          "ja": "二つの県の境界に川が流れています。",
          "zh": "两个县的边界上流着一条河。",
          "focus": ["境界"],
          "zhFocus": ["边界"]
        },
        {
          "ja": "仕事と生活の境界があいまいです。",
          "zh": "工作和生活的界线很模糊。",
          "focus": ["境界"],
          "zhFocus": ["界线"]
        }
      ]
    },
    {
      "id": "n2-0343",
      "jlpt": "N2",
      "headword": "厳重",
      "source_form": "厳重",
      "variants": [
        "厳重"
      ],
      "reading": "げんじゅう",
      "reading_variants": [
        "げんじゅう"
      ],
      "romaji": "genjuu",
      "part_of_speech": "na-adjective",
      "meaning_zh": "严格；严厉；严密",
      "kanji_readings": [
        {
          "form": "厳重",
          "reading": "げんじゅう"
        }
      ],
      "examples": [
        {
          "ja": "空港では厳重な検査が行われています。",
          "zh": "机场进行着严格的检查。",
          "focus": ["厳重"],
          "zhFocus": ["严格"]
        },
        {
          "ja": "先生に厳重に注意されました。",
          "zh": "受到了老师严厉的警告。",
          "focus": ["厳重"],
          "zhFocus": ["严厉"]
        },
        {
          "ja": "貴重品は厳重に管理してください。",
          "zh": "贵重物品请严密保管。",
          "focus": ["厳重"],
          "zhFocus": ["严密"]
        }
      ]
    },
    {
      "id": "n2-0344",
      "jlpt": "N2",
      "headword": "功績",
      "source_form": "功績",
      "variants": [
        "功績"
      ],
      "reading": "こうせき",
      "reading_variants": [
        "こうせき"
      ],
      "romaji": "kouseki",
      "part_of_speech": "noun",
      "meaning_zh": "功绩；功劳",
      "kanji_readings": [
        {
          "form": "功績",
          "reading": "こうせき"
        }
      ],
      "examples": [
        {
          "ja": "彼の功績はみんなに認められました。",
          "zh": "他的功绩得到了大家的认可。",
          "focus": ["功績"],
          "zhFocus": ["功绩"]
        },
        {
          "ja": "研究の功績で賞をもらいました。",
          "zh": "因研究上的功绩获奖了。",
          "focus": ["功績"],
          "zhFocus": ["功绩"]
        },
        {
          "ja": "彼女は町の発展に大きな功績を残しました。",
          "zh": "她为城镇的发展立下了很大的功劳。",
          "focus": ["功績"],
          "zhFocus": ["功劳"]
        }
      ]
    },
    {
      "id": "n2-0345",
      "jlpt": "N2",
      "headword": "娯楽",
      "source_form": "娯楽",
      "variants": [
        "娯楽"
      ],
      "reading": "ごらく",
      "reading_variants": [
        "ごらく"
      ],
      "romaji": "goraku",
      "part_of_speech": "noun",
      "meaning_zh": "娱乐",
      "kanji_readings": [
        {
          "form": "娯楽",
          "reading": "ごらく"
        }
      ],
      "examples": [
        {
          "ja": "昔は娯楽が少なかったです。",
          "zh": "以前娱乐很少。",
          "focus": ["娯楽"],
          "zhFocus": ["娱乐"]
        },
        {
          "ja": "映画は人気のある娯楽です。",
          "zh": "电影是很受欢迎的娱乐。",
          "focus": ["娯楽"],
          "zhFocus": ["娱乐"]
        },
        {
          "ja": "この町には娯楽の施設がありません。",
          "zh": "这个小镇没有娱乐设施。",
          "focus": ["娯楽"],
          "zhFocus": ["娱乐"]
        }
      ]
    },
    {
      "id": "n2-0346",
      "jlpt": "N2",
      "headword": "在学",
      "source_form": "在学",
      "variants": [
        "在学"
      ],
      "reading": "ざいがく",
      "reading_variants": [
        "ざいがく"
      ],
      "romaji": "zaigaku",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "在校；在读",
      "kanji_readings": [
        {
          "form": "在学",
          "reading": "ざいがく"
        }
      ],
      "examples": [
        {
          "ja": "兄は大学に在学しています。",
          "zh": "哥哥在读大学。",
          "focus": ["在学"],
          "zhFocus": ["在读"]
        },
        {
          "ja": "在学中に留学したいです。",
          "zh": "想在校期间去留学。",
          "focus": ["在学"],
          "zhFocus": ["在校"]
        },
        {
          "ja": "在学している学生は無料で使えます。",
          "zh": "在校学生可以免费使用。",
          "focus": ["在学"],
          "zhFocus": ["在校"]
        }
      ]
    },
    {
      "id": "n2-0347",
      "jlpt": "N2",
      "headword": "私鉄",
      "source_form": "私鉄",
      "variants": [
        "私鉄"
      ],
      "reading": "してつ",
      "reading_variants": [
        "してつ"
      ],
      "romaji": "shitetsu",
      "part_of_speech": "noun",
      "meaning_zh": "私营铁路",
      "kanji_readings": [
        {
          "form": "私鉄",
          "reading": "してつ"
        }
      ],
      "examples": [
        {
          "ja": "会社まで私鉄で通っています。",
          "zh": "坐私营铁路上下班。",
          "focus": ["私鉄"],
          "zhFocus": ["私营铁路"]
        },
        {
          "ja": "この駅で私鉄に乗り換えられます。",
          "zh": "在这个站可以换乘私营铁路。",
          "focus": ["私鉄"],
          "zhFocus": ["私营铁路"]
        },
        {
          "ja": "私鉄の運賃が上がりました。",
          "zh": "私营铁路的票价上涨了。",
          "focus": ["私鉄"],
          "zhFocus": ["私营铁路"]
        }
      ]
    },
    {
      "id": "n2-0348",
      "jlpt": "N2",
      "headword": "地味",
      "source_form": "地味",
      "variants": [
        "地味"
      ],
      "reading": "じみ",
      "reading_variants": [
        "じみ"
      ],
      "romaji": "jimi",
      "part_of_speech": "na-adjective",
      "meaning_zh": "朴素；素净；不起眼",
      "kanji_readings": [
        {
          "form": "地味",
          "reading": "じみ"
        }
      ],
      "examples": [
        {
          "ja": "地味な服が好きです。",
          "zh": "喜欢朴素的衣服。",
          "focus": ["地味"],
          "zhFocus": ["朴素"]
        },
        {
          "ja": "彼は地味だけど、まじめな人です。",
          "zh": "他虽然不起眼，但是个认真的人。",
          "focus": ["地味"],
          "zhFocus": ["不起眼"]
        },
        {
          "ja": "地味な仕事ですが、大切です。",
          "zh": "虽然是不起眼的工作，但很重要。",
          "focus": ["地味"],
          "zhFocus": ["不起眼"]
        }
      ],
      "note_zh": "与「派手（花哨）」相对。"
    },
    {
      "id": "n2-0349",
      "jlpt": "N2",
      "headword": "集合",
      "source_form": "集合",
      "variants": [
        "集合"
      ],
      "reading": "しゅうごう",
      "reading_variants": [
        "しゅうごう"
      ],
      "romaji": "shuugou",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "集合",
      "kanji_readings": [
        {
          "form": "集合",
          "reading": "しゅうごう"
        }
      ],
      "examples": [
        {
          "ja": "明日は駅前に集合してください。",
          "zh": "明天请在车站前集合。",
          "focus": ["集合"],
          "zhFocus": ["集合"]
        },
        {
          "ja": "集合の時間に遅れないでください。",
          "zh": "请不要错过集合时间。",
          "focus": ["集合"],
          "zhFocus": ["集合"]
        },
        {
          "ja": "全員が集合したら出発します。",
          "zh": "全员集合后就出发。",
          "focus": ["集合"],
          "zhFocus": ["集合"]
        }
      ]
    },
    {
      "id": "n2-0350",
      "jlpt": "N2",
      "headword": "寿命",
      "source_form": "寿命",
      "variants": [
        "寿命"
      ],
      "reading": "じゅみょう",
      "reading_variants": [
        "じゅみょう"
      ],
      "romaji": "jumyou",
      "part_of_speech": "noun",
      "meaning_zh": "寿命",
      "kanji_readings": [
        {
          "form": "寿命",
          "reading": "じゅみょう"
        }
      ],
      "examples": [
        {
          "ja": "日本人の平均寿命は長いです。",
          "zh": "日本人的平均寿命很长。",
          "focus": ["寿命"],
          "zhFocus": ["寿命"]
        },
        {
          "ja": "この電池は寿命が長いです。",
          "zh": "这种电池寿命很长。",
          "focus": ["寿命"],
          "zhFocus": ["寿命"]
        },
        {
          "ja": "犬の寿命は人間より短いです。",
          "zh": "狗的寿命比人短。",
          "focus": ["寿命"],
          "zhFocus": ["寿命"]
        }
      ]
    },
    {
      "id": "n2-0351",
      "jlpt": "N2",
      "headword": "巡査",
      "source_form": "巡査",
      "variants": [
        "巡査"
      ],
      "reading": "じゅんさ",
      "reading_variants": [
        "じゅんさ"
      ],
      "romaji": "junsa",
      "part_of_speech": "noun",
      "meaning_zh": "巡警；警察",
      "kanji_readings": [
        {
          "form": "巡査",
          "reading": "じゅんさ"
        }
      ],
      "examples": [
        {
          "ja": "交番の巡査に道を聞きました。",
          "zh": "向派出所的巡警问了路。",
          "focus": ["巡査"],
          "zhFocus": ["巡警"]
        },
        {
          "ja": "巡査が町をパトロールしています。",
          "zh": "巡警在城镇里巡逻。",
          "focus": ["巡査"],
          "zhFocus": ["巡警"]
        },
        {
          "ja": "兄は巡査として働いています。",
          "zh": "哥哥当警察。",
          "focus": ["巡査"],
          "zhFocus": ["警察"]
        }
      ],
      "note_zh": "日本警察中最低一级的警衔。"
    },
    {
      "id": "n2-0352",
      "jlpt": "N2",
      "headword": "純粋",
      "source_form": "純粋",
      "variants": [
        "純粋"
      ],
      "reading": "じゅんすい",
      "reading_variants": [
        "じゅんすい"
      ],
      "romaji": "junsui",
      "part_of_speech": "na-adjective",
      "meaning_zh": "纯；纯粹；纯真",
      "kanji_readings": [
        {
          "form": "純粋",
          "reading": "じゅんすい"
        }
      ],
      "examples": [
        {
          "ja": "これは純粋な金です。",
          "zh": "这是纯金。",
          "focus": ["純粋"],
          "zhFocus": ["纯"]
        },
        {
          "ja": "子供の純粋な心を大切にしたいです。",
          "zh": "想珍惜孩子纯真的心。",
          "focus": ["純粋"],
          "zhFocus": ["纯真"]
        },
        {
          "ja": "彼は純粋に音楽を楽しんでいます。",
          "zh": "他纯粹是在享受音乐。",
          "focus": ["純粋"],
          "zhFocus": ["纯粹"]
        }
      ]
    },
    {
      "id": "n2-0353",
      "jlpt": "N2",
      "headword": "上旬",
      "source_form": "上旬",
      "variants": [
        "上旬"
      ],
      "reading": "じょうじゅん",
      "reading_variants": [
        "じょうじゅん"
      ],
      "romaji": "joujun",
      "part_of_speech": "noun",
      "meaning_zh": "上旬",
      "kanji_readings": [
        {
          "form": "上旬",
          "reading": "じょうじゅん"
        }
      ],
      "examples": [
        {
          "ja": "桜は四月の上旬に咲きます。",
          "zh": "樱花在四月上旬开放。",
          "focus": ["上旬"],
          "zhFocus": ["上旬"]
        },
        {
          "ja": "来月の上旬に引っ越します。",
          "zh": "下个月上旬搬家。",
          "focus": ["上旬"],
          "zhFocus": ["上旬"]
        },
        {
          "ja": "上旬は忙しいので、中旬に会いましょう。",
          "zh": "上旬很忙，中旬再见面吧。",
          "focus": ["上旬"],
          "zhFocus": ["上旬"]
        }
      ]
    },
    {
      "id": "n2-0354",
      "jlpt": "N2",
      "headword": "職人",
      "source_form": "職人",
      "variants": [
        "職人"
      ],
      "reading": "しょくにん",
      "reading_variants": [
        "しょくにん"
      ],
      "romaji": "shokunin",
      "part_of_speech": "noun",
      "meaning_zh": "工匠；手艺人",
      "kanji_readings": [
        {
          "form": "職人",
          "reading": "しょくにん"
        }
      ],
      "examples": [
        {
          "ja": "彼は腕のいい職人です。",
          "zh": "他是手艺高超的工匠。",
          "focus": ["職人"],
          "zhFocus": ["工匠"]
        },
        {
          "ja": "職人が手で作った家具です。",
          "zh": "这是工匠手工制作的家具。",
          "focus": ["職人"],
          "zhFocus": ["工匠"]
        },
        {
          "ja": "父は靴を作る職人です。",
          "zh": "父亲是做鞋的手艺人。",
          "focus": ["職人"],
          "zhFocus": ["手艺人"]
        }
      ]
    },
    {
      "id": "n2-0355",
      "jlpt": "N2",
      "headword": "書籍",
      "source_form": "書籍",
      "variants": [
        "書籍"
      ],
      "reading": "しょせき",
      "reading_variants": [
        "しょせき"
      ],
      "romaji": "shoseki",
      "part_of_speech": "noun",
      "meaning_zh": "书籍",
      "kanji_readings": [
        {
          "form": "書籍",
          "reading": "しょせき"
        }
      ],
      "examples": [
        {
          "ja": "この店では書籍のほかに文房具も売っています。",
          "zh": "这家店除了书籍还卖文具。",
          "focus": ["書籍"],
          "zhFocus": ["书籍"]
        },
        {
          "ja": "書籍の売り上げが減っています。",
          "zh": "书籍的销售额在减少。",
          "focus": ["書籍"],
          "zhFocus": ["书籍"]
        },
        {
          "ja": "図書館で古い書籍を調べました。",
          "zh": "在图书馆查阅了旧书籍。",
          "focus": ["書籍"],
          "zhFocus": ["书籍"]
        }
      ]
    },
    {
      "id": "n2-0356",
      "jlpt": "N2",
      "headword": "知り合い",
      "source_form": "知合い",
      "variants": [
        "知り合い",
        "知合い"
      ],
      "reading": "しりあい",
      "reading_variants": [
        "しりあい"
      ],
      "romaji": "shiriai",
      "part_of_speech": "noun",
      "meaning_zh": "熟人；相识的人",
      "kanji_readings": [
        {
          "form": "知り合い",
          "reading": "しりあい"
        },
        {
          "form": "知合い",
          "reading": "しりあい"
        }
      ],
      "examples": [
        {
          "ja": "駅で知り合いに会いました。",
          "zh": "在车站遇到了熟人。",
          "focus": ["知り合い"],
          "zhFocus": ["熟人"]
        },
        {
          "ja": "この町には知り合いが一人もいません。",
          "zh": "在这个小镇一个熟人都没有。",
          "focus": ["知り合い"],
          "zhFocus": ["熟人"]
        },
        {
          "ja": "知り合いの紹介で今の会社に入りました。",
          "zh": "经熟人介绍进了现在的公司。",
          "focus": ["知り合い"],
          "zhFocus": ["熟人"]
        }
      ],
      "note_zh": "动词「知り合う（相识）」的名词形。"
    },
    {
      "id": "n2-0357",
      "jlpt": "N2",
      "headword": "素人",
      "source_form": "素人",
      "variants": [
        "素人"
      ],
      "reading": "しろうと",
      "reading_variants": [
        "しろうと"
      ],
      "romaji": "shirouto",
      "part_of_speech": "noun",
      "meaning_zh": "外行；业余的人；门外汉",
      "kanji_readings": [
        {
          "form": "素人",
          "reading": "しろうと"
        }
      ],
      "examples": [
        {
          "ja": "私は料理の素人です。",
          "zh": "我在做菜方面是外行。",
          "focus": ["素人"],
          "zhFocus": ["外行"]
        },
        {
          "ja": "素人には難しい仕事です。",
          "zh": "这是外行很难做的工作。",
          "focus": ["素人"],
          "zhFocus": ["外行"]
        },
        {
          "ja": "この写真は素人が撮ったとは思えません。",
          "zh": "这张照片看不出是业余的人拍的。",
          "focus": ["素人"],
          "zhFocus": ["业余的人"]
        }
      ],
      "note_zh": "与「玄人（内行）」相对。"
    },
    {
      "id": "n2-0358",
      "jlpt": "N2",
      "headword": "清掃",
      "source_form": "清掃",
      "variants": [
        "清掃"
      ],
      "reading": "せいそう",
      "reading_variants": [
        "せいそう"
      ],
      "romaji": "seisou",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "清扫；打扫",
      "kanji_readings": [
        {
          "form": "清掃",
          "reading": "せいそう"
        }
      ],
      "examples": [
        {
          "ja": "毎朝、駅の清掃をしています。",
          "zh": "每天早上打扫车站。",
          "focus": ["清掃"],
          "zhFocus": ["打扫"]
        },
        {
          "ja": "ボランティアで公園を清掃しました。",
          "zh": "作为志愿者清扫了公园。",
          "focus": ["清掃"],
          "zhFocus": ["清扫"]
        },
        {
          "ja": "ただいま清掃中です。",
          "zh": "现在正在清扫中。",
          "focus": ["清掃"],
          "zhFocus": ["清扫"]
        }
      ]
    },
    {
      "id": "n2-0359",
      "jlpt": "N2",
      "headword": "性別",
      "source_form": "性別",
      "variants": [
        "性別"
      ],
      "reading": "せいべつ",
      "reading_variants": [
        "せいべつ"
      ],
      "romaji": "seibetsu",
      "part_of_speech": "noun",
      "meaning_zh": "性别",
      "kanji_readings": [
        {
          "form": "性別",
          "reading": "せいべつ"
        }
      ],
      "examples": [
        {
          "ja": "用紙に名前と性別を書いてください。",
          "zh": "请在表格上写上姓名和性别。",
          "focus": ["性別"],
          "zhFocus": ["性别"]
        },
        {
          "ja": "この仕事は性別に関係なく応募できます。",
          "zh": "这份工作不论性别都可以应聘。",
          "focus": ["性別"],
          "zhFocus": ["性别"]
        },
        {
          "ja": "赤ちゃんの性別はまだ分かりません。",
          "zh": "婴儿的性别还不知道。",
          "focus": ["性別"],
          "zhFocus": ["性别"]
        }
      ]
    },
    {
      "id": "n2-0360",
      "jlpt": "N2",
      "headword": "接近",
      "source_form": "接近",
      "variants": [
        "接近"
      ],
      "reading": "せっきん",
      "reading_variants": [
        "せっきん"
      ],
      "romaji": "sekkin",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "接近；靠近",
      "kanji_readings": [
        {
          "form": "接近",
          "reading": "せっきん"
        }
      ],
      "examples": [
        {
          "ja": "台風が九州に接近しています。",
          "zh": "台风正在接近九州。",
          "focus": ["接近"],
          "zhFocus": ["接近"]
        },
        {
          "ja": "危ないので、機械に接近しないでください。",
          "zh": "很危险，请不要靠近机器。",
          "focus": ["接近"],
          "zhFocus": ["靠近"]
        },
        {
          "ja": "二人の実力は接近しています。",
          "zh": "两个人的实力很接近。",
          "focus": ["接近"],
          "zhFocus": ["接近"]
        }
      ]
    },
    {
      "id": "n2-0361",
      "jlpt": "N2",
      "headword": "攻める",
      "source_form": "攻める",
      "variants": [
        "攻める"
      ],
      "reading": "せめる",
      "reading_variants": [
        "せめる"
      ],
      "romaji": "semeru",
      "part_of_speech": "verb",
      "meaning_zh": "进攻；攻击",
      "kanji_readings": [
        {
          "form": "攻める",
          "reading": "せめる"
        }
      ],
      "examples": [
        {
          "ja": "敵の城を攻めました。",
          "zh": "进攻了敌人的城池。",
          "focus": ["攻め"],
          "zhFocus": ["进攻"]
        },
        {
          "ja": "後半は相手のチームが攻めてきました。",
          "zh": "下半场对方的队伍攻了过来。",
          "focus": ["攻め"],
          "zhFocus": ["攻"]
        },
        {
          "ja": "もっと積極的に攻めるべきです。",
          "zh": "应该更积极地进攻。",
          "focus": ["攻める"],
          "zhFocus": ["进攻"]
        }
      ],
      "note_zh": "与「守る（防守）」相对；与「責める（责备）」同音。"
    },
    {
      "id": "n2-0362",
      "jlpt": "N2",
      "headword": "総理大臣",
      "source_form": "総理大臣",
      "variants": [
        "総理大臣"
      ],
      "reading": "そうりだいじん",
      "reading_variants": [
        "そうりだいじん"
      ],
      "romaji": "souridaijin",
      "part_of_speech": "noun",
      "meaning_zh": "总理大臣；首相",
      "kanji_readings": [
        {
          "form": "総理大臣",
          "reading": "そうりだいじん"
        }
      ],
      "examples": [
        {
          "ja": "総理大臣が記者の質問に答えました。",
          "zh": "首相回答了记者的提问。",
          "focus": ["総理大臣"],
          "zhFocus": ["首相"]
        },
        {
          "ja": "新しい総理大臣が選ばれました。",
          "zh": "选出了新的首相。",
          "focus": ["総理大臣"],
          "zhFocus": ["首相"]
        },
        {
          "ja": "日本の総理大臣は国会で選ばれます。",
          "zh": "日本的总理大臣由国会选出。",
          "focus": ["総理大臣"],
          "zhFocus": ["总理大臣"]
        }
      ],
      "note_zh": "口语中常简称「総理」。"
    },
    {
      "id": "n2-0363",
      "jlpt": "N2",
      "headword": "的確",
      "source_form": "的確",
      "variants": [
        "的確",
        "適確"
      ],
      "reading": "てきかく",
      "reading_variants": [
        "てきかく"
      ],
      "romaji": "tekikaku",
      "part_of_speech": "na-adjective",
      "meaning_zh": "准确；确切；恰当",
      "kanji_readings": [
        {
          "form": "的確",
          "reading": "てきかく"
        },
        {
          "form": "適確",
          "reading": "てきかく"
        }
      ],
      "examples": [
        {
          "ja": "彼はいつも的確な判断をします。",
          "zh": "他总是做出准确的判断。",
          "focus": ["的確"],
          "zhFocus": ["准确"]
        },
        {
          "ja": "先生が的確なアドバイスをくれました。",
          "zh": "老师给了恰当的建议。",
          "focus": ["的確"],
          "zhFocus": ["恰当"]
        },
        {
          "ja": "質問に的確に答えてください。",
          "zh": "请确切地回答问题。",
          "focus": ["的確"],
          "zhFocus": ["确切"]
        }
      ]
    },
    {
      "id": "n2-0364",
      "jlpt": "N2",
      "headword": "手帳",
      "source_form": "手帳",
      "variants": [
        "手帳"
      ],
      "reading": "てちょう",
      "reading_variants": [
        "てちょう"
      ],
      "romaji": "techou",
      "part_of_speech": "noun",
      "meaning_zh": "记事本；手册",
      "kanji_readings": [
        {
          "form": "手帳",
          "reading": "てちょう"
        }
      ],
      "examples": [
        {
          "ja": "予定を手帳に書きました。",
          "zh": "把安排写在了记事本上。",
          "focus": ["手帳"],
          "zhFocus": ["记事本"]
        },
        {
          "ja": "手帳をなくして困っています。",
          "zh": "记事本丢了，很为难。",
          "focus": ["手帳"],
          "zhFocus": ["记事本"]
        },
        {
          "ja": "新しい年の手帳を買いました。",
          "zh": "买了新一年的记事本。",
          "focus": ["手帳"],
          "zhFocus": ["记事本"]
        }
      ]
    },
    {
      "id": "n2-0365",
      "jlpt": "N2",
      "headword": "南極",
      "source_form": "南極",
      "variants": [
        "南極"
      ],
      "reading": "なんきょく",
      "reading_variants": [
        "なんきょく"
      ],
      "romaji": "nankyoku",
      "part_of_speech": "noun",
      "meaning_zh": "南极",
      "kanji_readings": [
        {
          "form": "南極",
          "reading": "なんきょく"
        }
      ],
      "examples": [
        {
          "ja": "南極にはペンギンがいます。",
          "zh": "南极有企鹅。",
          "focus": ["南極"],
          "zhFocus": ["南极"]
        },
        {
          "ja": "南極の氷が溶けています。",
          "zh": "南极的冰正在融化。",
          "focus": ["南極"],
          "zhFocus": ["南极"]
        },
        {
          "ja": "いつか南極に行ってみたいです。",
          "zh": "总有一天想去南极看看。",
          "focus": ["南極"],
          "zhFocus": ["南极"]
        }
      ],
      "note_zh": "与「北極（北极）」相对。"
    },
    {
      "id": "n2-0366",
      "jlpt": "N2",
      "headword": "平日",
      "source_form": "平日",
      "variants": [
        "平日"
      ],
      "reading": "へいじつ",
      "reading_variants": [
        "へいじつ"
      ],
      "romaji": "heijitsu",
      "part_of_speech": "noun",
      "meaning_zh": "平日；工作日",
      "kanji_readings": [
        {
          "form": "平日",
          "reading": "へいじつ"
        }
      ],
      "examples": [
        {
          "ja": "平日は仕事で忙しいです。",
          "zh": "平日工作很忙。",
          "focus": ["平日"],
          "zhFocus": ["平日"]
        },
        {
          "ja": "この店は平日のほうがすいています。",
          "zh": "这家店工作日人比较少。",
          "focus": ["平日"],
          "zhFocus": ["工作日"]
        },
        {
          "ja": "銀行は平日しか開いていません。",
          "zh": "银行只在工作日营业。",
          "focus": ["平日"],
          "zhFocus": ["工作日"]
        }
      ]
    },
    {
      "id": "n2-0367",
      "jlpt": "N2",
      "headword": "平野",
      "source_form": "平野",
      "variants": [
        "平野"
      ],
      "reading": "へいや",
      "reading_variants": [
        "へいや"
      ],
      "romaji": "heiya",
      "part_of_speech": "noun",
      "meaning_zh": "平原",
      "kanji_readings": [
        {
          "form": "平野",
          "reading": "へいや"
        }
      ],
      "examples": [
        {
          "ja": "日本で一番広い平野は関東にあります。",
          "zh": "日本最大的平原在关东。",
          "focus": ["平野"],
          "zhFocus": ["平原"]
        },
        {
          "ja": "平野には田んぼが広がっています。",
          "zh": "平原上铺展着一片片水田。",
          "focus": ["平野"],
          "zhFocus": ["平原"]
        },
        {
          "ja": "山を下りると、広い平野が見えました。",
          "zh": "下了山，就看到了广阔的平原。",
          "focus": ["平野"],
          "zhFocus": ["平原"]
        }
      ]
    },
    {
      "id": "n2-0368",
      "jlpt": "N2",
      "headword": "満員",
      "source_form": "満員",
      "variants": [
        "満員"
      ],
      "reading": "まんいん",
      "reading_variants": [
        "まんいん"
      ],
      "romaji": "man'in",
      "part_of_speech": "noun",
      "meaning_zh": "满员；客满",
      "kanji_readings": [
        {
          "form": "満員",
          "reading": "まんいん"
        }
      ],
      "examples": [
        {
          "ja": "朝の電車はいつも満員です。",
          "zh": "早上的电车总是满员。",
          "focus": ["満員"],
          "zhFocus": ["满员"]
        },
        {
          "ja": "コンサートの会場は満員でした。",
          "zh": "音乐会的会场座无虚席。",
          "focus": ["満員"],
          "zhFocus": ["座无虚席"]
        },
        {
          "ja": "満員のバスに乗るのは大変です。",
          "zh": "坐满员的公交车很辛苦。",
          "focus": ["満員"],
          "zhFocus": ["满员"]
        }
      ]
    },
    {
      "id": "n2-0369",
      "jlpt": "N2",
      "headword": "身分",
      "source_form": "身分",
      "variants": [
        "身分"
      ],
      "reading": "みぶん",
      "reading_variants": [
        "みぶん"
      ],
      "romaji": "mibun",
      "part_of_speech": "noun",
      "meaning_zh": "身份；地位",
      "kanji_readings": [
        {
          "form": "身分",
          "reading": "みぶん"
        }
      ],
      "examples": [
        {
          "ja": "受付で身分を確認されました。",
          "zh": "在前台被核实了身份。",
          "focus": ["身分"],
          "zhFocus": ["身份"]
        },
        {
          "ja": "昔は身分によって職業が決まっていました。",
          "zh": "以前职业是由身份决定的。",
          "focus": ["身分"],
          "zhFocus": ["身份"]
        },
        {
          "ja": "彼は学生の身分で会社を作りました。",
          "zh": "他以学生的身份创办了公司。",
          "focus": ["身分"],
          "zhFocus": ["身份"]
        }
      ]
    },
    {
      "id": "n2-0370",
      "jlpt": "N2",
      "headword": "用途",
      "source_form": "用途",
      "variants": [
        "用途"
      ],
      "reading": "ようと",
      "reading_variants": [
        "ようと"
      ],
      "romaji": "youto",
      "part_of_speech": "noun",
      "meaning_zh": "用途",
      "kanji_readings": [
        {
          "form": "用途",
          "reading": "ようと"
        }
      ],
      "examples": [
        {
          "ja": "この機械はいろいろな用途に使えます。",
          "zh": "这台机器可以用于各种用途。",
          "focus": ["用途"],
          "zhFocus": ["用途"]
        },
        {
          "ja": "お金の用途を説明してください。",
          "zh": "请说明钱的用途。",
          "focus": ["用途"],
          "zhFocus": ["用途"]
        },
        {
          "ja": "用途に合わせて道具を選びます。",
          "zh": "根据用途来挑选工具。",
          "focus": ["用途"],
          "zhFocus": ["用途"]
        }
      ]
    },
    {
      "id": "n2-0371",
      "jlpt": "N2",
      "headword": "寄せる",
      "source_form": "寄せる",
      "variants": [
        "寄せる"
      ],
      "reading": "よせる",
      "reading_variants": [
        "よせる"
      ],
      "romaji": "yoseru",
      "part_of_speech": "verb",
      "meaning_zh": "挪近；靠近；（把意见等）寄来；聚集",
      "senses_zh": [
        "挪近；靠近",
        "（把意见等）寄来；聚集"
      ],
      "kanji_readings": [
        {
          "form": "寄せる",
          "reading": "よせる"
        }
      ],
      "examples": [
        {
          "ja": "机を窓のほうに寄せました。",
          "zh": "把桌子挪到了靠窗的地方。",
          "focus": ["寄せ"],
          "zhFocus": ["挪"]
        },
        {
          "ja": "車を道の端に寄せて止めました。",
          "zh": "把车靠到路边停下了。",
          "focus": ["寄せ"],
          "zhFocus": ["靠"]
        },
        {
          "ja": "たくさんの意見が寄せられました。",
          "zh": "收到了许多意见。",
          "focus": ["寄せ"],
          "zhFocus": ["收到"]
        }
      ]
    },
    {
      "id": "n2-0372",
      "jlpt": "N2",
      "headword": "理科",
      "source_form": "理科",
      "variants": [
        "理科"
      ],
      "reading": "りか",
      "reading_variants": [
        "りか"
      ],
      "romaji": "rika",
      "part_of_speech": "noun",
      "meaning_zh": "理科（自然科学课）",
      "kanji_readings": [
        {
          "form": "理科",
          "reading": "りか"
        }
      ],
      "examples": [
        {
          "ja": "理科の授業で実験をしました。",
          "zh": "在理科课上做了实验。",
          "focus": ["理科"],
          "zhFocus": ["理科"]
        },
        {
          "ja": "子供のころから理科が好きでした。",
          "zh": "从小就喜欢理科。",
          "focus": ["理科"],
          "zhFocus": ["理科"]
        },
        {
          "ja": "理科の先生に質問しました。",
          "zh": "向理科老师提了问题。",
          "focus": ["理科"],
          "zhFocus": ["理科"]
        }
      ],
      "note_zh": "日本中小学的“理科”相当于自然科学课。"
    },
    {
      "id": "n2-0373",
      "jlpt": "N2",
      "headword": "録音",
      "source_form": "録音",
      "variants": [
        "録音"
      ],
      "reading": "ろくおん",
      "reading_variants": [
        "ろくおん"
      ],
      "romaji": "rokuon",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "录音",
      "kanji_readings": [
        {
          "form": "録音",
          "reading": "ろくおん"
        }
      ],
      "examples": [
        {
          "ja": "会議の内容を録音しました。",
          "zh": "把会议内容录了音。",
          "focus": ["録音"],
          "zhFocus": ["录"]
        },
        {
          "ja": "自分の声を録音して聞いてみました。",
          "zh": "把自己的声音录下来听了听。",
          "focus": ["録音"],
          "zhFocus": ["录"]
        },
        {
          "ja": "この部屋では録音は禁止です。",
          "zh": "这个房间禁止录音。",
          "focus": ["録音"],
          "zhFocus": ["录音"]
        }
      ]
    },
    {
      "id": "n2-0374",
      "jlpt": "N2",
      "headword": "割引",
      "source_form": "割引",
      "variants": [
        "割引",
        "割り引き"
      ],
      "reading": "わりびき",
      "reading_variants": [
        "わりびき"
      ],
      "romaji": "waribiki",
      "part_of_speech": "noun",
      "meaning_zh": "折扣；打折",
      "kanji_readings": [
        {
          "form": "割引",
          "reading": "わりびき"
        },
        {
          "form": "割り引き",
          "reading": "わりびき"
        }
      ],
      "examples": [
        {
          "ja": "学生は割引があります。",
          "zh": "学生有折扣。",
          "focus": ["割引"],
          "zhFocus": ["折扣"]
        },
        {
          "ja": "この券を見せると割引になります。",
          "zh": "出示这张券就可以打折。",
          "focus": ["割引"],
          "zhFocus": ["打折"]
        },
        {
          "ja": "割引の商品はもう売り切れました。",
          "zh": "打折的商品已经卖完了。",
          "focus": ["割引"],
          "zhFocus": ["打折"]
        }
      ]
    },
    {
      "id": "n2-0375",
      "jlpt": "N2",
      "headword": "足跡",
      "source_form": "足跡",
      "variants": [
        "足跡"
      ],
      "reading": "あしあと",
      "reading_variants": [
        "あしあと"
      ],
      "romaji": "ashiato",
      "part_of_speech": "noun",
      "meaning_zh": "脚印；足迹",
      "kanji_readings": [
        {
          "form": "足跡",
          "reading": "あしあと"
        }
      ],
      "examples": [
        {
          "ja": "雪の上に動物の足跡が残っています。",
          "zh": "雪上留着动物的脚印。",
          "focus": ["足跡"],
          "zhFocus": ["脚印"]
        },
        {
          "ja": "砂浜に足跡をつけて歩きました。",
          "zh": "在沙滩上留下脚印走着。",
          "focus": ["足跡"],
          "zhFocus": ["脚印"]
        },
        {
          "ja": "犯人の足跡が見つかりました。",
          "zh": "找到了犯人的脚印。",
          "focus": ["足跡"],
          "zhFocus": ["脚印"]
        }
      ]
    },
    {
      "id": "n2-0376",
      "jlpt": "N2",
      "headword": "いちいち",
      "source_form": "一々",
      "variants": [
        "いちいち",
        "一々"
      ],
      "reading": "いちいち",
      "reading_variants": [
        "いちいち"
      ],
      "romaji": "ichiichi",
      "part_of_speech": "adverb",
      "meaning_zh": "一一；逐一；每件都",
      "kanji_readings": [
        {
          "form": "一々",
          "reading": "いちいち"
        }
      ],
      "examples": [
        {
          "ja": "書類をいちいち確認しました。",
          "zh": "把文件一一确认了。",
          "focus": ["いちいち"],
          "zhFocus": ["一一"]
        },
        {
          "ja": "いちいち説明しなくても分かります。",
          "zh": "不用逐一解释也明白。",
          "focus": ["いちいち"],
          "zhFocus": ["逐一"]
        },
        {
          "ja": "彼は人の言うことにいちいち文句を言います。",
          "zh": "别人说什么他都要抱怨。",
          "focus": ["いちいち"],
          "zhFocus": ["都"]
        }
      ],
      "note_zh": "多写作假名；后接否定或抱怨时带有“连小事都……”的不满语气。"
    },
    {
      "id": "n2-0377",
      "jlpt": "N2",
      "headword": "学年",
      "source_form": "学年",
      "variants": [
        "学年"
      ],
      "reading": "がくねん",
      "reading_variants": [
        "がくねん"
      ],
      "romaji": "gakunen",
      "part_of_speech": "noun",
      "meaning_zh": "学年；年级",
      "kanji_readings": [
        {
          "form": "学年",
          "reading": "がくねん"
        }
      ],
      "examples": [
        {
          "ja": "彼とは同じ学年です。",
          "zh": "我和他是同一个年级。",
          "focus": ["学年"],
          "zhFocus": ["年级"]
        },
        {
          "ja": "学年が上がると、勉強が難しくなります。",
          "zh": "年级升高后，学习会变难。",
          "focus": ["学年"],
          "zhFocus": ["年级"]
        },
        {
          "ja": "日本の学校は四月に学年が始まります。",
          "zh": "日本的学校在四月开始新学年。",
          "focus": ["学年"],
          "zhFocus": ["学年"]
        }
      ]
    },
    {
      "id": "n2-0378",
      "jlpt": "N2",
      "headword": "確率",
      "source_form": "確率",
      "variants": [
        "確率"
      ],
      "reading": "かくりつ",
      "reading_variants": [
        "かくりつ"
      ],
      "romaji": "kakuritsu",
      "part_of_speech": "noun",
      "meaning_zh": "概率；可能性",
      "kanji_readings": [
        {
          "form": "確率",
          "reading": "かくりつ"
        }
      ],
      "examples": [
        {
          "ja": "明日、雨が降る確率は高いです。",
          "zh": "明天下雨的概率很高。",
          "focus": ["確率"],
          "zhFocus": ["概率"]
        },
        {
          "ja": "成功する確率は低いですが、やってみます。",
          "zh": "成功的可能性虽然低，但我要试试。",
          "focus": ["確率"],
          "zhFocus": ["可能性"]
        },
        {
          "ja": "数学の授業で確率を習いました。",
          "zh": "在数学课上学了概率。",
          "focus": ["確率"],
          "zhFocus": ["概率"]
        }
      ]
    },
    {
      "id": "n2-0379",
      "jlpt": "N2",
      "headword": "学級",
      "source_form": "学級",
      "variants": [
        "学級"
      ],
      "reading": "がっきゅう",
      "reading_variants": [
        "がっきゅう"
      ],
      "romaji": "gakkyuu",
      "part_of_speech": "noun",
      "meaning_zh": "班级",
      "kanji_readings": [
        {
          "form": "学級",
          "reading": "がっきゅう"
        }
      ],
      "examples": [
        {
          "ja": "この学級には元気な生徒が多いです。",
          "zh": "这个班活泼的学生很多。",
          "focus": ["学級"],
          "zhFocus": ["班"]
        },
        {
          "ja": "学級の代表に選ばれました。",
          "zh": "被选为班级代表。",
          "focus": ["学級"],
          "zhFocus": ["班级"]
        },
        {
          "ja": "インフルエンザで学級が閉鎖されました。",
          "zh": "因为流感，班级停课了。",
          "focus": ["学級"],
          "zhFocus": ["班级"]
        }
      ]
    },
    {
      "id": "n2-0380",
      "jlpt": "N2",
      "headword": "活字",
      "source_form": "活字",
      "variants": [
        "活字"
      ],
      "reading": "かつじ",
      "reading_variants": [
        "かつじ"
      ],
      "romaji": "katsuji",
      "part_of_speech": "noun",
      "meaning_zh": "铅字；印刷的文字",
      "kanji_readings": [
        {
          "form": "活字",
          "reading": "かつじ"
        }
      ],
      "examples": [
        {
          "ja": "最近の若い人は活字を読まないと言われます。",
          "zh": "人们说最近的年轻人不读书报。",
          "focus": ["活字"],
          "zhFocus": ["书报"]
        },
        {
          "ja": "自分の文章が活字になってうれしいです。",
          "zh": "自己的文章印成了铅字，很高兴。",
          "focus": ["活字"],
          "zhFocus": ["铅字"]
        },
        {
          "ja": "この本は活字が大きくて読みやすいです。",
          "zh": "这本书字体大，容易读。",
          "focus": ["活字"],
          "zhFocus": ["字体"]
        }
      ]
    },
    {
      "id": "n2-0381",
      "jlpt": "N2",
      "headword": "課程",
      "source_form": "課程",
      "variants": [
        "課程"
      ],
      "reading": "かてい",
      "reading_variants": [
        "かてい"
      ],
      "romaji": "katei",
      "part_of_speech": "noun",
      "meaning_zh": "课程",
      "kanji_readings": [
        {
          "form": "課程",
          "reading": "かてい"
        }
      ],
      "examples": [
        {
          "ja": "大学院の博士課程に進みました。",
          "zh": "进入了研究生院的博士课程。",
          "focus": ["課程"],
          "zhFocus": ["课程"]
        },
        {
          "ja": "この学校は三年で課程を終えます。",
          "zh": "这所学校三年修完课程。",
          "focus": ["課程"],
          "zhFocus": ["课程"]
        },
        {
          "ja": "教職の課程を取っています。",
          "zh": "在修教师资格课程。",
          "focus": ["課程"],
          "zhFocus": ["课程"]
        }
      ]
    },
    {
      "id": "n2-0382",
      "jlpt": "N2",
      "headword": "神様",
      "source_form": "神様",
      "variants": [
        "神様"
      ],
      "reading": "かみさま",
      "reading_variants": [
        "かみさま"
      ],
      "romaji": "kamisama",
      "part_of_speech": "noun",
      "meaning_zh": "神；上帝；（某领域的）高手",
      "senses_zh": [
        "神；上帝",
        "（某领域的）高手"
      ],
      "kanji_readings": [
        {
          "form": "神様",
          "reading": "かみさま"
        }
      ],
      "examples": [
        {
          "ja": "神様にお願いしました。",
          "zh": "向神祈求了。",
          "focus": ["神様"],
          "zhFocus": ["神"]
        },
        {
          "ja": "この神社には山の神様がいるそうです。",
          "zh": "听说这座神社里有山神。",
          "focus": ["神様"],
          "zhFocus": ["神"]
        },
        {
          "ja": "彼はサッカーの神様と呼ばれています。",
          "zh": "他被称为“足球之神”。",
          "focus": ["神様"],
          "zhFocus": ["神"]
        }
      ]
    },
    {
      "id": "n2-0383",
      "jlpt": "N2",
      "headword": "気圧",
      "source_form": "気圧",
      "variants": [
        "気圧"
      ],
      "reading": "きあつ",
      "reading_variants": [
        "きあつ"
      ],
      "romaji": "kiatsu",
      "part_of_speech": "noun",
      "meaning_zh": "气压",
      "kanji_readings": [
        {
          "form": "気圧",
          "reading": "きあつ"
        }
      ],
      "examples": [
        {
          "ja": "台風は気圧の低いところで生まれます。",
          "zh": "台风在气压低的地方形成。",
          "focus": ["気圧"],
          "zhFocus": ["气压"]
        },
        {
          "ja": "山の上は気圧が低いです。",
          "zh": "山上气压低。",
          "focus": ["気圧"],
          "zhFocus": ["气压"]
        },
        {
          "ja": "気圧の変化で頭が痛くなります。",
          "zh": "气压一变化就头疼。",
          "focus": ["気圧"],
          "zhFocus": ["气压"]
        }
      ]
    },
    {
      "id": "n2-0384",
      "jlpt": "N2",
      "headword": "客席",
      "source_form": "客席",
      "variants": [
        "客席"
      ],
      "reading": "きゃくせき",
      "reading_variants": [
        "きゃくせき"
      ],
      "romaji": "kyakuseki",
      "part_of_speech": "noun",
      "meaning_zh": "观众席；客座",
      "kanji_readings": [
        {
          "form": "客席",
          "reading": "きゃくせき"
        }
      ],
      "examples": [
        {
          "ja": "客席からたくさんの拍手が起こりました。",
          "zh": "观众席上响起了热烈的掌声。",
          "focus": ["客席"],
          "zhFocus": ["观众席"]
        },
        {
          "ja": "客席はほとんど埋まっていました。",
          "zh": "观众席几乎坐满了。",
          "focus": ["客席"],
          "zhFocus": ["观众席"]
        },
        {
          "ja": "この劇場は客席が多いです。",
          "zh": "这个剧场座位很多。",
          "focus": ["客席"],
          "zhFocus": ["座位"]
        }
      ]
    },
    {
      "id": "n2-0385",
      "jlpt": "N2",
      "headword": "系統",
      "source_form": "系統",
      "variants": [
        "系統"
      ],
      "reading": "けいとう",
      "reading_variants": [
        "けいとう"
      ],
      "romaji": "keitou",
      "part_of_speech": "noun",
      "meaning_zh": "系统；（同一）类别；路线",
      "kanji_readings": [
        {
          "form": "系統",
          "reading": "けいとう"
        }
      ],
      "examples": [
        {
          "ja": "電気の系統に問題がありました。",
          "zh": "电力系统出了问题。",
          "focus": ["系統"],
          "zhFocus": ["系统"]
        },
        {
          "ja": "私は青い系統の色が好きです。",
          "zh": "我喜欢蓝色系的颜色。",
          "focus": ["系統"],
          "zhFocus": ["系"]
        },
        {
          "ja": "このバスはどの系統ですか。",
          "zh": "这辆公交车是哪条线路？",
          "focus": ["系統"],
          "zhFocus": ["线路"]
        }
      ]
    },
    {
      "id": "n2-0386",
      "jlpt": "N2",
      "headword": "血圧",
      "source_form": "血圧",
      "variants": [
        "血圧"
      ],
      "reading": "けつあつ",
      "reading_variants": [
        "けつあつ"
      ],
      "romaji": "ketsuatsu",
      "part_of_speech": "noun",
      "meaning_zh": "血压",
      "kanji_readings": [
        {
          "form": "血圧",
          "reading": "けつあつ"
        }
      ],
      "examples": [
        {
          "ja": "病院で血圧を測りました。",
          "zh": "在医院量了血压。",
          "focus": ["血圧"],
          "zhFocus": ["血压"]
        },
        {
          "ja": "父は血圧が高いです。",
          "zh": "父亲血压高。",
          "focus": ["血圧"],
          "zhFocus": ["血压"]
        },
        {
          "ja": "塩分を減らすと、血圧が下がります。",
          "zh": "减少盐分，血压就会下降。",
          "focus": ["血圧"],
          "zhFocus": ["血压"]
        }
      ]
    },
    {
      "id": "n2-0387",
      "jlpt": "N2",
      "headword": "県庁",
      "source_form": "県庁",
      "variants": [
        "県庁"
      ],
      "reading": "けんちょう",
      "reading_variants": [
        "けんちょう"
      ],
      "romaji": "kenchou",
      "part_of_speech": "noun",
      "meaning_zh": "县政府",
      "kanji_readings": [
        {
          "form": "県庁",
          "reading": "けんちょう"
        }
      ],
      "examples": [
        {
          "ja": "県庁で働いています。",
          "zh": "在县政府工作。",
          "focus": ["県庁"],
          "zhFocus": ["县政府"]
        },
        {
          "ja": "県庁は駅の近くにあります。",
          "zh": "县政府在车站附近。",
          "focus": ["県庁"],
          "zhFocus": ["县政府"]
        },
        {
          "ja": "県庁に書類を出しに行きました。",
          "zh": "去县政府交了文件。",
          "focus": ["県庁"],
          "zhFocus": ["县政府"]
        }
      ],
      "note_zh": "日本的「県」是一级行政区，相当于中国的省。"
    },
    {
      "id": "n2-0388",
      "jlpt": "N2",
      "headword": "肯定",
      "source_form": "肯定",
      "variants": [
        "肯定"
      ],
      "reading": "こうてい",
      "reading_variants": [
        "こうてい"
      ],
      "romaji": "koutei",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "肯定；承认",
      "kanji_readings": [
        {
          "form": "肯定",
          "reading": "こうてい"
        }
      ],
      "examples": [
        {
          "ja": "彼はそのうわさを肯定しました。",
          "zh": "他承认了那个传闻。",
          "focus": ["肯定"],
          "zhFocus": ["承认"]
        },
        {
          "ja": "子供の努力を肯定することが大切です。",
          "zh": "肯定孩子的努力很重要。",
          "focus": ["肯定"],
          "zhFocus": ["肯定"]
        },
        {
          "ja": "肯定の文を否定の文に変えてください。",
          "zh": "请把肯定句改成否定句。",
          "focus": ["肯定"],
          "zhFocus": ["肯定"]
        }
      ],
      "note_zh": "与「否定（否定）」相对。"
    },
    {
      "id": "n2-0389",
      "jlpt": "N2",
      "headword": "四季",
      "source_form": "四季",
      "variants": [
        "四季"
      ],
      "reading": "しき",
      "reading_variants": [
        "しき"
      ],
      "romaji": "shiki",
      "part_of_speech": "noun",
      "meaning_zh": "四季",
      "kanji_readings": [
        {
          "form": "四季",
          "reading": "しき"
        }
      ],
      "examples": [
        {
          "ja": "この地方は四季がはっきりしています。",
          "zh": "这个地方四季分明。",
          "focus": ["四季"],
          "zhFocus": ["四季"]
        },
        {
          "ja": "この公園では四季の花が楽しめます。",
          "zh": "在这个公园可以欣赏四季的花。",
          "focus": ["四季"],
          "zhFocus": ["四季"]
        },
        {
          "ja": "四季の中で秋が一番好きです。",
          "zh": "四季中最喜欢秋天。",
          "focus": ["四季"],
          "zhFocus": ["四季"]
        }
      ]
    },
    {
      "id": "n2-0390",
      "jlpt": "N2",
      "headword": "下町",
      "source_form": "下町",
      "variants": [
        "下町"
      ],
      "reading": "したまち",
      "reading_variants": [
        "したまち"
      ],
      "romaji": "shitamachi",
      "part_of_speech": "noun",
      "meaning_zh": "（城市里的）平民区；老街区",
      "kanji_readings": [
        {
          "form": "下町",
          "reading": "したまち"
        }
      ],
      "examples": [
        {
          "ja": "私は東京の下町で育ちました。",
          "zh": "我在东京的老街区长大。",
          "focus": ["下町"],
          "zhFocus": ["老街区"]
        },
        {
          "ja": "下町には古い店がたくさん残っています。",
          "zh": "老街区还留着很多老店。",
          "focus": ["下町"],
          "zhFocus": ["老街区"]
        },
        {
          "ja": "下町の人は親切だと言われます。",
          "zh": "人们说平民区的人很热情。",
          "focus": ["下町"],
          "zhFocus": ["平民区"]
        }
      ]
    },
    {
      "id": "n2-0391",
      "jlpt": "N2",
      "headword": "紙幣",
      "source_form": "紙幣",
      "variants": [
        "紙幣"
      ],
      "reading": "しへい",
      "reading_variants": [
        "しへい"
      ],
      "romaji": "shihei",
      "part_of_speech": "noun",
      "meaning_zh": "纸币",
      "kanji_readings": [
        {
          "form": "紙幣",
          "reading": "しへい"
        }
      ],
      "examples": [
        {
          "ja": "この機械は紙幣が使えません。",
          "zh": "这台机器不能用纸币。",
          "focus": ["紙幣"],
          "zhFocus": ["纸币"]
        },
        {
          "ja": "新しい紙幣が発行されました。",
          "zh": "发行了新纸币。",
          "focus": ["紙幣"],
          "zhFocus": ["纸币"]
        },
        {
          "ja": "財布の中には紙幣が少ししかありません。",
          "zh": "钱包里只有一点纸币。",
          "focus": ["紙幣"],
          "zhFocus": ["纸币"]
        }
      ]
    },
    {
      "id": "n2-0392",
      "jlpt": "N2",
      "headword": "祝日",
      "source_form": "祝日",
      "variants": [
        "祝日"
      ],
      "reading": "しゅくじつ",
      "reading_variants": [
        "しゅくじつ"
      ],
      "romaji": "shukujitsu",
      "part_of_speech": "noun",
      "meaning_zh": "节日；法定假日",
      "kanji_readings": [
        {
          "form": "祝日",
          "reading": "しゅくじつ"
        }
      ],
      "examples": [
        {
          "ja": "明日は祝日なので、学校が休みです。",
          "zh": "明天是节日，学校放假。",
          "focus": ["祝日"],
          "zhFocus": ["节日"]
        },
        {
          "ja": "祝日は店が混みます。",
          "zh": "节假日店里人多。",
          "focus": ["祝日"],
          "zhFocus": ["节假日"]
        },
        {
          "ja": "今月は祝日がありません。",
          "zh": "这个月没有法定假日。",
          "focus": ["祝日"],
          "zhFocus": ["法定假日"]
        }
      ]
    },
    {
      "id": "n2-0393",
      "jlpt": "N2",
      "headword": "蒸気",
      "source_form": "蒸気",
      "variants": [
        "蒸気"
      ],
      "reading": "じょうき",
      "reading_variants": [
        "じょうき"
      ],
      "romaji": "jouki",
      "part_of_speech": "noun",
      "meaning_zh": "蒸汽",
      "kanji_readings": [
        {
          "form": "蒸気",
          "reading": "じょうき"
        }
      ],
      "examples": [
        {
          "ja": "やかんから蒸気が出ています。",
          "zh": "水壶里冒出了蒸汽。",
          "focus": ["蒸気"],
          "zhFocus": ["蒸汽"]
        },
        {
          "ja": "昔は蒸気で動く機関車がありました。",
          "zh": "以前有靠蒸汽驱动的火车头。",
          "focus": ["蒸気"],
          "zhFocus": ["蒸汽"]
        },
        {
          "ja": "熱い蒸気に気をつけてください。",
          "zh": "请小心滚烫的蒸汽。",
          "focus": ["蒸気"],
          "zhFocus": ["蒸汽"]
        }
      ]
    },
    {
      "id": "n2-0394",
      "jlpt": "N2",
      "headword": "上級",
      "source_form": "上級",
      "variants": [
        "上級"
      ],
      "reading": "じょうきゅう",
      "reading_variants": [
        "じょうきゅう"
      ],
      "romaji": "joukyuu",
      "part_of_speech": "noun",
      "meaning_zh": "上级；高级",
      "kanji_readings": [
        {
          "form": "上級",
          "reading": "じょうきゅう"
        }
      ],
      "examples": [
        {
          "ja": "日本語の上級のクラスに入りました。",
          "zh": "进了日语高级班。",
          "focus": ["上級"],
          "zhFocus": ["高级"]
        },
        {
          "ja": "上級の試験に合格しました。",
          "zh": "通过了高级考试。",
          "focus": ["上級"],
          "zhFocus": ["高级"]
        },
        {
          "ja": "彼は私より上級の生徒です。",
          "zh": "他是比我高年级的学生。",
          "focus": ["上級"],
          "zhFocus": ["高年级"]
        }
      ],
      "note_zh": "与「初級（初级）」「中級（中级）」相对。"
    },
    {
      "id": "n2-0395",
      "jlpt": "N2",
      "headword": "勝敗",
      "source_form": "勝敗",
      "variants": [
        "勝敗"
      ],
      "reading": "しょうはい",
      "reading_variants": [
        "しょうはい"
      ],
      "romaji": "shouhai",
      "part_of_speech": "noun",
      "meaning_zh": "胜负",
      "kanji_readings": [
        {
          "form": "勝敗",
          "reading": "しょうはい"
        }
      ],
      "examples": [
        {
          "ja": "最後の一点で勝敗が決まりました。",
          "zh": "最后一分决定了胜负。",
          "focus": ["勝敗"],
          "zhFocus": ["胜负"]
        },
        {
          "ja": "勝敗よりも楽しむことが大切です。",
          "zh": "比起胜负，享受过程更重要。",
          "focus": ["勝敗"],
          "zhFocus": ["胜负"]
        },
        {
          "ja": "試合の勝敗はまだ分かりません。",
          "zh": "比赛的胜负还不知道。",
          "focus": ["勝敗"],
          "zhFocus": ["胜负"]
        }
      ]
    },
    {
      "id": "n2-0396",
      "jlpt": "N2",
      "headword": "初旬",
      "source_form": "初旬",
      "variants": [
        "初旬"
      ],
      "reading": "しょじゅん",
      "reading_variants": [
        "しょじゅん"
      ],
      "romaji": "shojun",
      "part_of_speech": "noun",
      "meaning_zh": "上旬；初旬",
      "kanji_readings": [
        {
          "form": "初旬",
          "reading": "しょじゅん"
        }
      ],
      "examples": [
        {
          "ja": "来月の初旬に旅行に行きます。",
          "zh": "下个月上旬去旅行。",
          "focus": ["初旬"],
          "zhFocus": ["上旬"]
        },
        {
          "ja": "工事は秋の初旬に終わる予定です。",
          "zh": "工程预计在初秋结束。",
          "focus": ["初旬"],
          "zhFocus": ["初"]
        },
        {
          "ja": "初旬は天気が悪い日が続きました。",
          "zh": "上旬一直是坏天气。",
          "focus": ["初旬"],
          "zhFocus": ["上旬"]
        }
      ],
      "note_zh": "意思同「上旬」，稍书面。"
    },
    {
      "id": "n2-0397",
      "jlpt": "N2",
      "headword": "心身",
      "source_form": "心身",
      "variants": [
        "心身"
      ],
      "reading": "しんしん",
      "reading_variants": [
        "しんしん"
      ],
      "romaji": "shinshin",
      "part_of_speech": "noun",
      "meaning_zh": "身心",
      "kanji_readings": [
        {
          "form": "心身",
          "reading": "しんしん"
        }
      ],
      "examples": [
        {
          "ja": "仕事のストレスで心身ともに疲れています。",
          "zh": "因为工作压力，身心都很疲惫。",
          "focus": ["心身"],
          "zhFocus": ["身心"]
        },
        {
          "ja": "スポーツは心身の健康にいいです。",
          "zh": "运动对身心健康有好处。",
          "focus": ["心身"],
          "zhFocus": ["身心"]
        },
        {
          "ja": "休みを取って、心身を休めてください。",
          "zh": "请休个假，让身心休息一下。",
          "focus": ["心身"],
          "zhFocus": ["身心"]
        }
      ]
    },
    {
      "id": "n2-0398",
      "jlpt": "N2",
      "headword": "水曜",
      "source_form": "水曜",
      "variants": [
        "水曜"
      ],
      "reading": "すいよう",
      "reading_variants": [
        "すいよう"
      ],
      "romaji": "suiyou",
      "part_of_speech": "noun",
      "meaning_zh": "星期三",
      "kanji_readings": [
        {
          "form": "水曜",
          "reading": "すいよう"
        }
      ],
      "examples": [
        {
          "ja": "水曜は午後から授業があります。",
          "zh": "星期三下午有课。",
          "focus": ["水曜"],
          "zhFocus": ["星期三"]
        },
        {
          "ja": "この店は毎週水曜が休みです。",
          "zh": "这家店每周三休息。",
          "focus": ["水曜"],
          "zhFocus": ["周三"]
        },
        {
          "ja": "会議は来週の水曜に決まりました。",
          "zh": "会议定在了下周三。",
          "focus": ["水曜"],
          "zhFocus": ["周三"]
        }
      ],
      "note_zh": "「水曜日」的简称。"
    },
    {
      "id": "n2-0399",
      "jlpt": "N2",
      "headword": "性質",
      "source_form": "性質",
      "variants": [
        "性質"
      ],
      "reading": "せいしつ",
      "reading_variants": [
        "せいしつ"
      ],
      "romaji": "seishitsu",
      "part_of_speech": "noun",
      "meaning_zh": "性质；性格；特性",
      "kanji_readings": [
        {
          "form": "性質",
          "reading": "せいしつ"
        }
      ],
      "examples": [
        {
          "ja": "この金属は熱に強い性質があります。",
          "zh": "这种金属有耐热的特性。",
          "focus": ["性質"],
          "zhFocus": ["特性"]
        },
        {
          "ja": "彼は穏やかな性質の人です。",
          "zh": "他是性格温和的人。",
          "focus": ["性質"],
          "zhFocus": ["性格"]
        },
        {
          "ja": "問題の性質によって、解決の方法が違います。",
          "zh": "根据问题的性质，解决的方法不同。",
          "focus": ["性質"],
          "zhFocus": ["性质"]
        }
      ]
    },
    {
      "id": "n2-0400",
      "jlpt": "N2",
      "headword": "接する",
      "source_form": "接する",
      "variants": [
        "接する"
      ],
      "reading": "せっする",
      "reading_variants": [
        "せっする"
      ],
      "romaji": "sessuru",
      "part_of_speech": "verb",
      "meaning_zh": "接触；接待；对待；邻接",
      "senses_zh": [
        "接触；接待；对待",
        "邻接"
      ],
      "kanji_readings": [
        {
          "form": "接する",
          "reading": "せっする"
        }
      ],
      "examples": [
        {
          "ja": "お客さんに丁寧に接してください。",
          "zh": "请礼貌地接待客人。",
          "focus": ["接し"],
          "zhFocus": ["接待"]
        },
        {
          "ja": "子供には優しく接しています。",
          "zh": "对孩子很温柔。",
          "focus": ["接し"],
          "zhFocus": ["对"]
        },
        {
          "ja": "この町は海に接しています。",
          "zh": "这个小镇靠海。",
          "focus": ["接し"],
          "zhFocus": ["靠"]
        }
      ]
    },
    {
      "id": "n2-0401",
      "jlpt": "N2",
      "headword": "線路",
      "source_form": "線路",
      "variants": [
        "線路"
      ],
      "reading": "せんろ",
      "reading_variants": [
        "せんろ"
      ],
      "romaji": "senro",
      "part_of_speech": "noun",
      "meaning_zh": "铁轨；铁路",
      "kanji_readings": [
        {
          "form": "線路",
          "reading": "せんろ"
        }
      ],
      "examples": [
        {
          "ja": "線路の上を歩いてはいけません。",
          "zh": "不能在铁轨上行走。",
          "focus": ["線路"],
          "zhFocus": ["铁轨"]
        },
        {
          "ja": "線路に石が置かれていました。",
          "zh": "铁轨上被放了石头。",
          "focus": ["線路"],
          "zhFocus": ["铁轨"]
        },
        {
          "ja": "新しい線路の工事が始まりました。",
          "zh": "新铁路的施工开始了。",
          "focus": ["線路"],
          "zhFocus": ["铁路"]
        }
      ]
    },
    {
      "id": "n2-0402",
      "jlpt": "N2",
      "headword": "相違",
      "source_form": "相違",
      "variants": [
        "相違"
      ],
      "reading": "そうい",
      "reading_variants": [
        "そうい"
      ],
      "romaji": "soui",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "差异；不同；分歧",
      "kanji_readings": [
        {
          "form": "相違",
          "reading": "そうい"
        }
      ],
      "examples": [
        {
          "ja": "二人の意見には大きな相違があります。",
          "zh": "两人的意见有很大分歧。",
          "focus": ["相違"],
          "zhFocus": ["分歧"]
        },
        {
          "ja": "事実と相違する点を直してください。",
          "zh": "请修改与事实不符的地方。",
          "focus": ["相違"],
          "zhFocus": ["不符"]
        },
        {
          "ja": "文化の相違を理解することが大切です。",
          "zh": "理解文化的差异很重要。",
          "focus": ["相違"],
          "zhFocus": ["差异"]
        }
      ]
    },
    {
      "id": "n2-0403",
      "jlpt": "N2",
      "headword": "高める",
      "source_form": "高める",
      "variants": [
        "高める"
      ],
      "reading": "たかめる",
      "reading_variants": [
        "たかめる"
      ],
      "romaji": "takameru",
      "part_of_speech": "verb",
      "meaning_zh": "提高；增强",
      "kanji_readings": [
        {
          "form": "高める",
          "reading": "たかめる"
        }
      ],
      "examples": [
        {
          "ja": "技術を高めるために練習しています。",
          "zh": "为了提高技术在练习。",
          "focus": ["高める"],
          "zhFocus": ["提高"]
        },
        {
          "ja": "運動して体の力を高めましょう。",
          "zh": "通过运动增强体力吧。",
          "focus": ["高め"],
          "zhFocus": ["增强"]
        },
        {
          "ja": "サービスの質を高める必要があります。",
          "zh": "有必要提高服务质量。",
          "focus": ["高める"],
          "zhFocus": ["提高"]
        }
      ]
    },
    {
      "id": "n2-0404",
      "jlpt": "N2",
      "headword": "滝",
      "source_form": "滝",
      "variants": [
        "滝"
      ],
      "reading": "たき",
      "reading_variants": [
        "たき"
      ],
      "romaji": "taki",
      "part_of_speech": "noun",
      "meaning_zh": "瀑布",
      "kanji_readings": [
        {
          "form": "滝",
          "reading": "たき"
        }
      ],
      "examples": [
        {
          "ja": "山の中に大きな滝があります。",
          "zh": "山里有一个大瀑布。",
          "focus": ["滝"],
          "zhFocus": ["瀑布"]
        },
        {
          "ja": "滝の水がとても冷たかったです。",
          "zh": "瀑布的水非常凉。",
          "focus": ["滝"],
          "zhFocus": ["瀑布"]
        },
        {
          "ja": "滝の音が遠くから聞こえます。",
          "zh": "从远处能听到瀑布的声音。",
          "focus": ["滝"],
          "zhFocus": ["瀑布"]
        }
      ]
    },
    {
      "id": "n2-0405",
      "jlpt": "N2",
      "headword": "炭鉱",
      "source_form": "炭鉱",
      "variants": [
        "炭鉱"
      ],
      "reading": "たんこう",
      "reading_variants": [
        "たんこう"
      ],
      "romaji": "tankou",
      "part_of_speech": "noun",
      "meaning_zh": "煤矿",
      "kanji_readings": [
        {
          "form": "炭鉱",
          "reading": "たんこう"
        }
      ],
      "examples": [
        {
          "ja": "祖父は炭鉱で働いていました。",
          "zh": "祖父以前在煤矿工作。",
          "focus": ["炭鉱"],
          "zhFocus": ["煤矿"]
        },
        {
          "ja": "この町は昔、炭鉱で栄えました。",
          "zh": "这个小镇以前因煤矿而繁荣。",
          "focus": ["炭鉱"],
          "zhFocus": ["煤矿"]
        },
        {
          "ja": "今は炭鉱がほとんどなくなりました。",
          "zh": "现在煤矿几乎都没有了。",
          "focus": ["炭鉱"],
          "zhFocus": ["煤矿"]
        }
      ]
    },
    {
      "id": "n2-0406",
      "jlpt": "N2",
      "headword": "中世",
      "source_form": "中世",
      "variants": [
        "中世"
      ],
      "reading": "ちゅうせい",
      "reading_variants": [
        "ちゅうせい"
      ],
      "romaji": "chuusei",
      "part_of_speech": "noun",
      "meaning_zh": "中世纪；中世",
      "kanji_readings": [
        {
          "form": "中世",
          "reading": "ちゅうせい"
        }
      ],
      "examples": [
        {
          "ja": "ヨーロッパの中世の歴史を勉強しています。",
          "zh": "在学习欧洲中世纪的历史。",
          "focus": ["中世"],
          "zhFocus": ["中世纪"]
        },
        {
          "ja": "この城は中世に建てられました。",
          "zh": "这座城堡建于中世纪。",
          "focus": ["中世"],
          "zhFocus": ["中世纪"]
        },
        {
          "ja": "中世の人々の生活について調べました。",
          "zh": "调查了中世纪人们的生活。",
          "focus": ["中世"],
          "zhFocus": ["中世纪"]
        }
      ],
      "note_zh": "在日本史中多指镰仓、室町时代。"
    },
    {
      "id": "n2-0407",
      "jlpt": "N2",
      "headword": "粒",
      "source_form": "粒",
      "variants": [
        "粒"
      ],
      "reading": "つぶ",
      "reading_variants": [
        "つぶ"
      ],
      "romaji": "tsubu",
      "part_of_speech": "noun",
      "meaning_zh": "粒；颗粒",
      "kanji_readings": [
        {
          "form": "粒",
          "reading": "つぶ"
        }
      ],
      "examples": [
        {
          "ja": "米の粒が小さいです。",
          "zh": "米粒很小。",
          "focus": ["粒"],
          "zhFocus": ["粒"]
        },
        {
          "ja": "雨の粒が窓に当たっています。",
          "zh": "雨滴打在窗户上。",
          "focus": ["粒"],
          "zhFocus": ["滴"]
        },
        {
          "ja": "この薬は粒が大きくて飲みにくいです。",
          "zh": "这种药颗粒大，很难吞。",
          "focus": ["粒"],
          "zhFocus": ["颗粒"]
        }
      ],
      "note_zh": "也可作量词，数小而圆的东西（一粒、二粒）。"
    },
    {
      "id": "n2-0408",
      "jlpt": "N2",
      "headword": "定価",
      "source_form": "定価",
      "variants": [
        "定価"
      ],
      "reading": "ていか",
      "reading_variants": [
        "ていか"
      ],
      "romaji": "teika",
      "part_of_speech": "noun",
      "meaning_zh": "定价；标价",
      "kanji_readings": [
        {
          "form": "定価",
          "reading": "ていか"
        }
      ],
      "examples": [
        {
          "ja": "この本の定価はいくらですか。",
          "zh": "这本书定价多少？",
          "focus": ["定価"],
          "zhFocus": ["定价"]
        },
        {
          "ja": "セールで定価より安く買えました。",
          "zh": "促销时比标价便宜地买到了。",
          "focus": ["定価"],
          "zhFocus": ["标价"]
        },
        {
          "ja": "定価で買うのはもったいないです。",
          "zh": "按定价买太亏了。",
          "focus": ["定価"],
          "zhFocus": ["定价"]
        }
      ]
    },
    {
      "id": "n2-0409",
      "jlpt": "N2",
      "headword": "点数",
      "source_form": "点数",
      "variants": [
        "点数"
      ],
      "reading": "てんすう",
      "reading_variants": [
        "てんすう"
      ],
      "romaji": "tensuu",
      "part_of_speech": "noun",
      "meaning_zh": "分数；得分",
      "kanji_readings": [
        {
          "form": "点数",
          "reading": "てんすう"
        }
      ],
      "examples": [
        {
          "ja": "テストの点数がよかったです。",
          "zh": "考试的分数很好。",
          "focus": ["点数"],
          "zhFocus": ["分数"]
        },
        {
          "ja": "試合の点数を数えています。",
          "zh": "在计算比赛的得分。",
          "focus": ["点数"],
          "zhFocus": ["得分"]
        },
        {
          "ja": "点数より内容が大切です。",
          "zh": "比起分数，内容更重要。",
          "focus": ["点数"],
          "zhFocus": ["分数"]
        }
      ]
    },
    {
      "id": "n2-0410",
      "jlpt": "N2",
      "headword": "投書",
      "source_form": "投書",
      "variants": [
        "投書"
      ],
      "reading": "とうしょ",
      "reading_variants": [
        "とうしょ"
      ],
      "romaji": "tousho",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "投书；（读者）来信；投稿",
      "kanji_readings": [
        {
          "form": "投書",
          "reading": "とうしょ"
        }
      ],
      "examples": [
        {
          "ja": "新聞に投書が載りました。",
          "zh": "报纸上登了我的投稿。",
          "focus": ["投書"],
          "zhFocus": ["投稿"]
        },
        {
          "ja": "市役所に投書して、意見を伝えました。",
          "zh": "给市政府写信，表达了意见。",
          "focus": ["投書"],
          "zhFocus": ["写信"]
        },
        {
          "ja": "読者からの投書を紹介します。",
          "zh": "介绍一下读者的来信。",
          "focus": ["投書"],
          "zhFocus": ["来信"]
        }
      ]
    },
    {
      "id": "n2-0411",
      "jlpt": "N2",
      "headword": "童話",
      "source_form": "童話",
      "variants": [
        "童話"
      ],
      "reading": "どうわ",
      "reading_variants": [
        "どうわ"
      ],
      "romaji": "douwa",
      "part_of_speech": "noun",
      "meaning_zh": "童话",
      "kanji_readings": [
        {
          "form": "童話",
          "reading": "どうわ"
        }
      ],
      "examples": [
        {
          "ja": "寝る前に子供に童話を読みます。",
          "zh": "睡前给孩子读童话。",
          "focus": ["童話"],
          "zhFocus": ["童话"]
        },
        {
          "ja": "この童話は世界中で読まれています。",
          "zh": "这个童话在世界各地都有人读。",
          "focus": ["童話"],
          "zhFocus": ["童话"]
        },
        {
          "ja": "子供のころ、童話が大好きでした。",
          "zh": "小时候非常喜欢童话。",
          "focus": ["童話"],
          "zhFocus": ["童话"]
        }
      ]
    },
    {
      "id": "n2-0412",
      "jlpt": "N2",
      "headword": "内線",
      "source_form": "内線",
      "variants": [
        "内線"
      ],
      "reading": "ないせん",
      "reading_variants": [
        "ないせん"
      ],
      "romaji": "naisen",
      "part_of_speech": "noun",
      "meaning_zh": "（电话）分机；内线",
      "kanji_readings": [
        {
          "form": "内線",
          "reading": "ないせん"
        }
      ],
      "examples": [
        {
          "ja": "内線で総務課に電話しました。",
          "zh": "用分机给总务科打了电话。",
          "focus": ["内線"],
          "zhFocus": ["分机"]
        },
        {
          "ja": "ご用の方は内線でお呼びください。",
          "zh": "有事的人请用内线呼叫。",
          "focus": ["内線"],
          "zhFocus": ["内线"]
        },
        {
          "ja": "電話を内線で回しました。",
          "zh": "把电话转到了分机。",
          "focus": ["内線"],
          "zhFocus": ["分机"]
        }
      ]
    },
    {
      "id": "n2-0413",
      "jlpt": "N2",
      "headword": "何とも",
      "source_form": "なんとも",
      "variants": [
        "何とも"
      ],
      "reading": "なんとも",
      "reading_variants": [
        "なんとも"
      ],
      "romaji": "nantomo",
      "part_of_speech": "adverb",
      "meaning_zh": "（后接否定）怎么也（不）；什么都（不）；实在；真是",
      "senses_zh": [
        "（后接否定）怎么也（不）；什么都（不）",
        "实在；真是"
      ],
      "kanji_readings": [
        {
          "form": "何とも",
          "reading": "なんとも"
        }
      ],
      "examples": [
        {
          "ja": "結果は何とも言えません。",
          "zh": "结果很难说。",
          "focus": ["何とも"],
          "zhFocus": ["很难"]
        },
        {
          "ja": "彼は失敗しても何とも思っていません。",
          "zh": "他就算失败了也毫不在乎。",
          "focus": ["何とも"],
          "zhFocus": ["毫不"]
        },
        {
          "ja": "何とも申し訳ありません。",
          "zh": "实在抱歉。",
          "focus": ["何とも"],
          "zhFocus": ["实在"]
        }
      ]
    },
    {
      "id": "n2-0414",
      "jlpt": "N2",
      "headword": "日時",
      "source_form": "日時",
      "variants": [
        "日時"
      ],
      "reading": "にちじ",
      "reading_variants": [
        "にちじ"
      ],
      "romaji": "nichiji",
      "part_of_speech": "noun",
      "meaning_zh": "日期和时间；时日",
      "kanji_readings": [
        {
          "form": "日時",
          "reading": "にちじ"
        }
      ],
      "examples": [
        {
          "ja": "会議の日時を決めましょう。",
          "zh": "定一下会议的日期和时间吧。",
          "focus": ["日時"],
          "zhFocus": ["日期和时间"]
        },
        {
          "ja": "日時が変わったら、お知らせします。",
          "zh": "日期和时间有变化的话会通知您。",
          "focus": ["日時"],
          "zhFocus": ["日期和时间"]
        },
        {
          "ja": "予約の日時を確認してください。",
          "zh": "请确认预约的日期和时间。",
          "focus": ["日時"],
          "zhFocus": ["日期和时间"]
        }
      ]
    },
    {
      "id": "n2-0415",
      "jlpt": "N2",
      "headword": "女房",
      "source_form": "女房",
      "variants": [
        "女房"
      ],
      "reading": "にょうぼう",
      "reading_variants": [
        "にょうぼう"
      ],
      "romaji": "nyoubou",
      "part_of_speech": "noun",
      "meaning_zh": "老婆；（自己的）妻子",
      "kanji_readings": [
        {
          "form": "女房",
          "reading": "にょうぼう"
        }
      ],
      "examples": [
        {
          "ja": "女房に頼まれて、買い物に来ました。",
          "zh": "受老婆之托来买东西。",
          "focus": ["女房"],
          "zhFocus": ["老婆"]
        },
        {
          "ja": "うちの女房は料理が上手です。",
          "zh": "我老婆很会做饭。",
          "focus": ["女房"],
          "zhFocus": ["老婆"]
        },
        {
          "ja": "女房とけんかしてしまいました。",
          "zh": "和老婆吵架了。",
          "focus": ["女房"],
          "zhFocus": ["老婆"]
        }
      ],
      "note_zh": "男性对自己妻子的随意称呼。"
    },
    {
      "id": "n2-0416",
      "jlpt": "N2",
      "headword": "上り",
      "source_form": "上り",
      "variants": [
        "上り",
        "登り"
      ],
      "reading": "のぼり",
      "reading_variants": [
        "のぼり"
      ],
      "romaji": "nobori",
      "part_of_speech": "noun",
      "meaning_zh": "上坡；上升；（开往东京等中心方向的）上行",
      "senses_zh": [
        "上坡；上升",
        "（开往东京等中心方向的）上行"
      ],
      "kanji_readings": [
        {
          "form": "上り",
          "reading": "のぼり"
        },
        {
          "form": "登り",
          "reading": "のぼり"
        }
      ],
      "examples": [
        {
          "ja": "この先は上りの坂が続きます。",
          "zh": "前面一直是上坡。",
          "focus": ["上り"],
          "zhFocus": ["上坡"]
        },
        {
          "ja": "上りの電車が遅れています。",
          "zh": "上行的电车晚点了。",
          "focus": ["上り"],
          "zhFocus": ["上行"]
        },
        {
          "ja": "連休の最後の日は上りの道路が混みます。",
          "zh": "连休最后一天，进城方向的道路很堵。",
          "focus": ["上り"],
          "zhFocus": ["进城方向"]
        }
      ],
      "note_zh": "与「下り（下坡；下行）」相对；表示“爬坡、登山”时也写作「登り」。"
    },
    {
      "id": "n2-0417",
      "jlpt": "N2",
      "headword": "花火",
      "source_form": "花火",
      "variants": [
        "花火"
      ],
      "reading": "はなび",
      "reading_variants": [
        "はなび"
      ],
      "romaji": "hanabi",
      "part_of_speech": "noun",
      "meaning_zh": "烟花；焰火",
      "kanji_readings": [
        {
          "form": "花火",
          "reading": "はなび"
        }
      ],
      "examples": [
        {
          "ja": "夏祭りで花火を見ました。",
          "zh": "在夏日祭上看了烟花。",
          "focus": ["花火"],
          "zhFocus": ["烟花"]
        },
        {
          "ja": "子供たちが庭で花火をしています。",
          "zh": "孩子们在院子里放烟花。",
          "focus": ["花火"],
          "zhFocus": ["烟花"]
        },
        {
          "ja": "空に大きな花火が上がりました。",
          "zh": "天空中升起了大大的焰火。",
          "focus": ["花火"],
          "zhFocus": ["焰火"]
        }
      ]
    },
    {
      "id": "n2-0418",
      "jlpt": "N2",
      "headword": "表紙",
      "source_form": "表紙",
      "variants": [
        "表紙"
      ],
      "reading": "ひょうし",
      "reading_variants": [
        "ひょうし"
      ],
      "romaji": "hyoushi",
      "part_of_speech": "noun",
      "meaning_zh": "封面",
      "kanji_readings": [
        {
          "form": "表紙",
          "reading": "ひょうし"
        }
      ],
      "examples": [
        {
          "ja": "この本は表紙がきれいです。",
          "zh": "这本书的封面很漂亮。",
          "focus": ["表紙"],
          "zhFocus": ["封面"]
        },
        {
          "ja": "雑誌の表紙に有名な歌手が出ています。",
          "zh": "杂志封面上登着有名的歌手。",
          "focus": ["表紙"],
          "zhFocus": ["封面"]
        },
        {
          "ja": "ノートの表紙に名前を書いてください。",
          "zh": "请在笔记本封面上写上名字。",
          "focus": ["表紙"],
          "zhFocus": ["封面"]
        }
      ]
    },
    {
      "id": "n2-0419",
      "jlpt": "N2",
      "headword": "包丁",
      "source_form": "庖丁",
      "variants": [
        "包丁",
        "庖丁"
      ],
      "reading": "ほうちょう",
      "reading_variants": [
        "ほうちょう"
      ],
      "romaji": "houchou",
      "part_of_speech": "noun",
      "meaning_zh": "菜刀",
      "kanji_readings": [
        {
          "form": "包丁",
          "reading": "ほうちょう"
        },
        {
          "form": "庖丁",
          "reading": "ほうちょう"
        }
      ],
      "examples": [
        {
          "ja": "包丁で野菜を切ります。",
          "zh": "用菜刀切菜。",
          "focus": ["包丁"],
          "zhFocus": ["菜刀"]
        },
        {
          "ja": "包丁を使うときは気をつけてください。",
          "zh": "用菜刀的时候请小心。",
          "focus": ["包丁"],
          "zhFocus": ["菜刀"]
        },
        {
          "ja": "よく切れる包丁を買いました。",
          "zh": "买了一把很快的菜刀。",
          "focus": ["包丁"],
          "zhFocus": ["菜刀"]
        }
      ]
    },
    {
      "id": "n2-0420",
      "jlpt": "N2",
      "headword": "紫",
      "source_form": "紫",
      "variants": [
        "紫"
      ],
      "reading": "むらさき",
      "reading_variants": [
        "むらさき"
      ],
      "romaji": "murasaki",
      "part_of_speech": "noun",
      "meaning_zh": "紫色",
      "kanji_readings": [
        {
          "form": "紫",
          "reading": "むらさき"
        }
      ],
      "examples": [
        {
          "ja": "紫の花が咲いています。",
          "zh": "紫色的花开着。",
          "focus": ["紫"],
          "zhFocus": ["紫色"]
        },
        {
          "ja": "空が赤から紫に変わりました。",
          "zh": "天空从红色变成了紫色。",
          "focus": ["紫"],
          "zhFocus": ["紫色"]
        },
        {
          "ja": "紫は昔、身分の高い人の色でした。",
          "zh": "紫色在古代是身份高贵的人用的颜色。",
          "focus": ["紫"],
          "zhFocus": ["紫色"]
        }
      ]
    },
    {
      "id": "n2-0421",
      "jlpt": "N2",
      "headword": "名作",
      "source_form": "名作",
      "variants": [
        "名作"
      ],
      "reading": "めいさく",
      "reading_variants": [
        "めいさく"
      ],
      "romaji": "meisaku",
      "part_of_speech": "noun",
      "meaning_zh": "名作；杰作",
      "kanji_readings": [
        {
          "form": "名作",
          "reading": "めいさく"
        }
      ],
      "examples": [
        {
          "ja": "この映画は名作だと言われています。",
          "zh": "这部电影被称为名作。",
          "focus": ["名作"],
          "zhFocus": ["名作"]
        },
        {
          "ja": "世界の名作を読みたいです。",
          "zh": "想读世界名著。",
          "focus": ["名作"],
          "zhFocus": ["名著"]
        },
        {
          "ja": "これは彼の一番の名作です。",
          "zh": "这是他最好的杰作。",
          "focus": ["名作"],
          "zhFocus": ["杰作"]
        }
      ]
    },
    {
      "id": "n2-0422",
      "jlpt": "N2",
      "headword": "名刺",
      "source_form": "名刺",
      "variants": [
        "名刺"
      ],
      "reading": "めいし",
      "reading_variants": [
        "めいし"
      ],
      "romaji": "meishi",
      "part_of_speech": "noun",
      "meaning_zh": "名片",
      "kanji_readings": [
        {
          "form": "名刺",
          "reading": "めいし"
        }
      ],
      "examples": [
        {
          "ja": "初めて会った人と名刺を交換しました。",
          "zh": "和初次见面的人交换了名片。",
          "focus": ["名刺"],
          "zhFocus": ["名片"]
        },
        {
          "ja": "名刺を忘れてしまいました。",
          "zh": "忘带名片了。",
          "focus": ["名刺"],
          "zhFocus": ["名片"]
        },
        {
          "ja": "新しい名刺を作りました。",
          "zh": "做了新名片。",
          "focus": ["名刺"],
          "zhFocus": ["名片"]
        }
      ]
    },
    {
      "id": "n2-0423",
      "jlpt": "N2",
      "headword": "物語る",
      "source_form": "物語る",
      "variants": [
        "物語る"
      ],
      "reading": "ものがたる",
      "reading_variants": [
        "ものがたる"
      ],
      "romaji": "monogataru",
      "part_of_speech": "verb",
      "meaning_zh": "讲述；说明；表明",
      "senses_zh": [
        "讲述",
        "说明；表明"
      ],
      "kanji_readings": [
        {
          "form": "物語る",
          "reading": "ものがたる"
        }
      ],
      "examples": [
        {
          "ja": "祖父は戦争の体験を物語ってくれました。",
          "zh": "祖父给我们讲述了战争的经历。",
          "focus": ["物語っ"],
          "zhFocus": ["讲述"]
        },
        {
          "ja": "この写真は当時の生活を物語っています。",
          "zh": "这张照片展现了当时的生活。",
          "focus": ["物語っ"],
          "zhFocus": ["展现"]
        },
        {
          "ja": "彼の顔が疲れを物語っていました。",
          "zh": "他的脸色说明了他很累。",
          "focus": ["物語っ"],
          "zhFocus": ["说明"]
        }
      ]
    },
    {
      "id": "n2-0424",
      "jlpt": "N2",
      "headword": "薬品",
      "source_form": "薬品",
      "variants": [
        "薬品"
      ],
      "reading": "やくひん",
      "reading_variants": [
        "やくひん"
      ],
      "romaji": "yakuhin",
      "part_of_speech": "noun",
      "meaning_zh": "药品；化学药品",
      "kanji_readings": [
        {
          "form": "薬品",
          "reading": "やくひん"
        }
      ],
      "examples": [
        {
          "ja": "この薬品は危険なので、気をつけてください。",
          "zh": "这种化学药品很危险，请小心。",
          "focus": ["薬品"],
          "zhFocus": ["化学药品"]
        },
        {
          "ja": "実験で薬品を使いました。",
          "zh": "实验中使用了化学药品。",
          "focus": ["薬品"],
          "zhFocus": ["化学药品"]
        },
        {
          "ja": "薬品は子供の手の届かない所に置いてください。",
          "zh": "药品请放在孩子够不着的地方。",
          "focus": ["薬品"],
          "zhFocus": ["药品"]
        }
      ]
    },
    {
      "id": "n2-0425",
      "jlpt": "N2",
      "headword": "役目",
      "source_form": "役目",
      "variants": [
        "役目"
      ],
      "reading": "やくめ",
      "reading_variants": [
        "やくめ"
      ],
      "romaji": "yakume",
      "part_of_speech": "noun",
      "meaning_zh": "职责；任务；作用",
      "kanji_readings": [
        {
          "form": "役目",
          "reading": "やくめ"
        }
      ],
      "examples": [
        {
          "ja": "子供を守るのは親の役目です。",
          "zh": "保护孩子是父母的职责。",
          "focus": ["役目"],
          "zhFocus": ["职责"]
        },
        {
          "ja": "私の役目は資料を準備することです。",
          "zh": "我的任务是准备资料。",
          "focus": ["役目"],
          "zhFocus": ["任务"]
        },
        {
          "ja": "この木は風を防ぐ役目をしています。",
          "zh": "这些树起着防风的作用。",
          "focus": ["役目"],
          "zhFocus": ["作用"]
        }
      ]
    },
    {
      "id": "n2-0426",
      "jlpt": "N2",
      "headword": "流域",
      "source_form": "流域",
      "variants": [
        "流域"
      ],
      "reading": "りゅういき",
      "reading_variants": [
        "りゅういき"
      ],
      "romaji": "ryuuiki",
      "part_of_speech": "noun",
      "meaning_zh": "流域",
      "kanji_readings": [
        {
          "form": "流域",
          "reading": "りゅういき"
        }
      ],
      "examples": [
        {
          "ja": "この川の流域には田んぼが広がっています。",
          "zh": "这条河的流域铺展着一片片水田。",
          "focus": ["流域"],
          "zhFocus": ["流域"]
        },
        {
          "ja": "大雨で流域の町に被害が出ました。",
          "zh": "大雨使流域的城镇受了灾。",
          "focus": ["流域"],
          "zhFocus": ["流域"]
        },
        {
          "ja": "流域に住む人々が川を守っています。",
          "zh": "住在流域的人们守护着这条河。",
          "focus": ["流域"],
          "zhFocus": ["流域"]
        }
      ]
    },
    {
      "id": "n2-0427",
      "jlpt": "N2",
      "headword": "冷凍",
      "source_form": "冷凍",
      "variants": [
        "冷凍"
      ],
      "reading": "れいとう",
      "reading_variants": [
        "れいとう"
      ],
      "romaji": "reitou",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "冷冻",
      "kanji_readings": [
        {
          "form": "冷凍",
          "reading": "れいとう"
        }
      ],
      "examples": [
        {
          "ja": "残ったご飯を冷凍しました。",
          "zh": "把剩下的饭冷冻起来了。",
          "focus": ["冷凍"],
          "zhFocus": ["冷冻"]
        },
        {
          "ja": "冷凍の野菜は便利です。",
          "zh": "冷冻蔬菜很方便。",
          "focus": ["冷凍"],
          "zhFocus": ["冷冻"]
        },
        {
          "ja": "肉は冷凍しておけば長く持ちます。",
          "zh": "肉冷冻起来就能保存很久。",
          "focus": ["冷凍"],
          "zhFocus": ["冷冻"]
        }
      ]
    },
    {
      "id": "n2-0428",
      "jlpt": "N2",
      "headword": "圧縮",
      "source_form": "圧縮",
      "variants": [
        "圧縮"
      ],
      "reading": "あっしゅく",
      "reading_variants": [
        "あっしゅく"
      ],
      "romaji": "asshuku",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "压缩",
      "kanji_readings": [
        {
          "form": "圧縮",
          "reading": "あっしゅく"
        }
      ],
      "examples": [
        {
          "ja": "空気を圧縮すると、温度が上がります。",
          "zh": "压缩空气，温度就会升高。",
          "focus": ["圧縮"],
          "zhFocus": ["压缩"]
        },
        {
          "ja": "ファイルを圧縮して送りました。",
          "zh": "把文件压缩后发送了。",
          "focus": ["圧縮"],
          "zhFocus": ["压缩"]
        },
        {
          "ja": "予算を圧縮しなければなりません。",
          "zh": "必须压缩预算。",
          "focus": ["圧縮"],
          "zhFocus": ["压缩"]
        }
      ]
    },
    {
      "id": "n2-0429",
      "jlpt": "N2",
      "headword": "争う",
      "source_form": "争う",
      "variants": [
        "争う"
      ],
      "reading": "あらそう",
      "reading_variants": [
        "あらそう"
      ],
      "romaji": "arasou",
      "part_of_speech": "verb",
      "meaning_zh": "争夺；竞争；争吵",
      "senses_zh": [
        "争夺；竞争",
        "争吵"
      ],
      "kanji_readings": [
        {
          "form": "争う",
          "reading": "あらそう"
        }
      ],
      "examples": [
        {
          "ja": "二つのチームが優勝を争っています。",
          "zh": "两支队伍在争夺冠军。",
          "focus": ["争っ"],
          "zhFocus": ["争夺"]
        },
        {
          "ja": "兄弟で遺産を争いました。",
          "zh": "兄弟之间为遗产起了纠纷。",
          "focus": ["争い"],
          "zhFocus": ["纠纷"]
        },
        {
          "ja": "小さなことで争うのはやめましょう。",
          "zh": "别为小事争吵了。",
          "focus": ["争う"],
          "zhFocus": ["争吵"]
        }
      ]
    },
    {
      "id": "n2-0430",
      "jlpt": "N2",
      "headword": "改める",
      "source_form": "改める",
      "variants": [
        "改める"
      ],
      "reading": "あらためる",
      "reading_variants": [
        "あらためる"
      ],
      "romaji": "aratameru",
      "part_of_speech": "verb",
      "meaning_zh": "改正；改变；修改",
      "kanji_readings": [
        {
          "form": "改める",
          "reading": "あらためる"
        }
      ],
      "examples": [
        {
          "ja": "悪い習慣を改めようと思います。",
          "zh": "我打算改掉坏习惯。",
          "focus": ["改め"],
          "zhFocus": ["改"]
        },
        {
          "ja": "規則が改められました。",
          "zh": "规则被修改了。",
          "focus": ["改め"],
          "zhFocus": ["修改"]
        },
        {
          "ja": "日を改めて、もう一度来ます。",
          "zh": "改天再来一次。",
          "focus": ["改め"],
          "zhFocus": ["改天"]
        }
      ],
      "note_zh": "「日を改める」是“改天”的意思。"
    },
    {
      "id": "n2-0431",
      "jlpt": "N2",
      "headword": "生き生き",
      "source_form": "生き生き",
      "variants": [
        "生き生き"
      ],
      "reading": "いきいき",
      "reading_variants": [
        "いきいき"
      ],
      "romaji": "ikiiki",
      "part_of_speech": "adverb",
      "meaning_zh": "生气勃勃；活泼；栩栩如生",
      "kanji_readings": [
        {
          "form": "生き生き",
          "reading": "いきいき"
        }
      ],
      "examples": [
        {
          "ja": "子供たちは生き生きと遊んでいます。",
          "zh": "孩子们在生气勃勃地玩耍。",
          "focus": ["生き生き"],
          "zhFocus": ["生气勃勃"]
        },
        {
          "ja": "新しい仕事を始めて、彼は生き生きしています。",
          "zh": "开始了新工作，他显得很有活力。",
          "focus": ["生き生き"],
          "zhFocus": ["很有活力"]
        },
        {
          "ja": "この絵は花が生き生きと描かれています。",
          "zh": "这幅画里的花画得栩栩如生。",
          "focus": ["生き生き"],
          "zhFocus": ["栩栩如生"]
        }
      ],
      "note_zh": "常用「生き生きと」「生き生きした」「生き生きする」。"
    },
    {
      "id": "n2-0432",
      "jlpt": "N2",
      "headword": "英文",
      "source_form": "英文",
      "variants": [
        "英文"
      ],
      "reading": "えいぶん",
      "reading_variants": [
        "えいぶん"
      ],
      "romaji": "eibun",
      "part_of_speech": "noun",
      "meaning_zh": "英文；英语文章",
      "kanji_readings": [
        {
          "form": "英文",
          "reading": "えいぶん"
        }
      ],
      "examples": [
        {
          "ja": "英文の手紙を書きました。",
          "zh": "写了一封英文信。",
          "focus": ["英文"],
          "zhFocus": ["英文"]
        },
        {
          "ja": "この英文を日本語に訳してください。",
          "zh": "请把这段英文翻译成日语。",
          "focus": ["英文"],
          "zhFocus": ["英文"]
        },
        {
          "ja": "英文を読むのは得意です。",
          "zh": "我擅长读英语文章。",
          "focus": ["英文"],
          "zhFocus": ["英语文章"]
        }
      ]
    },
    {
      "id": "n2-0433",
      "jlpt": "N2",
      "headword": "液体",
      "source_form": "液体",
      "variants": [
        "液体"
      ],
      "reading": "えきたい",
      "reading_variants": [
        "えきたい"
      ],
      "romaji": "ekitai",
      "part_of_speech": "noun",
      "meaning_zh": "液体",
      "kanji_readings": [
        {
          "form": "液体",
          "reading": "えきたい"
        }
      ],
      "examples": [
        {
          "ja": "飛行機に液体を持ち込むことはできません。",
          "zh": "不能把液体带上飞机。",
          "focus": ["液体"],
          "zhFocus": ["液体"]
        },
        {
          "ja": "この液体は水より重いです。",
          "zh": "这种液体比水重。",
          "focus": ["液体"],
          "zhFocus": ["液体"]
        },
        {
          "ja": "氷が溶けて液体になりました。",
          "zh": "冰融化变成了液体。",
          "focus": ["液体"],
          "zhFocus": ["液体"]
        }
      ],
      "note_zh": "与「固体（固体）」「気体（气体）」相对。"
    },
    {
      "id": "n2-0434",
      "jlpt": "N2",
      "headword": "貝",
      "source_form": "貝",
      "variants": [
        "貝"
      ],
      "reading": "かい",
      "reading_variants": [
        "かい"
      ],
      "romaji": "kai",
      "part_of_speech": "noun",
      "meaning_zh": "贝；贝壳",
      "kanji_readings": [
        {
          "form": "貝",
          "reading": "かい"
        }
      ],
      "examples": [
        {
          "ja": "海で貝を拾いました。",
          "zh": "在海边捡了贝壳。",
          "focus": ["貝"],
          "zhFocus": ["贝壳"]
        },
        {
          "ja": "貝のスープを作りました。",
          "zh": "做了贝类汤。",
          "focus": ["貝"],
          "zhFocus": ["贝"]
        },
        {
          "ja": "この貝は食べられません。",
          "zh": "这种贝不能吃。",
          "focus": ["貝"],
          "zhFocus": ["贝"]
        }
      ]
    },
    {
      "id": "n2-0435",
      "jlpt": "N2",
      "headword": "家屋",
      "source_form": "家屋",
      "variants": [
        "家屋"
      ],
      "reading": "かおく",
      "reading_variants": [
        "かおく"
      ],
      "romaji": "kaoku",
      "part_of_speech": "noun",
      "meaning_zh": "房屋；房子",
      "kanji_readings": [
        {
          "form": "家屋",
          "reading": "かおく"
        }
      ],
      "examples": [
        {
          "ja": "地震で多くの家屋が倒れました。",
          "zh": "地震中很多房屋倒塌了。",
          "focus": ["家屋"],
          "zhFocus": ["房屋"]
        },
        {
          "ja": "この地域には古い家屋が残っています。",
          "zh": "这个地区留有古老的房屋。",
          "focus": ["家屋"],
          "zhFocus": ["房屋"]
        },
        {
          "ja": "火事で家屋が焼けました。",
          "zh": "房子在火灾中被烧毁了。",
          "focus": ["家屋"],
          "zhFocus": ["房子"]
        }
      ]
    },
    {
      "id": "n2-0436",
      "jlpt": "N2",
      "headword": "拡張",
      "source_form": "拡張",
      "variants": [
        "拡張"
      ],
      "reading": "かくちょう",
      "reading_variants": [
        "かくちょう"
      ],
      "romaji": "kakuchou",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "扩张；扩大；扩建",
      "kanji_readings": [
        {
          "form": "拡張",
          "reading": "かくちょう"
        }
      ],
      "examples": [
        {
          "ja": "駅前の道路を拡張する工事が始まりました。",
          "zh": "车站前道路的拓宽工程开始了。",
          "focus": ["拡張"],
          "zhFocus": ["拓宽"]
        },
        {
          "ja": "会社は事業を海外に拡張しました。",
          "zh": "公司把业务扩大到了海外。",
          "focus": ["拡張"],
          "zhFocus": ["扩大"]
        },
        {
          "ja": "空港の拡張に反対する人もいます。",
          "zh": "也有人反对机场扩建。",
          "focus": ["拡張"],
          "zhFocus": ["扩建"]
        }
      ]
    },
    {
      "id": "n2-0437",
      "jlpt": "N2",
      "headword": "学力",
      "source_form": "学力",
      "variants": [
        "学力"
      ],
      "reading": "がくりょく",
      "reading_variants": [
        "がくりょく"
      ],
      "romaji": "gakuryoku",
      "part_of_speech": "noun",
      "meaning_zh": "学力；学习能力",
      "kanji_readings": [
        {
          "form": "学力",
          "reading": "がくりょく"
        }
      ],
      "examples": [
        {
          "ja": "子供の学力が下がっていると言われます。",
          "zh": "据说孩子们的学力在下降。",
          "focus": ["学力"],
          "zhFocus": ["学力"]
        },
        {
          "ja": "入学試験で学力を測ります。",
          "zh": "通过入学考试测试学力。",
          "focus": ["学力"],
          "zhFocus": ["学力"]
        },
        {
          "ja": "毎日勉強して、学力を伸ばしました。",
          "zh": "每天学习，提高了学习能力。",
          "focus": ["学力"],
          "zhFocus": ["学习能力"]
        }
      ]
    },
    {
      "id": "n2-0438",
      "jlpt": "N2",
      "headword": "可決",
      "source_form": "可決",
      "variants": [
        "可決"
      ],
      "reading": "かけつ",
      "reading_variants": [
        "かけつ"
      ],
      "romaji": "kaketsu",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "（议案）通过",
      "kanji_readings": [
        {
          "form": "可決",
          "reading": "かけつ"
        }
      ],
      "examples": [
        {
          "ja": "新しい法律が国会で可決されました。",
          "zh": "新法律在国会获得通过。",
          "focus": ["可決"],
          "zhFocus": ["通过"]
        },
        {
          "ja": "その案は会議で可決されました。",
          "zh": "那个方案在会议上通过了。",
          "focus": ["可決"],
          "zhFocus": ["通过"]
        },
        {
          "ja": "予算案の可決は来週になりそうです。",
          "zh": "预算案的通过可能要到下周。",
          "focus": ["可決"],
          "zhFocus": ["通过"]
        }
      ],
      "note_zh": "与「否決（否决）」相对。"
    },
    {
      "id": "n2-0439",
      "jlpt": "N2",
      "headword": "飾り",
      "source_form": "飾り",
      "variants": [
        "飾り"
      ],
      "reading": "かざり",
      "reading_variants": [
        "かざり"
      ],
      "romaji": "kazari",
      "part_of_speech": "noun",
      "meaning_zh": "装饰；装饰品",
      "kanji_readings": [
        {
          "form": "飾り",
          "reading": "かざり"
        }
      ],
      "examples": [
        {
          "ja": "部屋にクリスマスの飾りをつけました。",
          "zh": "在房间里挂上了圣诞节的装饰。",
          "focus": ["飾り"],
          "zhFocus": ["装饰"]
        },
        {
          "ja": "この服は飾りが多すぎます。",
          "zh": "这件衣服装饰太多了。",
          "focus": ["飾り"],
          "zhFocus": ["装饰"]
        },
        {
          "ja": "正月の飾りを片付けました。",
          "zh": "把新年的装饰品收起来了。",
          "focus": ["飾り"],
          "zhFocus": ["装饰品"]
        }
      ],
      "note_zh": "动词「飾る（装饰）」的名词形。"
    },
    {
      "id": "n2-0440",
      "jlpt": "N2",
      "headword": "塊",
      "source_form": "塊",
      "variants": [
        "塊"
      ],
      "reading": "かたまり",
      "reading_variants": [
        "かたまり"
      ],
      "romaji": "katamari",
      "part_of_speech": "noun",
      "meaning_zh": "块；团；疙瘩",
      "kanji_readings": [
        {
          "form": "塊",
          "reading": "かたまり"
        }
      ],
      "examples": [
        {
          "ja": "砂糖が固まって塊になりました。",
          "zh": "砂糖结成了块。",
          "focus": ["塊"],
          "zhFocus": ["块"]
        },
        {
          "ja": "大きな肉の塊を買いました。",
          "zh": "买了一大块肉。",
          "focus": ["塊"],
          "zhFocus": ["块"]
        },
        {
          "ja": "スープに小麦粉の塊が残っています。",
          "zh": "汤里还有面粉疙瘩。",
          "focus": ["塊"],
          "zhFocus": ["疙瘩"]
        }
      ]
    },
    {
      "id": "n2-0441",
      "jlpt": "N2",
      "headword": "間隔",
      "source_form": "間隔",
      "variants": [
        "間隔"
      ],
      "reading": "かんかく",
      "reading_variants": [
        "かんかく"
      ],
      "romaji": "kankaku",
      "part_of_speech": "noun",
      "meaning_zh": "间隔；距离",
      "kanji_readings": [
        {
          "form": "間隔",
          "reading": "かんかく"
        }
      ],
      "examples": [
        {
          "ja": "バスは同じ間隔で来ます。",
          "zh": "公交车按相同的间隔到站。",
          "focus": ["間隔"],
          "zhFocus": ["间隔"]
        },
        {
          "ja": "木と木の間隔を広げて植えました。",
          "zh": "加大树与树之间的距离种下了。",
          "focus": ["間隔"],
          "zhFocus": ["距离"]
        },
        {
          "ja": "前の人と間隔をあけて並んでください。",
          "zh": "请和前面的人隔开一段距离排队。",
          "focus": ["間隔"],
          "zhFocus": ["距离"]
        }
      ]
    },
    {
      "id": "n2-0442",
      "jlpt": "N2",
      "headword": "器具",
      "source_form": "器具",
      "variants": [
        "器具"
      ],
      "reading": "きぐ",
      "reading_variants": [
        "きぐ"
      ],
      "romaji": "kigu",
      "part_of_speech": "noun",
      "meaning_zh": "器具；用具",
      "kanji_readings": [
        {
          "form": "器具",
          "reading": "きぐ"
        }
      ],
      "examples": [
        {
          "ja": "実験の器具を片付けてください。",
          "zh": "请收拾好实验器具。",
          "focus": ["器具"],
          "zhFocus": ["器具"]
        },
        {
          "ja": "台所の器具をそろえました。",
          "zh": "备齐了厨房用具。",
          "focus": ["器具"],
          "zhFocus": ["用具"]
        },
        {
          "ja": "この器具は使い方が難しいです。",
          "zh": "这个器具用法很难。",
          "focus": ["器具"],
          "zhFocus": ["器具"]
        }
      ]
    },
    {
      "id": "n2-0443",
      "jlpt": "N2",
      "headword": "行列",
      "source_form": "行列",
      "variants": [
        "行列"
      ],
      "reading": "ぎょうれつ",
      "reading_variants": [
        "ぎょうれつ"
      ],
      "romaji": "gyouretsu",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "（排成的）长队；行列",
      "kanji_readings": [
        {
          "form": "行列",
          "reading": "ぎょうれつ"
        }
      ],
      "examples": [
        {
          "ja": "人気の店の前に行列ができています。",
          "zh": "人气店门前排起了长队。",
          "focus": ["行列"],
          "zhFocus": ["长队"]
        },
        {
          "ja": "一時間も行列して、やっと入れました。",
          "zh": "排了一个小时的队，终于进去了。",
          "focus": ["行列"],
          "zhFocus": ["排"]
        },
        {
          "ja": "祭りの行列が町を通りました。",
          "zh": "祭典的队伍穿过了城镇。",
          "focus": ["行列"],
          "zhFocus": ["队伍"]
        }
      ]
    },
    {
      "id": "n2-0444",
      "jlpt": "N2",
      "headword": "規律",
      "source_form": "規律",
      "variants": [
        "規律"
      ],
      "reading": "きりつ",
      "reading_variants": [
        "きりつ"
      ],
      "romaji": "kiritsu",
      "part_of_speech": "noun",
      "meaning_zh": "纪律；规律",
      "kanji_readings": [
        {
          "form": "規律",
          "reading": "きりつ"
        }
      ],
      "examples": [
        {
          "ja": "学校の規律を守りましょう。",
          "zh": "遵守学校的纪律吧。",
          "focus": ["規律"],
          "zhFocus": ["纪律"]
        },
        {
          "ja": "軍隊は規律が厳しいです。",
          "zh": "军队纪律严明。",
          "focus": ["規律"],
          "zhFocus": ["纪律"]
        },
        {
          "ja": "規律のある生活を送っています。",
          "zh": "过着有规律的生活。",
          "focus": ["規律"],
          "zhFocus": ["规律"]
        }
      ]
    },
    {
      "id": "n2-0445",
      "jlpt": "N2",
      "headword": "碁",
      "source_form": "碁",
      "variants": [
        "碁"
      ],
      "reading": "ご",
      "reading_variants": [
        "ご"
      ],
      "romaji": "go",
      "part_of_speech": "noun",
      "meaning_zh": "围棋",
      "kanji_readings": [
        {
          "form": "碁",
          "reading": "ご"
        }
      ],
      "examples": [
        {
          "ja": "祖父と碁を打ちました。",
          "zh": "和祖父下了围棋。",
          "focus": ["碁"],
          "zhFocus": ["围棋"]
        },
        {
          "ja": "父は碁が強いです。",
          "zh": "父亲围棋下得很好。",
          "focus": ["碁"],
          "zhFocus": ["围棋"]
        },
        {
          "ja": "子供のころから碁を習っています。",
          "zh": "从小就在学围棋。",
          "focus": ["碁"],
          "zhFocus": ["围棋"]
        }
      ],
      "note_zh": "也说「囲碁」；下围棋说「碁を打つ」。"
    },
    {
      "id": "n2-0446",
      "jlpt": "N2",
      "headword": "公務",
      "source_form": "公務",
      "variants": [
        "公務"
      ],
      "reading": "こうむ",
      "reading_variants": [
        "こうむ"
      ],
      "romaji": "koumu",
      "part_of_speech": "noun",
      "meaning_zh": "公务",
      "kanji_readings": [
        {
          "form": "公務",
          "reading": "こうむ"
        }
      ],
      "examples": [
        {
          "ja": "市長は公務で海外へ行きました。",
          "zh": "市长因公务出国了。",
          "focus": ["公務"],
          "zhFocus": ["公务"]
        },
        {
          "ja": "公務の間は私用の電話をしないでください。",
          "zh": "执行公务期间请不要打私人电话。",
          "focus": ["公務"],
          "zhFocus": ["公务"]
        },
        {
          "ja": "彼は公務員として働いています。",
          "zh": "他是一名公务员。",
          "focus": ["公務"],
          "zhFocus": ["公务"]
        }
      ]
    },
    {
      "id": "n2-0447",
      "jlpt": "N2",
      "headword": "合理",
      "source_form": "合理",
      "variants": [
        "合理"
      ],
      "reading": "ごうり",
      "reading_variants": [
        "ごうり"
      ],
      "romaji": "gouri",
      "part_of_speech": "noun",
      "meaning_zh": "合理",
      "kanji_readings": [
        {
          "form": "合理",
          "reading": "ごうり"
        }
      ],
      "examples": [
        {
          "ja": "もっと合理的な方法を考えましょう。",
          "zh": "想一个更合理的方法吧。",
          "focus": ["合理"],
          "zhFocus": ["合理"]
        },
        {
          "ja": "彼は何でも合理的に考えます。",
          "zh": "他凡事都理性地思考。",
          "focus": ["合理"],
          "zhFocus": ["理性"]
        },
        {
          "ja": "仕事の合理化が進んでいます。",
          "zh": "工作的合理化正在推进。",
          "focus": ["合理"],
          "zhFocus": ["合理"]
        }
      ],
      "note_zh": "多用「合理的」「合理化」等形式。"
    },
    {
      "id": "n2-0448",
      "jlpt": "N2",
      "headword": "紺",
      "source_form": "紺",
      "variants": [
        "紺"
      ],
      "reading": "こん",
      "reading_variants": [
        "こん"
      ],
      "romaji": "kon",
      "part_of_speech": "noun",
      "meaning_zh": "藏青色；深蓝色",
      "kanji_readings": [
        {
          "form": "紺",
          "reading": "こん"
        }
      ],
      "examples": [
        {
          "ja": "紺のスーツを着て面接に行きました。",
          "zh": "穿着藏青色西装去面试了。",
          "focus": ["紺"],
          "zhFocus": ["藏青色"]
        },
        {
          "ja": "学校の制服は紺です。",
          "zh": "学校的制服是深蓝色的。",
          "focus": ["紺"],
          "zhFocus": ["深蓝色"]
        },
        {
          "ja": "紺の靴下を買いました。",
          "zh": "买了藏青色的袜子。",
          "focus": ["紺"],
          "zhFocus": ["藏青色"]
        }
      ]
    },
    {
      "id": "n2-0449",
      "jlpt": "N2",
      "headword": "混合",
      "source_form": "混合",
      "variants": [
        "混合"
      ],
      "reading": "こんごう",
      "reading_variants": [
        "こんごう"
      ],
      "romaji": "kongou",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "混合",
      "kanji_readings": [
        {
          "form": "混合",
          "reading": "こんごう"
        }
      ],
      "examples": [
        {
          "ja": "二つの液体を混合します。",
          "zh": "把两种液体混合起来。",
          "focus": ["混合"],
          "zhFocus": ["混合"]
        },
        {
          "ja": "男女混合のチームで試合に出ました。",
          "zh": "以男女混合队的形式参加了比赛。",
          "focus": ["混合"],
          "zhFocus": ["混合"]
        },
        {
          "ja": "赤と白を混合すると、ピンクになります。",
          "zh": "红和白混合会变成粉色。",
          "focus": ["混合"],
          "zhFocus": ["混合"]
        }
      ]
    },
    {
      "id": "n2-0450",
      "jlpt": "N2",
      "headword": "子孫",
      "source_form": "子孫",
      "variants": [
        "子孫"
      ],
      "reading": "しそん",
      "reading_variants": [
        "しそん"
      ],
      "romaji": "shison",
      "part_of_speech": "noun",
      "meaning_zh": "子孙；后代",
      "kanji_readings": [
        {
          "form": "子孫",
          "reading": "しそん"
        }
      ],
      "examples": [
        {
          "ja": "この自然を子孫に残したいです。",
          "zh": "想把这片自然留给子孙。",
          "focus": ["子孫"],
          "zhFocus": ["子孙"]
        },
        {
          "ja": "彼は有名な武士の子孫です。",
          "zh": "他是有名武士的后代。",
          "focus": ["子孫"],
          "zhFocus": ["后代"]
        },
        {
          "ja": "動物は子孫を残すために生きています。",
          "zh": "动物为了繁衍后代而活着。",
          "focus": ["子孫"],
          "zhFocus": ["后代"]
        }
      ],
      "note_zh": "与「先祖（祖先）」相对。"
    },
    {
      "id": "n2-0451",
      "jlpt": "N2",
      "headword": "実習",
      "source_form": "実習",
      "variants": [
        "実習"
      ],
      "reading": "じっしゅう",
      "reading_variants": [
        "じっしゅう"
      ],
      "romaji": "jisshuu",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "实习",
      "kanji_readings": [
        {
          "form": "実習",
          "reading": "じっしゅう"
        }
      ],
      "examples": [
        {
          "ja": "病院で看護の実習をしました。",
          "zh": "在医院做了护理实习。",
          "focus": ["実習"],
          "zhFocus": ["实习"]
        },
        {
          "ja": "実習で料理の作り方を学びました。",
          "zh": "在实习中学会了做菜。",
          "focus": ["実習"],
          "zhFocus": ["实习"]
        },
        {
          "ja": "来月から工場で実習します。",
          "zh": "下个月开始在工厂实习。",
          "focus": ["実習"],
          "zhFocus": ["实习"]
        }
      ]
    },
    {
      "id": "n2-0452",
      "jlpt": "N2",
      "headword": "弱点",
      "source_form": "弱点",
      "variants": [
        "弱点"
      ],
      "reading": "じゃくてん",
      "reading_variants": [
        "じゃくてん"
      ],
      "romaji": "jakuten",
      "part_of_speech": "noun",
      "meaning_zh": "弱点",
      "kanji_readings": [
        {
          "form": "弱点",
          "reading": "じゃくてん"
        }
      ],
      "examples": [
        {
          "ja": "自分の弱点を知ることが大切です。",
          "zh": "了解自己的弱点很重要。",
          "focus": ["弱点"],
          "zhFocus": ["弱点"]
        },
        {
          "ja": "相手の弱点を見つけました。",
          "zh": "找到了对手的弱点。",
          "focus": ["弱点"],
          "zhFocus": ["弱点"]
        },
        {
          "ja": "彼の弱点は時間を守らないことです。",
          "zh": "他的弱点是不守时。",
          "focus": ["弱点"],
          "zhFocus": ["弱点"]
        }
      ]
    },
    {
      "id": "n2-0453",
      "jlpt": "N2",
      "headword": "社説",
      "source_form": "社説",
      "variants": [
        "社説"
      ],
      "reading": "しゃせつ",
      "reading_variants": [
        "しゃせつ"
      ],
      "romaji": "shasetsu",
      "part_of_speech": "noun",
      "meaning_zh": "社论",
      "kanji_readings": [
        {
          "form": "社説",
          "reading": "しゃせつ"
        }
      ],
      "examples": [
        {
          "ja": "毎朝、新聞の社説を読んでいます。",
          "zh": "每天早上读报纸的社论。",
          "focus": ["社説"],
          "zhFocus": ["社论"]
        },
        {
          "ja": "今日の社説は環境の問題についてです。",
          "zh": "今天的社论是关于环境问题的。",
          "focus": ["社説"],
          "zhFocus": ["社论"]
        },
        {
          "ja": "社説で政府の政策が批判されました。",
          "zh": "社论批评了政府的政策。",
          "focus": ["社説"],
          "zhFocus": ["社论"]
        }
      ]
    },
    {
      "id": "n2-0454",
      "jlpt": "N2",
      "headword": "循環",
      "source_form": "循環",
      "variants": [
        "循環"
      ],
      "reading": "じゅんかん",
      "reading_variants": [
        "じゅんかん"
      ],
      "romaji": "junkan",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "循环",
      "kanji_readings": [
        {
          "form": "循環",
          "reading": "じゅんかん"
        }
      ],
      "examples": [
        {
          "ja": "血液は体の中を循環しています。",
          "zh": "血液在体内循环。",
          "focus": ["循環"],
          "zhFocus": ["循环"]
        },
        {
          "ja": "窓を開けて空気を循環させましょう。",
          "zh": "开窗让空气流通一下吧。",
          "focus": ["循環"],
          "zhFocus": ["流通"]
        },
        {
          "ja": "水は海と空の間を循環しています。",
          "zh": "水在海洋和天空之间循环。",
          "focus": ["循環"],
          "zhFocus": ["循环"]
        }
      ]
    },
    {
      "id": "n2-0455",
      "jlpt": "N2",
      "headword": "水素",
      "source_form": "水素",
      "variants": [
        "水素"
      ],
      "reading": "すいそ",
      "reading_variants": [
        "すいそ"
      ],
      "romaji": "suiso",
      "part_of_speech": "noun",
      "meaning_zh": "氢；氢气",
      "kanji_readings": [
        {
          "form": "水素",
          "reading": "すいそ"
        }
      ],
      "examples": [
        {
          "ja": "水は水素と酸素からできています。",
          "zh": "水是由氢和氧组成的。",
          "focus": ["水素"],
          "zhFocus": ["氢"]
        },
        {
          "ja": "水素で走る車が開発されています。",
          "zh": "正在研发靠氢驱动的汽车。",
          "focus": ["水素"],
          "zhFocus": ["氢"]
        },
        {
          "ja": "水素はとても軽い気体です。",
          "zh": "氢气是非常轻的气体。",
          "focus": ["水素"],
          "zhFocus": ["氢气"]
        }
      ]
    },
    {
      "id": "n2-0456",
      "jlpt": "N2",
      "headword": "水分",
      "source_form": "水分",
      "variants": [
        "水分"
      ],
      "reading": "すいぶん",
      "reading_variants": [
        "すいぶん"
      ],
      "romaji": "suibun",
      "part_of_speech": "noun",
      "meaning_zh": "水分",
      "kanji_readings": [
        {
          "form": "水分",
          "reading": "すいぶん"
        }
      ],
      "examples": [
        {
          "ja": "暑い日は水分をたくさん取ってください。",
          "zh": "炎热的日子请多补充水分。",
          "focus": ["水分"],
          "zhFocus": ["水分"]
        },
        {
          "ja": "この果物は水分が多いです。",
          "zh": "这种水果水分很多。",
          "focus": ["水分"],
          "zhFocus": ["水分"]
        },
        {
          "ja": "タオルで髪の水分を取ります。",
          "zh": "用毛巾吸干头发上的水分。",
          "focus": ["水分"],
          "zhFocus": ["水分"]
        }
      ]
    },
    {
      "id": "n2-0457",
      "jlpt": "N2",
      "headword": "杉",
      "source_form": "杉",
      "variants": [
        "杉"
      ],
      "reading": "すぎ",
      "reading_variants": [
        "すぎ"
      ],
      "romaji": "sugi",
      "part_of_speech": "noun",
      "meaning_zh": "杉树；日本柳杉",
      "kanji_readings": [
        {
          "form": "杉",
          "reading": "すぎ"
        }
      ],
      "examples": [
        {
          "ja": "山に杉の木がたくさんあります。",
          "zh": "山上有很多杉树。",
          "focus": ["杉"],
          "zhFocus": ["杉树"]
        },
        {
          "ja": "春になると、杉の花粉で目がかゆくなります。",
          "zh": "一到春天，杉树花粉就让眼睛发痒。",
          "focus": ["杉"],
          "zhFocus": ["杉树"]
        },
        {
          "ja": "この家は杉の木で建てられています。",
          "zh": "这座房子是用杉木建造的。",
          "focus": ["杉"],
          "zhFocus": ["杉"]
        }
      ]
    },
    {
      "id": "n2-0458",
      "jlpt": "N2",
      "headword": "税関",
      "source_form": "税関",
      "variants": [
        "税関"
      ],
      "reading": "ぜいかん",
      "reading_variants": [
        "ぜいかん"
      ],
      "romaji": "zeikan",
      "part_of_speech": "noun",
      "meaning_zh": "海关",
      "kanji_readings": [
        {
          "form": "税関",
          "reading": "ぜいかん"
        }
      ],
      "examples": [
        {
          "ja": "空港で税関を通りました。",
          "zh": "在机场过了海关。",
          "focus": ["税関"],
          "zhFocus": ["海关"]
        },
        {
          "ja": "税関で荷物を調べられました。",
          "zh": "在海关被检查了行李。",
          "focus": ["税関"],
          "zhFocus": ["海关"]
        },
        {
          "ja": "税関の手続きに時間がかかりました。",
          "zh": "海关手续花了不少时间。",
          "focus": ["税関"],
          "zhFocus": ["海关"]
        }
      ]
    },
    {
      "id": "n2-0459",
      "jlpt": "N2",
      "headword": "洗剤",
      "source_form": "洗剤",
      "variants": [
        "洗剤"
      ],
      "reading": "せんざい",
      "reading_variants": [
        "せんざい"
      ],
      "romaji": "senzai",
      "part_of_speech": "noun",
      "meaning_zh": "洗涤剂；洗衣粉",
      "kanji_readings": [
        {
          "form": "洗剤",
          "reading": "せんざい"
        }
      ],
      "examples": [
        {
          "ja": "洗剤で皿を洗います。",
          "zh": "用洗涤剂洗盘子。",
          "focus": ["洗剤"],
          "zhFocus": ["洗涤剂"]
        },
        {
          "ja": "洗濯の洗剤がなくなりました。",
          "zh": "洗衣粉用完了。",
          "focus": ["洗剤"],
          "zhFocus": ["洗衣粉"]
        },
        {
          "ja": "洗剤を入れすぎないでください。",
          "zh": "请不要放太多洗涤剂。",
          "focus": ["洗剤"],
          "zhFocus": ["洗涤剂"]
        }
      ]
    },
    {
      "id": "n2-0460",
      "jlpt": "N2",
      "headword": "全集",
      "source_form": "全集",
      "variants": [
        "全集"
      ],
      "reading": "ぜんしゅう",
      "reading_variants": [
        "ぜんしゅう"
      ],
      "romaji": "zenshuu",
      "part_of_speech": "noun",
      "meaning_zh": "全集",
      "kanji_readings": [
        {
          "form": "全集",
          "reading": "ぜんしゅう"
        }
      ],
      "examples": [
        {
          "ja": "この作家の全集を読んでいます。",
          "zh": "在读这位作家的全集。",
          "focus": ["全集"],
          "zhFocus": ["全集"]
        },
        {
          "ja": "図書館で文学の全集を借りました。",
          "zh": "在图书馆借了文学全集。",
          "focus": ["全集"],
          "zhFocus": ["全集"]
        },
        {
          "ja": "祖父の部屋には古い全集が並んでいます。",
          "zh": "祖父的房间里摆着旧的全集。",
          "focus": ["全集"],
          "zhFocus": ["全集"]
        }
      ]
    },
    {
      "id": "n2-0461",
      "jlpt": "N2",
      "headword": "属する",
      "source_form": "属する",
      "variants": [
        "属する"
      ],
      "reading": "ぞくする",
      "reading_variants": [
        "ぞくする"
      ],
      "romaji": "zokusuru",
      "part_of_speech": "verb",
      "meaning_zh": "属于；隶属",
      "kanji_readings": [
        {
          "form": "属する",
          "reading": "ぞくする"
        }
      ],
      "examples": [
        {
          "ja": "私はテニス部に属しています。",
          "zh": "我属于网球部。",
          "focus": ["属し"],
          "zhFocus": ["属于"]
        },
        {
          "ja": "この植物はバラの仲間に属します。",
          "zh": "这种植物属于蔷薇类。",
          "focus": ["属し"],
          "zhFocus": ["属于"]
        },
        {
          "ja": "どのグループにも属していません。",
          "zh": "不属于任何小组。",
          "focus": ["属し"],
          "zhFocus": ["属于"]
        }
      ]
    },
    {
      "id": "n2-0462",
      "jlpt": "N2",
      "headword": "太鼓",
      "source_form": "太鼓",
      "variants": [
        "太鼓"
      ],
      "reading": "たいこ",
      "reading_variants": [
        "たいこ"
      ],
      "romaji": "taiko",
      "part_of_speech": "noun",
      "meaning_zh": "鼓；太鼓",
      "kanji_readings": [
        {
          "form": "太鼓",
          "reading": "たいこ"
        }
      ],
      "examples": [
        {
          "ja": "祭りで太鼓の音が聞こえます。",
          "zh": "祭典上能听到鼓声。",
          "focus": ["太鼓"],
          "zhFocus": ["鼓"]
        },
        {
          "ja": "子供たちが太鼓をたたいています。",
          "zh": "孩子们在敲鼓。",
          "focus": ["太鼓"],
          "zhFocus": ["鼓"]
        },
        {
          "ja": "日本の太鼓の演奏を見ました。",
          "zh": "看了日本太鼓的演奏。",
          "focus": ["太鼓"],
          "zhFocus": ["太鼓"]
        }
      ]
    },
    {
      "id": "n2-0463",
      "jlpt": "N2",
      "headword": "中途",
      "source_form": "中途",
      "variants": [
        "中途"
      ],
      "reading": "ちゅうと",
      "reading_variants": [
        "ちゅうと"
      ],
      "romaji": "chuuto",
      "part_of_speech": "noun",
      "meaning_zh": "中途；半途",
      "kanji_readings": [
        {
          "form": "中途",
          "reading": "ちゅうと"
        }
      ],
      "examples": [
        {
          "ja": "彼は大学を中途でやめました。",
          "zh": "他大学中途退学了。",
          "focus": ["中途"],
          "zhFocus": ["中途"]
        },
        {
          "ja": "仕事を中途で投げ出してはいけません。",
          "zh": "不能把工作半途扔下不管。",
          "focus": ["中途"],
          "zhFocus": ["半途"]
        },
        {
          "ja": "試合は雨で中途で中止になりました。",
          "zh": "比赛因下雨中途取消了。",
          "focus": ["中途"],
          "zhFocus": ["中途"]
        }
      ]
    },
    {
      "id": "n2-0464",
      "jlpt": "N2",
      "headword": "貯蔵",
      "source_form": "貯蔵",
      "variants": [
        "貯蔵"
      ],
      "reading": "ちょぞう",
      "reading_variants": [
        "ちょぞう"
      ],
      "romaji": "chozou",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "贮藏；储存",
      "kanji_readings": [
        {
          "form": "貯蔵",
          "reading": "ちょぞう"
        }
      ],
      "examples": [
        {
          "ja": "冬のために野菜を貯蔵します。",
          "zh": "为了过冬储存蔬菜。",
          "focus": ["貯蔵"],
          "zhFocus": ["储存"]
        },
        {
          "ja": "この倉庫には米が貯蔵されています。",
          "zh": "这个仓库里贮藏着大米。",
          "focus": ["貯蔵"],
          "zhFocus": ["贮藏"]
        },
        {
          "ja": "ワインを地下に貯蔵しています。",
          "zh": "把葡萄酒贮藏在地下。",
          "focus": ["貯蔵"],
          "zhFocus": ["贮藏"]
        }
      ]
    },
    {
      "id": "n2-0465",
      "jlpt": "N2",
      "headword": "直径",
      "source_form": "直径",
      "variants": [
        "直径"
      ],
      "reading": "ちょっけい",
      "reading_variants": [
        "ちょっけい"
      ],
      "romaji": "chokkei",
      "part_of_speech": "noun",
      "meaning_zh": "直径",
      "kanji_readings": [
        {
          "form": "直径",
          "reading": "ちょっけい"
        }
      ],
      "examples": [
        {
          "ja": "この円の直径を測ってください。",
          "zh": "请测量这个圆的直径。",
          "focus": ["直径"],
          "zhFocus": ["直径"]
        },
        {
          "ja": "地球の直径はどのくらいですか。",
          "zh": "地球的直径大约是多少？",
          "focus": ["直径"],
          "zhFocus": ["直径"]
        },
        {
          "ja": "直径から半径を計算します。",
          "zh": "由直径算出半径。",
          "focus": ["直径"],
          "zhFocus": ["直径"]
        }
      ]
    },
    {
      "id": "n2-0466",
      "jlpt": "N2",
      "headword": "綱",
      "source_form": "綱",
      "variants": [
        "綱"
      ],
      "reading": "つな",
      "reading_variants": [
        "つな"
      ],
      "romaji": "tsuna",
      "part_of_speech": "noun",
      "meaning_zh": "绳索；粗绳",
      "kanji_readings": [
        {
          "form": "綱",
          "reading": "つな"
        }
      ],
      "examples": [
        {
          "ja": "船を綱で岸につなぎました。",
          "zh": "用缆绳把船系在了岸边。",
          "focus": ["綱"],
          "zhFocus": ["缆绳"]
        },
        {
          "ja": "運動会で綱引きをしました。",
          "zh": "在运动会上进行了拔河。",
          "focus": ["綱"]
        },
        {
          "ja": "太い綱を両手で引っ張りました。",
          "zh": "用双手拉住了粗绳。",
          "focus": ["綱"],
          "zhFocus": ["粗绳"]
        }
      ]
    },
    {
      "id": "n2-0467",
      "jlpt": "N2",
      "headword": "電池",
      "source_form": "電池",
      "variants": [
        "電池"
      ],
      "reading": "でんち",
      "reading_variants": [
        "でんち"
      ],
      "romaji": "denchi",
      "part_of_speech": "noun",
      "meaning_zh": "电池",
      "kanji_readings": [
        {
          "form": "電池",
          "reading": "でんち"
        }
      ],
      "examples": [
        {
          "ja": "時計の電池が切れました。",
          "zh": "钟表的电池没电了。",
          "focus": ["電池"],
          "zhFocus": ["电池"]
        },
        {
          "ja": "新しい電池に替えてください。",
          "zh": "请换上新电池。",
          "focus": ["電池"],
          "zhFocus": ["电池"]
        },
        {
          "ja": "電池で動くおもちゃを買いました。",
          "zh": "买了用电池驱动的玩具。",
          "focus": ["電池"],
          "zhFocus": ["电池"]
        }
      ]
    },
    {
      "id": "n2-0468",
      "jlpt": "N2",
      "headword": "内科",
      "source_form": "内科",
      "variants": [
        "内科"
      ],
      "reading": "ないか",
      "reading_variants": [
        "ないか"
      ],
      "romaji": "naika",
      "part_of_speech": "noun",
      "meaning_zh": "内科",
      "kanji_readings": [
        {
          "form": "内科",
          "reading": "ないか"
        }
      ],
      "examples": [
        {
          "ja": "熱があるので、内科に行きました。",
          "zh": "因为发烧去了内科。",
          "focus": ["内科"],
          "zhFocus": ["内科"]
        },
        {
          "ja": "内科の先生に診てもらいました。",
          "zh": "请内科医生看了病。",
          "focus": ["内科"],
          "zhFocus": ["内科"]
        },
        {
          "ja": "この病院の内科は午前だけです。",
          "zh": "这家医院的内科只有上午看诊。",
          "focus": ["内科"],
          "zhFocus": ["内科"]
        }
      ],
      "note_zh": "与「外科（外科）」相对。"
    },
    {
      "id": "n2-0469",
      "jlpt": "N2",
      "headword": "殴る",
      "source_form": "なぐる",
      "variants": [
        "殴る"
      ],
      "reading": "なぐる",
      "reading_variants": [
        "なぐる"
      ],
      "romaji": "naguru",
      "part_of_speech": "verb",
      "meaning_zh": "殴打；打",
      "kanji_readings": [
        {
          "form": "殴る",
          "reading": "なぐる"
        }
      ],
      "examples": [
        {
          "ja": "けんかで友達を殴ってしまいました。",
          "zh": "吵架时打了朋友。",
          "focus": ["殴っ"],
          "zhFocus": ["打"]
        },
        {
          "ja": "人を殴ってはいけません。",
          "zh": "不能打人。",
          "focus": ["殴っ"],
          "zhFocus": ["打"]
        },
        {
          "ja": "男が店員を殴って逃げました。",
          "zh": "男子殴打店员后逃走了。",
          "focus": ["殴っ"],
          "zhFocus": ["殴打"]
        }
      ]
    },
    {
      "id": "n2-0470",
      "jlpt": "N2",
      "headword": "筆者",
      "source_form": "筆者",
      "variants": [
        "筆者"
      ],
      "reading": "ひっしゃ",
      "reading_variants": [
        "ひっしゃ"
      ],
      "romaji": "hissha",
      "part_of_speech": "noun",
      "meaning_zh": "笔者；作者",
      "kanji_readings": [
        {
          "form": "筆者",
          "reading": "ひっしゃ"
        }
      ],
      "examples": [
        {
          "ja": "筆者の意見をまとめてください。",
          "zh": "请概括作者的观点。",
          "focus": ["筆者"],
          "zhFocus": ["作者"]
        },
        {
          "ja": "この文章の筆者は医者です。",
          "zh": "这篇文章的作者是医生。",
          "focus": ["筆者"],
          "zhFocus": ["作者"]
        },
        {
          "ja": "筆者が一番言いたいことは何ですか。",
          "zh": "作者最想说的是什么？",
          "focus": ["筆者"],
          "zhFocus": ["作者"]
        }
      ]
    },
    {
      "id": "n2-0471",
      "jlpt": "N2",
      "headword": "文献",
      "source_form": "文献",
      "variants": [
        "文献"
      ],
      "reading": "ぶんけん",
      "reading_variants": [
        "ぶんけん"
      ],
      "romaji": "bunken",
      "part_of_speech": "noun",
      "meaning_zh": "文献",
      "kanji_readings": [
        {
          "form": "文献",
          "reading": "ぶんけん"
        }
      ],
      "examples": [
        {
          "ja": "論文を書くために文献を集めています。",
          "zh": "为了写论文在收集文献。",
          "focus": ["文献"],
          "zhFocus": ["文献"]
        },
        {
          "ja": "古い文献を調べました。",
          "zh": "查阅了古老的文献。",
          "focus": ["文献"],
          "zhFocus": ["文献"]
        },
        {
          "ja": "参考にした文献を最後に書いてください。",
          "zh": "请在最后写上参考文献。",
          "focus": ["文献"],
          "zhFocus": ["文献"]
        }
      ]
    },
    {
      "id": "n2-0472",
      "jlpt": "N2",
      "headword": "閉会",
      "source_form": "閉会",
      "variants": [
        "閉会"
      ],
      "reading": "へいかい",
      "reading_variants": [
        "へいかい"
      ],
      "romaji": "heikai",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "闭会；闭幕",
      "kanji_readings": [
        {
          "form": "閉会",
          "reading": "へいかい"
        }
      ],
      "examples": [
        {
          "ja": "これで会議を閉会します。",
          "zh": "会议到此结束。",
          "focus": ["閉会"],
          "zhFocus": ["结束"]
        },
        {
          "ja": "オリンピックの閉会式を見ました。",
          "zh": "看了奥运会的闭幕式。",
          "focus": ["閉会"],
          "zhFocus": ["闭幕"]
        },
        {
          "ja": "議長が閉会のあいさつをしました。",
          "zh": "议长致了闭会辞。",
          "focus": ["閉会"],
          "zhFocus": ["闭会"]
        }
      ],
      "note_zh": "与「開会（开会）」相对。"
    },
    {
      "id": "n2-0473",
      "jlpt": "N2",
      "headword": "包装",
      "source_form": "包装",
      "variants": [
        "包装"
      ],
      "reading": "ほうそう",
      "reading_variants": [
        "ほうそう"
      ],
      "romaji": "housou",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "包装",
      "kanji_readings": [
        {
          "form": "包装",
          "reading": "ほうそう"
        }
      ],
      "examples": [
        {
          "ja": "プレゼント用に包装してください。",
          "zh": "请按礼品包装一下。",
          "focus": ["包装"],
          "zhFocus": ["包装"]
        },
        {
          "ja": "包装の紙を捨てました。",
          "zh": "把包装纸扔了。",
          "focus": ["包装"],
          "zhFocus": ["包装"]
        },
        {
          "ja": "この商品は包装がきれいです。",
          "zh": "这件商品包装很漂亮。",
          "focus": ["包装"],
          "zhFocus": ["包装"]
        }
      ]
    },
    {
      "id": "n2-0474",
      "jlpt": "N2",
      "headword": "防犯",
      "source_form": "防犯",
      "variants": [
        "防犯"
      ],
      "reading": "ぼうはん",
      "reading_variants": [
        "ぼうはん"
      ],
      "romaji": "bouhan",
      "part_of_speech": "noun",
      "meaning_zh": "防盗；防范犯罪",
      "kanji_readings": [
        {
          "form": "防犯",
          "reading": "ぼうはん"
        }
      ],
      "examples": [
        {
          "ja": "防犯のために、カメラを付けました。",
          "zh": "为了防盗，安装了摄像头。",
          "focus": ["防犯"],
          "zhFocus": ["防盗"]
        },
        {
          "ja": "町の人たちが防犯の活動をしています。",
          "zh": "镇上的人们在开展防范犯罪的活动。",
          "focus": ["防犯"],
          "zhFocus": ["防范犯罪"]
        },
        {
          "ja": "夜は防犯のため、門を閉めます。",
          "zh": "晚上为了防盗会关上大门。",
          "focus": ["防犯"],
          "zhFocus": ["防盗"]
        }
      ]
    },
    {
      "id": "n2-0475",
      "jlpt": "N2",
      "headword": "牧場",
      "source_form": "牧場",
      "variants": [
        "牧場"
      ],
      "reading": "ぼくじょう",
      "reading_variants": [
        "ぼくじょう"
      ],
      "romaji": "bokujou",
      "part_of_speech": "noun",
      "meaning_zh": "牧场",
      "kanji_readings": [
        {
          "form": "牧場",
          "reading": "ぼくじょう"
        }
      ],
      "examples": [
        {
          "ja": "牧場で牛を育てています。",
          "zh": "在牧场里养牛。",
          "focus": ["牧場"],
          "zhFocus": ["牧场"]
        },
        {
          "ja": "牧場でしぼった牛乳を飲みました。",
          "zh": "喝了牧场里挤的牛奶。",
          "focus": ["牧場"],
          "zhFocus": ["牧场"]
        },
        {
          "ja": "夏休みに北海道の牧場へ行きました。",
          "zh": "暑假去了北海道的牧场。",
          "focus": ["牧場"],
          "zhFocus": ["牧场"]
        }
      ],
      "note_zh": "也读作「まきば」，多指放牧的草场。"
    },
    {
      "id": "n2-0476",
      "jlpt": "N2",
      "headword": "真っ暗",
      "source_form": "真っ暗",
      "variants": [
        "真っ暗"
      ],
      "reading": "まっくら",
      "reading_variants": [
        "まっくら"
      ],
      "romaji": "makkura",
      "part_of_speech": "na-adjective/noun",
      "meaning_zh": "漆黑；一片黑暗；（前途）暗淡",
      "senses_zh": [
        "漆黑；一片黑暗",
        "（前途）暗淡"
      ],
      "kanji_readings": [
        {
          "form": "真っ暗",
          "reading": "まっくら"
        }
      ],
      "examples": [
        {
          "ja": "停電で部屋が真っ暗になりました。",
          "zh": "因为停电，房间里一片漆黑。",
          "focus": ["真っ暗"],
          "zhFocus": ["一片漆黑"]
        },
        {
          "ja": "外はもう真っ暗です。",
          "zh": "外面已经漆黑一片了。",
          "focus": ["真っ暗"],
          "zhFocus": ["漆黑一片"]
        },
        {
          "ja": "仕事を失って、目の前が真っ暗になりました。",
          "zh": "丢了工作，眼前一片黑暗。",
          "focus": ["真っ暗"],
          "zhFocus": ["一片黑暗"]
        }
      ]
    },
    {
      "id": "n2-0477",
      "jlpt": "N2",
      "headword": "満点",
      "source_form": "満点",
      "variants": [
        "満点"
      ],
      "reading": "まんてん",
      "reading_variants": [
        "まんてん"
      ],
      "romaji": "manten",
      "part_of_speech": "noun",
      "meaning_zh": "满分；完美",
      "senses_zh": [
        "满分",
        "完美"
      ],
      "kanji_readings": [
        {
          "form": "満点",
          "reading": "まんてん"
        }
      ],
      "examples": [
        {
          "ja": "数学のテストで満点を取りました。",
          "zh": "数学考试考了满分。",
          "focus": ["満点"],
          "zhFocus": ["满分"]
        },
        {
          "ja": "この店のサービスは満点です。",
          "zh": "这家店的服务无可挑剔。",
          "focus": ["満点"],
          "zhFocus": ["无可挑剔"]
        },
        {
          "ja": "栄養満点の料理を作りました。",
          "zh": "做了营养丰富的菜。",
          "focus": ["満点"],
          "zhFocus": ["丰富"]
        }
      ]
    },
    {
      "id": "n2-0478",
      "jlpt": "N2",
      "headword": "群れ",
      "source_form": "群れ",
      "variants": [
        "群れ"
      ],
      "reading": "むれ",
      "reading_variants": [
        "むれ"
      ],
      "romaji": "mure",
      "part_of_speech": "noun",
      "meaning_zh": "群；伙",
      "kanji_readings": [
        {
          "form": "群れ",
          "reading": "むれ"
        }
      ],
      "examples": [
        {
          "ja": "空を鳥の群れが飛んでいます。",
          "zh": "一群鸟在天上飞。",
          "focus": ["群れ"],
          "zhFocus": ["群"]
        },
        {
          "ja": "羊の群れが山を下りてきました。",
          "zh": "一群羊从山上下来了。",
          "focus": ["群れ"],
          "zhFocus": ["群"]
        },
        {
          "ja": "魚が群れを作って泳いでいます。",
          "zh": "鱼成群地游着。",
          "focus": ["群れ"],
          "zhFocus": ["成群"]
        }
      ]
    },
    {
      "id": "n2-0479",
      "jlpt": "N2",
      "headword": "名所",
      "source_form": "名所",
      "variants": [
        "名所"
      ],
      "reading": "めいしょ",
      "reading_variants": [
        "めいしょ"
      ],
      "romaji": "meisho",
      "part_of_speech": "noun",
      "meaning_zh": "名胜；名胜古迹",
      "kanji_readings": [
        {
          "form": "名所",
          "reading": "めいしょ"
        }
      ],
      "examples": [
        {
          "ja": "京都の名所を回りました。",
          "zh": "游览了京都的名胜。",
          "focus": ["名所"],
          "zhFocus": ["名胜"]
        },
        {
          "ja": "ここは桜の名所として知られています。",
          "zh": "这里是有名的赏樱胜地。",
          "focus": ["名所"],
          "zhFocus": ["胜地"]
        },
        {
          "ja": "この町には有名な名所がたくさんあります。",
          "zh": "这个小镇有很多有名的名胜古迹。",
          "focus": ["名所"],
          "zhFocus": ["名胜古迹"]
        }
      ]
    },
    {
      "id": "n2-0480",
      "jlpt": "N2",
      "headword": "目下",
      "source_form": "目下",
      "variants": [
        "目下"
      ],
      "reading": "めした",
      "reading_variants": [
        "めした"
      ],
      "romaji": "meshita",
      "part_of_speech": "noun",
      "meaning_zh": "部下；晚辈；地位低的人",
      "kanji_readings": [
        {
          "form": "目下",
          "reading": "めした"
        }
      ],
      "examples": [
        {
          "ja": "目下の人にも丁寧に話します。",
          "zh": "对晚辈也说话客气。",
          "focus": ["目下"],
          "zhFocus": ["晚辈"]
        },
        {
          "ja": "彼は目下の社員に優しいです。",
          "zh": "他对下属职员很和善。",
          "focus": ["目下"],
          "zhFocus": ["下属"]
        },
        {
          "ja": "目下の人に命令するような言い方はよくありません。",
          "zh": "用命令下属的口气说话不好。",
          "focus": ["目下"],
          "zhFocus": ["下属"]
        }
      ],
      "note_zh": "与「目上（长辈；上级）」相对。同样写作「目下」、读「もっか」时是“目前”的意思，是另一个词。"
    },
    {
      "id": "n2-0481",
      "jlpt": "N2",
      "headword": "催し",
      "source_form": "催し",
      "variants": [
        "催し"
      ],
      "reading": "もよおし",
      "reading_variants": [
        "もよおし"
      ],
      "romaji": "moyooshi",
      "part_of_speech": "noun",
      "meaning_zh": "活动；集会",
      "kanji_readings": [
        {
          "form": "催し",
          "reading": "もよおし"
        }
      ],
      "examples": [
        {
          "ja": "週末に駅前で楽しい催しがあります。",
          "zh": "周末车站前有好玩的活动。",
          "focus": ["催し"],
          "zhFocus": ["活动"]
        },
        {
          "ja": "夏祭りの催しに参加しました。",
          "zh": "参加了夏日祭的活动。",
          "focus": ["催し"],
          "zhFocus": ["活动"]
        },
        {
          "ja": "この会場ではいろいろな催しが行われます。",
          "zh": "这个会场会举办各种活动。",
          "focus": ["催し"],
          "zhFocus": ["活动"]
        }
      ],
      "note_zh": "动词「催す（举办）」的名词形。"
    },
    {
      "id": "n2-0482",
      "jlpt": "N2",
      "headword": "宴会",
      "source_form": "宴会",
      "variants": [
        "宴会"
      ],
      "reading": "えんかい",
      "reading_variants": [
        "えんかい"
      ],
      "romaji": "enkai",
      "part_of_speech": "noun",
      "meaning_zh": "宴会",
      "kanji_readings": [
        {
          "form": "宴会",
          "reading": "えんかい"
        }
      ],
      "examples": [
        {
          "ja": "会社の宴会でスピーチをしました。",
          "zh": "在公司的宴会上做了致辞。",
          "focus": ["宴会"],
          "zhFocus": ["宴会"]
        },
        {
          "ja": "今晩はホテルで宴会があります。",
          "zh": "今晚在酒店有宴会。",
          "focus": ["宴会"],
          "zhFocus": ["宴会"]
        },
        {
          "ja": "宴会の準備で忙しいです。",
          "zh": "忙着准备宴会。",
          "focus": ["宴会"],
          "zhFocus": ["宴会"]
        }
      ]
    },
    {
      "id": "n2-0483",
      "jlpt": "N2",
      "headword": "屋外",
      "source_form": "屋外",
      "variants": [
        "屋外"
      ],
      "reading": "おくがい",
      "reading_variants": [
        "おくがい"
      ],
      "romaji": "okugai",
      "part_of_speech": "noun",
      "meaning_zh": "室外；户外",
      "kanji_readings": [
        {
          "form": "屋外",
          "reading": "おくがい"
        }
      ],
      "examples": [
        {
          "ja": "今日は屋外で授業をしました。",
          "zh": "今天在室外上了课。",
          "focus": ["屋外"],
          "zhFocus": ["室外"]
        },
        {
          "ja": "屋外のプールは夏だけ開いています。",
          "zh": "室外游泳池只在夏天开放。",
          "focus": ["屋外"],
          "zhFocus": ["室外"]
        },
        {
          "ja": "雨の日は屋外の活動が中止になります。",
          "zh": "雨天户外活动会取消。",
          "focus": ["屋外"],
          "zhFocus": ["户外"]
        }
      ],
      "note_zh": "与「屋内（室内）」相对。"
    },
    {
      "id": "n2-0484",
      "jlpt": "N2",
      "headword": "鐘",
      "source_form": "鐘",
      "variants": [
        "鐘"
      ],
      "reading": "かね",
      "reading_variants": [
        "かね"
      ],
      "romaji": "kane",
      "part_of_speech": "noun",
      "meaning_zh": "钟（多指寺庙等处悬挂的大钟）",
      "kanji_readings": [
        {
          "form": "鐘",
          "reading": "かね"
        }
      ],
      "examples": [
        {
          "ja": "お寺の鐘が鳴っています。",
          "zh": "寺庙的钟在响。",
          "focus": ["鐘"],
          "zhFocus": ["钟"]
        },
        {
          "ja": "教会の鐘の音が聞こえます。",
          "zh": "能听到教堂的钟声。",
          "focus": ["鐘"],
          "zhFocus": ["钟"]
        },
        {
          "ja": "大みそかに鐘をつきに行きました。",
          "zh": "除夕夜去敲了钟。",
          "focus": ["鐘"],
          "zhFocus": ["钟"]
        }
      ],
      "note_zh": "敲钟说「鐘をつく」。"
    },
    {
      "id": "n2-0485",
      "jlpt": "N2",
      "headword": "感激",
      "source_form": "感激",
      "variants": [
        "感激"
      ],
      "reading": "かんげき",
      "reading_variants": [
        "かんげき"
      ],
      "romaji": "kangeki",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "感激；深受感动",
      "kanji_readings": [
        {
          "form": "感激",
          "reading": "かんげき"
        }
      ],
      "examples": [
        {
          "ja": "先生の言葉に感激しました。",
          "zh": "老师的话让我深受感动。",
          "focus": ["感激"],
          "zhFocus": ["深受感动"]
        },
        {
          "ja": "みんなの温かい気持ちに感激しています。",
          "zh": "对大家温暖的心意十分感激。",
          "focus": ["感激"],
          "zhFocus": ["感激"]
        },
        {
          "ja": "初めて海を見た時の感激は忘れられません。",
          "zh": "第一次看到大海时的感动令人难忘。",
          "focus": ["感激"],
          "zhFocus": ["感动"]
        }
      ]
    },
    {
      "id": "n2-0486",
      "jlpt": "N2",
      "headword": "鑑賞",
      "source_form": "鑑賞",
      "variants": [
        "鑑賞"
      ],
      "reading": "かんしょう",
      "reading_variants": [
        "かんしょう"
      ],
      "romaji": "kanshou",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "欣赏；鉴赏",
      "kanji_readings": [
        {
          "form": "鑑賞",
          "reading": "かんしょう"
        }
      ],
      "examples": [
        {
          "ja": "趣味は音楽の鑑賞です。",
          "zh": "爱好是欣赏音乐。",
          "focus": ["鑑賞"],
          "zhFocus": ["欣赏"]
        },
        {
          "ja": "美術館で絵を鑑賞しました。",
          "zh": "在美术馆欣赏了画作。",
          "focus": ["鑑賞"],
          "zhFocus": ["欣赏"]
        },
        {
          "ja": "週末は家でゆっくり映画を鑑賞しました。",
          "zh": "周末在家悠闲地欣赏了电影。",
          "focus": ["鑑賞"],
          "zhFocus": ["欣赏"]
        }
      ],
      "note_zh": "多用于欣赏艺术作品；观赏动植物一般写作「観賞」。"
    },
    {
      "id": "n2-0487",
      "jlpt": "N2",
      "headword": "間接",
      "source_form": "間接",
      "variants": [
        "間接"
      ],
      "reading": "かんせつ",
      "reading_variants": [
        "かんせつ"
      ],
      "romaji": "kansetsu",
      "part_of_speech": "noun",
      "meaning_zh": "间接",
      "kanji_readings": [
        {
          "form": "間接",
          "reading": "かんせつ"
        }
      ],
      "examples": [
        {
          "ja": "彼のことは間接的に聞きました。",
          "zh": "他的事我是间接听说的。",
          "focus": ["間接"],
          "zhFocus": ["间接"]
        },
        {
          "ja": "直接ではなく、間接に伝えました。",
          "zh": "不是直接，而是间接转达了。",
          "focus": ["間接"],
          "zhFocus": ["间接"]
        },
        {
          "ja": "間接的な言い方で断りました。",
          "zh": "用委婉的说法拒绝了。",
          "focus": ["間接"],
          "zhFocus": ["委婉"]
        }
      ],
      "note_zh": "与「直接（直接）」相对；多用「間接的」。"
    },
    {
      "id": "n2-0488",
      "jlpt": "N2",
      "headword": "乾燥",
      "source_form": "乾燥",
      "variants": [
        "乾燥"
      ],
      "reading": "かんそう",
      "reading_variants": [
        "かんそう"
      ],
      "romaji": "kansou",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "干燥；烘干",
      "kanji_readings": [
        {
          "form": "乾燥",
          "reading": "かんそう"
        }
      ],
      "examples": [
        {
          "ja": "冬は空気が乾燥しています。",
          "zh": "冬天空气干燥。",
          "focus": ["乾燥"],
          "zhFocus": ["干燥"]
        },
        {
          "ja": "洗濯物を乾燥機で乾かしました。",
          "zh": "用烘干机把洗好的衣服烘干了。",
          "focus": ["乾燥"],
          "zhFocus": ["烘干"]
        },
        {
          "ja": "肌の乾燥が気になります。",
          "zh": "很在意皮肤干燥。",
          "focus": ["乾燥"],
          "zhFocus": ["干燥"]
        }
      ]
    },
    {
      "id": "n2-0489",
      "jlpt": "N2",
      "headword": "区分",
      "source_form": "区分",
      "variants": [
        "区分"
      ],
      "reading": "くぶん",
      "reading_variants": [
        "くぶん"
      ],
      "romaji": "kubun",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "区分；划分；分类",
      "kanji_readings": [
        {
          "form": "区分",
          "reading": "くぶん"
        }
      ],
      "examples": [
        {
          "ja": "ごみを種類ごとに区分して出してください。",
          "zh": "请把垃圾按种类分类后再扔。",
          "focus": ["区分"],
          "zhFocus": ["分类"]
        },
        {
          "ja": "土地を三つに区分しました。",
          "zh": "把土地划分成了三块。",
          "focus": ["区分"],
          "zhFocus": ["划分"]
        },
        {
          "ja": "年齢によって料金の区分があります。",
          "zh": "根据年龄，费用有所区分。",
          "focus": ["区分"],
          "zhFocus": ["区分"]
        }
      ]
    },
    {
      "id": "n2-0490",
      "jlpt": "N2",
      "headword": "現に",
      "source_form": "現に",
      "variants": [
        "現に"
      ],
      "reading": "げんに",
      "reading_variants": [
        "げんに"
      ],
      "romaji": "genni",
      "part_of_speech": "adverb",
      "meaning_zh": "实际上；事实上",
      "kanji_readings": [
        {
          "form": "現に",
          "reading": "げんに"
        }
      ],
      "examples": [
        {
          "ja": "そんなことはないと言いますが、現に問題が起きています。",
          "zh": "虽说不会有那种事，但实际上问题已经发生了。",
          "focus": ["現に"],
          "zhFocus": ["实际上"]
        },
        {
          "ja": "この薬は効きます。現に私の病気も治りました。",
          "zh": "这药有效。事实上我的病也治好了。",
          "focus": ["現に"],
          "zhFocus": ["事实上"]
        },
        {
          "ja": "彼は現にここにいたのです。",
          "zh": "他确实在这里待过。",
          "focus": ["現に"],
          "zhFocus": ["确实"]
        }
      ]
    },
    {
      "id": "n2-0491",
      "jlpt": "N2",
      "headword": "山林",
      "source_form": "山林",
      "variants": [
        "山林"
      ],
      "reading": "さんりん",
      "reading_variants": [
        "さんりん"
      ],
      "romaji": "sanrin",
      "part_of_speech": "noun",
      "meaning_zh": "山林",
      "kanji_readings": [
        {
          "form": "山林",
          "reading": "さんりん"
        }
      ],
      "examples": [
        {
          "ja": "祖父は山林を持っています。",
          "zh": "祖父拥有一片山林。",
          "focus": ["山林"],
          "zhFocus": ["山林"]
        },
        {
          "ja": "山林の手入れをしています。",
          "zh": "在打理山林。",
          "focus": ["山林"],
          "zhFocus": ["山林"]
        },
        {
          "ja": "台風で山林が大きな被害を受けました。",
          "zh": "台风使山林受到了严重破坏。",
          "focus": ["山林"],
          "zhFocus": ["山林"]
        }
      ]
    },
    {
      "id": "n2-0492",
      "jlpt": "N2",
      "headword": "縛る",
      "source_form": "縛る",
      "variants": [
        "縛る"
      ],
      "reading": "しばる",
      "reading_variants": [
        "しばる"
      ],
      "romaji": "shibaru",
      "part_of_speech": "verb",
      "meaning_zh": "绑；捆；束缚",
      "senses_zh": [
        "绑；捆",
        "束缚"
      ],
      "kanji_readings": [
        {
          "form": "縛る",
          "reading": "しばる"
        }
      ],
      "examples": [
        {
          "ja": "古い新聞をひもで縛りました。",
          "zh": "用绳子把旧报纸捆起来了。",
          "focus": ["縛り"],
          "zhFocus": ["捆"]
        },
        {
          "ja": "犯人は手を縛られていました。",
          "zh": "犯人的手被绑着。",
          "focus": ["縛ら"],
          "zhFocus": ["绑"]
        },
        {
          "ja": "規則に縛られるのは好きではありません。",
          "zh": "不喜欢被规则束缚。",
          "focus": ["縛ら"],
          "zhFocus": ["束缚"]
        }
      ]
    },
    {
      "id": "n2-0493",
      "jlpt": "N2",
      "headword": "絞る",
      "source_form": "絞る",
      "variants": [
        "絞る"
      ],
      "reading": "しぼる",
      "reading_variants": [
        "しぼる"
      ],
      "romaji": "shiboru",
      "part_of_speech": "verb",
      "meaning_zh": "拧；挤；榨；缩小（范围）",
      "senses_zh": [
        "拧；挤；榨",
        "缩小（范围）"
      ],
      "kanji_readings": [
        {
          "form": "絞る",
          "reading": "しぼる"
        }
      ],
      "examples": [
        {
          "ja": "ぬれたタオルを絞りました。",
          "zh": "把湿毛巾拧干了。",
          "focus": ["絞り"],
          "zhFocus": ["拧"]
        },
        {
          "ja": "レモンを絞って、紅茶に入れました。",
          "zh": "挤了柠檬汁放进红茶里。",
          "focus": ["絞っ"],
          "zhFocus": ["挤"]
        },
        {
          "ja": "候補を三人に絞りました。",
          "zh": "把候选人缩小到了三个。",
          "focus": ["絞り"],
          "zhFocus": ["缩小"]
        }
      ],
      "note_zh": "榨取牛奶、果汁时也写作「搾る」。"
    },
    {
      "id": "n2-0494",
      "jlpt": "N2",
      "headword": "車庫",
      "source_form": "車庫",
      "variants": [
        "車庫"
      ],
      "reading": "しゃこ",
      "reading_variants": [
        "しゃこ"
      ],
      "romaji": "shako",
      "part_of_speech": "noun",
      "meaning_zh": "车库",
      "kanji_readings": [
        {
          "form": "車庫",
          "reading": "しゃこ"
        }
      ],
      "examples": [
        {
          "ja": "車を車庫に入れました。",
          "zh": "把车停进了车库。",
          "focus": ["車庫"],
          "zhFocus": ["车库"]
        },
        {
          "ja": "家の横に車庫があります。",
          "zh": "房子旁边有车库。",
          "focus": ["車庫"],
          "zhFocus": ["车库"]
        },
        {
          "ja": "バスが車庫に戻りました。",
          "zh": "公交车回到了车场。",
          "focus": ["車庫"],
          "zhFocus": ["车场"]
        }
      ]
    },
    {
      "id": "n2-0495",
      "jlpt": "N2",
      "headword": "重体",
      "source_form": "重体",
      "variants": [
        "重体",
        "重態"
      ],
      "reading": "じゅうたい",
      "reading_variants": [
        "じゅうたい"
      ],
      "romaji": "juutai",
      "part_of_speech": "noun",
      "meaning_zh": "病危；（伤病）危重",
      "kanji_readings": [
        {
          "form": "重体",
          "reading": "じゅうたい"
        },
        {
          "form": "重態",
          "reading": "じゅうたい"
        }
      ],
      "examples": [
        {
          "ja": "事故にあった人は重体です。",
          "zh": "遭遇事故的人伤势危重。",
          "focus": ["重体"],
          "zhFocus": ["危重"]
        },
        {
          "ja": "祖父は重体で入院しています。",
          "zh": "祖父病危住院了。",
          "focus": ["重体"],
          "zhFocus": ["病危"]
        },
        {
          "ja": "重体だった彼は、やっと元気になりました。",
          "zh": "曾经病危的他终于恢复了健康。",
          "focus": ["重体"],
          "zhFocus": ["病危"]
        }
      ]
    },
    {
      "id": "n2-0496",
      "jlpt": "N2",
      "headword": "重力",
      "source_form": "重力",
      "variants": [
        "重力"
      ],
      "reading": "じゅうりょく",
      "reading_variants": [
        "じゅうりょく"
      ],
      "romaji": "juuryoku",
      "part_of_speech": "noun",
      "meaning_zh": "重力",
      "kanji_readings": [
        {
          "form": "重力",
          "reading": "じゅうりょく"
        }
      ],
      "examples": [
        {
          "ja": "物が下に落ちるのは重力があるからです。",
          "zh": "东西往下掉是因为有重力。",
          "focus": ["重力"],
          "zhFocus": ["重力"]
        },
        {
          "ja": "月の重力は地球より小さいです。",
          "zh": "月球的重力比地球小。",
          "focus": ["重力"],
          "zhFocus": ["重力"]
        },
        {
          "ja": "宇宙では重力をほとんど感じません。",
          "zh": "在太空几乎感觉不到重力。",
          "focus": ["重力"],
          "zhFocus": ["重力"]
        }
      ]
    },
    {
      "id": "n2-0497",
      "jlpt": "N2",
      "headword": "出勤",
      "source_form": "出勤",
      "variants": [
        "出勤"
      ],
      "reading": "しゅっきん",
      "reading_variants": [
        "しゅっきん"
      ],
      "romaji": "shukkin",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "上班；出勤",
      "kanji_readings": [
        {
          "form": "出勤",
          "reading": "しゅっきん"
        }
      ],
      "examples": [
        {
          "ja": "毎朝電車で出勤しています。",
          "zh": "每天早上坐电车上班。",
          "focus": ["出勤"],
          "zhFocus": ["上班"]
        },
        {
          "ja": "明日は休日ですが、出勤します。",
          "zh": "明天虽是休息日，但要上班。",
          "focus": ["出勤"],
          "zhFocus": ["上班"]
        },
        {
          "ja": "出勤の時間が早くなりました。",
          "zh": "上班时间提前了。",
          "focus": ["出勤"],
          "zhFocus": ["上班"]
        }
      ],
      "note_zh": "与「退勤（下班）」相对。"
    },
    {
      "id": "n2-0498",
      "jlpt": "N2",
      "headword": "消化",
      "source_form": "消化",
      "variants": [
        "消化"
      ],
      "reading": "しょうか",
      "reading_variants": [
        "しょうか"
      ],
      "romaji": "shouka",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "消化；（把工作等）处理完",
      "senses_zh": [
        "消化",
        "（把工作等）处理完"
      ],
      "kanji_readings": [
        {
          "form": "消化",
          "reading": "しょうか"
        }
      ],
      "examples": [
        {
          "ja": "この食べ物は消化がいいです。",
          "zh": "这种食物好消化。",
          "focus": ["消化"],
          "zhFocus": ["消化"]
        },
        {
          "ja": "よくかんで食べると、消化を助けます。",
          "zh": "细嚼慢咽有助于消化。",
          "focus": ["消化"],
          "zhFocus": ["消化"]
        },
        {
          "ja": "今日中に仕事を消化できませんでした。",
          "zh": "今天没能把工作处理完。",
          "focus": ["消化"],
          "zhFocus": ["处理完"]
        }
      ]
    },
    {
      "id": "n2-0499",
      "jlpt": "N2",
      "headword": "食器",
      "source_form": "食器",
      "variants": [
        "食器"
      ],
      "reading": "しょっき",
      "reading_variants": [
        "しょっき"
      ],
      "romaji": "shokki",
      "part_of_speech": "noun",
      "meaning_zh": "餐具",
      "kanji_readings": [
        {
          "form": "食器",
          "reading": "しょっき"
        }
      ],
      "examples": [
        {
          "ja": "食事の後で食器を洗います。",
          "zh": "吃完饭后洗餐具。",
          "focus": ["食器"],
          "zhFocus": ["餐具"]
        },
        {
          "ja": "新しい食器を買いました。",
          "zh": "买了新餐具。",
          "focus": ["食器"],
          "zhFocus": ["餐具"]
        },
        {
          "ja": "食器を棚にしまってください。",
          "zh": "请把餐具收进柜子里。",
          "focus": ["食器"],
          "zhFocus": ["餐具"]
        }
      ]
    },
    {
      "id": "n2-0500",
      "jlpt": "N2",
      "headword": "侵入",
      "source_form": "侵入",
      "variants": [
        "侵入"
      ],
      "reading": "しんにゅう",
      "reading_variants": [
        "しんにゅう"
      ],
      "romaji": "shinnyuu",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "侵入；闯入",
      "kanji_readings": [
        {
          "form": "侵入",
          "reading": "しんにゅう"
        }
      ],
      "examples": [
        {
          "ja": "夜中に泥棒が家に侵入しました。",
          "zh": "半夜小偷闯进了家里。",
          "focus": ["侵入"],
          "zhFocus": ["闯进"]
        },
        {
          "ja": "窓から虫が侵入してきました。",
          "zh": "虫子从窗户钻了进来。",
          "focus": ["侵入"],
          "zhFocus": ["钻"]
        },
        {
          "ja": "ここは関係者以外の侵入を禁止しています。",
          "zh": "这里禁止无关人员进入。",
          "focus": ["侵入"],
          "zhFocus": ["进入"]
        }
      ]
    },
    {
      "id": "n2-0501",
      "jlpt": "N2",
      "headword": "先祖",
      "source_form": "先祖",
      "variants": [
        "先祖"
      ],
      "reading": "せんぞ",
      "reading_variants": [
        "せんぞ"
      ],
      "romaji": "senzo",
      "part_of_speech": "noun",
      "meaning_zh": "（自家的）祖先；祖宗",
      "kanji_readings": [
        {
          "form": "先祖",
          "reading": "せんぞ"
        }
      ],
      "examples": [
        {
          "ja": "お盆には先祖の墓参りをします。",
          "zh": "盂兰盆节去给祖先扫墓。",
          "focus": ["先祖"],
          "zhFocus": ["祖先"]
        },
        {
          "ja": "私の先祖は農業をしていました。",
          "zh": "我的祖先是务农的。",
          "focus": ["先祖"],
          "zhFocus": ["祖先"]
        },
        {
          "ja": "この土地は先祖から受け継いだものです。",
          "zh": "这片土地是从祖辈继承下来的。",
          "focus": ["先祖"],
          "zhFocus": ["祖辈"]
        }
      ],
      "note_zh": "与「子孫（子孙）」相对。"
    },
    {
      "id": "n2-0502",
      "jlpt": "N2",
      "headword": "大小",
      "source_form": "大小",
      "variants": [
        "大小"
      ],
      "reading": "だいしょう",
      "reading_variants": [
        "だいしょう"
      ],
      "romaji": "daishou",
      "part_of_speech": "noun",
      "meaning_zh": "大小",
      "kanji_readings": [
        {
          "form": "大小",
          "reading": "だいしょう"
        }
      ],
      "examples": [
        {
          "ja": "大小さまざまな箱が置いてあります。",
          "zh": "放着大大小小各种箱子。",
          "focus": ["大小"],
          "zhFocus": ["大大小小"]
        },
        {
          "ja": "問題の大小に関係なく、報告してください。",
          "zh": "不论问题大小，都请报告。",
          "focus": ["大小"],
          "zhFocus": ["大小"]
        },
        {
          "ja": "この町には大小の川が流れています。",
          "zh": "这个小镇有大小河流流过。",
          "focus": ["大小"],
          "zhFocus": ["大小"]
        }
      ]
    },
    {
      "id": "n2-0503",
      "jlpt": "N2",
      "headword": "直線",
      "source_form": "直線",
      "variants": [
        "直線"
      ],
      "reading": "ちょくせん",
      "reading_variants": [
        "ちょくせん"
      ],
      "romaji": "chokusen",
      "part_of_speech": "noun",
      "meaning_zh": "直线",
      "kanji_readings": [
        {
          "form": "直線",
          "reading": "ちょくせん"
        }
      ],
      "examples": [
        {
          "ja": "定規で直線を引きました。",
          "zh": "用尺子画了一条直线。",
          "focus": ["直線"],
          "zhFocus": ["直线"]
        },
        {
          "ja": "駅まで直線で行けば近いです。",
          "zh": "走直线去车站的话很近。",
          "focus": ["直線"],
          "zhFocus": ["直线"]
        },
        {
          "ja": "この道はしばらく直線が続きます。",
          "zh": "这条路有一段笔直的路。",
          "focus": ["直線"],
          "zhFocus": ["笔直"]
        }
      ]
    },
    {
      "id": "n2-0504",
      "jlpt": "N2",
      "headword": "停電",
      "source_form": "停電",
      "variants": [
        "停電"
      ],
      "reading": "ていでん",
      "reading_variants": [
        "ていでん"
      ],
      "romaji": "teiden",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "停电",
      "kanji_readings": [
        {
          "form": "停電",
          "reading": "ていでん"
        }
      ],
      "examples": [
        {
          "ja": "台風で町が停電しました。",
          "zh": "因为台风，镇上停电了。",
          "focus": ["停電"],
          "zhFocus": ["停电"]
        },
        {
          "ja": "停電の時のために、懐中電灯を用意しています。",
          "zh": "为了以防停电，准备了手电筒。",
          "focus": ["停電"],
          "zhFocus": ["停电"]
        },
        {
          "ja": "夜中に停電があって困りました。",
          "zh": "半夜停电，很是为难。",
          "focus": ["停電"],
          "zhFocus": ["停电"]
        }
      ]
    },
    {
      "id": "n2-0505",
      "jlpt": "N2",
      "headword": "動作",
      "source_form": "動作",
      "variants": [
        "動作"
      ],
      "reading": "どうさ",
      "reading_variants": [
        "どうさ"
      ],
      "romaji": "dousa",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "动作；（机器）运转",
      "senses_zh": [
        "动作",
        "（机器）运转"
      ],
      "kanji_readings": [
        {
          "form": "動作",
          "reading": "どうさ"
        }
      ],
      "examples": [
        {
          "ja": "彼の動作はとても速いです。",
          "zh": "他的动作非常快。",
          "focus": ["動作"],
          "zhFocus": ["动作"]
        },
        {
          "ja": "先生の動作をまねしてください。",
          "zh": "请模仿老师的动作。",
          "focus": ["動作"],
          "zhFocus": ["动作"]
        },
        {
          "ja": "パソコンの動作が遅くなりました。",
          "zh": "电脑运行变慢了。",
          "focus": ["動作"],
          "zhFocus": ["运行"]
        }
      ]
    },
    {
      "id": "n2-0506",
      "jlpt": "N2",
      "headword": "破片",
      "source_form": "破片",
      "variants": [
        "破片"
      ],
      "reading": "はへん",
      "reading_variants": [
        "はへん"
      ],
      "romaji": "hahen",
      "part_of_speech": "noun",
      "meaning_zh": "碎片",
      "kanji_readings": [
        {
          "form": "破片",
          "reading": "はへん"
        }
      ],
      "examples": [
        {
          "ja": "割れたガラスの破片に気をつけてください。",
          "zh": "请小心打碎的玻璃碎片。",
          "focus": ["破片"],
          "zhFocus": ["碎片"]
        },
        {
          "ja": "皿の破片を集めました。",
          "zh": "把盘子的碎片收集起来了。",
          "focus": ["破片"],
          "zhFocus": ["碎片"]
        },
        {
          "ja": "事故の現場に車の破片が落ちていました。",
          "zh": "事故现场散落着车的碎片。",
          "focus": ["破片"],
          "zhFocus": ["碎片"]
        }
      ]
    },
    {
      "id": "n2-0507",
      "jlpt": "N2",
      "headword": "引き分け",
      "source_form": "引分け",
      "variants": [
        "引き分け",
        "引分け"
      ],
      "reading": "ひきわけ",
      "reading_variants": [
        "ひきわけ"
      ],
      "romaji": "hikiwake",
      "part_of_speech": "noun",
      "meaning_zh": "平局；和局",
      "kanji_readings": [
        {
          "form": "引き分け",
          "reading": "ひきわけ"
        },
        {
          "form": "引分け",
          "reading": "ひきわけ"
        }
      ],
      "examples": [
        {
          "ja": "試合は引き分けに終わりました。",
          "zh": "比赛以平局告终。",
          "focus": ["引き分け"],
          "zhFocus": ["平局"]
        },
        {
          "ja": "引き分けなら、もう一度試合をします。",
          "zh": "如果平局，就再比一场。",
          "focus": ["引き分け"],
          "zhFocus": ["平局"]
        },
        {
          "ja": "今日の将棋は引き分けでした。",
          "zh": "今天的将棋下成了和棋。",
          "focus": ["引き分け"],
          "zhFocus": ["和棋"]
        }
      ]
    },
    {
      "id": "n2-0508",
      "jlpt": "N2",
      "headword": "引っ越し",
      "source_form": "引越し",
      "variants": [
        "引っ越し",
        "引越し"
      ],
      "reading": "ひっこし",
      "reading_variants": [
        "ひっこし"
      ],
      "romaji": "hikkoshi",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "搬家",
      "kanji_readings": [
        {
          "form": "引っ越し",
          "reading": "ひっこし"
        },
        {
          "form": "引越し",
          "reading": "ひっこし"
        }
      ],
      "examples": [
        {
          "ja": "来週、引っ越しをします。",
          "zh": "下周搬家。",
          "focus": ["引っ越し"],
          "zhFocus": ["搬家"]
        },
        {
          "ja": "友達が引っ越しを手伝ってくれました。",
          "zh": "朋友帮我搬了家。",
          "focus": ["引っ越し"],
          "zhFocus": ["搬"]
        },
        {
          "ja": "引っ越しの荷物を箱に詰めました。",
          "zh": "把搬家的行李装进了箱子。",
          "focus": ["引っ越し"],
          "zhFocus": ["搬家"]
        }
      ],
      "note_zh": "动词「引っ越す（搬家）」的名词形。"
    },
    {
      "id": "n2-0509",
      "jlpt": "N2",
      "headword": "美容",
      "source_form": "美容",
      "variants": [
        "美容"
      ],
      "reading": "びよう",
      "reading_variants": [
        "びよう"
      ],
      "romaji": "biyou",
      "part_of_speech": "noun",
      "meaning_zh": "美容",
      "kanji_readings": [
        {
          "form": "美容",
          "reading": "びよう"
        }
      ],
      "examples": [
        {
          "ja": "姉は美容に関心があります。",
          "zh": "姐姐对美容很感兴趣。",
          "focus": ["美容"],
          "zhFocus": ["美容"]
        },
        {
          "ja": "十分に寝ることは美容にもいいです。",
          "zh": "睡眠充足对美容也有好处。",
          "focus": ["美容"],
          "zhFocus": ["美容"]
        },
        {
          "ja": "美容院で髪を切りました。",
          "zh": "在美容院剪了头发。",
          "focus": ["美容"],
          "zhFocus": ["美容"]
        }
      ]
    },
    {
      "id": "n2-0510",
      "jlpt": "N2",
      "headword": "見直す",
      "source_form": "見直す",
      "variants": [
        "見直す"
      ],
      "reading": "みなおす",
      "reading_variants": [
        "みなおす"
      ],
      "romaji": "minaosu",
      "part_of_speech": "verb",
      "meaning_zh": "重新看；重新审视；（对人）另眼相看",
      "senses_zh": [
        "重新看；重新审视",
        "（对人）另眼相看"
      ],
      "kanji_readings": [
        {
          "form": "見直す",
          "reading": "みなおす"
        }
      ],
      "examples": [
        {
          "ja": "書いたレポートをもう一度見直しました。",
          "zh": "把写好的报告又检查了一遍。",
          "focus": ["見直し"],
          "zhFocus": ["检查"]
        },
        {
          "ja": "会社は計画を見直すことにしました。",
          "zh": "公司决定重新审视计划。",
          "focus": ["見直す"],
          "zhFocus": ["重新审视"]
        },
        {
          "ja": "彼の優しいところを見て、見直しました。",
          "zh": "看到他温柔的一面，对他另眼相看了。",
          "focus": ["見直し"],
          "zhFocus": ["另眼相看"]
        }
      ]
    },
    {
      "id": "n2-0511",
      "jlpt": "N2",
      "headword": "民謡",
      "source_form": "民謡",
      "variants": [
        "民謡"
      ],
      "reading": "みんよう",
      "reading_variants": [
        "みんよう"
      ],
      "romaji": "min'you",
      "part_of_speech": "noun",
      "meaning_zh": "民谣",
      "kanji_readings": [
        {
          "form": "民謡",
          "reading": "みんよう"
        }
      ],
      "examples": [
        {
          "ja": "祖母は民謡を歌うのが上手です。",
          "zh": "祖母唱民谣唱得很好。",
          "focus": ["民謡"],
          "zhFocus": ["民谣"]
        },
        {
          "ja": "この地方には古い民謡が残っています。",
          "zh": "这个地方留存着古老的民谣。",
          "focus": ["民謡"],
          "zhFocus": ["民谣"]
        },
        {
          "ja": "祭りで民謡に合わせて踊りました。",
          "zh": "在祭典上随着民谣跳了舞。",
          "focus": ["民謡"],
          "zhFocus": ["民谣"]
        }
      ]
    },
    {
      "id": "n2-0512",
      "jlpt": "N2",
      "headword": "無数",
      "source_form": "無数",
      "variants": [
        "無数"
      ],
      "reading": "むすう",
      "reading_variants": [
        "むすう"
      ],
      "romaji": "musuu",
      "part_of_speech": "na-adjective/noun",
      "meaning_zh": "无数",
      "kanji_readings": [
        {
          "form": "無数",
          "reading": "むすう"
        }
      ],
      "examples": [
        {
          "ja": "夜空に無数の星が光っています。",
          "zh": "夜空中闪烁着无数的星星。",
          "focus": ["無数"],
          "zhFocus": ["无数"]
        },
        {
          "ja": "この問題には無数の答えがあります。",
          "zh": "这个问题有无数种答案。",
          "focus": ["無数"],
          "zhFocus": ["无数"]
        },
        {
          "ja": "地面に無数の穴が開いています。",
          "zh": "地上有无数个洞。",
          "focus": ["無数"],
          "zhFocus": ["无数"]
        }
      ]
    },
    {
      "id": "n2-0513",
      "jlpt": "N2",
      "headword": "名物",
      "source_form": "名物",
      "variants": [
        "名物"
      ],
      "reading": "めいぶつ",
      "reading_variants": [
        "めいぶつ"
      ],
      "romaji": "meibutsu",
      "part_of_speech": "noun",
      "meaning_zh": "名产；特产；（当地）有名的事物",
      "kanji_readings": [
        {
          "form": "名物",
          "reading": "めいぶつ"
        }
      ],
      "examples": [
        {
          "ja": "この町の名物はうどんです。",
          "zh": "这个小镇的特产是乌冬面。",
          "focus": ["名物"],
          "zhFocus": ["特产"]
        },
        {
          "ja": "お土産に名物のお菓子を買いました。",
          "zh": "买了当地有名的点心当礼物。",
          "focus": ["名物"],
          "zhFocus": ["有名"]
        },
        {
          "ja": "あの店のおじさんは商店街の名物です。",
          "zh": "那家店的大叔是商店街的名人。",
          "focus": ["名物"],
          "zhFocus": ["名人"]
        }
      ]
    },
    {
      "id": "n2-0514",
      "jlpt": "N2",
      "headword": "郵送",
      "source_form": "郵送",
      "variants": [
        "郵送"
      ],
      "reading": "ゆうそう",
      "reading_variants": [
        "ゆうそう"
      ],
      "romaji": "yuusou",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "邮寄",
      "kanji_readings": [
        {
          "form": "郵送",
          "reading": "ゆうそう"
        }
      ],
      "examples": [
        {
          "ja": "書類を郵送しました。",
          "zh": "把文件邮寄了。",
          "focus": ["郵送"],
          "zhFocus": ["邮寄"]
        },
        {
          "ja": "申し込み用紙は郵送でお送りします。",
          "zh": "申请表将邮寄给您。",
          "focus": ["郵送"],
          "zhFocus": ["邮寄"]
        },
        {
          "ja": "チケットは家に郵送されます。",
          "zh": "票会邮寄到家里。",
          "focus": ["郵送"],
          "zhFocus": ["邮寄"]
        }
      ]
    },
    {
      "id": "n2-0515",
      "jlpt": "N2",
      "headword": "要領",
      "source_form": "要領",
      "variants": [
        "要領"
      ],
      "reading": "ようりょう",
      "reading_variants": [
        "ようりょう"
      ],
      "romaji": "youryou",
      "part_of_speech": "noun",
      "meaning_zh": "要领；诀窍",
      "kanji_readings": [
        {
          "form": "要領",
          "reading": "ようりょう"
        }
      ],
      "examples": [
        {
          "ja": "彼は要領がいいので、仕事が速いです。",
          "zh": "他做事很会抓要领，所以干活快。",
          "focus": ["要領"],
          "zhFocus": ["要领"]
        },
        {
          "ja": "説明が要領を得なくて、分かりませんでした。",
          "zh": "说明不得要领，没听懂。",
          "focus": ["要領"],
          "zhFocus": ["要领"]
        },
        {
          "ja": "仕事の要領が分かってきました。",
          "zh": "渐渐摸到工作的诀窍了。",
          "focus": ["要領"],
          "zhFocus": ["诀窍"]
        }
      ],
      "note_zh": "「要領がいい」也可指“会钻空子、会耍小聪明”。"
    },
    {
      "id": "n2-0516",
      "jlpt": "N2",
      "headword": "余計",
      "source_form": "余計",
      "variants": [
        "余計"
      ],
      "reading": "よけい",
      "reading_variants": [
        "よけい"
      ],
      "romaji": "yokei",
      "part_of_speech": "na-adjective/adverb",
      "meaning_zh": "多余；不必要；更加",
      "senses_zh": [
        "多余；不必要",
        "更加"
      ],
      "kanji_readings": [
        {
          "form": "余計",
          "reading": "よけい"
        }
      ],
      "examples": [
        {
          "ja": "余計なことを言わないでください。",
          "zh": "请不要说多余的话。",
          "focus": ["余計"],
          "zhFocus": ["多余"]
        },
        {
          "ja": "余計なお金を使ってしまいました。",
          "zh": "花了不必要的钱。",
          "focus": ["余計"],
          "zhFocus": ["不必要"]
        },
        {
          "ja": "だめと言われると、余計にやりたくなります。",
          "zh": "被说不行，反而更想做了。",
          "focus": ["余計"],
          "zhFocus": ["更"]
        }
      ]
    },
    {
      "id": "n2-0517",
      "jlpt": "N2",
      "headword": "園芸",
      "source_form": "園芸",
      "variants": [
        "園芸"
      ],
      "reading": "えんげい",
      "reading_variants": [
        "えんげい"
      ],
      "romaji": "engei",
      "part_of_speech": "noun",
      "meaning_zh": "园艺",
      "kanji_readings": [
        {
          "form": "園芸",
          "reading": "えんげい"
        }
      ],
      "examples": [
        {
          "ja": "父の趣味は園芸です。",
          "zh": "父亲的爱好是园艺。",
          "focus": ["園芸"],
          "zhFocus": ["园艺"]
        },
        {
          "ja": "園芸の店で花の種を買いました。",
          "zh": "在园艺店买了花的种子。",
          "focus": ["園芸"],
          "zhFocus": ["园艺"]
        },
        {
          "ja": "定年になってから、園芸を始める人が多いです。",
          "zh": "退休后开始搞园艺的人很多。",
          "focus": ["園芸"],
          "zhFocus": ["园艺"]
        }
      ]
    },
    {
      "id": "n2-0518",
      "jlpt": "N2",
      "headword": "温室",
      "source_form": "温室",
      "variants": [
        "温室"
      ],
      "reading": "おんしつ",
      "reading_variants": [
        "おんしつ"
      ],
      "romaji": "onshitsu",
      "part_of_speech": "noun",
      "meaning_zh": "温室",
      "kanji_readings": [
        {
          "form": "温室",
          "reading": "おんしつ"
        }
      ],
      "examples": [
        {
          "ja": "温室でトマトを育てています。",
          "zh": "在温室里种西红柿。",
          "focus": ["温室"],
          "zhFocus": ["温室"]
        },
        {
          "ja": "冬でも温室の中は暖かいです。",
          "zh": "即使是冬天，温室里也很暖和。",
          "focus": ["温室"],
          "zhFocus": ["温室"]
        },
        {
          "ja": "彼は温室で育ったので、苦労を知りません。",
          "zh": "他是在温室里长大的，不知道什么叫吃苦。",
          "focus": ["温室"],
          "zhFocus": ["温室"]
        }
      ]
    },
    {
      "id": "n2-0519",
      "jlpt": "N2",
      "headword": "改札",
      "source_form": "改札",
      "variants": [
        "改札"
      ],
      "reading": "かいさつ",
      "reading_variants": [
        "かいさつ"
      ],
      "romaji": "kaisatsu",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "检票；检票口",
      "kanji_readings": [
        {
          "form": "改札",
          "reading": "かいさつ"
        }
      ],
      "examples": [
        {
          "ja": "駅の改札で友達を待っています。",
          "zh": "在车站检票口等朋友。",
          "focus": ["改札"],
          "zhFocus": ["检票口"]
        },
        {
          "ja": "改札を出て、右に曲がってください。",
          "zh": "出了检票口请往右拐。",
          "focus": ["改札"],
          "zhFocus": ["检票口"]
        },
        {
          "ja": "カードをかざして改札を通ります。",
          "zh": "刷卡通过检票口。",
          "focus": ["改札"],
          "zhFocus": ["检票口"]
        }
      ],
      "note_zh": "检票口也说「改札口」。"
    },
    {
      "id": "n2-0520",
      "jlpt": "N2",
      "headword": "果実",
      "source_form": "果実",
      "variants": [
        "果実"
      ],
      "reading": "かじつ",
      "reading_variants": [
        "かじつ"
      ],
      "romaji": "kajitsu",
      "part_of_speech": "noun",
      "meaning_zh": "果实",
      "kanji_readings": [
        {
          "form": "果実",
          "reading": "かじつ"
        }
      ],
      "examples": [
        {
          "ja": "木に赤い果実がなっています。",
          "zh": "树上结着红色的果实。",
          "focus": ["果実"],
          "zhFocus": ["果实"]
        },
        {
          "ja": "このジュースは果実から作られています。",
          "zh": "这种果汁是用果实做的。",
          "focus": ["果実"],
          "zhFocus": ["果实"]
        },
        {
          "ja": "鳥が果実を食べに来ました。",
          "zh": "鸟来吃果实了。",
          "focus": ["果実"],
          "zhFocus": ["果实"]
        }
      ]
    },
    {
      "id": "n2-0521",
      "jlpt": "N2",
      "headword": "箇所",
      "source_form": "個所",
      "variants": [
        "箇所",
        "個所"
      ],
      "reading": "かしょ",
      "reading_variants": [
        "かしょ"
      ],
      "romaji": "kasho",
      "part_of_speech": "noun",
      "meaning_zh": "地方；处；部分",
      "kanji_readings": [
        {
          "form": "箇所",
          "reading": "かしょ"
        },
        {
          "form": "個所",
          "reading": "かしょ"
        }
      ],
      "examples": [
        {
          "ja": "間違っている箇所に線を引いてください。",
          "zh": "请在错误的地方画线。",
          "focus": ["箇所"],
          "zhFocus": ["地方"]
        },
        {
          "ja": "壊れた箇所を修理しました。",
          "zh": "修理了坏掉的地方。",
          "focus": ["箇所"],
          "zhFocus": ["地方"]
        },
        {
          "ja": "この道は危ない箇所が多いです。",
          "zh": "这条路危险的地段很多。",
          "focus": ["箇所"],
          "zhFocus": ["地段"]
        }
      ],
      "note_zh": "也可作量词「〜か所」，数地点、部位。"
    },
    {
      "id": "n2-0522",
      "jlpt": "N2",
      "headword": "殻",
      "source_form": "殻",
      "variants": [
        "殻"
      ],
      "reading": "から",
      "reading_variants": [
        "から"
      ],
      "romaji": "kara",
      "part_of_speech": "noun",
      "meaning_zh": "壳；外壳",
      "kanji_readings": [
        {
          "form": "殻",
          "reading": "から"
        }
      ],
      "examples": [
        {
          "ja": "卵の殻をむきました。",
          "zh": "剥了鸡蛋壳。",
          "focus": ["殻"],
          "zhFocus": ["壳"]
        },
        {
          "ja": "ひよこが殻を破って出てきました。",
          "zh": "小鸡破壳而出了。",
          "focus": ["殻"],
          "zhFocus": ["壳"]
        },
        {
          "ja": "貝の殻を拾って集めています。",
          "zh": "在捡贝壳收集。",
          "focus": ["殻"],
          "zhFocus": ["壳"]
        }
      ],
      "note_zh": "「自分の殻に閉じこもる」是“把自己封闭起来”的意思。"
    },
    {
      "id": "n2-0523",
      "jlpt": "N2",
      "headword": "休養",
      "source_form": "休養",
      "variants": [
        "休養"
      ],
      "reading": "きゅうよう",
      "reading_variants": [
        "きゅうよう"
      ],
      "romaji": "kyuuyou",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "休养；休息",
      "kanji_readings": [
        {
          "form": "休養",
          "reading": "きゅうよう"
        }
      ],
      "examples": [
        {
          "ja": "医者に休養が必要だと言われました。",
          "zh": "医生说我需要休养。",
          "focus": ["休養"],
          "zhFocus": ["休养"]
        },
        {
          "ja": "しばらく仕事を休んで休養します。",
          "zh": "暂时请假休养一段时间。",
          "focus": ["休養"],
          "zhFocus": ["休养"]
        },
        {
          "ja": "週末は家でゆっくり休養しました。",
          "zh": "周末在家好好休息了。",
          "focus": ["休養"],
          "zhFocus": ["休息"]
        }
      ]
    },
    {
      "id": "n2-0524",
      "jlpt": "N2",
      "headword": "唇",
      "source_form": "唇",
      "variants": [
        "唇"
      ],
      "reading": "くちびる",
      "reading_variants": [
        "くちびる"
      ],
      "romaji": "kuchibiru",
      "part_of_speech": "noun",
      "meaning_zh": "嘴唇",
      "kanji_readings": [
        {
          "form": "唇",
          "reading": "くちびる"
        }
      ],
      "examples": [
        {
          "ja": "寒くて唇が紫になりました。",
          "zh": "冷得嘴唇都发紫了。",
          "focus": ["唇"],
          "zhFocus": ["嘴唇"]
        },
        {
          "ja": "乾燥して唇が切れました。",
          "zh": "因为干燥，嘴唇裂了。",
          "focus": ["唇"],
          "zhFocus": ["嘴唇"]
        },
        {
          "ja": "彼女は悔しそうに唇をかみました。",
          "zh": "她不甘心地咬住了嘴唇。",
          "focus": ["唇"],
          "zhFocus": ["嘴唇"]
        }
      ]
    },
    {
      "id": "n2-0525",
      "jlpt": "N2",
      "headword": "月給",
      "source_form": "月給",
      "variants": [
        "月給"
      ],
      "reading": "げっきゅう",
      "reading_variants": [
        "げっきゅう"
      ],
      "romaji": "gekkyuu",
      "part_of_speech": "noun",
      "meaning_zh": "月薪；月工资",
      "kanji_readings": [
        {
          "form": "月給",
          "reading": "げっきゅう"
        }
      ],
      "examples": [
        {
          "ja": "この会社は月給が高いです。",
          "zh": "这家公司月薪很高。",
          "focus": ["月給"],
          "zhFocus": ["月薪"]
        },
        {
          "ja": "月給の中から少しずつ貯金しています。",
          "zh": "从月薪里一点一点地存钱。",
          "focus": ["月給"],
          "zhFocus": ["月薪"]
        },
        {
          "ja": "来月から月給が上がります。",
          "zh": "下个月起月工资上涨。",
          "focus": ["月給"],
          "zhFocus": ["月工资"]
        }
      ]
    },
    {
      "id": "n2-0526",
      "jlpt": "N2",
      "headword": "傑作",
      "source_form": "傑作",
      "variants": [
        "傑作"
      ],
      "reading": "けっさく",
      "reading_variants": [
        "けっさく"
      ],
      "romaji": "kessaku",
      "part_of_speech": "noun",
      "meaning_zh": "杰作；（滑稽得）绝妙",
      "senses_zh": [
        "杰作",
        "（滑稽得）绝妙"
      ],
      "kanji_readings": [
        {
          "form": "傑作",
          "reading": "けっさく"
        }
      ],
      "examples": [
        {
          "ja": "この絵は彼の一番の傑作です。",
          "zh": "这幅画是他最好的杰作。",
          "focus": ["傑作"],
          "zhFocus": ["杰作"]
        },
        {
          "ja": "この映画は映画史に残る傑作です。",
          "zh": "这部电影是会载入电影史的杰作。",
          "focus": ["傑作"],
          "zhFocus": ["杰作"]
        },
        {
          "ja": "彼の言い訳は傑作でした。",
          "zh": "他的借口真是绝了。",
          "focus": ["傑作"],
          "zhFocus": ["绝"]
        }
      ]
    },
    {
      "id": "n2-0527",
      "jlpt": "N2",
      "headword": "謙虚",
      "source_form": "謙虚",
      "variants": [
        "謙虚"
      ],
      "reading": "けんきょ",
      "reading_variants": [
        "けんきょ"
      ],
      "romaji": "kenkyo",
      "part_of_speech": "na-adjective",
      "meaning_zh": "谦虚",
      "kanji_readings": [
        {
          "form": "謙虚",
          "reading": "けんきょ"
        }
      ],
      "examples": [
        {
          "ja": "彼はいつも謙虚な態度で話します。",
          "zh": "他说话总是很谦虚。",
          "focus": ["謙虚"],
          "zhFocus": ["谦虚"]
        },
        {
          "ja": "成功しても謙虚でいることが大切です。",
          "zh": "即使成功了，保持谦虚也很重要。",
          "focus": ["謙虚"],
          "zhFocus": ["谦虚"]
        },
        {
          "ja": "人の意見を謙虚に聞きましょう。",
          "zh": "虚心听取别人的意见吧。",
          "focus": ["謙虚"],
          "zhFocus": ["虚心"]
        }
      ]
    },
    {
      "id": "n2-0528",
      "jlpt": "N2",
      "headword": "孝行",
      "source_form": "孝行",
      "variants": [
        "孝行"
      ],
      "reading": "こうこう",
      "reading_variants": [
        "こうこう"
      ],
      "romaji": "koukou",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "孝顺；孝敬",
      "kanji_readings": [
        {
          "form": "孝行",
          "reading": "こうこう"
        }
      ],
      "examples": [
        {
          "ja": "彼女は親孝行な娘です。",
          "zh": "她是个孝顺的女儿。",
          "focus": ["孝行"],
          "zhFocus": ["孝顺"]
        },
        {
          "ja": "両親を旅行に連れていって、親孝行しました。",
          "zh": "带父母去旅行，尽了孝心。",
          "focus": ["孝行"],
          "zhFocus": ["孝心"]
        },
        {
          "ja": "親が元気なうちに孝行したいです。",
          "zh": "想趁父母还健康的时候孝敬他们。",
          "focus": ["孝行"],
          "zhFocus": ["孝敬"]
        }
      ],
      "note_zh": "多用「親孝行」。"
    },
    {
      "id": "n2-0529",
      "jlpt": "N2",
      "headword": "口実",
      "source_form": "口実",
      "variants": [
        "口実"
      ],
      "reading": "こうじつ",
      "reading_variants": [
        "こうじつ"
      ],
      "romaji": "koujitsu",
      "part_of_speech": "noun",
      "meaning_zh": "借口；口实",
      "kanji_readings": [
        {
          "form": "口実",
          "reading": "こうじつ"
        }
      ],
      "examples": [
        {
          "ja": "彼は病気を口実に会議を休みました。",
          "zh": "他以生病为借口没来开会。",
          "focus": ["口実"],
          "zhFocus": ["借口"]
        },
        {
          "ja": "遅刻の口実を考えています。",
          "zh": "在想迟到的借口。",
          "focus": ["口実"],
          "zhFocus": ["借口"]
        },
        {
          "ja": "それはただの口実にすぎません。",
          "zh": "那只不过是个借口罢了。",
          "focus": ["口実"],
          "zhFocus": ["借口"]
        }
      ]
    },
    {
      "id": "n2-0530",
      "jlpt": "N2",
      "headword": "効力",
      "source_form": "効力",
      "variants": [
        "効力"
      ],
      "reading": "こうりょく",
      "reading_variants": [
        "こうりょく"
      ],
      "romaji": "kouryoku",
      "part_of_speech": "noun",
      "meaning_zh": "效力；效果",
      "kanji_readings": [
        {
          "form": "効力",
          "reading": "こうりょく"
        }
      ],
      "examples": [
        {
          "ja": "この薬は効力が強いです。",
          "zh": "这种药药效很强。",
          "focus": ["効力"],
          "zhFocus": ["药效"]
        },
        {
          "ja": "新しい法律は来月から効力を持ちます。",
          "zh": "新法律下个月起生效。",
          "focus": ["効力"],
          "zhFocus": ["生效"]
        },
        {
          "ja": "この契約はもう効力がありません。",
          "zh": "这份合同已经失效了。",
          "focus": ["効力"],
          "zhFocus": ["失效"]
        }
      ]
    },
    {
      "id": "n2-0531",
      "jlpt": "N2",
      "headword": "小遣い",
      "source_form": "小遣い",
      "variants": [
        "小遣い"
      ],
      "reading": "こづかい",
      "reading_variants": [
        "こづかい"
      ],
      "romaji": "kozukai",
      "part_of_speech": "noun",
      "meaning_zh": "零花钱；零用钱",
      "kanji_readings": [
        {
          "form": "小遣い",
          "reading": "こづかい"
        }
      ],
      "examples": [
        {
          "ja": "毎月、親から小遣いをもらっています。",
          "zh": "每个月从父母那里拿零花钱。",
          "focus": ["小遣い"],
          "zhFocus": ["零花钱"]
        },
        {
          "ja": "小遣いをためてゲームを買いました。",
          "zh": "攒零花钱买了游戏。",
          "focus": ["小遣い"],
          "zhFocus": ["零花钱"]
        },
        {
          "ja": "子供に小遣いをあげました。",
          "zh": "给了孩子零用钱。",
          "focus": ["小遣い"],
          "zhFocus": ["零用钱"]
        }
      ],
      "note_zh": "常说「お小遣い」。"
    },
    {
      "id": "n2-0532",
      "jlpt": "N2",
      "headword": "採点",
      "source_form": "採点",
      "variants": [
        "採点"
      ],
      "reading": "さいてん",
      "reading_variants": [
        "さいてん"
      ],
      "romaji": "saiten",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "评分；打分",
      "kanji_readings": [
        {
          "form": "採点",
          "reading": "さいてん"
        }
      ],
      "examples": [
        {
          "ja": "先生はテストの採点をしています。",
          "zh": "老师在批改试卷。",
          "focus": ["採点"],
          "zhFocus": ["批改"]
        },
        {
          "ja": "この先生は採点が厳しいです。",
          "zh": "这位老师打分很严。",
          "focus": ["採点"],
          "zhFocus": ["打分"]
        },
        {
          "ja": "作文を採点して返しました。",
          "zh": "给作文评了分后发了回去。",
          "focus": ["採点"],
          "zhFocus": ["评了分"]
        }
      ]
    },
    {
      "id": "n2-0533",
      "jlpt": "N2",
      "headword": "三角",
      "source_form": "三角",
      "variants": [
        "三角"
      ],
      "reading": "さんかく",
      "reading_variants": [
        "さんかく"
      ],
      "romaji": "sankaku",
      "part_of_speech": "noun",
      "meaning_zh": "三角；三角形",
      "kanji_readings": [
        {
          "form": "三角",
          "reading": "さんかく"
        }
      ],
      "examples": [
        {
          "ja": "紙を三角に折りました。",
          "zh": "把纸折成了三角形。",
          "focus": ["三角"],
          "zhFocus": ["三角形"]
        },
        {
          "ja": "三角のおにぎりを作りました。",
          "zh": "做了三角形的饭团。",
          "focus": ["三角"],
          "zhFocus": ["三角形"]
        },
        {
          "ja": "この標識は三角の形をしています。",
          "zh": "这个标志是三角形的。",
          "focus": ["三角"],
          "zhFocus": ["三角形"]
        }
      ]
    },
    {
      "id": "n2-0534",
      "jlpt": "N2",
      "headword": "鈴",
      "source_form": "鈴",
      "variants": [
        "鈴"
      ],
      "reading": "すず",
      "reading_variants": [
        "すず"
      ],
      "romaji": "suzu",
      "part_of_speech": "noun",
      "meaning_zh": "铃；铃铛",
      "kanji_readings": [
        {
          "form": "鈴",
          "reading": "すず"
        }
      ],
      "examples": [
        {
          "ja": "猫の首に鈴を付けました。",
          "zh": "在猫的脖子上系了铃铛。",
          "focus": ["鈴"],
          "zhFocus": ["铃铛"]
        },
        {
          "ja": "鈴の音が聞こえます。",
          "zh": "能听到铃声。",
          "focus": ["鈴"],
          "zhFocus": ["铃"]
        },
        {
          "ja": "神社で鈴を鳴らしました。",
          "zh": "在神社摇了铃。",
          "focus": ["鈴"],
          "zhFocus": ["铃"]
        }
      ]
    },
    {
      "id": "n2-0535",
      "jlpt": "N2",
      "headword": "墨",
      "source_form": "墨",
      "variants": [
        "墨"
      ],
      "reading": "すみ",
      "reading_variants": [
        "すみ"
      ],
      "romaji": "sumi",
      "part_of_speech": "noun",
      "meaning_zh": "墨；墨汁",
      "kanji_readings": [
        {
          "form": "墨",
          "reading": "すみ"
        }
      ],
      "examples": [
        {
          "ja": "筆に墨をつけて字を書きます。",
          "zh": "毛笔蘸上墨写字。",
          "focus": ["墨"],
          "zhFocus": ["墨"]
        },
        {
          "ja": "服に墨がついてしまいました。",
          "zh": "衣服上沾上了墨汁。",
          "focus": ["墨"],
          "zhFocus": ["墨汁"]
        },
        {
          "ja": "書道の前に墨をすります。",
          "zh": "写书法之前先研墨。",
          "focus": ["墨"],
          "zhFocus": ["墨"]
        }
      ]
    },
    {
      "id": "n2-0536",
      "jlpt": "N2",
      "headword": "葬式",
      "source_form": "葬式",
      "variants": [
        "葬式"
      ],
      "reading": "そうしき",
      "reading_variants": [
        "そうしき"
      ],
      "romaji": "soushiki",
      "part_of_speech": "noun",
      "meaning_zh": "葬礼",
      "kanji_readings": [
        {
          "form": "葬式",
          "reading": "そうしき"
        }
      ],
      "examples": [
        {
          "ja": "祖父の葬式に出ました。",
          "zh": "参加了祖父的葬礼。",
          "focus": ["葬式"],
          "zhFocus": ["葬礼"]
        },
        {
          "ja": "葬式には黒い服を着て行きます。",
          "zh": "穿黑色衣服去参加葬礼。",
          "focus": ["葬式"],
          "zhFocus": ["葬礼"]
        },
        {
          "ja": "葬式は家族だけで行いました。",
          "zh": "葬礼只有家人参加。",
          "focus": ["葬式"],
          "zhFocus": ["葬礼"]
        }
      ]
    },
    {
      "id": "n2-0537",
      "jlpt": "N2",
      "headword": "題名",
      "source_form": "題名",
      "variants": [
        "題名"
      ],
      "reading": "だいめい",
      "reading_variants": [
        "だいめい"
      ],
      "romaji": "daimei",
      "part_of_speech": "noun",
      "meaning_zh": "标题；题目；名称",
      "kanji_readings": [
        {
          "form": "題名",
          "reading": "だいめい"
        }
      ],
      "examples": [
        {
          "ja": "この本の題名を忘れてしまいました。",
          "zh": "忘了这本书的书名。",
          "focus": ["題名"],
          "zhFocus": ["书名"]
        },
        {
          "ja": "作文に題名をつけてください。",
          "zh": "请给作文加个题目。",
          "focus": ["題名"],
          "zhFocus": ["题目"]
        },
        {
          "ja": "その映画の題名は何ですか。",
          "zh": "那部电影叫什么名字？",
          "focus": ["題名"],
          "zhFocus": ["名字"]
        }
      ]
    },
    {
      "id": "n2-0538",
      "jlpt": "N2",
      "headword": "短編",
      "source_form": "短編",
      "variants": [
        "短編"
      ],
      "reading": "たんぺん",
      "reading_variants": [
        "たんぺん"
      ],
      "romaji": "tanpen",
      "part_of_speech": "noun",
      "meaning_zh": "短篇（小说、电影等）",
      "kanji_readings": [
        {
          "form": "短編",
          "reading": "たんぺん"
        }
      ],
      "examples": [
        {
          "ja": "彼は短編を書くのが得意です。",
          "zh": "他擅长写短篇。",
          "focus": ["短編"],
          "zhFocus": ["短篇"]
        },
        {
          "ja": "電車の中で短編小説を読みました。",
          "zh": "在电车上读了短篇小说。",
          "focus": ["短編"],
          "zhFocus": ["短篇"]
        },
        {
          "ja": "この短編は一時間で読めます。",
          "zh": "这个短篇一个小时就能读完。",
          "focus": ["短編"],
          "zhFocus": ["短篇"]
        }
      ],
      "note_zh": "与「長編（长篇）」相对。"
    },
    {
      "id": "n2-0539",
      "jlpt": "N2",
      "headword": "超過",
      "source_form": "超過",
      "variants": [
        "超過"
      ],
      "reading": "ちょうか",
      "reading_variants": [
        "ちょうか"
      ],
      "romaji": "chouka",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "超过；超出",
      "kanji_readings": [
        {
          "form": "超過",
          "reading": "ちょうか"
        }
      ],
      "examples": [
        {
          "ja": "荷物の重さが制限を超過しました。",
          "zh": "行李的重量超出了限制。",
          "focus": ["超過"],
          "zhFocus": ["超出"]
        },
        {
          "ja": "予算を超過してしまいました。",
          "zh": "超出了预算。",
          "focus": ["超過"],
          "zhFocus": ["超出"]
        },
        {
          "ja": "時間を超過すると、料金がかかります。",
          "zh": "超时的话要收费。",
          "focus": ["超過"],
          "zhFocus": ["超"]
        }
      ]
    },
    {
      "id": "n2-0540",
      "jlpt": "N2",
      "headword": "通路",
      "source_form": "通路",
      "variants": [
        "通路"
      ],
      "reading": "つうろ",
      "reading_variants": [
        "つうろ"
      ],
      "romaji": "tsuuro",
      "part_of_speech": "noun",
      "meaning_zh": "通道；过道",
      "kanji_readings": [
        {
          "form": "通路",
          "reading": "つうろ"
        }
      ],
      "examples": [
        {
          "ja": "通路に物を置かないでください。",
          "zh": "请不要在通道上放东西。",
          "focus": ["通路"],
          "zhFocus": ["通道"]
        },
        {
          "ja": "飛行機の通路側の席を予約しました。",
          "zh": "预订了飞机靠过道的座位。",
          "focus": ["通路"],
          "zhFocus": ["过道"]
        },
        {
          "ja": "この通路は駅につながっています。",
          "zh": "这条通道通往车站。",
          "focus": ["通路"],
          "zhFocus": ["通道"]
        }
      ]
    },
    {
      "id": "n2-0541",
      "jlpt": "N2",
      "headword": "出入り",
      "source_form": "出入り",
      "variants": [
        "出入り"
      ],
      "reading": "でいり",
      "reading_variants": [
        "でいり"
      ],
      "romaji": "deiri",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "出入；进出",
      "kanji_readings": [
        {
          "form": "出入り",
          "reading": "でいり"
        }
      ],
      "examples": [
        {
          "ja": "この店は人の出入りが多いです。",
          "zh": "这家店进出的人很多。",
          "focus": ["出入り"],
          "zhFocus": ["进出"]
        },
        {
          "ja": "関係者以外は出入りできません。",
          "zh": "无关人员不得出入。",
          "focus": ["出入り"],
          "zhFocus": ["出入"]
        },
        {
          "ja": "夜は建物の出入りが制限されます。",
          "zh": "夜间限制进出大楼。",
          "focus": ["出入り"],
          "zhFocus": ["进出"]
        }
      ]
    },
    {
      "id": "n2-0542",
      "jlpt": "N2",
      "headword": "手入れ",
      "source_form": "手入れ",
      "variants": [
        "手入れ"
      ],
      "reading": "ていれ",
      "reading_variants": [
        "ていれ"
      ],
      "romaji": "teire",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "保养；维护；修整",
      "kanji_readings": [
        {
          "form": "手入れ",
          "reading": "ていれ"
        }
      ],
      "examples": [
        {
          "ja": "庭の手入れをしました。",
          "zh": "修整了院子。",
          "focus": ["手入れ"],
          "zhFocus": ["修整"]
        },
        {
          "ja": "靴の手入れをすると長く使えます。",
          "zh": "保养鞋子就能穿得更久。",
          "focus": ["手入れ"],
          "zhFocus": ["保养"]
        },
        {
          "ja": "この車はよく手入れされています。",
          "zh": "这辆车保养得很好。",
          "focus": ["手入れ"],
          "zhFocus": ["保养"]
        }
      ]
    },
    {
      "id": "n2-0543",
      "jlpt": "N2",
      "headword": "峠",
      "source_form": "峠",
      "variants": [
        "峠"
      ],
      "reading": "とうげ",
      "reading_variants": [
        "とうげ"
      ],
      "romaji": "touge",
      "part_of_speech": "noun",
      "meaning_zh": "山口；山岭；（事物的）高峰期",
      "senses_zh": [
        "山口；山岭",
        "（事物的）高峰期"
      ],
      "kanji_readings": [
        {
          "form": "峠",
          "reading": "とうげ"
        }
      ],
      "examples": [
        {
          "ja": "車で峠を越えました。",
          "zh": "开车翻过了山口。",
          "focus": ["峠"],
          "zhFocus": ["山口"]
        },
        {
          "ja": "峠の上から海が見えました。",
          "zh": "从山顶上能看到大海。",
          "focus": ["峠"],
          "zhFocus": ["山顶"]
        },
        {
          "ja": "暑さもようやく峠を越えました。",
          "zh": "炎热总算过了最高峰。",
          "focus": ["峠"],
          "zhFocus": ["最高峰"]
        }
      ]
    },
    {
      "id": "n2-0544",
      "jlpt": "N2",
      "headword": "盗難",
      "source_form": "盗難",
      "variants": [
        "盗難"
      ],
      "reading": "とうなん",
      "reading_variants": [
        "とうなん"
      ],
      "romaji": "tounan",
      "part_of_speech": "noun",
      "meaning_zh": "失窃；被盗",
      "kanji_readings": [
        {
          "form": "盗難",
          "reading": "とうなん"
        }
      ],
      "examples": [
        {
          "ja": "自転車の盗難が増えています。",
          "zh": "自行车失窃案在增加。",
          "focus": ["盗難"],
          "zhFocus": ["失窃"]
        },
        {
          "ja": "盗難にあったら、すぐ警察に連絡してください。",
          "zh": "如果被盗，请马上联系警察。",
          "focus": ["盗難"],
          "zhFocus": ["被盗"]
        },
        {
          "ja": "盗難を防ぐために、かぎを二つ付けました。",
          "zh": "为了防盗，装了两把锁。",
          "focus": ["盗難"],
          "zhFocus": ["盗"]
        }
      ]
    },
    {
      "id": "n2-0545",
      "jlpt": "N2",
      "headword": "留まる",
      "source_form": "留まる",
      "variants": [
        "留まる"
      ],
      "reading": "とまる",
      "reading_variants": [
        "とまる"
      ],
      "romaji": "tomaru",
      "part_of_speech": "verb",
      "meaning_zh": "（鸟、虫等）停落；（目光、注意）停留；记住",
      "senses_zh": [
        "（鸟、虫等）停落",
        "（目光、注意）停留；记住"
      ],
      "kanji_readings": [
        {
          "form": "留まる",
          "reading": "とまる"
        }
      ],
      "examples": [
        {
          "ja": "鳥が電線に留まっています。",
          "zh": "鸟停在电线上。",
          "focus": ["留まっ"],
          "zhFocus": ["停"]
        },
        {
          "ja": "本屋で一冊の本が目に留まりました。",
          "zh": "在书店里，一本书吸引了我的目光。",
          "focus": ["留まり"],
          "zhFocus": ["吸引"]
        },
        {
          "ja": "先生の言葉が心に留まっています。",
          "zh": "老师的话一直留在我心里。",
          "focus": ["留まっ"],
          "zhFocus": ["留"]
        }
      ],
      "note_zh": "与「止まる（停下）」同音。同样写作「留まる」、读「とどまる」时是“停留、留下”，是另一个词。"
    },
    {
      "id": "n2-0546",
      "jlpt": "N2",
      "headword": "狙う",
      "source_form": "狙う",
      "variants": [
        "狙う"
      ],
      "reading": "ねらう",
      "reading_variants": [
        "ねらう"
      ],
      "romaji": "nerau",
      "part_of_speech": "verb",
      "meaning_zh": "瞄准；以……为目标；伺机",
      "senses_zh": [
        "瞄准",
        "以……为目标；伺机"
      ],
      "kanji_readings": [
        {
          "form": "狙う",
          "reading": "ねらう"
        }
      ],
      "examples": [
        {
          "ja": "ボールをよく狙って投げました。",
          "zh": "瞄准好了才把球扔出去。",
          "focus": ["狙っ"],
          "zhFocus": ["瞄准"]
        },
        {
          "ja": "彼は優勝を狙っています。",
          "zh": "他以夺冠为目标。",
          "focus": ["狙っ"],
          "zhFocus": ["目标"]
        },
        {
          "ja": "泥棒は留守の家を狙います。",
          "zh": "小偷专挑没人的家下手。",
          "focus": ["狙い"],
          "zhFocus": ["挑"]
        }
      ]
    },
    {
      "id": "n2-0547",
      "jlpt": "N2",
      "headword": "灰色",
      "source_form": "灰色",
      "variants": [
        "灰色"
      ],
      "reading": "はいいろ",
      "reading_variants": [
        "はいいろ"
      ],
      "romaji": "haiiro",
      "part_of_speech": "noun",
      "meaning_zh": "灰色",
      "kanji_readings": [
        {
          "form": "灰色",
          "reading": "はいいろ"
        }
      ],
      "examples": [
        {
          "ja": "空が灰色の雲で覆われています。",
          "zh": "天空被灰色的云遮住了。",
          "focus": ["灰色"],
          "zhFocus": ["灰色"]
        },
        {
          "ja": "灰色のコートを買いました。",
          "zh": "买了一件灰色的大衣。",
          "focus": ["灰色"],
          "zhFocus": ["灰色"]
        },
        {
          "ja": "この壁は灰色に塗られています。",
          "zh": "这面墙被刷成了灰色。",
          "focus": ["灰色"],
          "zhFocus": ["灰色"]
        }
      ]
    },
    {
      "id": "n2-0548",
      "jlpt": "N2",
      "headword": "反映",
      "source_form": "反映",
      "variants": [
        "反映"
      ],
      "reading": "はんえい",
      "reading_variants": [
        "はんえい"
      ],
      "romaji": "han'ei",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "反映；体现；（把意见等）采纳",
      "kanji_readings": [
        {
          "form": "反映",
          "reading": "はんえい"
        }
      ],
      "examples": [
        {
          "ja": "この歌は当時の社会を反映しています。",
          "zh": "这首歌反映了当时的社会。",
          "focus": ["反映"],
          "zhFocus": ["反映"]
        },
        {
          "ja": "みんなの意見を計画に反映させました。",
          "zh": "把大家的意见体现在了计划里。",
          "focus": ["反映"],
          "zhFocus": ["体现"]
        },
        {
          "ja": "結果が成績に反映されます。",
          "zh": "结果会反映在成绩上。",
          "focus": ["反映"],
          "zhFocus": ["反映"]
        }
      ]
    },
    {
      "id": "n2-0549",
      "jlpt": "N2",
      "headword": "半径",
      "source_form": "半径",
      "variants": [
        "半径"
      ],
      "reading": "はんけい",
      "reading_variants": [
        "はんけい"
      ],
      "romaji": "hankei",
      "part_of_speech": "noun",
      "meaning_zh": "半径",
      "kanji_readings": [
        {
          "form": "半径",
          "reading": "はんけい"
        }
      ],
      "examples": [
        {
          "ja": "この円の半径を求めなさい。",
          "zh": "求这个圆的半径。",
          "focus": ["半径"],
          "zhFocus": ["半径"]
        },
        {
          "ja": "コンパスで半径を測りました。",
          "zh": "用圆规量了半径。",
          "focus": ["半径"],
          "zhFocus": ["半径"]
        },
        {
          "ja": "半径が長いほど、円は大きくなります。",
          "zh": "半径越长，圆就越大。",
          "focus": ["半径"],
          "zhFocus": ["半径"]
        }
      ]
    },
    {
      "id": "n2-0550",
      "jlpt": "N2",
      "headword": "踏切",
      "source_form": "踏切",
      "variants": [
        "踏切",
        "踏み切り"
      ],
      "reading": "ふみきり",
      "reading_variants": [
        "ふみきり"
      ],
      "romaji": "fumikiri",
      "part_of_speech": "noun",
      "meaning_zh": "（铁路）道口",
      "kanji_readings": [
        {
          "form": "踏切",
          "reading": "ふみきり"
        },
        {
          "form": "踏み切り",
          "reading": "ふみきり"
        }
      ],
      "examples": [
        {
          "ja": "踏切の前で車が止まりました。",
          "zh": "车在道口前停了下来。",
          "focus": ["踏切"],
          "zhFocus": ["道口"]
        },
        {
          "ja": "踏切が鳴っている時に渡ってはいけません。",
          "zh": "道口警铃响的时候不能过。",
          "focus": ["踏切"],
          "zhFocus": ["道口"]
        },
        {
          "ja": "駅の近くに踏切があります。",
          "zh": "车站附近有一个道口。",
          "focus": ["踏切"],
          "zhFocus": ["道口"]
        }
      ]
    },
    {
      "id": "n2-0551",
      "jlpt": "N2",
      "headword": "分布",
      "source_form": "分布",
      "variants": [
        "分布"
      ],
      "reading": "ぶんぷ",
      "reading_variants": [
        "ぶんぷ"
      ],
      "romaji": "bunpu",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "分布",
      "kanji_readings": [
        {
          "form": "分布",
          "reading": "ぶんぷ"
        }
      ],
      "examples": [
        {
          "ja": "この植物は全国に分布しています。",
          "zh": "这种植物分布在全国各地。",
          "focus": ["分布"],
          "zhFocus": ["分布"]
        },
        {
          "ja": "人口の分布を地図で調べました。",
          "zh": "在地图上查了人口的分布。",
          "focus": ["分布"],
          "zhFocus": ["分布"]
        },
        {
          "ja": "この鳥は南の島にだけ分布しています。",
          "zh": "这种鸟只分布在南方的岛上。",
          "focus": ["分布"],
          "zhFocus": ["分布"]
        }
      ]
    },
    {
      "id": "n2-0552",
      "jlpt": "N2",
      "headword": "望遠鏡",
      "source_form": "望遠鏡",
      "variants": [
        "望遠鏡"
      ],
      "reading": "ぼうえんきょう",
      "reading_variants": [
        "ぼうえんきょう"
      ],
      "romaji": "bouenkyou",
      "part_of_speech": "noun",
      "meaning_zh": "望远镜",
      "kanji_readings": [
        {
          "form": "望遠鏡",
          "reading": "ぼうえんきょう"
        }
      ],
      "examples": [
        {
          "ja": "望遠鏡で月を見ました。",
          "zh": "用望远镜看了月亮。",
          "focus": ["望遠鏡"],
          "zhFocus": ["望远镜"]
        },
        {
          "ja": "子供に望遠鏡を買ってあげました。",
          "zh": "给孩子买了望远镜。",
          "focus": ["望遠鏡"],
          "zhFocus": ["望远镜"]
        },
        {
          "ja": "望遠鏡で遠くの山を観察しました。",
          "zh": "用望远镜观察了远处的山。",
          "focus": ["望遠鏡"],
          "zhFocus": ["望远镜"]
        }
      ]
    },
    {
      "id": "n2-0553",
      "jlpt": "N2",
      "headword": "枚数",
      "source_form": "枚数",
      "variants": [
        "枚数"
      ],
      "reading": "まいすう",
      "reading_variants": [
        "まいすう"
      ],
      "romaji": "maisuu",
      "part_of_speech": "noun",
      "meaning_zh": "张数；页数",
      "kanji_readings": [
        {
          "form": "枚数",
          "reading": "まいすう"
        }
      ],
      "examples": [
        {
          "ja": "コピーの枚数を確認してください。",
          "zh": "请确认复印的张数。",
          "focus": ["枚数"],
          "zhFocus": ["张数"]
        },
        {
          "ja": "レポートの枚数が決まっています。",
          "zh": "报告的页数是规定好的。",
          "focus": ["枚数"],
          "zhFocus": ["页数"]
        },
        {
          "ja": "チケットの枚数が足りません。",
          "zh": "票的张数不够。",
          "focus": ["枚数"],
          "zhFocus": ["张数"]
        }
      ]
    },
    {
      "id": "n2-0554",
      "jlpt": "N2",
      "headword": "危うい",
      "source_form": "危うい",
      "variants": [
        "危うい"
      ],
      "reading": "あやうい",
      "reading_variants": [
        "あやうい"
      ],
      "romaji": "ayaui",
      "part_of_speech": "i-adjective",
      "meaning_zh": "危险；（处境）岌岌可危",
      "kanji_readings": [
        {
          "form": "危うい",
          "reading": "あやうい"
        }
      ],
      "examples": [
        {
          "ja": "彼の立場は危うくなっています。",
          "zh": "他的处境越来越危险了。",
          "focus": ["危うく"],
          "zhFocus": ["危险"]
        },
        {
          "ja": "会社の経営が危うい状態です。",
          "zh": "公司的经营岌岌可危。",
          "focus": ["危うい"],
          "zhFocus": ["岌岌可危"]
        },
        {
          "ja": "危うく車にひかれるところでした。",
          "zh": "差点被车撞了。",
          "focus": ["危うく"],
          "zhFocus": ["差点"]
        }
      ],
      "note_zh": "副词形「危うく」常和「〜ところだった」连用，意思是“差点儿……”。"
    },
    {
      "id": "n2-0555",
      "jlpt": "N2",
      "headword": "以降",
      "source_form": "以降",
      "variants": [
        "以降"
      ],
      "reading": "いこう",
      "reading_variants": [
        "いこう"
      ],
      "romaji": "ikou",
      "part_of_speech": "noun",
      "meaning_zh": "以后；之后",
      "kanji_readings": [
        {
          "form": "以降",
          "reading": "いこう"
        }
      ],
      "examples": [
        {
          "ja": "四月以降、新しいルールになります。",
          "zh": "四月以后实行新规定。",
          "focus": ["以降"],
          "zhFocus": ["以后"]
        },
        {
          "ja": "来週以降なら時間があります。",
          "zh": "下周以后就有时间。",
          "focus": ["以降"],
          "zhFocus": ["以后"]
        },
        {
          "ja": "それ以降、彼に会っていません。",
          "zh": "从那以后就没见过他。",
          "focus": ["以降"],
          "zhFocus": ["以后"]
        }
      ]
    },
    {
      "id": "n2-0556",
      "jlpt": "N2",
      "headword": "受け取り",
      "source_form": "受取",
      "variants": [
        "受け取り",
        "受取"
      ],
      "reading": "うけとり",
      "reading_variants": [
        "うけとり"
      ],
      "romaji": "uketori",
      "part_of_speech": "noun",
      "meaning_zh": "领取；收取；收据",
      "senses_zh": [
        "领取；收取",
        "收据"
      ],
      "kanji_readings": [
        {
          "form": "受け取り",
          "reading": "うけとり"
        },
        {
          "form": "受取",
          "reading": "うけとり"
        }
      ],
      "examples": [
        {
          "ja": "荷物の受け取りにサインしました。",
          "zh": "签收了包裹。",
          "focus": ["受け取り"],
          "zhFocus": ["签收"]
        },
        {
          "ja": "チケットの受け取りは駅でできます。",
          "zh": "票可以在车站领取。",
          "focus": ["受け取り"],
          "zhFocus": ["领取"]
        },
        {
          "ja": "お金を払ったら、受け取りをもらってください。",
          "zh": "付款后请拿收据。",
          "focus": ["受け取り"],
          "zhFocus": ["收据"]
        }
      ],
      "note_zh": "动词「受け取る（收到）」的名词形。"
    },
    {
      "id": "n2-0557",
      "jlpt": "N2",
      "headword": "応接",
      "source_form": "応接",
      "variants": [
        "応接"
      ],
      "reading": "おうせつ",
      "reading_variants": [
        "おうせつ"
      ],
      "romaji": "ousetsu",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "接待；应接",
      "kanji_readings": [
        {
          "form": "応接",
          "reading": "おうせつ"
        }
      ],
      "examples": [
        {
          "ja": "お客様を応接室に案内しました。",
          "zh": "把客人带到了会客室。",
          "focus": ["応接"],
          "zhFocus": ["会客"]
        },
        {
          "ja": "一日中、客の応接に追われました。",
          "zh": "一整天都忙着接待客人。",
          "focus": ["応接"],
          "zhFocus": ["接待"]
        },
        {
          "ja": "応接間にソファーを置きました。",
          "zh": "在会客室里放了沙发。",
          "focus": ["応接"],
          "zhFocus": ["会客"]
        }
      ],
      "note_zh": "多用「応接室」「応接間」。"
    },
    {
      "id": "n2-0558",
      "jlpt": "N2",
      "headword": "応対",
      "source_form": "応対",
      "variants": [
        "応対"
      ],
      "reading": "おうたい",
      "reading_variants": [
        "おうたい"
      ],
      "romaji": "outai",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "应对；接待（客人、电话等）",
      "kanji_readings": [
        {
          "form": "応対",
          "reading": "おうたい"
        }
      ],
      "examples": [
        {
          "ja": "電話の応対が丁寧です。",
          "zh": "接电话的态度很礼貌。",
          "focus": ["応対"],
          "zhFocus": ["接"]
        },
        {
          "ja": "受付でお客様に応対しました。",
          "zh": "在前台接待了客人。",
          "focus": ["応対"],
          "zhFocus": ["接待"]
        },
        {
          "ja": "店員の応対が悪くて、がっかりしました。",
          "zh": "店员的应对很差，让人失望。",
          "focus": ["応対"],
          "zhFocus": ["应对"]
        }
      ]
    },
    {
      "id": "n2-0559",
      "jlpt": "N2",
      "headword": "開通",
      "source_form": "開通",
      "variants": [
        "開通"
      ],
      "reading": "かいつう",
      "reading_variants": [
        "かいつう"
      ],
      "romaji": "kaitsuu",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "开通；通车",
      "kanji_readings": [
        {
          "form": "開通",
          "reading": "かいつう"
        }
      ],
      "examples": [
        {
          "ja": "新しい道路が開通しました。",
          "zh": "新的道路通车了。",
          "focus": ["開通"],
          "zhFocus": ["通车"]
        },
        {
          "ja": "トンネルの開通で、町が便利になりました。",
          "zh": "隧道开通后，城镇变得方便了。",
          "focus": ["開通"],
          "zhFocus": ["开通"]
        },
        {
          "ja": "電話が開通するまで、少し時間がかかります。",
          "zh": "电话开通还需要一点时间。",
          "focus": ["開通"],
          "zhFocus": ["开通"]
        }
      ]
    },
    {
      "id": "n2-0560",
      "jlpt": "N2",
      "headword": "書留",
      "source_form": "書留",
      "variants": [
        "書留"
      ],
      "reading": "かきとめ",
      "reading_variants": [
        "かきとめ"
      ],
      "romaji": "kakitome",
      "part_of_speech": "noun",
      "meaning_zh": "挂号（邮件）",
      "kanji_readings": [
        {
          "form": "書留",
          "reading": "かきとめ"
        }
      ],
      "examples": [
        {
          "ja": "大切な書類を書留で送りました。",
          "zh": "把重要的文件用挂号寄出了。",
          "focus": ["書留"],
          "zhFocus": ["挂号"]
        },
        {
          "ja": "書留は受け取る時にサインが必要です。",
          "zh": "挂号信签收时需要签名。",
          "focus": ["書留"],
          "zhFocus": ["挂号信"]
        },
        {
          "ja": "郵便局に書留を出しに行きました。",
          "zh": "去邮局寄了挂号信。",
          "focus": ["書留"],
          "zhFocus": ["挂号信"]
        }
      ]
    },
    {
      "id": "n2-0561",
      "jlpt": "N2",
      "headword": "垣根",
      "source_form": "垣根",
      "variants": [
        "垣根"
      ],
      "reading": "かきね",
      "reading_variants": [
        "かきね"
      ],
      "romaji": "kakine",
      "part_of_speech": "noun",
      "meaning_zh": "篱笆；围墙；隔阂",
      "senses_zh": [
        "篱笆；围墙",
        "隔阂"
      ],
      "kanji_readings": [
        {
          "form": "垣根",
          "reading": "かきね"
        }
      ],
      "examples": [
        {
          "ja": "庭の周りに垣根を作りました。",
          "zh": "在院子周围筑了篱笆。",
          "focus": ["垣根"],
          "zhFocus": ["篱笆"]
        },
        {
          "ja": "垣根の向こうから犬がほえています。",
          "zh": "狗在篱笆那边叫。",
          "focus": ["垣根"],
          "zhFocus": ["篱笆"]
        },
        {
          "ja": "国と国の垣根を越えて協力しましょう。",
          "zh": "让我们跨越国与国的隔阂进行合作吧。",
          "focus": ["垣根"],
          "zhFocus": ["隔阂"]
        }
      ]
    },
    {
      "id": "n2-0562",
      "jlpt": "N2",
      "headword": "下降",
      "source_form": "下降",
      "variants": [
        "下降"
      ],
      "reading": "かこう",
      "reading_variants": [
        "かこう"
      ],
      "romaji": "kakou",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "下降",
      "kanji_readings": [
        {
          "form": "下降",
          "reading": "かこう"
        }
      ],
      "examples": [
        {
          "ja": "飛行機が下降を始めました。",
          "zh": "飞机开始下降了。",
          "focus": ["下降"],
          "zhFocus": ["下降"]
        },
        {
          "ja": "気温がどんどん下降しています。",
          "zh": "气温在不断下降。",
          "focus": ["下降"],
          "zhFocus": ["下降"]
        },
        {
          "ja": "売り上げが下降しています。",
          "zh": "销售额在下降。",
          "focus": ["下降"],
          "zhFocus": ["下降"]
        }
      ],
      "note_zh": "与「上昇（上升）」相对。"
    },
    {
      "id": "n2-0563",
      "jlpt": "N2",
      "headword": "缶詰",
      "source_form": "缶詰",
      "variants": [
        "缶詰"
      ],
      "reading": "かんづめ",
      "reading_variants": [
        "かんづめ"
      ],
      "romaji": "kanzume",
      "part_of_speech": "noun",
      "meaning_zh": "罐头",
      "kanji_readings": [
        {
          "form": "缶詰",
          "reading": "かんづめ"
        }
      ],
      "examples": [
        {
          "ja": "災害に備えて缶詰を買っておきました。",
          "zh": "为防备灾害事先买好了罐头。",
          "focus": ["缶詰"],
          "zhFocus": ["罐头"]
        },
        {
          "ja": "魚の缶詰を開けました。",
          "zh": "打开了鱼罐头。",
          "focus": ["缶詰"],
          "zhFocus": ["罐头"]
        },
        {
          "ja": "缶詰は長く保存できます。",
          "zh": "罐头可以长期保存。",
          "focus": ["缶詰"],
          "zhFocus": ["罐头"]
        }
      ]
    },
    {
      "id": "n2-0564",
      "jlpt": "N2",
      "headword": "記号",
      "source_form": "記号",
      "variants": [
        "記号"
      ],
      "reading": "きごう",
      "reading_variants": [
        "きごう"
      ],
      "romaji": "kigou",
      "part_of_speech": "noun",
      "meaning_zh": "符号；记号",
      "kanji_readings": [
        {
          "form": "記号",
          "reading": "きごう"
        }
      ],
      "examples": [
        {
          "ja": "正しいものに記号で答えてください。",
          "zh": "请用符号选出正确的选项。",
          "focus": ["記号"],
          "zhFocus": ["符号"]
        },
        {
          "ja": "地図の記号の意味を覚えました。",
          "zh": "记住了地图符号的意思。",
          "focus": ["記号"],
          "zhFocus": ["符号"]
        },
        {
          "ja": "この記号は危険を表しています。",
          "zh": "这个记号表示危险。",
          "focus": ["記号"],
          "zhFocus": ["记号"]
        }
      ]
    },
    {
      "id": "n2-0565",
      "jlpt": "N2",
      "headword": "刻む",
      "source_form": "刻む",
      "variants": [
        "刻む"
      ],
      "reading": "きざむ",
      "reading_variants": [
        "きざむ"
      ],
      "romaji": "kizamu",
      "part_of_speech": "verb",
      "meaning_zh": "切碎；雕刻；铭记",
      "senses_zh": [
        "切碎",
        "雕刻；铭记"
      ],
      "kanji_readings": [
        {
          "form": "刻む",
          "reading": "きざむ"
        }
      ],
      "examples": [
        {
          "ja": "ねぎを細かく刻みました。",
          "zh": "把葱切碎了。",
          "focus": ["刻み"],
          "zhFocus": ["切碎"]
        },
        {
          "ja": "木に名前を刻みました。",
          "zh": "在树上刻了名字。",
          "focus": ["刻み"],
          "zhFocus": ["刻"]
        },
        {
          "ja": "その言葉を心に刻んでいます。",
          "zh": "我把那句话铭记在心。",
          "focus": ["刻ん"],
          "zhFocus": ["铭记"]
        }
      ]
    },
    {
      "id": "n2-0566",
      "jlpt": "N2",
      "headword": "配る",
      "source_form": "配る",
      "variants": [
        "配る"
      ],
      "reading": "くばる",
      "reading_variants": [
        "くばる"
      ],
      "romaji": "kubaru",
      "part_of_speech": "verb",
      "meaning_zh": "分发；发；（注意）照顾到",
      "kanji_readings": [
        {
          "form": "配る",
          "reading": "くばる"
        }
      ],
      "examples": [
        {
          "ja": "先生がプリントを配りました。",
          "zh": "老师发了讲义。",
          "focus": ["配り"],
          "zhFocus": ["发"]
        },
        {
          "ja": "駅前でチラシを配っています。",
          "zh": "在车站前发传单。",
          "focus": ["配っ"],
          "zhFocus": ["发"]
        },
        {
          "ja": "周りの人にも気を配ってください。",
          "zh": "也请照顾到周围的人。",
          "focus": ["配っ"],
          "zhFocus": ["照顾到"]
        }
      ],
      "note_zh": "「気を配る」是“留意、照顾”的意思。"
    },
    {
      "id": "n2-0567",
      "jlpt": "N2",
      "headword": "毛皮",
      "source_form": "毛皮",
      "variants": [
        "毛皮"
      ],
      "reading": "けがわ",
      "reading_variants": [
        "けがわ"
      ],
      "romaji": "kegawa",
      "part_of_speech": "noun",
      "meaning_zh": "毛皮",
      "kanji_readings": [
        {
          "form": "毛皮",
          "reading": "けがわ"
        }
      ],
      "examples": [
        {
          "ja": "毛皮のコートは暖かいです。",
          "zh": "毛皮大衣很暖和。",
          "focus": ["毛皮"],
          "zhFocus": ["毛皮"]
        },
        {
          "ja": "動物の毛皮を使わない店が増えています。",
          "zh": "不使用动物毛皮的店在增加。",
          "focus": ["毛皮"],
          "zhFocus": ["毛皮"]
        },
        {
          "ja": "昔の人は毛皮を着て寒さを防ぎました。",
          "zh": "古人穿毛皮来御寒。",
          "focus": ["毛皮"],
          "zhFocus": ["毛皮"]
        }
      ]
    },
    {
      "id": "n2-0568",
      "jlpt": "N2",
      "headword": "刺身",
      "source_form": "刺身",
      "variants": [
        "刺身"
      ],
      "reading": "さしみ",
      "reading_variants": [
        "さしみ"
      ],
      "romaji": "sashimi",
      "part_of_speech": "noun",
      "meaning_zh": "生鱼片",
      "kanji_readings": [
        {
          "form": "刺身",
          "reading": "さしみ"
        }
      ],
      "examples": [
        {
          "ja": "新鮮な魚を刺身にしました。",
          "zh": "把新鲜的鱼做成了生鱼片。",
          "focus": ["刺身"],
          "zhFocus": ["生鱼片"]
        },
        {
          "ja": "刺身はしょうゆにつけて食べます。",
          "zh": "生鱼片蘸酱油吃。",
          "focus": ["刺身"],
          "zhFocus": ["生鱼片"]
        },
        {
          "ja": "刺身が苦手な外国人もいます。",
          "zh": "也有不爱吃生鱼片的外国人。",
          "focus": ["刺身"],
          "zhFocus": ["生鱼片"]
        }
      ]
    },
    {
      "id": "n2-0569",
      "jlpt": "N2",
      "headword": "実例",
      "source_form": "実例",
      "variants": [
        "実例"
      ],
      "reading": "じつれい",
      "reading_variants": [
        "じつれい"
      ],
      "romaji": "jitsurei",
      "part_of_speech": "noun",
      "meaning_zh": "实例",
      "kanji_readings": [
        {
          "form": "実例",
          "reading": "じつれい"
        }
      ],
      "examples": [
        {
          "ja": "実例を挙げて説明してください。",
          "zh": "请举实例来说明。",
          "focus": ["実例"],
          "zhFocus": ["实例"]
        },
        {
          "ja": "この本には実例がたくさん載っています。",
          "zh": "这本书里有很多实例。",
          "focus": ["実例"],
          "zhFocus": ["实例"]
        },
        {
          "ja": "実例を見ると、よく分かります。",
          "zh": "看了实例就很明白了。",
          "focus": ["実例"],
          "zhFocus": ["实例"]
        }
      ]
    },
    {
      "id": "n2-0570",
      "jlpt": "N2",
      "headword": "頭脳",
      "source_form": "頭脳",
      "variants": [
        "頭脳"
      ],
      "reading": "ずのう",
      "reading_variants": [
        "ずのう"
      ],
      "romaji": "zunou",
      "part_of_speech": "noun",
      "meaning_zh": "头脑；智力",
      "kanji_readings": [
        {
          "form": "頭脳",
          "reading": "ずのう"
        }
      ],
      "examples": [
        {
          "ja": "彼は優れた頭脳を持っています。",
          "zh": "他有聪明的头脑。",
          "focus": ["頭脳"],
          "zhFocus": ["头脑"]
        },
        {
          "ja": "このゲームは頭脳を使います。",
          "zh": "这个游戏要动脑筋。",
          "focus": ["頭脳"],
          "zhFocus": ["脑筋"]
        },
        {
          "ja": "世界中の優秀な頭脳が集まりました。",
          "zh": "世界各地的优秀人才聚集一堂。",
          "focus": ["頭脳"],
          "zhFocus": ["人才"]
        }
      ]
    },
    {
      "id": "n2-0571",
      "jlpt": "N2",
      "headword": "大木",
      "source_form": "大木",
      "variants": [
        "大木"
      ],
      "reading": "たいぼく",
      "reading_variants": [
        "たいぼく"
      ],
      "romaji": "taiboku",
      "part_of_speech": "noun",
      "meaning_zh": "大树",
      "kanji_readings": [
        {
          "form": "大木",
          "reading": "たいぼく"
        }
      ],
      "examples": [
        {
          "ja": "神社に立派な大木があります。",
          "zh": "神社里有一棵高大的树。",
          "focus": ["大木"],
          "zhFocus": ["树"]
        },
        {
          "ja": "台風で大木が倒れました。",
          "zh": "大树被台风刮倒了。",
          "focus": ["大木"],
          "zhFocus": ["大树"]
        },
        {
          "ja": "この大木は町の人に大切にされています。",
          "zh": "这棵大树受到镇上人们的爱护。",
          "focus": ["大木"],
          "zhFocus": ["大树"]
        }
      ]
    },
    {
      "id": "n2-0572",
      "jlpt": "N2",
      "headword": "地下水",
      "source_form": "地下水",
      "variants": [
        "地下水"
      ],
      "reading": "ちかすい",
      "reading_variants": [
        "ちかすい"
      ],
      "romaji": "chikasui",
      "part_of_speech": "noun",
      "meaning_zh": "地下水",
      "kanji_readings": [
        {
          "form": "地下水",
          "reading": "ちかすい"
        }
      ],
      "examples": [
        {
          "ja": "この町では地下水を飲んでいます。",
          "zh": "这个小镇喝的是地下水。",
          "focus": ["地下水"],
          "zhFocus": ["地下水"]
        },
        {
          "ja": "地下水をくみ上げて畑に使います。",
          "zh": "抽取地下水用于田地。",
          "focus": ["地下水"],
          "zhFocus": ["地下水"]
        },
        {
          "ja": "工場の排水で地下水が汚れました。",
          "zh": "工厂的废水污染了地下水。",
          "focus": ["地下水"],
          "zhFocus": ["地下水"]
        }
      ]
    },
    {
      "id": "n2-0573",
      "jlpt": "N2",
      "headword": "力強い",
      "source_form": "力強い",
      "variants": [
        "力強い"
      ],
      "reading": "ちからづよい",
      "reading_variants": [
        "ちからづよい"
      ],
      "romaji": "chikarazuyoi",
      "part_of_speech": "i-adjective",
      "meaning_zh": "有力；强有力；令人鼓舞",
      "kanji_readings": [
        {
          "form": "力強い",
          "reading": "ちからづよい"
        }
      ],
      "examples": [
        {
          "ja": "彼は力強い声で話しました。",
          "zh": "他用有力的声音说话。",
          "focus": ["力強い"],
          "zhFocus": ["有力"]
        },
        {
          "ja": "選手たちの力強い走りに感動しました。",
          "zh": "被运动员们强有力的奔跑感动了。",
          "focus": ["力強い"],
          "zhFocus": ["强有力"]
        },
        {
          "ja": "友達の言葉が力強く感じられました。",
          "zh": "朋友的话让我感到很受鼓舞。",
          "focus": ["力強く"],
          "zhFocus": ["受鼓舞"]
        }
      ]
    },
    {
      "id": "n2-0574",
      "jlpt": "N2",
      "headword": "地名",
      "source_form": "地名",
      "variants": [
        "地名"
      ],
      "reading": "ちめい",
      "reading_variants": [
        "ちめい"
      ],
      "romaji": "chimei",
      "part_of_speech": "noun",
      "meaning_zh": "地名",
      "kanji_readings": [
        {
          "form": "地名",
          "reading": "ちめい"
        }
      ],
      "examples": [
        {
          "ja": "この地名は読み方が難しいです。",
          "zh": "这个地名读法很难。",
          "focus": ["地名"],
          "zhFocus": ["地名"]
        },
        {
          "ja": "地図で地名を調べました。",
          "zh": "在地图上查了地名。",
          "focus": ["地名"],
          "zhFocus": ["地名"]
        },
        {
          "ja": "地名にはその土地の歴史が残っています。",
          "zh": "地名里留存着当地的历史。",
          "focus": ["地名"],
          "zhFocus": ["地名"]
        }
      ]
    },
    {
      "id": "n2-0575",
      "jlpt": "N2",
      "headword": "伝記",
      "source_form": "伝記",
      "variants": [
        "伝記"
      ],
      "reading": "でんき",
      "reading_variants": [
        "でんき"
      ],
      "romaji": "denki",
      "part_of_speech": "noun",
      "meaning_zh": "传记",
      "kanji_readings": [
        {
          "form": "伝記",
          "reading": "でんき"
        }
      ],
      "examples": [
        {
          "ja": "子供のころ、偉人の伝記をよく読みました。",
          "zh": "小时候常读伟人传记。",
          "focus": ["伝記"],
          "zhFocus": ["传记"]
        },
        {
          "ja": "この本は有名な科学者の伝記です。",
          "zh": "这本书是一位著名科学家的传记。",
          "focus": ["伝記"],
          "zhFocus": ["传记"]
        },
        {
          "ja": "彼の人生は伝記になりました。",
          "zh": "他的人生被写成了传记。",
          "focus": ["伝記"],
          "zhFocus": ["传记"]
        }
      ]
    },
    {
      "id": "n2-0576",
      "jlpt": "N2",
      "headword": "並木",
      "source_form": "並木",
      "variants": [
        "並木"
      ],
      "reading": "なみき",
      "reading_variants": [
        "なみき"
      ],
      "romaji": "namiki",
      "part_of_speech": "noun",
      "meaning_zh": "行道树；街道两旁的树",
      "kanji_readings": [
        {
          "form": "並木",
          "reading": "なみき"
        }
      ],
      "examples": [
        {
          "ja": "駅までの道に桜の並木があります。",
          "zh": "去车站的路上有成排的樱花树。",
          "focus": ["並木"],
          "zhFocus": ["成排的"]
        },
        {
          "ja": "並木の下を散歩しました。",
          "zh": "在行道树下散了步。",
          "focus": ["並木"],
          "zhFocus": ["行道树"]
        },
        {
          "ja": "秋になると、並木が黄色くなります。",
          "zh": "一到秋天，行道树就变黄了。",
          "focus": ["並木"],
          "zhFocus": ["行道树"]
        }
      ]
    },
    {
      "id": "n2-0577",
      "jlpt": "N2",
      "headword": "日差し",
      "source_form": "陽射",
      "variants": [
        "日差し",
        "陽射し",
        "日射し"
      ],
      "reading": "ひざし",
      "reading_variants": [
        "ひざし"
      ],
      "romaji": "hizashi",
      "part_of_speech": "noun",
      "meaning_zh": "阳光；日光",
      "kanji_readings": [
        {
          "form": "日差し",
          "reading": "ひざし"
        },
        {
          "form": "陽射し",
          "reading": "ひざし"
        },
        {
          "form": "日射し",
          "reading": "ひざし"
        }
      ],
      "examples": [
        {
          "ja": "今日は日差しが強いです。",
          "zh": "今天阳光很强烈。",
          "focus": ["日差し"],
          "zhFocus": ["阳光"]
        },
        {
          "ja": "窓から暖かい日差しが入ってきます。",
          "zh": "温暖的阳光从窗户照进来。",
          "focus": ["日差し"],
          "zhFocus": ["阳光"]
        },
        {
          "ja": "帽子をかぶって日差しを避けました。",
          "zh": "戴上帽子避开了日光。",
          "focus": ["日差し"],
          "zhFocus": ["日光"]
        }
      ]
    },
    {
      "id": "n2-0578",
      "jlpt": "N2",
      "headword": "皮肉",
      "source_form": "皮肉",
      "variants": [
        "皮肉"
      ],
      "reading": "ひにく",
      "reading_variants": [
        "ひにく"
      ],
      "romaji": "hiniku",
      "part_of_speech": "na-adjective/noun",
      "meaning_zh": "讽刺；挖苦；（事与愿违的）讽刺",
      "kanji_readings": [
        {
          "form": "皮肉",
          "reading": "ひにく"
        }
      ],
      "examples": [
        {
          "ja": "彼はいつも皮肉を言います。",
          "zh": "他总是说挖苦人的话。",
          "focus": ["皮肉"],
          "zhFocus": ["挖苦"]
        },
        {
          "ja": "それは皮肉な言い方ですね。",
          "zh": "那真是讽刺的说法啊。",
          "focus": ["皮肉"],
          "zhFocus": ["讽刺"]
        },
        {
          "ja": "急いだ日に限って電車が遅れるとは、皮肉なものです。",
          "zh": "偏偏在赶时间的日子电车晚点，真是讽刺。",
          "focus": ["皮肉"],
          "zhFocus": ["讽刺"]
        }
      ]
    },
    {
      "id": "n2-0579",
      "jlpt": "N2",
      "headword": "風船",
      "source_form": "風船",
      "variants": [
        "風船"
      ],
      "reading": "ふうせん",
      "reading_variants": [
        "ふうせん"
      ],
      "romaji": "fuusen",
      "part_of_speech": "noun",
      "meaning_zh": "气球",
      "kanji_readings": [
        {
          "form": "風船",
          "reading": "ふうせん"
        }
      ],
      "examples": [
        {
          "ja": "子供に風船をあげました。",
          "zh": "给了孩子一个气球。",
          "focus": ["風船"],
          "zhFocus": ["气球"]
        },
        {
          "ja": "風船が空に飛んでいきました。",
          "zh": "气球飞上了天空。",
          "focus": ["風船"],
          "zhFocus": ["气球"]
        },
        {
          "ja": "パーティーのために風船を膨らませました。",
          "zh": "为了派对吹了气球。",
          "focus": ["風船"],
          "zhFocus": ["气球"]
        }
      ]
    },
    {
      "id": "n2-0580",
      "jlpt": "N2",
      "headword": "武士",
      "source_form": "武士",
      "variants": [
        "武士"
      ],
      "reading": "ぶし",
      "reading_variants": [
        "ぶし"
      ],
      "romaji": "bushi",
      "part_of_speech": "noun",
      "meaning_zh": "武士",
      "kanji_readings": [
        {
          "form": "武士",
          "reading": "ぶし"
        }
      ],
      "examples": [
        {
          "ja": "昔、この町には武士が住んでいました。",
          "zh": "以前这个小镇住着武士。",
          "focus": ["武士"],
          "zhFocus": ["武士"]
        },
        {
          "ja": "武士は刀を持っていました。",
          "zh": "武士带着刀。",
          "focus": ["武士"],
          "zhFocus": ["武士"]
        },
        {
          "ja": "武士の生活についての本を読みました。",
          "zh": "读了关于武士生活的书。",
          "focus": ["武士"],
          "zhFocus": ["武士"]
        }
      ]
    },
    {
      "id": "n2-0581",
      "jlpt": "N2",
      "headword": "分類",
      "source_form": "分類",
      "variants": [
        "分類"
      ],
      "reading": "ぶんるい",
      "reading_variants": [
        "ぶんるい"
      ],
      "romaji": "bunrui",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "分类",
      "kanji_readings": [
        {
          "form": "分類",
          "reading": "ぶんるい"
        }
      ],
      "examples": [
        {
          "ja": "本を種類ごとに分類しました。",
          "zh": "把书按种类分了类。",
          "focus": ["分類"],
          "zhFocus": ["分了类"]
        },
        {
          "ja": "動物を食べ物によって分類します。",
          "zh": "按食物对动物进行分类。",
          "focus": ["分類"],
          "zhFocus": ["分类"]
        },
        {
          "ja": "データの分類に時間がかかりました。",
          "zh": "数据分类花了不少时间。",
          "focus": ["分類"],
          "zhFocus": ["分类"]
        }
      ]
    },
    {
      "id": "n2-0582",
      "jlpt": "N2",
      "headword": "兵隊",
      "source_form": "兵隊",
      "variants": [
        "兵隊"
      ],
      "reading": "へいたい",
      "reading_variants": [
        "へいたい"
      ],
      "romaji": "heitai",
      "part_of_speech": "noun",
      "meaning_zh": "士兵；军队",
      "kanji_readings": [
        {
          "form": "兵隊",
          "reading": "へいたい"
        }
      ],
      "examples": [
        {
          "ja": "祖父は若いころ兵隊でした。",
          "zh": "祖父年轻时当过兵。",
          "focus": ["兵隊"],
          "zhFocus": ["兵"]
        },
        {
          "ja": "兵隊が町の中を行進しました。",
          "zh": "士兵们在城里列队行进。",
          "focus": ["兵隊"],
          "zhFocus": ["士兵"]
        },
        {
          "ja": "兵隊が橋を守っています。",
          "zh": "士兵们守着桥。",
          "focus": ["兵隊"],
          "zhFocus": ["士兵"]
        }
      ]
    },
    {
      "id": "n2-0583",
      "jlpt": "N2",
      "headword": "方言",
      "source_form": "方言",
      "variants": [
        "方言"
      ],
      "reading": "ほうげん",
      "reading_variants": [
        "ほうげん"
      ],
      "romaji": "hougen",
      "part_of_speech": "noun",
      "meaning_zh": "方言",
      "kanji_readings": [
        {
          "form": "方言",
          "reading": "ほうげん"
        }
      ],
      "examples": [
        {
          "ja": "祖母は方言で話します。",
          "zh": "祖母说方言。",
          "focus": ["方言"],
          "zhFocus": ["方言"]
        },
        {
          "ja": "この方言は意味が分かりません。",
          "zh": "这种方言我听不懂。",
          "focus": ["方言"],
          "zhFocus": ["方言"]
        },
        {
          "ja": "地方によって方言が違います。",
          "zh": "方言因地区而异。",
          "focus": ["方言"],
          "zhFocus": ["方言"]
        }
      ],
      "note_zh": "与「標準語（普通话；标准语）」相对。"
    },
    {
      "id": "n2-0584",
      "jlpt": "N2",
      "headword": "街角",
      "source_form": "街角",
      "variants": [
        "街角"
      ],
      "reading": "まちかど",
      "reading_variants": [
        "まちかど"
      ],
      "romaji": "machikado",
      "part_of_speech": "noun",
      "meaning_zh": "街角；街头",
      "kanji_readings": [
        {
          "form": "街角",
          "reading": "まちかど"
        }
      ],
      "examples": [
        {
          "ja": "街角に小さな花屋があります。",
          "zh": "街角有一家小花店。",
          "focus": ["街角"],
          "zhFocus": ["街角"]
        },
        {
          "ja": "街角で昔の友達に会いました。",
          "zh": "在街头碰见了老朋友。",
          "focus": ["街角"],
          "zhFocus": ["街头"]
        },
        {
          "ja": "テレビ局が街角でインタビューをしています。",
          "zh": "电视台在街头做采访。",
          "focus": ["街角"],
          "zhFocus": ["街头"]
        }
      ]
    },
    {
      "id": "n2-0585",
      "jlpt": "N2",
      "headword": "真っ先",
      "source_form": "真っ先",
      "variants": [
        "真っ先"
      ],
      "reading": "まっさき",
      "reading_variants": [
        "まっさき"
      ],
      "romaji": "massaki",
      "part_of_speech": "noun",
      "meaning_zh": "最先；首先",
      "kanji_readings": [
        {
          "form": "真っ先",
          "reading": "まっさき"
        }
      ],
      "examples": [
        {
          "ja": "家に帰ると、真っ先に手を洗います。",
          "zh": "一回到家，首先洗手。",
          "focus": ["真っ先"],
          "zhFocus": ["首先"]
        },
        {
          "ja": "彼が真っ先に手を挙げました。",
          "zh": "他第一个举了手。",
          "focus": ["真っ先"],
          "zhFocus": ["第一个"]
        },
        {
          "ja": "困った時、真っ先に母に相談しました。",
          "zh": "遇到困难时，最先找母亲商量了。",
          "focus": ["真っ先"],
          "zhFocus": ["最先"]
        }
      ],
      "note_zh": "多用「真っ先に」。"
    },
    {
      "id": "n2-0586",
      "jlpt": "N2",
      "headword": "無限",
      "source_form": "無限",
      "variants": [
        "無限"
      ],
      "reading": "むげん",
      "reading_variants": [
        "むげん"
      ],
      "romaji": "mugen",
      "part_of_speech": "na-adjective/noun",
      "meaning_zh": "无限",
      "kanji_readings": [
        {
          "form": "無限",
          "reading": "むげん"
        }
      ],
      "examples": [
        {
          "ja": "子供の可能性は無限です。",
          "zh": "孩子的可能性是无限的。",
          "focus": ["無限"],
          "zhFocus": ["无限"]
        },
        {
          "ja": "宇宙は無限に広がっています。",
          "zh": "宇宙无限延伸。",
          "focus": ["無限"],
          "zhFocus": ["无限"]
        },
        {
          "ja": "資源は無限ではありません。",
          "zh": "资源不是无限的。",
          "focus": ["無限"],
          "zhFocus": ["无限"]
        }
      ]
    },
    {
      "id": "n2-0587",
      "jlpt": "N2",
      "headword": "輸血",
      "source_form": "輸血",
      "variants": [
        "輸血"
      ],
      "reading": "ゆけつ",
      "reading_variants": [
        "ゆけつ"
      ],
      "romaji": "yuketsu",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "输血",
      "kanji_readings": [
        {
          "form": "輸血",
          "reading": "ゆけつ"
        }
      ],
      "examples": [
        {
          "ja": "手術の時に輸血が必要になりました。",
          "zh": "手术时需要输血。",
          "focus": ["輸血"],
          "zhFocus": ["输血"]
        },
        {
          "ja": "事故でけがをした人に輸血しました。",
          "zh": "给事故中受伤的人输了血。",
          "focus": ["輸血"],
          "zhFocus": ["输了血"]
        },
        {
          "ja": "輸血のための血液が足りません。",
          "zh": "输血用的血液不足。",
          "focus": ["輸血"],
          "zhFocus": ["输血"]
        }
      ]
    },
    {
      "id": "n2-0588",
      "jlpt": "N2",
      "headword": "両側",
      "source_form": "両側",
      "variants": [
        "両側"
      ],
      "reading": "りょうがわ",
      "reading_variants": [
        "りょうがわ"
      ],
      "romaji": "ryougawa",
      "part_of_speech": "noun",
      "meaning_zh": "两侧；两边",
      "kanji_readings": [
        {
          "form": "両側",
          "reading": "りょうがわ"
        }
      ],
      "examples": [
        {
          "ja": "道の両側に店が並んでいます。",
          "zh": "道路两边店铺林立。",
          "focus": ["両側"],
          "zhFocus": ["两边"]
        },
        {
          "ja": "川の両側に桜が咲いています。",
          "zh": "河的两岸樱花盛开。",
          "focus": ["両側"],
          "zhFocus": ["两岸"]
        },
        {
          "ja": "ドアの両側に人が立っています。",
          "zh": "门的两侧站着人。",
          "focus": ["両側"],
          "zhFocus": ["两侧"]
        }
      ]
    },
    {
      "id": "n2-0589",
      "jlpt": "N2",
      "headword": "漁師",
      "source_form": "漁師",
      "variants": [
        "漁師"
      ],
      "reading": "りょうし",
      "reading_variants": [
        "りょうし"
      ],
      "romaji": "ryoushi",
      "part_of_speech": "noun",
      "meaning_zh": "渔夫；渔民",
      "kanji_readings": [
        {
          "form": "漁師",
          "reading": "りょうし"
        }
      ],
      "examples": [
        {
          "ja": "祖父は漁師でした。",
          "zh": "祖父是渔民。",
          "focus": ["漁師"],
          "zhFocus": ["渔民"]
        },
        {
          "ja": "漁師が朝早く船を出しました。",
          "zh": "渔夫一大早就出船了。",
          "focus": ["漁師"],
          "zhFocus": ["渔夫"]
        },
        {
          "ja": "この町の漁師はとれた魚を市場で売ります。",
          "zh": "这个小镇的渔民把打到的鱼拿到市场上卖。",
          "focus": ["漁師"],
          "zhFocus": ["渔民"]
        }
      ]
    },
    {
      "id": "n2-0590",
      "jlpt": "N2",
      "headword": "脂",
      "source_form": "脂",
      "variants": [
        "脂"
      ],
      "reading": "あぶら",
      "reading_variants": [
        "あぶら"
      ],
      "romaji": "abura",
      "part_of_speech": "noun",
      "meaning_zh": "（动物的）脂肪；油脂",
      "kanji_readings": [
        {
          "form": "脂",
          "reading": "あぶら"
        }
      ],
      "examples": [
        {
          "ja": "この肉は脂が多いです。",
          "zh": "这块肉脂肪多。",
          "focus": ["脂"],
          "zhFocus": ["脂肪"]
        },
        {
          "ja": "脂の少ない魚を選びました。",
          "zh": "挑了脂肪少的鱼。",
          "focus": ["脂"],
          "zhFocus": ["脂肪"]
        },
        {
          "ja": "顔の脂をティッシュで取りました。",
          "zh": "用纸巾吸掉了脸上的油。",
          "focus": ["脂"],
          "zhFocus": ["油"]
        }
      ],
      "note_zh": "固态的动物油脂写「脂」，液态的油写「油」。"
    },
    {
      "id": "n2-0591",
      "jlpt": "N2",
      "headword": "案外",
      "source_form": "案外",
      "variants": [
        "案外"
      ],
      "reading": "あんがい",
      "reading_variants": [
        "あんがい"
      ],
      "romaji": "angai",
      "part_of_speech": "adverb/na-adjective",
      "meaning_zh": "意外；出乎意料",
      "kanji_readings": [
        {
          "form": "案外",
          "reading": "あんがい"
        }
      ],
      "examples": [
        {
          "ja": "試験は案外簡単でした。",
          "zh": "考试意外地简单。",
          "focus": ["案外"],
          "zhFocus": ["意外"]
        },
        {
          "ja": "初めての料理だったけど、案外おいしくできました。",
          "zh": "虽然是第一次做，却出乎意料地好吃。",
          "focus": ["案外"],
          "zhFocus": ["出乎意料"]
        },
        {
          "ja": "彼は案外いい人かもしれません。",
          "zh": "他说不定意外地是个好人。",
          "focus": ["案外"],
          "zhFocus": ["意外"]
        }
      ]
    },
    {
      "id": "n2-0592",
      "jlpt": "N2",
      "headword": "釜",
      "source_form": "釜",
      "variants": [
        "釜"
      ],
      "reading": "かま",
      "reading_variants": [
        "かま"
      ],
      "romaji": "kama",
      "part_of_speech": "noun",
      "meaning_zh": "锅；釜",
      "kanji_readings": [
        {
          "form": "釜",
          "reading": "かま"
        }
      ],
      "examples": [
        {
          "ja": "釜でご飯を炊きました。",
          "zh": "用锅煮了饭。",
          "focus": ["釜"],
          "zhFocus": ["锅"]
        },
        {
          "ja": "この店では大きな釜でうどんをゆでています。",
          "zh": "这家店用大锅煮乌冬面。",
          "focus": ["釜"],
          "zhFocus": ["锅"]
        },
        {
          "ja": "昔は釜で湯を沸かしていました。",
          "zh": "以前用釜烧水。",
          "focus": ["釜"],
          "zhFocus": ["釜"]
        }
      ]
    },
    {
      "id": "n2-0593",
      "jlpt": "N2",
      "headword": "歌謡",
      "source_form": "歌謡",
      "variants": [
        "歌謡"
      ],
      "reading": "かよう",
      "reading_variants": [
        "かよう"
      ],
      "romaji": "kayou",
      "part_of_speech": "noun",
      "meaning_zh": "歌谣；（流行）歌曲",
      "kanji_readings": [
        {
          "form": "歌謡",
          "reading": "かよう"
        }
      ],
      "examples": [
        {
          "ja": "父は昔の歌謡曲が好きです。",
          "zh": "父亲喜欢老的流行歌曲。",
          "focus": ["歌謡"],
          "zhFocus": ["歌曲"]
        },
        {
          "ja": "この歌謡曲は昔とても流行しました。",
          "zh": "这首歌曲以前非常流行。",
          "focus": ["歌謡"],
          "zhFocus": ["歌曲"]
        },
        {
          "ja": "この地方に伝わる歌謡を調べています。",
          "zh": "在研究这个地方流传的歌谣。",
          "focus": ["歌謡"],
          "zhFocus": ["歌谣"]
        }
      ],
      "note_zh": "多用「歌謡曲」。"
    },
    {
      "id": "n2-0594",
      "jlpt": "N2",
      "headword": "月末",
      "source_form": "月末",
      "variants": [
        "月末"
      ],
      "reading": "げつまつ",
      "reading_variants": [
        "げつまつ"
      ],
      "romaji": "getsumatsu",
      "part_of_speech": "noun",
      "meaning_zh": "月末；月底",
      "kanji_readings": [
        {
          "form": "月末",
          "reading": "げつまつ"
        }
      ],
      "examples": [
        {
          "ja": "家賃は月末に払います。",
          "zh": "房租在月底付。",
          "focus": ["月末"],
          "zhFocus": ["月底"]
        },
        {
          "ja": "月末は仕事が忙しいです。",
          "zh": "月末工作很忙。",
          "focus": ["月末"],
          "zhFocus": ["月末"]
        },
        {
          "ja": "レポートは今月の月末までに出してください。",
          "zh": "报告请在本月底前交。",
          "focus": ["月末"],
          "zhFocus": ["月底"]
        }
      ]
    },
    {
      "id": "n2-0595",
      "jlpt": "N2",
      "headword": "湿度",
      "source_form": "湿度",
      "variants": [
        "湿度"
      ],
      "reading": "しつど",
      "reading_variants": [
        "しつど"
      ],
      "romaji": "shitsudo",
      "part_of_speech": "noun",
      "meaning_zh": "湿度",
      "kanji_readings": [
        {
          "form": "湿度",
          "reading": "しつど"
        }
      ],
      "examples": [
        {
          "ja": "今日は湿度が高くて蒸し暑いです。",
          "zh": "今天湿度高，闷热。",
          "focus": ["湿度"],
          "zhFocus": ["湿度"]
        },
        {
          "ja": "冬は湿度が低くなります。",
          "zh": "冬天湿度变低。",
          "focus": ["湿度"],
          "zhFocus": ["湿度"]
        },
        {
          "ja": "部屋の湿度を測りました。",
          "zh": "测了房间的湿度。",
          "focus": ["湿度"],
          "zhFocus": ["湿度"]
        }
      ]
    },
    {
      "id": "n2-0596",
      "jlpt": "N2",
      "headword": "乗車",
      "source_form": "乗車",
      "variants": [
        "乗車"
      ],
      "reading": "じょうしゃ",
      "reading_variants": [
        "じょうしゃ"
      ],
      "romaji": "jousha",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "乘车；上车",
      "kanji_readings": [
        {
          "form": "乗車",
          "reading": "じょうしゃ"
        }
      ],
      "examples": [
        {
          "ja": "切符を買ってから乗車してください。",
          "zh": "请买票后上车。",
          "focus": ["乗車"],
          "zhFocus": ["上车"]
        },
        {
          "ja": "乗車の際は足元に気をつけてください。",
          "zh": "上车时请注意脚下。",
          "focus": ["乗車"],
          "zhFocus": ["上车"]
        },
        {
          "ja": "乗車してから切符を買うこともできます。",
          "zh": "也可以上车后再买票。",
          "focus": ["乗車"],
          "zhFocus": ["上车"]
        }
      ],
      "note_zh": "与「下車（下车）」相对。"
    },
    {
      "id": "n2-0597",
      "jlpt": "N2",
      "headword": "人命",
      "source_form": "人命",
      "variants": [
        "人命"
      ],
      "reading": "じんめい",
      "reading_variants": [
        "じんめい"
      ],
      "romaji": "jinmei",
      "part_of_speech": "noun",
      "meaning_zh": "人命；生命",
      "kanji_readings": [
        {
          "form": "人命",
          "reading": "じんめい"
        }
      ],
      "examples": [
        {
          "ja": "人命を守ることが一番大切です。",
          "zh": "保护人命是最重要的。",
          "focus": ["人命"],
          "zhFocus": ["人命"]
        },
        {
          "ja": "この事故で多くの人命が失われました。",
          "zh": "这次事故夺去了许多人的生命。",
          "focus": ["人命"],
          "zhFocus": ["生命"]
        },
        {
          "ja": "医者は人命にかかわる仕事です。",
          "zh": "医生是关乎人命的工作。",
          "focus": ["人命"],
          "zhFocus": ["人命"]
        }
      ]
    },
    {
      "id": "n2-0598",
      "jlpt": "N2",
      "headword": "水平",
      "source_form": "水平",
      "variants": [
        "水平"
      ],
      "reading": "すいへい",
      "reading_variants": [
        "すいへい"
      ],
      "romaji": "suihei",
      "part_of_speech": "na-adjective/noun",
      "meaning_zh": "水平",
      "kanji_readings": [
        {
          "form": "水平",
          "reading": "すいへい"
        }
      ],
      "examples": [
        {
          "ja": "棚が水平になっているか確かめました。",
          "zh": "确认了架子是否是水平的。",
          "focus": ["水平"],
          "zhFocus": ["水平"]
        },
        {
          "ja": "腕を水平に上げてください。",
          "zh": "请把胳膊水平抬起来。",
          "focus": ["水平"],
          "zhFocus": ["水平"]
        },
        {
          "ja": "海の向こうに水平線が見えます。",
          "zh": "能看到大海那边的海平线。",
          "focus": ["水平"]
        }
      ],
      "note_zh": "与「垂直（垂直）」相对。"
    },
    {
      "id": "n2-0599",
      "jlpt": "N2",
      "headword": "西暦",
      "source_form": "西暦",
      "variants": [
        "西暦"
      ],
      "reading": "せいれき",
      "reading_variants": [
        "せいれき"
      ],
      "romaji": "seireki",
      "part_of_speech": "noun",
      "meaning_zh": "公历；公元",
      "kanji_readings": [
        {
          "form": "西暦",
          "reading": "せいれき"
        }
      ],
      "examples": [
        {
          "ja": "生まれた年を西暦で書いてください。",
          "zh": "请用公历写出生年份。",
          "focus": ["西暦"],
          "zhFocus": ["公历"]
        },
        {
          "ja": "日本では西暦と元号の両方を使います。",
          "zh": "日本既用公历也用年号。",
          "focus": ["西暦"],
          "zhFocus": ["公历"]
        },
        {
          "ja": "このお寺は西暦の何年に建てられましたか。",
          "zh": "这座寺庙是公元哪一年建的？",
          "focus": ["西暦"],
          "zhFocus": ["公元"]
        }
      ]
    },
    {
      "id": "n2-0600",
      "jlpt": "N2",
      "headword": "接続",
      "source_form": "接続",
      "variants": [
        "接続"
      ],
      "reading": "せつぞく",
      "reading_variants": [
        "せつぞく"
      ],
      "romaji": "setsuzoku",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "连接；（交通的）衔接",
      "kanji_readings": [
        {
          "form": "接続",
          "reading": "せつぞく"
        }
      ],
      "examples": [
        {
          "ja": "パソコンをインターネットに接続しました。",
          "zh": "把电脑连上了互联网。",
          "focus": ["接続"],
          "zhFocus": ["连"]
        },
        {
          "ja": "電車の接続が悪くて、時間がかかりました。",
          "zh": "电车的衔接不好，花了不少时间。",
          "focus": ["接続"],
          "zhFocus": ["衔接"]
        },
        {
          "ja": "この駅でバスに接続しています。",
          "zh": "在这个站可以接驳公交车。",
          "focus": ["接続"],
          "zhFocus": ["接驳"]
        }
      ]
    },
    {
      "id": "n2-0601",
      "jlpt": "N2",
      "headword": "送料",
      "source_form": "送料",
      "variants": [
        "送料"
      ],
      "reading": "そうりょう",
      "reading_variants": [
        "そうりょう"
      ],
      "romaji": "souryou",
      "part_of_speech": "noun",
      "meaning_zh": "运费；邮费",
      "kanji_readings": [
        {
          "form": "送料",
          "reading": "そうりょう"
        }
      ],
      "examples": [
        {
          "ja": "送料はいくらかかりますか。",
          "zh": "运费要多少钱？",
          "focus": ["送料"],
          "zhFocus": ["运费"]
        },
        {
          "ja": "このお店は送料が無料です。",
          "zh": "这家店免运费。",
          "focus": ["送料"],
          "zhFocus": ["运费"]
        },
        {
          "ja": "海外に送ると、送料が高いです。",
          "zh": "寄到国外的话，邮费很贵。",
          "focus": ["送料"],
          "zhFocus": ["邮费"]
        }
      ]
    },
    {
      "id": "n2-0602",
      "jlpt": "N2",
      "headword": "測量",
      "source_form": "測量",
      "variants": [
        "測量"
      ],
      "reading": "そくりょう",
      "reading_variants": [
        "そくりょう"
      ],
      "romaji": "sokuryou",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "测量；勘测",
      "kanji_readings": [
        {
          "form": "測量",
          "reading": "そくりょう"
        }
      ],
      "examples": [
        {
          "ja": "土地の測量をしています。",
          "zh": "正在勘测土地。",
          "focus": ["測量"],
          "zhFocus": ["勘测"]
        },
        {
          "ja": "山の高さを測量しました。",
          "zh": "测量了山的高度。",
          "focus": ["測量"],
          "zhFocus": ["测量"]
        },
        {
          "ja": "道路を作る前に測量が行われます。",
          "zh": "修路之前要进行测量。",
          "focus": ["測量"],
          "zhFocus": ["测量"]
        }
      ]
    },
    {
      "id": "n2-0603",
      "jlpt": "N2",
      "headword": "抽象",
      "source_form": "抽象",
      "variants": [
        "抽象"
      ],
      "reading": "ちゅうしょう",
      "reading_variants": [
        "ちゅうしょう"
      ],
      "romaji": "chuushou",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "抽象",
      "kanji_readings": [
        {
          "form": "抽象",
          "reading": "ちゅうしょう"
        }
      ],
      "examples": [
        {
          "ja": "彼の説明は抽象的で分かりにくいです。",
          "zh": "他的说明很抽象，不好懂。",
          "focus": ["抽象"],
          "zhFocus": ["抽象"]
        },
        {
          "ja": "もっと具体的に話してください。抽象的な話は苦手です。",
          "zh": "请说得更具体些。我不擅长听抽象的话。",
          "focus": ["抽象"],
          "zhFocus": ["抽象"]
        },
        {
          "ja": "この画家は抽象画で有名です。",
          "zh": "这位画家以抽象画闻名。",
          "focus": ["抽象"],
          "zhFocus": ["抽象"]
        }
      ],
      "note_zh": "与「具体（具体）」相对；多用「抽象的」。"
    },
    {
      "id": "n2-0604",
      "jlpt": "N2",
      "headword": "長所",
      "source_form": "長所",
      "variants": [
        "長所"
      ],
      "reading": "ちょうしょ",
      "reading_variants": [
        "ちょうしょ"
      ],
      "romaji": "chousho",
      "part_of_speech": "noun",
      "meaning_zh": "长处；优点",
      "kanji_readings": [
        {
          "form": "長所",
          "reading": "ちょうしょ"
        }
      ],
      "examples": [
        {
          "ja": "あなたの長所は何ですか。",
          "zh": "你的长处是什么？",
          "focus": ["長所"],
          "zhFocus": ["长处"]
        },
        {
          "ja": "彼の長所は明るいところです。",
          "zh": "他的优点是开朗。",
          "focus": ["長所"],
          "zhFocus": ["优点"]
        },
        {
          "ja": "誰にでも長所と短所があります。",
          "zh": "谁都有优点和缺点。",
          "focus": ["長所"],
          "zhFocus": ["优点"]
        }
      ],
      "note_zh": "与「短所（缺点）」相对。"
    },
    {
      "id": "n2-0605",
      "jlpt": "N2",
      "headword": "調節",
      "source_form": "調節",
      "variants": [
        "調節"
      ],
      "reading": "ちょうせつ",
      "reading_variants": [
        "ちょうせつ"
      ],
      "romaji": "chousetsu",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "调节；调整",
      "kanji_readings": [
        {
          "form": "調節",
          "reading": "ちょうせつ"
        }
      ],
      "examples": [
        {
          "ja": "エアコンで部屋の温度を調節します。",
          "zh": "用空调调节室温。",
          "focus": ["調節"],
          "zhFocus": ["调节"]
        },
        {
          "ja": "いすの高さを調節してください。",
          "zh": "请调整一下椅子的高度。",
          "focus": ["調節"],
          "zhFocus": ["调整"]
        },
        {
          "ja": "音の大きさを調節しました。",
          "zh": "调了音量。",
          "focus": ["調節"],
          "zhFocus": ["调"]
        }
      ]
    },
    {
      "id": "n2-0606",
      "jlpt": "N2",
      "headword": "通帳",
      "source_form": "通帳",
      "variants": [
        "通帳"
      ],
      "reading": "つうちょう",
      "reading_variants": [
        "つうちょう"
      ],
      "romaji": "tsuuchou",
      "part_of_speech": "noun",
      "meaning_zh": "存折",
      "kanji_readings": [
        {
          "form": "通帳",
          "reading": "つうちょう"
        }
      ],
      "examples": [
        {
          "ja": "銀行で通帳を作りました。",
          "zh": "在银行办了存折。",
          "focus": ["通帳"],
          "zhFocus": ["存折"]
        },
        {
          "ja": "通帳を見て、残高を確認しました。",
          "zh": "看存折确认了余额。",
          "focus": ["通帳"],
          "zhFocus": ["存折"]
        },
        {
          "ja": "通帳と印鑑を持ってきてください。",
          "zh": "请带上存折和印章。",
          "focus": ["通帳"],
          "zhFocus": ["存折"]
        }
      ]
    },
    {
      "id": "n2-0607",
      "jlpt": "N2",
      "headword": "転々",
      "source_form": "転々",
      "variants": [
        "転々"
      ],
      "reading": "てんてん",
      "reading_variants": [
        "てんてん"
      ],
      "romaji": "tenten",
      "part_of_speech": "adverb",
      "meaning_zh": "辗转；（到处）转移",
      "kanji_readings": [
        {
          "form": "転々",
          "reading": "てんてん"
        }
      ],
      "examples": [
        {
          "ja": "彼は仕事を転々としています。",
          "zh": "他工作换来换去。",
          "focus": ["転々"],
          "zhFocus": ["换来换去"]
        },
        {
          "ja": "子供のころ、全国を転々としました。",
          "zh": "小时候在全国各地辗转。",
          "focus": ["転々"],
          "zhFocus": ["辗转"]
        },
        {
          "ja": "ボールが坂を転々と転がっていきました。",
          "zh": "球顺着坡一路滚了下去。",
          "focus": ["転々"],
          "zhFocus": ["一路"]
        }
      ],
      "note_zh": "多用「転々とする」。"
    },
    {
      "id": "n2-0608",
      "jlpt": "N2",
      "headword": "電流",
      "source_form": "電流",
      "variants": [
        "電流"
      ],
      "reading": "でんりゅう",
      "reading_variants": [
        "でんりゅう"
      ],
      "romaji": "denryuu",
      "part_of_speech": "noun",
      "meaning_zh": "电流",
      "kanji_readings": [
        {
          "form": "電流",
          "reading": "でんりゅう"
        }
      ],
      "examples": [
        {
          "ja": "電線に電流が流れています。",
          "zh": "电线里有电流通过。",
          "focus": ["電流"],
          "zhFocus": ["电流"]
        },
        {
          "ja": "電流の強さを測りました。",
          "zh": "测量了电流的强度。",
          "focus": ["電流"],
          "zhFocus": ["电流"]
        },
        {
          "ja": "ぬれた手で触ると、電流が流れて危険です。",
          "zh": "用湿手去碰会触电，很危险。",
          "focus": ["電流"],
          "zhFocus": ["电"]
        }
      ]
    },
    {
      "id": "n2-0609",
      "jlpt": "N2",
      "headword": "灯油",
      "source_form": "灯油",
      "variants": [
        "灯油"
      ],
      "reading": "とうゆ",
      "reading_variants": [
        "とうゆ"
      ],
      "romaji": "touyu",
      "part_of_speech": "noun",
      "meaning_zh": "灯油；煤油",
      "kanji_readings": [
        {
          "form": "灯油",
          "reading": "とうゆ"
        }
      ],
      "examples": [
        {
          "ja": "冬は灯油のストーブを使います。",
          "zh": "冬天用煤油炉。",
          "focus": ["灯油"],
          "zhFocus": ["煤油"]
        },
        {
          "ja": "灯油が切れたので、買いに行きました。",
          "zh": "煤油用完了，去买了。",
          "focus": ["灯油"],
          "zhFocus": ["煤油"]
        },
        {
          "ja": "灯油の値段が上がっています。",
          "zh": "煤油的价格在上涨。",
          "focus": ["灯油"],
          "zhFocus": ["煤油"]
        }
      ]
    },
    {
      "id": "n2-0610",
      "jlpt": "N2",
      "headword": "斜め",
      "source_form": "斜め",
      "variants": [
        "斜め"
      ],
      "reading": "ななめ",
      "reading_variants": [
        "ななめ"
      ],
      "romaji": "naname",
      "part_of_speech": "na-adjective/noun",
      "meaning_zh": "斜；倾斜；（心情）不好",
      "senses_zh": [
        "斜；倾斜",
        "（心情）不好"
      ],
      "kanji_readings": [
        {
          "form": "斜め",
          "reading": "ななめ"
        }
      ],
      "examples": [
        {
          "ja": "絵が斜めになっています。",
          "zh": "画挂斜了。",
          "focus": ["斜め"],
          "zhFocus": ["斜"]
        },
        {
          "ja": "道を斜めに渡ってはいけません。",
          "zh": "不能斜着横穿马路。",
          "focus": ["斜め"],
          "zhFocus": ["斜"]
        },
        {
          "ja": "今日は社長のご機嫌が斜めです。",
          "zh": "今天社长心情不好。",
          "focus": ["斜め"],
          "zhFocus": ["不好"]
        }
      ]
    },
    {
      "id": "n2-0611",
      "jlpt": "N2",
      "headword": "花嫁",
      "source_form": "花嫁",
      "variants": [
        "花嫁"
      ],
      "reading": "はなよめ",
      "reading_variants": [
        "はなよめ"
      ],
      "romaji": "hanayome",
      "part_of_speech": "noun",
      "meaning_zh": "新娘",
      "kanji_readings": [
        {
          "form": "花嫁",
          "reading": "はなよめ"
        }
      ],
      "examples": [
        {
          "ja": "花嫁の白いドレスがきれいです。",
          "zh": "新娘的白色婚纱很漂亮。",
          "focus": ["花嫁"],
          "zhFocus": ["新娘"]
        },
        {
          "ja": "花嫁が父親と一緒に入場しました。",
          "zh": "新娘和父亲一起入场了。",
          "focus": ["花嫁"],
          "zhFocus": ["新娘"]
        },
        {
          "ja": "友達の花嫁姿に感動しました。",
          "zh": "朋友穿婚纱的样子让我很感动。",
          "focus": ["花嫁"]
        }
      ],
      "note_zh": "新郎是「花婿」。"
    },
    {
      "id": "n2-0612",
      "jlpt": "N2",
      "headword": "標識",
      "source_form": "標識",
      "variants": [
        "標識"
      ],
      "reading": "ひょうしき",
      "reading_variants": [
        "ひょうしき"
      ],
      "romaji": "hyoushiki",
      "part_of_speech": "noun",
      "meaning_zh": "标志；标识",
      "kanji_readings": [
        {
          "form": "標識",
          "reading": "ひょうしき"
        }
      ],
      "examples": [
        {
          "ja": "道路の標識をよく見て運転してください。",
          "zh": "开车时请注意看道路标志。",
          "focus": ["標識"],
          "zhFocus": ["标志"]
        },
        {
          "ja": "この標識は「止まれ」という意味です。",
          "zh": "这个标志的意思是“停车”。",
          "focus": ["標識"],
          "zhFocus": ["标志"]
        },
        {
          "ja": "駅までの標識がなくて迷いました。",
          "zh": "没有去车站的标识，迷路了。",
          "focus": ["標識"],
          "zhFocus": ["标识"]
        }
      ]
    },
    {
      "id": "n2-0613",
      "jlpt": "N2",
      "headword": "分解",
      "source_form": "分解",
      "variants": [
        "分解"
      ],
      "reading": "ぶんかい",
      "reading_variants": [
        "ぶんかい"
      ],
      "romaji": "bunkai",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "分解；拆开",
      "kanji_readings": [
        {
          "form": "分解",
          "reading": "ぶんかい"
        }
      ],
      "examples": [
        {
          "ja": "時計を分解して、中を見ました。",
          "zh": "把钟表拆开看了看里面。",
          "focus": ["分解"],
          "zhFocus": ["拆开"]
        },
        {
          "ja": "水を分解すると、水素と酸素になります。",
          "zh": "水分解后会变成氢和氧。",
          "focus": ["分解"],
          "zhFocus": ["分解"]
        },
        {
          "ja": "自転車を分解して車に積みました。",
          "zh": "把自行车拆开装上了车。",
          "focus": ["分解"],
          "zhFocus": ["拆开"]
        }
      ]
    },
    {
      "id": "n2-0614",
      "jlpt": "N2",
      "headword": "法則",
      "source_form": "法則",
      "variants": [
        "法則"
      ],
      "reading": "ほうそく",
      "reading_variants": [
        "ほうそく"
      ],
      "romaji": "housoku",
      "part_of_speech": "noun",
      "meaning_zh": "法则；规律",
      "kanji_readings": [
        {
          "form": "法則",
          "reading": "ほうそく"
        }
      ],
      "examples": [
        {
          "ja": "自然の法則には逆らえません。",
          "zh": "违背不了自然规律。",
          "focus": ["法則"],
          "zhFocus": ["规律"]
        },
        {
          "ja": "物理の法則を勉強しています。",
          "zh": "在学习物理定律。",
          "focus": ["法則"],
          "zhFocus": ["定律"]
        },
        {
          "ja": "売れる商品にはある法則があります。",
          "zh": "畅销的商品有某种规律。",
          "focus": ["法則"],
          "zhFocus": ["规律"]
        }
      ]
    },
    {
      "id": "n2-0615",
      "jlpt": "N2",
      "headword": "真っ白",
      "source_form": "真っ白",
      "variants": [
        "真っ白"
      ],
      "reading": "まっしろ",
      "reading_variants": [
        "まっしろ"
      ],
      "romaji": "masshiro",
      "part_of_speech": "na-adjective/noun",
      "meaning_zh": "雪白；纯白；（脑子）一片空白",
      "senses_zh": [
        "雪白；纯白",
        "（脑子）一片空白"
      ],
      "kanji_readings": [
        {
          "form": "真っ白",
          "reading": "まっしろ"
        }
      ],
      "examples": [
        {
          "ja": "雪で町が真っ白になりました。",
          "zh": "城镇被雪染得一片雪白。",
          "focus": ["真っ白"],
          "zhFocus": ["雪白"]
        },
        {
          "ja": "真っ白なシャツを着ています。",
          "zh": "穿着纯白的衬衫。",
          "focus": ["真っ白"],
          "zhFocus": ["纯白"]
        },
        {
          "ja": "緊張して頭が真っ白になりました。",
          "zh": "紧张得脑子一片空白。",
          "focus": ["真っ白"],
          "zhFocus": ["一片空白"]
        }
      ]
    },
    {
      "id": "n2-0616",
      "jlpt": "N2",
      "headword": "遊園地",
      "source_form": "遊園地",
      "variants": [
        "遊園地"
      ],
      "reading": "ゆうえんち",
      "reading_variants": [
        "ゆうえんち"
      ],
      "romaji": "yuuenchi",
      "part_of_speech": "noun",
      "meaning_zh": "游乐园",
      "kanji_readings": [
        {
          "form": "遊園地",
          "reading": "ゆうえんち"
        }
      ],
      "examples": [
        {
          "ja": "日曜日に家族で遊園地へ行きました。",
          "zh": "星期天全家去了游乐园。",
          "focus": ["遊園地"],
          "zhFocus": ["游乐园"]
        },
        {
          "ja": "遊園地で観覧車に乗りました。",
          "zh": "在游乐园坐了摩天轮。",
          "focus": ["遊園地"],
          "zhFocus": ["游乐园"]
        },
        {
          "ja": "子供たちは遊園地が大好きです。",
          "zh": "孩子们最喜欢游乐园。",
          "focus": ["遊園地"],
          "zhFocus": ["游乐园"]
        }
      ]
    },
    {
      "id": "n2-0617",
      "jlpt": "N2",
      "headword": "余る",
      "source_form": "余る",
      "variants": [
        "余る"
      ],
      "reading": "あまる",
      "reading_variants": [
        "あまる"
      ],
      "romaji": "amaru",
      "part_of_speech": "verb",
      "meaning_zh": "剩余；剩下；超出（能力）",
      "senses_zh": [
        "剩余；剩下",
        "超出（能力）"
      ],
      "kanji_readings": [
        {
          "form": "余る",
          "reading": "あまる"
        }
      ],
      "examples": [
        {
          "ja": "料理が余ったので、明日食べます。",
          "zh": "菜剩下了，明天吃。",
          "focus": ["余っ"],
          "zhFocus": ["剩下"]
        },
        {
          "ja": "時間が余ったら、もう一度見直してください。",
          "zh": "如果时间有剩余，请再检查一遍。",
          "focus": ["余っ"],
          "zhFocus": ["剩余"]
        },
        {
          "ja": "この仕事は私の手に余ります。",
          "zh": "这项工作我应付不了。",
          "focus": ["余り"],
          "zhFocus": ["应付不了"]
        }
      ],
      "note_zh": "「手に余る」是“力所不及、应付不了”的意思。"
    },
    {
      "id": "n2-0618",
      "jlpt": "N2",
      "headword": "恨み",
      "source_form": "恨み",
      "variants": [
        "恨み"
      ],
      "reading": "うらみ",
      "reading_variants": [
        "うらみ"
      ],
      "romaji": "urami",
      "part_of_speech": "noun",
      "meaning_zh": "怨恨；仇恨",
      "kanji_readings": [
        {
          "form": "恨み",
          "reading": "うらみ"
        }
      ],
      "examples": [
        {
          "ja": "彼に恨みはありません。",
          "zh": "我对他没有怨恨。",
          "focus": ["恨み"],
          "zhFocus": ["怨恨"]
        },
        {
          "ja": "昔の恨みをまだ忘れていません。",
          "zh": "还没有忘记过去的仇恨。",
          "focus": ["恨み"],
          "zhFocus": ["仇恨"]
        },
        {
          "ja": "人の恨みを買うようなことはしないでください。",
          "zh": "请不要做招人怨恨的事。",
          "focus": ["恨み"],
          "zhFocus": ["怨恨"]
        }
      ]
    },
    {
      "id": "n2-0619",
      "jlpt": "N2",
      "headword": "運河",
      "source_form": "運河",
      "variants": [
        "運河"
      ],
      "reading": "うんが",
      "reading_variants": [
        "うんが"
      ],
      "romaji": "unga",
      "part_of_speech": "noun",
      "meaning_zh": "运河",
      "kanji_readings": [
        {
          "form": "運河",
          "reading": "うんが"
        }
      ],
      "examples": [
        {
          "ja": "この町には運河が流れています。",
          "zh": "这个城镇有运河流过。",
          "focus": ["運河"],
          "zhFocus": ["运河"]
        },
        {
          "ja": "運河に沿って散歩しました。",
          "zh": "沿着运河散了步。",
          "focus": ["運河"],
          "zhFocus": ["运河"]
        },
        {
          "ja": "昔は運河を使って荷物を運びました。",
          "zh": "以前用运河运货。",
          "focus": ["運河"],
          "zhFocus": ["运河"]
        }
      ]
    },
    {
      "id": "n2-0620",
      "jlpt": "N2",
      "headword": "絵の具",
      "source_form": "絵の具",
      "variants": [
        "絵の具"
      ],
      "reading": "えのぐ",
      "reading_variants": [
        "えのぐ"
      ],
      "romaji": "enogu",
      "part_of_speech": "noun",
      "meaning_zh": "颜料",
      "kanji_readings": [
        {
          "form": "絵の具",
          "reading": "えのぐ"
        }
      ],
      "examples": [
        {
          "ja": "絵の具で空を青く塗りました。",
          "zh": "用颜料把天空涂成了蓝色。",
          "focus": ["絵の具"],
          "zhFocus": ["颜料"]
        },
        {
          "ja": "新しい絵の具を買いました。",
          "zh": "买了新颜料。",
          "focus": ["絵の具"],
          "zhFocus": ["颜料"]
        },
        {
          "ja": "服に絵の具がついてしまいました。",
          "zh": "衣服上沾上了颜料。",
          "focus": ["絵の具"],
          "zhFocus": ["颜料"]
        }
      ]
    },
    {
      "id": "n2-0621",
      "jlpt": "N2",
      "headword": "驚かす",
      "source_form": "驚かす",
      "variants": [
        "驚かす"
      ],
      "reading": "おどろかす",
      "reading_variants": [
        "おどろかす"
      ],
      "romaji": "odorokasu",
      "part_of_speech": "verb",
      "meaning_zh": "使吃惊；使震惊",
      "kanji_readings": [
        {
          "form": "驚かす",
          "reading": "おどろかす"
        }
      ],
      "examples": [
        {
          "ja": "後ろから友達を驚かしました。",
          "zh": "从后面吓了朋友一跳。",
          "focus": ["驚かし"],
          "zhFocus": ["吓"]
        },
        {
          "ja": "そのニュースは世界を驚かしました。",
          "zh": "那条新闻震惊了世界。",
          "focus": ["驚かし"],
          "zhFocus": ["震惊"]
        },
        {
          "ja": "驚かさないでください。",
          "zh": "别吓我。",
          "focus": ["驚かさ"],
          "zhFocus": ["吓"]
        }
      ],
      "note_zh": "他动词；自动词是「驚く（吃惊）」。"
    },
    {
      "id": "n2-0622",
      "jlpt": "N2",
      "headword": "親指",
      "source_form": "親指",
      "variants": [
        "親指"
      ],
      "reading": "おやゆび",
      "reading_variants": [
        "おやゆび"
      ],
      "romaji": "oyayubi",
      "part_of_speech": "noun",
      "meaning_zh": "大拇指",
      "kanji_readings": [
        {
          "form": "親指",
          "reading": "おやゆび"
        }
      ],
      "examples": [
        {
          "ja": "親指をけがしました。",
          "zh": "大拇指受伤了。",
          "focus": ["親指"],
          "zhFocus": ["大拇指"]
        },
        {
          "ja": "彼は親指を立てて、「いいね」と言いました。",
          "zh": "他竖起大拇指说“不错”。",
          "focus": ["親指"],
          "zhFocus": ["大拇指"]
        },
        {
          "ja": "スマホを親指で操作します。",
          "zh": "用大拇指操作手机。",
          "focus": ["親指"],
          "zhFocus": ["大拇指"]
        }
      ]
    },
    {
      "id": "n2-0623",
      "jlpt": "N2",
      "headword": "解答",
      "source_form": "解答",
      "variants": [
        "解答"
      ],
      "reading": "かいとう",
      "reading_variants": [
        "かいとう"
      ],
      "romaji": "kaitou",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "解答；（题目的）答案",
      "kanji_readings": [
        {
          "form": "解答",
          "reading": "かいとう"
        }
      ],
      "examples": [
        {
          "ja": "問題の解答を書いてください。",
          "zh": "请写出问题的答案。",
          "focus": ["解答"],
          "zhFocus": ["答案"]
        },
        {
          "ja": "テストの解答を配りました。",
          "zh": "发了考试的答案。",
          "focus": ["解答"],
          "zhFocus": ["答案"]
        },
        {
          "ja": "すべての問題に解答しました。",
          "zh": "解答了所有的题目。",
          "focus": ["解答"],
          "zhFocus": ["解答"]
        }
      ],
      "note_zh": "指对题目、问题的解答；回答询问一般用「回答」。"
    },
    {
      "id": "n2-0624",
      "jlpt": "N2",
      "headword": "各自",
      "source_form": "各自",
      "variants": [
        "各自"
      ],
      "reading": "かくじ",
      "reading_variants": [
        "かくじ"
      ],
      "romaji": "kakuji",
      "part_of_speech": "noun",
      "meaning_zh": "各自；每个人",
      "kanji_readings": [
        {
          "form": "各自",
          "reading": "かくじ"
        }
      ],
      "examples": [
        {
          "ja": "弁当は各自で用意してください。",
          "zh": "便当请各自准备。",
          "focus": ["各自"],
          "zhFocus": ["各自"]
        },
        {
          "ja": "各自の意見を発表してください。",
          "zh": "请每个人发表自己的意见。",
          "focus": ["各自"],
          "zhFocus": ["每个人"]
        },
        {
          "ja": "ごみは各自で持ち帰りましょう。",
          "zh": "垃圾请各自带回去吧。",
          "focus": ["各自"],
          "zhFocus": ["各自"]
        }
      ]
    },
    {
      "id": "n2-0625",
      "jlpt": "N2",
      "headword": "口紅",
      "source_form": "口紅",
      "variants": [
        "口紅"
      ],
      "reading": "くちべに",
      "reading_variants": [
        "くちべに"
      ],
      "romaji": "kuchibeni",
      "part_of_speech": "noun",
      "meaning_zh": "口红",
      "kanji_readings": [
        {
          "form": "口紅",
          "reading": "くちべに"
        }
      ],
      "examples": [
        {
          "ja": "赤い口紅をつけました。",
          "zh": "涂了红色的口红。",
          "focus": ["口紅"],
          "zhFocus": ["口红"]
        },
        {
          "ja": "カップに口紅がついています。",
          "zh": "杯子上沾着口红。",
          "focus": ["口紅"],
          "zhFocus": ["口红"]
        },
        {
          "ja": "母の誕生日に口紅を贈りました。",
          "zh": "母亲生日时送了口红。",
          "focus": ["口紅"],
          "zhFocus": ["口红"]
        }
      ]
    },
    {
      "id": "n2-0626",
      "jlpt": "N2",
      "headword": "香水",
      "source_form": "香水",
      "variants": [
        "香水"
      ],
      "reading": "こうすい",
      "reading_variants": [
        "こうすい"
      ],
      "romaji": "kousui",
      "part_of_speech": "noun",
      "meaning_zh": "香水",
      "kanji_readings": [
        {
          "form": "香水",
          "reading": "こうすい"
        }
      ],
      "examples": [
        {
          "ja": "彼女はいい香水をつけています。",
          "zh": "她喷了好闻的香水。",
          "focus": ["香水"],
          "zhFocus": ["香水"]
        },
        {
          "ja": "香水のにおいが強すぎます。",
          "zh": "香水的气味太浓了。",
          "focus": ["香水"],
          "zhFocus": ["香水"]
        },
        {
          "ja": "空港で香水を買いました。",
          "zh": "在机场买了香水。",
          "focus": ["香水"],
          "zhFocus": ["香水"]
        }
      ]
    },
    {
      "id": "n2-0627",
      "jlpt": "N2",
      "headword": "紅葉",
      "source_form": "紅葉",
      "variants": [
        "紅葉"
      ],
      "reading": "こうよう",
      "reading_variants": [
        "こうよう"
      ],
      "romaji": "kouyou",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "红叶；（树叶）变红",
      "kanji_readings": [
        {
          "form": "紅葉",
          "reading": "こうよう"
        }
      ],
      "examples": [
        {
          "ja": "秋になると、山の木が紅葉します。",
          "zh": "一到秋天，山上的树叶就变红了。",
          "focus": ["紅葉"],
          "zhFocus": ["变红"]
        },
        {
          "ja": "京都へ紅葉を見に行きました。",
          "zh": "去京都看了红叶。",
          "focus": ["紅葉"],
          "zhFocus": ["红叶"]
        },
        {
          "ja": "今年は紅葉が遅いです。",
          "zh": "今年红叶来得晚。",
          "focus": ["紅葉"],
          "zhFocus": ["红叶"]
        }
      ],
      "note_zh": "同样写作「紅葉」，读「もみじ」时指枫树或红叶。"
    },
    {
      "id": "n2-0628",
      "jlpt": "N2",
      "headword": "削除",
      "source_form": "削除",
      "variants": [
        "削除"
      ],
      "reading": "さくじょ",
      "reading_variants": [
        "さくじょ"
      ],
      "romaji": "sakujo",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "删除",
      "kanji_readings": [
        {
          "form": "削除",
          "reading": "さくじょ"
        }
      ],
      "examples": [
        {
          "ja": "間違えて写真を削除してしまいました。",
          "zh": "不小心删掉了照片。",
          "focus": ["削除"],
          "zhFocus": ["删"]
        },
        {
          "ja": "不要なファイルを削除してください。",
          "zh": "请删除不需要的文件。",
          "focus": ["削除"],
          "zhFocus": ["删除"]
        },
        {
          "ja": "この部分は削除されました。",
          "zh": "这一部分被删除了。",
          "focus": ["削除"],
          "zhFocus": ["删除"]
        }
      ]
    },
    {
      "id": "n2-0629",
      "jlpt": "N2",
      "headword": "持参",
      "source_form": "持参",
      "variants": [
        "持参"
      ],
      "reading": "じさん",
      "reading_variants": [
        "じさん"
      ],
      "romaji": "jisan",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "带来；带去；自带",
      "kanji_readings": [
        {
          "form": "持参",
          "reading": "じさん"
        }
      ],
      "examples": [
        {
          "ja": "ペンと紙を持参してください。",
          "zh": "请自带笔和纸。",
          "focus": ["持参"],
          "zhFocus": ["自带"]
        },
        {
          "ja": "お弁当を持参しました。",
          "zh": "自带了便当。",
          "focus": ["持参"],
          "zhFocus": ["自带"]
        },
        {
          "ja": "申し込みには写真の持参が必要です。",
          "zh": "报名需要带照片。",
          "focus": ["持参"],
          "zhFocus": ["带"]
        }
      ]
    },
    {
      "id": "n2-0630",
      "jlpt": "N2",
      "headword": "締め切る",
      "source_form": "締め切る",
      "variants": [
        "締め切る"
      ],
      "reading": "しめきる",
      "reading_variants": [
        "しめきる"
      ],
      "romaji": "shimekiru",
      "part_of_speech": "verb",
      "meaning_zh": "截止；关紧（门窗）",
      "senses_zh": [
        "截止",
        "关紧（门窗）"
      ],
      "kanji_readings": [
        {
          "form": "締め切る",
          "reading": "しめきる"
        }
      ],
      "examples": [
        {
          "ja": "申し込みは明日で締め切ります。",
          "zh": "报名明天截止。",
          "focus": ["締め切り"],
          "zhFocus": ["截止"]
        },
        {
          "ja": "定員になったので、受付を締め切りました。",
          "zh": "因为满员了，停止了受理。",
          "focus": ["締め切り"],
          "zhFocus": ["停止"]
        },
        {
          "ja": "窓を締め切った部屋は暑いです。",
          "zh": "门窗紧闭的房间很热。",
          "focus": ["締め切っ"],
          "zhFocus": ["紧闭"]
        }
      ],
      "note_zh": "名词「締め切り（截止日期）」已单独学习。"
    },
    {
      "id": "n2-0631",
      "jlpt": "N2",
      "headword": "受話器",
      "source_form": "受話器",
      "variants": [
        "受話器"
      ],
      "reading": "じゅわき",
      "reading_variants": [
        "じゅわき"
      ],
      "romaji": "juwaki",
      "part_of_speech": "noun",
      "meaning_zh": "听筒；话筒",
      "kanji_readings": [
        {
          "form": "受話器",
          "reading": "じゅわき"
        }
      ],
      "examples": [
        {
          "ja": "受話器を取って、電話に出ました。",
          "zh": "拿起听筒接了电话。",
          "focus": ["受話器"],
          "zhFocus": ["听筒"]
        },
        {
          "ja": "話が終わって、受話器を置きました。",
          "zh": "说完话，放下了听筒。",
          "focus": ["受話器"],
          "zhFocus": ["听筒"]
        },
        {
          "ja": "受話器の向こうから母の声が聞こえました。",
          "zh": "从话筒那头传来了母亲的声音。",
          "focus": ["受話器"],
          "zhFocus": ["话筒"]
        }
      ]
    },
    {
      "id": "n2-0632",
      "jlpt": "N2",
      "headword": "白髪",
      "source_form": "白髪",
      "variants": [
        "白髪"
      ],
      "reading": "しらが",
      "reading_variants": [
        "しらが"
      ],
      "romaji": "shiraga",
      "part_of_speech": "noun",
      "meaning_zh": "白发；白头发",
      "kanji_readings": [
        {
          "form": "白髪",
          "reading": "しらが"
        }
      ],
      "examples": [
        {
          "ja": "最近、白髪が増えました。",
          "zh": "最近白头发变多了。",
          "focus": ["白髪"],
          "zhFocus": ["白头发"]
        },
        {
          "ja": "父の髪は白髪が多いです。",
          "zh": "父亲的头发里白发很多。",
          "focus": ["白髪"],
          "zhFocus": ["白发"]
        },
        {
          "ja": "白髪を黒く染めました。",
          "zh": "把白发染黑了。",
          "focus": ["白髪"],
          "zhFocus": ["白发"]
        }
      ]
    },
    {
      "id": "n2-0633",
      "jlpt": "N2",
      "headword": "素質",
      "source_form": "素質",
      "variants": [
        "素質"
      ],
      "reading": "そしつ",
      "reading_variants": [
        "そしつ"
      ],
      "romaji": "soshitsu",
      "part_of_speech": "noun",
      "meaning_zh": "素质；天资；天赋",
      "kanji_readings": [
        {
          "form": "素質",
          "reading": "そしつ"
        }
      ],
      "examples": [
        {
          "ja": "彼には音楽の素質があります。",
          "zh": "他有音乐天赋。",
          "focus": ["素質"],
          "zhFocus": ["天赋"]
        },
        {
          "ja": "先生になる素質があると言われました。",
          "zh": "被说有当老师的素质。",
          "focus": ["素質"],
          "zhFocus": ["素质"]
        },
        {
          "ja": "素質があっても、練習しなければ上手になりません。",
          "zh": "即使有天资，不练习也不会进步。",
          "focus": ["素質"],
          "zhFocus": ["天资"]
        }
      ]
    },
    {
      "id": "n2-0634",
      "jlpt": "N2",
      "headword": "祖先",
      "source_form": "祖先",
      "variants": [
        "祖先"
      ],
      "reading": "そせん",
      "reading_variants": [
        "そせん"
      ],
      "romaji": "sosen",
      "part_of_speech": "noun",
      "meaning_zh": "祖先；（生物的）始祖",
      "kanji_readings": [
        {
          "form": "祖先",
          "reading": "そせん"
        }
      ],
      "examples": [
        {
          "ja": "私たちの祖先は農業をしていました。",
          "zh": "我们的祖先是务农的。",
          "focus": ["祖先"],
          "zhFocus": ["祖先"]
        },
        {
          "ja": "人類の祖先はアフリカで生まれたと言われています。",
          "zh": "据说人类的祖先诞生于非洲。",
          "focus": ["祖先"],
          "zhFocus": ["祖先"]
        },
        {
          "ja": "鳥の祖先は恐竜だという説があります。",
          "zh": "有一种说法认为鸟类的始祖是恐龙。",
          "focus": ["祖先"],
          "zhFocus": ["始祖"]
        }
      ],
      "note_zh": "比「先祖」书面，也用于人类、生物的祖先。"
    },
    {
      "id": "n2-0635",
      "jlpt": "N2",
      "headword": "淡水",
      "source_form": "淡水",
      "variants": [
        "淡水"
      ],
      "reading": "たんすい",
      "reading_variants": [
        "たんすい"
      ],
      "romaji": "tansui",
      "part_of_speech": "noun",
      "meaning_zh": "淡水",
      "kanji_readings": [
        {
          "form": "淡水",
          "reading": "たんすい"
        }
      ],
      "examples": [
        {
          "ja": "この魚は淡水に住んでいます。",
          "zh": "这种鱼生活在淡水里。",
          "focus": ["淡水"],
          "zhFocus": ["淡水"]
        },
        {
          "ja": "海の水を淡水に変える技術があります。",
          "zh": "有把海水变成淡水的技术。",
          "focus": ["淡水"],
          "zhFocus": ["淡水"]
        },
        {
          "ja": "地球の水のうち、淡水は少しだけです。",
          "zh": "地球上的水中，淡水只占一小部分。",
          "focus": ["淡水"],
          "zhFocus": ["淡水"]
        }
      ],
      "note_zh": "与「海水（海水）」相对。"
    },
    {
      "id": "n2-0636",
      "jlpt": "N2",
      "headword": "積む",
      "source_form": "積む",
      "variants": [
        "積む"
      ],
      "reading": "つむ",
      "reading_variants": [
        "つむ"
      ],
      "romaji": "tsumu",
      "part_of_speech": "verb",
      "meaning_zh": "堆积；装载；积累",
      "senses_zh": [
        "堆积；装载",
        "积累"
      ],
      "kanji_readings": [
        {
          "form": "積む",
          "reading": "つむ"
        }
      ],
      "examples": [
        {
          "ja": "本を机の上に積みました。",
          "zh": "把书堆在了桌子上。",
          "focus": ["積み"],
          "zhFocus": ["堆"]
        },
        {
          "ja": "トラックに荷物を積んでいます。",
          "zh": "正在往卡车上装货。",
          "focus": ["積ん"],
          "zhFocus": ["装"]
        },
        {
          "ja": "経験を積んで、いい職人になりました。",
          "zh": "积累经验后成了一名好工匠。",
          "focus": ["積ん"],
          "zhFocus": ["积累"]
        }
      ]
    },
    {
      "id": "n2-0637",
      "jlpt": "N2",
      "headword": "出迎える",
      "source_form": "出迎える",
      "variants": [
        "出迎える"
      ],
      "reading": "でむかえる",
      "reading_variants": [
        "でむかえる"
      ],
      "romaji": "demukaeru",
      "part_of_speech": "verb",
      "meaning_zh": "（出去、到场）迎接",
      "kanji_readings": [
        {
          "form": "出迎える",
          "reading": "でむかえる"
        }
      ],
      "examples": [
        {
          "ja": "駅まで友達を出迎えに行きました。",
          "zh": "去车站接了朋友。",
          "focus": ["出迎え"],
          "zhFocus": ["接"]
        },
        {
          "ja": "社長が玄関でお客様を出迎えました。",
          "zh": "社长在门口迎接了客人。",
          "focus": ["出迎え"],
          "zhFocus": ["迎接"]
        },
        {
          "ja": "空港で家族が出迎えてくれました。",
          "zh": "家人在机场接了我。",
          "focus": ["出迎え"],
          "zhFocus": ["接"]
        }
      ],
      "note_zh": "比「迎える」更强调走出去、到门口或车站等处去迎接。"
    },
    {
      "id": "n2-0638",
      "jlpt": "N2",
      "headword": "上る",
      "source_form": "上る",
      "variants": [
        "上る"
      ],
      "reading": "のぼる",
      "reading_variants": [
        "のぼる"
      ],
      "romaji": "noboru",
      "part_of_speech": "verb",
      "meaning_zh": "上（台阶、坡等）；上升；（数量）达到",
      "senses_zh": [
        "上（台阶、坡等）；上升",
        "（数量）达到"
      ],
      "kanji_readings": [
        {
          "form": "上る",
          "reading": "のぼる"
        }
      ],
      "examples": [
        {
          "ja": "階段を上って、二階に行きました。",
          "zh": "上了楼梯，到了二楼。",
          "focus": ["上っ"],
          "zhFocus": ["上"]
        },
        {
          "ja": "坂を上ると、海が見えます。",
          "zh": "上了坡就能看到大海。",
          "focus": ["上る"],
          "zhFocus": ["上"]
        },
        {
          "ja": "被害はかなりの額に上りました。",
          "zh": "损失达到了相当大的金额。",
          "focus": ["上り"],
          "zhFocus": ["达到"]
        }
      ],
      "note_zh": "爬山多写「登る」；与「下る（往下走）」相对。"
    },
    {
      "id": "n2-0639",
      "jlpt": "N2",
      "headword": "売店",
      "source_form": "売店",
      "variants": [
        "売店"
      ],
      "reading": "ばいてん",
      "reading_variants": [
        "ばいてん"
      ],
      "romaji": "baiten",
      "part_of_speech": "noun",
      "meaning_zh": "小卖部；售货亭",
      "kanji_readings": [
        {
          "form": "売店",
          "reading": "ばいてん"
        }
      ],
      "examples": [
        {
          "ja": "駅の売店で新聞を買いました。",
          "zh": "在车站的小卖部买了报纸。",
          "focus": ["売店"],
          "zhFocus": ["小卖部"]
        },
        {
          "ja": "病院の売店は夜早く閉まります。",
          "zh": "医院的小卖部晚上关得很早。",
          "focus": ["売店"],
          "zhFocus": ["小卖部"]
        },
        {
          "ja": "売店で飲み物を買ってきます。",
          "zh": "我去小卖部买饮料。",
          "focus": ["売店"],
          "zhFocus": ["小卖部"]
        }
      ]
    },
    {
      "id": "n2-0640",
      "jlpt": "N2",
      "headword": "鉢",
      "source_form": "鉢",
      "variants": [
        "鉢"
      ],
      "reading": "はち",
      "reading_variants": [
        "はち"
      ],
      "romaji": "hachi",
      "part_of_speech": "noun",
      "meaning_zh": "钵；盆；花盆",
      "kanji_readings": [
        {
          "form": "鉢",
          "reading": "はち"
        }
      ],
      "examples": [
        {
          "ja": "花を大きな鉢に植え替えました。",
          "zh": "把花移栽到了大花盆里。",
          "focus": ["鉢"],
          "zhFocus": ["花盆"]
        },
        {
          "ja": "鉢にサラダを盛りました。",
          "zh": "把沙拉盛在了钵里。",
          "focus": ["鉢"],
          "zhFocus": ["钵"]
        },
        {
          "ja": "ベランダに鉢がたくさん並んでいます。",
          "zh": "阳台上摆着许多花盆。",
          "focus": ["鉢"],
          "zhFocus": ["花盆"]
        }
      ],
      "note_zh": "花盆也说「植木鉢」。"
    },
    {
      "id": "n2-0641",
      "jlpt": "N2",
      "headword": "深まる",
      "source_form": "深まる",
      "variants": [
        "深まる"
      ],
      "reading": "ふかまる",
      "reading_variants": [
        "ふかまる"
      ],
      "romaji": "fukamaru",
      "part_of_speech": "verb",
      "meaning_zh": "加深；变深",
      "kanji_readings": [
        {
          "form": "深まる",
          "reading": "ふかまる"
        }
      ],
      "examples": [
        {
          "ja": "秋が深まって、山が赤くなりました。",
          "zh": "秋意渐浓，山都变红了。",
          "focus": ["深まっ"],
          "zhFocus": ["渐浓"]
        },
        {
          "ja": "話し合いで二人の理解が深まりました。",
          "zh": "通过交谈，两人的理解加深了。",
          "focus": ["深まり"],
          "zhFocus": ["加深"]
        },
        {
          "ja": "謎はますます深まるばかりです。",
          "zh": "谜团越来越深。",
          "focus": ["深まる"],
          "zhFocus": ["深"]
        }
      ],
      "note_zh": "自动词；他动词是「深める（加深）」。"
    },
    {
      "id": "n2-0642",
      "jlpt": "N2",
      "headword": "岬",
      "source_form": "岬",
      "variants": [
        "岬"
      ],
      "reading": "みさき",
      "reading_variants": [
        "みさき"
      ],
      "romaji": "misaki",
      "part_of_speech": "noun",
      "meaning_zh": "海角；岬",
      "kanji_readings": [
        {
          "form": "岬",
          "reading": "みさき"
        }
      ],
      "examples": [
        {
          "ja": "岬の先に白い灯台があります。",
          "zh": "海角的尖端有一座白色的灯塔。",
          "focus": ["岬"],
          "zhFocus": ["海角"]
        },
        {
          "ja": "岬から見る夕日はきれいです。",
          "zh": "从海角看到的夕阳很美。",
          "focus": ["岬"],
          "zhFocus": ["海角"]
        },
        {
          "ja": "船が岬を回って、港に入りました。",
          "zh": "船绕过海角，进了港口。",
          "focus": ["岬"],
          "zhFocus": ["海角"]
        }
      ]
    },
    {
      "id": "n2-0643",
      "jlpt": "N2",
      "headword": "免税",
      "source_form": "免税",
      "variants": [
        "免税"
      ],
      "reading": "めんぜい",
      "reading_variants": [
        "めんぜい"
      ],
      "romaji": "menzei",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "免税",
      "kanji_readings": [
        {
          "form": "免税",
          "reading": "めんぜい"
        }
      ],
      "examples": [
        {
          "ja": "空港の免税店で化粧品を買いました。",
          "zh": "在机场的免税店买了化妆品。",
          "focus": ["免税"],
          "zhFocus": ["免税"]
        },
        {
          "ja": "外国人は免税で買い物ができます。",
          "zh": "外国人可以免税购物。",
          "focus": ["免税"],
          "zhFocus": ["免税"]
        },
        {
          "ja": "この商品は免税の対象です。",
          "zh": "这件商品属于免税对象。",
          "focus": ["免税"],
          "zhFocus": ["免税"]
        }
      ]
    },
    {
      "id": "n2-0644",
      "jlpt": "N2",
      "headword": "薬局",
      "source_form": "薬局",
      "variants": [
        "薬局"
      ],
      "reading": "やっきょく",
      "reading_variants": [
        "やっきょく"
      ],
      "romaji": "yakkyoku",
      "part_of_speech": "noun",
      "meaning_zh": "药店；药房",
      "kanji_readings": [
        {
          "form": "薬局",
          "reading": "やっきょく"
        }
      ],
      "examples": [
        {
          "ja": "薬局で風邪薬を買いました。",
          "zh": "在药店买了感冒药。",
          "focus": ["薬局"],
          "zhFocus": ["药店"]
        },
        {
          "ja": "病院の近くに薬局があります。",
          "zh": "医院附近有药店。",
          "focus": ["薬局"],
          "zhFocus": ["药店"]
        },
        {
          "ja": "処方箋を薬局に出しました。",
          "zh": "把处方交给了药房。",
          "focus": ["薬局"],
          "zhFocus": ["药房"]
        }
      ]
    },
    {
      "id": "n2-0645",
      "jlpt": "N2",
      "headword": "呼びかける",
      "source_form": "呼びかける",
      "variants": [
        "呼びかける",
        "呼び掛ける"
      ],
      "reading": "よびかける",
      "reading_variants": [
        "よびかける"
      ],
      "romaji": "yobikakeru",
      "part_of_speech": "verb",
      "meaning_zh": "招呼；呼吁；号召",
      "senses_zh": [
        "招呼",
        "呼吁；号召"
      ],
      "kanji_readings": [
        {
          "form": "呼びかける",
          "reading": "よびかける"
        },
        {
          "form": "呼び掛ける",
          "reading": "よびかける"
        }
      ],
      "examples": [
        {
          "ja": "知らない人に呼びかけられました。",
          "zh": "被不认识的人叫住了。",
          "focus": ["呼びかけ"],
          "zhFocus": ["叫住"]
        },
        {
          "ja": "市は節水を呼びかけています。",
          "zh": "市里在呼吁节约用水。",
          "focus": ["呼びかけ"],
          "zhFocus": ["呼吁"]
        },
        {
          "ja": "参加を呼びかけるポスターを作りました。",
          "zh": "做了号召大家参加的海报。",
          "focus": ["呼びかける"],
          "zhFocus": ["号召"]
        }
      ]
    },
    {
      "id": "n2-0646",
      "jlpt": "N2",
      "headword": "慌てる",
      "source_form": "あわてる",
      "variants": [
        "慌てる"
      ],
      "reading": "あわてる",
      "reading_variants": [
        "あわてる"
      ],
      "romaji": "awateru",
      "part_of_speech": "verb",
      "meaning_zh": "慌张；惊慌；急忙",
      "kanji_readings": [
        {
          "form": "慌てる",
          "reading": "あわてる"
        }
      ],
      "examples": [
        {
          "ja": "地震の時は慌てないでください。",
          "zh": "地震时请不要惊慌。",
          "focus": ["慌て"],
          "zhFocus": ["惊慌"]
        },
        {
          "ja": "寝坊して、慌てて家を出ました。",
          "zh": "睡过头了，急急忙忙出了门。",
          "focus": ["慌て"],
          "zhFocus": ["急急忙忙"]
        },
        {
          "ja": "慌てると、失敗しやすくなります。",
          "zh": "一慌张就容易出错。",
          "focus": ["慌てる"],
          "zhFocus": ["慌张"]
        }
      ]
    },
    {
      "id": "n2-0647",
      "jlpt": "N2",
      "headword": "植木",
      "source_form": "植木",
      "variants": [
        "植木"
      ],
      "reading": "うえき",
      "reading_variants": [
        "うえき"
      ],
      "romaji": "ueki",
      "part_of_speech": "noun",
      "meaning_zh": "庭院里种的树；盆栽",
      "kanji_readings": [
        {
          "form": "植木",
          "reading": "うえき"
        }
      ],
      "examples": [
        {
          "ja": "庭の植木に水をやりました。",
          "zh": "给院子里的树浇了水。",
          "focus": ["植木"],
          "zhFocus": ["树"]
        },
        {
          "ja": "父は植木の手入れが好きです。",
          "zh": "父亲喜欢修整庭木。",
          "focus": ["植木"],
          "zhFocus": ["庭木"]
        },
        {
          "ja": "ベランダで植木を育てています。",
          "zh": "在阳台上养盆栽。",
          "focus": ["植木"],
          "zhFocus": ["盆栽"]
        }
      ]
    },
    {
      "id": "n2-0648",
      "jlpt": "N2",
      "headword": "加熱",
      "source_form": "加熱",
      "variants": [
        "加熱"
      ],
      "reading": "かねつ",
      "reading_variants": [
        "かねつ"
      ],
      "romaji": "kanetsu",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "加热",
      "kanji_readings": [
        {
          "form": "加熱",
          "reading": "かねつ"
        }
      ],
      "examples": [
        {
          "ja": "電子レンジで加熱してください。",
          "zh": "请用微波炉加热。",
          "focus": ["加熱"],
          "zhFocus": ["加热"]
        },
        {
          "ja": "肉はよく加熱してから食べましょう。",
          "zh": "肉要充分加热后再吃。",
          "focus": ["加熱"],
          "zhFocus": ["加热"]
        },
        {
          "ja": "加熱しすぎると、味が落ちます。",
          "zh": "加热过度，味道会变差。",
          "focus": ["加熱"],
          "zhFocus": ["加热"]
        }
      ]
    },
    {
      "id": "n2-0649",
      "jlpt": "N2",
      "headword": "乾電池",
      "source_form": "乾電池",
      "variants": [
        "乾電池"
      ],
      "reading": "かんでんち",
      "reading_variants": [
        "かんでんち"
      ],
      "romaji": "kandenchi",
      "part_of_speech": "noun",
      "meaning_zh": "干电池",
      "kanji_readings": [
        {
          "form": "乾電池",
          "reading": "かんでんち"
        }
      ],
      "examples": [
        {
          "ja": "このラジオは乾電池で動きます。",
          "zh": "这台收音机用干电池。",
          "focus": ["乾電池"],
          "zhFocus": ["干电池"]
        },
        {
          "ja": "乾電池を新しいものに替えました。",
          "zh": "把干电池换成了新的。",
          "focus": ["乾電池"],
          "zhFocus": ["干电池"]
        },
        {
          "ja": "古い乾電池は決まった日に捨ててください。",
          "zh": "旧干电池请在规定的日子扔。",
          "focus": ["乾電池"],
          "zhFocus": ["干电池"]
        }
      ]
    },
    {
      "id": "n2-0650",
      "jlpt": "N2",
      "headword": "観念",
      "source_form": "観念",
      "variants": [
        "観念"
      ],
      "reading": "かんねん",
      "reading_variants": [
        "かんねん"
      ],
      "romaji": "kannen",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "观念；（死心）认命",
      "senses_zh": [
        "观念",
        "（死心）认命"
      ],
      "kanji_readings": [
        {
          "form": "観念",
          "reading": "かんねん"
        }
      ],
      "examples": [
        {
          "ja": "彼は時間の観念がありません。",
          "zh": "他没有时间观念。",
          "focus": ["観念"],
          "zhFocus": ["观念"]
        },
        {
          "ja": "古い観念にとらわれてはいけません。",
          "zh": "不能被旧观念束缚。",
          "focus": ["観念"],
          "zhFocus": ["观念"]
        },
        {
          "ja": "逃げられないと思って、犯人は観念しました。",
          "zh": "犯人觉得逃不掉，就认命了。",
          "focus": ["観念"],
          "zhFocus": ["认命"]
        }
      ]
    },
    {
      "id": "n2-0651",
      "jlpt": "N2",
      "headword": "下る",
      "source_form": "下る",
      "variants": [
        "下る"
      ],
      "reading": "くだる",
      "reading_variants": [
        "くだる"
      ],
      "romaji": "kudaru",
      "part_of_speech": "verb",
      "meaning_zh": "（沿坡、河等）往下走；下行；（命令等）下达",
      "senses_zh": [
        "（沿坡、河等）往下走；下行",
        "（命令等）下达"
      ],
      "kanji_readings": [
        {
          "form": "下る",
          "reading": "くだる"
        }
      ],
      "examples": [
        {
          "ja": "坂を下ると、駅があります。",
          "zh": "下了坡就是车站。",
          "focus": ["下る"],
          "zhFocus": ["下"]
        },
        {
          "ja": "船で川を下っていきました。",
          "zh": "坐船顺流而下。",
          "focus": ["下っ"],
          "zhFocus": ["顺流而下"]
        },
        {
          "ja": "上から命令が下って、すぐに出発しました。",
          "zh": "上面下达了命令，马上就出发了。",
          "focus": ["下っ"],
          "zhFocus": ["下达"]
        }
      ],
      "note_zh": "与「上る」相对；从车上、楼上下来多用「降りる」「下りる」。"
    },
    {
      "id": "n2-0652",
      "jlpt": "N2",
      "headword": "下水",
      "source_form": "下水",
      "variants": [
        "下水"
      ],
      "reading": "げすい",
      "reading_variants": [
        "げすい"
      ],
      "romaji": "gesui",
      "part_of_speech": "noun",
      "meaning_zh": "污水；下水道",
      "kanji_readings": [
        {
          "form": "下水",
          "reading": "げすい"
        }
      ],
      "examples": [
        {
          "ja": "台所の下水が詰まりました。",
          "zh": "厨房的下水道堵了。",
          "focus": ["下水"],
          "zhFocus": ["下水道"]
        },
        {
          "ja": "下水の工事が行われています。",
          "zh": "正在进行下水道工程。",
          "focus": ["下水"],
          "zhFocus": ["下水道"]
        },
        {
          "ja": "下水を川に流してはいけません。",
          "zh": "不能把污水排进河里。",
          "focus": ["下水"],
          "zhFocus": ["污水"]
        }
      ],
      "note_zh": "下水道也说「下水道」。"
    },
    {
      "id": "n2-0653",
      "jlpt": "N2",
      "headword": "光線",
      "source_form": "光線",
      "variants": [
        "光線"
      ],
      "reading": "こうせん",
      "reading_variants": [
        "こうせん"
      ],
      "romaji": "kousen",
      "part_of_speech": "noun",
      "meaning_zh": "光线",
      "kanji_readings": [
        {
          "form": "光線",
          "reading": "こうせん"
        }
      ],
      "examples": [
        {
          "ja": "強い光線から目を守ってください。",
          "zh": "请保护眼睛不受强光照射。",
          "focus": ["光線"],
          "zhFocus": ["光"]
        },
        {
          "ja": "窓から太陽の光線が差し込んでいます。",
          "zh": "阳光从窗户射了进来。",
          "focus": ["光線"],
          "zhFocus": ["光"]
        },
        {
          "ja": "この植物は光線が足りないと育ちません。",
          "zh": "这种植物光线不足就长不好。",
          "focus": ["光線"],
          "zhFocus": ["光线"]
        }
      ]
    },
    {
      "id": "n2-0654",
      "jlpt": "N2",
      "headword": "交通機関",
      "source_form": "交通機関",
      "variants": [
        "交通機関"
      ],
      "reading": "こうつうきかん",
      "reading_variants": [
        "こうつうきかん"
      ],
      "romaji": "koutsuukikan",
      "part_of_speech": "noun",
      "meaning_zh": "交通工具；公共交通",
      "kanji_readings": [
        {
          "form": "交通機関",
          "reading": "こうつうきかん"
        }
      ],
      "examples": [
        {
          "ja": "公共の交通機関を利用してください。",
          "zh": "请利用公共交通工具。",
          "focus": ["交通機関"],
          "zhFocus": ["交通工具"]
        },
        {
          "ja": "雪で交通機関が止まりました。",
          "zh": "因为下雪，公共交通停运了。",
          "focus": ["交通機関"],
          "zhFocus": ["公共交通"]
        },
        {
          "ja": "この町は交通機関が便利です。",
          "zh": "这个小镇交通很方便。",
          "focus": ["交通機関"],
          "zhFocus": ["交通"]
        }
      ]
    },
    {
      "id": "n2-0655",
      "jlpt": "N2",
      "headword": "校庭",
      "source_form": "校庭",
      "variants": [
        "校庭"
      ],
      "reading": "こうてい",
      "reading_variants": [
        "こうてい"
      ],
      "romaji": "koutei",
      "part_of_speech": "noun",
      "meaning_zh": "校园；（学校的）操场",
      "kanji_readings": [
        {
          "form": "校庭",
          "reading": "こうてい"
        }
      ],
      "examples": [
        {
          "ja": "子供たちが校庭で遊んでいます。",
          "zh": "孩子们在操场上玩。",
          "focus": ["校庭"],
          "zhFocus": ["操场"]
        },
        {
          "ja": "校庭に桜の木があります。",
          "zh": "校园里有樱花树。",
          "focus": ["校庭"],
          "zhFocus": ["校园"]
        },
        {
          "ja": "雨で校庭が使えません。",
          "zh": "因为下雨，操场不能用。",
          "focus": ["校庭"],
          "zhFocus": ["操场"]
        }
      ]
    },
    {
      "id": "n2-0656",
      "jlpt": "N2",
      "headword": "個体",
      "source_form": "個体",
      "variants": [
        "個体"
      ],
      "reading": "こたい",
      "reading_variants": [
        "こたい"
      ],
      "romaji": "kotai",
      "part_of_speech": "noun",
      "meaning_zh": "个体",
      "kanji_readings": [
        {
          "form": "個体",
          "reading": "こたい"
        }
      ],
      "examples": [
        {
          "ja": "同じ種類の動物でも、個体によって大きさが違います。",
          "zh": "即使是同一种动物，大小也因个体而异。",
          "focus": ["個体"],
          "zhFocus": ["个体"]
        },
        {
          "ja": "この鳥は珍しい個体です。",
          "zh": "这只鸟是个罕见的个体。",
          "focus": ["個体"],
          "zhFocus": ["个体"]
        },
        {
          "ja": "研究のために個体の数を調べています。",
          "zh": "为了研究在调查个体数量。",
          "focus": ["個体"],
          "zhFocus": ["个体"]
        }
      ]
    },
    {
      "id": "n2-0657",
      "jlpt": "N2",
      "headword": "差し引き",
      "source_form": "差し引き",
      "variants": [
        "差し引き"
      ],
      "reading": "さしひき",
      "reading_variants": [
        "さしひき"
      ],
      "romaji": "sashihiki",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "扣除；相抵；差额",
      "kanji_readings": [
        {
          "form": "差し引き",
          "reading": "さしひき"
        }
      ],
      "examples": [
        {
          "ja": "差し引きの金額を計算しました。",
          "zh": "计算了扣除后的金额。",
          "focus": ["差し引き"],
          "zhFocus": ["扣除"]
        },
        {
          "ja": "差し引きすると、残りは少しです。",
          "zh": "两相抵扣后，剩下的不多了。",
          "focus": ["差し引き"],
          "zhFocus": ["抵扣"]
        },
        {
          "ja": "収入と支出の差し引きはゼロです。",
          "zh": "收支相抵是零。",
          "focus": ["差し引き"],
          "zhFocus": ["相抵"]
        }
      ]
    },
    {
      "id": "n2-0658",
      "jlpt": "N2",
      "headword": "算数",
      "source_form": "算数",
      "variants": [
        "算数"
      ],
      "reading": "さんすう",
      "reading_variants": [
        "さんすう"
      ],
      "romaji": "sansuu",
      "part_of_speech": "noun",
      "meaning_zh": "算术（小学课程）",
      "kanji_readings": [
        {
          "form": "算数",
          "reading": "さんすう"
        }
      ],
      "examples": [
        {
          "ja": "弟は算数が苦手です。",
          "zh": "弟弟不擅长算术。",
          "focus": ["算数"],
          "zhFocus": ["算术"]
        },
        {
          "ja": "算数の宿題を手伝いました。",
          "zh": "帮忙做了算术作业。",
          "focus": ["算数"],
          "zhFocus": ["算术"]
        },
        {
          "ja": "小学校で算数を教えています。",
          "zh": "在小学教算术。",
          "focus": ["算数"],
          "zhFocus": ["算术"]
        }
      ],
      "note_zh": "日本小学的数学课叫「算数」，初中以后叫「数学」。"
    },
    {
      "id": "n2-0659",
      "jlpt": "N2",
      "headword": "実物",
      "source_form": "実物",
      "variants": [
        "実物"
      ],
      "reading": "じつぶつ",
      "reading_variants": [
        "じつぶつ"
      ],
      "romaji": "jitsubutsu",
      "part_of_speech": "noun",
      "meaning_zh": "实物；真东西",
      "kanji_readings": [
        {
          "form": "実物",
          "reading": "じつぶつ"
        }
      ],
      "examples": [
        {
          "ja": "実物を見てから買いたいです。",
          "zh": "想看了实物再买。",
          "focus": ["実物"],
          "zhFocus": ["实物"]
        },
        {
          "ja": "写真より実物のほうがきれいです。",
          "zh": "实物比照片漂亮。",
          "focus": ["実物"],
          "zhFocus": ["实物"]
        },
        {
          "ja": "博物館で恐竜の実物の骨を見ました。",
          "zh": "在博物馆看到了真的恐龙骨头。",
          "focus": ["実物"],
          "zhFocus": ["真的"]
        }
      ]
    },
    {
      "id": "n2-0660",
      "jlpt": "N2",
      "headword": "車掌",
      "source_form": "車掌",
      "variants": [
        "車掌"
      ],
      "reading": "しゃしょう",
      "reading_variants": [
        "しゃしょう"
      ],
      "romaji": "shashou",
      "part_of_speech": "noun",
      "meaning_zh": "（电车、公交的）乘务员；列车员",
      "kanji_readings": [
        {
          "form": "車掌",
          "reading": "しゃしょう"
        }
      ],
      "examples": [
        {
          "ja": "車掌が切符を調べに来ました。",
          "zh": "列车员来查票了。",
          "focus": ["車掌"],
          "zhFocus": ["列车员"]
        },
        {
          "ja": "車掌に次の駅を聞きました。",
          "zh": "向乘务员问了下一站。",
          "focus": ["車掌"],
          "zhFocus": ["乘务员"]
        },
        {
          "ja": "電車の後ろに車掌が乗っています。",
          "zh": "电车后部坐着乘务员。",
          "focus": ["車掌"],
          "zhFocus": ["乘务员"]
        }
      ]
    },
    {
      "id": "n2-0661",
      "jlpt": "N2",
      "headword": "車輪",
      "source_form": "車輪",
      "variants": [
        "車輪"
      ],
      "reading": "しゃりん",
      "reading_variants": [
        "しゃりん"
      ],
      "romaji": "sharin",
      "part_of_speech": "noun",
      "meaning_zh": "车轮",
      "kanji_readings": [
        {
          "form": "車輪",
          "reading": "しゃりん"
        }
      ],
      "examples": [
        {
          "ja": "自転車の車輪が壊れました。",
          "zh": "自行车的车轮坏了。",
          "focus": ["車輪"],
          "zhFocus": ["车轮"]
        },
        {
          "ja": "電車の車輪の音が聞こえます。",
          "zh": "能听到电车车轮的声音。",
          "focus": ["車輪"],
          "zhFocus": ["车轮"]
        },
        {
          "ja": "車輪に泥がついています。",
          "zh": "车轮上沾着泥。",
          "focus": ["車輪"],
          "zhFocus": ["车轮"]
        }
      ]
    },
    {
      "id": "n2-0662",
      "jlpt": "N2",
      "headword": "集金",
      "source_form": "集金",
      "variants": [
        "集金"
      ],
      "reading": "しゅうきん",
      "reading_variants": [
        "しゅうきん"
      ],
      "romaji": "shuukin",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "收款；收钱",
      "kanji_readings": [
        {
          "form": "集金",
          "reading": "しゅうきん"
        }
      ],
      "examples": [
        {
          "ja": "新聞代の集金に来ました。",
          "zh": "来收报纸费了。",
          "focus": ["集金"],
          "zhFocus": ["收"]
        },
        {
          "ja": "会費を集金して回りました。",
          "zh": "挨个收了会费。",
          "focus": ["集金"],
          "zhFocus": ["收"]
        },
        {
          "ja": "集金の日は月末です。",
          "zh": "收款日是月底。",
          "focus": ["集金"],
          "zhFocus": ["收款"]
        }
      ]
    },
    {
      "id": "n2-0663",
      "jlpt": "N2",
      "headword": "重役",
      "source_form": "重役",
      "variants": [
        "重役"
      ],
      "reading": "じゅうやく",
      "reading_variants": [
        "じゅうやく"
      ],
      "romaji": "juuyaku",
      "part_of_speech": "noun",
      "meaning_zh": "（公司的）董事；高层",
      "kanji_readings": [
        {
          "form": "重役",
          "reading": "じゅうやく"
        }
      ],
      "examples": [
        {
          "ja": "父は会社の重役です。",
          "zh": "父亲是公司的董事。",
          "focus": ["重役"],
          "zhFocus": ["董事"]
        },
        {
          "ja": "重役の会議が開かれました。",
          "zh": "召开了董事会议。",
          "focus": ["重役"],
          "zhFocus": ["董事"]
        },
        {
          "ja": "彼は若くして重役になりました。",
          "zh": "他年纪轻轻就当上了公司高层。",
          "focus": ["重役"],
          "zhFocus": ["高层"]
        }
      ]
    },
    {
      "id": "n2-0664",
      "jlpt": "N2",
      "headword": "賞品",
      "source_form": "賞品",
      "variants": [
        "賞品"
      ],
      "reading": "しょうひん",
      "reading_variants": [
        "しょうひん"
      ],
      "romaji": "shouhin",
      "part_of_speech": "noun",
      "meaning_zh": "奖品",
      "kanji_readings": [
        {
          "form": "賞品",
          "reading": "しょうひん"
        }
      ],
      "examples": [
        {
          "ja": "一位の人には賞品があります。",
          "zh": "第一名有奖品。",
          "focus": ["賞品"],
          "zhFocus": ["奖品"]
        },
        {
          "ja": "くじで賞品が当たりました。",
          "zh": "抽签中了奖品。",
          "focus": ["賞品"],
          "zhFocus": ["奖品"]
        },
        {
          "ja": "賞品は新しい自転車です。",
          "zh": "奖品是一辆新自行车。",
          "focus": ["賞品"],
          "zhFocus": ["奖品"]
        }
      ],
      "note_zh": "与「商品（商品）」同音。"
    },
    {
      "id": "n2-0665",
      "jlpt": "N2",
      "headword": "図鑑",
      "source_form": "図鑑",
      "variants": [
        "図鑑"
      ],
      "reading": "ずかん",
      "reading_variants": [
        "ずかん"
      ],
      "romaji": "zukan",
      "part_of_speech": "noun",
      "meaning_zh": "图鉴",
      "kanji_readings": [
        {
          "form": "図鑑",
          "reading": "ずかん"
        }
      ],
      "examples": [
        {
          "ja": "図鑑で虫の名前を調べました。",
          "zh": "在图鉴里查了虫子的名字。",
          "focus": ["図鑑"],
          "zhFocus": ["图鉴"]
        },
        {
          "ja": "子供に魚の図鑑を買いました。",
          "zh": "给孩子买了鱼类图鉴。",
          "focus": ["図鑑"],
          "zhFocus": ["图鉴"]
        },
        {
          "ja": "図鑑には写真がたくさん載っています。",
          "zh": "图鉴里登了很多照片。",
          "focus": ["図鑑"],
          "zhFocus": ["图鉴"]
        }
      ]
    },
    {
      "id": "n2-0666",
      "jlpt": "N2",
      "headword": "増減",
      "source_form": "増減",
      "variants": [
        "増減"
      ],
      "reading": "ぞうげん",
      "reading_variants": [
        "ぞうげん"
      ],
      "romaji": "zougen",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "增减",
      "kanji_readings": [
        {
          "form": "増減",
          "reading": "ぞうげん"
        }
      ],
      "examples": [
        {
          "ja": "人口の増減を調べました。",
          "zh": "调查了人口的增减。",
          "focus": ["増減"],
          "zhFocus": ["增减"]
        },
        {
          "ja": "季節によって客の数が増減します。",
          "zh": "客人数量随季节增减。",
          "focus": ["増減"],
          "zhFocus": ["增减"]
        },
        {
          "ja": "体重の増減を毎日記録しています。",
          "zh": "每天记录体重的增减。",
          "focus": ["増減"],
          "zhFocus": ["增减"]
        }
      ]
    },
    {
      "id": "n2-0667",
      "jlpt": "N2",
      "headword": "代名詞",
      "source_form": "代名詞",
      "variants": [
        "代名詞"
      ],
      "reading": "だいめいし",
      "reading_variants": [
        "だいめいし"
      ],
      "romaji": "daimeishi",
      "part_of_speech": "noun",
      "meaning_zh": "代词；（某事物的）代名词",
      "senses_zh": [
        "代词",
        "（某事物的）代名词"
      ],
      "kanji_readings": [
        {
          "form": "代名詞",
          "reading": "だいめいし"
        }
      ],
      "examples": [
        {
          "ja": "「これ」や「それ」は代名詞です。",
          "zh": "“这个”“那个”是代词。",
          "focus": ["代名詞"],
          "zhFocus": ["代词"]
        },
        {
          "ja": "英語の代名詞を覚えました。",
          "zh": "记住了英语的代词。",
          "focus": ["代名詞"],
          "zhFocus": ["代词"]
        },
        {
          "ja": "この町の名前は温泉の代名詞になっています。",
          "zh": "这个镇的名字成了温泉的代名词。",
          "focus": ["代名詞"],
          "zhFocus": ["代名词"]
        }
      ]
    },
    {
      "id": "n2-0668",
      "jlpt": "N2",
      "headword": "田植え",
      "source_form": "田植え",
      "variants": [
        "田植え"
      ],
      "reading": "たうえ",
      "reading_variants": [
        "たうえ"
      ],
      "romaji": "taue",
      "part_of_speech": "noun",
      "meaning_zh": "插秧",
      "kanji_readings": [
        {
          "form": "田植え",
          "reading": "たうえ"
        }
      ],
      "examples": [
        {
          "ja": "五月に田植えをします。",
          "zh": "五月插秧。",
          "focus": ["田植え"],
          "zhFocus": ["插秧"]
        },
        {
          "ja": "子供たちが田植えを体験しました。",
          "zh": "孩子们体验了插秧。",
          "focus": ["田植え"],
          "zhFocus": ["插秧"]
        },
        {
          "ja": "田植えが終わると、田んぼが緑になります。",
          "zh": "插完秧，稻田就变绿了。",
          "focus": ["田植え"],
          "zhFocus": ["插"]
        }
      ]
    },
    {
      "id": "n2-0669",
      "jlpt": "N2",
      "headword": "建つ",
      "source_form": "建つ",
      "variants": [
        "建つ"
      ],
      "reading": "たつ",
      "reading_variants": [
        "たつ"
      ],
      "romaji": "tatsu",
      "part_of_speech": "verb",
      "meaning_zh": "（建筑物）建成；盖起来",
      "kanji_readings": [
        {
          "form": "建つ",
          "reading": "たつ"
        }
      ],
      "examples": [
        {
          "ja": "公園の隣に大きなマンションが建ちました。",
          "zh": "公园旁边盖起了一座大公寓。",
          "focus": ["建ち"],
          "zhFocus": ["盖起"]
        },
        {
          "ja": "丘の上に教会が建っています。",
          "zh": "山丘上矗立着一座教堂。",
          "focus": ["建っ"],
          "zhFocus": ["矗立"]
        },
        {
          "ja": "ここに家が建つ予定です。",
          "zh": "这里计划要盖房子。",
          "focus": ["建つ"],
          "zhFocus": ["盖"]
        }
      ],
      "note_zh": "自动词；他动词是「建てる（建造）」。与「立つ（站）」同音。"
    },
    {
      "id": "n2-0670",
      "jlpt": "N2",
      "headword": "地質",
      "source_form": "地質",
      "variants": [
        "地質"
      ],
      "reading": "ちしつ",
      "reading_variants": [
        "ちしつ"
      ],
      "romaji": "chishitsu",
      "part_of_speech": "noun",
      "meaning_zh": "地质",
      "kanji_readings": [
        {
          "form": "地質",
          "reading": "ちしつ"
        }
      ],
      "examples": [
        {
          "ja": "この辺りの地質を調べています。",
          "zh": "在调查这一带的地质。",
          "focus": ["地質"],
          "zhFocus": ["地质"]
        },
        {
          "ja": "地質の研究をしています。",
          "zh": "在做地质研究。",
          "focus": ["地質"],
          "zhFocus": ["地质"]
        },
        {
          "ja": "地質によって、育つ植物が違います。",
          "zh": "地质不同，生长的植物也不同。",
          "focus": ["地質"],
          "zhFocus": ["地质"]
        }
      ]
    },
    {
      "id": "n2-0671",
      "jlpt": "N2",
      "headword": "停車",
      "source_form": "停車",
      "variants": [
        "停車"
      ],
      "reading": "ていしゃ",
      "reading_variants": [
        "ていしゃ"
      ],
      "romaji": "teisha",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "（车辆）停车",
      "kanji_readings": [
        {
          "form": "停車",
          "reading": "ていしゃ"
        }
      ],
      "examples": [
        {
          "ja": "この電車は各駅に停車します。",
          "zh": "这趟电车每站都停。",
          "focus": ["停車"],
          "zhFocus": ["停"]
        },
        {
          "ja": "次の駅でしばらく停車します。",
          "zh": "在下一站临时停车一会儿。",
          "focus": ["停車"],
          "zhFocus": ["停车"]
        },
        {
          "ja": "ここは停車禁止です。",
          "zh": "这里禁止停车。",
          "focus": ["停車"],
          "zhFocus": ["停车"]
        }
      ],
      "note_zh": "指车辆短时间停下；长时间停放用「駐車」。"
    },
    {
      "id": "n2-0672",
      "jlpt": "N2",
      "headword": "丼",
      "source_form": "丼",
      "variants": [
        "丼"
      ],
      "reading": "どんぶり",
      "reading_variants": [
        "どんぶり"
      ],
      "romaji": "donburi",
      "part_of_speech": "noun",
      "meaning_zh": "大碗；盖饭",
      "kanji_readings": [
        {
          "form": "丼",
          "reading": "どんぶり"
        }
      ],
      "examples": [
        {
          "ja": "丼にご飯を入れました。",
          "zh": "在大碗里盛了饭。",
          "focus": ["丼"],
          "zhFocus": ["大碗"]
        },
        {
          "ja": "大きな丼でラーメンを食べました。",
          "zh": "用大碗吃了拉面。",
          "focus": ["丼"],
          "zhFocus": ["大碗"]
        },
        {
          "ja": "この店の丼はとても大きいです。",
          "zh": "这家店的盖饭分量很大。",
          "focus": ["丼"],
          "zhFocus": ["盖饭"]
        }
      ],
      "note_zh": "做菜名后缀时读「どん」，如「牛丼（ぎゅうどん）」。"
    },
    {
      "id": "n2-0673",
      "jlpt": "N2",
      "headword": "虹",
      "source_form": "虹",
      "variants": [
        "虹"
      ],
      "reading": "にじ",
      "reading_variants": [
        "にじ"
      ],
      "romaji": "niji",
      "part_of_speech": "noun",
      "meaning_zh": "彩虹",
      "kanji_readings": [
        {
          "form": "虹",
          "reading": "にじ"
        }
      ],
      "examples": [
        {
          "ja": "雨の後で虹が出ました。",
          "zh": "雨后出了彩虹。",
          "focus": ["虹"],
          "zhFocus": ["彩虹"]
        },
        {
          "ja": "空に大きな虹がかかっています。",
          "zh": "天上挂着一道大彩虹。",
          "focus": ["虹"],
          "zhFocus": ["彩虹"]
        },
        {
          "ja": "虹の色を数えてみました。",
          "zh": "数了数彩虹的颜色。",
          "focus": ["虹"],
          "zhFocus": ["彩虹"]
        }
      ]
    },
    {
      "id": "n2-0674",
      "jlpt": "N2",
      "headword": "吐き気",
      "source_form": "吐き気",
      "variants": [
        "吐き気"
      ],
      "reading": "はきけ",
      "reading_variants": [
        "はきけ"
      ],
      "romaji": "hakike",
      "part_of_speech": "noun",
      "meaning_zh": "恶心；想吐",
      "kanji_readings": [
        {
          "form": "吐き気",
          "reading": "はきけ"
        }
      ],
      "examples": [
        {
          "ja": "朝から吐き気がします。",
          "zh": "从早上开始就恶心。",
          "focus": ["吐き気"],
          "zhFocus": ["恶心"]
        },
        {
          "ja": "車に酔って、吐き気がしました。",
          "zh": "晕车，想吐。",
          "focus": ["吐き気"],
          "zhFocus": ["想吐"]
        },
        {
          "ja": "吐き気が止まらないので、病院へ行きました。",
          "zh": "一直恶心，就去了医院。",
          "focus": ["吐き気"],
          "zhFocus": ["恶心"]
        }
      ],
      "note_zh": "常用「吐き気がする」。"
    },
    {
      "id": "n2-0675",
      "jlpt": "N2",
      "headword": "発揮",
      "source_form": "発揮",
      "variants": [
        "発揮"
      ],
      "reading": "はっき",
      "reading_variants": [
        "はっき"
      ],
      "romaji": "hakki",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "发挥",
      "kanji_readings": [
        {
          "form": "発揮",
          "reading": "はっき"
        }
      ],
      "examples": [
        {
          "ja": "試合で実力を発揮しました。",
          "zh": "在比赛中发挥了实力。",
          "focus": ["発揮"],
          "zhFocus": ["发挥"]
        },
        {
          "ja": "彼女はリーダーシップを発揮しています。",
          "zh": "她发挥着领导能力。",
          "focus": ["発揮"],
          "zhFocus": ["发挥"]
        },
        {
          "ja": "緊張して力を発揮できませんでした。",
          "zh": "太紧张了，没能发挥出实力。",
          "focus": ["発揮"],
          "zhFocus": ["发挥"]
        }
      ]
    },
    {
      "id": "n2-0676",
      "jlpt": "N2",
      "headword": "浴衣",
      "source_form": "浴衣",
      "variants": [
        "浴衣"
      ],
      "reading": "ゆかた",
      "reading_variants": [
        "ゆかた"
      ],
      "romaji": "yukata",
      "part_of_speech": "noun",
      "meaning_zh": "浴衣（夏季穿的单和服）",
      "kanji_readings": [
        {
          "form": "浴衣",
          "reading": "ゆかた"
        }
      ],
      "examples": [
        {
          "ja": "夏祭りに浴衣を着て行きました。",
          "zh": "穿着浴衣去了夏日祭。",
          "focus": ["浴衣"],
          "zhFocus": ["浴衣"]
        },
        {
          "ja": "旅館で浴衣に着替えました。",
          "zh": "在旅馆换上了浴衣。",
          "focus": ["浴衣"],
          "zhFocus": ["浴衣"]
        },
        {
          "ja": "夏の夜は浴衣を着た人をよく見ます。",
          "zh": "夏天的晚上常能看到穿浴衣的人。",
          "focus": ["浴衣"],
          "zhFocus": ["浴衣"]
        }
      ]
    },
    {
      "id": "n2-0677",
      "jlpt": "N2",
      "headword": "容積",
      "source_form": "容積",
      "variants": [
        "容積"
      ],
      "reading": "ようせき",
      "reading_variants": [
        "ようせき"
      ],
      "romaji": "youseki",
      "part_of_speech": "noun",
      "meaning_zh": "容积；容量",
      "kanji_readings": [
        {
          "form": "容積",
          "reading": "ようせき"
        }
      ],
      "examples": [
        {
          "ja": "この箱の容積を計算してください。",
          "zh": "请计算这个箱子的容积。",
          "focus": ["容積"],
          "zhFocus": ["容积"]
        },
        {
          "ja": "冷蔵庫は容積が大きいほうが便利です。",
          "zh": "冰箱容量大一些比较方便。",
          "focus": ["容積"],
          "zhFocus": ["容量"]
        },
        {
          "ja": "タンクの容積を測りました。",
          "zh": "测量了水箱的容积。",
          "focus": ["容積"],
          "zhFocus": ["容积"]
        }
      ]
    },
    {
      "id": "n2-0678",
      "jlpt": "N2",
      "headword": "おどかす",
      "source_form": "脅かす",
      "variants": [
        "おどかす",
        "脅かす"
      ],
      "reading": "おどかす",
      "reading_variants": [
        "おどかす"
      ],
      "romaji": "odokasu",
      "part_of_speech": "verb",
      "meaning_zh": "（故意）吓唬；威胁",
      "kanji_readings": [
        {
          "form": "脅かす",
          "reading": "おどかす"
        }
      ],
      "examples": [
        {
          "ja": "子供が暗い所から出てきて、私をおどかしました。",
          "zh": "孩子从暗处跳出来吓唬我。",
          "focus": ["おどかし"],
          "zhFocus": ["吓唬"]
        },
        {
          "ja": "「宿題をしないと怒るよ」と母におどかされました。",
          "zh": "妈妈威胁我说“不做作业就要生气了”。",
          "focus": ["おどかさ"],
          "zhFocus": ["威胁"]
        },
        {
          "ja": "そんなにおどかさないでください。",
          "zh": "别那么吓唬人。",
          "focus": ["おどかさ"],
          "zhFocus": ["吓唬"]
        }
      ],
      "note_zh": "汉字写作「脅かす」，但「脅かす」也读「おびやかす」（威胁、危及），所以本义多写假名；无意中使人吃惊用「驚かす」。"
    },
    {
      "id": "n2-0679",
      "jlpt": "N2",
      "headword": "換気",
      "source_form": "換気",
      "variants": [
        "換気"
      ],
      "reading": "かんき",
      "reading_variants": [
        "かんき"
      ],
      "romaji": "kanki",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "换气；通风",
      "kanji_readings": [
        {
          "form": "換気",
          "reading": "かんき"
        }
      ],
      "examples": [
        {
          "ja": "窓を開けて換気しましょう。",
          "zh": "开窗通通风吧。",
          "focus": ["換気"],
          "zhFocus": ["通风"]
        },
        {
          "ja": "この部屋は換気が悪いです。",
          "zh": "这个房间通风不好。",
          "focus": ["換気"],
          "zhFocus": ["通风"]
        },
        {
          "ja": "料理をする時は換気扇を回します。",
          "zh": "做饭时打开抽油烟机。",
          "focus": ["換気"]
        }
      ]
    },
    {
      "id": "n2-0680",
      "jlpt": "N2",
      "headword": "原産",
      "source_form": "原産",
      "variants": [
        "原産"
      ],
      "reading": "げんさん",
      "reading_variants": [
        "げんさん"
      ],
      "romaji": "gensan",
      "part_of_speech": "noun",
      "meaning_zh": "原产（地）",
      "kanji_readings": [
        {
          "form": "原産",
          "reading": "げんさん"
        }
      ],
      "examples": [
        {
          "ja": "トマトは南米原産です。",
          "zh": "番茄原产于南美。",
          "focus": ["原産"],
          "zhFocus": ["原产"]
        },
        {
          "ja": "この花の原産地はどこですか。",
          "zh": "这种花的原产地是哪里？",
          "focus": ["原産"],
          "zhFocus": ["原产"]
        },
        {
          "ja": "ジャガイモはアメリカ大陸の原産です。",
          "zh": "土豆原产于美洲大陆。",
          "focus": ["原産"],
          "zhFocus": ["原产"]
        }
      ]
    },
    {
      "id": "n2-0681",
      "jlpt": "N2",
      "headword": "原始",
      "source_form": "原始",
      "variants": [
        "原始"
      ],
      "reading": "げんし",
      "reading_variants": [
        "げんし"
      ],
      "romaji": "genshi",
      "part_of_speech": "noun",
      "meaning_zh": "原始",
      "kanji_readings": [
        {
          "form": "原始",
          "reading": "げんし"
        }
      ],
      "examples": [
        {
          "ja": "原始の人々は狩りをして暮らしていました。",
          "zh": "原始人靠打猎生活。",
          "focus": ["原始"],
          "zhFocus": ["原始"]
        },
        {
          "ja": "この森には原始の自然が残っています。",
          "zh": "这片森林保留着原始的自然风貌。",
          "focus": ["原始"],
          "zhFocus": ["原始"]
        },
        {
          "ja": "原始時代の道具が見つかりました。",
          "zh": "发现了原始时代的工具。",
          "focus": ["原始"],
          "zhFocus": ["原始"]
        }
      ]
    },
    {
      "id": "n2-0682",
      "jlpt": "N2",
      "headword": "工員",
      "source_form": "工員",
      "variants": [
        "工員"
      ],
      "reading": "こういん",
      "reading_variants": [
        "こういん"
      ],
      "romaji": "kouin",
      "part_of_speech": "noun",
      "meaning_zh": "（工厂的）工人",
      "kanji_readings": [
        {
          "form": "工員",
          "reading": "こういん"
        }
      ],
      "examples": [
        {
          "ja": "父は工場の工員です。",
          "zh": "父亲是工厂的工人。",
          "focus": ["工員"],
          "zhFocus": ["工人"]
        },
        {
          "ja": "工場では多くの工員が働いています。",
          "zh": "工厂里有很多工人在工作。",
          "focus": ["工員"],
          "zhFocus": ["工人"]
        },
        {
          "ja": "工員を募集しています。",
          "zh": "正在招聘工人。",
          "focus": ["工員"],
          "zhFocus": ["工人"]
        }
      ]
    },
    {
      "id": "n2-0683",
      "jlpt": "N2",
      "headword": "公衆",
      "source_form": "公衆",
      "variants": [
        "公衆"
      ],
      "reading": "こうしゅう",
      "reading_variants": [
        "こうしゅう"
      ],
      "romaji": "koushuu",
      "part_of_speech": "noun",
      "meaning_zh": "公众；公共",
      "kanji_readings": [
        {
          "form": "公衆",
          "reading": "こうしゅう"
        }
      ],
      "examples": [
        {
          "ja": "駅の前に公衆電話があります。",
          "zh": "车站前有公用电话。",
          "focus": ["公衆"],
          "zhFocus": ["公用"]
        },
        {
          "ja": "公衆の前で大きな声を出さないでください。",
          "zh": "请不要在公众面前大声喧哗。",
          "focus": ["公衆"],
          "zhFocus": ["公众"]
        },
        {
          "ja": "公衆のマナーを守りましょう。",
          "zh": "遵守公共礼仪吧。",
          "focus": ["公衆"],
          "zhFocus": ["公共"]
        }
      ]
    },
    {
      "id": "n2-0684",
      "jlpt": "N2",
      "headword": "献立",
      "source_form": "献立",
      "variants": [
        "献立"
      ],
      "reading": "こんだて",
      "reading_variants": [
        "こんだて"
      ],
      "romaji": "kondate",
      "part_of_speech": "noun",
      "meaning_zh": "菜单；（饭菜的）安排",
      "kanji_readings": [
        {
          "form": "献立",
          "reading": "こんだて"
        }
      ],
      "examples": [
        {
          "ja": "今日の夕食の献立を考えています。",
          "zh": "在想今天晚饭吃什么。",
          "focus": ["献立"],
          "zhFocus": ["吃什么"]
        },
        {
          "ja": "給食の献立が配られました。",
          "zh": "发了学校伙食的菜单。",
          "focus": ["献立"],
          "zhFocus": ["菜单"]
        },
        {
          "ja": "一週間の献立を決めておくと便利です。",
          "zh": "事先定好一周的菜单很方便。",
          "focus": ["献立"],
          "zhFocus": ["菜单"]
        }
      ]
    },
    {
      "id": "n2-0685",
      "jlpt": "N2",
      "headword": "社会科学",
      "source_form": "社会科学",
      "variants": [
        "社会科学"
      ],
      "reading": "しゃかいかがく",
      "reading_variants": [
        "しゃかいかがく"
      ],
      "romaji": "shakaikagaku",
      "part_of_speech": "noun",
      "meaning_zh": "社会科学",
      "kanji_readings": [
        {
          "form": "社会科学",
          "reading": "しゃかいかがく"
        }
      ],
      "examples": [
        {
          "ja": "大学で社会科学を学んでいます。",
          "zh": "在大学学习社会科学。",
          "focus": ["社会科学"],
          "zhFocus": ["社会科学"]
        },
        {
          "ja": "経済学は社会科学の一つです。",
          "zh": "经济学是社会科学的一种。",
          "focus": ["社会科学"],
          "zhFocus": ["社会科学"]
        },
        {
          "ja": "社会科学の本をたくさん読みました。",
          "zh": "读了很多社会科学的书。",
          "focus": ["社会科学"],
          "zhFocus": ["社会科学"]
        }
      ],
      "note_zh": "与「自然科学（自然科学）」相对。"
    },
    {
      "id": "n2-0686",
      "jlpt": "N2",
      "headword": "垂直",
      "source_form": "垂直",
      "variants": [
        "垂直"
      ],
      "reading": "すいちょく",
      "reading_variants": [
        "すいちょく"
      ],
      "romaji": "suichoku",
      "part_of_speech": "na-adjective/noun",
      "meaning_zh": "垂直",
      "kanji_readings": [
        {
          "form": "垂直",
          "reading": "すいちょく"
        }
      ],
      "examples": [
        {
          "ja": "線に垂直な線を引いてください。",
          "zh": "请画一条与这条线垂直的线。",
          "focus": ["垂直"],
          "zhFocus": ["垂直"]
        },
        {
          "ja": "壁は床に対して垂直です。",
          "zh": "墙与地面垂直。",
          "focus": ["垂直"],
          "zhFocus": ["垂直"]
        },
        {
          "ja": "ロケットが垂直に上がっていきました。",
          "zh": "火箭垂直升了上去。",
          "focus": ["垂直"],
          "zhFocus": ["垂直"]
        }
      ],
      "note_zh": "与「水平（水平）」相对。"
    },
    {
      "id": "n2-0687",
      "jlpt": "N2",
      "headword": "随筆",
      "source_form": "随筆",
      "variants": [
        "随筆"
      ],
      "reading": "ずいひつ",
      "reading_variants": [
        "ずいひつ"
      ],
      "romaji": "zuihitsu",
      "part_of_speech": "noun",
      "meaning_zh": "随笔；散文",
      "kanji_readings": [
        {
          "form": "随筆",
          "reading": "ずいひつ"
        }
      ],
      "examples": [
        {
          "ja": "彼女は随筆を書くのが好きです。",
          "zh": "她喜欢写随笔。",
          "focus": ["随筆"],
          "zhFocus": ["随笔"]
        },
        {
          "ja": "この随筆には作者の日常が書かれています。",
          "zh": "这篇随笔写了作者的日常生活。",
          "focus": ["随筆"],
          "zhFocus": ["随笔"]
        },
        {
          "ja": "寝る前に随筆を少し読みます。",
          "zh": "睡前读一点散文。",
          "focus": ["随筆"],
          "zhFocus": ["散文"]
        }
      ],
      "note_zh": "也说「エッセイ」。"
    },
    {
      "id": "n2-0688",
      "jlpt": "N2",
      "headword": "生長",
      "source_form": "生長",
      "variants": [
        "生長"
      ],
      "reading": "せいちょう",
      "reading_variants": [
        "せいちょう"
      ],
      "romaji": "seichou",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "（植物）生长",
      "kanji_readings": [
        {
          "form": "生長",
          "reading": "せいちょう"
        }
      ],
      "examples": [
        {
          "ja": "雨が降って、稲がよく生長しました。",
          "zh": "下了雨，稻子长得很好。",
          "focus": ["生長"],
          "zhFocus": ["长"]
        },
        {
          "ja": "植物の生長には光が必要です。",
          "zh": "植物生长需要光。",
          "focus": ["生長"],
          "zhFocus": ["生长"]
        },
        {
          "ja": "この木は生長が早いです。",
          "zh": "这种树长得快。",
          "focus": ["生長"],
          "zhFocus": ["长"]
        }
      ],
      "note_zh": "多指植物；人、动物和经济的成长写「成長」。"
    },
    {
      "id": "n2-0689",
      "jlpt": "N2",
      "headword": "赤道",
      "source_form": "赤道",
      "variants": [
        "赤道"
      ],
      "reading": "せきどう",
      "reading_variants": [
        "せきどう"
      ],
      "romaji": "sekidou",
      "part_of_speech": "noun",
      "meaning_zh": "赤道",
      "kanji_readings": [
        {
          "form": "赤道",
          "reading": "せきどう"
        }
      ],
      "examples": [
        {
          "ja": "赤道の近くはとても暑いです。",
          "zh": "赤道附近非常热。",
          "focus": ["赤道"],
          "zhFocus": ["赤道"]
        },
        {
          "ja": "船で赤道を越えました。",
          "zh": "乘船越过了赤道。",
          "focus": ["赤道"],
          "zhFocus": ["赤道"]
        },
        {
          "ja": "地図で赤道の位置を確認しました。",
          "zh": "在地图上确认了赤道的位置。",
          "focus": ["赤道"],
          "zhFocus": ["赤道"]
        }
      ]
    },
    {
      "id": "n2-0690",
      "jlpt": "N2",
      "headword": "詰まる",
      "source_form": "詰まる",
      "variants": [
        "詰まる"
      ],
      "reading": "つまる",
      "reading_variants": [
        "つまる"
      ],
      "romaji": "tsumaru",
      "part_of_speech": "verb",
      "meaning_zh": "堵塞；塞满；（日程）排满；（话）说不出来",
      "senses_zh": [
        "堵塞；塞满",
        "（日程）排满",
        "（话）说不出来"
      ],
      "kanji_readings": [
        {
          "form": "詰まる",
          "reading": "つまる"
        }
      ],
      "examples": [
        {
          "ja": "風邪で鼻が詰まっています。",
          "zh": "感冒了，鼻子不通气。",
          "focus": ["詰まっ"],
          "zhFocus": ["不通气"]
        },
        {
          "ja": "今週は予定がぎっしり詰まっています。",
          "zh": "这周的日程排得满满的。",
          "focus": ["詰まっ"],
          "zhFocus": ["排得满满"]
        },
        {
          "ja": "急に質問されて、言葉に詰まりました。",
          "zh": "突然被提问，一时语塞。",
          "focus": ["詰まり"],
          "zhFocus": ["语塞"]
        }
      ],
      "note_zh": "自动词；他动词是「詰める（装满）」。"
    },
    {
      "id": "n2-0691",
      "jlpt": "N2",
      "headword": "出入り口",
      "source_form": "出入口",
      "variants": [
        "出入り口",
        "出入口"
      ],
      "reading": "でいりぐち",
      "reading_variants": [
        "でいりぐち"
      ],
      "romaji": "deiriguchi",
      "part_of_speech": "noun",
      "meaning_zh": "出入口",
      "kanji_readings": [
        {
          "form": "出入り口",
          "reading": "でいりぐち"
        },
        {
          "form": "出入口",
          "reading": "でいりぐち"
        }
      ],
      "examples": [
        {
          "ja": "出入り口の前に車を止めないでください。",
          "zh": "请不要把车停在出入口前。",
          "focus": ["出入り口"],
          "zhFocus": ["出入口"]
        },
        {
          "ja": "この建物は出入り口が二つあります。",
          "zh": "这栋建筑有两个出入口。",
          "focus": ["出入り口"],
          "zhFocus": ["出入口"]
        },
        {
          "ja": "出入り口はこちらです。",
          "zh": "出入口在这边。",
          "focus": ["出入り口"],
          "zhFocus": ["出入口"]
        }
      ]
    },
    {
      "id": "n2-0692",
      "jlpt": "N2",
      "headword": "手ごろ",
      "source_form": "手ごろ",
      "variants": [
        "手ごろ",
        "手頃"
      ],
      "reading": "てごろ",
      "reading_variants": [
        "てごろ"
      ],
      "romaji": "tegoro",
      "part_of_speech": "na-adjective/noun",
      "meaning_zh": "合适；（价钱）公道；（大小）合手",
      "kanji_readings": [
        {
          "form": "手ごろ",
          "reading": "てごろ"
        },
        {
          "form": "手頃",
          "reading": "てごろ"
        }
      ],
      "examples": [
        {
          "ja": "この店は手ごろな値段でおいしいです。",
          "zh": "这家店价格公道又好吃。",
          "focus": ["手ごろ"],
          "zhFocus": ["公道"]
        },
        {
          "ja": "手ごろな大きさのかばんを探しています。",
          "zh": "在找大小合适的包。",
          "focus": ["手ごろ"],
          "zhFocus": ["合适"]
        },
        {
          "ja": "学生に手ごろなアパートを見つけました。",
          "zh": "找到了适合学生的公寓。",
          "focus": ["手ごろ"],
          "zhFocus": ["适合"]
        }
      ]
    },
    {
      "id": "n2-0693",
      "jlpt": "N2",
      "headword": "能率",
      "source_form": "能率",
      "variants": [
        "能率"
      ],
      "reading": "のうりつ",
      "reading_variants": [
        "のうりつ"
      ],
      "romaji": "nouritsu",
      "part_of_speech": "noun",
      "meaning_zh": "效率",
      "kanji_readings": [
        {
          "form": "能率",
          "reading": "のうりつ"
        }
      ],
      "examples": [
        {
          "ja": "新しい機械で仕事の能率が上がりました。",
          "zh": "有了新机器，工作效率提高了。",
          "focus": ["能率"],
          "zhFocus": ["效率"]
        },
        {
          "ja": "疲れていると、能率が下がります。",
          "zh": "一累，效率就会下降。",
          "focus": ["能率"],
          "zhFocus": ["效率"]
        },
        {
          "ja": "能率よく勉強する方法を教えてください。",
          "zh": "请告诉我高效学习的方法。",
          "focus": ["能率"],
          "zhFocus": ["高效"]
        }
      ]
    },
    {
      "id": "n2-0694",
      "jlpt": "N2",
      "headword": "残らず",
      "source_form": "残らず",
      "variants": [
        "残らず"
      ],
      "reading": "のこらず",
      "reading_variants": [
        "のこらず"
      ],
      "romaji": "nokorazu",
      "part_of_speech": "adverb",
      "meaning_zh": "全部；一个不剩",
      "kanji_readings": [
        {
          "form": "残らず",
          "reading": "のこらず"
        }
      ],
      "examples": [
        {
          "ja": "出されたものを残らず食べました。",
          "zh": "端上来的东西全部吃光了。",
          "focus": ["残らず"],
          "zhFocus": ["全部"]
        },
        {
          "ja": "知っていることを残らず話しました。",
          "zh": "把知道的事全都说了。",
          "focus": ["残らず"],
          "zhFocus": ["全都"]
        },
        {
          "ja": "クラスの生徒は一人残らず合格しました。",
          "zh": "班上的学生一个不剩全部合格了。",
          "focus": ["残らず"],
          "zhFocus": ["一个不剩"]
        }
      ]
    },
    {
      "id": "n2-0695",
      "jlpt": "N2",
      "headword": "歯車",
      "source_form": "歯車",
      "variants": [
        "歯車"
      ],
      "reading": "はぐるま",
      "reading_variants": [
        "はぐるま"
      ],
      "romaji": "haguruma",
      "part_of_speech": "noun",
      "meaning_zh": "齿轮；（组织里的）小螺丝钉",
      "senses_zh": [
        "齿轮",
        "（组织里的）小螺丝钉"
      ],
      "kanji_readings": [
        {
          "form": "歯車",
          "reading": "はぐるま"
        }
      ],
      "examples": [
        {
          "ja": "時計の中には小さな歯車がたくさんあります。",
          "zh": "钟表里面有很多小齿轮。",
          "focus": ["歯車"],
          "zhFocus": ["齿轮"]
        },
        {
          "ja": "機械の歯車が壊れました。",
          "zh": "机器的齿轮坏了。",
          "focus": ["歯車"],
          "zhFocus": ["齿轮"]
        },
        {
          "ja": "私は会社の歯車の一つにすぎません。",
          "zh": "我不过是公司里的一颗小螺丝钉。",
          "focus": ["歯車"],
          "zhFocus": ["小螺丝钉"]
        }
      ]
    },
    {
      "id": "n2-0696",
      "jlpt": "N2",
      "headword": "日帰り",
      "source_form": "日帰り",
      "variants": [
        "日帰り"
      ],
      "reading": "ひがえり",
      "reading_variants": [
        "ひがえり"
      ],
      "romaji": "higaeri",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "当天往返",
      "kanji_readings": [
        {
          "form": "日帰り",
          "reading": "ひがえり"
        }
      ],
      "examples": [
        {
          "ja": "週末に日帰りで温泉に行きました。",
          "zh": "周末当天往返去泡了温泉。",
          "focus": ["日帰り"],
          "zhFocus": ["当天往返"]
        },
        {
          "ja": "京都なら日帰りできます。",
          "zh": "如果是京都的话当天可以往返。",
          "focus": ["日帰り"],
          "zhFocus": ["当天可以往返"]
        },
        {
          "ja": "日帰りの旅行に参加しました。",
          "zh": "参加了一日游。",
          "focus": ["日帰り"],
          "zhFocus": ["一日游"]
        }
      ]
    },
    {
      "id": "n2-0697",
      "jlpt": "N2",
      "headword": "筆記",
      "source_form": "筆記",
      "variants": [
        "筆記"
      ],
      "reading": "ひっき",
      "reading_variants": [
        "ひっき"
      ],
      "romaji": "hikki",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "笔记；记录；笔试",
      "kanji_readings": [
        {
          "form": "筆記",
          "reading": "ひっき"
        }
      ],
      "examples": [
        {
          "ja": "先生の話を筆記しました。",
          "zh": "把老师的话记了下来。",
          "focus": ["筆記"],
          "zhFocus": ["记"]
        },
        {
          "ja": "午前は筆記の試験、午後は面接です。",
          "zh": "上午是笔试，下午是面试。",
          "focus": ["筆記"],
          "zhFocus": ["笔试"]
        },
        {
          "ja": "大事なところは筆記しておいてください。",
          "zh": "重要的地方请记下来。",
          "focus": ["筆記"],
          "zhFocus": ["记"]
        }
      ]
    },
    {
      "id": "n2-0698",
      "jlpt": "N2",
      "headword": "瞳",
      "source_form": "瞳",
      "variants": [
        "瞳"
      ],
      "reading": "ひとみ",
      "reading_variants": [
        "ひとみ"
      ],
      "romaji": "hitomi",
      "part_of_speech": "noun",
      "meaning_zh": "瞳孔；眼睛",
      "kanji_readings": [
        {
          "form": "瞳",
          "reading": "ひとみ"
        }
      ],
      "examples": [
        {
          "ja": "彼女は大きな瞳をしています。",
          "zh": "她有一双大眼睛。",
          "focus": ["瞳"],
          "zhFocus": ["眼睛"]
        },
        {
          "ja": "子供の瞳が輝いています。",
          "zh": "孩子的眼睛闪闪发光。",
          "focus": ["瞳"],
          "zhFocus": ["眼睛"]
        },
        {
          "ja": "暗い所では瞳が大きくなります。",
          "zh": "在暗处瞳孔会变大。",
          "focus": ["瞳"],
          "zhFocus": ["瞳孔"]
        }
      ]
    },
    {
      "id": "n2-0699",
      "jlpt": "N2",
      "headword": "日の出",
      "source_form": "日の出",
      "variants": [
        "日の出"
      ],
      "reading": "ひので",
      "reading_variants": [
        "ひので"
      ],
      "romaji": "hinode",
      "part_of_speech": "noun",
      "meaning_zh": "日出",
      "kanji_readings": [
        {
          "form": "日の出",
          "reading": "ひので"
        }
      ],
      "examples": [
        {
          "ja": "山の上で日の出を見ました。",
          "zh": "在山顶看了日出。",
          "focus": ["日の出"],
          "zhFocus": ["日出"]
        },
        {
          "ja": "冬は日の出が遅いです。",
          "zh": "冬天日出得晚。",
          "focus": ["日の出"],
          "zhFocus": ["日出"]
        },
        {
          "ja": "日の出の前に家を出ました。",
          "zh": "日出之前出了家门。",
          "focus": ["日の出"],
          "zhFocus": ["日出"]
        }
      ],
      "note_zh": "与「日の入り（日落）」相对。"
    },
    {
      "id": "n2-0700",
      "jlpt": "N2",
      "headword": "膨らます",
      "source_form": "膨らます",
      "variants": [
        "膨らます"
      ],
      "reading": "ふくらます",
      "reading_variants": [
        "ふくらます"
      ],
      "romaji": "fukuramasu",
      "part_of_speech": "verb",
      "meaning_zh": "使膨胀；鼓起",
      "kanji_readings": [
        {
          "form": "膨らます",
          "reading": "ふくらます"
        }
      ],
      "examples": [
        {
          "ja": "子供が風船を膨らましています。",
          "zh": "孩子在吹气球。",
          "focus": ["膨らまし"],
          "zhFocus": ["吹"]
        },
        {
          "ja": "彼は怒って、ほおを膨らましました。",
          "zh": "他气得鼓起了腮帮子。",
          "focus": ["膨らまし"],
          "zhFocus": ["鼓起"]
        },
        {
          "ja": "夢を膨らまして、留学の準備をしています。",
          "zh": "怀着憧憬准备留学。",
          "focus": ["膨らまし"]
        }
      ],
      "note_zh": "也说「膨らませる」；自动词是「膨らむ」。"
    },
    {
      "id": "n2-0701",
      "jlpt": "N2",
      "headword": "膨らむ",
      "source_form": "膨らむ",
      "variants": [
        "膨らむ"
      ],
      "reading": "ふくらむ",
      "reading_variants": [
        "ふくらむ"
      ],
      "romaji": "fukuramu",
      "part_of_speech": "verb",
      "meaning_zh": "膨胀；鼓起；（希望、费用等）增大",
      "senses_zh": [
        "膨胀；鼓起",
        "（希望、费用等）增大"
      ],
      "kanji_readings": [
        {
          "form": "膨らむ",
          "reading": "ふくらむ"
        }
      ],
      "examples": [
        {
          "ja": "パンが焼けて大きく膨らみました。",
          "zh": "面包烤得膨起来了。",
          "focus": ["膨らみ"],
          "zhFocus": ["膨起来"]
        },
        {
          "ja": "桜のつぼみが膨らんできました。",
          "zh": "樱花的花苞鼓起来了。",
          "focus": ["膨らん"],
          "zhFocus": ["鼓起来"]
        },
        {
          "ja": "予算が予定より膨らみました。",
          "zh": "预算比计划的增加了。",
          "focus": ["膨らみ"],
          "zhFocus": ["增加"]
        }
      ]
    },
    {
      "id": "n2-0702",
      "jlpt": "N2",
      "headword": "乱暴",
      "source_form": "乱暴",
      "variants": [
        "乱暴"
      ],
      "reading": "らんぼう",
      "reading_variants": [
        "らんぼう"
      ],
      "romaji": "ranbou",
      "part_of_speech": "suru-verb/na-adjective/noun",
      "meaning_zh": "粗暴；粗鲁；动粗",
      "kanji_readings": [
        {
          "form": "乱暴",
          "reading": "らんぼう"
        }
      ],
      "examples": [
        {
          "ja": "物を乱暴に扱わないでください。",
          "zh": "请不要粗暴地对待东西。",
          "focus": ["乱暴"],
          "zhFocus": ["粗暴"]
        },
        {
          "ja": "彼は言葉が乱暴です。",
          "zh": "他说话很粗鲁。",
          "focus": ["乱暴"],
          "zhFocus": ["粗鲁"]
        },
        {
          "ja": "人に乱暴してはいけません。",
          "zh": "不能对人动粗。",
          "focus": ["乱暴"],
          "zhFocus": ["动粗"]
        }
      ]
    },
    {
      "id": "n2-0703",
      "jlpt": "N2",
      "headword": "和服",
      "source_form": "和服",
      "variants": [
        "和服"
      ],
      "reading": "わふく",
      "reading_variants": [
        "わふく"
      ],
      "romaji": "wafuku",
      "part_of_speech": "noun",
      "meaning_zh": "和服",
      "kanji_readings": [
        {
          "form": "和服",
          "reading": "わふく"
        }
      ],
      "examples": [
        {
          "ja": "祖母はいつも和服を着ています。",
          "zh": "祖母总是穿着和服。",
          "focus": ["和服"],
          "zhFocus": ["和服"]
        },
        {
          "ja": "正月に和服で出かけました。",
          "zh": "新年穿着和服出门了。",
          "focus": ["和服"],
          "zhFocus": ["和服"]
        },
        {
          "ja": "和服を一人で着るのは難しいです。",
          "zh": "一个人穿和服很难。",
          "focus": ["和服"],
          "zhFocus": ["和服"]
        }
      ],
      "note_zh": "与「洋服（西服）」相对。"
    },
    {
      "id": "n2-0704",
      "jlpt": "N2",
      "headword": "浮かべる",
      "source_form": "浮かべる",
      "variants": [
        "浮かべる"
      ],
      "reading": "うかべる",
      "reading_variants": [
        "うかべる"
      ],
      "romaji": "ukaberu",
      "part_of_speech": "verb",
      "meaning_zh": "使漂浮；（脸上）露出；想起",
      "senses_zh": [
        "使漂浮",
        "（脸上）露出；想起"
      ],
      "kanji_readings": [
        {
          "form": "浮かべる",
          "reading": "うかべる"
        }
      ],
      "examples": [
        {
          "ja": "子供たちが池に船を浮かべて遊んでいます。",
          "zh": "孩子们在池塘里放船玩。",
          "focus": ["浮かべ"],
          "zhFocus": ["放"]
        },
        {
          "ja": "彼女は目に涙を浮かべていました。",
          "zh": "她眼里噙着泪水。",
          "focus": ["浮かべ"],
          "zhFocus": ["噙着"]
        },
        {
          "ja": "故郷の景色を思い浮かべました。",
          "zh": "想起了故乡的景色。",
          "focus": ["浮かべ"],
          "zhFocus": ["想起"]
        }
      ],
      "note_zh": "他动词；自动词是「浮かぶ（漂浮；浮现）」。"
    },
    {
      "id": "n2-0705",
      "jlpt": "N2",
      "headword": "英和",
      "source_form": "英和",
      "variants": [
        "英和"
      ],
      "reading": "えいわ",
      "reading_variants": [
        "えいわ"
      ],
      "romaji": "eiwa",
      "part_of_speech": "noun",
      "meaning_zh": "英日；英日词典",
      "kanji_readings": [
        {
          "form": "英和",
          "reading": "えいわ"
        }
      ],
      "examples": [
        {
          "ja": "英和辞典で単語を調べました。",
          "zh": "用英日词典查了单词。",
          "focus": ["英和"],
          "zhFocus": ["英日"]
        },
        {
          "ja": "この英和は例文が多いです。",
          "zh": "这本英日词典例句很多。",
          "focus": ["英和"],
          "zhFocus": ["英日词典"]
        },
        {
          "ja": "英和と和英の両方が入った辞書です。",
          "zh": "这是英日、日英两用的词典。",
          "focus": ["英和"],
          "zhFocus": ["英日"]
        }
      ],
      "note_zh": "与「和英（日英）」相对。"
    },
    {
      "id": "n2-0706",
      "jlpt": "N2",
      "headword": "格別",
      "source_form": "格別",
      "variants": [
        "格別"
      ],
      "reading": "かくべつ",
      "reading_variants": [
        "かくべつ"
      ],
      "romaji": "kakubetsu",
      "part_of_speech": "na-adjective/adverb",
      "meaning_zh": "格外；特别",
      "kanji_readings": [
        {
          "form": "格別",
          "reading": "かくべつ"
        }
      ],
      "examples": [
        {
          "ja": "山の上で飲むコーヒーは格別です。",
          "zh": "在山顶喝的咖啡格外好喝。",
          "focus": ["格別"],
          "zhFocus": ["格外"]
        },
        {
          "ja": "今年の夏は格別に暑いです。",
          "zh": "今年夏天特别热。",
          "focus": ["格別"],
          "zhFocus": ["特别"]
        },
        {
          "ja": "格別な理由はありません。",
          "zh": "没有什么特别的理由。",
          "focus": ["格別"],
          "zhFocus": ["特别"]
        }
      ]
    },
    {
      "id": "n2-0707",
      "jlpt": "N2",
      "headword": "曲線",
      "source_form": "曲線",
      "variants": [
        "曲線"
      ],
      "reading": "きょくせん",
      "reading_variants": [
        "きょくせん"
      ],
      "romaji": "kyokusen",
      "part_of_speech": "noun",
      "meaning_zh": "曲线",
      "kanji_readings": [
        {
          "form": "曲線",
          "reading": "きょくせん"
        }
      ],
      "examples": [
        {
          "ja": "グラフに曲線を描きました。",
          "zh": "在图表上画了曲线。",
          "focus": ["曲線"],
          "zhFocus": ["曲线"]
        },
        {
          "ja": "この建物は美しい曲線でできています。",
          "zh": "这座建筑由优美的曲线构成。",
          "focus": ["曲線"],
          "zhFocus": ["曲线"]
        },
        {
          "ja": "道路が大きな曲線を描いています。",
          "zh": "道路划出一道大弧线。",
          "focus": ["曲線"],
          "zhFocus": ["弧线"]
        }
      ],
      "note_zh": "与「直線（直线）」相对。"
    },
    {
      "id": "n2-0708",
      "jlpt": "N2",
      "headword": "金魚",
      "source_form": "金魚",
      "variants": [
        "金魚"
      ],
      "reading": "きんぎょ",
      "reading_variants": [
        "きんぎょ"
      ],
      "romaji": "kingyo",
      "part_of_speech": "noun",
      "meaning_zh": "金鱼",
      "kanji_readings": [
        {
          "form": "金魚",
          "reading": "きんぎょ"
        }
      ],
      "examples": [
        {
          "ja": "夏祭りで金魚をすくいました。",
          "zh": "在夏日祭上捞了金鱼。",
          "focus": ["金魚"],
          "zhFocus": ["金鱼"]
        },
        {
          "ja": "家で金魚を飼っています。",
          "zh": "家里养着金鱼。",
          "focus": ["金魚"],
          "zhFocus": ["金鱼"]
        },
        {
          "ja": "金魚にえさをやりました。",
          "zh": "给金鱼喂了食。",
          "focus": ["金魚"],
          "zhFocus": ["金鱼"]
        }
      ]
    },
    {
      "id": "n2-0709",
      "jlpt": "N2",
      "headword": "郡",
      "source_form": "郡",
      "variants": [
        "郡"
      ],
      "reading": "ぐん",
      "reading_variants": [
        "ぐん"
      ],
      "romaji": "gun",
      "part_of_speech": "noun",
      "meaning_zh": "郡（日本县以下的行政地域）",
      "kanji_readings": [
        {
          "form": "郡",
          "reading": "ぐん"
        }
      ],
      "examples": [
        {
          "ja": "祖父は山の多い郡に住んでいます。",
          "zh": "祖父住在一个多山的郡。",
          "focus": ["郡"],
          "zhFocus": ["郡"]
        },
        {
          "ja": "この郡には町が三つあります。",
          "zh": "这个郡有三个町。",
          "focus": ["郡"],
          "zhFocus": ["郡"]
        },
        {
          "ja": "住所には郡の名前も書いてください。",
          "zh": "地址里请也写上郡名。",
          "focus": ["郡"],
          "zhFocus": ["郡"]
        }
      ],
      "note_zh": "日本的郡是县以下的地理区划，现在主要出现在地址中。"
    },
    {
      "id": "n2-0710",
      "jlpt": "N2",
      "headword": "顕微鏡",
      "source_form": "顕微鏡",
      "variants": [
        "顕微鏡"
      ],
      "reading": "けんびきょう",
      "reading_variants": [
        "けんびきょう"
      ],
      "romaji": "kenbikyou",
      "part_of_speech": "noun",
      "meaning_zh": "显微镜",
      "kanji_readings": [
        {
          "form": "顕微鏡",
          "reading": "けんびきょう"
        }
      ],
      "examples": [
        {
          "ja": "顕微鏡で細胞を見ました。",
          "zh": "用显微镜观察了细胞。",
          "focus": ["顕微鏡"],
          "zhFocus": ["显微镜"]
        },
        {
          "ja": "理科の授業で顕微鏡を使いました。",
          "zh": "理科课上用了显微镜。",
          "focus": ["顕微鏡"],
          "zhFocus": ["显微镜"]
        },
        {
          "ja": "顕微鏡でないと見えないほど小さいです。",
          "zh": "小到不用显微镜就看不见。",
          "focus": ["顕微鏡"],
          "zhFocus": ["显微镜"]
        }
      ]
    },
    {
      "id": "n2-0711",
      "jlpt": "N2",
      "headword": "鉱物",
      "source_form": "鉱物",
      "variants": [
        "鉱物"
      ],
      "reading": "こうぶつ",
      "reading_variants": [
        "こうぶつ"
      ],
      "romaji": "koubutsu",
      "part_of_speech": "noun",
      "meaning_zh": "矿物",
      "kanji_readings": [
        {
          "form": "鉱物",
          "reading": "こうぶつ"
        }
      ],
      "examples": [
        {
          "ja": "この山ではいろいろな鉱物がとれます。",
          "zh": "这座山能采到各种矿物。",
          "focus": ["鉱物"],
          "zhFocus": ["矿物"]
        },
        {
          "ja": "博物館で珍しい鉱物を見ました。",
          "zh": "在博物馆看到了罕见的矿物。",
          "focus": ["鉱物"],
          "zhFocus": ["矿物"]
        },
        {
          "ja": "鉱物の種類を調べています。",
          "zh": "在调查矿物的种类。",
          "focus": ["鉱物"],
          "zhFocus": ["矿物"]
        }
      ]
    },
    {
      "id": "n2-0712",
      "jlpt": "N2",
      "headword": "磁石",
      "source_form": "磁石",
      "variants": [
        "磁石"
      ],
      "reading": "じしゃく",
      "reading_variants": [
        "じしゃく"
      ],
      "romaji": "jishaku",
      "part_of_speech": "noun",
      "meaning_zh": "磁铁；指南针",
      "senses_zh": [
        "磁铁",
        "指南针"
      ],
      "kanji_readings": [
        {
          "form": "磁石",
          "reading": "じしゃく"
        }
      ],
      "examples": [
        {
          "ja": "冷蔵庫に磁石でメモを貼りました。",
          "zh": "用磁铁把便条贴在了冰箱上。",
          "focus": ["磁石"],
          "zhFocus": ["磁铁"]
        },
        {
          "ja": "磁石は鉄を引きつけます。",
          "zh": "磁铁吸铁。",
          "focus": ["磁石"],
          "zhFocus": ["磁铁"]
        },
        {
          "ja": "山で磁石を使って方角を調べました。",
          "zh": "在山里用指南针辨别了方向。",
          "focus": ["磁石"],
          "zhFocus": ["指南针"]
        }
      ]
    },
    {
      "id": "n2-0713",
      "jlpt": "N2",
      "headword": "自然科学",
      "source_form": "自然科学",
      "variants": [
        "自然科学"
      ],
      "reading": "しぜんかがく",
      "reading_variants": [
        "しぜんかがく"
      ],
      "romaji": "shizenkagaku",
      "part_of_speech": "noun",
      "meaning_zh": "自然科学",
      "kanji_readings": [
        {
          "form": "自然科学",
          "reading": "しぜんかがく"
        }
      ],
      "examples": [
        {
          "ja": "物理や化学は自然科学です。",
          "zh": "物理和化学属于自然科学。",
          "focus": ["自然科学"],
          "zhFocus": ["自然科学"]
        },
        {
          "ja": "彼は自然科学の研究をしています。",
          "zh": "他在从事自然科学研究。",
          "focus": ["自然科学"],
          "zhFocus": ["自然科学"]
        },
        {
          "ja": "自然科学に興味があります。",
          "zh": "对自然科学感兴趣。",
          "focus": ["自然科学"],
          "zhFocus": ["自然科学"]
        }
      ],
      "note_zh": "与「社会科学（社会科学）」相对。"
    },
    {
      "id": "n2-0714",
      "jlpt": "N2",
      "headword": "湿気",
      "source_form": "湿気",
      "variants": [
        "湿気"
      ],
      "reading": "しっけ",
      "reading_variants": [
        "しっけ"
      ],
      "romaji": "shikke",
      "part_of_speech": "noun",
      "meaning_zh": "湿气；潮气",
      "kanji_readings": [
        {
          "form": "湿気",
          "reading": "しっけ"
        }
      ],
      "examples": [
        {
          "ja": "梅雨は湿気が多いです。",
          "zh": "梅雨季节湿气很重。",
          "focus": ["湿気"],
          "zhFocus": ["湿气"]
        },
        {
          "ja": "湿気でパンにかびが生えました。",
          "zh": "面包受潮长霉了。",
          "focus": ["湿気"],
          "zhFocus": ["潮"]
        },
        {
          "ja": "押し入れの湿気を取ります。",
          "zh": "去除壁橱里的潮气。",
          "focus": ["湿気"],
          "zhFocus": ["潮气"]
        }
      ],
      "note_zh": "也读「しっき」。"
    },
    {
      "id": "n2-0715",
      "jlpt": "N2",
      "headword": "消毒",
      "source_form": "消毒",
      "variants": [
        "消毒"
      ],
      "reading": "しょうどく",
      "reading_variants": [
        "しょうどく"
      ],
      "romaji": "shoudoku",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "消毒",
      "kanji_readings": [
        {
          "form": "消毒",
          "reading": "しょうどく"
        }
      ],
      "examples": [
        {
          "ja": "けがをした所を消毒しました。",
          "zh": "给受伤的地方消了毒。",
          "focus": ["消毒"],
          "zhFocus": ["消"]
        },
        {
          "ja": "入り口で手を消毒してください。",
          "zh": "请在入口处给手消毒。",
          "focus": ["消毒"],
          "zhFocus": ["消毒"]
        },
        {
          "ja": "使ったはさみを消毒しました。",
          "zh": "给用过的剪刀消了毒。",
          "focus": ["消毒"],
          "zhFocus": ["消"]
        }
      ]
    },
    {
      "id": "n2-0716",
      "jlpt": "N2",
      "headword": "食塩",
      "source_form": "食塩",
      "variants": [
        "食塩"
      ],
      "reading": "しょくえん",
      "reading_variants": [
        "しょくえん"
      ],
      "romaji": "shokuen",
      "part_of_speech": "noun",
      "meaning_zh": "食盐",
      "kanji_readings": [
        {
          "form": "食塩",
          "reading": "しょくえん"
        }
      ],
      "examples": [
        {
          "ja": "お湯に食塩を少し入れます。",
          "zh": "在热水里放一点食盐。",
          "focus": ["食塩"],
          "zhFocus": ["食盐"]
        },
        {
          "ja": "食塩のとりすぎは体によくありません。",
          "zh": "食盐摄入过多对身体不好。",
          "focus": ["食塩"],
          "zhFocus": ["食盐"]
        },
        {
          "ja": "この料理には食塩を使っていません。",
          "zh": "这道菜没有用食盐。",
          "focus": ["食塩"],
          "zhFocus": ["食盐"]
        }
      ]
    },
    {
      "id": "n2-0717",
      "jlpt": "N2",
      "headword": "真空",
      "source_form": "真空",
      "variants": [
        "真空"
      ],
      "reading": "しんくう",
      "reading_variants": [
        "しんくう"
      ],
      "romaji": "shinkuu",
      "part_of_speech": "noun",
      "meaning_zh": "真空",
      "kanji_readings": [
        {
          "form": "真空",
          "reading": "しんくう"
        }
      ],
      "examples": [
        {
          "ja": "宇宙は真空に近い状態です。",
          "zh": "太空接近真空状态。",
          "focus": ["真空"],
          "zhFocus": ["真空"]
        },
        {
          "ja": "この袋は真空になっています。",
          "zh": "这个袋子是真空的。",
          "focus": ["真空"],
          "zhFocus": ["真空"]
        },
        {
          "ja": "空気を抜いて、真空の状態にします。",
          "zh": "抽出空气，使之成为真空状态。",
          "focus": ["真空"],
          "zhFocus": ["真空"]
        }
      ]
    },
    {
      "id": "n2-0718",
      "jlpt": "N2",
      "headword": "調味料",
      "source_form": "調味料",
      "variants": [
        "調味料"
      ],
      "reading": "ちょうみりょう",
      "reading_variants": [
        "ちょうみりょう"
      ],
      "romaji": "choumiryou",
      "part_of_speech": "noun",
      "meaning_zh": "调味料",
      "kanji_readings": [
        {
          "form": "調味料",
          "reading": "ちょうみりょう"
        }
      ],
      "examples": [
        {
          "ja": "しょうゆは日本の代表的な調味料です。",
          "zh": "酱油是日本代表性的调味料。",
          "focus": ["調味料"],
          "zhFocus": ["调味料"]
        },
        {
          "ja": "この料理には調味料をあまり使いません。",
          "zh": "这道菜不怎么用调味料。",
          "focus": ["調味料"],
          "zhFocus": ["调味料"]
        },
        {
          "ja": "台所に調味料が並んでいます。",
          "zh": "厨房里摆着调味料。",
          "focus": ["調味料"],
          "zhFocus": ["调味料"]
        }
      ]
    },
    {
      "id": "n2-0719",
      "jlpt": "N2",
      "headword": "直通",
      "source_form": "直通",
      "variants": [
        "直通"
      ],
      "reading": "ちょくつう",
      "reading_variants": [
        "ちょくつう"
      ],
      "romaji": "chokutsuu",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "直通；直达",
      "kanji_readings": [
        {
          "form": "直通",
          "reading": "ちょくつう"
        }
      ],
      "examples": [
        {
          "ja": "この電車は空港まで直通です。",
          "zh": "这趟电车直达机场。",
          "focus": ["直通"],
          "zhFocus": ["直达"]
        },
        {
          "ja": "担当者に直通の電話番号を教えてもらいました。",
          "zh": "要到了负责人的直拨电话号码。",
          "focus": ["直通"],
          "zhFocus": ["直拨"]
        },
        {
          "ja": "駅とデパートが地下で直通しています。",
          "zh": "车站和百货商店在地下直接相通。",
          "focus": ["直通"],
          "zhFocus": ["直接相通"]
        }
      ]
    },
    {
      "id": "n2-0720",
      "jlpt": "N2",
      "headword": "ついで",
      "source_form": "序で",
      "variants": [
        "ついで",
        "序で"
      ],
      "reading": "ついで",
      "reading_variants": [
        "ついで"
      ],
      "romaji": "tsuide",
      "part_of_speech": "noun",
      "meaning_zh": "顺便；顺便的机会",
      "kanji_readings": [
        {
          "form": "序で",
          "reading": "ついで"
        }
      ],
      "examples": [
        {
          "ja": "散歩のついでに、パンを買ってきました。",
          "zh": "散步时顺便买了面包回来。",
          "focus": ["ついで"],
          "zhFocus": ["顺便"]
        },
        {
          "ja": "ついでがあったら、これを届けてください。",
          "zh": "有顺便的机会的话，请把这个送过去。",
          "focus": ["ついで"],
          "zhFocus": ["顺便的机会"]
        },
        {
          "ja": "京都へ行ったついでに、友達に会いました。",
          "zh": "去京都时顺便见了朋友。",
          "focus": ["ついで"],
          "zhFocus": ["顺便"]
        }
      ],
      "note_zh": "一般写假名，多用「〜ついでに」。"
    },
    {
      "id": "n2-0721",
      "jlpt": "N2",
      "headword": "定期券",
      "source_form": "定期券",
      "variants": [
        "定期券"
      ],
      "reading": "ていきけん",
      "reading_variants": [
        "ていきけん"
      ],
      "romaji": "teikiken",
      "part_of_speech": "noun",
      "meaning_zh": "定期票；月票",
      "kanji_readings": [
        {
          "form": "定期券",
          "reading": "ていきけん"
        }
      ],
      "examples": [
        {
          "ja": "通勤のために定期券を買いました。",
          "zh": "为了上下班买了定期票。",
          "focus": ["定期券"],
          "zhFocus": ["定期票"]
        },
        {
          "ja": "定期券を家に忘れてしまいました。",
          "zh": "把月票忘在家里了。",
          "focus": ["定期券"],
          "zhFocus": ["月票"]
        },
        {
          "ja": "学生の定期券は安いです。",
          "zh": "学生的定期票很便宜。",
          "focus": ["定期券"],
          "zhFocus": ["定期票"]
        }
      ],
      "note_zh": "也简称「定期」。"
    },
    {
      "id": "n2-0722",
      "jlpt": "N2",
      "headword": "手首",
      "source_form": "手首",
      "variants": [
        "手首"
      ],
      "reading": "てくび",
      "reading_variants": [
        "てくび"
      ],
      "romaji": "tekubi",
      "part_of_speech": "noun",
      "meaning_zh": "手腕",
      "kanji_readings": [
        {
          "form": "手首",
          "reading": "てくび"
        }
      ],
      "examples": [
        {
          "ja": "転んで手首を痛めました。",
          "zh": "摔倒弄伤了手腕。",
          "focus": ["手首"],
          "zhFocus": ["手腕"]
        },
        {
          "ja": "手首に時計をしています。",
          "zh": "手腕上戴着表。",
          "focus": ["手首"],
          "zhFocus": ["手腕"]
        },
        {
          "ja": "テニスで手首を使いすぎました。",
          "zh": "打网球时手腕用得太多了。",
          "focus": ["手首"],
          "zhFocus": ["手腕"]
        }
      ]
    },
    {
      "id": "n2-0723",
      "jlpt": "N2",
      "headword": "出迎え",
      "source_form": "出迎え",
      "variants": [
        "出迎え"
      ],
      "reading": "でむかえ",
      "reading_variants": [
        "でむかえ"
      ],
      "romaji": "demukae",
      "part_of_speech": "noun",
      "meaning_zh": "迎接；接人",
      "kanji_readings": [
        {
          "form": "出迎え",
          "reading": "でむかえ"
        }
      ],
      "examples": [
        {
          "ja": "空港まで出迎えに来てくれて、ありがとう。",
          "zh": "谢谢你到机场来接我。",
          "focus": ["出迎え"],
          "zhFocus": ["接"]
        },
        {
          "ja": "たくさんの人の出迎えを受けました。",
          "zh": "受到了许多人的迎接。",
          "focus": ["出迎え"],
          "zhFocus": ["迎接"]
        },
        {
          "ja": "駅に出迎えの車が来ています。",
          "zh": "车站有来接的车。",
          "focus": ["出迎え"],
          "zhFocus": ["接"]
        }
      ],
      "note_zh": "动词「出迎える（迎接）」的名词形。"
    },
    {
      "id": "n2-0724",
      "jlpt": "N2",
      "headword": "万歳",
      "source_form": "万歳",
      "variants": [
        "万歳"
      ],
      "reading": "ばんざい",
      "reading_variants": [
        "ばんざい"
      ],
      "romaji": "banzai",
      "part_of_speech": "interjection/noun",
      "meaning_zh": "万岁",
      "kanji_readings": [
        {
          "form": "万歳",
          "reading": "ばんざい"
        }
      ],
      "examples": [
        {
          "ja": "優勝が決まって、みんなで万歳をしました。",
          "zh": "夺冠确定后，大家一起高呼万岁。",
          "focus": ["万歳"],
          "zhFocus": ["万岁"]
        },
        {
          "ja": "合格した時、思わず「万歳」と叫びました。",
          "zh": "考上的时候，忍不住喊了声“万岁”。",
          "focus": ["万歳"],
          "zhFocus": ["万岁"]
        },
        {
          "ja": "子供たちが両手を上げて万歳しています。",
          "zh": "孩子们举起双手欢呼万岁。",
          "focus": ["万歳"],
          "zhFocus": ["万岁"]
        }
      ],
      "note_zh": "常举起双手同时喊。"
    },
    {
      "id": "n2-0725",
      "jlpt": "N2",
      "headword": "標本",
      "source_form": "標本",
      "variants": [
        "標本"
      ],
      "reading": "ひょうほん",
      "reading_variants": [
        "ひょうほん"
      ],
      "romaji": "hyouhon",
      "part_of_speech": "noun",
      "meaning_zh": "标本；样本",
      "kanji_readings": [
        {
          "form": "標本",
          "reading": "ひょうほん"
        }
      ],
      "examples": [
        {
          "ja": "夏休みに昆虫の標本を作りました。",
          "zh": "暑假做了昆虫标本。",
          "focus": ["標本"],
          "zhFocus": ["标本"]
        },
        {
          "ja": "博物館に植物の標本が並んでいます。",
          "zh": "博物馆里陈列着植物标本。",
          "focus": ["標本"],
          "zhFocus": ["标本"]
        },
        {
          "ja": "調査のために標本を集めました。",
          "zh": "为了调查收集了样本。",
          "focus": ["標本"],
          "zhFocus": ["样本"]
        }
      ]
    },
    {
      "id": "n2-0726",
      "jlpt": "N2",
      "headword": "不規則",
      "source_form": "不規則",
      "variants": [
        "不規則"
      ],
      "reading": "ふきそく",
      "reading_variants": [
        "ふきそく"
      ],
      "romaji": "fukisoku",
      "part_of_speech": "na-adjective/noun",
      "meaning_zh": "不规则；没有规律",
      "kanji_readings": [
        {
          "form": "不規則",
          "reading": "ふきそく"
        }
      ],
      "examples": [
        {
          "ja": "不規則な生活は体によくありません。",
          "zh": "生活不规律对身体不好。",
          "focus": ["不規則"],
          "zhFocus": ["不规律"]
        },
        {
          "ja": "この仕事は時間が不規則です。",
          "zh": "这份工作时间不固定。",
          "focus": ["不規則"],
          "zhFocus": ["不固定"]
        },
        {
          "ja": "英語には不規則な動詞があります。",
          "zh": "英语里有不规则动词。",
          "focus": ["不規則"],
          "zhFocus": ["不规则"]
        }
      ]
    },
    {
      "id": "n2-0727",
      "jlpt": "N2",
      "headword": "不通",
      "source_form": "不通",
      "variants": [
        "不通"
      ],
      "reading": "ふつう",
      "reading_variants": [
        "ふつう"
      ],
      "romaji": "futsuu",
      "part_of_speech": "noun",
      "meaning_zh": "（交通、通信）中断；不通",
      "kanji_readings": [
        {
          "form": "不通",
          "reading": "ふつう"
        }
      ],
      "examples": [
        {
          "ja": "大雪で電車が不通になりました。",
          "zh": "因为大雪，电车停运了。",
          "focus": ["不通"],
          "zhFocus": ["停运"]
        },
        {
          "ja": "地震で電話が不通になっています。",
          "zh": "因为地震，电话打不通。",
          "focus": ["不通"],
          "zhFocus": ["打不通"]
        },
        {
          "ja": "事故のため、この道路は不通です。",
          "zh": "因为事故，这条路不通。",
          "focus": ["不通"],
          "zhFocus": ["不通"]
        }
      ],
      "note_zh": "与「普通（普通）」同音。"
    },
    {
      "id": "n2-0728",
      "jlpt": "N2",
      "headword": "吹雪",
      "source_form": "吹雪",
      "variants": [
        "吹雪"
      ],
      "reading": "ふぶき",
      "reading_variants": [
        "ふぶき"
      ],
      "romaji": "fubuki",
      "part_of_speech": "noun",
      "meaning_zh": "暴风雪",
      "kanji_readings": [
        {
          "form": "吹雪",
          "reading": "ふぶき"
        }
      ],
      "examples": [
        {
          "ja": "山は吹雪で何も見えません。",
          "zh": "山里刮着暴风雪，什么都看不见。",
          "focus": ["吹雪"],
          "zhFocus": ["暴风雪"]
        },
        {
          "ja": "吹雪の中を歩いて帰りました。",
          "zh": "在暴风雪中走回了家。",
          "focus": ["吹雪"],
          "zhFocus": ["暴风雪"]
        },
        {
          "ja": "今夜は吹雪になるそうです。",
          "zh": "听说今晚会有暴风雪。",
          "focus": ["吹雪"],
          "zhFocus": ["暴风雪"]
        }
      ]
    },
    {
      "id": "n2-0729",
      "jlpt": "N2",
      "headword": "文体",
      "source_form": "文体",
      "variants": [
        "文体"
      ],
      "reading": "ぶんたい",
      "reading_variants": [
        "ぶんたい"
      ],
      "romaji": "buntai",
      "part_of_speech": "noun",
      "meaning_zh": "文体；文风",
      "kanji_readings": [
        {
          "form": "文体",
          "reading": "ぶんたい"
        }
      ],
      "examples": [
        {
          "ja": "この作家の文体はとても読みやすいです。",
          "zh": "这位作家的文风很好读。",
          "focus": ["文体"],
          "zhFocus": ["文风"]
        },
        {
          "ja": "手紙とレポートでは文体が違います。",
          "zh": "书信和报告的文体不同。",
          "focus": ["文体"],
          "zhFocus": ["文体"]
        },
        {
          "ja": "文体を変えると、印象が変わります。",
          "zh": "改变文体，给人的印象也会变。",
          "focus": ["文体"],
          "zhFocus": ["文体"]
        }
      ]
    },
    {
      "id": "n2-0730",
      "jlpt": "N2",
      "headword": "北極",
      "source_form": "北極",
      "variants": [
        "北極"
      ],
      "reading": "ほっきょく",
      "reading_variants": [
        "ほっきょく"
      ],
      "romaji": "hokkyoku",
      "part_of_speech": "noun",
      "meaning_zh": "北极",
      "kanji_readings": [
        {
          "form": "北極",
          "reading": "ほっきょく"
        }
      ],
      "examples": [
        {
          "ja": "北極には白いクマがいます。",
          "zh": "北极有白熊。",
          "focus": ["北極"],
          "zhFocus": ["北极"]
        },
        {
          "ja": "北極の氷が少なくなっています。",
          "zh": "北极的冰在减少。",
          "focus": ["北極"],
          "zhFocus": ["北极"]
        },
        {
          "ja": "北極へ行く船に乗りました。",
          "zh": "坐上了去北极的船。",
          "focus": ["北極"],
          "zhFocus": ["北极"]
        }
      ],
      "note_zh": "与「南極（南极）」相对。"
    },
    {
      "id": "n2-0731",
      "jlpt": "N2",
      "headword": "餅",
      "source_form": "餅",
      "variants": [
        "餅"
      ],
      "reading": "もち",
      "reading_variants": [
        "もち"
      ],
      "romaji": "mochi",
      "part_of_speech": "noun",
      "meaning_zh": "年糕；糯米糕",
      "kanji_readings": [
        {
          "form": "餅",
          "reading": "もち"
        }
      ],
      "examples": [
        {
          "ja": "正月に餅を食べます。",
          "zh": "新年吃年糕。",
          "focus": ["餅"],
          "zhFocus": ["年糕"]
        },
        {
          "ja": "焼いた餅にしょうゆをつけました。",
          "zh": "在烤年糕上蘸了酱油。",
          "focus": ["餅"],
          "zhFocus": ["年糕"]
        },
        {
          "ja": "餅をのどに詰まらせないように気をつけてください。",
          "zh": "请注意别让年糕噎住喉咙。",
          "focus": ["餅"],
          "zhFocus": ["年糕"]
        }
      ],
      "note_zh": "常说「お餅」。"
    },
    {
      "id": "n2-0732",
      "jlpt": "N2",
      "headword": "盛る",
      "source_form": "盛る",
      "variants": [
        "盛る"
      ],
      "reading": "もる",
      "reading_variants": [
        "もる"
      ],
      "romaji": "moru",
      "part_of_speech": "verb",
      "meaning_zh": "盛（饭菜）；堆起",
      "senses_zh": [
        "盛（饭菜）",
        "堆起"
      ],
      "kanji_readings": [
        {
          "form": "盛る",
          "reading": "もる"
        }
      ],
      "examples": [
        {
          "ja": "ご飯を茶わんに盛りました。",
          "zh": "把饭盛到了碗里。",
          "focus": ["盛り"],
          "zhFocus": ["盛"]
        },
        {
          "ja": "料理をきれいに皿に盛ってください。",
          "zh": "请把菜漂亮地装到盘子里。",
          "focus": ["盛っ"],
          "zhFocus": ["装"]
        },
        {
          "ja": "畑に土を盛って、野菜を植えました。",
          "zh": "在田里堆起土，种上了蔬菜。",
          "focus": ["盛っ"],
          "zhFocus": ["堆起"]
        }
      ]
    },
    {
      "id": "n2-0733",
      "jlpt": "N2",
      "headword": "領事",
      "source_form": "領事",
      "variants": [
        "領事"
      ],
      "reading": "りょうじ",
      "reading_variants": [
        "りょうじ"
      ],
      "romaji": "ryouji",
      "part_of_speech": "noun",
      "meaning_zh": "领事",
      "kanji_readings": [
        {
          "form": "領事",
          "reading": "りょうじ"
        }
      ],
      "examples": [
        {
          "ja": "父は外国で領事として働いています。",
          "zh": "父亲在国外担任领事。",
          "focus": ["領事"],
          "zhFocus": ["领事"]
        },
        {
          "ja": "領事館でビザを申請しました。",
          "zh": "在领事馆申请了签证。",
          "focus": ["領事"],
          "zhFocus": ["领事"]
        },
        {
          "ja": "領事に会って相談しました。",
          "zh": "见了领事，和他商量了。",
          "focus": ["領事"],
          "zhFocus": ["领事"]
        }
      ]
    },
    {
      "id": "n2-0734",
      "jlpt": "N2",
      "headword": "王女",
      "source_form": "王女",
      "variants": [
        "王女"
      ],
      "reading": "おうじょ",
      "reading_variants": [
        "おうじょ"
      ],
      "romaji": "oujo",
      "part_of_speech": "noun",
      "meaning_zh": "公主；王女",
      "kanji_readings": [
        {
          "form": "王女",
          "reading": "おうじょ"
        }
      ],
      "examples": [
        {
          "ja": "王女が城から手を振りました。",
          "zh": "公主在城堡里挥了挥手。",
          "focus": ["王女"],
          "zhFocus": ["公主"]
        },
        {
          "ja": "この物語には美しい王女が出てきます。",
          "zh": "这个故事里出现了一位美丽的公主。",
          "focus": ["王女"],
          "zhFocus": ["公主"]
        },
        {
          "ja": "王女の結婚式が行われました。",
          "zh": "举行了公主的婚礼。",
          "focus": ["王女"],
          "zhFocus": ["公主"]
        }
      ],
      "note_zh": "与「王子（王子）」相对。"
    },
    {
      "id": "n2-0735",
      "jlpt": "N2",
      "headword": "機関車",
      "source_form": "機関車",
      "variants": [
        "機関車"
      ],
      "reading": "きかんしゃ",
      "reading_variants": [
        "きかんしゃ"
      ],
      "romaji": "kikansha",
      "part_of_speech": "noun",
      "meaning_zh": "机车；火车头",
      "kanji_readings": [
        {
          "form": "機関車",
          "reading": "きかんしゃ"
        }
      ],
      "examples": [
        {
          "ja": "博物館で古い機関車を見ました。",
          "zh": "在博物馆看了老式机车。",
          "focus": ["機関車"],
          "zhFocus": ["机车"]
        },
        {
          "ja": "機関車が客車を引いています。",
          "zh": "火车头拉着客车厢。",
          "focus": ["機関車"],
          "zhFocus": ["火车头"]
        },
        {
          "ja": "子供のころ、機関車のおもちゃが好きでした。",
          "zh": "小时候喜欢火车头玩具。",
          "focus": ["機関車"],
          "zhFocus": ["火车头"]
        }
      ]
    },
    {
      "id": "n2-0736",
      "jlpt": "N2",
      "headword": "削る",
      "source_form": "削る",
      "variants": [
        "削る"
      ],
      "reading": "けずる",
      "reading_variants": [
        "けずる"
      ],
      "romaji": "kezuru",
      "part_of_speech": "verb",
      "meaning_zh": "削；刨；削减",
      "senses_zh": [
        "削；刨",
        "削减"
      ],
      "kanji_readings": [
        {
          "form": "削る",
          "reading": "けずる"
        }
      ],
      "examples": [
        {
          "ja": "鉛筆を削りました。",
          "zh": "削了铅笔。",
          "focus": ["削り"],
          "zhFocus": ["削"]
        },
        {
          "ja": "木を削って、いすを作りました。",
          "zh": "刨木头做了椅子。",
          "focus": ["削っ"],
          "zhFocus": ["刨"]
        },
        {
          "ja": "予算を削られてしまいました。",
          "zh": "预算被削减了。",
          "focus": ["削ら"],
          "zhFocus": ["削减"]
        }
      ]
    },
    {
      "id": "n2-0737",
      "jlpt": "N2",
      "headword": "心得る",
      "source_form": "心得る",
      "variants": [
        "心得る"
      ],
      "reading": "こころえる",
      "reading_variants": [
        "こころえる"
      ],
      "romaji": "kokoroeru",
      "part_of_speech": "verb",
      "meaning_zh": "懂得；领会；明白",
      "kanji_readings": [
        {
          "form": "心得る",
          "reading": "こころえる"
        }
      ],
      "examples": [
        {
          "ja": "彼は仕事のやり方をよく心得ています。",
          "zh": "他很懂得工作的方法。",
          "focus": ["心得"],
          "zhFocus": ["懂得"]
        },
        {
          "ja": "そのことは十分心得ております。",
          "zh": "那件事我非常明白。",
          "focus": ["心得"],
          "zhFocus": ["明白"]
        },
        {
          "ja": "お客様への接し方を心得ておくことが大切です。",
          "zh": "事先领会如何接待客人很重要。",
          "focus": ["心得"],
          "zhFocus": ["领会"]
        }
      ],
      "note_zh": "常用「〜を心得ている」。"
    },
    {
      "id": "n2-0738",
      "jlpt": "N2",
      "headword": "索引",
      "source_form": "索引",
      "variants": [
        "索引"
      ],
      "reading": "さくいん",
      "reading_variants": [
        "さくいん"
      ],
      "romaji": "sakuin",
      "part_of_speech": "noun",
      "meaning_zh": "索引",
      "kanji_readings": [
        {
          "form": "索引",
          "reading": "さくいん"
        }
      ],
      "examples": [
        {
          "ja": "本の後ろの索引で言葉を探しました。",
          "zh": "用书后面的索引查了词。",
          "focus": ["索引"],
          "zhFocus": ["索引"]
        },
        {
          "ja": "この辞書には索引が付いています。",
          "zh": "这本词典附有索引。",
          "focus": ["索引"],
          "zhFocus": ["索引"]
        },
        {
          "ja": "索引を見れば、すぐに分かります。",
          "zh": "看索引马上就能知道。",
          "focus": ["索引"],
          "zhFocus": ["索引"]
        }
      ]
    },
    {
      "id": "n2-0739",
      "jlpt": "N2",
      "headword": "刺す",
      "source_form": "刺す",
      "variants": [
        "刺す"
      ],
      "reading": "さす",
      "reading_variants": [
        "さす"
      ],
      "romaji": "sasu",
      "part_of_speech": "verb",
      "meaning_zh": "刺；扎；（虫）叮",
      "kanji_readings": [
        {
          "form": "刺す",
          "reading": "さす"
        }
      ],
      "examples": [
        {
          "ja": "蚊に足を刺されました。",
          "zh": "脚被蚊子叮了。",
          "focus": ["刺さ"],
          "zhFocus": ["叮"]
        },
        {
          "ja": "針で指を刺してしまいました。",
          "zh": "针扎到了手指。",
          "focus": ["刺し"],
          "zhFocus": ["扎"]
        },
        {
          "ja": "肉に竹の串を刺して焼きます。",
          "zh": "把竹签插在肉上烤。",
          "focus": ["刺し"],
          "zhFocus": ["插"]
        }
      ],
      "note_zh": "与「指す（指）」「差す（撑伞）」同音。"
    },
    {
      "id": "n2-0740",
      "jlpt": "N2",
      "headword": "雑音",
      "source_form": "雑音",
      "variants": [
        "雑音"
      ],
      "reading": "ざつおん",
      "reading_variants": [
        "ざつおん"
      ],
      "romaji": "zatsuon",
      "part_of_speech": "noun",
      "meaning_zh": "杂音；噪音",
      "kanji_readings": [
        {
          "form": "雑音",
          "reading": "ざつおん"
        }
      ],
      "examples": [
        {
          "ja": "ラジオに雑音が入ります。",
          "zh": "收音机里有杂音。",
          "focus": ["雑音"],
          "zhFocus": ["杂音"]
        },
        {
          "ja": "外の雑音がうるさくて、眠れません。",
          "zh": "外面的噪音太吵，睡不着。",
          "focus": ["雑音"],
          "zhFocus": ["噪音"]
        },
        {
          "ja": "電話の雑音で声がよく聞こえません。",
          "zh": "电话有杂音，听不清声音。",
          "focus": ["雑音"],
          "zhFocus": ["杂音"]
        }
      ]
    },
    {
      "id": "n2-0741",
      "jlpt": "N2",
      "headword": "順序",
      "source_form": "順序",
      "variants": [
        "順序"
      ],
      "reading": "じゅんじょ",
      "reading_variants": [
        "じゅんじょ"
      ],
      "romaji": "junjo",
      "part_of_speech": "noun",
      "meaning_zh": "顺序；次序；步骤",
      "kanji_readings": [
        {
          "form": "順序",
          "reading": "じゅんじょ"
        }
      ],
      "examples": [
        {
          "ja": "番号の順序で並んでください。",
          "zh": "请按号码顺序排队。",
          "focus": ["順序"],
          "zhFocus": ["顺序"]
        },
        {
          "ja": "説明の順序を間違えました。",
          "zh": "说明的次序弄错了。",
          "focus": ["順序"],
          "zhFocus": ["次序"]
        },
        {
          "ja": "物事には順序があります。",
          "zh": "凡事都有步骤。",
          "focus": ["順序"],
          "zhFocus": ["步骤"]
        }
      ],
      "note_zh": "比「順番」书面，多指排列或做事步骤的先后。"
    },
    {
      "id": "n2-0742",
      "jlpt": "N2",
      "headword": "図形",
      "source_form": "図形",
      "variants": [
        "図形"
      ],
      "reading": "ずけい",
      "reading_variants": [
        "ずけい"
      ],
      "romaji": "zukei",
      "part_of_speech": "noun",
      "meaning_zh": "图形",
      "kanji_readings": [
        {
          "form": "図形",
          "reading": "ずけい"
        }
      ],
      "examples": [
        {
          "ja": "算数の授業で図形を勉強しました。",
          "zh": "在算术课上学了图形。",
          "focus": ["図形"],
          "zhFocus": ["图形"]
        },
        {
          "ja": "三角形や四角形は図形です。",
          "zh": "三角形、四边形都是图形。",
          "focus": ["図形"],
          "zhFocus": ["图形"]
        },
        {
          "ja": "パソコンで図形を描きました。",
          "zh": "用电脑画了图形。",
          "focus": ["図形"],
          "zhFocus": ["图形"]
        }
      ]
    },
    {
      "id": "n2-0743",
      "jlpt": "N2",
      "headword": "正門",
      "source_form": "正門",
      "variants": [
        "正門"
      ],
      "reading": "せいもん",
      "reading_variants": [
        "せいもん"
      ],
      "romaji": "seimon",
      "part_of_speech": "noun",
      "meaning_zh": "正门",
      "kanji_readings": [
        {
          "form": "正門",
          "reading": "せいもん"
        }
      ],
      "examples": [
        {
          "ja": "学校の正門で待ち合わせましょう。",
          "zh": "在学校正门碰头吧。",
          "focus": ["正門"],
          "zhFocus": ["正门"]
        },
        {
          "ja": "正門は夜になると閉まります。",
          "zh": "正门一到晚上就关。",
          "focus": ["正門"],
          "zhFocus": ["正门"]
        },
        {
          "ja": "正門の前で写真を撮りました。",
          "zh": "在正门前拍了照。",
          "focus": ["正門"],
          "zhFocus": ["正门"]
        }
      ]
    },
    {
      "id": "n2-0744",
      "jlpt": "N2",
      "headword": "伝わる",
      "source_form": "伝わる",
      "variants": [
        "伝わる"
      ],
      "reading": "つたわる",
      "reading_variants": [
        "つたわる"
      ],
      "romaji": "tsutawaru",
      "part_of_speech": "verb",
      "meaning_zh": "流传；传达；传导",
      "kanji_readings": [
        {
          "form": "伝わる",
          "reading": "つたわる"
        }
      ],
      "examples": [
        {
          "ja": "うわさはすぐにみんなに伝わりました。",
          "zh": "传闻很快就传开了。",
          "focus": ["伝わり"],
          "zhFocus": ["传"]
        },
        {
          "ja": "私の気持ちが彼に伝わってうれしいです。",
          "zh": "我的心意传达给了他，很高兴。",
          "focus": ["伝わっ"],
          "zhFocus": ["传达"]
        },
        {
          "ja": "これはこの村に昔から伝わる話です。",
          "zh": "这是这个村子自古流传的故事。",
          "focus": ["伝わる"],
          "zhFocus": ["流传"]
        }
      ],
      "note_zh": "自动词；他动词是「伝える（传达）」。"
    },
    {
      "id": "n2-0745",
      "jlpt": "N2",
      "headword": "電柱",
      "source_form": "電柱",
      "variants": [
        "電柱"
      ],
      "reading": "でんちゅう",
      "reading_variants": [
        "でんちゅう"
      ],
      "romaji": "denchuu",
      "part_of_speech": "noun",
      "meaning_zh": "电线杆",
      "kanji_readings": [
        {
          "form": "電柱",
          "reading": "でんちゅう"
        }
      ],
      "examples": [
        {
          "ja": "車が電柱にぶつかりました。",
          "zh": "车撞上了电线杆。",
          "focus": ["電柱"],
          "zhFocus": ["电线杆"]
        },
        {
          "ja": "電柱の上に鳥が止まっています。",
          "zh": "电线杆上停着鸟。",
          "focus": ["電柱"],
          "zhFocus": ["电线杆"]
        },
        {
          "ja": "この道には電柱がありません。",
          "zh": "这条路上没有电线杆。",
          "focus": ["電柱"],
          "zhFocus": ["电线杆"]
        }
      ]
    },
    {
      "id": "n2-0746",
      "jlpt": "N2",
      "headword": "床の間",
      "source_form": "床の間",
      "variants": [
        "床の間"
      ],
      "reading": "とこのま",
      "reading_variants": [
        "とこのま"
      ],
      "romaji": "tokonoma",
      "part_of_speech": "noun",
      "meaning_zh": "壁龛（和室里摆放装饰的凹间）",
      "kanji_readings": [
        {
          "form": "床の間",
          "reading": "とこのま"
        }
      ],
      "examples": [
        {
          "ja": "床の間に花を飾りました。",
          "zh": "在壁龛里摆了花。",
          "focus": ["床の間"],
          "zhFocus": ["壁龛"]
        },
        {
          "ja": "床の間に古い掛け軸がかけてあります。",
          "zh": "壁龛里挂着一幅古老的挂轴。",
          "focus": ["床の間"],
          "zhFocus": ["壁龛"]
        },
        {
          "ja": "この和室には床の間があります。",
          "zh": "这间和室有壁龛。",
          "focus": ["床の間"],
          "zhFocus": ["壁龛"]
        }
      ]
    },
    {
      "id": "n2-0747",
      "jlpt": "N2",
      "headword": "日用品",
      "source_form": "日用品",
      "variants": [
        "日用品"
      ],
      "reading": "にちようひん",
      "reading_variants": [
        "にちようひん"
      ],
      "romaji": "nichiyouhin",
      "part_of_speech": "noun",
      "meaning_zh": "日用品",
      "kanji_readings": [
        {
          "form": "日用品",
          "reading": "にちようひん"
        }
      ],
      "examples": [
        {
          "ja": "スーパーで日用品を買いました。",
          "zh": "在超市买了日用品。",
          "focus": ["日用品"],
          "zhFocus": ["日用品"]
        },
        {
          "ja": "この店では日用品が安いです。",
          "zh": "这家店的日用品很便宜。",
          "focus": ["日用品"],
          "zhFocus": ["日用品"]
        },
        {
          "ja": "引っ越しの前に日用品をそろえました。",
          "zh": "搬家前备齐了日用品。",
          "focus": ["日用品"],
          "zhFocus": ["日用品"]
        }
      ]
    },
    {
      "id": "n2-0748",
      "jlpt": "N2",
      "headword": "日課",
      "source_form": "日課",
      "variants": [
        "日課"
      ],
      "reading": "にっか",
      "reading_variants": [
        "にっか"
      ],
      "romaji": "nikka",
      "part_of_speech": "noun",
      "meaning_zh": "每天的功课；日常习惯",
      "kanji_readings": [
        {
          "form": "日課",
          "reading": "にっか"
        }
      ],
      "examples": [
        {
          "ja": "毎朝散歩するのが祖父の日課です。",
          "zh": "每天早上散步是祖父的日常习惯。",
          "focus": ["日課"],
          "zhFocus": ["日常习惯"]
        },
        {
          "ja": "日記を書くことを日課にしています。",
          "zh": "把写日记当作每天的功课。",
          "focus": ["日課"],
          "zhFocus": ["每天的功课"]
        },
        {
          "ja": "犬の散歩は私の日課です。",
          "zh": "遛狗是我每天要做的事。",
          "focus": ["日課"],
          "zhFocus": ["每天要做的事"]
        }
      ]
    },
    {
      "id": "n2-0749",
      "jlpt": "N2",
      "headword": "文脈",
      "source_form": "文脈",
      "variants": [
        "文脈"
      ],
      "reading": "ぶんみゃく",
      "reading_variants": [
        "ぶんみゃく"
      ],
      "romaji": "bunmyaku",
      "part_of_speech": "noun",
      "meaning_zh": "上下文；文脉",
      "kanji_readings": [
        {
          "form": "文脈",
          "reading": "ぶんみゃく"
        }
      ],
      "examples": [
        {
          "ja": "言葉の意味は文脈から考えましょう。",
          "zh": "根据上下文来推测词义吧。",
          "focus": ["文脈"],
          "zhFocus": ["上下文"]
        },
        {
          "ja": "この文脈では、その言葉は使えません。",
          "zh": "在这个上下文里不能用那个词。",
          "focus": ["文脈"],
          "zhFocus": ["上下文"]
        },
        {
          "ja": "文脈が分かれば、意味も分かります。",
          "zh": "明白了上下文，意思也就明白了。",
          "focus": ["文脈"],
          "zhFocus": ["上下文"]
        }
      ]
    },
    {
      "id": "n2-0750",
      "jlpt": "N2",
      "headword": "干す",
      "source_form": "干す",
      "variants": [
        "干す"
      ],
      "reading": "ほす",
      "reading_variants": [
        "ほす"
      ],
      "romaji": "hosu",
      "part_of_speech": "verb",
      "meaning_zh": "晒；晾",
      "kanji_readings": [
        {
          "form": "干す",
          "reading": "ほす"
        }
      ],
      "examples": [
        {
          "ja": "天気がいいので、布団を干しました。",
          "zh": "天气好，就晒了被子。",
          "focus": ["干し"],
          "zhFocus": ["晒"]
        },
        {
          "ja": "洗濯物をベランダに干しています。",
          "zh": "把洗好的衣服晾在阳台上。",
          "focus": ["干し"],
          "zhFocus": ["晾"]
        },
        {
          "ja": "魚を干して保存します。",
          "zh": "把鱼晒干后保存。",
          "focus": ["干し"],
          "zhFocus": ["晒干"]
        }
      ]
    },
    {
      "id": "n2-0751",
      "jlpt": "N2",
      "headword": "見本",
      "source_form": "見本",
      "variants": [
        "見本"
      ],
      "reading": "みほん",
      "reading_variants": [
        "みほん"
      ],
      "romaji": "mihon",
      "part_of_speech": "noun",
      "meaning_zh": "样品；样本；榜样",
      "senses_zh": [
        "样品；样本",
        "榜样"
      ],
      "kanji_readings": [
        {
          "form": "見本",
          "reading": "みほん"
        }
      ],
      "examples": [
        {
          "ja": "商品の見本を見せてください。",
          "zh": "请给我看看商品的样品。",
          "focus": ["見本"],
          "zhFocus": ["样品"]
        },
        {
          "ja": "見本のとおりに作ってください。",
          "zh": "请照着样本做。",
          "focus": ["見本"],
          "zhFocus": ["样本"]
        },
        {
          "ja": "彼はみんなのいい見本です。",
          "zh": "他是大家的好榜样。",
          "focus": ["見本"],
          "zhFocus": ["榜样"]
        }
      ]
    },
    {
      "id": "n2-0752",
      "jlpt": "N2",
      "headword": "物差し",
      "source_form": "物差し",
      "variants": [
        "物差し"
      ],
      "reading": "ものさし",
      "reading_variants": [
        "ものさし"
      ],
      "romaji": "monosashi",
      "part_of_speech": "noun",
      "meaning_zh": "尺子；尺度；标准",
      "senses_zh": [
        "尺子",
        "尺度；标准"
      ],
      "kanji_readings": [
        {
          "form": "物差し",
          "reading": "ものさし"
        }
      ],
      "examples": [
        {
          "ja": "物差しで長さを測りました。",
          "zh": "用尺子量了长度。",
          "focus": ["物差し"],
          "zhFocus": ["尺子"]
        },
        {
          "ja": "物差しを使って、まっすぐな線を引きます。",
          "zh": "用尺子画直线。",
          "focus": ["物差し"],
          "zhFocus": ["尺子"]
        },
        {
          "ja": "自分の物差しだけで人を判断してはいけません。",
          "zh": "不能只用自己的标准来评判别人。",
          "focus": ["物差し"],
          "zhFocus": ["标准"]
        }
      ]
    },
    {
      "id": "n2-0753",
      "jlpt": "N2",
      "headword": "問答",
      "source_form": "問答",
      "variants": [
        "問答"
      ],
      "reading": "もんどう",
      "reading_variants": [
        "もんどう"
      ],
      "romaji": "mondou",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "问答；争论",
      "kanji_readings": [
        {
          "form": "問答",
          "reading": "もんどう"
        }
      ],
      "examples": [
        {
          "ja": "先生と学生が問答を続けています。",
          "zh": "老师和学生在一问一答。",
          "focus": ["問答"],
          "zhFocus": ["一问一答"]
        },
        {
          "ja": "簡単な問答で日本語を練習しました。",
          "zh": "用简单的问答练习了日语。",
          "focus": ["問答"],
          "zhFocus": ["问答"]
        },
        {
          "ja": "今さら問答しても仕方がありません。",
          "zh": "事到如今再争论也没用。",
          "focus": ["問答"],
          "zhFocus": ["争论"]
        }
      ]
    },
    {
      "id": "n2-0754",
      "jlpt": "N2",
      "headword": "家主",
      "source_form": "家主",
      "variants": [
        "家主"
      ],
      "reading": "やぬし",
      "reading_variants": [
        "やぬし"
      ],
      "romaji": "yanushi",
      "part_of_speech": "noun",
      "meaning_zh": "房东",
      "kanji_readings": [
        {
          "form": "家主",
          "reading": "やぬし"
        }
      ],
      "examples": [
        {
          "ja": "家主に家賃を払いました。",
          "zh": "给房东付了房租。",
          "focus": ["家主"],
          "zhFocus": ["房东"]
        },
        {
          "ja": "家主は隣に住んでいます。",
          "zh": "房东住在隔壁。",
          "focus": ["家主"],
          "zhFocus": ["房东"]
        },
        {
          "ja": "家主にペットを飼ってもいいか聞きました。",
          "zh": "问了房东可不可以养宠物。",
          "focus": ["家主"],
          "zhFocus": ["房东"]
        }
      ],
      "note_zh": "也说「大家（おおや）」。"
    },
    {
      "id": "n2-0755",
      "jlpt": "N2",
      "headword": "大通り",
      "source_form": "大通り",
      "variants": [
        "大通り"
      ],
      "reading": "おおどおり",
      "reading_variants": [
        "おおどおり"
      ],
      "romaji": "oodoori",
      "part_of_speech": "noun",
      "meaning_zh": "大街；大马路",
      "kanji_readings": [
        {
          "form": "大通り",
          "reading": "おおどおり"
        }
      ],
      "examples": [
        {
          "ja": "大通りに出ると、タクシーがつかまります。",
          "zh": "走到大街上就能打到出租车。",
          "focus": ["大通り"],
          "zhFocus": ["大街"]
        },
        {
          "ja": "大通りには店がたくさん並んでいます。",
          "zh": "大街上店铺林立。",
          "focus": ["大通り"],
          "zhFocus": ["大街"]
        },
        {
          "ja": "夜でも大通りは明るいです。",
          "zh": "即使是晚上，大马路也很亮。",
          "focus": ["大通り"],
          "zhFocus": ["大马路"]
        }
      ]
    },
    {
      "id": "n2-0756",
      "jlpt": "N2",
      "headword": "蚊",
      "source_form": "蚊",
      "variants": [
        "蚊"
      ],
      "reading": "か",
      "reading_variants": [
        "か"
      ],
      "romaji": "ka",
      "part_of_speech": "noun",
      "meaning_zh": "蚊子",
      "kanji_readings": [
        {
          "form": "蚊",
          "reading": "か"
        }
      ],
      "examples": [
        {
          "ja": "夏は蚊が多いです。",
          "zh": "夏天蚊子多。",
          "focus": ["蚊"],
          "zhFocus": ["蚊子"]
        },
        {
          "ja": "窓を開けたら、蚊が入ってきました。",
          "zh": "一开窗，蚊子就飞进来了。",
          "focus": ["蚊"],
          "zhFocus": ["蚊子"]
        },
        {
          "ja": "蚊に刺されて、かゆいです。",
          "zh": "被蚊子叮了，很痒。",
          "focus": ["蚊"],
          "zhFocus": ["蚊子"]
        }
      ]
    },
    {
      "id": "n2-0757",
      "jlpt": "N2",
      "headword": "乾杯",
      "source_form": "乾杯",
      "variants": [
        "乾杯"
      ],
      "reading": "かんぱい",
      "reading_variants": [
        "かんぱい"
      ],
      "romaji": "kanpai",
      "part_of_speech": "suru-verb/interjection/noun",
      "meaning_zh": "干杯",
      "kanji_readings": [
        {
          "form": "乾杯",
          "reading": "かんぱい"
        }
      ],
      "examples": [
        {
          "ja": "みんなで乾杯しましょう。",
          "zh": "大家一起干杯吧。",
          "focus": ["乾杯"],
          "zhFocus": ["干杯"]
        },
        {
          "ja": "二人の結婚を祝って乾杯しました。",
          "zh": "为两人的婚事举杯庆祝。",
          "focus": ["乾杯"],
          "zhFocus": ["举杯"]
        },
        {
          "ja": "社長が乾杯のあいさつをしました。",
          "zh": "社长致了祝酒词。",
          "focus": ["乾杯"],
          "zhFocus": ["祝酒"]
        }
      ]
    },
    {
      "id": "n2-0758",
      "jlpt": "N2",
      "headword": "材木",
      "source_form": "材木",
      "variants": [
        "材木"
      ],
      "reading": "ざいもく",
      "reading_variants": [
        "ざいもく"
      ],
      "romaji": "zaimoku",
      "part_of_speech": "noun",
      "meaning_zh": "（建筑用的）木料",
      "kanji_readings": [
        {
          "form": "材木",
          "reading": "ざいもく"
        }
      ],
      "examples": [
        {
          "ja": "家を建てるための材木を運びました。",
          "zh": "运来了盖房子用的木料。",
          "focus": ["材木"],
          "zhFocus": ["木料"]
        },
        {
          "ja": "材木屋で板を買いました。",
          "zh": "在木料店买了木板。",
          "focus": ["材木"],
          "zhFocus": ["木料"]
        },
        {
          "ja": "この材木はよく乾いています。",
          "zh": "这批木料晾得很干。",
          "focus": ["材木"],
          "zhFocus": ["木料"]
        }
      ],
      "note_zh": "多指加工好的建筑用木料；「木材」使用范围更广。"
    },
    {
      "id": "n2-0759",
      "jlpt": "N2",
      "headword": "酒場",
      "source_form": "酒場",
      "variants": [
        "酒場"
      ],
      "reading": "さかば",
      "reading_variants": [
        "さかば"
      ],
      "romaji": "sakaba",
      "part_of_speech": "noun",
      "meaning_zh": "酒馆；酒吧",
      "kanji_readings": [
        {
          "form": "酒場",
          "reading": "さかば"
        }
      ],
      "examples": [
        {
          "ja": "仕事の後、駅前の酒場で飲みました。",
          "zh": "下班后在车站前的酒馆喝了酒。",
          "focus": ["酒場"],
          "zhFocus": ["酒馆"]
        },
        {
          "ja": "この酒場はいつもにぎやかです。",
          "zh": "这家酒馆总是很热闹。",
          "focus": ["酒場"],
          "zhFocus": ["酒馆"]
        },
        {
          "ja": "古い酒場で昔の話をしました。",
          "zh": "在一家老酒馆聊起了往事。",
          "focus": ["酒場"],
          "zhFocus": ["酒馆"]
        }
      ]
    },
    {
      "id": "n2-0760",
      "jlpt": "N2",
      "headword": "座敷",
      "source_form": "座敷",
      "variants": [
        "座敷"
      ],
      "reading": "ざしき",
      "reading_variants": [
        "ざしき"
      ],
      "romaji": "zashiki",
      "part_of_speech": "noun",
      "meaning_zh": "（铺榻榻米的）客厅；日式房间",
      "kanji_readings": [
        {
          "form": "座敷",
          "reading": "ざしき"
        }
      ],
      "examples": [
        {
          "ja": "お客様を座敷に案内しました。",
          "zh": "把客人领进了日式客厅。",
          "focus": ["座敷"],
          "zhFocus": ["日式客厅"]
        },
        {
          "ja": "この店は座敷の席があります。",
          "zh": "这家店有榻榻米座位。",
          "focus": ["座敷"],
          "zhFocus": ["榻榻米"]
        },
        {
          "ja": "座敷でお茶を飲みました。",
          "zh": "在日式房间里喝了茶。",
          "focus": ["座敷"],
          "zhFocus": ["日式房间"]
        }
      ]
    },
    {
      "id": "n2-0761",
      "jlpt": "N2",
      "headword": "芯",
      "source_form": "芯",
      "variants": [
        "芯"
      ],
      "reading": "しん",
      "reading_variants": [
        "しん"
      ],
      "romaji": "shin",
      "part_of_speech": "noun",
      "meaning_zh": "芯；（铅笔的）笔芯；核",
      "kanji_readings": [
        {
          "form": "芯",
          "reading": "しん"
        }
      ],
      "examples": [
        {
          "ja": "鉛筆の芯が折れました。",
          "zh": "铅笔芯断了。",
          "focus": ["芯"],
          "zhFocus": ["芯"]
        },
        {
          "ja": "りんごの芯を捨てました。",
          "zh": "把苹果核扔了。",
          "focus": ["芯"],
          "zhFocus": ["核"]
        },
        {
          "ja": "ご飯の芯が残っていて、硬いです。",
          "zh": "米饭夹生，很硬。",
          "focus": ["芯"]
        }
      ]
    },
    {
      "id": "n2-0762",
      "jlpt": "N2",
      "headword": "生年月日",
      "source_form": "生年月日",
      "variants": [
        "生年月日"
      ],
      "reading": "せいねんがっぴ",
      "reading_variants": [
        "せいねんがっぴ"
      ],
      "romaji": "seinengappi",
      "part_of_speech": "noun",
      "meaning_zh": "出生年月日",
      "kanji_readings": [
        {
          "form": "生年月日",
          "reading": "せいねんがっぴ"
        }
      ],
      "examples": [
        {
          "ja": "ここに生年月日を書いてください。",
          "zh": "请在这里写上出生年月日。",
          "focus": ["生年月日"],
          "zhFocus": ["出生年月日"]
        },
        {
          "ja": "生年月日で年齢を確認します。",
          "zh": "根据出生年月日确认年龄。",
          "focus": ["生年月日"],
          "zhFocus": ["出生年月日"]
        },
        {
          "ja": "名前と生年月日を教えてください。",
          "zh": "请告诉我您的姓名和出生年月日。",
          "focus": ["生年月日"],
          "zhFocus": ["出生年月日"]
        }
      ]
    },
    {
      "id": "n2-0763",
      "jlpt": "N2",
      "headword": "栓",
      "source_form": "栓",
      "variants": [
        "栓"
      ],
      "reading": "せん",
      "reading_variants": [
        "せん"
      ],
      "romaji": "sen",
      "part_of_speech": "noun",
      "meaning_zh": "塞子；瓶塞；（水管等的）阀门",
      "kanji_readings": [
        {
          "form": "栓",
          "reading": "せん"
        }
      ],
      "examples": [
        {
          "ja": "瓶の栓を抜きました。",
          "zh": "拔掉了瓶塞。",
          "focus": ["栓"],
          "zhFocus": ["瓶塞"]
        },
        {
          "ja": "お風呂の栓をしてください。",
          "zh": "请把浴缸的塞子塞上。",
          "focus": ["栓"],
          "zhFocus": ["塞子"]
        },
        {
          "ja": "ガスの栓を閉めたか確認しました。",
          "zh": "确认了煤气阀门有没有关。",
          "focus": ["栓"],
          "zhFocus": ["阀门"]
        }
      ]
    },
    {
      "id": "n2-0764",
      "jlpt": "N2",
      "headword": "電球",
      "source_form": "電球",
      "variants": [
        "電球"
      ],
      "reading": "でんきゅう",
      "reading_variants": [
        "でんきゅう"
      ],
      "romaji": "denkyuu",
      "part_of_speech": "noun",
      "meaning_zh": "电灯泡",
      "kanji_readings": [
        {
          "form": "電球",
          "reading": "でんきゅう"
        }
      ],
      "examples": [
        {
          "ja": "電球が切れたので、取り替えました。",
          "zh": "灯泡坏了，就换了。",
          "focus": ["電球"],
          "zhFocus": ["灯泡"]
        },
        {
          "ja": "明るい電球を買いました。",
          "zh": "买了亮一点的灯泡。",
          "focus": ["電球"],
          "zhFocus": ["灯泡"]
        },
        {
          "ja": "天井の電球に手が届きません。",
          "zh": "够不着天花板上的灯泡。",
          "focus": ["電球"],
          "zhFocus": ["灯泡"]
        }
      ]
    },
    {
      "id": "n2-0765",
      "jlpt": "N2",
      "headword": "当番",
      "source_form": "当番",
      "variants": [
        "当番"
      ],
      "reading": "とうばん",
      "reading_variants": [
        "とうばん"
      ],
      "romaji": "touban",
      "part_of_speech": "noun",
      "meaning_zh": "值班；值日",
      "kanji_readings": [
        {
          "form": "当番",
          "reading": "とうばん"
        }
      ],
      "examples": [
        {
          "ja": "今日は私が掃除の当番です。",
          "zh": "今天轮到我值日打扫。",
          "focus": ["当番"],
          "zhFocus": ["值日"]
        },
        {
          "ja": "当番を決めて、毎日交代します。",
          "zh": "定好值班，每天轮换。",
          "focus": ["当番"],
          "zhFocus": ["值班"]
        },
        {
          "ja": "週末は病院の当番の医者がいます。",
          "zh": "周末医院有值班医生。",
          "focus": ["当番"],
          "zhFocus": ["值班"]
        }
      ]
    },
    {
      "id": "n2-0766",
      "jlpt": "N2",
      "headword": "不運",
      "source_form": "不運",
      "variants": [
        "不運"
      ],
      "reading": "ふうん",
      "reading_variants": [
        "ふうん"
      ],
      "romaji": "fuun",
      "part_of_speech": "na-adjective/noun",
      "meaning_zh": "不幸；运气不好",
      "kanji_readings": [
        {
          "form": "不運",
          "reading": "ふうん"
        }
      ],
      "examples": [
        {
          "ja": "彼は不運な事故にあいました。",
          "zh": "他遭遇了不幸的事故。",
          "focus": ["不運"],
          "zhFocus": ["不幸"]
        },
        {
          "ja": "雨で試合が中止になるとは、不運でした。",
          "zh": "比赛因雨取消，真是运气不好。",
          "focus": ["不運"],
          "zhFocus": ["运气不好"]
        },
        {
          "ja": "不運が重なって、計画が失敗しました。",
          "zh": "倒霉事接二连三，计划失败了。",
          "focus": ["不運"],
          "zhFocus": ["倒霉"]
        }
      ],
      "note_zh": "与「幸運（幸运）」相对。"
    },
    {
      "id": "n2-0767",
      "jlpt": "N2",
      "headword": "文房具",
      "source_form": "文房具",
      "variants": [
        "文房具"
      ],
      "reading": "ぶんぼうぐ",
      "reading_variants": [
        "ぶんぼうぐ"
      ],
      "romaji": "bunbougu",
      "part_of_speech": "noun",
      "meaning_zh": "文具",
      "kanji_readings": [
        {
          "form": "文房具",
          "reading": "ぶんぼうぐ"
        }
      ],
      "examples": [
        {
          "ja": "駅前の店で文房具を買いました。",
          "zh": "在车站前的店里买了文具。",
          "focus": ["文房具"],
          "zhFocus": ["文具"]
        },
        {
          "ja": "新学期の前に文房具をそろえました。",
          "zh": "新学期前备齐了文具。",
          "focus": ["文房具"],
          "zhFocus": ["文具"]
        },
        {
          "ja": "この店にはかわいい文房具がたくさんあります。",
          "zh": "这家店有很多可爱的文具。",
          "focus": ["文房具"],
          "zhFocus": ["文具"]
        }
      ]
    },
    {
      "id": "n2-0768",
      "jlpt": "N2",
      "headword": "並行",
      "source_form": "並行",
      "variants": [
        "並行"
      ],
      "reading": "へいこう",
      "reading_variants": [
        "へいこう"
      ],
      "romaji": "heikou",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "并行；同时进行",
      "kanji_readings": [
        {
          "form": "並行",
          "reading": "へいこう"
        }
      ],
      "examples": [
        {
          "ja": "道路と川が並行して流れています。",
          "zh": "道路和河流并行延伸。",
          "focus": ["並行"],
          "zhFocus": ["并行"]
        },
        {
          "ja": "二つの仕事を並行して進めています。",
          "zh": "两项工作在同时推进。",
          "focus": ["並行"],
          "zhFocus": ["同时"]
        },
        {
          "ja": "工事と並行して、調査も行います。",
          "zh": "在施工的同时也进行调查。",
          "focus": ["並行"],
          "zhFocus": ["同时"]
        }
      ],
      "note_zh": "多用「〜と並行して」。"
    },
    {
      "id": "n2-0769",
      "jlpt": "N2",
      "headword": "隔てる",
      "source_form": "隔てる",
      "variants": [
        "隔てる"
      ],
      "reading": "へだてる",
      "reading_variants": [
        "へだてる"
      ],
      "romaji": "hedateru",
      "part_of_speech": "verb",
      "meaning_zh": "隔开；间隔",
      "kanji_readings": [
        {
          "form": "隔てる",
          "reading": "へだてる"
        }
      ],
      "examples": [
        {
          "ja": "川を隔てて二つの町があります。",
          "zh": "两个城镇隔河相望。",
          "focus": ["隔て"],
          "zhFocus": ["隔"]
        },
        {
          "ja": "カーテンで部屋を隔てました。",
          "zh": "用窗帘把房间隔开了。",
          "focus": ["隔て"],
          "zhFocus": ["隔开"]
        },
        {
          "ja": "十年の時を隔てて、二人は再会しました。",
          "zh": "相隔十年，两人重逢了。",
          "focus": ["隔て"],
          "zhFocus": ["相隔"]
        }
      ]
    },
    {
      "id": "n2-0770",
      "jlpt": "N2",
      "headword": "坊さん",
      "source_form": "坊さん",
      "variants": [
        "坊さん"
      ],
      "reading": "ぼうさん",
      "reading_variants": [
        "ぼうさん"
      ],
      "romaji": "bousan",
      "part_of_speech": "noun",
      "meaning_zh": "和尚；僧人",
      "kanji_readings": [
        {
          "form": "坊さん",
          "reading": "ぼうさん"
        }
      ],
      "examples": [
        {
          "ja": "お寺の坊さんがお経を読んでいます。",
          "zh": "寺庙的和尚在念经。",
          "focus": ["坊さん"],
          "zhFocus": ["和尚"]
        },
        {
          "ja": "坊さんに話を聞きました。",
          "zh": "听和尚讲了话。",
          "focus": ["坊さん"],
          "zhFocus": ["和尚"]
        },
        {
          "ja": "葬式に坊さんが来ました。",
          "zh": "葬礼上来了一位僧人。",
          "focus": ["坊さん"],
          "zhFocus": ["僧人"]
        }
      ],
      "note_zh": "较亲切的说法，郑重时说「お坊さん」。"
    },
    {
      "id": "n2-0771",
      "jlpt": "N2",
      "headword": "快晴",
      "source_form": "快晴",
      "variants": [
        "快晴"
      ],
      "reading": "かいせい",
      "reading_variants": [
        "かいせい"
      ],
      "romaji": "kaisei",
      "part_of_speech": "noun",
      "meaning_zh": "晴朗；万里无云",
      "kanji_readings": [
        {
          "form": "快晴",
          "reading": "かいせい"
        }
      ],
      "examples": [
        {
          "ja": "今日は快晴です。",
          "zh": "今天天气晴朗。",
          "focus": ["快晴"],
          "zhFocus": ["晴朗"]
        },
        {
          "ja": "快晴の空の下で運動会をしました。",
          "zh": "在万里无云的天空下开了运动会。",
          "focus": ["快晴"],
          "zhFocus": ["万里无云"]
        },
        {
          "ja": "明日は全国的に快晴になるでしょう。",
          "zh": "明天全国大部分地区将是晴天。",
          "focus": ["快晴"],
          "zhFocus": ["晴天"]
        }
      ]
    },
    {
      "id": "n2-0772",
      "jlpt": "N2",
      "headword": "看病",
      "source_form": "看病",
      "variants": [
        "看病"
      ],
      "reading": "かんびょう",
      "reading_variants": [
        "かんびょう"
      ],
      "romaji": "kanbyou",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "看护；护理（病人）",
      "kanji_readings": [
        {
          "form": "看病",
          "reading": "かんびょう"
        }
      ],
      "examples": [
        {
          "ja": "母が風邪をひいたので、看病しました。",
          "zh": "妈妈感冒了，我照顾了她。",
          "focus": ["看病"],
          "zhFocus": ["照顾"]
        },
        {
          "ja": "家族の看病で疲れています。",
          "zh": "因为看护家人而很疲惫。",
          "focus": ["看病"],
          "zhFocus": ["看护"]
        },
        {
          "ja": "一晩中、子供の看病をしました。",
          "zh": "整夜照顾生病的孩子。",
          "focus": ["看病"],
          "zhFocus": ["照顾"]
        }
      ],
      "note_zh": "注意：不是中文的“看病（就医）”。"
    },
    {
      "id": "n2-0773",
      "jlpt": "N2",
      "headword": "苦心",
      "source_form": "苦心",
      "variants": [
        "苦心"
      ],
      "reading": "くしん",
      "reading_variants": [
        "くしん"
      ],
      "romaji": "kushin",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "苦心；煞费苦心",
      "kanji_readings": [
        {
          "form": "苦心",
          "reading": "くしん"
        }
      ],
      "examples": [
        {
          "ja": "苦心してこの作品を作りました。",
          "zh": "煞费苦心地完成了这部作品。",
          "focus": ["苦心"],
          "zhFocus": ["煞费苦心"]
        },
        {
          "ja": "彼の苦心が実りました。",
          "zh": "他的苦心得到了回报。",
          "focus": ["苦心"],
          "zhFocus": ["苦心"]
        },
        {
          "ja": "この料理には作った人の苦心が感じられます。",
          "zh": "这道菜能让人感受到厨师的用心。",
          "focus": ["苦心"],
          "zhFocus": ["用心"]
        }
      ]
    },
    {
      "id": "n2-0774",
      "jlpt": "N2",
      "headword": "小指",
      "source_form": "小指",
      "variants": [
        "小指"
      ],
      "reading": "こゆび",
      "reading_variants": [
        "こゆび"
      ],
      "romaji": "koyubi",
      "part_of_speech": "noun",
      "meaning_zh": "小指；小拇指",
      "kanji_readings": [
        {
          "form": "小指",
          "reading": "こゆび"
        }
      ],
      "examples": [
        {
          "ja": "ドアに小指を挟みました。",
          "zh": "小拇指被门夹了。",
          "focus": ["小指"],
          "zhFocus": ["小拇指"]
        },
        {
          "ja": "小指に指輪をしています。",
          "zh": "小拇指上戴着戒指。",
          "focus": ["小指"],
          "zhFocus": ["小拇指"]
        },
        {
          "ja": "足の小指をぶつけて痛いです。",
          "zh": "脚的小趾撞了一下，很疼。",
          "focus": ["小指"],
          "zhFocus": ["小趾"]
        }
      ]
    },
    {
      "id": "n2-0775",
      "jlpt": "N2",
      "headword": "逆さ",
      "source_form": "逆さ",
      "variants": [
        "逆さ"
      ],
      "reading": "さかさ",
      "reading_variants": [
        "さかさ"
      ],
      "romaji": "sakasa",
      "part_of_speech": "na-adjective/noun",
      "meaning_zh": "倒；颠倒",
      "kanji_readings": [
        {
          "form": "逆さ",
          "reading": "さかさ"
        }
      ],
      "examples": [
        {
          "ja": "絵を逆さに掛けてしまいました。",
          "zh": "把画挂倒了。",
          "focus": ["逆さ"],
          "zhFocus": ["倒"]
        },
        {
          "ja": "瓶を逆さにして、中身を出しました。",
          "zh": "把瓶子倒过来，倒出了里面的东西。",
          "focus": ["逆さ"],
          "zhFocus": ["倒过来"]
        },
        {
          "ja": "コップを逆さに置いて乾かします。",
          "zh": "把杯子倒扣着晾干。",
          "focus": ["逆さ"],
          "zhFocus": ["倒扣"]
        }
      ],
      "note_zh": "也说「逆さま」。"
    },
    {
      "id": "n2-0776",
      "jlpt": "N2",
      "headword": "修繕",
      "source_form": "修繕",
      "variants": [
        "修繕"
      ],
      "reading": "しゅうぜん",
      "reading_variants": [
        "しゅうぜん"
      ],
      "romaji": "shuuzen",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "修缮（房屋、家具等）",
      "kanji_readings": [
        {
          "form": "修繕",
          "reading": "しゅうぜん"
        }
      ],
      "examples": [
        {
          "ja": "古い家の屋根を修繕しました。",
          "zh": "修缮了老房子的屋顶。",
          "focus": ["修繕"],
          "zhFocus": ["修缮"]
        },
        {
          "ja": "お寺の修繕にお金がかかります。",
          "zh": "修缮寺庙要花不少钱。",
          "focus": ["修繕"],
          "zhFocus": ["修缮"]
        },
        {
          "ja": "壊れたいすを修繕してもらいました。",
          "zh": "请人修好了坏掉的椅子。",
          "focus": ["修繕"],
          "zhFocus": ["修"]
        }
      ],
      "note_zh": "比「修理」书面，多用于建筑物、家具等的修补。"
    },
    {
      "id": "n2-0777",
      "jlpt": "N2",
      "headword": "水蒸気",
      "source_form": "水蒸気",
      "variants": [
        "水蒸気"
      ],
      "reading": "すいじょうき",
      "reading_variants": [
        "すいじょうき"
      ],
      "romaji": "suijouki",
      "part_of_speech": "noun",
      "meaning_zh": "水蒸气",
      "kanji_readings": [
        {
          "form": "水蒸気",
          "reading": "すいじょうき"
        }
      ],
      "examples": [
        {
          "ja": "お湯が沸くと、水蒸気が出ます。",
          "zh": "水一开就会冒出水蒸气。",
          "focus": ["水蒸気"],
          "zhFocus": ["水蒸气"]
        },
        {
          "ja": "水蒸気が冷えて、雲になります。",
          "zh": "水蒸气冷却后变成云。",
          "focus": ["水蒸気"],
          "zhFocus": ["水蒸气"]
        },
        {
          "ja": "窓に水蒸気がついて、外が見えません。",
          "zh": "窗户上沾满了水汽，看不见外面。",
          "focus": ["水蒸気"],
          "zhFocus": ["水汽"]
        }
      ]
    },
    {
      "id": "n2-0778",
      "jlpt": "N2",
      "headword": "寸法",
      "source_form": "寸法",
      "variants": [
        "寸法"
      ],
      "reading": "すんぽう",
      "reading_variants": [
        "すんぽう"
      ],
      "romaji": "sunpou",
      "part_of_speech": "noun",
      "meaning_zh": "尺寸；尺码",
      "kanji_readings": [
        {
          "form": "寸法",
          "reading": "すんぽう"
        }
      ],
      "examples": [
        {
          "ja": "カーテンを作るために窓の寸法を測りました。",
          "zh": "为了做窗帘量了窗户的尺寸。",
          "focus": ["寸法"],
          "zhFocus": ["尺寸"]
        },
        {
          "ja": "服の寸法が合いません。",
          "zh": "衣服尺码不合适。",
          "focus": ["寸法"],
          "zhFocus": ["尺码"]
        },
        {
          "ja": "家具を買う前に、寸法をよく確認してください。",
          "zh": "买家具前请仔细确认尺寸。",
          "focus": ["寸法"],
          "zhFocus": ["尺寸"]
        }
      ]
    },
    {
      "id": "n2-0779",
      "jlpt": "N2",
      "headword": "断水",
      "source_form": "断水",
      "variants": [
        "断水"
      ],
      "reading": "だんすい",
      "reading_variants": [
        "だんすい"
      ],
      "romaji": "dansui",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "停水",
      "kanji_readings": [
        {
          "form": "断水",
          "reading": "だんすい"
        }
      ],
      "examples": [
        {
          "ja": "工事のため、明日は断水します。",
          "zh": "因为施工，明天停水。",
          "focus": ["断水"],
          "zhFocus": ["停水"]
        },
        {
          "ja": "地震で町が断水しました。",
          "zh": "因为地震，镇上停水了。",
          "focus": ["断水"],
          "zhFocus": ["停水"]
        },
        {
          "ja": "断水の間、水をためておきました。",
          "zh": "停水期间事先存好了水。",
          "focus": ["断水"],
          "zhFocus": ["停水"]
        }
      ]
    },
    {
      "id": "n2-0780",
      "jlpt": "N2",
      "headword": "断定",
      "source_form": "断定",
      "variants": [
        "断定"
      ],
      "reading": "だんてい",
      "reading_variants": [
        "だんてい"
      ],
      "romaji": "dantei",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "断定",
      "kanji_readings": [
        {
          "form": "断定",
          "reading": "だんてい"
        }
      ],
      "examples": [
        {
          "ja": "まだ犯人だと断定できません。",
          "zh": "还不能断定他就是犯人。",
          "focus": ["断定"],
          "zhFocus": ["断定"]
        },
        {
          "ja": "警察は事故の原因を断定しました。",
          "zh": "警方断定了事故原因。",
          "focus": ["断定"],
          "zhFocus": ["断定"]
        },
        {
          "ja": "証拠がないので、断定はできません。",
          "zh": "没有证据，所以无法断定。",
          "focus": ["断定"],
          "zhFocus": ["断定"]
        }
      ]
    },
    {
      "id": "n2-0781",
      "jlpt": "N2",
      "headword": "近々",
      "source_form": "近々",
      "variants": [
        "近々"
      ],
      "reading": "ちかぢか",
      "reading_variants": [
        "ちかぢか"
      ],
      "romaji": "chikajika",
      "part_of_speech": "adverb",
      "meaning_zh": "近日；不久（几天之内）",
      "kanji_readings": [
        {
          "form": "近々",
          "reading": "ちかぢか"
        }
      ],
      "examples": [
        {
          "ja": "近々引っ越す予定です。",
          "zh": "近日准备搬家。",
          "focus": ["近々"],
          "zhFocus": ["近日"]
        },
        {
          "ja": "近々またお会いしましょう。",
          "zh": "过几天再见吧。",
          "focus": ["近々"],
          "zhFocus": ["过几天"]
        },
        {
          "ja": "新しい店が近々オープンします。",
          "zh": "新店近日开张。",
          "focus": ["近々"],
          "zhFocus": ["近日"]
        }
      ],
      "note_zh": "也读「きんきん」。"
    },
    {
      "id": "n2-0782",
      "jlpt": "N2",
      "headword": "出来上がり",
      "source_form": "出来上がり",
      "variants": [
        "出来上がり"
      ],
      "reading": "できあがり",
      "reading_variants": [
        "できあがり"
      ],
      "romaji": "dekiagari",
      "part_of_speech": "noun",
      "meaning_zh": "完成；做好的样子",
      "kanji_readings": [
        {
          "form": "出来上がり",
          "reading": "できあがり"
        }
      ],
      "examples": [
        {
          "ja": "料理の出来上がりまで、もう少し待ってください。",
          "zh": "菜快做好了，请再稍等一下。",
          "focus": ["出来上がり"],
          "zhFocus": ["做好"]
        },
        {
          "ja": "思ったよりいい出来上がりです。",
          "zh": "做出来的效果比预想的好。",
          "focus": ["出来上がり"],
          "zhFocus": ["效果"]
        },
        {
          "ja": "ケーキの出来上がりを楽しみに待っています。",
          "zh": "期待着蛋糕做好。",
          "focus": ["出来上がり"],
          "zhFocus": ["做好"]
        }
      ],
      "note_zh": "动词「出来上がる（做好）」的名词形。"
    },
    {
      "id": "n2-0783",
      "jlpt": "N2",
      "headword": "鉄砲",
      "source_form": "鉄砲",
      "variants": [
        "鉄砲"
      ],
      "reading": "てっぽう",
      "reading_variants": [
        "てっぽう"
      ],
      "romaji": "teppou",
      "part_of_speech": "noun",
      "meaning_zh": "枪；火枪",
      "kanji_readings": [
        {
          "form": "鉄砲",
          "reading": "てっぽう"
        }
      ],
      "examples": [
        {
          "ja": "昔の鉄砲が博物館にあります。",
          "zh": "博物馆里有古代的火枪。",
          "focus": ["鉄砲"],
          "zhFocus": ["火枪"]
        },
        {
          "ja": "鉄砲の音が山に響きました。",
          "zh": "枪声在山间回响。",
          "focus": ["鉄砲"],
          "zhFocus": ["枪"]
        },
        {
          "ja": "鉄砲は昔、外国から日本に伝わりました。",
          "zh": "火枪很久以前从国外传到了日本。",
          "focus": ["鉄砲"],
          "zhFocus": ["火枪"]
        }
      ]
    },
    {
      "id": "n2-0784",
      "jlpt": "N2",
      "headword": "早口",
      "source_form": "早口",
      "variants": [
        "早口"
      ],
      "reading": "はやくち",
      "reading_variants": [
        "はやくち"
      ],
      "romaji": "hayakuchi",
      "part_of_speech": "noun",
      "meaning_zh": "说话快；快嘴",
      "kanji_readings": [
        {
          "form": "早口",
          "reading": "はやくち"
        }
      ],
      "examples": [
        {
          "ja": "彼は早口で何を言っているか分かりません。",
          "zh": "他说话太快，听不懂在说什么。",
          "focus": ["早口"],
          "zhFocus": ["说话太快"]
        },
        {
          "ja": "緊張すると、早口になります。",
          "zh": "一紧张就说得很快。",
          "focus": ["早口"],
          "zhFocus": ["说得很快"]
        },
        {
          "ja": "早口言葉を練習しました。",
          "zh": "练习了绕口令。",
          "focus": ["早口"]
        }
      ]
    },
    {
      "id": "n2-0785",
      "jlpt": "N2",
      "headword": "百科事典",
      "source_form": "ひゃっかじてん",
      "variants": [
        "百科事典"
      ],
      "reading": "ひゃっかじてん",
      "reading_variants": [
        "ひゃっかじてん"
      ],
      "romaji": "hyakkajiten",
      "part_of_speech": "noun",
      "meaning_zh": "百科全书",
      "kanji_readings": [
        {
          "form": "百科事典",
          "reading": "ひゃっかじてん"
        }
      ],
      "examples": [
        {
          "ja": "百科事典で調べました。",
          "zh": "查了百科全书。",
          "focus": ["百科事典"],
          "zhFocus": ["百科全书"]
        },
        {
          "ja": "図書館に百科事典がそろっています。",
          "zh": "图书馆里百科全书很齐全。",
          "focus": ["百科事典"],
          "zhFocus": ["百科全书"]
        },
        {
          "ja": "彼はまるで歩く百科事典です。",
          "zh": "他简直就是一部活百科全书。",
          "focus": ["百科事典"],
          "zhFocus": ["百科全书"]
        }
      ]
    },
    {
      "id": "n2-0786",
      "jlpt": "N2",
      "headword": "昼寝",
      "source_form": "昼寝",
      "variants": [
        "昼寝"
      ],
      "reading": "ひるね",
      "reading_variants": [
        "ひるね"
      ],
      "romaji": "hirune",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "午睡；午觉",
      "kanji_readings": [
        {
          "form": "昼寝",
          "reading": "ひるね"
        }
      ],
      "examples": [
        {
          "ja": "日曜日は昼寝をしました。",
          "zh": "星期天睡了午觉。",
          "focus": ["昼寝"],
          "zhFocus": ["午觉"]
        },
        {
          "ja": "猫がソファーで昼寝しています。",
          "zh": "猫在沙发上午睡。",
          "focus": ["昼寝"],
          "zhFocus": ["午睡"]
        },
        {
          "ja": "少し昼寝すると、頭がすっきりします。",
          "zh": "睡一会儿午觉，头脑就清醒了。",
          "focus": ["昼寝"],
          "zhFocus": ["午觉"]
        }
      ]
    },
    {
      "id": "n2-0787",
      "jlpt": "N2",
      "headword": "分量",
      "source_form": "分量",
      "variants": [
        "分量"
      ],
      "reading": "ぶんりょう",
      "reading_variants": [
        "ぶんりょう"
      ],
      "romaji": "bunryou",
      "part_of_speech": "noun",
      "meaning_zh": "分量；量",
      "kanji_readings": [
        {
          "form": "分量",
          "reading": "ぶんりょう"
        }
      ],
      "examples": [
        {
          "ja": "材料の分量を量ってください。",
          "zh": "请称一下材料的分量。",
          "focus": ["分量"],
          "zhFocus": ["分量"]
        },
        {
          "ja": "この店の料理は分量が多いです。",
          "zh": "这家店的菜量很大。",
          "focus": ["分量"],
          "zhFocus": ["量"]
        },
        {
          "ja": "薬は決まった分量を飲んでください。",
          "zh": "药请按规定的量服用。",
          "focus": ["分量"],
          "zhFocus": ["量"]
        }
      ]
    },
    {
      "id": "n2-0788",
      "jlpt": "N2",
      "headword": "蒸す",
      "source_form": "蒸す",
      "variants": [
        "蒸す"
      ],
      "reading": "むす",
      "reading_variants": [
        "むす"
      ],
      "romaji": "musu",
      "part_of_speech": "verb",
      "meaning_zh": "蒸；闷热",
      "senses_zh": [
        "蒸",
        "闷热"
      ],
      "kanji_readings": [
        {
          "form": "蒸す",
          "reading": "むす"
        }
      ],
      "examples": [
        {
          "ja": "野菜を蒸して食べます。",
          "zh": "把蔬菜蒸着吃。",
          "focus": ["蒸し"],
          "zhFocus": ["蒸"]
        },
        {
          "ja": "まんじゅうを蒸しました。",
          "zh": "蒸了豆沙包。",
          "focus": ["蒸し"],
          "zhFocus": ["蒸"]
        },
        {
          "ja": "今日は朝から蒸しますね。",
          "zh": "今天从早上起就很闷热啊。",
          "focus": ["蒸し"],
          "zhFocus": ["闷热"]
        }
      ]
    },
    {
      "id": "n2-0789",
      "jlpt": "N2",
      "headword": "油断",
      "source_form": "油断",
      "variants": [
        "油断"
      ],
      "reading": "ゆだん",
      "reading_variants": [
        "ゆだん"
      ],
      "romaji": "yudan",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "大意；疏忽",
      "kanji_readings": [
        {
          "form": "油断",
          "reading": "ゆだん"
        }
      ],
      "examples": [
        {
          "ja": "油断して、試合に負けました。",
          "zh": "一时大意，输了比赛。",
          "focus": ["油断"],
          "zhFocus": ["大意"]
        },
        {
          "ja": "最後まで油断しないでください。",
          "zh": "到最后都不要大意。",
          "focus": ["油断"],
          "zhFocus": ["大意"]
        },
        {
          "ja": "ちょっとした油断が事故につながります。",
          "zh": "一点点疏忽就会导致事故。",
          "focus": ["油断"],
          "zhFocus": ["疏忽"]
        }
      ]
    },
    {
      "id": "n2-0790",
      "jlpt": "N2",
      "headword": "預かる",
      "source_form": "預かる",
      "variants": [
        "預かる"
      ],
      "reading": "あずかる",
      "reading_variants": [
        "あずかる"
      ],
      "romaji": "azukaru",
      "part_of_speech": "verb",
      "meaning_zh": "保管；照看；（替人）收存",
      "kanji_readings": [
        {
          "form": "預かる",
          "reading": "あずかる"
        }
      ],
      "examples": [
        {
          "ja": "旅行の間、友達の犬を預かりました。",
          "zh": "旅行期间帮朋友照看了狗。",
          "focus": ["預かり"],
          "zhFocus": ["照看"]
        },
        {
          "ja": "荷物をお預かりします。",
          "zh": "我来为您保管行李。",
          "focus": ["預かり"],
          "zhFocus": ["保管"]
        },
        {
          "ja": "子供を預かってくれる所を探しています。",
          "zh": "在找能帮忙照看孩子的地方。",
          "focus": ["預かっ"],
          "zhFocus": ["照看"]
        }
      ],
      "note_zh": "与「預ける（寄存；托付）」相对：把东西交给别人是「預ける」，替人收存是「預かる」。"
    },
    {
      "id": "n2-0791",
      "jlpt": "N2",
      "headword": "暴れる",
      "source_form": "暴れる",
      "variants": [
        "暴れる"
      ],
      "reading": "あばれる",
      "reading_variants": [
        "あばれる"
      ],
      "romaji": "abareru",
      "part_of_speech": "verb",
      "meaning_zh": "乱闹；闹事；（动物）乱撞",
      "kanji_readings": [
        {
          "form": "暴れる",
          "reading": "あばれる"
        }
      ],
      "examples": [
        {
          "ja": "酔った人が店で暴れました。",
          "zh": "喝醉的人在店里闹事。",
          "focus": ["暴れ"],
          "zhFocus": ["闹事"]
        },
        {
          "ja": "馬が急に暴れ出しました。",
          "zh": "马突然狂躁起来。",
          "focus": ["暴れ"],
          "zhFocus": ["狂躁"]
        },
        {
          "ja": "子供が部屋の中で暴れています。",
          "zh": "孩子在房间里乱闹。",
          "focus": ["暴れ"],
          "zhFocus": ["乱闹"]
        }
      ]
    },
    {
      "id": "n2-0792",
      "jlpt": "N2",
      "headword": "貸家",
      "source_form": "貸家",
      "variants": [
        "貸家"
      ],
      "reading": "かしや",
      "reading_variants": [
        "かしや"
      ],
      "romaji": "kashiya",
      "part_of_speech": "noun",
      "meaning_zh": "出租的房子",
      "kanji_readings": [
        {
          "form": "貸家",
          "reading": "かしや"
        }
      ],
      "examples": [
        {
          "ja": "駅の近くに貸家を探しています。",
          "zh": "在车站附近找出租房。",
          "focus": ["貸家"],
          "zhFocus": ["出租房"]
        },
        {
          "ja": "この家は貸家です。",
          "zh": "这栋房子是出租的。",
          "focus": ["貸家"],
          "zhFocus": ["出租"]
        },
        {
          "ja": "祖父は貸家を持っています。",
          "zh": "祖父有出租的房子。",
          "focus": ["貸家"],
          "zhFocus": ["出租的房子"]
        }
      ],
      "note_zh": "也读「かしいえ」。"
    },
    {
      "id": "n2-0793",
      "jlpt": "N2",
      "headword": "兼ねる",
      "source_form": "兼ねる",
      "variants": [
        "兼ねる"
      ],
      "reading": "かねる",
      "reading_variants": [
        "かねる"
      ],
      "romaji": "kaneru",
      "part_of_speech": "verb",
      "meaning_zh": "兼；兼任；兼作",
      "kanji_readings": [
        {
          "form": "兼ねる",
          "reading": "かねる"
        }
      ],
      "examples": [
        {
          "ja": "趣味と実益を兼ねて、野菜を育てています。",
          "zh": "种菜既是爱好又有实际好处。",
          "focus": ["兼ね"],
          "zhFocus": ["既是"]
        },
        {
          "ja": "彼は社長と店長を兼ねています。",
          "zh": "他兼任社长和店长。",
          "focus": ["兼ね"],
          "zhFocus": ["兼任"]
        },
        {
          "ja": "この部屋は書斎と寝室を兼ねています。",
          "zh": "这个房间兼作书房和卧室。",
          "focus": ["兼ね"],
          "zhFocus": ["兼作"]
        }
      ],
      "note_zh": "接在动词后的「〜かねる（难以……）」是语法句型，另行学习。"
    },
    {
      "id": "n2-0794",
      "jlpt": "N2",
      "headword": "枯れる",
      "source_form": "枯れる",
      "variants": [
        "枯れる"
      ],
      "reading": "かれる",
      "reading_variants": [
        "かれる"
      ],
      "romaji": "kareru",
      "part_of_speech": "verb",
      "meaning_zh": "（草木）枯萎；凋零",
      "kanji_readings": [
        {
          "form": "枯れる",
          "reading": "かれる"
        }
      ],
      "examples": [
        {
          "ja": "水をやらなかったので、花が枯れました。",
          "zh": "没浇水，花枯萎了。",
          "focus": ["枯れ"],
          "zhFocus": ["枯萎"]
        },
        {
          "ja": "冬になると、草が枯れます。",
          "zh": "一到冬天，草就枯了。",
          "focus": ["枯れ"],
          "zhFocus": ["枯"]
        },
        {
          "ja": "枯れた葉を集めて捨てました。",
          "zh": "把枯叶收起来扔了。",
          "focus": ["枯れ"],
          "zhFocus": ["枯"]
        }
      ],
      "note_zh": "自动词；他动词是「枯らす（使枯萎）」。"
    },
    {
      "id": "n2-0795",
      "jlpt": "N2",
      "headword": "休息",
      "source_form": "休息",
      "variants": [
        "休息"
      ],
      "reading": "きゅうそく",
      "reading_variants": [
        "きゅうそく"
      ],
      "romaji": "kyuusoku",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "（较书面的）休息；歇息",
      "kanji_readings": [
        {
          "form": "休息",
          "reading": "きゅうそく"
        }
      ],
      "examples": [
        {
          "ja": "十分な休息を取ってください。",
          "zh": "请充分休息。",
          "focus": ["休息"],
          "zhFocus": ["休息"]
        },
        {
          "ja": "山の途中で少し休息しました。",
          "zh": "爬山途中稍微歇息了一下。",
          "focus": ["休息"],
          "zhFocus": ["歇息"]
        },
        {
          "ja": "体には休息が必要です。",
          "zh": "身体需要休息。",
          "focus": ["休息"],
          "zhFocus": ["休息"]
        }
      ],
      "note_zh": "比「休憩」书面，多指让身心恢复的休息。"
    },
    {
      "id": "n2-0796",
      "jlpt": "N2",
      "headword": "空想",
      "source_form": "空想",
      "variants": [
        "空想"
      ],
      "reading": "くうそう",
      "reading_variants": [
        "くうそう"
      ],
      "romaji": "kuusou",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "空想；幻想",
      "kanji_readings": [
        {
          "form": "空想",
          "reading": "くうそう"
        }
      ],
      "examples": [
        {
          "ja": "子供のころ、よく空想していました。",
          "zh": "小时候经常幻想。",
          "focus": ["空想"],
          "zhFocus": ["幻想"]
        },
        {
          "ja": "それはただの空想にすぎません。",
          "zh": "那只不过是空想罢了。",
          "focus": ["空想"],
          "zhFocus": ["空想"]
        },
        {
          "ja": "空想の世界を絵にしました。",
          "zh": "把幻想的世界画了出来。",
          "focus": ["空想"],
          "zhFocus": ["幻想"]
        }
      ]
    },
    {
      "id": "n2-0797",
      "jlpt": "N2",
      "headword": "言葉遣い",
      "source_form": "言葉遣い",
      "variants": [
        "言葉遣い"
      ],
      "reading": "ことばづかい",
      "reading_variants": [
        "ことばづかい"
      ],
      "romaji": "kotobazukai",
      "part_of_speech": "noun",
      "meaning_zh": "措辞；说话方式",
      "kanji_readings": [
        {
          "form": "言葉遣い",
          "reading": "ことばづかい"
        }
      ],
      "examples": [
        {
          "ja": "目上の人には言葉遣いに気をつけてください。",
          "zh": "对长辈说话请注意措辞。",
          "focus": ["言葉遣い"],
          "zhFocus": ["措辞"]
        },
        {
          "ja": "彼女は言葉遣いがとても丁寧です。",
          "zh": "她说话非常有礼貌。",
          "focus": ["言葉遣い"],
          "zhFocus": ["说话"]
        },
        {
          "ja": "子供の言葉遣いが乱暴になりました。",
          "zh": "孩子说话变得粗鲁了。",
          "focus": ["言葉遣い"],
          "zhFocus": ["说话"]
        }
      ]
    },
    {
      "id": "n2-0798",
      "jlpt": "N2",
      "headword": "爪",
      "source_form": "爪",
      "variants": [
        "爪"
      ],
      "reading": "つめ",
      "reading_variants": [
        "つめ"
      ],
      "romaji": "tsume",
      "part_of_speech": "noun",
      "meaning_zh": "指甲；爪子",
      "kanji_readings": [
        {
          "form": "爪",
          "reading": "つめ"
        }
      ],
      "examples": [
        {
          "ja": "爪が伸びたので、切りました。",
          "zh": "指甲长了，就剪了。",
          "focus": ["爪"],
          "zhFocus": ["指甲"]
        },
        {
          "ja": "猫が爪でソファーをひっかきました。",
          "zh": "猫用爪子挠了沙发。",
          "focus": ["爪"],
          "zhFocus": ["爪子"]
        },
        {
          "ja": "彼女は爪をきれいに塗っています。",
          "zh": "她把指甲涂得很漂亮。",
          "focus": ["爪"],
          "zhFocus": ["指甲"]
        }
      ]
    },
    {
      "id": "n2-0799",
      "jlpt": "N2",
      "headword": "艶",
      "source_form": "艶",
      "variants": [
        "艶"
      ],
      "reading": "つや",
      "reading_variants": [
        "つや"
      ],
      "romaji": "tsuya",
      "part_of_speech": "noun",
      "meaning_zh": "光泽；光亮",
      "kanji_readings": [
        {
          "form": "艶",
          "reading": "つや"
        }
      ],
      "examples": [
        {
          "ja": "この髪は艶があってきれいです。",
          "zh": "这头发有光泽，很漂亮。",
          "focus": ["艶"],
          "zhFocus": ["光泽"]
        },
        {
          "ja": "靴を磨いて艶を出しました。",
          "zh": "把鞋擦出了光亮。",
          "focus": ["艶"],
          "zhFocus": ["光亮"]
        },
        {
          "ja": "古い家具の艶がなくなりました。",
          "zh": "旧家具失去了光泽。",
          "focus": ["艶"],
          "zhFocus": ["光泽"]
        }
      ]
    },
    {
      "id": "n2-0800",
      "jlpt": "N2",
      "headword": "日陰",
      "source_form": "日陰",
      "variants": [
        "日陰"
      ],
      "reading": "ひかげ",
      "reading_variants": [
        "ひかげ"
      ],
      "romaji": "hikage",
      "part_of_speech": "noun",
      "meaning_zh": "背阴处；阴凉处",
      "kanji_readings": [
        {
          "form": "日陰",
          "reading": "ひかげ"
        }
      ],
      "examples": [
        {
          "ja": "暑いので、日陰で休みましょう。",
          "zh": "太热了，去阴凉处歇歇吧。",
          "focus": ["日陰"],
          "zhFocus": ["阴凉处"]
        },
        {
          "ja": "この植物は日陰でも育ちます。",
          "zh": "这种植物在背阴处也能生长。",
          "focus": ["日陰"],
          "zhFocus": ["背阴处"]
        },
        {
          "ja": "車を日陰に止めました。",
          "zh": "把车停在了阴凉处。",
          "focus": ["日陰"],
          "zhFocus": ["阴凉处"]
        }
      ],
      "note_zh": "与「日なた（向阳处）」相对。"
    },
    {
      "id": "n2-0801",
      "jlpt": "N2",
      "headword": "日にち",
      "source_form": "日日",
      "variants": [
        "日にち"
      ],
      "reading": "ひにち",
      "reading_variants": [
        "ひにち"
      ],
      "romaji": "hinichi",
      "part_of_speech": "noun",
      "meaning_zh": "（预定的）日子；天数",
      "kanji_readings": [
        {
          "form": "日にち",
          "reading": "ひにち"
        }
      ],
      "examples": [
        {
          "ja": "会議の日にちを決めましょう。",
          "zh": "定一下开会的日子吧。",
          "focus": ["日にち"],
          "zhFocus": ["日子"]
        },
        {
          "ja": "引っ越しの日にちが変わりました。",
          "zh": "搬家的日子改了。",
          "focus": ["日にち"],
          "zhFocus": ["日子"]
        },
        {
          "ja": "完成までまだ日にちがかかります。",
          "zh": "到完成还需要一些天数。",
          "focus": ["日にち"],
          "zhFocus": ["天数"]
        }
      ]
    },
    {
      "id": "n2-0802",
      "jlpt": "N2",
      "headword": "盆地",
      "source_form": "盆地",
      "variants": [
        "盆地"
      ],
      "reading": "ぼんち",
      "reading_variants": [
        "ぼんち"
      ],
      "romaji": "bonchi",
      "part_of_speech": "noun",
      "meaning_zh": "盆地",
      "kanji_readings": [
        {
          "form": "盆地",
          "reading": "ぼんち"
        }
      ],
      "examples": [
        {
          "ja": "京都は盆地なので、夏は暑いです。",
          "zh": "京都是盆地，所以夏天很热。",
          "focus": ["盆地"],
          "zhFocus": ["盆地"]
        },
        {
          "ja": "山に囲まれた盆地に町があります。",
          "zh": "被群山环绕的盆地里有一座小镇。",
          "focus": ["盆地"],
          "zhFocus": ["盆地"]
        },
        {
          "ja": "この盆地では果物がよくとれます。",
          "zh": "这个盆地盛产水果。",
          "focus": ["盆地"],
          "zhFocus": ["盆地"]
        }
      ]
    },
    {
      "id": "n2-0803",
      "jlpt": "N2",
      "headword": "枕",
      "source_form": "枕",
      "variants": [
        "枕"
      ],
      "reading": "まくら",
      "reading_variants": [
        "まくら"
      ],
      "romaji": "makura",
      "part_of_speech": "noun",
      "meaning_zh": "枕头",
      "kanji_readings": [
        {
          "form": "枕",
          "reading": "まくら"
        }
      ],
      "examples": [
        {
          "ja": "枕が変わると、眠れません。",
          "zh": "换了枕头就睡不着。",
          "focus": ["枕"],
          "zhFocus": ["枕头"]
        },
        {
          "ja": "新しい枕を買いました。",
          "zh": "买了新枕头。",
          "focus": ["枕"],
          "zhFocus": ["枕头"]
        },
        {
          "ja": "枕の高さが合いません。",
          "zh": "枕头的高度不合适。",
          "focus": ["枕"],
          "zhFocus": ["枕头"]
        }
      ]
    },
    {
      "id": "n2-0804",
      "jlpt": "N2",
      "headword": "診る",
      "source_form": "診る",
      "variants": [
        "診る"
      ],
      "reading": "みる",
      "reading_variants": [
        "みる"
      ],
      "romaji": "miru",
      "part_of_speech": "verb",
      "meaning_zh": "看（病）；诊察",
      "kanji_readings": [
        {
          "form": "診る",
          "reading": "みる"
        }
      ],
      "examples": [
        {
          "ja": "医者に診てもらいました。",
          "zh": "请医生看了病。",
          "focus": ["診"],
          "zhFocus": ["看了病"]
        },
        {
          "ja": "先生が患者を診ています。",
          "zh": "医生在给病人看病。",
          "focus": ["診"],
          "zhFocus": ["看病"]
        },
        {
          "ja": "子供の熱を診てください。",
          "zh": "请给孩子看看发烧。",
          "focus": ["診"],
          "zhFocus": ["看看"]
        }
      ],
      "note_zh": "与「見る（看）」同音，专指医生诊察。"
    },
    {
      "id": "n2-0805",
      "jlpt": "N2",
      "headword": "明け方",
      "source_form": "明け方",
      "variants": [
        "明け方"
      ],
      "reading": "あけがた",
      "reading_variants": [
        "あけがた"
      ],
      "romaji": "akegata",
      "part_of_speech": "noun",
      "meaning_zh": "天快亮时；清晨",
      "kanji_readings": [
        {
          "form": "明け方",
          "reading": "あけがた"
        }
      ],
      "examples": [
        {
          "ja": "明け方に雨が降りました。",
          "zh": "天快亮时下了雨。",
          "focus": ["明け方"],
          "zhFocus": ["天快亮时"]
        },
        {
          "ja": "明け方まで勉強していました。",
          "zh": "一直学习到天快亮。",
          "focus": ["明け方"],
          "zhFocus": ["天快亮"]
        },
        {
          "ja": "明け方の空はとてもきれいです。",
          "zh": "清晨的天空非常美。",
          "focus": ["明け方"],
          "zhFocus": ["清晨"]
        }
      ]
    },
    {
      "id": "n2-0806",
      "jlpt": "N2",
      "headword": "温まる",
      "source_form": "暖まる",
      "variants": [
        "温まる",
        "暖まる"
      ],
      "reading": "あたたまる",
      "reading_variants": [
        "あたたまる"
      ],
      "romaji": "atatamaru",
      "part_of_speech": "verb",
      "meaning_zh": "暖和起来；变暖",
      "kanji_readings": [
        {
          "form": "温まる",
          "reading": "あたたまる"
        },
        {
          "form": "暖まる",
          "reading": "あたたまる"
        }
      ],
      "examples": [
        {
          "ja": "お風呂に入って体が温まりました。",
          "zh": "泡了澡，身体暖和起来了。",
          "focus": ["温まり"],
          "zhFocus": ["暖和起来"]
        },
        {
          "ja": "部屋がなかなか温まりません。",
          "zh": "房间怎么也暖和不起来。",
          "focus": ["温まり"],
          "zhFocus": ["暖和"]
        },
        {
          "ja": "心が温まる話を聞きました。",
          "zh": "听了一个暖心的故事。",
          "focus": ["温まる"],
          "zhFocus": ["暖"]
        }
      ],
      "note_zh": "他动词是「温める（加热）」；表示气温、房间变暖时也写「暖まる」。"
    },
    {
      "id": "n2-0807",
      "jlpt": "N2",
      "headword": "飢える",
      "source_form": "飢える",
      "variants": [
        "飢える"
      ],
      "reading": "うえる",
      "reading_variants": [
        "うえる"
      ],
      "romaji": "ueru",
      "part_of_speech": "verb",
      "meaning_zh": "挨饿；渴望",
      "senses_zh": [
        "挨饿",
        "渴望"
      ],
      "kanji_readings": [
        {
          "form": "飢える",
          "reading": "うえる"
        }
      ],
      "examples": [
        {
          "ja": "昔は多くの人が飢えていました。",
          "zh": "以前很多人在挨饿。",
          "focus": ["飢え"],
          "zhFocus": ["挨饿"]
        },
        {
          "ja": "戦争で人々が飢えに苦しみました。",
          "zh": "战争中人们饱受饥饿之苦。",
          "focus": ["飢え"],
          "zhFocus": ["饥饿"]
        },
        {
          "ja": "彼は愛に飢えています。",
          "zh": "他渴望爱。",
          "focus": ["飢え"],
          "zhFocus": ["渴望"]
        }
      ],
      "note_zh": "与「植える（种植）」同音。"
    },
    {
      "id": "n2-0808",
      "jlpt": "N2",
      "headword": "薄暗い",
      "source_form": "薄暗い",
      "variants": [
        "薄暗い"
      ],
      "reading": "うすぐらい",
      "reading_variants": [
        "うすぐらい"
      ],
      "romaji": "usugurai",
      "part_of_speech": "i-adjective",
      "meaning_zh": "昏暗；微暗",
      "kanji_readings": [
        {
          "form": "薄暗い",
          "reading": "うすぐらい"
        }
      ],
      "examples": [
        {
          "ja": "部屋の中は薄暗いです。",
          "zh": "房间里有点昏暗。",
          "focus": ["薄暗い"],
          "zhFocus": ["昏暗"]
        },
        {
          "ja": "薄暗い道を一人で歩きました。",
          "zh": "一个人走在昏暗的路上。",
          "focus": ["薄暗い"],
          "zhFocus": ["昏暗"]
        },
        {
          "ja": "夕方になって、外が薄暗くなりました。",
          "zh": "到了傍晚，外面变得昏暗了。",
          "focus": ["薄暗く"],
          "zhFocus": ["昏暗"]
        }
      ]
    },
    {
      "id": "n2-0809",
      "jlpt": "N2",
      "headword": "裏口",
      "source_form": "裏口",
      "variants": [
        "裏口"
      ],
      "reading": "うらぐち",
      "reading_variants": [
        "うらぐち"
      ],
      "romaji": "uraguchi",
      "part_of_speech": "noun",
      "meaning_zh": "后门",
      "kanji_readings": [
        {
          "form": "裏口",
          "reading": "うらぐち"
        }
      ],
      "examples": [
        {
          "ja": "店の裏口から入りました。",
          "zh": "从店的后门进去了。",
          "focus": ["裏口"],
          "zhFocus": ["后门"]
        },
        {
          "ja": "裏口のかぎを閉めてください。",
          "zh": "请锁上后门。",
          "focus": ["裏口"],
          "zhFocus": ["后门"]
        },
        {
          "ja": "荷物は裏口に届けてください。",
          "zh": "货物请送到后门。",
          "focus": ["裏口"],
          "zhFocus": ["后门"]
        }
      ]
    },
    {
      "id": "n2-0810",
      "jlpt": "N2",
      "headword": "煙突",
      "source_form": "煙突",
      "variants": [
        "煙突"
      ],
      "reading": "えんとつ",
      "reading_variants": [
        "えんとつ"
      ],
      "romaji": "entotsu",
      "part_of_speech": "noun",
      "meaning_zh": "烟囱",
      "kanji_readings": [
        {
          "form": "煙突",
          "reading": "えんとつ"
        }
      ],
      "examples": [
        {
          "ja": "工場の煙突から煙が出ています。",
          "zh": "工厂的烟囱在冒烟。",
          "focus": ["煙突"],
          "zhFocus": ["烟囱"]
        },
        {
          "ja": "この家には煙突があります。",
          "zh": "这座房子有烟囱。",
          "focus": ["煙突"],
          "zhFocus": ["烟囱"]
        },
        {
          "ja": "サンタクロースは煙突から入るそうです。",
          "zh": "据说圣诞老人是从烟囱进来的。",
          "focus": ["煙突"],
          "zhFocus": ["烟囱"]
        }
      ]
    },
    {
      "id": "n2-0811",
      "jlpt": "N2",
      "headword": "起床",
      "source_form": "起床",
      "variants": [
        "起床"
      ],
      "reading": "きしょう",
      "reading_variants": [
        "きしょう"
      ],
      "romaji": "kishou",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "起床（较书面）",
      "kanji_readings": [
        {
          "form": "起床",
          "reading": "きしょう"
        }
      ],
      "examples": [
        {
          "ja": "毎朝早く起床します。",
          "zh": "每天早上很早起床。",
          "focus": ["起床"],
          "zhFocus": ["起床"]
        },
        {
          "ja": "合宿では起床の時間が決まっています。",
          "zh": "集训时起床时间是规定好的。",
          "focus": ["起床"],
          "zhFocus": ["起床"]
        },
        {
          "ja": "起床してすぐに水を飲みます。",
          "zh": "起床后马上喝水。",
          "focus": ["起床"],
          "zhFocus": ["起床"]
        }
      ],
      "note_zh": "比「起きる」书面，多用于规定、日程等。"
    },
    {
      "id": "n2-0812",
      "jlpt": "N2",
      "headword": "刺さる",
      "source_form": "刺さる",
      "variants": [
        "刺さる"
      ],
      "reading": "ささる",
      "reading_variants": [
        "ささる"
      ],
      "romaji": "sasaru",
      "part_of_speech": "verb",
      "meaning_zh": "扎；刺入",
      "kanji_readings": [
        {
          "form": "刺さる",
          "reading": "ささる"
        }
      ],
      "examples": [
        {
          "ja": "指にとげが刺さりました。",
          "zh": "手指扎了一根刺。",
          "focus": ["刺さり"],
          "zhFocus": ["扎"]
        },
        {
          "ja": "魚の骨がのどに刺さりました。",
          "zh": "鱼刺卡在了喉咙里。",
          "focus": ["刺さり"],
          "zhFocus": ["卡"]
        },
        {
          "ja": "彼の言葉が胸に刺さりました。",
          "zh": "他的话刺痛了我的心。",
          "focus": ["刺さり"],
          "zhFocus": ["刺痛"]
        }
      ],
      "note_zh": "自动词；他动词是「刺す（刺）」。"
    },
    {
      "id": "n2-0813",
      "jlpt": "N2",
      "headword": "蛇口",
      "source_form": "蛇口",
      "variants": [
        "蛇口"
      ],
      "reading": "じゃぐち",
      "reading_variants": [
        "じゃぐち"
      ],
      "romaji": "jaguchi",
      "part_of_speech": "noun",
      "meaning_zh": "水龙头",
      "kanji_readings": [
        {
          "form": "蛇口",
          "reading": "じゃぐち"
        }
      ],
      "examples": [
        {
          "ja": "蛇口をひねって水を出しました。",
          "zh": "拧开水龙头放了水。",
          "focus": ["蛇口"],
          "zhFocus": ["水龙头"]
        },
        {
          "ja": "蛇口から水がもれています。",
          "zh": "水龙头在漏水。",
          "focus": ["蛇口"],
          "zhFocus": ["水龙头"]
        },
        {
          "ja": "使った後は蛇口をしっかり閉めてください。",
          "zh": "用完后请把水龙头关紧。",
          "focus": ["蛇口"],
          "zhFocus": ["水龙头"]
        }
      ]
    },
    {
      "id": "n2-0814",
      "jlpt": "N2",
      "headword": "終点",
      "source_form": "終点",
      "variants": [
        "終点"
      ],
      "reading": "しゅうてん",
      "reading_variants": [
        "しゅうてん"
      ],
      "romaji": "shuuten",
      "part_of_speech": "noun",
      "meaning_zh": "终点；终点站",
      "kanji_readings": [
        {
          "form": "終点",
          "reading": "しゅうてん"
        }
      ],
      "examples": [
        {
          "ja": "このバスの終点は駅です。",
          "zh": "这辆公交车的终点站是车站。",
          "focus": ["終点"],
          "zhFocus": ["终点站"]
        },
        {
          "ja": "寝ていて、終点まで行ってしまいました。",
          "zh": "睡着了，一直坐到了终点站。",
          "focus": ["終点"],
          "zhFocus": ["终点站"]
        },
        {
          "ja": "終点でみんな降りました。",
          "zh": "大家在终点下了车。",
          "focus": ["終点"],
          "zhFocus": ["终点"]
        }
      ]
    },
    {
      "id": "n2-0815",
      "jlpt": "N2",
      "headword": "消耗",
      "source_form": "消耗",
      "variants": [
        "消耗"
      ],
      "reading": "しょうもう",
      "reading_variants": [
        "しょうもう"
      ],
      "romaji": "shoumou",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "消耗；耗尽",
      "kanji_readings": [
        {
          "form": "消耗",
          "reading": "しょうもう"
        }
      ],
      "examples": [
        {
          "ja": "暑さで体力を消耗しました。",
          "zh": "因为天热，体力消耗很大。",
          "focus": ["消耗"],
          "zhFocus": ["消耗"]
        },
        {
          "ja": "この機械は電気の消耗が少ないです。",
          "zh": "这台机器耗电少。",
          "focus": ["消耗"],
          "zhFocus": ["耗"]
        },
        {
          "ja": "長い会議で気力が消耗しました。",
          "zh": "长时间的会议让人精疲力竭。",
          "focus": ["消耗"],
          "zhFocus": ["精疲力竭"]
        }
      ]
    },
    {
      "id": "n2-0816",
      "jlpt": "N2",
      "headword": "初級",
      "source_form": "初級",
      "variants": [
        "初級"
      ],
      "reading": "しょきゅう",
      "reading_variants": [
        "しょきゅう"
      ],
      "romaji": "shokyuu",
      "part_of_speech": "noun",
      "meaning_zh": "初级",
      "kanji_readings": [
        {
          "form": "初級",
          "reading": "しょきゅう"
        }
      ],
      "examples": [
        {
          "ja": "日本語の初級のクラスに入りました。",
          "zh": "进了日语初级班。",
          "focus": ["初級"],
          "zhFocus": ["初级"]
        },
        {
          "ja": "この本は初級の人向けです。",
          "zh": "这本书是面向初学者的。",
          "focus": ["初級"],
          "zhFocus": ["初学者"]
        },
        {
          "ja": "初級の試験に合格しました。",
          "zh": "通过了初级考试。",
          "focus": ["初級"],
          "zhFocus": ["初级"]
        }
      ],
      "note_zh": "与「中級（中级）」「上級（高级）」相对。"
    },
    {
      "id": "n2-0817",
      "jlpt": "N2",
      "headword": "寝台",
      "source_form": "寝台",
      "variants": [
        "寝台"
      ],
      "reading": "しんだい",
      "reading_variants": [
        "しんだい"
      ],
      "romaji": "shindai",
      "part_of_speech": "noun",
      "meaning_zh": "床；卧铺",
      "kanji_readings": [
        {
          "form": "寝台",
          "reading": "しんだい"
        }
      ],
      "examples": [
        {
          "ja": "寝台車で北海道まで行きました。",
          "zh": "坐卧铺车去了北海道。",
          "focus": ["寝台"],
          "zhFocus": ["卧铺"]
        },
        {
          "ja": "病院の寝台に横になりました。",
          "zh": "躺在了医院的床上。",
          "focus": ["寝台"],
          "zhFocus": ["床"]
        },
        {
          "ja": "寝台のある列車は少なくなりました。",
          "zh": "有卧铺的列车变少了。",
          "focus": ["寝台"],
          "zhFocus": ["卧铺"]
        }
      ]
    },
    {
      "id": "n2-0818",
      "jlpt": "N2",
      "headword": "灯台",
      "source_form": "灯台",
      "variants": [
        "灯台"
      ],
      "reading": "とうだい",
      "reading_variants": [
        "とうだい"
      ],
      "romaji": "toudai",
      "part_of_speech": "noun",
      "meaning_zh": "灯塔",
      "kanji_readings": [
        {
          "form": "灯台",
          "reading": "とうだい"
        }
      ],
      "examples": [
        {
          "ja": "岬に白い灯台が立っています。",
          "zh": "海角上立着一座白色的灯塔。",
          "focus": ["灯台"],
          "zhFocus": ["灯塔"]
        },
        {
          "ja": "灯台の光が海を照らしています。",
          "zh": "灯塔的光照着大海。",
          "focus": ["灯台"],
          "zhFocus": ["灯塔"]
        },
        {
          "ja": "灯台に登って海を見ました。",
          "zh": "登上灯塔眺望了大海。",
          "focus": ["灯台"],
          "zhFocus": ["灯塔"]
        }
      ]
    },
    {
      "id": "n2-0819",
      "jlpt": "N2",
      "headword": "仲良し",
      "source_form": "仲良し",
      "variants": [
        "仲良し"
      ],
      "reading": "なかよし",
      "reading_variants": [
        "なかよし"
      ],
      "romaji": "nakayoshi",
      "part_of_speech": "noun",
      "meaning_zh": "好朋友；关系好",
      "kanji_readings": [
        {
          "form": "仲良し",
          "reading": "なかよし"
        }
      ],
      "examples": [
        {
          "ja": "あの二人は子供のころから仲良しです。",
          "zh": "那两个人从小就是好朋友。",
          "focus": ["仲良し"],
          "zhFocus": ["好朋友"]
        },
        {
          "ja": "クラスのみんなと仲良しになりました。",
          "zh": "和班上的同学都成了好朋友。",
          "focus": ["仲良し"],
          "zhFocus": ["好朋友"]
        },
        {
          "ja": "仲良しの友達と旅行に行きました。",
          "zh": "和要好的朋友去旅行了。",
          "focus": ["仲良し"],
          "zhFocus": ["要好"]
        }
      ]
    },
    {
      "id": "n2-0820",
      "jlpt": "N2",
      "headword": "懐かしい",
      "source_form": "懐かしい",
      "variants": [
        "懐かしい"
      ],
      "reading": "なつかしい",
      "reading_variants": [
        "なつかしい"
      ],
      "romaji": "natsukashii",
      "part_of_speech": "i-adjective",
      "meaning_zh": "令人怀念的；怀念",
      "kanji_readings": [
        {
          "form": "懐かしい",
          "reading": "なつかしい"
        }
      ],
      "examples": [
        {
          "ja": "この歌を聞くと、子供のころが懐かしいです。",
          "zh": "一听到这首歌，就怀念起童年。",
          "focus": ["懐かしい"],
          "zhFocus": ["怀念"]
        },
        {
          "ja": "懐かしい友達から手紙が来ました。",
          "zh": "收到了久别的老朋友的来信。",
          "focus": ["懐かしい"],
          "zhFocus": ["久别的"]
        },
        {
          "ja": "古い写真を見て、懐かしくなりました。",
          "zh": "看着老照片，心里充满了怀念。",
          "focus": ["懐かしく"],
          "zhFocus": ["怀念"]
        }
      ]
    },
    {
      "id": "n2-0821",
      "jlpt": "N2",
      "headword": "何しろ",
      "source_form": "なにしろ",
      "variants": [
        "何しろ"
      ],
      "reading": "なにしろ",
      "reading_variants": [
        "なにしろ"
      ],
      "romaji": "nanishiro",
      "part_of_speech": "adverb",
      "meaning_zh": "毕竟；不管怎么说",
      "kanji_readings": [
        {
          "form": "何しろ",
          "reading": "なにしろ"
        }
      ],
      "examples": [
        {
          "ja": "何しろ初めてなので、うまくできません。",
          "zh": "毕竟是第一次，做不好。",
          "focus": ["何しろ"],
          "zhFocus": ["毕竟"]
        },
        {
          "ja": "何しろ忙しくて、休む時間がありません。",
          "zh": "不管怎么说就是太忙了，没有休息的时间。",
          "focus": ["何しろ"],
          "zhFocus": ["不管怎么说"]
        },
        {
          "ja": "何しろ人が多くて、大変でした。",
          "zh": "毕竟人太多，够呛。",
          "focus": ["何しろ"],
          "zhFocus": ["毕竟"]
        }
      ],
      "note_zh": "强调后面的理由或程度。"
    },
    {
      "id": "n2-0822",
      "jlpt": "N2",
      "headword": "挟む",
      "source_form": "挟む",
      "variants": [
        "挟む"
      ],
      "reading": "はさむ",
      "reading_variants": [
        "はさむ"
      ],
      "romaji": "hasamu",
      "part_of_speech": "verb",
      "meaning_zh": "夹；夹住；（中间）隔着；插（话）",
      "senses_zh": [
        "夹；夹住",
        "（中间）隔着；插（话）"
      ],
      "kanji_readings": [
        {
          "form": "挟む",
          "reading": "はさむ"
        }
      ],
      "examples": [
        {
          "ja": "パンにハムを挟みました。",
          "zh": "在面包里夹了火腿。",
          "focus": ["挟み"],
          "zhFocus": ["夹"]
        },
        {
          "ja": "ドアに指を挟まないように気をつけてください。",
          "zh": "请小心别让门夹了手指。",
          "focus": ["挟ま"],
          "zhFocus": ["夹"]
        },
        {
          "ja": "人の話に口を挟まないでください。",
          "zh": "别人说话时请不要插嘴。",
          "focus": ["挟ま"],
          "zhFocus": ["插嘴"]
        }
      ]
    },
    {
      "id": "n2-0823",
      "jlpt": "N2",
      "headword": "外れる",
      "source_form": "外れる",
      "variants": [
        "外れる"
      ],
      "reading": "はずれる",
      "reading_variants": [
        "はずれる"
      ],
      "romaji": "hazureru",
      "part_of_speech": "verb",
      "meaning_zh": "脱落；偏离；（预测等）落空；没中",
      "senses_zh": [
        "脱落；偏离",
        "（预测等）落空；没中"
      ],
      "kanji_readings": [
        {
          "form": "外れる",
          "reading": "はずれる"
        }
      ],
      "examples": [
        {
          "ja": "ボタンが外れてしまいました。",
          "zh": "扣子掉了。",
          "focus": ["外れ"],
          "zhFocus": ["掉"]
        },
        {
          "ja": "天気予報が外れて、雨が降りました。",
          "zh": "天气预报没准，下雨了。",
          "focus": ["外れ"],
          "zhFocus": ["没准"]
        },
        {
          "ja": "くじが外れました。",
          "zh": "抽签没中。",
          "focus": ["外れ"],
          "zhFocus": ["没中"]
        }
      ],
      "note_zh": "自动词；他动词是「外す（取下）」。"
    },
    {
      "id": "n2-0824",
      "jlpt": "N2",
      "headword": "歯磨き",
      "source_form": "歯磨き",
      "variants": [
        "歯磨き"
      ],
      "reading": "はみがき",
      "reading_variants": [
        "はみがき"
      ],
      "romaji": "hamigaki",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "刷牙；牙膏",
      "senses_zh": [
        "刷牙",
        "牙膏"
      ],
      "kanji_readings": [
        {
          "form": "歯磨き",
          "reading": "はみがき"
        }
      ],
      "examples": [
        {
          "ja": "寝る前に歯磨きをします。",
          "zh": "睡前刷牙。",
          "focus": ["歯磨き"],
          "zhFocus": ["刷牙"]
        },
        {
          "ja": "子供に歯磨きの仕方を教えました。",
          "zh": "教孩子怎么刷牙。",
          "focus": ["歯磨き"],
          "zhFocus": ["刷牙"]
        },
        {
          "ja": "歯磨きのチューブが空になりました。",
          "zh": "牙膏管空了。",
          "focus": ["歯磨き"],
          "zhFocus": ["牙膏"]
        }
      ]
    },
    {
      "id": "n2-0825",
      "jlpt": "N2",
      "headword": "まれ",
      "source_form": "稀",
      "variants": [
        "まれ",
        "稀"
      ],
      "reading": "まれ",
      "reading_variants": [
        "まれ"
      ],
      "romaji": "mare",
      "part_of_speech": "na-adjective",
      "meaning_zh": "稀少；罕见",
      "kanji_readings": [
        {
          "form": "稀",
          "reading": "まれ"
        }
      ],
      "examples": [
        {
          "ja": "この地方で雪が降るのはまれです。",
          "zh": "这个地方很少下雪。",
          "focus": ["まれ"],
          "zhFocus": ["很少"]
        },
        {
          "ja": "こんなにいい天気はまれです。",
          "zh": "这么好的天气很罕见。",
          "focus": ["まれ"],
          "zhFocus": ["罕见"]
        },
        {
          "ja": "まれに、この鳥が見られることがあります。",
          "zh": "偶尔也能见到这种鸟。",
          "focus": ["まれ"],
          "zhFocus": ["偶尔"]
        }
      ],
      "note_zh": "一般写假名；「まれに」是“偶尔、难得”的意思。"
    },
    {
      "id": "n2-0826",
      "jlpt": "N2",
      "headword": "物置",
      "source_form": "物置",
      "variants": [
        "物置"
      ],
      "reading": "ものおき",
      "reading_variants": [
        "ものおき"
      ],
      "romaji": "monooki",
      "part_of_speech": "noun",
      "meaning_zh": "储藏室；杂物间",
      "kanji_readings": [
        {
          "form": "物置",
          "reading": "ものおき"
        }
      ],
      "examples": [
        {
          "ja": "古い自転車を物置にしまいました。",
          "zh": "把旧自行车收进了储藏室。",
          "focus": ["物置"],
          "zhFocus": ["储藏室"]
        },
        {
          "ja": "物置の中を片付けました。",
          "zh": "收拾了杂物间。",
          "focus": ["物置"],
          "zhFocus": ["杂物间"]
        },
        {
          "ja": "庭に小さな物置があります。",
          "zh": "院子里有一个小储藏室。",
          "focus": ["物置"],
          "zhFocus": ["储藏室"]
        }
      ]
    },
    {
      "id": "n2-0827",
      "jlpt": "N2",
      "headword": "夕日",
      "source_form": "夕日",
      "variants": [
        "夕日"
      ],
      "reading": "ゆうひ",
      "reading_variants": [
        "ゆうひ"
      ],
      "romaji": "yuuhi",
      "part_of_speech": "noun",
      "meaning_zh": "夕阳",
      "kanji_readings": [
        {
          "form": "夕日",
          "reading": "ゆうひ"
        }
      ],
      "examples": [
        {
          "ja": "海に沈む夕日を見ました。",
          "zh": "看了沉入大海的夕阳。",
          "focus": ["夕日"],
          "zhFocus": ["夕阳"]
        },
        {
          "ja": "夕日で空が赤くなりました。",
          "zh": "夕阳把天空染红了。",
          "focus": ["夕日"],
          "zhFocus": ["夕阳"]
        },
        {
          "ja": "西の窓から夕日が差し込んでいます。",
          "zh": "夕阳从西边的窗户照进来。",
          "focus": ["夕日"],
          "zhFocus": ["夕阳"]
        }
      ]
    },
    {
      "id": "n2-0828",
      "jlpt": "N2",
      "headword": "呼び出す",
      "source_form": "呼び出す",
      "variants": [
        "呼び出す"
      ],
      "reading": "よびだす",
      "reading_variants": [
        "よびだす"
      ],
      "romaji": "yobidasu",
      "part_of_speech": "verb",
      "meaning_zh": "叫出来；传唤；呼叫",
      "kanji_readings": [
        {
          "form": "呼び出す",
          "reading": "よびだす"
        }
      ],
      "examples": [
        {
          "ja": "先生に呼び出されて、話をしました。",
          "zh": "被老师叫去谈了话。",
          "focus": ["呼び出さ"],
          "zhFocus": ["叫"]
        },
        {
          "ja": "駅で迷子の親を呼び出しました。",
          "zh": "在车站广播寻找走失孩子的家长。",
          "focus": ["呼び出し"],
          "zhFocus": ["广播寻找"]
        },
        {
          "ja": "夜中に会社から呼び出されました。",
          "zh": "半夜被公司叫了去。",
          "focus": ["呼び出さ"],
          "zhFocus": ["叫"]
        }
      ]
    }
  ]
};


window.AYAYA_N2_WORDS = window.AYAYA_N2_CODEX_VOCAB.entries.map((entry) => [entry.headword, entry.reading, entry.meaning_zh, entry.examples[0].ja, entry.examples[0].zh]);

window.AYAYA_N2_TATOEBA_EXAMPLES = (() => {
  const candidates = new Map();
  for (const entry of window.AYAYA_N2_CODEX_VOCAB.entries) {
    const keys = new Set([
      entry.headword,
      ...(entry.variants || []),
      ...String(entry.source_form || "").split(";"),
    ].map((key) => key.trim()).filter(Boolean));
    for (const key of keys) {
      const matches = candidates.get(key) || [];
      matches.push(entry.examples);
      candidates.set(key, matches);
    }
  }
  return Object.fromEntries(
    [...candidates.entries()]
      .filter(([, matches]) => matches.length === 1)
      .map(([key, [examples]]) => [key, examples]),
  );
})();
