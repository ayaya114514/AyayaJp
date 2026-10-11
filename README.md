# AyayaJp

一个本地运行的日语 flashcard 程序，包含假名互记、N5/N4 词汇与表达双向记忆、N5/N4 语法练习；每个小板块都分成「认识」和「不认识」两部分，可一键切换。点击卡片翻面时会自动播放读音，答案区也可以手动重播；例句语音按与 furigana、罗马音相同的审核读音朗读（汉字转成假名，助词「は・へ」读作 wa・e），不让浏览器自己猜汉字读音，词缀卡朗读时去掉「～」；有多个标准读音的词会在读音栏一并列出（如「なん（也读 なに）」）。iPhone 上读音与背景音乐混音播放，不会暂停音乐（静音模式下读音也会静音）。
界面目前固定使用深色模式，没有浅色 / 深色切换按钮。
手机学习界面会铺满当前可用 viewport，并锁定页面本身的纵向滚动；只有模块页和高度很小的横屏卡片允许内部 touch scrolling。iOS 重播会避开 WebKit 中紧邻 `cancel()` / `speak()` 的竞争，在临时合成失败时自动重试一次，并显示明确的播放状态或错误提示。

在线网址：[https://ayaya114514.github.io/AyayaJp/](https://ayaya114514.github.io/AyayaJp/)

## 使用

直接打开 `index.html`，或在目录里启动一个本地 server：

```bash
python3 -m http.server 5173
```

然后访问 `http://localhost:5173`。

可以使用 `Tab` 在操作项之间移动；聚焦卡片后按 `Enter` 或 `Space` 显示答案。显示答案后按 `1` / `2` 分别评为 `认识` / `不认识`；选择题作答前按 `1`–`4` 选择 A–D。正常加载不会闪现状态提示；资源加载失败时会给出可见提示。

## 检查

Validation 需要 Node.js 20 或更新版本；推荐使用 `.nvmrc` 指定的 Node 22：

```bash
nvm use
npm run check
```

`npm run check` 会依次运行 source/runtime/DOM validation、bundle baseline validation 和 app contract tests。它会检查 JS 语法、HTML 结构与本地资源、脚本依赖顺序、N5/N4 JS/JSON 数据一致性、词库和语法字段完整性、助词与词内音节的 romaji regression cases、lazy card builders、stable/legacy/retired source IDs，以及 app 的 storage、TTS、sidebar 等关键 contracts。

完整测试还会运行真实 Chromium 与 WebKit，在 desktop、320×640 mobile viewport、iPhone 14 的 390×664 可用 viewport 和横屏 viewport 检查卡片布局、整面点击、focus、Back/Undo、多标签页进度合并与刷新行为：

```bash
npm test
```

浏览器测试固定使用专用端口 4318 启动静态 server，并且不复用已在运行的 server，避免误测其他项目（例如同样默认 4173 的 Vite preview）。首次在本机运行前，或升级 `@playwright/test` 后浏览器 build 号变化时，需要安装 Chromium / WebKit：

```bash
npx playwright install chromium webkit
```

GitHub Pages 只会在 contracts 和 browser regressions 全部通过后部署。部署 artifact 会为 CSS/JS 加入基于 commit 的版本参数，避免发布后的 CDN cache 混用新旧资源。

`validation-report.json` 是 committed baseline manifest，只记录受检 source fingerprint、预期计数和必须执行的 contracts；它不是“检查已经通过”的结果报告。只有在有意修改受检 source 或计数后才更新它：

```bash
npm run update:manifest
npm run check
```

Updater 是 deterministic 的，并会在 N5/N4 JS/JSON 未同步时拒绝改写 manifest。

## 练习逻辑

- 学习界面从上到下排列：顶部是浅色的单词区（左上角的 `<` 撤回上一次评分，题目和读音带播放按钮；语法 `中→日` / `日→中` 卡以文型为大字题面，句子作为下方小字），下方深色的答案区在翻开前提示「点击屏幕显示答案」，翻开后依次是意思、「说明」（读音、接续、提示等逐行列出）和「例句」，`认识` / `不认识` 固定在下方。宽度够两栏（iPad 横屏、桌面）时卡片加宽，「说明」和「例句」左右并排。翻开后的全部内容在 390×844 手机竖屏、1280×800 桌面窗口和 11 寸 iPad Air 的 Safari（竖屏 820×1100、带标签栏的横屏 1180×700）内一屏放下、不需要滚动；Playwright 会逐张检查全部卡片，提示文字过长导致超出时测试失败。最底部的浅色导航栏从左到右是 `当前`、`不认识`（角标分别为该板块本轮剩余张数）和 `模块`（打开模块页，再点一次或点 `<`、`当前`、`不认识` 回到学习）。
- 模块页每行是一个板块和级别（基础、N5/N4 词汇、N5/N4 语法），格子是练习方式，一屏放下全部模块，点一下即可切换；完成的轮数显示在格子右上角，0 轮不显示。
- 所有普通模块按随机顺序出题，一轮练完后可以点 `重新开始` 再洗牌。
- `认识`、`不认识` 只记录你的选择，不计算复习间隔。
- 每个小板块（假名、词汇各方向、语法各题型）都有自己的「不认识」板块，点底部导航栏的 `不认识` 切换过去，点 `当前` 回来。
- 选 `不认识`（或选择题答错）会立即把卡片移进该板块的「不认识」部分并从主板块去掉；在「不认识」里选 `认识`（或答对）会移回主板块，并算作主板块本轮已完成。一轮做完后，主板块只剩认识的，「不认识」里只剩不认识的。
- 旧版本评为 `不确定` / `遗忘` 或答错的卡片，会自动归入对应的「不认识」板块。
- 语法模块按 N5/N4 分开练 `中→日`、`日→中`、`文型` 和 `选择题`。
- 语法选择题覆盖每条 N5/N4 语法，考的是文型的意思：选项只显示意思，不显示接续（接续一栏会直接包含文型本身，等于泄露答案）。干扰项来自同级语法，并排除意思重叠或文型互相包含的条目（如 `〜にくい` / `〜づらい`、`まだ` / `まだ〜ていません`、两条 `〜のに`），保证只有一个正确项。每轮重新开始会重新打乱题目顺序，每题选项顺序也会重新打乱，并避免正确项连续落在同一位置。
- 语法选择题答题后（手机和桌面都一样）只保留你的选择与正确项解释，避免被无关干扰项和重复例句撑出屏幕。
- `文型` 卡翻开后答案只显示意思，接续和提示放在「说明」里逐行列出。
- 选择题会保留最近一次选择结果，以便刷新或多标签页同步后继续显示正确解释。

所有进度保存在浏览器 `localStorage` 中。存储使用 bounded schema：每张卡只保留累计次数、最近评分和单个同步事件，不保存随练习次数增长的记忆链条或 Undo tombstone history；“完成轮数”只是一个数字，不会按轮追加记录。

## 词库数据来源

当前项目完全使用 `n5-codex-vocab.js` / `n5-codex-vocab.json` 作为 N5 数据源，共 713 条。
当前项目完全使用 `ayaya-n4-codex-vocab.js` / `ayaya-n4-codex-vocab.json` 作为 N4 数据源，共 727 条。

数据字段包括规范词形、原始词形、变体、读音、罗马音、词性、简体中文释义、整词 furigana 信息、教学分类，以及每项 3 条日语例句和简体中文翻译。卡片会明确标出词汇、量词、词缀、表达、复合词、派生形式、固定表达或搭配，不再把它们统一显示成“单词”。

前端实际加载 `n5-codex-vocab.js` 和 `ayaya-n4-codex-vocab.js`。对应 `.json` 文件保留为同源的可读/可校对数据文件。

### 数据范围与 provenance

- JLPT 官方不发布固定的词汇、汉字或语法项目清单；这里的 N5/N4 是本项目维护的教学分级，不应当视为官方考试词表。
- 2026-08-30 内容审查使用 [Jisho](https://jisho.org/) 及其采用的 [JMdict/EDICT](https://www.edrdg.org/wiki/index.php/JMdict-EDICT_Dictionary_Project) 核对全部词汇的规范写法、读音、词性与义项，并重新检查全部词汇/语法例句的目标项对齐、日语自然度、语法和中文译文。2026-08-31 又将 12 个纯语法 pattern 从 N4 词汇表迁入语法模块，并把复合词、派生形式、固定表达和搭配单独标记。2026-10-10 全量复审后，又把 ため、～がる、だけ、など（N5/N4 各一条）、つもり、はず 迁入对应语法卡，把重复的 N4「きらい」合并进 N5「嫌い」，并修正了词条罗马音、分类标签、释义和一批不自然的例句。2026-10-11 再次复审：把重复的 N4「けっこう」合并进 N5「結構」，把表示“一个月”的「一月」改写为「ひと月」（避免读成いちがつ），修正了「別れる／分かれる」「代える／替える」「学生／生徒」等用词，并改写了一批不自然、未用到词条本身或含超纲词汇的例句；当前共有 1,440 条词汇/表达、220 条语法和 4,980 条例句。Jisho 例句只用于用法参考，本项目例句仍为独立编写，不直接复制外部语料。
- 词条以仓库内的 JSON 为 canonical source，`source_form`、`variants` 与 `note_zh` 保留规范化和人工校订线索；修改 JSON 后运行 `npm run sync:vocab` 生成对应 JS，validation 会阻止两者漂移。
- 例句是为本项目编写和校订的短学习句，不是外部语料库引文。同义同用法的跨级重复已合并；只有语义或功能明确不同的 overlap 才分别保留。被合并词条的旧 source ID 会迁移到保留项；从词汇模块迁出的 grammar pattern 也会把旧双向卡片进度迁移到对应语法卡，避免丢失既有学习次数。
- 例句 furigana 与罗马音使用同一套带语境保护的读音切分：汉字复合词由一条已审核读音整体注音，或按审核过的词边界逐词注音（`毎朝(まいあさ)三十分(さんじゅっぷん)歩(ある)きます`），绝不会由单字读音拼出（如 `明日` 不会注成 `明(あか)日(ひ)`）；送假名留在 `<rt>` 之外。validation 会检查每条例句的实际注音结果。
- 共享读音表无法安全判定的汉字（`明日`、`私`、`人`、`中`、数量词音变、动词活用形等）逐句写在 `example-readings.js`：每条是一个完整例句，列出其中每段汉字的「词形|读音」，只对这一句生效。当前全部 4,980 条例句都有完整 furigana 和罗马音，validation 要求保持 100%；新增或修改例句若有汉字不能由审核过的读音覆盖，必须在这里补上逐句读音（或改写例句），否则检查失败。
- 罗马音只在能够完整、无歧义地转换为 Latin script 时显示；助词「は・へ・を」写作 `wa・e・o`，「ん」只在同一词内的元音或 `y` 前写作 `n'`。词条本身的罗马音也遵守同一规则，并与例句使用相同的分词（`gen'in ni naru`、`nedan ga takai`）；validation 会把它和读音逐音拍对照。运行时如果某句读音不能由审核数据完整覆盖，仍会标记为 unavailable 并隐藏，避免把猜测当成正确读音。
- 例句罗马音的分词逐句人工审核，保存在 `romaji-word-spacing.js`（每条是带空格的日文原句，人名后缀写作 `田中-さん`）。规则按常见教材的 Hepburn 分词：助词、です／だ、补助动词（`tabete imasu`、`kaite kudasai`）、サ变动词的 する（`benkyou shimasu`）单独成词；ます・た・ない・たい・れる・させる、て／ば／たり、すぎる、やすい／にくい 接在词干上（`ikimashita`、`mitari`、`tsuyosugite`、`yomiyasui`）；复合词、数量词、片假名外来词连写（`toshokan`、`sanjuppun`、`boorupen`）；句首接续词按词典写成一个词（`demo`、`dakara`、`sorekara`、`suruto`、`dewa`）；人名后缀用连字符（`tanaka-san`）。
- 分词数据只能决定在哪里加空格：`card-data.js` 会核对加空格前后的罗马字母完全一致，否则退回不分词的写法，validation 会报错；它也会要求每个显示罗马音的例句都有审核过的分词，且不保留已失效的条目。新增或修改例句时，要同时在 `romaji-word-spacing.js` 里写好这句的分词。
- 这套数据仍可能存在用法或分级争议；修改词义、读音或例句时应同时更新 JSON/JS，并运行完整 `npm run check`。

### 音调（pitch accent）

- 翻面后读音后面会标东京音调核位置，例如 `读音：あめ ①`、`读音：ともだち ⓪`；有多个公认音调时写成 `④/⓪`。
- 数据来自 [Kanjium](https://github.com/mifunetoshiro/kanjium) 的 `accents.txt`（"The pitch accent notation ... were provided by Uros O. through his free database"），按 [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) 使用；`pitch-accent-data.js` 是它的派生数据，以相同许可分发。
- 只在 Kanjium 精确收录「词形 + 读音」且只有纯数字音调时标注（纯假名词仅在唯一的汉字变体匹配时补上）；带词性分义的条目（如 `結構`、`大事`）、后缀和句型、以及人工审查认为义项不对应的条目（`ああ`、`ええ`、`ちゃん`、`君（くん）`）不标注。`これ` / `それ` 使用 Kanjium 中指示代词义项（此れ / 其れ）的数据。当前 1,440 条词汇中 1,197 条有音调。
- 重新生成：`npm run build:pitch -- <path/to/kanjium/accents.txt>`；人工审查的排除和改指向写在 `scripts/build-pitch-accents.js` 里，validation 会检查索引范围、来源许可和这些审查结果。

## 语法数据

当前项目使用 `grammar-data.js` 作为 N5/N4 语法数据源，共 220 条。每条语法题包含文型、中文意思、接续、提示、中文 prompt、标准日语答案，以及 3 条例句。

`card-data.js` 会为每条语法生成 4 张卡：`中→日`、`日→中`、`文型`、`选择题`。当前完整数据包计数为：

- 假名 / 发音卡片：241
- 词汇与表达卡片：2,880
- 语法卡片：880
- 总卡片：4,001

“进阶发音”分为浊音、半浊音、拗音、长音、促音、拨音、助词和外来音，每张卡只用一个词标注类别，翻面后用「类别：假名　罗马音：…　例词：…」的简短格式说明；`コーヒー` 等整词只作为发音例词，不再与 N5 词义卡重复出题。该模块是教学精选，不表示使用频率，也不是完整外来音表。

## 文件结构

- `index.html`：页面结构和脚本加载顺序。
- `styles.css`：页面样式。
- `card-data.js`：假名、N5/N4 数据转换、例句和卡片构建逻辑。
- `grammar-data.js`：N5/N4 语法练习数据。
- `pitch-accent-data.js`：由 `scripts/build-pitch-accents.js` 从 Kanjium 生成的词汇音调数据（CC BY-SA 4.0）。
- `app.js`：学习状态、渲染、交互和语音播放逻辑。
- `scripts/validate.js`：本地 zero-dependency source/runtime/DOM validation。
- `scripts/test-app-contracts.js`：zero-dependency app regression tests。
- `scripts/update-validation-manifest.js`：deterministic baseline manifest updater。
- `scripts/sync-vocab-js.js`：由 N5/N4 JSON 生成对应的 JS 数据文件（`npm run sync:vocab`，`--check` 只检查不写入）。
- `validate-bundle.js` / `validation-report.json`：bundle baseline checker 与 committed manifest（不是通过结果报告）。
