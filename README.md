# AyayaJp

一个本地运行的日语 flashcard 程序，包含假名互记、N5/N4 单词双向记忆、N5/N4 语法练习，以及对应错题集。点击卡片翻面时会自动播放读音，答案区也可以手动重播。
界面目前固定使用深色模式，没有浅色 / 深色切换按钮。
手机学习界面会铺满当前可用 viewport，并锁定页面本身的纵向滚动；只有模块抽屉和高度很小的横屏卡片允许内部 touch scrolling。iOS 重播会避开 WebKit 中紧邻 `cancel()` / `speak()` 的竞争，在临时合成失败时自动重试一次，并显示明确的播放状态或错误提示。

在线网址：[https://ayaya114514.github.io/AyayaJp/](https://ayaya114514.github.io/AyayaJp/)

## 使用

直接打开 `index.html`，或在目录里启动一个本地 server：

```bash
python3 -m http.server 5173
```

然后访问 `http://localhost:5173`。

可以使用 `Tab` 在操作项之间移动；聚焦卡片后按 `Enter` 或 `Space` 显示答案。正常加载不会闪现状态提示；资源加载失败时会给出可见提示。

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

首次在本机运行前如尚未安装 Chromium / WebKit，可执行：

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

- 所有普通模块按随机顺序出题，一轮练完后可以点 `重新开始` 再洗牌。
- `清楚`、`不确定`、`遗忘` 只记录你的选择，不再计算复习间隔。
- N5 里选择 `不确定` 或 `遗忘` 的词会进入 `N5 错题集`；N4 同理进入 `N4 错题集`；在错题集里选 `清楚` 后会移出。
- 语法模块按 N5/N4 分开练 `中→日`、`日→中`、`文型` 和 `选择题`；普通语法卡选择 `不确定` 或 `遗忘` 后会进入对应语法错题集。
- 语法选择题覆盖每条 N5/N4 语法；每轮重新开始会重新打乱题目顺序，每题选项顺序也会重新打乱，并避免正确项连续落在同一位置。
- 语法选择题答题后只保留你的选择与正确项解释，避免 mobile viewport 被无关干扰项和重复例句撑出屏幕。
- 选择题会保留最近一次选择结果，以便刷新或多标签页同步后继续显示正确解释。

所有进度保存在浏览器 `localStorage` 中。存储使用 bounded schema：每张卡只保留累计次数、最近评分和单个同步事件，不保存随练习次数增长的记忆链条或 Undo tombstone history；“完成轮数”只是一个数字，不会按轮追加记录。

## 词库数据来源

当前项目完全使用 `n5-codex-vocab.js` / `n5-codex-vocab.json` 作为 N5 数据源，共 716 条。
当前项目完全使用 `ayaya-n4-codex-vocab.js` / `ayaya-n4-codex-vocab.json` 作为 N4 数据源，共 745 条。

数据字段包括规范词形、原始词形、变体、读音、罗马音、词性、简体中文释义、整词 furigana 信息，以及每个词 3 条日语例句和简体中文翻译。

前端实际加载 `n5-codex-vocab.js` 和 `ayaya-n4-codex-vocab.js`。对应 `.json` 文件保留为同源的可读/可校对数据文件。

### 数据范围与 provenance

- JLPT 官方不发布固定的词汇、汉字或语法项目清单；这里的 N5/N4 是本项目维护的教学分级，不应当视为官方考试词表。
- 词条以仓库内的 JSON 为 canonical source，`source_form`、`variants` 与 `note_zh` 保留规范化和人工校订线索；对应 JS 必须由同一份内容同步生成，并由 validation 阻止两者漂移。
- 例句是为本项目编写和校订的短学习句，不是外部语料库引文。同义同用法的跨级重复已合并；只有语义或功能明确不同的 overlap 才分别保留。被合并词条的旧 source ID 会迁移到保留项，避免丢失既有学习次数。
- 罗马音只在能够完整、无歧义地转换为 Latin script 时显示；助词「は・へ・を」写作 `wa・e・o`，「ん」只在同一词内的元音或 `y` 前写作 `n'`。无法可靠判定时会标记为 unavailable 并隐藏，避免把猜测当成正确读音。
- 这套数据仍可能存在用法或分级争议；修改词义、读音或例句时应同时更新 JSON/JS，并运行完整 `npm run check`。

## 语法数据

当前项目使用 `grammar-data.js` 作为 N5/N4 语法数据源，共 215 条。每条语法题包含文型、中文意思、接续、提示、中文 prompt、标准日语答案，以及 3 条例句。

`card-data.js` 会为每条语法生成 4 张卡：`中→日`、`日→中`、`文型`、`选择题`。当前完整数据包计数为：

- 假名 / 发音卡片：241
- 词汇卡片：2,922
- 语法卡片：860
- 总卡片：4,023

“进阶发音”按浊音/半浊音/拗音、特殊拍、助词特殊读音和代表性外来音组合标注；`コーヒー` 等整词只作为发音例词，不再与 N5 词义卡重复出题。该模块是教学精选，不表示使用频率，也不是完整外来音表。

## 文件结构

- `index.html`：页面结构和脚本加载顺序。
- `styles.css`：页面样式。
- `card-data.js`：假名、N5/N4 数据转换、例句和卡片构建逻辑。
- `grammar-data.js`：N5/N4 语法练习数据。
- `app.js`：学习状态、渲染、交互和语音播放逻辑。
- `scripts/validate.js`：本地 zero-dependency source/runtime/DOM validation。
- `scripts/test-app-contracts.js`：zero-dependency app regression tests。
- `scripts/update-validation-manifest.js`：deterministic baseline manifest updater。
- `validate-bundle.js` / `validation-report.json`：bundle baseline checker 与 committed manifest（不是通过结果报告）。
