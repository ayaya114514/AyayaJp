// Ayaya JP - Codex-readable curated JLPT N5 vocabulary data.
// Generated from the uploaded n5-vocab.js structure, with corrected Simplified Chinese meanings and beginner-friendly Japanese examples.
// Codex extraction target: window.AYAYA_N5_CODEX_VOCAB.entries
// App compatibility: this file also defines window.AYAYA_N5_WORDS and window.AYAYA_N5_TATOEBA_EXAMPLES.

window.AYAYA_N5_CODEX_VOCAB = {
  "schema": {
    "schema_version": "1.0.0",
    "generated_on": "2026-08-18",
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
      "kanji_readings": "含汉字词形的整词读音，用于生成 ruby/furigana。",
      "examples": "三个自然、短句优先的日语例句；zh 为简体中文翻译。",
      "note_zh": "必要时说明写法、用法或兼容注意。",
      "merged_source_ids": "已合并或跨级去重的旧 source ID，用于迁移既有学习进度。"
    },
    "compatibility": {
      "AYAYA_N5_WORDS": "[headword, reading, meaning_zh, first_example_ja, first_example_zh]",
      "AYAYA_N5_TATOEBA_EXAMPLES": "按规范词形、全部 variants 与全部 source_form 写法建立精选例句索引；有歧义的别名不建立唯一映射。"
    },
    "source_notes": [
      "The duplicate 在る / 有る records were merged under the modern kana headword ある while preserving both orthographic variants.",
      "Reading, part-of-speech, example alignment, same-sense duplicates and retained cross-level distinctions were re-audited on 2026-08-18; merged_source_ids preserve prior study state."
    ],
    "entry_count": 716
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
      "part_of_speech": "adverb/expression",
      "meaning_zh": "啊；哦",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "ああ、分かりました。",
          "zh": "啊，我明白了。"
        },
        {
          "ja": "ああ、いい天気ですね。",
          "zh": "啊，天气真好。"
        },
        {
          "ja": "ああ、そうですか。",
          "zh": "哦，是这样啊。"
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
          "zh": "在车站见朋友。"
        },
        {
          "ja": "明日、先生に会います。",
          "zh": "明天见老师。"
        },
        {
          "ja": "また会いましょう。",
          "zh": "下次再见吧。"
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
          "ja": "空は青です。",
          "zh": "天空是蓝色的。"
        },
        {
          "ja": "青が好きです。",
          "zh": "我喜欢蓝色。"
        },
        {
          "ja": "青のペンを使います。",
          "zh": "使用蓝色的笔。"
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
          "ja": "この空は青いです。",
          "zh": "这个天空很蓝。"
        },
        {
          "ja": "とても青いですね。",
          "zh": "真蓝啊。"
        },
        {
          "ja": "青いものが好きです。",
          "zh": "喜欢蓝的东西。"
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
          "zh": "买了红色的包。"
        },
        {
          "ja": "信号が赤です。",
          "zh": "信号灯是红色。"
        },
        {
          "ja": "赤が好きです。",
          "zh": "我喜欢红色。"
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
          "zh": "这个花很红。"
        },
        {
          "ja": "とても赤いですね。",
          "zh": "真红啊。"
        },
        {
          "ja": "赤いものが好きです。",
          "zh": "喜欢红的东西。"
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
      "kanji_readings": [
        {
          "form": "明るい",
          "reading": "あかるい"
        }
      ],
      "examples": [
        {
          "ja": "この部屋は明るいです。",
          "zh": "这个房间很明亮。"
        },
        {
          "ja": "とても明るいですね。",
          "zh": "真明亮啊。"
        },
        {
          "ja": "明るいものが好きです。",
          "zh": "喜欢明亮的东西。"
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
          "zh": "秋天很凉爽。"
        },
        {
          "ja": "秋に山へ行きます。",
          "zh": "秋天去山里。"
        },
        {
          "ja": "秋の空はきれいです。",
          "zh": "秋天的天空很美。"
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
      "meaning_zh": "开；打开；开始营业（自动词）",
      "kanji_readings": [
        {
          "form": "開く",
          "reading": "あく"
        }
      ],
      "examples": [
        {
          "ja": "ドアが開いています。",
          "zh": "门开着。"
        },
        {
          "ja": "店は九時に開きます。",
          "zh": "店九点开门。"
        },
        {
          "ja": "窓が少し開いています。",
          "zh": "窗户开着一点。"
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
          "zh": "请打开窗户。"
        },
        {
          "ja": "朝、店を開けます。",
          "zh": "早上开店。"
        },
        {
          "ja": "箱を開けました。",
          "zh": "打开了盒子。"
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
        "上げる"
      ],
      "reading": "あげる",
      "reading_variants": [
        "あげる"
      ],
      "romaji": "ageru",
      "part_of_speech": "verb",
      "meaning_zh": "举起；提高；给（别人）",
      "kanji_readings": [
        {
          "form": "上げる",
          "reading": "あげる"
        }
      ],
      "examples": [
        {
          "ja": "手を上げてください。",
          "zh": "请举手。"
        },
        {
          "ja": "音を少し上げます。",
          "zh": "把声音调高一点。"
        },
        {
          "ja": "弟にプレゼントをあげます。",
          "zh": "送礼物给弟弟。"
        }
      ],
      "note_zh": ""
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
          "zh": "早上去学校。"
        },
        {
          "ja": "朝は忙しいです。",
          "zh": "早上很忙。"
        },
        {
          "ja": "朝、友達に会います。",
          "zh": "早上见朋友。"
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
          "ja": "朝ご飯を食べます。",
          "zh": "吃早饭。"
        },
        {
          "ja": "朝ご飯が好きです。",
          "zh": "喜欢早饭。"
        },
        {
          "ja": "朝ご飯をください。",
          "zh": "请给我早饭。"
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
          "zh": "后天去日本。"
        },
        {
          "ja": "明後日は休みです。",
          "zh": "后天休息。"
        },
        {
          "ja": "明後日、友達に会います。",
          "zh": "后天见朋友。"
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
          "ja": "足が痛いです。",
          "zh": "脚疼。"
        },
        {
          "ja": "足で歩きます。",
          "zh": "用脚走路。"
        },
        {
          "ja": "足を洗います。",
          "zh": "洗脚。"
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
          "zh": "明天去学校。"
        },
        {
          "ja": "明日は忙しいです。",
          "zh": "明天很忙。"
        },
        {
          "ja": "明日、友達に会います。",
          "zh": "明天见朋友。"
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
      "meaning_zh": "那里；那个地方",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "あそこに銀行があります。",
          "zh": "那边有银行。"
        },
        {
          "ja": "あそこで友達に会います。",
          "zh": "在那边见朋友。"
        },
        {
          "ja": "あそこは学校です。",
          "zh": "那边是学校。"
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
          "zh": "孩子在公园玩。"
        },
        {
          "ja": "日曜日に友達と遊びます。",
          "zh": "星期天和朋友玩。"
        },
        {
          "ja": "外で遊びましょう。",
          "zh": "在外面玩吧。"
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
          "ja": "この部屋は暖かいです。",
          "zh": "这个房间很暖和。"
        },
        {
          "ja": "とても暖かいですね。",
          "zh": "真暖和啊。"
        },
        {
          "ja": "暖かいものが好きです。",
          "zh": "喜欢暖和的东西。"
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
      "kanji_readings": [
        {
          "form": "頭",
          "reading": "あたま"
        }
      ],
      "examples": [
        {
          "ja": "頭が痛いです。",
          "zh": "头疼。"
        },
        {
          "ja": "頭に帽子をかぶります。",
          "zh": "头上戴帽子。"
        },
        {
          "ja": "朝、頭を洗いました。",
          "zh": "早上洗了头。"
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
          "zh": "这个鞋很新。"
        },
        {
          "ja": "とても新しいですね。",
          "zh": "真新啊。"
        },
        {
          "ja": "新しいものが好きです。",
          "zh": "喜欢新的东西。"
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
      "meaning_zh": "那边；那位（礼貌说法）",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "あちらへどうぞ。",
          "zh": "请到那边。"
        },
        {
          "ja": "あちらは先生です。",
          "zh": "那位是老师。"
        },
        {
          "ja": "駅はあちらです。",
          "zh": "车站在那边。"
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
          "zh": "今天很热。"
        },
        {
          "ja": "暑い日が続きます。",
          "zh": "热的天气会持续。"
        },
        {
          "ja": "外はとても暑いです。",
          "zh": "外面非常热。"
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
          "zh": "这个茶很烫。"
        },
        {
          "ja": "とても熱いですね。",
          "zh": "真烫啊。"
        },
        {
          "ja": "熱いものが好きです。",
          "zh": "喜欢烫的东西。"
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
          "ja": "この本は厚いです。",
          "zh": "这个书很厚。"
        },
        {
          "ja": "とても厚いですね。",
          "zh": "真厚啊。"
        },
        {
          "ja": "厚いものが好きです。",
          "zh": "喜欢厚的东西。"
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
      "romaji": "acchi",
      "part_of_speech": "pronoun/demonstrative",
      "meaning_zh": "那边（口语）",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "あっちへ行きます。",
          "zh": "去那边。"
        },
        {
          "ja": "あっちに店があります。",
          "zh": "那边有店。"
        },
        {
          "ja": "あっちを見てください。",
          "zh": "请看那边。"
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
      "kanji_readings": [
        {
          "form": "後",
          "reading": "あと"
        }
      ],
      "examples": [
        {
          "ja": "仕事の後で勉強します。",
          "zh": "工作后学习。"
        },
        {
          "ja": "後で電話します。",
          "zh": "之后打电话。"
        },
        {
          "ja": "あと少し待ってください。",
          "zh": "请再等一会儿。"
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
      "part_of_speech": "pronoun/demonstrative",
      "meaning_zh": "你",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "あなたの名前は何ですか。",
          "zh": "你的名字是什么？"
        },
        {
          "ja": "あなたは学生ですか。",
          "zh": "你是学生吗？"
        },
        {
          "ja": "これはあなたの本ですか。",
          "zh": "这是你的书吗？"
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
          "zh": "我哥哥是公司职员。"
        },
        {
          "ja": "兄と映画を見ます。",
          "zh": "和哥哥看电影。"
        },
        {
          "ja": "兄に電話しました。",
          "zh": "给哥哥打了电话。"
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
          "zh": "我姐姐是老师。"
        },
        {
          "ja": "姉と買い物に行きます。",
          "zh": "和姐姐去买东西。"
        },
        {
          "ja": "姉に本を借りました。",
          "zh": "向姐姐借了书。"
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
          "zh": "住在公寓里。"
        },
        {
          "ja": "駅の近くのアパートです。",
          "zh": "是在车站附近的公寓。"
        },
        {
          "ja": "新しいアパートを借りました。",
          "zh": "租了新公寓。"
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
      "part_of_speech": "pronoun/demonstrative",
      "meaning_zh": "那个（连体词）；嗯……",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "あの人は先生です。",
          "zh": "那个人是老师。"
        },
        {
          "ja": "あの店は安いです。",
          "zh": "那家店很便宜。"
        },
        {
          "ja": "あの、すみません。",
          "zh": "那个，不好意思。"
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
          "zh": "早上冲澡。"
        },
        {
          "ja": "汗をかいたので、シャワーを浴びました。",
          "zh": "因为出了汗，所以冲了澡。"
        },
        {
          "ja": "家に帰ってからシャワーを浴びます。",
          "zh": "回家后冲澡。"
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
          "ja": "この道は危ないです。",
          "zh": "这条路很危险。"
        },
        {
          "ja": "とても危ないですね。",
          "zh": "真的很危险啊。"
        },
        {
          "ja": "危ない場所に入らないでください。",
          "zh": "请不要进入危险的地方。"
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
      "kanji_readings": [
        {
          "form": "甘い",
          "reading": "あまい"
        }
      ],
      "examples": [
        {
          "ja": "このケーキは甘いです。",
          "zh": "这个蛋糕很甜。"
        },
        {
          "ja": "とても甘いですね。",
          "zh": "真甜啊。"
        },
        {
          "ja": "甘いものが好きです。",
          "zh": "喜欢甜的东西。"
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
        "余り"
      ],
      "reading": "あまり",
      "reading_variants": [
        "あまり"
      ],
      "romaji": "amari",
      "part_of_speech": "noun",
      "meaning_zh": "剩余；不太……（接否定）",
      "kanji_readings": [
        {
          "form": "余り",
          "reading": "あまり"
        }
      ],
      "examples": [
        {
          "ja": "あまり食べません。",
          "zh": "不太吃。"
        },
        {
          "ja": "時間はあまりありません。",
          "zh": "时间不太多。"
        },
        {
          "ja": "お金が余りました。",
          "zh": "钱剩下了。"
        }
      ],
      "note_zh": ""
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
          "zh": "正在下雨。"
        },
        {
          "ja": "今日は雨です。",
          "zh": "今天下雨。"
        },
        {
          "ja": "雨の日は出かけません。",
          "zh": "下雨天不出门。"
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
          "zh": "请给我一颗糖。"
        },
        {
          "ja": "子供に飴をあげます。",
          "zh": "给孩子糖。"
        },
        {
          "ja": "甘い飴が好きです。",
          "zh": "喜欢甜糖。"
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
          "ja": "手を洗います。",
          "zh": "洗手。"
        },
        {
          "ja": "朝、顔を洗います。",
          "zh": "早上洗脸。"
        },
        {
          "ja": "皿をきれいに洗いました。",
          "zh": "把盘子洗干净了。"
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
          "zh": "桌子上有书。"
        },
        {
          "ja": "時間があります。",
          "zh": "有时间。"
        },
        {
          "ja": "駅の近くに店があります。",
          "zh": "车站附近有商店。"
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
          "zh": "走路去车站。"
        },
        {
          "ja": "公園をゆっくり歩きました。",
          "zh": "在公园慢慢走了走。"
        },
        {
          "ja": "毎朝三十分歩きます。",
          "zh": "每天早上走三十分钟。"
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
          "zh": "那是什么？"
        },
        {
          "ja": "あれは私のかばんです。",
          "zh": "那是我的包。"
        },
        {
          "ja": "あれを見てください。",
          "zh": "请看那个。"
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
          "zh": "这本书很好。"
        },
        {
          "ja": "いい天気ですね。",
          "zh": "天气真好。"
        },
        {
          "ja": "いい友達がいます。",
          "zh": "我有好朋友。"
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
      "part_of_speech": "adverb/expression",
      "meaning_zh": "不；不是",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "いいえ、違います。",
          "zh": "不，不是。"
        },
        {
          "ja": "いいえ、行きません。",
          "zh": "不，不去。"
        },
        {
          "ja": "いいえ、大丈夫です。",
          "zh": "不，没关系。"
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
      "meaning_zh": "说",
      "kanji_readings": [
        {
          "form": "言う",
          "reading": "いう"
        }
      ],
      "examples": [
        {
          "ja": "もう一度言ってください。",
          "zh": "请再说一次。"
        },
        {
          "ja": "友達にありがとうと言いました。",
          "zh": "对朋友说了谢谢。"
        },
        {
          "ja": "先生はだめだと言いました。",
          "zh": "老师说不行。"
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
      "meaning_zh": "家；房子",
      "kanji_readings": [
        {
          "form": "家",
          "reading": "いえ"
        }
      ],
      "examples": [
        {
          "ja": "家へ帰ります。",
          "zh": "回家。"
        },
        {
          "ja": "家で勉強します。",
          "zh": "在家学习。"
        },
        {
          "ja": "私の家は駅の近くです。",
          "zh": "我家在车站附近。"
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
      "part_of_speech": "adverb/expression",
      "meaning_zh": "如何；怎么样（礼貌说法）",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "お茶はいかがですか。",
          "zh": "茶怎么样？/要喝茶吗？"
        },
        {
          "ja": "日本はいかがですか。",
          "zh": "日本怎么样？"
        },
        {
          "ja": "もう一ついかがですか。",
          "zh": "再来一个怎么样？"
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
          "ja": "明日、学校へ行きます。",
          "zh": "明天去学校。"
        },
        {
          "ja": "駅まで歩いて行きます。",
          "zh": "走路去车站。"
        },
        {
          "ja": "友達と日本へ行きます。",
          "zh": "和朋友去日本。"
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
      "part_of_speech": "interrogative/counter",
      "meaning_zh": "几个；几岁",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "りんごはいくつありますか。",
          "zh": "有几个苹果？"
        },
        {
          "ja": "お子さんはいくつですか。",
          "zh": "您的孩子几岁？"
        },
        {
          "ja": "いくつ買いますか。",
          "zh": "买几个？"
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
          "zh": "这个多少钱？"
        },
        {
          "ja": "全部でいくらですか。",
          "zh": "一共多少钱？"
        },
        {
          "ja": "いくら払いましたか。",
          "zh": "付了多少钱？"
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
          "ja": "池を見ます。",
          "zh": "看池塘。"
        },
        {
          "ja": "池がきれいです。",
          "zh": "池塘很美。"
        },
        {
          "ja": "池があります。",
          "zh": "有池塘。"
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
          "ja": "医者に会います。",
          "zh": "见医生。"
        },
        {
          "ja": "医者と話します。",
          "zh": "和医生说话。"
        },
        {
          "ja": "近所の医者はとても親切です。",
          "zh": "附近的医生非常亲切。"
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
          "ja": "椅子を使います。",
          "zh": "使用椅子。"
        },
        {
          "ja": "椅子を買いました。",
          "zh": "买了椅子。"
        },
        {
          "ja": "椅子に座ってください。",
          "zh": "请坐在椅子上。"
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
          "ja": "この日は忙しいです。",
          "zh": "这个天很忙。"
        },
        {
          "ja": "とても忙しいですね。",
          "zh": "真忙啊。"
        },
        {
          "ja": "忙しいものが好きです。",
          "zh": "喜欢忙的东西。"
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
          "ja": "この足は痛いです。",
          "zh": "这个脚很疼。"
        },
        {
          "ja": "とても痛いですね。",
          "zh": "真疼啊。"
        },
        {
          "ja": "痛いものが好きです。",
          "zh": "喜欢疼的东西。"
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
      "part_of_speech": "noun",
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
          "zh": "一加一等于二。"
        },
        {
          "ja": "答えは一です。",
          "zh": "答案是一。"
        },
        {
          "ja": "紙に一と書いてください。",
          "zh": "请在纸上写一。"
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
      "kanji_readings": [
        {
          "form": "一日",
          "reading": "いちにち"
        }
      ],
      "examples": [
        {
          "ja": "今日は一日家にいます。",
          "zh": "今天一整天都在家。"
        },
        {
          "ja": "一日三回薬を飲みます。",
          "zh": "一天吃三次药。"
        },
        {
          "ja": "楽しい一日でした。",
          "zh": "是开心的一天。"
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
      "part_of_speech": "noun",
      "meaning_zh": "第一；最",
      "kanji_readings": [
        {
          "form": "一番",
          "reading": "いちばん"
        }
      ],
      "examples": [
        {
          "ja": "これが一番好きです。",
          "zh": "最喜欢这个。"
        },
        {
          "ja": "一番前に座ります。",
          "zh": "坐在最前面。"
        },
        {
          "ja": "日本語が一番難しいです。",
          "zh": "日语最难。"
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
      "part_of_speech": "adverb/expression",
      "meaning_zh": "什么时候",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "いつ日本へ行きますか。",
          "zh": "你什么时候去日本？"
        },
        {
          "ja": "学校はいつ始まりますか。",
          "zh": "学校什么时候开始？"
        },
        {
          "ja": "いつ会えますか。",
          "zh": "什么时候能见面？"
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
      "kanji_readings": [
        {
          "form": "五日",
          "reading": "いつか"
        }
      ],
      "examples": [
        {
          "ja": "五日に会いましょう。",
          "zh": "五号见吧。"
        },
        {
          "ja": "五日は休みです。",
          "zh": "五号休息。"
        },
        {
          "ja": "五日に日本へ行きます。",
          "zh": "五号去日本。"
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
      "kanji_readings": [
        {
          "form": "一緒",
          "reading": "いっしょ"
        }
      ],
      "examples": [
        {
          "ja": "一緒に勉強しましょう。",
          "zh": "一起学习吧。"
        },
        {
          "ja": "友達と一緒に帰ります。",
          "zh": "和朋友一起回去。"
        },
        {
          "ja": "一緒に写真を撮りました。",
          "zh": "一起拍了照片。"
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
          "zh": "有五个苹果。"
        },
        {
          "ja": "五つください。",
          "zh": "请给我五个。"
        },
        {
          "ja": "五つの漢字を覚えます。",
          "zh": "记五个汉字。"
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
      "part_of_speech": "adverb/expression",
      "meaning_zh": "总是；平时",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "いつも七時に起きます。",
          "zh": "总是七点起床。"
        },
        {
          "ja": "母はいつも元気です。",
          "zh": "妈妈总是很有精神。"
        },
        {
          "ja": "いつもこの店で買います。",
          "zh": "总是在这家店买。"
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
          "zh": "公园里有狗。"
        },
        {
          "ja": "犬と散歩します。",
          "zh": "和狗散步。"
        },
        {
          "ja": "白い犬が好きです。",
          "zh": "喜欢白狗。"
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
          "zh": "现在几点？"
        },
        {
          "ja": "今、勉強しています。",
          "zh": "现在正在学习。"
        },
        {
          "ja": "今は忙しいです。",
          "zh": "现在很忙。"
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
          "zh": "这个词是什么意思？"
        },
        {
          "ja": "意味が分かりません。",
          "zh": "不明白意思。"
        },
        {
          "ja": "二つの意味があります。",
          "zh": "有两个意思。"
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
          "zh": "我妹妹是学生。"
        },
        {
          "ja": "妹と公園へ行きます。",
          "zh": "和妹妹去公园。"
        },
        {
          "ja": "妹にお菓子をあげました。",
          "zh": "给了妹妹点心。"
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
      "meaning_zh": "讨厌；不愿意；不喜欢",
      "kanji_readings": [
        {
          "form": "嫌",
          "reading": "いや"
        }
      ],
      "examples": [
        {
          "ja": "辛い食べ物は嫌です。",
          "zh": "我不喜欢辣的食物。"
        },
        {
          "ja": "一人で行くのは嫌です。",
          "zh": "我不想一个人去。"
        },
        {
          "ja": "嫌なことを忘れました。",
          "zh": "忘掉了讨厌的事。"
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
          "zh": "这栋建筑的入口在那里。"
        },
        {
          "ja": "入口で切符を見せます。",
          "zh": "在入口处出示票。"
        },
        {
          "ja": "入口で友達を待ちます。",
          "zh": "在入口处等朋友。"
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
          "zh": "房间里有人。"
        },
        {
          "ja": "公園に子供がいます。",
          "zh": "公园里有孩子。"
        },
        {
          "ja": "先生は教室にいます。",
          "zh": "老师在教室里。"
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
          "zh": "需要水。"
        },
        {
          "ja": "新しいノートが要ります。",
          "zh": "需要新的笔记本。"
        },
        {
          "ja": "お金はあまり要りません。",
          "zh": "不太需要钱。"
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
          "zh": "把书放进包里。"
        },
        {
          "ja": "コーヒーに砂糖を入れます。",
          "zh": "往咖啡里放糖。"
        },
        {
          "ja": "名前をここに入れてください。",
          "zh": "请把名字填在这里。"
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
          "zh": "你喜欢什么颜色？"
        },
        {
          "ja": "この色はきれいです。",
          "zh": "这个颜色很漂亮。"
        },
        {
          "ja": "赤い色の花があります。",
          "zh": "有红色的花。"
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
      "part_of_speech": "noun",
      "meaning_zh": "各种各样",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "店に色々な物があります。",
          "zh": "店里有各种东西。"
        },
        {
          "ja": "週末に色々な所へ行きました。",
          "zh": "周末去了各种地方。"
        },
        {
          "ja": "色々教えてください。",
          "zh": "请教我各种东西。"
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
          "ja": "机の上に本があります。",
          "zh": "桌子上有书。"
        },
        {
          "ja": "上を見てください。",
          "zh": "请往上看。"
        },
        {
          "ja": "階段を上へ行きます。",
          "zh": "上楼梯往上走。"
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
          "zh": "学校在医院后面。"
        },
        {
          "ja": "後ろを見ないでください。",
          "zh": "请不要看后面。"
        },
        {
          "ja": "私の後ろに友達がいます。",
          "zh": "我后面有朋友。"
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
      "kanji_readings": [
        {
          "form": "薄い",
          "reading": "うすい"
        }
      ],
      "examples": [
        {
          "ja": "この本は薄いです。",
          "zh": "这个书很薄。"
        },
        {
          "ja": "とても薄いですね。",
          "zh": "真薄啊。"
        },
        {
          "ja": "薄いものが好きです。",
          "zh": "喜欢薄的东西。"
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
          "zh": "唱歌。"
        },
        {
          "ja": "この歌が好きです。",
          "zh": "我喜欢这首歌。"
        },
        {
          "ja": "新しい歌を覚えました。",
          "zh": "记住了新歌。"
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
          "zh": "和朋友唱歌。"
        },
        {
          "ja": "カラオケで歌いました。",
          "zh": "在卡拉OK唱了歌。"
        },
        {
          "ja": "大きな声で歌ってください。",
          "zh": "请大声唱。"
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
      "meaning_zh": "家；自己家；我们这边",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "うちへ帰ります。",
          "zh": "回家。"
        },
        {
          "ja": "うちに猫がいます。",
          "zh": "我家有猫。"
        },
        {
          "ja": "うちで晩ご飯を食べます。",
          "zh": "在家吃晚饭。"
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
          "zh": "我出生在东京。"
        },
        {
          "ja": "妹は五月に生まれました。",
          "zh": "妹妹五月出生。"
        },
        {
          "ja": "赤ちゃんが生まれました。",
          "zh": "宝宝出生了。"
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
          "ja": "海を見ます。",
          "zh": "看海。"
        },
        {
          "ja": "海がきれいです。",
          "zh": "海很美。"
        },
        {
          "ja": "海があります。",
          "zh": "有海。"
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
          "zh": "店里卖蔬菜。"
        },
        {
          "ja": "古い本を売りました。",
          "zh": "卖了旧书。"
        },
        {
          "ja": "駅の前で新聞を売っています。",
          "zh": "车站前在卖报纸。"
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
      "kanji_readings": [],
      "examples": [
        {
          "ja": "この部屋はうるさいです。",
          "zh": "这个房间很吵。"
        },
        {
          "ja": "とてもうるさいですね。",
          "zh": "真吵啊。"
        },
        {
          "ja": "隣の部屋は夜もうるさいです。",
          "zh": "隔壁房间晚上也很吵。"
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
      "meaning_zh": "外套；上衣",
      "kanji_readings": [
        {
          "form": "上着",
          "reading": "うわぎ"
        }
      ],
      "examples": [
        {
          "ja": "上着を着ます。",
          "zh": "穿外套。"
        },
        {
          "ja": "暑いので上着を脱ぎます。",
          "zh": "因为热，所以脱外套。"
        },
        {
          "ja": "新しい上着を買いました。",
          "zh": "买了新外套。"
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
          "zh": "画画。"
        },
        {
          "ja": "この絵はきれいです。",
          "zh": "这幅画很漂亮。"
        },
        {
          "ja": "友達に絵を見せます。",
          "zh": "给朋友看画。"
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
          "zh": "周末看电影。"
        },
        {
          "ja": "友達と映画に行きました。",
          "zh": "和朋友去看了电影。"
        },
        {
          "ja": "この映画はおもしろいです。",
          "zh": "这部电影很有趣。"
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
          "zh": "在电影院看电影。"
        },
        {
          "ja": "映画館は駅の近くです。",
          "zh": "电影院在车站附近。"
        },
        {
          "ja": "友達と映画館へ行きます。",
          "zh": "和朋友去电影院。"
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
          "zh": "学习英语。"
        },
        {
          "ja": "英語の先生です。",
          "zh": "是英语老师。"
        },
        {
          "ja": "英語が少し分かります。",
          "zh": "懂一点英语。"
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
      "part_of_speech": "adverb/expression",
      "meaning_zh": "是的；嗯",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "ええ、そうです。",
          "zh": "嗯，是的。"
        },
        {
          "ja": "ええ、好きです。",
          "zh": "嗯，喜欢。"
        },
        {
          "ja": "ええ、分かりました。",
          "zh": "嗯，明白了。"
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
          "zh": "每天早上从车站乘电车。"
        },
        {
          "ja": "駅は学校の近くです。",
          "zh": "车站在学校附近。"
        },
        {
          "ja": "駅で友達に会います。",
          "zh": "在车站见朋友。"
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
          "zh": "乘电梯上五楼。"
        },
        {
          "ja": "エレベーターは一階に止まっています。",
          "zh": "电梯停在一楼。"
        },
        {
          "ja": "荷物が重いので、エレベーターを使います。",
          "zh": "因为行李很重，所以乘电梯。"
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
          "zh": "这个面包一百日元。"
        },
        {
          "ja": "切符は二百円です。",
          "zh": "车票二百日元。"
        },
        {
          "ja": "千円あります。",
          "zh": "有一千日元。"
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
          "ja": "鉛筆を使います。",
          "zh": "使用铅笔。"
        },
        {
          "ja": "鉛筆を買いました。",
          "zh": "买了铅笔。"
        },
        {
          "ja": "鉛筆で名前を書きます。",
          "zh": "用铅笔写名字。"
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
      "part_of_speech": "noun",
      "meaning_zh": "礼貌前缀；尊敬前缀",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "お名前は何ですか。",
          "zh": "您的名字是什么？"
        },
        {
          "ja": "お茶をどうぞ。",
          "zh": "请喝茶。"
        },
        {
          "ja": "お母さんは元気ですか。",
          "zh": "您母亲好吗？"
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
          "ja": "このご飯は美味しいです。",
          "zh": "这个饭很好吃。"
        },
        {
          "ja": "とても美味しいですね。",
          "zh": "真好吃啊。"
        },
        {
          "ja": "美味しいものが好きです。",
          "zh": "喜欢好吃的东西。"
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
          "zh": "这个车站人很多。"
        },
        {
          "ja": "この町は店が多いです。",
          "zh": "这个城镇店很多。"
        },
        {
          "ja": "この町は店が多いと思います。",
          "zh": "我觉得这座城镇的店很多。"
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
          "zh": "这个狗很大。"
        },
        {
          "ja": "とても大きいですね。",
          "zh": "真大啊。"
        },
        {
          "ja": "大きいものが好きです。",
          "zh": "喜欢大的东西。"
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
      "kanji_readings": [
        {
          "form": "大きな",
          "reading": "おおきな"
        }
      ],
      "examples": [
        {
          "ja": "大きな犬がいます。",
          "zh": "有一只大狗。"
        },
        {
          "ja": "大きな家に住みたいです。",
          "zh": "想住在大房子里。"
        },
        {
          "ja": "大きな声で話してください。",
          "zh": "请大声说。"
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
          "zh": "公园里有很多人。"
        },
        {
          "ja": "大勢で旅行します。",
          "zh": "很多人一起旅行。"
        },
        {
          "ja": "昨日は大勢来ました。",
          "zh": "昨天来了很多人。"
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
          "ja": "お母さんに会います。",
          "zh": "见妈妈。"
        },
        {
          "ja": "お母さんと話します。",
          "zh": "和妈妈说话。"
        },
        {
          "ja": "友達のお母さんは元気です。",
          "zh": "朋友的妈妈身体很好。"
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
          "ja": "お菓子を食べます。",
          "zh": "吃点心。"
        },
        {
          "ja": "お菓子が好きです。",
          "zh": "喜欢点心。"
        },
        {
          "ja": "お菓子をください。",
          "zh": "请给我点心。"
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
          "zh": "有钱。"
        },
        {
          "ja": "銀行でお金を下ろします。",
          "zh": "在银行取钱。"
        },
        {
          "ja": "お金を払いました。",
          "zh": "付了钱。"
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
      "kanji_readings": [
        {
          "form": "起きる",
          "reading": "おきる"
        }
      ],
      "examples": [
        {
          "ja": "毎朝七時に起きます。",
          "zh": "每天早上七点起床。"
        },
        {
          "ja": "昨日は遅く起きました。",
          "zh": "昨天起得晚。"
        },
        {
          "ja": "早く起きてください。",
          "zh": "请早点起床。"
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
          "zh": "把书放在桌子上。"
        },
        {
          "ja": "ここに荷物を置いてください。",
          "zh": "请把行李放在这里。"
        },
        {
          "ja": "傘を入口に置きました。",
          "zh": "把伞放在入口处了。"
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
          "zh": "田中的妻子是老师。"
        },
        {
          "ja": "奥さんはお元気ですか。",
          "zh": "您太太好吗？"
        },
        {
          "ja": "友達の奥さんに会いました。",
          "zh": "见到了朋友的妻子。"
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
          "zh": "父亲不喝酒。"
        },
        {
          "ja": "お酒は好きではありません。",
          "zh": "不喜欢酒。"
        },
        {
          "ja": "お酒を飲みすぎないでください。",
          "zh": "请不要喝太多酒。"
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
          "ja": "お皿を使います。",
          "zh": "使用盘子。"
        },
        {
          "ja": "お皿を買いました。",
          "zh": "买了盘子。"
        },
        {
          "ja": "お皿に料理を載せます。",
          "zh": "把菜盛到盘子里。"
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
        "伯父",
        "叔父さん"
      ],
      "reading": "おじさん",
      "reading_variants": [
        "おじさん"
      ],
      "romaji": "ojisan",
      "part_of_speech": "noun",
      "meaning_zh": "叔叔；伯父；舅舅；中年男性",
      "kanji_readings": [
        {
          "form": "伯父",
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
          "zh": "见叔叔。"
        },
        {
          "ja": "あのおじさんは親切です。",
          "zh": "那位叔叔很亲切。"
        },
        {
          "ja": "おじさんが家に来ました。",
          "zh": "叔叔来家里了。"
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
      "kanji_readings": [],
      "examples": [
        {
          "ja": "おじいさんに会います。",
          "zh": "见爷爷。"
        },
        {
          "ja": "おじいさんと話します。",
          "zh": "和爷爷说话。"
        },
        {
          "ja": "田中さんのおじいさんは元気です。",
          "zh": "田中先生的爷爷身体很好。"
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
      "kanji_readings": [
        {
          "form": "教える",
          "reading": "おしえる"
        }
      ],
      "examples": [
        {
          "ja": "先生が日本語を教えます。",
          "zh": "老师教日语。"
        },
        {
          "ja": "道を教えてください。",
          "zh": "请告诉我路。"
        },
        {
          "ja": "友達に漢字を教えました。",
          "zh": "教朋友汉字了。"
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
          "zh": "请按这个按钮。"
        },
        {
          "ja": "ドアを押します。",
          "zh": "推门。"
        },
        {
          "ja": "強く押さないでください。",
          "zh": "请不要用力按。"
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
      "kanji_readings": [
        {
          "form": "遅い",
          "reading": "おそい"
        }
      ],
      "examples": [
        {
          "ja": "この電車は遅いです。",
          "zh": "这个电车很慢/晚。"
        },
        {
          "ja": "とても遅いですね。",
          "zh": "真慢/晚啊。"
        },
        {
          "ja": "遅いものが好きです。",
          "zh": "喜欢慢/晚的东西。"
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
          "zh": "喝茶。"
        },
        {
          "ja": "お茶が好きです。",
          "zh": "喜欢茶。"
        },
        {
          "ja": "お茶をください。",
          "zh": "请给我茶。"
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
      "meaning_zh": "洗手间；厕所",
      "kanji_readings": [
        {
          "form": "お手洗い",
          "reading": "おてあらい"
        }
      ],
      "examples": [
        {
          "ja": "お手洗いはどこですか。",
          "zh": "厕所在哪里？"
        },
        {
          "ja": "お手洗いへ行きます。",
          "zh": "去厕所。"
        },
        {
          "ja": "お手洗いを借りてもいいですか。",
          "zh": "可以借用厕所吗？"
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
          "ja": "お父さんに会います。",
          "zh": "见爸爸。"
        },
        {
          "ja": "お父さんと話します。",
          "zh": "和爸爸说话。"
        },
        {
          "ja": "友達のお父さんは会社員です。",
          "zh": "朋友的爸爸是公司职员。"
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
          "zh": "我弟弟是初中生。"
        },
        {
          "ja": "弟と遊びます。",
          "zh": "和弟弟玩。"
        },
        {
          "ja": "弟に自転車を貸しました。",
          "zh": "把自行车借给了弟弟。"
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
          "zh": "车站有一位男性。"
        },
        {
          "ja": "あの男の人は先生です。",
          "zh": "那位男士是老师。"
        },
        {
          "ja": "男の子が走っています。",
          "zh": "男孩在跑。"
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
          "ja": "男の子に会います。",
          "zh": "见男孩。"
        },
        {
          "ja": "男の子と話します。",
          "zh": "和男孩说话。"
        },
        {
          "ja": "あの男の子は元気に走っています。",
          "zh": "那个男孩正在精神十足地跑步。"
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
        "おととい"
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
          "zh": "前天去了学校。"
        },
        {
          "ja": "一昨日は忙しかったです。",
          "zh": "前天很忙。"
        },
        {
          "ja": "一昨日、友達に会いました。",
          "zh": "前天见了朋友。"
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-122",
      "jlpt": "N5",
      "headword": "おととし",
      "source_form": "おととし",
      "variants": [
        "おととし"
      ],
      "reading": "おととし",
      "reading_variants": [
        "おととし"
      ],
      "romaji": "ototoshi",
      "part_of_speech": "noun",
      "meaning_zh": "前年",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "おととし、日本へ行きました。",
          "zh": "前年去了日本。"
        },
        {
          "ja": "おととしは学生でした。",
          "zh": "前年还是学生。"
        },
        {
          "ja": "おととし、東京に住んでいました。",
          "zh": "前年住在东京。"
        }
      ],
      "note_zh": ""
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
          "zh": "想成为大人。"
        },
        {
          "ja": "ここは大人の席です。",
          "zh": "这里是成人座位。"
        },
        {
          "ja": "大人が二人います。",
          "zh": "有两个大人。"
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
          "zh": "肚子疼。"
        },
        {
          "ja": "お腹がすきました。",
          "zh": "肚子饿了。"
        },
        {
          "ja": "もうお腹がいっぱいです。",
          "zh": "肚子已经饱了。"
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
      "part_of_speech": "pre-noun/noun",
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
          "zh": "买了同一本书。"
        },
        {
          "ja": "私たちは同じ学校です。",
          "zh": "我们在同一所学校。"
        },
        {
          "ja": "答えは同じです。",
          "zh": "答案一样。"
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
          "zh": "你哥哥好吗？"
        },
        {
          "ja": "友達のお兄さんに会いました。",
          "zh": "见到了朋友的哥哥。"
        },
        {
          "ja": "お兄さんは背が高いです。",
          "zh": "你哥哥个子高。"
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
          "zh": "你姐姐是学生吗？"
        },
        {
          "ja": "友達のお姉さんに会いました。",
          "zh": "见到了朋友的姐姐。"
        },
        {
          "ja": "お姉さんは英語が上手です。",
          "zh": "你姐姐英语很好。"
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
          "zh": "给阿姨打电话。"
        },
        {
          "ja": "あのおばさんは先生です。",
          "zh": "那位阿姨是老师。"
        },
        {
          "ja": "おばさんがケーキを作りました。",
          "zh": "阿姨做了蛋糕。"
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
      "kanji_readings": [],
      "examples": [
        {
          "ja": "おばあさんに会います。",
          "zh": "见奶奶。"
        },
        {
          "ja": "おばあさんと話します。",
          "zh": "和奶奶说话。"
        },
        {
          "ja": "田中さんのおばあさんは元気です。",
          "zh": "田中先生的奶奶身体很好。"
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
      "meaning_zh": "浴室；澡；浴缸",
      "kanji_readings": [
        {
          "form": "お風呂",
          "reading": "おふろ"
        }
      ],
      "examples": [
        {
          "ja": "お風呂に入ります。",
          "zh": "洗澡/泡澡。"
        },
        {
          "ja": "お風呂はどこですか。",
          "zh": "浴室在哪里？"
        },
        {
          "ja": "夜、お風呂に入りました。",
          "zh": "晚上洗了澡。"
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
          "zh": "吃便当。"
        },
        {
          "ja": "駅でお弁当を買いました。",
          "zh": "在车站买了便当。"
        },
        {
          "ja": "母がお弁当を作ります。",
          "zh": "妈妈做便当。"
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
      "kanji_readings": [
        {
          "form": "覚える",
          "reading": "おぼえる"
        }
      ],
      "examples": [
        {
          "ja": "新しい言葉を覚えます。",
          "zh": "记新单词。"
        },
        {
          "ja": "名前を覚えました。",
          "zh": "记住了名字。"
        },
        {
          "ja": "漢字を少しずつ覚えます。",
          "zh": "一点点记汉字。"
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
          "zh": "向警察问路。"
        },
        {
          "ja": "駅の前におまわりさんがいます。",
          "zh": "车站前有警察。"
        },
        {
          "ja": "困った時はおまわりさんに聞いてください。",
          "zh": "遇到困难时请问警察。"
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
      "kanji_readings": [
        {
          "form": "重い",
          "reading": "おもい"
        }
      ],
      "examples": [
        {
          "ja": "この荷物は重いです。",
          "zh": "这个行李很重。"
        },
        {
          "ja": "とても重いですね。",
          "zh": "真重啊。"
        },
        {
          "ja": "重いものが好きです。",
          "zh": "喜欢重的东西。"
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
          "zh": "这个电影很有趣。"
        },
        {
          "ja": "とても面白いですね。",
          "zh": "真有趣啊。"
        },
        {
          "ja": "面白いものが好きです。",
          "zh": "喜欢有趣的东西。"
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
      "meaning_zh": "游泳",
      "kanji_readings": [
        {
          "form": "泳ぐ",
          "reading": "およぐ"
        }
      ],
      "examples": [
        {
          "ja": "夏にプールで泳ぎます。",
          "zh": "夏天在游泳池游泳。"
        },
        {
          "ja": "海で泳ぎました。",
          "zh": "在海里游泳了。"
        },
        {
          "ja": "私は少し泳げます。",
          "zh": "我会游一点泳。"
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
      "meaning_zh": "下车；下来",
      "kanji_readings": [
        {
          "form": "降りる",
          "reading": "おりる"
        }
      ],
      "examples": [
        {
          "ja": "次の駅で降ります。",
          "zh": "在下一站下车。"
        },
        {
          "ja": "バスを降りました。",
          "zh": "下了公交车。"
        },
        {
          "ja": "ここで降りてください。",
          "zh": "请在这里下车。"
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
          "zh": "课三点结束。"
        },
        {
          "ja": "仕事が終わりました。",
          "zh": "工作结束了。"
        },
        {
          "ja": "映画はもう終わりました。",
          "zh": "电影已经结束了。"
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
          "ja": "音楽を聞きます。",
          "zh": "听音乐。"
        },
        {
          "ja": "毎日、音楽を聞いています。",
          "zh": "每天听音乐。"
        },
        {
          "ja": "音楽が好きです。",
          "zh": "喜欢音乐。"
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
          "zh": "一位女性在读书。"
        },
        {
          "ja": "あの女の人は医者です。",
          "zh": "那位女士是医生。"
        },
        {
          "ja": "女の子が歌っています。",
          "zh": "女孩在唱歌。"
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
          "ja": "女の子に会います。",
          "zh": "见女孩。"
        },
        {
          "ja": "女の子と話します。",
          "zh": "和女孩说话。"
        },
        {
          "ja": "あの女の子は歌が上手です。",
          "zh": "那个女孩唱歌很好。"
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
          "zh": "去过日本三次。"
        },
        {
          "ja": "もう一回言ってください。",
          "zh": "请再说一次。"
        },
        {
          "ja": "この映画を二回見ました。",
          "zh": "这部电影看了两次。"
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
          "zh": "教室在二楼。"
        },
        {
          "ja": "三階へ行きます。",
          "zh": "去三楼。"
        },
        {
          "ja": "一階にトイレがあります。",
          "zh": "一楼有洗手间。"
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
          "zh": "想去外国。"
        },
        {
          "ja": "外国の友達がいます。",
          "zh": "有外国朋友。"
        },
        {
          "ja": "外国語を勉強します。",
          "zh": "学习外语。"
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
          "ja": "外国人に会います。",
          "zh": "见外国人。"
        },
        {
          "ja": "外国人と話します。",
          "zh": "和外国人说话。"
        },
        {
          "ja": "あの外国人は日本語が上手です。",
          "zh": "那位外国人日语很好。"
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
          "zh": "去公司。"
        },
        {
          "ja": "会社は駅の近くです。",
          "zh": "公司在车站附近。"
        },
        {
          "ja": "会社で友達に会います。",
          "zh": "在公司见朋友。"
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
          "zh": "上楼梯。"
        },
        {
          "ja": "階段を下ります。",
          "zh": "下楼梯。"
        },
        {
          "ja": "駅に階段があります。",
          "zh": "车站有楼梯。"
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
          "zh": "在超市买东西。"
        },
        {
          "ja": "日曜日に買い物に行きます。",
          "zh": "星期天去购物。"
        },
        {
          "ja": "買い物は楽しいです。",
          "zh": "购物很开心。"
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
          "zh": "在车站买票。"
        },
        {
          "ja": "新しい靴を買いました。",
          "zh": "买了新鞋。"
        },
        {
          "ja": "スーパーで野菜を買います。",
          "zh": "在超市买蔬菜。"
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
          "zh": "把书还给图书馆。"
        },
        {
          "ja": "友達にお金を返しました。",
          "zh": "把钱还给了朋友。"
        },
        {
          "ja": "明日、これを返してください。",
          "zh": "请明天把这个还回来。"
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
          "zh": "晚上回家。"
        },
        {
          "ja": "昨日、国へ帰りました。",
          "zh": "昨天回国了。"
        },
        {
          "ja": "早く帰ってください。",
          "zh": "请早点回去。"
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
          "zh": "早上洗脸。"
        },
        {
          "ja": "顔が赤くなりました。",
          "zh": "脸变红了。"
        },
        {
          "ja": "友達の顔を見ました。",
          "zh": "看到了朋友的脸。"
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
          "zh": "到车站要十分钟。"
        },
        {
          "ja": "この仕事は時間がかかります。",
          "zh": "这项工作花时间。"
        },
        {
          "ja": "病院でお金がかかりました。",
          "zh": "在医院花了钱。"
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
      "kanji_readings": [
        {
          "form": "鍵",
          "reading": "かぎ"
        }
      ],
      "examples": [
        {
          "ja": "鍵を使います。",
          "zh": "使用钥匙。"
        },
        {
          "ja": "鍵を買いました。",
          "zh": "买了钥匙。"
        },
        {
          "ja": "鍵をポケットに入れました。",
          "zh": "把钥匙放进了口袋。"
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
          "zh": "写信。"
        },
        {
          "ja": "名前を書いてください。",
          "zh": "请写名字。"
        },
        {
          "ja": "ノートに漢字を書きます。",
          "zh": "在笔记本上写汉字。"
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
          "ja": "学生に会います。",
          "zh": "见学生。"
        },
        {
          "ja": "学生と話します。",
          "zh": "和学生说话。"
        },
        {
          "ja": "この学生は毎日図書館で勉強します。",
          "zh": "这名学生每天在图书馆学习。"
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
          "zh": "学了三个月日语。"
        },
        {
          "ja": "一か月休みます。",
          "zh": "休息一个月。"
        },
        {
          "ja": "六か月かかります。",
          "zh": "需要六个月。"
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
      "kanji_readings": [
        {
          "form": "掛ける",
          "reading": "かける"
        }
      ],
      "examples": [
        {
          "ja": "壁に時計を掛けます。",
          "zh": "把钟挂在墙上。"
        },
        {
          "ja": "友達に電話をかけます。",
          "zh": "给朋友打电话。"
        },
        {
          "ja": "どうぞ椅子に腰をかけてください。",
          "zh": "请坐到椅子上。"
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
          "ja": "傘を使います。",
          "zh": "使用伞。"
        },
        {
          "ja": "傘を買いました。",
          "zh": "买了伞。"
        },
        {
          "ja": "雨なので傘を差します。",
          "zh": "因为下雨，所以撑伞。"
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
          "zh": "把书借给朋友。"
        },
        {
          "ja": "ペンを貸してください。",
          "zh": "请借我一支笔。"
        },
        {
          "ja": "兄に自転車を貸しました。",
          "zh": "把自行车借给了哥哥。"
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
          "zh": "今天风很大。"
        },
        {
          "ja": "窓から冷たい風が入ります。",
          "zh": "冷风从窗户吹进来。"
        },
        {
          "ja": "風で帽子が飛びました。",
          "zh": "帽子被风吹走了。"
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
          "zh": "感冒了。"
        },
        {
          "ja": "風邪で学校を休みます。",
          "zh": "因为感冒不去学校。"
        },
        {
          "ja": "風邪に気をつけてください。",
          "zh": "请小心感冒。"
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
      "kanji_readings": [
        {
          "form": "方",
          "reading": "かた"
        }
      ],
      "examples": [
        {
          "ja": "あの方は先生です。",
          "zh": "那位是老师。"
        },
        {
          "ja": "使い方を教えてください。",
          "zh": "请教我使用方法。"
        },
        {
          "ja": "読み方が分かりません。",
          "zh": "不知道读法。"
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
          "ja": "家族に会います。",
          "zh": "见家人。"
        },
        {
          "ja": "家族と話します。",
          "zh": "和家人说话。"
        },
        {
          "ja": "私の家族はみんな元気です。",
          "zh": "我的家人都身体很好。"
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
          "zh": "写片假名。"
        },
        {
          "ja": "この言葉はカタカナです。",
          "zh": "这个词是片假名。"
        },
        {
          "ja": "カタカナを覚えます。",
          "zh": "记片假名。"
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
          "zh": "四月学校开学。"
        },
        {
          "ja": "八月は暑いです。",
          "zh": "八月很热。"
        },
        {
          "ja": "十二月に日本へ行きます。",
          "zh": "十二月去日本。"
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
          "zh": "去学校。"
        },
        {
          "ja": "学校は駅の近くです。",
          "zh": "学校在车站附近。"
        },
        {
          "ja": "学校で友達に会います。",
          "zh": "在学校见朋友。"
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
          "ja": "カップを使います。",
          "zh": "使用杯子。"
        },
        {
          "ja": "カップを買いました。",
          "zh": "买了杯子。"
        },
        {
          "ja": "カップにコーヒーを入れます。",
          "zh": "把咖啡倒进杯子里。"
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
          "zh": "这是开朗温暖的家庭。"
        },
        {
          "ja": "家庭で日本語を使います。",
          "zh": "在家里使用日语。"
        },
        {
          "ja": "家庭は大切です。",
          "zh": "家庭很重要。"
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
      "kanji_readings": [
        {
          "form": "角",
          "reading": "かど"
        }
      ],
      "examples": [
        {
          "ja": "次の角を右に曲がります。",
          "zh": "在下一个拐角右转。"
        },
        {
          "ja": "角に店があります。",
          "zh": "拐角处有商店。"
        },
        {
          "ja": "机の角に気をつけてください。",
          "zh": "请小心桌角。"
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
          "ja": "かばんを使います。",
          "zh": "使用包。"
        },
        {
          "ja": "かばんを買いました。",
          "zh": "买了包。"
        },
        {
          "ja": "かばんに本を入れます。",
          "zh": "把书放进包里。"
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
          "zh": "把花放进花瓶。"
        },
        {
          "ja": "この花瓶はきれいです。",
          "zh": "这个花瓶很漂亮。"
        },
        {
          "ja": "花瓶を机の上に置きます。",
          "zh": "把花瓶放在桌子上。"
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
          "zh": "戴帽子。"
        },
        {
          "ja": "赤い帽子をかぶっています。",
          "zh": "戴着红帽子。"
        },
        {
          "ja": "雨の日に帽子をかぶりました。",
          "zh": "下雨天戴了帽子。"
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
          "zh": "在纸上写名字。"
        },
        {
          "ja": "紙を一枚ください。",
          "zh": "请给我一张纸。"
        },
        {
          "ja": "白い紙を使います。",
          "zh": "使用白纸。"
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
          "ja": "カメラを使います。",
          "zh": "使用相机。"
        },
        {
          "ja": "カメラを買いました。",
          "zh": "买了相机。"
        },
        {
          "ja": "カメラで写真を撮ります。",
          "zh": "用相机拍照。"
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
          "zh": "星期二去学校。"
        },
        {
          "ja": "火曜日は休みです。",
          "zh": "星期二休息。"
        },
        {
          "ja": "次の火曜日に会いましょう。",
          "zh": "下个星期二见吧。"
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
          "zh": "这个咖喱很辣。"
        },
        {
          "ja": "とても辛いですね。",
          "zh": "真辣啊。"
        },
        {
          "ja": "辛いものが好きです。",
          "zh": "喜欢辣的东西。"
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
          "zh": "请保重身体。"
        },
        {
          "ja": "運動して体を強くします。",
          "zh": "运动让身体变强。"
        },
        {
          "ja": "体の調子がいいです。",
          "zh": "身体状态很好。"
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
          "zh": "在图书馆借书。"
        },
        {
          "ja": "友達に傘を借りました。",
          "zh": "向朋友借了伞。"
        },
        {
          "ja": "ノートを借りてもいいですか。",
          "zh": "可以借笔记本吗？"
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-181",
      "jlpt": "N5",
      "headword": "～がる",
      "source_form": "～がる",
      "variants": [
        "～がる"
      ],
      "reading": "～がる",
      "reading_variants": [
        "～がる"
      ],
      "romaji": "~garu",
      "part_of_speech": "suffix/pattern",
      "meaning_zh": "显得……；表现出……",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "子供が寒がっています。",
          "zh": "孩子表现得很冷。"
        },
        {
          "ja": "妹は犬を怖がります。",
          "zh": "妹妹怕狗。"
        },
        {
          "ja": "友達は行きたがっています。",
          "zh": "朋友想去。"
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
      "kanji_readings": [
        {
          "form": "軽い",
          "reading": "かるい"
        }
      ],
      "examples": [
        {
          "ja": "このかばんは軽いです。",
          "zh": "这个包很轻。"
        },
        {
          "ja": "とても軽いですね。",
          "zh": "真轻啊。"
        },
        {
          "ja": "軽いものが好きです。",
          "zh": "喜欢轻的东西。"
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
          "ja": "カレーを食べます。",
          "zh": "吃咖喱。"
        },
        {
          "ja": "カレーが好きです。",
          "zh": "喜欢咖喱。"
        },
        {
          "ja": "カレーをください。",
          "zh": "请给我咖喱。"
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
          "ja": "カレンダーを使います。",
          "zh": "使用日历。"
        },
        {
          "ja": "カレンダーを買いました。",
          "zh": "买了日历。"
        },
        {
          "ja": "カレンダーを壁に掛けます。",
          "zh": "把日历挂在墙上。"
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
          "ja": "川を見ます。",
          "zh": "看河。"
        },
        {
          "ja": "川がきれいです。",
          "zh": "河很美。"
        },
        {
          "ja": "川があります。",
          "zh": "有河。"
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
          "zh": "右边有银行。"
        },
        {
          "ja": "道の左側を歩きます。",
          "zh": "走在路的左侧。"
        },
        {
          "ja": "駅の南側で待ちます。",
          "zh": "在车站南侧等。"
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
          "zh": "这个猫很可爱。"
        },
        {
          "ja": "とてもかわいいですね。",
          "zh": "真可爱啊。"
        },
        {
          "ja": "かわいいものが好きです。",
          "zh": "喜欢可爱的东西。"
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
          "zh": "读汉字。"
        },
        {
          "ja": "漢字が好きです。",
          "zh": "喜欢汉字。"
        },
        {
          "ja": "朝、漢字を読みました。",
          "zh": "早上读了汉字。"
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
      "kanji_readings": [
        {
          "form": "木",
          "reading": "き"
        }
      ],
      "examples": [
        {
          "ja": "木を見ます。",
          "zh": "看树。"
        },
        {
          "ja": "木がきれいです。",
          "zh": "树很美。"
        },
        {
          "ja": "木があります。",
          "zh": "有树。"
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
          "zh": "有黄色的花。"
        },
        {
          "ja": "黄色が好きです。",
          "zh": "我喜欢黄色。"
        },
        {
          "ja": "これは黄色のかばんです。",
          "zh": "这是黄色的包。"
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
          "zh": "这个花很黄。"
        },
        {
          "ja": "とても黄色いですね。",
          "zh": "真黄啊。"
        },
        {
          "ja": "黄色いものが好きです。",
          "zh": "喜欢黄的东西。"
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
      "kanji_readings": [
        {
          "form": "消える",
          "reading": "きえる"
        }
      ],
      "examples": [
        {
          "ja": "電気が消えました。",
          "zh": "灯灭了。"
        },
        {
          "ja": "文字が消えています。",
          "zh": "字消失了。"
        },
        {
          "ja": "音がすぐ消えました。",
          "zh": "声音很快消失了。"
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
      "kanji_readings": [
        {
          "form": "聞く",
          "reading": "きく"
        }
      ],
      "examples": [
        {
          "ja": "音楽を聞きます。",
          "zh": "听音乐。"
        },
        {
          "ja": "先生に聞きます。",
          "zh": "问老师。"
        },
        {
          "ja": "もう一度聞いてください。",
          "zh": "请再听一遍。"
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
          "zh": "北海道位于日本北部。"
        },
        {
          "ja": "北の空に雲が見えます。",
          "zh": "北边的天空能看到云。"
        },
        {
          "ja": "駅の北口で待ちます。",
          "zh": "在车站北口等。"
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
          "ja": "ギターを使います。",
          "zh": "使用吉他。"
        },
        {
          "ja": "ギターを買いました。",
          "zh": "买了吉他。"
        },
        {
          "ja": "兄はギターを弾きます。",
          "zh": "哥哥弹吉他。"
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
          "zh": "这个房间很脏。"
        },
        {
          "ja": "とても汚いですね。",
          "zh": "真脏啊。"
        },
        {
          "ja": "汚い手で食べないでください。",
          "zh": "请不要用脏手吃东西。"
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
      "meaning_zh": "咖啡馆；茶餐厅",
      "kanji_readings": [
        {
          "form": "喫茶店",
          "reading": "きっさてん"
        }
      ],
      "examples": [
        {
          "ja": "喫茶店へ行きます。",
          "zh": "去咖啡馆。"
        },
        {
          "ja": "喫茶店は駅の近くです。",
          "zh": "咖啡馆在车站附近。"
        },
        {
          "ja": "喫茶店で友達に会います。",
          "zh": "在咖啡馆见朋友。"
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
          "ja": "切手を使います。",
          "zh": "使用邮票。"
        },
        {
          "ja": "切手を買いました。",
          "zh": "买了邮票。"
        },
        {
          "ja": "封筒に切手を貼ります。",
          "zh": "把邮票贴在信封上。"
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
          "ja": "切符を使います。",
          "zh": "使用票。"
        },
        {
          "ja": "切符を買いました。",
          "zh": "买了票。"
        },
        {
          "ja": "切符を駅員に見せます。",
          "zh": "把车票给站务员看。"
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
          "zh": "昨天去了学校。"
        },
        {
          "ja": "昨日は忙しかったです。",
          "zh": "昨天很忙。"
        },
        {
          "ja": "昨日、友達に会いました。",
          "zh": "昨天见了朋友。"
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
      "part_of_speech": "noun",
      "meaning_zh": "九",
      "kanji_readings": [
        {
          "form": "九",
          "reading": "きゅう"
        }
      ],
      "examples": [
        {
          "ja": "八たす一は九です。",
          "zh": "八加一等于九。"
        },
        {
          "ja": "答えは九です。",
          "zh": "答案是九。"
        },
        {
          "ja": "九を丸で囲んでください。",
          "zh": "请把九圈起来。"
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
          "ja": "牛肉を食べます。",
          "zh": "吃牛肉。"
        },
        {
          "ja": "牛肉が好きです。",
          "zh": "喜欢牛肉。"
        },
        {
          "ja": "牛肉をください。",
          "zh": "请给我牛肉。"
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
          "zh": "喝牛奶。"
        },
        {
          "ja": "牛乳が好きです。",
          "zh": "喜欢牛奶。"
        },
        {
          "ja": "牛乳をください。",
          "zh": "请给我牛奶。"
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
          "zh": "今天去学校。"
        },
        {
          "ja": "今日は忙しいです。",
          "zh": "今天很忙。"
        },
        {
          "ja": "今日、友達に会います。",
          "zh": "今天见朋友。"
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
          "zh": "上课前进入教室。"
        },
        {
          "ja": "教室には机が二十あります。",
          "zh": "教室里有二十张桌子。"
        },
        {
          "ja": "放課後、教室を掃除します。",
          "zh": "放学后打扫教室。"
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
          "ja": "兄弟に会います。",
          "zh": "见兄弟姐妹。"
        },
        {
          "ja": "兄弟と話します。",
          "zh": "和兄弟姐妹说话。"
        },
        {
          "ja": "私の兄弟は大阪に住んでいます。",
          "zh": "我的兄弟住在大阪。"
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
          "zh": "去年学习了日语。"
        },
        {
          "ja": "去年は東京に住んでいました。",
          "zh": "去年住在东京。"
        },
        {
          "ja": "去年、友達と京都へ行きました。",
          "zh": "去年和朋友去了京都。"
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-208",
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
          "zh": "不喜欢辣的食物。"
        },
        {
          "ja": "掃除は嫌いではありません。",
          "zh": "不讨厌打扫。"
        },
        {
          "ja": "嫌いな物は何ですか。",
          "zh": "你讨厌的东西是什么？"
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
      "kanji_readings": [
        {
          "form": "切る",
          "reading": "きる"
        }
      ],
      "examples": [
        {
          "ja": "紙をはさみで切ります。",
          "zh": "用剪刀剪纸。"
        },
        {
          "ja": "野菜を小さく切ります。",
          "zh": "把蔬菜切小。"
        },
        {
          "ja": "電話を切りました。",
          "zh": "挂了电话。"
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
      "meaning_zh": "穿（上半身衣物）",
      "kanji_readings": [
        {
          "form": "着る",
          "reading": "きる"
        }
      ],
      "examples": [
        {
          "ja": "白いシャツを着ます。",
          "zh": "穿白衬衫。"
        },
        {
          "ja": "今日はコートを着ています。",
          "zh": "今天穿着外套。"
        },
        {
          "ja": "新しい服を着ました。",
          "zh": "穿了新衣服。"
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
      "kanji_readings": [],
      "examples": [
        {
          "ja": "この部屋はきれいです。",
          "zh": "这个房间很漂亮。"
        },
        {
          "ja": "きれいな町です。",
          "zh": "是个漂亮的城镇。"
        },
        {
          "ja": "私はきれいなものが好きです。",
          "zh": "我喜欢漂亮的东西。"
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
          "zh": "买了一公斤苹果。"
        },
        {
          "ja": "この荷物は五キログラムです。",
          "zh": "这件行李重五公斤。"
        },
        {
          "ja": "肉を二キログラムください。",
          "zh": "请给我两公斤肉。"
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
          "zh": "到车站有两公里。"
        },
        {
          "ja": "毎日五キロメートル歩きます。",
          "zh": "每天走五公里。"
        },
        {
          "ja": "学校はここから一キロメートルです。",
          "zh": "学校离这里一公里。"
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
          "zh": "去银行。"
        },
        {
          "ja": "銀行は駅の近くです。",
          "zh": "银行在车站附近。"
        },
        {
          "ja": "銀行で友達に会います。",
          "zh": "在银行见朋友。"
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
      "romaji": "kinyoubi",
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
          "zh": "星期五去学校。"
        },
        {
          "ja": "金曜日は休みです。",
          "zh": "星期五休息。"
        },
        {
          "ja": "次の金曜日に会いましょう。",
          "zh": "下个星期五见吧。"
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
      "part_of_speech": "noun",
      "meaning_zh": "九",
      "kanji_readings": [
        {
          "form": "九",
          "reading": "く"
        }
      ],
      "examples": [
        {
          "ja": "学校は九時に始まります。",
          "zh": "学校九点开始上课。"
        },
        {
          "ja": "九月に日本へ行きます。",
          "zh": "九月去日本。"
        },
        {
          "ja": "今は九時です。",
          "zh": "现在是九点。"
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
          "zh": "吃药。"
        },
        {
          "ja": "この薬を一日三回飲んでください。",
          "zh": "请一天吃三次这个药。"
        },
        {
          "ja": "薬をください。",
          "zh": "请给我药。"
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
      "kanji_readings": [],
      "examples": [
        {
          "ja": "水を下さい。",
          "zh": "请给我水。"
        },
        {
          "ja": "少し待って下さい。",
          "zh": "请稍等一下。"
        },
        {
          "ja": "もう一度言って下さい。",
          "zh": "请再说一次。"
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
          "ja": "果物を食べます。",
          "zh": "吃水果。"
        },
        {
          "ja": "果物が好きです。",
          "zh": "喜欢水果。"
        },
        {
          "ja": "果物をください。",
          "zh": "请给我水果。"
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
          "zh": "请张开嘴。"
        },
        {
          "ja": "口が痛いです。",
          "zh": "嘴疼。"
        },
        {
          "ja": "口で言ってください。",
          "zh": "请用嘴说。"
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
          "zh": "买了新鞋。"
        },
        {
          "ja": "靴は玄関で脱ぎます。",
          "zh": "在玄关脱鞋。"
        },
        {
          "ja": "雨の日はこの靴をはきます。",
          "zh": "下雨天穿这双鞋。"
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
          "zh": "穿袜子。"
        },
        {
          "ja": "新しい靴下を買いました。",
          "zh": "买了新袜子。"
        },
        {
          "ja": "白い靴下をはいています。",
          "zh": "穿着白袜子。"
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
      "kanji_readings": [
        {
          "form": "国",
          "reading": "くに"
        }
      ],
      "examples": [
        {
          "ja": "国へ帰ります。",
          "zh": "回国。"
        },
        {
          "ja": "あなたの国はどこですか。",
          "zh": "你的国家是哪里？"
        },
        {
          "ja": "日本はきれいな国です。",
          "zh": "日本是美丽的国家。"
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
          "zh": "今天从早上起就是阴天。"
        },
        {
          "ja": "曇りの日は空が暗いです。",
          "zh": "阴天时天空很暗。"
        },
        {
          "ja": "明日の天気は曇りです。",
          "zh": "明天是阴天。"
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
          "zh": "今天阴天。"
        },
        {
          "ja": "午後から曇りました。",
          "zh": "下午开始阴了。"
        },
        {
          "ja": "明日は曇ると思います。",
          "zh": "我觉得明天会阴。"
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
      "kanji_readings": [
        {
          "form": "暗い",
          "reading": "くらい"
        }
      ],
      "examples": [
        {
          "ja": "この部屋は暗いです。",
          "zh": "这个房间很暗。"
        },
        {
          "ja": "夜の道はとても暗いです。",
          "zh": "夜里的路很暗。"
        },
        {
          "ja": "暗い道を一人で歩かないでください。",
          "zh": "请不要独自走在昏暗的路上。"
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
      "part_of_speech": "suffix/pattern",
      "meaning_zh": "大约；左右",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "十分くらい待ちました。",
          "zh": "等了十分钟左右。"
        },
        {
          "ja": "三人ぐらい来ます。",
          "zh": "大约三个人来。"
        },
        {
          "ja": "百円くらいです。",
          "zh": "大约一百日元。"
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
      "kanji_readings": [],
      "examples": [
        {
          "ja": "私のクラスは二十人です。",
          "zh": "我的班有二十个人。"
        },
        {
          "ja": "日本語のクラスに行きます。",
          "zh": "去上日语课。"
        },
        {
          "ja": "このクラスは楽しいです。",
          "zh": "这个班很开心。"
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
          "zh": "请给我一百克糖。"
        },
        {
          "ja": "肉を三百グラム買いました。",
          "zh": "买了三百克肉。"
        },
        {
          "ja": "これは五十グラムです。",
          "zh": "这是五十克。"
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
          "zh": "朋友来我家。"
        },
        {
          "ja": "明日、先生が来ます。",
          "zh": "明天老师会来。"
        },
        {
          "ja": "ここへ来てください。",
          "zh": "请来这里。"
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
      "meaning_zh": "汽车；车",
      "kanji_readings": [
        {
          "form": "車",
          "reading": "くるま"
        }
      ],
      "examples": [
        {
          "ja": "車を使います。",
          "zh": "使用汽车。"
        },
        {
          "ja": "車を買いました。",
          "zh": "买了汽车。"
        },
        {
          "ja": "車を駐車場に止めました。",
          "zh": "把车停在了停车场。"
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
          "zh": "使用黑色的笔。"
        },
        {
          "ja": "黒が好きです。",
          "zh": "我喜欢黑色。"
        },
        {
          "ja": "この靴は黒です。",
          "zh": "这双鞋是黑色的。"
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
          "zh": "这个鞋很黑。"
        },
        {
          "ja": "とても黒いですね。",
          "zh": "真黑啊。"
        },
        {
          "ja": "黒いものが好きです。",
          "zh": "喜欢黑的东西。"
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
          "ja": "警官に会います。",
          "zh": "见警察。"
        },
        {
          "ja": "警官と話します。",
          "zh": "和警察说话。"
        },
        {
          "ja": "駅前の警官が道を教えてくれました。",
          "zh": "车站前的警察给我指了路。"
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
          "zh": "今天早上六点起床了。"
        },
        {
          "ja": "今朝はパンを食べました。",
          "zh": "今天早上吃了面包。"
        },
        {
          "ja": "今朝、駅で先生に会いました。",
          "zh": "今天早上在车站遇到了老师。"
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
      "kanji_readings": [
        {
          "form": "消す",
          "reading": "けす"
        }
      ],
      "examples": [
        {
          "ja": "電気を消してください。",
          "zh": "请关灯。"
        },
        {
          "ja": "黒板の字を消します。",
          "zh": "擦掉黑板上的字。"
        },
        {
          "ja": "テレビを消しました。",
          "zh": "关掉了电视。"
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-237",
      "jlpt": "N5",
      "headword": "結構",
      "source_form": "結構",
      "variants": [
        "結構"
      ],
      "reading": "けっこう",
      "reading_variants": [
        "けっこう"
      ],
      "romaji": "kekkou",
      "part_of_speech": "noun",
      "meaning_zh": "很好；足够；不用了",
      "kanji_readings": [
        {
          "form": "結構",
          "reading": "けっこう"
        }
      ],
      "examples": [
        {
          "ja": "結構です。",
          "zh": "不用了。"
        },
        {
          "ja": "これは結構おいしいです。",
          "zh": "这个相当好吃。"
        },
        {
          "ja": "もう結構です。",
          "zh": "已经够了。"
        }
      ],
      "note_zh": ""
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
          "zh": "姐姐明年结婚。"
        },
        {
          "ja": "友達が結婚しました。",
          "zh": "朋友结婚了。"
        },
        {
          "ja": "結婚して十年です。",
          "zh": "结婚十年了。"
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
          "zh": "星期一去学校。"
        },
        {
          "ja": "月曜日は休みです。",
          "zh": "星期一休息。"
        },
        {
          "ja": "次の月曜日に会いましょう。",
          "zh": "下个星期一见吧。"
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
          "zh": "在玄关脱鞋。"
        },
        {
          "ja": "玄関に傘があります。",
          "zh": "玄关处有一把伞。"
        },
        {
          "ja": "母が玄関まで迎えに来ました。",
          "zh": "妈妈到玄关来接我。"
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
          "zh": "母亲很健康。"
        },
        {
          "ja": "元気な子供が遊んでいます。",
          "zh": "有精神的孩子在玩。"
        },
        {
          "ja": "お元気ですか。",
          "zh": "你好吗？"
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
          "zh": "买了三个苹果。"
        },
        {
          "ja": "卵を二個使います。",
          "zh": "用两个鸡蛋。"
        },
        {
          "ja": "かばんが一個あります。",
          "zh": "有一个包。"
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
      "part_of_speech": "noun",
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
          "zh": "二加三等于五。"
        },
        {
          "ja": "答えは五です。",
          "zh": "答案是五。"
        },
        {
          "ja": "紙に五と書きました。",
          "zh": "在纸上写了五。"
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
          "zh": "学习日语。"
        },
        {
          "ja": "英語を話します。",
          "zh": "说英语。"
        },
        {
          "ja": "中国語が少し分かります。",
          "zh": "懂一点中文。"
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
          "zh": "去公园。"
        },
        {
          "ja": "公園は駅の近くです。",
          "zh": "公园在车站附近。"
        },
        {
          "ja": "公園で友達に会います。",
          "zh": "在公园见朋友。"
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
          "zh": "在十字路口向右转。"
        },
        {
          "ja": "交差点で止まってください。",
          "zh": "请在路口停下。"
        },
        {
          "ja": "駅は交差点の近くです。",
          "zh": "车站在十字路口附近。"
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
          "zh": "喝红茶。"
        },
        {
          "ja": "紅茶が好きです。",
          "zh": "喜欢红茶。"
        },
        {
          "ja": "紅茶をください。",
          "zh": "请给我红茶。"
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
          "zh": "去派出所。"
        },
        {
          "ja": "交番は駅の近くです。",
          "zh": "派出所在车站附近。"
        },
        {
          "ja": "交番で友達に会います。",
          "zh": "在派出所见朋友。"
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
          "zh": "听得到老师的声音。"
        },
        {
          "ja": "大きな声で話してください。",
          "zh": "请大声说。"
        },
        {
          "ja": "声が小さいです。",
          "zh": "声音很小。"
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
      "meaning_zh": "外套；大衣",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "寒いのでコートを着ます。",
          "zh": "因为冷，所以穿大衣。"
        },
        {
          "ja": "黒いコートを買いました。",
          "zh": "买了黑色大衣。"
        },
        {
          "ja": "コートを脱いでください。",
          "zh": "请脱下大衣。"
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
          "zh": "喝咖啡。"
        },
        {
          "ja": "コーヒーが好きです。",
          "zh": "喜欢咖啡。"
        },
        {
          "ja": "コーヒーをください。",
          "zh": "请给我咖啡。"
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
          "zh": "这里是图书馆。"
        },
        {
          "ja": "ここに名前を書いてください。",
          "zh": "请在这里写名字。"
        },
        {
          "ja": "ここで待ちます。",
          "zh": "在这里等。"
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
          "zh": "下午三点见。"
        },
        {
          "ja": "午後は図書館へ行きます。",
          "zh": "下午去图书馆。"
        },
        {
          "ja": "午後から雨です。",
          "zh": "下午开始下雨。"
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
      "kanji_readings": [
        {
          "form": "九日",
          "reading": "ここのか"
        }
      ],
      "examples": [
        {
          "ja": "九日に会いましょう。",
          "zh": "九号见吧。"
        },
        {
          "ja": "九日は休みです。",
          "zh": "九号休息。"
        },
        {
          "ja": "九日に日本へ行きます。",
          "zh": "九号去日本。"
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
          "ja": "九つの町へ行きました。",
          "zh": "去了九个城镇。"
        },
        {
          "ja": "九つください。",
          "zh": "请给我九个。"
        },
        {
          "ja": "九つの本を読みました。",
          "zh": "读了九本书。"
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
          "zh": "上午九点开始。"
        },
        {
          "ja": "午前中は忙しいです。",
          "zh": "上午很忙。"
        },
        {
          "ja": "午前に学校へ行きます。",
          "zh": "上午去学校。"
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
          "zh": "回答问题。"
        },
        {
          "ja": "先生に大きな声で答えました。",
          "zh": "大声回答了老师。"
        },
        {
          "ja": "名前を答えてください。",
          "zh": "请回答名字。"
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
      "kanji_readings": [],
      "examples": [
        {
          "ja": "こちらへどうぞ。",
          "zh": "请到这边。"
        },
        {
          "ja": "こちらは田中さんです。",
          "zh": "这位是田中先生/女士。"
        },
        {
          "ja": "こちらで待ってください。",
          "zh": "请在这边等。"
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
      "romaji": "kocchi",
      "part_of_speech": "pronoun/demonstrative",
      "meaning_zh": "这边（口语）",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "こっちへ来てください。",
          "zh": "请到这边来。"
        },
        {
          "ja": "こっちが安いです。",
          "zh": "这边这个便宜。"
        },
        {
          "ja": "こっちで待ちます。",
          "zh": "在这边等。"
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
          "ja": "コップを使います。",
          "zh": "使用杯子。"
        },
        {
          "ja": "コップを買いました。",
          "zh": "买了杯子。"
        },
        {
          "ja": "コップに水を入れます。",
          "zh": "往杯子里倒水。"
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
          "ja": "今年、学校へ行きます。",
          "zh": "今年去学校。"
        },
        {
          "ja": "今年は忙しいです。",
          "zh": "今年很忙。"
        },
        {
          "ja": "今年、友達に会います。",
          "zh": "今年见朋友。"
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
      "kanji_readings": [
        {
          "form": "言葉",
          "reading": "ことば"
        }
      ],
      "examples": [
        {
          "ja": "新しい言葉を覚えます。",
          "zh": "记新词。"
        },
        {
          "ja": "この言葉の意味は何ですか。",
          "zh": "这个词是什么意思？"
        },
        {
          "ja": "日本語の言葉を勉強します。",
          "zh": "学习日语词语。"
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
          "ja": "子供に会います。",
          "zh": "见孩子。"
        },
        {
          "ja": "子供と話します。",
          "zh": "和孩子说话。"
        },
        {
          "ja": "公園の子供たちは元気に遊んでいます。",
          "zh": "公园里的孩子们正在精神十足地玩耍。"
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
      "part_of_speech": "pronoun/demonstrative",
      "meaning_zh": "这个（连体词）",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "この本は新しいです。",
          "zh": "这本书是新的。"
        },
        {
          "ja": "この店は安いです。",
          "zh": "这家店很便宜。"
        },
        {
          "ja": "この道をまっすぐ行ってください。",
          "zh": "请沿这条路直走。"
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
      "kanji_readings": [
        {
          "form": "ご飯",
          "reading": "ごはん"
        }
      ],
      "examples": [
        {
          "ja": "ご飯を食べます。",
          "zh": "吃米饭。"
        },
        {
          "ja": "ご飯が好きです。",
          "zh": "喜欢米饭。"
        },
        {
          "ja": "ご飯をください。",
          "zh": "请给我米饭。"
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
      "romaji": "kopiisuru",
      "part_of_speech": "suru-verb/noun",
      "meaning_zh": "复印；复制",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "コピーします。",
          "zh": "复印。"
        },
        {
          "ja": "毎日、コピーします。",
          "zh": "每天复印。"
        },
        {
          "ja": "昨日、コピーしました。",
          "zh": "昨天复印了。"
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
          "zh": "因为不认识路，很为难。"
        },
        {
          "ja": "お金がなくて困りました。",
          "zh": "因为没钱而犯难了。"
        },
        {
          "ja": "困った時は先生に聞きます。",
          "zh": "遇到困难时问老师。"
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
          "zh": "这是书。"
        },
        {
          "ja": "これはいくらですか。",
          "zh": "这个多少钱？"
        },
        {
          "ja": "これは私のです。",
          "zh": "这是我的。"
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-269",
      "jlpt": "N5",
      "headword": "～ころ",
      "source_form": "～ころ; ～ごろ",
      "variants": [
        "～ころ",
        "～ごろ"
      ],
      "reading": "～ころ",
      "reading_variants": [
        "～ころ",
        "～ごろ"
      ],
      "romaji": "~koro",
      "part_of_speech": "suffix/pattern",
      "meaning_zh": "……左右（时间）",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "七時ごろ起きます。",
          "zh": "七点左右起床。"
        },
        {
          "ja": "昼ごろ電話します。",
          "zh": "中午左右打电话。"
        },
        {
          "ja": "子供のころ、よく泳ぎました。",
          "zh": "小时候经常游泳。"
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
          "ja": "今月、学校へ行きます。",
          "zh": "这个月去学校。"
        },
        {
          "ja": "今月は忙しいです。",
          "zh": "这个月很忙。"
        },
        {
          "ja": "今月、友達に会います。",
          "zh": "这个月见朋友。"
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
          "zh": "这周去学校。"
        },
        {
          "ja": "今週は忙しいです。",
          "zh": "这周很忙。"
        },
        {
          "ja": "今週、友達に会います。",
          "zh": "这周见朋友。"
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
      "part_of_speech": "pronoun/demonstrative",
      "meaning_zh": "这样的",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "こんな本を読みたいです。",
          "zh": "想读这样的书。"
        },
        {
          "ja": "こんな料理は初めてです。",
          "zh": "这样的菜是第一次吃。"
        },
        {
          "ja": "こんな日は家にいます。",
          "zh": "这样的日子待在家里。"
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
          "ja": "今晩、学校へ行きます。",
          "zh": "今晚去学校。"
        },
        {
          "ja": "今晩は忙しいです。",
          "zh": "今晚很忙。"
        },
        {
          "ja": "今晩、友達に会います。",
          "zh": "今晚见朋友。"
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
      "part_of_speech": "conjunction/expression",
      "meaning_zh": "那么；来吧；嗯",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "さあ、始めましょう。",
          "zh": "来吧，开始吧。"
        },
        {
          "ja": "さあ、行きましょう。",
          "zh": "来吧，走吧。"
        },
        {
          "ja": "さあ、分かりません。",
          "zh": "嗯，我不知道。"
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
          "ja": "私は二十歳です。",
          "zh": "我二十岁。"
        },
        {
          "ja": "父は五十歳です。",
          "zh": "父亲五十岁。"
        },
        {
          "ja": "何歳ですか。",
          "zh": "几岁？"
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
          "ja": "財布を使います。",
          "zh": "使用钱包。"
        },
        {
          "ja": "財布を買いました。",
          "zh": "买了钱包。"
        },
        {
          "ja": "財布をかばんに入れました。",
          "zh": "把钱包放进了包里。"
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
          "ja": "魚を食べます。",
          "zh": "吃鱼。"
        },
        {
          "ja": "魚が好きです。",
          "zh": "喜欢鱼。"
        },
        {
          "ja": "魚をください。",
          "zh": "请给我鱼。"
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
      "meaning_zh": "前方；先；刚才；将来",
      "kanji_readings": [
        {
          "form": "先",
          "reading": "さき"
        }
      ],
      "examples": [
        {
          "ja": "お先に失礼します。",
          "zh": "我先告辞了。"
        },
        {
          "ja": "この先に駅があります。",
          "zh": "前面有车站。"
        },
        {
          "ja": "先にご飯を食べます。",
          "zh": "先吃饭。"
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
          "zh": "春天花开。"
        },
        {
          "ja": "公園で桜が咲いています。",
          "zh": "公园里的樱花开着。"
        },
        {
          "ja": "庭に赤い花が咲きました。",
          "zh": "院子里开了红花。"
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
          "zh": "用日语写作文。"
        },
        {
          "ja": "作文は少し難しいです。",
          "zh": "作文有点难。"
        },
        {
          "ja": "先生に作文を出します。",
          "zh": "把作文交给老师。"
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
      "kanji_readings": [
        {
          "form": "差す",
          "reading": "さす"
        }
      ],
      "examples": [
        {
          "ja": "雨なので傘を差します。",
          "zh": "因为下雨，所以撑伞。"
        },
        {
          "ja": "窓から日が差しています。",
          "zh": "阳光正从窗户照进来。"
        },
        {
          "ja": "午後になると西日が部屋に差します。",
          "zh": "到了下午，夕阳会照进房间。"
        }
      ],
      "note_zh": "表示用手指指向时写作「指す」，不写作「差す」。"
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
          "zh": "买了三本书。"
        },
        {
          "ja": "雑誌を一冊読みました。",
          "zh": "读了一本杂志。"
        },
        {
          "ja": "辞書が二冊あります。",
          "zh": "有两本词典。"
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
          "zh": "读杂志。"
        },
        {
          "ja": "雑誌が好きです。",
          "zh": "喜欢杂志。"
        },
        {
          "ja": "朝、雑誌を読みました。",
          "zh": "早上读了杂志。"
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
          "zh": "往咖啡里加糖。"
        },
        {
          "ja": "このケーキには砂糖が入っています。",
          "zh": "这个蛋糕里含有糖。"
        },
        {
          "ja": "砂糖を少しだけ入れてください。",
          "zh": "请只放一点糖。"
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
          "zh": "今天很冷。"
        },
        {
          "ja": "寒い日が続きます。",
          "zh": "冷的天气会持续。"
        },
        {
          "ja": "外はとても寒いです。",
          "zh": "外面非常冷。"
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
          "ja": "さ来年、学校へ行きます。",
          "zh": "后年去学校。"
        },
        {
          "ja": "さ来年は忙しいです。",
          "zh": "后年很忙。"
        },
        {
          "ja": "さ来年、友達に会います。",
          "zh": "后年见朋友。"
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
          "zh": "田中先生是老师。"
        },
        {
          "ja": "山田さんに会いました。",
          "zh": "见到了山田先生。"
        },
        {
          "ja": "お母さんは元気です。",
          "zh": "妈妈很好。"
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
      "part_of_speech": "noun",
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
          "zh": "一加二等于三。"
        },
        {
          "ja": "答えは三です。",
          "zh": "答案是三。"
        },
        {
          "ja": "三を丸で囲んでください。",
          "zh": "请把三圈起来。"
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
          "zh": "散步。"
        },
        {
          "ja": "毎日、散歩します。",
          "zh": "每天散步。"
        },
        {
          "ja": "昨日、散歩しました。",
          "zh": "昨天散步了。"
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
        "し"
      ],
      "romaji": "shi",
      "part_of_speech": "noun",
      "meaning_zh": "四",
      "kanji_readings": [
        {
          "form": "四",
          "reading": "し"
        }
      ],
      "examples": [
        {
          "ja": "四月に学校が始まります。",
          "zh": "学校四月开学。"
        },
        {
          "ja": "紙に四角を描きました。",
          "zh": "在纸上画了四方形。"
        },
        {
          "ja": "日本には四季があります。",
          "zh": "日本有四季。"
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
          "zh": "七点起床。"
        },
        {
          "ja": "今、何時ですか。",
          "zh": "现在几点？"
        },
        {
          "ja": "三時に会いましょう。",
          "zh": "三点见吧。"
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
          "zh": "往菜里加一点盐。"
        },
        {
          "ja": "スープに塩を入れすぎました。",
          "zh": "汤里盐放多了。"
        },
        {
          "ja": "テーブルの上に塩があります。",
          "zh": "桌上有盐。"
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
      "part_of_speech": "conjunction/expression",
      "meaning_zh": "但是；然而",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "雨です。しかし、出かけます。",
          "zh": "下雨了。但是，我要出门。"
        },
        {
          "ja": "安いです。しかし、少し古いです。",
          "zh": "很便宜。但是有点旧。"
        },
        {
          "ja": "難しいです。しかし、おもしろいです。",
          "zh": "很难。但是很有趣。"
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
          "zh": "有时间吗？"
        },
        {
          "ja": "日本語を勉強する時間です。",
          "zh": "到学习日语的时间了。"
        },
        {
          "ja": "時間がかかります。",
          "zh": "需要时间。"
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
          "zh": "学习一小时。"
        },
        {
          "ja": "八時間寝ました。",
          "zh": "睡了八小时。"
        },
        {
          "ja": "二時間かかります。",
          "zh": "需要两小时。"
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
      "meaning_zh": "工作",
      "kanji_readings": [
        {
          "form": "仕事",
          "reading": "しごと"
        }
      ],
      "examples": [
        {
          "ja": "父は会社で仕事をします。",
          "zh": "父亲在公司工作。"
        },
        {
          "ja": "仕事が終わりました。",
          "zh": "工作结束了。"
        },
        {
          "ja": "新しい仕事を探しています。",
          "zh": "正在找新工作。"
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
          "zh": "用词典查词。"
        },
        {
          "ja": "新しい辞書を買いました。",
          "zh": "买了新词典。"
        },
        {
          "ja": "辞書を貸してください。",
          "zh": "请把词典借给我。"
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
          "zh": "图书馆很安静。"
        },
        {
          "ja": "静かな部屋で勉強します。",
          "zh": "在安静的房间学习。"
        },
        {
          "ja": "夜は町が静かです。",
          "zh": "晚上城镇很安静。"
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
          "zh": "桌子下面有包。"
        },
        {
          "ja": "下を見てください。",
          "zh": "请往下看。"
        },
        {
          "ja": "階段を下へ行きます。",
          "zh": "下楼梯往下走。"
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
        "しち"
      ],
      "romaji": "shichi",
      "part_of_speech": "noun",
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
          "zh": "七月很热。"
        },
        {
          "ja": "毎朝七時に起きます。",
          "zh": "每天早上七点起床。"
        },
        {
          "ja": "答えは七です。",
          "zh": "答案是七。"
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
      "part_of_speech": "noun",
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
          "zh": "向老师提问。"
        },
        {
          "ja": "質問があります。",
          "zh": "我有问题。"
        },
        {
          "ja": "この質問に答えてください。",
          "zh": "请回答这个问题。"
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
          "ja": "自転車を使います。",
          "zh": "使用自行车。"
        },
        {
          "ja": "自転車を買いました。",
          "zh": "买了自行车。"
        },
        {
          "ja": "自転車で学校へ行きます。",
          "zh": "骑自行车去学校。"
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
      "meaning_zh": "汽车",
      "kanji_readings": [
        {
          "form": "自動車",
          "reading": "じどうしゃ"
        }
      ],
      "examples": [
        {
          "ja": "自動車で会社へ行きます。",
          "zh": "开车去公司。"
        },
        {
          "ja": "新しい自動車を買いました。",
          "zh": "买了新汽车。"
        },
        {
          "ja": "自動車が道を走っています。",
          "zh": "汽车在路上行驶。"
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
          "zh": "养的鱼昨天死了。"
        },
        {
          "ja": "水がないと植物は死にます。",
          "zh": "没有水，植物会死。"
        },
        {
          "ja": "事故で人が死にました。",
          "zh": "有人在事故中去世了。"
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
      "meaning_zh": "词典；字典",
      "kanji_readings": [
        {
          "form": "字引",
          "reading": "じびき"
        }
      ],
      "examples": [
        {
          "ja": "字引で漢字を調べます。",
          "zh": "用字典查汉字。"
        },
        {
          "ja": "字引を使います。",
          "zh": "使用字典。"
        },
        {
          "ja": "古い字引があります。",
          "zh": "有一本旧字典。"
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
          "zh": "自己做作业。"
        },
        {
          "ja": "自分の名前を書いてください。",
          "zh": "请写自己的名字。"
        },
        {
          "ja": "自分の部屋を掃除します。",
          "zh": "打扫自己的房间。"
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
          "zh": "店七点关门。"
        },
        {
          "ja": "ドアが閉まっています。",
          "zh": "门关着。"
        },
        {
          "ja": "駅の窓口はもう閉まりました。",
          "zh": "车站窗口已经关了。"
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
          "zh": "请关窗。"
        },
        {
          "ja": "寒いのでドアを閉めます。",
          "zh": "因为冷，所以关门。"
        },
        {
          "ja": "店を早く閉めました。",
          "zh": "早早关了店。"
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
          "zh": "系上安全带。"
        },
        {
          "ja": "ねじをしっかり締めてください。",
          "zh": "请把螺丝拧紧。"
        },
        {
          "ja": "父は毎朝ネクタイを締めます。",
          "zh": "父亲每天早上系领带。"
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
      "part_of_speech": "conjunction/expression",
      "meaning_zh": "那么；那就",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "じゃあ、また明日。",
          "zh": "那么，明天见。"
        },
        {
          "ja": "じゃあ、行きましょう。",
          "zh": "那走吧。"
        },
        {
          "ja": "じゃあ、これをください。",
          "zh": "那请给我这个。"
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
          "ja": "写真を撮ります。",
          "zh": "拍照片。"
        },
        {
          "ja": "この写真を見てください。",
          "zh": "请看这张照片。"
        },
        {
          "ja": "友達に写真を見せました。",
          "zh": "给朋友看了照片。"
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
      "meaning_zh": "衬衫",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "白いシャツを着ます。",
          "zh": "穿白衬衫。"
        },
        {
          "ja": "新しいシャツを買いました。",
          "zh": "买了新衬衫。"
        },
        {
          "ja": "シャツを洗濯しました。",
          "zh": "洗了衬衫。"
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
      "kanji_readings": [],
      "examples": [
        {
          "ja": "朝、シャワーを浴びます。",
          "zh": "早上冲澡。"
        },
        {
          "ja": "シャワーを使います。",
          "zh": "使用淋浴。"
        },
        {
          "ja": "シャワーはどこですか。",
          "zh": "淋浴在哪里？"
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
      "part_of_speech": "noun",
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
          "zh": "这支铅笔十日元。"
        },
        {
          "ja": "十月に日本へ行きます。",
          "zh": "十月去日本。"
        },
        {
          "ja": "紙に十と書いてください。",
          "zh": "请在纸上写十。"
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
      "meaning_zh": "整个……；……期间",
      "kanji_readings": [
        {
          "form": "～中",
          "reading": "～じゅう"
        }
      ],
      "examples": [
        {
          "ja": "一日中、家にいました。",
          "zh": "一整天都在家。"
        },
        {
          "ja": "夏休み中、旅行しました。",
          "zh": "暑假期间旅行了。"
        },
        {
          "ja": "世界中に友達がいます。",
          "zh": "世界各地都有朋友。"
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
          "zh": "休息一周。"
        },
        {
          "ja": "二週間日本にいます。",
          "zh": "在日本待两周。"
        },
        {
          "ja": "三週間勉強しました。",
          "zh": "学习了三周。"
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
          "ja": "授業は九時に始まります。",
          "zh": "课九点开始。"
        },
        {
          "ja": "日本語の授業があります。",
          "zh": "有日语课。"
        },
        {
          "ja": "授業中は静かにしてください。",
          "zh": "上课时请安静。"
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
          "zh": "做作业。"
        },
        {
          "ja": "宿題を忘れました。",
          "zh": "忘了作业。"
        },
        {
          "ja": "宿題を先生に出します。",
          "zh": "把作业交给老师。"
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
          "zh": "姐姐很会做饭。"
        },
        {
          "ja": "日本語が上手ですね。",
          "zh": "你日语很好呢。"
        },
        {
          "ja": "上手に漢字を書きます。",
          "zh": "汉字写得很好。"
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
      "kanji_readings": [
        {
          "form": "丈夫",
          "reading": "じょうぶ"
        }
      ],
      "examples": [
        {
          "ja": "このかばんは丈夫です。",
          "zh": "这个包很结实。"
        },
        {
          "ja": "丈夫な靴を買いました。",
          "zh": "买了结实的鞋。"
        },
        {
          "ja": "体が丈夫です。",
          "zh": "身体很结实。"
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
          "zh": "吃生鱼片时蘸酱油。"
        },
        {
          "ja": "醤油を少しください。",
          "zh": "请给我一点酱油。"
        },
        {
          "ja": "テーブルの上に醤油があります。",
          "zh": "桌上有酱油。"
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
          "zh": "去食堂。"
        },
        {
          "ja": "食堂は駅の近くです。",
          "zh": "食堂在车站附近。"
        },
        {
          "ja": "食堂で友達に会います。",
          "zh": "在食堂见朋友。"
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
      "kanji_readings": [
        {
          "form": "知る",
          "reading": "しる"
        }
      ],
      "examples": [
        {
          "ja": "その人を知っています。",
          "zh": "认识那个人。"
        },
        {
          "ja": "答えを知りません。",
          "zh": "不知道答案。"
        },
        {
          "ja": "新しい言葉を知りました。",
          "zh": "知道了新词。"
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
          "zh": "穿白色衬衫。"
        },
        {
          "ja": "白が好きです。",
          "zh": "我喜欢白色。"
        },
        {
          "ja": "この紙は白です。",
          "zh": "这张纸是白色的。"
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
          "zh": "这个衬衫很白。"
        },
        {
          "ja": "とても白いですね。",
          "zh": "真白啊。"
        },
        {
          "ja": "白いものが好きです。",
          "zh": "喜欢白的东西。"
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
      "part_of_speech": "counter/suffix",
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
          "zh": "我是日本人。"
        },
        {
          "ja": "友達は中国人です。",
          "zh": "朋友是中国人。"
        },
        {
          "ja": "あの人は外国人です。",
          "zh": "那个人是外国人。"
        }
      ],
      "note_zh": "接在数字或名词后使用；例句中去掉了前缀符号「～」。"
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
          "zh": "读报纸。"
        },
        {
          "ja": "新聞が好きです。",
          "zh": "喜欢报纸。"
        },
        {
          "ja": "朝、新聞を読みました。",
          "zh": "早上读了报纸。"
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
          "zh": "星期三去学校。"
        },
        {
          "ja": "水曜日は休みです。",
          "zh": "星期三休息。"
        },
        {
          "ja": "次の水曜日に会いましょう。",
          "zh": "下个星期三见吧。"
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
          "ja": "ここでたばこを吸わないでください。",
          "zh": "请不要在这里吸烟。"
        },
        {
          "ja": "きれいな空気を吸います。",
          "zh": "呼吸新鲜空气。"
        },
        {
          "ja": "父はたばこを吸いません。",
          "zh": "父亲不吸烟。"
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
          "zh": "妹妹穿着蓝色裙子。"
        },
        {
          "ja": "新しいスカートを買いました。",
          "zh": "买了新裙子。"
        },
        {
          "ja": "このスカートは少し長いです。",
          "zh": "这条裙子有点长。"
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
          "zh": "喜欢猫。"
        },
        {
          "ja": "音楽が好きです。",
          "zh": "喜欢音乐。"
        },
        {
          "ja": "好きな食べ物は何ですか。",
          "zh": "你喜欢的食物是什么？"
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
      "meaning_zh": "过于……；超过……",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "食べすぎました。",
          "zh": "吃太多了。"
        },
        {
          "ja": "この服は大きすぎます。",
          "zh": "这件衣服太大了。"
        },
        {
          "ja": "三時すぎに来ます。",
          "zh": "三点多来。"
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
          "zh": "这个车站人很少。"
        },
        {
          "ja": "この町は店が少ないです。",
          "zh": "这个城镇店很少。"
        },
        {
          "ja": "今日は客が少ないと思います。",
          "zh": "我觉得今天客人很少。"
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
      "romaji": "suguni",
      "part_of_speech": "adverb/expression",
      "meaning_zh": "马上；立刻",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "すぐに行きます。",
          "zh": "马上去。"
        },
        {
          "ja": "すぐに帰ってください。",
          "zh": "请马上回去。"
        },
        {
          "ja": "先生はすぐに来ました。",
          "zh": "老师马上来了。"
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
      "part_of_speech": "adverb/expression",
      "meaning_zh": "一点；少量",
      "kanji_readings": [
        {
          "form": "少し",
          "reading": "すこし"
        }
      ],
      "examples": [
        {
          "ja": "少し待ってください。",
          "zh": "请等一下。"
        },
        {
          "ja": "日本語が少し分かります。",
          "zh": "懂一点日语。"
        },
        {
          "ja": "水を少し飲みます。",
          "zh": "喝一点水。"
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
          "zh": "今天很凉爽。"
        },
        {
          "ja": "涼しい日が続きます。",
          "zh": "凉爽的天气会持续。"
        },
        {
          "ja": "外はとても涼しいです。",
          "zh": "外面非常凉爽。"
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
      "part_of_speech": "suffix/pattern",
      "meaning_zh": "每……；各……；一点点地",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "一つずつ取ってください。",
          "zh": "请一个一个拿。"
        },
        {
          "ja": "少しずつ覚えます。",
          "zh": "一点一点记住。"
        },
        {
          "ja": "二人ずつ入ります。",
          "zh": "每次两个人进去。"
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
      "meaning_zh": "暖炉；取暖器",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "ストーブを使います。",
          "zh": "使用暖炉。"
        },
        {
          "ja": "ストーブを買いました。",
          "zh": "买了暖炉。"
        },
        {
          "ja": "ストーブで部屋を暖めます。",
          "zh": "用暖炉把房间暖起来。"
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
          "ja": "スプーンを使います。",
          "zh": "使用勺子。"
        },
        {
          "ja": "スプーンを買いました。",
          "zh": "买了勺子。"
        },
        {
          "ja": "スプーンでスープを飲みます。",
          "zh": "用勺子喝汤。"
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
          "zh": "喜欢运动。"
        },
        {
          "ja": "日曜日にスポーツをします。",
          "zh": "星期天运动。"
        },
        {
          "ja": "どんなスポーツが好きですか。",
          "zh": "你喜欢什么运动？"
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
          "zh": "穿黑色裤子。"
        },
        {
          "ja": "このズボンは少し大きいです。",
          "zh": "这条裤子有点大。"
        },
        {
          "ja": "昨日、ズボンを洗いました。",
          "zh": "昨天洗了裤子。"
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
          "zh": "住在东京。"
        },
        {
          "ja": "駅の近くに住みたいです。",
          "zh": "想住在车站附近。"
        },
        {
          "ja": "家族と一緒に住んでいます。",
          "zh": "和家人一起住。"
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
          "ja": "毎日、日本語を勉強します。",
          "zh": "每天学习日语。"
        },
        {
          "ja": "家に帰ってから宿題をします。",
          "zh": "回家后做作业。"
        },
        {
          "ja": "週末は何をしますか。",
          "zh": "周末做什么？"
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
          "zh": "请坐在这里。"
        },
        {
          "ja": "椅子に座ります。",
          "zh": "坐在椅子上。"
        },
        {
          "ja": "友達の隣に座りました。",
          "zh": "坐在朋友旁边。"
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
        "せい"
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
          "zh": "父亲个子高。"
        },
        {
          "ja": "私は背が低いです。",
          "zh": "我个子矮。"
        },
        {
          "ja": "兄は背が高くなりました。",
          "zh": "哥哥长高了。"
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
          "zh": "学生在教室里。"
        },
        {
          "ja": "生徒は先生に質問します。",
          "zh": "学生问老师问题。"
        },
        {
          "ja": "この学校には生徒が多いです。",
          "zh": "这所学校学生很多。"
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
          "ja": "寒いのでセーターを着ます。",
          "zh": "因为冷，所以穿毛衣。"
        },
        {
          "ja": "母がセーターをくれました。",
          "zh": "妈妈送了我一件毛衣。"
        },
        {
          "ja": "このセーターは暖かいです。",
          "zh": "这件毛衣很暖和。"
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
          "ja": "石鹸を使います。",
          "zh": "使用肥皂。"
        },
        {
          "ja": "石鹸を買いました。",
          "zh": "买了肥皂。"
        },
        {
          "ja": "石鹸で手を洗います。",
          "zh": "用肥皂洗手。"
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
          "zh": "父亲在公司穿西装。"
        },
        {
          "ja": "新しい背広を買いました。",
          "zh": "买了新西装。"
        },
        {
          "ja": "背広をハンガーに掛けます。",
          "zh": "把西装挂到衣架上。"
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
          "zh": "这个房间很窄。"
        },
        {
          "ja": "とても狭いですね。",
          "zh": "真窄啊。"
        },
        {
          "ja": "この道は狭いので、車が通れません。",
          "zh": "这条路很窄，汽车无法通过。"
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
      "part_of_speech": "noun",
      "meaning_zh": "零",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "試合はゼロ対ゼロです。",
          "zh": "比赛比分是零比零。"
        },
        {
          "ja": "残り時間はゼロです。",
          "zh": "剩余时间是零。"
        },
        {
          "ja": "ゼロから日本語を勉強します。",
          "zh": "从零开始学习日语。"
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
      "part_of_speech": "noun",
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
          "zh": "这本书一千日元。"
        },
        {
          "ja": "会場に千人集まりました。",
          "zh": "会场聚集了一千人。"
        },
        {
          "ja": "千を数字で書いてください。",
          "zh": "请用数字写出一千。"
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
          "zh": "上个月开始了新工作。"
        },
        {
          "ja": "先月はとても忙しかったです。",
          "zh": "上个月非常忙。"
        },
        {
          "ja": "先月、家族と旅行しました。",
          "zh": "上个月和家人旅行了。"
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
          "zh": "上周去了图书馆。"
        },
        {
          "ja": "先週は学校が休みでした。",
          "zh": "上周学校放假。"
        },
        {
          "ja": "先週、友達と映画を見ました。",
          "zh": "上周和朋友看了电影。"
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
      "meaning_zh": "老师；医生；先生",
      "kanji_readings": [
        {
          "form": "先生",
          "reading": "せんせい"
        }
      ],
      "examples": [
        {
          "ja": "先生に会います。",
          "zh": "见老师。"
        },
        {
          "ja": "先生と話します。",
          "zh": "和老师说话。"
        },
        {
          "ja": "私の先生は今日も元気です。",
          "zh": "我的老师今天也很有精神。"
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
      "part_of_speech": "noun",
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
          "zh": "洗衣服。"
        },
        {
          "ja": "日曜日に洗濯をします。",
          "zh": "星期天洗衣服。"
        },
        {
          "ja": "洗濯物を干します。",
          "zh": "晾洗好的衣服。"
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
          "zh": "全部吃了。"
        },
        {
          "ja": "本を全部読みました。",
          "zh": "把书全部读完了。"
        },
        {
          "ja": "全部でいくらですか。",
          "zh": "一共多少钱？"
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
          "zh": "是那样。"
        },
        {
          "ja": "そうですか。",
          "zh": "是这样啊。"
        },
        {
          "ja": "いいえ、そうではありません。",
          "zh": "不，不是那样。"
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
          "zh": "打扫房间。"
        },
        {
          "ja": "日曜日に家を掃除しました。",
          "zh": "星期天打扫了家。"
        },
        {
          "ja": "教室をきれいに掃除します。",
          "zh": "把教室打扫干净。"
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
      "part_of_speech": "conjunction/expression",
      "meaning_zh": "然后；并且",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "本を読みます。そして、寝ます。",
          "zh": "读书，然后睡觉。"
        },
        {
          "ja": "駅へ行きます。そして、友達に会います。",
          "zh": "去车站，然后见朋友。"
        },
        {
          "ja": "安いです。そして、おいしいです。",
          "zh": "很便宜，而且很好吃。"
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
      "meaning_zh": "那里",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "そこにかばんがあります。",
          "zh": "那里有包。"
        },
        {
          "ja": "そこで待ってください。",
          "zh": "请在那里等。"
        },
        {
          "ja": "そこは駅です。",
          "zh": "那里是车站。"
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
      "meaning_zh": "那边；那位（礼貌说法）",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "そちらへ行きます。",
          "zh": "我去那边。"
        },
        {
          "ja": "そちらは寒いですか。",
          "zh": "你那边冷吗？"
        },
        {
          "ja": "そちらで待ってください。",
          "zh": "请在那边等。"
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
      "romaji": "socchi",
      "part_of_speech": "pronoun/demonstrative",
      "meaning_zh": "那边（口语）",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "そっちへ行きます。",
          "zh": "去你那边。"
        },
        {
          "ja": "そっちを見てください。",
          "zh": "请看那边。"
        },
        {
          "ja": "そっちは暑いですか。",
          "zh": "你那边热吗？"
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
          "zh": "外面很冷。"
        },
        {
          "ja": "外で待っています。",
          "zh": "在外面等。"
        },
        {
          "ja": "子供が外で遊んでいます。",
          "zh": "孩子在外面玩。"
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
      "part_of_speech": "pronoun/demonstrative",
      "meaning_zh": "那个（连体词）",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "その本をください。",
          "zh": "请给我那本书。"
        },
        {
          "ja": "その店は有名です。",
          "zh": "那家店很有名。"
        },
        {
          "ja": "その人は先生です。",
          "zh": "那个人是老师。"
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
      "meaning_zh": "旁边；附近；荞麦面",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "駅のそばに店があります。",
          "zh": "车站旁边有商店。"
        },
        {
          "ja": "母のそばに座ります。",
          "zh": "坐在妈妈旁边。"
        },
        {
          "ja": "そばを食べました。",
          "zh": "吃了荞麦面。"
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
          "zh": "请看看天空。"
        },
        {
          "ja": "今日は空がきれいです。",
          "zh": "今天的天空很美。"
        },
        {
          "ja": "空に鳥が飛んでいます。",
          "zh": "鸟儿正在天空中飞。"
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
      "meaning_zh": "那个",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "それは何ですか。",
          "zh": "那是什么？"
        },
        {
          "ja": "それをください。",
          "zh": "请给我那个。"
        },
        {
          "ja": "それは私の傘です。",
          "zh": "那是我的伞。"
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
      "part_of_speech": "conjunction/expression",
      "meaning_zh": "然后；从那以后",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "学校へ行きます。それから、図書館へ行きます。",
          "zh": "去学校。然后去图书馆。"
        },
        {
          "ja": "朝ご飯を食べます。それから、出かけます。",
          "zh": "吃早饭。然后出门。"
        },
        {
          "ja": "本を読みました。それから、寝ました。",
          "zh": "读了书。然后睡了。"
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
      "romaji": "soredeha",
      "part_of_speech": "conjunction/expression",
      "meaning_zh": "那么；既然这样",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "それでは、始めましょう。",
          "zh": "那么，开始吧。"
        },
        {
          "ja": "それでは、また明日。",
          "zh": "那么，明天见。"
        },
        {
          "ja": "それでは、失礼します。",
          "zh": "那么，我先告辞了。"
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
          "zh": "有三辆车。"
        },
        {
          "ja": "テレビを一台買いました。",
          "zh": "买了一台电视。"
        },
        {
          "ja": "自転車が二台あります。",
          "zh": "有两辆自行车。"
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
          "zh": "去大学。"
        },
        {
          "ja": "大学は駅の近くです。",
          "zh": "大学在车站附近。"
        },
        {
          "ja": "大学で友達に会います。",
          "zh": "在大学见朋友。"
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
          "zh": "去大使馆。"
        },
        {
          "ja": "大使館は駅の近くです。",
          "zh": "大使馆在车站附近。"
        },
        {
          "ja": "大使館で友達に会います。",
          "zh": "在大使馆见朋友。"
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
          "zh": "没关系。"
        },
        {
          "ja": "一人で大丈夫ですか。",
          "zh": "一个人没问题吗？"
        },
        {
          "ja": "もう大丈夫です。",
          "zh": "已经没事了。"
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
          "zh": "非常喜欢猫。"
        },
        {
          "ja": "日本語が大好きです。",
          "zh": "非常喜欢日语。"
        },
        {
          "ja": "母の料理が大好きです。",
          "zh": "非常喜欢妈妈做的菜。"
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
          "zh": "家人很重要。"
        },
        {
          "ja": "大切な本をなくしました。",
          "zh": "弄丢了重要的书。"
        },
        {
          "ja": "時間を大切にします。",
          "zh": "珍惜时间。"
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
          "zh": "妈妈正在厨房做饭。"
        },
        {
          "ja": "台所に冷蔵庫があります。",
          "zh": "厨房里有冰箱。"
        },
        {
          "ja": "食事の後で台所を掃除します。",
          "zh": "饭后打扫厨房。"
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
      "kanji_readings": [
        {
          "form": "大変",
          "reading": "たいへん"
        }
      ],
      "examples": [
        {
          "ja": "今日は大変でした。",
          "zh": "今天很辛苦。"
        },
        {
          "ja": "大変な仕事です。",
          "zh": "这是很辛苦的工作。"
        },
        {
          "ja": "長い間、大変お世話になりました。",
          "zh": "长久以来承蒙您的关照。"
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
      "kanji_readings": [
        {
          "form": "高い",
          "reading": "たかい"
        }
      ],
      "examples": [
        {
          "ja": "この時計は高いです。",
          "zh": "这个表很高/贵。"
        },
        {
          "ja": "とても高いですね。",
          "zh": "真高/贵啊。"
        },
        {
          "ja": "高いものが好きです。",
          "zh": "喜欢高/贵的东西。"
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-380",
      "jlpt": "N5",
      "headword": "～だけ",
      "source_form": "～だけ",
      "variants": [
        "～だけ"
      ],
      "reading": "～だけ",
      "reading_variants": [
        "～だけ"
      ],
      "romaji": "~dake",
      "part_of_speech": "suffix/pattern",
      "meaning_zh": "只；仅",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "水だけ飲みます。",
          "zh": "只喝水。"
        },
        {
          "ja": "少しだけ待ってください。",
          "zh": "请稍等一下。"
        },
        {
          "ja": "一人だけ来ました。",
          "zh": "只来了一个人。"
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
      "part_of_speech": "adverb/expression",
      "meaning_zh": "很多",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "本をたくさん読みます。",
          "zh": "读很多书。"
        },
        {
          "ja": "人がたくさんいます。",
          "zh": "有很多人。"
        },
        {
          "ja": "野菜をたくさん買いました。",
          "zh": "买了很多蔬菜。"
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
          "zh": "坐出租车去车站。"
        },
        {
          "ja": "タクシーを呼びます。",
          "zh": "叫出租车。"
        },
        {
          "ja": "タクシーは高いです。",
          "zh": "出租车很贵。"
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
      "kanji_readings": [
        {
          "form": "出す",
          "reading": "だす"
        }
      ],
      "examples": [
        {
          "ja": "かばんから本を出します。",
          "zh": "从包里拿出书。"
        },
        {
          "ja": "宿題を先生に出しました。",
          "zh": "把作业交给了老师。"
        },
        {
          "ja": "手紙を出します。",
          "zh": "寄信。"
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
          "zh": "孩子们在玩。"
        },
        {
          "ja": "私たちは学生です。",
          "zh": "我们是学生。"
        },
        {
          "ja": "友達たちと旅行します。",
          "zh": "和朋友们旅行。"
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
          "zh": "请站在这里。"
        },
        {
          "ja": "駅の前に人が立っています。",
          "zh": "车站前站着人。"
        },
        {
          "ja": "授業の後で立ちました。",
          "zh": "课后站起来了。"
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
      "meaning_zh": "竖；高度；纵向",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "紙をたてにしてください。",
          "zh": "请把纸竖过来。"
        },
        {
          "ja": "たての線を書きます。",
          "zh": "画竖线。"
        },
        {
          "ja": "この箱はたてが長いです。",
          "zh": "这个箱子纵向很长。"
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
          "zh": "有一栋大建筑。"
        },
        {
          "ja": "この建物は古いです。",
          "zh": "这栋建筑很旧。"
        },
        {
          "ja": "駅の前の建物です。",
          "zh": "是车站前的建筑。"
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
          "zh": "旅行很开心。"
        },
        {
          "ja": "友達と話すのは楽しいです。",
          "zh": "和朋友聊天很开心。"
        },
        {
          "ja": "楽しい一日でした。",
          "zh": "是开心的一天。"
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
      "kanji_readings": [
        {
          "form": "頼む",
          "reading": "たのむ"
        }
      ],
      "examples": [
        {
          "ja": "友達に手伝いを頼みます。",
          "zh": "拜托朋友帮忙。"
        },
        {
          "ja": "店でコーヒーを頼みました。",
          "zh": "在店里点了咖啡。"
        },
        {
          "ja": "先生にもう一度頼みます。",
          "zh": "再拜托老师一次。"
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
          "zh": "请不要在这里吸烟。"
        },
        {
          "ja": "父はたばこを吸いません。",
          "zh": "父亲不吸烟。"
        },
        {
          "ja": "たばこは体に悪いです。",
          "zh": "香烟对身体不好。"
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
      "part_of_speech": "noun",
      "meaning_zh": "大概；也许",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "明日はたぶん雨です。",
          "zh": "明天大概下雨。"
        },
        {
          "ja": "彼はたぶん来ません。",
          "zh": "他大概不会来。"
        },
        {
          "ja": "たぶん大丈夫です。",
          "zh": "大概没问题。"
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
          "zh": "桌子上有食物。"
        },
        {
          "ja": "旅行に食べ物を持っていきます。",
          "zh": "旅行时带上食物。"
        },
        {
          "ja": "この店には日本の食べ物がたくさんあります。",
          "zh": "这家店有很多日本食物。"
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
          "zh": "吃早饭。"
        },
        {
          "ja": "魚を食べました。",
          "zh": "吃了鱼。"
        },
        {
          "ja": "いっしょに食べましょう。",
          "zh": "一起吃吧。"
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
          "ja": "卵を食べます。",
          "zh": "吃鸡蛋。"
        },
        {
          "ja": "卵が好きです。",
          "zh": "喜欢鸡蛋。"
        },
        {
          "ja": "卵をください。",
          "zh": "请给我鸡蛋。"
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
      "part_of_speech": "pronoun/demonstrative",
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
          "zh": "那个人是谁？"
        },
        {
          "ja": "誰に会いますか。",
          "zh": "你要见谁？"
        },
        {
          "ja": "これは誰の本ですか。",
          "zh": "这是谁的书？"
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
      "part_of_speech": "pronoun/demonstrative",
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
          "zh": "房间里有人吗？"
        },
        {
          "ja": "誰かに聞きましょう。",
          "zh": "问问某个人吧。"
        },
        {
          "ja": "誰か来ました。",
          "zh": "有人来了。"
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
          "zh": "生日时吃了蛋糕。"
        },
        {
          "ja": "今日は母の誕生日です。",
          "zh": "今天是妈妈的生日。"
        },
        {
          "ja": "友達が誕生日を祝ってくれました。",
          "zh": "朋友为我庆祝了生日。"
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
      "part_of_speech": "adverb/expression",
      "meaning_zh": "渐渐地",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "だんだん寒くなりました。",
          "zh": "渐渐变冷了。"
        },
        {
          "ja": "日本語がだんだん上手になりました。",
          "zh": "日语渐渐进步了。"
        },
        {
          "ja": "空がだんだん明るくなります。",
          "zh": "天空渐渐变亮。"
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
          "zh": "这个包很小。"
        },
        {
          "ja": "とても小さいですね。",
          "zh": "真小啊。"
        },
        {
          "ja": "小さいものが好きです。",
          "zh": "喜欢小的东西。"
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
      "kanji_readings": [
        {
          "form": "小さな",
          "reading": "ちいさな"
        }
      ],
      "examples": [
        {
          "ja": "小さな花が咲いています。",
          "zh": "开着一朵小花。"
        },
        {
          "ja": "小さなかばんを買いました。",
          "zh": "买了一个小包。"
        },
        {
          "ja": "小さな声で話します。",
          "zh": "小声说话。"
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
          "zh": "车站很近。"
        },
        {
          "ja": "学校は家から近いです。",
          "zh": "学校离家很近。"
        },
        {
          "ja": "近い店へ行きます。",
          "zh": "去附近的店。"
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
      "kanji_readings": [
        {
          "form": "違う",
          "reading": "ちがう"
        }
      ],
      "examples": [
        {
          "ja": "答えが違います。",
          "zh": "答案不一样。"
        },
        {
          "ja": "これは私のかばんと違います。",
          "zh": "这个和我的包不一样。"
        },
        {
          "ja": "道が違いました。",
          "zh": "路走错了。"
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
      "kanji_readings": [
        {
          "form": "近く",
          "reading": "ちかく"
        }
      ],
      "examples": [
        {
          "ja": "駅の近くに住んでいます。",
          "zh": "住在车站附近。"
        },
        {
          "ja": "近くの店へ行きます。",
          "zh": "去附近的店。"
        },
        {
          "ja": "近くに公園があります。",
          "zh": "附近有公园。"
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
          "zh": "坐地铁。"
        },
        {
          "ja": "地下鉄で学校へ行きます。",
          "zh": "坐地铁去学校。"
        },
        {
          "ja": "地下鉄の駅は近いです。",
          "zh": "地铁站很近。"
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
          "zh": "看地图。"
        },
        {
          "ja": "地図を書いてください。",
          "zh": "请画地图。"
        },
        {
          "ja": "地図で駅を探します。",
          "zh": "用地图找车站。"
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
          "ja": "父は会社で働いています。",
          "zh": "我父亲在公司工作。"
        },
        {
          "ja": "父と電話で話します。",
          "zh": "和父亲通电话。"
        },
        {
          "ja": "父に時計をあげました。",
          "zh": "送了父亲一块表。"
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
          "zh": "买了棕色的鞋。"
        },
        {
          "ja": "このかばんは茶色です。",
          "zh": "这个包是棕色的。"
        },
        {
          "ja": "茶色が好きです。",
          "zh": "我喜欢棕色。"
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
      "kanji_readings": [
        {
          "form": "茶碗",
          "reading": "ちゃわん"
        }
      ],
      "examples": [
        {
          "ja": "茶碗を使います。",
          "zh": "使用饭碗。"
        },
        {
          "ja": "茶碗を買いました。",
          "zh": "买了饭碗。"
        },
        {
          "ja": "茶碗にご飯を入れます。",
          "zh": "把米饭盛进饭碗。"
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
          "zh": "现在正在学习。"
        },
        {
          "ja": "授業中は静かにしてください。",
          "zh": "上课时请安静。"
        },
        {
          "ja": "仕事中に電話しないでください。",
          "zh": "工作中请不要打电话。"
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
      "part_of_speech": "noun",
      "meaning_zh": "正好；刚好",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "ちょうど三時です。",
          "zh": "正好三点。"
        },
        {
          "ja": "ちょうどいいです。",
          "zh": "正合适。"
        },
        {
          "ja": "ちょうど今、帰りました。",
          "zh": "刚好现在回来了。"
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
      "part_of_speech": "adverb/expression",
      "meaning_zh": "稍微；一点儿",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "ちょっと待ってください。",
          "zh": "请稍等一下。"
        },
        {
          "ja": "これはちょっと高いです。",
          "zh": "这个有点贵。"
        },
        {
          "ja": "ちょっと聞いてもいいですか。",
          "zh": "可以稍微问一下吗？"
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
          "zh": "今天是四月一号。"
        },
        {
          "ja": "一日に学校が始まります。",
          "zh": "一号学校开学。"
        },
        {
          "ja": "来月の一日に会いましょう。",
          "zh": "下个月一号见吧。"
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
          "zh": "使用这支笔。"
        },
        {
          "ja": "毎日、日本語を使います。",
          "zh": "每天使用日语。"
        },
        {
          "ja": "パソコンを使って勉強します。",
          "zh": "用电脑学习。"
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
          "zh": "今天很累。"
        },
        {
          "ja": "たくさん歩いて疲れました。",
          "zh": "走了很多路，累了。"
        },
        {
          "ja": "仕事の後で疲れています。",
          "zh": "工作后很累。"
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
          "ja": "次の駅で降ります。",
          "zh": "在下一站下车。"
        },
        {
          "ja": "次は何ですか。",
          "zh": "接下来是什么？"
        },
        {
          "ja": "次の日曜日に会います。",
          "zh": "下个星期天见。"
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
          "zh": "到车站了。"
        },
        {
          "ja": "学校に八時に着きます。",
          "zh": "八点到学校。"
        },
        {
          "ja": "もう家に着きましたか。",
          "zh": "已经到家了吗？"
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
          "zh": "在书桌前学习日语。"
        },
        {
          "ja": "部屋に新しい机を置きました。",
          "zh": "在房间里放了一张新书桌。"
        },
        {
          "ja": "机の上に本があります。",
          "zh": "桌上有书。"
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
          "zh": "妈妈做晚饭。"
        },
        {
          "ja": "友達にケーキを作りました。",
          "zh": "给朋友做了蛋糕。"
        },
        {
          "ja": "家で朝ご飯を作ります。",
          "zh": "在家做早饭。"
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
      "kanji_readings": [],
      "examples": [
        {
          "ja": "電気をつけます。",
          "zh": "开灯。"
        },
        {
          "ja": "テレビをつけてください。",
          "zh": "请打开电视。"
        },
        {
          "ja": "出かける前にマスクをつけました。",
          "zh": "出门前戴上了口罩。"
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
          "zh": "父亲在银行工作。"
        },
        {
          "ja": "会社に十年勤めました。",
          "zh": "在公司工作了十年。"
        },
        {
          "ja": "兄は病院に勤めています。",
          "zh": "哥哥在医院工作。"
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
          "zh": "这个电影很无聊。"
        },
        {
          "ja": "とてもつまらないですね。",
          "zh": "真无聊啊。"
        },
        {
          "ja": "この授業は少しつまらないです。",
          "zh": "这堂课有点无聊。"
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
          "zh": "这个水很凉。"
        },
        {
          "ja": "とても冷たいですね。",
          "zh": "真凉啊。"
        },
        {
          "ja": "冷たいものが好きです。",
          "zh": "喜欢凉的东西。"
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
          "ja": "この風は強いです。",
          "zh": "这个风很强。"
        },
        {
          "ja": "とても強いですね。",
          "zh": "真强啊。"
        },
        {
          "ja": "強いものが好きです。",
          "zh": "喜欢强的东西。"
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
          "zh": "洗手。"
        },
        {
          "ja": "手を上げてください。",
          "zh": "请举手。"
        },
        {
          "ja": "手が冷たいです。",
          "zh": "手很凉。"
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
      "kanji_readings": [],
      "examples": [
        {
          "ja": "テープを使います。",
          "zh": "使用磁带。"
        },
        {
          "ja": "テープを買いました。",
          "zh": "买了磁带。"
        },
        {
          "ja": "テープで箱を直しました。",
          "zh": "用胶带修好了箱子。"
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
          "ja": "テープレコーダーを使います。",
          "zh": "使用录音机。"
        },
        {
          "ja": "テープレコーダーを買いました。",
          "zh": "买了录音机。"
        },
        {
          "ja": "テープレコーダーで音楽を聞きます。",
          "zh": "用录音机听音乐。"
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
          "zh": "桌子上有书。"
        },
        {
          "ja": "テーブルをきれいにします。",
          "zh": "把桌子擦干净。"
        },
        {
          "ja": "テーブルでご飯を食べます。",
          "zh": "在桌子旁吃饭。"
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
          "zh": "下午出门买东西。"
        },
        {
          "ja": "家族と出かけました。",
          "zh": "和家人出门了。"
        },
        {
          "ja": "雨の日はあまり出かけません。",
          "zh": "下雨天不太出门。"
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
          "zh": "给妈妈写信。"
        },
        {
          "ja": "友達から手紙が来ました。",
          "zh": "朋友寄来了信。"
        },
        {
          "ja": "手紙を読みました。",
          "zh": "读了信。"
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
      "kanji_readings": [],
      "examples": [
        {
          "ja": "日本語が少しできます。",
          "zh": "会一点日语。"
        },
        {
          "ja": "宿題ができました。",
          "zh": "作业做完了。"
        },
        {
          "ja": "明日、来ることができます。",
          "zh": "明天能来。"
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
          "zh": "出口在右边。"
        },
        {
          "ja": "この出口から外へ出ます。",
          "zh": "从这个出口出去。"
        },
        {
          "ja": "駅の出口で友達に会います。",
          "zh": "在车站出口见朋友。"
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
          "zh": "明天考试。"
        },
        {
          "ja": "テストは難しかったです。",
          "zh": "考试很难。"
        },
        {
          "ja": "日本語のテストを受けます。",
          "zh": "参加日语考试。"
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
      "romaji": "deha",
      "part_of_speech": "conjunction/expression",
      "meaning_zh": "那么；那就",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "では、始めましょう。",
          "zh": "那么，开始吧。"
        },
        {
          "ja": "では、また明日。",
          "zh": "那么，明天见。"
        },
        {
          "ja": "では、行きます。",
          "zh": "那么，我走了。"
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
          "zh": "去百货商店。"
        },
        {
          "ja": "デパートは駅の近くです。",
          "zh": "百货商店在车站附近。"
        },
        {
          "ja": "デパートで友達に会います。",
          "zh": "在百货商店见朋友。"
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
      "part_of_speech": "conjunction/expression",
      "meaning_zh": "但是；不过",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "行きたいです。でも、時間がありません。",
          "zh": "想去。但是没有时间。"
        },
        {
          "ja": "高いです。でも、買います。",
          "zh": "很贵。但是要买。"
        },
        {
          "ja": "寒いです。でも、散歩します。",
          "zh": "很冷。但是去散步。"
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
      "kanji_readings": [
        {
          "form": "出る",
          "reading": "でる"
        }
      ],
      "examples": [
        {
          "ja": "朝八時に家を出ます。",
          "zh": "早上八点出门。"
        },
        {
          "ja": "駅の出口から出てください。",
          "zh": "请从车站出口出去。"
        },
        {
          "ja": "授業に出ました。",
          "zh": "上课了。"
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
          "ja": "テレビを見ます。",
          "zh": "看电视。"
        },
        {
          "ja": "友達とテレビを見ました。",
          "zh": "和朋友看了电视。"
        },
        {
          "ja": "テレビが好きです。",
          "zh": "喜欢电视。"
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
          "zh": "今天天气很好。"
        },
        {
          "ja": "明日の天気を調べます。",
          "zh": "查一下明天的天气。"
        },
        {
          "ja": "悪い天気が続いています。",
          "zh": "坏天气一直持续着。"
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
      "kanji_readings": [
        {
          "form": "電気",
          "reading": "でんき"
        }
      ],
      "examples": [
        {
          "ja": "電気をつけます。",
          "zh": "开灯。"
        },
        {
          "ja": "電気を消してください。",
          "zh": "请关灯。"
        },
        {
          "ja": "この部屋は電気が明るいです。",
          "zh": "这个房间的灯很亮。"
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
          "zh": "每天早上乘电车去学校。"
        },
        {
          "ja": "次の電車は十時に来ます。",
          "zh": "下一班电车十点来。"
        },
        {
          "ja": "電車が駅に着きました。",
          "zh": "电车到站了。"
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
      "part_of_speech": "noun",
      "meaning_zh": "电话",
      "kanji_readings": [
        {
          "form": "電話",
          "reading": "でんわ"
        }
      ],
      "examples": [
        {
          "ja": "電話を使います。",
          "zh": "使用电话。"
        },
        {
          "ja": "電話を買いました。",
          "zh": "买了电话。"
        },
        {
          "ja": "電話が鳴っています。",
          "zh": "电话正在响。"
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
          "zh": "早上打开拉门。"
        },
        {
          "ja": "寒いので戸を閉めました。",
          "zh": "因为冷，所以关上了拉门。"
        },
        {
          "ja": "猫が戸の前にいます。",
          "zh": "猫在拉门前。"
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
      "kanji_readings": [
        {
          "form": "～度",
          "reading": "～ど"
        }
      ],
      "examples": [
        {
          "ja": "今日は二十度です。",
          "zh": "今天二十度。"
        },
        {
          "ja": "もう一度言ってください。",
          "zh": "请再说一次。"
        },
        {
          "ja": "三度行きました。",
          "zh": "去了三次。"
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
      "meaning_zh": "门",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "ドアを開けてください。",
          "zh": "请把门打开。"
        },
        {
          "ja": "部屋を出る時、ドアを閉めます。",
          "zh": "离开房间时把门关上。"
        },
        {
          "ja": "ドアの前に人がいます。",
          "zh": "门前有人。"
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
      "meaning_zh": "厕所；洗手间",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "トイレはどこですか。",
          "zh": "厕所在哪里？"
        },
        {
          "ja": "トイレへ行きます。",
          "zh": "去厕所。"
        },
        {
          "ja": "トイレを借りてもいいですか。",
          "zh": "可以借用厕所吗？"
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
      "part_of_speech": "adverb/expression",
      "meaning_zh": "怎么样；如何",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "これはどうですか。",
          "zh": "这个怎么样？"
        },
        {
          "ja": "学校へどう行きますか。",
          "zh": "怎么去学校？"
        },
        {
          "ja": "体はどうですか。",
          "zh": "身体怎么样？"
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
      "part_of_speech": "adverb/expression",
      "meaning_zh": "为什么",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "どうして休みましたか。",
          "zh": "为什么休息/请假了？"
        },
        {
          "ja": "どうして行きませんか。",
          "zh": "为什么不去？"
        },
        {
          "ja": "どうしてですか。",
          "zh": "为什么？"
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
          "zh": "请进。"
        },
        {
          "ja": "お茶をどうぞ。",
          "zh": "请喝茶。"
        },
        {
          "ja": "どうぞよろしくお願いします。",
          "zh": "请多关照。"
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
          "zh": "喜欢动物。"
        },
        {
          "ja": "動物園で動物を見ます。",
          "zh": "在动物园看动物。"
        },
        {
          "ja": "小さい動物がいます。",
          "zh": "有小动物。"
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
      "kanji_readings": [],
      "examples": [
        {
          "ja": "どうもありがとうございます。",
          "zh": "非常感谢。"
        },
        {
          "ja": "どうもすみません。",
          "zh": "非常抱歉。"
        },
        {
          "ja": "どうも変ですね。",
          "zh": "总觉得很奇怪呢。"
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
        "(〜を) とお"
      ],
      "romaji": "too",
      "part_of_speech": "noun",
      "meaning_zh": "十个",
      "kanji_readings": [
        {
          "form": "十",
          "reading": "とお"
        }
      ],
      "examples": [
        {
          "ja": "十ください。",
          "zh": "请给我十个。"
        },
        {
          "ja": "りんごが十あります。",
          "zh": "有十个苹果。"
        },
        {
          "ja": "十まで数えます。",
          "zh": "数到十。"
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
          "ja": "この学校は遠いです。",
          "zh": "这个学校很远。"
        },
        {
          "ja": "とても遠いですね。",
          "zh": "真远啊。"
        },
        {
          "ja": "遠いものが好きです。",
          "zh": "喜欢远的东西。"
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
      "kanji_readings": [
        {
          "form": "十日",
          "reading": "とおか"
        }
      ],
      "examples": [
        {
          "ja": "十日に会いましょう。",
          "zh": "十号见吧。"
        },
        {
          "ja": "十日は休みです。",
          "zh": "十号休息。"
        },
        {
          "ja": "十日に日本へ行きます。",
          "zh": "十号去日本。"
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-454",
      "jlpt": "N5",
      "headword": "～時",
      "source_form": "～時",
      "variants": [
        "～時"
      ],
      "reading": "～とき",
      "reading_variants": [
        "～とき"
      ],
      "romaji": "~toki",
      "part_of_speech": "counter/suffix",
      "meaning_zh": "……的时候",
      "kanji_readings": [
        {
          "form": "～時",
          "reading": "～とき"
        }
      ],
      "examples": [
        {
          "ja": "暇な時、本を読みます。",
          "zh": "有空的时候读书。"
        },
        {
          "ja": "子供の時、よく遊びました。",
          "zh": "小时候经常玩。"
        },
        {
          "ja": "困った時、先生に聞きます。",
          "zh": "遇到困难时问老师。"
        }
      ],
      "note_zh": "接在数字或名词后使用；例句中去掉了前缀符号「～」。"
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
      "part_of_speech": "adverb/expression",
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
          "zh": "有时看电影。"
        },
        {
          "ja": "時々友達に電話します。",
          "zh": "有时给朋友打电话。"
        },
        {
          "ja": "日曜日は時々出かけます。",
          "zh": "星期天有时出门。"
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
          "ja": "時計を使います。",
          "zh": "使用钟表。"
        },
        {
          "ja": "時計を買いました。",
          "zh": "买了钟表。"
        },
        {
          "ja": "時計を壁に掛けました。",
          "zh": "把钟挂在了墙上。"
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
          "zh": "车站在哪里？"
        },
        {
          "ja": "どこへ行きますか。",
          "zh": "你去哪里？"
        },
        {
          "ja": "トイレはどこですか。",
          "zh": "洗手间在哪里？"
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
          "zh": "在安静的地方学习。"
        },
        {
          "ja": "ここはいい所です。",
          "zh": "这里是好地方。"
        },
        {
          "ja": "待つ所はどこですか。",
          "zh": "等候的地方在哪里？"
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
      "kanji_readings": [
        {
          "form": "年",
          "reading": "とし"
        }
      ],
      "examples": [
        {
          "ja": "一年は十二か月です。",
          "zh": "一年有十二个月。"
        },
        {
          "ja": "今年は忙しいです。",
          "zh": "今年很忙。"
        },
        {
          "ja": "年を聞かないでください。",
          "zh": "请不要问年龄。"
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
          "zh": "去图书馆。"
        },
        {
          "ja": "図書館は駅の近くです。",
          "zh": "图书馆在车站附近。"
        },
        {
          "ja": "図書館で友達に会います。",
          "zh": "在图书馆见朋友。"
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
      "meaning_zh": "哪边；哪位；哪个（礼貌说法）",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "どちらへ行きますか。",
          "zh": "您去哪边？"
        },
        {
          "ja": "どちらがいいですか。",
          "zh": "哪个比较好？"
        },
        {
          "ja": "どちら様ですか。",
          "zh": "请问是哪位？"
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
      "romaji": "docchi",
      "part_of_speech": "pronoun/demonstrative",
      "meaning_zh": "哪边；哪个（口语）",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "どっちが好きですか。",
          "zh": "你喜欢哪个？"
        },
        {
          "ja": "駅はどっちですか。",
          "zh": "车站在哪边？"
        },
        {
          "ja": "どっちへ行きますか。",
          "zh": "去哪个方向？"
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
      "part_of_speech": "adverb/expression",
      "meaning_zh": "非常；很",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "今日はとても暑いです。",
          "zh": "今天非常热。"
        },
        {
          "ja": "この映画はとてもおもしろいです。",
          "zh": "这部电影非常有趣。"
        },
        {
          "ja": "先生はとても親切です。",
          "zh": "老师非常亲切。"
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
          "zh": "请问是哪位？"
        },
        {
          "ja": "どなたに会いますか。",
          "zh": "您要见哪位？"
        },
        {
          "ja": "あの方はどなたですか。",
          "zh": "那位是谁？"
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
          "zh": "朋友坐在旁边。"
        },
        {
          "ja": "銀行は郵便局の隣です。",
          "zh": "银行在邮局旁边。"
        },
        {
          "ja": "隣の部屋は静かです。",
          "zh": "隔壁房间很安静。"
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
      "part_of_speech": "pronoun/demonstrative",
      "meaning_zh": "哪个（连体词）",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "どの本を読みますか。",
          "zh": "你读哪本书？"
        },
        {
          "ja": "どの人が先生ですか。",
          "zh": "哪位是老师？"
        },
        {
          "ja": "どの店へ行きますか。",
          "zh": "去哪家店？"
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
      "kanji_readings": [
        {
          "form": "飛ぶ",
          "reading": "とぶ"
        }
      ],
      "examples": [
        {
          "ja": "鳥が空を飛んでいます。",
          "zh": "鸟在天空飞。"
        },
        {
          "ja": "飛行機が東京へ飛びます。",
          "zh": "飞机飞往东京。"
        },
        {
          "ja": "子供が高く飛びました。",
          "zh": "孩子跳得很高。"
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
      "meaning_zh": "停下；停止",
      "kanji_readings": [
        {
          "form": "止まる",
          "reading": "とまる"
        }
      ],
      "examples": [
        {
          "ja": "バスが駅で止まります。",
          "zh": "公交车在车站停。"
        },
        {
          "ja": "時計が止まりました。",
          "zh": "钟停了。"
        },
        {
          "ja": "赤信号で車が止まります。",
          "zh": "红灯时车停下。"
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
          "zh": "和朋友看电影。"
        },
        {
          "ja": "駅で友達に会いました。",
          "zh": "在车站见到了朋友。"
        },
        {
          "ja": "友達に電話します。",
          "zh": "给朋友打电话。"
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
          "zh": "星期六去学校。"
        },
        {
          "ja": "土曜日は休みです。",
          "zh": "星期六休息。"
        },
        {
          "ja": "次の土曜日に会いましょう。",
          "zh": "下个星期六见吧。"
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
          "ja": "鳥が空を飛んでいます。",
          "zh": "鸟在天上飞。"
        },
        {
          "ja": "朝、鳥が鳴きます。",
          "zh": "早上鸟叫。"
        },
        {
          "ja": "白い鳥を見ました。",
          "zh": "看到了白鸟。"
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
          "ja": "鶏肉を食べます。",
          "zh": "吃鸡肉。"
        },
        {
          "ja": "鶏肉が好きです。",
          "zh": "喜欢鸡肉。"
        },
        {
          "ja": "鶏肉をください。",
          "zh": "请给我鸡肉。"
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
      "kanji_readings": [
        {
          "form": "取る",
          "reading": "とる"
        }
      ],
      "examples": [
        {
          "ja": "机の上の本を取ります。",
          "zh": "拿桌子上的书。"
        },
        {
          "ja": "棚からかばんを取りました。",
          "zh": "从架子上拿了包。"
        },
        {
          "ja": "いい点を取りました。",
          "zh": "取得了好分数。"
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
          "zh": "拍照片。"
        },
        {
          "ja": "友達と写真を撮りました。",
          "zh": "和朋友拍了照片。"
        },
        {
          "ja": "ここで映画を撮っています。",
          "zh": "正在这里拍电影。"
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
      "meaning_zh": "哪个",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "どれがあなたの本ですか。",
          "zh": "哪本是你的书？"
        },
        {
          "ja": "どれを買いますか。",
          "zh": "你买哪个？"
        },
        {
          "ja": "どれが好きですか。",
          "zh": "你喜欢哪个？"
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
      "part_of_speech": "pronoun/demonstrative",
      "meaning_zh": "什么样的",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "どんな音楽が好きですか。",
          "zh": "你喜欢什么样的音乐？"
        },
        {
          "ja": "どんな人ですか。",
          "zh": "是什么样的人？"
        },
        {
          "ja": "どんな仕事ですか。",
          "zh": "是什么样的工作？"
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
          "zh": "没有钱。"
        },
        {
          "ja": "時間がありません。",
          "zh": "没有时间。"
        },
        {
          "ja": "ここには本がないです。",
          "zh": "这里没有书。"
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
          "ja": "ナイフを使います。",
          "zh": "使用刀。"
        },
        {
          "ja": "ナイフを買いました。",
          "zh": "买了刀。"
        },
        {
          "ja": "ナイフでりんごを切ります。",
          "zh": "用刀切苹果。"
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
      "kanji_readings": [
        {
          "form": "中",
          "reading": "なか"
        }
      ],
      "examples": [
        {
          "ja": "箱の中に本があります。",
          "zh": "盒子里面有书。"
        },
        {
          "ja": "部屋の中は暖かいです。",
          "zh": "房间里很暖和。"
        },
        {
          "ja": "かばんの中を見ます。",
          "zh": "看包里面。"
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
          "ja": "この道は長いです。",
          "zh": "这条路很长。"
        },
        {
          "ja": "とても長いですね。",
          "zh": "真长啊。"
        },
        {
          "ja": "長いものが好きです。",
          "zh": "喜欢长的东西。"
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
          "zh": "狗在大声叫。"
        },
        {
          "ja": "鳥が朝から鳴いています。",
          "zh": "鸟从早上就在叫。"
        },
        {
          "ja": "猫が夜に鳴きました。",
          "zh": "猫晚上叫了。"
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
          "zh": "把钱包弄丢了。"
        },
        {
          "ja": "鍵を無くさないでください。",
          "zh": "请不要弄丢钥匙。"
        },
        {
          "ja": "大切な手紙を無くしました。",
          "zh": "弄丢了重要的信。"
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
      "part_of_speech": "adverb/expression",
      "meaning_zh": "为什么",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "なぜ遅れましたか。",
          "zh": "为什么迟到了？"
        },
        {
          "ja": "なぜ分かりませんか。",
          "zh": "为什么不明白？"
        },
        {
          "ja": "なぜ日本語を勉強しますか。",
          "zh": "为什么学日语？"
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
          "zh": "夏天很热。"
        },
        {
          "ja": "夏に海へ行きます。",
          "zh": "夏天去海边。"
        },
        {
          "ja": "夏休みに旅行します。",
          "zh": "暑假去旅行。"
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
          "ja": "夏休み、学校へ行きます。",
          "zh": "暑假去学校。"
        },
        {
          "ja": "夏休みは忙しいです。",
          "zh": "暑假很忙。"
        },
        {
          "ja": "夏休み、友達に会います。",
          "zh": "暑假见朋友。"
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-486",
      "jlpt": "N5",
      "headword": "～など",
      "source_form": "～など",
      "variants": [
        "～など"
      ],
      "reading": "～など",
      "reading_variants": [
        "～など"
      ],
      "romaji": "~nado",
      "part_of_speech": "suffix/pattern",
      "meaning_zh": "……等等",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "机の上に本やノートなどがあります。",
          "zh": "桌上有书、笔记本等。"
        },
        {
          "ja": "野菜などを買いました。",
          "zh": "买了蔬菜等东西。"
        },
        {
          "ja": "日曜日は掃除などをします。",
          "zh": "星期天做打扫等事情。"
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
          "zh": "有七把椅子。"
        },
        {
          "ja": "七つください。",
          "zh": "请给我七个。"
        },
        {
          "ja": "七つの質問があります。",
          "zh": "有七个问题。"
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
      "part_of_speech": "pronoun/demonstrative",
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
          "zh": "这是什么？"
        },
        {
          "ja": "何を食べますか。",
          "zh": "你吃什么？"
        },
        {
          "ja": "何時に行きますか。",
          "zh": "几点去？"
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
      "kanji_readings": [
        {
          "form": "七日",
          "reading": "なのか"
        }
      ],
      "examples": [
        {
          "ja": "七日に会いましょう。",
          "zh": "七号见吧。"
        },
        {
          "ja": "七日は休みです。",
          "zh": "七号休息。"
        },
        {
          "ja": "七日に日本へ行きます。",
          "zh": "七号去日本。"
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
          "zh": "请写名字。"
        },
        {
          "ja": "あなたの名前は何ですか。",
          "zh": "你的名字是什么？"
        },
        {
          "ja": "友達の名前を覚えました。",
          "zh": "记住了朋友的名字。"
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
          "zh": "跟老师学日语。"
        },
        {
          "ja": "子供の時、ピアノを習いました。",
          "zh": "小时候学过钢琴。"
        },
        {
          "ja": "毎週、漢字を習います。",
          "zh": "每周学汉字。"
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
      "meaning_zh": "排队；排列",
      "kanji_readings": [
        {
          "form": "並ぶ",
          "reading": "ならぶ"
        }
      ],
      "examples": [
        {
          "ja": "店の前に人が並んでいます。",
          "zh": "店前有人在排队。"
        },
        {
          "ja": "バス停で列に並びます。",
          "zh": "在公交车站排队。"
        },
        {
          "ja": "ここに並んでください。",
          "zh": "请在这里排队。"
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
      "meaning_zh": "排列；摆放",
      "kanji_readings": [
        {
          "form": "並べる",
          "reading": "ならべる"
        }
      ],
      "examples": [
        {
          "ja": "机の上に本を並べます。",
          "zh": "把书摆在桌子上。"
        },
        {
          "ja": "椅子をきれいに並べました。",
          "zh": "把椅子摆整齐了。"
        },
        {
          "ja": "皿をテーブルに並べてください。",
          "zh": "请把盘子摆在桌上。"
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
          "zh": "想成为老师。"
        },
        {
          "ja": "春になりました。",
          "zh": "到了春天。"
        },
        {
          "ja": "部屋が明るくなりました。",
          "zh": "房间变亮了。"
        }
      ],
      "note_zh": ""
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
      "part_of_speech": "pronoun/demonstrative",
      "meaning_zh": "什么……；几……",
      "kanji_readings": [
        {
          "form": "何～",
          "reading": "なん～"
        }
      ],
      "examples": [
        {
          "ja": "何人来ますか。",
          "zh": "几个人来？"
        },
        {
          "ja": "何時ですか。",
          "zh": "几点？"
        },
        {
          "ja": "何曜日ですか。",
          "zh": "星期几？"
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
      "part_of_speech": "noun",
      "meaning_zh": "二",
      "kanji_readings": [
        {
          "form": "二",
          "reading": "に"
        }
      ],
      "examples": [
        {
          "ja": "一たす一は二です。",
          "zh": "一加一等于二。"
        },
        {
          "ja": "答えは二です。",
          "zh": "答案是二。"
        },
        {
          "ja": "二番の問題を見てください。",
          "zh": "请看第二题。"
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
          "zh": "车站前很热闹。"
        },
        {
          "ja": "にぎやかな町に住んでいます。",
          "zh": "住在热闹的城镇。"
        },
        {
          "ja": "祭りはとてもにぎやかです。",
          "zh": "节日活动很热闹。"
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
          "ja": "肉を食べます。",
          "zh": "吃肉。"
        },
        {
          "ja": "肉が好きです。",
          "zh": "喜欢肉。"
        },
        {
          "ja": "肉をください。",
          "zh": "请给我肉。"
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
          "zh": "大阪位于东京以西。"
        },
        {
          "ja": "西の空に日が沈みます。",
          "zh": "太阳从西边的天空落下。"
        },
        {
          "ja": "駅の西口で会いましょう。",
          "zh": "在车站西口见吧。"
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
      "kanji_readings": [
        {
          "form": "～日",
          "reading": "～にち"
        }
      ],
      "examples": [
        {
          "ja": "十日に会いましょう。",
          "zh": "十号见吧。"
        },
        {
          "ja": "三日休みます。",
          "zh": "休息三天。"
        },
        {
          "ja": "何日に行きますか。",
          "zh": "几号去？"
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
          "zh": "星期日去学校。"
        },
        {
          "ja": "日曜日は休みです。",
          "zh": "星期日休息。"
        },
        {
          "ja": "次の日曜日に会いましょう。",
          "zh": "下个星期日见吧。"
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
          "zh": "拿行李。"
        },
        {
          "ja": "荷物が重いです。",
          "zh": "行李很重。"
        },
        {
          "ja": "ここに荷物を置いてください。",
          "zh": "请把行李放在这里。"
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
          "zh": "读新闻。"
        },
        {
          "ja": "ニュースが好きです。",
          "zh": "喜欢新闻。"
        },
        {
          "ja": "朝、ニュースを読みました。",
          "zh": "早上读了新闻。"
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
          "ja": "庭に花を植えました。",
          "zh": "在院子里种了花。"
        },
        {
          "ja": "子供が庭で遊んでいます。",
          "zh": "孩子正在院子里玩。"
        },
        {
          "ja": "毎朝、庭を掃除します。",
          "zh": "每天早上打扫院子。"
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
          "zh": "三个人看电影。"
        },
        {
          "ja": "教室に二十人います。",
          "zh": "教室里有二十个人。"
        },
        {
          "ja": "何人来ますか。",
          "zh": "几个人来？"
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
          "zh": "请脱鞋。"
        },
        {
          "ja": "コートを脱ぎました。",
          "zh": "脱了外套。"
        },
        {
          "ja": "暑いので上着を脱ぎます。",
          "zh": "因为热，所以脱外套。"
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-507",
      "jlpt": "N5",
      "headword": "温い",
      "source_form": "温い",
      "variants": [
        "温い"
      ],
      "reading": "ぬるい",
      "reading_variants": [
        "ぬるい"
      ],
      "romaji": "nurui",
      "part_of_speech": "i-adjective",
      "meaning_zh": "温的；不够热的",
      "kanji_readings": [
        {
          "form": "温い",
          "reading": "ぬるい"
        }
      ],
      "examples": [
        {
          "ja": "このお茶は少し温いです。",
          "zh": "这杯茶有点凉了。"
        },
        {
          "ja": "お風呂のお湯が温いです。",
          "zh": "洗澡水不够热。"
        },
        {
          "ja": "スープが温くなりました。",
          "zh": "汤变温了。"
        }
      ],
      "note_zh": ""
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
          "zh": "父亲系着领带去公司。"
        },
        {
          "ja": "青いネクタイを買いました。",
          "zh": "买了一条蓝色领带。"
        },
        {
          "ja": "会社へ行く前にネクタイを締めます。",
          "zh": "去公司前系领带。"
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
          "zh": "猫在桌子下面。"
        },
        {
          "ja": "猫が好きです。",
          "zh": "喜欢猫。"
        },
        {
          "ja": "黒い猫を見ました。",
          "zh": "看到了黑猫。"
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
          "zh": "每晚十一点睡觉。"
        },
        {
          "ja": "昨日は早く寝ました。",
          "zh": "昨天睡得早。"
        },
        {
          "ja": "もう寝てもいいですか。",
          "zh": "可以睡了吗？"
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
          "zh": "学了一年日语。"
        },
        {
          "ja": "来年、日本へ行きます。",
          "zh": "明年去日本。"
        },
        {
          "ja": "三年かかります。",
          "zh": "需要三年。"
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
          "ja": "ノートを使います。",
          "zh": "使用笔记本。"
        },
        {
          "ja": "ノートを買いました。",
          "zh": "买了笔记本。"
        },
        {
          "ja": "ノートに大切なことを書きます。",
          "zh": "把重要的事情写在笔记本上。"
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
          "zh": "爬山。"
        },
        {
          "ja": "階段を登ってください。",
          "zh": "请上楼梯。"
        },
        {
          "ja": "友達と富士山に登りました。",
          "zh": "和朋友爬了富士山。"
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
          "zh": "买了冷饮。"
        },
        {
          "ja": "飲み物を冷蔵庫に入れます。",
          "zh": "把饮料放进冰箱。"
        },
        {
          "ja": "この店には温かい飲み物もあります。",
          "zh": "这家店也有热饮。"
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
          "zh": "喝水。"
        },
        {
          "ja": "お茶を飲みました。",
          "zh": "喝了茶。"
        },
        {
          "ja": "暑いので、水を飲みます。",
          "zh": "因为很热，所以喝水。"
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
          "zh": "在车站坐电车。"
        },
        {
          "ja": "バスに乗りました。",
          "zh": "坐了公交车。"
        },
        {
          "ja": "自転車に乗れます。",
          "zh": "会骑自行车。"
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
          "zh": "每天早上刷牙。"
        },
        {
          "ja": "歯が痛いです。",
          "zh": "牙疼。"
        },
        {
          "ja": "白い歯ですね。",
          "zh": "牙齿很白呢。"
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
          "zh": "星期六有派对。"
        },
        {
          "ja": "友達のパーティーへ行きます。",
          "zh": "去朋友的派对。"
        },
        {
          "ja": "パーティーは楽しかったです。",
          "zh": "派对很开心。"
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
      "part_of_speech": "adverb/expression",
      "meaning_zh": "是；好的",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "はい、そうです。",
          "zh": "是的，是那样。"
        },
        {
          "ja": "はい、分かりました。",
          "zh": "好的，我明白了。"
        },
        {
          "ja": "はい、お願いします。",
          "zh": "好的，麻烦了。"
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
          "zh": "请给我一杯水。"
        },
        {
          "ja": "コーヒーを二杯飲みました。",
          "zh": "喝了两杯咖啡。"
        },
        {
          "ja": "お茶を三杯入れます。",
          "zh": "泡三杯茶。"
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
          "ja": "灰皿を使います。",
          "zh": "使用烟灰缸。"
        },
        {
          "ja": "灰皿を買いました。",
          "zh": "买了烟灰缸。"
        },
        {
          "ja": "灰皿にたばこの灰を落とします。",
          "zh": "把烟灰弹进烟灰缸。"
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
      "kanji_readings": [
        {
          "form": "入る",
          "reading": "はいる"
        }
      ],
      "examples": [
        {
          "ja": "教室に入ります。",
          "zh": "进入教室。"
        },
        {
          "ja": "お風呂に入りました。",
          "zh": "洗了澡。"
        },
        {
          "ja": "箱の中に本が入っています。",
          "zh": "盒子里放着书。"
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
          "zh": "在旅行地买了明信片。"
        },
        {
          "ja": "葉書に住所を書きます。",
          "zh": "在明信片上写地址。"
        },
        {
          "ja": "友達に葉書を送りました。",
          "zh": "给朋友寄了明信片。"
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
          "zh": "穿鞋。"
        },
        {
          "ja": "黒いズボンをはいています。",
          "zh": "穿着黑裤子。"
        },
        {
          "ja": "朝、靴下をはきました。",
          "zh": "早上穿了袜子。"
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
          "ja": "箱を使います。",
          "zh": "使用盒子。"
        },
        {
          "ja": "箱を買いました。",
          "zh": "买了盒子。"
        },
        {
          "ja": "箱に本を入れました。",
          "zh": "把书放进了箱子。"
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
          "ja": "橋を渡ります。",
          "zh": "过桥。"
        },
        {
          "ja": "川に橋があります。",
          "zh": "河上有桥。"
        },
        {
          "ja": "古い橋を見ました。",
          "zh": "看到了旧桥。"
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
          "zh": "用筷子吃饭。"
        },
        {
          "ja": "箸を二本ください。",
          "zh": "请给我两根筷子。"
        },
        {
          "ja": "箸を使えますか。",
          "zh": "会用筷子吗？"
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
          "zh": "课九点开始。"
        },
        {
          "ja": "映画が始まりました。",
          "zh": "电影开始了。"
        },
        {
          "ja": "新しい生活が始まります。",
          "zh": "新的生活开始了。"
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
          "zh": "请先写名字。"
        },
        {
          "ja": "初めは難しかったです。",
          "zh": "一开始很难。"
        },
        {
          "ja": "授業の初めに歌います。",
          "zh": "课开始时唱歌。"
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
      "part_of_speech": "adverb/expression",
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
          "zh": "第一次去日本。"
        },
        {
          "ja": "初めて寿司を食べました。",
          "zh": "第一次吃了寿司。"
        },
        {
          "ja": "日本語は初めてです。",
          "zh": "我是第一次学日语。"
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
          "zh": "在公园跑步。"
        },
        {
          "ja": "駅まで走りました。",
          "zh": "跑到了车站。"
        },
        {
          "ja": "朝、三十分走ります。",
          "zh": "早上跑三十分钟。"
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
          "zh": "坐公交车。"
        },
        {
          "ja": "バスで駅へ行きます。",
          "zh": "坐公交车去车站。"
        },
        {
          "ja": "次のバスを待ちます。",
          "zh": "等下一班公交车。"
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
          "zh": "在面包上涂黄油。"
        },
        {
          "ja": "冷蔵庫からバターを出します。",
          "zh": "从冰箱里拿出黄油。"
        },
        {
          "ja": "このケーキにはバターが入っています。",
          "zh": "这个蛋糕里含有黄油。"
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
          "zh": "我二十岁。"
        },
        {
          "ja": "兄は今年二十歳になります。",
          "zh": "哥哥今年二十岁。"
        },
        {
          "ja": "二十歳の誕生日です。",
          "zh": "是二十岁的生日。"
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
      "meaning_zh": "工作；劳动",
      "kanji_readings": [
        {
          "form": "働く",
          "reading": "はたらく"
        }
      ],
      "examples": [
        {
          "ja": "父は会社で働いています。",
          "zh": "父亲在公司工作。"
        },
        {
          "ja": "毎日八時間働きます。",
          "zh": "每天工作八小时。"
        },
        {
          "ja": "日本で働きたいです。",
          "zh": "想在日本工作。"
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
      "part_of_speech": "noun",
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
          "zh": "八月学校放假。"
        },
        {
          "ja": "毎朝八時に家を出ます。",
          "zh": "每天早上八点出门。"
        },
        {
          "ja": "答えは八です。",
          "zh": "答案是八。"
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
      "kanji_readings": [
        {
          "form": "二十日",
          "reading": "はつか"
        }
      ],
      "examples": [
        {
          "ja": "二十日に会いましょう。",
          "zh": "二十号见吧。"
        },
        {
          "ja": "二十日は休みです。",
          "zh": "二十号休息。"
        },
        {
          "ja": "二十日に日本へ行きます。",
          "zh": "二十号去日本。"
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
          "ja": "花を見ます。",
          "zh": "看花。"
        },
        {
          "ja": "花がきれいです。",
          "zh": "花很美。"
        },
        {
          "ja": "花があります。",
          "zh": "有花。"
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
          "zh": "鼻子疼。"
        },
        {
          "ja": "鼻をかみます。",
          "zh": "擤鼻子。"
        },
        {
          "ja": "鼻に水が入りました。",
          "zh": "鼻子里进水了。"
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
      "kanji_readings": [
        {
          "form": "話",
          "reading": "はなし"
        }
      ],
      "examples": [
        {
          "ja": "先生の話を聞きます。",
          "zh": "听老师讲话。"
        },
        {
          "ja": "面白い話をしました。",
          "zh": "讲了有趣的事。"
        },
        {
          "ja": "これは昔の話です。",
          "zh": "这是以前的故事。"
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
      "meaning_zh": "说；说话",
      "kanji_readings": [
        {
          "form": "話す",
          "reading": "はなす"
        }
      ],
      "examples": [
        {
          "ja": "日本語を話します。",
          "zh": "说日语。"
        },
        {
          "ja": "友達と話しました。",
          "zh": "和朋友说了话。"
        },
        {
          "ja": "ゆっくり話してください。",
          "zh": "请慢慢说。"
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
          "zh": "我母亲很会做饭。"
        },
        {
          "ja": "母と買い物に行きます。",
          "zh": "和母亲去买东西。"
        },
        {
          "ja": "母に手紙を書きました。",
          "zh": "给母亲写了信。"
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
          "zh": "今天早上起得很早。"
        },
        {
          "ja": "まだ寝るには早いです。",
          "zh": "现在睡觉还太早。"
        },
        {
          "ja": "学校に着くのが早いですね。",
          "zh": "你到学校到得真早。"
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
          "zh": "这辆车很快。"
        },
        {
          "ja": "電車はバスより速いです。",
          "zh": "电车比公交车快。"
        },
        {
          "ja": "走るのが速いですね。",
          "zh": "你跑得很快呢。"
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
          "zh": "春天很暖和。"
        },
        {
          "ja": "春に花が咲きます。",
          "zh": "春天花开。"
        },
        {
          "ja": "春休みに旅行します。",
          "zh": "春假去旅行。"
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
          "zh": "把照片贴在墙上。"
        },
        {
          "ja": "封筒に切手を貼りました。",
          "zh": "在信封上贴了邮票。"
        },
        {
          "ja": "ここに紙を貼ってください。",
          "zh": "请把纸贴在这里。"
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
          "zh": "今天一整天都是晴天。"
        },
        {
          "ja": "明日も晴れです。",
          "zh": "明天也是晴天。"
        },
        {
          "ja": "晴れの日に洗濯します。",
          "zh": "晴天时洗衣服。"
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
          "zh": "明天会放晴。"
        },
        {
          "ja": "午後から空が晴れました。",
          "zh": "下午开始天放晴了。"
        },
        {
          "ja": "晴れた日に散歩します。",
          "zh": "晴天散步。"
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
          "zh": "现在两点半。"
        },
        {
          "ja": "パンを半分食べました。",
          "zh": "吃了一半面包。"
        },
        {
          "ja": "一時間半かかります。",
          "zh": "需要一个半小时。"
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
      "meaning_zh": "晚上",
      "kanji_readings": [
        {
          "form": "晩",
          "reading": "ばん"
        }
      ],
      "examples": [
        {
          "ja": "晩は家族と一緒に食事します。",
          "zh": "晚上和家人一起吃饭。"
        },
        {
          "ja": "晩になると涼しくなります。",
          "zh": "到了晚上会变凉快。"
        },
        {
          "ja": "明日の晩、電話します。",
          "zh": "明天晚上打电话。"
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
          "zh": "我是第三个。"
        },
        {
          "ja": "二番の窓口へ行きます。",
          "zh": "去二号窗口。"
        },
        {
          "ja": "次は五番の人です。",
          "zh": "下一位是五号的人。"
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
          "ja": "パンを食べます。",
          "zh": "吃面包。"
        },
        {
          "ja": "パンが好きです。",
          "zh": "喜欢面包。"
        },
        {
          "ja": "パンをください。",
          "zh": "请给我面包。"
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
          "ja": "ハンカチを使います。",
          "zh": "使用手帕。"
        },
        {
          "ja": "ハンカチを買いました。",
          "zh": "买了手帕。"
        },
        {
          "ja": "ハンカチで手を拭きます。",
          "zh": "用手帕擦手。"
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
          "zh": "请告诉我电话号码。"
        },
        {
          "ja": "番号を書きます。",
          "zh": "写号码。"
        },
        {
          "ja": "この番号は何ですか。",
          "zh": "这个号码是什么？"
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
          "zh": "和家人一起吃晚饭。"
        },
        {
          "ja": "今日の晩ご飯はカレーです。",
          "zh": "今天的晚饭是咖喱。"
        },
        {
          "ja": "晩ご飯の後で宿題をします。",
          "zh": "晚饭后做作业。"
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
          "zh": "吃了一半面包。"
        },
        {
          "ja": "水をコップの半分まで入れてください。",
          "zh": "请把水倒到杯子的一半。"
        },
        {
          "ja": "宿題は半分終わりました。",
          "zh": "作业完成了一半。"
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
          "zh": "日本位于亚洲东部。"
        },
        {
          "ja": "東から日が昇ります。",
          "zh": "太阳从东方升起。"
        },
        {
          "ja": "駅の東口から出ます。",
          "zh": "从车站东口出去。"
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
          "zh": "有两只猫。"
        },
        {
          "ja": "犬を一匹飼っています。",
          "zh": "养了一只狗。"
        },
        {
          "ja": "魚が三匹泳いでいます。",
          "zh": "三条鱼在游。"
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
      "kanji_readings": [
        {
          "form": "引く",
          "reading": "ひく"
        }
      ],
      "examples": [
        {
          "ja": "ドアを引いてください。",
          "zh": "请拉门。"
        },
        {
          "ja": "辞書で言葉を引きます。",
          "zh": "用词典查词。"
        },
        {
          "ja": "十から三を引きます。",
          "zh": "十减三。"
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
          "zh": "弹钢琴。"
        },
        {
          "ja": "姉はギターを弾けます。",
          "zh": "姐姐会弹吉他。"
        },
        {
          "ja": "毎日少しピアノを弾きます。",
          "zh": "每天弹一点钢琴。"
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
          "zh": "这张桌子很低。"
        },
        {
          "ja": "父は声が低いです。",
          "zh": "父亲声音低。"
        },
        {
          "ja": "低い山に登ります。",
          "zh": "爬一座低山。"
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
          "zh": "坐飞机去日本。"
        },
        {
          "ja": "飛行機に乗ります。",
          "zh": "坐飞机。"
        },
        {
          "ja": "飛行機は速いです。",
          "zh": "飞机很快。"
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
          "zh": "请向左转。"
        },
        {
          "ja": "左に郵便局があります。",
          "zh": "左边有邮局。"
        },
        {
          "ja": "左手を上げてください。",
          "zh": "请举左手。"
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
          "zh": "车站里有很多人。"
        },
        {
          "ja": "あの人は先生です。",
          "zh": "那个人是老师。"
        },
        {
          "ja": "親切な人に会いました。",
          "zh": "遇到了一位亲切的人。"
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
          "zh": "有一个苹果。"
        },
        {
          "ja": "一つください。",
          "zh": "请给我一个。"
        },
        {
          "ja": "一つずつ取ってください。",
          "zh": "请一个一个拿。"
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-566",
      "jlpt": "N5",
      "headword": "一月",
      "source_form": "一月",
      "variants": [
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
          "form": "一月",
          "reading": "ひとつき"
        }
      ],
      "examples": [
        {
          "ja": "一月ぐらい休みます。",
          "zh": "休息大约一个月。"
        },
        {
          "ja": "一月で読みました。",
          "zh": "用了一个月读完。"
        },
        {
          "ja": "日本に一月いました。",
          "zh": "在日本待了一个月。"
        }
      ],
      "note_zh": ""
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
          "zh": "一个人看电影。"
        },
        {
          "ja": "部屋に一人います。",
          "zh": "房间里有一个人。"
        },
        {
          "ja": "一人の時間が好きです。",
          "zh": "喜欢一个人的时间。"
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
      "part_of_speech": "noun",
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
          "zh": "今天有空。"
        },
        {
          "ja": "暇な時、本を読みます。",
          "zh": "有空的时候读书。"
        },
        {
          "ja": "明日は暇ではありません。",
          "zh": "明天没空。"
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
      "part_of_speech": "noun",
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
          "zh": "这本笔记本一百日元。"
        },
        {
          "ja": "学校に学生が百人います。",
          "zh": "学校里有一百名学生。"
        },
        {
          "ja": "百を数字で書いてください。",
          "zh": "请用数字写出一百。"
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
          "zh": "去医院。"
        },
        {
          "ja": "病院は駅の近くです。",
          "zh": "医院在车站附近。"
        },
        {
          "ja": "病院で友達に会います。",
          "zh": "在医院见朋友。"
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
          "zh": "因为生病不去学校。"
        },
        {
          "ja": "病気になりました。",
          "zh": "生病了。"
        },
        {
          "ja": "病気はもうよくなりました。",
          "zh": "病已经好些了。"
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
          "zh": "写平假名。"
        },
        {
          "ja": "ひらがなを覚えます。",
          "zh": "记平假名。"
        },
        {
          "ja": "これはひらがなです。",
          "zh": "这是平假名。"
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
      "kanji_readings": [
        {
          "form": "昼",
          "reading": "ひる"
        }
      ],
      "examples": [
        {
          "ja": "昼、学校へ行きます。",
          "zh": "中午去学校。"
        },
        {
          "ja": "昼は忙しいです。",
          "zh": "中午很忙。"
        },
        {
          "ja": "昼、友達に会います。",
          "zh": "中午见朋友。"
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
          "ja": "昼ご飯を食べます。",
          "zh": "吃午饭。"
        },
        {
          "ja": "昼ご飯が好きです。",
          "zh": "喜欢午饭。"
        },
        {
          "ja": "昼ご飯をください。",
          "zh": "请给我午饭。"
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
          "zh": "这个房间很宽敞。"
        },
        {
          "ja": "とても広いですね。",
          "zh": "真宽敞啊。"
        },
        {
          "ja": "広いものが好きです。",
          "zh": "喜欢宽敞的东西。"
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
          "ja": "フィルムを使います。",
          "zh": "使用胶卷。"
        },
        {
          "ja": "フィルムを買いました。",
          "zh": "买了胶卷。"
        },
        {
          "ja": "カメラにフィルムを入れます。",
          "zh": "把胶卷装进相机。"
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
          "zh": "把信放进了信封。"
        },
        {
          "ja": "封筒に住所を書きます。",
          "zh": "在信封上写地址。"
        },
        {
          "ja": "封筒に切手を貼ります。",
          "zh": "把邮票贴在信封上。"
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
          "zh": "去游泳池。"
        },
        {
          "ja": "プールは駅の近くです。",
          "zh": "游泳池在车站附近。"
        },
        {
          "ja": "プールで友達に会います。",
          "zh": "在游泳池见朋友。"
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
          "ja": "フォークを使います。",
          "zh": "使用叉子。"
        },
        {
          "ja": "フォークを買いました。",
          "zh": "买了叉子。"
        },
        {
          "ja": "フォークでケーキを食べます。",
          "zh": "用叉子吃蛋糕。"
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
      "kanji_readings": [
        {
          "form": "吹く",
          "reading": "ふく"
        }
      ],
      "examples": [
        {
          "ja": "風が強く吹いています。",
          "zh": "风吹得很大。"
        },
        {
          "ja": "口でふうっと吹きます。",
          "zh": "用嘴呼地吹。"
        },
        {
          "ja": "春に暖かい風が吹きます。",
          "zh": "春天吹来温暖的风。"
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
          "zh": "买了新衣服。"
        },
        {
          "ja": "毎朝、服を選びます。",
          "zh": "每天早上挑选衣服。"
        },
        {
          "ja": "服をたんすにしまいます。",
          "zh": "把衣服收进衣柜。"
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
          "zh": "有两个苹果。"
        },
        {
          "ja": "二つください。",
          "zh": "请给我两个。"
        },
        {
          "ja": "二つの道があります。",
          "zh": "有两条路。"
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
          "ja": "豚肉を食べます。",
          "zh": "吃猪肉。"
        },
        {
          "ja": "豚肉が好きです。",
          "zh": "喜欢猪肉。"
        },
        {
          "ja": "豚肉をください。",
          "zh": "请给我猪肉。"
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
          "zh": "两个人去。"
        },
        {
          "ja": "部屋に二人います。",
          "zh": "房间里有两个人。"
        },
        {
          "ja": "二人の学生が来ました。",
          "zh": "来了两名学生。"
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
      "kanji_readings": [
        {
          "form": "二日",
          "reading": "ふつか"
        }
      ],
      "examples": [
        {
          "ja": "二日に会いましょう。",
          "zh": "二号见吧。"
        },
        {
          "ja": "二日は休みです。",
          "zh": "二号休息。"
        },
        {
          "ja": "二日に日本へ行きます。",
          "zh": "二号去日本。"
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
      "kanji_readings": [
        {
          "form": "太い",
          "reading": "ふとい"
        }
      ],
      "examples": [
        {
          "ja": "この木は太いです。",
          "zh": "这棵树很粗。"
        },
        {
          "ja": "太いペンで書きます。",
          "zh": "用粗笔写。"
        },
        {
          "ja": "このロープはあまり太くありません。",
          "zh": "这根绳子不太粗。"
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
          "zh": "冬天很冷。"
        },
        {
          "ja": "冬に雪が降ります。",
          "zh": "冬天下雪。"
        },
        {
          "ja": "冬休みに家へ帰ります。",
          "zh": "寒假回家。"
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
          "ja": "雨が降っています。",
          "zh": "正在下雨。"
        },
        {
          "ja": "明日は雪が降ります。",
          "zh": "明天会下雪。"
        },
        {
          "ja": "昨日、たくさん雨が降りました。",
          "zh": "昨天下了很多雨。"
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
          "zh": "这个书很旧。"
        },
        {
          "ja": "とても古いですね。",
          "zh": "真旧啊。"
        },
        {
          "ja": "古いものが好きです。",
          "zh": "喜欢旧的东西。"
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
          "zh": "等十分钟。"
        },
        {
          "ja": "駅まで五分かかります。",
          "zh": "到车站需要五分钟。"
        },
        {
          "ja": "三十分勉強します。",
          "zh": "学习三十分钟。"
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
      "meaning_zh": "文章；句子",
      "kanji_readings": [
        {
          "form": "文章",
          "reading": "ぶんしょう"
        }
      ],
      "examples": [
        {
          "ja": "文章を読みます。",
          "zh": "读文章。"
        },
        {
          "ja": "文章が好きです。",
          "zh": "喜欢文章。"
        },
        {
          "ja": "朝、文章を読みました。",
          "zh": "早上读了文章。"
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
          "zh": "课本一页一页地读。"
        },
        {
          "ja": "教科書の三十ページを開いてください。",
          "zh": "请打开课本第三十页。"
        },
        {
          "ja": "この本は百ページあります。",
          "zh": "这本书有一百页。"
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
          "zh": "我不擅长唱歌。"
        },
        {
          "ja": "字を書くのが下手です。",
          "zh": "不擅长写字。"
        },
        {
          "ja": "下手でも練習します。",
          "zh": "即使不擅长也练习。"
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
          "ja": "ベッドを使います。",
          "zh": "使用床。"
        },
        {
          "ja": "ベッドを買いました。",
          "zh": "买了床。"
        },
        {
          "ja": "毎晩十一時にベッドで寝ます。",
          "zh": "每天晚上十一点上床睡觉。"
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
          "zh": "养着宠物。"
        },
        {
          "ja": "私のペットは猫です。",
          "zh": "我的宠物是猫。"
        },
        {
          "ja": "ペットと遊びます。",
          "zh": "和宠物玩。"
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
          "zh": "请进房间。"
        },
        {
          "ja": "私の部屋は二階にあります。",
          "zh": "我的房间在二楼。"
        },
        {
          "ja": "毎週、部屋を掃除します。",
          "zh": "每周打扫房间。"
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
          "zh": "这附近有银行。"
        },
        {
          "ja": "この辺を少し散歩しました。",
          "zh": "在这附近散了一会儿步。"
        },
        {
          "ja": "この辺は夜になると静かです。",
          "zh": "这附近到了晚上很安静。"
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
          "ja": "ペンを使います。",
          "zh": "使用笔。"
        },
        {
          "ja": "ペンを買いました。",
          "zh": "买了笔。"
        },
        {
          "ja": "ペンで住所を書きます。",
          "zh": "用笔写地址。"
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
          "zh": "在图书馆学习。"
        },
        {
          "ja": "毎日、日本語を勉強します。",
          "zh": "每天学习日语。"
        },
        {
          "ja": "一時間ぐらい勉強しました。",
          "zh": "学习了大约一个小时。"
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
          "zh": "这家店很方便。"
        },
        {
          "ja": "便利なアプリを使います。",
          "zh": "使用方便的应用。"
        },
        {
          "ja": "駅が近くて便利です。",
          "zh": "车站近，很方便。"
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
          "ja": "帽子をかぶります。",
          "zh": "戴帽子。"
        },
        {
          "ja": "赤い帽子を買いました。",
          "zh": "买了红帽子。"
        },
        {
          "ja": "部屋では帽子を脱いでください。",
          "zh": "在房间里请摘下帽子。"
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
          "ja": "ボールペンを使います。",
          "zh": "使用圆珠笔。"
        },
        {
          "ja": "ボールペンを買いました。",
          "zh": "买了圆珠笔。"
        },
        {
          "ja": "ボールペンで名前を書きました。",
          "zh": "用圆珠笔写了名字。"
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
          "zh": "另外还有什么吗？"
        },
        {
          "ja": "ほかの店へ行きます。",
          "zh": "去别的店。"
        },
        {
          "ja": "これのほかに本も買いました。",
          "zh": "除此之外还买了书。"
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
          "zh": "把钥匙放进口袋。"
        },
        {
          "ja": "この服には大きなポケットがあります。",
          "zh": "这件衣服有一个大口袋。"
        },
        {
          "ja": "ポケットから財布を出しました。",
          "zh": "从口袋里拿出了钱包。"
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
          "zh": "想要新书。"
        },
        {
          "ja": "水が欲しいです。",
          "zh": "想要水。"
        },
        {
          "ja": "今は何も欲しくありません。",
          "zh": "现在什么都不想要。"
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
          "zh": "把信放进邮筒。"
        },
        {
          "ja": "駅の前にポストがあります。",
          "zh": "车站前有邮筒。"
        },
        {
          "ja": "ポストはどこですか。",
          "zh": "邮筒在哪里？"
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
          "ja": "このペンは細いです。",
          "zh": "这个笔很细。"
        },
        {
          "ja": "とても細いですね。",
          "zh": "真细啊。"
        },
        {
          "ja": "細いものが好きです。",
          "zh": "喜欢细的东西。"
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
      "kanji_readings": [],
      "examples": [
        {
          "ja": "このボタンを押してください。",
          "zh": "请按这个按钮。"
        },
        {
          "ja": "シャツのボタンが取れました。",
          "zh": "衬衫的纽扣掉了。"
        },
        {
          "ja": "シャツのボタンを留めます。",
          "zh": "扣上衬衫的纽扣。"
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
          "zh": "去酒店。"
        },
        {
          "ja": "ホテルは駅の近くです。",
          "zh": "酒店在车站附近。"
        },
        {
          "ja": "ホテルで友達に会います。",
          "zh": "在酒店见朋友。"
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
          "ja": "本を読みます。",
          "zh": "读书。"
        },
        {
          "ja": "本が好きです。",
          "zh": "喜欢书。"
        },
        {
          "ja": "朝、本を読みました。",
          "zh": "早上读了书。"
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
          "zh": "有三支笔。"
        },
        {
          "ja": "水を一本買いました。",
          "zh": "买了一瓶水。"
        },
        {
          "ja": "映画を二本見ました。",
          "zh": "看了两部电影。"
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
          "ja": "本棚を使います。",
          "zh": "使用书架。"
        },
        {
          "ja": "本棚を買いました。",
          "zh": "买了书架。"
        },
        {
          "ja": "本棚に本を並べます。",
          "zh": "把书排列在书架上。"
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
          "zh": "是真的吗？"
        },
        {
          "ja": "本当にありがとうございます。",
          "zh": "真的非常感谢。"
        },
        {
          "ja": "これは本当の話です。",
          "zh": "这是真事。"
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
          "zh": "请给我三张纸。"
        },
        {
          "ja": "切手を二枚買いました。",
          "zh": "买了两张邮票。"
        },
        {
          "ja": "シャツを一枚着ます。",
          "zh": "穿一件衬衫。"
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
          "zh": "每天早上去学校。"
        },
        {
          "ja": "毎朝は忙しいです。",
          "zh": "每天早上很忙。"
        },
        {
          "ja": "毎朝、友達に会います。",
          "zh": "每天早上见朋友。"
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
      "reading": "まいげつ",
      "reading_variants": [
        "まいげつ",
        "まいつき"
      ],
      "romaji": "maigetsu",
      "part_of_speech": "noun",
      "meaning_zh": "每个月",
      "kanji_readings": [
        {
          "form": "毎月",
          "reading": "まいげつ"
        }
      ],
      "examples": [
        {
          "ja": "毎月、学校へ行きます。",
          "zh": "每个月去学校。"
        },
        {
          "ja": "毎月は忙しいです。",
          "zh": "每个月很忙。"
        },
        {
          "ja": "毎月、友達に会います。",
          "zh": "每个月见朋友。"
        }
      ],
      "note_zh": ""
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
          "ja": "毎週、学校へ行きます。",
          "zh": "每周去学校。"
        },
        {
          "ja": "毎週は忙しいです。",
          "zh": "每周很忙。"
        },
        {
          "ja": "毎週、友達に会います。",
          "zh": "每周见朋友。"
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
          "zh": "每天去学校。"
        },
        {
          "ja": "毎日は忙しいです。",
          "zh": "每天很忙。"
        },
        {
          "ja": "毎日、友達に会います。",
          "zh": "每天见朋友。"
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
          "ja": "毎年、学校へ行きます。",
          "zh": "每年去学校。"
        },
        {
          "ja": "毎年は忙しいです。",
          "zh": "每年很忙。"
        },
        {
          "ja": "毎年、友達に会います。",
          "zh": "每年见朋友。"
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
          "ja": "毎晩、学校へ行きます。",
          "zh": "每天晚上去学校。"
        },
        {
          "ja": "毎晩は忙しいです。",
          "zh": "每天晚上很忙。"
        },
        {
          "ja": "毎晩、友達に会います。",
          "zh": "每天晚上见朋友。"
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
      "kanji_readings": [
        {
          "form": "前",
          "reading": "まえ"
        }
      ],
      "examples": [
        {
          "ja": "駅の前で待ちます。",
          "zh": "在车站前等。"
        },
        {
          "ja": "学校の前に店があります。",
          "zh": "学校前面有商店。"
        },
        {
          "ja": "寝る前に歯を磨きます。",
          "zh": "睡前刷牙。"
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
      "kanji_readings": [
        {
          "form": "～前",
          "reading": "～まえ"
        }
      ],
      "examples": [
        {
          "ja": "三年前に日本へ行きました。",
          "zh": "三年前去了日本。"
        },
        {
          "ja": "駅の前で待ちます。",
          "zh": "在车站前等。"
        },
        {
          "ja": "寝る前に歯を磨きます。",
          "zh": "睡前刷牙。"
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
      "kanji_readings": [
        {
          "form": "曲がる",
          "reading": "まがる"
        }
      ],
      "examples": [
        {
          "ja": "次の角を右に曲がります。",
          "zh": "在下一个路口右转。"
        },
        {
          "ja": "駅の前で左に曲がってください。",
          "zh": "请在车站前左转。"
        },
        {
          "ja": "道が少し曲がっています。",
          "zh": "路有点弯。"
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
      "kanji_readings": [],
      "examples": [
        {
          "ja": "この料理はまずいです。",
          "zh": "这道菜不好吃。"
        },
        {
          "ja": "まずいコーヒーを飲みました。",
          "zh": "喝了不好喝的咖啡。"
        },
        {
          "ja": "それはまずいですね。",
          "zh": "那可不妙。"
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
      "part_of_speech": "adverb/expression",
      "meaning_zh": "又；再；还",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "また明日会いましょう。",
          "zh": "明天再见吧。"
        },
        {
          "ja": "また日本へ行きたいです。",
          "zh": "还想再去日本。"
        },
        {
          "ja": "また電話します。",
          "zh": "我会再打电话。"
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
      "part_of_speech": "adverb/expression",
      "meaning_zh": "还；尚未",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "まだ時間があります。",
          "zh": "还有时间。"
        },
        {
          "ja": "宿題はまだ終わっていません。",
          "zh": "作业还没做完。"
        },
        {
          "ja": "まだ帰りません。",
          "zh": "还不回去。"
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
      "kanji_readings": [
        {
          "form": "町",
          "reading": "まち"
        }
      ],
      "examples": [
        {
          "ja": "町へ行きます。",
          "zh": "去城镇。"
        },
        {
          "ja": "町は駅の近くです。",
          "zh": "城镇在车站附近。"
        },
        {
          "ja": "町で友達に会います。",
          "zh": "在城镇见朋友。"
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
          "zh": "在车站等朋友。"
        },
        {
          "ja": "少し待ってください。",
          "zh": "请等一下。"
        },
        {
          "ja": "バスを十分待ちました。",
          "zh": "等了十分钟公交车。"
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
      "part_of_speech": "adverb/expression",
      "meaning_zh": "笔直；一直",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "この道をまっすぐ行ってください。",
          "zh": "请沿这条路直走。"
        },
        {
          "ja": "駅までまっすぐ歩きます。",
          "zh": "一直走到车站。"
        },
        {
          "ja": "線をまっすぐ書きます。",
          "zh": "把线画直。"
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
      "romaji": "macchi",
      "part_of_speech": "noun",
      "meaning_zh": "火柴",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "マッチで火をつけます。",
          "zh": "用火柴点火。"
        },
        {
          "ja": "マッチを使わないでください。",
          "zh": "请不要用火柴。"
        },
        {
          "ja": "古いマッチがあります。",
          "zh": "有旧火柴。"
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
          "zh": "因为热，所以打开窗户。"
        },
        {
          "ja": "出かける前に窓を閉めます。",
          "zh": "出门前关窗。"
        },
        {
          "ja": "窓から外を見ます。",
          "zh": "从窗户向外看。"
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
          "zh": "这个桌子很圆。"
        },
        {
          "ja": "とても丸いですね。",
          "zh": "真圆啊。"
        },
        {
          "ja": "丸いものが好きです。",
          "zh": "喜欢圆的东西。"
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
      "part_of_speech": "noun",
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
          "zh": "这块表一万日元。"
        },
        {
          "ja": "この町には一万人住んでいます。",
          "zh": "这座城镇住着一万人。"
        },
        {
          "ja": "一万は千の十倍です。",
          "zh": "一万是一千的十倍。"
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
          "ja": "万年筆を使います。",
          "zh": "使用钢笔。"
        },
        {
          "ja": "万年筆を買いました。",
          "zh": "买了钢笔。"
        },
        {
          "ja": "万年筆で手紙を書きます。",
          "zh": "用钢笔写信。"
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
          "zh": "早上刷牙。"
        },
        {
          "ja": "靴をきれいに磨きました。",
          "zh": "把鞋擦干净了。"
        },
        {
          "ja": "寝る前に歯を磨いてください。",
          "zh": "睡前请刷牙。"
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
          "zh": "请向右转。"
        },
        {
          "ja": "右に銀行があります。",
          "zh": "右边有银行。"
        },
        {
          "ja": "右手を上げてください。",
          "zh": "请举右手。"
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
          "ja": "この道は短いです。",
          "zh": "这条路很短。"
        },
        {
          "ja": "とても短いですね。",
          "zh": "真短啊。"
        },
        {
          "ja": "短いものが好きです。",
          "zh": "喜欢短的东西。"
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
          "ja": "水を飲みます。",
          "zh": "喝水。"
        },
        {
          "ja": "水が好きです。",
          "zh": "喜欢水。"
        },
        {
          "ja": "水をください。",
          "zh": "请给我水。"
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
          "zh": "去商店。"
        },
        {
          "ja": "店は駅の近くです。",
          "zh": "商店在车站附近。"
        },
        {
          "ja": "店で友達に会います。",
          "zh": "在商店见朋友。"
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
          "zh": "请给我看照片。"
        },
        {
          "ja": "先生に宿題を見せます。",
          "zh": "给老师看作业。"
        },
        {
          "ja": "新しい服を友達に見せました。",
          "zh": "给朋友看了新衣服。"
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
      "kanji_readings": [
        {
          "form": "道",
          "reading": "みち"
        }
      ],
      "examples": [
        {
          "ja": "この道をまっすぐ行ってください。",
          "zh": "请沿这条路直走。"
        },
        {
          "ja": "道が分かりません。",
          "zh": "不认识路。"
        },
        {
          "ja": "駅までの道を教えてください。",
          "zh": "请告诉我去车站的路。"
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
      "kanji_readings": [
        {
          "form": "三日",
          "reading": "みっか"
        }
      ],
      "examples": [
        {
          "ja": "三日に会いましょう。",
          "zh": "三号见吧。"
        },
        {
          "ja": "三日は休みです。",
          "zh": "三号休息。"
        },
        {
          "ja": "三日に日本へ行きます。",
          "zh": "三号去日本。"
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
          "zh": "有三个盒子。"
        },
        {
          "ja": "三つください。",
          "zh": "请给我三个。"
        },
        {
          "ja": "三つの言葉を覚えます。",
          "zh": "记三个词。"
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
          "zh": "绿色的树很多。"
        },
        {
          "ja": "緑が好きです。",
          "zh": "我喜欢绿色。"
        },
        {
          "ja": "この町は緑が多いです。",
          "zh": "这个城镇绿意很多。"
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
          "zh": "大家早上好。"
        },
        {
          "ja": "皆さんは学生ですか。",
          "zh": "大家是学生吗？"
        },
        {
          "ja": "皆さん、聞いてください。",
          "zh": "各位，请听。"
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
          "zh": "冲绳位于日本南部。"
        },
        {
          "ja": "南の空は明るいです。",
          "zh": "南边的天空很明亮。"
        },
        {
          "ja": "駅の南口で友達を待ちます。",
          "zh": "在车站南口等朋友。"
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
          "zh": "耳朵疼。"
        },
        {
          "ja": "耳で音を聞きます。",
          "zh": "用耳朵听声音。"
        },
        {
          "ja": "耳をきれいにします。",
          "zh": "清洁耳朵。"
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
          "zh": "看电影。"
        },
        {
          "ja": "テレビを見ました。",
          "zh": "看了电视。"
        },
        {
          "ja": "この写真を見てください。",
          "zh": "请看这张照片。"
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
      "kanji_readings": [],
      "examples": [
        {
          "ja": "みんなで映画を見ます。",
          "zh": "大家一起看电影。"
        },
        {
          "ja": "みんな元気です。",
          "zh": "大家都很好。"
        },
        {
          "ja": "みんな来ました。",
          "zh": "大家都来了。"
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
      "kanji_readings": [
        {
          "form": "六日",
          "reading": "むいか"
        }
      ],
      "examples": [
        {
          "ja": "六日に会いましょう。",
          "zh": "六号见吧。"
        },
        {
          "ja": "六日は休みです。",
          "zh": "六号休息。"
        },
        {
          "ja": "六日に日本へ行きます。",
          "zh": "六号去日本。"
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
          "zh": "车站在路对面。"
        },
        {
          "ja": "向こうに山が見えます。",
          "zh": "那边看得到山。"
        },
        {
          "ja": "向こうで友達が待っています。",
          "zh": "朋友在那边等。"
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
          "zh": "这个问题很难。"
        },
        {
          "ja": "とても難しいですね。",
          "zh": "真难啊。"
        },
        {
          "ja": "難しいものが好きです。",
          "zh": "喜欢难的东西。"
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
          "zh": "有六个盒子。"
        },
        {
          "ja": "六つください。",
          "zh": "请给我六个。"
        },
        {
          "ja": "六つの言葉を書きます。",
          "zh": "写六个词。"
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
          "zh": "去村庄。"
        },
        {
          "ja": "村は駅の近くです。",
          "zh": "村庄在车站附近。"
        },
        {
          "ja": "村で友達に会います。",
          "zh": "在村庄见朋友。"
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
          "zh": "眼睛疼。"
        },
        {
          "ja": "目を閉じてください。",
          "zh": "请闭上眼睛。"
        },
        {
          "ja": "大きい目ですね。",
          "zh": "眼睛真大呢。"
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
          "zh": "从这里到车站有一百米。"
        },
        {
          "ja": "十メートル泳ぎます。",
          "zh": "游十米。"
        },
        {
          "ja": "この道は幅が五メートルです。",
          "zh": "这条路宽五米。"
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
          "zh": "戴着眼镜。"
        },
        {
          "ja": "新しい眼鏡を買いました。",
          "zh": "买了新眼镜。"
        },
        {
          "ja": "眼鏡を外してください。",
          "zh": "请摘下眼镜。"
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
      "part_of_speech": "adverb/expression",
      "meaning_zh": "已经；再；还",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "もう宿題をしました。",
          "zh": "已经做作业了。"
        },
        {
          "ja": "もう一度言ってください。",
          "zh": "请再说一次。"
        },
        {
          "ja": "もう少し待ってください。",
          "zh": "请再等一下。"
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
          "zh": "星期四去学校。"
        },
        {
          "ja": "木曜日は休みです。",
          "zh": "星期四休息。"
        },
        {
          "ja": "次の木曜日に会いましょう。",
          "zh": "下个星期四见吧。"
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
          "zh": "喂，我是田中。"
        },
        {
          "ja": "もしもし、聞こえますか。",
          "zh": "喂，听得见吗？"
        },
        {
          "ja": "もしもし、今大丈夫ですか。",
          "zh": "喂，现在方便吗？"
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
      "kanji_readings": [
        {
          "form": "持つ",
          "reading": "もつ"
        }
      ],
      "examples": [
        {
          "ja": "かばんを持っています。",
          "zh": "拿着包。"
        },
        {
          "ja": "傘を持って行きます。",
          "zh": "带伞去。"
        },
        {
          "ja": "重い荷物を持ちました。",
          "zh": "拿了重行李。"
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
      "part_of_speech": "adverb/expression",
      "meaning_zh": "更；更加",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "もっと水をください。",
          "zh": "请再给我一些水。"
        },
        {
          "ja": "もっと勉強します。",
          "zh": "我要更加努力学习。"
        },
        {
          "ja": "もっとゆっくり話してください。",
          "zh": "请说得再慢一点。"
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
          "zh": "桌子上有东西。"
        },
        {
          "ja": "大切な物をなくしました。",
          "zh": "弄丢了重要的东西。"
        },
        {
          "ja": "この物は何ですか。",
          "zh": "这个东西是什么？"
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
          "zh": "学校大门八点打开。"
        },
        {
          "ja": "門の前で友達を待ちます。",
          "zh": "在大门前等朋友。"
        },
        {
          "ja": "夜は門を閉めます。",
          "zh": "晚上关大门。"
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
      "kanji_readings": [
        {
          "form": "問題",
          "reading": "もんだい"
        }
      ],
      "examples": [
        {
          "ja": "この問題は難しいです。",
          "zh": "这个问题很难。"
        },
        {
          "ja": "問題に答えてください。",
          "zh": "请回答问题。"
        },
        {
          "ja": "問題が分かりません。",
          "zh": "不懂这个题。"
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
          "zh": "在书店买书。"
        },
        {
          "ja": "花屋は駅の近くです。",
          "zh": "花店在车站附近。"
        },
        {
          "ja": "八百屋で野菜を買います。",
          "zh": "在蔬菜水果店买蔬菜。"
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
          "zh": "在蔬菜水果店买蔬菜。"
        },
        {
          "ja": "八百屋は駅の近くです。",
          "zh": "蔬菜水果店在车站附近。"
        },
        {
          "ja": "母は八百屋へ行きました。",
          "zh": "母亲去了蔬菜水果店。"
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
          "ja": "野菜を食べます。",
          "zh": "吃蔬菜。"
        },
        {
          "ja": "野菜が好きです。",
          "zh": "喜欢蔬菜。"
        },
        {
          "ja": "野菜をください。",
          "zh": "请给我蔬菜。"
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
          "zh": "这个问题很简单。"
        },
        {
          "ja": "とても易しいですね。",
          "zh": "真简单啊。"
        },
        {
          "ja": "易しいものが好きです。",
          "zh": "喜欢简单的东西。"
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
          "zh": "这个鞋很便宜。"
        },
        {
          "ja": "とても安いですね。",
          "zh": "真便宜啊。"
        },
        {
          "ja": "安いものが好きです。",
          "zh": "喜欢便宜的东西。"
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
      "kanji_readings": [
        {
          "form": "休み",
          "reading": "やすみ"
        }
      ],
      "examples": [
        {
          "ja": "明日は休みです。",
          "zh": "明天休息。"
        },
        {
          "ja": "休みに旅行します。",
          "zh": "假期去旅行。"
        },
        {
          "ja": "今日は学校を休みます。",
          "zh": "今天不去学校/请假。"
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
      "kanji_readings": [
        {
          "form": "休む",
          "reading": "やすむ"
        }
      ],
      "examples": [
        {
          "ja": "今日は学校を休みます。",
          "zh": "今天不去学校。"
        },
        {
          "ja": "少し休んでください。",
          "zh": "请休息一下。"
        },
        {
          "ja": "日曜日にゆっくり休みました。",
          "zh": "星期天好好休息了。"
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
          "zh": "有八个房间。"
        },
        {
          "ja": "八つください。",
          "zh": "请给我八个。"
        },
        {
          "ja": "八つの名前を覚えました。",
          "zh": "记住了八个名字。"
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
          "ja": "山を見ます。",
          "zh": "看山。"
        },
        {
          "ja": "山がきれいです。",
          "zh": "山很美。"
        },
        {
          "ja": "山があります。",
          "zh": "有山。"
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
      "kanji_readings": [],
      "examples": [
        {
          "ja": "宿題をやります。",
          "zh": "做作业。"
        },
        {
          "ja": "犬に水をやります。",
          "zh": "给狗喂水。"
        },
        {
          "ja": "明日またやりましょう。",
          "zh": "明天再做吧。"
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
          "zh": "傍晚回家。"
        },
        {
          "ja": "夕方になると空が赤くなります。",
          "zh": "到了傍晚，天空会变红。"
        },
        {
          "ja": "今日の夕方、買い物へ行きます。",
          "zh": "今天傍晚去买东西。"
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
      "meaning_zh": "晚饭；晚餐",
      "kanji_readings": [
        {
          "form": "夕飯",
          "reading": "ゆうはん"
        }
      ],
      "examples": [
        {
          "ja": "仕事の帰りに夕飯の材料を買いました。",
          "zh": "下班回家时买了晚饭的食材。"
        },
        {
          "ja": "夕飯は七時です。",
          "zh": "晚饭是七点。"
        },
        {
          "ja": "今夜は私が夕飯を作ります。",
          "zh": "今晚由我做晚饭。"
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
          "zh": "去邮局。"
        },
        {
          "ja": "郵便局は駅の近くです。",
          "zh": "邮局在车站附近。"
        },
        {
          "ja": "郵便局で友達に会います。",
          "zh": "在邮局见朋友。"
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
          "zh": "昨晚下雨了。"
        },
        {
          "ja": "昨夜はよく眠れませんでした。",
          "zh": "昨晚没睡好。"
        },
        {
          "ja": "昨夜、友達から電話がありました。",
          "zh": "昨晚朋友打来了电话。"
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
          "zh": "这家店很有名。"
        },
        {
          "ja": "有名な先生に会いました。",
          "zh": "见到了有名的老师。"
        },
        {
          "ja": "京都は有名な町です。",
          "zh": "京都是有名的城市。"
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
          "zh": "昨晚下雪了。"
        },
        {
          "ja": "山に白い雪が積もっています。",
          "zh": "山上积着白雪。"
        },
        {
          "ja": "子供たちが雪で遊んでいます。",
          "zh": "孩子们正在玩雪。"
        }
      ],
      "note_zh": ""
    },
    {
      "id": "n5-682",
      "jlpt": "N5",
      "headword": "ゆっくりと",
      "source_form": "ゆっくりと",
      "variants": [
        "ゆっくりと"
      ],
      "reading": "ゆっくりと",
      "reading_variants": [
        "ゆっくりと"
      ],
      "romaji": "yukkurito",
      "part_of_speech": "adverb/expression",
      "meaning_zh": "慢慢地；悠闲地",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "ゆっくりと話してください。",
          "zh": "请慢慢说。"
        },
        {
          "ja": "日曜日はゆっくり休みます。",
          "zh": "星期天好好休息。"
        },
        {
          "ja": "道をゆっくり歩きました。",
          "zh": "慢慢地走了路。"
        }
      ],
      "note_zh": ""
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
      "kanji_readings": [
        {
          "form": "八日",
          "reading": "ようか"
        }
      ],
      "examples": [
        {
          "ja": "八日に会いましょう。",
          "zh": "八号见吧。"
        },
        {
          "ja": "八日は休みです。",
          "zh": "八号休息。"
        },
        {
          "ja": "八日に日本へ行きます。",
          "zh": "八号去日本。"
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
      "meaning_zh": "西式衣服；衣服",
      "kanji_readings": [
        {
          "form": "洋服",
          "reading": "ようふく"
        }
      ],
      "examples": [
        {
          "ja": "新しい洋服を買いました。",
          "zh": "买了新衣服。"
        },
        {
          "ja": "洋服を着ます。",
          "zh": "穿衣服。"
        },
        {
          "ja": "この店は洋服が多いです。",
          "zh": "这家店衣服很多。"
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
      "part_of_speech": "adverb/expression",
      "meaning_zh": "经常；好好地；很会",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "よく映画を見ます。",
          "zh": "经常看电影。"
        },
        {
          "ja": "よく分かりました。",
          "zh": "很明白了。"
        },
        {
          "ja": "日本語をよく勉強します。",
          "zh": "好好学习日语。"
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
      "kanji_readings": [
        {
          "form": "横",
          "reading": "よこ"
        }
      ],
      "examples": [
        {
          "ja": "銀行は駅の横にあります。",
          "zh": "银行在车站旁边。"
        },
        {
          "ja": "横に座ってください。",
          "zh": "请坐在旁边。"
        },
        {
          "ja": "紙を横にしてください。",
          "zh": "请把纸横过来。"
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
      "kanji_readings": [
        {
          "form": "四日",
          "reading": "よっか"
        }
      ],
      "examples": [
        {
          "ja": "四日に会いましょう。",
          "zh": "四号见吧。"
        },
        {
          "ja": "四日は休みです。",
          "zh": "四号休息。"
        },
        {
          "ja": "四日に日本へ行きます。",
          "zh": "四号去日本。"
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
          "zh": "有四张桌子。"
        },
        {
          "ja": "四つください。",
          "zh": "请给我四个。"
        },
        {
          "ja": "四つの問題に答えます。",
          "zh": "回答四个问题。"
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
      "kanji_readings": [
        {
          "form": "呼ぶ",
          "reading": "よぶ"
        }
      ],
      "examples": [
        {
          "ja": "友達を家に呼びます。",
          "zh": "邀请朋友来家里。"
        },
        {
          "ja": "先生を呼んでください。",
          "zh": "请叫老师。"
        },
        {
          "ja": "私を名前で呼んでください。",
          "zh": "请叫我的名字。"
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
          "zh": "读书。"
        },
        {
          "ja": "新聞を読みました。",
          "zh": "读了报纸。"
        },
        {
          "ja": "毎日、日本語を読みます。",
          "zh": "每天读日语。"
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
          "zh": "晚上在家看书。"
        },
        {
          "ja": "この町は夜になると静かです。",
          "zh": "这座城镇到了晚上很安静。"
        },
        {
          "ja": "昨日の夜、星を見ました。",
          "zh": "昨天晚上看了星星。"
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
          "ja": "この体は弱いです。",
          "zh": "这个身体很弱。"
        },
        {
          "ja": "とても弱いですね。",
          "zh": "真弱啊。"
        },
        {
          "ja": "弱いものが好きです。",
          "zh": "喜欢弱的东西。"
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
          "ja": "来月、学校へ行きます。",
          "zh": "下个月去学校。"
        },
        {
          "ja": "来月は忙しいです。",
          "zh": "下个月很忙。"
        },
        {
          "ja": "来月、友達に会います。",
          "zh": "下个月见朋友。"
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
          "ja": "来週、学校へ行きます。",
          "zh": "下周去学校。"
        },
        {
          "ja": "来週は忙しいです。",
          "zh": "下周很忙。"
        },
        {
          "ja": "来週、友達に会います。",
          "zh": "下周见朋友。"
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
          "ja": "来年、学校へ行きます。",
          "zh": "明年去学校。"
        },
        {
          "ja": "来年は忙しいです。",
          "zh": "明年很忙。"
        },
        {
          "ja": "来年、友達に会います。",
          "zh": "明年见朋友。"
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
      "kanji_readings": [],
      "examples": [
        {
          "ja": "ラジオを聞きます。",
          "zh": "听收音机。"
        },
        {
          "ja": "毎日、ラジオを聞いています。",
          "zh": "每天听收音机。"
        },
        {
          "ja": "ラジオが好きです。",
          "zh": "喜欢收音机。"
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
          "ja": "ラジカセを使います。",
          "zh": "使用收录机。"
        },
        {
          "ja": "ラジカセを買いました。",
          "zh": "买了收录机。"
        },
        {
          "ja": "ラジカセで音楽を聞きます。",
          "zh": "用收录机听音乐。"
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
          "zh": "真是气派的建筑。"
        },
        {
          "ja": "彼はりっぱな先生です。",
          "zh": "他是一位出色的老师。"
        },
        {
          "ja": "りっぱな仕事をしました。",
          "zh": "做了出色的工作。"
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
          "ja": "留学生に会います。",
          "zh": "见留学生。"
        },
        {
          "ja": "留学生と話します。",
          "zh": "和留学生说话。"
        },
        {
          "ja": "クラスの留学生は日本語が上手です。",
          "zh": "班里的留学生日语很好。"
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
          "ja": "両親に会います。",
          "zh": "见父母。"
        },
        {
          "ja": "両親と話します。",
          "zh": "和父母说话。"
        },
        {
          "ja": "私の両親は元気です。",
          "zh": "我的父母身体很好。"
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
      "part_of_speech": "noun",
      "meaning_zh": "料理；菜；做饭",
      "kanji_readings": [
        {
          "form": "料理",
          "reading": "りょうり"
        }
      ],
      "examples": [
        {
          "ja": "母は料理が上手です。",
          "zh": "母亲很会做饭。"
        },
        {
          "ja": "日本の料理を食べます。",
          "zh": "吃日本料理。"
        },
        {
          "ja": "晩ご飯を料理します。",
          "zh": "做晚饭。"
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
      "part_of_speech": "noun",
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
          "zh": "和家人旅行。"
        },
        {
          "ja": "日本へ旅行に行きます。",
          "zh": "去日本旅行。"
        },
        {
          "ja": "旅行は楽しいです。",
          "zh": "旅行很开心。"
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
      "part_of_speech": "noun",
      "meaning_zh": "零",
      "kanji_readings": [
        {
          "form": "零",
          "reading": "れい"
        }
      ],
      "examples": [
        {
          "ja": "気温は零度まで下がりました。",
          "zh": "气温降到了零度。"
        },
        {
          "ja": "午前零時に新しい日が始まります。",
          "zh": "午夜零点新的一天开始。"
        },
        {
          "ja": "テストで零点を取りました。",
          "zh": "考试得了零分。"
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
          "ja": "冷蔵庫を使います。",
          "zh": "使用冰箱。"
        },
        {
          "ja": "冷蔵庫を買いました。",
          "zh": "买了冰箱。"
        },
        {
          "ja": "食べ物を冷蔵庫に入れます。",
          "zh": "把食物放进冰箱。"
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
      "kanji_readings": [],
      "examples": [
        {
          "ja": "古いレコードを聞きます。",
          "zh": "听旧唱片。"
        },
        {
          "ja": "レコードを買いました。",
          "zh": "买了唱片。"
        },
        {
          "ja": "このレコードが好きです。",
          "zh": "喜欢这张唱片。"
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
          "zh": "去餐厅。"
        },
        {
          "ja": "レストランは駅の近くです。",
          "zh": "餐厅在车站附近。"
        },
        {
          "ja": "レストランで友達に会います。",
          "zh": "在餐厅见朋友。"
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
          "zh": "练习。"
        },
        {
          "ja": "毎日、練習します。",
          "zh": "每天练习。"
        },
        {
          "ja": "昨日、練習しました。",
          "zh": "昨天练习了。"
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
          "zh": "安静地走过走廊。"
        },
        {
          "ja": "廊下に人が並んでいます。",
          "zh": "走廊里有人在排队。"
        },
        {
          "ja": "先生に廊下で会いました。",
          "zh": "在走廊遇到了老师。"
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
      "part_of_speech": "noun",
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
          "zh": "六月雨水很多。"
        },
        {
          "ja": "毎朝六時に起きます。",
          "zh": "每天早上六点起床。"
        },
        {
          "ja": "答えは六です。",
          "zh": "答案是六。"
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
      "meaning_zh": "衬衫；衬衣",
      "kanji_readings": [],
      "examples": [
        {
          "ja": "白いワイシャツを着ます。",
          "zh": "穿白色衬衫。"
        },
        {
          "ja": "新しいワイシャツを買いました。",
          "zh": "买了新衬衫。"
        },
        {
          "ja": "昨日、ワイシャツを洗いました。",
          "zh": "昨天洗了衬衫。"
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
          "zh": "这个老师很年轻。"
        },
        {
          "ja": "とても若いですね。",
          "zh": "真年轻啊。"
        },
        {
          "ja": "若いものが好きです。",
          "zh": "喜欢年轻的东西。"
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
          "zh": "懂一点日语。"
        },
        {
          "ja": "この問題は分かりません。",
          "zh": "这个问题不懂。"
        },
        {
          "ja": "先生の話がよく分かりました。",
          "zh": "很好地理解了老师的话。"
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
          "zh": "忘了作业。"
        },
        {
          "ja": "名前を忘れないでください。",
          "zh": "请不要忘记名字。"
        },
        {
          "ja": "傘を電車に忘れました。",
          "zh": "把伞忘在电车上了。"
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
          "zh": "我是学生。"
        },
        {
          "ja": "私は日本語を勉強しています。",
          "zh": "我正在学日语。"
        },
        {
          "ja": "これは私の本です。",
          "zh": "这是我的书。"
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
          "zh": "我是田中。"
        },
        {
          "ja": "わたくしが説明します。",
          "zh": "由我来说明。"
        },
        {
          "ja": "わたくしは営業部の田中と申します。",
          "zh": "我是营业部的田中。"
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
          "zh": "把信交给老师。"
        },
        {
          "ja": "友達にプレゼントを渡しました。",
          "zh": "把礼物交给了朋友。"
        },
        {
          "ja": "これを母に渡してください。",
          "zh": "请把这个交给妈妈。"
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
          "zh": "过桥。"
        },
        {
          "ja": "道を渡ってください。",
          "zh": "请过马路。"
        },
        {
          "ja": "川を渡りました。",
          "zh": "过了河。"
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
          "zh": "今天天气不好。"
        },
        {
          "ja": "姿勢が悪いですね。",
          "zh": "你的姿势不太好。"
        },
        {
          "ja": "悪いことをしてはいけません。",
          "zh": "不可以做坏事。"
        }
      ],
      "note_zh": ""
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
