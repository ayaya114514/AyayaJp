// Ayaya JP - Codex-readable curated JLPT N5 vocabulary data.
// Generated from the uploaded n5-vocab.js structure, with corrected Simplified Chinese meanings and beginner-friendly Japanese examples.
// Codex extraction target: window.AYAYA_N5_CODEX_VOCAB.entries
// App compatibility: this file also defines window.AYAYA_N5_WORDS and window.AYAYA_N5_TATOEBA_EXAMPLES.

window.AYAYA_N5_CODEX_VOCAB = {
  "schema": {
    "schema_version": "1.0.0",
    "generated_on": "2026-08-30",
    "purpose": "Codex-readable, app-compatible JLPT N5 learning data with corrected Simplified Chinese meanings and natural beginner-level Japanese examples.",
    "fields": {
      "headword": "学习用规范词形。旧写法或不常用写法会保留在 source_form。",
      "source_form": "原 n5-vocab.js 中的词形。",
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
      "merged_source_ids": "已合并或跨级去重的旧 source ID，用于迁移既有学习进度。"
    },
    "compatibility": {
      "AYAYA_N5_WORDS": "[headword, reading, meaning_zh, first_example_ja, first_example_zh]",
      "AYAYA_N5_TATOEBA_EXAMPLES": "按规范词形、全部 variants 与全部 source_form 写法建立精选例句索引；有歧义的别名不建立唯一映射。"
    },
    "source_notes": [
      "The duplicate 在る / 有る records were merged under the modern kana headword ある while preserving both orthographic variants.",
      "Reading, part-of-speech, example alignment, same-sense duplicates and retained cross-level distinctions were re-audited on 2026-08-18; merged_source_ids preserve prior study state.",
      "Dictionary forms, readings, coarse part-of-speech labels, senses, and all example rows were re-audited against JMdict and for Japanese/Chinese learning accuracy on 2026-08-30.",
      "On 2026-10-10 every entry was re-audited again: headword romaji now follows the particle and n' rules with the same word division as the examples, category labels were corrected, pure grammar patterns were migrated to grammar cards, and unnatural examples were rewritten.",
      "2026-10-17: 12 basic greetings and words that the community Waller list files under N3 (ありがとう, いただきます, いらっしゃい, おめでとう, ごめんなさい, こんにちは, すみません, よろしく, 男の人, 日本, 曜日, お昼) are taught here, since N5 learners meet them first."
    ],
    "entry_count": 761
  },
  "entries": [
    {
      "id": "n5-001",
      "merged_source_ids": ["n4-002"],
      "jlpt": "N5",
      "headword": "ああ",
      "source_form": "ああ",
      "variants": [
        "ああ"
      ],
      "reading": "ああ",
      "reading_variants": [
        "ああ"
      ],
      "romaji": "aa",
      "part_of_speech": "interjection/expression",
      "meaning_zh": "啊；哦",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "ああ、分かりました。",
          "zh": "啊，我明白了。",
          "focus": ["ああ"],
          "zhFocus": ["啊"]
        },
        {
          "ja": "ああ、いい天気ですね。",
          "zh": "啊，天气真好。",
          "focus": ["ああ"],
          "zhFocus": ["啊"]
        },
        {
          "ja": "ああ、そうですか。",
          "zh": "哦，是这样啊。",
          "focus": ["ああ"],
          "zhFocus": ["哦"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-002",
      "jlpt": "N5",
      "headword": "会う",
      "source_form": "会う",
      "variants": [
        "会う"
      ],
      "reading": "あう",
      "reading_variants": [
        "あう"
      ],
      "romaji": "au",
      "part_of_speech": "verb",
      "meaning_zh": "见面；遇见",
      "kanji_readings": [
        {
          "form": "会う",
          "reading": "あう"
        }
      ],
      "examples": [
        {
          "ja": "駅で友達に会います。",
          "zh": "在车站见朋友。",
          "focus": ["会い"],
          "zhFocus": ["见"]
        },
        {
          "ja": "明日、先生に会います。",
          "zh": "明天见老师。",
          "focus": ["会い"],
          "zhFocus": ["见"]
        },
        {
          "ja": "また会いましょう。",
          "zh": "下次再见吧。",
          "focus": ["会い"],
          "zhFocus": ["见"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-003",
      "jlpt": "N5",
      "headword": "青",
      "source_form": "青",
      "variants": [
        "青"
      ],
      "reading": "あお",
      "reading_variants": [
        "あお"
      ],
      "romaji": "ao",
      "part_of_speech": "noun",
      "meaning_zh": "蓝色",
      "kanji_readings": [
        {
          "form": "青",
          "reading": "あお"
        }
      ],
      "examples": [
        {
          "ja": "青は私の好きな色です。",
          "zh": "蓝色是我喜欢的颜色。",
          "focus": ["青"],
          "zhFocus": ["蓝色"]
        },
        {
          "ja": "青が好きです。",
          "zh": "我喜欢蓝色。",
          "focus": ["青"],
          "zhFocus": ["蓝色"]
        },
        {
          "ja": "青のペンを使います。",
          "zh": "使用蓝色的笔。",
          "focus": ["青"],
          "zhFocus": ["蓝色"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-004",
      "jlpt": "N5",
      "headword": "青い",
      "source_form": "青い",
      "variants": [
        "青い"
      ],
      "reading": "あおい",
      "reading_variants": [
        "あおい"
      ],
      "romaji": "aoi",
      "part_of_speech": "i-adjective",
      "meaning_zh": "蓝色的",
      "kanji_readings": [
        {
          "form": "青い",
          "reading": "あおい"
        }
      ],
      "examples": [
        {
          "ja": "今日の空は青いです。",
          "zh": "今天的天空很蓝。",
          "focus": ["青い"],
          "zhFocus": ["蓝"]
        },
        {
          "ja": "青いシャツを着ています。",
          "zh": "穿着蓝色的衬衫。",
          "focus": ["青い"],
          "zhFocus": ["蓝色"]
        },
        {
          "ja": "海が青く見えます。",
          "zh": "大海看起来是蓝色的。",
          "focus": ["青く"],
          "zhFocus": ["蓝色"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-005",
      "jlpt": "N5",
      "headword": "赤",
      "source_form": "赤",
      "variants": [
        "赤"
      ],
      "reading": "あか",
      "reading_variants": [
        "あか"
      ],
      "romaji": "aka",
      "part_of_speech": "noun",
      "meaning_zh": "红色",
      "kanji_readings": [
        {
          "form": "赤",
          "reading": "あか"
        }
      ],
      "examples": [
        {
          "ja": "赤のかばんを買いました。",
          "zh": "买了红色的包。",
          "focus": ["赤"],
          "zhFocus": ["红色"]
        },
        {
          "ja": "信号が赤です。",
          "zh": "信号灯是红色。",
          "focus": ["赤"],
          "zhFocus": ["红色"]
        },
        {
          "ja": "赤が好きです。",
          "zh": "我喜欢红色。",
          "focus": ["赤"],
          "zhFocus": ["红色"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-006",
      "jlpt": "N5",
      "headword": "赤い",
      "source_form": "赤い",
      "variants": [
        "赤い"
      ],
      "reading": "あかい",
      "reading_variants": [
        "あかい"
      ],
      "romaji": "akai",
      "part_of_speech": "i-adjective",
      "meaning_zh": "红色的",
      "kanji_readings": [
        {
          "form": "赤い",
          "reading": "あかい"
        }
      ],
      "examples": [
        {
          "ja": "この花は赤いです。",
          "zh": "这朵花是红色的。",
          "focus": ["赤い"],
          "zhFocus": ["红色"]
        },
        {
          "ja": "赤いペンで名前を書きます。",
          "zh": "用红笔写名字。",
          "focus": ["赤い"],
          "zhFocus": ["红"]
        },
        {
          "ja": "秋は山の木が赤くなります。",
          "zh": "秋天山上的树会变红。",
          "focus": ["赤く"],
          "zhFocus": ["红"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-007",
      "jlpt": "N5",
      "headword": "明るい",
      "source_form": "明るい",
      "variants": [
        "明るい"
      ],
      "reading": "あかるい",
      "reading_variants": [
        "あかるい"
      ],
      "romaji": "akarui",
      "part_of_speech": "i-adjective",
      "meaning_zh": "明亮的；开朗的",
      "senses_zh": [
        "明亮的",
        "开朗的"
      ],
      "kanji_readings": [
        {
          "form": "明るい",
          "reading": "あかるい"
        }
      ],
      "examples": [
        {
          "ja": "この部屋は明るいです。",
          "zh": "这个房间很明亮。",
          "focus": ["明るい"],
          "zhFocus": ["明亮"]
        },
        {
          "ja": "明るいところで本を読みます。",
          "zh": "在明亮的地方看书。",
          "focus": ["明るい"],
          "zhFocus": ["明亮"]
        },
        {
          "ja": "田中さんは明るい人です。",
          "zh": "田中是个开朗的人。",
          "focus": ["明るい"],
          "zhFocus": ["开朗"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-008",
      "jlpt": "N5",
      "headword": "秋",
      "source_form": "秋",
      "variants": [
        "秋"
      ],
      "reading": "あき",
      "reading_variants": [
        "あき"
      ],
      "romaji": "aki",
      "part_of_speech": "noun",
      "meaning_zh": "秋天",
      "kanji_readings": [
        {
          "form": "秋",
          "reading": "あき"
        }
      ],
      "examples": [
        {
          "ja": "秋は涼しいです。",
          "zh": "秋天很凉爽。",
          "focus": ["秋"],
          "zhFocus": ["秋天"]
        },
        {
          "ja": "秋に山へ行きます。",
          "zh": "秋天去山里。",
          "focus": ["秋"],
          "zhFocus": ["秋天"]
        },
        {
          "ja": "秋の空はきれいです。",
          "zh": "秋天的天空很美。",
          "focus": ["秋"],
          "zhFocus": ["秋天"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-009",
      "jlpt": "N5",
      "headword": "開く",
      "source_form": "開く",
      "variants": [
        "開く"
      ],
      "reading": "あく",
      "reading_variants": [
        "あく"
      ],
      "romaji": "aku",
      "part_of_speech": "verb",
      "meaning_zh": "开；开着；开始营业（自动词）",
      "senses_zh": [
        "开；开着",
        "开始营业"
      ],
      "sense_note_zh": "（自动词）",
      "kanji_readings": [
        {
          "form": "開く",
          "reading": "あく"
        }
      ],
      "examples": [
        {
          "ja": "ドアが開いています。",
          "zh": "门开着。",
          "focus": ["開い"],
          "zhFocus": ["开着"]
        },
        {
          "ja": "店は九時に開きます。",
          "zh": "店九点开门。",
          "focus": ["開き"],
          "zhFocus": ["开"]
        },
        {
          "ja": "窓が少し開いています。",
          "zh": "窗户开着一点。",
          "focus": ["開い"],
          "zhFocus": ["开着"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-010",
      "jlpt": "N5",
      "headword": "開ける",
      "source_form": "開ける",
      "variants": [
        "開ける"
      ],
      "reading": "あける",
      "reading_variants": [
        "あける"
      ],
      "romaji": "akeru",
      "part_of_speech": "verb",
      "meaning_zh": "打开；开门（他动词）",
      "kanji_readings": [
        {
          "form": "開ける",
          "reading": "あける"
        }
      ],
      "examples": [
        {
          "ja": "窓を開けてください。",
          "zh": "请打开窗户。",
          "focus": ["開け"],
          "zhFocus": ["打开"]
        },
        {
          "ja": "朝、店を開けます。",
          "zh": "早上开店。",
          "focus": ["開け"],
          "zhFocus": ["开"]
        },
        {
          "ja": "箱を開けました。",
          "zh": "打开了盒子。",
          "focus": ["開け"],
          "zhFocus": ["打开"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-011",
      "jlpt": "N5",
      "headword": "上げる",
      "source_form": "上げる",
      "variants": [
        "上げる",
        "あげる"
      ],
      "reading": "あげる",
      "reading_variants": [
        "あげる"
      ],
      "romaji": "ageru",
      "part_of_speech": "verb",
      "meaning_zh": "举起；提高；给（别人）",
      "senses_zh": [
        "举起",
        "提高",
        "给（别人）"
      ],
      "kanji_readings": [
        {
          "form": "上げる",
          "reading": "あげる"
        }
      ],
      "examples": [
        {
          "ja": "手を上げてください。",
          "zh": "请举手。",
          "focus": ["上げ"],
          "zhFocus": ["举"]
        },
        {
          "ja": "ボリュームを少し上げます。",
          "zh": "把音量调高一点。",
          "focus": ["上げ"],
          "zhFocus": ["调高"]
        },
        {
          "ja": "弟にプレゼントをあげます。",
          "zh": "送礼物给弟弟。",
          "focus": ["あげ"],
          "zhFocus": ["给"]
        }
      ],
      "note_zh": "表示“举起、提高”时通常写作「上げる」；表示“给别人”时通常写作「あげる」。"
    },
    {
      "id": "n5-012",
      "jlpt": "N5",
      "headword": "朝",
      "source_form": "朝",
      "variants": [
        "朝"
      ],
      "reading": "あさ",
      "reading_variants": [
        "あさ"
      ],
      "romaji": "asa",
      "part_of_speech": "noun",
      "meaning_zh": "早上",
      "kanji_readings": [
        {
          "form": "朝",
          "reading": "あさ"
        }
      ],
      "examples": [
        {
          "ja": "朝、学校へ行きます。",
          "zh": "早上去学校。",
          "focus": ["朝"],
          "zhFocus": ["早上"]
        },
        {
          "ja": "朝は忙しいです。",
          "zh": "早上很忙。",
          "focus": ["朝"],
          "zhFocus": ["早上"]
        },
        {
          "ja": "朝、友達に会います。",
          "zh": "早上见朋友。",
          "focus": ["朝"],
          "zhFocus": ["早上"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-013",
      "jlpt": "N5",
      "headword": "朝ご飯",
      "source_form": "朝御飯",
      "variants": [
        "朝ご飯"
      ],
      "reading": "あさごはん",
      "reading_variants": [
        "あさごはん"
      ],
      "romaji": "asagohan",
      "part_of_speech": "noun",
      "meaning_zh": "早饭；早餐",
      "kanji_readings": [
        {
          "form": "朝ご飯",
          "reading": "あさごはん"
        }
      ],
      "examples": [
        {
          "ja": "朝ご飯にパンを食べました。",
          "zh": "早饭吃了面包。",
          "focus": ["朝ご飯"],
          "zhFocus": ["早饭"]
        },
        {
          "ja": "朝ご飯の前に、顔を洗います。",
          "zh": "早饭前洗脸。",
          "focus": ["朝ご飯"],
          "zhFocus": ["早饭"]
        },
        {
          "ja": "母が朝ご飯を作っています。",
          "zh": "妈妈正在做早饭。",
          "focus": ["朝ご飯"],
          "zhFocus": ["早饭"]
        }
      ],
      "note_zh": "已把旧写法/不常用写法规范为现代常用写法；原始写法保留在 source_form。"
    },
    {
      "id": "n5-014",
      "jlpt": "N5",
      "headword": "明後日",
      "source_form": "明後日",
      "variants": [
        "明後日"
      ],
      "reading": "あさって",
      "reading_variants": [
        "あさって"
      ],
      "romaji": "asatte",
      "part_of_speech": "noun",
      "meaning_zh": "后天",
      "kanji_readings": [
        {
          "form": "明後日",
          "reading": "あさって"
        }
      ],
      "examples": [
        {
          "ja": "明後日、日本へ行きます。",
          "zh": "后天去日本。",
          "focus": ["明後日"],
          "zhFocus": ["后天"]
        },
        {
          "ja": "明後日は休みです。",
          "zh": "后天休息。",
          "focus": ["明後日"],
          "zhFocus": ["后天"]
        },
        {
          "ja": "明後日、友達に会います。",
          "zh": "后天见朋友。",
          "focus": ["明後日"],
          "zhFocus": ["后天"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-015",
      "jlpt": "N5",
      "headword": "足",
      "source_form": "足; 脚",
      "variants": [
        "足",
        "脚"
      ],
      "reading": "あし",
      "reading_variants": [
        "あし"
      ],
      "romaji": "ashi",
      "part_of_speech": "noun",
      "meaning_zh": "脚；腿",
      "kanji_readings": [
        {
          "form": "足",
          "reading": "あし"
        },
        {
          "form": "脚",
          "reading": "あし"
        }
      ],
      "examples": [
        {
          "ja": "弟は足が速いです。",
          "zh": "弟弟跑得很快。",
          "focus": ["足"]
        },
        {
          "ja": "たくさん歩いたので、足が痛いです。",
          "zh": "走了很多路，所以脚疼。",
          "focus": ["足"],
          "zhFocus": ["脚"]
        },
        {
          "ja": "足を洗います。",
          "zh": "洗脚。",
          "focus": ["足"],
          "zhFocus": ["脚"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-016",
      "jlpt": "N5",
      "headword": "明日",
      "source_form": "明日",
      "variants": [
        "明日"
      ],
      "reading": "あした",
      "reading_variants": [
        "あした"
      ],
      "romaji": "ashita",
      "part_of_speech": "noun",
      "meaning_zh": "明天",
      "kanji_readings": [
        {
          "form": "明日",
          "reading": "あした"
        }
      ],
      "examples": [
        {
          "ja": "明日、学校へ行きます。",
          "zh": "明天去学校。",
          "focus": ["明日"],
          "zhFocus": ["明天"]
        },
        {
          "ja": "明日は忙しいです。",
          "zh": "明天很忙。",
          "focus": ["明日"],
          "zhFocus": ["明天"]
        },
        {
          "ja": "明日、友達に会います。",
          "zh": "明天见朋友。",
          "focus": ["明日"],
          "zhFocus": ["明天"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-017",
      "jlpt": "N5",
      "headword": "あそこ",
      "source_form": "あそこ",
      "variants": [
        "あそこ"
      ],
      "reading": "あそこ",
      "reading_variants": [
        "あそこ"
      ],
      "romaji": "asoko",
      "part_of_speech": "pronoun/demonstrative",
      "meaning_zh": "那里（远称）；那个地方",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "あそこに銀行があります。",
          "zh": "那边有银行。",
          "focus": ["あそこ"],
          "zhFocus": ["那边"]
        },
        {
          "ja": "あそこで友達に会います。",
          "zh": "在那边见朋友。",
          "focus": ["あそこ"],
          "zhFocus": ["那边"]
        },
        {
          "ja": "あそこは学校です。",
          "zh": "那边是学校。",
          "focus": ["あそこ"],
          "zhFocus": ["那边"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-018",
      "jlpt": "N5",
      "headword": "遊ぶ",
      "source_form": "遊ぶ",
      "variants": [
        "遊ぶ"
      ],
      "reading": "あそぶ",
      "reading_variants": [
        "あそぶ"
      ],
      "romaji": "asobu",
      "part_of_speech": "verb",
      "meaning_zh": "玩；游玩",
      "kanji_readings": [
        {
          "form": "遊ぶ",
          "reading": "あそぶ"
        }
      ],
      "examples": [
        {
          "ja": "公園で子供が遊んでいます。",
          "zh": "孩子在公园玩。",
          "focus": ["遊ん"],
          "zhFocus": ["玩"]
        },
        {
          "ja": "日曜日に友達と遊びます。",
          "zh": "星期天和朋友玩。",
          "focus": ["遊び"],
          "zhFocus": ["玩"]
        },
        {
          "ja": "外で遊びましょう。",
          "zh": "在外面玩吧。",
          "focus": ["遊び"],
          "zhFocus": ["玩"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-019",
      "jlpt": "N5",
      "headword": "暖かい",
      "source_form": "暖かい",
      "variants": [
        "暖かい"
      ],
      "reading": "あたたかい",
      "reading_variants": [
        "あたたかい"
      ],
      "romaji": "atatakai",
      "part_of_speech": "i-adjective",
      "meaning_zh": "温暖的（天气、气候等）",
      "kanji_readings": [
        {
          "form": "暖かい",
          "reading": "あたたかい"
        }
      ],
      "examples": [
        {
          "ja": "今日は暖かいです。",
          "zh": "今天很暖和。",
          "focus": ["暖かい"],
          "zhFocus": ["暖和"]
        },
        {
          "ja": "暖かい部屋で休みます。",
          "zh": "在暖和的房间里休息。",
          "focus": ["暖かい"],
          "zhFocus": ["暖和"]
        },
        {
          "ja": "春になると暖かくなります。",
          "zh": "到了春天就会暖和起来。",
          "focus": ["暖かく"],
          "zhFocus": ["暖和"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-020",
      "jlpt": "N5",
      "headword": "頭",
      "source_form": "頭",
      "variants": [
        "頭"
      ],
      "reading": "あたま",
      "reading_variants": [
        "あたま"
      ],
      "romaji": "atama",
      "part_of_speech": "noun",
      "meaning_zh": "头；头脑",
      "senses_zh": [
        "头",
        "头脑"
      ],
      "kanji_readings": [
        {
          "form": "頭",
          "reading": "あたま"
        }
      ],
      "examples": [
        {
          "ja": "頭が痛いです。",
          "zh": "头疼。",
          "focus": ["頭"],
          "zhFocus": ["头"]
        },
        {
          "ja": "頭に帽子をかぶります。",
          "zh": "头上戴帽子。",
          "focus": ["頭"],
          "zhFocus": ["头"]
        },
        {
          "ja": "朝、頭を洗いました。",
          "zh": "早上洗了头。",
          "focus": ["頭"],
          "zhFocus": ["头"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-021",
      "jlpt": "N5",
      "headword": "新しい",
      "source_form": "新しい",
      "variants": [
        "新しい"
      ],
      "reading": "あたらしい",
      "reading_variants": [
        "あたらしい"
      ],
      "romaji": "atarashii",
      "part_of_speech": "i-adjective",
      "meaning_zh": "新的",
      "kanji_readings": [
        {
          "form": "新しい",
          "reading": "あたらしい"
        }
      ],
      "examples": [
        {
          "ja": "この靴は新しいです。",
          "zh": "这双鞋是新的。",
          "focus": ["新しい"],
          "zhFocus": ["新"]
        },
        {
          "ja": "新しい本を買いました。",
          "zh": "买了一本新书。",
          "focus": ["新しい"],
          "zhFocus": ["新"]
        },
        {
          "ja": "新しい先生が来ました。",
          "zh": "新老师来了。",
          "focus": ["新しい"],
          "zhFocus": ["新"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-022",
      "jlpt": "N5",
      "headword": "あちら",
      "source_form": "あちら",
      "variants": [
        "あちら"
      ],
      "reading": "あちら",
      "reading_variants": [
        "あちら"
      ],
      "romaji": "achira",
      "part_of_speech": "pronoun/demonstrative",
      "meaning_zh": "那边（远称）；那位（礼貌说法）",
      "senses_zh": [
        "那边（远称）",
        "那位（礼貌说法）"
      ],
      "kanji_readings": [],
      "examples": [
        {
          "ja": "あちらへどうぞ。",
          "zh": "请到那边。",
          "focus": ["あちら"],
          "zhFocus": ["那边"]
        },
        {
          "ja": "あちらは先生です。",
          "zh": "那位是老师。",
          "focus": ["あちら"],
          "zhFocus": ["那位"]
        },
        {
          "ja": "駅はあちらです。",
          "zh": "车站在那边。",
          "focus": ["あちら"],
          "zhFocus": ["那边"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-023",
      "jlpt": "N5",
      "headword": "暑い",
      "source_form": "暑い",
      "variants": [
        "暑い"
      ],
      "reading": "あつい",
      "reading_variants": [
        "あつい"
      ],
      "romaji": "atsui",
      "part_of_speech": "i-adjective",
      "meaning_zh": "热的（天气）",
      "kanji_readings": [
        {
          "form": "暑い",
          "reading": "あつい"
        }
      ],
      "examples": [
        {
          "ja": "今日は暑いです。",
          "zh": "今天很热。",
          "focus": ["暑い"],
          "zhFocus": ["热"]
        },
        {
          "ja": "暑い日が続きます。",
          "zh": "热的天气会持续。",
          "focus": ["暑い"],
          "zhFocus": ["热"]
        },
        {
          "ja": "外はとても暑いです。",
          "zh": "外面非常热。",
          "focus": ["暑い"],
          "zhFocus": ["热"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-024",
      "jlpt": "N5",
      "headword": "熱い",
      "source_form": "熱い",
      "variants": [
        "熱い"
      ],
      "reading": "あつい",
      "reading_variants": [
        "あつい"
      ],
      "romaji": "atsui",
      "part_of_speech": "i-adjective",
      "meaning_zh": "烫的；热的（物体、饮食）",
      "kanji_readings": [
        {
          "form": "熱い",
          "reading": "あつい"
        }
      ],
      "examples": [
        {
          "ja": "このお茶は熱いです。",
          "zh": "这杯茶很烫。",
          "focus": ["熱い"],
          "zhFocus": ["烫"]
        },
        {
          "ja": "熱いので、気をつけてください。",
          "zh": "很烫，请小心。",
          "focus": ["熱い"],
          "zhFocus": ["烫"]
        },
        {
          "ja": "熱いスープをゆっくり飲みます。",
          "zh": "慢慢喝热汤。",
          "focus": ["熱い"],
          "zhFocus": ["热"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-025",
      "jlpt": "N5",
      "headword": "厚い",
      "source_form": "厚い",
      "variants": [
        "厚い"
      ],
      "reading": "あつい",
      "reading_variants": [
        "あつい"
      ],
      "romaji": "atsui",
      "part_of_speech": "i-adjective",
      "meaning_zh": "厚的",
      "kanji_readings": [
        {
          "form": "厚い",
          "reading": "あつい"
        }
      ],
      "examples": [
        {
          "ja": "この辞書は厚いです。",
          "zh": "这本词典很厚。",
          "focus": ["厚い"],
          "zhFocus": ["厚"]
        },
        {
          "ja": "冬は厚いコートを着ます。",
          "zh": "冬天穿厚外套。",
          "focus": ["厚い"],
          "zhFocus": ["厚"]
        },
        {
          "ja": "この本は厚くて重いです。",
          "zh": "这本书又厚又重。",
          "focus": ["厚く"],
          "zhFocus": ["厚"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-026",
      "jlpt": "N5",
      "headword": "あっち",
      "source_form": "あっち",
      "variants": [
        "あっち"
      ],
      "reading": "あっち",
      "reading_variants": [
        "あっち"
      ],
      "romaji": "atchi",
      "part_of_speech": "pronoun/demonstrative",
      "meaning_zh": "那边（远称，口语）",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "あっちへ行きます。",
          "zh": "去那边。",
          "focus": ["あっち"],
          "zhFocus": ["那边"]
        },
        {
          "ja": "あっちに店があります。",
          "zh": "那边有店。",
          "focus": ["あっち"],
          "zhFocus": ["那边"]
        },
        {
          "ja": "あっちを見てください。",
          "zh": "请看那边。",
          "focus": ["あっち"],
          "zhFocus": ["那边"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-027",
      "jlpt": "N5",
      "headword": "後",
      "source_form": "後",
      "variants": [
        "後"
      ],
      "reading": "あと",
      "reading_variants": [
        "あと"
      ],
      "romaji": "ato",
      "part_of_speech": "noun",
      "meaning_zh": "后面；之后；剩余",
      "senses_zh": [
        "后面",
        "之后",
        "剩余"
      ],
      "kanji_readings": [
        {
          "form": "後",
          "reading": "あと"
        }
      ],
      "examples": [
        {
          "ja": "仕事の後で勉強します。",
          "zh": "工作后学习。",
          "focus": ["後"],
          "zhFocus": ["后"]
        },
        {
          "ja": "後で電話します。",
          "zh": "之后打电话。",
          "focus": ["後"],
          "zhFocus": ["之后"]
        },
        {
          "ja": "あと少し待ってください。",
          "zh": "请再等一会儿。",
          "focus": ["あと"],
          "zhFocus": ["再"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-028",
      "jlpt": "N5",
      "headword": "あなた",
      "source_form": "あなた",
      "variants": [
        "あなた"
      ],
      "reading": "あなた",
      "reading_variants": [
        "あなた"
      ],
      "romaji": "anata",
      "part_of_speech": "pronoun",
      "meaning_zh": "你",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "あなたの名前は何ですか。",
          "zh": "你的名字是什么？",
          "focus": ["あなた"],
          "zhFocus": ["你"]
        },
        {
          "ja": "あなたは学生ですか。",
          "zh": "你是学生吗？",
          "focus": ["あなた"],
          "zhFocus": ["你"]
        },
        {
          "ja": "これはあなたの本ですか。",
          "zh": "这是你的书吗？",
          "focus": ["あなた"],
          "zhFocus": ["你"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-029",
      "jlpt": "N5",
      "headword": "兄",
      "source_form": "兄",
      "variants": [
        "兄"
      ],
      "reading": "あに",
      "reading_variants": [
        "あに"
      ],
      "romaji": "ani",
      "part_of_speech": "noun",
      "meaning_zh": "哥哥（称自己的哥哥）",
      "kanji_readings": [
        {
          "form": "兄",
          "reading": "あに"
        }
      ],
      "examples": [
        {
          "ja": "兄は会社員です。",
          "zh": "我哥哥是公司职员。",
          "focus": ["兄"],
          "zhFocus": ["哥哥"]
        },
        {
          "ja": "兄と映画を見ます。",
          "zh": "和哥哥看电影。",
          "focus": ["兄"],
          "zhFocus": ["哥哥"]
        },
        {
          "ja": "兄に電話しました。",
          "zh": "给哥哥打了电话。",
          "focus": ["兄"],
          "zhFocus": ["哥哥"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-030",
      "jlpt": "N5",
      "headword": "姉",
      "source_form": "姉",
      "variants": [
        "姉"
      ],
      "reading": "あね",
      "reading_variants": [
        "あね"
      ],
      "romaji": "ane",
      "part_of_speech": "noun",
      "meaning_zh": "姐姐（称自己的姐姐）",
      "kanji_readings": [
        {
          "form": "姉",
          "reading": "あね"
        }
      ],
      "examples": [
        {
          "ja": "姉は先生です。",
          "zh": "我姐姐是老师。",
          "focus": ["姉"],
          "zhFocus": ["姐姐"]
        },
        {
          "ja": "姉と買い物に行きます。",
          "zh": "和姐姐去买东西。",
          "focus": ["姉"],
          "zhFocus": ["姐姐"]
        },
        {
          "ja": "姉に本を借りました。",
          "zh": "向姐姐借了书。",
          "focus": ["姉"],
          "zhFocus": ["姐姐"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-031",
      "jlpt": "N5",
      "headword": "アパート",
      "source_form": "アパート",
      "variants": [
        "アパート"
      ],
      "reading": "アパート",
      "reading_variants": [
        "アパート"
      ],
      "romaji": "apaato",
      "part_of_speech": "noun",
      "meaning_zh": "公寓；出租公寓",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "アパートに住んでいます。",
          "zh": "住在公寓里。",
          "focus": ["アパート"],
          "zhFocus": ["公寓"]
        },
        {
          "ja": "駅の近くのアパートです。",
          "zh": "是在车站附近的公寓。",
          "focus": ["アパート"],
          "zhFocus": ["公寓"]
        },
        {
          "ja": "新しいアパートを借りました。",
          "zh": "租了新公寓。",
          "focus": ["アパート"],
          "zhFocus": ["公寓"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-032",
      "jlpt": "N5",
      "headword": "あの",
      "source_form": "あの",
      "variants": [
        "あの"
      ],
      "reading": "あの",
      "reading_variants": [
        "あの"
      ],
      "romaji": "ano",
      "part_of_speech": "pre-noun/interjection",
      "meaning_zh": "那个（连体词，远称）；嗯……",
      "answer_zh": "那个（远称）；嗯……",
      "senses_zh": [
        "那个（远称）",
        "嗯……"
      ],
      "kanji_readings": [],
      "examples": [
        {
          "ja": "あの人は先生です。",
          "zh": "那个人是老师。",
          "focus": ["あの"],
          "zhFocus": ["那个"]
        },
        {
          "ja": "あの店は安いです。",
          "zh": "那家店很便宜。",
          "focus": ["あの"],
          "zhFocus": ["那"]
        },
        {
          "ja": "あの、すみません。",
          "zh": "那个，不好意思。",
          "focus": ["あの"],
          "zhFocus": ["那个"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-033",
      "jlpt": "N5",
      "headword": "浴びる",
      "source_form": "浴びる",
      "variants": [
        "浴びる"
      ],
      "reading": "あびる",
      "reading_variants": [
        "あびる"
      ],
      "romaji": "abiru",
      "part_of_speech": "verb",
      "meaning_zh": "淋；冲；洗（淋浴）",
      "kanji_readings": [
        {
          "form": "浴びる",
          "reading": "あびる"
        }
      ],
      "examples": [
        {
          "ja": "朝、シャワーを浴びます。",
          "zh": "早上冲澡。",
          "focus": ["浴び"],
          "zhFocus": ["冲"]
        },
        {
          "ja": "汗をかいたので、シャワーを浴びました。",
          "zh": "因为出了汗，所以冲了澡。",
          "focus": ["浴び"],
          "zhFocus": ["冲"]
        },
        {
          "ja": "家に帰ってからシャワーを浴びます。",
          "zh": "回家后冲澡。",
          "focus": ["浴び"],
          "zhFocus": ["冲"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-034",
      "jlpt": "N5",
      "headword": "危ない",
      "source_form": "危ない",
      "variants": [
        "危ない"
      ],
      "reading": "あぶない",
      "reading_variants": [
        "あぶない"
      ],
      "romaji": "abunai",
      "part_of_speech": "i-adjective",
      "meaning_zh": "危险的",
      "kanji_readings": [
        {
          "form": "危ない",
          "reading": "あぶない"
        }
      ],
      "examples": [
        {
          "ja": "夜、この道を一人で歩くのは危ないです。",
          "zh": "晚上独自在这条路上走很危险。",
          "focus": ["危ない"],
          "zhFocus": ["危险"]
        },
        {
          "ja": "危ない！車が来ます。",
          "zh": "危险！车来了。",
          "focus": ["危ない"],
          "zhFocus": ["危险"]
        },
        {
          "ja": "危ない場所に入らないでください。",
          "zh": "请不要进入危险的地方。",
          "focus": ["危ない"],
          "zhFocus": ["危险"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-035",
      "jlpt": "N5",
      "headword": "甘い",
      "source_form": "甘い",
      "variants": [
        "甘い"
      ],
      "reading": "あまい",
      "reading_variants": [
        "あまい"
      ],
      "romaji": "amai",
      "part_of_speech": "i-adjective",
      "meaning_zh": "甜的；天真的；宽松的",
      "senses_zh": [
        "甜的",
        "天真的",
        "宽松的"
      ],
      "kanji_readings": [
        {
          "form": "甘い",
          "reading": "あまい"
        }
      ],
      "examples": [
        {
          "ja": "このケーキは甘いです。",
          "zh": "这个蛋糕很甜。",
          "focus": ["甘い"],
          "zhFocus": ["甜"]
        },
        {
          "ja": "このコーヒーは少し甘いです。",
          "zh": "这杯咖啡有点甜。",
          "focus": ["甘い"],
          "zhFocus": ["甜"]
        },
        {
          "ja": "弟は甘いお菓子が好きです。",
          "zh": "弟弟喜欢甜点。",
          "focus": ["甘い"],
          "zhFocus": ["甜"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-036",
      "jlpt": "N5",
      "headword": "余り",
      "source_form": "余り",
      "variants": [
        "余り",
        "あまり"
      ],
      "reading": "あまり",
      "reading_variants": [
        "あまり"
      ],
      "romaji": "amari",
      "part_of_speech": "noun/adverb",
      "meaning_zh": "剩余；不太……（接否定）",
      "senses_zh": [
        "剩余",
        "不太……（接否定）"
      ],
      "kanji_readings": [
        {
          "form": "余り",
          "reading": "あまり"
        }
      ],
      "examples": [
        {
          "ja": "あまり食べません。",
          "zh": "不太吃。",
          "focus": ["あまり"],
          "zhFocus": ["不太"]
        },
        {
          "ja": "時間はあまりありません。",
          "zh": "时间不太多。",
          "focus": ["あまり"],
          "zhFocus": ["不太"]
        },
        {
          "ja": "余りのご飯でおにぎりを作りました。",
          "zh": "用剩饭做了饭团。",
          "focus": ["余り"],
          "zhFocus": ["剩"]
        }
      ],
      "note_zh": "表示“不太……”时通常写作假名「あまり」，后接否定；写作「余り」时常表示“剩余”。"
    },
    {
      "id": "n5-037",
      "jlpt": "N5",
      "headword": "雨",
      "source_form": "雨",
      "variants": [
        "雨"
      ],
      "reading": "あめ",
      "reading_variants": [
        "あめ"
      ],
      "romaji": "ame",
      "part_of_speech": "noun",
      "meaning_zh": "雨",
      "kanji_readings": [
        {
          "form": "雨",
          "reading": "あめ"
        }
      ],
      "examples": [
        {
          "ja": "雨が降っています。",
          "zh": "正在下雨。",
          "focus": ["雨"],
          "zhFocus": ["雨"]
        },
        {
          "ja": "今日は雨です。",
          "zh": "今天下雨。",
          "focus": ["雨"],
          "zhFocus": ["雨"]
        },
        {
          "ja": "雨の日は出かけません。",
          "zh": "下雨天不出门。",
          "focus": ["雨"],
          "zhFocus": ["雨"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-038",
      "jlpt": "N5",
      "headword": "飴",
      "source_form": "飴",
      "variants": [
        "飴"
      ],
      "reading": "あめ",
      "reading_variants": [
        "あめ"
      ],
      "romaji": "ame",
      "part_of_speech": "noun",
      "meaning_zh": "糖；糖果",
      "kanji_readings": [
        {
          "form": "飴",
          "reading": "あめ"
        }
      ],
      "examples": [
        {
          "ja": "飴を一つください。",
          "zh": "请给我一颗糖。",
          "focus": ["飴"],
          "zhFocus": ["糖"]
        },
        {
          "ja": "子供に飴をあげます。",
          "zh": "给孩子糖。",
          "focus": ["飴"],
          "zhFocus": ["糖"]
        },
        {
          "ja": "甘い飴が好きです。",
          "zh": "我喜欢甜的糖果。",
          "focus": ["飴"],
          "zhFocus": ["糖果"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-039",
      "jlpt": "N5",
      "headword": "洗う",
      "source_form": "洗う",
      "variants": [
        "洗う"
      ],
      "reading": "あらう",
      "reading_variants": [
        "あらう"
      ],
      "romaji": "arau",
      "part_of_speech": "verb",
      "meaning_zh": "洗",
      "kanji_readings": [
        {
          "form": "洗う",
          "reading": "あらう"
        }
      ],
      "examples": [
        {
          "ja": "週末に車を洗います。",
          "zh": "周末洗车。",
          "focus": ["洗い"],
          "zhFocus": ["洗"]
        },
        {
          "ja": "セーターを手で洗いました。",
          "zh": "用手洗了毛衣。",
          "focus": ["洗い"],
          "zhFocus": ["洗"]
        },
        {
          "ja": "皿をきれいに洗いました。",
          "zh": "把盘子洗干净了。",
          "focus": ["洗い"],
          "zhFocus": ["洗"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-040",
      "jlpt": "N5",
      "headword": "ある",
      "source_form": "在る; 有る",
      "variants": [
        "ある",
        "在る",
        "有る"
      ],
      "reading": "ある",
      "reading_variants": [
        "ある"
      ],
      "romaji": "aru",
      "part_of_speech": "verb",
      "meaning_zh": "有；存在（无生命物，常写作假名：ある）",
      "kanji_readings": [
        {
          "form": "在る",
          "reading": "ある"
        },
        {
          "form": "有る",
          "reading": "ある"
        }
      ],
      "examples": [
        {
          "ja": "机の上に本があります。",
          "zh": "桌子上有书。",
          "focus": ["あり"],
          "zhFocus": ["有"]
        },
        {
          "ja": "時間があります。",
          "zh": "有时间。",
          "focus": ["あり"],
          "zhFocus": ["有"]
        },
        {
          "ja": "駅の近くに店があります。",
          "zh": "车站附近有商店。",
          "focus": ["あり"],
          "zhFocus": ["有"]
        }
      ],
      "note_zh": "现代通常写作假名「ある」；旧写法「在る」「有る」保留为正字法变体。"
    },
    {
      "id": "n5-042",
      "jlpt": "N5",
      "headword": "歩く",
      "source_form": "歩く",
      "variants": [
        "歩く"
      ],
      "reading": "あるく",
      "reading_variants": [
        "あるく"
      ],
      "romaji": "aruku",
      "part_of_speech": "verb",
      "meaning_zh": "走；步行",
      "kanji_readings": [
        {
          "form": "歩く",
          "reading": "あるく"
        }
      ],
      "examples": [
        {
          "ja": "駅まで歩きます。",
          "zh": "走路去车站。",
          "focus": ["歩き"],
          "zhFocus": ["走"]
        },
        {
          "ja": "公園をゆっくり歩きました。",
          "zh": "在公园慢慢走了走。",
          "focus": ["歩き"],
          "zhFocus": ["走"]
        },
        {
          "ja": "毎朝三十分歩きます。",
          "zh": "每天早上走三十分钟。",
          "focus": ["歩き"],
          "zhFocus": ["走"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-043",
      "jlpt": "N5",
      "headword": "あれ",
      "source_form": "あれ",
      "variants": [
        "あれ"
      ],
      "reading": "あれ",
      "reading_variants": [
        "あれ"
      ],
      "romaji": "are",
      "part_of_speech": "pronoun/demonstrative",
      "meaning_zh": "那个（远称）",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "あれは何ですか。",
          "zh": "那是什么？",
          "focus": ["あれ"],
          "zhFocus": ["那"]
        },
        {
          "ja": "あれは私のかばんです。",
          "zh": "那是我的包。",
          "focus": ["あれ"],
          "zhFocus": ["那"]
        },
        {
          "ja": "あれを見てください。",
          "zh": "请看那个。",
          "focus": ["あれ"],
          "zhFocus": ["那个"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-044",
      "jlpt": "N5",
      "headword": "いい",
      "source_form": "いい; よい",
      "variants": [
        "いい",
        "よい"
      ],
      "reading": "いい",
      "reading_variants": [
        "いい",
        "よい"
      ],
      "romaji": "ii",
      "part_of_speech": "i-adjective",
      "meaning_zh": "好的",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "この本はいいです。",
          "zh": "这本书很好。",
          "focus": ["いい"],
          "zhFocus": ["好"]
        },
        {
          "ja": "いい天気ですね。",
          "zh": "天气真好。",
          "focus": ["いい"],
          "zhFocus": ["好"]
        },
        {
          "ja": "いい友達がいます。",
          "zh": "我有好朋友。",
          "focus": ["いい"],
          "zhFocus": ["好"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-045",
      "jlpt": "N5",
      "headword": "いいえ",
      "source_form": "いいえ",
      "variants": [
        "いいえ"
      ],
      "reading": "いいえ",
      "reading_variants": [
        "いいえ"
      ],
      "romaji": "iie",
      "part_of_speech": "interjection/expression",
      "meaning_zh": "不；不是",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "いいえ、違います。",
          "zh": "不，不是。",
          "focus": ["いいえ"],
          "zhFocus": ["不是"]
        },
        {
          "ja": "いいえ、行きません。",
          "zh": "不，不去。",
          "focus": ["いいえ"],
          "zhFocus": ["不"]
        },
        {
          "ja": "いいえ、大丈夫です。",
          "zh": "不，没关系。",
          "focus": ["いいえ"],
          "zhFocus": ["不"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-046",
      "jlpt": "N5",
      "headword": "言う",
      "source_form": "言う",
      "variants": [
        "言う"
      ],
      "reading": "いう",
      "reading_variants": [
        "いう"
      ],
      "romaji": "iu",
      "part_of_speech": "verb",
      "meaning_zh": "说；讲（说出内容）；叫做",
      "senses_zh": [
        "说；讲（说出内容）",
        "叫做"
      ],
      "kanji_readings": [
        {
          "form": "言う",
          "reading": "いう"
        }
      ],
      "examples": [
        {
          "ja": "もう一度言ってください。",
          "zh": "请再说一次。",
          "focus": ["言っ"],
          "zhFocus": ["说"]
        },
        {
          "ja": "友達にありがとうと言いました。",
          "zh": "对朋友说了谢谢。",
          "focus": ["言い"],
          "zhFocus": ["说"]
        },
        {
          "ja": "先生はだめだと言いました。",
          "zh": "老师说不行。",
          "focus": ["言い"],
          "zhFocus": ["说"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-047",
      "jlpt": "N5",
      "headword": "家",
      "source_form": "家",
      "variants": [
        "家"
      ],
      "reading": "いえ",
      "reading_variants": [
        "いえ"
      ],
      "romaji": "ie",
      "part_of_speech": "noun",
      "meaning_zh": "家；房子（建筑物）",
      "kanji_readings": [
        {
          "form": "家",
          "reading": "いえ"
        }
      ],
      "examples": [
        {
          "ja": "あの白い家は田中さんの家です。",
          "zh": "那栋白色的房子是田中先生家。",
          "focus": ["家", "家"],
          "zhFocus": ["房子", "家"]
        },
        {
          "ja": "家で勉強します。",
          "zh": "在家学习。",
          "focus": ["家"],
          "zhFocus": ["家"]
        },
        {
          "ja": "私の家は駅の近くです。",
          "zh": "我家在车站附近。",
          "focus": ["家"],
          "zhFocus": ["家"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-048",
      "jlpt": "N5",
      "headword": "いかが",
      "source_form": "いかが",
      "variants": [
        "いかが"
      ],
      "reading": "いかが",
      "reading_variants": [
        "いかが"
      ],
      "romaji": "ikaga",
      "part_of_speech": "adverb",
      "meaning_zh": "如何；怎么样（礼貌说法）",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "お茶はいかがですか。",
          "zh": "喝杯茶怎么样？",
          "focus": ["いかが"],
          "zhFocus": ["怎么样"]
        },
        {
          "ja": "日本はいかがですか。",
          "zh": "日本怎么样？",
          "focus": ["いかが"],
          "zhFocus": ["怎么样"]
        },
        {
          "ja": "もう一ついかがですか。",
          "zh": "再来一个怎么样？",
          "focus": ["いかが"],
          "zhFocus": ["怎么样"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-049",
      "jlpt": "N5",
      "headword": "行く",
      "source_form": "行く",
      "variants": [
        "行く"
      ],
      "reading": "いく",
      "reading_variants": [
        "いく",
        "ゆく"
      ],
      "romaji": "iku",
      "part_of_speech": "verb",
      "meaning_zh": "去",
      "kanji_readings": [
        {
          "form": "行く",
          "reading": "いく"
        }
      ],
      "examples": [
        {
          "ja": "毎朝、バスで会社へ行きます。",
          "zh": "每天早上坐公交车去公司。",
          "focus": ["行き"],
          "zhFocus": ["去"]
        },
        {
          "ja": "駅まで歩いて行きます。",
          "zh": "走路去车站。",
          "focus": ["行き"],
          "zhFocus": ["去"]
        },
        {
          "ja": "友達と日本へ行きます。",
          "zh": "和朋友去日本。",
          "focus": ["行き"],
          "zhFocus": ["去"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-050",
      "jlpt": "N5",
      "headword": "いくつ",
      "source_form": "いくつ",
      "variants": [
        "いくつ"
      ],
      "reading": "いくつ",
      "reading_variants": [
        "いくつ"
      ],
      "romaji": "ikutsu",
      "part_of_speech": "interrogative/pronoun",
      "meaning_zh": "几个；几岁",
      "senses_zh": [
        "几个",
        "几岁"
      ],
      "kanji_readings": [],
      "examples": [
        {
          "ja": "りんごはいくつありますか。",
          "zh": "有几个苹果？",
          "focus": ["いくつ"],
          "zhFocus": ["几个"]
        },
        {
          "ja": "お子さんはいくつですか。",
          "zh": "您的孩子几岁？",
          "focus": ["いくつ"],
          "zhFocus": ["几岁"]
        },
        {
          "ja": "いくつ買いますか。",
          "zh": "买几个？",
          "focus": ["いくつ"],
          "zhFocus": ["几个"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-051",
      "jlpt": "N5",
      "headword": "いくら",
      "source_form": "いくら",
      "variants": [
        "いくら"
      ],
      "reading": "いくら",
      "reading_variants": [
        "いくら"
      ],
      "romaji": "ikura",
      "part_of_speech": "noun",
      "meaning_zh": "多少钱；多少",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "これはいくらですか。",
          "zh": "这个多少钱？",
          "focus": ["いくら"],
          "zhFocus": ["多少钱"]
        },
        {
          "ja": "このりんごは一ついくらですか。",
          "zh": "这个苹果一个多少钱？",
          "focus": ["いくら"],
          "zhFocus": ["多少钱"]
        },
        {
          "ja": "いくら払いましたか。",
          "zh": "付了多少钱？",
          "focus": ["いくら"],
          "zhFocus": ["多少钱"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-052",
      "jlpt": "N5",
      "headword": "池",
      "source_form": "池",
      "variants": [
        "池"
      ],
      "reading": "いけ",
      "reading_variants": [
        "いけ"
      ],
      "romaji": "ike",
      "part_of_speech": "noun",
      "meaning_zh": "池塘",
      "kanji_readings": [
        {
          "form": "池",
          "reading": "いけ"
        }
      ],
      "examples": [
        {
          "ja": "公園に大きな池があります。",
          "zh": "公园里有一个大池塘。",
          "focus": ["池"],
          "zhFocus": ["池塘"]
        },
        {
          "ja": "池に魚がたくさんいます。",
          "zh": "池塘里有很多鱼。",
          "focus": ["池"],
          "zhFocus": ["池塘"]
        },
        {
          "ja": "池のそばで写真を撮りました。",
          "zh": "在池塘边拍了照片。",
          "focus": ["池"],
          "zhFocus": ["池塘"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-053",
      "jlpt": "N5",
      "headword": "医者",
      "source_form": "医者",
      "variants": [
        "医者"
      ],
      "reading": "いしゃ",
      "reading_variants": [
        "いしゃ"
      ],
      "romaji": "isha",
      "part_of_speech": "noun",
      "meaning_zh": "医生",
      "kanji_readings": [
        {
          "form": "医者",
          "reading": "いしゃ"
        }
      ],
      "examples": [
        {
          "ja": "熱があるので、医者に行きます。",
          "zh": "因为发烧，所以去看医生。",
          "focus": ["医者"],
          "zhFocus": ["医生"]
        },
        {
          "ja": "姉は病院で医者をしています。",
          "zh": "姐姐在医院当医生。",
          "focus": ["医者"],
          "zhFocus": ["医生"]
        },
        {
          "ja": "近所の医者はとても親切です。",
          "zh": "附近的医生非常亲切。",
          "focus": ["医者"],
          "zhFocus": ["医生"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-054",
      "jlpt": "N5",
      "headword": "椅子",
      "source_form": "椅子",
      "variants": [
        "椅子"
      ],
      "reading": "いす",
      "reading_variants": [
        "いす"
      ],
      "romaji": "isu",
      "part_of_speech": "noun",
      "meaning_zh": "椅子",
      "kanji_readings": [
        {
          "form": "椅子",
          "reading": "いす"
        }
      ],
      "examples": [
        {
          "ja": "この椅子は古いですが、丈夫です。",
          "zh": "这把椅子很旧，但很结实。",
          "focus": ["椅子"],
          "zhFocus": ["椅子"]
        },
        {
          "ja": "部屋に椅子が四つあります。",
          "zh": "房间里有四把椅子。",
          "focus": ["椅子"],
          "zhFocus": ["椅子"]
        },
        {
          "ja": "椅子に座ってください。",
          "zh": "请坐在椅子上。",
          "focus": ["椅子"],
          "zhFocus": ["椅子"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-055",
      "jlpt": "N5",
      "headword": "忙しい",
      "source_form": "忙しい",
      "variants": [
        "忙しい"
      ],
      "reading": "いそがしい",
      "reading_variants": [
        "いそがしい"
      ],
      "romaji": "isogashii",
      "part_of_speech": "i-adjective",
      "meaning_zh": "忙的",
      "kanji_readings": [
        {
          "form": "忙しい",
          "reading": "いそがしい"
        }
      ],
      "examples": [
        {
          "ja": "今日は仕事が忙しいです。",
          "zh": "今天工作很忙。",
          "focus": ["忙しい"],
          "zhFocus": ["忙"]
        },
        {
          "ja": "朝は忙しくて、朝ご飯を食べませんでした。",
          "zh": "早上太忙，没吃早饭。",
          "focus": ["忙しく"],
          "zhFocus": ["忙"]
        },
        {
          "ja": "今週はとても忙しいです。",
          "zh": "这周非常忙。",
          "focus": ["忙しい"],
          "zhFocus": ["忙"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-056",
      "jlpt": "N5",
      "headword": "痛い",
      "source_form": "痛い",
      "variants": [
        "痛い"
      ],
      "reading": "いたい",
      "reading_variants": [
        "いたい"
      ],
      "romaji": "itai",
      "part_of_speech": "i-adjective",
      "meaning_zh": "疼的；痛的",
      "kanji_readings": [
        {
          "form": "痛い",
          "reading": "いたい"
        }
      ],
      "examples": [
        {
          "ja": "足が痛いです。",
          "zh": "脚疼。",
          "focus": ["痛い"],
          "zhFocus": ["疼"]
        },
        {
          "ja": "おなかが痛くて、学校を休みました。",
          "zh": "肚子疼，所以没去上学。",
          "focus": ["痛く"],
          "zhFocus": ["疼"]
        },
        {
          "ja": "この歯が少し痛いです。",
          "zh": "这颗牙有点疼。",
          "focus": ["痛い"],
          "zhFocus": ["疼"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-057",
      "jlpt": "N5",
      "headword": "一",
      "source_form": "一",
      "variants": [
        "一"
      ],
      "reading": "いち",
      "reading_variants": [
        "いち"
      ],
      "romaji": "ichi",
      "part_of_speech": "numeral",
      "meaning_zh": "一",
      "kanji_readings": [
        {
          "form": "一",
          "reading": "いち"
        }
      ],
      "examples": [
        {
          "ja": "一たす一は二です。",
          "zh": "一加一等于二。",
          "focus": ["一", "一"],
          "zhFocus": ["一", "一"]
        },
        {
          "ja": "答えは一です。",
          "zh": "答案是一。",
          "focus": ["一"],
          "zhFocus": ["一"]
        },
        {
          "ja": "紙に一と書いてください。",
          "zh": "请在纸上写一。",
          "focus": ["一"],
          "zhFocus": ["一"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-058",
      "jlpt": "N5",
      "headword": "一日",
      "source_form": "一日",
      "variants": [
        "一日"
      ],
      "reading": "いちにち",
      "reading_variants": [
        "いちにち"
      ],
      "romaji": "ichinichi",
      "part_of_speech": "noun",
      "meaning_zh": "一天；一整天",
      "senses_zh": [
        "一天",
        "一整天"
      ],
      "kanji_readings": [
        {
          "form": "一日",
          "reading": "いちにち"
        }
      ],
      "examples": [
        {
          "ja": "今日は一日家にいます。",
          "zh": "今天一整天都在家。",
          "focus": ["一日"],
          "zhFocus": ["一整天"]
        },
        {
          "ja": "一日三回薬を飲みます。",
          "zh": "一天吃三次药。",
          "focus": ["一日"],
          "zhFocus": ["一天"]
        },
        {
          "ja": "楽しい一日でした。",
          "zh": "是开心的一天。",
          "focus": ["一日"],
          "zhFocus": ["一天"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-059",
      "jlpt": "N5",
      "headword": "一番",
      "source_form": "一番",
      "variants": [
        "一番"
      ],
      "reading": "いちばん",
      "reading_variants": [
        "いちばん"
      ],
      "romaji": "ichiban",
      "part_of_speech": "noun/adverb",
      "meaning_zh": "第一；最",
      "senses_zh": [
        "第一",
        "最"
      ],
      "kanji_readings": [
        {
          "form": "一番",
          "reading": "いちばん"
        }
      ],
      "examples": [
        {
          "ja": "これが一番好きです。",
          "zh": "最喜欢这个。",
          "focus": ["一番"],
          "zhFocus": ["最"]
        },
        {
          "ja": "一番前に座ります。",
          "zh": "坐在最前面。",
          "focus": ["一番"],
          "zhFocus": ["最"]
        },
        {
          "ja": "日本語が一番難しいです。",
          "zh": "日语最难。",
          "focus": ["一番"],
          "zhFocus": ["最"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-060",
      "jlpt": "N5",
      "headword": "いつ",
      "source_form": "いつ",
      "variants": [
        "いつ"
      ],
      "reading": "いつ",
      "reading_variants": [
        "いつ"
      ],
      "romaji": "itsu",
      "part_of_speech": "interrogative/adverb",
      "meaning_zh": "什么时候",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "いつ日本へ行きますか。",
          "zh": "你什么时候去日本？",
          "focus": ["いつ"],
          "zhFocus": ["什么时候"]
        },
        {
          "ja": "学校はいつ始まりますか。",
          "zh": "学校什么时候开始？",
          "focus": ["いつ"],
          "zhFocus": ["什么时候"]
        },
        {
          "ja": "いつ会えますか。",
          "zh": "什么时候能见面？",
          "focus": ["いつ"],
          "zhFocus": ["什么时候"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-061",
      "jlpt": "N5",
      "headword": "五日",
      "source_form": "五日",
      "variants": [
        "五日"
      ],
      "reading": "いつか",
      "reading_variants": [
        "いつか"
      ],
      "romaji": "itsuka",
      "part_of_speech": "noun",
      "meaning_zh": "五号；五天",
      "senses_zh": [
        "五号",
        "五天"
      ],
      "kanji_readings": [
        {
          "form": "五日",
          "reading": "いつか"
        }
      ],
      "examples": [
        {
          "ja": "五日に会いましょう。",
          "zh": "五号见吧。",
          "focus": ["五日"],
          "zhFocus": ["五号"]
        },
        {
          "ja": "五日は休みです。",
          "zh": "五号休息。",
          "focus": ["五日"],
          "zhFocus": ["五号"]
        },
        {
          "ja": "五日に日本へ行きます。",
          "zh": "五号去日本。",
          "focus": ["五日"],
          "zhFocus": ["五号"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-062",
      "jlpt": "N5",
      "headword": "一緒",
      "source_form": "一緒",
      "variants": [
        "一緒"
      ],
      "reading": "いっしょ",
      "reading_variants": [
        "いっしょ"
      ],
      "romaji": "issho",
      "part_of_speech": "noun",
      "meaning_zh": "一起；相同",
      "senses_zh": [
        "一起",
        "相同"
      ],
      "kanji_readings": [
        {
          "form": "一緒",
          "reading": "いっしょ"
        }
      ],
      "examples": [
        {
          "ja": "一緒に勉強しましょう。",
          "zh": "一起学习吧。",
          "focus": ["一緒"],
          "zhFocus": ["一起"]
        },
        {
          "ja": "友達と一緒に帰ります。",
          "zh": "和朋友一起回去。",
          "focus": ["一緒"],
          "zhFocus": ["一起"]
        },
        {
          "ja": "一緒に写真を撮りました。",
          "zh": "一起拍了照片。",
          "focus": ["一緒"],
          "zhFocus": ["一起"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-063",
      "jlpt": "N5",
      "headword": "五つ",
      "source_form": "五つ",
      "variants": [
        "五つ"
      ],
      "reading": "いつつ",
      "reading_variants": [
        "いつつ"
      ],
      "romaji": "itsutsu",
      "part_of_speech": "numeral/counter",
      "meaning_zh": "五个",
      "kanji_readings": [
        {
          "form": "五つ",
          "reading": "いつつ"
        }
      ],
      "examples": [
        {
          "ja": "りんごが五つあります。",
          "zh": "有五个苹果。",
          "focus": ["五つ"],
          "zhFocus": ["五个"]
        },
        {
          "ja": "五つください。",
          "zh": "请给我五个。",
          "focus": ["五つ"],
          "zhFocus": ["五个"]
        },
        {
          "ja": "五つの漢字を覚えます。",
          "zh": "记五个汉字。",
          "focus": ["五つ"],
          "zhFocus": ["五个"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-064",
      "jlpt": "N5",
      "headword": "いつも",
      "source_form": "いつも",
      "variants": [
        "いつも"
      ],
      "reading": "いつも",
      "reading_variants": [
        "いつも"
      ],
      "romaji": "itsumo",
      "part_of_speech": "adverb",
      "meaning_zh": "总是；平时",
      "senses_zh": [
        "总是",
        "平时"
      ],
      "kanji_readings": [],
      "examples": [
        {
          "ja": "いつも七時に起きます。",
          "zh": "总是七点起床。",
          "focus": ["いつも"],
          "zhFocus": ["总是"]
        },
        {
          "ja": "母はいつも元気です。",
          "zh": "妈妈总是很有精神。",
          "focus": ["いつも"],
          "zhFocus": ["总是"]
        },
        {
          "ja": "いつもこの店で買います。",
          "zh": "总是在这家店买。",
          "focus": ["いつも"],
          "zhFocus": ["总是"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-065",
      "jlpt": "N5",
      "headword": "犬",
      "source_form": "犬",
      "variants": [
        "犬"
      ],
      "reading": "いぬ",
      "reading_variants": [
        "いぬ"
      ],
      "romaji": "inu",
      "part_of_speech": "noun",
      "meaning_zh": "狗",
      "kanji_readings": [
        {
          "form": "犬",
          "reading": "いぬ"
        }
      ],
      "examples": [
        {
          "ja": "犬が公園にいます。",
          "zh": "公园里有狗。",
          "focus": ["犬"],
          "zhFocus": ["狗"]
        },
        {
          "ja": "犬と散歩します。",
          "zh": "和狗散步。",
          "focus": ["犬"],
          "zhFocus": ["狗"]
        },
        {
          "ja": "白い犬が好きです。",
          "zh": "喜欢白狗。",
          "focus": ["犬"],
          "zhFocus": ["狗"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-066",
      "jlpt": "N5",
      "headword": "今",
      "source_form": "今",
      "variants": [
        "今"
      ],
      "reading": "いま",
      "reading_variants": [
        "いま"
      ],
      "romaji": "ima",
      "part_of_speech": "noun",
      "meaning_zh": "现在",
      "kanji_readings": [
        {
          "form": "今",
          "reading": "いま"
        }
      ],
      "examples": [
        {
          "ja": "今、何時ですか。",
          "zh": "现在几点？",
          "focus": ["今"],
          "zhFocus": ["现在"]
        },
        {
          "ja": "今、勉強しています。",
          "zh": "现在正在学习。",
          "focus": ["今"],
          "zhFocus": ["现在"]
        },
        {
          "ja": "今は忙しいです。",
          "zh": "现在很忙。",
          "focus": ["今"],
          "zhFocus": ["现在"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-067",
      "jlpt": "N5",
      "headword": "意味",
      "source_form": "意味",
      "variants": [
        "意味"
      ],
      "reading": "いみ",
      "reading_variants": [
        "いみ"
      ],
      "romaji": "imi",
      "part_of_speech": "noun",
      "meaning_zh": "意思；意义",
      "kanji_readings": [
        {
          "form": "意味",
          "reading": "いみ"
        }
      ],
      "examples": [
        {
          "ja": "この言葉の意味は何ですか。",
          "zh": "这个词是什么意思？",
          "focus": ["意味"],
          "zhFocus": ["意思"]
        },
        {
          "ja": "意味が分かりません。",
          "zh": "不明白意思。",
          "focus": ["意味"],
          "zhFocus": ["意思"]
        },
        {
          "ja": "二つの意味があります。",
          "zh": "有两个意思。",
          "focus": ["意味"],
          "zhFocus": ["意思"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-068",
      "jlpt": "N5",
      "headword": "妹",
      "source_form": "妹",
      "variants": [
        "妹"
      ],
      "reading": "いもうと",
      "reading_variants": [
        "いもうと"
      ],
      "romaji": "imouto",
      "part_of_speech": "noun",
      "meaning_zh": "妹妹（称自己的妹妹）",
      "kanji_readings": [
        {
          "form": "妹",
          "reading": "いもうと"
        }
      ],
      "examples": [
        {
          "ja": "妹は学生です。",
          "zh": "我妹妹是学生。",
          "focus": ["妹"],
          "zhFocus": ["妹妹"]
        },
        {
          "ja": "妹と公園へ行きます。",
          "zh": "和妹妹去公园。",
          "focus": ["妹"],
          "zhFocus": ["妹妹"]
        },
        {
          "ja": "妹にお菓子をあげました。",
          "zh": "给了妹妹点心。",
          "focus": ["妹"],
          "zhFocus": ["妹妹"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-069",
      "jlpt": "N5",
      "headword": "嫌",
      "source_form": "嫌",
      "variants": [
        "嫌"
      ],
      "reading": "いや",
      "reading_variants": [
        "いや"
      ],
      "romaji": "iya",
      "part_of_speech": "na-adjective",
      "meaning_zh": "不愿意；讨厌（主观上排斥）",
      "kanji_readings": [
        {
          "form": "嫌",
          "reading": "いや"
        }
      ],
      "examples": [
        {
          "ja": "一人で行くのは嫌です。",
          "zh": "我不想一个人去。",
          "focus": ["嫌"],
          "zhFocus": ["不想"]
        },
        {
          "ja": "毎日雨で嫌ですね。",
          "zh": "每天都下雨，真烦人。",
          "focus": ["嫌"],
          "zhFocus": ["烦人"]
        },
        {
          "ja": "嫌なことを忘れました。",
          "zh": "忘掉了讨厌的事。",
          "focus": ["嫌"],
          "zhFocus": ["讨厌"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-070",
      "jlpt": "N5",
      "headword": "入口",
      "source_form": "入口",
      "variants": [
        "入口"
      ],
      "reading": "いりぐち",
      "reading_variants": [
        "いりぐち"
      ],
      "romaji": "iriguchi",
      "part_of_speech": "noun",
      "meaning_zh": "入口",
      "kanji_readings": [
        {
          "form": "入口",
          "reading": "いりぐち"
        }
      ],
      "examples": [
        {
          "ja": "この建物の入口はあそこです。",
          "zh": "这栋建筑的入口在那里。",
          "focus": ["入口"],
          "zhFocus": ["入口"]
        },
        {
          "ja": "入口で切符を見せます。",
          "zh": "在入口处出示票。",
          "focus": ["入口"],
          "zhFocus": ["入口"]
        },
        {
          "ja": "入口で友達を待ちます。",
          "zh": "在入口处等朋友。",
          "focus": ["入口"],
          "zhFocus": ["入口"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-071",
      "jlpt": "N5",
      "headword": "いる",
      "source_form": "居る",
      "variants": [
        "いる"
      ],
      "reading": "いる",
      "reading_variants": [
        "いる"
      ],
      "romaji": "iru",
      "part_of_speech": "verb",
      "meaning_zh": "有；在（有生命物，常写作假名：いる）",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "部屋に人がいます。",
          "zh": "房间里有人。",
          "focus": ["い"],
          "zhFocus": ["有"]
        },
        {
          "ja": "公園に子供がいます。",
          "zh": "公园里有孩子。",
          "focus": ["い"],
          "zhFocus": ["有"]
        },
        {
          "ja": "先生は教室にいます。",
          "zh": "老师在教室里。",
          "focus": ["い"],
          "zhFocus": ["在"]
        }
      ],
      "note_zh": "已把旧写法/不常用写法规范为现代常用写法；原始写法保留在 source_form。"
    },
    {
      "id": "n5-072",
      "merged_source_ids": ["n4-039"],
      "jlpt": "N5",
      "headword": "要る",
      "source_form": "要る",
      "variants": [
        "要る"
      ],
      "reading": "いる",
      "reading_variants": [
        "いる"
      ],
      "romaji": "iru",
      "part_of_speech": "verb",
      "meaning_zh": "需要",
      "kanji_readings": [
        {
          "form": "要る",
          "reading": "いる"
        }
      ],
      "examples": [
        {
          "ja": "水が要ります。",
          "zh": "需要水。",
          "focus": ["要り"],
          "zhFocus": ["需要"]
        },
        {
          "ja": "新しいノートが要ります。",
          "zh": "需要新的笔记本。",
          "focus": ["要り"],
          "zhFocus": ["需要"]
        },
        {
          "ja": "お金はあまり要りません。",
          "zh": "不太需要钱。",
          "focus": ["要り"],
          "zhFocus": ["需要"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-073",
      "jlpt": "N5",
      "headword": "入れる",
      "source_form": "入れる",
      "variants": [
        "入れる"
      ],
      "reading": "いれる",
      "reading_variants": [
        "いれる"
      ],
      "romaji": "ireru",
      "part_of_speech": "verb",
      "meaning_zh": "放入；装入",
      "kanji_readings": [
        {
          "form": "入れる",
          "reading": "いれる"
        }
      ],
      "examples": [
        {
          "ja": "かばんに本を入れます。",
          "zh": "把书放进包里。",
          "focus": ["入れ"],
          "zhFocus": ["放进"]
        },
        {
          "ja": "冷蔵庫に牛乳を入れました。",
          "zh": "把牛奶放进了冰箱。",
          "focus": ["入れ"],
          "zhFocus": ["放进"]
        },
        {
          "ja": "名前をここに入れてください。",
          "zh": "请把名字填在这里。",
          "focus": ["入れ"],
          "zhFocus": ["填"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-074",
      "jlpt": "N5",
      "headword": "色",
      "source_form": "色",
      "variants": [
        "色"
      ],
      "reading": "いろ",
      "reading_variants": [
        "いろ"
      ],
      "romaji": "iro",
      "part_of_speech": "noun",
      "meaning_zh": "颜色",
      "kanji_readings": [
        {
          "form": "色",
          "reading": "いろ"
        }
      ],
      "examples": [
        {
          "ja": "何色が好きですか。",
          "zh": "你喜欢什么颜色？",
          "focus": ["色"],
          "zhFocus": ["颜色"]
        },
        {
          "ja": "この色はきれいです。",
          "zh": "这个颜色很漂亮。",
          "focus": ["色"],
          "zhFocus": ["颜色"]
        },
        {
          "ja": "赤い色の花があります。",
          "zh": "有红色的花。",
          "focus": ["色"],
          "zhFocus": ["色"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-075",
      "jlpt": "N5",
      "headword": "いろいろ",
      "source_form": "色々",
      "variants": [
        "いろいろ"
      ],
      "reading": "いろいろ",
      "reading_variants": [
        "いろいろ"
      ],
      "romaji": "iroiro",
      "part_of_speech": "na-adjective/adverb",
      "meaning_zh": "各种各样",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "店にいろいろな物があります。",
          "zh": "店里有各种东西。",
          "focus": ["いろいろ"],
          "zhFocus": ["各种"]
        },
        {
          "ja": "週末にいろいろな所へ行きました。",
          "zh": "周末去了各种地方。",
          "focus": ["いろいろ"],
          "zhFocus": ["各种"]
        },
        {
          "ja": "いろいろ教えてください。",
          "zh": "请教我各种东西。",
          "focus": ["いろいろ"],
          "zhFocus": ["各种"]
        }
      ],
      "note_zh": "已把旧写法/不常用写法规范为现代常用写法；原始写法保留在 source_form。"
    },
    {
      "id": "n5-076",
      "jlpt": "N5",
      "headword": "上",
      "source_form": "上",
      "variants": [
        "上"
      ],
      "reading": "うえ",
      "reading_variants": [
        "うえ"
      ],
      "romaji": "ue",
      "part_of_speech": "noun",
      "meaning_zh": "上；上面",
      "kanji_readings": [
        {
          "form": "上",
          "reading": "うえ"
        }
      ],
      "examples": [
        {
          "ja": "テーブルの上にりんごが三つあります。",
          "zh": "桌子上有三个苹果。",
          "focus": ["上"],
          "zhFocus": ["上"]
        },
        {
          "ja": "上を見てください。",
          "zh": "请往上看。",
          "focus": ["上"],
          "zhFocus": ["上"]
        },
        {
          "ja": "姉は上の部屋にいます。",
          "zh": "姐姐在楼上的房间里。",
          "focus": ["上"],
          "zhFocus": ["上"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-077",
      "jlpt": "N5",
      "headword": "後ろ",
      "source_form": "後ろ",
      "variants": [
        "後ろ"
      ],
      "reading": "うしろ",
      "reading_variants": [
        "うしろ"
      ],
      "romaji": "ushiro",
      "part_of_speech": "noun",
      "meaning_zh": "后面",
      "kanji_readings": [
        {
          "form": "後ろ",
          "reading": "うしろ"
        }
      ],
      "examples": [
        {
          "ja": "学校は病院の後ろです。",
          "zh": "学校在医院后面。",
          "focus": ["後ろ"],
          "zhFocus": ["后面"]
        },
        {
          "ja": "後ろを見ないでください。",
          "zh": "请不要看后面。",
          "focus": ["後ろ"],
          "zhFocus": ["后面"]
        },
        {
          "ja": "私の後ろに友達がいます。",
          "zh": "我后面有朋友。",
          "focus": ["後ろ"],
          "zhFocus": ["后面"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-078",
      "jlpt": "N5",
      "headword": "薄い",
      "source_form": "薄い",
      "variants": [
        "薄い"
      ],
      "reading": "うすい",
      "reading_variants": [
        "うすい"
      ],
      "romaji": "usui",
      "part_of_speech": "i-adjective",
      "meaning_zh": "薄的；淡的",
      "senses_zh": [
        "薄的",
        "淡的"
      ],
      "kanji_readings": [
        {
          "form": "薄い",
          "reading": "うすい"
        }
      ],
      "examples": [
        {
          "ja": "この本は薄いです。",
          "zh": "这本书很薄。",
          "focus": ["薄い"],
          "zhFocus": ["薄"]
        },
        {
          "ja": "このコーヒーは味が薄いです。",
          "zh": "这杯咖啡味道很淡。",
          "focus": ["薄い"],
          "zhFocus": ["淡"]
        },
        {
          "ja": "薄い紙に字を書きます。",
          "zh": "在薄纸上写字。",
          "focus": ["薄い"],
          "zhFocus": ["薄"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-079",
      "jlpt": "N5",
      "headword": "歌",
      "source_form": "歌",
      "variants": [
        "歌"
      ],
      "reading": "うた",
      "reading_variants": [
        "うた"
      ],
      "romaji": "uta",
      "part_of_speech": "noun",
      "meaning_zh": "歌；歌曲",
      "kanji_readings": [
        {
          "form": "歌",
          "reading": "うた"
        }
      ],
      "examples": [
        {
          "ja": "歌を歌います。",
          "zh": "唱歌。",
          "focus": ["歌"],
          "zhFocus": ["歌"]
        },
        {
          "ja": "この歌が好きです。",
          "zh": "我喜欢这首歌。",
          "focus": ["歌"],
          "zhFocus": ["歌"]
        },
        {
          "ja": "新しい歌を覚えました。",
          "zh": "记住了新歌。",
          "focus": ["歌"],
          "zhFocus": ["歌"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-080",
      "jlpt": "N5",
      "headword": "歌う",
      "source_form": "歌う",
      "variants": [
        "歌う"
      ],
      "reading": "うたう",
      "reading_variants": [
        "うたう"
      ],
      "romaji": "utau",
      "part_of_speech": "verb",
      "meaning_zh": "唱歌",
      "kanji_readings": [
        {
          "form": "歌う",
          "reading": "うたう"
        }
      ],
      "examples": [
        {
          "ja": "友達と歌を歌います。",
          "zh": "和朋友唱歌。",
          "focus": ["歌い"],
          "zhFocus": ["唱歌"]
        },
        {
          "ja": "カラオケで歌いました。",
          "zh": "在卡拉OK唱了歌。",
          "focus": ["歌い"],
          "zhFocus": ["唱"]
        },
        {
          "ja": "大きな声で歌ってください。",
          "zh": "请大声唱。",
          "focus": ["歌っ"],
          "zhFocus": ["唱"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-081",
      "jlpt": "N5",
      "headword": "うち",
      "source_form": "うち",
      "variants": [
        "うち"
      ],
      "reading": "うち",
      "reading_variants": [
        "うち"
      ],
      "romaji": "uchi",
      "part_of_speech": "noun",
      "meaning_zh": "家；自己家（口语）；我们这边",
      "senses_zh": [
        "家；自己家（口语）",
        "我们这边"
      ],
      "kanji_readings": [],
      "examples": [
        {
          "ja": "うちへ帰ります。",
          "zh": "回家。",
          "focus": ["うち"],
          "zhFocus": ["家"]
        },
        {
          "ja": "うちに猫がいます。",
          "zh": "我家有猫。",
          "focus": ["うち"],
          "zhFocus": ["家"]
        },
        {
          "ja": "うちで晩ご飯を食べます。",
          "zh": "在家吃晚饭。",
          "focus": ["うち"],
          "zhFocus": ["家"]
        }
      ],
      "note_zh": "本条只讲“家、自己家、我们这边”；表示“内部／范围内／趁……期间”的「うち」在 N4 另行学习。"
    },
    {
      "id": "n5-082",
      "jlpt": "N5",
      "headword": "生まれる",
      "source_form": "生まれる",
      "variants": [
        "生まれる"
      ],
      "reading": "うまれる",
      "reading_variants": [
        "うまれる"
      ],
      "romaji": "umareru",
      "part_of_speech": "verb",
      "meaning_zh": "出生",
      "kanji_readings": [
        {
          "form": "生まれる",
          "reading": "うまれる"
        }
      ],
      "examples": [
        {
          "ja": "私は東京で生まれました。",
          "zh": "我出生在东京。",
          "focus": ["生まれ"],
          "zhFocus": ["出生"]
        },
        {
          "ja": "妹は五月に生まれました。",
          "zh": "妹妹五月出生。",
          "focus": ["生まれ"],
          "zhFocus": ["出生"]
        },
        {
          "ja": "赤ちゃんが生まれました。",
          "zh": "宝宝出生了。",
          "focus": ["生まれ"],
          "zhFocus": ["出生"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-083",
      "jlpt": "N5",
      "headword": "海",
      "source_form": "海",
      "variants": [
        "海"
      ],
      "reading": "うみ",
      "reading_variants": [
        "うみ"
      ],
      "romaji": "umi",
      "part_of_speech": "noun",
      "meaning_zh": "海",
      "kanji_readings": [
        {
          "form": "海",
          "reading": "うみ"
        }
      ],
      "examples": [
        {
          "ja": "夏休みに家族と海へ行きました。",
          "zh": "暑假和家人去了海边。",
          "focus": ["海"],
          "zhFocus": ["海"]
        },
        {
          "ja": "今日は海がとても青いです。",
          "zh": "今天的大海非常蓝。",
          "focus": ["海"],
          "zhFocus": ["海"]
        },
        {
          "ja": "海で泳ぐのが好きです。",
          "zh": "喜欢在海里游泳。",
          "focus": ["海"],
          "zhFocus": ["海"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-084",
      "jlpt": "N5",
      "headword": "売る",
      "source_form": "売る",
      "variants": [
        "売る"
      ],
      "reading": "うる",
      "reading_variants": [
        "うる"
      ],
      "romaji": "uru",
      "part_of_speech": "verb",
      "meaning_zh": "卖",
      "kanji_readings": [
        {
          "form": "売る",
          "reading": "うる"
        }
      ],
      "examples": [
        {
          "ja": "店で野菜を売っています。",
          "zh": "店里卖蔬菜。",
          "focus": ["売っ"],
          "zhFocus": ["卖"]
        },
        {
          "ja": "古い本を売りました。",
          "zh": "卖了旧书。",
          "focus": ["売り"],
          "zhFocus": ["卖"]
        },
        {
          "ja": "駅の前で新聞を売っています。",
          "zh": "车站前在卖报纸。",
          "focus": ["売っ"],
          "zhFocus": ["卖"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-085",
      "jlpt": "N5",
      "headword": "うるさい",
      "source_form": "うるさい",
      "variants": [
        "うるさい"
      ],
      "reading": "うるさい",
      "reading_variants": [
        "うるさい"
      ],
      "romaji": "urusai",
      "part_of_speech": "i-adjective",
      "meaning_zh": "吵的；烦人的",
      "senses_zh": [
        "吵的",
        "烦人的"
      ],
      "kanji_readings": [],
      "examples": [
        {
          "ja": "外は車の音でうるさいです。",
          "zh": "外面车声很吵。",
          "focus": ["うるさい"],
          "zhFocus": ["吵"]
        },
        {
          "ja": "テレビの音がうるさいです。",
          "zh": "电视的声音很吵。",
          "focus": ["うるさい"],
          "zhFocus": ["吵"]
        },
        {
          "ja": "隣の部屋は夜もうるさいです。",
          "zh": "隔壁房间晚上也很吵。",
          "focus": ["うるさい"],
          "zhFocus": ["吵"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-086",
      "jlpt": "N5",
      "headword": "上着",
      "source_form": "上着",
      "variants": [
        "上着"
      ],
      "reading": "うわぎ",
      "reading_variants": [
        "うわぎ"
      ],
      "romaji": "uwagi",
      "part_of_speech": "noun",
      "meaning_zh": "上衣；外衣",
      "kanji_readings": [
        {
          "form": "上着",
          "reading": "うわぎ"
        }
      ],
      "examples": [
        {
          "ja": "上着を着ます。",
          "zh": "穿外套。",
          "focus": ["上着"],
          "zhFocus": ["外套"]
        },
        {
          "ja": "寒いので、上着を持って行きます。",
          "zh": "因为冷，所以带外套去。",
          "focus": ["上着"],
          "zhFocus": ["外套"]
        },
        {
          "ja": "新しい上着を買いました。",
          "zh": "买了新外套。",
          "focus": ["上着"],
          "zhFocus": ["外套"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-087",
      "jlpt": "N5",
      "headword": "絵",
      "source_form": "絵",
      "variants": [
        "絵"
      ],
      "reading": "え",
      "reading_variants": [
        "え"
      ],
      "romaji": "e",
      "part_of_speech": "noun",
      "meaning_zh": "画；图画",
      "kanji_readings": [
        {
          "form": "絵",
          "reading": "え"
        }
      ],
      "examples": [
        {
          "ja": "絵を描きます。",
          "zh": "画画。",
          "focus": ["絵"],
          "zhFocus": [{"after": "画", "text": "画"}]
        },
        {
          "ja": "この絵はきれいです。",
          "zh": "这幅画很漂亮。",
          "focus": ["絵"],
          "zhFocus": ["画"]
        },
        {
          "ja": "友達に絵を見せます。",
          "zh": "给朋友看画。",
          "focus": ["絵"],
          "zhFocus": ["画"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-088",
      "jlpt": "N5",
      "headword": "映画",
      "source_form": "映画",
      "variants": [
        "映画"
      ],
      "reading": "えいが",
      "reading_variants": [
        "えいが"
      ],
      "romaji": "eiga",
      "part_of_speech": "noun",
      "meaning_zh": "电影",
      "kanji_readings": [
        {
          "form": "映画",
          "reading": "えいが"
        }
      ],
      "examples": [
        {
          "ja": "週末に映画を見ます。",
          "zh": "周末看电影。",
          "focus": ["映画"],
          "zhFocus": ["电影"]
        },
        {
          "ja": "友達と映画に行きました。",
          "zh": "和朋友去看了电影。",
          "focus": ["映画"],
          "zhFocus": ["电影"]
        },
        {
          "ja": "この映画はおもしろいです。",
          "zh": "这部电影很有趣。",
          "focus": ["映画"],
          "zhFocus": ["电影"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-089",
      "jlpt": "N5",
      "headword": "映画館",
      "source_form": "映画館",
      "variants": [
        "映画館"
      ],
      "reading": "えいがかん",
      "reading_variants": [
        "えいがかん"
      ],
      "romaji": "eigakan",
      "part_of_speech": "noun",
      "meaning_zh": "电影院",
      "kanji_readings": [
        {
          "form": "映画館",
          "reading": "えいがかん"
        }
      ],
      "examples": [
        {
          "ja": "映画館で映画を見ます。",
          "zh": "在电影院看电影。",
          "focus": ["映画館"],
          "zhFocus": ["电影院"]
        },
        {
          "ja": "映画館は駅の近くです。",
          "zh": "电影院在车站附近。",
          "focus": ["映画館"],
          "zhFocus": ["电影院"]
        },
        {
          "ja": "友達と映画館へ行きます。",
          "zh": "和朋友去电影院。",
          "focus": ["映画館"],
          "zhFocus": ["电影院"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-090",
      "jlpt": "N5",
      "headword": "英語",
      "source_form": "英語",
      "variants": [
        "英語"
      ],
      "reading": "えいご",
      "reading_variants": [
        "えいご"
      ],
      "romaji": "eigo",
      "part_of_speech": "noun",
      "meaning_zh": "英语",
      "kanji_readings": [
        {
          "form": "英語",
          "reading": "えいご"
        }
      ],
      "examples": [
        {
          "ja": "英語を勉強します。",
          "zh": "学习英语。",
          "focus": ["英語"],
          "zhFocus": ["英语"]
        },
        {
          "ja": "英語の先生です。",
          "zh": "是英语老师。",
          "focus": ["英語"],
          "zhFocus": ["英语"]
        },
        {
          "ja": "英語が少し分かります。",
          "zh": "懂一点英语。",
          "focus": ["英語"],
          "zhFocus": ["英语"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-091",
      "jlpt": "N5",
      "headword": "ええ",
      "source_form": "ええ",
      "variants": [
        "ええ"
      ],
      "reading": "ええ",
      "reading_variants": [
        "ええ"
      ],
      "romaji": "ee",
      "part_of_speech": "interjection/expression",
      "meaning_zh": "是的；嗯",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "ええ、そうです。",
          "zh": "嗯，是的。",
          "focus": ["ええ"],
          "zhFocus": ["是"]
        },
        {
          "ja": "ええ、好きです。",
          "zh": "嗯，喜欢。",
          "focus": ["ええ"],
          "zhFocus": ["嗯"]
        },
        {
          "ja": "ええ、分かりました。",
          "zh": "嗯，明白了。",
          "focus": ["ええ"],
          "zhFocus": ["嗯"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-092",
      "jlpt": "N5",
      "headword": "駅",
      "source_form": "駅",
      "variants": [
        "駅"
      ],
      "reading": "えき",
      "reading_variants": [
        "えき"
      ],
      "romaji": "eki",
      "part_of_speech": "noun",
      "meaning_zh": "车站",
      "kanji_readings": [
        {
          "form": "駅",
          "reading": "えき"
        }
      ],
      "examples": [
        {
          "ja": "毎朝、駅から電車に乗ります。",
          "zh": "每天早上从车站乘电车。",
          "focus": ["駅"],
          "zhFocus": ["车站"]
        },
        {
          "ja": "駅は学校の近くです。",
          "zh": "车站在学校附近。",
          "focus": ["駅"],
          "zhFocus": ["车站"]
        },
        {
          "ja": "駅の前に大きな本屋があります。",
          "zh": "车站前面有一家大书店。",
          "focus": ["駅"],
          "zhFocus": ["车站"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-093",
      "jlpt": "N5",
      "headword": "エレベーター",
      "source_form": "エレベーター",
      "variants": [
        "エレベーター"
      ],
      "reading": "エレベーター",
      "reading_variants": [
        "エレベーター"
      ],
      "romaji": "erebeetaa",
      "part_of_speech": "noun",
      "meaning_zh": "电梯",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "エレベーターで五階へ上がります。",
          "zh": "乘电梯上五楼。",
          "focus": ["エレベーター"],
          "zhFocus": ["电梯"]
        },
        {
          "ja": "エレベーターは一階に止まっています。",
          "zh": "电梯停在一楼。",
          "focus": ["エレベーター"],
          "zhFocus": ["电梯"]
        },
        {
          "ja": "荷物が重いので、エレベーターを使います。",
          "zh": "因为行李很重，所以乘电梯。",
          "focus": ["エレベーター"],
          "zhFocus": ["电梯"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-094",
      "jlpt": "N5",
      "headword": "～円",
      "source_form": "～円",
      "variants": [
        "～円"
      ],
      "reading": "～えん",
      "reading_variants": [
        "～えん"
      ],
      "romaji": "~en",
      "part_of_speech": "counter/suffix",
      "meaning_zh": "日元；……日元",
      "kanji_readings": [
        {
          "form": "～円",
          "reading": "～えん"
        }
      ],
      "examples": [
        {
          "ja": "このパンは百円です。",
          "zh": "这个面包一百日元。",
          "focus": ["円"],
          "zhFocus": ["日元"]
        },
        {
          "ja": "切符は二百円です。",
          "zh": "车票二百日元。",
          "focus": ["円"],
          "zhFocus": ["日元"]
        },
        {
          "ja": "千円あります。",
          "zh": "有一千日元。",
          "focus": ["円"],
          "zhFocus": ["日元"]
        }
      ],
      "note_zh": "接在数字或名词后使用；例句中去掉了前缀符号「～」。"
    },
    {
      "id": "n5-095",
      "jlpt": "N5",
      "headword": "鉛筆",
      "source_form": "鉛筆",
      "variants": [
        "鉛筆"
      ],
      "reading": "えんぴつ",
      "reading_variants": [
        "えんぴつ"
      ],
      "romaji": "enpitsu",
      "part_of_speech": "noun",
      "meaning_zh": "铅笔",
      "kanji_readings": [
        {
          "form": "鉛筆",
          "reading": "えんぴつ"
        }
      ],
      "examples": [
        {
          "ja": "机の上に鉛筆が二本あります。",
          "zh": "桌子上有两支铅笔。",
          "focus": ["鉛筆"],
          "zhFocus": ["铅笔"]
        },
        {
          "ja": "この鉛筆はもう短いです。",
          "zh": "这支铅笔已经很短了。",
          "focus": ["鉛筆"],
          "zhFocus": ["铅笔"]
        },
        {
          "ja": "鉛筆で名前を書きます。",
          "zh": "用铅笔写名字。",
          "focus": ["鉛筆"],
          "zhFocus": ["铅笔"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-096",
      "jlpt": "N5",
      "headword": "お～",
      "source_form": "お～",
      "variants": [
        "お～"
      ],
      "reading": "お～",
      "reading_variants": [
        "お～"
      ],
      "romaji": "o~",
      "part_of_speech": "prefix",
      "meaning_zh": "礼貌前缀；尊敬前缀",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "お名前は何ですか。",
          "zh": "您的名字是什么？",
          "focus": ["お"],
          "zhFocus": ["您"]
        },
        {
          "ja": "お国はどちらですか。",
          "zh": "您是哪国人？",
          "focus": ["お"],
          "zhFocus": ["您"]
        },
        {
          "ja": "お母さんは元気ですか。",
          "zh": "您母亲好吗？",
          "focus": ["お"],
          "zhFocus": ["您"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-097",
      "jlpt": "N5",
      "headword": "美味しい",
      "source_form": "美味しい",
      "variants": [
        "美味しい"
      ],
      "reading": "おいしい",
      "reading_variants": [
        "おいしい"
      ],
      "romaji": "oishii",
      "part_of_speech": "i-adjective",
      "meaning_zh": "好吃的；美味的",
      "kanji_readings": [
        {
          "form": "美味しい",
          "reading": "おいしい"
        }
      ],
      "examples": [
        {
          "ja": "このカレーは美味しいです。",
          "zh": "这个咖喱很好吃。",
          "focus": ["美味しい"],
          "zhFocus": ["好吃"]
        },
        {
          "ja": "母の料理はとても美味しいです。",
          "zh": "妈妈做的菜非常好吃。",
          "focus": ["美味しい"],
          "zhFocus": ["好吃"]
        },
        {
          "ja": "美味しいパンを買いました。",
          "zh": "买了好吃的面包。",
          "focus": ["美味しい"],
          "zhFocus": ["好吃"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-098",
      "jlpt": "N5",
      "headword": "多い",
      "source_form": "多い",
      "variants": [
        "多い"
      ],
      "reading": "おおい",
      "reading_variants": [
        "おおい"
      ],
      "romaji": "ooi",
      "part_of_speech": "i-adjective",
      "meaning_zh": "多的",
      "kanji_readings": [
        {
          "form": "多い",
          "reading": "おおい"
        }
      ],
      "examples": [
        {
          "ja": "この駅は人が多いです。",
          "zh": "这个车站人很多。",
          "focus": ["多い"],
          "zhFocus": ["多"]
        },
        {
          "ja": "この町は店が多いです。",
          "zh": "这个城镇店很多。",
          "focus": ["多い"],
          "zhFocus": ["多"]
        },
        {
          "ja": "日本は山が多いです。",
          "zh": "日本山很多。",
          "focus": ["多い"],
          "zhFocus": ["多"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-099",
      "jlpt": "N5",
      "headword": "大きい",
      "source_form": "大きい",
      "variants": [
        "大きい"
      ],
      "reading": "おおきい",
      "reading_variants": [
        "おおきい"
      ],
      "romaji": "ookii",
      "part_of_speech": "i-adjective",
      "meaning_zh": "大的",
      "kanji_readings": [
        {
          "form": "大きい",
          "reading": "おおきい"
        }
      ],
      "examples": [
        {
          "ja": "この犬は大きいです。",
          "zh": "这只狗很大。",
          "focus": ["大きい"],
          "zhFocus": ["大"]
        },
        {
          "ja": "大きい荷物を持っています。",
          "zh": "拿着一件大行李。",
          "focus": ["大きい"],
          "zhFocus": ["大"]
        },
        {
          "ja": "口を大きく開けてください。",
          "zh": "请把嘴张大。",
          "focus": ["大きく"],
          "zhFocus": ["大"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-100",
      "jlpt": "N5",
      "headword": "大きな",
      "source_form": "大きな",
      "variants": [
        "大きな"
      ],
      "reading": "おおきな",
      "reading_variants": [
        "おおきな"
      ],
      "romaji": "ookina",
      "part_of_speech": "pre-noun",
      "meaning_zh": "大的（连体词）",
      "answer_zh": "大的",
      "kanji_readings": [
        {
          "form": "大きな",
          "reading": "おおきな"
        }
      ],
      "examples": [
        {
          "ja": "大きな犬がいます。",
          "zh": "有一只大狗。",
          "focus": ["大きな"],
          "zhFocus": ["大"]
        },
        {
          "ja": "大きな家に住みたいです。",
          "zh": "想住在大房子里。",
          "focus": ["大きな"],
          "zhFocus": ["大"]
        },
        {
          "ja": "大きな声で話してください。",
          "zh": "请大声说。",
          "focus": ["大きな"],
          "zhFocus": ["大"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-101",
      "jlpt": "N5",
      "headword": "大勢",
      "source_form": "大勢",
      "variants": [
        "大勢"
      ],
      "reading": "おおぜい",
      "reading_variants": [
        "おおぜい"
      ],
      "romaji": "oozei",
      "part_of_speech": "noun",
      "meaning_zh": "很多人",
      "kanji_readings": [
        {
          "form": "大勢",
          "reading": "おおぜい"
        }
      ],
      "examples": [
        {
          "ja": "公園に大勢の人がいます。",
          "zh": "公园里有很多人。",
          "focus": ["大勢"],
          "zhFocus": ["很多人"]
        },
        {
          "ja": "大勢で旅行します。",
          "zh": "很多人一起旅行。",
          "focus": ["大勢"],
          "zhFocus": ["很多人"]
        },
        {
          "ja": "昨日は大勢来ました。",
          "zh": "昨天来了很多人。",
          "focus": ["大勢"],
          "zhFocus": ["很多人"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-102",
      "jlpt": "N5",
      "headword": "お母さん",
      "source_form": "お母さん",
      "variants": [
        "お母さん"
      ],
      "reading": "おかあさん",
      "reading_variants": [
        "おかあさん"
      ],
      "romaji": "okaasan",
      "part_of_speech": "noun",
      "meaning_zh": "妈妈；母亲（称呼或称别人的母亲）",
      "kanji_readings": [
        {
          "form": "お母さん",
          "reading": "おかあさん"
        }
      ],
      "examples": [
        {
          "ja": "お母さん、お腹がすきました。",
          "zh": "妈妈，我肚子饿了。",
          "focus": ["お母さん"],
          "zhFocus": ["妈妈"]
        },
        {
          "ja": "田中さんのお母さんは料理が上手です。",
          "zh": "田中的妈妈很会做菜。",
          "focus": ["お母さん"],
          "zhFocus": ["妈妈"]
        },
        {
          "ja": "友達のお母さんは元気です。",
          "zh": "朋友的妈妈身体很好。",
          "focus": ["お母さん"],
          "zhFocus": ["妈妈"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-103",
      "jlpt": "N5",
      "headword": "お菓子",
      "source_form": "お菓子",
      "variants": [
        "お菓子"
      ],
      "reading": "おかし",
      "reading_variants": [
        "おかし"
      ],
      "romaji": "okashi",
      "part_of_speech": "noun",
      "meaning_zh": "点心；零食；糖果",
      "kanji_readings": [
        {
          "form": "お菓子",
          "reading": "おかし"
        }
      ],
      "examples": [
        {
          "ja": "子供はお菓子が大好きです。",
          "zh": "孩子非常喜欢零食。",
          "focus": ["お菓子"],
          "zhFocus": ["零食"]
        },
        {
          "ja": "ご飯の前にお菓子を食べてはいけません。",
          "zh": "饭前不可以吃零食。",
          "focus": ["お菓子"],
          "zhFocus": ["零食"]
        },
        {
          "ja": "友達にお菓子をもらいました。",
          "zh": "从朋友那里收到了点心。",
          "focus": ["お菓子"],
          "zhFocus": ["点心"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-104",
      "jlpt": "N5",
      "headword": "お金",
      "source_form": "お金",
      "variants": [
        "お金"
      ],
      "reading": "おかね",
      "reading_variants": [
        "おかね"
      ],
      "romaji": "okane",
      "part_of_speech": "noun",
      "meaning_zh": "钱",
      "kanji_readings": [
        {
          "form": "お金",
          "reading": "おかね"
        }
      ],
      "examples": [
        {
          "ja": "お金があります。",
          "zh": "有钱。",
          "focus": ["お金"],
          "zhFocus": ["钱"]
        },
        {
          "ja": "銀行でお金を下ろします。",
          "zh": "在银行取钱。",
          "focus": ["お金"],
          "zhFocus": ["钱"]
        },
        {
          "ja": "お金を払いました。",
          "zh": "付了钱。",
          "focus": ["お金"],
          "zhFocus": ["钱"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-105",
      "jlpt": "N5",
      "headword": "起きる",
      "source_form": "起きる",
      "variants": [
        "起きる"
      ],
      "reading": "おきる",
      "reading_variants": [
        "おきる"
      ],
      "romaji": "okiru",
      "part_of_speech": "verb",
      "meaning_zh": "起床；发生",
      "senses_zh": [
        "起床",
        "发生"
      ],
      "kanji_readings": [
        {
          "form": "起きる",
          "reading": "おきる"
        }
      ],
      "examples": [
        {
          "ja": "毎朝七時に起きます。",
          "zh": "每天早上七点起床。",
          "focus": ["起き"],
          "zhFocus": ["起床"]
        },
        {
          "ja": "昨日は遅く起きました。",
          "zh": "昨天起得晚。",
          "focus": ["起き"],
          "zhFocus": ["起"]
        },
        {
          "ja": "早く起きてください。",
          "zh": "请早点起床。",
          "focus": ["起き"],
          "zhFocus": ["起床"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-106",
      "jlpt": "N5",
      "headword": "置く",
      "source_form": "置く",
      "variants": [
        "置く"
      ],
      "reading": "おく",
      "reading_variants": [
        "おく"
      ],
      "romaji": "oku",
      "part_of_speech": "verb",
      "meaning_zh": "放；放置",
      "kanji_readings": [
        {
          "form": "置く",
          "reading": "おく"
        }
      ],
      "examples": [
        {
          "ja": "本を机の上に置きます。",
          "zh": "把书放在桌子上。",
          "focus": ["置き"],
          "zhFocus": ["放"]
        },
        {
          "ja": "ここに荷物を置いてください。",
          "zh": "请把行李放在这里。",
          "focus": ["置い"],
          "zhFocus": ["放"]
        },
        {
          "ja": "傘を入口に置きました。",
          "zh": "把伞放在入口处了。",
          "focus": ["置き"],
          "zhFocus": ["放"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-107",
      "jlpt": "N5",
      "headword": "奥さん",
      "source_form": "奥さん",
      "variants": [
        "奥さん"
      ],
      "reading": "おくさん",
      "reading_variants": [
        "おくさん"
      ],
      "romaji": "okusan",
      "part_of_speech": "noun",
      "meaning_zh": "妻子（称别人的妻子）",
      "kanji_readings": [
        {
          "form": "奥さん",
          "reading": "おくさん"
        }
      ],
      "examples": [
        {
          "ja": "田中さんの奥さんは先生です。",
          "zh": "田中的妻子是老师。",
          "focus": ["奥さん"],
          "zhFocus": ["妻子"]
        },
        {
          "ja": "奥さんはお元気ですか。",
          "zh": "您太太好吗？",
          "focus": ["奥さん"],
          "zhFocus": ["太太"]
        },
        {
          "ja": "友達の奥さんに会いました。",
          "zh": "见到了朋友的妻子。",
          "focus": ["奥さん"],
          "zhFocus": ["妻子"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-108",
      "jlpt": "N5",
      "headword": "お酒",
      "source_form": "お酒",
      "variants": [
        "お酒"
      ],
      "reading": "おさけ",
      "reading_variants": [
        "おさけ"
      ],
      "romaji": "osake",
      "part_of_speech": "noun",
      "meaning_zh": "酒",
      "kanji_readings": [
        {
          "form": "お酒",
          "reading": "おさけ"
        }
      ],
      "examples": [
        {
          "ja": "父はお酒を飲みません。",
          "zh": "父亲不喝酒。",
          "focus": ["お酒"],
          "zhFocus": ["酒"]
        },
        {
          "ja": "お酒は好きではありません。",
          "zh": "不喜欢酒。",
          "focus": ["お酒"],
          "zhFocus": ["酒"]
        },
        {
          "ja": "お酒を飲みすぎないでください。",
          "zh": "请不要喝太多酒。",
          "focus": ["お酒"],
          "zhFocus": ["酒"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-109",
      "jlpt": "N5",
      "headword": "お皿",
      "source_form": "お皿",
      "variants": [
        "お皿"
      ],
      "reading": "おさら",
      "reading_variants": [
        "おさら"
      ],
      "romaji": "osara",
      "part_of_speech": "noun",
      "meaning_zh": "盘子",
      "kanji_readings": [
        {
          "form": "お皿",
          "reading": "おさら"
        }
      ],
      "examples": [
        {
          "ja": "晩ご飯の後で、お皿を洗います。",
          "zh": "晚饭后洗盘子。",
          "focus": ["お皿"],
          "zhFocus": ["盘子"]
        },
        {
          "ja": "大きいお皿を二枚出してください。",
          "zh": "请拿出两个大盘子。",
          "focus": ["お皿"],
          "zhFocus": ["盘子"]
        },
        {
          "ja": "ケーキをお皿に載せました。",
          "zh": "把蛋糕放到了盘子上。",
          "focus": ["お皿"],
          "zhFocus": ["盘子"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-110",
      "jlpt": "N5",
      "headword": "おじさん",
      "source_form": "伯父; 叔父さん",
      "variants": [
        "おじさん",
        "伯父さん",
        "叔父さん"
      ],
      "reading": "おじさん",
      "reading_variants": [
        "おじさん"
      ],
      "romaji": "ojisan",
      "part_of_speech": "noun",
      "meaning_zh": "叔叔；伯父；舅舅；中年男性",
      "senses_zh": [
        "叔叔；伯父；舅舅",
        "中年男性"
      ],
      "kanji_readings": [
        {
          "form": "伯父さん",
          "reading": "おじさん"
        },
        {
          "form": "叔父さん",
          "reading": "おじさん"
        }
      ],
      "examples": [
        {
          "ja": "おじさんに会います。",
          "zh": "见叔叔。",
          "focus": ["おじさん"],
          "zhFocus": ["叔叔"]
        },
        {
          "ja": "あのおじさんは親切です。",
          "zh": "那位叔叔很亲切。",
          "focus": ["おじさん"],
          "zhFocus": ["叔叔"]
        },
        {
          "ja": "おじさんが家に来ました。",
          "zh": "叔叔来家里了。",
          "focus": ["おじさん"],
          "zhFocus": ["叔叔"]
        }
      ],
      "note_zh": "已把旧写法/不常用写法规范为现代常用写法；原始写法保留在 source_form。"
    },
    {
      "id": "n5-111",
      "jlpt": "N5",
      "headword": "おじいさん",
      "source_form": "おじいさん",
      "variants": [
        "おじいさん"
      ],
      "reading": "おじいさん",
      "reading_variants": [
        "おじいさん"
      ],
      "romaji": "ojiisan",
      "part_of_speech": "noun",
      "meaning_zh": "爷爷；老爷爷",
      "senses_zh": [
        "爷爷",
        "老爷爷"
      ],
      "kanji_readings": [],
      "examples": [
        {
          "ja": "おじいさんは毎朝公園を散歩します。",
          "zh": "爷爷每天早上在公园散步。",
          "focus": ["おじいさん"],
          "zhFocus": ["爷爷"]
        },
        {
          "ja": "おじいさんに手紙を書きました。",
          "zh": "给爷爷写了信。",
          "focus": ["おじいさん"],
          "zhFocus": ["爷爷"]
        },
        {
          "ja": "田中さんのおじいさんは元気です。",
          "zh": "田中先生的爷爷身体很好。",
          "focus": ["おじいさん"],
          "zhFocus": ["爷爷"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-112",
      "jlpt": "N5",
      "headword": "教える",
      "source_form": "教える",
      "variants": [
        "教える"
      ],
      "reading": "おしえる",
      "reading_variants": [
        "おしえる"
      ],
      "romaji": "oshieru",
      "part_of_speech": "verb",
      "meaning_zh": "教；告诉",
      "senses_zh": [
        "教",
        "告诉"
      ],
      "kanji_readings": [
        {
          "form": "教える",
          "reading": "おしえる"
        }
      ],
      "examples": [
        {
          "ja": "先生が日本語を教えます。",
          "zh": "老师教日语。",
          "focus": ["教え"],
          "zhFocus": ["教"]
        },
        {
          "ja": "道を教えてください。",
          "zh": "请告诉我路。",
          "focus": ["教え"],
          "zhFocus": ["告诉"]
        },
        {
          "ja": "友達に漢字を教えました。",
          "zh": "教朋友汉字了。",
          "focus": ["教え"],
          "zhFocus": ["教"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-113",
      "jlpt": "N5",
      "headword": "押す",
      "source_form": "押す",
      "variants": [
        "押す"
      ],
      "reading": "おす",
      "reading_variants": [
        "おす"
      ],
      "romaji": "osu",
      "part_of_speech": "verb",
      "meaning_zh": "按；推",
      "kanji_readings": [
        {
          "form": "押す",
          "reading": "おす"
        }
      ],
      "examples": [
        {
          "ja": "このボタンを押してください。",
          "zh": "请按这个按钮。",
          "focus": ["押し"],
          "zhFocus": ["按"]
        },
        {
          "ja": "ドアを押します。",
          "zh": "推门。",
          "focus": ["押し"],
          "zhFocus": ["推"]
        },
        {
          "ja": "強く押さないでください。",
          "zh": "请不要用力按。",
          "focus": ["押さ"],
          "zhFocus": ["按"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-114",
      "jlpt": "N5",
      "headword": "遅い",
      "source_form": "遅い",
      "variants": [
        "遅い"
      ],
      "reading": "おそい",
      "reading_variants": [
        "おそい"
      ],
      "romaji": "osoi",
      "part_of_speech": "i-adjective",
      "meaning_zh": "慢的；晚的；迟的",
      "senses_zh": [
        "慢的",
        "晚的；迟的"
      ],
      "kanji_readings": [
        {
          "form": "遅い",
          "reading": "おそい"
        }
      ],
      "examples": [
        {
          "ja": "この電車は走るのが遅いです。",
          "zh": "这趟电车开得很慢。",
          "focus": ["遅い"],
          "zhFocus": ["慢"]
        },
        {
          "ja": "今日は学校に来るのが遅いですね。",
          "zh": "你今天到学校来得很晚啊。",
          "focus": ["遅い"],
          "zhFocus": ["晚"]
        },
        {
          "ja": "寝る時間が遅いです。",
          "zh": "睡觉时间很晚。",
          "focus": ["遅い"],
          "zhFocus": ["晚"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-115",
      "jlpt": "N5",
      "headword": "お茶",
      "source_form": "お茶",
      "variants": [
        "お茶"
      ],
      "reading": "おちゃ",
      "reading_variants": [
        "おちゃ"
      ],
      "romaji": "ocha",
      "part_of_speech": "noun",
      "meaning_zh": "茶；绿茶",
      "kanji_readings": [
        {
          "form": "お茶",
          "reading": "おちゃ"
        }
      ],
      "examples": [
        {
          "ja": "お茶を飲みます。",
          "zh": "喝茶。",
          "focus": ["お茶"],
          "zhFocus": ["茶"]
        },
        {
          "ja": "熱いお茶はいかがですか。",
          "zh": "来杯热茶怎么样？",
          "focus": ["お茶"],
          "zhFocus": ["茶"]
        },
        {
          "ja": "お茶を入れましょうか。",
          "zh": "我来泡茶吧？",
          "focus": ["お茶"],
          "zhFocus": ["茶"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-116",
      "jlpt": "N5",
      "headword": "お手洗い",
      "source_form": "お手洗い",
      "variants": [
        "お手洗い"
      ],
      "reading": "おてあらい",
      "reading_variants": [
        "おてあらい"
      ],
      "romaji": "otearai",
      "part_of_speech": "noun",
      "meaning_zh": "洗手间（较礼貌的说法）",
      "kanji_readings": [
        {
          "form": "お手洗い",
          "reading": "おてあらい"
        }
      ],
      "examples": [
        {
          "ja": "すみません、お手洗いはどちらですか。",
          "zh": "不好意思，请问洗手间在哪边？",
          "focus": ["お手洗い"],
          "zhFocus": ["洗手间"]
        },
        {
          "ja": "お手洗いは二階にあります。",
          "zh": "洗手间在二楼。",
          "focus": ["お手洗い"],
          "zhFocus": ["洗手间"]
        },
        {
          "ja": "食事の前にお手洗いで手を洗います。",
          "zh": "饭前在洗手间洗手。",
          "focus": ["お手洗い"],
          "zhFocus": ["洗手间"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-117",
      "jlpt": "N5",
      "headword": "お父さん",
      "source_form": "お父さん",
      "variants": [
        "お父さん"
      ],
      "reading": "おとうさん",
      "reading_variants": [
        "おとうさん"
      ],
      "romaji": "otousan",
      "part_of_speech": "noun",
      "meaning_zh": "爸爸；父亲（称呼或称别人的父亲）",
      "kanji_readings": [
        {
          "form": "お父さん",
          "reading": "おとうさん"
        }
      ],
      "examples": [
        {
          "ja": "お父さんは毎晩遅く帰ります。",
          "zh": "爸爸每天晚上很晚回家。",
          "focus": ["お父さん"],
          "zhFocus": ["爸爸"]
        },
        {
          "ja": "お父さんは今、会社にいます。",
          "zh": "爸爸现在在公司。",
          "focus": ["お父さん"],
          "zhFocus": ["爸爸"]
        },
        {
          "ja": "友達のお父さんは会社員です。",
          "zh": "朋友的爸爸是公司职员。",
          "focus": ["お父さん"],
          "zhFocus": ["爸爸"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-118",
      "jlpt": "N5",
      "headword": "弟",
      "source_form": "弟",
      "variants": [
        "弟"
      ],
      "reading": "おとうと",
      "reading_variants": [
        "おとうと"
      ],
      "romaji": "otouto",
      "part_of_speech": "noun",
      "meaning_zh": "弟弟（称自己的弟弟）",
      "kanji_readings": [
        {
          "form": "弟",
          "reading": "おとうと"
        }
      ],
      "examples": [
        {
          "ja": "弟は中学生です。",
          "zh": "我弟弟是初中生。",
          "focus": ["弟"],
          "zhFocus": ["弟弟"]
        },
        {
          "ja": "弟と遊びます。",
          "zh": "和弟弟玩。",
          "focus": ["弟"],
          "zhFocus": ["弟弟"]
        },
        {
          "ja": "弟に自転車を貸しました。",
          "zh": "把自行车借给了弟弟。",
          "focus": ["弟"],
          "zhFocus": ["弟弟"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-119",
      "jlpt": "N5",
      "headword": "男",
      "source_form": "男",
      "variants": [
        "男"
      ],
      "reading": "おとこ",
      "reading_variants": [
        "おとこ"
      ],
      "romaji": "otoko",
      "part_of_speech": "noun",
      "meaning_zh": "男人；男性",
      "kanji_readings": [
        {
          "form": "男",
          "reading": "おとこ"
        }
      ],
      "examples": [
        {
          "ja": "男の人が駅にいます。",
          "zh": "车站有一位男性。",
          "focus": ["男"],
          "zhFocus": ["男性"]
        },
        {
          "ja": "あの男の人は先生です。",
          "zh": "那位男士是老师。",
          "focus": ["男"],
          "zhFocus": ["男"]
        },
        {
          "ja": "男の子が走っています。",
          "zh": "男孩在跑。",
          "focus": ["男"],
          "zhFocus": ["男"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-120",
      "jlpt": "N5",
      "headword": "男の子",
      "source_form": "男の子",
      "variants": [
        "男の子"
      ],
      "reading": "おとこのこ",
      "reading_variants": [
        "おとこのこ"
      ],
      "romaji": "otokonoko",
      "part_of_speech": "noun",
      "meaning_zh": "男孩",
      "kanji_readings": [
        {
          "form": "男の子",
          "reading": "おとこのこ"
        }
      ],
      "examples": [
        {
          "ja": "公園で男の子が二人遊んでいます。",
          "zh": "公园里有两个男孩在玩。",
          "focus": ["男の子"],
          "zhFocus": ["男孩"]
        },
        {
          "ja": "田中さんの家には男の子が一人います。",
          "zh": "田中家有一个男孩。",
          "focus": ["男の子"],
          "zhFocus": ["男孩"]
        },
        {
          "ja": "あの男の子は元気に走っています。",
          "zh": "那个男孩正在精神十足地跑步。",
          "focus": ["男の子"],
          "zhFocus": ["男孩"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-121",
      "jlpt": "N5",
      "headword": "一昨日",
      "source_form": "一昨日",
      "variants": [
        "一昨日"
      ],
      "reading": "おととい",
      "reading_variants": [
        "おととい",
        "いっさくじつ"
      ],
      "romaji": "ototoi",
      "part_of_speech": "noun",
      "meaning_zh": "前天",
      "kanji_readings": [
        {
          "form": "一昨日",
          "reading": "おととい"
        }
      ],
      "examples": [
        {
          "ja": "一昨日、学校へ行きました。",
          "zh": "前天去了学校。",
          "focus": ["一昨日"],
          "zhFocus": ["前天"]
        },
        {
          "ja": "一昨日は忙しかったです。",
          "zh": "前天很忙。",
          "focus": ["一昨日"],
          "zhFocus": ["前天"]
        },
        {
          "ja": "一昨日、友達に会いました。",
          "zh": "前天见了朋友。",
          "focus": ["一昨日"],
          "zhFocus": ["前天"]
        }
      ],
      "note_zh": "「いっさくじつ」是正式场合的读法。"
    },
    {
      "id": "n5-122",
      "jlpt": "N5",
      "headword": "おととし",
      "source_form": "おととし",
      "variants": [
        "おととし",
        "一昨年"
      ],
      "reading": "おととし",
      "reading_variants": [
        "おととし",
        "いっさくねん"
      ],
      "romaji": "ototoshi",
      "part_of_speech": "noun",
      "meaning_zh": "前年",
      "kanji_readings": [
        {
          "form": "一昨年",
          "reading": "おととし"
        }
      ],
      "examples": [
        {
          "ja": "おととし、日本へ行きました。",
          "zh": "前年去了日本。",
          "focus": ["おととし"],
          "zhFocus": ["前年"]
        },
        {
          "ja": "おととしは学生でした。",
          "zh": "前年还是学生。",
          "focus": ["おととし"],
          "zhFocus": ["前年"]
        },
        {
          "ja": "おととし、東京に住んでいました。",
          "zh": "前年住在东京。",
          "focus": ["おととし"],
          "zhFocus": ["前年"]
        }
      ],
      "note_zh": "汉字写作「一昨年」；「いっさくねん」是正式场合的读法。"
    },
    {
      "id": "n5-123",
      "jlpt": "N5",
      "headword": "大人",
      "source_form": "大人",
      "variants": [
        "大人"
      ],
      "reading": "おとな",
      "reading_variants": [
        "おとな"
      ],
      "romaji": "otona",
      "part_of_speech": "noun",
      "meaning_zh": "大人；成年人",
      "kanji_readings": [
        {
          "form": "大人",
          "reading": "おとな"
        }
      ],
      "examples": [
        {
          "ja": "大人になりたいです。",
          "zh": "想成为大人。",
          "focus": ["大人"],
          "zhFocus": ["大人"]
        },
        {
          "ja": "ここは大人の席です。",
          "zh": "这里是成人座位。",
          "focus": ["大人"],
          "zhFocus": ["成人"]
        },
        {
          "ja": "大人が二人います。",
          "zh": "有两个大人。",
          "focus": ["大人"],
          "zhFocus": ["大人"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-124",
      "jlpt": "N5",
      "headword": "お腹",
      "source_form": "お腹",
      "variants": [
        "お腹"
      ],
      "reading": "おなか",
      "reading_variants": [
        "おなか"
      ],
      "romaji": "onaka",
      "part_of_speech": "noun",
      "meaning_zh": "肚子",
      "kanji_readings": [
        {
          "form": "お腹",
          "reading": "おなか"
        }
      ],
      "examples": [
        {
          "ja": "お腹が痛いです。",
          "zh": "肚子疼。",
          "focus": ["お腹"],
          "zhFocus": ["肚子"]
        },
        {
          "ja": "お腹がすきました。",
          "zh": "肚子饿了。",
          "focus": ["お腹"],
          "zhFocus": ["肚子"]
        },
        {
          "ja": "もうお腹がいっぱいです。",
          "zh": "肚子已经饱了。",
          "focus": ["お腹"],
          "zhFocus": ["肚子"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-125",
      "jlpt": "N5",
      "headword": "同じ",
      "source_form": "同じ",
      "variants": [
        "同じ"
      ],
      "reading": "おなじ",
      "reading_variants": [
        "おなじ"
      ],
      "romaji": "onaji",
      "part_of_speech": "na-adjective/pre-noun",
      "meaning_zh": "相同；一样",
      "kanji_readings": [
        {
          "form": "同じ",
          "reading": "おなじ"
        }
      ],
      "examples": [
        {
          "ja": "同じ本を買いました。",
          "zh": "买了同一本书。",
          "focus": ["同じ"],
          "zhFocus": ["同一"]
        },
        {
          "ja": "私たちは同じ学校です。",
          "zh": "我们在同一所学校。",
          "focus": ["同じ"],
          "zhFocus": ["同一"]
        },
        {
          "ja": "答えは同じです。",
          "zh": "答案一样。",
          "focus": ["同じ"],
          "zhFocus": ["一样"]
        }
      ],
      "note_zh": "修饰名词时直接使用「同じ＋名词」，初级阶段不要写成「同じな＋名词」；作谓语时用「同じです」。"
    },
    {
      "id": "n5-126",
      "jlpt": "N5",
      "headword": "お兄さん",
      "source_form": "お兄さん",
      "variants": [
        "お兄さん"
      ],
      "reading": "おにいさん",
      "reading_variants": [
        "おにいさん"
      ],
      "romaji": "oniisan",
      "part_of_speech": "noun",
      "meaning_zh": "哥哥（称呼或称别人的哥哥）",
      "kanji_readings": [
        {
          "form": "お兄さん",
          "reading": "おにいさん"
        }
      ],
      "examples": [
        {
          "ja": "お兄さんはお元気ですか。",
          "zh": "你哥哥好吗？",
          "focus": ["お兄さん"],
          "zhFocus": ["哥哥"]
        },
        {
          "ja": "友達のお兄さんに会いました。",
          "zh": "见到了朋友的哥哥。",
          "focus": ["お兄さん"],
          "zhFocus": ["哥哥"]
        },
        {
          "ja": "お兄さんは背が高いです。",
          "zh": "你哥哥个子高。",
          "focus": ["お兄さん"],
          "zhFocus": ["哥哥"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-127",
      "jlpt": "N5",
      "headword": "お姉さん",
      "source_form": "お姉さん",
      "variants": [
        "お姉さん"
      ],
      "reading": "おねえさん",
      "reading_variants": [
        "おねえさん"
      ],
      "romaji": "oneesan",
      "part_of_speech": "noun",
      "meaning_zh": "姐姐（称呼或称别人的姐姐）",
      "kanji_readings": [
        {
          "form": "お姉さん",
          "reading": "おねえさん"
        }
      ],
      "examples": [
        {
          "ja": "お姉さんは学生ですか。",
          "zh": "你姐姐是学生吗？",
          "focus": ["お姉さん"],
          "zhFocus": ["姐姐"]
        },
        {
          "ja": "友達のお姉さんに会いました。",
          "zh": "见到了朋友的姐姐。",
          "focus": ["お姉さん"],
          "zhFocus": ["姐姐"]
        },
        {
          "ja": "お姉さんは英語が上手です。",
          "zh": "你姐姐英语很好。",
          "focus": ["お姉さん"],
          "zhFocus": ["姐姐"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-128",
      "jlpt": "N5",
      "headword": "おばさん",
      "source_form": "伯母さん; 叔母さん",
      "variants": [
        "おばさん",
        "伯母さん",
        "叔母さん"
      ],
      "reading": "おばさん",
      "reading_variants": [
        "おばさん"
      ],
      "romaji": "obasan",
      "part_of_speech": "noun",
      "meaning_zh": "阿姨；伯母；婶婶；中年女性",
      "senses_zh": [
        "阿姨；伯母；婶婶",
        "中年女性"
      ],
      "kanji_readings": [
        {
          "form": "伯母さん",
          "reading": "おばさん"
        },
        {
          "form": "叔母さん",
          "reading": "おばさん"
        }
      ],
      "examples": [
        {
          "ja": "おばさんに電話します。",
          "zh": "给阿姨打电话。",
          "focus": ["おばさん"],
          "zhFocus": ["阿姨"]
        },
        {
          "ja": "あのおばさんは先生です。",
          "zh": "那位阿姨是老师。",
          "focus": ["おばさん"],
          "zhFocus": ["阿姨"]
        },
        {
          "ja": "おばさんがケーキを作りました。",
          "zh": "阿姨做了蛋糕。",
          "focus": ["おばさん"],
          "zhFocus": ["阿姨"]
        }
      ],
      "note_zh": "已把旧写法/不常用写法规范为现代常用写法；原始写法保留在 source_form。"
    },
    {
      "id": "n5-129",
      "jlpt": "N5",
      "headword": "おばあさん",
      "source_form": "おばあさん",
      "variants": [
        "おばあさん"
      ],
      "reading": "おばあさん",
      "reading_variants": [
        "おばあさん"
      ],
      "romaji": "obaasan",
      "part_of_speech": "noun",
      "meaning_zh": "奶奶；老奶奶",
      "senses_zh": [
        "奶奶",
        "老奶奶"
      ],
      "kanji_readings": [],
      "examples": [
        {
          "ja": "おばあさんの家は駅から遠いです。",
          "zh": "奶奶家离车站很远。",
          "focus": ["おばあさん"],
          "zhFocus": ["奶奶"]
        },
        {
          "ja": "毎週おばあさんに電話をかけます。",
          "zh": "每周给奶奶打电话。",
          "focus": ["おばあさん"],
          "zhFocus": ["奶奶"]
        },
        {
          "ja": "田中さんのおばあさんは元気です。",
          "zh": "田中先生的奶奶身体很好。",
          "focus": ["おばあさん"],
          "zhFocus": ["奶奶"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-130",
      "jlpt": "N5",
      "headword": "お風呂",
      "source_form": "お風呂",
      "variants": [
        "お風呂"
      ],
      "reading": "おふろ",
      "reading_variants": [
        "おふろ"
      ],
      "romaji": "ofuro",
      "part_of_speech": "noun",
      "meaning_zh": "洗澡；浴室；浴缸",
      "senses_zh": [
        "洗澡",
        "浴室",
        "浴缸"
      ],
      "kanji_readings": [
        {
          "form": "お風呂",
          "reading": "おふろ"
        }
      ],
      "examples": [
        {
          "ja": "お風呂に入ります。",
          "zh": "洗澡。",
          "focus": ["お風呂"],
          "zhFocus": ["澡"]
        },
        {
          "ja": "お風呂はどこですか。",
          "zh": "浴室在哪里？",
          "focus": ["お風呂"],
          "zhFocus": ["浴室"]
        },
        {
          "ja": "夜、お風呂に入りました。",
          "zh": "晚上洗了澡。",
          "focus": ["お風呂"],
          "zhFocus": ["澡"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-131",
      "jlpt": "N5",
      "headword": "お弁当",
      "source_form": "お弁当",
      "variants": [
        "お弁当"
      ],
      "reading": "おべんとう",
      "reading_variants": [
        "おべんとう"
      ],
      "romaji": "obentou",
      "part_of_speech": "noun",
      "meaning_zh": "便当",
      "kanji_readings": [
        {
          "form": "お弁当",
          "reading": "おべんとう"
        }
      ],
      "examples": [
        {
          "ja": "お弁当を食べます。",
          "zh": "吃便当。",
          "focus": ["お弁当"],
          "zhFocus": ["便当"]
        },
        {
          "ja": "駅でお弁当を買いました。",
          "zh": "在车站买了便当。",
          "focus": ["お弁当"],
          "zhFocus": ["便当"]
        },
        {
          "ja": "母がお弁当を作ります。",
          "zh": "妈妈做便当。",
          "focus": ["お弁当"],
          "zhFocus": ["便当"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-132",
      "jlpt": "N5",
      "headword": "覚える",
      "source_form": "覚える",
      "variants": [
        "覚える"
      ],
      "reading": "おぼえる",
      "reading_variants": [
        "おぼえる"
      ],
      "romaji": "oboeru",
      "part_of_speech": "verb",
      "meaning_zh": "记住；学会",
      "senses_zh": [
        "记住",
        "学会"
      ],
      "kanji_readings": [
        {
          "form": "覚える",
          "reading": "おぼえる"
        }
      ],
      "examples": [
        {
          "ja": "新しい言葉を覚えます。",
          "zh": "记新单词。",
          "focus": ["覚え"],
          "zhFocus": ["记"]
        },
        {
          "ja": "名前を覚えました。",
          "zh": "记住了名字。",
          "focus": ["覚え"],
          "zhFocus": ["记住"]
        },
        {
          "ja": "漢字を少しずつ覚えます。",
          "zh": "一点点记汉字。",
          "focus": ["覚え"],
          "zhFocus": ["记"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-133",
      "jlpt": "N5",
      "headword": "おまわりさん",
      "source_form": "おまわりさん",
      "variants": [
        "おまわりさん"
      ],
      "reading": "おまわりさん",
      "reading_variants": [
        "おまわりさん"
      ],
      "romaji": "omawarisan",
      "part_of_speech": "noun",
      "meaning_zh": "警察（口语、亲切说法）",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "おまわりさんに道を聞きます。",
          "zh": "向警察问路。",
          "focus": ["おまわりさん"],
          "zhFocus": ["警察"]
        },
        {
          "ja": "駅の前におまわりさんがいます。",
          "zh": "车站前有警察。",
          "focus": ["おまわりさん"],
          "zhFocus": ["警察"]
        },
        {
          "ja": "困った時はおまわりさんに聞いてください。",
          "zh": "遇到困难时请问警察。",
          "focus": ["おまわりさん"],
          "zhFocus": ["警察"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-134",
      "jlpt": "N5",
      "headword": "重い",
      "source_form": "重い",
      "variants": [
        "重い"
      ],
      "reading": "おもい",
      "reading_variants": [
        "おもい"
      ],
      "romaji": "omoi",
      "part_of_speech": "i-adjective",
      "meaning_zh": "重的；严重的",
      "senses_zh": [
        "重的",
        "严重的"
      ],
      "kanji_readings": [
        {
          "form": "重い",
          "reading": "おもい"
        }
      ],
      "examples": [
        {
          "ja": "この荷物は重いです。",
          "zh": "这件行李很重。",
          "focus": ["重い"],
          "zhFocus": ["重"]
        },
        {
          "ja": "この箱は重くて持てません。",
          "zh": "这个箱子太重，拿不动。",
          "focus": ["重く"],
          "zhFocus": ["重"]
        },
        {
          "ja": "重い荷物を二人で運びます。",
          "zh": "两个人一起搬重行李。",
          "focus": ["重い"],
          "zhFocus": ["重"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-135",
      "jlpt": "N5",
      "headword": "面白い",
      "source_form": "面白い",
      "variants": [
        "面白い"
      ],
      "reading": "おもしろい",
      "reading_variants": [
        "おもしろい"
      ],
      "romaji": "omoshiroi",
      "part_of_speech": "i-adjective",
      "meaning_zh": "有趣的",
      "kanji_readings": [
        {
          "form": "面白い",
          "reading": "おもしろい"
        }
      ],
      "examples": [
        {
          "ja": "この映画は面白いです。",
          "zh": "这部电影很有趣。",
          "focus": ["面白い"],
          "zhFocus": ["有趣"]
        },
        {
          "ja": "この本も面白いですよ。",
          "zh": "这本书也很有意思。",
          "focus": ["面白い"],
          "zhFocus": ["有意思"]
        },
        {
          "ja": "先生の話は面白かったです。",
          "zh": "老师讲的话很有趣。",
          "focus": ["面白かっ"],
          "zhFocus": ["有趣"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-136",
      "jlpt": "N5",
      "headword": "泳ぐ",
      "source_form": "泳ぐ",
      "variants": [
        "泳ぐ"
      ],
      "reading": "およぐ",
      "reading_variants": [
        "およぐ"
      ],
      "romaji": "oyogu",
      "part_of_speech": "verb",
      "meaning_zh": "游泳（动词）",
      "answer_zh": "游泳",
      "kanji_readings": [
        {
          "form": "泳ぐ",
          "reading": "およぐ"
        }
      ],
      "examples": [
        {
          "ja": "夏にプールで泳ぎます。",
          "zh": "夏天在游泳池游泳。",
          "focus": ["泳ぎ"],
          "zhFocus": [{"after": "夏天在游泳池", "text": "游泳"}]
        },
        {
          "ja": "海で泳ぎました。",
          "zh": "在海里游泳了。",
          "focus": ["泳ぎ"],
          "zhFocus": ["游泳"]
        },
        {
          "ja": "私は少し泳げます。",
          "zh": "我会游一点泳。",
          "focus": ["泳げ"],
          "zhFocus": ["游", "泳"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-137",
      "jlpt": "N5",
      "headword": "降りる",
      "source_form": "降りる",
      "variants": [
        "降りる"
      ],
      "reading": "おりる",
      "reading_variants": [
        "おりる"
      ],
      "romaji": "oriru",
      "part_of_speech": "verb",
      "meaning_zh": "下（车）；下来",
      "senses_zh": [
        "下（车）",
        "下来"
      ],
      "kanji_readings": [
        {
          "form": "降りる",
          "reading": "おりる"
        }
      ],
      "examples": [
        {
          "ja": "次の駅で降ります。",
          "zh": "在下一站下车。",
          "focus": ["降り"],
          "zhFocus": [{"after": "在下一站", "text": "下"}]
        },
        {
          "ja": "バスを降りました。",
          "zh": "下了公交车。",
          "focus": ["降り"],
          "zhFocus": ["下"]
        },
        {
          "ja": "ここで降りてください。",
          "zh": "请在这里下车。",
          "focus": ["降り"],
          "zhFocus": ["下"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-138",
      "jlpt": "N5",
      "headword": "終わる",
      "source_form": "終る",
      "variants": [
        "終わる"
      ],
      "reading": "おわる",
      "reading_variants": [
        "おわる"
      ],
      "romaji": "owaru",
      "part_of_speech": "verb",
      "meaning_zh": "结束；完了",
      "kanji_readings": [
        {
          "form": "終わる",
          "reading": "おわる"
        }
      ],
      "examples": [
        {
          "ja": "授業は三時に終わります。",
          "zh": "课三点结束。",
          "focus": ["終わり"],
          "zhFocus": ["结束"]
        },
        {
          "ja": "仕事が終わりました。",
          "zh": "工作结束了。",
          "focus": ["終わり"],
          "zhFocus": ["结束"]
        },
        {
          "ja": "映画はもう終わりました。",
          "zh": "电影已经结束了。",
          "focus": ["終わり"],
          "zhFocus": ["结束"]
        }
      ],
      "note_zh": "已把旧写法/不常用写法规范为现代常用写法；原始写法保留在 source_form。"
    },
    {
      "id": "n5-139",
      "jlpt": "N5",
      "headword": "音楽",
      "source_form": "音楽",
      "variants": [
        "音楽"
      ],
      "reading": "おんがく",
      "reading_variants": [
        "おんがく"
      ],
      "romaji": "ongaku",
      "part_of_speech": "noun",
      "meaning_zh": "音乐",
      "kanji_readings": [
        {
          "form": "音楽",
          "reading": "おんがく"
        }
      ],
      "examples": [
        {
          "ja": "音楽の授業で歌を歌いました。",
          "zh": "在音乐课上唱了歌。",
          "focus": ["音楽"],
          "zhFocus": ["音乐"]
        },
        {
          "ja": "毎日、音楽を聞いています。",
          "zh": "每天听音乐。",
          "focus": ["音楽"],
          "zhFocus": ["音乐"]
        },
        {
          "ja": "音楽の先生はピアノが上手です。",
          "zh": "音乐老师钢琴弹得很好。",
          "focus": ["音楽"],
          "zhFocus": ["音乐"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-140",
      "jlpt": "N5",
      "headword": "女",
      "source_form": "女",
      "variants": [
        "女"
      ],
      "reading": "おんな",
      "reading_variants": [
        "おんな"
      ],
      "romaji": "onna",
      "part_of_speech": "noun",
      "meaning_zh": "女人；女性",
      "kanji_readings": [
        {
          "form": "女",
          "reading": "おんな"
        }
      ],
      "examples": [
        {
          "ja": "女の人が本を読んでいます。",
          "zh": "一位女性在读书。",
          "focus": ["女"],
          "zhFocus": ["女性"]
        },
        {
          "ja": "あの女の人は医者です。",
          "zh": "那位女士是医生。",
          "focus": ["女"],
          "zhFocus": ["女"]
        },
        {
          "ja": "女の子が歌っています。",
          "zh": "女孩在唱歌。",
          "focus": ["女"],
          "zhFocus": ["女"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-141",
      "jlpt": "N5",
      "headword": "女の子",
      "source_form": "女の子",
      "variants": [
        "女の子"
      ],
      "reading": "おんなのこ",
      "reading_variants": [
        "おんなのこ"
      ],
      "romaji": "onnanoko",
      "part_of_speech": "noun",
      "meaning_zh": "女孩",
      "kanji_readings": [
        {
          "form": "女の子",
          "reading": "おんなのこ"
        }
      ],
      "examples": [
        {
          "ja": "女の子が赤い傘を差しています。",
          "zh": "女孩打着一把红伞。",
          "focus": ["女の子"],
          "zhFocus": ["女孩"]
        },
        {
          "ja": "隣の家に女の子が生まれました。",
          "zh": "邻居家生了一个女孩。",
          "focus": ["女の子"],
          "zhFocus": ["女孩"]
        },
        {
          "ja": "あの女の子は歌が上手です。",
          "zh": "那个女孩唱歌很好。",
          "focus": ["女の子"],
          "zhFocus": ["女孩"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-142",
      "jlpt": "N5",
      "headword": "～回",
      "source_form": "～回",
      "variants": [
        "～回"
      ],
      "reading": "～かい",
      "reading_variants": [
        "～かい"
      ],
      "romaji": "~kai",
      "part_of_speech": "counter/suffix",
      "meaning_zh": "……次",
      "kanji_readings": [
        {
          "form": "～回",
          "reading": "～かい"
        }
      ],
      "examples": [
        {
          "ja": "日本へ三回行きました。",
          "zh": "去过日本三次。",
          "focus": ["回"],
          "zhFocus": ["次"]
        },
        {
          "ja": "もう一回言ってください。",
          "zh": "请再说一次。",
          "focus": ["回"],
          "zhFocus": ["次"]
        },
        {
          "ja": "この映画を二回見ました。",
          "zh": "这部电影看了两次。",
          "focus": ["回"],
          "zhFocus": ["次"]
        }
      ],
      "note_zh": "接在数字或名词后使用；例句中去掉了前缀符号「～」。"
    },
    {
      "id": "n5-143",
      "jlpt": "N5",
      "headword": "～階",
      "source_form": "～階",
      "variants": [
        "～階"
      ],
      "reading": "～かい",
      "reading_variants": [
        "～かい"
      ],
      "romaji": "~kai",
      "part_of_speech": "counter/suffix",
      "meaning_zh": "……层；……楼",
      "kanji_readings": [
        {
          "form": "～階",
          "reading": "～かい"
        }
      ],
      "examples": [
        {
          "ja": "教室は二階です。",
          "zh": "教室在二楼。",
          "focus": ["階"],
          "zhFocus": ["楼"]
        },
        {
          "ja": "三階へ行きます。",
          "zh": "去三楼。",
          "focus": ["階"],
          "zhFocus": ["楼"]
        },
        {
          "ja": "一階にトイレがあります。",
          "zh": "一楼有洗手间。",
          "focus": ["階"],
          "zhFocus": ["楼"]
        }
      ],
      "note_zh": "接在数字或名词后使用；例句中去掉了前缀符号「～」。"
    },
    {
      "id": "n5-144",
      "jlpt": "N5",
      "headword": "外国",
      "source_form": "外国",
      "variants": [
        "外国"
      ],
      "reading": "がいこく",
      "reading_variants": [
        "がいこく"
      ],
      "romaji": "gaikoku",
      "part_of_speech": "noun",
      "meaning_zh": "外国；国外",
      "kanji_readings": [
        {
          "form": "外国",
          "reading": "がいこく"
        }
      ],
      "examples": [
        {
          "ja": "外国へ行きたいです。",
          "zh": "想去外国。",
          "focus": ["外国"],
          "zhFocus": ["外国"]
        },
        {
          "ja": "外国の友達がいます。",
          "zh": "有外国朋友。",
          "focus": ["外国"],
          "zhFocus": ["外国"]
        },
        {
          "ja": "外国で働きたいです。",
          "zh": "想在外国工作。",
          "focus": ["外国"],
          "zhFocus": ["外国"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-145",
      "jlpt": "N5",
      "headword": "外国人",
      "source_form": "外国人",
      "variants": [
        "外国人"
      ],
      "reading": "がいこくじん",
      "reading_variants": [
        "がいこくじん"
      ],
      "romaji": "gaikokujin",
      "part_of_speech": "noun",
      "meaning_zh": "外国人",
      "kanji_readings": [
        {
          "form": "外国人",
          "reading": "がいこくじん"
        }
      ],
      "examples": [
        {
          "ja": "この町には外国人がたくさん住んでいます。",
          "zh": "这个城市住着很多外国人。",
          "focus": ["外国人"],
          "zhFocus": ["外国人"]
        },
        {
          "ja": "外国人の友達と英語で話します。",
          "zh": "用英语和外国朋友交谈。",
          "focus": ["外国人"],
          "zhFocus": ["外国"]
        },
        {
          "ja": "あの外国人は日本語が上手です。",
          "zh": "那位外国人日语很好。",
          "focus": ["外国人"],
          "zhFocus": ["外国人"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-146",
      "jlpt": "N5",
      "headword": "会社",
      "source_form": "会社",
      "variants": [
        "会社"
      ],
      "reading": "かいしゃ",
      "reading_variants": [
        "かいしゃ"
      ],
      "romaji": "kaisha",
      "part_of_speech": "noun",
      "meaning_zh": "公司",
      "kanji_readings": [
        {
          "form": "会社",
          "reading": "かいしゃ"
        }
      ],
      "examples": [
        {
          "ja": "会社へ行きます。",
          "zh": "去公司。",
          "focus": ["会社"],
          "zhFocus": ["公司"]
        },
        {
          "ja": "会社は駅の近くです。",
          "zh": "公司在车站附近。",
          "focus": ["会社"],
          "zhFocus": ["公司"]
        },
        {
          "ja": "会社で友達に会います。",
          "zh": "在公司见朋友。",
          "focus": ["会社"],
          "zhFocus": ["公司"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-147",
      "jlpt": "N5",
      "headword": "階段",
      "source_form": "階段",
      "variants": [
        "階段"
      ],
      "reading": "かいだん",
      "reading_variants": [
        "かいだん"
      ],
      "romaji": "kaidan",
      "part_of_speech": "noun",
      "meaning_zh": "楼梯",
      "kanji_readings": [
        {
          "form": "階段",
          "reading": "かいだん"
        }
      ],
      "examples": [
        {
          "ja": "階段を上ります。",
          "zh": "上楼梯。",
          "focus": ["階段"],
          "zhFocus": ["楼梯"]
        },
        {
          "ja": "階段を下ります。",
          "zh": "下楼梯。",
          "focus": ["階段"],
          "zhFocus": ["楼梯"]
        },
        {
          "ja": "駅に階段があります。",
          "zh": "车站有楼梯。",
          "focus": ["階段"],
          "zhFocus": ["楼梯"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-148",
      "jlpt": "N5",
      "headword": "買い物",
      "source_form": "買い物",
      "variants": [
        "買い物"
      ],
      "reading": "かいもの",
      "reading_variants": [
        "かいもの"
      ],
      "romaji": "kaimono",
      "part_of_speech": "noun",
      "meaning_zh": "购物；买东西",
      "kanji_readings": [
        {
          "form": "買い物",
          "reading": "かいもの"
        }
      ],
      "examples": [
        {
          "ja": "スーパーで買い物をします。",
          "zh": "在超市买东西。",
          "focus": ["買い物"],
          "zhFocus": ["买东西"]
        },
        {
          "ja": "日曜日に買い物に行きます。",
          "zh": "星期天去购物。",
          "focus": ["買い物"],
          "zhFocus": ["购物"]
        },
        {
          "ja": "買い物は楽しいです。",
          "zh": "购物很开心。",
          "focus": ["買い物"],
          "zhFocus": ["购物"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-149",
      "jlpt": "N5",
      "headword": "買う",
      "source_form": "買う",
      "variants": [
        "買う"
      ],
      "reading": "かう",
      "reading_variants": [
        "かう"
      ],
      "romaji": "kau",
      "part_of_speech": "verb",
      "meaning_zh": "买",
      "kanji_readings": [
        {
          "form": "買う",
          "reading": "かう"
        }
      ],
      "examples": [
        {
          "ja": "駅で切符を買います。",
          "zh": "在车站买票。",
          "focus": ["買い"],
          "zhFocus": ["买"]
        },
        {
          "ja": "コンビニでお弁当を買いました。",
          "zh": "在便利店买了便当。",
          "focus": ["買い"],
          "zhFocus": ["买"]
        },
        {
          "ja": "スーパーで野菜を買います。",
          "zh": "在超市买蔬菜。",
          "focus": ["買い"],
          "zhFocus": ["买"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-150",
      "jlpt": "N5",
      "headword": "返す",
      "source_form": "返す",
      "variants": [
        "返す"
      ],
      "reading": "かえす",
      "reading_variants": [
        "かえす"
      ],
      "romaji": "kaesu",
      "part_of_speech": "verb",
      "meaning_zh": "归还；还给",
      "kanji_readings": [
        {
          "form": "返す",
          "reading": "かえす"
        }
      ],
      "examples": [
        {
          "ja": "本を図書館に返します。",
          "zh": "把书还给图书馆。",
          "focus": ["返し"],
          "zhFocus": ["还给"]
        },
        {
          "ja": "友達にお金を返しました。",
          "zh": "把钱还给了朋友。",
          "focus": ["返し"],
          "zhFocus": ["还给"]
        },
        {
          "ja": "明日、これを返してください。",
          "zh": "请明天把这个还回来。",
          "focus": ["返し"],
          "zhFocus": ["还"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-151",
      "jlpt": "N5",
      "headword": "帰る",
      "source_form": "帰る",
      "variants": [
        "帰る"
      ],
      "reading": "かえる",
      "reading_variants": [
        "かえる"
      ],
      "romaji": "kaeru",
      "part_of_speech": "verb",
      "meaning_zh": "回去；回家",
      "kanji_readings": [
        {
          "form": "帰る",
          "reading": "かえる"
        }
      ],
      "examples": [
        {
          "ja": "夜、家に帰ります。",
          "zh": "晚上回家。",
          "focus": ["帰り"],
          "zhFocus": ["回家"]
        },
        {
          "ja": "昨日、国へ帰りました。",
          "zh": "昨天回国了。",
          "focus": ["帰り"],
          "zhFocus": ["回"]
        },
        {
          "ja": "早く帰ってください。",
          "zh": "请早点回去。",
          "focus": ["帰っ"],
          "zhFocus": ["回去"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-152",
      "jlpt": "N5",
      "headword": "顔",
      "source_form": "顔",
      "variants": [
        "顔"
      ],
      "reading": "かお",
      "reading_variants": [
        "かお"
      ],
      "romaji": "kao",
      "part_of_speech": "noun",
      "meaning_zh": "脸",
      "kanji_readings": [
        {
          "form": "顔",
          "reading": "かお"
        }
      ],
      "examples": [
        {
          "ja": "朝、顔を洗います。",
          "zh": "早上洗脸。",
          "focus": ["顔"],
          "zhFocus": ["脸"]
        },
        {
          "ja": "顔が赤くなりました。",
          "zh": "脸变红了。",
          "focus": ["顔"],
          "zhFocus": ["脸"]
        },
        {
          "ja": "友達の顔を見ました。",
          "zh": "看到了朋友的脸。",
          "focus": ["顔"],
          "zhFocus": ["脸"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-153",
      "jlpt": "N5",
      "headword": "かかる",
      "source_form": "かかる",
      "variants": [
        "かかる"
      ],
      "reading": "かかる",
      "reading_variants": [
        "かかる"
      ],
      "romaji": "kakaru",
      "part_of_speech": "verb",
      "meaning_zh": "花费（时间、金钱）；需要",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "駅まで十分かかります。",
          "zh": "到车站要十分钟。",
          "focus": ["かかり"],
          "zhFocus": ["要"]
        },
        {
          "ja": "この仕事は時間がかかります。",
          "zh": "这项工作花时间。",
          "focus": ["かかり"],
          "zhFocus": ["花"]
        },
        {
          "ja": "病院でお金がかかりました。",
          "zh": "在医院花了钱。",
          "focus": ["かかり"],
          "zhFocus": ["花"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-154",
      "jlpt": "N5",
      "headword": "鍵",
      "source_form": "鍵",
      "variants": [
        "鍵"
      ],
      "reading": "かぎ",
      "reading_variants": [
        "かぎ"
      ],
      "romaji": "kagi",
      "part_of_speech": "noun",
      "meaning_zh": "钥匙；锁",
      "senses_zh": [
        "钥匙",
        "锁"
      ],
      "kanji_readings": [
        {
          "form": "鍵",
          "reading": "かぎ"
        }
      ],
      "examples": [
        {
          "ja": "出かける前に、ドアに鍵をかけます。",
          "zh": "出门前把门锁上。",
          "focus": ["鍵"],
          "zhFocus": ["锁"]
        },
        {
          "ja": "鍵がどこにもありません。",
          "zh": "到处都找不到钥匙。",
          "focus": ["鍵"],
          "zhFocus": ["钥匙"]
        },
        {
          "ja": "鍵をポケットに入れました。",
          "zh": "把钥匙放进了口袋。",
          "focus": ["鍵"],
          "zhFocus": ["钥匙"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-155",
      "jlpt": "N5",
      "headword": "書く",
      "source_form": "書く",
      "variants": [
        "書く"
      ],
      "reading": "かく",
      "reading_variants": [
        "かく"
      ],
      "romaji": "kaku",
      "part_of_speech": "verb",
      "meaning_zh": "写",
      "kanji_readings": [
        {
          "form": "書く",
          "reading": "かく"
        }
      ],
      "examples": [
        {
          "ja": "手紙を書きます。",
          "zh": "写信。",
          "focus": ["書き"],
          "zhFocus": ["写"]
        },
        {
          "ja": "黒板に答えを書いてください。",
          "zh": "请把答案写在黑板上。",
          "focus": ["書い"],
          "zhFocus": ["写"]
        },
        {
          "ja": "ノートに漢字を書きます。",
          "zh": "在笔记本上写汉字。",
          "focus": ["書き"],
          "zhFocus": ["写"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-156",
      "jlpt": "N5",
      "headword": "学生",
      "source_form": "学生",
      "variants": [
        "学生"
      ],
      "reading": "がくせい",
      "reading_variants": [
        "がくせい"
      ],
      "romaji": "gakusei",
      "part_of_speech": "noun",
      "meaning_zh": "学生",
      "kanji_readings": [
        {
          "form": "学生",
          "reading": "がくせい"
        }
      ],
      "examples": [
        {
          "ja": "私はこの大学の学生です。",
          "zh": "我是这所大学的学生。",
          "focus": ["学生"],
          "zhFocus": ["学生"]
        },
        {
          "ja": "学生の時、よくこの店に来ました。",
          "zh": "学生时代经常来这家店。",
          "focus": ["学生"],
          "zhFocus": ["学生"]
        },
        {
          "ja": "この学生は毎日図書館で勉強します。",
          "zh": "这名学生每天在图书馆学习。",
          "focus": ["学生"],
          "zhFocus": ["学生"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-157",
      "jlpt": "N5",
      "headword": "～か月",
      "source_form": "～か月",
      "variants": [
        "～か月"
      ],
      "reading": "～かげつ",
      "reading_variants": [
        "～かげつ"
      ],
      "romaji": "~kagetsu",
      "part_of_speech": "counter/suffix",
      "meaning_zh": "……个月",
      "kanji_readings": [
        {
          "form": "～か月",
          "reading": "～かげつ"
        }
      ],
      "examples": [
        {
          "ja": "日本語を三か月勉強しました。",
          "zh": "学了三个月日语。",
          "focus": ["か月"],
          "zhFocus": ["个月"]
        },
        {
          "ja": "一か月休みます。",
          "zh": "休息一个月。",
          "focus": ["か月"],
          "zhFocus": ["个月"]
        },
        {
          "ja": "六か月かかります。",
          "zh": "需要六个月。",
          "focus": ["か月"],
          "zhFocus": ["个月"]
        }
      ],
      "note_zh": "接在数字或名词后使用；例句中去掉了前缀符号「～」。"
    },
    {
      "id": "n5-158",
      "merged_source_ids": ["n5-159", "n4-119"],
      "jlpt": "N5",
      "headword": "掛ける",
      "source_form": "掛ける; かける",
      "variants": [
        "掛ける",
        "かける"
      ],
      "reading": "かける",
      "reading_variants": [
        "かける"
      ],
      "romaji": "kakeru",
      "part_of_speech": "verb",
      "meaning_zh": "挂；戴；打电话；坐下（腰をかける）；花费",
      "senses_zh": [
        "挂",
        "戴",
        "打电话",
        "坐下（腰をかける）",
        "花费"
      ],
      "kanji_readings": [
        {
          "form": "掛ける",
          "reading": "かける"
        }
      ],
      "examples": [
        {
          "ja": "壁に時計を掛けます。",
          "zh": "把钟挂在墙上。",
          "focus": ["掛け"],
          "zhFocus": ["挂"]
        },
        {
          "ja": "友達に電話をかけます。",
          "zh": "给朋友打电话。",
          "focus": ["かけ"],
          "zhFocus": ["打"]
        },
        {
          "ja": "どうぞ椅子に腰をかけてください。",
          "zh": "请坐到椅子上。",
          "focus": ["かけ"],
          "zhFocus": ["坐"]
        }
      ],
      "note_zh": "按搭配可写作「掛ける」或假名「かける」；「電話をかける」「腰をかける」常写假名。"
    },
    {
      "id": "n5-160",
      "jlpt": "N5",
      "headword": "傘",
      "source_form": "傘",
      "variants": [
        "傘"
      ],
      "reading": "かさ",
      "reading_variants": [
        "かさ"
      ],
      "romaji": "kasa",
      "part_of_speech": "noun",
      "meaning_zh": "伞",
      "kanji_readings": [
        {
          "form": "傘",
          "reading": "かさ"
        }
      ],
      "examples": [
        {
          "ja": "電車に傘を忘れました。",
          "zh": "把伞忘在电车上了。",
          "focus": ["傘"],
          "zhFocus": ["伞"]
        },
        {
          "ja": "雨ですから、傘を持って行きます。",
          "zh": "因为下雨，所以带伞去。",
          "focus": ["傘"],
          "zhFocus": ["伞"]
        },
        {
          "ja": "この傘は軽くて便利です。",
          "zh": "这把伞又轻又方便。",
          "focus": ["傘"],
          "zhFocus": ["伞"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-161",
      "jlpt": "N5",
      "headword": "貸す",
      "source_form": "貸す",
      "variants": [
        "貸す"
      ],
      "reading": "かす",
      "reading_variants": [
        "かす"
      ],
      "romaji": "kasu",
      "part_of_speech": "verb",
      "meaning_zh": "借出；借给",
      "kanji_readings": [
        {
          "form": "貸す",
          "reading": "かす"
        }
      ],
      "examples": [
        {
          "ja": "友達に本を貸します。",
          "zh": "把书借给朋友。",
          "focus": ["貸し"],
          "zhFocus": ["借给"]
        },
        {
          "ja": "ペンを貸してください。",
          "zh": "请借我一支笔。",
          "focus": ["貸し"],
          "zhFocus": ["借"]
        },
        {
          "ja": "兄に自転車を貸しました。",
          "zh": "把自行车借给了哥哥。",
          "focus": ["貸し"],
          "zhFocus": ["借给"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-162",
      "jlpt": "N5",
      "headword": "風",
      "source_form": "風",
      "variants": [
        "風"
      ],
      "reading": "かぜ",
      "reading_variants": [
        "かぜ"
      ],
      "romaji": "kaze",
      "part_of_speech": "noun",
      "meaning_zh": "风",
      "kanji_readings": [
        {
          "form": "風",
          "reading": "かぜ"
        }
      ],
      "examples": [
        {
          "ja": "今日は風が強いです。",
          "zh": "今天风很大。",
          "focus": ["風"],
          "zhFocus": ["风"]
        },
        {
          "ja": "窓から冷たい風が入ります。",
          "zh": "冷风从窗户吹进来。",
          "focus": ["風"],
          "zhFocus": ["风"]
        },
        {
          "ja": "風が吹いて、少し涼しくなりました。",
          "zh": "风一吹，凉快了一些。",
          "focus": ["風"],
          "zhFocus": ["风"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-163",
      "jlpt": "N5",
      "headword": "風邪",
      "source_form": "風邪",
      "variants": [
        "風邪"
      ],
      "reading": "かぜ",
      "reading_variants": [
        "かぜ"
      ],
      "romaji": "kaze",
      "part_of_speech": "noun",
      "meaning_zh": "感冒",
      "kanji_readings": [
        {
          "form": "風邪",
          "reading": "かぜ"
        }
      ],
      "examples": [
        {
          "ja": "風邪を引きました。",
          "zh": "感冒了。",
          "focus": ["風邪"],
          "zhFocus": ["感冒"]
        },
        {
          "ja": "風邪で学校を休みます。",
          "zh": "因为感冒不去学校。",
          "focus": ["風邪"],
          "zhFocus": ["感冒"]
        },
        {
          "ja": "風邪に気をつけてください。",
          "zh": "请小心感冒。",
          "focus": ["風邪"],
          "zhFocus": ["感冒"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-164",
      "jlpt": "N5",
      "headword": "方",
      "source_form": "方",
      "variants": [
        "方"
      ],
      "reading": "かた",
      "reading_variants": [
        "かた"
      ],
      "romaji": "kata",
      "part_of_speech": "noun",
      "meaning_zh": "人（礼貌说法）；方法",
      "senses_zh": [
        "人（礼貌说法）",
        "方法"
      ],
      "kanji_readings": [
        {
          "form": "方",
          "reading": "かた"
        }
      ],
      "examples": [
        {
          "ja": "あの方は先生です。",
          "zh": "那位是老师。",
          "focus": ["方"],
          "zhFocus": ["位"]
        },
        {
          "ja": "使い方を教えてください。",
          "zh": "请教我使用方法。",
          "focus": ["方"],
          "zhFocus": ["方法"]
        },
        {
          "ja": "読み方が分かりません。",
          "zh": "不知道读法。",
          "focus": ["方"],
          "zhFocus": ["法"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-165",
      "jlpt": "N5",
      "headword": "家族",
      "source_form": "家族",
      "variants": [
        "家族"
      ],
      "reading": "かぞく",
      "reading_variants": [
        "かぞく"
      ],
      "romaji": "kazoku",
      "part_of_speech": "noun",
      "meaning_zh": "家人；家庭成员",
      "kanji_readings": [
        {
          "form": "家族",
          "reading": "かぞく"
        }
      ],
      "examples": [
        {
          "ja": "日曜日は家族で出かけます。",
          "zh": "星期天全家一起出门。",
          "focus": ["家族"],
          "zhFocus": ["全家"]
        },
        {
          "ja": "ご家族は何人ですか。",
          "zh": "您家有几口人？",
          "focus": ["家族"],
          "zhFocus": ["家"]
        },
        {
          "ja": "私の家族はみんな元気です。",
          "zh": "我的家人都身体很好。",
          "focus": ["家族"],
          "zhFocus": ["家人"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-166",
      "jlpt": "N5",
      "headword": "カタカナ",
      "source_form": "片仮名",
      "variants": [
        "カタカナ"
      ],
      "reading": "かたかな",
      "reading_variants": [
        "かたかな"
      ],
      "romaji": "katakana",
      "part_of_speech": "noun",
      "meaning_zh": "片假名",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "カタカナを書きます。",
          "zh": "写片假名。",
          "focus": ["カタカナ"],
          "zhFocus": ["片假名"]
        },
        {
          "ja": "この言葉はカタカナです。",
          "zh": "这个词是片假名。",
          "focus": ["カタカナ"],
          "zhFocus": ["片假名"]
        },
        {
          "ja": "カタカナを覚えます。",
          "zh": "记片假名。",
          "focus": ["カタカナ"],
          "zhFocus": ["片假名"]
        }
      ],
      "note_zh": "已把旧写法/不常用写法规范为现代常用写法；原始写法保留在 source_form。"
    },
    {
      "id": "n5-167",
      "jlpt": "N5",
      "headword": "～月",
      "source_form": "～月",
      "variants": [
        "～月"
      ],
      "reading": "～がつ",
      "reading_variants": [
        "～がつ"
      ],
      "romaji": "~gatsu",
      "part_of_speech": "counter/suffix",
      "meaning_zh": "……月（月份）",
      "kanji_readings": [
        {
          "form": "～月",
          "reading": "～がつ"
        }
      ],
      "examples": [
        {
          "ja": "四月に学校が始まります。",
          "zh": "四月学校开学。",
          "focus": ["月"],
          "zhFocus": ["月"]
        },
        {
          "ja": "八月は暑いです。",
          "zh": "八月很热。",
          "focus": ["月"],
          "zhFocus": ["月"]
        },
        {
          "ja": "十二月に日本へ行きます。",
          "zh": "十二月去日本。",
          "focus": ["月"],
          "zhFocus": ["月"]
        }
      ],
      "note_zh": "接在数字或名词后使用；例句中去掉了前缀符号「～」。"
    },
    {
      "id": "n5-168",
      "jlpt": "N5",
      "headword": "学校",
      "source_form": "学校",
      "variants": [
        "学校"
      ],
      "reading": "がっこう",
      "reading_variants": [
        "がっこう"
      ],
      "romaji": "gakkou",
      "part_of_speech": "noun",
      "meaning_zh": "学校",
      "kanji_readings": [
        {
          "form": "学校",
          "reading": "がっこう"
        }
      ],
      "examples": [
        {
          "ja": "学校へ行きます。",
          "zh": "去学校。",
          "focus": ["学校"],
          "zhFocus": ["学校"]
        },
        {
          "ja": "学校は駅の近くです。",
          "zh": "学校在车站附近。",
          "focus": ["学校"],
          "zhFocus": ["学校"]
        },
        {
          "ja": "学校で友達に会います。",
          "zh": "在学校见朋友。",
          "focus": ["学校"],
          "zhFocus": ["学校"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-169",
      "jlpt": "N5",
      "headword": "カップ",
      "source_form": "カップ",
      "variants": [
        "カップ"
      ],
      "reading": "カップ",
      "reading_variants": [
        "カップ"
      ],
      "romaji": "kappu",
      "part_of_speech": "noun",
      "meaning_zh": "杯子；茶杯",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "このカップはとても薄いです。",
          "zh": "这个杯子很薄。",
          "focus": ["カップ"],
          "zhFocus": ["杯子"]
        },
        {
          "ja": "カップを洗ってください。",
          "zh": "请把杯子洗一下。",
          "focus": ["カップ"],
          "zhFocus": ["杯子"]
        },
        {
          "ja": "カップにコーヒーを入れます。",
          "zh": "把咖啡倒进杯子里。",
          "focus": ["カップ"],
          "zhFocus": ["杯子"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-170",
      "merged_source_ids": ["n4-130"],
      "jlpt": "N5",
      "headword": "家庭",
      "source_form": "家庭",
      "variants": [
        "家庭"
      ],
      "reading": "かてい",
      "reading_variants": [
        "かてい"
      ],
      "romaji": "katei",
      "part_of_speech": "noun",
      "meaning_zh": "家庭",
      "kanji_readings": [
        {
          "form": "家庭",
          "reading": "かてい"
        }
      ],
      "examples": [
        {
          "ja": "明るい家庭です。",
          "zh": "这是开朗温暖的家庭。",
          "focus": ["家庭"],
          "zhFocus": ["家庭"]
        },
        {
          "ja": "家庭で日本語を使います。",
          "zh": "在家里使用日语。",
          "focus": ["家庭"],
          "zhFocus": ["家里"]
        },
        {
          "ja": "家庭は大切です。",
          "zh": "家庭很重要。",
          "focus": ["家庭"],
          "zhFocus": ["家庭"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-171",
      "jlpt": "N5",
      "headword": "角",
      "source_form": "角",
      "variants": [
        "角"
      ],
      "reading": "かど",
      "reading_variants": [
        "かど"
      ],
      "romaji": "kado",
      "part_of_speech": "noun",
      "meaning_zh": "角；拐角",
      "senses_zh": [
        "角",
        "拐角"
      ],
      "kanji_readings": [
        {
          "form": "角",
          "reading": "かど"
        }
      ],
      "examples": [
        {
          "ja": "角のパン屋はとてもおいしいです。",
          "zh": "拐角那家面包店很好吃。",
          "focus": ["角"],
          "zhFocus": ["拐角"]
        },
        {
          "ja": "角に店があります。",
          "zh": "拐角处有商店。",
          "focus": ["角"],
          "zhFocus": ["拐角"]
        },
        {
          "ja": "机の角に気をつけてください。",
          "zh": "请小心桌角。",
          "focus": ["角"],
          "zhFocus": ["角"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-172",
      "jlpt": "N5",
      "headword": "かばん",
      "source_form": "かばん",
      "variants": [
        "かばん"
      ],
      "reading": "かばん",
      "reading_variants": [
        "かばん"
      ],
      "romaji": "kaban",
      "part_of_speech": "noun",
      "meaning_zh": "包；书包",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "このかばんはポケットが多いです。",
          "zh": "这个包口袋很多。",
          "focus": ["かばん"],
          "zhFocus": ["包"]
        },
        {
          "ja": "かばんの中に何がありますか。",
          "zh": "包里有什么？",
          "focus": ["かばん"],
          "zhFocus": ["包"]
        },
        {
          "ja": "駅でかばんをなくしました。",
          "zh": "在车站把包弄丢了。",
          "focus": ["かばん"],
          "zhFocus": ["包"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-173",
      "jlpt": "N5",
      "headword": "花瓶",
      "source_form": "花瓶",
      "variants": [
        "花瓶"
      ],
      "reading": "かびん",
      "reading_variants": [
        "かびん"
      ],
      "romaji": "kabin",
      "part_of_speech": "noun",
      "meaning_zh": "花瓶",
      "kanji_readings": [
        {
          "form": "花瓶",
          "reading": "かびん"
        }
      ],
      "examples": [
        {
          "ja": "花瓶に花を入れます。",
          "zh": "把花放进花瓶。",
          "focus": ["花瓶"],
          "zhFocus": ["花瓶"]
        },
        {
          "ja": "この花瓶はきれいです。",
          "zh": "这个花瓶很漂亮。",
          "focus": ["花瓶"],
          "zhFocus": ["花瓶"]
        },
        {
          "ja": "花瓶を机の上に置きます。",
          "zh": "把花瓶放在桌子上。",
          "focus": ["花瓶"],
          "zhFocus": ["花瓶"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-174",
      "jlpt": "N5",
      "headword": "かぶる",
      "source_form": "かぶる",
      "variants": [
        "かぶる"
      ],
      "reading": "かぶる",
      "reading_variants": [
        "かぶる"
      ],
      "romaji": "kaburu",
      "part_of_speech": "verb",
      "meaning_zh": "戴（帽子等）",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "帽子をかぶります。",
          "zh": "戴帽子。",
          "focus": ["かぶり"],
          "zhFocus": ["戴"]
        },
        {
          "ja": "赤い帽子をかぶっています。",
          "zh": "戴着红帽子。",
          "focus": ["かぶっ"],
          "zhFocus": ["戴"]
        },
        {
          "ja": "雨の日に帽子をかぶりました。",
          "zh": "下雨天戴了帽子。",
          "focus": ["かぶり"],
          "zhFocus": ["戴"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-175",
      "jlpt": "N5",
      "headword": "紙",
      "source_form": "紙",
      "variants": [
        "紙"
      ],
      "reading": "かみ",
      "reading_variants": [
        "かみ"
      ],
      "romaji": "kami",
      "part_of_speech": "noun",
      "meaning_zh": "纸",
      "kanji_readings": [
        {
          "form": "紙",
          "reading": "かみ"
        }
      ],
      "examples": [
        {
          "ja": "紙に名前を書きます。",
          "zh": "在纸上写名字。",
          "focus": ["紙"],
          "zhFocus": ["纸"]
        },
        {
          "ja": "紙を一枚ください。",
          "zh": "请给我一张纸。",
          "focus": ["紙"],
          "zhFocus": ["纸"]
        },
        {
          "ja": "白い紙を使います。",
          "zh": "使用白纸。",
          "focus": ["紙"],
          "zhFocus": ["纸"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-176",
      "jlpt": "N5",
      "headword": "カメラ",
      "source_form": "カメラ",
      "variants": [
        "カメラ"
      ],
      "reading": "カメラ",
      "reading_variants": [
        "カメラ"
      ],
      "romaji": "kamera",
      "part_of_speech": "noun",
      "meaning_zh": "相机",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "父の誕生日に新しいカメラをあげました。",
          "zh": "爸爸生日时送了他一台新相机。",
          "focus": ["カメラ"],
          "zhFocus": ["相机"]
        },
        {
          "ja": "このカメラは小さくて軽いです。",
          "zh": "这台相机又小又轻。",
          "focus": ["カメラ"],
          "zhFocus": ["相机"]
        },
        {
          "ja": "カメラで写真を撮ります。",
          "zh": "用相机拍照。",
          "focus": ["カメラ"],
          "zhFocus": ["相机"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-177",
      "jlpt": "N5",
      "headword": "火曜日",
      "source_form": "火曜日",
      "variants": [
        "火曜日"
      ],
      "reading": "かようび",
      "reading_variants": [
        "かようび"
      ],
      "romaji": "kayoubi",
      "part_of_speech": "noun",
      "meaning_zh": "星期二",
      "kanji_readings": [
        {
          "form": "火曜日",
          "reading": "かようび"
        }
      ],
      "examples": [
        {
          "ja": "火曜日に学校へ行きます。",
          "zh": "星期二去学校。",
          "focus": ["火曜日"],
          "zhFocus": ["星期二"]
        },
        {
          "ja": "火曜日は休みです。",
          "zh": "星期二休息。",
          "focus": ["火曜日"],
          "zhFocus": ["星期二"]
        },
        {
          "ja": "次の火曜日に会いましょう。",
          "zh": "下个星期二见吧。",
          "focus": ["火曜日"],
          "zhFocus": ["星期二"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-178",
      "jlpt": "N5",
      "headword": "辛い",
      "source_form": "辛い",
      "variants": [
        "辛い"
      ],
      "reading": "からい",
      "reading_variants": [
        "からい"
      ],
      "romaji": "karai",
      "part_of_speech": "i-adjective",
      "meaning_zh": "辣的",
      "kanji_readings": [
        {
          "form": "辛い",
          "reading": "からい"
        }
      ],
      "examples": [
        {
          "ja": "このカレーは辛いです。",
          "zh": "这个咖喱很辣。",
          "focus": ["辛い"],
          "zhFocus": ["辣"]
        },
        {
          "ja": "私は辛い料理を食べません。",
          "zh": "我不吃辣的菜。",
          "focus": ["辛い"],
          "zhFocus": ["辣"]
        },
        {
          "ja": "このスープは少し辛いです。",
          "zh": "这碗汤有点辣。",
          "focus": ["辛い"],
          "zhFocus": ["辣"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-179",
      "jlpt": "N5",
      "headword": "体",
      "source_form": "体",
      "variants": [
        "体"
      ],
      "reading": "からだ",
      "reading_variants": [
        "からだ"
      ],
      "romaji": "karada",
      "part_of_speech": "noun",
      "meaning_zh": "身体",
      "kanji_readings": [
        {
          "form": "体",
          "reading": "からだ"
        }
      ],
      "examples": [
        {
          "ja": "体を大切にしてください。",
          "zh": "请保重身体。",
          "focus": ["体"],
          "zhFocus": ["身体"]
        },
        {
          "ja": "運動して体を強くします。",
          "zh": "运动让身体变强。",
          "focus": ["体"],
          "zhFocus": ["身体"]
        },
        {
          "ja": "体の調子がいいです。",
          "zh": "身体状态很好。",
          "focus": ["体"],
          "zhFocus": ["身体"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-180",
      "jlpt": "N5",
      "headword": "借りる",
      "source_form": "借りる",
      "variants": [
        "借りる"
      ],
      "reading": "かりる",
      "reading_variants": [
        "かりる"
      ],
      "romaji": "kariru",
      "part_of_speech": "verb",
      "meaning_zh": "借入；向别人借",
      "kanji_readings": [
        {
          "form": "借りる",
          "reading": "かりる"
        }
      ],
      "examples": [
        {
          "ja": "図書館で本を借ります。",
          "zh": "在图书馆借书。",
          "focus": ["借り"],
          "zhFocus": ["借"]
        },
        {
          "ja": "友達に傘を借りました。",
          "zh": "向朋友借了伞。",
          "focus": ["借り"],
          "zhFocus": ["借"]
        },
        {
          "ja": "ノートを借りてもいいですか。",
          "zh": "可以借笔记本吗？",
          "focus": ["借り"],
          "zhFocus": ["借"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-182",
      "jlpt": "N5",
      "headword": "軽い",
      "source_form": "軽い",
      "variants": [
        "軽い"
      ],
      "reading": "かるい",
      "reading_variants": [
        "かるい"
      ],
      "romaji": "karui",
      "part_of_speech": "i-adjective",
      "meaning_zh": "轻的；轻微的",
      "senses_zh": [
        "轻的",
        "轻微的"
      ],
      "kanji_readings": [
        {
          "form": "軽い",
          "reading": "かるい"
        }
      ],
      "examples": [
        {
          "ja": "このかばんは軽いです。",
          "zh": "这个包很轻。",
          "focus": ["軽い"],
          "zhFocus": ["轻"]
        },
        {
          "ja": "この靴はとても軽いです。",
          "zh": "这双鞋非常轻。",
          "focus": ["軽い"],
          "zhFocus": ["轻"]
        },
        {
          "ja": "軽い荷物だけ持って行きます。",
          "zh": "只带轻便的行李去。",
          "focus": ["軽い"],
          "zhFocus": ["轻便"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-183",
      "jlpt": "N5",
      "headword": "カレー",
      "source_form": "カレー",
      "variants": [
        "カレー"
      ],
      "reading": "カレー",
      "reading_variants": [
        "カレー"
      ],
      "romaji": "karee",
      "part_of_speech": "noun",
      "meaning_zh": "咖喱",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "晩ご飯にカレーを作ります。",
          "zh": "晚饭做咖喱。",
          "focus": ["カレー"],
          "zhFocus": ["咖喱"]
        },
        {
          "ja": "このカレーは少し辛いです。",
          "zh": "这个咖喱有点辣。",
          "focus": ["カレー"],
          "zhFocus": ["咖喱"]
        },
        {
          "ja": "学校の食堂のカレーはおいしいです。",
          "zh": "学校食堂的咖喱很好吃。",
          "focus": ["カレー"],
          "zhFocus": ["咖喱"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-184",
      "jlpt": "N5",
      "headword": "カレンダー",
      "source_form": "カレンダー",
      "variants": [
        "カレンダー"
      ],
      "reading": "カレンダー",
      "reading_variants": [
        "カレンダー"
      ],
      "romaji": "karendaa",
      "part_of_speech": "noun",
      "meaning_zh": "日历",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "カレンダーに友達の誕生日を書きます。",
          "zh": "在日历上写下朋友的生日。",
          "focus": ["カレンダー"],
          "zhFocus": ["日历"]
        },
        {
          "ja": "来月のカレンダーを見てください。",
          "zh": "请看下个月的日历。",
          "focus": ["カレンダー"],
          "zhFocus": ["日历"]
        },
        {
          "ja": "カレンダーを壁に掛けます。",
          "zh": "把日历挂在墙上。",
          "focus": ["カレンダー"],
          "zhFocus": ["日历"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-185",
      "jlpt": "N5",
      "headword": "川",
      "source_form": "川; 河",
      "variants": [
        "川",
        "河"
      ],
      "reading": "かわ",
      "reading_variants": [
        "かわ"
      ],
      "romaji": "kawa",
      "part_of_speech": "noun",
      "meaning_zh": "河；河流",
      "kanji_readings": [
        {
          "form": "川",
          "reading": "かわ"
        },
        {
          "form": "河",
          "reading": "かわ"
        }
      ],
      "examples": [
        {
          "ja": "家の近くに大きな川があります。",
          "zh": "家附近有一条大河。",
          "focus": ["川"],
          "zhFocus": ["河"]
        },
        {
          "ja": "子供たちが川で泳いでいます。",
          "zh": "孩子们正在河里游泳。",
          "focus": ["川"],
          "zhFocus": ["河"]
        },
        {
          "ja": "この川の水はとてもきれいです。",
          "zh": "这条河的水非常干净。",
          "focus": ["川"],
          "zhFocus": ["河"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-186",
      "jlpt": "N5",
      "headword": "～側",
      "source_form": "～側",
      "variants": [
        "～側"
      ],
      "reading": "～がわ",
      "reading_variants": [
        "～がわ"
      ],
      "romaji": "~gawa",
      "part_of_speech": "suffix/pattern",
      "meaning_zh": "……侧；……边",
      "kanji_readings": [
        {
          "form": "～側",
          "reading": "～がわ"
        }
      ],
      "examples": [
        {
          "ja": "右側に銀行があります。",
          "zh": "右边有银行。",
          "focus": ["側"],
          "zhFocus": ["边"]
        },
        {
          "ja": "道の左側を歩きます。",
          "zh": "走在路的左侧。",
          "focus": ["側"],
          "zhFocus": ["侧"]
        },
        {
          "ja": "駅の南側で待ちます。",
          "zh": "在车站南侧等。",
          "focus": ["側"],
          "zhFocus": ["侧"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-187",
      "jlpt": "N5",
      "headword": "かわいい",
      "source_form": "可愛い",
      "variants": [
        "かわいい"
      ],
      "reading": "かわいい",
      "reading_variants": [
        "かわいい"
      ],
      "romaji": "kawaii",
      "part_of_speech": "i-adjective",
      "meaning_zh": "可爱的",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "この猫はかわいいです。",
          "zh": "这只猫很可爱。",
          "focus": ["かわいい"],
          "zhFocus": ["可爱"]
        },
        {
          "ja": "妹はかわいい人形を持っています。",
          "zh": "妹妹有一个可爱的玩偶。",
          "focus": ["かわいい"],
          "zhFocus": ["可爱"]
        },
        {
          "ja": "この赤ちゃんはかわいいですね。",
          "zh": "这个宝宝真可爱啊。",
          "focus": ["かわいい"],
          "zhFocus": ["可爱"]
        }
      ],
      "note_zh": "已把旧写法/不常用写法规范为现代常用写法；原始写法保留在 source_form。"
    },
    {
      "id": "n5-188",
      "jlpt": "N5",
      "headword": "漢字",
      "source_form": "漢字",
      "variants": [
        "漢字"
      ],
      "reading": "かんじ",
      "reading_variants": [
        "かんじ"
      ],
      "romaji": "kanji",
      "part_of_speech": "noun",
      "meaning_zh": "汉字",
      "kanji_readings": [
        {
          "form": "漢字",
          "reading": "かんじ"
        }
      ],
      "examples": [
        {
          "ja": "漢字を読みます。",
          "zh": "读汉字。",
          "focus": ["漢字"],
          "zhFocus": ["汉字"]
        },
        {
          "ja": "漢字が好きです。",
          "zh": "喜欢汉字。",
          "focus": ["漢字"],
          "zhFocus": ["汉字"]
        },
        {
          "ja": "朝、漢字を読みました。",
          "zh": "早上读了汉字。",
          "focus": ["漢字"],
          "zhFocus": ["汉字"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-189",
      "jlpt": "N5",
      "headword": "木",
      "source_form": "木",
      "variants": [
        "木"
      ],
      "reading": "き",
      "reading_variants": [
        "き"
      ],
      "romaji": "ki",
      "part_of_speech": "noun",
      "meaning_zh": "树；木头",
      "senses_zh": [
        "树",
        "木头"
      ],
      "kanji_readings": [
        {
          "form": "木",
          "reading": "き"
        }
      ],
      "examples": [
        {
          "ja": "庭に高い木が一本あります。",
          "zh": "院子里有一棵高高的树。",
          "focus": ["木"],
          "zhFocus": ["树"]
        },
        {
          "ja": "木の下で少し休みましょう。",
          "zh": "在树下休息一会儿吧。",
          "focus": ["木"],
          "zhFocus": ["树"]
        },
        {
          "ja": "この机は木でできています。",
          "zh": "这张桌子是木头做的。",
          "focus": ["木"],
          "zhFocus": ["木头"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-190",
      "jlpt": "N5",
      "headword": "黄色",
      "source_form": "黄色",
      "variants": [
        "黄色"
      ],
      "reading": "きいろ",
      "reading_variants": [
        "きいろ"
      ],
      "romaji": "kiiro",
      "part_of_speech": "noun",
      "meaning_zh": "黄色",
      "kanji_readings": [
        {
          "form": "黄色",
          "reading": "きいろ"
        }
      ],
      "examples": [
        {
          "ja": "黄色の花があります。",
          "zh": "有黄色的花。",
          "focus": ["黄色"],
          "zhFocus": ["黄色"]
        },
        {
          "ja": "黄色が好きです。",
          "zh": "我喜欢黄色。",
          "focus": ["黄色"],
          "zhFocus": ["黄色"]
        },
        {
          "ja": "これは黄色のかばんです。",
          "zh": "这是黄色的包。",
          "focus": ["黄色"],
          "zhFocus": ["黄色"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-191",
      "jlpt": "N5",
      "headword": "黄色い",
      "source_form": "黄色い",
      "variants": [
        "黄色い"
      ],
      "reading": "きいろい",
      "reading_variants": [
        "きいろい"
      ],
      "romaji": "kiiroi",
      "part_of_speech": "i-adjective",
      "meaning_zh": "黄色的",
      "kanji_readings": [
        {
          "form": "黄色い",
          "reading": "きいろい"
        }
      ],
      "examples": [
        {
          "ja": "この花は黄色いです。",
          "zh": "这朵花是黄色的。",
          "focus": ["黄色い"],
          "zhFocus": ["黄色"]
        },
        {
          "ja": "黄色いかばんを買いました。",
          "zh": "买了一个黄色的包。",
          "focus": ["黄色い"],
          "zhFocus": ["黄色"]
        },
        {
          "ja": "秋になると葉が黄色くなります。",
          "zh": "到了秋天，叶子会变黄。",
          "focus": ["黄色く"],
          "zhFocus": ["黄"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-192",
      "jlpt": "N5",
      "headword": "消える",
      "source_form": "消える",
      "variants": [
        "消える"
      ],
      "reading": "きえる",
      "reading_variants": [
        "きえる"
      ],
      "romaji": "kieru",
      "part_of_speech": "verb",
      "meaning_zh": "消失；熄灭",
      "senses_zh": [
        "消失",
        "熄灭"
      ],
      "kanji_readings": [
        {
          "form": "消える",
          "reading": "きえる"
        }
      ],
      "examples": [
        {
          "ja": "電気が消えました。",
          "zh": "灯灭了。",
          "focus": ["消え"],
          "zhFocus": ["灭"]
        },
        {
          "ja": "文字が消えています。",
          "zh": "字消失了。",
          "focus": ["消え"],
          "zhFocus": ["消失"]
        },
        {
          "ja": "音がすぐ消えました。",
          "zh": "声音很快消失了。",
          "focus": ["消え"],
          "zhFocus": ["消失"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-193",
      "jlpt": "N5",
      "headword": "聞く",
      "source_form": "聞く",
      "variants": [
        "聞く"
      ],
      "reading": "きく",
      "reading_variants": [
        "きく"
      ],
      "romaji": "kiku",
      "part_of_speech": "verb",
      "meaning_zh": "听；询问",
      "senses_zh": [
        "听",
        "询问"
      ],
      "kanji_readings": [
        {
          "form": "聞く",
          "reading": "きく"
        }
      ],
      "examples": [
        {
          "ja": "音楽を聞きます。",
          "zh": "听音乐。",
          "focus": ["聞き"],
          "zhFocus": ["听"]
        },
        {
          "ja": "先生に聞きます。",
          "zh": "问老师。",
          "focus": ["聞き"],
          "zhFocus": ["问"]
        },
        {
          "ja": "もう一度聞いてください。",
          "zh": "请再听一遍。",
          "focus": ["聞い"],
          "zhFocus": ["听"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-194",
      "jlpt": "N5",
      "headword": "北",
      "source_form": "北",
      "variants": [
        "北"
      ],
      "reading": "きた",
      "reading_variants": [
        "きた"
      ],
      "romaji": "kita",
      "part_of_speech": "noun",
      "meaning_zh": "北；北方",
      "kanji_readings": [
        {
          "form": "北",
          "reading": "きた"
        }
      ],
      "examples": [
        {
          "ja": "北海道は日本の北にあります。",
          "zh": "北海道位于日本北部。",
          "focus": [{"after": "北海道は日本の", "text": "北"}],
          "zhFocus": [{"after": "北海道位于日本", "text": "北"}]
        },
        {
          "ja": "北の空に雲が見えます。",
          "zh": "北边的天空能看到云。",
          "focus": ["北"],
          "zhFocus": ["北"]
        },
        {
          "ja": "駅の北口で待ちます。",
          "zh": "在车站北口等。",
          "focus": ["北"],
          "zhFocus": ["北"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-195",
      "jlpt": "N5",
      "headword": "ギター",
      "source_form": "ギター",
      "variants": [
        "ギター"
      ],
      "reading": "ギター",
      "reading_variants": [
        "ギター"
      ],
      "romaji": "gitaa",
      "part_of_speech": "noun",
      "meaning_zh": "吉他",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "毎晩ギターの練習をします。",
          "zh": "每天晚上练吉他。",
          "focus": ["ギター"],
          "zhFocus": ["吉他"]
        },
        {
          "ja": "姉はギターがとても上手です。",
          "zh": "姐姐吉他弹得很好。",
          "focus": ["ギター"],
          "zhFocus": ["吉他"]
        },
        {
          "ja": "兄はギターを弾きます。",
          "zh": "哥哥弹吉他。",
          "focus": ["ギター"],
          "zhFocus": ["吉他"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-196",
      "jlpt": "N5",
      "headword": "汚い",
      "source_form": "汚い",
      "variants": [
        "汚い"
      ],
      "reading": "きたない",
      "reading_variants": [
        "きたない"
      ],
      "romaji": "kitanai",
      "part_of_speech": "i-adjective",
      "meaning_zh": "脏的；不干净的",
      "kanji_readings": [
        {
          "form": "汚い",
          "reading": "きたない"
        }
      ],
      "examples": [
        {
          "ja": "この部屋は汚いです。",
          "zh": "这个房间很脏。",
          "focus": ["汚い"],
          "zhFocus": ["脏"]
        },
        {
          "ja": "手が汚いので、洗います。",
          "zh": "手脏了，所以要洗手。",
          "focus": ["汚い"],
          "zhFocus": ["脏"]
        },
        {
          "ja": "汚い手で食べないでください。",
          "zh": "请不要用脏手吃东西。",
          "focus": ["汚い"],
          "zhFocus": ["脏"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-197",
      "jlpt": "N5",
      "headword": "喫茶店",
      "source_form": "喫茶店",
      "variants": [
        "喫茶店"
      ],
      "reading": "きっさてん",
      "reading_variants": [
        "きっさてん"
      ],
      "romaji": "kissaten",
      "part_of_speech": "noun",
      "meaning_zh": "咖啡馆；（日式）茶馆",
      "kanji_readings": [
        {
          "form": "喫茶店",
          "reading": "きっさてん"
        }
      ],
      "examples": [
        {
          "ja": "喫茶店へ行きます。",
          "zh": "去咖啡馆。",
          "focus": ["喫茶店"],
          "zhFocus": ["咖啡馆"]
        },
        {
          "ja": "喫茶店は駅の近くです。",
          "zh": "咖啡馆在车站附近。",
          "focus": ["喫茶店"],
          "zhFocus": ["咖啡馆"]
        },
        {
          "ja": "喫茶店で友達に会います。",
          "zh": "在咖啡馆见朋友。",
          "focus": ["喫茶店"],
          "zhFocus": ["咖啡馆"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-198",
      "jlpt": "N5",
      "headword": "切手",
      "source_form": "切手",
      "variants": [
        "切手"
      ],
      "reading": "きって",
      "reading_variants": [
        "きって"
      ],
      "romaji": "kitte",
      "part_of_speech": "noun",
      "meaning_zh": "邮票",
      "kanji_readings": [
        {
          "form": "切手",
          "reading": "きって"
        }
      ],
      "examples": [
        {
          "ja": "郵便局で切手を五枚買いました。",
          "zh": "在邮局买了五张邮票。",
          "focus": ["切手"],
          "zhFocus": ["邮票"]
        },
        {
          "ja": "この切手はとてもきれいです。",
          "zh": "这张邮票很漂亮。",
          "focus": ["切手"],
          "zhFocus": ["邮票"]
        },
        {
          "ja": "封筒に切手を貼ります。",
          "zh": "把邮票贴在信封上。",
          "focus": ["切手"],
          "zhFocus": ["邮票"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-199",
      "jlpt": "N5",
      "headword": "切符",
      "source_form": "切符",
      "variants": [
        "切符"
      ],
      "reading": "きっぷ",
      "reading_variants": [
        "きっぷ"
      ],
      "romaji": "kippu",
      "part_of_speech": "noun",
      "meaning_zh": "票；车票",
      "kanji_readings": [
        {
          "form": "切符",
          "reading": "きっぷ"
        }
      ],
      "examples": [
        {
          "ja": "駅で大阪までの切符を買いました。",
          "zh": "在车站买了到大阪的票。",
          "focus": ["切符"],
          "zhFocus": ["票"]
        },
        {
          "ja": "切符はどこで買いますか。",
          "zh": "票在哪里买？",
          "focus": ["切符"],
          "zhFocus": ["票"]
        },
        {
          "ja": "切符を駅員に見せます。",
          "zh": "把车票给站务员看。",
          "focus": ["切符"],
          "zhFocus": ["车票"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-200",
      "jlpt": "N5",
      "headword": "昨日",
      "source_form": "昨日",
      "variants": [
        "昨日"
      ],
      "reading": "きのう",
      "reading_variants": [
        "きのう"
      ],
      "romaji": "kinou",
      "part_of_speech": "noun",
      "meaning_zh": "昨天",
      "kanji_readings": [
        {
          "form": "昨日",
          "reading": "きのう"
        }
      ],
      "examples": [
        {
          "ja": "昨日、学校へ行きました。",
          "zh": "昨天去了学校。",
          "focus": ["昨日"],
          "zhFocus": ["昨天"]
        },
        {
          "ja": "昨日は忙しかったです。",
          "zh": "昨天很忙。",
          "focus": ["昨日"],
          "zhFocus": ["昨天"]
        },
        {
          "ja": "昨日、友達に会いました。",
          "zh": "昨天见了朋友。",
          "focus": ["昨日"],
          "zhFocus": ["昨天"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-201",
      "jlpt": "N5",
      "headword": "九",
      "source_form": "九",
      "variants": [
        "九"
      ],
      "reading": "きゅう",
      "reading_variants": [
        "きゅう"
      ],
      "romaji": "kyuu",
      "part_of_speech": "numeral",
      "meaning_zh": "九（一般读法）",
      "kanji_readings": [
        {
          "form": "九",
          "reading": "きゅう"
        }
      ],
      "examples": [
        {
          "ja": "八たす一は九です。",
          "zh": "八加一等于九。",
          "focus": ["九"],
          "zhFocus": ["九"]
        },
        {
          "ja": "答えは九です。",
          "zh": "答案是九。",
          "focus": ["九"],
          "zhFocus": ["九"]
        },
        {
          "ja": "九を丸で囲んでください。",
          "zh": "请把九圈起来。",
          "focus": ["九"],
          "zhFocus": ["九"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-202",
      "jlpt": "N5",
      "headword": "牛肉",
      "source_form": "牛肉",
      "variants": [
        "牛肉"
      ],
      "reading": "ぎゅうにく",
      "reading_variants": [
        "ぎゅうにく"
      ],
      "romaji": "gyuuniku",
      "part_of_speech": "noun",
      "meaning_zh": "牛肉",
      "kanji_readings": [
        {
          "form": "牛肉",
          "reading": "ぎゅうにく"
        }
      ],
      "examples": [
        {
          "ja": "牛肉と野菜でカレーを作りました。",
          "zh": "用牛肉和蔬菜做了咖喱。",
          "focus": ["牛肉"],
          "zhFocus": ["牛肉"]
        },
        {
          "ja": "この店の牛肉はとても高いです。",
          "zh": "这家店的牛肉非常贵。",
          "focus": ["牛肉"],
          "zhFocus": ["牛肉"]
        },
        {
          "ja": "店で牛肉を三百グラム買いました。",
          "zh": "在店里买了三百克牛肉。",
          "focus": ["牛肉"],
          "zhFocus": ["牛肉"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-203",
      "jlpt": "N5",
      "headword": "牛乳",
      "source_form": "牛乳",
      "variants": [
        "牛乳"
      ],
      "reading": "ぎゅうにゅう",
      "reading_variants": [
        "ぎゅうにゅう"
      ],
      "romaji": "gyuunyuu",
      "part_of_speech": "noun",
      "meaning_zh": "牛奶",
      "kanji_readings": [
        {
          "form": "牛乳",
          "reading": "ぎゅうにゅう"
        }
      ],
      "examples": [
        {
          "ja": "牛乳を飲みます。",
          "zh": "喝牛奶。",
          "focus": ["牛乳"],
          "zhFocus": ["牛奶"]
        },
        {
          "ja": "冷蔵庫に牛乳がありません。",
          "zh": "冰箱里没有牛奶了。",
          "focus": ["牛乳"],
          "zhFocus": ["牛奶"]
        },
        {
          "ja": "牛乳を買ってきてください。",
          "zh": "请去买牛奶回来。",
          "focus": ["牛乳"],
          "zhFocus": ["牛奶"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-204",
      "jlpt": "N5",
      "headword": "今日",
      "source_form": "今日",
      "variants": [
        "今日"
      ],
      "reading": "きょう",
      "reading_variants": [
        "きょう"
      ],
      "romaji": "kyou",
      "part_of_speech": "noun",
      "meaning_zh": "今天",
      "kanji_readings": [
        {
          "form": "今日",
          "reading": "きょう"
        }
      ],
      "examples": [
        {
          "ja": "今日、学校へ行きます。",
          "zh": "今天去学校。",
          "focus": ["今日"],
          "zhFocus": ["今天"]
        },
        {
          "ja": "今日は忙しいです。",
          "zh": "今天很忙。",
          "focus": ["今日"],
          "zhFocus": ["今天"]
        },
        {
          "ja": "今日、友達に会います。",
          "zh": "今天见朋友。",
          "focus": ["今日"],
          "zhFocus": ["今天"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-205",
      "merged_source_ids": ["n4-177"],
      "jlpt": "N5",
      "headword": "教室",
      "source_form": "教室",
      "variants": [
        "教室"
      ],
      "reading": "きょうしつ",
      "reading_variants": [
        "きょうしつ"
      ],
      "romaji": "kyoushitsu",
      "part_of_speech": "noun",
      "meaning_zh": "教室",
      "kanji_readings": [
        {
          "form": "教室",
          "reading": "きょうしつ"
        }
      ],
      "examples": [
        {
          "ja": "授業の前に教室へ入ります。",
          "zh": "上课前进入教室。",
          "focus": ["教室"],
          "zhFocus": ["教室"]
        },
        {
          "ja": "教室には机が二十あります。",
          "zh": "教室里有二十张桌子。",
          "focus": ["教室"],
          "zhFocus": ["教室"]
        },
        {
          "ja": "放課後、教室を掃除します。",
          "zh": "放学后打扫教室。",
          "focus": ["教室"],
          "zhFocus": ["教室"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-206",
      "jlpt": "N5",
      "headword": "兄弟",
      "source_form": "兄弟",
      "variants": [
        "兄弟"
      ],
      "reading": "きょうだい",
      "reading_variants": [
        "きょうだい"
      ],
      "romaji": "kyoudai",
      "part_of_speech": "noun",
      "meaning_zh": "兄弟姐妹",
      "kanji_readings": [
        {
          "form": "兄弟",
          "reading": "きょうだい"
        }
      ],
      "examples": [
        {
          "ja": "兄弟は何人いますか。",
          "zh": "你有几个兄弟姐妹？",
          "focus": ["兄弟"],
          "zhFocus": ["兄弟姐妹"]
        },
        {
          "ja": "私は兄弟がいません。",
          "zh": "我没有兄弟姐妹。",
          "focus": ["兄弟"],
          "zhFocus": ["兄弟姐妹"]
        },
        {
          "ja": "私の兄弟は大阪に住んでいます。",
          "zh": "我的兄弟姐妹住在大阪。",
          "focus": ["兄弟"],
          "zhFocus": ["兄弟姐妹"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-207",
      "jlpt": "N5",
      "headword": "去年",
      "source_form": "去年",
      "variants": [
        "去年"
      ],
      "reading": "きょねん",
      "reading_variants": [
        "きょねん"
      ],
      "romaji": "kyonen",
      "part_of_speech": "noun",
      "meaning_zh": "去年",
      "kanji_readings": [
        {
          "form": "去年",
          "reading": "きょねん"
        }
      ],
      "examples": [
        {
          "ja": "去年、日本語を勉強しました。",
          "zh": "去年学习了日语。",
          "focus": ["去年"],
          "zhFocus": ["去年"]
        },
        {
          "ja": "去年は東京に住んでいました。",
          "zh": "去年住在东京。",
          "focus": ["去年"],
          "zhFocus": ["去年"]
        },
        {
          "ja": "去年、友達と京都へ行きました。",
          "zh": "去年和朋友去了京都。",
          "focus": ["去年"],
          "zhFocus": ["去年"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-208",
      "merged_source_ids": ["n4-180"],
      "jlpt": "N5",
      "headword": "嫌い",
      "source_form": "嫌い",
      "variants": [
        "嫌い"
      ],
      "reading": "きらい",
      "reading_variants": [
        "きらい"
      ],
      "romaji": "kirai",
      "part_of_speech": "na-adjective",
      "meaning_zh": "讨厌；不喜欢",
      "kanji_readings": [
        {
          "form": "嫌い",
          "reading": "きらい"
        }
      ],
      "examples": [
        {
          "ja": "辛い食べ物が嫌いです。",
          "zh": "不喜欢辣的食物。",
          "focus": ["嫌い"],
          "zhFocus": ["不喜欢"]
        },
        {
          "ja": "掃除は嫌いではありません。",
          "zh": "不讨厌打扫。",
          "focus": ["嫌い"],
          "zhFocus": ["讨厌"]
        },
        {
          "ja": "嫌いな物は何ですか。",
          "zh": "你讨厌的东西是什么？",
          "focus": ["嫌い"],
          "zhFocus": ["讨厌"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-209",
      "jlpt": "N5",
      "headword": "切る",
      "source_form": "切る",
      "variants": [
        "切る"
      ],
      "reading": "きる",
      "reading_variants": [
        "きる"
      ],
      "romaji": "kiru",
      "part_of_speech": "verb",
      "meaning_zh": "切；剪；挂断",
      "senses_zh": [
        "切；剪",
        "挂断"
      ],
      "kanji_readings": [
        {
          "form": "切る",
          "reading": "きる"
        }
      ],
      "examples": [
        {
          "ja": "紙をはさみで切ります。",
          "zh": "用剪刀剪纸。",
          "focus": ["切り"],
          "zhFocus": [{"after": "用剪刀", "text": "剪"}]
        },
        {
          "ja": "野菜を小さく切ります。",
          "zh": "把蔬菜切小。",
          "focus": ["切り"],
          "zhFocus": ["切"]
        },
        {
          "ja": "電話を切りました。",
          "zh": "挂了电话。",
          "focus": ["切り"],
          "zhFocus": ["挂"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-210",
      "jlpt": "N5",
      "headword": "着る",
      "source_form": "着る",
      "variants": [
        "着る"
      ],
      "reading": "きる",
      "reading_variants": [
        "きる"
      ],
      "romaji": "kiru",
      "part_of_speech": "verb",
      "meaning_zh": "穿（上衣、外套、连衣裙、和服等）",
      "kanji_readings": [
        {
          "form": "着る",
          "reading": "きる"
        }
      ],
      "examples": [
        {
          "ja": "寒いので、セーターを着ます。",
          "zh": "因为冷，所以穿毛衣。",
          "focus": ["着"],
          "zhFocus": ["穿"]
        },
        {
          "ja": "今日はコートを着ています。",
          "zh": "今天穿着外套。",
          "focus": ["着"],
          "zhFocus": ["穿"]
        },
        {
          "ja": "新しい服を着ました。",
          "zh": "穿了新衣服。",
          "focus": ["着"],
          "zhFocus": ["穿"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-211",
      "jlpt": "N5",
      "headword": "きれい",
      "source_form": "綺麗",
      "variants": [
        "きれい"
      ],
      "reading": "きれい",
      "reading_variants": [
        "きれい"
      ],
      "romaji": "kirei",
      "part_of_speech": "na-adjective",
      "meaning_zh": "漂亮的；干净的",
      "senses_zh": [
        "漂亮的",
        "干净的"
      ],
      "kanji_readings": [],
      "examples": [
        {
          "ja": "この花はきれいです。",
          "zh": "这朵花很漂亮。",
          "focus": ["きれい"],
          "zhFocus": ["漂亮"]
        },
        {
          "ja": "部屋をきれいに掃除しました。",
          "zh": "把房间打扫干净了。",
          "focus": ["きれい"],
          "zhFocus": ["干净"]
        },
        {
          "ja": "夜の空は星がきれいです。",
          "zh": "夜空中的星星很美。",
          "focus": ["きれい"],
          "zhFocus": ["美"]
        }
      ],
      "note_zh": "已把旧写法/不常用写法规范为现代常用写法；原始写法保留在 source_form。"
    },
    {
      "id": "n5-212",
      "jlpt": "N5",
      "headword": "キログラム",
      "source_form": "キロ; キログラム",
      "variants": [
        "キログラム",
        "キロ"
      ],
      "reading": "キログラム",
      "reading_variants": [
        "キログラム"
      ],
      "romaji": "kiroguramu",
      "part_of_speech": "noun",
      "meaning_zh": "公斤；千克",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "りんごを一キログラム買いました。",
          "zh": "买了一公斤苹果。",
          "focus": ["キログラム"],
          "zhFocus": ["公斤"]
        },
        {
          "ja": "この荷物は五キログラムです。",
          "zh": "这件行李重五公斤。",
          "focus": ["キログラム"],
          "zhFocus": ["公斤"]
        },
        {
          "ja": "肉を二キログラムください。",
          "zh": "请给我两公斤肉。",
          "focus": ["キログラム"],
          "zhFocus": ["公斤"]
        }
      ],
      "note_zh": "「キロ」也可作口语简称，但离开上下文时可能指千克或千米；本词条使用完整词形。"
    },
    {
      "id": "n5-213",
      "jlpt": "N5",
      "headword": "キロメートル",
      "source_form": "キロ; キロメートル",
      "variants": [
        "キロメートル",
        "キロ"
      ],
      "reading": "キロメートル",
      "reading_variants": [
        "キロメートル"
      ],
      "romaji": "kiromeetoru",
      "part_of_speech": "noun",
      "meaning_zh": "公里；千米",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "駅まで二キロメートルです。",
          "zh": "到车站有两公里。",
          "focus": ["キロメートル"],
          "zhFocus": ["公里"]
        },
        {
          "ja": "毎日五キロメートル歩きます。",
          "zh": "每天走五公里。",
          "focus": ["キロメートル"],
          "zhFocus": ["公里"]
        },
        {
          "ja": "学校はここから一キロメートルです。",
          "zh": "学校离这里一公里。",
          "focus": ["キロメートル"],
          "zhFocus": ["公里"]
        }
      ],
      "note_zh": "「キロ」也可作口语简称，但离开上下文时可能指千克或千米；本词条使用完整词形。"
    },
    {
      "id": "n5-214",
      "jlpt": "N5",
      "headword": "銀行",
      "source_form": "銀行",
      "variants": [
        "銀行"
      ],
      "reading": "ぎんこう",
      "reading_variants": [
        "ぎんこう"
      ],
      "romaji": "ginkou",
      "part_of_speech": "noun",
      "meaning_zh": "银行",
      "kanji_readings": [
        {
          "form": "銀行",
          "reading": "ぎんこう"
        }
      ],
      "examples": [
        {
          "ja": "銀行へ行きます。",
          "zh": "去银行。",
          "focus": ["銀行"],
          "zhFocus": ["银行"]
        },
        {
          "ja": "銀行は駅の近くです。",
          "zh": "银行在车站附近。",
          "focus": ["銀行"],
          "zhFocus": ["银行"]
        },
        {
          "ja": "銀行で友達に会います。",
          "zh": "在银行见朋友。",
          "focus": ["銀行"],
          "zhFocus": ["银行"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-215",
      "jlpt": "N5",
      "headword": "金曜日",
      "source_form": "金曜日",
      "variants": [
        "金曜日"
      ],
      "reading": "きんようび",
      "reading_variants": [
        "きんようび"
      ],
      "romaji": "kin'youbi",
      "part_of_speech": "noun",
      "meaning_zh": "星期五",
      "kanji_readings": [
        {
          "form": "金曜日",
          "reading": "きんようび"
        }
      ],
      "examples": [
        {
          "ja": "金曜日に学校へ行きます。",
          "zh": "星期五去学校。",
          "focus": ["金曜日"],
          "zhFocus": ["星期五"]
        },
        {
          "ja": "金曜日は休みです。",
          "zh": "星期五休息。",
          "focus": ["金曜日"],
          "zhFocus": ["星期五"]
        },
        {
          "ja": "次の金曜日に会いましょう。",
          "zh": "下个星期五见吧。",
          "focus": ["金曜日"],
          "zhFocus": ["星期五"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-216",
      "jlpt": "N5",
      "headword": "九",
      "source_form": "九",
      "variants": [
        "九"
      ],
      "reading": "く",
      "reading_variants": [
        "く"
      ],
      "romaji": "ku",
      "part_of_speech": "numeral",
      "meaning_zh": "九（用于九点、九月等）",
      "kanji_readings": [
        {
          "form": "九",
          "reading": "く"
        }
      ],
      "examples": [
        {
          "ja": "学校は九時に始まります。",
          "zh": "学校九点开始上课。",
          "focus": ["九"],
          "zhFocus": ["九"]
        },
        {
          "ja": "九月に日本へ行きます。",
          "zh": "九月去日本。",
          "focus": ["九"],
          "zhFocus": ["九"]
        },
        {
          "ja": "今は九時です。",
          "zh": "现在是九点。",
          "focus": ["九"],
          "zhFocus": ["九"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-217",
      "jlpt": "N5",
      "headword": "薬",
      "source_form": "薬",
      "variants": [
        "薬"
      ],
      "reading": "くすり",
      "reading_variants": [
        "くすり"
      ],
      "romaji": "kusuri",
      "part_of_speech": "noun",
      "meaning_zh": "药",
      "kanji_readings": [
        {
          "form": "薬",
          "reading": "くすり"
        }
      ],
      "examples": [
        {
          "ja": "薬を飲みます。",
          "zh": "吃药。",
          "focus": ["薬"],
          "zhFocus": ["药"]
        },
        {
          "ja": "この薬を一日三回飲んでください。",
          "zh": "请一天吃三次这个药。",
          "focus": ["薬"],
          "zhFocus": ["药"]
        },
        {
          "ja": "薬をください。",
          "zh": "请给我药。",
          "focus": ["薬"],
          "zhFocus": ["药"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-218",
      "jlpt": "N5",
      "headword": "ください",
      "source_form": "下さい",
      "variants": [
        "ください"
      ],
      "reading": "ください",
      "reading_variants": [
        "ください"
      ],
      "romaji": "kudasai",
      "part_of_speech": "expression",
      "meaning_zh": "请给我；请……",
      "senses_zh": [
        "请给我",
        "请……"
      ],
      "kanji_readings": [],
      "examples": [
        {
          "ja": "水をください。",
          "zh": "请给我水。",
          "focus": ["ください"],
          "zhFocus": ["请给我"]
        },
        {
          "ja": "切符を二枚ください。",
          "zh": "请给我两张票。",
          "focus": ["ください"],
          "zhFocus": ["请给我"]
        },
        {
          "ja": "すみません、メニューを見せてください。",
          "zh": "不好意思，请给我看一下菜单。",
          "focus": ["ください"],
          "zhFocus": ["请"]
        }
      ],
      "note_zh": "用于提出请求，常接动词て形；不是い形容词。"
    },
    {
      "id": "n5-219",
      "jlpt": "N5",
      "headword": "果物",
      "source_form": "果物",
      "variants": [
        "果物"
      ],
      "reading": "くだもの",
      "reading_variants": [
        "くだもの"
      ],
      "romaji": "kudamono",
      "part_of_speech": "noun",
      "meaning_zh": "水果",
      "kanji_readings": [
        {
          "form": "果物",
          "reading": "くだもの"
        }
      ],
      "examples": [
        {
          "ja": "果物はどこで売っていますか。",
          "zh": "水果在哪里卖？",
          "focus": ["果物"],
          "zhFocus": ["水果"]
        },
        {
          "ja": "朝ご飯に果物を食べます。",
          "zh": "早饭吃水果。",
          "focus": ["果物"],
          "zhFocus": ["水果"]
        },
        {
          "ja": "この果物はとても甘いです。",
          "zh": "这个水果很甜。",
          "focus": ["果物"],
          "zhFocus": ["水果"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-220",
      "jlpt": "N5",
      "headword": "口",
      "source_form": "口",
      "variants": [
        "口"
      ],
      "reading": "くち",
      "reading_variants": [
        "くち"
      ],
      "romaji": "kuchi",
      "part_of_speech": "noun",
      "meaning_zh": "嘴；口",
      "kanji_readings": [
        {
          "form": "口",
          "reading": "くち"
        }
      ],
      "examples": [
        {
          "ja": "口を開けてください。",
          "zh": "请张开嘴。",
          "focus": ["口"],
          "zhFocus": ["嘴"]
        },
        {
          "ja": "口が痛いです。",
          "zh": "嘴疼。",
          "focus": ["口"],
          "zhFocus": ["嘴"]
        },
        {
          "ja": "口で言ってください。",
          "zh": "请口头说出来。",
          "focus": ["口"],
          "zhFocus": ["口"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-221",
      "jlpt": "N5",
      "headword": "靴",
      "source_form": "靴",
      "variants": [
        "靴"
      ],
      "reading": "くつ",
      "reading_variants": [
        "くつ"
      ],
      "romaji": "kutsu",
      "part_of_speech": "noun",
      "meaning_zh": "鞋",
      "kanji_readings": [
        {
          "form": "靴",
          "reading": "くつ"
        }
      ],
      "examples": [
        {
          "ja": "新しい靴を買いました。",
          "zh": "买了新鞋。",
          "focus": ["靴"],
          "zhFocus": ["鞋"]
        },
        {
          "ja": "靴は玄関で脱ぎます。",
          "zh": "在玄关脱鞋。",
          "focus": ["靴"],
          "zhFocus": ["鞋"]
        },
        {
          "ja": "雨の日はこの靴をはきます。",
          "zh": "下雨天穿这双鞋。",
          "focus": ["靴"],
          "zhFocus": ["鞋"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-222",
      "jlpt": "N5",
      "headword": "靴下",
      "source_form": "靴下",
      "variants": [
        "靴下"
      ],
      "reading": "くつした",
      "reading_variants": [
        "くつした"
      ],
      "romaji": "kutsushita",
      "part_of_speech": "noun",
      "meaning_zh": "袜子",
      "kanji_readings": [
        {
          "form": "靴下",
          "reading": "くつした"
        }
      ],
      "examples": [
        {
          "ja": "靴下をはきます。",
          "zh": "穿袜子。",
          "focus": ["靴下"],
          "zhFocus": ["袜子"]
        },
        {
          "ja": "新しい靴下を買いました。",
          "zh": "买了新袜子。",
          "focus": ["靴下"],
          "zhFocus": ["袜子"]
        },
        {
          "ja": "白い靴下をはいています。",
          "zh": "穿着白袜子。",
          "focus": ["靴下"],
          "zhFocus": ["袜子"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-223",
      "jlpt": "N5",
      "headword": "国",
      "source_form": "国",
      "variants": [
        "国"
      ],
      "reading": "くに",
      "reading_variants": [
        "くに"
      ],
      "romaji": "kuni",
      "part_of_speech": "noun",
      "meaning_zh": "国家；故乡",
      "senses_zh": [
        "国家",
        "故乡"
      ],
      "kanji_readings": [
        {
          "form": "国",
          "reading": "くに"
        }
      ],
      "examples": [
        {
          "ja": "国へ帰ります。",
          "zh": "回国。",
          "focus": ["国"],
          "zhFocus": ["国"]
        },
        {
          "ja": "あなたの国はどこですか。",
          "zh": "你的国家是哪里？",
          "focus": ["国"],
          "zhFocus": ["国家"]
        },
        {
          "ja": "日本はきれいな国です。",
          "zh": "日本是美丽的国家。",
          "focus": ["国"],
          "zhFocus": ["国家"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-224",
      "jlpt": "N5",
      "headword": "曇り",
      "source_form": "曇り",
      "variants": [
        "曇り"
      ],
      "reading": "くもり",
      "reading_variants": [
        "くもり"
      ],
      "romaji": "kumori",
      "part_of_speech": "noun",
      "meaning_zh": "阴天；多云",
      "kanji_readings": [
        {
          "form": "曇り",
          "reading": "くもり"
        }
      ],
      "examples": [
        {
          "ja": "今日は朝から曇りです。",
          "zh": "今天从早上起就是阴天。",
          "focus": ["曇り"],
          "zhFocus": ["阴天"]
        },
        {
          "ja": "曇りの日は空が暗いです。",
          "zh": "阴天时天空很暗。",
          "focus": ["曇り"],
          "zhFocus": ["阴天"]
        },
        {
          "ja": "明日の天気は曇りです。",
          "zh": "明天是阴天。",
          "focus": ["曇り"],
          "zhFocus": ["阴天"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-225",
      "jlpt": "N5",
      "headword": "曇る",
      "source_form": "曇る",
      "variants": [
        "曇る"
      ],
      "reading": "くもる",
      "reading_variants": [
        "くもる"
      ],
      "romaji": "kumoru",
      "part_of_speech": "verb",
      "meaning_zh": "变阴；多云",
      "kanji_readings": [
        {
          "form": "曇る",
          "reading": "くもる"
        }
      ],
      "examples": [
        {
          "ja": "今日は空が曇っています。",
          "zh": "今天阴天。",
          "focus": ["曇っ"],
          "zhFocus": ["阴"]
        },
        {
          "ja": "午後から曇りました。",
          "zh": "下午开始阴了。",
          "focus": ["曇り"],
          "zhFocus": ["阴"]
        },
        {
          "ja": "明日は曇ると思います。",
          "zh": "我觉得明天会阴。",
          "focus": ["曇る"],
          "zhFocus": ["阴"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-226",
      "jlpt": "N5",
      "headword": "暗い",
      "source_form": "暗い",
      "variants": [
        "暗い"
      ],
      "reading": "くらい",
      "reading_variants": [
        "くらい"
      ],
      "romaji": "kurai",
      "part_of_speech": "i-adjective",
      "meaning_zh": "暗的；阴沉的",
      "senses_zh": [
        "暗的",
        "阴沉的"
      ],
      "kanji_readings": [
        {
          "form": "暗い",
          "reading": "くらい"
        }
      ],
      "examples": [
        {
          "ja": "この部屋は暗いです。",
          "zh": "这个房间很暗。",
          "focus": ["暗い"],
          "zhFocus": ["暗"]
        },
        {
          "ja": "夜の道はとても暗いです。",
          "zh": "夜里的路很暗。",
          "focus": ["暗い"],
          "zhFocus": ["暗"]
        },
        {
          "ja": "暗い道を一人で歩かないでください。",
          "zh": "请不要独自走在昏暗的路上。",
          "focus": ["暗い"],
          "zhFocus": ["暗"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-227",
      "jlpt": "N5",
      "headword": "～くらい",
      "source_form": "～くらい; ぐらい",
      "variants": [
        "～くらい",
        "ぐらい"
      ],
      "reading": "～くらい",
      "reading_variants": [
        "～くらい",
        "ぐらい"
      ],
      "romaji": "~kurai",
      "part_of_speech": "particle",
      "meaning_zh": "大约；左右",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "十分くらい待ちました。",
          "zh": "等了十分钟左右。",
          "focus": ["くらい"],
          "zhFocus": ["左右"]
        },
        {
          "ja": "三人ぐらい来ます。",
          "zh": "大约三个人来。",
          "focus": ["ぐらい"],
          "zhFocus": ["大约"]
        },
        {
          "ja": "百円くらいです。",
          "zh": "大约一百日元。",
          "focus": ["くらい"],
          "zhFocus": ["大约"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-228",
      "jlpt": "N5",
      "headword": "クラス",
      "source_form": "クラス",
      "variants": [
        "クラス"
      ],
      "reading": "クラス",
      "reading_variants": [
        "クラス"
      ],
      "romaji": "kurasu",
      "part_of_speech": "noun",
      "meaning_zh": "班级；课",
      "senses_zh": [
        "班级",
        "课"
      ],
      "kanji_readings": [],
      "examples": [
        {
          "ja": "私のクラスは二十人です。",
          "zh": "我的班有二十个人。",
          "focus": ["クラス"],
          "zhFocus": ["班"]
        },
        {
          "ja": "日本語のクラスに行きます。",
          "zh": "去上日语课。",
          "focus": ["クラス"],
          "zhFocus": ["课"]
        },
        {
          "ja": "このクラスは楽しいです。",
          "zh": "在这个班上课很开心。",
          "focus": ["クラス"],
          "zhFocus": ["班"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-229",
      "jlpt": "N5",
      "headword": "グラム",
      "source_form": "グラム",
      "variants": [
        "グラム"
      ],
      "reading": "グラム",
      "reading_variants": [
        "グラム"
      ],
      "romaji": "guramu",
      "part_of_speech": "noun",
      "meaning_zh": "克",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "砂糖を百グラムください。",
          "zh": "请给我一百克糖。",
          "focus": ["グラム"],
          "zhFocus": ["克"]
        },
        {
          "ja": "肉を三百グラム買いました。",
          "zh": "买了三百克肉。",
          "focus": ["グラム"],
          "zhFocus": ["克"]
        },
        {
          "ja": "これは五十グラムです。",
          "zh": "这是五十克。",
          "focus": ["グラム"],
          "zhFocus": ["克"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-230",
      "jlpt": "N5",
      "headword": "来る",
      "source_form": "来る",
      "variants": [
        "来る"
      ],
      "reading": "くる",
      "reading_variants": [
        "くる"
      ],
      "romaji": "kuru",
      "part_of_speech": "verb",
      "meaning_zh": "来",
      "kanji_readings": [
        {
          "form": "来る",
          "reading": "くる"
        }
      ],
      "examples": [
        {
          "ja": "友達が家に来ます。",
          "zh": "朋友来我家。",
          "focus": ["来"],
          "zhFocus": ["来"]
        },
        {
          "ja": "明日、先生が来ます。",
          "zh": "明天老师会来。",
          "focus": ["来"],
          "zhFocus": ["来"]
        },
        {
          "ja": "ここへ来てください。",
          "zh": "请来这里。",
          "focus": ["来"],
          "zhFocus": ["来"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-231",
      "jlpt": "N5",
      "headword": "車",
      "source_form": "車",
      "variants": [
        "車"
      ],
      "reading": "くるま",
      "reading_variants": [
        "くるま"
      ],
      "romaji": "kuruma",
      "part_of_speech": "noun",
      "meaning_zh": "车；汽车（日常说法）",
      "kanji_readings": [
        {
          "form": "車",
          "reading": "くるま"
        }
      ],
      "examples": [
        {
          "ja": "父は毎日車で会社へ行きます。",
          "zh": "爸爸每天开车去公司。",
          "focus": ["車"],
          "zhFocus": ["车"]
        },
        {
          "ja": "この道は車が多いです。",
          "zh": "这条路车很多。",
          "focus": ["車"],
          "zhFocus": ["车"]
        },
        {
          "ja": "車を駐車場に止めました。",
          "zh": "把车停在了停车场。",
          "focus": ["車"],
          "zhFocus": ["车"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-232",
      "jlpt": "N5",
      "headword": "黒",
      "source_form": "黒",
      "variants": [
        "黒"
      ],
      "reading": "くろ",
      "reading_variants": [
        "くろ"
      ],
      "romaji": "kuro",
      "part_of_speech": "noun",
      "meaning_zh": "黑色",
      "kanji_readings": [
        {
          "form": "黒",
          "reading": "くろ"
        }
      ],
      "examples": [
        {
          "ja": "黒のペンを使います。",
          "zh": "使用黑色的笔。",
          "focus": ["黒"],
          "zhFocus": ["黑色"]
        },
        {
          "ja": "黒が好きです。",
          "zh": "我喜欢黑色。",
          "focus": ["黒"],
          "zhFocus": ["黑色"]
        },
        {
          "ja": "この靴は黒です。",
          "zh": "这双鞋是黑色的。",
          "focus": ["黒"],
          "zhFocus": ["黑色"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-233",
      "jlpt": "N5",
      "headword": "黒い",
      "source_form": "黒い",
      "variants": [
        "黒い"
      ],
      "reading": "くろい",
      "reading_variants": [
        "くろい"
      ],
      "romaji": "kuroi",
      "part_of_speech": "i-adjective",
      "meaning_zh": "黑色的",
      "kanji_readings": [
        {
          "form": "黒い",
          "reading": "くろい"
        }
      ],
      "examples": [
        {
          "ja": "この靴は黒いです。",
          "zh": "这双鞋是黑色的。",
          "focus": ["黒い"],
          "zhFocus": ["黑色"]
        },
        {
          "ja": "黒い猫がいすの下にいます。",
          "zh": "椅子下面有一只黑猫。",
          "focus": ["黒い"],
          "zhFocus": ["黑"]
        },
        {
          "ja": "黒いペンで書いてください。",
          "zh": "请用黑笔写。",
          "focus": ["黒い"],
          "zhFocus": ["黑"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-234",
      "jlpt": "N5",
      "headword": "警官",
      "source_form": "警官",
      "variants": [
        "警官"
      ],
      "reading": "けいかん",
      "reading_variants": [
        "けいかん"
      ],
      "romaji": "keikan",
      "part_of_speech": "noun",
      "meaning_zh": "警察",
      "kanji_readings": [
        {
          "form": "警官",
          "reading": "けいかん"
        }
      ],
      "examples": [
        {
          "ja": "交番に警官が二人います。",
          "zh": "派出所里有两名警察。",
          "focus": ["警官"],
          "zhFocus": ["警察"]
        },
        {
          "ja": "兄は警官になりました。",
          "zh": "哥哥当了警察。",
          "focus": ["警官"],
          "zhFocus": ["警察"]
        },
        {
          "ja": "駅前の警官が道を教えてくれました。",
          "zh": "车站前的警察给我指了路。",
          "focus": ["警官"],
          "zhFocus": ["警察"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-235",
      "jlpt": "N5",
      "headword": "今朝",
      "source_form": "今朝",
      "variants": [
        "今朝"
      ],
      "reading": "けさ",
      "reading_variants": [
        "けさ"
      ],
      "romaji": "kesa",
      "part_of_speech": "noun",
      "meaning_zh": "今天早上",
      "kanji_readings": [
        {
          "form": "今朝",
          "reading": "けさ"
        }
      ],
      "examples": [
        {
          "ja": "今朝、六時に起きました。",
          "zh": "今天早上六点起床了。",
          "focus": ["今朝"],
          "zhFocus": ["今天早上"]
        },
        {
          "ja": "今朝はパンを食べました。",
          "zh": "今天早上吃了面包。",
          "focus": ["今朝"],
          "zhFocus": ["今天早上"]
        },
        {
          "ja": "今朝、駅で先生に会いました。",
          "zh": "今天早上在车站遇到了老师。",
          "focus": ["今朝"],
          "zhFocus": ["今天早上"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-236",
      "jlpt": "N5",
      "headword": "消す",
      "source_form": "消す",
      "variants": [
        "消す"
      ],
      "reading": "けす",
      "reading_variants": [
        "けす"
      ],
      "romaji": "kesu",
      "part_of_speech": "verb",
      "meaning_zh": "关掉；擦掉；删除",
      "senses_zh": [
        "关掉",
        "擦掉；删除"
      ],
      "kanji_readings": [
        {
          "form": "消す",
          "reading": "けす"
        }
      ],
      "examples": [
        {
          "ja": "電気を消してください。",
          "zh": "请关灯。",
          "focus": ["消し"],
          "zhFocus": ["关"]
        },
        {
          "ja": "黒板の字を消します。",
          "zh": "擦掉黑板上的字。",
          "focus": ["消し"],
          "zhFocus": ["擦掉"]
        },
        {
          "ja": "テレビを消しました。",
          "zh": "关掉了电视。",
          "focus": ["消し"],
          "zhFocus": ["关掉"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-237",
      "merged_source_ids": ["n4-207"],
      "jlpt": "N5",
      "headword": "結構",
      "source_form": "結構",
      "variants": [
        "結構",
        "けっこう"
      ],
      "reading": "けっこう",
      "reading_variants": [
        "けっこう"
      ],
      "romaji": "kekkou",
      "part_of_speech": "na-adjective/adverb/expression",
      "meaning_zh": "很好；可以；足够；不用了；相当",
      "senses_zh": [
        "很好；可以",
        "足够；不用了",
        "相当"
      ],
      "kanji_readings": [
        {
          "form": "結構",
          "reading": "けっこう"
        }
      ],
      "examples": [
        {
          "ja": "結構です。",
          "zh": "不用了。",
          "focus": ["結構"],
          "zhFocus": ["不用了"]
        },
        {
          "ja": "この店はけっこう安いです。",
          "zh": "这家店相当便宜。",
          "focus": ["けっこう"],
          "zhFocus": ["相当"]
        },
        {
          "ja": "もう結構です。",
          "zh": "已经够了。",
          "focus": ["結構"],
          "zhFocus": ["够"]
        }
      ],
      "note_zh": "「結構です」可表示“很好／可以”，也常用来礼貌地拒绝（“不用了”）；表示“相当”的副词用法常写假名「けっこう」。"
    },
    {
      "id": "n5-238",
      "jlpt": "N5",
      "headword": "結婚",
      "source_form": "結婚",
      "variants": [
        "結婚"
      ],
      "reading": "けっこん",
      "reading_variants": [
        "けっこん (する)"
      ],
      "romaji": "kekkon",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "结婚",
      "kanji_readings": [
        {
          "form": "結婚",
          "reading": "けっこん"
        }
      ],
      "examples": [
        {
          "ja": "姉は来年結婚します。",
          "zh": "姐姐明年结婚。",
          "focus": ["結婚"],
          "zhFocus": ["结婚"]
        },
        {
          "ja": "友達が結婚しました。",
          "zh": "朋友结婚了。",
          "focus": ["結婚"],
          "zhFocus": ["结婚"]
        },
        {
          "ja": "結婚して十年です。",
          "zh": "结婚十年了。",
          "focus": ["結婚"],
          "zhFocus": ["结婚"]
        }
      ],
      "note_zh": "可作名词，也常与「する」构成动词。"
    },
    {
      "id": "n5-239",
      "jlpt": "N5",
      "headword": "月曜日",
      "source_form": "月曜日",
      "variants": [
        "月曜日"
      ],
      "reading": "げつようび",
      "reading_variants": [
        "げつようび"
      ],
      "romaji": "getsuyoubi",
      "part_of_speech": "noun",
      "meaning_zh": "星期一",
      "kanji_readings": [
        {
          "form": "月曜日",
          "reading": "げつようび"
        }
      ],
      "examples": [
        {
          "ja": "月曜日に学校へ行きます。",
          "zh": "星期一去学校。",
          "focus": ["月曜日"],
          "zhFocus": ["星期一"]
        },
        {
          "ja": "月曜日は休みです。",
          "zh": "星期一休息。",
          "focus": ["月曜日"],
          "zhFocus": ["星期一"]
        },
        {
          "ja": "次の月曜日に会いましょう。",
          "zh": "下个星期一见吧。",
          "focus": ["月曜日"],
          "zhFocus": ["星期一"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-240",
      "jlpt": "N5",
      "headword": "玄関",
      "source_form": "玄関",
      "variants": [
        "玄関"
      ],
      "reading": "げんかん",
      "reading_variants": [
        "げんかん"
      ],
      "romaji": "genkan",
      "part_of_speech": "noun",
      "meaning_zh": "玄关；入口",
      "kanji_readings": [
        {
          "form": "玄関",
          "reading": "げんかん"
        }
      ],
      "examples": [
        {
          "ja": "玄関で靴を脱ぎます。",
          "zh": "在玄关脱鞋。",
          "focus": ["玄関"],
          "zhFocus": ["玄关"]
        },
        {
          "ja": "玄関に傘があります。",
          "zh": "玄关处有一把伞。",
          "focus": ["玄関"],
          "zhFocus": ["玄关"]
        },
        {
          "ja": "母が玄関まで迎えに来ました。",
          "zh": "妈妈到玄关来接我。",
          "focus": ["玄関"],
          "zhFocus": ["玄关"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-241",
      "jlpt": "N5",
      "headword": "元気",
      "source_form": "元気",
      "variants": [
        "元気"
      ],
      "reading": "げんき",
      "reading_variants": [
        "げんき"
      ],
      "romaji": "genki",
      "part_of_speech": "na-adjective",
      "meaning_zh": "健康；有精神",
      "kanji_readings": [
        {
          "form": "元気",
          "reading": "げんき"
        }
      ],
      "examples": [
        {
          "ja": "母は元気です。",
          "zh": "母亲很健康。",
          "focus": ["元気"],
          "zhFocus": ["健康"]
        },
        {
          "ja": "元気な子供が遊んでいます。",
          "zh": "有精神的孩子在玩。",
          "focus": ["元気"],
          "zhFocus": ["有精神"]
        },
        {
          "ja": "お元気ですか。",
          "zh": "你好吗？",
          "focus": ["元気"],
          "zhFocus": ["好"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-242",
      "jlpt": "N5",
      "headword": "～個",
      "source_form": "～個",
      "variants": [
        "～個"
      ],
      "reading": "～こ",
      "reading_variants": [
        "～こ"
      ],
      "romaji": "~ko",
      "part_of_speech": "counter/suffix",
      "meaning_zh": "……个（小物品计数）",
      "kanji_readings": [
        {
          "form": "～個",
          "reading": "～こ"
        }
      ],
      "examples": [
        {
          "ja": "りんごを三個買いました。",
          "zh": "买了三个苹果。",
          "focus": ["個"],
          "zhFocus": ["个"]
        },
        {
          "ja": "卵を二個使います。",
          "zh": "用两个鸡蛋。",
          "focus": ["個"],
          "zhFocus": ["个"]
        },
        {
          "ja": "かばんが一個あります。",
          "zh": "有一个包。",
          "focus": ["個"],
          "zhFocus": ["个"]
        }
      ],
      "note_zh": "接在数字或名词后使用；例句中去掉了前缀符号「～」。"
    },
    {
      "id": "n5-243",
      "jlpt": "N5",
      "headword": "五",
      "source_form": "五",
      "variants": [
        "五"
      ],
      "reading": "ご",
      "reading_variants": [
        "ご"
      ],
      "romaji": "go",
      "part_of_speech": "numeral",
      "meaning_zh": "五",
      "kanji_readings": [
        {
          "form": "五",
          "reading": "ご"
        }
      ],
      "examples": [
        {
          "ja": "二たす三は五です。",
          "zh": "二加三等于五。",
          "focus": ["五"],
          "zhFocus": ["五"]
        },
        {
          "ja": "答えは五です。",
          "zh": "答案是五。",
          "focus": ["五"],
          "zhFocus": ["五"]
        },
        {
          "ja": "紙に五と書きました。",
          "zh": "在纸上写了五。",
          "focus": ["五"],
          "zhFocus": ["五"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-244",
      "jlpt": "N5",
      "headword": "～語",
      "source_form": "～語",
      "variants": [
        "～語"
      ],
      "reading": "～ご",
      "reading_variants": [
        "～ご"
      ],
      "romaji": "~go",
      "part_of_speech": "suffix/pattern",
      "meaning_zh": "……语；……语言",
      "kanji_readings": [
        {
          "form": "～語",
          "reading": "～ご"
        }
      ],
      "examples": [
        {
          "ja": "日本語を勉強します。",
          "zh": "学习日语。",
          "focus": ["語"],
          "zhFocus": ["语"]
        },
        {
          "ja": "英語を話します。",
          "zh": "说英语。",
          "focus": ["語"],
          "zhFocus": ["语"]
        },
        {
          "ja": "中国語が少し分かります。",
          "zh": "懂一点中文。",
          "focus": ["語"],
          "zhFocus": ["文"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-245",
      "jlpt": "N5",
      "headword": "公園",
      "source_form": "公園",
      "variants": [
        "公園"
      ],
      "reading": "こうえん",
      "reading_variants": [
        "こうえん"
      ],
      "romaji": "kouen",
      "part_of_speech": "noun",
      "meaning_zh": "公园",
      "kanji_readings": [
        {
          "form": "公園",
          "reading": "こうえん"
        }
      ],
      "examples": [
        {
          "ja": "公園へ行きます。",
          "zh": "去公园。",
          "focus": ["公園"],
          "zhFocus": ["公园"]
        },
        {
          "ja": "公園は駅の近くです。",
          "zh": "公园在车站附近。",
          "focus": ["公園"],
          "zhFocus": ["公园"]
        },
        {
          "ja": "公園で友達に会います。",
          "zh": "在公园见朋友。",
          "focus": ["公園"],
          "zhFocus": ["公园"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-246",
      "jlpt": "N5",
      "headword": "交差点",
      "source_form": "交差点",
      "variants": [
        "交差点"
      ],
      "reading": "こうさてん",
      "reading_variants": [
        "こうさてん"
      ],
      "romaji": "kousaten",
      "part_of_speech": "noun",
      "meaning_zh": "十字路口；交叉路口",
      "kanji_readings": [
        {
          "form": "交差点",
          "reading": "こうさてん"
        }
      ],
      "examples": [
        {
          "ja": "交差点を右に曲がります。",
          "zh": "在十字路口向右转。",
          "focus": ["交差点"],
          "zhFocus": ["十字路口"]
        },
        {
          "ja": "交差点で止まってください。",
          "zh": "请在路口停下。",
          "focus": ["交差点"],
          "zhFocus": ["路口"]
        },
        {
          "ja": "駅は交差点の近くです。",
          "zh": "车站在十字路口附近。",
          "focus": ["交差点"],
          "zhFocus": ["十字路口"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-247",
      "jlpt": "N5",
      "headword": "紅茶",
      "source_form": "紅茶",
      "variants": [
        "紅茶"
      ],
      "reading": "こうちゃ",
      "reading_variants": [
        "こうちゃ"
      ],
      "romaji": "koucha",
      "part_of_speech": "noun",
      "meaning_zh": "红茶",
      "kanji_readings": [
        {
          "form": "紅茶",
          "reading": "こうちゃ"
        }
      ],
      "examples": [
        {
          "ja": "紅茶を飲みます。",
          "zh": "喝红茶。",
          "focus": ["紅茶"],
          "zhFocus": ["红茶"]
        },
        {
          "ja": "紅茶に砂糖を入れますか。",
          "zh": "红茶里要加糖吗？",
          "focus": ["紅茶"],
          "zhFocus": ["红茶"]
        },
        {
          "ja": "コーヒーより紅茶のほうが好きです。",
          "zh": "比起咖啡，我更喜欢红茶。",
          "focus": ["紅茶"],
          "zhFocus": ["红茶"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-248",
      "jlpt": "N5",
      "headword": "交番",
      "source_form": "交番",
      "variants": [
        "交番"
      ],
      "reading": "こうばん",
      "reading_variants": [
        "こうばん"
      ],
      "romaji": "kouban",
      "part_of_speech": "noun",
      "meaning_zh": "派出所；警亭",
      "kanji_readings": [
        {
          "form": "交番",
          "reading": "こうばん"
        }
      ],
      "examples": [
        {
          "ja": "交番へ行きます。",
          "zh": "去派出所。",
          "focus": ["交番"],
          "zhFocus": ["派出所"]
        },
        {
          "ja": "交番は駅の近くです。",
          "zh": "派出所在车站附近。",
          "focus": ["交番"],
          "zhFocus": ["派出所"]
        },
        {
          "ja": "交番で道を聞きました。",
          "zh": "在派出所问了路。",
          "focus": ["交番"],
          "zhFocus": ["派出所"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-249",
      "jlpt": "N5",
      "headword": "声",
      "source_form": "声",
      "variants": [
        "声"
      ],
      "reading": "こえ",
      "reading_variants": [
        "こえ"
      ],
      "romaji": "koe",
      "part_of_speech": "noun",
      "meaning_zh": "声音；嗓音",
      "kanji_readings": [
        {
          "form": "声",
          "reading": "こえ"
        }
      ],
      "examples": [
        {
          "ja": "先生の声が聞こえます。",
          "zh": "听得到老师的声音。",
          "focus": ["声"],
          "zhFocus": ["声音"]
        },
        {
          "ja": "風邪で声が出ません。",
          "zh": "因为感冒发不出声音。",
          "focus": ["声"],
          "zhFocus": ["声音"]
        },
        {
          "ja": "声が小さいです。",
          "zh": "声音很小。",
          "focus": ["声"],
          "zhFocus": ["声音"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-250",
      "jlpt": "N5",
      "headword": "コート",
      "source_form": "コート",
      "variants": [
        "コート"
      ],
      "reading": "コート",
      "reading_variants": [
        "コート"
      ],
      "romaji": "kooto",
      "part_of_speech": "noun",
      "meaning_zh": "大衣；外套",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "寒いのでコートを着ます。",
          "zh": "因为冷，所以穿大衣。",
          "focus": ["コート"],
          "zhFocus": ["大衣"]
        },
        {
          "ja": "黒いコートを買いました。",
          "zh": "买了黑色大衣。",
          "focus": ["コート"],
          "zhFocus": ["大衣"]
        },
        {
          "ja": "コートを脱いでください。",
          "zh": "请脱下大衣。",
          "focus": ["コート"],
          "zhFocus": ["大衣"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-251",
      "jlpt": "N5",
      "headword": "コーヒー",
      "source_form": "コーヒー",
      "variants": [
        "コーヒー"
      ],
      "reading": "コーヒー",
      "reading_variants": [
        "コーヒー"
      ],
      "romaji": "koohii",
      "part_of_speech": "noun",
      "meaning_zh": "咖啡",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "コーヒーを飲みます。",
          "zh": "喝咖啡。",
          "focus": ["コーヒー"],
          "zhFocus": ["咖啡"]
        },
        {
          "ja": "コーヒーに牛乳を入れます。",
          "zh": "在咖啡里加牛奶。",
          "focus": ["コーヒー"],
          "zhFocus": ["咖啡"]
        },
        {
          "ja": "コーヒーを二つお願いします。",
          "zh": "请给我两杯咖啡。",
          "focus": ["コーヒー"],
          "zhFocus": ["咖啡"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-252",
      "jlpt": "N5",
      "headword": "ここ",
      "source_form": "ここ",
      "variants": [
        "ここ"
      ],
      "reading": "ここ",
      "reading_variants": [
        "ここ"
      ],
      "romaji": "koko",
      "part_of_speech": "pronoun/demonstrative",
      "meaning_zh": "这里",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "ここは図書館です。",
          "zh": "这里是图书馆。",
          "focus": ["ここ"],
          "zhFocus": ["这里"]
        },
        {
          "ja": "ここに名前を書いてください。",
          "zh": "请在这里写名字。",
          "focus": ["ここ"],
          "zhFocus": ["这里"]
        },
        {
          "ja": "ここで待ちます。",
          "zh": "在这里等。",
          "focus": ["ここ"],
          "zhFocus": ["这里"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-253",
      "jlpt": "N5",
      "headword": "午後",
      "source_form": "午後",
      "variants": [
        "午後"
      ],
      "reading": "ごご",
      "reading_variants": [
        "ごご"
      ],
      "romaji": "gogo",
      "part_of_speech": "noun",
      "meaning_zh": "下午",
      "kanji_readings": [
        {
          "form": "午後",
          "reading": "ごご"
        }
      ],
      "examples": [
        {
          "ja": "午後三時に会います。",
          "zh": "下午三点见。",
          "focus": ["午後"],
          "zhFocus": ["下午"]
        },
        {
          "ja": "午後は図書館へ行きます。",
          "zh": "下午去图书馆。",
          "focus": ["午後"],
          "zhFocus": ["下午"]
        },
        {
          "ja": "午後から雨です。",
          "zh": "下午开始下雨。",
          "focus": ["午後"],
          "zhFocus": ["下午"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-254",
      "jlpt": "N5",
      "headword": "九日",
      "source_form": "九日",
      "variants": [
        "九日"
      ],
      "reading": "ここのか",
      "reading_variants": [
        "ここのか"
      ],
      "romaji": "kokonoka",
      "part_of_speech": "noun",
      "meaning_zh": "九号；九天",
      "senses_zh": [
        "九号",
        "九天"
      ],
      "kanji_readings": [
        {
          "form": "九日",
          "reading": "ここのか"
        }
      ],
      "examples": [
        {
          "ja": "九日に会いましょう。",
          "zh": "九号见吧。",
          "focus": ["九日"],
          "zhFocus": ["九号"]
        },
        {
          "ja": "九日は休みです。",
          "zh": "九号休息。",
          "focus": ["九日"],
          "zhFocus": ["九号"]
        },
        {
          "ja": "九日に日本へ行きます。",
          "zh": "九号去日本。",
          "focus": ["九日"],
          "zhFocus": ["九号"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-255",
      "jlpt": "N5",
      "headword": "九つ",
      "source_form": "九つ",
      "variants": [
        "九つ"
      ],
      "reading": "ここのつ",
      "reading_variants": [
        "ここのつ"
      ],
      "romaji": "kokonotsu",
      "part_of_speech": "numeral/counter",
      "meaning_zh": "九个",
      "kanji_readings": [
        {
          "form": "九つ",
          "reading": "ここのつ"
        }
      ],
      "examples": [
        {
          "ja": "子供は今年で九つになります。",
          "zh": "孩子今年满九岁。",
          "focus": ["九つ"],
          "zhFocus": ["九岁"]
        },
        {
          "ja": "九つください。",
          "zh": "请给我九个。",
          "focus": ["九つ"],
          "zhFocus": ["九个"]
        },
        {
          "ja": "りんごが九つあります。",
          "zh": "有九个苹果。",
          "focus": ["九つ"],
          "zhFocus": ["九个"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-256",
      "jlpt": "N5",
      "headword": "午前",
      "source_form": "午前",
      "variants": [
        "午前"
      ],
      "reading": "ごぜん",
      "reading_variants": [
        "ごぜん"
      ],
      "romaji": "gozen",
      "part_of_speech": "noun",
      "meaning_zh": "上午",
      "kanji_readings": [
        {
          "form": "午前",
          "reading": "ごぜん"
        }
      ],
      "examples": [
        {
          "ja": "午前九時に始まります。",
          "zh": "上午九点开始。",
          "focus": ["午前"],
          "zhFocus": ["上午"]
        },
        {
          "ja": "午前中は忙しいです。",
          "zh": "上午很忙。",
          "focus": ["午前"],
          "zhFocus": ["上午"]
        },
        {
          "ja": "午前に学校へ行きます。",
          "zh": "上午去学校。",
          "focus": ["午前"],
          "zhFocus": ["上午"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-257",
      "jlpt": "N5",
      "headword": "答える",
      "source_form": "答える",
      "variants": [
        "答える"
      ],
      "reading": "こたえる",
      "reading_variants": [
        "こたえる"
      ],
      "romaji": "kotaeru",
      "part_of_speech": "verb",
      "meaning_zh": "回答",
      "kanji_readings": [
        {
          "form": "答える",
          "reading": "こたえる"
        }
      ],
      "examples": [
        {
          "ja": "質問に答えます。",
          "zh": "回答问题。",
          "focus": ["答え"],
          "zhFocus": ["回答"]
        },
        {
          "ja": "先生に大きな声で答えました。",
          "zh": "大声回答了老师。",
          "focus": ["答え"],
          "zhFocus": ["回答"]
        },
        {
          "ja": "名前を答えてください。",
          "zh": "请回答名字。",
          "focus": ["答え"],
          "zhFocus": ["回答"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-258",
      "jlpt": "N5",
      "headword": "こちら",
      "source_form": "こちら",
      "variants": [
        "こちら"
      ],
      "reading": "こちら",
      "reading_variants": [
        "こちら"
      ],
      "romaji": "kochira",
      "part_of_speech": "pronoun/demonstrative",
      "meaning_zh": "这边；这位（礼貌说法）",
      "senses_zh": [
        "这边",
        "这位（礼貌说法）"
      ],
      "kanji_readings": [],
      "examples": [
        {
          "ja": "こちらへどうぞ。",
          "zh": "请到这边。",
          "focus": ["こちら"],
          "zhFocus": ["这边"]
        },
        {
          "ja": "こちらは田中さんです。",
          "zh": "这位是田中。",
          "focus": ["こちら"],
          "zhFocus": ["这位"]
        },
        {
          "ja": "こちらで待ってください。",
          "zh": "请在这边等。",
          "focus": ["こちら"],
          "zhFocus": ["这边"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-259",
      "jlpt": "N5",
      "headword": "こっち",
      "source_form": "こっち",
      "variants": [
        "こっち"
      ],
      "reading": "こっち",
      "reading_variants": [
        "こっち"
      ],
      "romaji": "kotchi",
      "part_of_speech": "pronoun/demonstrative",
      "meaning_zh": "这边（口语）",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "こっちへ来てください。",
          "zh": "请到这边来。",
          "focus": ["こっち"],
          "zhFocus": ["这边"]
        },
        {
          "ja": "こっちが安いです。",
          "zh": "这边这个便宜。",
          "focus": ["こっち"],
          "zhFocus": ["这边"]
        },
        {
          "ja": "こっちで待ちます。",
          "zh": "在这边等。",
          "focus": ["こっち"],
          "zhFocus": ["这边"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-260",
      "jlpt": "N5",
      "headword": "コップ",
      "source_form": "コップ",
      "variants": [
        "コップ"
      ],
      "reading": "コップ",
      "reading_variants": [
        "コップ"
      ],
      "romaji": "koppu",
      "part_of_speech": "noun",
      "meaning_zh": "杯子；玻璃杯",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "洗ったコップをここに置いてください。",
          "zh": "请把洗好的杯子放在这里。",
          "focus": ["コップ"],
          "zhFocus": ["杯子"]
        },
        {
          "ja": "このコップは父のです。",
          "zh": "这个杯子是爸爸的。",
          "focus": ["コップ"],
          "zhFocus": ["杯子"]
        },
        {
          "ja": "コップに水を入れます。",
          "zh": "往杯子里倒水。",
          "focus": ["コップ"],
          "zhFocus": ["杯子"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-261",
      "jlpt": "N5",
      "headword": "今年",
      "source_form": "今年",
      "variants": [
        "今年"
      ],
      "reading": "ことし",
      "reading_variants": [
        "ことし"
      ],
      "romaji": "kotoshi",
      "part_of_speech": "noun",
      "meaning_zh": "今年",
      "kanji_readings": [
        {
          "form": "今年",
          "reading": "ことし"
        }
      ],
      "examples": [
        {
          "ja": "今年、日本へ行きます。",
          "zh": "今年去日本。",
          "focus": ["今年"],
          "zhFocus": ["今年"]
        },
        {
          "ja": "今年は忙しいです。",
          "zh": "今年很忙。",
          "focus": ["今年"],
          "zhFocus": ["今年"]
        },
        {
          "ja": "今年の夏は暑いです。",
          "zh": "今年夏天很热。",
          "focus": ["今年"],
          "zhFocus": ["今年"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-262",
      "jlpt": "N5",
      "headword": "言葉",
      "source_form": "言葉",
      "variants": [
        "言葉"
      ],
      "reading": "ことば",
      "reading_variants": [
        "ことば"
      ],
      "romaji": "kotoba",
      "part_of_speech": "noun",
      "meaning_zh": "词语；语言",
      "senses_zh": [
        "词语",
        "语言"
      ],
      "kanji_readings": [
        {
          "form": "言葉",
          "reading": "ことば"
        }
      ],
      "examples": [
        {
          "ja": "この言葉は子供でも分かります。",
          "zh": "这个词连孩子都懂。",
          "focus": ["言葉"],
          "zhFocus": ["词"]
        },
        {
          "ja": "その言葉を聞いて、うれしくなりました。",
          "zh": "听到那句话，我高兴起来了。",
          "focus": ["言葉"],
          "zhFocus": ["话"]
        },
        {
          "ja": "日本語の言葉を勉強します。",
          "zh": "学习日语词语。",
          "focus": ["言葉"],
          "zhFocus": ["词语"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-263",
      "jlpt": "N5",
      "headword": "子供",
      "source_form": "子供",
      "variants": [
        "子供"
      ],
      "reading": "こども",
      "reading_variants": [
        "こども"
      ],
      "romaji": "kodomo",
      "part_of_speech": "noun",
      "meaning_zh": "孩子",
      "kanji_readings": [
        {
          "form": "子供",
          "reading": "こども"
        }
      ],
      "examples": [
        {
          "ja": "子供の時、この町に住んでいました。",
          "zh": "小时候住在这个镇上。",
          "focus": ["子供"]
        },
        {
          "ja": "田中さんには子供が三人います。",
          "zh": "田中先生有三个孩子。",
          "focus": ["子供"],
          "zhFocus": ["孩子"]
        },
        {
          "ja": "公園の子供たちは元気に遊んでいます。",
          "zh": "公园里的孩子们正在精神十足地玩耍。",
          "focus": ["子供"],
          "zhFocus": ["孩子"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-264",
      "jlpt": "N5",
      "headword": "この",
      "source_form": "この",
      "variants": [
        "この"
      ],
      "reading": "この",
      "reading_variants": [
        "この"
      ],
      "romaji": "kono",
      "part_of_speech": "pre-noun/demonstrative",
      "meaning_zh": "这个（连体词）",
      "answer_zh": "这个",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "この本は新しいです。",
          "zh": "这本书是新的。",
          "focus": ["この"],
          "zhFocus": ["这"]
        },
        {
          "ja": "この店は安いです。",
          "zh": "这家店很便宜。",
          "focus": ["この"],
          "zhFocus": ["这"]
        },
        {
          "ja": "このかばんは誰のですか。",
          "zh": "这个包是谁的？",
          "focus": ["この"],
          "zhFocus": ["这个"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-265",
      "jlpt": "N5",
      "headword": "ご飯",
      "source_form": "御飯",
      "variants": [
        "ご飯"
      ],
      "reading": "ごはん",
      "reading_variants": [
        "ごはん"
      ],
      "romaji": "gohan",
      "part_of_speech": "noun",
      "meaning_zh": "米饭；饭；餐",
      "senses_zh": [
        "米饭",
        "饭；餐"
      ],
      "kanji_readings": [
        {
          "form": "ご飯",
          "reading": "ごはん"
        }
      ],
      "examples": [
        {
          "ja": "ご飯をもう少しください。",
          "zh": "请再给我一点米饭。",
          "focus": ["ご飯"],
          "zhFocus": ["米饭"]
        },
        {
          "ja": "ご飯ですよ。早く来てください。",
          "zh": "吃饭啦，快来。",
          "focus": ["ご飯"],
          "zhFocus": ["饭"]
        },
        {
          "ja": "ご飯の後で、薬を飲みます。",
          "zh": "饭后吃药。",
          "focus": ["ご飯"],
          "zhFocus": ["饭"]
        }
      ],
      "note_zh": "已把旧写法/不常用写法规范为现代常用写法；原始写法保留在 source_form。"
    },
    {
      "id": "n5-266",
      "jlpt": "N5",
      "headword": "コピーする",
      "source_form": "コピーする",
      "variants": [
        "コピーする"
      ],
      "reading": "コピーする",
      "reading_variants": [
        "コピーする"
      ],
      "romaji": "kopii suru",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "复印；复制",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "この紙をコピーします。",
          "zh": "复印这张纸。",
          "focus": ["コピーし"],
          "zhFocus": ["复印"]
        },
        {
          "ja": "友達のノートをコピーしました。",
          "zh": "复印了朋友的笔记。",
          "focus": ["コピーし"],
          "zhFocus": ["复印"]
        },
        {
          "ja": "すみません、これをコピーしてください。",
          "zh": "不好意思，请复印一下这个。",
          "focus": ["コピーし"],
          "zhFocus": ["复印"]
        }
      ],
      "note_zh": "可作名词，也常与「する」构成动词。"
    },
    {
      "id": "n5-267",
      "jlpt": "N5",
      "headword": "困る",
      "source_form": "困る",
      "variants": [
        "困る"
      ],
      "reading": "こまる",
      "reading_variants": [
        "こまる"
      ],
      "romaji": "komaru",
      "part_of_speech": "verb",
      "meaning_zh": "困扰；为难",
      "kanji_readings": [
        {
          "form": "困る",
          "reading": "こまる"
        }
      ],
      "examples": [
        {
          "ja": "道が分からなくて困っています。",
          "zh": "因为不认识路，很为难。",
          "focus": ["困っ"],
          "zhFocus": ["为难"]
        },
        {
          "ja": "お金がなくて困りました。",
          "zh": "因为没钱而犯难了。",
          "focus": ["困り"],
          "zhFocus": ["犯难"]
        },
        {
          "ja": "困った時は先生に聞きます。",
          "zh": "遇到困难时问老师。",
          "focus": ["困っ"],
          "zhFocus": ["困难"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-268",
      "jlpt": "N5",
      "headword": "これ",
      "source_form": "これ",
      "variants": [
        "これ"
      ],
      "reading": "これ",
      "reading_variants": [
        "これ"
      ],
      "romaji": "kore",
      "part_of_speech": "pronoun/demonstrative",
      "meaning_zh": "这个",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "これは本です。",
          "zh": "这是书。",
          "focus": ["これ"],
          "zhFocus": ["这"]
        },
        {
          "ja": "これは日本のお菓子です。",
          "zh": "这是日本的点心。",
          "focus": ["これ"],
          "zhFocus": ["这"]
        },
        {
          "ja": "これは私のです。",
          "zh": "这是我的。",
          "focus": ["これ"],
          "zhFocus": ["这"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-269",
      "jlpt": "N5",
      "headword": "～ごろ",
      "source_form": "～ころ; ～ごろ",
      "variants": [
        "～ごろ"
      ],
      "reading": "～ごろ",
      "reading_variants": [
        "～ごろ"
      ],
      "romaji": "~goro",
      "part_of_speech": "suffix/pattern",
      "meaning_zh": "……左右（时间）",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "七時ごろ起きます。",
          "zh": "七点左右起床。",
          "focus": ["ごろ"],
          "zhFocus": ["左右"]
        },
        {
          "ja": "昼ごろ電話します。",
          "zh": "中午左右打电话。",
          "focus": ["ごろ"],
          "zhFocus": ["左右"]
        },
        {
          "ja": "毎晩十一時ごろ寝ます。",
          "zh": "每天晚上十一点左右睡觉。",
          "focus": ["ごろ"],
          "zhFocus": ["左右"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-270",
      "merged_source_ids": ["n4-253"],
      "jlpt": "N5",
      "headword": "今月",
      "source_form": "今月",
      "variants": [
        "今月"
      ],
      "reading": "こんげつ",
      "reading_variants": [
        "こんげつ"
      ],
      "romaji": "kongetsu",
      "part_of_speech": "noun",
      "meaning_zh": "这个月",
      "kanji_readings": [
        {
          "form": "今月",
          "reading": "こんげつ"
        }
      ],
      "examples": [
        {
          "ja": "今月は雨が多いです。",
          "zh": "这个月雨水多。",
          "focus": ["今月"],
          "zhFocus": ["这个月"]
        },
        {
          "ja": "今月は忙しいです。",
          "zh": "这个月很忙。",
          "focus": ["今月"],
          "zhFocus": ["这个月"]
        },
        {
          "ja": "今月、友達に会います。",
          "zh": "这个月见朋友。",
          "focus": ["今月"],
          "zhFocus": ["这个月"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-271",
      "merged_source_ids": ["n4-254"],
      "jlpt": "N5",
      "headword": "今週",
      "source_form": "今週",
      "variants": [
        "今週"
      ],
      "reading": "こんしゅう",
      "reading_variants": [
        "こんしゅう"
      ],
      "romaji": "konshuu",
      "part_of_speech": "noun",
      "meaning_zh": "这周",
      "kanji_readings": [
        {
          "form": "今週",
          "reading": "こんしゅう"
        }
      ],
      "examples": [
        {
          "ja": "今週、学校へ行きます。",
          "zh": "这周去学校。",
          "focus": ["今週"],
          "zhFocus": ["这周"]
        },
        {
          "ja": "今週は忙しいです。",
          "zh": "这周很忙。",
          "focus": ["今週"],
          "zhFocus": ["这周"]
        },
        {
          "ja": "今週、友達に会います。",
          "zh": "这周见朋友。",
          "focus": ["今週"],
          "zhFocus": ["这周"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-272",
      "jlpt": "N5",
      "headword": "こんな",
      "source_form": "こんな",
      "variants": [
        "こんな"
      ],
      "reading": "こんな",
      "reading_variants": [
        "こんな"
      ],
      "romaji": "konna",
      "part_of_speech": "pre-noun/demonstrative",
      "meaning_zh": "这样的",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "こんな本を読みたいです。",
          "zh": "想读这样的书。",
          "focus": ["こんな"],
          "zhFocus": ["这样"]
        },
        {
          "ja": "こんな料理は初めてです。",
          "zh": "这样的菜是第一次吃。",
          "focus": ["こんな"],
          "zhFocus": ["这样"]
        },
        {
          "ja": "こんな日は家にいます。",
          "zh": "这样的日子待在家里。",
          "focus": ["こんな"],
          "zhFocus": ["这样"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-273",
      "jlpt": "N5",
      "headword": "今晩",
      "source_form": "今晩",
      "variants": [
        "今晩"
      ],
      "reading": "こんばん",
      "reading_variants": [
        "こんばん"
      ],
      "romaji": "konban",
      "part_of_speech": "noun",
      "meaning_zh": "今晚；今天晚上",
      "kanji_readings": [
        {
          "form": "今晩",
          "reading": "こんばん"
        }
      ],
      "examples": [
        {
          "ja": "今晩、映画を見ます。",
          "zh": "今晚看电影。",
          "focus": ["今晩"],
          "zhFocus": ["今晚"]
        },
        {
          "ja": "今晩は忙しいです。",
          "zh": "今晚很忙。",
          "focus": ["今晩"],
          "zhFocus": ["今晚"]
        },
        {
          "ja": "今晩、友達に会います。",
          "zh": "今晚见朋友。",
          "focus": ["今晩"],
          "zhFocus": ["今晚"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-274",
      "jlpt": "N5",
      "headword": "さあ",
      "source_form": "さあ",
      "variants": [
        "さあ"
      ],
      "reading": "さあ",
      "reading_variants": [
        "さあ"
      ],
      "romaji": "saa",
      "part_of_speech": "interjection/expression",
      "meaning_zh": "那么；来吧；嗯",
      "senses_zh": [
        "那么；来吧",
        "嗯"
      ],
      "kanji_readings": [],
      "examples": [
        {
          "ja": "さあ、始めましょう。",
          "zh": "来吧，开始吧。",
          "focus": ["さあ"],
          "zhFocus": ["来吧"]
        },
        {
          "ja": "さあ、行きましょう。",
          "zh": "来吧，走吧。",
          "focus": ["さあ"],
          "zhFocus": ["来吧"]
        },
        {
          "ja": "さあ、分かりません。",
          "zh": "嗯，我不知道。",
          "focus": ["さあ"],
          "zhFocus": ["嗯"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-275",
      "jlpt": "N5",
      "headword": "～歳",
      "source_form": "～歳",
      "variants": [
        "～歳"
      ],
      "reading": "～さい",
      "reading_variants": [
        "～さい"
      ],
      "romaji": "~sai",
      "part_of_speech": "counter/suffix",
      "meaning_zh": "……岁",
      "kanji_readings": [
        {
          "form": "～歳",
          "reading": "～さい"
        }
      ],
      "examples": [
        {
          "ja": "妹は七歳です。",
          "zh": "妹妹七岁。",
          "focus": ["歳"],
          "zhFocus": ["岁"]
        },
        {
          "ja": "父は五十歳です。",
          "zh": "父亲五十岁。",
          "focus": ["歳"],
          "zhFocus": ["岁"]
        },
        {
          "ja": "何歳ですか。",
          "zh": "几岁？",
          "focus": ["歳"],
          "zhFocus": ["岁"]
        }
      ],
      "note_zh": "接在数字或名词后使用；例句中去掉了前缀符号「～」。"
    },
    {
      "id": "n5-276",
      "merged_source_ids": ["n4-266"],
      "jlpt": "N5",
      "headword": "財布",
      "source_form": "財布",
      "variants": [
        "財布"
      ],
      "reading": "さいふ",
      "reading_variants": [
        "さいふ"
      ],
      "romaji": "saifu",
      "part_of_speech": "noun",
      "meaning_zh": "钱包",
      "kanji_readings": [
        {
          "form": "財布",
          "reading": "さいふ"
        }
      ],
      "examples": [
        {
          "ja": "財布を家に忘れました。",
          "zh": "把钱包忘在家里了。",
          "focus": ["財布"],
          "zhFocus": ["钱包"]
        },
        {
          "ja": "財布の中にお金がありません。",
          "zh": "钱包里没有钱。",
          "focus": ["財布"],
          "zhFocus": ["钱包"]
        },
        {
          "ja": "財布をかばんに入れました。",
          "zh": "把钱包放进了包里。",
          "focus": ["財布"],
          "zhFocus": ["钱包"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-277",
      "jlpt": "N5",
      "headword": "魚",
      "source_form": "魚",
      "variants": [
        "魚"
      ],
      "reading": "さかな",
      "reading_variants": [
        "さかな"
      ],
      "romaji": "sakana",
      "part_of_speech": "noun",
      "meaning_zh": "鱼",
      "kanji_readings": [
        {
          "form": "魚",
          "reading": "さかな"
        }
      ],
      "examples": [
        {
          "ja": "池に赤い魚がいます。",
          "zh": "池塘里有红色的鱼。",
          "focus": ["魚"],
          "zhFocus": ["鱼"]
        },
        {
          "ja": "魚と肉と、どちらが好きですか。",
          "zh": "鱼和肉，你喜欢哪个？",
          "focus": ["魚"],
          "zhFocus": ["鱼"]
        },
        {
          "ja": "海の近くの店で、おいしい魚を食べました。",
          "zh": "在海边的店里吃了好吃的鱼。",
          "focus": ["魚"],
          "zhFocus": ["鱼"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-278",
      "jlpt": "N5",
      "headword": "先",
      "source_form": "先",
      "variants": [
        "先"
      ],
      "reading": "さき",
      "reading_variants": [
        "さき"
      ],
      "romaji": "saki",
      "part_of_speech": "noun",
      "meaning_zh": "前方；前头；先（做）；将来",
      "senses_zh": [
        "前方；前头",
        "先（做）",
        "将来"
      ],
      "kanji_readings": [
        {
          "form": "先",
          "reading": "さき"
        }
      ],
      "examples": [
        {
          "ja": "お先に失礼します。",
          "zh": "我先告辞了。",
          "focus": ["先"],
          "zhFocus": ["先"]
        },
        {
          "ja": "この先に駅があります。",
          "zh": "前面有车站。",
          "focus": ["先"],
          "zhFocus": ["前面"]
        },
        {
          "ja": "先にご飯を食べます。",
          "zh": "先吃饭。",
          "focus": ["先"],
          "zhFocus": ["先"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-279",
      "jlpt": "N5",
      "headword": "咲く",
      "source_form": "咲く",
      "variants": [
        "咲く"
      ],
      "reading": "さく",
      "reading_variants": [
        "さく"
      ],
      "romaji": "saku",
      "part_of_speech": "verb",
      "meaning_zh": "开花",
      "kanji_readings": [
        {
          "form": "咲く",
          "reading": "さく"
        }
      ],
      "examples": [
        {
          "ja": "春に花が咲きます。",
          "zh": "春天花开。",
          "focus": ["咲き"],
          "zhFocus": ["开"]
        },
        {
          "ja": "公園で桜が咲いています。",
          "zh": "公园里的樱花开着。",
          "focus": ["咲い"],
          "zhFocus": ["开"]
        },
        {
          "ja": "庭に赤い花が咲きました。",
          "zh": "院子里开了红花。",
          "focus": ["咲き"],
          "zhFocus": ["开"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-280",
      "jlpt": "N5",
      "headword": "作文",
      "source_form": "作文",
      "variants": [
        "作文"
      ],
      "reading": "さくぶん",
      "reading_variants": [
        "さくぶん"
      ],
      "romaji": "sakubun",
      "part_of_speech": "noun",
      "meaning_zh": "作文",
      "kanji_readings": [
        {
          "form": "作文",
          "reading": "さくぶん"
        }
      ],
      "examples": [
        {
          "ja": "日本語で作文を書きます。",
          "zh": "用日语写作文。",
          "focus": ["作文"],
          "zhFocus": ["作文"]
        },
        {
          "ja": "作文は少し難しいです。",
          "zh": "作文有点难。",
          "focus": ["作文"],
          "zhFocus": ["作文"]
        },
        {
          "ja": "先生に作文を出します。",
          "zh": "把作文交给老师。",
          "focus": ["作文"],
          "zhFocus": ["作文"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-281",
      "jlpt": "N5",
      "headword": "差す",
      "source_form": "差す",
      "variants": [
        "差す"
      ],
      "reading": "さす",
      "reading_variants": [
        "さす"
      ],
      "romaji": "sasu",
      "part_of_speech": "verb",
      "meaning_zh": "撑（伞）；照射；伸出",
      "senses_zh": [
        "撑（伞）",
        "照射",
        "伸出"
      ],
      "kanji_readings": [
        {
          "form": "差す",
          "reading": "さす"
        }
      ],
      "examples": [
        {
          "ja": "雨なので傘を差します。",
          "zh": "因为下雨，所以撑伞。",
          "focus": ["差し"],
          "zhFocus": ["撑"]
        },
        {
          "ja": "窓から日が差しています。",
          "zh": "阳光正从窗户照进来。",
          "focus": ["差し"],
          "zhFocus": ["照"]
        },
        {
          "ja": "午後になると部屋に日が差します。",
          "zh": "到了下午，阳光会照进房间。",
          "focus": ["差し"],
          "zhFocus": ["照"]
        }
      ],
      "note_zh": "表示用手指指向时写作「指す」，不写作「差す」；光线照射也写作「射す」。"
    },
    {
      "id": "n5-282",
      "jlpt": "N5",
      "headword": "～冊",
      "source_form": "～冊",
      "variants": [
        "～冊"
      ],
      "reading": "～さつ",
      "reading_variants": [
        "～さつ"
      ],
      "romaji": "~satsu",
      "part_of_speech": "counter/suffix",
      "meaning_zh": "……册；……本（书本计数）",
      "kanji_readings": [
        {
          "form": "～冊",
          "reading": "～さつ"
        }
      ],
      "examples": [
        {
          "ja": "本を三冊買いました。",
          "zh": "买了三本书。",
          "focus": ["冊"],
          "zhFocus": ["本"]
        },
        {
          "ja": "雑誌を一冊読みました。",
          "zh": "读了一本杂志。",
          "focus": ["冊"],
          "zhFocus": ["本"]
        },
        {
          "ja": "辞書が二冊あります。",
          "zh": "有两本词典。",
          "focus": ["冊"],
          "zhFocus": ["本"]
        }
      ],
      "note_zh": "接在数字或名词后使用；例句中去掉了前缀符号「～」。"
    },
    {
      "id": "n5-283",
      "merged_source_ids": ["n4-281"],
      "jlpt": "N5",
      "headword": "雑誌",
      "source_form": "雑誌",
      "variants": [
        "雑誌"
      ],
      "reading": "ざっし",
      "reading_variants": [
        "ざっし"
      ],
      "romaji": "zasshi",
      "part_of_speech": "noun",
      "meaning_zh": "杂志",
      "kanji_readings": [
        {
          "form": "雑誌",
          "reading": "ざっし"
        }
      ],
      "examples": [
        {
          "ja": "雑誌を読みます。",
          "zh": "读杂志。",
          "focus": ["雑誌"],
          "zhFocus": ["杂志"]
        },
        {
          "ja": "雑誌が好きです。",
          "zh": "喜欢杂志。",
          "focus": ["雑誌"],
          "zhFocus": ["杂志"]
        },
        {
          "ja": "朝、雑誌を読みました。",
          "zh": "早上读了杂志。",
          "focus": ["雑誌"],
          "zhFocus": ["杂志"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-284",
      "jlpt": "N5",
      "headword": "砂糖",
      "source_form": "砂糖",
      "variants": [
        "砂糖"
      ],
      "reading": "さとう",
      "reading_variants": [
        "さとう"
      ],
      "romaji": "satou",
      "part_of_speech": "noun",
      "meaning_zh": "糖；砂糖",
      "kanji_readings": [
        {
          "form": "砂糖",
          "reading": "さとう"
        }
      ],
      "examples": [
        {
          "ja": "コーヒーに砂糖を入れます。",
          "zh": "往咖啡里加糖。",
          "focus": ["砂糖"],
          "zhFocus": ["糖"]
        },
        {
          "ja": "このケーキには砂糖が入っています。",
          "zh": "这个蛋糕里含有糖。",
          "focus": ["砂糖"],
          "zhFocus": ["糖"]
        },
        {
          "ja": "砂糖を少しだけ入れてください。",
          "zh": "请只放一点糖。",
          "focus": ["砂糖"],
          "zhFocus": ["糖"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-285",
      "jlpt": "N5",
      "headword": "寒い",
      "source_form": "寒い",
      "variants": [
        "寒い"
      ],
      "reading": "さむい",
      "reading_variants": [
        "さむい"
      ],
      "romaji": "samui",
      "part_of_speech": "i-adjective",
      "meaning_zh": "冷的（天气）",
      "kanji_readings": [
        {
          "form": "寒い",
          "reading": "さむい"
        }
      ],
      "examples": [
        {
          "ja": "今日は寒いです。",
          "zh": "今天很冷。",
          "focus": ["寒い"],
          "zhFocus": ["冷"]
        },
        {
          "ja": "寒い日が続きます。",
          "zh": "冷的天气会持续。",
          "focus": ["寒い"],
          "zhFocus": ["冷"]
        },
        {
          "ja": "外はとても寒いです。",
          "zh": "外面非常冷。",
          "focus": ["寒い"],
          "zhFocus": ["冷"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-286",
      "jlpt": "N5",
      "headword": "さ来年",
      "source_form": "さ来年",
      "variants": [
        "さ来年"
      ],
      "reading": "さらいねん",
      "reading_variants": [
        "さらいねん"
      ],
      "romaji": "sarainen",
      "part_of_speech": "noun",
      "meaning_zh": "后年",
      "kanji_readings": [
        {
          "form": "さ来年",
          "reading": "さらいねん"
        }
      ],
      "examples": [
        {
          "ja": "さ来年、日本へ行きます。",
          "zh": "后年去日本。",
          "focus": ["さ来年"],
          "zhFocus": ["后年"]
        },
        {
          "ja": "さ来年は忙しいです。",
          "zh": "后年很忙。",
          "focus": ["さ来年"],
          "zhFocus": ["后年"]
        },
        {
          "ja": "さ来年、弟は大学生になります。",
          "zh": "后年弟弟就上大学了。",
          "focus": ["さ来年"],
          "zhFocus": ["后年"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-287",
      "jlpt": "N5",
      "headword": "～さん",
      "source_form": "～さん",
      "variants": [
        "～さん"
      ],
      "reading": "～さん",
      "reading_variants": [
        "～さん"
      ],
      "romaji": "~san",
      "part_of_speech": "suffix/pattern",
      "meaning_zh": "……先生；……女士；……桑",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "田中さんは先生です。",
          "zh": "田中先生是老师。",
          "focus": ["さん"],
          "zhFocus": ["先生"]
        },
        {
          "ja": "山田さんに会いました。",
          "zh": "见到了山田先生。",
          "focus": ["さん"],
          "zhFocus": ["先生"]
        },
        {
          "ja": "お母さんは元気です。",
          "zh": "妈妈很好。",
          "focus": ["さん"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-288",
      "jlpt": "N5",
      "headword": "三",
      "source_form": "三",
      "variants": [
        "三"
      ],
      "reading": "さん",
      "reading_variants": [
        "さん"
      ],
      "romaji": "san",
      "part_of_speech": "numeral",
      "meaning_zh": "三",
      "kanji_readings": [
        {
          "form": "三",
          "reading": "さん"
        }
      ],
      "examples": [
        {
          "ja": "一たす二は三です。",
          "zh": "一加二等于三。",
          "focus": ["三"],
          "zhFocus": ["三"]
        },
        {
          "ja": "答えは三です。",
          "zh": "答案是三。",
          "focus": ["三"],
          "zhFocus": ["三"]
        },
        {
          "ja": "三を丸で囲んでください。",
          "zh": "请把三圈起来。",
          "focus": ["三"],
          "zhFocus": ["三"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-289",
      "jlpt": "N5",
      "headword": "散歩",
      "source_form": "散歩",
      "variants": [
        "散歩"
      ],
      "reading": "さんぽ",
      "reading_variants": [
        "さんぽ (する)"
      ],
      "romaji": "sanpo",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "散步",
      "kanji_readings": [
        {
          "form": "散歩",
          "reading": "さんぽ"
        }
      ],
      "examples": [
        {
          "ja": "散歩します。",
          "zh": "散步。",
          "focus": ["散歩"],
          "zhFocus": ["散步"]
        },
        {
          "ja": "毎日、散歩します。",
          "zh": "每天散步。",
          "focus": ["散歩"],
          "zhFocus": ["散步"]
        },
        {
          "ja": "昨日、散歩しました。",
          "zh": "昨天散步了。",
          "focus": ["散歩"],
          "zhFocus": ["散步"]
        }
      ],
      "note_zh": "可作名词，也常与「する」构成动词。"
    },
    {
      "id": "n5-290",
      "jlpt": "N5",
      "headword": "四",
      "source_form": "四",
      "variants": [
        "四"
      ],
      "reading": "し",
      "reading_variants": [
        "し",
        "よん"
      ],
      "romaji": "shi",
      "part_of_speech": "numeral",
      "meaning_zh": "四",
      "kanji_readings": [
        {
          "form": "四",
          "reading": "し"
        }
      ],
      "examples": [
        {
          "ja": "四月は桜がきれいです。",
          "zh": "四月的樱花很美。",
          "focus": ["四"],
          "zhFocus": ["四"]
        },
        {
          "ja": "紙に四角を描きました。",
          "zh": "在纸上画了四方形。",
          "focus": ["四"],
          "zhFocus": ["四"]
        },
        {
          "ja": "日本には四季があります。",
          "zh": "日本有四季。",
          "focus": ["四"],
          "zhFocus": ["四"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-291",
      "jlpt": "N5",
      "headword": "～時",
      "source_form": "～時",
      "variants": [
        "～時"
      ],
      "reading": "～じ",
      "reading_variants": [
        "～じ"
      ],
      "romaji": "~ji",
      "part_of_speech": "counter/suffix",
      "meaning_zh": "……点（时间）",
      "kanji_readings": [
        {
          "form": "～時",
          "reading": "～じ"
        }
      ],
      "examples": [
        {
          "ja": "七時に起きます。",
          "zh": "七点起床。",
          "focus": ["時"],
          "zhFocus": ["点"]
        },
        {
          "ja": "映画は何時に始まりますか。",
          "zh": "电影几点开始？",
          "focus": ["時"],
          "zhFocus": ["点"]
        },
        {
          "ja": "三時に会いましょう。",
          "zh": "三点见吧。",
          "focus": ["時"],
          "zhFocus": ["点"]
        }
      ],
      "note_zh": "接在数字或名词后使用；例句中去掉了前缀符号「～」。"
    },
    {
      "id": "n5-292",
      "jlpt": "N5",
      "headword": "塩",
      "source_form": "塩",
      "variants": [
        "塩"
      ],
      "reading": "しお",
      "reading_variants": [
        "しお"
      ],
      "romaji": "shio",
      "part_of_speech": "noun",
      "meaning_zh": "盐",
      "kanji_readings": [
        {
          "form": "塩",
          "reading": "しお"
        }
      ],
      "examples": [
        {
          "ja": "料理に塩を少し入れます。",
          "zh": "往菜里加一点盐。",
          "focus": ["塩"],
          "zhFocus": ["盐"]
        },
        {
          "ja": "スープに塩を入れすぎました。",
          "zh": "汤里盐放多了。",
          "focus": ["塩"],
          "zhFocus": ["盐"]
        },
        {
          "ja": "テーブルの上に塩があります。",
          "zh": "桌上有盐。",
          "focus": ["塩"],
          "zhFocus": ["盐"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-293",
      "jlpt": "N5",
      "headword": "しかし",
      "source_form": "しかし",
      "variants": [
        "しかし"
      ],
      "reading": "しかし",
      "reading_variants": [
        "しかし"
      ],
      "romaji": "shikashi",
      "part_of_speech": "conjunction",
      "meaning_zh": "但是；然而（较书面）",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "雨です。しかし、出かけます。",
          "zh": "下雨了。但是，我要出门。",
          "focus": ["しかし"],
          "zhFocus": ["但是"]
        },
        {
          "ja": "安いです。しかし、少し古いです。",
          "zh": "很便宜。但是有点旧。",
          "focus": ["しかし"],
          "zhFocus": ["但是"]
        },
        {
          "ja": "難しいです。しかし、おもしろいです。",
          "zh": "很难。但是很有趣。",
          "focus": ["しかし"],
          "zhFocus": ["但是"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-294",
      "jlpt": "N5",
      "headword": "時間",
      "source_form": "時間",
      "variants": [
        "時間"
      ],
      "reading": "じかん",
      "reading_variants": [
        "じかん"
      ],
      "romaji": "jikan",
      "part_of_speech": "noun",
      "meaning_zh": "时间",
      "kanji_readings": [
        {
          "form": "時間",
          "reading": "じかん"
        }
      ],
      "examples": [
        {
          "ja": "時間がありますか。",
          "zh": "有时间吗？",
          "focus": ["時間"],
          "zhFocus": ["时间"]
        },
        {
          "ja": "日本語を勉強する時間です。",
          "zh": "到学习日语的时间了。",
          "focus": ["時間"],
          "zhFocus": ["时间"]
        },
        {
          "ja": "時間がかかります。",
          "zh": "需要时间。",
          "focus": ["時間"],
          "zhFocus": ["时间"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-295",
      "jlpt": "N5",
      "headword": "～時間",
      "source_form": "～時間",
      "variants": [
        "～時間"
      ],
      "reading": "～じかん",
      "reading_variants": [
        "～じかん"
      ],
      "romaji": "~jikan",
      "part_of_speech": "counter/suffix",
      "meaning_zh": "……小时",
      "kanji_readings": [
        {
          "form": "～時間",
          "reading": "～じかん"
        }
      ],
      "examples": [
        {
          "ja": "一時間勉強します。",
          "zh": "学习一小时。",
          "focus": ["時間"],
          "zhFocus": ["小时"]
        },
        {
          "ja": "八時間寝ました。",
          "zh": "睡了八小时。",
          "focus": ["時間"],
          "zhFocus": ["小时"]
        },
        {
          "ja": "二時間かかります。",
          "zh": "需要两小时。",
          "focus": ["時間"],
          "zhFocus": ["小时"]
        }
      ],
      "note_zh": "接在数字或名词后使用；例句中去掉了前缀符号「～」。"
    },
    {
      "id": "n5-296",
      "jlpt": "N5",
      "headword": "仕事",
      "source_form": "仕事",
      "variants": [
        "仕事"
      ],
      "reading": "しごと",
      "reading_variants": [
        "しごと"
      ],
      "romaji": "shigoto",
      "part_of_speech": "noun",
      "meaning_zh": "工作；职业（名词）",
      "answer_zh": "工作；职业",
      "kanji_readings": [
        {
          "form": "仕事",
          "reading": "しごと"
        }
      ],
      "examples": [
        {
          "ja": "新しい仕事を探しています。",
          "zh": "正在找新工作。",
          "focus": ["仕事"],
          "zhFocus": ["工作"]
        },
        {
          "ja": "仕事の後で、友達と食事をしました。",
          "zh": "下班后和朋友吃了饭。",
          "focus": ["仕事"]
        },
        {
          "ja": "今日は仕事が多くて疲れました。",
          "zh": "今天工作很多，好累。",
          "focus": ["仕事"],
          "zhFocus": ["工作"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-297",
      "jlpt": "N5",
      "headword": "辞書",
      "source_form": "辞書",
      "variants": [
        "辞書"
      ],
      "reading": "じしょ",
      "reading_variants": [
        "じしょ"
      ],
      "romaji": "jisho",
      "part_of_speech": "noun",
      "meaning_zh": "词典；字典",
      "kanji_readings": [
        {
          "form": "辞書",
          "reading": "じしょ"
        }
      ],
      "examples": [
        {
          "ja": "辞書で言葉を調べます。",
          "zh": "用词典查词。",
          "focus": ["辞書"],
          "zhFocus": ["词典"]
        },
        {
          "ja": "新しい辞書を買いました。",
          "zh": "买了新词典。",
          "focus": ["辞書"],
          "zhFocus": ["词典"]
        },
        {
          "ja": "辞書を貸してください。",
          "zh": "请把词典借给我。",
          "focus": ["辞書"],
          "zhFocus": ["词典"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-298",
      "jlpt": "N5",
      "headword": "静か",
      "source_form": "静か",
      "variants": [
        "静か"
      ],
      "reading": "しずか",
      "reading_variants": [
        "しずか"
      ],
      "romaji": "shizuka",
      "part_of_speech": "na-adjective",
      "meaning_zh": "安静的",
      "kanji_readings": [
        {
          "form": "静か",
          "reading": "しずか"
        }
      ],
      "examples": [
        {
          "ja": "図書館は静かです。",
          "zh": "图书馆很安静。",
          "focus": ["静か"],
          "zhFocus": ["安静"]
        },
        {
          "ja": "静かな部屋で勉強します。",
          "zh": "在安静的房间学习。",
          "focus": ["静か"],
          "zhFocus": ["安静"]
        },
        {
          "ja": "夜は町が静かです。",
          "zh": "晚上城镇很安静。",
          "focus": ["静か"],
          "zhFocus": ["安静"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-299",
      "jlpt": "N5",
      "headword": "下",
      "source_form": "下",
      "variants": [
        "下"
      ],
      "reading": "した",
      "reading_variants": [
        "した"
      ],
      "romaji": "shita",
      "part_of_speech": "noun",
      "meaning_zh": "下面；下方",
      "kanji_readings": [
        {
          "form": "下",
          "reading": "した"
        }
      ],
      "examples": [
        {
          "ja": "机の下にかばんがあります。",
          "zh": "桌子下面有包。",
          "focus": ["下"],
          "zhFocus": ["下面"]
        },
        {
          "ja": "下を見てください。",
          "zh": "请往下看。",
          "focus": ["下"],
          "zhFocus": ["下"]
        },
        {
          "ja": "下の名前は何ですか。",
          "zh": "你的名（不是姓）叫什么？",
          "focus": ["下"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-300",
      "jlpt": "N5",
      "headword": "七",
      "source_form": "七",
      "variants": [
        "七"
      ],
      "reading": "しち",
      "reading_variants": [
        "しち",
        "なな"
      ],
      "romaji": "shichi",
      "part_of_speech": "numeral",
      "meaning_zh": "七",
      "kanji_readings": [
        {
          "form": "七",
          "reading": "しち"
        }
      ],
      "examples": [
        {
          "ja": "七月は暑いです。",
          "zh": "七月很热。",
          "focus": ["七"],
          "zhFocus": ["七"]
        },
        {
          "ja": "今朝は七時半に家を出ました。",
          "zh": "今天早上七点半出了家门。",
          "focus": ["七"],
          "zhFocus": ["七"]
        },
        {
          "ja": "答えは七です。",
          "zh": "答案是七。",
          "focus": ["七"],
          "zhFocus": ["七"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-301",
      "jlpt": "N5",
      "headword": "質問",
      "source_form": "質問",
      "variants": [
        "質問"
      ],
      "reading": "しつもん",
      "reading_variants": [
        "しつもん"
      ],
      "romaji": "shitsumon",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "问题；提问",
      "kanji_readings": [
        {
          "form": "質問",
          "reading": "しつもん"
        }
      ],
      "examples": [
        {
          "ja": "先生に質問します。",
          "zh": "向老师提问。",
          "focus": ["質問"],
          "zhFocus": ["提问"]
        },
        {
          "ja": "質問があります。",
          "zh": "我有问题。",
          "focus": ["質問"],
          "zhFocus": ["问题"]
        },
        {
          "ja": "この質問に答えてください。",
          "zh": "请回答这个问题。",
          "focus": ["質問"],
          "zhFocus": ["问题"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-302",
      "jlpt": "N5",
      "headword": "自転車",
      "source_form": "自転車",
      "variants": [
        "自転車"
      ],
      "reading": "じてんしゃ",
      "reading_variants": [
        "じてんしゃ"
      ],
      "romaji": "jitensha",
      "part_of_speech": "noun",
      "meaning_zh": "自行车",
      "kanji_readings": [
        {
          "form": "自転車",
          "reading": "じてんしゃ"
        }
      ],
      "examples": [
        {
          "ja": "自転車に乗るのが好きです。",
          "zh": "喜欢骑自行车。",
          "focus": ["自転車"],
          "zhFocus": ["自行车"]
        },
        {
          "ja": "駅の前に自転車を止めました。",
          "zh": "把自行车停在了车站前。",
          "focus": ["自転車"],
          "zhFocus": ["自行车"]
        },
        {
          "ja": "自転車で学校へ行きます。",
          "zh": "骑自行车去学校。",
          "focus": ["自転車"],
          "zhFocus": ["自行车"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-303",
      "jlpt": "N5",
      "headword": "自動車",
      "source_form": "自動車",
      "variants": [
        "自動車"
      ],
      "reading": "じどうしゃ",
      "reading_variants": [
        "じどうしゃ"
      ],
      "romaji": "jidousha",
      "part_of_speech": "noun",
      "meaning_zh": "汽车（正式说法）",
      "kanji_readings": [
        {
          "form": "自動車",
          "reading": "じどうしゃ"
        }
      ],
      "examples": [
        {
          "ja": "自動車で会社へ行きます。",
          "zh": "开车去公司。",
          "focus": ["自動車"],
          "zhFocus": ["车"]
        },
        {
          "ja": "新しい自動車を買いました。",
          "zh": "买了新汽车。",
          "focus": ["自動車"],
          "zhFocus": ["汽车"]
        },
        {
          "ja": "自動車が道を走っています。",
          "zh": "汽车在路上行驶。",
          "focus": ["自動車"],
          "zhFocus": ["汽车"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-304",
      "jlpt": "N5",
      "headword": "死ぬ",
      "source_form": "死ぬ",
      "variants": [
        "死ぬ"
      ],
      "reading": "しぬ",
      "reading_variants": [
        "しぬ"
      ],
      "romaji": "shinu",
      "part_of_speech": "verb",
      "meaning_zh": "死",
      "kanji_readings": [
        {
          "form": "死ぬ",
          "reading": "しぬ"
        }
      ],
      "examples": [
        {
          "ja": "飼っていた魚が昨日死にました。",
          "zh": "养的鱼昨天死了。",
          "focus": ["死に"],
          "zhFocus": ["死"]
        },
        {
          "ja": "水がないと植物は死にます。",
          "zh": "没有水，植物会死。",
          "focus": ["死に"],
          "zhFocus": ["死"]
        },
        {
          "ja": "事故で人が死にました。",
          "zh": "有人在事故中去世了。",
          "focus": ["死に"],
          "zhFocus": ["去世"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-305",
      "jlpt": "N5",
      "headword": "字引",
      "source_form": "字引",
      "variants": [
        "字引"
      ],
      "reading": "じびき",
      "reading_variants": [
        "じびき"
      ],
      "romaji": "jibiki",
      "part_of_speech": "noun",
      "meaning_zh": "字典；词典（较旧的说法）",
      "kanji_readings": [
        {
          "form": "字引",
          "reading": "じびき"
        }
      ],
      "examples": [
        {
          "ja": "字引で漢字を調べます。",
          "zh": "用字典查汉字。",
          "focus": ["字引"],
          "zhFocus": ["字典"]
        },
        {
          "ja": "字引を使います。",
          "zh": "使用字典。",
          "focus": ["字引"],
          "zhFocus": ["字典"]
        },
        {
          "ja": "古い字引があります。",
          "zh": "有一本旧字典。",
          "focus": ["字引"],
          "zhFocus": ["字典"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-306",
      "jlpt": "N5",
      "headword": "自分",
      "source_form": "自分",
      "variants": [
        "自分"
      ],
      "reading": "じぶん",
      "reading_variants": [
        "じぶん"
      ],
      "romaji": "jibun",
      "part_of_speech": "noun",
      "meaning_zh": "自己",
      "kanji_readings": [
        {
          "form": "自分",
          "reading": "じぶん"
        }
      ],
      "examples": [
        {
          "ja": "自分で宿題をします。",
          "zh": "自己做作业。",
          "focus": ["自分"],
          "zhFocus": ["自己"]
        },
        {
          "ja": "自分の名前を書いてください。",
          "zh": "请写自己的名字。",
          "focus": ["自分"],
          "zhFocus": ["自己"]
        },
        {
          "ja": "自分の部屋を掃除します。",
          "zh": "打扫自己的房间。",
          "focus": ["自分"],
          "zhFocus": ["自己"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-307",
      "jlpt": "N5",
      "headword": "閉まる",
      "source_form": "閉まる",
      "variants": [
        "閉まる"
      ],
      "reading": "しまる",
      "reading_variants": [
        "しまる"
      ],
      "romaji": "shimaru",
      "part_of_speech": "verb",
      "meaning_zh": "关着；关闭（自动词）",
      "kanji_readings": [
        {
          "form": "閉まる",
          "reading": "しまる"
        }
      ],
      "examples": [
        {
          "ja": "店は七時に閉まります。",
          "zh": "店七点关门。",
          "focus": ["閉まり"],
          "zhFocus": ["关"]
        },
        {
          "ja": "ドアが閉まっています。",
          "zh": "门关着。",
          "focus": ["閉まっ"],
          "zhFocus": ["关着"]
        },
        {
          "ja": "駅の窓口はもう閉まりました。",
          "zh": "车站窗口已经关了。",
          "focus": ["閉まり"],
          "zhFocus": ["关"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-308",
      "jlpt": "N5",
      "headword": "閉める",
      "source_form": "閉める",
      "variants": [
        "閉める"
      ],
      "reading": "しめる",
      "reading_variants": [
        "しめる"
      ],
      "romaji": "shimeru",
      "part_of_speech": "verb",
      "meaning_zh": "关上；关闭（他动词）",
      "kanji_readings": [
        {
          "form": "閉める",
          "reading": "しめる"
        }
      ],
      "examples": [
        {
          "ja": "窓を閉めてください。",
          "zh": "请关窗。",
          "focus": ["閉め"],
          "zhFocus": ["关"]
        },
        {
          "ja": "寒いのでドアを閉めます。",
          "zh": "因为冷，所以关门。",
          "focus": ["閉め"],
          "zhFocus": ["关"]
        },
        {
          "ja": "店を早く閉めました。",
          "zh": "早早关了店。",
          "focus": ["閉め"],
          "zhFocus": ["关"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-309",
      "jlpt": "N5",
      "headword": "締める",
      "source_form": "締める",
      "variants": [
        "締める"
      ],
      "reading": "しめる",
      "reading_variants": [
        "しめる"
      ],
      "romaji": "shimeru",
      "part_of_speech": "verb",
      "meaning_zh": "系紧；拧紧；扎紧",
      "kanji_readings": [
        {
          "form": "締める",
          "reading": "しめる"
        }
      ],
      "examples": [
        {
          "ja": "シートベルトを締めます。",
          "zh": "系上安全带。",
          "focus": ["締め"],
          "zhFocus": ["系"]
        },
        {
          "ja": "ねじをしっかり締めてください。",
          "zh": "请把螺丝拧紧。",
          "focus": ["締め"],
          "zhFocus": ["拧紧"]
        },
        {
          "ja": "父は毎朝ネクタイを締めます。",
          "zh": "父亲每天早上系领带。",
          "focus": ["締め"],
          "zhFocus": ["系"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-310",
      "jlpt": "N5",
      "headword": "じゃあ",
      "source_form": "じゃ; じゃあ",
      "variants": [
        "じゃあ",
        "じゃ"
      ],
      "reading": "じゃあ",
      "reading_variants": [
        "じゃあ",
        "じゃ"
      ],
      "romaji": "jaa",
      "part_of_speech": "conjunction",
      "meaning_zh": "那么；那就（口语）",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "じゃあ、また明日。",
          "zh": "那么，明天见。",
          "focus": ["じゃあ"],
          "zhFocus": ["那么"]
        },
        {
          "ja": "じゃあ、行きましょう。",
          "zh": "那走吧。",
          "focus": ["じゃあ"],
          "zhFocus": ["那"]
        },
        {
          "ja": "じゃあ、これをください。",
          "zh": "那请给我这个。",
          "focus": ["じゃあ"],
          "zhFocus": ["那"]
        }
      ],
      "note_zh": "口语中也可缩短为「じゃ」；本词条的主词形和主读音均为「じゃあ」。"
    },
    {
      "id": "n5-311",
      "jlpt": "N5",
      "headword": "写真",
      "source_form": "写真",
      "variants": [
        "写真"
      ],
      "reading": "しゃしん",
      "reading_variants": [
        "しゃしん"
      ],
      "romaji": "shashin",
      "part_of_speech": "noun",
      "meaning_zh": "照片",
      "kanji_readings": [
        {
          "form": "写真",
          "reading": "しゃしん"
        }
      ],
      "examples": [
        {
          "ja": "これは家族の写真です。",
          "zh": "这是家人的照片。",
          "focus": ["写真"],
          "zhFocus": ["照片"]
        },
        {
          "ja": "この写真を見てください。",
          "zh": "请看这张照片。",
          "focus": ["写真"],
          "zhFocus": ["照片"]
        },
        {
          "ja": "友達に写真を見せました。",
          "zh": "给朋友看了照片。",
          "focus": ["写真"],
          "zhFocus": ["照片"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-312",
      "jlpt": "N5",
      "headword": "シャツ",
      "source_form": "シャツ",
      "variants": [
        "シャツ"
      ],
      "reading": "シャツ",
      "reading_variants": [
        "シャツ"
      ],
      "romaji": "shatsu",
      "part_of_speech": "noun",
      "meaning_zh": "衬衫；汗衫",
      "senses_zh": [
        "衬衫",
        "汗衫"
      ],
      "kanji_readings": [],
      "examples": [
        {
          "ja": "白いシャツを着ます。",
          "zh": "穿白衬衫。",
          "focus": ["シャツ"],
          "zhFocus": ["衬衫"]
        },
        {
          "ja": "新しいシャツを買いました。",
          "zh": "买了新衬衫。",
          "focus": ["シャツ"],
          "zhFocus": ["衬衫"]
        },
        {
          "ja": "シャツを洗濯しました。",
          "zh": "洗了衬衫。",
          "focus": ["シャツ"],
          "zhFocus": ["衬衫"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-313",
      "jlpt": "N5",
      "headword": "シャワー",
      "source_form": "シャワー",
      "variants": [
        "シャワー"
      ],
      "reading": "シャワー",
      "reading_variants": [
        "シャワー"
      ],
      "romaji": "shawaa",
      "part_of_speech": "noun",
      "meaning_zh": "淋浴；花洒",
      "senses_zh": [
        "淋浴",
        "花洒"
      ],
      "kanji_readings": [],
      "examples": [
        {
          "ja": "シャワーのお湯がとても熱いです。",
          "zh": "淋浴的水很烫。",
          "focus": ["シャワー"],
          "zhFocus": ["淋浴"]
        },
        {
          "ja": "シャワーを使います。",
          "zh": "使用淋浴。",
          "focus": ["シャワー"],
          "zhFocus": ["淋浴"]
        },
        {
          "ja": "シャワーはどこですか。",
          "zh": "淋浴在哪里？",
          "focus": ["シャワー"],
          "zhFocus": ["淋浴"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-314",
      "jlpt": "N5",
      "headword": "十",
      "source_form": "十",
      "variants": [
        "十"
      ],
      "reading": "じゅう",
      "reading_variants": [
        "じゅう"
      ],
      "romaji": "juu",
      "part_of_speech": "numeral",
      "meaning_zh": "十",
      "kanji_readings": [
        {
          "form": "十",
          "reading": "じゅう"
        }
      ],
      "examples": [
        {
          "ja": "この鉛筆は十円です。",
          "zh": "这支铅笔十日元。",
          "focus": ["十"],
          "zhFocus": ["十"]
        },
        {
          "ja": "十月に日本へ行きます。",
          "zh": "十月去日本。",
          "focus": ["十"],
          "zhFocus": ["十"]
        },
        {
          "ja": "紙に十と書いてください。",
          "zh": "请在纸上写十。",
          "focus": ["十"],
          "zhFocus": ["十"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-315",
      "jlpt": "N5",
      "headword": "～中",
      "source_form": "～中",
      "variants": [
        "～中"
      ],
      "reading": "～じゅう",
      "reading_variants": [
        "～じゅう"
      ],
      "romaji": "~juu",
      "part_of_speech": "suffix/pattern",
      "meaning_zh": "整个……；全……",
      "kanji_readings": [
        {
          "form": "～中",
          "reading": "～じゅう"
        }
      ],
      "examples": [
        {
          "ja": "一日中、家にいました。",
          "zh": "一整天都在家。",
          "focus": ["中"],
          "zhFocus": ["整"]
        },
        {
          "ja": "この町は一年中にぎやかです。",
          "zh": "这个城镇一年到头都很热闹。",
          "focus": ["中"],
          "zhFocus": ["到头"]
        },
        {
          "ja": "世界中に友達がいます。",
          "zh": "世界各地都有朋友。",
          "focus": ["中"],
          "zhFocus": ["各地"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-316",
      "jlpt": "N5",
      "headword": "～週間",
      "source_form": "～週間",
      "variants": [
        "～週間"
      ],
      "reading": "～しゅうかん",
      "reading_variants": [
        "～しゅうかん"
      ],
      "romaji": "~shuukan",
      "part_of_speech": "counter/suffix",
      "meaning_zh": "……周；……星期",
      "kanji_readings": [
        {
          "form": "～週間",
          "reading": "～しゅうかん"
        }
      ],
      "examples": [
        {
          "ja": "一週間休みます。",
          "zh": "休息一周。",
          "focus": ["週間"],
          "zhFocus": ["周"]
        },
        {
          "ja": "二週間日本にいます。",
          "zh": "在日本待两周。",
          "focus": ["週間"],
          "zhFocus": ["周"]
        },
        {
          "ja": "三週間勉強しました。",
          "zh": "学习了三周。",
          "focus": ["週間"],
          "zhFocus": ["周"]
        }
      ],
      "note_zh": "接在数字或名词后使用；例句中去掉了前缀符号「～」。"
    },
    {
      "id": "n5-317",
      "jlpt": "N5",
      "headword": "授業",
      "source_form": "授業",
      "variants": [
        "授業"
      ],
      "reading": "じゅぎょう",
      "reading_variants": [
        "じゅぎょう"
      ],
      "romaji": "jugyou",
      "part_of_speech": "noun",
      "meaning_zh": "课；上课",
      "kanji_readings": [
        {
          "form": "授業",
          "reading": "じゅぎょう"
        }
      ],
      "examples": [
        {
          "ja": "授業の後で、先生に質問しました。",
          "zh": "下课后向老师提了问题。",
          "focus": ["授業"],
          "zhFocus": ["课"]
        },
        {
          "ja": "日本語の授業があります。",
          "zh": "有日语课。",
          "focus": ["授業"],
          "zhFocus": ["课"]
        },
        {
          "ja": "明日は授業が休みです。",
          "zh": "明天停课。",
          "focus": ["授業"],
          "zhFocus": ["课"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-318",
      "jlpt": "N5",
      "headword": "宿題",
      "source_form": "宿題",
      "variants": [
        "宿題"
      ],
      "reading": "しゅくだい",
      "reading_variants": [
        "しゅくだい"
      ],
      "romaji": "shukudai",
      "part_of_speech": "noun",
      "meaning_zh": "作业",
      "kanji_readings": [
        {
          "form": "宿題",
          "reading": "しゅくだい"
        }
      ],
      "examples": [
        {
          "ja": "宿題をします。",
          "zh": "做作业。",
          "focus": ["宿題"],
          "zhFocus": ["作业"]
        },
        {
          "ja": "今日は宿題がたくさんあります。",
          "zh": "今天作业很多。",
          "focus": ["宿題"],
          "zhFocus": ["作业"]
        },
        {
          "ja": "宿題を先生に出します。",
          "zh": "把作业交给老师。",
          "focus": ["宿題"],
          "zhFocus": ["作业"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-319",
      "jlpt": "N5",
      "headword": "上手",
      "source_form": "上手",
      "variants": [
        "上手"
      ],
      "reading": "じょうず",
      "reading_variants": [
        "じょうず"
      ],
      "romaji": "jouzu",
      "part_of_speech": "na-adjective",
      "meaning_zh": "擅长的；拿手的",
      "kanji_readings": [
        {
          "form": "上手",
          "reading": "じょうず"
        }
      ],
      "examples": [
        {
          "ja": "姉は料理が上手です。",
          "zh": "姐姐很会做饭。",
          "focus": ["上手"],
          "zhFocus": ["会"]
        },
        {
          "ja": "日本語が上手ですね。",
          "zh": "你日语很好呢。",
          "focus": ["上手"],
          "zhFocus": ["好"]
        },
        {
          "ja": "上手に漢字を書きます。",
          "zh": "汉字写得很好。",
          "focus": ["上手"],
          "zhFocus": ["好"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-320",
      "jlpt": "N5",
      "headword": "丈夫",
      "source_form": "丈夫",
      "variants": [
        "丈夫"
      ],
      "reading": "じょうぶ",
      "reading_variants": [
        "じょうぶ"
      ],
      "romaji": "joubu",
      "part_of_speech": "na-adjective",
      "meaning_zh": "结实的；健康的",
      "senses_zh": [
        "结实的",
        "健康的"
      ],
      "kanji_readings": [
        {
          "form": "丈夫",
          "reading": "じょうぶ"
        }
      ],
      "examples": [
        {
          "ja": "このかばんは丈夫です。",
          "zh": "这个包很结实。",
          "focus": ["丈夫"],
          "zhFocus": ["结实"]
        },
        {
          "ja": "丈夫な靴を買いました。",
          "zh": "买了结实的鞋。",
          "focus": ["丈夫"],
          "zhFocus": ["结实"]
        },
        {
          "ja": "体が丈夫です。",
          "zh": "身体很结实。",
          "focus": ["丈夫"],
          "zhFocus": ["结实"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-321",
      "jlpt": "N5",
      "headword": "醤油",
      "source_form": "醤油",
      "variants": [
        "醤油"
      ],
      "reading": "しょうゆ",
      "reading_variants": [
        "しょうゆ"
      ],
      "romaji": "shouyu",
      "part_of_speech": "noun",
      "meaning_zh": "酱油",
      "kanji_readings": [
        {
          "form": "醤油",
          "reading": "しょうゆ"
        }
      ],
      "examples": [
        {
          "ja": "刺身に醤油をつけます。",
          "zh": "吃生鱼片时蘸酱油。",
          "focus": ["醤油"],
          "zhFocus": ["酱油"]
        },
        {
          "ja": "醤油を少しください。",
          "zh": "请给我一点酱油。",
          "focus": ["醤油"],
          "zhFocus": ["酱油"]
        },
        {
          "ja": "テーブルの上に醤油があります。",
          "zh": "桌上有酱油。",
          "focus": ["醤油"],
          "zhFocus": ["酱油"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-322",
      "jlpt": "N5",
      "headword": "食堂",
      "source_form": "食堂",
      "variants": [
        "食堂"
      ],
      "reading": "しょくどう",
      "reading_variants": [
        "しょくどう"
      ],
      "romaji": "shokudou",
      "part_of_speech": "noun",
      "meaning_zh": "食堂；餐厅",
      "kanji_readings": [
        {
          "form": "食堂",
          "reading": "しょくどう"
        }
      ],
      "examples": [
        {
          "ja": "食堂へ行きます。",
          "zh": "去食堂。",
          "focus": ["食堂"],
          "zhFocus": ["食堂"]
        },
        {
          "ja": "食堂は駅の近くです。",
          "zh": "食堂在车站附近。",
          "focus": ["食堂"],
          "zhFocus": ["食堂"]
        },
        {
          "ja": "食堂で友達に会います。",
          "zh": "在食堂见朋友。",
          "focus": ["食堂"],
          "zhFocus": ["食堂"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-323",
      "jlpt": "N5",
      "headword": "知る",
      "source_form": "知る",
      "variants": [
        "知る"
      ],
      "reading": "しる",
      "reading_variants": [
        "しる"
      ],
      "romaji": "shiru",
      "part_of_speech": "verb",
      "meaning_zh": "知道；认识",
      "senses_zh": [
        "知道",
        "认识"
      ],
      "kanji_readings": [
        {
          "form": "知る",
          "reading": "しる"
        }
      ],
      "examples": [
        {
          "ja": "その人を知っています。",
          "zh": "认识那个人。",
          "focus": ["知っ"],
          "zhFocus": ["认识"]
        },
        {
          "ja": "答えを知りません。",
          "zh": "不知道答案。",
          "focus": ["知り"],
          "zhFocus": ["知道"]
        },
        {
          "ja": "新しい言葉を知りました。",
          "zh": "知道了新词。",
          "focus": ["知り"],
          "zhFocus": ["知道"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-324",
      "jlpt": "N5",
      "headword": "白",
      "source_form": "白",
      "variants": [
        "白"
      ],
      "reading": "しろ",
      "reading_variants": [
        "しろ"
      ],
      "romaji": "shiro",
      "part_of_speech": "noun",
      "meaning_zh": "白色",
      "kanji_readings": [
        {
          "form": "白",
          "reading": "しろ"
        }
      ],
      "examples": [
        {
          "ja": "白のシャツを着ます。",
          "zh": "穿白色衬衫。",
          "focus": ["白"],
          "zhFocus": ["白色"]
        },
        {
          "ja": "白が好きです。",
          "zh": "我喜欢白色。",
          "focus": ["白"],
          "zhFocus": ["白色"]
        },
        {
          "ja": "この紙は白です。",
          "zh": "这张纸是白色的。",
          "focus": ["白"],
          "zhFocus": ["白色"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-325",
      "jlpt": "N5",
      "headword": "白い",
      "source_form": "白い",
      "variants": [
        "白い"
      ],
      "reading": "しろい",
      "reading_variants": [
        "しろい"
      ],
      "romaji": "shiroi",
      "part_of_speech": "i-adjective",
      "meaning_zh": "白色的",
      "kanji_readings": [
        {
          "form": "白い",
          "reading": "しろい"
        }
      ],
      "examples": [
        {
          "ja": "このシャツは白いです。",
          "zh": "这件衬衫是白色的。",
          "focus": ["白い"],
          "zhFocus": ["白色"]
        },
        {
          "ja": "雪は白いです。",
          "zh": "雪是白色的。",
          "focus": ["白い"],
          "zhFocus": ["白色"]
        },
        {
          "ja": "白いカップを使います。",
          "zh": "用白色的杯子。",
          "focus": ["白い"],
          "zhFocus": ["白色"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-326",
      "jlpt": "N5",
      "headword": "～人",
      "source_form": "～人",
      "variants": [
        "～人"
      ],
      "reading": "～じん",
      "reading_variants": [
        "～じん"
      ],
      "romaji": "~jin",
      "part_of_speech": "suffix",
      "meaning_zh": "……人（国籍、身份）",
      "kanji_readings": [
        {
          "form": "～人",
          "reading": "～じん"
        }
      ],
      "examples": [
        {
          "ja": "私は日本人です。",
          "zh": "我是日本人。",
          "focus": ["人"],
          "zhFocus": ["人"]
        },
        {
          "ja": "友達は中国人です。",
          "zh": "朋友是中国人。",
          "focus": ["人"],
          "zhFocus": ["人"]
        },
        {
          "ja": "あの人は外国人です。",
          "zh": "那个人是外国人。",
          "focus": [{"after": "あの人は外国", "text": "人"}],
          "zhFocus": [{"after": "那个人是外国", "text": "人"}]
        }
      ],
      "note_zh": "接在国名、地名等名词后，表示国籍或出身；例句中去掉了前缀符号「～」。"
    },
    {
      "id": "n5-327",
      "jlpt": "N5",
      "headword": "新聞",
      "source_form": "新聞",
      "variants": [
        "新聞"
      ],
      "reading": "しんぶん",
      "reading_variants": [
        "しんぶん"
      ],
      "romaji": "shinbun",
      "part_of_speech": "noun",
      "meaning_zh": "报纸",
      "kanji_readings": [
        {
          "form": "新聞",
          "reading": "しんぶん"
        }
      ],
      "examples": [
        {
          "ja": "新聞を読みます。",
          "zh": "读报纸。",
          "focus": ["新聞"],
          "zhFocus": ["报纸"]
        },
        {
          "ja": "新聞が好きです。",
          "zh": "喜欢报纸。",
          "focus": ["新聞"],
          "zhFocus": ["报纸"]
        },
        {
          "ja": "朝、新聞を読みました。",
          "zh": "早上读了报纸。",
          "focus": ["新聞"],
          "zhFocus": ["报纸"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-328",
      "jlpt": "N5",
      "headword": "水曜日",
      "source_form": "水曜日",
      "variants": [
        "水曜日"
      ],
      "reading": "すいようび",
      "reading_variants": [
        "すいようび"
      ],
      "romaji": "suiyoubi",
      "part_of_speech": "noun",
      "meaning_zh": "星期三",
      "kanji_readings": [
        {
          "form": "水曜日",
          "reading": "すいようび"
        }
      ],
      "examples": [
        {
          "ja": "水曜日に学校へ行きます。",
          "zh": "星期三去学校。",
          "focus": ["水曜日"],
          "zhFocus": ["星期三"]
        },
        {
          "ja": "水曜日は休みです。",
          "zh": "星期三休息。",
          "focus": ["水曜日"],
          "zhFocus": ["星期三"]
        },
        {
          "ja": "次の水曜日に会いましょう。",
          "zh": "下个星期三见吧。",
          "focus": ["水曜日"],
          "zhFocus": ["星期三"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-329",
      "jlpt": "N5",
      "headword": "吸う",
      "source_form": "吸う",
      "variants": [
        "吸う"
      ],
      "reading": "すう",
      "reading_variants": [
        "すう"
      ],
      "romaji": "suu",
      "part_of_speech": "verb",
      "meaning_zh": "吸；抽（烟）",
      "kanji_readings": [
        {
          "form": "吸う",
          "reading": "すう"
        }
      ],
      "examples": [
        {
          "ja": "大きく息を吸ってください。",
          "zh": "请深吸一口气。",
          "focus": ["吸っ"],
          "zhFocus": ["吸"]
        },
        {
          "ja": "きれいな空気を吸います。",
          "zh": "呼吸新鲜空气。",
          "focus": ["吸い"],
          "zhFocus": ["吸"]
        },
        {
          "ja": "父はたばこを吸いません。",
          "zh": "父亲不吸烟。",
          "focus": ["吸い"],
          "zhFocus": ["吸"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-330",
      "jlpt": "N5",
      "headword": "スカート",
      "source_form": "スカート",
      "variants": [
        "スカート"
      ],
      "reading": "スカート",
      "reading_variants": [
        "スカート"
      ],
      "romaji": "sukaato",
      "part_of_speech": "noun",
      "meaning_zh": "裙子",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "妹は青いスカートをはいています。",
          "zh": "妹妹穿着蓝色裙子。",
          "focus": ["スカート"],
          "zhFocus": ["裙子"]
        },
        {
          "ja": "新しいスカートを買いました。",
          "zh": "买了新裙子。",
          "focus": ["スカート"],
          "zhFocus": ["裙子"]
        },
        {
          "ja": "このスカートは少し長いです。",
          "zh": "这条裙子有点长。",
          "focus": ["スカート"],
          "zhFocus": ["裙子"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-331",
      "jlpt": "N5",
      "headword": "好き",
      "source_form": "好き",
      "variants": [
        "好き"
      ],
      "reading": "すき",
      "reading_variants": [
        "すき"
      ],
      "romaji": "suki",
      "part_of_speech": "na-adjective",
      "meaning_zh": "喜欢",
      "kanji_readings": [
        {
          "form": "好き",
          "reading": "すき"
        }
      ],
      "examples": [
        {
          "ja": "猫が好きです。",
          "zh": "喜欢猫。",
          "focus": ["好き"],
          "zhFocus": ["喜欢"]
        },
        {
          "ja": "音楽が好きです。",
          "zh": "喜欢音乐。",
          "focus": ["好き"],
          "zhFocus": ["喜欢"]
        },
        {
          "ja": "好きな食べ物は何ですか。",
          "zh": "你喜欢的食物是什么？",
          "focus": ["好き"],
          "zhFocus": ["喜欢"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-332",
      "jlpt": "N5",
      "headword": "～すぎ",
      "source_form": "～すぎ",
      "variants": [
        "～すぎ"
      ],
      "reading": "～すぎ",
      "reading_variants": [
        "～すぎ"
      ],
      "romaji": "~sugi",
      "part_of_speech": "suffix/pattern",
      "meaning_zh": "过度；……多、……过后（时间）",
      "senses_zh": [
        "过度",
        "……多、……过后（时间）"
      ],
      "kanji_readings": [],
      "examples": [
        {
          "ja": "食べすぎに気をつけましょう。",
          "zh": "注意别吃太多。",
          "focus": ["すぎ"],
          "zhFocus": ["太多"]
        },
        {
          "ja": "もう十時すぎです。",
          "zh": "已经十点多了。",
          "focus": ["すぎ"],
          "zhFocus": ["多"]
        },
        {
          "ja": "三時すぎに来ます。",
          "zh": "三点多来。",
          "focus": ["すぎ"],
          "zhFocus": ["多"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-333",
      "jlpt": "N5",
      "headword": "少ない",
      "source_form": "少ない",
      "variants": [
        "少ない"
      ],
      "reading": "すくない",
      "reading_variants": [
        "すくない"
      ],
      "romaji": "sukunai",
      "part_of_speech": "i-adjective",
      "meaning_zh": "少的",
      "kanji_readings": [
        {
          "form": "少ない",
          "reading": "すくない"
        }
      ],
      "examples": [
        {
          "ja": "この駅は人が少ないです。",
          "zh": "这个车站人很少。",
          "focus": ["少ない"],
          "zhFocus": ["少"]
        },
        {
          "ja": "この町は店が少ないです。",
          "zh": "这个城镇店很少。",
          "focus": ["少ない"],
          "zhFocus": ["少"]
        },
        {
          "ja": "今日は客が少ないと思います。",
          "zh": "我觉得今天客人很少。",
          "focus": ["少ない"],
          "zhFocus": ["少"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-334",
      "merged_source_ids": ["n4-347"],
      "jlpt": "N5",
      "headword": "すぐに",
      "source_form": "すぐに",
      "variants": [
        "すぐに"
      ],
      "reading": "すぐに",
      "reading_variants": [
        "すぐに"
      ],
      "romaji": "sugu ni",
      "part_of_speech": "adverb",
      "meaning_zh": "马上；立刻",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "すぐに行きます。",
          "zh": "马上去。",
          "focus": ["すぐに"],
          "zhFocus": ["马上"]
        },
        {
          "ja": "すぐに帰ってください。",
          "zh": "请马上回去。",
          "focus": ["すぐに"],
          "zhFocus": ["马上"]
        },
        {
          "ja": "先生はすぐに来ました。",
          "zh": "老师马上来了。",
          "focus": ["すぐに"],
          "zhFocus": ["马上"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-335",
      "jlpt": "N5",
      "headword": "少し",
      "source_form": "少し",
      "variants": [
        "少し"
      ],
      "reading": "すこし",
      "reading_variants": [
        "すこし"
      ],
      "romaji": "sukoshi",
      "part_of_speech": "adverb",
      "meaning_zh": "一点；少量",
      "kanji_readings": [
        {
          "form": "少し",
          "reading": "すこし"
        }
      ],
      "examples": [
        {
          "ja": "少し寒いですね。",
          "zh": "有点冷啊。",
          "focus": ["少し"],
          "zhFocus": ["有点"]
        },
        {
          "ja": "少し休みましょう。",
          "zh": "稍微休息一下吧。",
          "focus": ["少し"],
          "zhFocus": ["稍微"]
        },
        {
          "ja": "水を少し飲みます。",
          "zh": "喝一点水。",
          "focus": ["少し"],
          "zhFocus": ["一点"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-336",
      "jlpt": "N5",
      "headword": "涼しい",
      "source_form": "涼しい",
      "variants": [
        "涼しい"
      ],
      "reading": "すずしい",
      "reading_variants": [
        "すずしい"
      ],
      "romaji": "suzushii",
      "part_of_speech": "i-adjective",
      "meaning_zh": "凉爽的",
      "kanji_readings": [
        {
          "form": "涼しい",
          "reading": "すずしい"
        }
      ],
      "examples": [
        {
          "ja": "今日は涼しいです。",
          "zh": "今天很凉爽。",
          "focus": ["涼しい"],
          "zhFocus": ["凉爽"]
        },
        {
          "ja": "涼しい日が続きます。",
          "zh": "凉爽的天气会持续。",
          "focus": ["涼しい"],
          "zhFocus": ["凉爽"]
        },
        {
          "ja": "外はとても涼しいです。",
          "zh": "外面非常凉爽。",
          "focus": ["涼しい"],
          "zhFocus": ["凉爽"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-337",
      "jlpt": "N5",
      "headword": "～ずつ",
      "source_form": "～ずつ",
      "variants": [
        "～ずつ"
      ],
      "reading": "～ずつ",
      "reading_variants": [
        "～ずつ"
      ],
      "romaji": "~zutsu",
      "part_of_speech": "particle",
      "meaning_zh": "每……；各……；一点点地",
      "senses_zh": [
        "每……；各……",
        "一点点地"
      ],
      "kanji_readings": [],
      "examples": [
        {
          "ja": "一つずつ取ってください。",
          "zh": "请一个一个拿。",
          "focus": ["ずつ"]
        },
        {
          "ja": "少しずつ覚えます。",
          "zh": "一点一点记住。",
          "focus": ["ずつ"]
        },
        {
          "ja": "二人ずつ入ります。",
          "zh": "每次两个人进去。",
          "focus": ["ずつ"],
          "zhFocus": ["每"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-338",
      "jlpt": "N5",
      "headword": "ストーブ",
      "source_form": "ストーブ",
      "variants": [
        "ストーブ"
      ],
      "reading": "ストーブ",
      "reading_variants": [
        "ストーブ"
      ],
      "romaji": "sutoobu",
      "part_of_speech": "noun",
      "meaning_zh": "取暖器；火炉",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "寒いので、ストーブをつけました。",
          "zh": "因为冷，所以打开了取暖器。",
          "focus": ["ストーブ"],
          "zhFocus": ["取暖器"]
        },
        {
          "ja": "寝る前に、ストーブを消してください。",
          "zh": "睡觉前请关掉取暖器。",
          "focus": ["ストーブ"],
          "zhFocus": ["取暖器"]
        },
        {
          "ja": "ストーブで部屋を暖めます。",
          "zh": "用取暖器把房间暖起来。",
          "focus": ["ストーブ"],
          "zhFocus": ["取暖器"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-339",
      "jlpt": "N5",
      "headword": "スプーン",
      "source_form": "スプーン",
      "variants": [
        "スプーン"
      ],
      "reading": "スプーン",
      "reading_variants": [
        "スプーン"
      ],
      "romaji": "supuun",
      "part_of_speech": "noun",
      "meaning_zh": "勺子",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "すみません、スプーンをもう一つください。",
          "zh": "不好意思，请再给我一把勺子。",
          "focus": ["スプーン"],
          "zhFocus": ["勺子"]
        },
        {
          "ja": "スプーンは引き出しの中にあります。",
          "zh": "勺子在抽屉里。",
          "focus": ["スプーン"],
          "zhFocus": ["勺子"]
        },
        {
          "ja": "スプーンでスープを飲みます。",
          "zh": "用勺子喝汤。",
          "focus": ["スプーン"],
          "zhFocus": ["勺子"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-340",
      "jlpt": "N5",
      "headword": "スポーツ",
      "source_form": "スポーツ",
      "variants": [
        "スポーツ"
      ],
      "reading": "スポーツ",
      "reading_variants": [
        "スポーツ"
      ],
      "romaji": "supootsu",
      "part_of_speech": "noun",
      "meaning_zh": "运动",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "スポーツが好きです。",
          "zh": "喜欢运动。",
          "focus": ["スポーツ"],
          "zhFocus": ["运动"]
        },
        {
          "ja": "日曜日にスポーツをします。",
          "zh": "星期天运动。",
          "focus": ["スポーツ"],
          "zhFocus": ["运动"]
        },
        {
          "ja": "どんなスポーツが好きですか。",
          "zh": "你喜欢什么运动？",
          "focus": ["スポーツ"],
          "zhFocus": ["运动"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-341",
      "jlpt": "N5",
      "headword": "ズボン",
      "source_form": "ズボン",
      "variants": [
        "ズボン"
      ],
      "reading": "ズボン",
      "reading_variants": [
        "ズボン"
      ],
      "romaji": "zubon",
      "part_of_speech": "noun",
      "meaning_zh": "裤子",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "黒いズボンをはきます。",
          "zh": "穿黑色裤子。",
          "focus": ["ズボン"],
          "zhFocus": ["裤子"]
        },
        {
          "ja": "このズボンは少し大きいです。",
          "zh": "这条裤子有点大。",
          "focus": ["ズボン"],
          "zhFocus": ["裤子"]
        },
        {
          "ja": "昨日、ズボンを洗いました。",
          "zh": "昨天洗了裤子。",
          "focus": ["ズボン"],
          "zhFocus": ["裤子"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-342",
      "jlpt": "N5",
      "headword": "住む",
      "source_form": "住む",
      "variants": [
        "住む"
      ],
      "reading": "すむ",
      "reading_variants": [
        "すむ"
      ],
      "romaji": "sumu",
      "part_of_speech": "verb",
      "meaning_zh": "居住",
      "kanji_readings": [
        {
          "form": "住む",
          "reading": "すむ"
        }
      ],
      "examples": [
        {
          "ja": "東京に住んでいます。",
          "zh": "住在东京。",
          "focus": ["住ん"],
          "zhFocus": ["住"]
        },
        {
          "ja": "駅の近くに住みたいです。",
          "zh": "想住在车站附近。",
          "focus": ["住み"],
          "zhFocus": ["住"]
        },
        {
          "ja": "家族と一緒に住んでいます。",
          "zh": "和家人一起住。",
          "focus": ["住ん"],
          "zhFocus": ["住"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-343",
      "jlpt": "N5",
      "headword": "する",
      "source_form": "する",
      "variants": [
        "する"
      ],
      "reading": "する",
      "reading_variants": [
        "する"
      ],
      "romaji": "suru",
      "part_of_speech": "verb",
      "meaning_zh": "做；进行",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "毎朝、公園で散歩をします。",
          "zh": "每天早上在公园散步。",
          "focus": ["し"]
        },
        {
          "ja": "家に帰ってから宿題をします。",
          "zh": "回家后做作业。",
          "focus": ["し"],
          "zhFocus": ["做"]
        },
        {
          "ja": "週末は何をしますか。",
          "zh": "周末做什么？",
          "focus": ["し"],
          "zhFocus": ["做"]
        }
      ],
      "note_zh": "既可单独表示“做”，也可接许多名词构成「勉強する」「掃除する」等动词。"
    },
    {
      "id": "n5-344",
      "jlpt": "N5",
      "headword": "座る",
      "source_form": "座る",
      "variants": [
        "座る"
      ],
      "reading": "すわる",
      "reading_variants": [
        "すわる"
      ],
      "romaji": "suwaru",
      "part_of_speech": "verb",
      "meaning_zh": "坐",
      "kanji_readings": [
        {
          "form": "座る",
          "reading": "すわる"
        }
      ],
      "examples": [
        {
          "ja": "ここに座ってください。",
          "zh": "请坐在这里。",
          "focus": ["座っ"],
          "zhFocus": ["坐"]
        },
        {
          "ja": "椅子に座ります。",
          "zh": "坐在椅子上。",
          "focus": ["座り"],
          "zhFocus": ["坐"]
        },
        {
          "ja": "友達の隣に座りました。",
          "zh": "坐在朋友旁边。",
          "focus": ["座り"],
          "zhFocus": ["坐"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-345",
      "jlpt": "N5",
      "headword": "背",
      "source_form": "背",
      "variants": [
        "背"
      ],
      "reading": "せい",
      "reading_variants": [
        "せい",
        "せ"
      ],
      "romaji": "sei",
      "part_of_speech": "noun",
      "meaning_zh": "身高；个子",
      "kanji_readings": [
        {
          "form": "背",
          "reading": "せい"
        }
      ],
      "examples": [
        {
          "ja": "父は背が高いです。",
          "zh": "父亲个子高。",
          "focus": ["背"],
          "zhFocus": ["个子"]
        },
        {
          "ja": "私は背が低いです。",
          "zh": "我个子矮。",
          "focus": ["背"],
          "zhFocus": ["个子"]
        },
        {
          "ja": "兄は背が高くなりました。",
          "zh": "哥哥长高了。",
          "focus": ["背"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-346",
      "jlpt": "N5",
      "headword": "生徒",
      "source_form": "生徒",
      "variants": [
        "生徒"
      ],
      "reading": "せいと",
      "reading_variants": [
        "せいと"
      ],
      "romaji": "seito",
      "part_of_speech": "noun",
      "meaning_zh": "学生（中小学生等）",
      "kanji_readings": [
        {
          "form": "生徒",
          "reading": "せいと"
        }
      ],
      "examples": [
        {
          "ja": "生徒が教室にいます。",
          "zh": "学生在教室里。",
          "focus": ["生徒"],
          "zhFocus": ["学生"]
        },
        {
          "ja": "生徒は先生に質問します。",
          "zh": "学生问老师问题。",
          "focus": ["生徒"],
          "zhFocus": ["学生"]
        },
        {
          "ja": "この学校には生徒が多いです。",
          "zh": "这所学校学生很多。",
          "focus": ["生徒"],
          "zhFocus": ["学生"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-347",
      "jlpt": "N5",
      "headword": "セーター",
      "source_form": "セーター",
      "variants": [
        "セーター"
      ],
      "reading": "セーター",
      "reading_variants": [
        "セーター"
      ],
      "romaji": "seetaa",
      "part_of_speech": "noun",
      "meaning_zh": "毛衣",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "冬はいつもセーターを着ています。",
          "zh": "冬天总是穿着毛衣。",
          "focus": ["セーター"],
          "zhFocus": ["毛衣"]
        },
        {
          "ja": "母がセーターをくれました。",
          "zh": "妈妈送了我一件毛衣。",
          "focus": ["セーター"],
          "zhFocus": ["毛衣"]
        },
        {
          "ja": "このセーターは暖かいです。",
          "zh": "这件毛衣很暖和。",
          "focus": ["セーター"],
          "zhFocus": ["毛衣"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-348",
      "jlpt": "N5",
      "headword": "石鹸",
      "source_form": "石鹸",
      "variants": [
        "石鹸"
      ],
      "reading": "せっけん",
      "reading_variants": [
        "せっけん"
      ],
      "romaji": "sekken",
      "part_of_speech": "noun",
      "meaning_zh": "肥皂",
      "kanji_readings": [
        {
          "form": "石鹸",
          "reading": "せっけん"
        }
      ],
      "examples": [
        {
          "ja": "石鹸がもうありません。",
          "zh": "肥皂已经没有了。",
          "focus": ["石鹸"],
          "zhFocus": ["肥皂"]
        },
        {
          "ja": "新しい石鹸をお風呂に置きました。",
          "zh": "在浴室里放了新肥皂。",
          "focus": ["石鹸"],
          "zhFocus": ["肥皂"]
        },
        {
          "ja": "石鹸で手を洗います。",
          "zh": "用肥皂洗手。",
          "focus": ["石鹸"],
          "zhFocus": ["肥皂"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-349",
      "jlpt": "N5",
      "headword": "背広",
      "source_form": "背広",
      "variants": [
        "背広"
      ],
      "reading": "せびろ",
      "reading_variants": [
        "せびろ"
      ],
      "romaji": "sebiro",
      "part_of_speech": "noun",
      "meaning_zh": "西装",
      "kanji_readings": [
        {
          "form": "背広",
          "reading": "せびろ"
        }
      ],
      "examples": [
        {
          "ja": "父は会社で背広を着ています。",
          "zh": "父亲在公司穿西装。",
          "focus": ["背広"],
          "zhFocus": ["西装"]
        },
        {
          "ja": "新しい背広を買いました。",
          "zh": "买了新西装。",
          "focus": ["背広"],
          "zhFocus": ["西装"]
        },
        {
          "ja": "背広をハンガーに掛けます。",
          "zh": "把西装挂到衣架上。",
          "focus": ["背広"],
          "zhFocus": ["西装"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-350",
      "jlpt": "N5",
      "headword": "狭い",
      "source_form": "狭い",
      "variants": [
        "狭い"
      ],
      "reading": "せまい",
      "reading_variants": [
        "せまい"
      ],
      "romaji": "semai",
      "part_of_speech": "i-adjective",
      "meaning_zh": "狭窄的",
      "kanji_readings": [
        {
          "form": "狭い",
          "reading": "せまい"
        }
      ],
      "examples": [
        {
          "ja": "この部屋は狭いです。",
          "zh": "这个房间很窄小。",
          "focus": ["狭い"],
          "zhFocus": ["窄小"]
        },
        {
          "ja": "この道は狭いです。",
          "zh": "这条路很窄。",
          "focus": ["狭い"],
          "zhFocus": ["窄"]
        },
        {
          "ja": "狭い部屋に机が二つあります。",
          "zh": "狭小的房间里有两张桌子。",
          "focus": ["狭い"],
          "zhFocus": ["狭小"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-351",
      "jlpt": "N5",
      "headword": "ゼロ",
      "source_form": "ゼロ",
      "variants": [
        "ゼロ"
      ],
      "reading": "ゼロ",
      "reading_variants": [
        "ゼロ"
      ],
      "romaji": "zero",
      "part_of_speech": "numeral",
      "meaning_zh": "零（外来语）",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "試合はゼロ対ゼロです。",
          "zh": "比赛比分是零比零。",
          "focus": ["ゼロ", "ゼロ"],
          "zhFocus": ["零", "零"]
        },
        {
          "ja": "残り時間はゼロです。",
          "zh": "剩余时间是零。",
          "focus": ["ゼロ"],
          "zhFocus": ["零"]
        },
        {
          "ja": "ゼロから日本語を勉強します。",
          "zh": "从零开始学习日语。",
          "focus": ["ゼロ"],
          "zhFocus": ["零"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-352",
      "jlpt": "N5",
      "headword": "千",
      "source_form": "千",
      "variants": [
        "千"
      ],
      "reading": "せん",
      "reading_variants": [
        "せん"
      ],
      "romaji": "sen",
      "part_of_speech": "numeral",
      "meaning_zh": "一千",
      "kanji_readings": [
        {
          "form": "千",
          "reading": "せん"
        }
      ],
      "examples": [
        {
          "ja": "この本は千円です。",
          "zh": "这本书一千日元。",
          "focus": ["千"],
          "zhFocus": ["一千"]
        },
        {
          "ja": "会場に千人集まりました。",
          "zh": "会场聚集了一千人。",
          "focus": ["千"],
          "zhFocus": ["一千"]
        },
        {
          "ja": "千を数字で書いてください。",
          "zh": "请用数字写出一千。",
          "focus": ["千"],
          "zhFocus": ["一千"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-353",
      "jlpt": "N5",
      "headword": "先月",
      "source_form": "先月",
      "variants": [
        "先月"
      ],
      "reading": "せんげつ",
      "reading_variants": [
        "せんげつ"
      ],
      "romaji": "sengetsu",
      "part_of_speech": "noun",
      "meaning_zh": "上个月",
      "kanji_readings": [
        {
          "form": "先月",
          "reading": "せんげつ"
        }
      ],
      "examples": [
        {
          "ja": "先月、新しい仕事を始めました。",
          "zh": "上个月开始了新工作。",
          "focus": ["先月"],
          "zhFocus": ["上个月"]
        },
        {
          "ja": "先月はとても忙しかったです。",
          "zh": "上个月非常忙。",
          "focus": ["先月"],
          "zhFocus": ["上个月"]
        },
        {
          "ja": "先月、家族と旅行しました。",
          "zh": "上个月和家人旅行了。",
          "focus": ["先月"],
          "zhFocus": ["上个月"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-354",
      "jlpt": "N5",
      "headword": "先週",
      "source_form": "先週",
      "variants": [
        "先週"
      ],
      "reading": "せんしゅう",
      "reading_variants": [
        "せんしゅう"
      ],
      "romaji": "senshuu",
      "part_of_speech": "noun",
      "meaning_zh": "上周",
      "kanji_readings": [
        {
          "form": "先週",
          "reading": "せんしゅう"
        }
      ],
      "examples": [
        {
          "ja": "先週、図書館へ行きました。",
          "zh": "上周去了图书馆。",
          "focus": ["先週"],
          "zhFocus": ["上周"]
        },
        {
          "ja": "先週は学校が休みでした。",
          "zh": "上周学校放假。",
          "focus": ["先週"],
          "zhFocus": ["上周"]
        },
        {
          "ja": "先週、友達と映画を見ました。",
          "zh": "上周和朋友看了电影。",
          "focus": ["先週"],
          "zhFocus": ["上周"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-355",
      "jlpt": "N5",
      "headword": "先生",
      "source_form": "先生",
      "variants": [
        "先生"
      ],
      "reading": "せんせい",
      "reading_variants": [
        "せんせい"
      ],
      "romaji": "sensei",
      "part_of_speech": "noun",
      "meaning_zh": "老师；医生（对老师、医生等的尊称）",
      "senses_zh": [
        "老师",
        "医生（对老师、医生等的尊称）"
      ],
      "kanji_readings": [
        {
          "form": "先生",
          "reading": "せんせい"
        }
      ],
      "examples": [
        {
          "ja": "分からない時は、先生に聞いてください。",
          "zh": "不懂的时候请问老师。",
          "focus": ["先生"],
          "zhFocus": ["老师"]
        },
        {
          "ja": "先生、ちょっと質問があります。",
          "zh": "老师，我有个问题。",
          "focus": ["先生"],
          "zhFocus": ["老师"]
        },
        {
          "ja": "私の先生は今日も元気です。",
          "zh": "我的老师今天也很有精神。",
          "focus": ["先生"],
          "zhFocus": ["老师"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-356",
      "jlpt": "N5",
      "headword": "洗濯",
      "source_form": "洗濯",
      "variants": [
        "洗濯"
      ],
      "reading": "せんたく",
      "reading_variants": [
        "せんたく"
      ],
      "romaji": "sentaku",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "洗衣服",
      "kanji_readings": [
        {
          "form": "洗濯",
          "reading": "せんたく"
        }
      ],
      "examples": [
        {
          "ja": "服を洗濯します。",
          "zh": "洗衣服。",
          "focus": ["洗濯"],
          "zhFocus": ["洗"]
        },
        {
          "ja": "日曜日に洗濯をします。",
          "zh": "星期天洗衣服。",
          "focus": ["洗濯"],
          "zhFocus": ["洗衣服"]
        },
        {
          "ja": "雨なので、今日は洗濯をしません。",
          "zh": "因为下雨，今天不洗衣服。",
          "focus": ["洗濯"],
          "zhFocus": ["洗衣服"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-357",
      "jlpt": "N5",
      "headword": "全部",
      "source_form": "全部",
      "variants": [
        "全部"
      ],
      "reading": "ぜんぶ",
      "reading_variants": [
        "ぜんぶ"
      ],
      "romaji": "zenbu",
      "part_of_speech": "noun",
      "meaning_zh": "全部",
      "kanji_readings": [
        {
          "form": "全部",
          "reading": "ぜんぶ"
        }
      ],
      "examples": [
        {
          "ja": "全部食べました。",
          "zh": "全部吃了。",
          "focus": ["全部"],
          "zhFocus": ["全部"]
        },
        {
          "ja": "本を全部読みました。",
          "zh": "把书全部读完了。",
          "focus": ["全部"],
          "zhFocus": ["全部"]
        },
        {
          "ja": "全部でいくらですか。",
          "zh": "一共多少钱？",
          "focus": ["全部"],
          "zhFocus": ["一共"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-358",
      "jlpt": "N5",
      "headword": "そう",
      "source_form": "そう; そうです",
      "variants": [
        "そう",
        "そうです"
      ],
      "reading": "そう",
      "reading_variants": [
        "そう",
        "そうです"
      ],
      "romaji": "sou",
      "part_of_speech": "adverb/expression",
      "meaning_zh": "是那样；对",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "そうです。",
          "zh": "是那样。",
          "focus": ["そうです"],
          "zhFocus": ["是那样"]
        },
        {
          "ja": "そうですか。",
          "zh": "是这样啊。",
          "focus": ["そうです"],
          "zhFocus": ["是这样"]
        },
        {
          "ja": "いいえ、そうではありません。",
          "zh": "不，不是那样。",
          "focus": ["そう"],
          "zhFocus": ["那样"]
        }
      ],
      "note_zh": "本条只讲回答或确认前述内容的「そう」；表示方式的“那样做”和接在词后表示样态的「〜そう」另行学习。"
    },
    {
      "id": "n5-359",
      "jlpt": "N5",
      "headword": "掃除",
      "source_form": "掃除",
      "variants": [
        "掃除"
      ],
      "reading": "そうじ",
      "reading_variants": [
        "そうじ (する)"
      ],
      "romaji": "souji",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "打扫",
      "kanji_readings": [
        {
          "form": "掃除",
          "reading": "そうじ"
        }
      ],
      "examples": [
        {
          "ja": "部屋を掃除します。",
          "zh": "打扫房间。",
          "focus": ["掃除"],
          "zhFocus": ["打扫"]
        },
        {
          "ja": "日曜日に家を掃除しました。",
          "zh": "星期天打扫了家。",
          "focus": ["掃除"],
          "zhFocus": ["打扫"]
        },
        {
          "ja": "教室をきれいに掃除します。",
          "zh": "把教室打扫干净。",
          "focus": ["掃除"],
          "zhFocus": ["打扫"]
        }
      ],
      "note_zh": "可作名词，也常与「する」构成动词。"
    },
    {
      "id": "n5-360",
      "jlpt": "N5",
      "headword": "そして",
      "source_form": "そうして; そして",
      "variants": [
        "そして"
      ],
      "reading": "そして",
      "reading_variants": [
        "そして"
      ],
      "romaji": "soshite",
      "part_of_speech": "conjunction",
      "meaning_zh": "然后；并且",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "本を読みます。そして、寝ます。",
          "zh": "读书，然后睡觉。",
          "focus": ["そして"],
          "zhFocus": ["然后"]
        },
        {
          "ja": "駅へ行きます。そして、友達に会います。",
          "zh": "去车站，然后见朋友。",
          "focus": ["そして"],
          "zhFocus": ["然后"]
        },
        {
          "ja": "安いです。そして、おいしいです。",
          "zh": "很便宜，而且很好吃。",
          "focus": ["そして"],
          "zhFocus": ["而且"]
        }
      ],
      "note_zh": "「そして」与「そうして」是相关但不同的表达，不能把「そうして」当作本词条的读音。"
    },
    {
      "id": "n5-361",
      "jlpt": "N5",
      "headword": "そこ",
      "source_form": "そこ",
      "variants": [
        "そこ"
      ],
      "reading": "そこ",
      "reading_variants": [
        "そこ"
      ],
      "romaji": "soko",
      "part_of_speech": "pronoun/demonstrative",
      "meaning_zh": "那里（中称）",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "そこにかばんがあります。",
          "zh": "那里有包。",
          "focus": ["そこ"],
          "zhFocus": ["那里"]
        },
        {
          "ja": "そこで待ってください。",
          "zh": "请在那里等。",
          "focus": ["そこ"],
          "zhFocus": ["那里"]
        },
        {
          "ja": "そこは駅です。",
          "zh": "那里是车站。",
          "focus": ["そこ"],
          "zhFocus": ["那里"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-362",
      "jlpt": "N5",
      "headword": "そちら",
      "source_form": "そちら",
      "variants": [
        "そちら"
      ],
      "reading": "そちら",
      "reading_variants": [
        "そちら"
      ],
      "romaji": "sochira",
      "part_of_speech": "pronoun/demonstrative",
      "meaning_zh": "那边（中称）；您那边（礼貌说法）",
      "senses_zh": [
        "那边（中称）",
        "您那边（礼貌说法）"
      ],
      "kanji_readings": [],
      "examples": [
        {
          "ja": "そちらへ行きます。",
          "zh": "我去那边。",
          "focus": ["そちら"],
          "zhFocus": ["那边"]
        },
        {
          "ja": "そちらは寒いですか。",
          "zh": "你那边冷吗？",
          "focus": ["そちら"],
          "zhFocus": ["那边"]
        },
        {
          "ja": "そちらで待ってください。",
          "zh": "请在那边等。",
          "focus": ["そちら"],
          "zhFocus": ["那边"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-363",
      "jlpt": "N5",
      "headword": "そっち",
      "source_form": "そっち",
      "variants": [
        "そっち"
      ],
      "reading": "そっち",
      "reading_variants": [
        "そっち"
      ],
      "romaji": "sotchi",
      "part_of_speech": "pronoun/demonstrative",
      "meaning_zh": "那边（中称，口语）；你那边",
      "senses_zh": [
        "那边（中称，口语）",
        "你那边"
      ],
      "kanji_readings": [],
      "examples": [
        {
          "ja": "そっちへ行きます。",
          "zh": "去你那边。",
          "focus": ["そっち"],
          "zhFocus": ["你那边"]
        },
        {
          "ja": "そっちを見てください。",
          "zh": "请看那边。",
          "focus": ["そっち"],
          "zhFocus": ["那边"]
        },
        {
          "ja": "そっちは暑いですか。",
          "zh": "你那边热吗？",
          "focus": ["そっち"],
          "zhFocus": ["你那边"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-364",
      "jlpt": "N5",
      "headword": "外",
      "source_form": "外",
      "variants": [
        "外"
      ],
      "reading": "そと",
      "reading_variants": [
        "そと"
      ],
      "romaji": "soto",
      "part_of_speech": "noun",
      "meaning_zh": "外面",
      "kanji_readings": [
        {
          "form": "外",
          "reading": "そと"
        }
      ],
      "examples": [
        {
          "ja": "外は寒いです。",
          "zh": "外面很冷。",
          "focus": ["外"],
          "zhFocus": ["外面"]
        },
        {
          "ja": "外で待っています。",
          "zh": "在外面等。",
          "focus": ["外"],
          "zhFocus": ["外面"]
        },
        {
          "ja": "子供が外で遊んでいます。",
          "zh": "孩子在外面玩。",
          "focus": ["外"],
          "zhFocus": ["外面"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-365",
      "jlpt": "N5",
      "headword": "その",
      "source_form": "その",
      "variants": [
        "その"
      ],
      "reading": "その",
      "reading_variants": [
        "その"
      ],
      "romaji": "sono",
      "part_of_speech": "pre-noun/demonstrative",
      "meaning_zh": "那个（连体词，中称）",
      "answer_zh": "那个（中称）",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "その本をください。",
          "zh": "请给我那本书。",
          "focus": ["その"],
          "zhFocus": ["那"]
        },
        {
          "ja": "その店は有名です。",
          "zh": "那家店很有名。",
          "focus": ["その"],
          "zhFocus": ["那"]
        },
        {
          "ja": "その人は先生です。",
          "zh": "那个人是老师。",
          "focus": ["その"],
          "zhFocus": ["那个"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-366",
      "jlpt": "N5",
      "headword": "そば",
      "source_form": "そば",
      "variants": [
        "そば"
      ],
      "reading": "そば",
      "reading_variants": [
        "そば"
      ],
      "romaji": "soba",
      "part_of_speech": "noun",
      "meaning_zh": "旁边；附近",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "駅のそばに店があります。",
          "zh": "车站旁边有商店。",
          "focus": ["そば"],
          "zhFocus": ["旁边"]
        },
        {
          "ja": "母のそばに座ります。",
          "zh": "坐在妈妈旁边。",
          "focus": ["そば"],
          "zhFocus": ["旁边"]
        },
        {
          "ja": "窓のそばに机があります。",
          "zh": "窗户旁边有桌子。",
          "focus": ["そば"],
          "zhFocus": ["旁边"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-367",
      "jlpt": "N5",
      "headword": "空",
      "source_form": "空",
      "variants": [
        "空"
      ],
      "reading": "そら",
      "reading_variants": [
        "そら"
      ],
      "romaji": "sora",
      "part_of_speech": "noun",
      "meaning_zh": "天空",
      "kanji_readings": [
        {
          "form": "空",
          "reading": "そら"
        }
      ],
      "examples": [
        {
          "ja": "空を見てください。",
          "zh": "请看看天空。",
          "focus": ["空"],
          "zhFocus": ["天空"]
        },
        {
          "ja": "今日は空がきれいです。",
          "zh": "今天的天空很美。",
          "focus": ["空"],
          "zhFocus": ["天空"]
        },
        {
          "ja": "空に鳥が飛んでいます。",
          "zh": "鸟儿正在天空中飞。",
          "focus": ["空"],
          "zhFocus": ["天空"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-368",
      "jlpt": "N5",
      "headword": "それ",
      "source_form": "それ",
      "variants": [
        "それ"
      ],
      "reading": "それ",
      "reading_variants": [
        "それ"
      ],
      "romaji": "sore",
      "part_of_speech": "pronoun/demonstrative",
      "meaning_zh": "那个（中称）",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "それは何ですか。",
          "zh": "那是什么？",
          "focus": ["それ"],
          "zhFocus": ["那"]
        },
        {
          "ja": "それをください。",
          "zh": "请给我那个。",
          "focus": ["それ"],
          "zhFocus": ["那个"]
        },
        {
          "ja": "それは私の傘です。",
          "zh": "那是我的伞。",
          "focus": ["それ"],
          "zhFocus": ["那"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-369",
      "jlpt": "N5",
      "headword": "それから",
      "source_form": "それから",
      "variants": [
        "それから"
      ],
      "reading": "それから",
      "reading_variants": [
        "それから"
      ],
      "romaji": "sorekara",
      "part_of_speech": "conjunction",
      "meaning_zh": "然后；从那以后",
      "senses_zh": [
        "然后",
        "从那以后"
      ],
      "kanji_readings": [],
      "examples": [
        {
          "ja": "学校へ行きます。それから、図書館へ行きます。",
          "zh": "去学校。然后去图书馆。",
          "focus": ["それから"],
          "zhFocus": ["然后"]
        },
        {
          "ja": "朝ご飯を食べます。それから、出かけます。",
          "zh": "吃早饭。然后出门。",
          "focus": ["それから"],
          "zhFocus": ["然后"]
        },
        {
          "ja": "本を読みました。それから、寝ました。",
          "zh": "读了书。然后睡了。",
          "focus": ["それから"],
          "zhFocus": ["然后"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-370",
      "jlpt": "N5",
      "headword": "それでは",
      "source_form": "それでは",
      "variants": [
        "それでは"
      ],
      "reading": "それでは",
      "reading_variants": [
        "それでは"
      ],
      "romaji": "soredewa",
      "part_of_speech": "conjunction",
      "meaning_zh": "那么（比「では」更郑重）；既然这样",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "それでは、授業を始めます。",
          "zh": "那么，现在开始上课。",
          "focus": ["それでは"],
          "zhFocus": ["那么"]
        },
        {
          "ja": "それでは、また明日。",
          "zh": "那么，明天见。",
          "focus": ["それでは"],
          "zhFocus": ["那么"]
        },
        {
          "ja": "それでは、失礼します。",
          "zh": "那么，我先告辞了。",
          "focus": ["それでは"],
          "zhFocus": ["那么"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-371",
      "jlpt": "N5",
      "headword": "～台",
      "source_form": "～台",
      "variants": [
        "～台"
      ],
      "reading": "～だい",
      "reading_variants": [
        "～だい"
      ],
      "romaji": "~dai",
      "part_of_speech": "counter/suffix",
      "meaning_zh": "……台；……辆",
      "kanji_readings": [
        {
          "form": "～台",
          "reading": "～だい"
        }
      ],
      "examples": [
        {
          "ja": "車が三台あります。",
          "zh": "有三辆车。",
          "focus": ["台"],
          "zhFocus": ["辆"]
        },
        {
          "ja": "テレビを一台買いました。",
          "zh": "买了一台电视。",
          "focus": ["台"],
          "zhFocus": ["台"]
        },
        {
          "ja": "自転車が二台あります。",
          "zh": "有两辆自行车。",
          "focus": ["台"],
          "zhFocus": ["辆"]
        }
      ],
      "note_zh": "接在数字或名词后使用；例句中去掉了前缀符号「～」。"
    },
    {
      "id": "n5-372",
      "jlpt": "N5",
      "headword": "大学",
      "source_form": "大学",
      "variants": [
        "大学"
      ],
      "reading": "だいがく",
      "reading_variants": [
        "だいがく"
      ],
      "romaji": "daigaku",
      "part_of_speech": "noun",
      "meaning_zh": "大学",
      "kanji_readings": [
        {
          "form": "大学",
          "reading": "だいがく"
        }
      ],
      "examples": [
        {
          "ja": "大学へ行きます。",
          "zh": "去大学。",
          "focus": ["大学"],
          "zhFocus": ["大学"]
        },
        {
          "ja": "大学は駅の近くです。",
          "zh": "大学在车站附近。",
          "focus": ["大学"],
          "zhFocus": ["大学"]
        },
        {
          "ja": "大学で友達に会います。",
          "zh": "在大学见朋友。",
          "focus": ["大学"],
          "zhFocus": ["大学"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-373",
      "jlpt": "N5",
      "headword": "大使館",
      "source_form": "大使館",
      "variants": [
        "大使館"
      ],
      "reading": "たいしかん",
      "reading_variants": [
        "たいしかん"
      ],
      "romaji": "taishikan",
      "part_of_speech": "noun",
      "meaning_zh": "大使馆",
      "kanji_readings": [
        {
          "form": "大使館",
          "reading": "たいしかん"
        }
      ],
      "examples": [
        {
          "ja": "大使館へ行きます。",
          "zh": "去大使馆。",
          "focus": ["大使館"],
          "zhFocus": ["大使馆"]
        },
        {
          "ja": "大使館は駅の近くです。",
          "zh": "大使馆在车站附近。",
          "focus": ["大使館"],
          "zhFocus": ["大使馆"]
        },
        {
          "ja": "大使館で友達に会います。",
          "zh": "在大使馆见朋友。",
          "focus": ["大使館"],
          "zhFocus": ["大使馆"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-374",
      "jlpt": "N5",
      "headword": "大丈夫",
      "source_form": "大丈夫",
      "variants": [
        "大丈夫"
      ],
      "reading": "だいじょうぶ",
      "reading_variants": [
        "だいじょうぶ"
      ],
      "romaji": "daijoubu",
      "part_of_speech": "na-adjective",
      "meaning_zh": "没关系；不要紧",
      "kanji_readings": [
        {
          "form": "大丈夫",
          "reading": "だいじょうぶ"
        }
      ],
      "examples": [
        {
          "ja": "大丈夫です。",
          "zh": "没关系。",
          "focus": ["大丈夫"],
          "zhFocus": ["没关系"]
        },
        {
          "ja": "一人で大丈夫ですか。",
          "zh": "一个人没问题吗？",
          "focus": ["大丈夫"],
          "zhFocus": ["没问题"]
        },
        {
          "ja": "もう大丈夫です。",
          "zh": "已经没事了。",
          "focus": ["大丈夫"],
          "zhFocus": ["没事"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-375",
      "jlpt": "N5",
      "headword": "大好き",
      "source_form": "大好き",
      "variants": [
        "大好き"
      ],
      "reading": "だいすき",
      "reading_variants": [
        "だいすき"
      ],
      "romaji": "daisuki",
      "part_of_speech": "na-adjective",
      "meaning_zh": "非常喜欢",
      "kanji_readings": [
        {
          "form": "大好き",
          "reading": "だいすき"
        }
      ],
      "examples": [
        {
          "ja": "猫が大好きです。",
          "zh": "非常喜欢猫。",
          "focus": ["大好き"],
          "zhFocus": ["非常喜欢"]
        },
        {
          "ja": "日本語が大好きです。",
          "zh": "非常喜欢日语。",
          "focus": ["大好き"],
          "zhFocus": ["非常喜欢"]
        },
        {
          "ja": "母の料理が大好きです。",
          "zh": "非常喜欢妈妈做的菜。",
          "focus": ["大好き"],
          "zhFocus": ["非常喜欢"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-376",
      "merged_source_ids": ["n4-393"],
      "jlpt": "N5",
      "headword": "大切",
      "source_form": "大切",
      "variants": [
        "大切"
      ],
      "reading": "たいせつ",
      "reading_variants": [
        "たいせつ"
      ],
      "romaji": "taisetsu",
      "part_of_speech": "na-adjective",
      "meaning_zh": "重要的；珍贵的",
      "kanji_readings": [
        {
          "form": "大切",
          "reading": "たいせつ"
        }
      ],
      "examples": [
        {
          "ja": "家族は大切です。",
          "zh": "家人很重要。",
          "focus": ["大切"],
          "zhFocus": ["重要"]
        },
        {
          "ja": "大切な本をなくしました。",
          "zh": "弄丢了重要的书。",
          "focus": ["大切"],
          "zhFocus": ["重要"]
        },
        {
          "ja": "時間を大切にします。",
          "zh": "珍惜时间。",
          "focus": ["大切"],
          "zhFocus": ["珍惜"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-377",
      "jlpt": "N5",
      "headword": "台所",
      "source_form": "台所",
      "variants": [
        "台所"
      ],
      "reading": "だいどころ",
      "reading_variants": [
        "だいどころ"
      ],
      "romaji": "daidokoro",
      "part_of_speech": "noun",
      "meaning_zh": "厨房",
      "kanji_readings": [
        {
          "form": "台所",
          "reading": "だいどころ"
        }
      ],
      "examples": [
        {
          "ja": "母は台所で料理をしています。",
          "zh": "妈妈正在厨房做饭。",
          "focus": ["台所"],
          "zhFocus": ["厨房"]
        },
        {
          "ja": "台所に冷蔵庫があります。",
          "zh": "厨房里有冰箱。",
          "focus": ["台所"],
          "zhFocus": ["厨房"]
        },
        {
          "ja": "食事の後で台所を掃除します。",
          "zh": "饭后打扫厨房。",
          "focus": ["台所"],
          "zhFocus": ["厨房"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-378",
      "jlpt": "N5",
      "headword": "大変",
      "source_form": "大変",
      "variants": [
        "大変"
      ],
      "reading": "たいへん",
      "reading_variants": [
        "たいへん"
      ],
      "romaji": "taihen",
      "part_of_speech": "na-adjective",
      "meaning_zh": "辛苦的；严重的；非常",
      "senses_zh": [
        "辛苦的",
        "严重的",
        "非常"
      ],
      "kanji_readings": [
        {
          "form": "大変",
          "reading": "たいへん"
        }
      ],
      "examples": [
        {
          "ja": "今日は大変でした。",
          "zh": "今天很辛苦。",
          "focus": ["大変"],
          "zhFocus": ["辛苦"]
        },
        {
          "ja": "大変な仕事です。",
          "zh": "这是很辛苦的工作。",
          "focus": ["大変"],
          "zhFocus": ["辛苦"]
        },
        {
          "ja": "長い間、大変お世話になりました。",
          "zh": "长久以来承蒙您的关照。",
          "focus": ["大変"]
        }
      ],
      "note_zh": "作な形容词时表示“辛苦、严重”；作副词时表示“非常”，多用于「大変お世話になりました」等较正式的表达。"
    },
    {
      "id": "n5-379",
      "jlpt": "N5",
      "headword": "高い",
      "source_form": "高い",
      "variants": [
        "高い"
      ],
      "reading": "たかい",
      "reading_variants": [
        "たかい"
      ],
      "romaji": "takai",
      "part_of_speech": "i-adjective",
      "meaning_zh": "高的；贵的",
      "senses_zh": [
        "高的",
        "贵的"
      ],
      "kanji_readings": [
        {
          "form": "高い",
          "reading": "たかい"
        }
      ],
      "examples": [
        {
          "ja": "あの山は高いです。",
          "zh": "那座山很高。",
          "focus": ["高い"],
          "zhFocus": ["高"]
        },
        {
          "ja": "この時計は高いです。",
          "zh": "这块表很贵。",
          "focus": ["高い"],
          "zhFocus": ["贵"]
        },
        {
          "ja": "この店の野菜は少し高いです。",
          "zh": "这家店的蔬菜有点贵。",
          "focus": ["高い"],
          "zhFocus": ["贵"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-381",
      "jlpt": "N5",
      "headword": "たくさん",
      "source_form": "沢山",
      "variants": [
        "たくさん"
      ],
      "reading": "たくさん",
      "reading_variants": [
        "たくさん"
      ],
      "romaji": "takusan",
      "part_of_speech": "adverb",
      "meaning_zh": "很多",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "本をたくさん読みます。",
          "zh": "读很多书。",
          "focus": ["たくさん"],
          "zhFocus": ["很多"]
        },
        {
          "ja": "人がたくさんいます。",
          "zh": "有很多人。",
          "focus": ["たくさん"],
          "zhFocus": ["很多"]
        },
        {
          "ja": "野菜をたくさん買いました。",
          "zh": "买了很多蔬菜。",
          "focus": ["たくさん"],
          "zhFocus": ["很多"]
        }
      ],
      "note_zh": "已把旧写法/不常用写法规范为现代常用写法；原始写法保留在 source_form。"
    },
    {
      "id": "n5-382",
      "jlpt": "N5",
      "headword": "タクシー",
      "source_form": "タクシー",
      "variants": [
        "タクシー"
      ],
      "reading": "タクシー",
      "reading_variants": [
        "タクシー"
      ],
      "romaji": "takushii",
      "part_of_speech": "noun",
      "meaning_zh": "出租车",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "駅までタクシーで行きます。",
          "zh": "坐出租车去车站。",
          "focus": ["タクシー"],
          "zhFocus": ["出租车"]
        },
        {
          "ja": "タクシーを呼びます。",
          "zh": "叫出租车。",
          "focus": ["タクシー"],
          "zhFocus": ["出租车"]
        },
        {
          "ja": "タクシーは高いです。",
          "zh": "出租车很贵。",
          "focus": ["タクシー"],
          "zhFocus": ["出租车"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-383",
      "jlpt": "N5",
      "headword": "出す",
      "source_form": "出す",
      "variants": [
        "出す"
      ],
      "reading": "だす",
      "reading_variants": [
        "だす"
      ],
      "romaji": "dasu",
      "part_of_speech": "verb",
      "meaning_zh": "拿出；提交；寄出",
      "senses_zh": [
        "拿出",
        "提交",
        "寄出"
      ],
      "kanji_readings": [
        {
          "form": "出す",
          "reading": "だす"
        }
      ],
      "examples": [
        {
          "ja": "かばんから本を出します。",
          "zh": "从包里拿出书。",
          "focus": ["出し"],
          "zhFocus": ["拿出"]
        },
        {
          "ja": "宿題を先生に出しました。",
          "zh": "把作业交给了老师。",
          "focus": ["出し"],
          "zhFocus": ["交"]
        },
        {
          "ja": "手紙を出します。",
          "zh": "寄信。",
          "focus": ["出し"],
          "zhFocus": ["寄"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-384",
      "jlpt": "N5",
      "headword": "～たち",
      "source_form": "～たち",
      "variants": [
        "～たち"
      ],
      "reading": "～たち",
      "reading_variants": [
        "～たち"
      ],
      "romaji": "~tachi",
      "part_of_speech": "suffix/pattern",
      "meaning_zh": "……们",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "子供たちが遊んでいます。",
          "zh": "孩子们在玩。",
          "focus": ["たち"],
          "zhFocus": ["们"]
        },
        {
          "ja": "私たちは学生です。",
          "zh": "我们是学生。",
          "focus": ["たち"],
          "zhFocus": ["们"]
        },
        {
          "ja": "学生たちが教室で話しています。",
          "zh": "学生们在教室里说话。",
          "focus": ["たち"],
          "zhFocus": ["们"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-385",
      "jlpt": "N5",
      "headword": "立つ",
      "source_form": "立つ",
      "variants": [
        "立つ"
      ],
      "reading": "たつ",
      "reading_variants": [
        "たつ"
      ],
      "romaji": "tatsu",
      "part_of_speech": "verb",
      "meaning_zh": "站；站立",
      "kanji_readings": [
        {
          "form": "立つ",
          "reading": "たつ"
        }
      ],
      "examples": [
        {
          "ja": "ここに立ってください。",
          "zh": "请站在这里。",
          "focus": ["立っ"],
          "zhFocus": ["站"]
        },
        {
          "ja": "駅の前に人が立っています。",
          "zh": "车站前站着人。",
          "focus": ["立っ"],
          "zhFocus": [{"after": "车站前", "text": "站"}]
        },
        {
          "ja": "電車でずっと立っていました。",
          "zh": "在电车上一直站着。",
          "focus": ["立っ"],
          "zhFocus": ["站"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-386",
      "jlpt": "N5",
      "headword": "たて",
      "source_form": "たて",
      "variants": [
        "たて"
      ],
      "reading": "たて",
      "reading_variants": [
        "たて"
      ],
      "romaji": "tate",
      "part_of_speech": "noun",
      "meaning_zh": "竖；纵向；高度",
      "senses_zh": [
        "竖；纵向",
        "高度"
      ],
      "kanji_readings": [],
      "examples": [
        {
          "ja": "紙をたてにしてください。",
          "zh": "请把纸竖过来。",
          "focus": ["たて"],
          "zhFocus": ["竖"]
        },
        {
          "ja": "たての線を書きます。",
          "zh": "画竖线。",
          "focus": ["たて"],
          "zhFocus": ["竖"]
        },
        {
          "ja": "この箱はたてが長いです。",
          "zh": "这个箱子纵向很长。",
          "focus": ["たて"],
          "zhFocus": ["纵向"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-387",
      "jlpt": "N5",
      "headword": "建物",
      "source_form": "建物",
      "variants": [
        "建物"
      ],
      "reading": "たてもの",
      "reading_variants": [
        "たてもの"
      ],
      "romaji": "tatemono",
      "part_of_speech": "noun",
      "meaning_zh": "建筑物",
      "kanji_readings": [
        {
          "form": "建物",
          "reading": "たてもの"
        }
      ],
      "examples": [
        {
          "ja": "大きな建物があります。",
          "zh": "有一栋大建筑。",
          "focus": ["建物"],
          "zhFocus": ["建筑"]
        },
        {
          "ja": "この建物は古いです。",
          "zh": "这栋建筑很旧。",
          "focus": ["建物"],
          "zhFocus": ["建筑"]
        },
        {
          "ja": "駅の前の建物です。",
          "zh": "是车站前的建筑。",
          "focus": ["建物"],
          "zhFocus": ["建筑"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-388",
      "jlpt": "N5",
      "headword": "楽しい",
      "source_form": "楽しい",
      "variants": [
        "楽しい"
      ],
      "reading": "たのしい",
      "reading_variants": [
        "たのしい"
      ],
      "romaji": "tanoshii",
      "part_of_speech": "i-adjective",
      "meaning_zh": "开心的；愉快的",
      "kanji_readings": [
        {
          "form": "楽しい",
          "reading": "たのしい"
        }
      ],
      "examples": [
        {
          "ja": "旅行は楽しいです。",
          "zh": "旅行很开心。",
          "focus": ["楽しい"],
          "zhFocus": ["开心"]
        },
        {
          "ja": "友達と話すのは楽しいです。",
          "zh": "和朋友聊天很开心。",
          "focus": ["楽しい"],
          "zhFocus": ["开心"]
        },
        {
          "ja": "日本語の勉強は楽しいです。",
          "zh": "学日语很开心。",
          "focus": ["楽しい"],
          "zhFocus": ["开心"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-389",
      "jlpt": "N5",
      "headword": "頼む",
      "source_form": "頼む",
      "variants": [
        "頼む"
      ],
      "reading": "たのむ",
      "reading_variants": [
        "たのむ"
      ],
      "romaji": "tanomu",
      "part_of_speech": "verb",
      "meaning_zh": "请求；拜托；点菜",
      "senses_zh": [
        "请求；拜托",
        "点菜"
      ],
      "kanji_readings": [
        {
          "form": "頼む",
          "reading": "たのむ"
        }
      ],
      "examples": [
        {
          "ja": "友達に手伝いを頼みます。",
          "zh": "拜托朋友帮忙。",
          "focus": ["頼み"],
          "zhFocus": ["拜托"]
        },
        {
          "ja": "店でコーヒーを頼みました。",
          "zh": "在店里点了咖啡。",
          "focus": ["頼み"],
          "zhFocus": ["点"]
        },
        {
          "ja": "先生にもう一度頼みます。",
          "zh": "再拜托老师一次。",
          "focus": ["頼み"],
          "zhFocus": ["拜托"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-390",
      "jlpt": "N5",
      "headword": "たばこ",
      "source_form": "たばこ",
      "variants": [
        "たばこ"
      ],
      "reading": "たばこ",
      "reading_variants": [
        "たばこ"
      ],
      "romaji": "tabako",
      "part_of_speech": "noun",
      "meaning_zh": "烟；香烟",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "ここでたばこを吸わないでください。",
          "zh": "请不要在这里吸烟。",
          "focus": ["たばこ"],
          "zhFocus": ["烟"]
        },
        {
          "ja": "たばこは外で吸ってください。",
          "zh": "请到外面抽烟。",
          "focus": ["たばこ"],
          "zhFocus": ["烟"]
        },
        {
          "ja": "たばこは体に悪いです。",
          "zh": "香烟对身体不好。",
          "focus": ["たばこ"],
          "zhFocus": ["香烟"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-391",
      "jlpt": "N5",
      "headword": "たぶん",
      "source_form": "多分",
      "variants": [
        "たぶん"
      ],
      "reading": "たぶん",
      "reading_variants": [
        "たぶん"
      ],
      "romaji": "tabun",
      "part_of_speech": "adverb",
      "meaning_zh": "大概；也许",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "明日はたぶん雨です。",
          "zh": "明天大概下雨。",
          "focus": ["たぶん"],
          "zhFocus": ["大概"]
        },
        {
          "ja": "彼はたぶん来ません。",
          "zh": "他大概不会来。",
          "focus": ["たぶん"],
          "zhFocus": ["大概"]
        },
        {
          "ja": "たぶん大丈夫です。",
          "zh": "大概没问题。",
          "focus": ["たぶん"],
          "zhFocus": ["大概"]
        }
      ],
      "note_zh": "已把旧写法/不常用写法规范为现代常用写法；原始写法保留在 source_form。"
    },
    {
      "id": "n5-392",
      "jlpt": "N5",
      "headword": "食べ物",
      "source_form": "食べ物",
      "variants": [
        "食べ物"
      ],
      "reading": "たべもの",
      "reading_variants": [
        "たべもの"
      ],
      "romaji": "tabemono",
      "part_of_speech": "noun",
      "meaning_zh": "食物",
      "kanji_readings": [
        {
          "form": "食べ物",
          "reading": "たべもの"
        }
      ],
      "examples": [
        {
          "ja": "机の上に食べ物があります。",
          "zh": "桌子上有食物。",
          "focus": ["食べ物"],
          "zhFocus": ["食物"]
        },
        {
          "ja": "旅行に食べ物を持っていきます。",
          "zh": "旅行时带上食物。",
          "focus": ["食べ物"],
          "zhFocus": ["食物"]
        },
        {
          "ja": "この店には日本の食べ物がたくさんあります。",
          "zh": "这家店有很多日本食物。",
          "focus": ["食べ物"],
          "zhFocus": ["食物"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-393",
      "jlpt": "N5",
      "headword": "食べる",
      "source_form": "食べる",
      "variants": [
        "食べる"
      ],
      "reading": "たべる",
      "reading_variants": [
        "たべる"
      ],
      "romaji": "taberu",
      "part_of_speech": "verb",
      "meaning_zh": "吃",
      "kanji_readings": [
        {
          "form": "食べる",
          "reading": "たべる"
        }
      ],
      "examples": [
        {
          "ja": "朝ご飯を食べます。",
          "zh": "吃早饭。",
          "focus": ["食べ"],
          "zhFocus": ["吃"]
        },
        {
          "ja": "魚を食べました。",
          "zh": "吃了鱼。",
          "focus": ["食べ"],
          "zhFocus": ["吃"]
        },
        {
          "ja": "いっしょに食べましょう。",
          "zh": "一起吃吧。",
          "focus": ["食べ"],
          "zhFocus": ["吃"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-394",
      "jlpt": "N5",
      "headword": "卵",
      "source_form": "卵",
      "variants": [
        "卵"
      ],
      "reading": "たまご",
      "reading_variants": [
        "たまご"
      ],
      "romaji": "tamago",
      "part_of_speech": "noun",
      "meaning_zh": "鸡蛋",
      "kanji_readings": [
        {
          "form": "卵",
          "reading": "たまご"
        }
      ],
      "examples": [
        {
          "ja": "毎朝卵を一つ食べます。",
          "zh": "每天早上吃一个鸡蛋。",
          "focus": ["卵"],
          "zhFocus": ["鸡蛋"]
        },
        {
          "ja": "卵を三つ買ってきてください。",
          "zh": "请买三个鸡蛋回来。",
          "focus": ["卵"],
          "zhFocus": ["鸡蛋"]
        },
        {
          "ja": "冷蔵庫に卵がまだあります。",
          "zh": "冰箱里还有鸡蛋。",
          "focus": ["卵"],
          "zhFocus": ["鸡蛋"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-395",
      "jlpt": "N5",
      "headword": "誰",
      "source_form": "誰",
      "variants": [
        "誰"
      ],
      "reading": "だれ",
      "reading_variants": [
        "だれ"
      ],
      "romaji": "dare",
      "part_of_speech": "interrogative/pronoun",
      "meaning_zh": "谁",
      "kanji_readings": [
        {
          "form": "誰",
          "reading": "だれ"
        }
      ],
      "examples": [
        {
          "ja": "あの人は誰ですか。",
          "zh": "那个人是谁？",
          "focus": ["誰"],
          "zhFocus": ["谁"]
        },
        {
          "ja": "誰に会いますか。",
          "zh": "你要见谁？",
          "focus": ["誰"],
          "zhFocus": ["谁"]
        },
        {
          "ja": "これは誰の本ですか。",
          "zh": "这是谁的书？",
          "focus": ["誰"],
          "zhFocus": ["谁"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-396",
      "jlpt": "N5",
      "headword": "誰か",
      "source_form": "誰か",
      "variants": [
        "誰か"
      ],
      "reading": "だれか",
      "reading_variants": [
        "だれか"
      ],
      "romaji": "dareka",
      "part_of_speech": "indefinite pronoun",
      "meaning_zh": "某人；有人",
      "kanji_readings": [
        {
          "form": "誰か",
          "reading": "だれか"
        }
      ],
      "examples": [
        {
          "ja": "部屋に誰かいますか。",
          "zh": "房间里有人吗？",
          "focus": ["誰か"],
          "zhFocus": ["有人"]
        },
        {
          "ja": "誰かに聞きましょう。",
          "zh": "问问某个人吧。",
          "focus": ["誰か"],
          "zhFocus": ["某个人"]
        },
        {
          "ja": "誰か来ました。",
          "zh": "有人来了。",
          "focus": ["誰か"],
          "zhFocus": ["有人"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-397",
      "jlpt": "N5",
      "headword": "誕生日",
      "source_form": "誕生日",
      "variants": [
        "誕生日"
      ],
      "reading": "たんじょうび",
      "reading_variants": [
        "たんじょうび"
      ],
      "romaji": "tanjoubi",
      "part_of_speech": "noun",
      "meaning_zh": "生日",
      "kanji_readings": [
        {
          "form": "誕生日",
          "reading": "たんじょうび"
        }
      ],
      "examples": [
        {
          "ja": "誕生日にケーキを食べました。",
          "zh": "生日时吃了蛋糕。",
          "focus": ["誕生日"],
          "zhFocus": ["生日"]
        },
        {
          "ja": "今日は母の誕生日です。",
          "zh": "今天是妈妈的生日。",
          "focus": ["誕生日"],
          "zhFocus": ["生日"]
        },
        {
          "ja": "友達が誕生日を祝ってくれました。",
          "zh": "朋友为我庆祝了生日。",
          "focus": ["誕生日"],
          "zhFocus": ["生日"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-398",
      "jlpt": "N5",
      "headword": "だんだん",
      "source_form": "段々",
      "variants": [
        "だんだん"
      ],
      "reading": "だんだん",
      "reading_variants": [
        "だんだん"
      ],
      "romaji": "dandan",
      "part_of_speech": "adverb",
      "meaning_zh": "渐渐地",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "だんだん寒くなりました。",
          "zh": "渐渐变冷了。",
          "focus": ["だんだん"],
          "zhFocus": ["渐渐"]
        },
        {
          "ja": "日本語がだんだん上手になりました。",
          "zh": "日语渐渐进步了。",
          "focus": ["だんだん"],
          "zhFocus": ["渐渐"]
        },
        {
          "ja": "空がだんだん明るくなります。",
          "zh": "天空渐渐变亮。",
          "focus": ["だんだん"],
          "zhFocus": ["渐渐"]
        }
      ],
      "note_zh": "已把旧写法/不常用写法规范为现代常用写法；原始写法保留在 source_form。"
    },
    {
      "id": "n5-399",
      "jlpt": "N5",
      "headword": "小さい",
      "source_form": "小さい",
      "variants": [
        "小さい"
      ],
      "reading": "ちいさい",
      "reading_variants": [
        "ちいさい"
      ],
      "romaji": "chiisai",
      "part_of_speech": "i-adjective",
      "meaning_zh": "小的",
      "kanji_readings": [
        {
          "form": "小さい",
          "reading": "ちいさい"
        }
      ],
      "examples": [
        {
          "ja": "このかばんは小さいです。",
          "zh": "这个包很小。",
          "focus": ["小さい"],
          "zhFocus": ["小"]
        },
        {
          "ja": "小さい犬が庭にいます。",
          "zh": "院子里有一只小狗。",
          "focus": ["小さい"],
          "zhFocus": ["小"]
        },
        {
          "ja": "字が小さくて読めません。",
          "zh": "字太小，看不清。",
          "focus": ["小さく"],
          "zhFocus": ["小"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-400",
      "merged_source_ids": ["n4-423"],
      "jlpt": "N5",
      "headword": "小さな",
      "source_form": "小さな",
      "variants": [
        "小さな"
      ],
      "reading": "ちいさな",
      "reading_variants": [
        "ちいさな"
      ],
      "romaji": "chiisana",
      "part_of_speech": "pre-noun",
      "meaning_zh": "小的（连体词）",
      "answer_zh": "小的",
      "kanji_readings": [
        {
          "form": "小さな",
          "reading": "ちいさな"
        }
      ],
      "examples": [
        {
          "ja": "小さな花が咲いています。",
          "zh": "开着一朵小花。",
          "focus": ["小さな"],
          "zhFocus": ["小"]
        },
        {
          "ja": "小さなかばんを買いました。",
          "zh": "买了一个小包。",
          "focus": ["小さな"],
          "zhFocus": ["小"]
        },
        {
          "ja": "小さな声で話します。",
          "zh": "小声说话。",
          "focus": ["小さな"],
          "zhFocus": ["小"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-401",
      "jlpt": "N5",
      "headword": "近い",
      "source_form": "近い",
      "variants": [
        "近い"
      ],
      "reading": "ちかい",
      "reading_variants": [
        "ちかい"
      ],
      "romaji": "chikai",
      "part_of_speech": "i-adjective",
      "meaning_zh": "近的",
      "kanji_readings": [
        {
          "form": "近い",
          "reading": "ちかい"
        }
      ],
      "examples": [
        {
          "ja": "駅は近いです。",
          "zh": "车站很近。",
          "focus": ["近い"],
          "zhFocus": ["近"]
        },
        {
          "ja": "学校は家から近いです。",
          "zh": "学校离家很近。",
          "focus": ["近い"],
          "zhFocus": ["近"]
        },
        {
          "ja": "一番近い駅はどこですか。",
          "zh": "最近的车站在哪里？",
          "focus": ["近い"],
          "zhFocus": ["近"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-402",
      "jlpt": "N5",
      "headword": "違う",
      "source_form": "違う",
      "variants": [
        "違う"
      ],
      "reading": "ちがう",
      "reading_variants": [
        "ちがう"
      ],
      "romaji": "chigau",
      "part_of_speech": "verb",
      "meaning_zh": "不同；错",
      "senses_zh": [
        "不同",
        "错"
      ],
      "kanji_readings": [
        {
          "form": "違う",
          "reading": "ちがう"
        }
      ],
      "examples": [
        {
          "ja": "答えが違います。",
          "zh": "答案不对。",
          "focus": ["違い"],
          "zhFocus": ["不对"]
        },
        {
          "ja": "これは私のかばんと違います。",
          "zh": "这个和我的包不一样。",
          "focus": ["違い"],
          "zhFocus": ["不一样"]
        },
        {
          "ja": "道が違いました。",
          "zh": "路走错了。",
          "focus": ["違い"],
          "zhFocus": ["错"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-403",
      "jlpt": "N5",
      "headword": "近く",
      "source_form": "近く",
      "variants": [
        "近く"
      ],
      "reading": "ちかく",
      "reading_variants": [
        "ちかく"
      ],
      "romaji": "chikaku",
      "part_of_speech": "noun/adverb",
      "meaning_zh": "附近；不久",
      "senses_zh": [
        "附近",
        "不久"
      ],
      "kanji_readings": [
        {
          "form": "近く",
          "reading": "ちかく"
        }
      ],
      "examples": [
        {
          "ja": "駅の近くに住んでいます。",
          "zh": "住在车站附近。",
          "focus": ["近く"],
          "zhFocus": ["附近"]
        },
        {
          "ja": "近くの店へ行きます。",
          "zh": "去附近的店。",
          "focus": ["近く"],
          "zhFocus": ["附近"]
        },
        {
          "ja": "近くに公園があります。",
          "zh": "附近有公园。",
          "focus": ["近く"],
          "zhFocus": ["附近"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-404",
      "jlpt": "N5",
      "headword": "地下鉄",
      "source_form": "地下鉄",
      "variants": [
        "地下鉄"
      ],
      "reading": "ちかてつ",
      "reading_variants": [
        "ちかてつ"
      ],
      "romaji": "chikatetsu",
      "part_of_speech": "noun",
      "meaning_zh": "地铁",
      "kanji_readings": [
        {
          "form": "地下鉄",
          "reading": "ちかてつ"
        }
      ],
      "examples": [
        {
          "ja": "地下鉄に乗ります。",
          "zh": "坐地铁。",
          "focus": ["地下鉄"],
          "zhFocus": ["地铁"]
        },
        {
          "ja": "地下鉄で学校へ行きます。",
          "zh": "坐地铁去学校。",
          "focus": ["地下鉄"],
          "zhFocus": ["地铁"]
        },
        {
          "ja": "地下鉄の駅は近いです。",
          "zh": "地铁站很近。",
          "focus": ["地下鉄"],
          "zhFocus": ["地铁"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-405",
      "jlpt": "N5",
      "headword": "地図",
      "source_form": "地図",
      "variants": [
        "地図"
      ],
      "reading": "ちず",
      "reading_variants": [
        "ちず"
      ],
      "romaji": "chizu",
      "part_of_speech": "noun",
      "meaning_zh": "地图",
      "kanji_readings": [
        {
          "form": "地図",
          "reading": "ちず"
        }
      ],
      "examples": [
        {
          "ja": "地図を見ます。",
          "zh": "看地图。",
          "focus": ["地図"],
          "zhFocus": ["地图"]
        },
        {
          "ja": "地図を書いてください。",
          "zh": "请画地图。",
          "focus": ["地図"],
          "zhFocus": ["地图"]
        },
        {
          "ja": "地図で駅を探します。",
          "zh": "用地图找车站。",
          "focus": ["地図"],
          "zhFocus": ["地图"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-406",
      "jlpt": "N5",
      "headword": "父",
      "source_form": "父",
      "variants": [
        "父"
      ],
      "reading": "ちち",
      "reading_variants": [
        "ちち"
      ],
      "romaji": "chichi",
      "part_of_speech": "noun",
      "meaning_zh": "父亲（称自己的父亲）",
      "kanji_readings": [
        {
          "form": "父",
          "reading": "ちち"
        }
      ],
      "examples": [
        {
          "ja": "父は毎朝新聞を読みます。",
          "zh": "父亲每天早上看报纸。",
          "focus": ["父"],
          "zhFocus": ["父亲"]
        },
        {
          "ja": "父と電話で話します。",
          "zh": "和父亲通电话。",
          "focus": ["父"],
          "zhFocus": ["父亲"]
        },
        {
          "ja": "父に時計をあげました。",
          "zh": "送了父亲一块表。",
          "focus": ["父"],
          "zhFocus": ["父亲"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-407",
      "jlpt": "N5",
      "headword": "茶色",
      "source_form": "茶色",
      "variants": [
        "茶色"
      ],
      "reading": "ちゃいろ",
      "reading_variants": [
        "ちゃいろ"
      ],
      "romaji": "chairo",
      "part_of_speech": "noun",
      "meaning_zh": "茶色；棕色",
      "kanji_readings": [
        {
          "form": "茶色",
          "reading": "ちゃいろ"
        }
      ],
      "examples": [
        {
          "ja": "茶色の靴を買いました。",
          "zh": "买了棕色的鞋。",
          "focus": ["茶色"],
          "zhFocus": ["棕色"]
        },
        {
          "ja": "このかばんは茶色です。",
          "zh": "这个包是棕色的。",
          "focus": ["茶色"],
          "zhFocus": ["棕色"]
        },
        {
          "ja": "茶色が好きです。",
          "zh": "我喜欢棕色。",
          "focus": ["茶色"],
          "zhFocus": ["棕色"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-408",
      "jlpt": "N5",
      "headword": "茶碗",
      "source_form": "茶碗",
      "variants": [
        "茶碗"
      ],
      "reading": "ちゃわん",
      "reading_variants": [
        "ちゃわん"
      ],
      "romaji": "chawan",
      "part_of_speech": "noun",
      "meaning_zh": "饭碗；茶碗",
      "senses_zh": [
        "饭碗",
        "茶碗"
      ],
      "kanji_readings": [
        {
          "form": "茶碗",
          "reading": "ちゃわん"
        }
      ],
      "examples": [
        {
          "ja": "この茶碗は母が京都で買いました。",
          "zh": "这个饭碗是妈妈在京都买的。",
          "focus": ["茶碗"],
          "zhFocus": ["饭碗"]
        },
        {
          "ja": "茶碗とお箸を並べてください。",
          "zh": "请把碗和筷子摆好。",
          "focus": ["茶碗"],
          "zhFocus": ["碗"]
        },
        {
          "ja": "茶碗にご飯を入れます。",
          "zh": "把米饭盛进饭碗。",
          "focus": ["茶碗"],
          "zhFocus": ["饭碗"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-409",
      "merged_source_ids": ["n4-755"],
      "jlpt": "N5",
      "headword": "～中",
      "source_form": "～中",
      "variants": [
        "～中"
      ],
      "reading": "～ちゅう",
      "reading_variants": [
        "～ちゅう"
      ],
      "romaji": "~chuu",
      "part_of_speech": "suffix/pattern",
      "meaning_zh": "正在……；……中",
      "kanji_readings": [
        {
          "form": "～中",
          "reading": "～ちゅう"
        }
      ],
      "examples": [
        {
          "ja": "今、勉強中です。",
          "zh": "现在正在学习。",
          "focus": ["中"],
          "zhFocus": ["正在"]
        },
        {
          "ja": "授業中は静かにしてください。",
          "zh": "上课时请安静。",
          "focus": ["中"],
          "zhFocus": ["时"]
        },
        {
          "ja": "仕事中に電話しないでください。",
          "zh": "工作中请不要打电话。",
          "focus": ["中"],
          "zhFocus": ["中"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-410",
      "jlpt": "N5",
      "headword": "ちょうど",
      "source_form": "丁度",
      "variants": [
        "ちょうど"
      ],
      "reading": "ちょうど",
      "reading_variants": [
        "ちょうど"
      ],
      "romaji": "choudo",
      "part_of_speech": "adverb",
      "meaning_zh": "正好；刚好",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "ちょうど三時です。",
          "zh": "正好三点。",
          "focus": ["ちょうど"],
          "zhFocus": ["正好"]
        },
        {
          "ja": "ちょうどいいです。",
          "zh": "正合适。",
          "focus": ["ちょうど"],
          "zhFocus": ["正"]
        },
        {
          "ja": "ちょうど今、帰りました。",
          "zh": "刚好现在回来了。",
          "focus": ["ちょうど"],
          "zhFocus": ["刚好"]
        }
      ],
      "note_zh": "已把旧写法/不常用写法规范为现代常用写法；原始写法保留在 source_form。"
    },
    {
      "id": "n5-411",
      "jlpt": "N5",
      "headword": "ちょっと",
      "source_form": "ちょっと",
      "variants": [
        "ちょっと"
      ],
      "reading": "ちょっと",
      "reading_variants": [
        "ちょっと"
      ],
      "romaji": "chotto",
      "part_of_speech": "adverb",
      "meaning_zh": "稍微；一点儿",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "ちょっと待ってください。",
          "zh": "请稍等一下。",
          "focus": ["ちょっと"],
          "zhFocus": ["稍"]
        },
        {
          "ja": "これはちょっと高いです。",
          "zh": "这个有点贵。",
          "focus": ["ちょっと"],
          "zhFocus": ["有点"]
        },
        {
          "ja": "ちょっと聞いてもいいですか。",
          "zh": "可以稍微问一下吗？",
          "focus": ["ちょっと"],
          "zhFocus": ["稍微"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-412",
      "jlpt": "N5",
      "headword": "一日",
      "source_form": "一日",
      "variants": [
        "一日"
      ],
      "reading": "ついたち",
      "reading_variants": [
        "ついたち"
      ],
      "romaji": "tsuitachi",
      "part_of_speech": "noun",
      "meaning_zh": "一号；每月第一天",
      "kanji_readings": [
        {
          "form": "一日",
          "reading": "ついたち"
        }
      ],
      "examples": [
        {
          "ja": "今日は四月一日です。",
          "zh": "今天是四月一号。",
          "focus": ["一日"],
          "zhFocus": ["一号"]
        },
        {
          "ja": "一日に学校が始まります。",
          "zh": "一号学校开学。",
          "focus": ["一日"],
          "zhFocus": ["一号"]
        },
        {
          "ja": "来月の一日に会いましょう。",
          "zh": "下个月一号见吧。",
          "focus": ["一日"],
          "zhFocus": ["一号"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-413",
      "jlpt": "N5",
      "headword": "使う",
      "source_form": "使う",
      "variants": [
        "使う"
      ],
      "reading": "つかう",
      "reading_variants": [
        "つかう"
      ],
      "romaji": "tsukau",
      "part_of_speech": "verb",
      "meaning_zh": "使用",
      "kanji_readings": [
        {
          "form": "使う",
          "reading": "つかう"
        }
      ],
      "examples": [
        {
          "ja": "このペンを使います。",
          "zh": "使用这支笔。",
          "focus": ["使い"],
          "zhFocus": ["使用"]
        },
        {
          "ja": "毎日、日本語を使います。",
          "zh": "每天使用日语。",
          "focus": ["使い"],
          "zhFocus": ["使用"]
        },
        {
          "ja": "パソコンを使って勉強します。",
          "zh": "用电脑学习。",
          "focus": ["使っ"],
          "zhFocus": ["用"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-414",
      "jlpt": "N5",
      "headword": "疲れる",
      "source_form": "疲れる",
      "variants": [
        "疲れる"
      ],
      "reading": "つかれる",
      "reading_variants": [
        "つかれる"
      ],
      "romaji": "tsukareru",
      "part_of_speech": "verb",
      "meaning_zh": "累；疲劳",
      "kanji_readings": [
        {
          "form": "疲れる",
          "reading": "つかれる"
        }
      ],
      "examples": [
        {
          "ja": "今日はとても疲れました。",
          "zh": "今天很累。",
          "focus": ["疲れ"],
          "zhFocus": ["累"]
        },
        {
          "ja": "たくさん歩いて疲れました。",
          "zh": "走了很多路，累了。",
          "focus": ["疲れ"],
          "zhFocus": ["累"]
        },
        {
          "ja": "仕事の後はいつも疲れています。",
          "zh": "工作之后总是很累。",
          "focus": ["疲れ"],
          "zhFocus": ["累"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-415",
      "jlpt": "N5",
      "headword": "次",
      "source_form": "次",
      "variants": [
        "次"
      ],
      "reading": "つぎ",
      "reading_variants": [
        "つぎ"
      ],
      "romaji": "tsugi",
      "part_of_speech": "noun",
      "meaning_zh": "下一个；接下来",
      "kanji_readings": [
        {
          "form": "次",
          "reading": "つぎ"
        }
      ],
      "examples": [
        {
          "ja": "次のバスは十時に来ます。",
          "zh": "下一班公交车十点来。",
          "focus": ["次"],
          "zhFocus": ["下一"]
        },
        {
          "ja": "次は何ですか。",
          "zh": "接下来是什么？",
          "focus": ["次"],
          "zhFocus": ["接下来"]
        },
        {
          "ja": "次の日曜日に会います。",
          "zh": "下个星期天见。",
          "focus": ["次"],
          "zhFocus": ["下"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-416",
      "jlpt": "N5",
      "headword": "着く",
      "source_form": "着く",
      "variants": [
        "着く"
      ],
      "reading": "つく",
      "reading_variants": [
        "つく"
      ],
      "romaji": "tsuku",
      "part_of_speech": "verb",
      "meaning_zh": "到达",
      "kanji_readings": [
        {
          "form": "着く",
          "reading": "つく"
        }
      ],
      "examples": [
        {
          "ja": "駅に着きました。",
          "zh": "到车站了。",
          "focus": ["着き"],
          "zhFocus": ["到"]
        },
        {
          "ja": "学校に八時に着きます。",
          "zh": "八点到学校。",
          "focus": ["着き"],
          "zhFocus": ["到"]
        },
        {
          "ja": "もう家に着きましたか。",
          "zh": "已经到家了吗？",
          "focus": ["着き"],
          "zhFocus": ["到"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-417",
      "jlpt": "N5",
      "headword": "机",
      "source_form": "机",
      "variants": [
        "机"
      ],
      "reading": "つくえ",
      "reading_variants": [
        "つくえ"
      ],
      "romaji": "tsukue",
      "part_of_speech": "noun",
      "meaning_zh": "桌子；书桌",
      "kanji_readings": [
        {
          "form": "机",
          "reading": "つくえ"
        }
      ],
      "examples": [
        {
          "ja": "机で日本語を勉強します。",
          "zh": "在书桌前学习日语。",
          "focus": ["机"],
          "zhFocus": ["书桌"]
        },
        {
          "ja": "部屋に新しい机を置きました。",
          "zh": "在房间里放了一张新书桌。",
          "focus": ["机"],
          "zhFocus": ["书桌"]
        },
        {
          "ja": "この机は少し低いです。",
          "zh": "这张书桌有点矮。",
          "focus": ["机"],
          "zhFocus": ["书桌"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-418",
      "jlpt": "N5",
      "headword": "作る",
      "source_form": "作る",
      "variants": [
        "作る"
      ],
      "reading": "つくる",
      "reading_variants": [
        "つくる"
      ],
      "romaji": "tsukuru",
      "part_of_speech": "verb",
      "meaning_zh": "制作；做",
      "kanji_readings": [
        {
          "form": "作る",
          "reading": "つくる"
        }
      ],
      "examples": [
        {
          "ja": "母が晩ご飯を作ります。",
          "zh": "妈妈做晚饭。",
          "focus": ["作り"],
          "zhFocus": ["做"]
        },
        {
          "ja": "友達の誕生日にケーキを作りました。",
          "zh": "朋友过生日时做了蛋糕。",
          "focus": ["作り"],
          "zhFocus": ["做"]
        },
        {
          "ja": "家で朝ご飯を作ります。",
          "zh": "在家做早饭。",
          "focus": ["作り"],
          "zhFocus": ["做"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-419",
      "jlpt": "N5",
      "headword": "つける",
      "source_form": "つける",
      "variants": [
        "つける"
      ],
      "reading": "つける",
      "reading_variants": [
        "つける"
      ],
      "romaji": "tsukeru",
      "part_of_speech": "verb",
      "meaning_zh": "打开（灯、电器）；戴上；附上",
      "senses_zh": [
        "打开（灯、电器）",
        "戴上",
        "附上"
      ],
      "kanji_readings": [],
      "examples": [
        {
          "ja": "電気をつけます。",
          "zh": "开灯。",
          "focus": ["つけ"],
          "zhFocus": ["开"]
        },
        {
          "ja": "テレビをつけてください。",
          "zh": "请打开电视。",
          "focus": ["つけ"],
          "zhFocus": ["打开"]
        },
        {
          "ja": "出かける前にマスクをつけました。",
          "zh": "出门前戴上了口罩。",
          "focus": ["つけ"],
          "zhFocus": ["戴上"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-420",
      "jlpt": "N5",
      "headword": "勤める",
      "source_form": "勤める",
      "variants": [
        "勤める"
      ],
      "reading": "つとめる",
      "reading_variants": [
        "つとめる"
      ],
      "romaji": "tsutomeru",
      "part_of_speech": "verb",
      "meaning_zh": "任职；在……工作",
      "kanji_readings": [
        {
          "form": "勤める",
          "reading": "つとめる"
        }
      ],
      "examples": [
        {
          "ja": "父は銀行に勤めています。",
          "zh": "父亲在银行工作。",
          "focus": ["勤め"],
          "zhFocus": ["工作"]
        },
        {
          "ja": "会社に十年勤めました。",
          "zh": "在公司工作了十年。",
          "focus": ["勤め"],
          "zhFocus": ["工作"]
        },
        {
          "ja": "兄は病院に勤めています。",
          "zh": "哥哥在医院工作。",
          "focus": ["勤め"],
          "zhFocus": ["工作"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-421",
      "jlpt": "N5",
      "headword": "つまらない",
      "source_form": "つまらない",
      "variants": [
        "つまらない"
      ],
      "reading": "つまらない",
      "reading_variants": [
        "つまらない"
      ],
      "romaji": "tsumaranai",
      "part_of_speech": "i-adjective",
      "meaning_zh": "无聊的；没意思的",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "この映画はつまらないです。",
          "zh": "这部电影很无聊。",
          "focus": ["つまらない"],
          "zhFocus": ["无聊"]
        },
        {
          "ja": "その話は少しつまらないです。",
          "zh": "那个故事有点无趣。",
          "focus": ["つまらない"],
          "zhFocus": ["无趣"]
        },
        {
          "ja": "昨日のテレビはつまらなかったです。",
          "zh": "昨天的电视节目很无聊。",
          "focus": ["つまらなかっ"],
          "zhFocus": ["无聊"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-422",
      "jlpt": "N5",
      "headword": "冷たい",
      "source_form": "冷たい",
      "variants": [
        "冷たい"
      ],
      "reading": "つめたい",
      "reading_variants": [
        "つめたい"
      ],
      "romaji": "tsumetai",
      "part_of_speech": "i-adjective",
      "meaning_zh": "冷的（物体、触感）",
      "kanji_readings": [
        {
          "form": "冷たい",
          "reading": "つめたい"
        }
      ],
      "examples": [
        {
          "ja": "この水は冷たいです。",
          "zh": "这水很凉。",
          "focus": ["冷たい"],
          "zhFocus": ["凉"]
        },
        {
          "ja": "手が冷たいですね。",
          "zh": "你的手真凉啊。",
          "focus": ["冷たい"],
          "zhFocus": ["凉"]
        },
        {
          "ja": "冷たい飲み物をください。",
          "zh": "请给我冷饮。",
          "focus": ["冷たい"],
          "zhFocus": ["冷"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-423",
      "jlpt": "N5",
      "headword": "強い",
      "source_form": "強い",
      "variants": [
        "強い"
      ],
      "reading": "つよい",
      "reading_variants": [
        "つよい"
      ],
      "romaji": "tsuyoi",
      "part_of_speech": "i-adjective",
      "meaning_zh": "强的",
      "kanji_readings": [
        {
          "form": "強い",
          "reading": "つよい"
        }
      ],
      "examples": [
        {
          "ja": "このお酒は強いです。",
          "zh": "这酒很烈。",
          "focus": ["強い"],
          "zhFocus": ["烈"]
        },
        {
          "ja": "兄のサッカーチームは強いです。",
          "zh": "哥哥的足球队很强。",
          "focus": ["強い"],
          "zhFocus": ["强"]
        },
        {
          "ja": "父は力が強いです。",
          "zh": "爸爸力气很大。",
          "focus": ["強い"],
          "zhFocus": ["大"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-424",
      "jlpt": "N5",
      "headword": "手",
      "source_form": "手",
      "variants": [
        "手"
      ],
      "reading": "て",
      "reading_variants": [
        "て"
      ],
      "romaji": "te",
      "part_of_speech": "noun",
      "meaning_zh": "手",
      "kanji_readings": [
        {
          "form": "手",
          "reading": "て"
        }
      ],
      "examples": [
        {
          "ja": "手を洗います。",
          "zh": "洗手。",
          "focus": ["手"],
          "zhFocus": ["手"]
        },
        {
          "ja": "右手で字を書きます。",
          "zh": "用右手写字。",
          "focus": ["手"],
          "zhFocus": ["手"]
        },
        {
          "ja": "手が冷たいです。",
          "zh": "手很凉。",
          "focus": ["手"],
          "zhFocus": ["手"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-425",
      "jlpt": "N5",
      "headword": "テープ",
      "source_form": "テープ",
      "variants": [
        "テープ"
      ],
      "reading": "テープ",
      "reading_variants": [
        "テープ"
      ],
      "romaji": "teepu",
      "part_of_speech": "noun",
      "meaning_zh": "磁带；胶带",
      "senses_zh": [
        "磁带",
        "胶带"
      ],
      "kanji_readings": [],
      "examples": [
        {
          "ja": "テープで紙を壁に貼りました。",
          "zh": "用胶带把纸贴在了墙上。",
          "focus": ["テープ"],
          "zhFocus": ["胶带"]
        },
        {
          "ja": "このテープで英語の勉強をします。",
          "zh": "用这盘磁带学英语。",
          "focus": ["テープ"],
          "zhFocus": ["磁带"]
        },
        {
          "ja": "テープで箱を直しました。",
          "zh": "用胶带修好了箱子。",
          "focus": ["テープ"],
          "zhFocus": ["胶带"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-426",
      "jlpt": "N5",
      "headword": "テープレコーダー",
      "source_form": "テープレコーダー",
      "variants": [
        "テープレコーダー"
      ],
      "reading": "テープレコーダー",
      "reading_variants": [
        "テープレコーダー"
      ],
      "romaji": "teepurekoodaa",
      "part_of_speech": "noun",
      "meaning_zh": "录音机",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "父のテープレコーダーはとても古いです。",
          "zh": "爸爸的录音机非常旧。",
          "focus": ["テープレコーダー"],
          "zhFocus": ["录音机"]
        },
        {
          "ja": "このテープレコーダーはもう使いません。",
          "zh": "这台录音机已经不用了。",
          "focus": ["テープレコーダー"],
          "zhFocus": ["录音机"]
        },
        {
          "ja": "テープレコーダーで音楽を聞きます。",
          "zh": "用录音机听音乐。",
          "focus": ["テープレコーダー"],
          "zhFocus": ["录音机"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-427",
      "jlpt": "N5",
      "headword": "テーブル",
      "source_form": "テーブル",
      "variants": [
        "テーブル"
      ],
      "reading": "テーブル",
      "reading_variants": [
        "テーブル"
      ],
      "romaji": "teeburu",
      "part_of_speech": "noun",
      "meaning_zh": "桌子；餐桌",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "テーブルの上に本があります。",
          "zh": "桌子上有书。",
          "focus": ["テーブル"],
          "zhFocus": ["桌子"]
        },
        {
          "ja": "テーブルをきれいにします。",
          "zh": "把桌子擦干净。",
          "focus": ["テーブル"],
          "zhFocus": ["桌子"]
        },
        {
          "ja": "テーブルでご飯を食べます。",
          "zh": "在桌子旁吃饭。",
          "focus": ["テーブル"],
          "zhFocus": ["桌子"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-428",
      "jlpt": "N5",
      "headword": "出かける",
      "source_form": "出かける",
      "variants": [
        "出かける"
      ],
      "reading": "でかける",
      "reading_variants": [
        "でかける"
      ],
      "romaji": "dekakeru",
      "part_of_speech": "verb",
      "meaning_zh": "出门；外出",
      "kanji_readings": [
        {
          "form": "出かける",
          "reading": "でかける"
        }
      ],
      "examples": [
        {
          "ja": "午後、買い物に出かけます。",
          "zh": "下午出门买东西。",
          "focus": ["出かけ"],
          "zhFocus": ["出门"]
        },
        {
          "ja": "家族と出かけました。",
          "zh": "和家人出门了。",
          "focus": ["出かけ"],
          "zhFocus": ["出门"]
        },
        {
          "ja": "雨の日はあまり出かけません。",
          "zh": "下雨天不太出门。",
          "focus": ["出かけ"],
          "zhFocus": ["出门"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-429",
      "jlpt": "N5",
      "headword": "手紙",
      "source_form": "手紙",
      "variants": [
        "手紙"
      ],
      "reading": "てがみ",
      "reading_variants": [
        "てがみ"
      ],
      "romaji": "tegami",
      "part_of_speech": "noun",
      "meaning_zh": "信",
      "kanji_readings": [
        {
          "form": "手紙",
          "reading": "てがみ"
        }
      ],
      "examples": [
        {
          "ja": "母に手紙を書きます。",
          "zh": "给妈妈写信。",
          "focus": ["手紙"],
          "zhFocus": ["信"]
        },
        {
          "ja": "友達から手紙が来ました。",
          "zh": "朋友寄来了信。",
          "focus": ["手紙"],
          "zhFocus": ["信"]
        },
        {
          "ja": "手紙を読みました。",
          "zh": "读了信。",
          "focus": ["手紙"],
          "zhFocus": ["信"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-430",
      "jlpt": "N5",
      "headword": "できる",
      "source_form": "できる",
      "variants": [
        "できる"
      ],
      "reading": "できる",
      "reading_variants": [
        "できる"
      ],
      "romaji": "dekiru",
      "part_of_speech": "verb",
      "meaning_zh": "会；能；完成",
      "senses_zh": [
        "会；能",
        "完成"
      ],
      "kanji_readings": [],
      "examples": [
        {
          "ja": "日本語が少しできます。",
          "zh": "会一点日语。",
          "focus": ["でき"],
          "zhFocus": ["会"]
        },
        {
          "ja": "宿題ができました。",
          "zh": "作业做完了。",
          "focus": ["でき"],
          "zhFocus": ["做完"]
        },
        {
          "ja": "明日、来ることができます。",
          "zh": "明天能来。",
          "focus": ["でき"],
          "zhFocus": ["能"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-431",
      "jlpt": "N5",
      "headword": "出口",
      "source_form": "出口",
      "variants": [
        "出口"
      ],
      "reading": "でぐち",
      "reading_variants": [
        "でぐち"
      ],
      "romaji": "deguchi",
      "part_of_speech": "noun",
      "meaning_zh": "出口",
      "kanji_readings": [
        {
          "form": "出口",
          "reading": "でぐち"
        }
      ],
      "examples": [
        {
          "ja": "出口は右にあります。",
          "zh": "出口在右边。",
          "focus": ["出口"],
          "zhFocus": ["出口"]
        },
        {
          "ja": "この出口から外へ出ます。",
          "zh": "从这个出口出去。",
          "focus": ["出口"],
          "zhFocus": ["出口"]
        },
        {
          "ja": "駅の出口で友達に会います。",
          "zh": "在车站出口见朋友。",
          "focus": ["出口"],
          "zhFocus": ["出口"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-432",
      "jlpt": "N5",
      "headword": "テスト",
      "source_form": "テスト",
      "variants": [
        "テスト"
      ],
      "reading": "テスト",
      "reading_variants": [
        "テスト"
      ],
      "romaji": "tesuto",
      "part_of_speech": "noun",
      "meaning_zh": "考试；测试",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "明日はテストです。",
          "zh": "明天考试。",
          "focus": ["テスト"],
          "zhFocus": ["考试"]
        },
        {
          "ja": "テストは難しかったです。",
          "zh": "考试很难。",
          "focus": ["テスト"],
          "zhFocus": ["考试"]
        },
        {
          "ja": "日本語のテストを受けます。",
          "zh": "参加日语考试。",
          "focus": ["テスト"],
          "zhFocus": ["考试"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-433",
      "jlpt": "N5",
      "headword": "では",
      "source_form": "では",
      "variants": [
        "では"
      ],
      "reading": "では",
      "reading_variants": [
        "では"
      ],
      "romaji": "dewa",
      "part_of_speech": "conjunction",
      "meaning_zh": "那么；那就（较正式）",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "では、始めましょう。",
          "zh": "那么，开始吧。",
          "focus": ["では"],
          "zhFocus": ["那么"]
        },
        {
          "ja": "では、また明日。",
          "zh": "那么，明天见。",
          "focus": ["では"],
          "zhFocus": ["那么"]
        },
        {
          "ja": "では、行きます。",
          "zh": "那么，我走了。",
          "focus": ["では"],
          "zhFocus": ["那么"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-434",
      "jlpt": "N5",
      "headword": "デパート",
      "source_form": "デパート",
      "variants": [
        "デパート"
      ],
      "reading": "デパート",
      "reading_variants": [
        "デパート"
      ],
      "romaji": "depaato",
      "part_of_speech": "noun",
      "meaning_zh": "百货商店",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "デパートへ行きます。",
          "zh": "去百货商店。",
          "focus": ["デパート"],
          "zhFocus": ["百货商店"]
        },
        {
          "ja": "デパートは駅の近くです。",
          "zh": "百货商店在车站附近。",
          "focus": ["デパート"],
          "zhFocus": ["百货商店"]
        },
        {
          "ja": "デパートで友達に会います。",
          "zh": "在百货商店见朋友。",
          "focus": ["デパート"],
          "zhFocus": ["百货商店"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-435",
      "jlpt": "N5",
      "headword": "でも",
      "source_form": "でも",
      "variants": [
        "でも"
      ],
      "reading": "でも",
      "reading_variants": [
        "でも"
      ],
      "romaji": "demo",
      "part_of_speech": "conjunction",
      "meaning_zh": "但是；不过（口语，放在句首）",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "行きたいです。でも、時間がありません。",
          "zh": "想去。但是没有时间。",
          "focus": ["でも"],
          "zhFocus": ["但是"]
        },
        {
          "ja": "高いです。でも、買います。",
          "zh": "很贵。但是要买。",
          "focus": ["でも"],
          "zhFocus": ["但是"]
        },
        {
          "ja": "寒いです。でも、散歩します。",
          "zh": "很冷。但是去散步。",
          "focus": ["でも"],
          "zhFocus": ["但是"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-436",
      "jlpt": "N5",
      "headword": "出る",
      "source_form": "出る",
      "variants": [
        "出る"
      ],
      "reading": "でる",
      "reading_variants": [
        "でる"
      ],
      "romaji": "deru",
      "part_of_speech": "verb",
      "meaning_zh": "出去；离开；出现",
      "senses_zh": [
        "出去；离开",
        "出现"
      ],
      "kanji_readings": [
        {
          "form": "出る",
          "reading": "でる"
        }
      ],
      "examples": [
        {
          "ja": "朝八時に家を出ます。",
          "zh": "早上八点出门。",
          "focus": ["出"],
          "zhFocus": ["出"]
        },
        {
          "ja": "駅の出口から出てください。",
          "zh": "请从车站出口出去。",
          "focus": [{"after": "駅の出口から", "text": "出"}],
          "zhFocus": ["出去"]
        },
        {
          "ja": "授業に出ました。",
          "zh": "上课了。",
          "focus": ["出"],
          "zhFocus": ["上"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-437",
      "jlpt": "N5",
      "headword": "テレビ",
      "source_form": "テレビ",
      "variants": [
        "テレビ"
      ],
      "reading": "テレビ",
      "reading_variants": [
        "テレビ"
      ],
      "romaji": "terebi",
      "part_of_speech": "noun",
      "meaning_zh": "电视",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "夜はテレビでニュースを見ます。",
          "zh": "晚上看电视新闻。",
          "focus": ["テレビ"],
          "zhFocus": ["电视"]
        },
        {
          "ja": "友達とテレビを見ました。",
          "zh": "和朋友看了电视。",
          "focus": ["テレビ"],
          "zhFocus": ["电视"]
        },
        {
          "ja": "勉強の時はテレビを消してください。",
          "zh": "学习的时候请把电视关掉。",
          "focus": ["テレビ"],
          "zhFocus": ["电视"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-438",
      "jlpt": "N5",
      "headword": "天気",
      "source_form": "天気",
      "variants": [
        "天気"
      ],
      "reading": "てんき",
      "reading_variants": [
        "てんき"
      ],
      "romaji": "tenki",
      "part_of_speech": "noun",
      "meaning_zh": "天气",
      "kanji_readings": [
        {
          "form": "天気",
          "reading": "てんき"
        }
      ],
      "examples": [
        {
          "ja": "今日は天気がいいです。",
          "zh": "今天天气很好。",
          "focus": ["天気"],
          "zhFocus": ["天气"]
        },
        {
          "ja": "明日の天気を調べます。",
          "zh": "查一下明天的天气。",
          "focus": ["天気"],
          "zhFocus": ["天气"]
        },
        {
          "ja": "悪い天気が続いています。",
          "zh": "坏天气一直持续着。",
          "focus": ["天気"],
          "zhFocus": ["天气"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-439",
      "jlpt": "N5",
      "headword": "電気",
      "source_form": "電気",
      "variants": [
        "電気"
      ],
      "reading": "でんき",
      "reading_variants": [
        "でんき"
      ],
      "romaji": "denki",
      "part_of_speech": "noun",
      "meaning_zh": "电；灯",
      "senses_zh": [
        "电",
        "灯"
      ],
      "kanji_readings": [
        {
          "form": "電気",
          "reading": "でんき"
        }
      ],
      "examples": [
        {
          "ja": "部屋の電気が消えています。",
          "zh": "房间的灯关着。",
          "focus": ["電気"],
          "zhFocus": ["灯"]
        },
        {
          "ja": "この車は電気で走ります。",
          "zh": "这辆车用电行驶。",
          "focus": ["電気"],
          "zhFocus": ["电"]
        },
        {
          "ja": "この部屋は電気が明るいです。",
          "zh": "这个房间的灯很亮。",
          "focus": ["電気"],
          "zhFocus": ["灯"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-440",
      "jlpt": "N5",
      "headword": "電車",
      "source_form": "電車",
      "variants": [
        "電車"
      ],
      "reading": "でんしゃ",
      "reading_variants": [
        "でんしゃ"
      ],
      "romaji": "densha",
      "part_of_speech": "noun",
      "meaning_zh": "电车；列车",
      "kanji_readings": [
        {
          "form": "電車",
          "reading": "でんしゃ"
        }
      ],
      "examples": [
        {
          "ja": "毎朝、電車で学校へ行きます。",
          "zh": "每天早上乘电车去学校。",
          "focus": ["電車"],
          "zhFocus": ["电车"]
        },
        {
          "ja": "次の電車は十時に来ます。",
          "zh": "下一班电车十点来。",
          "focus": ["電車"],
          "zhFocus": ["电车"]
        },
        {
          "ja": "電車が駅に着きました。",
          "zh": "电车到站了。",
          "focus": ["電車"],
          "zhFocus": ["电车"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-441",
      "jlpt": "N5",
      "headword": "電話",
      "source_form": "電話",
      "variants": [
        "電話"
      ],
      "reading": "でんわ",
      "reading_variants": [
        "でんわ"
      ],
      "romaji": "denwa",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "电话",
      "kanji_readings": [
        {
          "form": "電話",
          "reading": "でんわ"
        }
      ],
      "examples": [
        {
          "ja": "今、電話してもいいですか。",
          "zh": "现在可以打电话吗？",
          "focus": ["電話"],
          "zhFocus": ["电话"]
        },
        {
          "ja": "田中さんから電話がありました。",
          "zh": "田中先生打来了电话。",
          "focus": ["電話"],
          "zhFocus": ["电话"]
        },
        {
          "ja": "夜に友達と電話で話しました。",
          "zh": "晚上和朋友打了电话。",
          "focus": ["電話"],
          "zhFocus": ["电话"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-442",
      "jlpt": "N5",
      "headword": "戸",
      "source_form": "戸",
      "variants": [
        "戸"
      ],
      "reading": "と",
      "reading_variants": [
        "と"
      ],
      "romaji": "to",
      "part_of_speech": "noun",
      "meaning_zh": "门；拉门",
      "kanji_readings": [
        {
          "form": "戸",
          "reading": "と"
        }
      ],
      "examples": [
        {
          "ja": "朝、戸を開けます。",
          "zh": "早上打开拉门。",
          "focus": ["戸"],
          "zhFocus": ["拉门"]
        },
        {
          "ja": "寒いので戸を閉めました。",
          "zh": "因为冷，所以关上了拉门。",
          "focus": ["戸"],
          "zhFocus": ["拉门"]
        },
        {
          "ja": "猫が戸の前にいます。",
          "zh": "猫在拉门前。",
          "focus": ["戸"],
          "zhFocus": ["拉门"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-443",
      "jlpt": "N5",
      "headword": "～度",
      "source_form": "～度",
      "variants": [
        "～度"
      ],
      "reading": "～ど",
      "reading_variants": [
        "～ど"
      ],
      "romaji": "~do",
      "part_of_speech": "counter/suffix",
      "meaning_zh": "……度；……次",
      "senses_zh": [
        "……度",
        "……次"
      ],
      "kanji_readings": [
        {
          "form": "～度",
          "reading": "～ど"
        }
      ],
      "examples": [
        {
          "ja": "今日は二十度です。",
          "zh": "今天二十度。",
          "focus": ["度"],
          "zhFocus": ["度"]
        },
        {
          "ja": "熱が三十八度あります。",
          "zh": "发烧三十八度。",
          "focus": ["度"],
          "zhFocus": ["度"]
        },
        {
          "ja": "三度行きました。",
          "zh": "去了三次。",
          "focus": ["度"],
          "zhFocus": ["次"]
        }
      ],
      "note_zh": "接在数字或名词后使用；例句中去掉了前缀符号「～」。"
    },
    {
      "id": "n5-444",
      "jlpt": "N5",
      "headword": "ドア",
      "source_form": "ドア",
      "variants": [
        "ドア"
      ],
      "reading": "ドア",
      "reading_variants": [
        "ドア"
      ],
      "romaji": "doa",
      "part_of_speech": "noun",
      "meaning_zh": "门（西式的开关门）",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "ドアを開けてください。",
          "zh": "请把门打开。",
          "focus": ["ドア"],
          "zhFocus": ["门"]
        },
        {
          "ja": "部屋を出る時、ドアを閉めます。",
          "zh": "离开房间时把门关上。",
          "focus": ["ドア"],
          "zhFocus": ["门"]
        },
        {
          "ja": "ドアの前に人がいます。",
          "zh": "门前有人。",
          "focus": ["ドア"],
          "zhFocus": ["门"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-445",
      "jlpt": "N5",
      "headword": "トイレ",
      "source_form": "トイレ",
      "variants": [
        "トイレ"
      ],
      "reading": "トイレ",
      "reading_variants": [
        "トイレ"
      ],
      "romaji": "toire",
      "part_of_speech": "noun",
      "meaning_zh": "厕所；洗手间（最常用的说法）",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "トイレはどこですか。",
          "zh": "厕所在哪里？",
          "focus": ["トイレ"],
          "zhFocus": ["厕所"]
        },
        {
          "ja": "トイレへ行きます。",
          "zh": "去厕所。",
          "focus": ["トイレ"],
          "zhFocus": ["厕所"]
        },
        {
          "ja": "トイレを借りてもいいですか。",
          "zh": "可以借用厕所吗？",
          "focus": ["トイレ"],
          "zhFocus": ["厕所"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-446",
      "jlpt": "N5",
      "headword": "どう",
      "source_form": "どう",
      "variants": [
        "どう"
      ],
      "reading": "どう",
      "reading_variants": [
        "どう"
      ],
      "romaji": "dou",
      "part_of_speech": "adverb",
      "meaning_zh": "怎么样；如何",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "これはどうですか。",
          "zh": "这个怎么样？",
          "focus": ["どう"],
          "zhFocus": ["怎么样"]
        },
        {
          "ja": "学校へどう行きますか。",
          "zh": "怎么去学校？",
          "focus": ["どう"],
          "zhFocus": ["怎么"]
        },
        {
          "ja": "体はどうですか。",
          "zh": "身体怎么样？",
          "focus": ["どう"],
          "zhFocus": ["怎么样"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-447",
      "jlpt": "N5",
      "headword": "どうして",
      "source_form": "どうして",
      "variants": [
        "どうして"
      ],
      "reading": "どうして",
      "reading_variants": [
        "どうして"
      ],
      "romaji": "doushite",
      "part_of_speech": "adverb",
      "meaning_zh": "为什么（口语常用）",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "どうして休みましたか。",
          "zh": "为什么请假了？",
          "focus": ["どうして"],
          "zhFocus": ["为什么"]
        },
        {
          "ja": "どうして来なかったんですか。",
          "zh": "为什么没来呢？",
          "focus": ["どうして"],
          "zhFocus": ["为什么"]
        },
        {
          "ja": "どうしてですか。",
          "zh": "为什么？",
          "focus": ["どうして"],
          "zhFocus": ["为什么"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-448",
      "jlpt": "N5",
      "headword": "どうぞ",
      "source_form": "どうぞ",
      "variants": [
        "どうぞ"
      ],
      "reading": "どうぞ",
      "reading_variants": [
        "どうぞ"
      ],
      "romaji": "douzo",
      "part_of_speech": "adverb/expression",
      "meaning_zh": "请；请用",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "どうぞ入ってください。",
          "zh": "请进。",
          "focus": ["どうぞ"],
          "zhFocus": ["请"]
        },
        {
          "ja": "お茶をどうぞ。",
          "zh": "请喝茶。",
          "focus": ["どうぞ"],
          "zhFocus": ["请"]
        },
        {
          "ja": "どうぞよろしくお願いします。",
          "zh": "请多关照。",
          "focus": ["どうぞ"],
          "zhFocus": ["请"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-449",
      "jlpt": "N5",
      "headword": "動物",
      "source_form": "動物",
      "variants": [
        "動物"
      ],
      "reading": "どうぶつ",
      "reading_variants": [
        "どうぶつ"
      ],
      "romaji": "doubutsu",
      "part_of_speech": "noun",
      "meaning_zh": "动物",
      "kanji_readings": [
        {
          "form": "動物",
          "reading": "どうぶつ"
        }
      ],
      "examples": [
        {
          "ja": "動物が好きです。",
          "zh": "喜欢动物。",
          "focus": ["動物"],
          "zhFocus": ["动物"]
        },
        {
          "ja": "動物園で動物を見ます。",
          "zh": "在动物园看动物。",
          "focus": [{"after": "動物園で", "text": "動物"}],
          "zhFocus": [{"after": "在动物园看", "text": "动物"}]
        },
        {
          "ja": "小さい動物がいます。",
          "zh": "有小动物。",
          "focus": ["動物"],
          "zhFocus": ["动物"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-450",
      "jlpt": "N5",
      "headword": "どうも",
      "source_form": "どうも",
      "variants": [
        "どうも"
      ],
      "reading": "どうも",
      "reading_variants": [
        "どうも"
      ],
      "romaji": "doumo",
      "part_of_speech": "adverb/expression",
      "meaning_zh": "非常；谢谢；总觉得",
      "senses_zh": [
        "非常",
        "谢谢",
        "总觉得"
      ],
      "kanji_readings": [],
      "examples": [
        {
          "ja": "どうもありがとうございます。",
          "zh": "非常感谢。",
          "focus": ["どうも"],
          "zhFocus": ["非常"]
        },
        {
          "ja": "どうもすみません。",
          "zh": "非常抱歉。",
          "focus": ["どうも"],
          "zhFocus": ["非常"]
        },
        {
          "ja": "どうも変ですね。",
          "zh": "总觉得很奇怪呢。",
          "focus": ["どうも"],
          "zhFocus": ["总觉得"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-451",
      "jlpt": "N5",
      "headword": "十",
      "source_form": "十",
      "variants": [
        "十"
      ],
      "reading": "とお",
      "reading_variants": [
        "とお"
      ],
      "romaji": "too",
      "part_of_speech": "numeral",
      "meaning_zh": "十个",
      "kanji_readings": [
        {
          "form": "十",
          "reading": "とお"
        }
      ],
      "examples": [
        {
          "ja": "みかんを十ください。",
          "zh": "请给我十个橘子。",
          "focus": ["十"],
          "zhFocus": ["十个"]
        },
        {
          "ja": "りんごが十あります。",
          "zh": "有十个苹果。",
          "focus": ["十"],
          "zhFocus": ["十个"]
        },
        {
          "ja": "一つから十まで数えます。",
          "zh": "从一数到十。",
          "focus": ["十"],
          "zhFocus": ["十"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-452",
      "jlpt": "N5",
      "headword": "遠い",
      "source_form": "遠い",
      "variants": [
        "遠い"
      ],
      "reading": "とおい",
      "reading_variants": [
        "とおい"
      ],
      "romaji": "tooi",
      "part_of_speech": "i-adjective",
      "meaning_zh": "远的",
      "kanji_readings": [
        {
          "form": "遠い",
          "reading": "とおい"
        }
      ],
      "examples": [
        {
          "ja": "学校は家から遠いです。",
          "zh": "学校离家很远。",
          "focus": ["遠い"],
          "zhFocus": ["远"]
        },
        {
          "ja": "駅はここから遠いですか。",
          "zh": "车站离这里远吗？",
          "focus": ["遠い"],
          "zhFocus": ["远"]
        },
        {
          "ja": "遠い山が見えます。",
          "zh": "能看见远处的山。",
          "focus": ["遠い"],
          "zhFocus": ["远"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-453",
      "jlpt": "N5",
      "headword": "十日",
      "source_form": "十日",
      "variants": [
        "十日"
      ],
      "reading": "とおか",
      "reading_variants": [
        "とおか"
      ],
      "romaji": "tooka",
      "part_of_speech": "noun",
      "meaning_zh": "十号；十天",
      "senses_zh": [
        "十号",
        "十天"
      ],
      "kanji_readings": [
        {
          "form": "十日",
          "reading": "とおか"
        }
      ],
      "examples": [
        {
          "ja": "十日に会いましょう。",
          "zh": "十号见吧。",
          "focus": ["十日"],
          "zhFocus": ["十号"]
        },
        {
          "ja": "十日は休みです。",
          "zh": "十号休息。",
          "focus": ["十日"],
          "zhFocus": ["十号"]
        },
        {
          "ja": "十日に日本へ行きます。",
          "zh": "十号去日本。",
          "focus": ["十日"],
          "zhFocus": ["十号"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-454",
      "jlpt": "N5",
      "headword": "時",
      "source_form": "時",
      "variants": [
        "時"
      ],
      "reading": "とき",
      "reading_variants": [
        "とき"
      ],
      "romaji": "toki",
      "part_of_speech": "noun",
      "meaning_zh": "……的时候",
      "kanji_readings": [
        {
          "form": "時",
          "reading": "とき"
        }
      ],
      "examples": [
        {
          "ja": "暇な時、本を読みます。",
          "zh": "有空的时候读书。",
          "focus": ["時"],
          "zhFocus": ["时候"]
        },
        {
          "ja": "子供の時、よく遊びました。",
          "zh": "小时候经常玩。",
          "focus": ["時"],
          "zhFocus": ["时候"]
        },
        {
          "ja": "困った時、先生に聞きます。",
          "zh": "遇到困难时问老师。",
          "focus": ["時"],
          "zhFocus": ["时"]
        }
      ],
      "note_zh": "名词，前面接「名词＋の」「な形容词＋な」、动词或い形容词。"
    },
    {
      "id": "n5-455",
      "jlpt": "N5",
      "headword": "時々",
      "source_form": "時々",
      "variants": [
        "時々"
      ],
      "reading": "ときどき",
      "reading_variants": [
        "ときどき"
      ],
      "romaji": "tokidoki",
      "part_of_speech": "adverb",
      "meaning_zh": "有时",
      "kanji_readings": [
        {
          "form": "時々",
          "reading": "ときどき"
        }
      ],
      "examples": [
        {
          "ja": "時々映画を見ます。",
          "zh": "有时看电影。",
          "focus": ["時々"],
          "zhFocus": ["有时"]
        },
        {
          "ja": "時々友達に電話します。",
          "zh": "有时给朋友打电话。",
          "focus": ["時々"],
          "zhFocus": ["有时"]
        },
        {
          "ja": "日曜日は時々出かけます。",
          "zh": "星期天有时出门。",
          "focus": ["時々"],
          "zhFocus": ["有时"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-456",
      "jlpt": "N5",
      "headword": "時計",
      "source_form": "時計",
      "variants": [
        "時計"
      ],
      "reading": "とけい",
      "reading_variants": [
        "とけい"
      ],
      "romaji": "tokei",
      "part_of_speech": "noun",
      "meaning_zh": "钟表；手表",
      "kanji_readings": [
        {
          "form": "時計",
          "reading": "とけい"
        }
      ],
      "examples": [
        {
          "ja": "新しい時計がほしいです。",
          "zh": "想要一块新手表。",
          "focus": ["時計"],
          "zhFocus": ["手表"]
        },
        {
          "ja": "教室の時計は止まっています。",
          "zh": "教室的钟停了。",
          "focus": ["時計"],
          "zhFocus": ["钟"]
        },
        {
          "ja": "時計を壁に掛けました。",
          "zh": "把钟挂在了墙上。",
          "focus": ["時計"],
          "zhFocus": ["钟"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-457",
      "jlpt": "N5",
      "headword": "どこ",
      "source_form": "どこ",
      "variants": [
        "どこ"
      ],
      "reading": "どこ",
      "reading_variants": [
        "どこ"
      ],
      "romaji": "doko",
      "part_of_speech": "pronoun/demonstrative",
      "meaning_zh": "哪里",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "駅はどこですか。",
          "zh": "车站在哪里？",
          "focus": ["どこ"],
          "zhFocus": ["哪里"]
        },
        {
          "ja": "どこへ行きますか。",
          "zh": "你去哪里？",
          "focus": ["どこ"],
          "zhFocus": ["哪里"]
        },
        {
          "ja": "どこで昼ご飯を食べますか。",
          "zh": "在哪里吃午饭？",
          "focus": ["どこ"],
          "zhFocus": ["哪里"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-458",
      "jlpt": "N5",
      "headword": "所",
      "source_form": "所",
      "variants": [
        "所"
      ],
      "reading": "ところ",
      "reading_variants": [
        "ところ"
      ],
      "romaji": "tokoro",
      "part_of_speech": "noun",
      "meaning_zh": "地方；场所",
      "kanji_readings": [
        {
          "form": "所",
          "reading": "ところ"
        }
      ],
      "examples": [
        {
          "ja": "静かな所で勉強します。",
          "zh": "在安静的地方学习。",
          "focus": ["所"],
          "zhFocus": ["地方"]
        },
        {
          "ja": "ここはいい所です。",
          "zh": "这里是好地方。",
          "focus": ["所"],
          "zhFocus": ["地方"]
        },
        {
          "ja": "待つ所はどこですか。",
          "zh": "等候的地方在哪里？",
          "focus": ["所"],
          "zhFocus": ["地方"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-459",
      "jlpt": "N5",
      "headword": "年",
      "source_form": "年",
      "variants": [
        "年"
      ],
      "reading": "とし",
      "reading_variants": [
        "とし"
      ],
      "romaji": "toshi",
      "part_of_speech": "noun",
      "meaning_zh": "年；年龄",
      "senses_zh": [
        "年",
        "年龄"
      ],
      "kanji_readings": [
        {
          "form": "年",
          "reading": "とし"
        }
      ],
      "examples": [
        {
          "ja": "父は年を取りました。",
          "zh": "父亲上年纪了。",
          "focus": ["年"],
          "zhFocus": ["年"]
        },
        {
          "ja": "兄と姉は年が近いです。",
          "zh": "哥哥和姐姐年龄相近。",
          "focus": ["年"],
          "zhFocus": ["年龄"]
        },
        {
          "ja": "年を聞かないでください。",
          "zh": "请不要问年龄。",
          "focus": ["年"],
          "zhFocus": ["年龄"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-460",
      "jlpt": "N5",
      "headword": "図書館",
      "source_form": "図書館",
      "variants": [
        "図書館"
      ],
      "reading": "としょかん",
      "reading_variants": [
        "としょかん"
      ],
      "romaji": "toshokan",
      "part_of_speech": "noun",
      "meaning_zh": "图书馆",
      "kanji_readings": [
        {
          "form": "図書館",
          "reading": "としょかん"
        }
      ],
      "examples": [
        {
          "ja": "図書館へ行きます。",
          "zh": "去图书馆。",
          "focus": ["図書館"],
          "zhFocus": ["图书馆"]
        },
        {
          "ja": "図書館は駅の近くです。",
          "zh": "图书馆在车站附近。",
          "focus": ["図書館"],
          "zhFocus": ["图书馆"]
        },
        {
          "ja": "図書館で友達に会います。",
          "zh": "在图书馆见朋友。",
          "focus": ["図書館"],
          "zhFocus": ["图书馆"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-461",
      "jlpt": "N5",
      "headword": "どちら",
      "source_form": "どちら",
      "variants": [
        "どちら"
      ],
      "reading": "どちら",
      "reading_variants": [
        "どちら"
      ],
      "romaji": "dochira",
      "part_of_speech": "pronoun/demonstrative",
      "meaning_zh": "哪边；哪位；哪个（两者之中，礼貌说法）",
      "senses_zh": [
        "哪边",
        "哪位",
        "哪个（两者之中，礼貌说法）"
      ],
      "kanji_readings": [],
      "examples": [
        {
          "ja": "どちらへ行きますか。",
          "zh": "您去哪边？",
          "focus": ["どちら"],
          "zhFocus": ["哪边"]
        },
        {
          "ja": "どちらがいいですか。",
          "zh": "哪个比较好？",
          "focus": ["どちら"],
          "zhFocus": ["哪个"]
        },
        {
          "ja": "どちら様ですか。",
          "zh": "请问是哪位？",
          "focus": ["どちら"],
          "zhFocus": ["哪位"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-462",
      "jlpt": "N5",
      "headword": "どっち",
      "source_form": "どっち",
      "variants": [
        "どっち"
      ],
      "reading": "どっち",
      "reading_variants": [
        "どっち"
      ],
      "romaji": "dotchi",
      "part_of_speech": "pronoun/demonstrative",
      "meaning_zh": "哪边；哪个（两者之中，口语）",
      "senses_zh": [
        "哪边",
        "哪个（两者之中，口语）"
      ],
      "kanji_readings": [],
      "examples": [
        {
          "ja": "どっちが好きですか。",
          "zh": "你喜欢哪个？",
          "focus": ["どっち"],
          "zhFocus": ["哪个"]
        },
        {
          "ja": "駅はどっちですか。",
          "zh": "车站在哪边？",
          "focus": ["どっち"],
          "zhFocus": ["哪边"]
        },
        {
          "ja": "どっちへ行きますか。",
          "zh": "去哪个方向？",
          "focus": ["どっち"],
          "zhFocus": ["哪个"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-463",
      "jlpt": "N5",
      "headword": "とても",
      "source_form": "とても",
      "variants": [
        "とても"
      ],
      "reading": "とても",
      "reading_variants": [
        "とても"
      ],
      "romaji": "totemo",
      "part_of_speech": "adverb",
      "meaning_zh": "非常；很",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "今日はとても暑いです。",
          "zh": "今天非常热。",
          "focus": ["とても"],
          "zhFocus": ["非常"]
        },
        {
          "ja": "この映画はとてもおもしろいです。",
          "zh": "这部电影非常有趣。",
          "focus": ["とても"],
          "zhFocus": ["非常"]
        },
        {
          "ja": "先生はとても親切です。",
          "zh": "老师非常亲切。",
          "focus": ["とても"],
          "zhFocus": ["非常"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-464",
      "jlpt": "N5",
      "headword": "どなた",
      "source_form": "どなた",
      "variants": [
        "どなた"
      ],
      "reading": "どなた",
      "reading_variants": [
        "どなた"
      ],
      "romaji": "donata",
      "part_of_speech": "pronoun/demonstrative",
      "meaning_zh": "哪位；谁（礼貌说法）",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "どなたですか。",
          "zh": "请问是哪位？",
          "focus": ["どなた"],
          "zhFocus": ["哪位"]
        },
        {
          "ja": "どなたに会いますか。",
          "zh": "您要见哪位？",
          "focus": ["どなた"],
          "zhFocus": ["哪位"]
        },
        {
          "ja": "あの方はどなたですか。",
          "zh": "那位是谁？",
          "focus": ["どなた"],
          "zhFocus": ["谁"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-465",
      "merged_source_ids": ["n4-478"],
      "jlpt": "N5",
      "headword": "隣",
      "source_form": "隣",
      "variants": [
        "隣"
      ],
      "reading": "となり",
      "reading_variants": [
        "となり"
      ],
      "romaji": "tonari",
      "part_of_speech": "noun",
      "meaning_zh": "旁边；隔壁",
      "kanji_readings": [
        {
          "form": "隣",
          "reading": "となり"
        }
      ],
      "examples": [
        {
          "ja": "隣に友達が座っています。",
          "zh": "朋友坐在旁边。",
          "focus": ["隣"],
          "zhFocus": ["旁边"]
        },
        {
          "ja": "銀行は郵便局の隣です。",
          "zh": "银行在邮局旁边。",
          "focus": ["隣"],
          "zhFocus": ["旁边"]
        },
        {
          "ja": "隣の部屋は静かです。",
          "zh": "隔壁房间很安静。",
          "focus": ["隣"],
          "zhFocus": ["隔壁"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-466",
      "jlpt": "N5",
      "headword": "どの",
      "source_form": "どの",
      "variants": [
        "どの"
      ],
      "reading": "どの",
      "reading_variants": [
        "どの"
      ],
      "romaji": "dono",
      "part_of_speech": "pre-noun/demonstrative",
      "meaning_zh": "哪个（连体词）",
      "answer_zh": "哪个",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "どの本を読みますか。",
          "zh": "你读哪本书？",
          "focus": ["どの"],
          "zhFocus": ["哪"]
        },
        {
          "ja": "どの人が先生ですか。",
          "zh": "哪位是老师？",
          "focus": ["どの"],
          "zhFocus": ["哪"]
        },
        {
          "ja": "どの店へ行きますか。",
          "zh": "去哪家店？",
          "focus": ["どの"],
          "zhFocus": ["哪"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-467",
      "jlpt": "N5",
      "headword": "飛ぶ",
      "source_form": "飛ぶ",
      "variants": [
        "飛ぶ"
      ],
      "reading": "とぶ",
      "reading_variants": [
        "とぶ"
      ],
      "romaji": "tobu",
      "part_of_speech": "verb",
      "meaning_zh": "飞；跳",
      "senses_zh": [
        "飞",
        "跳"
      ],
      "kanji_readings": [
        {
          "form": "飛ぶ",
          "reading": "とぶ"
        }
      ],
      "examples": [
        {
          "ja": "鳥が空を飛んでいます。",
          "zh": "鸟在天空飞。",
          "focus": ["飛ん"],
          "zhFocus": ["飞"]
        },
        {
          "ja": "飛行機が東京へ飛びます。",
          "zh": "飞机飞往东京。",
          "focus": ["飛び"],
          "zhFocus": [{"after": "飞机", "text": "飞"}]
        },
        {
          "ja": "風で帽子が飛びました。",
          "zh": "帽子被风吹飞了。",
          "focus": ["飛び"],
          "zhFocus": ["飞"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-468",
      "jlpt": "N5",
      "headword": "止まる",
      "source_form": "止まる",
      "variants": [
        "止まる"
      ],
      "reading": "とまる",
      "reading_variants": [
        "とまる"
      ],
      "romaji": "tomaru",
      "part_of_speech": "verb",
      "meaning_zh": "停下；停止（自动词）",
      "kanji_readings": [
        {
          "form": "止まる",
          "reading": "とまる"
        }
      ],
      "examples": [
        {
          "ja": "バスが駅で止まります。",
          "zh": "公交车在车站停。",
          "focus": ["止まり"],
          "zhFocus": ["停"]
        },
        {
          "ja": "時計が止まりました。",
          "zh": "钟停了。",
          "focus": ["止まり"],
          "zhFocus": ["停"]
        },
        {
          "ja": "赤信号で車が止まります。",
          "zh": "红灯时车停下。",
          "focus": ["止まり"],
          "zhFocus": ["停下"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-469",
      "jlpt": "N5",
      "headword": "友達",
      "source_form": "友達",
      "variants": [
        "友達"
      ],
      "reading": "ともだち",
      "reading_variants": [
        "ともだち"
      ],
      "romaji": "tomodachi",
      "part_of_speech": "noun",
      "meaning_zh": "朋友",
      "kanji_readings": [
        {
          "form": "友達",
          "reading": "ともだち"
        }
      ],
      "examples": [
        {
          "ja": "友達と映画を見ます。",
          "zh": "和朋友看电影。",
          "focus": ["友達"],
          "zhFocus": ["朋友"]
        },
        {
          "ja": "駅で友達に会いました。",
          "zh": "在车站见到了朋友。",
          "focus": ["友達"],
          "zhFocus": ["朋友"]
        },
        {
          "ja": "友達に電話します。",
          "zh": "给朋友打电话。",
          "focus": ["友達"],
          "zhFocus": ["朋友"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-470",
      "jlpt": "N5",
      "headword": "土曜日",
      "source_form": "土曜日",
      "variants": [
        "土曜日"
      ],
      "reading": "どようび",
      "reading_variants": [
        "どようび"
      ],
      "romaji": "doyoubi",
      "part_of_speech": "noun",
      "meaning_zh": "星期六",
      "kanji_readings": [
        {
          "form": "土曜日",
          "reading": "どようび"
        }
      ],
      "examples": [
        {
          "ja": "土曜日に学校へ行きます。",
          "zh": "星期六去学校。",
          "focus": ["土曜日"],
          "zhFocus": ["星期六"]
        },
        {
          "ja": "土曜日は休みです。",
          "zh": "星期六休息。",
          "focus": ["土曜日"],
          "zhFocus": ["星期六"]
        },
        {
          "ja": "次の土曜日に会いましょう。",
          "zh": "下个星期六见吧。",
          "focus": ["土曜日"],
          "zhFocus": ["星期六"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-471",
      "jlpt": "N5",
      "headword": "鳥",
      "source_form": "鳥",
      "variants": [
        "鳥"
      ],
      "reading": "とり",
      "reading_variants": [
        "とり"
      ],
      "romaji": "tori",
      "part_of_speech": "noun",
      "meaning_zh": "鸟",
      "kanji_readings": [
        {
          "form": "鳥",
          "reading": "とり"
        }
      ],
      "examples": [
        {
          "ja": "木の上に小さい鳥がいます。",
          "zh": "树上有一只小鸟。",
          "focus": ["鳥"],
          "zhFocus": ["鸟"]
        },
        {
          "ja": "朝、鳥が鳴きます。",
          "zh": "早上鸟叫。",
          "focus": ["鳥"],
          "zhFocus": ["鸟"]
        },
        {
          "ja": "白い鳥を見ました。",
          "zh": "看到了白鸟。",
          "focus": ["鳥"],
          "zhFocus": ["鸟"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-472",
      "jlpt": "N5",
      "headword": "鶏肉",
      "source_form": "鶏肉",
      "variants": [
        "鶏肉"
      ],
      "reading": "とりにく",
      "reading_variants": [
        "とりにく"
      ],
      "romaji": "toriniku",
      "part_of_speech": "noun",
      "meaning_zh": "鸡肉",
      "kanji_readings": [
        {
          "form": "鶏肉",
          "reading": "とりにく"
        }
      ],
      "examples": [
        {
          "ja": "鶏肉を小さく切ってください。",
          "zh": "请把鸡肉切小一点。",
          "focus": ["鶏肉"],
          "zhFocus": ["鸡肉"]
        },
        {
          "ja": "この料理には鶏肉を使います。",
          "zh": "这道菜要用鸡肉。",
          "focus": ["鶏肉"],
          "zhFocus": ["鸡肉"]
        },
        {
          "ja": "鶏肉が嫌いな人もいます。",
          "zh": "也有人不喜欢鸡肉。",
          "focus": ["鶏肉"],
          "zhFocus": ["鸡肉"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-473",
      "jlpt": "N5",
      "headword": "取る",
      "source_form": "取る",
      "variants": [
        "取る"
      ],
      "reading": "とる",
      "reading_variants": [
        "とる"
      ],
      "romaji": "toru",
      "part_of_speech": "verb",
      "meaning_zh": "拿；取得；取下",
      "senses_zh": [
        "拿",
        "取得",
        "取下"
      ],
      "kanji_readings": [
        {
          "form": "取る",
          "reading": "とる"
        }
      ],
      "examples": [
        {
          "ja": "机の上の本を取ります。",
          "zh": "拿桌子上的书。",
          "focus": ["取り"],
          "zhFocus": ["拿"]
        },
        {
          "ja": "棚からかばんを取りました。",
          "zh": "从架子上拿了包。",
          "focus": ["取り"],
          "zhFocus": ["拿"]
        },
        {
          "ja": "いい点を取りました。",
          "zh": "取得了好分数。",
          "focus": ["取り"],
          "zhFocus": ["取得"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-474",
      "jlpt": "N5",
      "headword": "撮る",
      "source_form": "撮る",
      "variants": [
        "撮る"
      ],
      "reading": "とる",
      "reading_variants": [
        "とる"
      ],
      "romaji": "toru",
      "part_of_speech": "verb",
      "meaning_zh": "拍摄",
      "kanji_readings": [
        {
          "form": "撮る",
          "reading": "とる"
        }
      ],
      "examples": [
        {
          "ja": "写真を撮ります。",
          "zh": "拍照片。",
          "focus": ["撮り"],
          "zhFocus": ["拍"]
        },
        {
          "ja": "友達と写真を撮りました。",
          "zh": "和朋友拍了照片。",
          "focus": ["撮り"],
          "zhFocus": ["拍"]
        },
        {
          "ja": "ここで映画を撮っています。",
          "zh": "正在这里拍电影。",
          "focus": ["撮っ"],
          "zhFocus": ["拍"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-475",
      "jlpt": "N5",
      "headword": "どれ",
      "source_form": "どれ",
      "variants": [
        "どれ"
      ],
      "reading": "どれ",
      "reading_variants": [
        "どれ"
      ],
      "romaji": "dore",
      "part_of_speech": "pronoun/demonstrative",
      "meaning_zh": "哪个（三个以上之中）",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "どれがあなたの本ですか。",
          "zh": "哪本是你的书？",
          "focus": ["どれ"],
          "zhFocus": ["哪"]
        },
        {
          "ja": "どれを買いますか。",
          "zh": "你买哪个？",
          "focus": ["どれ"],
          "zhFocus": ["哪个"]
        },
        {
          "ja": "どれが好きですか。",
          "zh": "你喜欢哪个？",
          "focus": ["どれ"],
          "zhFocus": ["哪个"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-476",
      "jlpt": "N5",
      "headword": "どんな",
      "source_form": "どんな",
      "variants": [
        "どんな"
      ],
      "reading": "どんな",
      "reading_variants": [
        "どんな"
      ],
      "romaji": "donna",
      "part_of_speech": "pre-noun/demonstrative",
      "meaning_zh": "什么样的",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "どんな音楽が好きですか。",
          "zh": "你喜欢什么样的音乐？",
          "focus": ["どんな"],
          "zhFocus": ["什么样"]
        },
        {
          "ja": "どんな人ですか。",
          "zh": "是什么样的人？",
          "focus": ["どんな"],
          "zhFocus": ["什么样"]
        },
        {
          "ja": "どんな仕事ですか。",
          "zh": "是什么样的工作？",
          "focus": ["どんな"],
          "zhFocus": ["什么样"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-477",
      "jlpt": "N5",
      "headword": "ない",
      "source_form": "ない",
      "variants": [
        "ない"
      ],
      "reading": "ない",
      "reading_variants": [
        "ない"
      ],
      "romaji": "nai",
      "part_of_speech": "i-adjective",
      "meaning_zh": "没有；不存在",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "お金がないです。",
          "zh": "没有钱。",
          "focus": ["ない"],
          "zhFocus": ["没有"]
        },
        {
          "ja": "今日は時間がないので、タクシーで行きます。",
          "zh": "今天没有时间，所以坐出租车去。",
          "focus": ["ない"],
          "zhFocus": ["没有"]
        },
        {
          "ja": "ここには本がないです。",
          "zh": "这里没有书。",
          "focus": ["ない"],
          "zhFocus": ["没有"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-478",
      "jlpt": "N5",
      "headword": "ナイフ",
      "source_form": "ナイフ",
      "variants": [
        "ナイフ"
      ],
      "reading": "ナイフ",
      "reading_variants": [
        "ナイフ"
      ],
      "romaji": "naifu",
      "part_of_speech": "noun",
      "meaning_zh": "刀",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "ナイフとフォークで食べます。",
          "zh": "用刀叉吃。",
          "focus": ["ナイフ"],
          "zhFocus": ["刀"]
        },
        {
          "ja": "子供にナイフを渡さないでください。",
          "zh": "请不要把刀交给孩子。",
          "focus": ["ナイフ"],
          "zhFocus": ["刀"]
        },
        {
          "ja": "ナイフでりんごを切ります。",
          "zh": "用刀切苹果。",
          "focus": ["ナイフ"],
          "zhFocus": ["刀"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-479",
      "jlpt": "N5",
      "headword": "中",
      "source_form": "中",
      "variants": [
        "中"
      ],
      "reading": "なか",
      "reading_variants": [
        "なか"
      ],
      "romaji": "naka",
      "part_of_speech": "noun",
      "meaning_zh": "里面；中间",
      "senses_zh": [
        "里面",
        "中间"
      ],
      "kanji_readings": [
        {
          "form": "中",
          "reading": "なか"
        }
      ],
      "examples": [
        {
          "ja": "箱の中に本があります。",
          "zh": "盒子里面有书。",
          "focus": ["中"],
          "zhFocus": ["里面"]
        },
        {
          "ja": "部屋の中は暖かいです。",
          "zh": "房间里很暖和。",
          "focus": ["中"],
          "zhFocus": ["里"]
        },
        {
          "ja": "かばんの中を見ます。",
          "zh": "看包里面。",
          "focus": ["中"],
          "zhFocus": ["里面"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-480",
      "jlpt": "N5",
      "headword": "長い",
      "source_form": "長い",
      "variants": [
        "長い"
      ],
      "reading": "ながい",
      "reading_variants": [
        "ながい"
      ],
      "romaji": "nagai",
      "part_of_speech": "i-adjective",
      "meaning_zh": "长的",
      "kanji_readings": [
        {
          "form": "長い",
          "reading": "ながい"
        }
      ],
      "examples": [
        {
          "ja": "この川は長いです。",
          "zh": "这条河很长。",
          "focus": ["長い"],
          "zhFocus": ["长"]
        },
        {
          "ja": "姉は髪が長いです。",
          "zh": "姐姐的头发很长。",
          "focus": ["長い"],
          "zhFocus": ["长"]
        },
        {
          "ja": "長い話を聞きました。",
          "zh": "听了一个很长的故事。",
          "focus": ["長い"],
          "zhFocus": ["长"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-481",
      "jlpt": "N5",
      "headword": "鳴く",
      "source_form": "鳴く",
      "variants": [
        "鳴く"
      ],
      "reading": "なく",
      "reading_variants": [
        "なく"
      ],
      "romaji": "naku",
      "part_of_speech": "verb",
      "meaning_zh": "鸣叫；叫（动物）",
      "kanji_readings": [
        {
          "form": "鳴く",
          "reading": "なく"
        }
      ],
      "examples": [
        {
          "ja": "犬が大きな声で鳴いています。",
          "zh": "狗在大声叫。",
          "focus": ["鳴い"],
          "zhFocus": ["叫"]
        },
        {
          "ja": "鳥が朝から鳴いています。",
          "zh": "鸟从早上就在叫。",
          "focus": ["鳴い"],
          "zhFocus": ["叫"]
        },
        {
          "ja": "猫が夜に鳴きました。",
          "zh": "猫晚上叫了。",
          "focus": ["鳴き"],
          "zhFocus": ["叫"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-482",
      "jlpt": "N5",
      "headword": "無くす",
      "source_form": "無くす",
      "variants": [
        "無くす"
      ],
      "reading": "なくす",
      "reading_variants": [
        "なくす"
      ],
      "romaji": "nakusu",
      "part_of_speech": "verb",
      "meaning_zh": "丢失；弄丢",
      "kanji_readings": [
        {
          "form": "無くす",
          "reading": "なくす"
        }
      ],
      "examples": [
        {
          "ja": "財布を無くしました。",
          "zh": "把钱包弄丢了。",
          "focus": ["無くし"],
          "zhFocus": ["弄丢"]
        },
        {
          "ja": "鍵を無くさないでください。",
          "zh": "请不要弄丢钥匙。",
          "focus": ["無くさ"],
          "zhFocus": ["弄丢"]
        },
        {
          "ja": "大切な手紙を無くしました。",
          "zh": "弄丢了重要的信。",
          "focus": ["無くし"],
          "zhFocus": ["弄丢"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-483",
      "jlpt": "N5",
      "headword": "なぜ",
      "source_form": "なぜ",
      "variants": [
        "なぜ"
      ],
      "reading": "なぜ",
      "reading_variants": [
        "なぜ"
      ],
      "romaji": "naze",
      "part_of_speech": "adverb",
      "meaning_zh": "为什么（较书面）",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "なぜ遅れましたか。",
          "zh": "为什么迟到了？",
          "focus": ["なぜ"],
          "zhFocus": ["为什么"]
        },
        {
          "ja": "なぜそう思うんですか。",
          "zh": "为什么那么想呢？",
          "focus": ["なぜ"],
          "zhFocus": ["为什么"]
        },
        {
          "ja": "なぜ日本語を勉強しますか。",
          "zh": "为什么学日语？",
          "focus": ["なぜ"],
          "zhFocus": ["为什么"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-484",
      "jlpt": "N5",
      "headword": "夏",
      "source_form": "夏",
      "variants": [
        "夏"
      ],
      "reading": "なつ",
      "reading_variants": [
        "なつ"
      ],
      "romaji": "natsu",
      "part_of_speech": "noun",
      "meaning_zh": "夏天",
      "kanji_readings": [
        {
          "form": "夏",
          "reading": "なつ"
        }
      ],
      "examples": [
        {
          "ja": "夏は暑いです。",
          "zh": "夏天很热。",
          "focus": ["夏"],
          "zhFocus": ["夏天"]
        },
        {
          "ja": "夏に海へ行きます。",
          "zh": "夏天去海边。",
          "focus": ["夏"],
          "zhFocus": ["夏天"]
        },
        {
          "ja": "夏休みに旅行します。",
          "zh": "暑假去旅行。",
          "focus": ["夏"],
          "zhFocus": ["暑"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-485",
      "jlpt": "N5",
      "headword": "夏休み",
      "source_form": "夏休み",
      "variants": [
        "夏休み"
      ],
      "reading": "なつやすみ",
      "reading_variants": [
        "なつやすみ"
      ],
      "romaji": "natsuyasumi",
      "part_of_speech": "noun",
      "meaning_zh": "暑假",
      "kanji_readings": [
        {
          "form": "夏休み",
          "reading": "なつやすみ"
        }
      ],
      "examples": [
        {
          "ja": "夏休みに海へ行きます。",
          "zh": "暑假去海边。",
          "focus": ["夏休み"],
          "zhFocus": ["暑假"]
        },
        {
          "ja": "夏休みは忙しいです。",
          "zh": "暑假很忙。",
          "focus": ["夏休み"],
          "zhFocus": ["暑假"]
        },
        {
          "ja": "夏休み、友達に会います。",
          "zh": "暑假见朋友。",
          "focus": ["夏休み"],
          "zhFocus": ["暑假"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-487",
      "jlpt": "N5",
      "headword": "七つ",
      "source_form": "七つ",
      "variants": [
        "七つ"
      ],
      "reading": "ななつ",
      "reading_variants": [
        "ななつ"
      ],
      "romaji": "nanatsu",
      "part_of_speech": "numeral/counter",
      "meaning_zh": "七个",
      "kanji_readings": [
        {
          "form": "七つ",
          "reading": "ななつ"
        }
      ],
      "examples": [
        {
          "ja": "椅子が七つあります。",
          "zh": "有七把椅子。",
          "focus": ["七つ"],
          "zhFocus": ["七"]
        },
        {
          "ja": "七つください。",
          "zh": "请给我七个。",
          "focus": ["七つ"],
          "zhFocus": ["七个"]
        },
        {
          "ja": "七つの質問があります。",
          "zh": "有七个问题。",
          "focus": ["七つ"],
          "zhFocus": ["七个"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-488",
      "jlpt": "N5",
      "headword": "何",
      "source_form": "何",
      "variants": [
        "何"
      ],
      "reading": "なん",
      "reading_variants": [
        "なん",
        "なに"
      ],
      "romaji": "nan",
      "part_of_speech": "interrogative/pronoun",
      "meaning_zh": "什么",
      "kanji_readings": [
        {
          "form": "何",
          "reading": "なん"
        }
      ],
      "examples": [
        {
          "ja": "これは何ですか。",
          "zh": "这是什么？",
          "focus": ["何"],
          "zhFocus": ["什么"]
        },
        {
          "ja": "何を食べますか。",
          "zh": "你吃什么？",
          "focus": ["何"],
          "zhFocus": ["什么"]
        },
        {
          "ja": "何時に行きますか。",
          "zh": "几点去？",
          "focus": ["何"],
          "zhFocus": ["几"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-489",
      "jlpt": "N5",
      "headword": "七日",
      "source_form": "七日",
      "variants": [
        "七日"
      ],
      "reading": "なのか",
      "reading_variants": [
        "なのか"
      ],
      "romaji": "nanoka",
      "part_of_speech": "noun",
      "meaning_zh": "七号；七天",
      "senses_zh": [
        "七号",
        "七天"
      ],
      "kanji_readings": [
        {
          "form": "七日",
          "reading": "なのか"
        }
      ],
      "examples": [
        {
          "ja": "七日に会いましょう。",
          "zh": "七号见吧。",
          "focus": ["七日"],
          "zhFocus": ["七号"]
        },
        {
          "ja": "七日は休みです。",
          "zh": "七号休息。",
          "focus": ["七日"],
          "zhFocus": ["七号"]
        },
        {
          "ja": "七日に日本へ行きます。",
          "zh": "七号去日本。",
          "focus": ["七日"],
          "zhFocus": ["七号"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-490",
      "jlpt": "N5",
      "headword": "名前",
      "source_form": "名前",
      "variants": [
        "名前"
      ],
      "reading": "なまえ",
      "reading_variants": [
        "なまえ"
      ],
      "romaji": "namae",
      "part_of_speech": "noun",
      "meaning_zh": "名字",
      "kanji_readings": [
        {
          "form": "名前",
          "reading": "なまえ"
        }
      ],
      "examples": [
        {
          "ja": "名前を書いてください。",
          "zh": "请写名字。",
          "focus": ["名前"],
          "zhFocus": ["名字"]
        },
        {
          "ja": "この店の名前を知っていますか。",
          "zh": "你知道这家店的名字吗？",
          "focus": ["名前"],
          "zhFocus": ["名字"]
        },
        {
          "ja": "友達の名前を覚えました。",
          "zh": "记住了朋友的名字。",
          "focus": ["名前"],
          "zhFocus": ["名字"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-491",
      "jlpt": "N5",
      "headword": "習う",
      "source_form": "習う",
      "variants": [
        "習う"
      ],
      "reading": "ならう",
      "reading_variants": [
        "ならう"
      ],
      "romaji": "narau",
      "part_of_speech": "verb",
      "meaning_zh": "学习（跟人学）",
      "kanji_readings": [
        {
          "form": "習う",
          "reading": "ならう"
        }
      ],
      "examples": [
        {
          "ja": "先生に日本語を習います。",
          "zh": "跟老师学日语。",
          "focus": ["習い"],
          "zhFocus": ["学"]
        },
        {
          "ja": "子供の時、ピアノを習いました。",
          "zh": "小时候学过钢琴。",
          "focus": ["習い"],
          "zhFocus": ["学"]
        },
        {
          "ja": "毎週、漢字を習います。",
          "zh": "每周学汉字。",
          "focus": ["習い"],
          "zhFocus": ["学"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-492",
      "jlpt": "N5",
      "headword": "並ぶ",
      "source_form": "並ぶ",
      "variants": [
        "並ぶ"
      ],
      "reading": "ならぶ",
      "reading_variants": [
        "ならぶ"
      ],
      "romaji": "narabu",
      "part_of_speech": "verb",
      "meaning_zh": "排队；排列（自动词）",
      "kanji_readings": [
        {
          "form": "並ぶ",
          "reading": "ならぶ"
        }
      ],
      "examples": [
        {
          "ja": "店の前に人が並んでいます。",
          "zh": "店前有人在排队。",
          "focus": ["並ん"],
          "zhFocus": ["排队"]
        },
        {
          "ja": "バス停で列に並びます。",
          "zh": "在公交车站排队。",
          "focus": ["並び"],
          "zhFocus": ["排队"]
        },
        {
          "ja": "ここに並んでください。",
          "zh": "请在这里排队。",
          "focus": ["並ん"],
          "zhFocus": ["排队"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-493",
      "jlpt": "N5",
      "headword": "並べる",
      "source_form": "並べる",
      "variants": [
        "並べる"
      ],
      "reading": "ならべる",
      "reading_variants": [
        "ならべる"
      ],
      "romaji": "naraberu",
      "part_of_speech": "verb",
      "meaning_zh": "排列；摆放（他动词）",
      "kanji_readings": [
        {
          "form": "並べる",
          "reading": "ならべる"
        }
      ],
      "examples": [
        {
          "ja": "机の上に本を並べます。",
          "zh": "把书摆在桌子上。",
          "focus": ["並べ"],
          "zhFocus": ["摆"]
        },
        {
          "ja": "椅子をきれいに並べました。",
          "zh": "把椅子摆整齐了。",
          "focus": ["並べ"],
          "zhFocus": ["摆"]
        },
        {
          "ja": "皿をテーブルに並べてください。",
          "zh": "请把盘子摆在桌上。",
          "focus": ["並べ"],
          "zhFocus": ["摆"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-494",
      "jlpt": "N5",
      "headword": "なる",
      "source_form": "なる",
      "variants": [
        "なる"
      ],
      "reading": "なる",
      "reading_variants": [
        "なる"
      ],
      "romaji": "naru",
      "part_of_speech": "verb",
      "meaning_zh": "成为；变成",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "先生になりたいです。",
          "zh": "想成为老师。",
          "focus": ["なり"],
          "zhFocus": ["成为"]
        },
        {
          "ja": "春になりました。",
          "zh": "到了春天。",
          "focus": ["なり"],
          "zhFocus": ["到"]
        },
        {
          "ja": "部屋が明るくなりました。",
          "zh": "房间变亮了。",
          "focus": ["なり"],
          "zhFocus": ["变"]
        }
      ],
      "note_zh": "本条只讲“成为、变成”的「なる」；表示“（果实）结出”的「なる（生る）」在 N2 另行学习。"
    },
    {
      "id": "n5-495",
      "jlpt": "N5",
      "headword": "何～",
      "source_form": "何～",
      "variants": [
        "何～"
      ],
      "reading": "なん～",
      "reading_variants": [
        "なん～"
      ],
      "romaji": "nan~",
      "part_of_speech": "interrogative/prefix",
      "meaning_zh": "什么……；几……",
      "senses_zh": [
        "什么……",
        "几……"
      ],
      "kanji_readings": [
        {
          "form": "何～",
          "reading": "なん～"
        }
      ],
      "examples": [
        {
          "ja": "何回行きましたか。",
          "zh": "去了几次？",
          "focus": ["何"],
          "zhFocus": ["几"]
        },
        {
          "ja": "何時ですか。",
          "zh": "几点？",
          "focus": ["何"],
          "zhFocus": ["几"]
        },
        {
          "ja": "何曜日ですか。",
          "zh": "星期几？",
          "focus": ["何"],
          "zhFocus": ["几"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-496",
      "jlpt": "N5",
      "headword": "二",
      "source_form": "二",
      "variants": [
        "二"
      ],
      "reading": "に",
      "reading_variants": [
        "に"
      ],
      "romaji": "ni",
      "part_of_speech": "numeral",
      "meaning_zh": "二",
      "kanji_readings": [
        {
          "form": "二",
          "reading": "に"
        }
      ],
      "examples": [
        {
          "ja": "二月は一年で一番短い月です。",
          "zh": "二月是一年中最短的月份。",
          "focus": ["二"],
          "zhFocus": ["二"]
        },
        {
          "ja": "答えは二です。",
          "zh": "答案是二。",
          "focus": ["二"],
          "zhFocus": ["二"]
        },
        {
          "ja": "二番の問題を見てください。",
          "zh": "请看第二题。",
          "focus": ["二"],
          "zhFocus": ["二"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-497",
      "jlpt": "N5",
      "headword": "にぎやか",
      "source_form": "にぎやか",
      "variants": [
        "にぎやか"
      ],
      "reading": "にぎやか",
      "reading_variants": [
        "にぎやか"
      ],
      "romaji": "nigiyaka",
      "part_of_speech": "na-adjective",
      "meaning_zh": "热闹的",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "駅の前はにぎやかです。",
          "zh": "车站前很热闹。",
          "focus": ["にぎやか"],
          "zhFocus": ["热闹"]
        },
        {
          "ja": "にぎやかな町に住んでいます。",
          "zh": "住在热闹的城镇。",
          "focus": ["にぎやか"],
          "zhFocus": ["热闹"]
        },
        {
          "ja": "祭りはとてもにぎやかです。",
          "zh": "节日活动很热闹。",
          "focus": ["にぎやか"],
          "zhFocus": ["热闹"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-498",
      "jlpt": "N5",
      "headword": "肉",
      "source_form": "肉",
      "variants": [
        "肉"
      ],
      "reading": "にく",
      "reading_variants": [
        "にく"
      ],
      "romaji": "niku",
      "part_of_speech": "noun",
      "meaning_zh": "肉",
      "kanji_readings": [
        {
          "form": "肉",
          "reading": "にく"
        }
      ],
      "examples": [
        {
          "ja": "肉を買いに店へ行きます。",
          "zh": "去店里买肉。",
          "focus": ["肉"],
          "zhFocus": ["肉"]
        },
        {
          "ja": "肉は冷蔵庫に入れてください。",
          "zh": "请把肉放进冰箱。",
          "focus": ["肉"],
          "zhFocus": ["肉"]
        },
        {
          "ja": "この肉は高いですが、おいしいです。",
          "zh": "这块肉很贵，但很好吃。",
          "focus": ["肉"],
          "zhFocus": ["肉"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-499",
      "jlpt": "N5",
      "headword": "西",
      "source_form": "西",
      "variants": [
        "西"
      ],
      "reading": "にし",
      "reading_variants": [
        "にし"
      ],
      "romaji": "nishi",
      "part_of_speech": "noun",
      "meaning_zh": "西；西方",
      "kanji_readings": [
        {
          "form": "西",
          "reading": "にし"
        }
      ],
      "examples": [
        {
          "ja": "大阪は東京の西にあります。",
          "zh": "大阪位于东京以西。",
          "focus": ["西"],
          "zhFocus": ["西"]
        },
        {
          "ja": "西の空に日が沈みます。",
          "zh": "太阳从西边的天空落下。",
          "focus": ["西"],
          "zhFocus": ["西"]
        },
        {
          "ja": "駅の西口で会いましょう。",
          "zh": "在车站西口见吧。",
          "focus": ["西"],
          "zhFocus": ["西"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-500",
      "jlpt": "N5",
      "headword": "～日",
      "source_form": "～日",
      "variants": [
        "～日"
      ],
      "reading": "～にち",
      "reading_variants": [
        "～にち"
      ],
      "romaji": "~nichi",
      "part_of_speech": "counter/suffix",
      "meaning_zh": "……日；……天",
      "senses_zh": [
        "……日",
        "……天"
      ],
      "kanji_readings": [
        {
          "form": "～日",
          "reading": "～にち"
        }
      ],
      "examples": [
        {
          "ja": "十一日に会いましょう。",
          "zh": "十一号见吧。",
          "focus": ["日"],
          "zhFocus": ["号"]
        },
        {
          "ja": "二十五日は休みです。",
          "zh": "二十五号休息。",
          "focus": ["日"],
          "zhFocus": ["号"]
        },
        {
          "ja": "何日に行きますか。",
          "zh": "几号去？",
          "focus": ["日"],
          "zhFocus": ["号"]
        }
      ],
      "note_zh": "接在数字或名词后使用；例句中去掉了前缀符号「～」。"
    },
    {
      "id": "n5-501",
      "jlpt": "N5",
      "headword": "日曜日",
      "source_form": "日曜日",
      "variants": [
        "日曜日"
      ],
      "reading": "にちようび",
      "reading_variants": [
        "にちようび"
      ],
      "romaji": "nichiyoubi",
      "part_of_speech": "noun",
      "meaning_zh": "星期日",
      "kanji_readings": [
        {
          "form": "日曜日",
          "reading": "にちようび"
        }
      ],
      "examples": [
        {
          "ja": "日曜日に学校へ行きます。",
          "zh": "星期日去学校。",
          "focus": ["日曜日"],
          "zhFocus": ["星期日"]
        },
        {
          "ja": "日曜日は休みです。",
          "zh": "星期日休息。",
          "focus": ["日曜日"],
          "zhFocus": ["星期日"]
        },
        {
          "ja": "次の日曜日に会いましょう。",
          "zh": "下个星期日见吧。",
          "focus": ["日曜日"],
          "zhFocus": ["星期日"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-502",
      "merged_source_ids": ["n4-507"],
      "jlpt": "N5",
      "headword": "荷物",
      "source_form": "荷物",
      "variants": [
        "荷物"
      ],
      "reading": "にもつ",
      "reading_variants": [
        "にもつ"
      ],
      "romaji": "nimotsu",
      "part_of_speech": "noun",
      "meaning_zh": "行李；包裹",
      "kanji_readings": [
        {
          "form": "荷物",
          "reading": "にもつ"
        }
      ],
      "examples": [
        {
          "ja": "荷物を持ちます。",
          "zh": "拿行李。",
          "focus": ["荷物"],
          "zhFocus": ["行李"]
        },
        {
          "ja": "荷物が重いです。",
          "zh": "行李很重。",
          "focus": ["荷物"],
          "zhFocus": ["行李"]
        },
        {
          "ja": "郵便局で荷物を送りました。",
          "zh": "在邮局寄了包裹。",
          "focus": ["荷物"],
          "zhFocus": ["包裹"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-503",
      "jlpt": "N5",
      "headword": "ニュース",
      "source_form": "ニュース",
      "variants": [
        "ニュース"
      ],
      "reading": "ニュース",
      "reading_variants": [
        "ニュース"
      ],
      "romaji": "nyuusu",
      "part_of_speech": "noun",
      "meaning_zh": "新闻",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "ニュースを読みます。",
          "zh": "读新闻。",
          "focus": ["ニュース"],
          "zhFocus": ["新闻"]
        },
        {
          "ja": "ニュースが好きです。",
          "zh": "喜欢新闻。",
          "focus": ["ニュース"],
          "zhFocus": ["新闻"]
        },
        {
          "ja": "朝、ニュースを読みました。",
          "zh": "早上读了新闻。",
          "focus": ["ニュース"],
          "zhFocus": ["新闻"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-504",
      "jlpt": "N5",
      "headword": "庭",
      "source_form": "庭",
      "variants": [
        "庭"
      ],
      "reading": "にわ",
      "reading_variants": [
        "にわ"
      ],
      "romaji": "niwa",
      "part_of_speech": "noun",
      "meaning_zh": "院子；庭院",
      "kanji_readings": [
        {
          "form": "庭",
          "reading": "にわ"
        }
      ],
      "examples": [
        {
          "ja": "庭に大きな木があります。",
          "zh": "院子里有一棵大树。",
          "focus": ["庭"],
          "zhFocus": ["院子"]
        },
        {
          "ja": "子供が庭で遊んでいます。",
          "zh": "孩子正在院子里玩。",
          "focus": ["庭"],
          "zhFocus": ["院子"]
        },
        {
          "ja": "毎朝、庭を掃除します。",
          "zh": "每天早上打扫院子。",
          "focus": ["庭"],
          "zhFocus": ["院子"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-505",
      "jlpt": "N5",
      "headword": "～人",
      "source_form": "～人",
      "variants": [
        "～人"
      ],
      "reading": "～にん",
      "reading_variants": [
        "～にん"
      ],
      "romaji": "~nin",
      "part_of_speech": "counter/suffix",
      "meaning_zh": "……个人",
      "kanji_readings": [
        {
          "form": "～人",
          "reading": "～にん"
        }
      ],
      "examples": [
        {
          "ja": "三人で映画を見ます。",
          "zh": "三个人看电影。",
          "focus": ["人"],
          "zhFocus": ["个人"]
        },
        {
          "ja": "教室に二十人います。",
          "zh": "教室里有二十个人。",
          "focus": ["人"],
          "zhFocus": ["个人"]
        },
        {
          "ja": "何人来ますか。",
          "zh": "几个人来？",
          "focus": ["人"],
          "zhFocus": ["个人"]
        }
      ],
      "note_zh": "接在数字或名词后使用；例句中去掉了前缀符号「～」。"
    },
    {
      "id": "n5-506",
      "jlpt": "N5",
      "headword": "脱ぐ",
      "source_form": "脱ぐ",
      "variants": [
        "脱ぐ"
      ],
      "reading": "ぬぐ",
      "reading_variants": [
        "ぬぐ"
      ],
      "romaji": "nugu",
      "part_of_speech": "verb",
      "meaning_zh": "脱（衣服、鞋帽）",
      "kanji_readings": [
        {
          "form": "脱ぐ",
          "reading": "ぬぐ"
        }
      ],
      "examples": [
        {
          "ja": "靴を脱いでください。",
          "zh": "请脱鞋。",
          "focus": ["脱い"],
          "zhFocus": ["脱"]
        },
        {
          "ja": "コートを脱ぎました。",
          "zh": "脱了外套。",
          "focus": ["脱ぎ"],
          "zhFocus": ["脱"]
        },
        {
          "ja": "暑いので上着を脱ぎます。",
          "zh": "因为热，所以脱外套。",
          "focus": ["脱ぎ"],
          "zhFocus": ["脱"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-507",
      "jlpt": "N5",
      "headword": "ぬるい",
      "source_form": "温い",
      "variants": [
        "ぬるい",
        "温い"
      ],
      "reading": "ぬるい",
      "reading_variants": [
        "ぬるい"
      ],
      "romaji": "nurui",
      "part_of_speech": "i-adjective",
      "meaning_zh": "（热的东西）不够热；（凉的东西）不够凉；温吞",
      "kanji_readings": [
        {
          "form": "温い",
          "reading": "ぬるい"
        }
      ],
      "examples": [
        {
          "ja": "このお茶は少しぬるいです。",
          "zh": "这杯茶有点不够热。",
          "focus": ["ぬるい"],
          "zhFocus": ["不够热"]
        },
        {
          "ja": "お風呂のお湯がぬるいです。",
          "zh": "洗澡水不够热。",
          "focus": ["ぬるい"],
          "zhFocus": ["不够热"]
        },
        {
          "ja": "スープがぬるくなりました。",
          "zh": "汤变得温吞了。",
          "focus": ["ぬるく"],
          "zhFocus": ["温吞"]
        }
      ],
      "note_zh": "一般写假名「ぬるい」；汉字「温い」是常用汉字表以外的读法。"
    },
    {
      "id": "n5-508",
      "jlpt": "N5",
      "headword": "ネクタイ",
      "source_form": "ネクタイ",
      "variants": [
        "ネクタイ"
      ],
      "reading": "ネクタイ",
      "reading_variants": [
        "ネクタイ"
      ],
      "romaji": "nekutai",
      "part_of_speech": "noun",
      "meaning_zh": "领带",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "父はネクタイをして会社へ行きます。",
          "zh": "父亲系着领带去公司。",
          "focus": ["ネクタイ"],
          "zhFocus": ["领带"]
        },
        {
          "ja": "青いネクタイを買いました。",
          "zh": "买了一条蓝色领带。",
          "focus": ["ネクタイ"],
          "zhFocus": ["领带"]
        },
        {
          "ja": "会社へ行く前にネクタイを締めます。",
          "zh": "去公司前系领带。",
          "focus": ["ネクタイ"],
          "zhFocus": ["领带"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-509",
      "jlpt": "N5",
      "headword": "猫",
      "source_form": "猫",
      "variants": [
        "猫"
      ],
      "reading": "ねこ",
      "reading_variants": [
        "ねこ"
      ],
      "romaji": "neko",
      "part_of_speech": "noun",
      "meaning_zh": "猫",
      "kanji_readings": [
        {
          "form": "猫",
          "reading": "ねこ"
        }
      ],
      "examples": [
        {
          "ja": "猫が机の下にいます。",
          "zh": "猫在桌子下面。",
          "focus": ["猫"],
          "zhFocus": ["猫"]
        },
        {
          "ja": "猫が窓の外を見ています。",
          "zh": "猫在看窗外。",
          "focus": ["猫"],
          "zhFocus": ["猫"]
        },
        {
          "ja": "黒い猫を見ました。",
          "zh": "看到了黑猫。",
          "focus": ["猫"],
          "zhFocus": ["猫"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-510",
      "jlpt": "N5",
      "headword": "寝る",
      "source_form": "寝る",
      "variants": [
        "寝る"
      ],
      "reading": "ねる",
      "reading_variants": [
        "ねる"
      ],
      "romaji": "neru",
      "part_of_speech": "verb",
      "meaning_zh": "睡觉",
      "kanji_readings": [
        {
          "form": "寝る",
          "reading": "ねる"
        }
      ],
      "examples": [
        {
          "ja": "毎晩十一時に寝ます。",
          "zh": "每晚十一点睡觉。",
          "focus": ["寝"],
          "zhFocus": ["睡觉"]
        },
        {
          "ja": "昨日は早く寝ました。",
          "zh": "昨天睡得早。",
          "focus": ["寝"],
          "zhFocus": ["睡"]
        },
        {
          "ja": "もう寝てもいいですか。",
          "zh": "可以睡了吗？",
          "focus": ["寝"],
          "zhFocus": ["睡"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-511",
      "jlpt": "N5",
      "headword": "～年",
      "source_form": "～年",
      "variants": [
        "～年"
      ],
      "reading": "～ねん",
      "reading_variants": [
        "～ねん"
      ],
      "romaji": "~nen",
      "part_of_speech": "counter/suffix",
      "meaning_zh": "……年",
      "kanji_readings": [
        {
          "form": "～年",
          "reading": "～ねん"
        }
      ],
      "examples": [
        {
          "ja": "日本語を一年勉強しました。",
          "zh": "学了一年日语。",
          "focus": ["年"],
          "zhFocus": ["年"]
        },
        {
          "ja": "二年前に日本へ来ました。",
          "zh": "两年前来到了日本。",
          "focus": ["年"],
          "zhFocus": ["年"]
        },
        {
          "ja": "三年かかります。",
          "zh": "需要三年。",
          "focus": ["年"],
          "zhFocus": ["年"]
        }
      ],
      "note_zh": "接在数字或名词后使用；例句中去掉了前缀符号「～」。"
    },
    {
      "id": "n5-512",
      "jlpt": "N5",
      "headword": "ノート",
      "source_form": "ノート",
      "variants": [
        "ノート"
      ],
      "reading": "ノート",
      "reading_variants": [
        "ノート"
      ],
      "romaji": "nooto",
      "part_of_speech": "noun",
      "meaning_zh": "笔记本",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "ノートを見せてください。",
          "zh": "请让我看看你的笔记本。",
          "focus": ["ノート"],
          "zhFocus": ["笔记本"]
        },
        {
          "ja": "新しいノートに名前を書きました。",
          "zh": "在新笔记本上写了名字。",
          "focus": ["ノート"],
          "zhFocus": ["笔记本"]
        },
        {
          "ja": "ノートに大切なことを書きます。",
          "zh": "把重要的事情写在笔记本上。",
          "focus": ["ノート"],
          "zhFocus": ["笔记本"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-513",
      "jlpt": "N5",
      "headword": "登る",
      "source_form": "登る",
      "variants": [
        "登る"
      ],
      "reading": "のぼる",
      "reading_variants": [
        "のぼる"
      ],
      "romaji": "noboru",
      "part_of_speech": "verb",
      "meaning_zh": "登；爬",
      "kanji_readings": [
        {
          "form": "登る",
          "reading": "のぼる"
        }
      ],
      "examples": [
        {
          "ja": "山に登ります。",
          "zh": "爬山。",
          "focus": ["登り"],
          "zhFocus": ["爬"]
        },
        {
          "ja": "猫が木に登りました。",
          "zh": "猫爬上了树。",
          "focus": ["登り"],
          "zhFocus": ["爬"]
        },
        {
          "ja": "友達と富士山に登りました。",
          "zh": "和朋友爬了富士山。",
          "focus": ["登り"],
          "zhFocus": ["爬"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-514",
      "jlpt": "N5",
      "headword": "飲み物",
      "source_form": "飲み物",
      "variants": [
        "飲み物"
      ],
      "reading": "のみもの",
      "reading_variants": [
        "のみもの"
      ],
      "romaji": "nomimono",
      "part_of_speech": "noun",
      "meaning_zh": "饮料",
      "kanji_readings": [
        {
          "form": "飲み物",
          "reading": "のみもの"
        }
      ],
      "examples": [
        {
          "ja": "冷たい飲み物を買いました。",
          "zh": "买了冷饮。",
          "focus": ["飲み物"],
          "zhFocus": ["饮"]
        },
        {
          "ja": "飲み物を冷蔵庫に入れます。",
          "zh": "把饮料放进冰箱。",
          "focus": ["飲み物"],
          "zhFocus": ["饮料"]
        },
        {
          "ja": "この店には温かい飲み物もあります。",
          "zh": "这家店也有热饮。",
          "focus": ["飲み物"],
          "zhFocus": ["饮"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-515",
      "jlpt": "N5",
      "headword": "飲む",
      "source_form": "飲む",
      "variants": [
        "飲む"
      ],
      "reading": "のむ",
      "reading_variants": [
        "のむ"
      ],
      "romaji": "nomu",
      "part_of_speech": "verb",
      "meaning_zh": "喝",
      "kanji_readings": [
        {
          "form": "飲む",
          "reading": "のむ"
        }
      ],
      "examples": [
        {
          "ja": "水を飲みます。",
          "zh": "喝水。",
          "focus": ["飲み"],
          "zhFocus": ["喝"]
        },
        {
          "ja": "お茶を飲みました。",
          "zh": "喝了茶。",
          "focus": ["飲み"],
          "zhFocus": ["喝"]
        },
        {
          "ja": "暑いので、水を飲みます。",
          "zh": "因为很热，所以喝水。",
          "focus": ["飲み"],
          "zhFocus": ["喝"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-516",
      "jlpt": "N5",
      "headword": "乗る",
      "source_form": "乗る",
      "variants": [
        "乗る"
      ],
      "reading": "のる",
      "reading_variants": [
        "のる"
      ],
      "romaji": "noru",
      "part_of_speech": "verb",
      "meaning_zh": "乘坐；骑；上车",
      "kanji_readings": [
        {
          "form": "乗る",
          "reading": "のる"
        }
      ],
      "examples": [
        {
          "ja": "駅で電車に乗ります。",
          "zh": "在车站坐电车。",
          "focus": ["乗り"],
          "zhFocus": ["坐"]
        },
        {
          "ja": "バスに乗りました。",
          "zh": "坐了公交车。",
          "focus": ["乗り"],
          "zhFocus": ["坐"]
        },
        {
          "ja": "自転車に乗れます。",
          "zh": "会骑自行车。",
          "focus": ["乗れ"],
          "zhFocus": ["骑"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-517",
      "jlpt": "N5",
      "headword": "歯",
      "source_form": "歯",
      "variants": [
        "歯"
      ],
      "reading": "は",
      "reading_variants": [
        "は"
      ],
      "romaji": "ha",
      "part_of_speech": "noun",
      "meaning_zh": "牙齿",
      "kanji_readings": [
        {
          "form": "歯",
          "reading": "は"
        }
      ],
      "examples": [
        {
          "ja": "毎朝、歯を磨きます。",
          "zh": "每天早上刷牙。",
          "focus": ["歯"],
          "zhFocus": ["牙"]
        },
        {
          "ja": "歯が痛いです。",
          "zh": "牙疼。",
          "focus": ["歯"],
          "zhFocus": ["牙"]
        },
        {
          "ja": "白い歯ですね。",
          "zh": "牙齿很白呢。",
          "focus": ["歯"],
          "zhFocus": ["牙齿"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-518",
      "jlpt": "N5",
      "headword": "パーティー",
      "source_form": "パーティー",
      "variants": [
        "パーティー"
      ],
      "reading": "パーティー",
      "reading_variants": [
        "パーティー"
      ],
      "romaji": "paatii",
      "part_of_speech": "noun",
      "meaning_zh": "派对；聚会",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "土曜日にパーティーがあります。",
          "zh": "星期六有派对。",
          "focus": ["パーティー"],
          "zhFocus": ["派对"]
        },
        {
          "ja": "友達のパーティーへ行きます。",
          "zh": "去朋友的派对。",
          "focus": ["パーティー"],
          "zhFocus": ["派对"]
        },
        {
          "ja": "パーティーは楽しかったです。",
          "zh": "派对很开心。",
          "focus": ["パーティー"],
          "zhFocus": ["派对"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-519",
      "jlpt": "N5",
      "headword": "はい",
      "source_form": "はい",
      "variants": [
        "はい"
      ],
      "reading": "はい",
      "reading_variants": [
        "はい"
      ],
      "romaji": "hai",
      "part_of_speech": "interjection/expression",
      "meaning_zh": "是；好的",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "はい、そうです。",
          "zh": "是的，是那样。",
          "focus": ["はい"],
          "zhFocus": ["是"]
        },
        {
          "ja": "はい、分かりました。",
          "zh": "好的，我明白了。",
          "focus": ["はい"],
          "zhFocus": ["好"]
        },
        {
          "ja": "はい、お願いします。",
          "zh": "好的，麻烦了。",
          "focus": ["はい"],
          "zhFocus": ["好"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-520",
      "jlpt": "N5",
      "headword": "～杯",
      "source_form": "～杯",
      "variants": [
        "～杯"
      ],
      "reading": "～はい",
      "reading_variants": [
        "～はい"
      ],
      "romaji": "~hai",
      "part_of_speech": "counter/suffix",
      "meaning_zh": "……杯",
      "kanji_readings": [
        {
          "form": "～杯",
          "reading": "～はい"
        }
      ],
      "examples": [
        {
          "ja": "水を一杯ください。",
          "zh": "请给我一杯水。",
          "focus": ["杯"],
          "zhFocus": ["杯"]
        },
        {
          "ja": "コーヒーを二杯飲みました。",
          "zh": "喝了两杯咖啡。",
          "focus": ["杯"],
          "zhFocus": ["杯"]
        },
        {
          "ja": "お茶を三杯入れます。",
          "zh": "泡三杯茶。",
          "focus": ["杯"],
          "zhFocus": ["杯"]
        }
      ],
      "note_zh": "接在数字或名词后使用；例句中去掉了前缀符号「～」。"
    },
    {
      "id": "n5-521",
      "jlpt": "N5",
      "headword": "灰皿",
      "source_form": "灰皿",
      "variants": [
        "灰皿"
      ],
      "reading": "はいざら",
      "reading_variants": [
        "はいざら"
      ],
      "romaji": "haizara",
      "part_of_speech": "noun",
      "meaning_zh": "烟灰缸",
      "kanji_readings": [
        {
          "form": "灰皿",
          "reading": "はいざら"
        }
      ],
      "examples": [
        {
          "ja": "すみません、灰皿はありますか。",
          "zh": "不好意思，有烟灰缸吗？",
          "focus": ["灰皿"],
          "zhFocus": ["烟灰缸"]
        },
        {
          "ja": "灰皿をきれいに洗いました。",
          "zh": "把烟灰缸洗干净了。",
          "focus": ["灰皿"],
          "zhFocus": ["烟灰缸"]
        },
        {
          "ja": "灰皿にたばこの灰を落とします。",
          "zh": "把烟灰弹进烟灰缸。",
          "focus": ["灰皿"],
          "zhFocus": ["烟灰缸"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-522",
      "jlpt": "N5",
      "headword": "入る",
      "source_form": "入る",
      "variants": [
        "入る"
      ],
      "reading": "はいる",
      "reading_variants": [
        "はいる"
      ],
      "romaji": "hairu",
      "part_of_speech": "verb",
      "meaning_zh": "进入；含有",
      "senses_zh": [
        "进入",
        "含有"
      ],
      "kanji_readings": [
        {
          "form": "入る",
          "reading": "はいる"
        }
      ],
      "examples": [
        {
          "ja": "教室に入ります。",
          "zh": "进入教室。",
          "focus": ["入り"],
          "zhFocus": ["进入"]
        },
        {
          "ja": "お風呂に入りました。",
          "zh": "洗了澡。",
          "focus": ["入り"]
        },
        {
          "ja": "箱の中に本が入っています。",
          "zh": "盒子里放着书。",
          "focus": ["入っ"],
          "zhFocus": ["放"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-523",
      "jlpt": "N5",
      "headword": "葉書",
      "source_form": "葉書",
      "variants": [
        "葉書"
      ],
      "reading": "はがき",
      "reading_variants": [
        "はがき"
      ],
      "romaji": "hagaki",
      "part_of_speech": "noun",
      "meaning_zh": "明信片",
      "kanji_readings": [
        {
          "form": "葉書",
          "reading": "はがき"
        }
      ],
      "examples": [
        {
          "ja": "旅行先で葉書を買いました。",
          "zh": "在旅行地买了明信片。",
          "focus": ["葉書"],
          "zhFocus": ["明信片"]
        },
        {
          "ja": "葉書に住所を書きます。",
          "zh": "在明信片上写地址。",
          "focus": ["葉書"],
          "zhFocus": ["明信片"]
        },
        {
          "ja": "友達に葉書を送りました。",
          "zh": "给朋友寄了明信片。",
          "focus": ["葉書"],
          "zhFocus": ["明信片"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-524",
      "jlpt": "N5",
      "headword": "はく",
      "source_form": "はく",
      "variants": [
        "はく"
      ],
      "reading": "はく",
      "reading_variants": [
        "はく"
      ],
      "romaji": "haku",
      "part_of_speech": "verb",
      "meaning_zh": "穿（腰部以下衣物、鞋袜）",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "靴をはきます。",
          "zh": "穿鞋。",
          "focus": ["はき"],
          "zhFocus": ["穿"]
        },
        {
          "ja": "黒いズボンをはいています。",
          "zh": "穿着黑裤子。",
          "focus": ["はい"],
          "zhFocus": ["穿"]
        },
        {
          "ja": "朝、靴下をはきました。",
          "zh": "早上穿了袜子。",
          "focus": ["はき"],
          "zhFocus": ["穿"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-525",
      "jlpt": "N5",
      "headword": "箱",
      "source_form": "箱",
      "variants": [
        "箱"
      ],
      "reading": "はこ",
      "reading_variants": [
        "はこ"
      ],
      "romaji": "hako",
      "part_of_speech": "noun",
      "meaning_zh": "盒子；箱子",
      "kanji_readings": [
        {
          "form": "箱",
          "reading": "はこ"
        }
      ],
      "examples": [
        {
          "ja": "この箱はとても重いです。",
          "zh": "这个箱子很重。",
          "focus": ["箱"],
          "zhFocus": ["箱子"]
        },
        {
          "ja": "箱の中に何が入っていますか。",
          "zh": "箱子里装着什么？",
          "focus": ["箱"],
          "zhFocus": ["箱子"]
        },
        {
          "ja": "箱に本を入れました。",
          "zh": "把书放进了箱子。",
          "focus": ["箱"],
          "zhFocus": ["箱子"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-526",
      "jlpt": "N5",
      "headword": "橋",
      "source_form": "橋",
      "variants": [
        "橋"
      ],
      "reading": "はし",
      "reading_variants": [
        "はし"
      ],
      "romaji": "hashi",
      "part_of_speech": "noun",
      "meaning_zh": "桥",
      "kanji_readings": [
        {
          "form": "橋",
          "reading": "はし"
        }
      ],
      "examples": [
        {
          "ja": "あの橋はとても長いです。",
          "zh": "那座桥很长。",
          "focus": ["橋"],
          "zhFocus": ["桥"]
        },
        {
          "ja": "川に橋があります。",
          "zh": "河上有桥。",
          "focus": ["橋"],
          "zhFocus": ["桥"]
        },
        {
          "ja": "古い橋を見ました。",
          "zh": "看到了旧桥。",
          "focus": ["橋"],
          "zhFocus": ["桥"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-527",
      "jlpt": "N5",
      "headword": "箸",
      "source_form": "箸",
      "variants": [
        "箸"
      ],
      "reading": "はし",
      "reading_variants": [
        "はし"
      ],
      "romaji": "hashi",
      "part_of_speech": "noun",
      "meaning_zh": "筷子",
      "kanji_readings": [
        {
          "form": "箸",
          "reading": "はし"
        }
      ],
      "examples": [
        {
          "ja": "箸でご飯を食べます。",
          "zh": "用筷子吃饭。",
          "focus": ["箸"],
          "zhFocus": ["筷子"]
        },
        {
          "ja": "箸を取ってください。",
          "zh": "请把筷子递给我。",
          "focus": ["箸"],
          "zhFocus": ["筷子"]
        },
        {
          "ja": "箸を使えますか。",
          "zh": "会用筷子吗？",
          "focus": ["箸"],
          "zhFocus": ["筷子"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-528",
      "jlpt": "N5",
      "headword": "始まる",
      "source_form": "始まる",
      "variants": [
        "始まる"
      ],
      "reading": "はじまる",
      "reading_variants": [
        "はじまる"
      ],
      "romaji": "hajimaru",
      "part_of_speech": "verb",
      "meaning_zh": "开始（自动词）",
      "kanji_readings": [
        {
          "form": "始まる",
          "reading": "はじまる"
        }
      ],
      "examples": [
        {
          "ja": "授業は九時に始まります。",
          "zh": "课九点开始。",
          "focus": ["始まり"],
          "zhFocus": ["开始"]
        },
        {
          "ja": "映画が始まりました。",
          "zh": "电影开始了。",
          "focus": ["始まり"],
          "zhFocus": ["开始"]
        },
        {
          "ja": "新しい生活が始まります。",
          "zh": "新的生活就要开始了。",
          "focus": ["始まり"],
          "zhFocus": ["开始"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-529",
      "jlpt": "N5",
      "headword": "初め",
      "source_form": "初め; 始め",
      "variants": [
        "初め",
        "始め"
      ],
      "reading": "はじめ",
      "reading_variants": [
        "はじめ"
      ],
      "romaji": "hajime",
      "part_of_speech": "noun",
      "meaning_zh": "开始；开头",
      "kanji_readings": [
        {
          "form": "初め",
          "reading": "はじめ"
        },
        {
          "form": "始め",
          "reading": "はじめ"
        }
      ],
      "examples": [
        {
          "ja": "初めに名前を書いてください。",
          "zh": "请先写名字。",
          "focus": ["初め"],
          "zhFocus": ["先"]
        },
        {
          "ja": "初めは難しかったです。",
          "zh": "一开始很难。",
          "focus": ["初め"],
          "zhFocus": ["开始"]
        },
        {
          "ja": "授業の初めに歌います。",
          "zh": "课开始时唱歌。",
          "focus": ["初め"],
          "zhFocus": ["开始"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-530",
      "jlpt": "N5",
      "headword": "初めて",
      "source_form": "初めて",
      "variants": [
        "初めて"
      ],
      "reading": "はじめて",
      "reading_variants": [
        "はじめて"
      ],
      "romaji": "hajimete",
      "part_of_speech": "adverb",
      "meaning_zh": "第一次；初次",
      "kanji_readings": [
        {
          "form": "初めて",
          "reading": "はじめて"
        }
      ],
      "examples": [
        {
          "ja": "初めて日本へ行きます。",
          "zh": "第一次去日本。",
          "focus": ["初めて"],
          "zhFocus": ["第一次"]
        },
        {
          "ja": "初めて寿司を食べました。",
          "zh": "第一次吃了寿司。",
          "focus": ["初めて"],
          "zhFocus": ["第一次"]
        },
        {
          "ja": "日本語は初めてです。",
          "zh": "我是第一次学日语。",
          "focus": ["初めて"],
          "zhFocus": ["第一次"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-531",
      "jlpt": "N5",
      "headword": "走る",
      "source_form": "走る",
      "variants": [
        "走る"
      ],
      "reading": "はしる",
      "reading_variants": [
        "はしる"
      ],
      "romaji": "hashiru",
      "part_of_speech": "verb",
      "meaning_zh": "跑",
      "kanji_readings": [
        {
          "form": "走る",
          "reading": "はしる"
        }
      ],
      "examples": [
        {
          "ja": "公園を走ります。",
          "zh": "在公园跑步。",
          "focus": ["走り"],
          "zhFocus": ["跑"]
        },
        {
          "ja": "駅まで走りました。",
          "zh": "跑到了车站。",
          "focus": ["走り"],
          "zhFocus": ["跑"]
        },
        {
          "ja": "朝、三十分走ります。",
          "zh": "早上跑三十分钟。",
          "focus": ["走り"],
          "zhFocus": ["跑"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-532",
      "jlpt": "N5",
      "headword": "バス",
      "source_form": "バス",
      "variants": [
        "バス"
      ],
      "reading": "バス",
      "reading_variants": [
        "バス"
      ],
      "romaji": "basu",
      "part_of_speech": "noun",
      "meaning_zh": "公共汽车",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "バスに乗ります。",
          "zh": "坐公交车。",
          "focus": ["バス"],
          "zhFocus": ["公交车"]
        },
        {
          "ja": "バスで駅へ行きます。",
          "zh": "坐公交车去车站。",
          "focus": ["バス"],
          "zhFocus": ["公交车"]
        },
        {
          "ja": "次のバスを待ちます。",
          "zh": "等下一班公交车。",
          "focus": ["バス"],
          "zhFocus": ["公交车"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-533",
      "jlpt": "N5",
      "headword": "バター",
      "source_form": "バター",
      "variants": [
        "バター"
      ],
      "reading": "バター",
      "reading_variants": [
        "バター"
      ],
      "romaji": "bataa",
      "part_of_speech": "noun",
      "meaning_zh": "黄油",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "パンにバターを塗ります。",
          "zh": "在面包上涂黄油。",
          "focus": ["バター"],
          "zhFocus": ["黄油"]
        },
        {
          "ja": "冷蔵庫からバターを出します。",
          "zh": "从冰箱里拿出黄油。",
          "focus": ["バター"],
          "zhFocus": ["黄油"]
        },
        {
          "ja": "このケーキにはバターが入っています。",
          "zh": "这个蛋糕里含有黄油。",
          "focus": ["バター"],
          "zhFocus": ["黄油"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-534",
      "jlpt": "N5",
      "headword": "二十歳",
      "source_form": "二十歳",
      "variants": [
        "二十歳"
      ],
      "reading": "はたち",
      "reading_variants": [
        "はたち"
      ],
      "romaji": "hatachi",
      "part_of_speech": "noun",
      "meaning_zh": "二十岁",
      "kanji_readings": [
        {
          "form": "二十歳",
          "reading": "はたち"
        }
      ],
      "examples": [
        {
          "ja": "私は二十歳です。",
          "zh": "我二十岁。",
          "focus": ["二十歳"],
          "zhFocus": ["二十岁"]
        },
        {
          "ja": "兄は今年二十歳になります。",
          "zh": "哥哥今年二十岁。",
          "focus": ["二十歳"],
          "zhFocus": ["二十岁"]
        },
        {
          "ja": "二十歳の誕生日です。",
          "zh": "是二十岁的生日。",
          "focus": ["二十歳"],
          "zhFocus": ["二十岁"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-535",
      "jlpt": "N5",
      "headword": "働く",
      "source_form": "働く",
      "variants": [
        "働く"
      ],
      "reading": "はたらく",
      "reading_variants": [
        "はたらく"
      ],
      "romaji": "hataraku",
      "part_of_speech": "verb",
      "meaning_zh": "工作；劳动（动词）",
      "answer_zh": "工作；劳动",
      "kanji_readings": [
        {
          "form": "働く",
          "reading": "はたらく"
        }
      ],
      "examples": [
        {
          "ja": "父は会社で働いています。",
          "zh": "父亲在公司工作。",
          "focus": ["働い"],
          "zhFocus": ["工作"]
        },
        {
          "ja": "毎日八時間働きます。",
          "zh": "每天工作八小时。",
          "focus": ["働き"],
          "zhFocus": ["工作"]
        },
        {
          "ja": "日本で働きたいです。",
          "zh": "想在日本工作。",
          "focus": ["働き"],
          "zhFocus": ["工作"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-536",
      "jlpt": "N5",
      "headword": "八",
      "source_form": "八",
      "variants": [
        "八"
      ],
      "reading": "はち",
      "reading_variants": [
        "はち"
      ],
      "romaji": "hachi",
      "part_of_speech": "numeral",
      "meaning_zh": "八",
      "kanji_readings": [
        {
          "form": "八",
          "reading": "はち"
        }
      ],
      "examples": [
        {
          "ja": "八月は学校が休みです。",
          "zh": "八月学校放假。",
          "focus": ["八"],
          "zhFocus": ["八"]
        },
        {
          "ja": "毎朝八時に家を出ます。",
          "zh": "每天早上八点出门。",
          "focus": ["八"],
          "zhFocus": ["八"]
        },
        {
          "ja": "答えは八です。",
          "zh": "答案是八。",
          "focus": ["八"],
          "zhFocus": ["八"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-537",
      "jlpt": "N5",
      "headword": "二十日",
      "source_form": "二十日",
      "variants": [
        "二十日"
      ],
      "reading": "はつか",
      "reading_variants": [
        "はつか"
      ],
      "romaji": "hatsuka",
      "part_of_speech": "noun",
      "meaning_zh": "二十号；二十天",
      "senses_zh": [
        "二十号",
        "二十天"
      ],
      "kanji_readings": [
        {
          "form": "二十日",
          "reading": "はつか"
        }
      ],
      "examples": [
        {
          "ja": "二十日に会いましょう。",
          "zh": "二十号见吧。",
          "focus": ["二十日"],
          "zhFocus": ["二十号"]
        },
        {
          "ja": "二十日は休みです。",
          "zh": "二十号休息。",
          "focus": ["二十日"],
          "zhFocus": ["二十号"]
        },
        {
          "ja": "二十日に日本へ行きます。",
          "zh": "二十号去日本。",
          "focus": ["二十日"],
          "zhFocus": ["二十号"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-538",
      "jlpt": "N5",
      "headword": "花",
      "source_form": "花",
      "variants": [
        "花"
      ],
      "reading": "はな",
      "reading_variants": [
        "はな"
      ],
      "romaji": "hana",
      "part_of_speech": "noun",
      "meaning_zh": "花",
      "kanji_readings": [
        {
          "form": "花",
          "reading": "はな"
        }
      ],
      "examples": [
        {
          "ja": "庭にきれいな花が咲いています。",
          "zh": "院子里开着漂亮的花。",
          "focus": ["花"],
          "zhFocus": ["花"]
        },
        {
          "ja": "母の誕生日に花をあげました。",
          "zh": "妈妈生日时送了她花。",
          "focus": ["花"],
          "zhFocus": ["花"]
        },
        {
          "ja": "この花の名前を知っていますか。",
          "zh": "你知道这种花的名字吗？",
          "focus": ["花"],
          "zhFocus": ["花"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-539",
      "jlpt": "N5",
      "headword": "鼻",
      "source_form": "鼻",
      "variants": [
        "鼻"
      ],
      "reading": "はな",
      "reading_variants": [
        "はな"
      ],
      "romaji": "hana",
      "part_of_speech": "noun",
      "meaning_zh": "鼻子",
      "kanji_readings": [
        {
          "form": "鼻",
          "reading": "はな"
        }
      ],
      "examples": [
        {
          "ja": "鼻が痛いです。",
          "zh": "鼻子疼。",
          "focus": ["鼻"],
          "zhFocus": ["鼻子"]
        },
        {
          "ja": "鼻をかみます。",
          "zh": "擤鼻子。",
          "focus": ["鼻"],
          "zhFocus": ["鼻子"]
        },
        {
          "ja": "鼻に水が入りました。",
          "zh": "鼻子里进水了。",
          "focus": ["鼻"],
          "zhFocus": ["鼻子"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-540",
      "jlpt": "N5",
      "headword": "話",
      "source_form": "話",
      "variants": [
        "話"
      ],
      "reading": "はなし",
      "reading_variants": [
        "はなし"
      ],
      "romaji": "hanashi",
      "part_of_speech": "noun",
      "meaning_zh": "话；故事",
      "senses_zh": [
        "话",
        "故事"
      ],
      "kanji_readings": [
        {
          "form": "話",
          "reading": "はなし"
        }
      ],
      "examples": [
        {
          "ja": "先生の話を聞きます。",
          "zh": "听老师讲话。",
          "focus": ["話"],
          "zhFocus": ["话"]
        },
        {
          "ja": "面白い話をしました。",
          "zh": "讲了有趣的事。",
          "focus": ["話"],
          "zhFocus": ["事"]
        },
        {
          "ja": "これは昔の話です。",
          "zh": "这是以前的故事。",
          "focus": ["話"],
          "zhFocus": ["故事"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-541",
      "jlpt": "N5",
      "headword": "話す",
      "source_form": "話す",
      "variants": [
        "話す"
      ],
      "reading": "はなす",
      "reading_variants": [
        "はなす"
      ],
      "romaji": "hanasu",
      "part_of_speech": "verb",
      "meaning_zh": "说话；谈话；讲（某种语言）",
      "senses_zh": [
        "说话；谈话",
        "讲（某种语言）"
      ],
      "kanji_readings": [
        {
          "form": "話す",
          "reading": "はなす"
        }
      ],
      "examples": [
        {
          "ja": "日本語を話します。",
          "zh": "说日语。",
          "focus": ["話し"],
          "zhFocus": ["说"]
        },
        {
          "ja": "友達と話しました。",
          "zh": "和朋友说了话。",
          "focus": ["話し"],
          "zhFocus": ["说"]
        },
        {
          "ja": "日本人と日本語で話しました。",
          "zh": "和日本人用日语交谈了。",
          "focus": ["話し"],
          "zhFocus": ["交谈"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-542",
      "jlpt": "N5",
      "headword": "母",
      "source_form": "母",
      "variants": [
        "母"
      ],
      "reading": "はは",
      "reading_variants": [
        "はは"
      ],
      "romaji": "haha",
      "part_of_speech": "noun",
      "meaning_zh": "母亲（称自己的母亲）",
      "kanji_readings": [
        {
          "form": "母",
          "reading": "はは"
        }
      ],
      "examples": [
        {
          "ja": "母は料理が上手です。",
          "zh": "我母亲很会做饭。",
          "focus": ["母"],
          "zhFocus": ["母亲"]
        },
        {
          "ja": "母と買い物に行きます。",
          "zh": "和母亲去买东西。",
          "focus": ["母"],
          "zhFocus": ["母亲"]
        },
        {
          "ja": "母に手紙を書きました。",
          "zh": "给母亲写了信。",
          "focus": ["母"],
          "zhFocus": ["母亲"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-543",
      "jlpt": "N5",
      "headword": "早い",
      "source_form": "早い",
      "variants": [
        "早い"
      ],
      "reading": "はやい",
      "reading_variants": [
        "はやい"
      ],
      "romaji": "hayai",
      "part_of_speech": "i-adjective",
      "meaning_zh": "早的",
      "kanji_readings": [
        {
          "form": "早い",
          "reading": "はやい"
        }
      ],
      "examples": [
        {
          "ja": "今日は朝早く起きました。",
          "zh": "今天早上起得很早。",
          "focus": ["早く"],
          "zhFocus": [{"after": "今天早上起得很", "text": "早"}]
        },
        {
          "ja": "まだ寝るには早いです。",
          "zh": "现在睡觉还太早。",
          "focus": ["早い"],
          "zhFocus": ["早"]
        },
        {
          "ja": "学校に着くのが早いですね。",
          "zh": "你到学校到得真早。",
          "focus": ["早い"],
          "zhFocus": ["早"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-544",
      "jlpt": "N5",
      "headword": "速い",
      "source_form": "速い",
      "variants": [
        "速い"
      ],
      "reading": "はやい",
      "reading_variants": [
        "はやい"
      ],
      "romaji": "hayai",
      "part_of_speech": "i-adjective",
      "meaning_zh": "快的",
      "kanji_readings": [
        {
          "form": "速い",
          "reading": "はやい"
        }
      ],
      "examples": [
        {
          "ja": "この車は速いです。",
          "zh": "这辆车很快。",
          "focus": ["速い"],
          "zhFocus": ["快"]
        },
        {
          "ja": "電車はバスより速いです。",
          "zh": "电车比公交车快。",
          "focus": ["速い"],
          "zhFocus": ["快"]
        },
        {
          "ja": "走るのが速いですね。",
          "zh": "你跑得很快呢。",
          "focus": ["速い"],
          "zhFocus": ["快"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-545",
      "jlpt": "N5",
      "headword": "春",
      "source_form": "春",
      "variants": [
        "春"
      ],
      "reading": "はる",
      "reading_variants": [
        "はる"
      ],
      "romaji": "haru",
      "part_of_speech": "noun",
      "meaning_zh": "春天",
      "kanji_readings": [
        {
          "form": "春",
          "reading": "はる"
        }
      ],
      "examples": [
        {
          "ja": "春は暖かいです。",
          "zh": "春天很暖和。",
          "focus": ["春"],
          "zhFocus": ["春天"]
        },
        {
          "ja": "春から大学生になります。",
          "zh": "从春天开始就是大学生了。",
          "focus": ["春"],
          "zhFocus": ["春天"]
        },
        {
          "ja": "春休みに旅行します。",
          "zh": "春假去旅行。",
          "focus": ["春"],
          "zhFocus": ["春"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-546",
      "jlpt": "N5",
      "headword": "貼る",
      "source_form": "貼る",
      "variants": [
        "貼る"
      ],
      "reading": "はる",
      "reading_variants": [
        "はる"
      ],
      "romaji": "haru",
      "part_of_speech": "verb",
      "meaning_zh": "贴；粘贴",
      "kanji_readings": [
        {
          "form": "貼る",
          "reading": "はる"
        }
      ],
      "examples": [
        {
          "ja": "壁に写真を貼ります。",
          "zh": "把照片贴在墙上。",
          "focus": ["貼り"],
          "zhFocus": ["贴"]
        },
        {
          "ja": "封筒に切手を貼りました。",
          "zh": "在信封上贴了邮票。",
          "focus": ["貼り"],
          "zhFocus": ["贴"]
        },
        {
          "ja": "ここに紙を貼ってください。",
          "zh": "请把纸贴在这里。",
          "focus": ["貼っ"],
          "zhFocus": ["贴"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-547",
      "jlpt": "N5",
      "headword": "晴れ",
      "source_form": "晴れ",
      "variants": [
        "晴れ"
      ],
      "reading": "はれ",
      "reading_variants": [
        "はれ"
      ],
      "romaji": "hare",
      "part_of_speech": "noun",
      "meaning_zh": "晴天",
      "kanji_readings": [
        {
          "form": "晴れ",
          "reading": "はれ"
        }
      ],
      "examples": [
        {
          "ja": "今日は一日中晴れです。",
          "zh": "今天一整天都是晴天。",
          "focus": ["晴れ"],
          "zhFocus": ["晴天"]
        },
        {
          "ja": "明日も晴れです。",
          "zh": "明天也是晴天。",
          "focus": ["晴れ"],
          "zhFocus": ["晴天"]
        },
        {
          "ja": "晴れの日に洗濯します。",
          "zh": "晴天时洗衣服。",
          "focus": ["晴れ"],
          "zhFocus": ["晴天"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-548",
      "jlpt": "N5",
      "headword": "晴れる",
      "source_form": "晴れる",
      "variants": [
        "晴れる"
      ],
      "reading": "はれる",
      "reading_variants": [
        "はれる"
      ],
      "romaji": "hareru",
      "part_of_speech": "verb",
      "meaning_zh": "放晴",
      "kanji_readings": [
        {
          "form": "晴れる",
          "reading": "はれる"
        }
      ],
      "examples": [
        {
          "ja": "明日は晴れます。",
          "zh": "明天会放晴。",
          "focus": ["晴れ"],
          "zhFocus": ["放晴"]
        },
        {
          "ja": "午後から空が晴れました。",
          "zh": "下午开始天放晴了。",
          "focus": ["晴れ"],
          "zhFocus": ["放晴"]
        },
        {
          "ja": "晴れた日に散歩します。",
          "zh": "晴天散步。",
          "focus": ["晴れ"],
          "zhFocus": ["晴"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-549",
      "jlpt": "N5",
      "headword": "半",
      "source_form": "半",
      "variants": [
        "半"
      ],
      "reading": "はん",
      "reading_variants": [
        "はん"
      ],
      "romaji": "han",
      "part_of_speech": "noun",
      "meaning_zh": "半；一半",
      "kanji_readings": [
        {
          "form": "半",
          "reading": "はん"
        }
      ],
      "examples": [
        {
          "ja": "今は二時半です。",
          "zh": "现在两点半。",
          "focus": ["半"],
          "zhFocus": ["半"]
        },
        {
          "ja": "銀行は三時半まで開いています。",
          "zh": "银行开到三点半。",
          "focus": ["半"],
          "zhFocus": ["半"]
        },
        {
          "ja": "一時間半かかります。",
          "zh": "需要一个半小时。",
          "focus": ["半"],
          "zhFocus": ["半"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-550",
      "jlpt": "N5",
      "headword": "晩",
      "source_form": "晩",
      "variants": [
        "晩"
      ],
      "reading": "ばん",
      "reading_variants": [
        "ばん"
      ],
      "romaji": "ban",
      "part_of_speech": "noun",
      "meaning_zh": "晚上（傍晚到睡前这段时间）",
      "kanji_readings": [
        {
          "form": "晩",
          "reading": "ばん"
        }
      ],
      "examples": [
        {
          "ja": "晩は家族と一緒に食事します。",
          "zh": "晚上和家人一起吃饭。",
          "focus": ["晩"],
          "zhFocus": ["晚上"]
        },
        {
          "ja": "晩になると涼しくなります。",
          "zh": "到了晚上会变凉快。",
          "focus": ["晩"],
          "zhFocus": ["晚上"]
        },
        {
          "ja": "明日の晩、電話します。",
          "zh": "明天晚上打电话。",
          "focus": ["晩"],
          "zhFocus": ["晚上"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-551",
      "merged_source_ids": ["n4-763"],
      "jlpt": "N5",
      "headword": "～番",
      "source_form": "～番",
      "variants": [
        "～番"
      ],
      "reading": "～ばん",
      "reading_variants": [
        "～ばん"
      ],
      "romaji": "~ban",
      "part_of_speech": "suffix/pattern",
      "meaning_zh": "第……；……号",
      "kanji_readings": [
        {
          "form": "～番",
          "reading": "～ばん"
        }
      ],
      "examples": [
        {
          "ja": "私は三番です。",
          "zh": "我是第三个。",
          "focus": ["番"],
          "zhFocus": ["第"]
        },
        {
          "ja": "二番の窓口へ行きます。",
          "zh": "去二号窗口。",
          "focus": ["番"],
          "zhFocus": ["号"]
        },
        {
          "ja": "次は五番の人です。",
          "zh": "下一位是五号的人。",
          "focus": ["番"],
          "zhFocus": ["号"]
        }
      ],
      "note_zh": "表示顺序或编号的后缀；不要与表示“最……”的「一番」或复合词「番号」混为一项。"
    },
    {
      "id": "n5-552",
      "jlpt": "N5",
      "headword": "パン",
      "source_form": "パン",
      "variants": [
        "パン"
      ],
      "reading": "パン",
      "reading_variants": [
        "パン"
      ],
      "romaji": "pan",
      "part_of_speech": "noun",
      "meaning_zh": "面包",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "朝はいつもパンを食べます。",
          "zh": "早上总是吃面包。",
          "focus": ["パン"],
          "zhFocus": ["面包"]
        },
        {
          "ja": "パンを半分に切りました。",
          "zh": "把面包切成了两半。",
          "focus": ["パン"],
          "zhFocus": ["面包"]
        },
        {
          "ja": "パンと牛乳を買ってきました。",
          "zh": "买了面包和牛奶回来。",
          "focus": ["パン"],
          "zhFocus": ["面包"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-553",
      "jlpt": "N5",
      "headword": "ハンカチ",
      "source_form": "ハンカチ",
      "variants": [
        "ハンカチ"
      ],
      "reading": "ハンカチ",
      "reading_variants": [
        "ハンカチ"
      ],
      "romaji": "hankachi",
      "part_of_speech": "noun",
      "meaning_zh": "手帕",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "ハンカチを持っていますか。",
          "zh": "你带手帕了吗？",
          "focus": ["ハンカチ"],
          "zhFocus": ["手帕"]
        },
        {
          "ja": "このハンカチは母にもらいました。",
          "zh": "这块手帕是妈妈给我的。",
          "focus": ["ハンカチ"],
          "zhFocus": ["手帕"]
        },
        {
          "ja": "ハンカチで手を拭きます。",
          "zh": "用手帕擦手。",
          "focus": ["ハンカチ"],
          "zhFocus": ["手帕"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-554",
      "jlpt": "N5",
      "headword": "番号",
      "source_form": "番号",
      "variants": [
        "番号"
      ],
      "reading": "ばんごう",
      "reading_variants": [
        "ばんごう"
      ],
      "romaji": "bangou",
      "part_of_speech": "noun",
      "meaning_zh": "号码；编号",
      "kanji_readings": [
        {
          "form": "番号",
          "reading": "ばんごう"
        }
      ],
      "examples": [
        {
          "ja": "電話番号を教えてください。",
          "zh": "请告诉我电话号码。",
          "focus": ["番号"],
          "zhFocus": ["号码"]
        },
        {
          "ja": "番号を書きます。",
          "zh": "写号码。",
          "focus": ["番号"],
          "zhFocus": ["号码"]
        },
        {
          "ja": "この番号は何ですか。",
          "zh": "这个号码是什么？",
          "focus": ["番号"],
          "zhFocus": ["号码"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-555",
      "jlpt": "N5",
      "headword": "晩ご飯",
      "source_form": "晩御飯",
      "variants": [
        "晩ご飯"
      ],
      "reading": "ばんごはん",
      "reading_variants": [
        "ばんごはん"
      ],
      "romaji": "bangohan",
      "part_of_speech": "noun",
      "meaning_zh": "晚饭；晚餐",
      "kanji_readings": [
        {
          "form": "晩ご飯",
          "reading": "ばんごはん"
        }
      ],
      "examples": [
        {
          "ja": "家族と一緒に晩ご飯を食べます。",
          "zh": "和家人一起吃晚饭。",
          "focus": ["晩ご飯"],
          "zhFocus": ["晚饭"]
        },
        {
          "ja": "今日の晩ご飯はカレーです。",
          "zh": "今天的晚饭是咖喱。",
          "focus": ["晩ご飯"],
          "zhFocus": ["晚饭"]
        },
        {
          "ja": "晩ご飯の後で宿題をします。",
          "zh": "晚饭后做作业。",
          "focus": ["晩ご飯"],
          "zhFocus": ["晚饭"]
        }
      ],
      "note_zh": "已把旧写法/不常用写法规范为现代常用写法；原始写法保留在 source_form。"
    },
    {
      "id": "n5-556",
      "jlpt": "N5",
      "headword": "半分",
      "source_form": "半分",
      "variants": [
        "半分"
      ],
      "reading": "はんぶん",
      "reading_variants": [
        "はんぶん"
      ],
      "romaji": "hanbun",
      "part_of_speech": "noun",
      "meaning_zh": "一半",
      "kanji_readings": [
        {
          "form": "半分",
          "reading": "はんぶん"
        }
      ],
      "examples": [
        {
          "ja": "パンを半分食べました。",
          "zh": "吃了一半面包。",
          "focus": ["半分"],
          "zhFocus": ["一半"]
        },
        {
          "ja": "水をコップの半分まで入れてください。",
          "zh": "请把水倒到杯子的一半。",
          "focus": ["半分"],
          "zhFocus": ["一半"]
        },
        {
          "ja": "宿題は半分終わりました。",
          "zh": "作业完成了一半。",
          "focus": ["半分"],
          "zhFocus": ["一半"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-557",
      "jlpt": "N5",
      "headword": "東",
      "source_form": "東",
      "variants": [
        "東"
      ],
      "reading": "ひがし",
      "reading_variants": [
        "ひがし"
      ],
      "romaji": "higashi",
      "part_of_speech": "noun",
      "meaning_zh": "东；东方",
      "kanji_readings": [
        {
          "form": "東",
          "reading": "ひがし"
        }
      ],
      "examples": [
        {
          "ja": "日本はアジアの東にあります。",
          "zh": "日本位于亚洲东部。",
          "focus": ["東"],
          "zhFocus": ["东"]
        },
        {
          "ja": "東から日が昇ります。",
          "zh": "太阳从东方升起。",
          "focus": ["東"],
          "zhFocus": ["东方"]
        },
        {
          "ja": "駅の東口から出ます。",
          "zh": "从车站东口出去。",
          "focus": ["東"],
          "zhFocus": ["东"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-558",
      "jlpt": "N5",
      "headword": "～匹",
      "source_form": "～匹",
      "variants": [
        "～匹"
      ],
      "reading": "～ひき",
      "reading_variants": [
        "～ひき"
      ],
      "romaji": "~hiki",
      "part_of_speech": "counter/suffix",
      "meaning_zh": "……只（小动物计数）",
      "kanji_readings": [
        {
          "form": "～匹",
          "reading": "～ひき"
        }
      ],
      "examples": [
        {
          "ja": "猫が二匹います。",
          "zh": "有两只猫。",
          "focus": ["匹"],
          "zhFocus": ["只"]
        },
        {
          "ja": "犬を一匹飼っています。",
          "zh": "养了一只狗。",
          "focus": ["匹"],
          "zhFocus": ["只"]
        },
        {
          "ja": "魚が三匹泳いでいます。",
          "zh": "三条鱼在游。",
          "focus": ["匹"],
          "zhFocus": ["条"]
        }
      ],
      "note_zh": "接在数字或名词后使用；例句中去掉了前缀符号「～」。"
    },
    {
      "id": "n5-559",
      "jlpt": "N5",
      "headword": "引く",
      "source_form": "引く",
      "variants": [
        "引く"
      ],
      "reading": "ひく",
      "reading_variants": [
        "ひく"
      ],
      "romaji": "hiku",
      "part_of_speech": "verb",
      "meaning_zh": "拉；查（词典）；减去",
      "senses_zh": [
        "拉",
        "查（词典）",
        "减去"
      ],
      "kanji_readings": [
        {
          "form": "引く",
          "reading": "ひく"
        }
      ],
      "examples": [
        {
          "ja": "ドアを引いてください。",
          "zh": "请拉门。",
          "focus": ["引い"],
          "zhFocus": ["拉"]
        },
        {
          "ja": "辞書で言葉を引きます。",
          "zh": "用词典查词。",
          "focus": ["引き"],
          "zhFocus": ["查"]
        },
        {
          "ja": "十から三を引きます。",
          "zh": "十减三。",
          "focus": ["引き"],
          "zhFocus": ["减"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-560",
      "jlpt": "N5",
      "headword": "弾く",
      "source_form": "弾く",
      "variants": [
        "弾く"
      ],
      "reading": "ひく",
      "reading_variants": [
        "ひく"
      ],
      "romaji": "hiku",
      "part_of_speech": "verb",
      "meaning_zh": "弹奏（乐器）",
      "kanji_readings": [
        {
          "form": "弾く",
          "reading": "ひく"
        }
      ],
      "examples": [
        {
          "ja": "ピアノを弾きます。",
          "zh": "弹钢琴。",
          "focus": ["弾き"],
          "zhFocus": ["弹"]
        },
        {
          "ja": "姉はギターを弾けます。",
          "zh": "姐姐会弹吉他。",
          "focus": ["弾け"],
          "zhFocus": ["弹"]
        },
        {
          "ja": "毎日少しピアノを弾きます。",
          "zh": "每天弹一点钢琴。",
          "focus": ["弾き"],
          "zhFocus": ["弹"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-561",
      "jlpt": "N5",
      "headword": "低い",
      "source_form": "低い",
      "variants": [
        "低い"
      ],
      "reading": "ひくい",
      "reading_variants": [
        "ひくい"
      ],
      "romaji": "hikui",
      "part_of_speech": "i-adjective",
      "meaning_zh": "低的；矮的",
      "kanji_readings": [
        {
          "form": "低い",
          "reading": "ひくい"
        }
      ],
      "examples": [
        {
          "ja": "この机は低いです。",
          "zh": "这张桌子很低。",
          "focus": ["低い"],
          "zhFocus": ["低"]
        },
        {
          "ja": "父は声が低いです。",
          "zh": "父亲声音低。",
          "focus": ["低い"],
          "zhFocus": ["低"]
        },
        {
          "ja": "低い山に登ります。",
          "zh": "爬一座低山。",
          "focus": ["低い"],
          "zhFocus": ["低"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-562",
      "jlpt": "N5",
      "headword": "飛行機",
      "source_form": "飛行機",
      "variants": [
        "飛行機"
      ],
      "reading": "ひこうき",
      "reading_variants": [
        "ひこうき"
      ],
      "romaji": "hikouki",
      "part_of_speech": "noun",
      "meaning_zh": "飞机",
      "kanji_readings": [
        {
          "form": "飛行機",
          "reading": "ひこうき"
        }
      ],
      "examples": [
        {
          "ja": "飛行機で日本へ行きます。",
          "zh": "坐飞机去日本。",
          "focus": ["飛行機"],
          "zhFocus": ["飞机"]
        },
        {
          "ja": "飛行機に乗ります。",
          "zh": "坐飞机。",
          "focus": ["飛行機"],
          "zhFocus": ["飞机"]
        },
        {
          "ja": "飛行機は速いです。",
          "zh": "飞机很快。",
          "focus": ["飛行機"],
          "zhFocus": ["飞机"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-563",
      "jlpt": "N5",
      "headword": "左",
      "source_form": "左",
      "variants": [
        "左"
      ],
      "reading": "ひだり",
      "reading_variants": [
        "ひだり"
      ],
      "romaji": "hidari",
      "part_of_speech": "noun",
      "meaning_zh": "左；左边",
      "kanji_readings": [
        {
          "form": "左",
          "reading": "ひだり"
        }
      ],
      "examples": [
        {
          "ja": "左に曲がってください。",
          "zh": "请向左转。",
          "focus": ["左"],
          "zhFocus": ["左"]
        },
        {
          "ja": "左に郵便局があります。",
          "zh": "左边有邮局。",
          "focus": ["左"],
          "zhFocus": ["左边"]
        },
        {
          "ja": "左手を上げてください。",
          "zh": "请举左手。",
          "focus": ["左"],
          "zhFocus": ["左"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-564",
      "jlpt": "N5",
      "headword": "人",
      "source_form": "人",
      "variants": [
        "人"
      ],
      "reading": "ひと",
      "reading_variants": [
        "ひと"
      ],
      "romaji": "hito",
      "part_of_speech": "noun",
      "meaning_zh": "人",
      "kanji_readings": [
        {
          "form": "人",
          "reading": "ひと"
        }
      ],
      "examples": [
        {
          "ja": "駅には人がたくさんいます。",
          "zh": "车站里有很多人。",
          "focus": ["人"],
          "zhFocus": ["人"]
        },
        {
          "ja": "あそこにいる人は私の兄です。",
          "zh": "在那边的人是我哥哥。",
          "focus": ["人"],
          "zhFocus": ["人"]
        },
        {
          "ja": "親切な人に会いました。",
          "zh": "遇到了一位亲切的人。",
          "focus": ["人"],
          "zhFocus": ["人"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-565",
      "jlpt": "N5",
      "headword": "一つ",
      "source_form": "一つ",
      "variants": [
        "一つ"
      ],
      "reading": "ひとつ",
      "reading_variants": [
        "ひとつ"
      ],
      "romaji": "hitotsu",
      "part_of_speech": "numeral/counter",
      "meaning_zh": "一个",
      "kanji_readings": [
        {
          "form": "一つ",
          "reading": "ひとつ"
        }
      ],
      "examples": [
        {
          "ja": "りんごが一つあります。",
          "zh": "有一个苹果。",
          "focus": ["一つ"],
          "zhFocus": ["一个"]
        },
        {
          "ja": "一つください。",
          "zh": "请给我一个。",
          "focus": ["一つ"],
          "zhFocus": ["一个"]
        },
        {
          "ja": "あと一つ質問があります。",
          "zh": "还有一个问题。",
          "focus": ["一つ"],
          "zhFocus": ["一个"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-566",
      "jlpt": "N5",
      "headword": "ひと月",
      "source_form": "一月",
      "variants": [
        "ひと月",
        "一月"
      ],
      "reading": "ひとつき",
      "reading_variants": [
        "ひとつき"
      ],
      "romaji": "hitotsuki",
      "part_of_speech": "noun",
      "meaning_zh": "一个月",
      "kanji_readings": [
        {
          "form": "ひと月",
          "reading": "ひとつき"
        },
        {
          "form": "一月",
          "reading": "ひとつき"
        }
      ],
      "examples": [
        {
          "ja": "ひと月ぐらい休みます。",
          "zh": "休息大约一个月。",
          "focus": ["ひと月"],
          "zhFocus": ["一个月"]
        },
        {
          "ja": "この本をひと月で読みました。",
          "zh": "用了一个月读完这本书。",
          "focus": ["ひと月"],
          "zhFocus": ["一个月"]
        },
        {
          "ja": "日本にひと月いました。",
          "zh": "在日本待了一个月。",
          "focus": ["ひと月"],
          "zhFocus": ["一个月"]
        }
      ],
      "note_zh": "表示“一个月”时常写作「ひと月」；写成「一月」容易被读成表示“一月份”的「いちがつ」。"
    },
    {
      "id": "n5-567",
      "jlpt": "N5",
      "headword": "一人",
      "source_form": "一人",
      "variants": [
        "一人"
      ],
      "reading": "ひとり",
      "reading_variants": [
        "ひとり"
      ],
      "romaji": "hitori",
      "part_of_speech": "noun",
      "meaning_zh": "一个人",
      "kanji_readings": [
        {
          "form": "一人",
          "reading": "ひとり"
        }
      ],
      "examples": [
        {
          "ja": "一人で映画を見ます。",
          "zh": "一个人看电影。",
          "focus": ["一人"],
          "zhFocus": ["一个人"]
        },
        {
          "ja": "部屋に一人います。",
          "zh": "房间里有一个人。",
          "focus": ["一人"],
          "zhFocus": ["一个人"]
        },
        {
          "ja": "一人の時間が好きです。",
          "zh": "喜欢一个人的时间。",
          "focus": ["一人"],
          "zhFocus": ["一个人"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-568",
      "jlpt": "N5",
      "headword": "暇",
      "source_form": "暇",
      "variants": [
        "暇"
      ],
      "reading": "ひま",
      "reading_variants": [
        "ひま"
      ],
      "romaji": "hima",
      "part_of_speech": "noun/na-adjective",
      "meaning_zh": "空闲；有空",
      "kanji_readings": [
        {
          "form": "暇",
          "reading": "ひま"
        }
      ],
      "examples": [
        {
          "ja": "今日は暇です。",
          "zh": "今天有空。",
          "focus": ["暇"],
          "zhFocus": ["有空"]
        },
        {
          "ja": "週末は暇ですか。",
          "zh": "周末有空吗？",
          "focus": ["暇"],
          "zhFocus": ["有空"]
        },
        {
          "ja": "明日は暇ではありません。",
          "zh": "明天没空。",
          "focus": ["暇"],
          "zhFocus": ["空"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-569",
      "jlpt": "N5",
      "headword": "百",
      "source_form": "百",
      "variants": [
        "百"
      ],
      "reading": "ひゃく",
      "reading_variants": [
        "ひゃく"
      ],
      "romaji": "hyaku",
      "part_of_speech": "numeral",
      "meaning_zh": "一百",
      "kanji_readings": [
        {
          "form": "百",
          "reading": "ひゃく"
        }
      ],
      "examples": [
        {
          "ja": "このノートは百円です。",
          "zh": "这本笔记本一百日元。",
          "focus": ["百"],
          "zhFocus": ["一百"]
        },
        {
          "ja": "学校に学生が百人います。",
          "zh": "学校里有一百名学生。",
          "focus": ["百"],
          "zhFocus": ["一百"]
        },
        {
          "ja": "百を数字で書いてください。",
          "zh": "请用数字写出一百。",
          "focus": ["百"],
          "zhFocus": ["一百"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-570",
      "jlpt": "N5",
      "headword": "病院",
      "source_form": "病院",
      "variants": [
        "病院"
      ],
      "reading": "びょういん",
      "reading_variants": [
        "びょういん"
      ],
      "romaji": "byouin",
      "part_of_speech": "noun",
      "meaning_zh": "医院",
      "kanji_readings": [
        {
          "form": "病院",
          "reading": "びょういん"
        }
      ],
      "examples": [
        {
          "ja": "病院へ行きます。",
          "zh": "去医院。",
          "focus": ["病院"],
          "zhFocus": ["医院"]
        },
        {
          "ja": "病院は駅の近くです。",
          "zh": "医院在车站附近。",
          "focus": ["病院"],
          "zhFocus": ["医院"]
        },
        {
          "ja": "病院で友達に会います。",
          "zh": "在医院见朋友。",
          "focus": ["病院"],
          "zhFocus": ["医院"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-571",
      "jlpt": "N5",
      "headword": "病気",
      "source_form": "病気",
      "variants": [
        "病気"
      ],
      "reading": "びょうき",
      "reading_variants": [
        "びょうき"
      ],
      "romaji": "byouki",
      "part_of_speech": "noun",
      "meaning_zh": "病；疾病",
      "kanji_readings": [
        {
          "form": "病気",
          "reading": "びょうき"
        }
      ],
      "examples": [
        {
          "ja": "病気で学校を休みます。",
          "zh": "因为生病不去学校。",
          "focus": ["病気"],
          "zhFocus": ["病"]
        },
        {
          "ja": "病気になりました。",
          "zh": "生病了。",
          "focus": ["病気"],
          "zhFocus": ["病"]
        },
        {
          "ja": "病気はもうよくなりました。",
          "zh": "病已经好些了。",
          "focus": ["病気"],
          "zhFocus": ["病"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-572",
      "jlpt": "N5",
      "headword": "ひらがな",
      "source_form": "平仮名",
      "variants": [
        "ひらがな"
      ],
      "reading": "ひらがな",
      "reading_variants": [
        "ひらがな"
      ],
      "romaji": "hiragana",
      "part_of_speech": "noun",
      "meaning_zh": "平假名",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "ひらがなを書きます。",
          "zh": "写平假名。",
          "focus": ["ひらがな"],
          "zhFocus": ["平假名"]
        },
        {
          "ja": "ひらがなを覚えます。",
          "zh": "记平假名。",
          "focus": ["ひらがな"],
          "zhFocus": ["平假名"]
        },
        {
          "ja": "これはひらがなです。",
          "zh": "这是平假名。",
          "focus": ["ひらがな"],
          "zhFocus": ["平假名"]
        }
      ],
      "note_zh": "已把旧写法/不常用写法规范为现代常用写法；原始写法保留在 source_form。"
    },
    {
      "id": "n5-573",
      "jlpt": "N5",
      "headword": "昼",
      "source_form": "昼",
      "variants": [
        "昼"
      ],
      "reading": "ひる",
      "reading_variants": [
        "ひる"
      ],
      "romaji": "hiru",
      "part_of_speech": "noun",
      "meaning_zh": "中午；白天",
      "senses_zh": [
        "中午",
        "白天"
      ],
      "kanji_readings": [
        {
          "form": "昼",
          "reading": "ひる"
        }
      ],
      "examples": [
        {
          "ja": "昼、学校へ行きます。",
          "zh": "中午去学校。",
          "focus": ["昼"],
          "zhFocus": ["中午"]
        },
        {
          "ja": "昼は忙しいです。",
          "zh": "中午很忙。",
          "focus": ["昼"],
          "zhFocus": ["中午"]
        },
        {
          "ja": "昼、友達に会います。",
          "zh": "中午见朋友。",
          "focus": ["昼"],
          "zhFocus": ["中午"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-574",
      "jlpt": "N5",
      "headword": "昼ご飯",
      "source_form": "昼御飯",
      "variants": [
        "昼ご飯"
      ],
      "reading": "ひるごはん",
      "reading_variants": [
        "ひるごはん"
      ],
      "romaji": "hirugohan",
      "part_of_speech": "noun",
      "meaning_zh": "午饭；午餐",
      "kanji_readings": [
        {
          "form": "昼ご飯",
          "reading": "ひるごはん"
        }
      ],
      "examples": [
        {
          "ja": "昼ご飯はいつも会社の近くで食べます。",
          "zh": "午饭总是在公司附近吃。",
          "focus": ["昼ご飯"],
          "zhFocus": ["午饭"]
        },
        {
          "ja": "一緒に昼ご飯を食べませんか。",
          "zh": "一起吃午饭好吗？",
          "focus": ["昼ご飯"],
          "zhFocus": ["午饭"]
        },
        {
          "ja": "昼ご飯の後で少し寝ます。",
          "zh": "午饭后睡一会儿。",
          "focus": ["昼ご飯"],
          "zhFocus": ["午饭"]
        }
      ],
      "note_zh": "已把旧写法/不常用写法规范为现代常用写法；原始写法保留在 source_form。"
    },
    {
      "id": "n5-575",
      "jlpt": "N5",
      "headword": "広い",
      "source_form": "広い",
      "variants": [
        "広い"
      ],
      "reading": "ひろい",
      "reading_variants": [
        "ひろい"
      ],
      "romaji": "hiroi",
      "part_of_speech": "i-adjective",
      "meaning_zh": "宽阔的；宽敞的",
      "kanji_readings": [
        {
          "form": "広い",
          "reading": "ひろい"
        }
      ],
      "examples": [
        {
          "ja": "この部屋は広いです。",
          "zh": "这个房间很宽敞。",
          "focus": ["広い"],
          "zhFocus": ["宽敞"]
        },
        {
          "ja": "広い公園で遊びます。",
          "zh": "在宽阔的公园里玩。",
          "focus": ["広い"],
          "zhFocus": ["宽阔"]
        },
        {
          "ja": "駅の前に広い道があります。",
          "zh": "车站前面有一条宽阔的路。",
          "focus": ["広い"],
          "zhFocus": ["宽阔"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-576",
      "jlpt": "N5",
      "headword": "フィルム",
      "source_form": "フィルム",
      "variants": [
        "フィルム"
      ],
      "reading": "フィルム",
      "reading_variants": [
        "フィルム"
      ],
      "romaji": "firumu",
      "part_of_speech": "noun",
      "meaning_zh": "胶卷；胶片",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "フィルムを一本ください。",
          "zh": "请给我一卷胶卷。",
          "focus": ["フィルム"],
          "zhFocus": ["胶卷"]
        },
        {
          "ja": "このカメラは古いので、フィルムを使います。",
          "zh": "这台相机很旧，所以要用胶卷。",
          "focus": ["フィルム"],
          "zhFocus": ["胶卷"]
        },
        {
          "ja": "カメラにフィルムを入れます。",
          "zh": "把胶卷装进相机。",
          "focus": ["フィルム"],
          "zhFocus": ["胶卷"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-577",
      "jlpt": "N5",
      "headword": "封筒",
      "source_form": "封筒",
      "variants": [
        "封筒"
      ],
      "reading": "ふうとう",
      "reading_variants": [
        "ふうとう"
      ],
      "romaji": "fuutou",
      "part_of_speech": "noun",
      "meaning_zh": "信封",
      "kanji_readings": [
        {
          "form": "封筒",
          "reading": "ふうとう"
        }
      ],
      "examples": [
        {
          "ja": "手紙を封筒に入れました。",
          "zh": "把信放进了信封。",
          "focus": ["封筒"],
          "zhFocus": ["信封"]
        },
        {
          "ja": "封筒に住所を書きます。",
          "zh": "在信封上写地址。",
          "focus": ["封筒"],
          "zhFocus": ["信封"]
        },
        {
          "ja": "大きい封筒を一枚ください。",
          "zh": "请给我一个大信封。",
          "focus": ["封筒"],
          "zhFocus": ["信封"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-578",
      "jlpt": "N5",
      "headword": "プール",
      "source_form": "プール",
      "variants": [
        "プール"
      ],
      "reading": "プール",
      "reading_variants": [
        "プール"
      ],
      "romaji": "puuru",
      "part_of_speech": "noun",
      "meaning_zh": "游泳池",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "プールへ行きます。",
          "zh": "去游泳池。",
          "focus": ["プール"],
          "zhFocus": ["游泳池"]
        },
        {
          "ja": "プールは駅の近くです。",
          "zh": "游泳池在车站附近。",
          "focus": ["プール"],
          "zhFocus": ["游泳池"]
        },
        {
          "ja": "プールで友達に会います。",
          "zh": "在游泳池见朋友。",
          "focus": ["プール"],
          "zhFocus": ["游泳池"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-579",
      "jlpt": "N5",
      "headword": "フォーク",
      "source_form": "フォーク",
      "variants": [
        "フォーク"
      ],
      "reading": "フォーク",
      "reading_variants": [
        "フォーク"
      ],
      "romaji": "fooku",
      "part_of_speech": "noun",
      "meaning_zh": "叉子",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "子供にフォークを持ってきてください。",
          "zh": "请给孩子拿把叉子来。",
          "focus": ["フォーク"],
          "zhFocus": ["叉子"]
        },
        {
          "ja": "フォークはどこにありますか。",
          "zh": "叉子在哪里？",
          "focus": ["フォーク"],
          "zhFocus": ["叉子"]
        },
        {
          "ja": "フォークでケーキを食べます。",
          "zh": "用叉子吃蛋糕。",
          "focus": ["フォーク"],
          "zhFocus": ["叉子"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-580",
      "jlpt": "N5",
      "headword": "吹く",
      "source_form": "吹く",
      "variants": [
        "吹く"
      ],
      "reading": "ふく",
      "reading_variants": [
        "ふく"
      ],
      "romaji": "fuku",
      "part_of_speech": "verb",
      "meaning_zh": "吹（风）；吹奏",
      "senses_zh": [
        "吹（风）",
        "吹奏"
      ],
      "kanji_readings": [
        {
          "form": "吹く",
          "reading": "ふく"
        }
      ],
      "examples": [
        {
          "ja": "風が強く吹いています。",
          "zh": "风吹得很大。",
          "focus": ["吹い"],
          "zhFocus": ["吹"]
        },
        {
          "ja": "ろうそくの火を吹いて消します。",
          "zh": "把蜡烛吹灭。",
          "focus": ["吹い"],
          "zhFocus": ["吹"]
        },
        {
          "ja": "春に暖かい風が吹きます。",
          "zh": "春天吹来温暖的风。",
          "focus": ["吹き"],
          "zhFocus": ["吹"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-581",
      "jlpt": "N5",
      "headword": "服",
      "source_form": "服",
      "variants": [
        "服"
      ],
      "reading": "ふく",
      "reading_variants": [
        "ふく"
      ],
      "romaji": "fuku",
      "part_of_speech": "noun",
      "meaning_zh": "衣服",
      "kanji_readings": [
        {
          "form": "服",
          "reading": "ふく"
        }
      ],
      "examples": [
        {
          "ja": "新しい服を買いました。",
          "zh": "买了新衣服。",
          "focus": ["服"],
          "zhFocus": ["衣服"]
        },
        {
          "ja": "毎朝、服を選びます。",
          "zh": "每天早上挑选衣服。",
          "focus": ["服"],
          "zhFocus": ["衣服"]
        },
        {
          "ja": "服をたんすにしまいます。",
          "zh": "把衣服收进衣柜。",
          "focus": ["服"],
          "zhFocus": ["衣服"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-582",
      "jlpt": "N5",
      "headword": "二つ",
      "source_form": "二つ",
      "variants": [
        "二つ"
      ],
      "reading": "ふたつ",
      "reading_variants": [
        "ふたつ"
      ],
      "romaji": "futatsu",
      "part_of_speech": "numeral/counter",
      "meaning_zh": "两个",
      "kanji_readings": [
        {
          "form": "二つ",
          "reading": "ふたつ"
        }
      ],
      "examples": [
        {
          "ja": "りんごが二つあります。",
          "zh": "有两个苹果。",
          "focus": ["二つ"],
          "zhFocus": ["两个"]
        },
        {
          "ja": "二つください。",
          "zh": "请给我两个。",
          "focus": ["二つ"],
          "zhFocus": ["两个"]
        },
        {
          "ja": "二つの道があります。",
          "zh": "有两条路。",
          "focus": ["二つ"],
          "zhFocus": ["两"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-583",
      "jlpt": "N5",
      "headword": "豚肉",
      "source_form": "豚肉",
      "variants": [
        "豚肉"
      ],
      "reading": "ぶたにく",
      "reading_variants": [
        "ぶたにく"
      ],
      "romaji": "butaniku",
      "part_of_speech": "noun",
      "meaning_zh": "猪肉",
      "kanji_readings": [
        {
          "form": "豚肉",
          "reading": "ぶたにく"
        }
      ],
      "examples": [
        {
          "ja": "豚肉は牛肉より安いです。",
          "zh": "猪肉比牛肉便宜。",
          "focus": ["豚肉"],
          "zhFocus": ["猪肉"]
        },
        {
          "ja": "豚肉を少し買ってきてください。",
          "zh": "请买一点猪肉回来。",
          "focus": ["豚肉"],
          "zhFocus": ["猪肉"]
        },
        {
          "ja": "晩ご飯は豚肉の料理です。",
          "zh": "晚饭是猪肉做的菜。",
          "focus": ["豚肉"],
          "zhFocus": ["猪肉"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-584",
      "jlpt": "N5",
      "headword": "二人",
      "source_form": "二人",
      "variants": [
        "二人"
      ],
      "reading": "ふたり",
      "reading_variants": [
        "ふたり"
      ],
      "romaji": "futari",
      "part_of_speech": "noun",
      "meaning_zh": "两个人",
      "kanji_readings": [
        {
          "form": "二人",
          "reading": "ふたり"
        }
      ],
      "examples": [
        {
          "ja": "二人で行きます。",
          "zh": "两个人去。",
          "focus": ["二人"],
          "zhFocus": ["两个人"]
        },
        {
          "ja": "部屋に二人います。",
          "zh": "房间里有两个人。",
          "focus": ["二人"],
          "zhFocus": ["两个人"]
        },
        {
          "ja": "二人の学生が来ました。",
          "zh": "来了两名学生。",
          "focus": ["二人"],
          "zhFocus": ["两名"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-585",
      "jlpt": "N5",
      "headword": "二日",
      "source_form": "二日",
      "variants": [
        "二日"
      ],
      "reading": "ふつか",
      "reading_variants": [
        "ふつか"
      ],
      "romaji": "futsuka",
      "part_of_speech": "noun",
      "meaning_zh": "二号；两天",
      "senses_zh": [
        "二号",
        "两天"
      ],
      "kanji_readings": [
        {
          "form": "二日",
          "reading": "ふつか"
        }
      ],
      "examples": [
        {
          "ja": "二日に会いましょう。",
          "zh": "二号见吧。",
          "focus": ["二日"],
          "zhFocus": ["二号"]
        },
        {
          "ja": "二日は休みです。",
          "zh": "二号休息。",
          "focus": ["二日"],
          "zhFocus": ["二号"]
        },
        {
          "ja": "二日に日本へ行きます。",
          "zh": "二号去日本。",
          "focus": ["二日"],
          "zhFocus": ["二号"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-586",
      "jlpt": "N5",
      "headword": "太い",
      "source_form": "太い",
      "variants": [
        "太い"
      ],
      "reading": "ふとい",
      "reading_variants": [
        "ふとい"
      ],
      "romaji": "futoi",
      "part_of_speech": "i-adjective",
      "meaning_zh": "粗的；胖的",
      "senses_zh": [
        "粗的",
        "胖的"
      ],
      "kanji_readings": [
        {
          "form": "太い",
          "reading": "ふとい"
        }
      ],
      "examples": [
        {
          "ja": "この木は太いです。",
          "zh": "这棵树很粗。",
          "focus": ["太い"],
          "zhFocus": ["粗"]
        },
        {
          "ja": "太いペンで書きます。",
          "zh": "用粗笔写。",
          "focus": ["太い"],
          "zhFocus": ["粗"]
        },
        {
          "ja": "このロープはあまり太くありません。",
          "zh": "这根绳子不太粗。",
          "focus": ["太く"],
          "zhFocus": ["粗"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-587",
      "jlpt": "N5",
      "headword": "冬",
      "source_form": "冬",
      "variants": [
        "冬"
      ],
      "reading": "ふゆ",
      "reading_variants": [
        "ふゆ"
      ],
      "romaji": "fuyu",
      "part_of_speech": "noun",
      "meaning_zh": "冬天",
      "kanji_readings": [
        {
          "form": "冬",
          "reading": "ふゆ"
        }
      ],
      "examples": [
        {
          "ja": "冬は寒いです。",
          "zh": "冬天很冷。",
          "focus": ["冬"],
          "zhFocus": ["冬天"]
        },
        {
          "ja": "冬に雪が降ります。",
          "zh": "冬天下雪。",
          "focus": ["冬"],
          "zhFocus": ["冬天"]
        },
        {
          "ja": "冬休みに家へ帰ります。",
          "zh": "寒假回家。",
          "focus": ["冬"],
          "zhFocus": ["寒"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-588",
      "jlpt": "N5",
      "headword": "降る",
      "source_form": "降る",
      "variants": [
        "降る"
      ],
      "reading": "ふる",
      "reading_variants": [
        "ふる"
      ],
      "romaji": "furu",
      "part_of_speech": "verb",
      "meaning_zh": "下（雨、雪）",
      "kanji_readings": [
        {
          "form": "降る",
          "reading": "ふる"
        }
      ],
      "examples": [
        {
          "ja": "山の上では雪が降っています。",
          "zh": "山上正在下雪。",
          "focus": ["降っ"],
          "zhFocus": ["下"]
        },
        {
          "ja": "明日は雪が降ります。",
          "zh": "明天会下雪。",
          "focus": ["降り"],
          "zhFocus": ["下"]
        },
        {
          "ja": "昨日、たくさん雨が降りました。",
          "zh": "昨天下了很多雨。",
          "focus": ["降り"],
          "zhFocus": ["下"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-589",
      "jlpt": "N5",
      "headword": "古い",
      "source_form": "古い",
      "variants": [
        "古い"
      ],
      "reading": "ふるい",
      "reading_variants": [
        "ふるい"
      ],
      "romaji": "furui",
      "part_of_speech": "i-adjective",
      "meaning_zh": "旧的；古老的",
      "kanji_readings": [
        {
          "form": "古い",
          "reading": "ふるい"
        }
      ],
      "examples": [
        {
          "ja": "この本は古いです。",
          "zh": "这本书很旧。",
          "focus": ["古い"],
          "zhFocus": ["旧"]
        },
        {
          "ja": "京都には古い寺があります。",
          "zh": "京都有古老的寺庙。",
          "focus": ["古い"],
          "zhFocus": ["古老"]
        },
        {
          "ja": "この時計は古いですが、まだ動きます。",
          "zh": "这块表虽然旧，但还在走。",
          "focus": ["古い"],
          "zhFocus": ["旧"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-590",
      "jlpt": "N5",
      "headword": "～分",
      "source_form": "～分",
      "variants": [
        "～分"
      ],
      "reading": "～ふん・～ぷん",
      "speech_reading": "ふん",
      "reading_variants": [
        "～ふん",
        "～ぷん"
      ],
      "romaji": "~fun / ~pun",
      "part_of_speech": "counter/suffix",
      "meaning_zh": "……分钟",
      "kanji_readings": [
        {
          "form": "～分",
          "reading": "～ふん・～ぷん"
        },
        {
          "form": "三十分",
          "reading": "さんじゅっぷん"
        },
        {
          "form": "十分間",
          "reading": "じゅっぷんかん"
        },
        {
          "form": "五分",
          "reading": "ごふん"
        }
      ],
      "examples": [
        {
          "ja": "十分間待ちます。",
          "zh": "等十分钟。",
          "focus": ["十分間"],
          "zhFocus": ["十分钟"]
        },
        {
          "ja": "駅まで五分かかります。",
          "zh": "到车站需要五分钟。",
          "focus": ["五分"],
          "zhFocus": ["分钟"]
        },
        {
          "ja": "三十分勉強します。",
          "zh": "学习三十分钟。",
          "focus": ["三十分"],
          "zhFocus": ["三十分钟"]
        }
      ],
      "note_zh": "读音随前面的数字变化：一分「いっぷん」、三分「さんぷん」、五分「ごふん」、六分「ろっぷん」、十分「じゅっぷん」等。"
    },
    {
      "id": "n5-591",
      "jlpt": "N5",
      "headword": "文章",
      "source_form": "文章",
      "variants": [
        "文章"
      ],
      "reading": "ぶんしょう",
      "reading_variants": [
        "ぶんしょう"
      ],
      "romaji": "bunshou",
      "part_of_speech": "noun",
      "meaning_zh": "文章",
      "kanji_readings": [
        {
          "form": "文章",
          "reading": "ぶんしょう"
        }
      ],
      "examples": [
        {
          "ja": "文章を読みます。",
          "zh": "读文章。",
          "focus": ["文章"],
          "zhFocus": ["文章"]
        },
        {
          "ja": "この文章は難しいです。",
          "zh": "这篇文章很难。",
          "focus": ["文章"],
          "zhFocus": ["文章"]
        },
        {
          "ja": "日本語で短い文章を書きました。",
          "zh": "用日语写了一篇短文。",
          "focus": ["文章"],
          "zhFocus": ["文"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-592",
      "jlpt": "N5",
      "headword": "ページ",
      "source_form": "ページ",
      "variants": [
        "ページ"
      ],
      "reading": "ページ",
      "reading_variants": [
        "ページ"
      ],
      "romaji": "peeji",
      "part_of_speech": "noun",
      "meaning_zh": "页；页面",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "教科書を一ページずつ読みます。",
          "zh": "课本一页一页地读。",
          "focus": ["ページ"],
          "zhFocus": ["页"]
        },
        {
          "ja": "教科書の三十ページを開いてください。",
          "zh": "请打开课本第三十页。",
          "focus": ["ページ"],
          "zhFocus": ["页"]
        },
        {
          "ja": "この本は百ページあります。",
          "zh": "这本书有一百页。",
          "focus": ["ページ"],
          "zhFocus": ["页"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-593",
      "jlpt": "N5",
      "headword": "下手",
      "source_form": "下手",
      "variants": [
        "下手"
      ],
      "reading": "へた",
      "reading_variants": [
        "へた"
      ],
      "romaji": "heta",
      "part_of_speech": "na-adjective",
      "meaning_zh": "不擅长的；笨拙的",
      "kanji_readings": [
        {
          "form": "下手",
          "reading": "へた"
        }
      ],
      "examples": [
        {
          "ja": "私は歌が下手です。",
          "zh": "我不擅长唱歌。",
          "focus": ["下手"],
          "zhFocus": ["不擅长"]
        },
        {
          "ja": "字を書くのが下手です。",
          "zh": "不擅长写字。",
          "focus": ["下手"],
          "zhFocus": ["不擅长"]
        },
        {
          "ja": "下手でも練習します。",
          "zh": "即使不擅长也练习。",
          "focus": ["下手"],
          "zhFocus": ["不擅长"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-594",
      "jlpt": "N5",
      "headword": "ベッド",
      "source_form": "ベッド",
      "variants": [
        "ベッド"
      ],
      "reading": "ベッド",
      "reading_variants": [
        "ベッド"
      ],
      "romaji": "beddo",
      "part_of_speech": "noun",
      "meaning_zh": "床",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "新しいベッドはとても大きいです。",
          "zh": "新床很大。",
          "focus": ["ベッド"],
          "zhFocus": ["床"]
        },
        {
          "ja": "疲れたので、ベッドで少し休みます。",
          "zh": "累了，所以在床上休息一下。",
          "focus": ["ベッド"],
          "zhFocus": ["床"]
        },
        {
          "ja": "毎晩十一時にベッドで寝ます。",
          "zh": "每天晚上十一点上床睡觉。",
          "focus": ["ベッド"],
          "zhFocus": ["床"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-595",
      "jlpt": "N5",
      "headword": "ペット",
      "source_form": "ペット",
      "variants": [
        "ペット"
      ],
      "reading": "ペット",
      "reading_variants": [
        "ペット"
      ],
      "romaji": "petto",
      "part_of_speech": "noun",
      "meaning_zh": "宠物",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "ペットを飼っています。",
          "zh": "养着宠物。",
          "focus": ["ペット"],
          "zhFocus": ["宠物"]
        },
        {
          "ja": "私のペットは猫です。",
          "zh": "我的宠物是猫。",
          "focus": ["ペット"],
          "zhFocus": ["宠物"]
        },
        {
          "ja": "ペットと遊びます。",
          "zh": "和宠物玩。",
          "focus": ["ペット"],
          "zhFocus": ["宠物"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-596",
      "jlpt": "N5",
      "headword": "部屋",
      "source_form": "部屋",
      "variants": [
        "部屋"
      ],
      "reading": "へや",
      "reading_variants": [
        "へや"
      ],
      "romaji": "heya",
      "part_of_speech": "noun",
      "meaning_zh": "房间",
      "kanji_readings": [
        {
          "form": "部屋",
          "reading": "へや"
        }
      ],
      "examples": [
        {
          "ja": "部屋へ入ってください。",
          "zh": "请进房间。",
          "focus": ["部屋"],
          "zhFocus": ["房间"]
        },
        {
          "ja": "私の部屋は二階にあります。",
          "zh": "我的房间在二楼。",
          "focus": ["部屋"],
          "zhFocus": ["房间"]
        },
        {
          "ja": "毎週、部屋を掃除します。",
          "zh": "每周打扫房间。",
          "focus": ["部屋"],
          "zhFocus": ["房间"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-597",
      "jlpt": "N5",
      "headword": "辺",
      "source_form": "辺",
      "variants": [
        "辺"
      ],
      "reading": "へん",
      "reading_variants": [
        "へん"
      ],
      "romaji": "hen",
      "part_of_speech": "noun",
      "meaning_zh": "一带；附近",
      "kanji_readings": [
        {
          "form": "辺",
          "reading": "へん"
        }
      ],
      "examples": [
        {
          "ja": "この辺に銀行があります。",
          "zh": "这附近有银行。",
          "focus": ["辺"],
          "zhFocus": ["附近"]
        },
        {
          "ja": "この辺を少し散歩しました。",
          "zh": "在这附近散了一会儿步。",
          "focus": ["辺"],
          "zhFocus": ["附近"]
        },
        {
          "ja": "この辺は夜になると静かです。",
          "zh": "这附近到了晚上很安静。",
          "focus": ["辺"],
          "zhFocus": ["附近"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-598",
      "jlpt": "N5",
      "headword": "ペン",
      "source_form": "ペン",
      "variants": [
        "ペン"
      ],
      "reading": "ペン",
      "reading_variants": [
        "ペン"
      ],
      "romaji": "pen",
      "part_of_speech": "noun",
      "meaning_zh": "笔",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "すみません、ペンを貸してください。",
          "zh": "不好意思，请借我一支笔。",
          "focus": ["ペン"],
          "zhFocus": ["笔"]
        },
        {
          "ja": "黒いペンと青いペン、どちらがいいですか。",
          "zh": "黑笔和蓝笔，哪个好？",
          "focus": ["ペン", "ペン"],
          "zhFocus": ["笔", "笔"]
        },
        {
          "ja": "ペンで住所を書きます。",
          "zh": "用笔写地址。",
          "focus": ["ペン"],
          "zhFocus": ["笔"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-599",
      "jlpt": "N5",
      "headword": "勉強",
      "source_form": "勉強",
      "variants": [
        "勉強"
      ],
      "reading": "べんきょう",
      "reading_variants": [
        "べんきょう (する)"
      ],
      "romaji": "benkyou",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "学习",
      "kanji_readings": [
        {
          "form": "勉強",
          "reading": "べんきょう"
        }
      ],
      "examples": [
        {
          "ja": "図書館で勉強します。",
          "zh": "在图书馆学习。",
          "focus": ["勉強"],
          "zhFocus": ["学习"]
        },
        {
          "ja": "毎日、日本語を勉強します。",
          "zh": "每天学习日语。",
          "focus": ["勉強"],
          "zhFocus": ["学习"]
        },
        {
          "ja": "一時間ぐらい勉強しました。",
          "zh": "学习了大约一个小时。",
          "focus": ["勉強"],
          "zhFocus": ["学习"]
        }
      ],
      "note_zh": "可作名词，也常与「する」构成动词。"
    },
    {
      "id": "n5-600",
      "jlpt": "N5",
      "headword": "便利",
      "source_form": "便利",
      "variants": [
        "便利"
      ],
      "reading": "べんり",
      "reading_variants": [
        "べんり"
      ],
      "romaji": "benri",
      "part_of_speech": "na-adjective",
      "meaning_zh": "方便的",
      "kanji_readings": [
        {
          "form": "便利",
          "reading": "べんり"
        }
      ],
      "examples": [
        {
          "ja": "この店は便利です。",
          "zh": "这家店很方便。",
          "focus": ["便利"],
          "zhFocus": ["方便"]
        },
        {
          "ja": "便利なアプリを使います。",
          "zh": "使用方便的应用。",
          "focus": ["便利"],
          "zhFocus": ["方便"]
        },
        {
          "ja": "駅が近くて便利です。",
          "zh": "车站近，很方便。",
          "focus": ["便利"],
          "zhFocus": ["方便"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-601",
      "jlpt": "N5",
      "headword": "帽子",
      "source_form": "帽子",
      "variants": [
        "帽子"
      ],
      "reading": "ぼうし",
      "reading_variants": [
        "ぼうし"
      ],
      "romaji": "boushi",
      "part_of_speech": "noun",
      "meaning_zh": "帽子",
      "kanji_readings": [
        {
          "form": "帽子",
          "reading": "ぼうし"
        }
      ],
      "examples": [
        {
          "ja": "この帽子は父のです。",
          "zh": "这顶帽子是父亲的。",
          "focus": ["帽子"],
          "zhFocus": ["帽子"]
        },
        {
          "ja": "赤い帽子を買いました。",
          "zh": "买了红帽子。",
          "focus": ["帽子"],
          "zhFocus": ["帽子"]
        },
        {
          "ja": "部屋では帽子を脱いでください。",
          "zh": "在房间里请摘下帽子。",
          "focus": ["帽子"],
          "zhFocus": ["帽子"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-602",
      "jlpt": "N5",
      "headword": "ボールペン",
      "source_form": "ボールペン",
      "variants": [
        "ボールペン"
      ],
      "reading": "ボールペン",
      "reading_variants": [
        "ボールペン"
      ],
      "romaji": "boorupen",
      "part_of_speech": "noun",
      "meaning_zh": "圆珠笔",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "このボールペンは百円です。",
          "zh": "这支圆珠笔一百日元。",
          "focus": ["ボールペン"],
          "zhFocus": ["圆珠笔"]
        },
        {
          "ja": "かばんにボールペンが三本あります。",
          "zh": "包里有三支圆珠笔。",
          "focus": ["ボールペン"],
          "zhFocus": ["圆珠笔"]
        },
        {
          "ja": "ボールペンで名前を書きました。",
          "zh": "用圆珠笔写了名字。",
          "focus": ["ボールペン"],
          "zhFocus": ["圆珠笔"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-603",
      "jlpt": "N5",
      "headword": "ほか",
      "source_form": "外",
      "variants": [
        "ほか",
        "外"
      ],
      "reading": "ほか",
      "reading_variants": [
        "ほか"
      ],
      "romaji": "hoka",
      "part_of_speech": "noun",
      "meaning_zh": "其他；另外",
      "kanji_readings": [
        {
          "form": "外",
          "reading": "ほか"
        }
      ],
      "examples": [
        {
          "ja": "ほかに何かありますか。",
          "zh": "另外还有什么吗？",
          "focus": ["ほか"],
          "zhFocus": ["另外"]
        },
        {
          "ja": "ほかの店へ行きます。",
          "zh": "去别的店。",
          "focus": ["ほか"],
          "zhFocus": ["别"]
        },
        {
          "ja": "これのほかに本も買いました。",
          "zh": "除此之外还买了书。",
          "focus": ["ほか"],
          "zhFocus": ["之外"]
        }
      ],
      "note_zh": "已把旧写法/不常用写法规范为现代常用写法；原始写法保留在 source_form。"
    },
    {
      "id": "n5-604",
      "jlpt": "N5",
      "headword": "ポケット",
      "source_form": "ポケット",
      "variants": [
        "ポケット"
      ],
      "reading": "ポケット",
      "reading_variants": [
        "ポケット"
      ],
      "romaji": "poketto",
      "part_of_speech": "noun",
      "meaning_zh": "口袋",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "ポケットに鍵を入れます。",
          "zh": "把钥匙放进口袋。",
          "focus": ["ポケット"],
          "zhFocus": ["口袋"]
        },
        {
          "ja": "この服には大きなポケットがあります。",
          "zh": "这件衣服有一个大口袋。",
          "focus": ["ポケット"],
          "zhFocus": ["口袋"]
        },
        {
          "ja": "ポケットから財布を出しました。",
          "zh": "从口袋里拿出了钱包。",
          "focus": ["ポケット"],
          "zhFocus": ["口袋"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-605",
      "jlpt": "N5",
      "headword": "欲しい",
      "source_form": "欲しい",
      "variants": [
        "欲しい"
      ],
      "reading": "ほしい",
      "reading_variants": [
        "ほしい"
      ],
      "romaji": "hoshii",
      "part_of_speech": "i-adjective",
      "meaning_zh": "想要的",
      "kanji_readings": [
        {
          "form": "欲しい",
          "reading": "ほしい"
        }
      ],
      "examples": [
        {
          "ja": "新しい本が欲しいです。",
          "zh": "想要新书。",
          "focus": ["欲しい"],
          "zhFocus": ["想要"]
        },
        {
          "ja": "水が欲しいです。",
          "zh": "想要水。",
          "focus": ["欲しい"],
          "zhFocus": ["想要"]
        },
        {
          "ja": "今は何も欲しくありません。",
          "zh": "现在什么都不想要。",
          "focus": ["欲しく"],
          "zhFocus": ["想要"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-606",
      "jlpt": "N5",
      "headword": "ポスト",
      "source_form": "ポスト",
      "variants": [
        "ポスト"
      ],
      "reading": "ポスト",
      "reading_variants": [
        "ポスト"
      ],
      "romaji": "posuto",
      "part_of_speech": "noun",
      "meaning_zh": "邮箱；邮筒",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "手紙をポストに入れます。",
          "zh": "把信放进邮筒。",
          "focus": ["ポスト"],
          "zhFocus": ["邮筒"]
        },
        {
          "ja": "駅の前にポストがあります。",
          "zh": "车站前有邮筒。",
          "focus": ["ポスト"],
          "zhFocus": ["邮筒"]
        },
        {
          "ja": "ポストはどこですか。",
          "zh": "邮筒在哪里？",
          "focus": ["ポスト"],
          "zhFocus": ["邮筒"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-607",
      "jlpt": "N5",
      "headword": "細い",
      "source_form": "細い",
      "variants": [
        "細い"
      ],
      "reading": "ほそい",
      "reading_variants": [
        "ほそい"
      ],
      "romaji": "hosoi",
      "part_of_speech": "i-adjective",
      "meaning_zh": "细的",
      "kanji_readings": [
        {
          "form": "細い",
          "reading": "ほそい"
        }
      ],
      "examples": [
        {
          "ja": "このひもは細いです。",
          "zh": "这根绳子很细。",
          "focus": ["細い"],
          "zhFocus": ["细"]
        },
        {
          "ja": "細い道を歩きます。",
          "zh": "走在狭窄的小路上。",
          "focus": ["細い"],
          "zhFocus": ["狭窄"]
        },
        {
          "ja": "妹は指が細いです。",
          "zh": "妹妹的手指很纤细。",
          "focus": ["細い"],
          "zhFocus": ["纤细"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-608",
      "jlpt": "N5",
      "headword": "ボタン",
      "source_form": "ボタン",
      "variants": [
        "ボタン"
      ],
      "reading": "ボタン",
      "reading_variants": [
        "ボタン"
      ],
      "romaji": "botan",
      "part_of_speech": "noun",
      "meaning_zh": "按钮；纽扣",
      "senses_zh": [
        "按钮",
        "纽扣"
      ],
      "kanji_readings": [],
      "examples": [
        {
          "ja": "このボタンは何ですか。",
          "zh": "这个按钮是做什么的？",
          "focus": ["ボタン"],
          "zhFocus": ["按钮"]
        },
        {
          "ja": "シャツのボタンが取れました。",
          "zh": "衬衫的纽扣掉了。",
          "focus": ["ボタン"],
          "zhFocus": ["纽扣"]
        },
        {
          "ja": "シャツのボタンを留めます。",
          "zh": "扣上衬衫的纽扣。",
          "focus": ["ボタン"],
          "zhFocus": ["纽扣"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-609",
      "jlpt": "N5",
      "headword": "ホテル",
      "source_form": "ホテル",
      "variants": [
        "ホテル"
      ],
      "reading": "ホテル",
      "reading_variants": [
        "ホテル"
      ],
      "romaji": "hoteru",
      "part_of_speech": "noun",
      "meaning_zh": "酒店；宾馆",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "ホテルへ行きます。",
          "zh": "去酒店。",
          "focus": ["ホテル"],
          "zhFocus": ["酒店"]
        },
        {
          "ja": "ホテルは駅の近くです。",
          "zh": "酒店在车站附近。",
          "focus": ["ホテル"],
          "zhFocus": ["酒店"]
        },
        {
          "ja": "ホテルで友達に会います。",
          "zh": "在酒店见朋友。",
          "focus": ["ホテル"],
          "zhFocus": ["酒店"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-610",
      "jlpt": "N5",
      "headword": "本",
      "source_form": "本",
      "variants": [
        "本"
      ],
      "reading": "ほん",
      "reading_variants": [
        "ほん"
      ],
      "romaji": "hon",
      "part_of_speech": "noun",
      "meaning_zh": "书",
      "kanji_readings": [
        {
          "form": "本",
          "reading": "ほん"
        }
      ],
      "examples": [
        {
          "ja": "この本は図書館で借りました。",
          "zh": "这本书是在图书馆借的。",
          "focus": ["本"],
          "zhFocus": ["书"]
        },
        {
          "ja": "本が好きです。",
          "zh": "喜欢书。",
          "focus": ["本"],
          "zhFocus": ["书"]
        },
        {
          "ja": "朝、本を読みました。",
          "zh": "早上读了书。",
          "focus": ["本"],
          "zhFocus": ["书"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-611",
      "jlpt": "N5",
      "headword": "～本",
      "source_form": "～本",
      "variants": [
        "～本"
      ],
      "reading": "～ほん",
      "reading_variants": [
        "～ほん"
      ],
      "romaji": "~hon",
      "part_of_speech": "counter/suffix",
      "meaning_zh": "……根；……瓶；……条（细长物计数）",
      "kanji_readings": [
        {
          "form": "～本",
          "reading": "～ほん"
        }
      ],
      "examples": [
        {
          "ja": "ペンが三本あります。",
          "zh": "有三支笔。",
          "focus": ["本"],
          "zhFocus": ["支"]
        },
        {
          "ja": "水を一本買いました。",
          "zh": "买了一瓶水。",
          "focus": ["本"],
          "zhFocus": ["瓶"]
        },
        {
          "ja": "映画を二本見ました。",
          "zh": "看了两部电影。",
          "focus": ["本"],
          "zhFocus": ["部"]
        }
      ],
      "note_zh": "接在数字或名词后使用；例句中去掉了前缀符号「～」。"
    },
    {
      "id": "n5-612",
      "jlpt": "N5",
      "headword": "本棚",
      "source_form": "本棚",
      "variants": [
        "本棚"
      ],
      "reading": "ほんだな",
      "reading_variants": [
        "ほんだな"
      ],
      "romaji": "hondana",
      "part_of_speech": "noun",
      "meaning_zh": "书架",
      "kanji_readings": [
        {
          "form": "本棚",
          "reading": "ほんだな"
        }
      ],
      "examples": [
        {
          "ja": "本棚の上に時計があります。",
          "zh": "书架上面有一个钟。",
          "focus": ["本棚"],
          "zhFocus": ["书架"]
        },
        {
          "ja": "部屋が狭いので、小さい本棚を買いました。",
          "zh": "房间小，所以买了小书架。",
          "focus": ["本棚"],
          "zhFocus": ["书架"]
        },
        {
          "ja": "本棚に本を並べます。",
          "zh": "把书排列在书架上。",
          "focus": ["本棚"],
          "zhFocus": ["书架"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-613",
      "jlpt": "N5",
      "headword": "本当",
      "source_form": "本当",
      "variants": [
        "本当"
      ],
      "reading": "ほんとう",
      "reading_variants": [
        "ほんとう"
      ],
      "romaji": "hontou",
      "part_of_speech": "noun",
      "meaning_zh": "真的；真实",
      "kanji_readings": [
        {
          "form": "本当",
          "reading": "ほんとう"
        }
      ],
      "examples": [
        {
          "ja": "本当ですか。",
          "zh": "是真的吗？",
          "focus": ["本当"],
          "zhFocus": ["真"]
        },
        {
          "ja": "本当にありがとうございます。",
          "zh": "真的非常感谢。",
          "focus": ["本当"],
          "zhFocus": ["真"]
        },
        {
          "ja": "これは本当の話です。",
          "zh": "这是真事。",
          "focus": ["本当"],
          "zhFocus": ["真"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-614",
      "jlpt": "N5",
      "headword": "～枚",
      "source_form": "～枚",
      "variants": [
        "～枚"
      ],
      "reading": "～まい",
      "reading_variants": [
        "～まい"
      ],
      "romaji": "~mai",
      "part_of_speech": "counter/suffix",
      "meaning_zh": "……张；……件（薄平物计数）",
      "kanji_readings": [
        {
          "form": "～枚",
          "reading": "～まい"
        }
      ],
      "examples": [
        {
          "ja": "紙を三枚ください。",
          "zh": "请给我三张纸。",
          "focus": ["枚"],
          "zhFocus": ["张"]
        },
        {
          "ja": "切手を二枚買いました。",
          "zh": "买了两张邮票。",
          "focus": ["枚"],
          "zhFocus": ["张"]
        },
        {
          "ja": "シャツを一枚着ます。",
          "zh": "穿一件衬衫。",
          "focus": ["枚"],
          "zhFocus": ["件"]
        }
      ],
      "note_zh": "接在数字或名词后使用；例句中去掉了前缀符号「～」。"
    },
    {
      "id": "n5-615",
      "jlpt": "N5",
      "headword": "毎朝",
      "source_form": "毎朝",
      "variants": [
        "毎朝"
      ],
      "reading": "まいあさ",
      "reading_variants": [
        "まいあさ"
      ],
      "romaji": "maiasa",
      "part_of_speech": "noun",
      "meaning_zh": "每天早上",
      "kanji_readings": [
        {
          "form": "毎朝",
          "reading": "まいあさ"
        }
      ],
      "examples": [
        {
          "ja": "毎朝、学校へ行きます。",
          "zh": "每天早上去学校。",
          "focus": ["毎朝"],
          "zhFocus": ["每天早上"]
        },
        {
          "ja": "毎朝、新聞を読みます。",
          "zh": "每天早上看报纸。",
          "focus": ["毎朝"],
          "zhFocus": ["每天早上"]
        },
        {
          "ja": "毎朝、コーヒーを飲みます。",
          "zh": "每天早上喝咖啡。",
          "focus": ["毎朝"],
          "zhFocus": ["每天早上"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-616",
      "jlpt": "N5",
      "headword": "毎月",
      "source_form": "毎月",
      "variants": [
        "毎月"
      ],
      "reading": "まいつき",
      "reading_variants": [
        "まいつき",
        "まいげつ"
      ],
      "romaji": "maitsuki",
      "part_of_speech": "noun",
      "meaning_zh": "每个月",
      "kanji_readings": [
        {
          "form": "毎月",
          "reading": "まいつき"
        }
      ],
      "examples": [
        {
          "ja": "毎月、家族に手紙を書きます。",
          "zh": "每个月给家人写信。",
          "focus": ["毎月"],
          "zhFocus": ["每个月"]
        },
        {
          "ja": "毎月、母に電話します。",
          "zh": "每个月给妈妈打电话。",
          "focus": ["毎月"],
          "zhFocus": ["每个月"]
        },
        {
          "ja": "毎月、友達に会います。",
          "zh": "每个月见朋友。",
          "focus": ["毎月"],
          "zhFocus": ["每个月"]
        }
      ],
      "note_zh": "也读「まいげつ」，语气较书面。"
    },
    {
      "id": "n5-617",
      "jlpt": "N5",
      "headword": "毎週",
      "source_form": "毎週",
      "variants": [
        "毎週"
      ],
      "reading": "まいしゅう",
      "reading_variants": [
        "まいしゅう"
      ],
      "romaji": "maishuu",
      "part_of_speech": "noun",
      "meaning_zh": "每周",
      "kanji_readings": [
        {
          "form": "毎週",
          "reading": "まいしゅう"
        }
      ],
      "examples": [
        {
          "ja": "毎週、プールで泳ぎます。",
          "zh": "每周在游泳池游泳。",
          "focus": ["毎週"],
          "zhFocus": ["每周"]
        },
        {
          "ja": "毎週、テニスをします。",
          "zh": "每周打网球。",
          "focus": ["毎週"],
          "zhFocus": ["每周"]
        },
        {
          "ja": "毎週、友達に会います。",
          "zh": "每周见朋友。",
          "focus": ["毎週"],
          "zhFocus": ["每周"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-618",
      "jlpt": "N5",
      "headword": "毎日",
      "source_form": "毎日",
      "variants": [
        "毎日"
      ],
      "reading": "まいにち",
      "reading_variants": [
        "まいにち"
      ],
      "romaji": "mainichi",
      "part_of_speech": "noun",
      "meaning_zh": "每天",
      "kanji_readings": [
        {
          "form": "毎日",
          "reading": "まいにち"
        }
      ],
      "examples": [
        {
          "ja": "毎日、学校へ行きます。",
          "zh": "每天去学校。",
          "focus": ["毎日"],
          "zhFocus": ["每天"]
        },
        {
          "ja": "毎日とても忙しいです。",
          "zh": "每天都很忙。",
          "focus": ["毎日"],
          "zhFocus": ["每天"]
        },
        {
          "ja": "毎日、友達に会います。",
          "zh": "每天见朋友。",
          "focus": ["毎日"],
          "zhFocus": ["每天"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-619",
      "jlpt": "N5",
      "headword": "毎年",
      "source_form": "毎年",
      "variants": [
        "毎年"
      ],
      "reading": "まいねん",
      "reading_variants": [
        "まいねん",
        "まいとし"
      ],
      "romaji": "mainen",
      "part_of_speech": "noun",
      "meaning_zh": "每年",
      "kanji_readings": [
        {
          "form": "毎年",
          "reading": "まいねん"
        }
      ],
      "examples": [
        {
          "ja": "毎年、夏に海へ行きます。",
          "zh": "每年夏天去海边。",
          "focus": ["毎年"],
          "zhFocus": ["每年"]
        },
        {
          "ja": "毎年、家族と旅行します。",
          "zh": "每年和家人去旅行。",
          "focus": ["毎年"],
          "zhFocus": ["每年"]
        },
        {
          "ja": "毎年、友達に会います。",
          "zh": "每年见朋友。",
          "focus": ["毎年"],
          "zhFocus": ["每年"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-620",
      "jlpt": "N5",
      "headword": "毎晩",
      "source_form": "毎晩",
      "variants": [
        "毎晩"
      ],
      "reading": "まいばん",
      "reading_variants": [
        "まいばん"
      ],
      "romaji": "maiban",
      "part_of_speech": "noun",
      "meaning_zh": "每天晚上",
      "kanji_readings": [
        {
          "form": "毎晩",
          "reading": "まいばん"
        }
      ],
      "examples": [
        {
          "ja": "毎晩、早く寝ます。",
          "zh": "每天晚上早睡。",
          "focus": ["毎晩"],
          "zhFocus": ["每天晚上"]
        },
        {
          "ja": "毎晩、日本語を勉強します。",
          "zh": "每天晚上学习日语。",
          "focus": ["毎晩"],
          "zhFocus": ["每天晚上"]
        },
        {
          "ja": "毎晩、テレビを見ます。",
          "zh": "每天晚上看电视。",
          "focus": ["毎晩"],
          "zhFocus": ["每天晚上"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-621",
      "jlpt": "N5",
      "headword": "前",
      "source_form": "前",
      "variants": [
        "前"
      ],
      "reading": "まえ",
      "reading_variants": [
        "まえ"
      ],
      "romaji": "mae",
      "part_of_speech": "noun",
      "meaning_zh": "前面；以前",
      "senses_zh": [
        "前面",
        "以前"
      ],
      "kanji_readings": [
        {
          "form": "前",
          "reading": "まえ"
        }
      ],
      "examples": [
        {
          "ja": "駅の前で待ちます。",
          "zh": "在车站前等。",
          "focus": ["前"],
          "zhFocus": ["前"]
        },
        {
          "ja": "学校の前に店があります。",
          "zh": "学校前面有商店。",
          "focus": ["前"],
          "zhFocus": ["前面"]
        },
        {
          "ja": "寝る前に歯を磨きます。",
          "zh": "睡前刷牙。",
          "focus": ["前"],
          "zhFocus": ["前"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-622",
      "jlpt": "N5",
      "headword": "～前",
      "source_form": "～前",
      "variants": [
        "～前"
      ],
      "reading": "～まえ",
      "reading_variants": [
        "～まえ"
      ],
      "romaji": "~mae",
      "part_of_speech": "suffix/pattern",
      "meaning_zh": "……之前；……前面",
      "senses_zh": [
        "……之前",
        "……前面"
      ],
      "kanji_readings": [
        {
          "form": "～前",
          "reading": "～まえ"
        }
      ],
      "examples": [
        {
          "ja": "三年前に日本へ行きました。",
          "zh": "三年前去了日本。",
          "focus": ["前"],
          "zhFocus": ["前"]
        },
        {
          "ja": "十年前にこの町に住んでいました。",
          "zh": "十年前住在这个城镇。",
          "focus": ["前"],
          "zhFocus": ["前"]
        },
        {
          "ja": "二時間前に昼ご飯を食べました。",
          "zh": "两个小时前吃了午饭。",
          "focus": ["前"],
          "zhFocus": ["前"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-623",
      "jlpt": "N5",
      "headword": "曲がる",
      "source_form": "曲る",
      "variants": [
        "曲がる"
      ],
      "reading": "まがる",
      "reading_variants": [
        "まがる"
      ],
      "romaji": "magaru",
      "part_of_speech": "verb",
      "meaning_zh": "转弯；弯曲",
      "senses_zh": [
        "转弯",
        "弯曲"
      ],
      "kanji_readings": [
        {
          "form": "曲がる",
          "reading": "まがる"
        }
      ],
      "examples": [
        {
          "ja": "次の角を右に曲がります。",
          "zh": "在下一个路口右转。",
          "focus": ["曲がり"],
          "zhFocus": ["转"]
        },
        {
          "ja": "駅の前で左に曲がってください。",
          "zh": "请在车站前左转。",
          "focus": ["曲がっ"],
          "zhFocus": ["转"]
        },
        {
          "ja": "道が少し曲がっています。",
          "zh": "路有点弯。",
          "focus": ["曲がっ"],
          "zhFocus": ["弯"]
        }
      ],
      "note_zh": "已把旧写法/不常用写法规范为现代常用写法；原始写法保留在 source_form。"
    },
    {
      "id": "n5-624",
      "jlpt": "N5",
      "headword": "まずい",
      "source_form": "まずい",
      "variants": [
        "まずい"
      ],
      "reading": "まずい",
      "reading_variants": [
        "まずい"
      ],
      "romaji": "mazui",
      "part_of_speech": "i-adjective",
      "meaning_zh": "难吃的；糟糕的",
      "senses_zh": [
        "难吃的",
        "糟糕的"
      ],
      "kanji_readings": [],
      "examples": [
        {
          "ja": "この料理はまずいです。",
          "zh": "这道菜不好吃。",
          "focus": ["まずい"],
          "zhFocus": ["不好吃"]
        },
        {
          "ja": "まずいコーヒーを飲みました。",
          "zh": "喝了不好喝的咖啡。",
          "focus": ["まずい"],
          "zhFocus": ["不好喝"]
        },
        {
          "ja": "それはまずいですね。",
          "zh": "那可不妙。",
          "focus": ["まずい"],
          "zhFocus": ["不妙"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-625",
      "jlpt": "N5",
      "headword": "また",
      "source_form": "また",
      "variants": [
        "また"
      ],
      "reading": "また",
      "reading_variants": [
        "また"
      ],
      "romaji": "mata",
      "part_of_speech": "adverb",
      "meaning_zh": "又；再；还",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "また明日会いましょう。",
          "zh": "明天再见吧。",
          "focus": ["また"],
          "zhFocus": ["再"]
        },
        {
          "ja": "また日本へ行きたいです。",
          "zh": "还想再去日本。",
          "focus": ["また"],
          "zhFocus": ["再"]
        },
        {
          "ja": "また電話します。",
          "zh": "我会再打电话。",
          "focus": ["また"],
          "zhFocus": ["再"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-626",
      "jlpt": "N5",
      "headword": "まだ",
      "source_form": "まだ",
      "variants": [
        "まだ"
      ],
      "reading": "まだ",
      "reading_variants": [
        "まだ"
      ],
      "romaji": "mada",
      "part_of_speech": "adverb",
      "meaning_zh": "还；尚未",
      "senses_zh": [
        "还",
        "尚未"
      ],
      "kanji_readings": [],
      "examples": [
        {
          "ja": "まだ時間があります。",
          "zh": "还有时间。",
          "focus": ["まだ"],
          "zhFocus": ["还"]
        },
        {
          "ja": "宿題はまだ終わっていません。",
          "zh": "作业还没做完。",
          "focus": ["まだ"],
          "zhFocus": ["还"]
        },
        {
          "ja": "まだ帰りません。",
          "zh": "还不回去。",
          "focus": ["まだ"],
          "zhFocus": ["还"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-627",
      "jlpt": "N5",
      "headword": "町",
      "source_form": "町",
      "variants": [
        "町"
      ],
      "reading": "まち",
      "reading_variants": [
        "まち"
      ],
      "romaji": "machi",
      "part_of_speech": "noun",
      "meaning_zh": "城镇；街道",
      "senses_zh": [
        "城镇",
        "街道"
      ],
      "kanji_readings": [
        {
          "form": "町",
          "reading": "まち"
        }
      ],
      "examples": [
        {
          "ja": "町へ行きます。",
          "zh": "去城镇。",
          "focus": ["町"],
          "zhFocus": ["城镇"]
        },
        {
          "ja": "この町は静かです。",
          "zh": "这个城镇很安静。",
          "focus": ["町"],
          "zhFocus": ["城镇"]
        },
        {
          "ja": "町で買い物をします。",
          "zh": "在街上买东西。",
          "focus": ["町"],
          "zhFocus": ["街"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-628",
      "jlpt": "N5",
      "headword": "待つ",
      "source_form": "待つ",
      "variants": [
        "待つ"
      ],
      "reading": "まつ",
      "reading_variants": [
        "まつ"
      ],
      "romaji": "matsu",
      "part_of_speech": "verb",
      "meaning_zh": "等待",
      "kanji_readings": [
        {
          "form": "待つ",
          "reading": "まつ"
        }
      ],
      "examples": [
        {
          "ja": "駅で友達を待ちます。",
          "zh": "在车站等朋友。",
          "focus": ["待ち"],
          "zhFocus": ["等"]
        },
        {
          "ja": "少し待ってください。",
          "zh": "请等一下。",
          "focus": ["待っ"],
          "zhFocus": ["等"]
        },
        {
          "ja": "バスを十分待ちました。",
          "zh": "等了十分钟公交车。",
          "focus": ["待ち"],
          "zhFocus": ["等"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-629",
      "jlpt": "N5",
      "headword": "まっすぐ",
      "source_form": "まっすぐ",
      "variants": [
        "まっすぐ"
      ],
      "reading": "まっすぐ",
      "reading_variants": [
        "まっすぐ"
      ],
      "romaji": "massugu",
      "part_of_speech": "adverb",
      "meaning_zh": "笔直；一直",
      "senses_zh": [
        "笔直",
        "一直"
      ],
      "kanji_readings": [],
      "examples": [
        {
          "ja": "この道をまっすぐ行ってください。",
          "zh": "请沿这条路直走。",
          "focus": ["まっすぐ"],
          "zhFocus": ["直"]
        },
        {
          "ja": "駅までまっすぐ歩きます。",
          "zh": "一直走到车站。",
          "focus": ["まっすぐ"],
          "zhFocus": ["一直"]
        },
        {
          "ja": "線をまっすぐ引きます。",
          "zh": "把线画直。",
          "focus": ["まっすぐ"],
          "zhFocus": ["直"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-630",
      "jlpt": "N5",
      "headword": "マッチ",
      "source_form": "マッチ",
      "variants": [
        "マッチ"
      ],
      "reading": "マッチ",
      "reading_variants": [
        "マッチ"
      ],
      "romaji": "matchi",
      "part_of_speech": "noun",
      "meaning_zh": "火柴",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "マッチで火をつけます。",
          "zh": "用火柴点火。",
          "focus": ["マッチ"],
          "zhFocus": ["火柴"]
        },
        {
          "ja": "マッチを使わないでください。",
          "zh": "请不要用火柴。",
          "focus": ["マッチ"],
          "zhFocus": ["火柴"]
        },
        {
          "ja": "古いマッチがあります。",
          "zh": "有旧火柴。",
          "focus": ["マッチ"],
          "zhFocus": ["火柴"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-631",
      "jlpt": "N5",
      "headword": "窓",
      "source_form": "窓",
      "variants": [
        "窓"
      ],
      "reading": "まど",
      "reading_variants": [
        "まど"
      ],
      "romaji": "mado",
      "part_of_speech": "noun",
      "meaning_zh": "窗户",
      "kanji_readings": [
        {
          "form": "窓",
          "reading": "まど"
        }
      ],
      "examples": [
        {
          "ja": "暑いので窓を開けます。",
          "zh": "因为热，所以打开窗户。",
          "focus": ["窓"],
          "zhFocus": ["窗户"]
        },
        {
          "ja": "出かける前に窓を閉めます。",
          "zh": "出门前关窗。",
          "focus": ["窓"],
          "zhFocus": ["窗"]
        },
        {
          "ja": "窓から外を見ます。",
          "zh": "从窗户向外看。",
          "focus": ["窓"],
          "zhFocus": ["窗户"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-632",
      "jlpt": "N5",
      "headword": "丸い",
      "source_form": "丸い; 円い",
      "variants": [
        "丸い",
        "円い"
      ],
      "reading": "まるい",
      "reading_variants": [
        "まるい"
      ],
      "romaji": "marui",
      "part_of_speech": "i-adjective",
      "meaning_zh": "圆的",
      "kanji_readings": [
        {
          "form": "丸い",
          "reading": "まるい"
        },
        {
          "form": "円い",
          "reading": "まるい"
        }
      ],
      "examples": [
        {
          "ja": "このテーブルは丸いです。",
          "zh": "这张桌子是圆的。",
          "focus": ["丸い"],
          "zhFocus": ["圆"]
        },
        {
          "ja": "今夜は月が丸く見えます。",
          "zh": "今晚的月亮看起来很圆。",
          "focus": ["丸く"],
          "zhFocus": ["圆"]
        },
        {
          "ja": "ボールは丸いです。",
          "zh": "球是圆的。",
          "focus": ["丸い"],
          "zhFocus": ["圆"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-633",
      "jlpt": "N5",
      "headword": "万",
      "source_form": "万",
      "variants": [
        "万"
      ],
      "reading": "まん",
      "reading_variants": [
        "まん"
      ],
      "romaji": "man",
      "part_of_speech": "numeral",
      "meaning_zh": "一万",
      "kanji_readings": [
        {
          "form": "万",
          "reading": "まん"
        }
      ],
      "examples": [
        {
          "ja": "この時計は一万円です。",
          "zh": "这块表一万日元。",
          "focus": ["万"],
          "zhFocus": ["万"]
        },
        {
          "ja": "この町には一万人住んでいます。",
          "zh": "这座城镇住着一万人。",
          "focus": ["万"],
          "zhFocus": ["万"]
        },
        {
          "ja": "一万は千の十倍です。",
          "zh": "一万是一千的十倍。",
          "focus": ["万"],
          "zhFocus": ["万"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-634",
      "jlpt": "N5",
      "headword": "万年筆",
      "source_form": "万年筆",
      "variants": [
        "万年筆"
      ],
      "reading": "まんねんひつ",
      "reading_variants": [
        "まんねんひつ"
      ],
      "romaji": "mannenhitsu",
      "part_of_speech": "noun",
      "meaning_zh": "钢笔",
      "kanji_readings": [
        {
          "form": "万年筆",
          "reading": "まんねんひつ"
        }
      ],
      "examples": [
        {
          "ja": "誕生日に万年筆をもらいました。",
          "zh": "生日时收到了一支钢笔。",
          "focus": ["万年筆"],
          "zhFocus": ["钢笔"]
        },
        {
          "ja": "万年筆で書くのは難しいです。",
          "zh": "用钢笔写字很难。",
          "focus": ["万年筆"],
          "zhFocus": ["钢笔"]
        },
        {
          "ja": "万年筆で手紙を書きます。",
          "zh": "用钢笔写信。",
          "focus": ["万年筆"],
          "zhFocus": ["钢笔"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-635",
      "jlpt": "N5",
      "headword": "磨く",
      "source_form": "磨く",
      "variants": [
        "磨く"
      ],
      "reading": "みがく",
      "reading_variants": [
        "みがく"
      ],
      "romaji": "migaku",
      "part_of_speech": "verb",
      "meaning_zh": "刷；磨；擦亮",
      "kanji_readings": [
        {
          "form": "磨く",
          "reading": "みがく"
        }
      ],
      "examples": [
        {
          "ja": "朝、歯を磨きます。",
          "zh": "早上刷牙。",
          "focus": ["磨き"],
          "zhFocus": ["刷"]
        },
        {
          "ja": "靴をきれいに磨きました。",
          "zh": "把鞋擦干净了。",
          "focus": ["磨き"],
          "zhFocus": ["擦"]
        },
        {
          "ja": "寝る前に歯を磨いてください。",
          "zh": "睡前请刷牙。",
          "focus": ["磨い"],
          "zhFocus": ["刷"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-636",
      "jlpt": "N5",
      "headword": "右",
      "source_form": "右",
      "variants": [
        "右"
      ],
      "reading": "みぎ",
      "reading_variants": [
        "みぎ"
      ],
      "romaji": "migi",
      "part_of_speech": "noun",
      "meaning_zh": "右；右边",
      "kanji_readings": [
        {
          "form": "右",
          "reading": "みぎ"
        }
      ],
      "examples": [
        {
          "ja": "右に曲がってください。",
          "zh": "请向右转。",
          "focus": ["右"],
          "zhFocus": ["右"]
        },
        {
          "ja": "右に銀行があります。",
          "zh": "右边有银行。",
          "focus": ["右"],
          "zhFocus": ["右边"]
        },
        {
          "ja": "右手を上げてください。",
          "zh": "请举右手。",
          "focus": ["右"],
          "zhFocus": ["右"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-637",
      "jlpt": "N5",
      "headword": "短い",
      "source_form": "短い",
      "variants": [
        "短い"
      ],
      "reading": "みじかい",
      "reading_variants": [
        "みじかい"
      ],
      "romaji": "mijikai",
      "part_of_speech": "i-adjective",
      "meaning_zh": "短的",
      "kanji_readings": [
        {
          "form": "短い",
          "reading": "みじかい"
        }
      ],
      "examples": [
        {
          "ja": "弟は髪が短いです。",
          "zh": "弟弟的头发很短。",
          "focus": ["短い"],
          "zhFocus": ["短"]
        },
        {
          "ja": "この鉛筆は短いです。",
          "zh": "这支铅笔很短。",
          "focus": ["短い"],
          "zhFocus": ["短"]
        },
        {
          "ja": "冬は昼が短いです。",
          "zh": "冬天白昼很短。",
          "focus": ["短い"],
          "zhFocus": ["短"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-638",
      "jlpt": "N5",
      "headword": "水",
      "source_form": "水",
      "variants": [
        "水"
      ],
      "reading": "みず",
      "reading_variants": [
        "みず"
      ],
      "romaji": "mizu",
      "part_of_speech": "noun",
      "meaning_zh": "水",
      "kanji_readings": [
        {
          "form": "水",
          "reading": "みず"
        }
      ],
      "examples": [
        {
          "ja": "この川の水はきれいです。",
          "zh": "这条河的水很清。",
          "focus": ["水"],
          "zhFocus": ["水"]
        },
        {
          "ja": "すみません、お水を一杯ください。",
          "zh": "不好意思，请给我一杯水。",
          "focus": ["水"],
          "zhFocus": ["水"]
        },
        {
          "ja": "お風呂の水が冷たいです。",
          "zh": "洗澡水很凉。",
          "focus": ["水"],
          "zhFocus": ["水"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-639",
      "jlpt": "N5",
      "headword": "店",
      "source_form": "店",
      "variants": [
        "店"
      ],
      "reading": "みせ",
      "reading_variants": [
        "みせ"
      ],
      "romaji": "mise",
      "part_of_speech": "noun",
      "meaning_zh": "商店；店铺",
      "kanji_readings": [
        {
          "form": "店",
          "reading": "みせ"
        }
      ],
      "examples": [
        {
          "ja": "店へ行きます。",
          "zh": "去商店。",
          "focus": ["店"],
          "zhFocus": ["商店"]
        },
        {
          "ja": "店は駅の近くです。",
          "zh": "商店在车站附近。",
          "focus": ["店"],
          "zhFocus": ["商店"]
        },
        {
          "ja": "店で友達に会います。",
          "zh": "在商店见朋友。",
          "focus": ["店"],
          "zhFocus": ["商店"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-640",
      "jlpt": "N5",
      "headword": "見せる",
      "source_form": "見せる",
      "variants": [
        "見せる"
      ],
      "reading": "みせる",
      "reading_variants": [
        "みせる"
      ],
      "romaji": "miseru",
      "part_of_speech": "verb",
      "meaning_zh": "给……看；出示",
      "kanji_readings": [
        {
          "form": "見せる",
          "reading": "みせる"
        }
      ],
      "examples": [
        {
          "ja": "写真を見せてください。",
          "zh": "请给我看照片。",
          "focus": ["見せ"],
          "zhFocus": ["给", "看"]
        },
        {
          "ja": "先生に宿題を見せます。",
          "zh": "给老师看作业。",
          "focus": ["見せ"],
          "zhFocus": ["给", "看"]
        },
        {
          "ja": "新しい服を友達に見せました。",
          "zh": "给朋友看了新衣服。",
          "focus": ["見せ"],
          "zhFocus": ["给", "看"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-641",
      "jlpt": "N5",
      "headword": "道",
      "source_form": "道",
      "variants": [
        "道"
      ],
      "reading": "みち",
      "reading_variants": [
        "みち"
      ],
      "romaji": "michi",
      "part_of_speech": "noun",
      "meaning_zh": "道路；路；方法",
      "senses_zh": [
        "道路；路",
        "方法"
      ],
      "kanji_readings": [
        {
          "form": "道",
          "reading": "みち"
        }
      ],
      "examples": [
        {
          "ja": "雪で道が白くなりました。",
          "zh": "路因为下雪变白了。",
          "focus": ["道"],
          "zhFocus": ["路"]
        },
        {
          "ja": "道が分かりません。",
          "zh": "不认识路。",
          "focus": ["道"],
          "zhFocus": ["路"]
        },
        {
          "ja": "駅までの道を教えてください。",
          "zh": "请告诉我去车站的路。",
          "focus": ["道"],
          "zhFocus": ["路"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-642",
      "jlpt": "N5",
      "headword": "三日",
      "source_form": "三日",
      "variants": [
        "三日"
      ],
      "reading": "みっか",
      "reading_variants": [
        "みっか"
      ],
      "romaji": "mikka",
      "part_of_speech": "noun",
      "meaning_zh": "三号；三天",
      "senses_zh": [
        "三号",
        "三天"
      ],
      "kanji_readings": [
        {
          "form": "三日",
          "reading": "みっか"
        }
      ],
      "examples": [
        {
          "ja": "三日に会いましょう。",
          "zh": "三号见吧。",
          "focus": ["三日"],
          "zhFocus": ["三号"]
        },
        {
          "ja": "三日は休みです。",
          "zh": "三号休息。",
          "focus": ["三日"],
          "zhFocus": ["三号"]
        },
        {
          "ja": "三日に日本へ行きます。",
          "zh": "三号去日本。",
          "focus": ["三日"],
          "zhFocus": ["三号"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-643",
      "jlpt": "N5",
      "headword": "三つ",
      "source_form": "三つ",
      "variants": [
        "三つ"
      ],
      "reading": "みっつ",
      "reading_variants": [
        "みっつ"
      ],
      "romaji": "mittsu",
      "part_of_speech": "numeral/counter",
      "meaning_zh": "三个",
      "kanji_readings": [
        {
          "form": "三つ",
          "reading": "みっつ"
        }
      ],
      "examples": [
        {
          "ja": "箱が三つあります。",
          "zh": "有三个盒子。",
          "focus": ["三つ"],
          "zhFocus": ["三个"]
        },
        {
          "ja": "三つください。",
          "zh": "请给我三个。",
          "focus": ["三つ"],
          "zhFocus": ["三个"]
        },
        {
          "ja": "三つの言葉を覚えます。",
          "zh": "记三个词。",
          "focus": ["三つ"],
          "zhFocus": ["三个"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-644",
      "jlpt": "N5",
      "headword": "緑",
      "source_form": "緑",
      "variants": [
        "緑"
      ],
      "reading": "みどり",
      "reading_variants": [
        "みどり"
      ],
      "romaji": "midori",
      "part_of_speech": "noun",
      "meaning_zh": "绿色",
      "kanji_readings": [
        {
          "form": "緑",
          "reading": "みどり"
        }
      ],
      "examples": [
        {
          "ja": "緑の木が多いです。",
          "zh": "绿色的树很多。",
          "focus": ["緑"],
          "zhFocus": ["绿色"]
        },
        {
          "ja": "緑が好きです。",
          "zh": "我喜欢绿色。",
          "focus": ["緑"],
          "zhFocus": ["绿色"]
        },
        {
          "ja": "この町は緑が多いです。",
          "zh": "这个城镇绿化很好。",
          "focus": ["緑"],
          "zhFocus": ["绿"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-645",
      "merged_source_ids": ["n4-629"],
      "jlpt": "N5",
      "headword": "皆さん",
      "source_form": "皆さん",
      "variants": [
        "皆さん"
      ],
      "reading": "みなさん",
      "reading_variants": [
        "みなさん"
      ],
      "romaji": "minasan",
      "part_of_speech": "noun",
      "meaning_zh": "大家；各位",
      "kanji_readings": [
        {
          "form": "皆さん",
          "reading": "みなさん"
        }
      ],
      "examples": [
        {
          "ja": "皆さん、おはようございます。",
          "zh": "大家早上好。",
          "focus": ["皆さん"],
          "zhFocus": ["大家"]
        },
        {
          "ja": "皆さんは学生ですか。",
          "zh": "大家是学生吗？",
          "focus": ["皆さん"],
          "zhFocus": ["大家"]
        },
        {
          "ja": "皆さん、聞いてください。",
          "zh": "各位，请听。",
          "focus": ["皆さん"],
          "zhFocus": ["各位"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-646",
      "jlpt": "N5",
      "headword": "南",
      "source_form": "南",
      "variants": [
        "南"
      ],
      "reading": "みなみ",
      "reading_variants": [
        "みなみ"
      ],
      "romaji": "minami",
      "part_of_speech": "noun",
      "meaning_zh": "南；南方",
      "kanji_readings": [
        {
          "form": "南",
          "reading": "みなみ"
        }
      ],
      "examples": [
        {
          "ja": "沖縄は日本の南にあります。",
          "zh": "冲绳位于日本南部。",
          "focus": ["南"],
          "zhFocus": ["南"]
        },
        {
          "ja": "南の空は明るいです。",
          "zh": "南边的天空很明亮。",
          "focus": ["南"],
          "zhFocus": ["南"]
        },
        {
          "ja": "駅の南口で友達を待ちます。",
          "zh": "在车站南口等朋友。",
          "focus": ["南"],
          "zhFocus": ["南"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-647",
      "jlpt": "N5",
      "headword": "耳",
      "source_form": "耳",
      "variants": [
        "耳"
      ],
      "reading": "みみ",
      "reading_variants": [
        "みみ"
      ],
      "romaji": "mimi",
      "part_of_speech": "noun",
      "meaning_zh": "耳朵",
      "kanji_readings": [
        {
          "form": "耳",
          "reading": "みみ"
        }
      ],
      "examples": [
        {
          "ja": "耳が痛いです。",
          "zh": "耳朵疼。",
          "focus": ["耳"],
          "zhFocus": ["耳朵"]
        },
        {
          "ja": "犬は耳がいいです。",
          "zh": "狗的听觉很好。",
          "focus": ["耳"],
          "zhFocus": ["听觉"]
        },
        {
          "ja": "耳をきれいにします。",
          "zh": "清洁耳朵。",
          "focus": ["耳"],
          "zhFocus": ["耳朵"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-648",
      "jlpt": "N5",
      "headword": "見る",
      "source_form": "見る",
      "variants": [
        "見る"
      ],
      "reading": "みる",
      "reading_variants": [
        "みる"
      ],
      "romaji": "miru",
      "part_of_speech": "verb",
      "meaning_zh": "看",
      "kanji_readings": [
        {
          "form": "見る",
          "reading": "みる"
        }
      ],
      "examples": [
        {
          "ja": "映画を見ます。",
          "zh": "看电影。",
          "focus": ["見"],
          "zhFocus": ["看"]
        },
        {
          "ja": "テレビを見ました。",
          "zh": "看了电视。",
          "focus": ["見"],
          "zhFocus": ["看"]
        },
        {
          "ja": "窓から外を見ました。",
          "zh": "从窗户往外看了。",
          "focus": ["見"],
          "zhFocus": ["看"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-649",
      "jlpt": "N5",
      "headword": "みんな",
      "source_form": "みんな",
      "variants": [
        "みんな"
      ],
      "reading": "みんな",
      "reading_variants": [
        "みんな"
      ],
      "romaji": "minna",
      "part_of_speech": "noun",
      "meaning_zh": "大家；全部",
      "senses_zh": [
        "大家",
        "全部"
      ],
      "kanji_readings": [],
      "examples": [
        {
          "ja": "みんなで映画を見ます。",
          "zh": "大家一起看电影。",
          "focus": ["みんな"],
          "zhFocus": ["大家"]
        },
        {
          "ja": "みんな元気です。",
          "zh": "大家都很好。",
          "focus": ["みんな"],
          "zhFocus": ["大家"]
        },
        {
          "ja": "みんな来ました。",
          "zh": "大家都来了。",
          "focus": ["みんな"],
          "zhFocus": ["大家"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-650",
      "jlpt": "N5",
      "headword": "六日",
      "source_form": "六日",
      "variants": [
        "六日"
      ],
      "reading": "むいか",
      "reading_variants": [
        "むいか"
      ],
      "romaji": "muika",
      "part_of_speech": "noun",
      "meaning_zh": "六号；六天",
      "senses_zh": [
        "六号",
        "六天"
      ],
      "kanji_readings": [
        {
          "form": "六日",
          "reading": "むいか"
        }
      ],
      "examples": [
        {
          "ja": "六日に会いましょう。",
          "zh": "六号见吧。",
          "focus": ["六日"],
          "zhFocus": ["六号"]
        },
        {
          "ja": "六日は休みです。",
          "zh": "六号休息。",
          "focus": ["六日"],
          "zhFocus": ["六号"]
        },
        {
          "ja": "六日に日本へ行きます。",
          "zh": "六号去日本。",
          "focus": ["六日"],
          "zhFocus": ["六号"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-651",
      "jlpt": "N5",
      "headword": "向こう",
      "source_form": "向こう",
      "variants": [
        "向こう"
      ],
      "reading": "むこう",
      "reading_variants": [
        "むこう"
      ],
      "romaji": "mukou",
      "part_of_speech": "noun",
      "meaning_zh": "对面；那边",
      "kanji_readings": [
        {
          "form": "向こう",
          "reading": "むこう"
        }
      ],
      "examples": [
        {
          "ja": "駅は道の向こうです。",
          "zh": "车站在路对面。",
          "focus": ["向こう"],
          "zhFocus": ["对面"]
        },
        {
          "ja": "向こうに山が見えます。",
          "zh": "那边看得到山。",
          "focus": ["向こう"],
          "zhFocus": ["那边"]
        },
        {
          "ja": "向こうで友達が待っています。",
          "zh": "朋友在那边等。",
          "focus": ["向こう"],
          "zhFocus": ["那边"]
        }
      ],
      "note_zh": "本条只讲空间上的“那边、对面”；表示交涉对象“对方”的用法在 N4 另行学习。"
    },
    {
      "id": "n5-652",
      "jlpt": "N5",
      "headword": "難しい",
      "source_form": "難しい",
      "variants": [
        "難しい"
      ],
      "reading": "むずかしい",
      "reading_variants": [
        "むずかしい"
      ],
      "romaji": "muzukashii",
      "part_of_speech": "i-adjective",
      "meaning_zh": "难的",
      "kanji_readings": [
        {
          "form": "難しい",
          "reading": "むずかしい"
        }
      ],
      "examples": [
        {
          "ja": "この問題は難しいです。",
          "zh": "这道题很难。",
          "focus": ["難しい"],
          "zhFocus": ["难"]
        },
        {
          "ja": "この漢字は難しいです。",
          "zh": "这个汉字很难。",
          "focus": ["難しい"],
          "zhFocus": ["难"]
        },
        {
          "ja": "この本は私には難しいです。",
          "zh": "这本书对我来说很难。",
          "focus": ["難しい"],
          "zhFocus": ["难"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-653",
      "jlpt": "N5",
      "headword": "六つ",
      "source_form": "六つ",
      "variants": [
        "六つ"
      ],
      "reading": "むっつ",
      "reading_variants": [
        "むっつ"
      ],
      "romaji": "muttsu",
      "part_of_speech": "numeral/counter",
      "meaning_zh": "六个",
      "kanji_readings": [
        {
          "form": "六つ",
          "reading": "むっつ"
        }
      ],
      "examples": [
        {
          "ja": "箱が六つあります。",
          "zh": "有六个盒子。",
          "focus": ["六つ"],
          "zhFocus": ["六个"]
        },
        {
          "ja": "六つください。",
          "zh": "请给我六个。",
          "focus": ["六つ"],
          "zhFocus": ["六个"]
        },
        {
          "ja": "六つの言葉を書きます。",
          "zh": "写六个词。",
          "focus": ["六つ"],
          "zhFocus": ["六个"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-654",
      "jlpt": "N5",
      "headword": "村",
      "source_form": "村",
      "variants": [
        "村"
      ],
      "reading": "むら",
      "reading_variants": [
        "むら"
      ],
      "romaji": "mura",
      "part_of_speech": "noun",
      "meaning_zh": "村庄",
      "kanji_readings": [
        {
          "form": "村",
          "reading": "むら"
        }
      ],
      "examples": [
        {
          "ja": "村へ行きます。",
          "zh": "去村庄。",
          "focus": ["村"],
          "zhFocus": ["村庄"]
        },
        {
          "ja": "祖父は小さい村に住んでいます。",
          "zh": "爷爷住在一个小村子里。",
          "focus": ["村"],
          "zhFocus": ["村子"]
        },
        {
          "ja": "村の皆さんはとても親切です。",
          "zh": "村里的大家都很亲切。",
          "focus": ["村"],
          "zhFocus": ["村"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-655",
      "jlpt": "N5",
      "headword": "目",
      "source_form": "目",
      "variants": [
        "目"
      ],
      "reading": "め",
      "reading_variants": [
        "め"
      ],
      "romaji": "me",
      "part_of_speech": "noun",
      "meaning_zh": "眼睛",
      "kanji_readings": [
        {
          "form": "目",
          "reading": "め"
        }
      ],
      "examples": [
        {
          "ja": "目が痛いです。",
          "zh": "眼睛疼。",
          "focus": ["目"],
          "zhFocus": ["眼睛"]
        },
        {
          "ja": "目を閉じてください。",
          "zh": "请闭上眼睛。",
          "focus": ["目"],
          "zhFocus": ["眼睛"]
        },
        {
          "ja": "大きい目ですね。",
          "zh": "眼睛真大呢。",
          "focus": ["目"],
          "zhFocus": ["眼睛"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-656",
      "jlpt": "N5",
      "headword": "メートル",
      "source_form": "メートル",
      "variants": [
        "メートル"
      ],
      "reading": "メートル",
      "reading_variants": [
        "メートル"
      ],
      "romaji": "meetoru",
      "part_of_speech": "noun",
      "meaning_zh": "米",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "ここから駅まで百メートルです。",
          "zh": "从这里到车站有一百米。",
          "focus": ["メートル"],
          "zhFocus": ["米"]
        },
        {
          "ja": "十メートル泳ぎます。",
          "zh": "游十米。",
          "focus": ["メートル"],
          "zhFocus": ["米"]
        },
        {
          "ja": "この道は幅が五メートルです。",
          "zh": "这条路宽五米。",
          "focus": ["メートル"],
          "zhFocus": ["米"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-657",
      "jlpt": "N5",
      "headword": "眼鏡",
      "source_form": "眼鏡",
      "variants": [
        "眼鏡"
      ],
      "reading": "めがね",
      "reading_variants": [
        "めがね"
      ],
      "romaji": "megane",
      "part_of_speech": "noun",
      "meaning_zh": "眼镜",
      "kanji_readings": [
        {
          "form": "眼鏡",
          "reading": "めがね"
        }
      ],
      "examples": [
        {
          "ja": "眼鏡をかけています。",
          "zh": "戴着眼镜。",
          "focus": ["眼鏡"],
          "zhFocus": ["眼镜"]
        },
        {
          "ja": "新しい眼鏡を買いました。",
          "zh": "买了新眼镜。",
          "focus": ["眼鏡"],
          "zhFocus": ["眼镜"]
        },
        {
          "ja": "眼鏡を外してください。",
          "zh": "请摘下眼镜。",
          "focus": ["眼鏡"],
          "zhFocus": ["眼镜"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-658",
      "jlpt": "N5",
      "headword": "もう",
      "source_form": "もう",
      "variants": [
        "もう"
      ],
      "reading": "もう",
      "reading_variants": [
        "もう"
      ],
      "romaji": "mou",
      "part_of_speech": "adverb",
      "meaning_zh": "已经；再；还",
      "senses_zh": [
        "已经",
        "再；还"
      ],
      "kanji_readings": [],
      "examples": [
        {
          "ja": "もう宿題をしました。",
          "zh": "已经做作业了。",
          "focus": ["もう"],
          "zhFocus": ["已经"]
        },
        {
          "ja": "もう一度、ゆっくり読んでください。",
          "zh": "请再慢慢读一遍。",
          "focus": ["もう"],
          "zhFocus": ["再"]
        },
        {
          "ja": "もう少し待ってください。",
          "zh": "请再等一下。",
          "focus": ["もう"],
          "zhFocus": ["再"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-659",
      "jlpt": "N5",
      "headword": "木曜日",
      "source_form": "木曜日",
      "variants": [
        "木曜日"
      ],
      "reading": "もくようび",
      "reading_variants": [
        "もくようび"
      ],
      "romaji": "mokuyoubi",
      "part_of_speech": "noun",
      "meaning_zh": "星期四",
      "kanji_readings": [
        {
          "form": "木曜日",
          "reading": "もくようび"
        }
      ],
      "examples": [
        {
          "ja": "木曜日に学校へ行きます。",
          "zh": "星期四去学校。",
          "focus": ["木曜日"],
          "zhFocus": ["星期四"]
        },
        {
          "ja": "木曜日は休みです。",
          "zh": "星期四休息。",
          "focus": ["木曜日"],
          "zhFocus": ["星期四"]
        },
        {
          "ja": "次の木曜日に会いましょう。",
          "zh": "下个星期四见吧。",
          "focus": ["木曜日"],
          "zhFocus": ["星期四"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-660",
      "jlpt": "N5",
      "headword": "もしもし",
      "source_form": "もしもし",
      "variants": [
        "もしもし"
      ],
      "reading": "もしもし",
      "reading_variants": [
        "もしもし"
      ],
      "romaji": "moshimoshi",
      "part_of_speech": "interjection/expression",
      "meaning_zh": "喂（电话用语）",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "もしもし、田中です。",
          "zh": "喂，我是田中。",
          "focus": ["もしもし"],
          "zhFocus": ["喂"]
        },
        {
          "ja": "もしもし、聞こえますか。",
          "zh": "喂，听得见吗？",
          "focus": ["もしもし"],
          "zhFocus": ["喂"]
        },
        {
          "ja": "もしもし、今大丈夫ですか。",
          "zh": "喂，现在方便吗？",
          "focus": ["もしもし"],
          "zhFocus": ["喂"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-661",
      "jlpt": "N5",
      "headword": "持つ",
      "source_form": "持つ",
      "variants": [
        "持つ"
      ],
      "reading": "もつ",
      "reading_variants": [
        "もつ"
      ],
      "romaji": "motsu",
      "part_of_speech": "verb",
      "meaning_zh": "拿；持有；拥有",
      "senses_zh": [
        "拿",
        "持有；拥有"
      ],
      "kanji_readings": [
        {
          "form": "持つ",
          "reading": "もつ"
        }
      ],
      "examples": [
        {
          "ja": "かばんを持っています。",
          "zh": "拿着包。",
          "focus": ["持っ"],
          "zhFocus": ["拿"]
        },
        {
          "ja": "傘を持って行きます。",
          "zh": "带伞去。",
          "focus": ["持っ"],
          "zhFocus": ["带"]
        },
        {
          "ja": "重い荷物を持ちました。",
          "zh": "拿了重行李。",
          "focus": ["持ち"],
          "zhFocus": ["拿"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-662",
      "jlpt": "N5",
      "headword": "もっと",
      "source_form": "もっと",
      "variants": [
        "もっと"
      ],
      "reading": "もっと",
      "reading_variants": [
        "もっと"
      ],
      "romaji": "motto",
      "part_of_speech": "adverb",
      "meaning_zh": "更；更加",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "もっと水をください。",
          "zh": "请再给我一些水。",
          "focus": ["もっと"],
          "zhFocus": ["再"]
        },
        {
          "ja": "もっと勉強します。",
          "zh": "我要更加努力学习。",
          "focus": ["もっと"],
          "zhFocus": ["更加"]
        },
        {
          "ja": "もっとゆっくり話してください。",
          "zh": "请说得再慢一点。",
          "focus": ["もっと"],
          "zhFocus": ["再"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-663",
      "jlpt": "N5",
      "headword": "物",
      "source_form": "物",
      "variants": [
        "物"
      ],
      "reading": "もの",
      "reading_variants": [
        "もの"
      ],
      "romaji": "mono",
      "part_of_speech": "noun",
      "meaning_zh": "东西；物品",
      "kanji_readings": [
        {
          "form": "物",
          "reading": "もの"
        }
      ],
      "examples": [
        {
          "ja": "机の上に物があります。",
          "zh": "桌子上有东西。",
          "focus": ["物"],
          "zhFocus": ["东西"]
        },
        {
          "ja": "大切な物をなくしました。",
          "zh": "弄丢了重要的东西。",
          "focus": ["物"],
          "zhFocus": ["东西"]
        },
        {
          "ja": "甘い物が好きです。",
          "zh": "喜欢甜的东西。",
          "focus": ["物"],
          "zhFocus": ["东西"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-664",
      "jlpt": "N5",
      "headword": "門",
      "source_form": "門",
      "variants": [
        "門"
      ],
      "reading": "もん",
      "reading_variants": [
        "もん"
      ],
      "romaji": "mon",
      "part_of_speech": "noun",
      "meaning_zh": "门；大门",
      "kanji_readings": [
        {
          "form": "門",
          "reading": "もん"
        }
      ],
      "examples": [
        {
          "ja": "学校の門は八時に開きます。",
          "zh": "学校大门八点打开。",
          "focus": ["門"],
          "zhFocus": ["大门"]
        },
        {
          "ja": "門の前で友達を待ちます。",
          "zh": "在大门前等朋友。",
          "focus": ["門"],
          "zhFocus": ["大门"]
        },
        {
          "ja": "夜は門を閉めます。",
          "zh": "晚上关大门。",
          "focus": ["門"],
          "zhFocus": ["大门"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-665",
      "jlpt": "N5",
      "headword": "問題",
      "source_form": "問題",
      "variants": [
        "問題"
      ],
      "reading": "もんだい",
      "reading_variants": [
        "もんだい"
      ],
      "romaji": "mondai",
      "part_of_speech": "noun",
      "meaning_zh": "问题；题目",
      "senses_zh": [
        "问题",
        "题目"
      ],
      "kanji_readings": [
        {
          "form": "問題",
          "reading": "もんだい"
        }
      ],
      "examples": [
        {
          "ja": "この問題の答えを教えてください。",
          "zh": "请告诉我这道题的答案。",
          "focus": ["問題"],
          "zhFocus": ["题"]
        },
        {
          "ja": "問題に答えてください。",
          "zh": "请回答问题。",
          "focus": ["問題"],
          "zhFocus": ["问题"]
        },
        {
          "ja": "問題が分かりません。",
          "zh": "不懂这个题。",
          "focus": ["問題"],
          "zhFocus": ["题"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-666",
      "jlpt": "N5",
      "headword": "～屋",
      "source_form": "～屋",
      "variants": [
        "～屋"
      ],
      "reading": "～や",
      "reading_variants": [
        "～や"
      ],
      "romaji": "~ya",
      "part_of_speech": "suffix/pattern",
      "meaning_zh": "……店；……店铺",
      "kanji_readings": [
        {
          "form": "～屋",
          "reading": "～や"
        }
      ],
      "examples": [
        {
          "ja": "本屋で本を買います。",
          "zh": "在书店买书。",
          "focus": ["屋"],
          "zhFocus": ["店"]
        },
        {
          "ja": "花屋は駅の近くです。",
          "zh": "花店在车站附近。",
          "focus": ["屋"],
          "zhFocus": ["店"]
        },
        {
          "ja": "パン屋は朝七時から開いています。",
          "zh": "面包店早上七点开门。",
          "focus": ["屋"],
          "zhFocus": ["店"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-667",
      "jlpt": "N5",
      "headword": "八百屋",
      "source_form": "八百屋",
      "variants": [
        "八百屋"
      ],
      "reading": "やおや",
      "reading_variants": [
        "やおや"
      ],
      "romaji": "yaoya",
      "part_of_speech": "noun",
      "meaning_zh": "蔬菜水果店",
      "kanji_readings": [
        {
          "form": "八百屋",
          "reading": "やおや"
        }
      ],
      "examples": [
        {
          "ja": "八百屋で野菜を買います。",
          "zh": "在蔬菜水果店买蔬菜。",
          "focus": ["八百屋"],
          "zhFocus": ["蔬菜水果店"]
        },
        {
          "ja": "八百屋は駅の近くです。",
          "zh": "蔬菜水果店在车站附近。",
          "focus": ["八百屋"],
          "zhFocus": ["蔬菜水果店"]
        },
        {
          "ja": "母は八百屋へ行きました。",
          "zh": "母亲去了蔬菜水果店。",
          "focus": ["八百屋"],
          "zhFocus": ["蔬菜水果店"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-668",
      "jlpt": "N5",
      "headword": "野菜",
      "source_form": "野菜",
      "variants": [
        "野菜"
      ],
      "reading": "やさい",
      "reading_variants": [
        "やさい"
      ],
      "romaji": "yasai",
      "part_of_speech": "noun",
      "meaning_zh": "蔬菜",
      "kanji_readings": [
        {
          "form": "野菜",
          "reading": "やさい"
        }
      ],
      "examples": [
        {
          "ja": "毎日野菜をたくさん食べましょう。",
          "zh": "每天多吃蔬菜吧。",
          "focus": ["野菜"],
          "zhFocus": ["蔬菜"]
        },
        {
          "ja": "弟は野菜が嫌いです。",
          "zh": "弟弟不喜欢蔬菜。",
          "focus": ["野菜"],
          "zhFocus": ["蔬菜"]
        },
        {
          "ja": "八百屋で野菜を買いました。",
          "zh": "在蔬菜店买了蔬菜。",
          "focus": ["野菜"],
          "zhFocus": [{"after": "在蔬菜店买了", "text": "蔬菜"}]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-669",
      "jlpt": "N5",
      "headword": "易しい",
      "source_form": "易しい",
      "variants": [
        "易しい"
      ],
      "reading": "やさしい",
      "reading_variants": [
        "やさしい"
      ],
      "romaji": "yasashii",
      "part_of_speech": "i-adjective",
      "meaning_zh": "简单的；容易的",
      "kanji_readings": [
        {
          "form": "易しい",
          "reading": "やさしい"
        }
      ],
      "examples": [
        {
          "ja": "この問題は易しいです。",
          "zh": "这道题很简单。",
          "focus": ["易しい"],
          "zhFocus": ["简单"]
        },
        {
          "ja": "易しい言葉で話してください。",
          "zh": "请用简单的词语说。",
          "focus": ["易しい"],
          "zhFocus": ["简单"]
        },
        {
          "ja": "今日の試験は易しかったです。",
          "zh": "今天的考试很简单。",
          "focus": ["易しかっ"],
          "zhFocus": ["简单"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-670",
      "jlpt": "N5",
      "headword": "安い",
      "source_form": "安い",
      "variants": [
        "安い"
      ],
      "reading": "やすい",
      "reading_variants": [
        "やすい"
      ],
      "romaji": "yasui",
      "part_of_speech": "i-adjective",
      "meaning_zh": "便宜的",
      "kanji_readings": [
        {
          "form": "安い",
          "reading": "やすい"
        }
      ],
      "examples": [
        {
          "ja": "この靴は安いです。",
          "zh": "这双鞋很便宜。",
          "focus": ["安い"],
          "zhFocus": ["便宜"]
        },
        {
          "ja": "あの店は野菜が安いです。",
          "zh": "那家店的蔬菜很便宜。",
          "focus": ["安い"],
          "zhFocus": ["便宜"]
        },
        {
          "ja": "このペンは百円で安かったです。",
          "zh": "这支笔只要一百日元，很便宜。",
          "focus": ["安かっ"],
          "zhFocus": ["便宜"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-671",
      "jlpt": "N5",
      "headword": "休み",
      "source_form": "休み",
      "variants": [
        "休み"
      ],
      "reading": "やすみ",
      "reading_variants": [
        "やすみ"
      ],
      "romaji": "yasumi",
      "part_of_speech": "noun",
      "meaning_zh": "休息；假期；缺席",
      "senses_zh": [
        "休息",
        "假期",
        "缺席"
      ],
      "kanji_readings": [
        {
          "form": "休み",
          "reading": "やすみ"
        }
      ],
      "examples": [
        {
          "ja": "明日は休みです。",
          "zh": "明天休息。",
          "focus": ["休み"],
          "zhFocus": ["休息"]
        },
        {
          "ja": "休みに旅行します。",
          "zh": "假期去旅行。",
          "focus": ["休み"],
          "zhFocus": ["假期"]
        },
        {
          "ja": "今日は学校が休みです。",
          "zh": "今天学校放假。",
          "focus": ["休み"],
          "zhFocus": ["放假"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-672",
      "jlpt": "N5",
      "headword": "休む",
      "source_form": "休む",
      "variants": [
        "休む"
      ],
      "reading": "やすむ",
      "reading_variants": [
        "やすむ"
      ],
      "romaji": "yasumu",
      "part_of_speech": "verb",
      "meaning_zh": "休息；请假；缺席",
      "senses_zh": [
        "休息",
        "请假；缺席"
      ],
      "kanji_readings": [
        {
          "form": "休む",
          "reading": "やすむ"
        }
      ],
      "examples": [
        {
          "ja": "今日は学校を休みます。",
          "zh": "今天不去学校。",
          "focus": ["休み"],
          "zhFocus": ["不去"]
        },
        {
          "ja": "少し休んでください。",
          "zh": "请休息一下。",
          "focus": ["休ん"],
          "zhFocus": ["休息"]
        },
        {
          "ja": "日曜日にゆっくり休みました。",
          "zh": "星期天好好休息了。",
          "focus": ["休み"],
          "zhFocus": ["休息"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-673",
      "jlpt": "N5",
      "headword": "八つ",
      "source_form": "八つ",
      "variants": [
        "八つ"
      ],
      "reading": "やっつ",
      "reading_variants": [
        "やっつ"
      ],
      "romaji": "yattsu",
      "part_of_speech": "numeral/counter",
      "meaning_zh": "八个",
      "kanji_readings": [
        {
          "form": "八つ",
          "reading": "やっつ"
        }
      ],
      "examples": [
        {
          "ja": "八つの部屋があります。",
          "zh": "有八个房间。",
          "focus": ["八つ"],
          "zhFocus": ["八个"]
        },
        {
          "ja": "八つください。",
          "zh": "请给我八个。",
          "focus": ["八つ"],
          "zhFocus": ["八个"]
        },
        {
          "ja": "八つの名前を覚えました。",
          "zh": "记住了八个名字。",
          "focus": ["八つ"],
          "zhFocus": ["八个"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-674",
      "jlpt": "N5",
      "headword": "山",
      "source_form": "山",
      "variants": [
        "山"
      ],
      "reading": "やま",
      "reading_variants": [
        "やま"
      ],
      "romaji": "yama",
      "part_of_speech": "noun",
      "meaning_zh": "山",
      "kanji_readings": [
        {
          "form": "山",
          "reading": "やま"
        }
      ],
      "examples": [
        {
          "ja": "窓から山が見えます。",
          "zh": "从窗户能看到山。",
          "focus": ["山"],
          "zhFocus": ["山"]
        },
        {
          "ja": "夏に友達と山に登りました。",
          "zh": "夏天和朋友去爬了山。",
          "focus": ["山"],
          "zhFocus": ["山"]
        },
        {
          "ja": "日本で一番高い山は富士山です。",
          "zh": "日本最高的山是富士山。",
          "focus": ["山"],
          "zhFocus": ["山"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-675",
      "jlpt": "N5",
      "headword": "やる",
      "source_form": "やる",
      "variants": [
        "やる"
      ],
      "reading": "やる",
      "reading_variants": [
        "やる"
      ],
      "romaji": "yaru",
      "part_of_speech": "verb",
      "meaning_zh": "做；给（晚辈、动物、植物等）",
      "senses_zh": [
        "做",
        "给（晚辈、动物、植物等）"
      ],
      "kanji_readings": [],
      "examples": [
        {
          "ja": "宿題をやります。",
          "zh": "做作业。",
          "focus": ["やり"],
          "zhFocus": ["做"]
        },
        {
          "ja": "犬に水をやります。",
          "zh": "给狗喂水。",
          "focus": ["やり"],
          "zhFocus": ["给"]
        },
        {
          "ja": "明日またやりましょう。",
          "zh": "明天再做吧。",
          "focus": ["やり"],
          "zhFocus": ["做"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-676",
      "jlpt": "N5",
      "headword": "夕方",
      "source_form": "夕方",
      "variants": [
        "夕方"
      ],
      "reading": "ゆうがた",
      "reading_variants": [
        "ゆうがた"
      ],
      "romaji": "yuugata",
      "part_of_speech": "noun",
      "meaning_zh": "傍晚",
      "kanji_readings": [
        {
          "form": "夕方",
          "reading": "ゆうがた"
        }
      ],
      "examples": [
        {
          "ja": "夕方、家に帰ります。",
          "zh": "傍晚回家。",
          "focus": ["夕方"],
          "zhFocus": ["傍晚"]
        },
        {
          "ja": "夕方になると空が赤くなります。",
          "zh": "到了傍晚，天空会变红。",
          "focus": ["夕方"],
          "zhFocus": ["傍晚"]
        },
        {
          "ja": "今日の夕方、買い物へ行きます。",
          "zh": "今天傍晚去买东西。",
          "focus": ["夕方"],
          "zhFocus": ["傍晚"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-677",
      "jlpt": "N5",
      "headword": "夕飯",
      "source_form": "夕飯",
      "variants": [
        "夕飯"
      ],
      "reading": "ゆうはん",
      "reading_variants": [
        "ゆうはん"
      ],
      "romaji": "yuuhan",
      "part_of_speech": "noun",
      "meaning_zh": "晚饭（「夕」＝傍晚）",
      "kanji_readings": [
        {
          "form": "夕飯",
          "reading": "ゆうはん"
        }
      ],
      "examples": [
        {
          "ja": "仕事の帰りに夕飯の材料を買いました。",
          "zh": "下班回家时买了晚饭的食材。",
          "focus": ["夕飯"],
          "zhFocus": ["晚饭"]
        },
        {
          "ja": "夕飯は七時です。",
          "zh": "晚饭是七点。",
          "focus": ["夕飯"],
          "zhFocus": ["晚饭"]
        },
        {
          "ja": "今夜は私が夕飯を作ります。",
          "zh": "今晚由我做晚饭。",
          "focus": ["夕飯"],
          "zhFocus": ["晚饭"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-678",
      "jlpt": "N5",
      "headword": "郵便局",
      "source_form": "郵便局",
      "variants": [
        "郵便局"
      ],
      "reading": "ゆうびんきょく",
      "reading_variants": [
        "ゆうびんきょく"
      ],
      "romaji": "yuubinkyoku",
      "part_of_speech": "noun",
      "meaning_zh": "邮局",
      "kanji_readings": [
        {
          "form": "郵便局",
          "reading": "ゆうびんきょく"
        }
      ],
      "examples": [
        {
          "ja": "郵便局へ行きます。",
          "zh": "去邮局。",
          "focus": ["郵便局"],
          "zhFocus": ["邮局"]
        },
        {
          "ja": "郵便局は駅の近くです。",
          "zh": "邮局在车站附近。",
          "focus": ["郵便局"],
          "zhFocus": ["邮局"]
        },
        {
          "ja": "郵便局で友達に会います。",
          "zh": "在邮局见朋友。",
          "focus": ["郵便局"],
          "zhFocus": ["邮局"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-679",
      "jlpt": "N5",
      "headword": "昨夜",
      "source_form": "昨夜",
      "variants": [
        "昨夜"
      ],
      "reading": "ゆうべ",
      "reading_variants": [
        "ゆうべ"
      ],
      "romaji": "yuube",
      "part_of_speech": "noun",
      "meaning_zh": "昨晚",
      "kanji_readings": [
        {
          "form": "昨夜",
          "reading": "ゆうべ"
        }
      ],
      "examples": [
        {
          "ja": "昨夜、雨が降りました。",
          "zh": "昨晚下雨了。",
          "focus": ["昨夜"],
          "zhFocus": ["昨晚"]
        },
        {
          "ja": "昨夜はよく眠れませんでした。",
          "zh": "昨晚没睡好。",
          "focus": ["昨夜"],
          "zhFocus": ["昨晚"]
        },
        {
          "ja": "昨夜、友達から電話がありました。",
          "zh": "昨晚朋友打来了电话。",
          "focus": ["昨夜"],
          "zhFocus": ["昨晚"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-680",
      "jlpt": "N5",
      "headword": "有名",
      "source_form": "有名",
      "variants": [
        "有名"
      ],
      "reading": "ゆうめい",
      "reading_variants": [
        "ゆうめい"
      ],
      "romaji": "yuumei",
      "part_of_speech": "na-adjective",
      "meaning_zh": "有名的；著名的",
      "kanji_readings": [
        {
          "form": "有名",
          "reading": "ゆうめい"
        }
      ],
      "examples": [
        {
          "ja": "この店は有名です。",
          "zh": "这家店很有名。",
          "focus": ["有名"],
          "zhFocus": ["有名"]
        },
        {
          "ja": "有名な先生に会いました。",
          "zh": "见到了有名的老师。",
          "focus": ["有名"],
          "zhFocus": ["有名"]
        },
        {
          "ja": "京都は有名な町です。",
          "zh": "京都是有名的城市。",
          "focus": ["有名"],
          "zhFocus": ["有名"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-681",
      "jlpt": "N5",
      "headword": "雪",
      "source_form": "雪",
      "variants": [
        "雪"
      ],
      "reading": "ゆき",
      "reading_variants": [
        "ゆき"
      ],
      "romaji": "yuki",
      "part_of_speech": "noun",
      "meaning_zh": "雪",
      "kanji_readings": [
        {
          "form": "雪",
          "reading": "ゆき"
        }
      ],
      "examples": [
        {
          "ja": "昨夜、雪が降りました。",
          "zh": "昨晚下雪了。",
          "focus": ["雪"],
          "zhFocus": ["雪"]
        },
        {
          "ja": "山に白い雪が積もっています。",
          "zh": "山上积着白雪。",
          "focus": ["雪"],
          "zhFocus": ["雪"]
        },
        {
          "ja": "子供たちが雪で遊んでいます。",
          "zh": "孩子们正在玩雪。",
          "focus": ["雪"],
          "zhFocus": ["雪"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-682",
      "jlpt": "N5",
      "headword": "ゆっくり",
      "source_form": "ゆっくりと",
      "variants": [
        "ゆっくり",
        "ゆっくりと"
      ],
      "reading": "ゆっくり",
      "reading_variants": [
        "ゆっくり",
        "ゆっくりと"
      ],
      "romaji": "yukkuri",
      "part_of_speech": "adverb",
      "meaning_zh": "慢慢地；悠闲地",
      "senses_zh": [
        "慢慢地",
        "悠闲地"
      ],
      "kanji_readings": [],
      "examples": [
        {
          "ja": "ゆっくり話してください。",
          "zh": "请慢慢说。",
          "focus": ["ゆっくり"],
          "zhFocus": ["慢慢"]
        },
        {
          "ja": "日曜日は家でゆっくり休みます。",
          "zh": "星期天在家好好休息。",
          "focus": ["ゆっくり"],
          "zhFocus": ["好好"]
        },
        {
          "ja": "公園をゆっくりと歩きました。",
          "zh": "在公园里慢慢地走了一会儿。",
          "focus": ["ゆっくりと"],
          "zhFocus": ["慢慢地"]
        }
      ],
      "note_zh": "「ゆっくり」和「ゆっくりと」都可以作副词；带「と」时语气稍显完整。"
    },
    {
      "id": "n5-683",
      "jlpt": "N5",
      "headword": "八日",
      "source_form": "八日",
      "variants": [
        "八日"
      ],
      "reading": "ようか",
      "reading_variants": [
        "ようか"
      ],
      "romaji": "youka",
      "part_of_speech": "noun",
      "meaning_zh": "八号；八天",
      "senses_zh": [
        "八号",
        "八天"
      ],
      "kanji_readings": [
        {
          "form": "八日",
          "reading": "ようか"
        }
      ],
      "examples": [
        {
          "ja": "八日に会いましょう。",
          "zh": "八号见吧。",
          "focus": ["八日"],
          "zhFocus": ["八号"]
        },
        {
          "ja": "八日は休みです。",
          "zh": "八号休息。",
          "focus": ["八日"],
          "zhFocus": ["八号"]
        },
        {
          "ja": "八日に日本へ行きます。",
          "zh": "八号去日本。",
          "focus": ["八日"],
          "zhFocus": ["八号"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-684",
      "jlpt": "N5",
      "headword": "洋服",
      "source_form": "洋服",
      "variants": [
        "洋服"
      ],
      "reading": "ようふく",
      "reading_variants": [
        "ようふく"
      ],
      "romaji": "youfuku",
      "part_of_speech": "noun",
      "meaning_zh": "（西式）服装；衣服",
      "kanji_readings": [
        {
          "form": "洋服",
          "reading": "ようふく"
        }
      ],
      "examples": [
        {
          "ja": "着物より洋服のほうが楽です。",
          "zh": "比起和服，穿西式衣服更轻松。",
          "focus": ["洋服"],
          "zhFocus": ["衣服"]
        },
        {
          "ja": "洋服を着ます。",
          "zh": "穿衣服。",
          "focus": ["洋服"],
          "zhFocus": ["衣服"]
        },
        {
          "ja": "この店は洋服が多いです。",
          "zh": "这家店衣服很多。",
          "focus": ["洋服"],
          "zhFocus": ["衣服"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-685",
      "jlpt": "N5",
      "headword": "よく",
      "source_form": "よく",
      "variants": [
        "よく"
      ],
      "reading": "よく",
      "reading_variants": [
        "よく"
      ],
      "romaji": "yoku",
      "part_of_speech": "adverb",
      "meaning_zh": "经常；好好地；很会",
      "senses_zh": [
        "经常",
        "好好地",
        "很会"
      ],
      "kanji_readings": [],
      "examples": [
        {
          "ja": "よく映画を見ます。",
          "zh": "经常看电影。",
          "focus": ["よく"],
          "zhFocus": ["经常"]
        },
        {
          "ja": "よく分かりました。",
          "zh": "很明白了。",
          "focus": ["よく"],
          "zhFocus": ["很"]
        },
        {
          "ja": "日本語をよく勉強します。",
          "zh": "好好学习日语。",
          "focus": ["よく"],
          "zhFocus": ["好好"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-686",
      "jlpt": "N5",
      "headword": "横",
      "source_form": "横",
      "variants": [
        "横"
      ],
      "reading": "よこ",
      "reading_variants": [
        "よこ"
      ],
      "romaji": "yoko",
      "part_of_speech": "noun",
      "meaning_zh": "旁边；横向",
      "senses_zh": [
        "旁边",
        "横向"
      ],
      "kanji_readings": [
        {
          "form": "横",
          "reading": "よこ"
        }
      ],
      "examples": [
        {
          "ja": "銀行は駅の横にあります。",
          "zh": "银行在车站旁边。",
          "focus": ["横"],
          "zhFocus": ["旁边"]
        },
        {
          "ja": "横に座ってください。",
          "zh": "请坐在旁边。",
          "focus": ["横"],
          "zhFocus": ["旁边"]
        },
        {
          "ja": "紙を横にしてください。",
          "zh": "请把纸横过来。",
          "focus": ["横"],
          "zhFocus": ["横"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-687",
      "jlpt": "N5",
      "headword": "四日",
      "source_form": "四日",
      "variants": [
        "四日"
      ],
      "reading": "よっか",
      "reading_variants": [
        "よっか"
      ],
      "romaji": "yokka",
      "part_of_speech": "noun",
      "meaning_zh": "四号；四天",
      "senses_zh": [
        "四号",
        "四天"
      ],
      "kanji_readings": [
        {
          "form": "四日",
          "reading": "よっか"
        }
      ],
      "examples": [
        {
          "ja": "四日に会いましょう。",
          "zh": "四号见吧。",
          "focus": ["四日"],
          "zhFocus": ["四号"]
        },
        {
          "ja": "四日は休みです。",
          "zh": "四号休息。",
          "focus": ["四日"],
          "zhFocus": ["四号"]
        },
        {
          "ja": "四日に日本へ行きます。",
          "zh": "四号去日本。",
          "focus": ["四日"],
          "zhFocus": ["四号"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-688",
      "jlpt": "N5",
      "headword": "四つ",
      "source_form": "四つ",
      "variants": [
        "四つ"
      ],
      "reading": "よっつ",
      "reading_variants": [
        "よっつ"
      ],
      "romaji": "yottsu",
      "part_of_speech": "numeral/counter",
      "meaning_zh": "四个",
      "kanji_readings": [
        {
          "form": "四つ",
          "reading": "よっつ"
        }
      ],
      "examples": [
        {
          "ja": "机が四つあります。",
          "zh": "有四张桌子。",
          "focus": ["四つ"],
          "zhFocus": ["四"]
        },
        {
          "ja": "四つください。",
          "zh": "请给我四个。",
          "focus": ["四つ"],
          "zhFocus": ["四个"]
        },
        {
          "ja": "四つの問題に答えます。",
          "zh": "回答四个问题。",
          "focus": ["四つ"],
          "zhFocus": ["四个"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-689",
      "jlpt": "N5",
      "headword": "呼ぶ",
      "source_form": "呼ぶ",
      "variants": [
        "呼ぶ"
      ],
      "reading": "よぶ",
      "reading_variants": [
        "よぶ"
      ],
      "romaji": "yobu",
      "part_of_speech": "verb",
      "meaning_zh": "叫；称呼；邀请",
      "senses_zh": [
        "叫",
        "称呼",
        "邀请"
      ],
      "kanji_readings": [
        {
          "form": "呼ぶ",
          "reading": "よぶ"
        }
      ],
      "examples": [
        {
          "ja": "友達を家に呼びます。",
          "zh": "邀请朋友来家里。",
          "focus": ["呼び"],
          "zhFocus": ["邀请"]
        },
        {
          "ja": "先生を呼んでください。",
          "zh": "请叫老师。",
          "focus": ["呼ん"],
          "zhFocus": ["叫"]
        },
        {
          "ja": "私を名前で呼んでください。",
          "zh": "请叫我的名字。",
          "focus": ["呼ん"],
          "zhFocus": ["叫"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-690",
      "jlpt": "N5",
      "headword": "読む",
      "source_form": "読む",
      "variants": [
        "読む"
      ],
      "reading": "よむ",
      "reading_variants": [
        "よむ"
      ],
      "romaji": "yomu",
      "part_of_speech": "verb",
      "meaning_zh": "读；阅读",
      "kanji_readings": [
        {
          "form": "読む",
          "reading": "よむ"
        }
      ],
      "examples": [
        {
          "ja": "本を読みます。",
          "zh": "读书。",
          "focus": ["読み"],
          "zhFocus": ["读"]
        },
        {
          "ja": "新聞を読みました。",
          "zh": "读了报纸。",
          "focus": ["読み"],
          "zhFocus": ["读"]
        },
        {
          "ja": "毎日、日本語を読みます。",
          "zh": "每天读日语。",
          "focus": ["読み"],
          "zhFocus": ["读"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-691",
      "jlpt": "N5",
      "headword": "夜",
      "source_form": "夜",
      "variants": [
        "夜"
      ],
      "reading": "よる",
      "reading_variants": [
        "よる"
      ],
      "romaji": "yoru",
      "part_of_speech": "noun",
      "meaning_zh": "晚上；夜晚",
      "kanji_readings": [
        {
          "form": "夜",
          "reading": "よる"
        }
      ],
      "examples": [
        {
          "ja": "夜は家で本を読みます。",
          "zh": "晚上在家看书。",
          "focus": ["夜"],
          "zhFocus": ["晚上"]
        },
        {
          "ja": "この町は夜になると静かです。",
          "zh": "这座城镇到了晚上很安静。",
          "focus": ["夜"],
          "zhFocus": ["晚上"]
        },
        {
          "ja": "昨日の夜、星を見ました。",
          "zh": "昨天晚上看了星星。",
          "focus": ["夜"],
          "zhFocus": ["晚上"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-692",
      "jlpt": "N5",
      "headword": "弱い",
      "source_form": "弱い",
      "variants": [
        "弱い"
      ],
      "reading": "よわい",
      "reading_variants": [
        "よわい"
      ],
      "romaji": "yowai",
      "part_of_speech": "i-adjective",
      "meaning_zh": "弱的",
      "kanji_readings": [
        {
          "form": "弱い",
          "reading": "よわい"
        }
      ],
      "examples": [
        {
          "ja": "弟は体が弱いです。",
          "zh": "弟弟身体虚弱。",
          "focus": ["弱い"],
          "zhFocus": ["虚弱"]
        },
        {
          "ja": "今日は風が弱いです。",
          "zh": "今天风很小。",
          "focus": ["弱い"],
          "zhFocus": ["小"]
        },
        {
          "ja": "火が弱いので、もう少し強くしてください。",
          "zh": "火太小了，请再调大一点。",
          "focus": ["弱い"],
          "zhFocus": ["小"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-693",
      "jlpt": "N5",
      "headword": "来月",
      "source_form": "来月",
      "variants": [
        "来月"
      ],
      "reading": "らいげつ",
      "reading_variants": [
        "らいげつ"
      ],
      "romaji": "raigetsu",
      "part_of_speech": "noun",
      "meaning_zh": "下个月",
      "kanji_readings": [
        {
          "form": "来月",
          "reading": "らいげつ"
        }
      ],
      "examples": [
        {
          "ja": "来月から新しい仕事が始まります。",
          "zh": "下个月开始新工作。",
          "focus": ["来月"],
          "zhFocus": ["下个月"]
        },
        {
          "ja": "来月は忙しいです。",
          "zh": "下个月很忙。",
          "focus": ["来月"],
          "zhFocus": ["下个月"]
        },
        {
          "ja": "来月、友達に会います。",
          "zh": "下个月见朋友。",
          "focus": ["来月"],
          "zhFocus": ["下个月"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-694",
      "jlpt": "N5",
      "headword": "来週",
      "source_form": "来週",
      "variants": [
        "来週"
      ],
      "reading": "らいしゅう",
      "reading_variants": [
        "らいしゅう"
      ],
      "romaji": "raishuu",
      "part_of_speech": "noun",
      "meaning_zh": "下周",
      "kanji_readings": [
        {
          "form": "来週",
          "reading": "らいしゅう"
        }
      ],
      "examples": [
        {
          "ja": "来週、テストがあります。",
          "zh": "下周有考试。",
          "focus": ["来週"],
          "zhFocus": ["下周"]
        },
        {
          "ja": "来週は忙しいです。",
          "zh": "下周很忙。",
          "focus": ["来週"],
          "zhFocus": ["下周"]
        },
        {
          "ja": "来週、友達に会います。",
          "zh": "下周见朋友。",
          "focus": ["来週"],
          "zhFocus": ["下周"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-695",
      "jlpt": "N5",
      "headword": "来年",
      "source_form": "来年",
      "variants": [
        "来年"
      ],
      "reading": "らいねん",
      "reading_variants": [
        "らいねん"
      ],
      "romaji": "rainen",
      "part_of_speech": "noun",
      "meaning_zh": "明年",
      "kanji_readings": [
        {
          "form": "来年",
          "reading": "らいねん"
        }
      ],
      "examples": [
        {
          "ja": "来年、大学に入ります。",
          "zh": "明年上大学。",
          "focus": ["来年"],
          "zhFocus": ["明年"]
        },
        {
          "ja": "来年は忙しいです。",
          "zh": "明年很忙。",
          "focus": ["来年"],
          "zhFocus": ["明年"]
        },
        {
          "ja": "来年、友達と旅行します。",
          "zh": "明年和朋友去旅行。",
          "focus": ["来年"],
          "zhFocus": ["明年"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-696",
      "jlpt": "N5",
      "headword": "ラジオ",
      "source_form": "ラジオ",
      "variants": [
        "ラジオ"
      ],
      "reading": "ラジオ",
      "reading_variants": [
        "ラジオ"
      ],
      "romaji": "rajio",
      "part_of_speech": "noun",
      "meaning_zh": "收音机；广播",
      "senses_zh": [
        "收音机",
        "广播"
      ],
      "kanji_readings": [],
      "examples": [
        {
          "ja": "ラジオを聞きます。",
          "zh": "听收音机。",
          "focus": ["ラジオ"],
          "zhFocus": ["收音机"]
        },
        {
          "ja": "毎日、ラジオを聞いています。",
          "zh": "每天听收音机。",
          "focus": ["ラジオ"],
          "zhFocus": ["收音机"]
        },
        {
          "ja": "ラジオが好きです。",
          "zh": "喜欢收音机。",
          "focus": ["ラジオ"],
          "zhFocus": ["收音机"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-697",
      "jlpt": "N5",
      "headword": "ラジカセ",
      "source_form": "ラジオカセ",
      "variants": [
        "ラジカセ",
        "ラジオカセット"
      ],
      "reading": "ラジカセ",
      "reading_variants": [
        "ラジカセ"
      ],
      "romaji": "rajikase",
      "part_of_speech": "noun",
      "meaning_zh": "收录机",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "古いラジカセを弟にあげました。",
          "zh": "把旧收录机给了弟弟。",
          "focus": ["ラジカセ"],
          "zhFocus": ["收录机"]
        },
        {
          "ja": "このラジカセは音がいいです。",
          "zh": "这台收录机音质很好。",
          "focus": ["ラジカセ"],
          "zhFocus": ["收录机"]
        },
        {
          "ja": "ラジカセで音楽を聞きます。",
          "zh": "用收录机听音乐。",
          "focus": ["ラジカセ"],
          "zhFocus": ["收录机"]
        }
      ],
      "note_zh": "「ラジオカセット」的常用简称；原数据中的「ラジオカセ」不是规范词形。"
    },
    {
      "id": "n5-698",
      "jlpt": "N5",
      "headword": "りっぱ",
      "source_form": "りっぱ",
      "variants": [
        "りっぱ"
      ],
      "reading": "りっぱ",
      "reading_variants": [
        "りっぱ"
      ],
      "romaji": "rippa",
      "part_of_speech": "na-adjective",
      "meaning_zh": "出色的；气派的",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "りっぱな建物ですね。",
          "zh": "真是气派的建筑。",
          "focus": ["りっぱ"],
          "zhFocus": ["气派"]
        },
        {
          "ja": "彼はりっぱな先生です。",
          "zh": "他是一位出色的老师。",
          "focus": ["りっぱ"],
          "zhFocus": ["出色"]
        },
        {
          "ja": "りっぱな仕事をしました。",
          "zh": "做了出色的工作。",
          "focus": ["りっぱ"],
          "zhFocus": ["出色"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-699",
      "jlpt": "N5",
      "headword": "留学生",
      "source_form": "留学生",
      "variants": [
        "留学生"
      ],
      "reading": "りゅうがくせい",
      "reading_variants": [
        "りゅうがくせい"
      ],
      "romaji": "ryuugakusei",
      "part_of_speech": "noun",
      "meaning_zh": "留学生",
      "kanji_readings": [
        {
          "form": "留学生",
          "reading": "りゅうがくせい"
        }
      ],
      "examples": [
        {
          "ja": "私の大学には留学生がたくさんいます。",
          "zh": "我们大学有很多留学生。",
          "focus": ["留学生"],
          "zhFocus": ["留学生"]
        },
        {
          "ja": "留学生の友達に日本料理を教えました。",
          "zh": "教留学生朋友做了日本菜。",
          "focus": ["留学生"],
          "zhFocus": ["留学生"]
        },
        {
          "ja": "クラスの留学生は日本語が上手です。",
          "zh": "班里的留学生日语很好。",
          "focus": ["留学生"],
          "zhFocus": ["留学生"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-700",
      "jlpt": "N5",
      "headword": "両親",
      "source_form": "両親",
      "variants": [
        "両親"
      ],
      "reading": "りょうしん",
      "reading_variants": [
        "りょうしん"
      ],
      "romaji": "ryoushin",
      "part_of_speech": "noun",
      "meaning_zh": "父母；双亲",
      "kanji_readings": [
        {
          "form": "両親",
          "reading": "りょうしん"
        }
      ],
      "examples": [
        {
          "ja": "夏休みに両親の家へ帰ります。",
          "zh": "暑假回父母家。",
          "focus": ["両親"],
          "zhFocus": ["父母"]
        },
        {
          "ja": "両親と一緒に旅行しました。",
          "zh": "和父母一起旅行了。",
          "focus": ["両親"],
          "zhFocus": ["父母"]
        },
        {
          "ja": "私の両親は元気です。",
          "zh": "我的父母身体很好。",
          "focus": ["両親"],
          "zhFocus": ["父母"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-701",
      "jlpt": "N5",
      "headword": "料理",
      "source_form": "料理",
      "variants": [
        "料理"
      ],
      "reading": "りょうり",
      "reading_variants": [
        "りょうり"
      ],
      "romaji": "ryouri",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "料理；菜；做饭",
      "senses_zh": [
        "料理；菜",
        "做饭"
      ],
      "kanji_readings": [
        {
          "form": "料理",
          "reading": "りょうり"
        }
      ],
      "examples": [
        {
          "ja": "この料理は少し辛いです。",
          "zh": "这道菜有点辣。",
          "focus": ["料理"],
          "zhFocus": ["菜"]
        },
        {
          "ja": "日本の料理を食べます。",
          "zh": "吃日本料理。",
          "focus": ["料理"],
          "zhFocus": ["料理"]
        },
        {
          "ja": "日曜日は家で料理をします。",
          "zh": "星期天在家做饭。",
          "focus": ["料理"],
          "zhFocus": ["做饭"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-702",
      "jlpt": "N5",
      "headword": "旅行",
      "source_form": "旅行",
      "variants": [
        "旅行"
      ],
      "reading": "りょこう",
      "reading_variants": [
        "りょこう"
      ],
      "romaji": "ryokou",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "旅行",
      "kanji_readings": [
        {
          "form": "旅行",
          "reading": "りょこう"
        }
      ],
      "examples": [
        {
          "ja": "家族と旅行します。",
          "zh": "和家人旅行。",
          "focus": ["旅行"],
          "zhFocus": ["旅行"]
        },
        {
          "ja": "日本へ旅行に行きます。",
          "zh": "去日本旅行。",
          "focus": ["旅行"],
          "zhFocus": ["旅行"]
        },
        {
          "ja": "夏休みに北海道を旅行しました。",
          "zh": "暑假去北海道旅行了。",
          "focus": ["旅行"],
          "zhFocus": ["旅行"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-703",
      "jlpt": "N5",
      "headword": "零",
      "source_form": "零",
      "variants": [
        "零"
      ],
      "reading": "れい",
      "reading_variants": [
        "れい"
      ],
      "romaji": "rei",
      "part_of_speech": "numeral",
      "meaning_zh": "零（汉字词）",
      "kanji_readings": [
        {
          "form": "零",
          "reading": "れい"
        }
      ],
      "examples": [
        {
          "ja": "気温は零度まで下がりました。",
          "zh": "气温降到了零度。",
          "focus": ["零"],
          "zhFocus": ["零"]
        },
        {
          "ja": "午前零時に新しい日が始まります。",
          "zh": "午夜零点新的一天开始。",
          "focus": ["零"],
          "zhFocus": ["零"]
        },
        {
          "ja": "テストで零点を取りました。",
          "zh": "考试得了零分。",
          "focus": ["零"],
          "zhFocus": ["零"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-704",
      "jlpt": "N5",
      "headword": "冷蔵庫",
      "source_form": "冷蔵庫",
      "variants": [
        "冷蔵庫"
      ],
      "reading": "れいぞうこ",
      "reading_variants": [
        "れいぞうこ"
      ],
      "romaji": "reizouko",
      "part_of_speech": "noun",
      "meaning_zh": "冰箱",
      "kanji_readings": [
        {
          "form": "冷蔵庫",
          "reading": "れいぞうこ"
        }
      ],
      "examples": [
        {
          "ja": "冷蔵庫の中に何もありません。",
          "zh": "冰箱里什么都没有。",
          "focus": ["冷蔵庫"],
          "zhFocus": ["冰箱"]
        },
        {
          "ja": "この冷蔵庫は大きくて便利です。",
          "zh": "这台冰箱又大又方便。",
          "focus": ["冷蔵庫"],
          "zhFocus": ["冰箱"]
        },
        {
          "ja": "食べ物を冷蔵庫に入れます。",
          "zh": "把食物放进冰箱。",
          "focus": ["冷蔵庫"],
          "zhFocus": ["冰箱"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-705",
      "jlpt": "N5",
      "headword": "レコード",
      "source_form": "レコード",
      "variants": [
        "レコード"
      ],
      "reading": "レコード",
      "reading_variants": [
        "レコード"
      ],
      "romaji": "rekoodo",
      "part_of_speech": "noun",
      "meaning_zh": "唱片；记录",
      "senses_zh": [
        "唱片",
        "记录"
      ],
      "kanji_readings": [],
      "examples": [
        {
          "ja": "古いレコードを聞きます。",
          "zh": "听旧唱片。",
          "focus": ["レコード"],
          "zhFocus": ["唱片"]
        },
        {
          "ja": "レコードを買いました。",
          "zh": "买了唱片。",
          "focus": ["レコード"],
          "zhFocus": ["唱片"]
        },
        {
          "ja": "このレコードが好きです。",
          "zh": "喜欢这张唱片。",
          "focus": ["レコード"],
          "zhFocus": ["唱片"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-706",
      "jlpt": "N5",
      "headword": "レストラン",
      "source_form": "レストラン",
      "variants": [
        "レストラン"
      ],
      "reading": "レストラン",
      "reading_variants": [
        "レストラン"
      ],
      "romaji": "resutoran",
      "part_of_speech": "noun",
      "meaning_zh": "餐厅",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "レストランへ行きます。",
          "zh": "去餐厅。",
          "focus": ["レストラン"],
          "zhFocus": ["餐厅"]
        },
        {
          "ja": "レストランは駅の近くです。",
          "zh": "餐厅在车站附近。",
          "focus": ["レストラン"],
          "zhFocus": ["餐厅"]
        },
        {
          "ja": "レストランで友達に会います。",
          "zh": "在餐厅见朋友。",
          "focus": ["レストラン"],
          "zhFocus": ["餐厅"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-707",
      "jlpt": "N5",
      "headword": "練習",
      "source_form": "練習",
      "variants": [
        "練習"
      ],
      "reading": "れんしゅう",
      "reading_variants": [
        "れんしゅう (する)"
      ],
      "romaji": "renshuu",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "练习",
      "kanji_readings": [
        {
          "form": "練習",
          "reading": "れんしゅう"
        }
      ],
      "examples": [
        {
          "ja": "練習します。",
          "zh": "练习。",
          "focus": ["練習"],
          "zhFocus": ["练习"]
        },
        {
          "ja": "毎日、練習します。",
          "zh": "每天练习。",
          "focus": ["練習"],
          "zhFocus": ["练习"]
        },
        {
          "ja": "昨日、練習しました。",
          "zh": "昨天练习了。",
          "focus": ["練習"],
          "zhFocus": ["练习"]
        }
      ],
      "note_zh": "可作名词，也常与「する」构成动词。"
    },
    {
      "id": "n5-708",
      "jlpt": "N5",
      "headword": "廊下",
      "source_form": "廊下",
      "variants": [
        "廊下"
      ],
      "reading": "ろうか",
      "reading_variants": [
        "ろうか"
      ],
      "romaji": "rouka",
      "part_of_speech": "noun",
      "meaning_zh": "走廊",
      "kanji_readings": [
        {
          "form": "廊下",
          "reading": "ろうか"
        }
      ],
      "examples": [
        {
          "ja": "廊下を静かに歩きます。",
          "zh": "安静地走过走廊。",
          "focus": ["廊下"],
          "zhFocus": ["走廊"]
        },
        {
          "ja": "廊下に人が並んでいます。",
          "zh": "走廊里有人在排队。",
          "focus": ["廊下"],
          "zhFocus": ["走廊"]
        },
        {
          "ja": "先生に廊下で会いました。",
          "zh": "在走廊遇到了老师。",
          "focus": ["廊下"],
          "zhFocus": ["走廊"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-709",
      "jlpt": "N5",
      "headword": "六",
      "source_form": "六",
      "variants": [
        "六"
      ],
      "reading": "ろく",
      "reading_variants": [
        "ろく"
      ],
      "romaji": "roku",
      "part_of_speech": "numeral",
      "meaning_zh": "六",
      "kanji_readings": [
        {
          "form": "六",
          "reading": "ろく"
        }
      ],
      "examples": [
        {
          "ja": "六月は雨が多いです。",
          "zh": "六月雨水很多。",
          "focus": ["六"],
          "zhFocus": ["六"]
        },
        {
          "ja": "毎朝六時に起きます。",
          "zh": "每天早上六点起床。",
          "focus": ["六"],
          "zhFocus": ["六"]
        },
        {
          "ja": "答えは六です。",
          "zh": "答案是六。",
          "focus": ["六"],
          "zhFocus": ["六"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-710",
      "jlpt": "N5",
      "headword": "ワイシャツ",
      "source_form": "ワイシャツ",
      "variants": [
        "ワイシャツ"
      ],
      "reading": "ワイシャツ",
      "reading_variants": [
        "ワイシャツ"
      ],
      "romaji": "waishatsu",
      "part_of_speech": "noun",
      "meaning_zh": "衬衫（配西装穿，多为白色）",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "白いワイシャツを着ます。",
          "zh": "穿白色衬衫。",
          "focus": ["ワイシャツ"],
          "zhFocus": ["衬衫"]
        },
        {
          "ja": "新しいワイシャツを買いました。",
          "zh": "买了新衬衫。",
          "focus": ["ワイシャツ"],
          "zhFocus": ["衬衫"]
        },
        {
          "ja": "昨日、ワイシャツを洗いました。",
          "zh": "昨天洗了衬衫。",
          "focus": ["ワイシャツ"],
          "zhFocus": ["衬衫"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-711",
      "jlpt": "N5",
      "headword": "若い",
      "source_form": "若い",
      "variants": [
        "若い"
      ],
      "reading": "わかい",
      "reading_variants": [
        "わかい"
      ],
      "romaji": "wakai",
      "part_of_speech": "i-adjective",
      "meaning_zh": "年轻的",
      "kanji_readings": [
        {
          "form": "若い",
          "reading": "わかい"
        }
      ],
      "examples": [
        {
          "ja": "この先生は若いです。",
          "zh": "这位老师很年轻。",
          "focus": ["若い"],
          "zhFocus": ["年轻"]
        },
        {
          "ja": "私の母はまだ若いです。",
          "zh": "我妈妈还很年轻。",
          "focus": ["若い"],
          "zhFocus": ["年轻"]
        },
        {
          "ja": "若い人がたくさん集まりました。",
          "zh": "很多年轻人聚到了一起。",
          "focus": ["若い"],
          "zhFocus": ["年轻"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-712",
      "jlpt": "N5",
      "headword": "分かる",
      "source_form": "分かる",
      "variants": [
        "分かる"
      ],
      "reading": "わかる",
      "reading_variants": [
        "わかる"
      ],
      "romaji": "wakaru",
      "part_of_speech": "verb",
      "meaning_zh": "明白；懂",
      "kanji_readings": [
        {
          "form": "分かる",
          "reading": "わかる"
        }
      ],
      "examples": [
        {
          "ja": "日本語が少し分かります。",
          "zh": "懂一点日语。",
          "focus": ["分かり"],
          "zhFocus": ["懂"]
        },
        {
          "ja": "この問題は分かりません。",
          "zh": "这个问题不懂。",
          "focus": ["分かり"],
          "zhFocus": ["懂"]
        },
        {
          "ja": "先生の話がよく分かりました。",
          "zh": "很好地理解了老师的话。",
          "focus": ["分かり"],
          "zhFocus": ["理解"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-713",
      "jlpt": "N5",
      "headword": "忘れる",
      "source_form": "忘れる",
      "variants": [
        "忘れる"
      ],
      "reading": "わすれる",
      "reading_variants": [
        "わすれる"
      ],
      "romaji": "wasureru",
      "part_of_speech": "verb",
      "meaning_zh": "忘记",
      "kanji_readings": [
        {
          "form": "忘れる",
          "reading": "わすれる"
        }
      ],
      "examples": [
        {
          "ja": "宿題を忘れました。",
          "zh": "忘了作业。",
          "focus": ["忘れ"],
          "zhFocus": ["忘"]
        },
        {
          "ja": "名前を忘れないでください。",
          "zh": "请不要忘记名字。",
          "focus": ["忘れ"],
          "zhFocus": ["忘记"]
        },
        {
          "ja": "傘を電車に忘れました。",
          "zh": "把伞忘在电车上了。",
          "focus": ["忘れ"],
          "zhFocus": ["忘"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-714",
      "jlpt": "N5",
      "headword": "私",
      "source_form": "私",
      "variants": [
        "私"
      ],
      "reading": "わたし",
      "reading_variants": [
        "わたし"
      ],
      "romaji": "watashi",
      "part_of_speech": "pronoun",
      "meaning_zh": "我",
      "kanji_readings": [
        {
          "form": "私",
          "reading": "わたし"
        }
      ],
      "examples": [
        {
          "ja": "私は学生です。",
          "zh": "我是学生。",
          "focus": ["私"],
          "zhFocus": ["我"]
        },
        {
          "ja": "私は日本語を勉強しています。",
          "zh": "我正在学日语。",
          "focus": ["私"],
          "zhFocus": ["我"]
        },
        {
          "ja": "これは私の本です。",
          "zh": "这是我的书。",
          "focus": ["私"],
          "zhFocus": ["我"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-715",
      "jlpt": "N5",
      "headword": "私",
      "source_form": "私",
      "variants": [
        "私"
      ],
      "reading": "わたくし",
      "reading_variants": [
        "わたくし"
      ],
      "romaji": "watakushi",
      "part_of_speech": "pronoun",
      "meaning_zh": "我（正式说法）",
      "kanji_readings": [
        {
          "form": "私",
          "reading": "わたくし"
        }
      ],
      "examples": [
        {
          "ja": "わたくしは田中です。",
          "zh": "我是田中。",
          "focus": ["わたくし"],
          "zhFocus": ["我"]
        },
        {
          "ja": "わたくしが説明します。",
          "zh": "由我来说明。",
          "focus": ["わたくし"],
          "zhFocus": ["我"]
        },
        {
          "ja": "わたくしは営業部の田中と申します。",
          "zh": "我是营业部的田中。",
          "focus": ["わたくし"],
          "zhFocus": ["我"]
        }
      ],
      "note_zh": "「わたくし」是「わたし」更正式、郑重的读法。"
    },
    {
      "id": "n5-716",
      "jlpt": "N5",
      "headword": "渡す",
      "source_form": "渡す",
      "variants": [
        "渡す"
      ],
      "reading": "わたす",
      "reading_variants": [
        "わたす"
      ],
      "romaji": "watasu",
      "part_of_speech": "verb",
      "meaning_zh": "交给；递给",
      "kanji_readings": [
        {
          "form": "渡す",
          "reading": "わたす"
        }
      ],
      "examples": [
        {
          "ja": "先生に手紙を渡します。",
          "zh": "把信交给老师。",
          "focus": ["渡し"],
          "zhFocus": ["交给"]
        },
        {
          "ja": "友達にプレゼントを渡しました。",
          "zh": "把礼物交给了朋友。",
          "focus": ["渡し"],
          "zhFocus": ["交给"]
        },
        {
          "ja": "これを母に渡してください。",
          "zh": "请把这个交给妈妈。",
          "focus": ["渡し"],
          "zhFocus": ["交给"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-717",
      "jlpt": "N5",
      "headword": "渡る",
      "source_form": "渡る",
      "variants": [
        "渡る"
      ],
      "reading": "わたる",
      "reading_variants": [
        "わたる"
      ],
      "romaji": "wataru",
      "part_of_speech": "verb",
      "meaning_zh": "过；渡过",
      "kanji_readings": [
        {
          "form": "渡る",
          "reading": "わたる"
        }
      ],
      "examples": [
        {
          "ja": "橋を渡ります。",
          "zh": "过桥。",
          "focus": ["渡り"],
          "zhFocus": ["过"]
        },
        {
          "ja": "道を渡ってください。",
          "zh": "请过马路。",
          "focus": ["渡っ"],
          "zhFocus": ["过"]
        },
        {
          "ja": "川を渡りました。",
          "zh": "过了河。",
          "focus": ["渡り"],
          "zhFocus": ["过"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-718",
      "jlpt": "N5",
      "headword": "悪い",
      "source_form": "悪い",
      "variants": [
        "悪い"
      ],
      "reading": "わるい",
      "reading_variants": [
        "わるい"
      ],
      "romaji": "warui",
      "part_of_speech": "i-adjective",
      "meaning_zh": "坏的；不好的",
      "kanji_readings": [
        {
          "form": "悪い",
          "reading": "わるい"
        }
      ],
      "examples": [
        {
          "ja": "今日は天気が悪いです。",
          "zh": "今天天气不好。",
          "focus": ["悪い"],
          "zhFocus": ["不好"]
        },
        {
          "ja": "姿勢が悪いですね。",
          "zh": "你的姿势不太好。",
          "focus": ["悪い"],
          "zhFocus": ["不太好"]
        },
        {
          "ja": "悪いことをしてはいけません。",
          "zh": "不可以做坏事。",
          "focus": ["悪い"],
          "zhFocus": ["坏"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-719",
      "jlpt": "N5",
      "headword": "ありがとう",
      "source_form": "ありがとう",
      "variants": [
        "ありがとう"
      ],
      "reading": "ありがとう",
      "reading_variants": [
        "ありがとう"
      ],
      "romaji": "arigatou",
      "part_of_speech": "expression",
      "meaning_zh": "谢谢",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "手伝ってくれて、ありがとう。",
          "zh": "谢谢你帮我。",
          "focus": ["ありがとう"],
          "zhFocus": ["谢谢"]
        },
        {
          "ja": "プレゼント、本当にありがとう。",
          "zh": "礼物真是太谢谢了。",
          "focus": ["ありがとう"],
          "zhFocus": ["谢谢"]
        },
        {
          "ja": "「ありがとう」と言って、笑いました。",
          "zh": "说了声“谢谢”，笑了。",
          "focus": ["ありがとう"],
          "zhFocus": ["谢谢"]
        }
      ],
      "note_zh": "礼貌说法是「ありがとうございます」；汉字为「有難う」，一般写假名。"
    },
    {
      "id": "n5-720",
      "jlpt": "N5",
      "headword": "いただきます",
      "source_form": "いただきます",
      "variants": [
        "いただきます",
        "頂きます"
      ],
      "reading": "いただきます",
      "reading_variants": [
        "いただきます"
      ],
      "romaji": "itadakimasu",
      "part_of_speech": "expression",
      "meaning_zh": "我开动了（饭前用语）",
      "kanji_readings": [
        {
          "form": "頂きます",
          "reading": "いただきます"
        }
      ],
      "examples": [
        {
          "ja": "「いただきます」と言ってから食べます。",
          "zh": "说了“我开动了”再吃。",
          "focus": ["いただきます"],
          "zhFocus": ["我开动了"]
        },
        {
          "ja": "では、温かいうちにいただきます。",
          "zh": "那我就趁热开动了。",
          "focus": ["いただきます"],
          "zhFocus": ["开动"]
        },
        {
          "ja": "みんなで手を合わせて、いただきます。",
          "zh": "大家双手合十，开动了。",
          "focus": ["いただきます"],
          "zhFocus": ["开动"]
        }
      ],
      "note_zh": "饭前表示感谢的固定说法；饭后说「ごちそうさまでした」。"
    },
    {
      "id": "n5-721",
      "jlpt": "N5",
      "headword": "いらっしゃい",
      "source_form": "いらっしゃい",
      "variants": [
        "いらっしゃい"
      ],
      "reading": "いらっしゃい",
      "reading_variants": [
        "いらっしゃい"
      ],
      "romaji": "irasshai",
      "part_of_speech": "expression",
      "meaning_zh": "欢迎（光临）；来吧",
      "senses_zh": [
        "欢迎（光临）",
        "来吧"
      ],
      "kanji_readings": [],
      "examples": [
        {
          "ja": "いらっしゃい、どうぞ中へ。",
          "zh": "欢迎，请进。",
          "focus": ["いらっしゃい"],
          "zhFocus": ["欢迎"]
        },
        {
          "ja": "「いらっしゃい」と店の人が言いました。",
          "zh": "店里的人说了声“欢迎光临”。",
          "focus": ["いらっしゃい"],
          "zhFocus": ["欢迎"]
        },
        {
          "ja": "いつでもうちに遊びにいらっしゃい。",
          "zh": "随时来我家玩吧。",
          "focus": ["いらっしゃい"],
          "zhFocus": ["来"]
        }
      ],
      "note_zh": "店员常说「いらっしゃいませ」；「いらっしゃい」较随便。"
    },
    {
      "id": "n5-722",
      "jlpt": "N5",
      "headword": "おめでとう",
      "source_form": "おめでとう",
      "variants": [
        "おめでとう"
      ],
      "reading": "おめでとう",
      "reading_variants": [
        "おめでとう"
      ],
      "romaji": "omedetou",
      "part_of_speech": "expression",
      "meaning_zh": "恭喜；祝贺",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "誕生日おめでとう。",
          "zh": "生日快乐。",
          "focus": ["おめでとう"],
          "zhFocus": ["快乐"]
        },
        {
          "ja": "合格、おめでとう。",
          "zh": "恭喜你考上了。",
          "focus": ["おめでとう"],
          "zhFocus": ["恭喜"]
        },
        {
          "ja": "結婚おめでとうございます。",
          "zh": "恭喜你们结婚。",
          "focus": ["おめでとう"],
          "zhFocus": ["恭喜"]
        }
      ],
      "note_zh": "礼貌说法是「おめでとうございます」。"
    },
    {
      "id": "n5-723",
      "jlpt": "N5",
      "headword": "ごめんなさい",
      "source_form": "ごめんなさい",
      "variants": [
        "ごめんなさい"
      ],
      "reading": "ごめんなさい",
      "reading_variants": [
        "ごめんなさい"
      ],
      "romaji": "gomennasai",
      "part_of_speech": "expression",
      "meaning_zh": "对不起",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "遅れて、ごめんなさい。",
          "zh": "来晚了，对不起。",
          "focus": ["ごめんなさい"],
          "zhFocus": ["对不起"]
        },
        {
          "ja": "ごめんなさい、今日は行けません。",
          "zh": "对不起，今天去不了。",
          "focus": ["ごめんなさい"],
          "zhFocus": ["对不起"]
        },
        {
          "ja": "弟は母にごめんなさいと謝りました。",
          "zh": "弟弟向妈妈道了歉，说对不起。",
          "focus": ["ごめんなさい"],
          "zhFocus": ["对不起"]
        }
      ],
      "note_zh": "比「すみません」随便，多用于亲近的人之间；汉字为「御免なさい」。"
    },
    {
      "id": "n5-724",
      "jlpt": "N5",
      "headword": "こんにちは",
      "source_form": "こんにちは",
      "variants": [
        "こんにちは"
      ],
      "reading": "こんにちは",
      "reading_variants": [
        "こんにちは"
      ],
      "romaji": "konnichiwa",
      "part_of_speech": "expression",
      "meaning_zh": "你好；您好（白天的问候）",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "こんにちは、いい天気ですね。",
          "zh": "你好，天气真好啊。",
          "focus": ["こんにちは"],
          "zhFocus": ["你好"]
        },
        {
          "ja": "近所の人に「こんにちは」とあいさつしました。",
          "zh": "和邻居打招呼说“你好”。",
          "focus": ["こんにちは"],
          "zhFocus": ["你好"]
        },
        {
          "ja": "皆さん、こんにちは。",
          "zh": "大家好。",
          "focus": ["こんにちは"],
          "zhFocus": ["好"]
        }
      ],
      "note_zh": "末尾的「は」读作「わ」。汉字为「今日は」，一般写假名。"
    },
    {
      "id": "n5-725",
      "jlpt": "N5",
      "headword": "すみません",
      "source_form": "すみません",
      "variants": [
        "すみません"
      ],
      "reading": "すみません",
      "reading_variants": [
        "すみません"
      ],
      "romaji": "sumimasen",
      "part_of_speech": "expression",
      "meaning_zh": "对不起；不好意思；劳驾；谢谢",
      "senses_zh": [
        "对不起；不好意思",
        "劳驾",
        "谢谢"
      ],
      "kanji_readings": [],
      "examples": [
        {
          "ja": "すみません、お水をください。",
          "zh": "劳驾，请给我一杯水。",
          "focus": ["すみません"],
          "zhFocus": ["劳驾"]
        },
        {
          "ja": "すみません、駅はどこですか。",
          "zh": "劳驾，请问车站在哪里？",
          "focus": ["すみません"],
          "zhFocus": ["劳驾"]
        },
        {
          "ja": "すみません、もう一度言ってください。",
          "zh": "不好意思，请再说一遍。",
          "focus": ["すみません"],
          "zhFocus": ["不好意思"]
        }
      ],
      "note_zh": "用于道歉、搭话、道谢等多种场合。汉字为「済みません」，一般写假名。"
    },
    {
      "id": "n5-726",
      "jlpt": "N5",
      "headword": "よろしく",
      "source_form": "よろしく",
      "variants": [
        "よろしく",
        "宜しく"
      ],
      "reading": "よろしく",
      "reading_variants": [
        "よろしく"
      ],
      "romaji": "yoroshiku",
      "part_of_speech": "adverb/expression",
      "meaning_zh": "请多关照；代问好；适当地",
      "senses_zh": [
        "请多关照",
        "代问好",
        "适当地"
      ],
      "kanji_readings": [
        {
          "form": "宜しく",
          "reading": "よろしく"
        }
      ],
      "examples": [
        {
          "ja": "これからもよろしくお願いします。",
          "zh": "今后也请多关照。",
          "focus": ["よろしく"],
          "zhFocus": ["请多关照"]
        },
        {
          "ja": "ご家族の皆さんによろしく。",
          "zh": "请代我向您的家人问好。",
          "focus": ["よろしく"],
          "zhFocus": ["问好"]
        },
        {
          "ja": "あとはよろしく頼みます。",
          "zh": "剩下的就拜托你了。",
          "focus": ["よろしく"]
        }
      ],
      "note_zh": "汉字为「宜しく」，一般写假名；初次见面常说「どうぞよろしく（お願いします）」。"
    },
    {
      "id": "n5-727",
      "jlpt": "N5",
      "headword": "男の人",
      "source_form": "男の人",
      "variants": [
        "男の人"
      ],
      "reading": "おとこのひと",
      "reading_variants": [
        "おとこのひと"
      ],
      "romaji": "otokonohito",
      "part_of_speech": "noun",
      "meaning_zh": "男人；男的",
      "kanji_readings": [
        {
          "form": "男の人",
          "reading": "おとこのひと"
        }
      ],
      "examples": [
        {
          "ja": "あの男の人は誰ですか。",
          "zh": "那个男人是谁？",
          "focus": ["男の人"],
          "zhFocus": ["男人"]
        },
        {
          "ja": "背の高い男の人が入ってきました。",
          "zh": "一个高个子的男人走了进来。",
          "focus": ["男の人"],
          "zhFocus": ["男人"]
        },
        {
          "ja": "受付の男の人に聞いてください。",
          "zh": "请问前台的那位男士。",
          "focus": ["男の人"],
          "zhFocus": ["男士"]
        }
      ],
      "note_zh": "比「男」礼貌；女性是「女の人」。"
    },
    {
      "id": "n5-728",
      "jlpt": "N5",
      "headword": "日本",
      "source_form": "日本",
      "variants": [
        "日本"
      ],
      "reading": "にほん",
      "reading_variants": [
        "にほん",
        "にっぽん"
      ],
      "romaji": "nihon",
      "part_of_speech": "noun",
      "meaning_zh": "日本",
      "kanji_readings": [
        {
          "form": "日本",
          "reading": "にほん"
        }
      ],
      "examples": [
        {
          "ja": "日本の夏は暑いです。",
          "zh": "日本的夏天很热。",
          "focus": ["日本"],
          "zhFocus": ["日本"]
        },
        {
          "ja": "来年、日本に留学します。",
          "zh": "明年去日本留学。",
          "focus": ["日本"],
          "zhFocus": ["日本"]
        },
        {
          "ja": "日本の四季は美しいです。",
          "zh": "日本的四季很美。",
          "focus": ["日本"],
          "zhFocus": ["日本"]
        }
      ],
      "note_zh": "也读「にっぽん」，多用于正式场合或体育比赛等。"
    },
    {
      "id": "n5-729",
      "jlpt": "N5",
      "headword": "曜日",
      "source_form": "曜日",
      "variants": [
        "曜日"
      ],
      "reading": "ようび",
      "reading_variants": [
        "ようび"
      ],
      "romaji": "youbi",
      "part_of_speech": "noun",
      "meaning_zh": "星期；星期几",
      "kanji_readings": [
        {
          "form": "曜日",
          "reading": "ようび"
        }
      ],
      "examples": [
        {
          "ja": "今日は何曜日ですか。",
          "zh": "今天星期几？",
          "focus": ["曜日"],
          "zhFocus": ["星期"]
        },
        {
          "ja": "ごみを出す曜日が決まっています。",
          "zh": "扔垃圾的日子是固定的。",
          "focus": ["曜日"],
          "zhFocus": ["日子"]
        },
        {
          "ja": "毎週同じ曜日に図書館へ行きます。",
          "zh": "每周在同一天去图书馆。",
          "focus": ["曜日"],
          "zhFocus": ["天"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-730",
      "jlpt": "N5",
      "headword": "お昼",
      "source_form": "お昼",
      "variants": [
        "お昼"
      ],
      "reading": "おひる",
      "reading_variants": [
        "おひる"
      ],
      "romaji": "ohiru",
      "part_of_speech": "noun",
      "meaning_zh": "中午；午饭",
      "senses_zh": [
        "中午",
        "午饭"
      ],
      "kanji_readings": [
        {
          "form": "お昼",
          "reading": "おひる"
        }
      ],
      "examples": [
        {
          "ja": "お昼に何を食べましたか。",
          "zh": "中午吃了什么？",
          "focus": ["お昼"],
          "zhFocus": ["中午"]
        },
        {
          "ja": "お昼ごろ、駅で会いましょう。",
          "zh": "中午前后在车站见吧。",
          "focus": ["お昼"],
          "zhFocus": ["中午"]
        },
        {
          "ja": "お昼はいつも会社の近くで食べます。",
          "zh": "午饭总是在公司附近吃。",
          "focus": ["お昼"],
          "zhFocus": ["午饭"]
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-731",
      "jlpt": "N5",
      "headword": "思い",
      "source_form": "思い",
      "variants": [
        "思い"
      ],
      "reading": "おもい",
      "reading_variants": [
        "おもい"
      ],
      "romaji": "omoi",
      "part_of_speech": "noun",
      "meaning_zh": "思念；（心中的）想法；感受",
      "kanji_readings": [
        {
          "form": "思い",
          "reading": "おもい"
        }
      ],
      "examples": [
        {
          "ja": "家族への思いを手紙に書きました。",
          "zh": "把对家人的思念写进了信里。",
          "focus": ["思い"],
          "zhFocus": ["思念"]
        },
        {
          "ja": "自分の思いを言葉で伝えるのは難しいです。",
          "zh": "用语言表达自己的心情很难。",
          "focus": ["思い"],
          "zhFocus": ["心情"]
        },
        {
          "ja": "旅行では、とても楽しい思いをしました。",
          "zh": "旅行时过得非常开心。",
          "focus": ["思い"]
        }
      ],
      "note_zh": "与「重い（重的）」同音。常用「〜への思い」「楽しい思いをする」。"
    },
    {
      "id": "n5-732",
      "jlpt": "N5",
      "headword": "返る",
      "source_form": "返る",
      "variants": [
        "返る"
      ],
      "reading": "かえる",
      "reading_variants": [
        "かえる"
      ],
      "romaji": "kaeru",
      "part_of_speech": "verb",
      "meaning_zh": "（东西、回应）回来；还回；恢复（原状）",
      "senses_zh": [
        "（东西、回应）回来；还回",
        "恢复（原状）"
      ],
      "kanji_readings": [
        {
          "form": "返る",
          "reading": "かえる"
        }
      ],
      "examples": [
        {
          "ja": "貸したお金が返ってきました。",
          "zh": "借出去的钱还回来了。",
          "focus": ["返っ"],
          "zhFocus": ["回来"]
        },
        {
          "ja": "質問したら、すぐに答えが返ってきました。",
          "zh": "一提问，马上就得到了回答。",
          "focus": ["返っ"]
        },
        {
          "ja": "大きな音で我に返りました。",
          "zh": "被很大的声音惊得回过神来。",
          "focus": ["返り"],
          "zhFocus": ["回"]
        }
      ],
      "note_zh": "与「帰る（回家）」「変える」「代える」同音。常用「〜が返ってくる」「我に返る（回过神来）」；人回家用「帰る」。"
    },
    {
      "id": "n5-733",
      "jlpt": "N5",
      "headword": "核",
      "source_form": "核",
      "variants": [
        "核"
      ],
      "reading": "かく",
      "reading_variants": [
        "かく"
      ],
      "romaji": "kaku",
      "part_of_speech": "noun",
      "meaning_zh": "核（细胞核、地核等）；核武器",
      "senses_zh": [
        "核（细胞核、地核等）",
        "核武器"
      ],
      "kanji_readings": [
        {
          "form": "核",
          "reading": "かく"
        }
      ],
      "examples": [
        {
          "ja": "細胞の中には核があります。",
          "zh": "细胞里有细胞核。",
          "focus": ["核"],
          "zhFocus": ["核"]
        },
        {
          "ja": "地球の核はとても熱いです。",
          "zh": "地核非常热。",
          "focus": ["核"],
          "zhFocus": ["核"]
        },
        {
          "ja": "核のない世界を目指しています。",
          "zh": "以没有核武器的世界为目标。",
          "focus": ["核"],
          "zhFocus": ["核武器"]
        }
      ],
      "note_zh": "与「書く（写）」同音。"
    },
    {
      "id": "n5-734",
      "jlpt": "N5",
      "headword": "かく",
      "source_form": "かく",
      "variants": [
        "かく",
        "掻く"
      ],
      "reading": "かく",
      "reading_variants": [
        "かく"
      ],
      "romaji": "kaku",
      "part_of_speech": "verb",
      "meaning_zh": "挠；抓（痒）；出（汗）",
      "senses_zh": [
        "挠；抓（痒）",
        "出（汗）"
      ],
      "kanji_readings": [],
      "examples": [
        {
          "ja": "背中がかゆいので、かきました。",
          "zh": "背上痒，就挠了挠。",
          "focus": ["かき"],
          "zhFocus": ["挠"]
        },
        {
          "ja": "夏は寝ている間に汗をかきます。",
          "zh": "夏天睡觉时会出汗。",
          "focus": ["かき"],
          "zhFocus": ["出"]
        },
        {
          "ja": "頭をかきながら謝りました。",
          "zh": "一边挠头一边道歉。",
          "focus": ["かき"],
          "zhFocus": ["挠"]
        }
      ],
      "note_zh": "多写作假名，汉字为「掻く」。与「書く（写）」同音。「汗をかく」是出汗。"
    },
    {
      "id": "n5-735",
      "jlpt": "N5",
      "headword": "過程",
      "source_form": "過程",
      "variants": [
        "過程"
      ],
      "reading": "かてい",
      "reading_variants": [
        "かてい"
      ],
      "romaji": "katei",
      "part_of_speech": "noun",
      "meaning_zh": "过程",
      "kanji_readings": [
        {
          "form": "過程",
          "reading": "かてい"
        }
      ],
      "examples": [
        {
          "ja": "結果より過程が大切です。",
          "zh": "过程比结果更重要。",
          "focus": ["過程"],
          "zhFocus": ["过程"]
        },
        {
          "ja": "パンができるまでの過程を見学しました。",
          "zh": "参观了面包制作的过程。",
          "focus": ["過程"],
          "zhFocus": ["过程"]
        },
        {
          "ja": "勉強の過程で、たくさん失敗しました。",
          "zh": "在学习的过程中失败了很多次。",
          "focus": ["過程"],
          "zhFocus": ["过程"]
        }
      ],
      "note_zh": "与「家庭」同音。"
    },
    {
      "id": "n5-736",
      "jlpt": "N5",
      "headword": "区",
      "source_form": "区",
      "variants": [
        "区"
      ],
      "reading": "く",
      "reading_variants": [
        "く"
      ],
      "romaji": "ku",
      "part_of_speech": "noun",
      "meaning_zh": "区（行政区划）",
      "kanji_readings": [
        {
          "form": "区",
          "reading": "く"
        }
      ],
      "examples": [
        {
          "ja": "この区には公園が多いです。",
          "zh": "这个区公园很多。",
          "focus": ["区"],
          "zhFocus": ["区"]
        },
        {
          "ja": "区の図書館で本を借りました。",
          "zh": "在区图书馆借了书。",
          "focus": ["区"],
          "zhFocus": ["区"]
        },
        {
          "ja": "区のホームページでごみの出し方を調べました。",
          "zh": "在区里的网站上查了扔垃圾的方法。",
          "focus": ["区"],
          "zhFocus": ["区"]
        }
      ],
      "note_zh": "与「九（く）」同音。东京等大城市分成若干个「区」。"
    },
    {
      "id": "n5-737",
      "jlpt": "N5",
      "headword": "個々",
      "source_form": "個々",
      "variants": [
        "個々"
      ],
      "reading": "ここ",
      "reading_variants": [
        "ここ"
      ],
      "romaji": "koko",
      "part_of_speech": "noun",
      "meaning_zh": "各个；个别；逐一",
      "kanji_readings": [
        {
          "form": "個々",
          "reading": "ここ"
        }
      ],
      "examples": [
        {
          "ja": "個々の問題について話し合いました。",
          "zh": "就各个问题进行了讨论。",
          "focus": ["個々"],
          "zhFocus": ["各个"]
        },
        {
          "ja": "質問には個々にお答えします。",
          "zh": "对于提问将逐一回答。",
          "focus": ["個々"],
          "zhFocus": ["逐一"]
        },
        {
          "ja": "個々の力は小さいですが、みんなで協力すれば大きくなります。",
          "zh": "每个人的力量虽小，但大家合作就会变大。",
          "focus": ["個々"],
          "zhFocus": ["每个人"]
        }
      ],
      "note_zh": "与「ここ（这里）」同音。常用「個々の〜」「個々に」。"
    },
    {
      "id": "n5-738",
      "jlpt": "N5",
      "headword": "策",
      "source_form": "策",
      "variants": [
        "策"
      ],
      "reading": "さく",
      "reading_variants": [
        "さく"
      ],
      "romaji": "saku",
      "part_of_speech": "noun",
      "meaning_zh": "对策；策略；（解决问题的）办法",
      "kanji_readings": [
        {
          "form": "策",
          "reading": "さく"
        }
      ],
      "examples": [
        {
          "ja": "何かいい策はありませんか。",
          "zh": "有没有什么好办法？",
          "focus": ["策"],
          "zhFocus": ["办法"]
        },
        {
          "ja": "問題を解決する策を考えました。",
          "zh": "想了解决问题的对策。",
          "focus": ["策"],
          "zhFocus": ["对策"]
        },
        {
          "ja": "それはとてもいい策だと思います。",
          "zh": "我觉得那是个很好的办法。",
          "focus": ["策"],
          "zhFocus": ["办法"]
        }
      ],
      "note_zh": "与「咲く（开花）」同音。"
    },
    {
      "id": "n5-739",
      "jlpt": "N5",
      "headword": "死",
      "source_form": "死",
      "variants": [
        "死"
      ],
      "reading": "し",
      "reading_variants": [
        "し"
      ],
      "romaji": "shi",
      "part_of_speech": "noun",
      "meaning_zh": "死（名词）",
      "answer_zh": "死",
      "kanji_readings": [
        {
          "form": "死",
          "reading": "し"
        }
      ],
      "examples": [
        {
          "ja": "祖父の死はとても悲しかったです。",
          "zh": "祖父的去世让人非常悲伤。",
          "focus": ["死"],
          "zhFocus": ["去世"]
        },
        {
          "ja": "人はだれでも死を恐れます。",
          "zh": "人谁都害怕死亡。",
          "focus": ["死"],
          "zhFocus": ["死"]
        },
        {
          "ja": "この本は生と死について書かれています。",
          "zh": "这本书写的是生与死。",
          "focus": ["死"],
          "zhFocus": ["死"]
        }
      ],
      "note_zh": "与「四」「市」「詩」同音。"
    },
    {
      "id": "n5-740",
      "jlpt": "N5",
      "headword": "汁",
      "source_form": "汁",
      "variants": [
        "汁"
      ],
      "reading": "しる",
      "reading_variants": [
        "しる"
      ],
      "romaji": "shiru",
      "part_of_speech": "noun",
      "meaning_zh": "汁；汤汁",
      "kanji_readings": [
        {
          "form": "汁",
          "reading": "しる"
        }
      ],
      "examples": [
        {
          "ja": "果物の汁で服が汚れました。",
          "zh": "衣服被果汁弄脏了。",
          "focus": ["汁"],
          "zhFocus": ["汁"]
        },
        {
          "ja": "うどんの汁を全部飲みました。",
          "zh": "把乌冬面的汤全喝了。",
          "focus": ["汁"],
          "zhFocus": ["汤"]
        },
        {
          "ja": "魚にレモンの汁をかけて食べます。",
          "zh": "在鱼上挤柠檬汁吃。",
          "focus": ["汁"],
          "zhFocus": ["汁"]
        }
      ],
      "note_zh": "与「知る（知道）」同音。"
    },
    {
      "id": "n5-741",
      "jlpt": "N5",
      "headword": "つく",
      "source_form": "つく",
      "variants": [
        "つく",
        "点く"
      ],
      "reading": "つく",
      "reading_variants": [
        "つく"
      ],
      "romaji": "tsuku",
      "part_of_speech": "verb",
      "meaning_zh": "（灯、电器）开着；（火）点着（自动词）",
      "senses_zh": [
        "（灯、电器）开着",
        "（火）点着"
      ],
      "sense_note_zh": "（自动词）",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "部屋の電気がついています。",
          "zh": "房间的灯开着。",
          "focus": ["つい"],
          "zhFocus": ["开着"]
        },
        {
          "ja": "このライターは火がつきません。",
          "zh": "这个打火机打不着火。",
          "focus": ["つき"],
          "zhFocus": ["着"]
        },
        {
          "ja": "テレビがつかないので、修理に出しました。",
          "zh": "电视打不开，所以拿去修了。",
          "focus": ["つか"],
          "zhFocus": ["打不开"]
        }
      ],
      "note_zh": "多写作假名，汉字为「点く」。他动词是「つける」。与「着く」「付く」「就く」同音。"
    },
    {
      "id": "n5-742",
      "jlpt": "N5",
      "headword": "努める",
      "source_form": "努める",
      "variants": [
        "努める"
      ],
      "reading": "つとめる",
      "reading_variants": [
        "つとめる"
      ],
      "romaji": "tsutomeru",
      "part_of_speech": "verb",
      "meaning_zh": "尽力；努力（动词，常用「〜に努める」）",
      "answer_zh": "尽力；努力（常用「〜に努める」）",
      "kanji_readings": [
        {
          "form": "努める",
          "reading": "つとめる"
        }
      ],
      "examples": [
        {
          "ja": "健康のために、早く寝るように努めています。",
          "zh": "为了健康，尽量早睡。",
          "focus": ["努め"],
          "zhFocus": ["尽量"]
        },
        {
          "ja": "会社は問題の解決に努めています。",
          "zh": "公司正在努力解决问题。",
          "focus": ["努め"],
          "zhFocus": ["努力"]
        },
        {
          "ja": "サービスの向上に努めます。",
          "zh": "努力提高服务水平。",
          "focus": ["努め"],
          "zhFocus": ["努力"]
        }
      ],
      "note_zh": "与「勤める（任职）」「務める（担任）」同音。"
    },
    {
      "id": "n5-743",
      "jlpt": "N5",
      "headword": "務める",
      "source_form": "務める",
      "variants": [
        "務める"
      ],
      "reading": "つとめる",
      "reading_variants": [
        "つとめる"
      ],
      "romaji": "tsutomeru",
      "part_of_speech": "verb",
      "meaning_zh": "担任（职务、角色）",
      "kanji_readings": [
        {
          "form": "務める",
          "reading": "つとめる"
        }
      ],
      "examples": [
        {
          "ja": "今日の会議は田中さんが司会を務めます。",
          "zh": "今天的会议由田中先生担任主持。",
          "focus": ["務め"],
          "zhFocus": ["担任"]
        },
        {
          "ja": "父は会社で部長を務めています。",
          "zh": "父亲在公司担任部长。",
          "focus": ["務め"],
          "zhFocus": ["担任"]
        },
        {
          "ja": "劇で主役を務めることになりました。",
          "zh": "我要在剧里担任主角了。",
          "focus": ["務める"],
          "zhFocus": ["担任"]
        }
      ],
      "note_zh": "与「勤める（任职）」「努める（努力）」同音。"
    },
    {
      "id": "n5-744",
      "jlpt": "N5",
      "headword": "番",
      "source_form": "番",
      "variants": [
        "番"
      ],
      "reading": "ばん",
      "reading_variants": [
        "ばん"
      ],
      "romaji": "ban",
      "part_of_speech": "noun",
      "meaning_zh": "轮到（某人）；看守",
      "senses_zh": [
        "轮到（某人）",
        "看守"
      ],
      "kanji_readings": [
        {
          "form": "番",
          "reading": "ばん"
        }
      ],
      "examples": [
        {
          "ja": "次は私の番です。",
          "zh": "下一个轮到我了。",
          "focus": ["番"],
          "zhFocus": ["轮到"]
        },
        {
          "ja": "ほら、あなたの番ですよ。",
          "zh": "你看，轮到你了。",
          "focus": ["番"],
          "zhFocus": ["轮到"]
        },
        {
          "ja": "少しの間、荷物の番をしてください。",
          "zh": "请帮我看一会儿行李。",
          "focus": ["番"],
          "zhFocus": ["看"]
        }
      ],
      "note_zh": "与「晩（晚上）」同音。表示“第……号”的后缀见「～番」。"
    },
    {
      "id": "n5-745",
      "jlpt": "N5",
      "headword": "拭く",
      "source_form": "拭く",
      "variants": [
        "拭く"
      ],
      "reading": "ふく",
      "reading_variants": [
        "ふく"
      ],
      "romaji": "fuku",
      "part_of_speech": "verb",
      "meaning_zh": "擦；擦拭",
      "kanji_readings": [
        {
          "form": "拭く",
          "reading": "ふく"
        }
      ],
      "examples": [
        {
          "ja": "タオルで手を拭きます。",
          "zh": "用毛巾擦手。",
          "focus": ["拭き"],
          "zhFocus": ["擦"]
        },
        {
          "ja": "食事の後で、テーブルを拭いてください。",
          "zh": "吃完饭后，请擦一下桌子。",
          "focus": ["拭い"],
          "zhFocus": ["擦"]
        },
        {
          "ja": "汗を拭きながら歩きました。",
          "zh": "一边擦汗一边走。",
          "focus": ["拭き"],
          "zhFocus": ["擦"]
        }
      ],
      "note_zh": "与「吹く」「服」同音。"
    },
    {
      "id": "n5-746",
      "jlpt": "N5",
      "headword": "防止",
      "source_form": "防止",
      "variants": [
        "防止"
      ],
      "reading": "ぼうし",
      "reading_variants": [
        "ぼうし"
      ],
      "romaji": "boushi",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "防止（名词・する动词，较书面）",
      "answer_zh": "防止（较书面）",
      "kanji_readings": [
        {
          "form": "防止",
          "reading": "ぼうし"
        }
      ],
      "examples": [
        {
          "ja": "事故を防止するために、ルールを守りましょう。",
          "zh": "为了防止事故，请遵守规则吧。",
          "focus": ["防止"],
          "zhFocus": ["防止"]
        },
        {
          "ja": "寝る前に火を消して、火事を防止します。",
          "zh": "睡前把火关掉，防止火灾。",
          "focus": ["防止"],
          "zhFocus": ["防止"]
        },
        {
          "ja": "町の人が協力して、犯罪を防止しています。",
          "zh": "镇上的人齐心协力防止犯罪。",
          "focus": ["防止"],
          "zhFocus": ["防止"]
        }
      ],
      "note_zh": "与「帽子」同音。"
    },
    {
      "id": "n5-747",
      "jlpt": "N5",
      "headword": "優しい",
      "source_form": "優しい",
      "variants": [
        "優しい"
      ],
      "reading": "やさしい",
      "reading_variants": [
        "やさしい"
      ],
      "romaji": "yasashii",
      "part_of_speech": "i-adjective",
      "meaning_zh": "温柔的；亲切的；温和的",
      "kanji_readings": [
        {
          "form": "優しい",
          "reading": "やさしい"
        }
      ],
      "examples": [
        {
          "ja": "田中さんはとても優しい人です。",
          "zh": "田中先生是个很温柔的人。",
          "focus": ["優しい"],
          "zhFocus": ["温柔"]
        },
        {
          "ja": "母はいつも優しく話してくれます。",
          "zh": "妈妈总是温柔地跟我说话。",
          "focus": ["優しく"],
          "zhFocus": ["温柔"]
        },
        {
          "ja": "このせっけんは肌に優しいです。",
          "zh": "这款肥皂对皮肤很温和。",
          "focus": ["優しい"],
          "zhFocus": ["温和"]
        }
      ],
      "note_zh": "与「易しい（简单的）」同音。"
    },
    {
      "id": "n5-748",
      "jlpt": "N5",
      "headword": "液",
      "source_form": "液",
      "variants": [
        "液"
      ],
      "reading": "えき",
      "reading_variants": [
        "えき"
      ],
      "romaji": "eki",
      "part_of_speech": "noun",
      "meaning_zh": "液体；液",
      "kanji_readings": [
        {
          "form": "液",
          "reading": "えき"
        }
      ],
      "examples": [
        {
          "ja": "瓶から液が漏れています。",
          "zh": "液体从瓶子里漏出来了。",
          "focus": ["液"],
          "zhFocus": ["液体"]
        },
        {
          "ja": "この液は水で薄めて使います。",
          "zh": "这种液体要用水稀释后使用。",
          "focus": ["液"],
          "zhFocus": ["液体"]
        },
        {
          "ja": "液が目に入らないように気をつけてください。",
          "zh": "请注意不要让液体进入眼睛。",
          "focus": ["液"],
          "zhFocus": ["液体"]
        }
      ],
      "note_zh": "与「駅（车站）」同音。"
    },
    {
      "id": "n5-749",
      "jlpt": "N5",
      "headword": "おじゃまします",
      "source_form": "おじゃまします",
      "variants": [
        "おじゃまします",
        "お邪魔します"
      ],
      "reading": "おじゃまします",
      "reading_variants": [
        "おじゃまします"
      ],
      "romaji": "ojamashimasu",
      "part_of_speech": "expression",
      "meaning_zh": "打扰了（进别人家时）",
      "kanji_readings": [
        {
          "form": "お邪魔します",
          "reading": "おじゃまします"
        }
      ],
      "examples": [
        {
          "ja": "こんにちは。おじゃまします。",
          "zh": "你好，打扰了。",
          "focus": ["おじゃまします"],
          "zhFocus": ["打扰了"]
        },
        {
          "ja": "では、おじゃまします。",
          "zh": "那么，打扰了。",
          "focus": ["おじゃまします"],
          "zhFocus": ["打扰了"]
        },
        {
          "ja": "友達の家に入るとき、「おじゃまします」と言います。",
          "zh": "进朋友家的时候，要说“打扰了”。",
          "focus": ["おじゃまします"],
          "zhFocus": ["打扰了"]
        }
      ],
      "note_zh": "进别人家或房间时说；离开时说「おじゃましました」。汉字为「お邪魔します」。"
    },
    {
      "id": "n5-750",
      "jlpt": "N5",
      "headword": "おだいじに",
      "source_form": "おだいじに",
      "variants": [
        "おだいじに",
        "お大事に"
      ],
      "reading": "おだいじに",
      "reading_variants": [
        "おだいじに"
      ],
      "romaji": "odaijini",
      "part_of_speech": "expression",
      "meaning_zh": "请多保重（对生病或受伤的人）",
      "kanji_readings": [
        {
          "form": "お大事に",
          "reading": "おだいじに"
        }
      ],
      "examples": [
        {
          "ja": "かぜですか。おだいじに。",
          "zh": "感冒了吗？请多保重。",
          "focus": ["おだいじに"],
          "zhFocus": ["请多保重"]
        },
        {
          "ja": "医者は「おだいじに」と言いました。",
          "zh": "医生说了声“请多保重”。",
          "focus": ["おだいじに"],
          "zhFocus": ["请多保重"]
        },
        {
          "ja": "どうぞおだいじにしてください。",
          "zh": "请多多保重身体。",
          "focus": ["おだいじに"],
          "zhFocus": ["保重"]
        }
      ],
      "note_zh": "对生病或受伤的人说；汉字为「お大事に」。"
    },
    {
      "id": "n5-751",
      "jlpt": "N5",
      "headword": "お願いします",
      "source_form": "お願いします",
      "variants": [
        "お願いします",
        "おねがいします"
      ],
      "reading": "おねがいします",
      "reading_variants": [
        "おねがいします"
      ],
      "romaji": "onegaishimasu",
      "part_of_speech": "expression",
      "meaning_zh": "请；拜托了",
      "kanji_readings": [
        {
          "form": "お願いします",
          "reading": "おねがいします"
        }
      ],
      "examples": [
        {
          "ja": "コーヒーを一つ、お願いします。",
          "zh": "请给我一杯咖啡。",
          "focus": ["お願いします"],
          "zhFocus": ["请"]
        },
        {
          "ja": "駅までお願いします。",
          "zh": "请开到车站。",
          "focus": ["お願いします"],
          "zhFocus": ["请"]
        },
        {
          "ja": "宿題を手伝ってください。お願いします。",
          "zh": "请帮我做作业。拜托了。",
          "focus": ["お願いします"],
          "zhFocus": ["拜托了"]
        }
      ]
    },
    {
      "id": "n5-752",
      "jlpt": "N5",
      "headword": "女の人",
      "source_form": "女の人",
      "variants": [
        "女の人"
      ],
      "reading": "おんなのひと",
      "reading_variants": [
        "おんなのひと"
      ],
      "romaji": "onnanohito",
      "part_of_speech": "noun",
      "meaning_zh": "女人；女的",
      "kanji_readings": [
        {
          "form": "女の人",
          "reading": "おんなのひと"
        }
      ],
      "examples": [
        {
          "ja": "あの女の人は先生です。",
          "zh": "那位女士是老师。",
          "focus": ["女の人"],
          "zhFocus": ["女士"]
        },
        {
          "ja": "女の人が道を聞きました。",
          "zh": "一位女士问了路。",
          "focus": ["女の人"],
          "zhFocus": ["女士"]
        },
        {
          "ja": "女の人と男の人が話しています。",
          "zh": "一个女人和一个男人在说话。",
          "focus": ["女の人"],
          "zhFocus": ["女人"]
        }
      ],
      "note_zh": "比「女」礼貌；男性是「男の人」。"
    },
    {
      "id": "n5-753",
      "jlpt": "N5",
      "headword": "こちらこそ",
      "source_form": "こちらこそ",
      "variants": [
        "こちらこそ"
      ],
      "reading": "こちらこそ",
      "reading_variants": [
        "こちらこそ"
      ],
      "romaji": "kochirakoso",
      "part_of_speech": "expression",
      "meaning_zh": "我才应该（道谢、道歉等）；彼此彼此",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "「よろしくお願いします。」「こちらこそ、よろしくお願いします。」",
          "zh": "“请多关照。”“彼此彼此，也请您多关照。”",
          "focus": ["こちらこそ"],
          "zhFocus": ["彼此彼此"]
        },
        {
          "ja": "こちらこそ、ありがとうございました。",
          "zh": "我才要谢谢您。",
          "focus": ["こちらこそ"],
          "zhFocus": ["我才要"]
        },
        {
          "ja": "こちらこそ、すみませんでした。",
          "zh": "我才应该道歉。",
          "focus": ["こちらこそ"],
          "zhFocus": ["我才应该"]
        }
      ]
    },
    {
      "id": "n5-754",
      "jlpt": "N5",
      "headword": "ごめんください",
      "source_form": "ごめんください",
      "variants": [
        "ごめんください"
      ],
      "reading": "ごめんください",
      "reading_variants": [
        "ごめんください"
      ],
      "romaji": "gomenkudasai",
      "part_of_speech": "expression",
      "meaning_zh": "有人在吗（拜访时在门口说）；打扰了",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "ごめんください。だれかいませんか。",
          "zh": "打扰了，有人在吗？",
          "focus": ["ごめんください"],
          "zhFocus": ["打扰了"]
        },
        {
          "ja": "ごめんください。田中です。",
          "zh": "打扰了，我是田中。",
          "focus": ["ごめんください"],
          "zhFocus": ["打扰了"]
        },
        {
          "ja": "ドアの前で「ごめんください」と言いました。",
          "zh": "在门口说了声“有人在吗”。",
          "focus": ["ごめんください"],
          "zhFocus": ["有人在吗"]
        }
      ],
      "note_zh": "拜访别人时在门口说；汉字为「御免ください」。"
    },
    {
      "id": "n5-755",
      "jlpt": "N5",
      "headword": "はじめまして",
      "source_form": "はじめまして",
      "variants": [
        "はじめまして",
        "初めまして"
      ],
      "reading": "はじめまして",
      "reading_variants": [
        "はじめまして"
      ],
      "romaji": "hajimemashite",
      "part_of_speech": "expression",
      "meaning_zh": "初次见面",
      "kanji_readings": [
        {
          "form": "初めまして",
          "reading": "はじめまして"
        }
      ],
      "examples": [
        {
          "ja": "はじめまして。リンです。",
          "zh": "初次见面，我是林。",
          "focus": ["はじめまして"],
          "zhFocus": ["初次见面"]
        },
        {
          "ja": "はじめまして。どうぞよろしく。",
          "zh": "初次见面，请多关照。",
          "focus": ["はじめまして"],
          "zhFocus": ["初次见面"]
        },
        {
          "ja": "新しいクラスで「はじめまして」とあいさつしました。",
          "zh": "在新班级用“初次见面”打了招呼。",
          "focus": ["はじめまして"],
          "zhFocus": ["初次见面"]
        }
      ],
      "note_zh": "汉字为「初めまして」。"
    },
    {
      "id": "n5-756",
      "jlpt": "N5",
      "headword": "おやすみ",
      "source_form": "おやすみ",
      "variants": [
        "おやすみ",
        "お休み"
      ],
      "reading": "おやすみ",
      "reading_variants": [
        "おやすみ"
      ],
      "romaji": "oyasumi",
      "part_of_speech": "expression/noun",
      "meaning_zh": "晚安；休息；休假",
      "senses_zh": [
        "晚安",
        "休息；休假"
      ],
      "kanji_readings": [
        {
          "form": "お休み",
          "reading": "おやすみ"
        }
      ],
      "examples": [
        {
          "ja": "おやすみ。また明日。",
          "zh": "晚安，明天见。",
          "focus": ["おやすみ"],
          "zhFocus": ["晚安"]
        },
        {
          "ja": "先生は今日、おやすみです。",
          "zh": "老师今天休息。",
          "focus": ["おやすみ"],
          "zhFocus": ["休息"]
        },
        {
          "ja": "明日は会社がおやすみです。",
          "zh": "明天公司放假。",
          "focus": ["おやすみ"],
          "zhFocus": ["放假"]
        }
      ],
      "note_zh": "道晚安时更礼貌的说法是「おやすみなさい」；汉字为「お休み」。"
    },
    {
      "id": "n5-757",
      "jlpt": "N5",
      "headword": "おかえり",
      "source_form": "おかえり",
      "variants": [
        "おかえり",
        "お帰り"
      ],
      "reading": "おかえり",
      "reading_variants": [
        "おかえり"
      ],
      "romaji": "okaeri",
      "part_of_speech": "expression",
      "meaning_zh": "你回来了（迎接回家的人）",
      "kanji_readings": [
        {
          "form": "お帰り",
          "reading": "おかえり"
        }
      ],
      "examples": [
        {
          "ja": "おかえり。今日は早かったね。",
          "zh": "你回来啦。今天挺早的嘛。",
          "focus": ["おかえり"],
          "zhFocus": ["你回来啦"]
        },
        {
          "ja": "「ただいま。」「おかえりなさい。」",
          "zh": "“我回来了。”“你回来了。”",
          "focus": ["おかえり"],
          "zhFocus": ["你回来了"]
        },
        {
          "ja": "母は笑顔で「おかえり」と言いました。",
          "zh": "妈妈笑着说“你回来了”。",
          "focus": ["おかえり"],
          "zhFocus": ["你回来了"]
        }
      ],
      "note_zh": "更礼貌的说法是「おかえりなさい」；汉字为「お帰り」。"
    },
    {
      "id": "n5-758",
      "jlpt": "N5",
      "headword": "おさきに",
      "source_form": "おさきに",
      "variants": [
        "おさきに",
        "お先に"
      ],
      "reading": "おさきに",
      "reading_variants": [
        "おさきに"
      ],
      "romaji": "osakini",
      "part_of_speech": "expression",
      "meaning_zh": "我先（走、做）了；您先请",
      "kanji_readings": [
        {
          "form": "お先に",
          "reading": "おさきに"
        }
      ],
      "examples": [
        {
          "ja": "おさきに失礼します。",
          "zh": "我先告辞了。",
          "focus": ["おさきに"],
          "zhFocus": ["先"]
        },
        {
          "ja": "どうぞ、おさきに。",
          "zh": "您先请。",
          "focus": ["おさきに"],
          "zhFocus": ["您先"]
        },
        {
          "ja": "今日はおさきに帰ります。",
          "zh": "今天我先回去了。",
          "focus": ["おさきに"],
          "zhFocus": ["先"]
        }
      ],
      "note_zh": "汉字为「お先に」。"
    },
    {
      "id": "n5-759",
      "jlpt": "N5",
      "headword": "元気でね",
      "source_form": "元気でね",
      "variants": [
        "元気でね"
      ],
      "reading": "げんきでね",
      "reading_variants": [
        "げんきでね"
      ],
      "romaji": "genki de ne",
      "part_of_speech": "expression",
      "meaning_zh": "保重哦（分别时）",
      "kanji_readings": [
        {
          "form": "元気でね",
          "reading": "げんきでね"
        }
      ],
      "examples": [
        {
          "ja": "じゃあ、元気でね。",
          "zh": "那么，保重哦。",
          "focus": ["元気でね"],
          "zhFocus": ["保重哦"]
        },
        {
          "ja": "国に帰っても、元気でね。",
          "zh": "回国以后也要保重哦。",
          "focus": ["元気でね"],
          "zhFocus": ["保重哦"]
        },
        {
          "ja": "「元気でね」と言って、友達と別れました。",
          "zh": "说了声“保重哦”，和朋友分别了。",
          "focus": ["元気でね"],
          "zhFocus": ["保重哦"]
        }
      ],
      "note_zh": "分别时对亲近的人说。"
    },
    {
      "id": "n5-760",
      "jlpt": "N5",
      "headword": "バイバイ",
      "source_form": "バイバイ",
      "variants": [
        "バイバイ"
      ],
      "reading": "バイバイ",
      "reading_variants": [
        "バイバイ"
      ],
      "romaji": "baibai",
      "part_of_speech": "expression",
      "meaning_zh": "拜拜；再见",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "バイバイ、また明日ね。",
          "zh": "拜拜，明天见。",
          "focus": ["バイバイ"],
          "zhFocus": ["拜拜"]
        },
        {
          "ja": "子供が手を振って、バイバイと言いました。",
          "zh": "孩子挥着手说了声拜拜。",
          "focus": ["バイバイ"],
          "zhFocus": ["拜拜"]
        },
        {
          "ja": "駅で友達にバイバイしました。",
          "zh": "在车站和朋友说了拜拜。",
          "focus": ["バイバイ"],
          "zhFocus": ["拜拜"]
        }
      ],
      "note_zh": "口语，多用于亲近的人或小孩之间。"
    },
    {
      "id": "n5-761",
      "jlpt": "N5",
      "headword": "おはよう",
      "source_form": "おはよう",
      "variants": [
        "おはよう",
        "お早う"
      ],
      "reading": "おはよう",
      "reading_variants": [
        "おはよう"
      ],
      "romaji": "ohayou",
      "part_of_speech": "expression",
      "meaning_zh": "早上好（对熟人）",
      "kanji_readings": [
        {
          "form": "お早う",
          "reading": "おはよう"
        }
      ],
      "examples": [
        {
          "ja": "おはよう。今日も暑いね。",
          "zh": "早上好。今天也很热啊。",
          "focus": ["おはよう"],
          "zhFocus": ["早上好"]
        },
        {
          "ja": "朝、母に「おはよう」と言いました。",
          "zh": "早上对妈妈说了“早上好”。",
          "focus": ["おはよう"],
          "zhFocus": ["早上好"]
        },
        {
          "ja": "学校で友達に会って、「おはよう」とあいさつしました。",
          "zh": "在学校见到朋友，打招呼说“早上好”。",
          "focus": ["おはよう"],
          "zhFocus": ["早上好"]
        }
      ],
      "note_zh": "对长辈或在正式场合说「おはようございます」；汉字为「お早う」，一般写假名。"
    },
    {
      "id": "n5-762",
      "jlpt": "N5",
      "headword": "いってらっしゃい",
      "source_form": "いってらっしゃい",
      "variants": [
        "いってらっしゃい",
        "行ってらっしゃい"
      ],
      "reading": "いってらっしゃい",
      "reading_variants": [
        "いってらっしゃい"
      ],
      "romaji": "itterasshai",
      "part_of_speech": "expression",
      "meaning_zh": "（对出门的人说）慢走；路上小心",
      "kanji_readings": [
        {
          "form": "行ってらっしゃい",
          "reading": "いってらっしゃい"
        }
      ],
      "examples": [
        {
          "ja": "いってらっしゃい。気をつけてね。",
          "zh": "慢走，路上小心哦。",
          "focus": ["いってらっしゃい"],
          "zhFocus": ["慢走"]
        },
        {
          "ja": "母は毎朝「いってらっしゃい」と言ってくれます。",
          "zh": "妈妈每天早上都会对我说“路上小心”。",
          "focus": ["いってらっしゃい"],
          "zhFocus": ["路上小心"]
        },
        {
          "ja": "出かける父に「いってらっしゃい」と言いました。",
          "zh": "对要出门的爸爸说了“慢走”。",
          "focus": ["いってらっしゃい"],
          "zhFocus": ["慢走"]
        }
      ],
      "note_zh": "出门的人说「いってきます（我走了）」；汉字为「行ってらっしゃい」，一般写假名。"
    },
    {
      "id": "n5-763",
      "jlpt": "N5",
      "headword": "こんばんは",
      "source_form": "こんばんは",
      "variants": [
        "こんばんは",
        "今晩は"
      ],
      "reading": "こんばんは",
      "reading_variants": [
        "こんばんは"
      ],
      "romaji": "konbanwa",
      "part_of_speech": "expression",
      "meaning_zh": "晚上好",
      "kanji_readings": [
        {
          "form": "今晩は",
          "reading": "こんばんは"
        }
      ],
      "examples": [
        {
          "ja": "こんばんは。寒いですね。",
          "zh": "晚上好，好冷啊。",
          "focus": ["こんばんは"],
          "zhFocus": ["晚上好"]
        },
        {
          "ja": "夜、隣の人に「こんばんは」とあいさつしました。",
          "zh": "晚上跟邻居打招呼说“晚上好”。",
          "focus": ["こんばんは"],
          "zhFocus": ["晚上好"]
        },
        {
          "ja": "こんばんは、田中です。",
          "zh": "晚上好，我是田中。",
          "focus": ["こんばんは"],
          "zhFocus": ["晚上好"]
        }
      ],
      "note_zh": "最后的「は」读作「わ」；汉字为「今晩は」，一般写假名。"
    },
    {
      "id": "n5-764",
      "jlpt": "N5",
      "headword": "ごちそうさま",
      "source_form": "ごちそうさま",
      "variants": [
        "ごちそうさま",
        "ご馳走様"
      ],
      "reading": "ごちそうさま",
      "reading_variants": [
        "ごちそうさま"
      ],
      "romaji": "gochisousama",
      "part_of_speech": "expression",
      "meaning_zh": "（饭后）我吃饱了；多谢款待",
      "kanji_readings": [
        {
          "form": "ご馳走様",
          "reading": "ごちそうさま"
        }
      ],
      "examples": [
        {
          "ja": "ごちそうさま。とてもおいしかったです。",
          "zh": "我吃饱了，非常好吃。",
          "focus": ["ごちそうさま"],
          "zhFocus": ["我吃饱了"]
        },
        {
          "ja": "食べ終わったら、「ごちそうさま」と言います。",
          "zh": "吃完饭要说“多谢款待”。",
          "focus": ["ごちそうさま"],
          "zhFocus": ["多谢款待"]
        },
        {
          "ja": "ごちそうさまでした。また来ます。",
          "zh": "多谢款待，我还会再来的。",
          "focus": ["ごちそうさま"],
          "zhFocus": ["多谢款待"]
        }
      ],
      "note_zh": "更礼貌的说法是「ごちそうさまでした」；饭前说「いただきます」。汉字为「ご馳走様」，一般写假名。"
    },
    {
      "id": "n5-765",
      "jlpt": "N5",
      "headword": "ごめん",
      "source_form": "ごめん",
      "variants": [
        "ごめん",
        "御免"
      ],
      "reading": "ごめん",
      "reading_variants": [
        "ごめん"
      ],
      "romaji": "gomen",
      "part_of_speech": "expression",
      "meaning_zh": "对不起（随便的说法）",
      "kanji_readings": [
        {
          "form": "御免",
          "reading": "ごめん"
        }
      ],
      "examples": [
        {
          "ja": "ごめん、遅れちゃった。",
          "zh": "对不起，我来晚了。",
          "focus": ["ごめん"],
          "zhFocus": ["对不起"]
        },
        {
          "ja": "昨日はごめん。言いすぎたよ。",
          "zh": "昨天对不起，我说得太过分了。",
          "focus": ["ごめん"],
          "zhFocus": ["对不起"]
        },
        {
          "ja": "弟に「ごめん」と謝りました。",
          "zh": "对弟弟说了声“对不起”。",
          "focus": ["ごめん"],
          "zhFocus": ["对不起"]
        }
      ],
      "note_zh": "比「ごめんなさい」随便，用于朋友、家人之间；汉字为「御免」，一般写假名。"
    },
    {
      "id": "n5-766",
      "jlpt": "N5",
      "headword": "さようなら",
      "source_form": "さようなら",
      "variants": [
        "さようなら"
      ],
      "reading": "さようなら",
      "reading_variants": [
        "さようなら"
      ],
      "romaji": "sayounara",
      "part_of_speech": "expression",
      "meaning_zh": "再见",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "さようなら。また明日。",
          "zh": "再见，明天见。",
          "focus": ["さようなら"],
          "zhFocus": ["再见"]
        },
        {
          "ja": "先生に「さようなら」と言って、帰りました。",
          "zh": "对老师说了“再见”就回家了。",
          "focus": ["さようなら"],
          "zhFocus": ["再见"]
        },
        {
          "ja": "駅で友達にさようならを言いました。",
          "zh": "在车站跟朋友道了别。",
          "focus": ["さようなら"],
          "zhFocus": ["道了别"]
        }
      ],
      "note_zh": "也说「さよなら」；和朋友、家人之间日常分别多说「じゃあね」「またね」。"
    }
  ]
};

window.AYAYA_N5_WORDS = window.AYAYA_N5_CODEX_VOCAB.entries.map((entry) => [entry.headword, entry.reading, entry.meaning_zh, entry.examples[0].ja, entry.examples[0].zh]);

window.AYAYA_N5_TATOEBA_EXAMPLES = (() => {
  const candidates = new Map();
  for (const entry of window.AYAYA_N5_CODEX_VOCAB.entries) {
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
