"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const {
  buildRuntime,
  canonicalText,
  cloneJson,
  compactText,
  compareCounts,
  computeSourceFingerprint,
  hasJapaneseScript,
  loadBundledData,
  loadCardData,
  loadScriptGlobal,
  loadValidationReport,
  minimumNodeMajor,
  preferredNodeMajor,
  read,
  readJson,
  rootDir,
  runBrowserScript,
  sample,
  validateReportStructure,
} = require("./validation-lib");
const {
  audioClipKey,
  audioProsodyFile,
  audioReportFile,
  collectSpokenTexts,
  loadAudioManifest,
  loadAudioProsody,
} = require("./audio-lib");

const validationErrors = [];
const allowedLanguageTags = new Set(["en", "ja", "zh-CN"]);
// The first screen needs only the kana cards and the app; the study data is
// listed, in dependency order, in #studyDataScripts and loaded by app.js after
// the first card shows (card-data.js last: it reads everything before it).
const expectedEagerScripts = ["kana-cards.js", "app.js"];
const expectedStudyDataScripts = [
  "audio-manifest.js",
  "n5-codex-vocab.js",
  "ayaya-n4-codex-vocab.js",
  "ayaya-n3-codex-vocab.js",
  "grammar-data.js",
  "pitch-accent-data.js",
  "homophone-data.js",
  "romaji-word-spacing.js",
  "example-readings.js",
  "card-data.js",
];
// Document order: the template sits in <head> (so the preload hint can read it),
// before the deferred scripts at the end of <body>.
const expectedDependencyScripts = [...expectedStudyDataScripts, ...expectedEagerScripts];
// Every example carries reviewed furigana and romaji; an example that cannot be
// annotated safely needs a reviewed entry in example-readings.js (or a rewrite).
const minimumReviewedRomajiCoverage = 1;
const expectedMergedSourceTargets = new Map([
  ["n4-002", "n5-001"],
  ["n4-039", "n5-072"],
  ["n5-159", "n5-158"],
  ["n4-119", "n5-158"],
  ["n4-130", "n5-170"],
  ["n4-177", "n5-205"],
  ["n4-253", "n5-270"],
  ["n4-254", "n5-271"],
  ["n4-266", "n5-276"],
  ["n4-281", "n5-283"],
  ["n4-347", "n5-334"],
  ["n4-393", "n5-376"],
  ["n4-423", "n5-400"],
  ["n4-755", "n5-409"],
  ["n4-478", "n5-465"],
  ["n4-507", "n5-502"],
  ["n4-763", "n5-551"],
  ["n4-629", "n5-645"],
  ["n4-247", "n4-246"],
  ["n4-377", "n4-376"],
  ["n4-613", "n4-612"],
  ["n4-180", "n5-208"],
  ["n4-207", "n5-237"],
]);
const allowedCrossLevelVocabOverlaps = new Set([
  "n5-081/n4-046",
  "n5-358/n4-378",
  "n5-651/n4-634",
]);
// Exact headword/reading matches between N3 and a lower level, each reviewed
// as a genuinely different sense (empty: N3 excludes every N5/N4 word).
const allowedN3CrossLevelVocabOverlaps = new Set([]);
const allowedLearningCategories = new Set([
  "collocation",
  "compound",
  "derived-form",
  "fixed-expression",
]);
const expectedLearningCategories = new Map([
  ["n4-082", "compound"],
  ["n4-097", "derived-form"],
  ["n4-151", "derived-form"],
  ["n4-186", "compound"],
  ["n4-218", "collocation"],
  ["n4-256", "fixed-expression"],
  ["n4-335", "derived-form"],
  ["n4-342", "collocation"],
  ["n4-357", "collocation"],
  ["n4-390", "fixed-expression"],
  ["n4-474", "fixed-expression"],
  ["n4-515", "derived-form"],
  ["n4-519", "collocation"],
  ["n4-520", "collocation"],
  ["n4-550", "collocation"],
]);
const expectedRetiredVocabGrammarTargets = new Map([
  ["n4-743", "n4-grammar-067"],
  ["n4-744", "n4-grammar-068"],
  ["n4-752", "n4-grammar-133"],
  ["n4-754", "n4-grammar-009"],
  ["n4-757", "n4-grammar-102"],
  ["n4-758", "n4-grammar-060"],
  ["n4-759", "n4-grammar-135"],
  ["n4-760", "n4-grammar-136"],
  ["n4-761", "n4-grammar-019"],
  ["n4-762", "n4-grammar-007"],
  ["n4-765", "n4-grammar-042"],
  ["n4-767", "n4-grammar-121"],
  ["n5-181", "n4-grammar-017"],
  ["n5-380", "n5-grammar-012"],
  ["n5-486", "n4-grammar-049"],
  ["n4-497", "n4-grammar-049"],
  ["n4-447", "n5-grammar-066"],
  ["n4-537", "n4-grammar-020"],
  ["n4-410", "n4-grammar-133"],
]);

function addError(message) {
  validationErrors.push(message);
}

function check(condition, message) {
  if (!condition) addError(message);
}

function capture(label, callback) {
  try {
    return callback();
  } catch (error) {
    addError(`${label}: ${error.stack || error.message}`);
    return null;
  }
}

function duplicateGroups(items, signature) {
  const groups = new Map();
  items.forEach((item) => {
    const key = signature(item);
    if (!key) return;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(item);
  });
  return [...groups.values()].filter((group) => group.length > 1);
}

function listJavaScriptFiles(directory, prefix = "") {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    if ([".git", "node_modules"].includes(entry.name)) return [];
    const relativePath = path.join(prefix, entry.name);
    const absolutePath = path.join(directory, entry.name);
    if (entry.isDirectory()) return listJavaScriptFiles(absolutePath, relativePath);
    return entry.isFile() && entry.name.endsWith(".js") ? [relativePath] : [];
  });
}

function checkSyntax() {
  listJavaScriptFiles(rootDir).forEach((relativePath) => {
    capture(`syntax check failed for ${relativePath}`, () => {
      new vm.Script(read(relativePath), { filename: relativePath });
    });
  });
}

function parseHtmlAttributes(source = "") {
  const attributes = {};
  for (const attribute of source.matchAll(
    /([:\w-]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/gu,
  )) {
    attributes[attribute[1].toLowerCase()] = attribute[2] ?? attribute[3] ?? attribute[4] ?? "";
  }
  return attributes;
}

function stripHtmlComments(html) {
  const starts = [...html.matchAll(/<!--/gu)].length;
  const ends = [...html.matchAll(/-->/gu)].length;
  check(starts === ends, `HTML comment delimiters are unbalanced (${starts} starts, ${ends} ends)`);
  return html.replace(/<!--[\s\S]*?-->/gu, "");
}

function isInteractiveTag(tag) {
  if (["button", "select", "textarea", "summary"].includes(tag.tag)) return true;
  if (tag.tag === "input") return tag.attributes.type !== "hidden";
  if (tag.tag === "a") return Object.hasOwn(tag.attributes, "href");
  if (["audio", "video"].includes(tag.tag) && Object.hasOwn(tag.attributes, "controls")) return true;
  if (["button", "link"].includes(tag.attributes.role)) return true;
  if (Object.hasOwn(tag.attributes, "tabindex")) {
    const tabIndex = Number.parseInt(tag.attributes.tabindex, 10);
    return Number.isInteger(tabIndex) && tabIndex >= 0;
  }
  return false;
}

function tagLabel(tag) {
  const suffix = tag.attributes.id
    ? `#${tag.attributes.id}`
    : tag.classes.size
      ? `.${[...tag.classes].join(".")}`
      : "";
  return `<${tag.tag}${suffix}>`;
}

function parseHtmlDocument(html) {
  const source = stripHtmlComments(html);
  const tags = [];
  const stack = [];
  const voidTags = new Set([
    "area",
    "base",
    "br",
    "col",
    "embed",
    "hr",
    "img",
    "input",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr",
  ]);

  for (const match of source.matchAll(/<(\/)?([a-z][\w-]*)(\s[^<>]*?)?>/giu)) {
    const isClosing = Boolean(match[1]);
    const tagName = match[2].toLowerCase();
    if (isClosing) {
      const matchingIndex = stack.map((item) => item.tag).lastIndexOf(tagName);
      if (matchingIndex < 0) {
        addError(`HTML contains unexpected closing tag </${tagName}>`);
        continue;
      }
      if (matchingIndex !== stack.length - 1) {
        addError(
          `HTML closes </${tagName}> before ${stack
            .slice(matchingIndex + 1)
            .map(tagLabel)
            .join(", ")}`,
        );
      }
      stack.length = matchingIndex;
      continue;
    }

    const attributes = parseHtmlAttributes(match[3] || "");
    const tag = {
      attributes,
      classes: new Set((attributes.class || "").split(/\s+/u).filter(Boolean)),
      tag: tagName,
    };
    const interactiveAncestor = isInteractiveTag(tag)
      ? [...stack].reverse().find(isInteractiveTag)
      : null;
    if (interactiveAncestor) {
      addError(`nested interactive controls: ${tagLabel(tag)} is inside ${tagLabel(interactiveAncestor)}`);
    }
    tags.push(tag);

    const isSelfClosing = /\/\s*>$/u.test(match[0]);
    if (!isSelfClosing && !voidTags.has(tagName)) stack.push(tag);
  }

  if (stack.length) {
    addError(`HTML contains unclosed tags: ${stack.map(tagLabel).join(", ")}`);
  }
  return tags;
}

function localAssetCandidates(reference) {
  if (!reference || reference.startsWith("#") || reference.startsWith("//")) return [];
  if (/^[a-z][a-z\d+.-]*:/iu.test(reference)) return [];
  const withoutSuffix = reference.split(/[?#]/u)[0];
  if (!withoutSuffix) return [];

  let decoded;
  try {
    decoded = decodeURIComponent(withoutSuffix);
  } catch {
    addError(`HTML asset reference is not valid URI encoding: ${reference}`);
    return [];
  }

  if (!decoded.startsWith("/")) {
    const resolved = path.resolve(rootDir, decoded);
    const relative = path.relative(rootDir, resolved);
    if (relative.startsWith("..") || path.isAbsolute(relative)) {
      addError(`HTML asset reference escapes the project root: ${reference}`);
      return [];
    }
    return [resolved];
  }

  const rootRelative = decoded.replace(/^\/+/, "");
  const projectPrefix = `${path.basename(rootDir)}/`;
  const candidates = [path.join(rootDir, rootRelative)];
  if (rootRelative.startsWith(projectPrefix)) {
    candidates.push(path.join(rootDir, rootRelative.slice(projectPrefix.length)));
  }
  return candidates;
}

function normalizedScriptSource(reference = "") {
  const withoutSuffix = reference.split(/[?#]/u)[0].replace(/^\.\//u, "").replace(/^\/+/, "");
  const projectPrefix = `${path.basename(rootDir)}/`;
  return withoutSuffix.startsWith(projectPrefix)
    ? withoutSuffix.slice(projectPrefix.length)
    : withoutSuffix;
}

function checkHtmlAndDomContracts(html, appSource) {
  const tags = parseHtmlDocument(html);
  const tagsWithIds = tags.filter((tag) => tag.attributes.id);
  const idGroups = duplicateGroups(tagsWithIds, (tag) => tag.attributes.id);
  if (idGroups.length) {
    addError(
      `HTML contains duplicate ids: ${sample(idGroups.map((group) => group[0].attributes.id))}`,
    );
  }
  const ids = new Set(tagsWithIds.map((tag) => tag.attributes.id));

  tags.forEach((tag) => {
    ["src", "href", "poster"].forEach((attribute) => {
      const reference = tag.attributes[attribute];
      if (!reference) return;
      const candidates = localAssetCandidates(reference);
      if (!candidates.length) return;
      check(candidates.some(fs.existsSync), `missing HTML asset: ${reference}`);
    });
  });

  const scriptTags = tags.filter((tag) => tag.tag === "script");
  const scriptSources = scriptTags
    .filter((tag) => tag.attributes.src)
    .map((tag) => normalizedScriptSource(tag.attributes.src));
  check(
    JSON.stringify(scriptSources) === JSON.stringify(expectedDependencyScripts),
    `HTML dependency scripts must appear exactly in this order: ${expectedDependencyScripts.join(" -> ")}; received ${scriptSources.join(" -> ")}`,
  );
  scriptTags.forEach((tag) => {
    check(!Object.hasOwn(tag.attributes, "async"), `${tagLabel(tag)} must not use async`);
  });
  const studyDataBlock = /<template id="studyDataScripts">([\s\S]*?)<\/template>/u.exec(html)?.[1];
  check(Boolean(studyDataBlock), "HTML must list the study data in <template id=\"studyDataScripts\">");
  const studyDataSources = [...(studyDataBlock || "").matchAll(/<script\b[^>]*\bsrc="([^"]+)"[^>]*>/gu)].map(
    (match) => normalizedScriptSource(match[1]),
  );
  check(
    JSON.stringify(studyDataSources) === JSON.stringify(expectedStudyDataScripts),
    `#studyDataScripts must list exactly, in order: ${expectedStudyDataScripts.join(" -> ")}; received ${studyDataSources.join(" -> ")}`,
  );
  check(
    !/\b(?:defer|async)\b/u.test(studyDataBlock || ""),
    "#studyDataScripts entries are injected in order by app.js and must not use defer or async",
  );
  scriptTags
    .filter((tag) => tag.attributes.src)
    .filter((tag) => expectedEagerScripts.includes(normalizedScriptSource(tag.attributes.src)))
    .forEach((tag) => {
      check(
        Object.hasOwn(tag.attributes, "defer"),
        `${tagLabel(tag)} must use defer so dependency order is preserved without blocking parsing`,
      );
    });
  check(
    /querySelector\(\s*["']#studyDataScripts["']\s*\)/u.test(appSource) && /script\.async = false/u.test(appSource),
    "app.js must load #studyDataScripts in order (async = false)",
  );

  const queriedIds = [...appSource.matchAll(/querySelector\(\s*["']#([^"']+)["']\s*\)/gu)].map(
    (match) => match[1],
  );
  queriedIds.forEach((id) => check(ids.has(id), `app.js queries missing HTML id #${id}`));

  const queriedClasses = [
    ...appSource.matchAll(/querySelector(?:All)?\(\s*["']\.([\w-]+)["']\s*\)/gu),
  ].map((match) => match[1]);
  queriedClasses.forEach((className) => {
    check(
      tags.some((tag) => tag.classes.has(className)),
      `app.js queries missing HTML class .${className}`,
    );
  });

  const revealButton = tags.find((tag) => tag.attributes.id === "cardReveal");
  check(Boolean(revealButton), "HTML must provide the explicit #cardReveal control");
  if (revealButton) {
    check(revealButton.tag === "button", "#cardReveal must be a native button");
    check(revealButton.attributes.type === "button", "#cardReveal must set type=button");
  }
  check(queriedIds.includes("cardReveal"), "app.js must bind #cardReveal");
  check(
    /elements\.cardReveal\.addEventListener\(\s*["']click["']\s*,\s*revealCard/u.test(appSource),
    "app.js must attach revealCard directly to #cardReveal",
  );

  const deckRows = tags.filter((tag) => tag.classes.has("deck-row"));
  check(deckRows.length > 0, "HTML must contain .deck-row module groups");
  deckRows.forEach((tag) => {
    check(tag.attributes.role === "group", `${tagLabel(tag)} must use role=group`);
    check(Boolean(tag.attributes["aria-labelledby"]), `${tagLabel(tag)} needs aria-labelledby`);
  });

  tags
    .filter((tag) => Object.hasOwn(tag.attributes, "aria-controls"))
    .forEach((tag) => {
      const targets = tag.attributes["aria-controls"].split(/\s+/u).filter(Boolean);
      check(targets.length > 0, `${tag.tag} has an empty aria-controls attribute`);
      targets.forEach((target) => {
        check(ids.has(target), `aria-controls references missing #${target}`);
      });
      check(
        Object.hasOwn(tag.attributes, "aria-expanded"),
        `${tag.tag} controlling ${targets.map((target) => `#${target}`).join(", ")} needs aria-expanded`,
      );
    });

  tags.forEach((tag) => {
    ["aria-labelledby", "aria-describedby"].forEach((attribute) => {
      if (!tag.attributes[attribute]) return;
      tag.attributes[attribute]
        .split(/\s+/u)
        .filter(Boolean)
        .forEach((target) => check(ids.has(target), `${attribute} references missing #${target}`));
    });
  });

  const tabDecks = tags
    .filter((tag) => tag.classes.has("tab-button"))
    .map((tag) => tag.attributes["data-deck"])
    .filter(Boolean);
  const duplicateDecks = duplicateGroups(tabDecks, (deck) => deck);
  if (duplicateDecks.length) {
    addError(`duplicate data-deck values in HTML: ${sample(duplicateDecks.map((group) => group[0]))}`);
  }
  return { tabDecks: new Set(tabDecks), tags };
}

const knownN4TemplateFamilies = [
  ["{term}を見ました", "{term}を確認しました", "{term}について友達と話しました"],
  ["{term}についてもっと知りたいです", "{term}に関する説明を読みました", "{term}について友達と話しました"],
  ["{term}について調べました", "{term}に関する文章を読みました", "{term}について友達と話しました"],
  ["{term}に相談しました", "{term}と少し話しました", "{term}が駅で待っています"],
  ["{term}へ行きました", "{term}は駅の近くにあります", "{term}で友達に会いました"],
].map((examples) => examples.map(compactText).sort().join("|"));

const knownN5ForbiddenTemplateFamilies = [
  ["{term}を使います", "{term}を買いました", "{term}は机の上にあります"],
  ["数字の{term}を書きます", "{term}ページを読んでください", "{term}まで数えます"],
  ["{term}に会います", "{term}と話します", "{term}は元気です"],
  ["{term}にあります", "{term}を見てください", "{term}で待ちます"],
].map((examples) => examples.map(compactText).sort().join("|"));

const forbiddenN5Examples = [
  "駅は駅の近くです",
  "一昨日、学校へ行きます",
  "一昨日は忙しいです",
  "昨日、学校へ行きます",
  "昨日は忙しいです",
  "風を見ます",
  "風がきれいです",
  "毎日、死にます",
  "いっしょに死にます",
  "ページを読みます",
  "ページが好きです",
  "千ページを読んでください",
  "万ページを読んでください",
  "食べ物を食べます",
  "飲み物を飲みます",
  "外国人は元気です",
  "雪があります",
  "空があります",
  "机は机の上にあります",
  "エレベーターを買いました",
  "電車を買いました",
  "ポケットを買いました",
  "靴を使います",
  "シャツを使います",
  "スカートを使います",
  "ズボンを使います",
  "セーターを使います",
  "背広を使います",
  "服を使います",
  "ワイシャツを使います",
  "ネクタイを使います",
  "戸を使います",
  "戸を買いました",
  "ドアを使います",
  "ドアを買いました",
  "窓を使います",
  "窓を買いました",
  "門を使います",
  "門を買いました",
  "葉書を使います",
  "封筒を使います",
  "ボタンを使います",
  "砂糖を食べます",
  "塩を食べます",
  "醤油を食べます",
  "バターを食べます",
  "忙しいものが好きです",
  "痛いものが好きです",
  "遅いものが好きです",
  "高いものが好きです",
  "強いものが好きです",
  "遠いものが好きです",
  "広いものが好きです",
  "弱いものが好きです",
  "若いものが好きです",
].map(compactText);

const requiredN5ContentFixtures = new Map([
  ["n5-093", "エレベーターは一階に止まっています"],
  ["n5-092", "駅は学校の近くです"],
  ["n5-121", "一昨日、学校へ行きました"],
  ["n5-162", "今日は風が強いです"],
  ["n5-200", "昨日、学校へ行きました"],
  ["n5-304", "飼っていた魚が昨日死にました"],
  ["n5-284", "このケーキには砂糖が入っています"],
  ["n5-292", "スープに塩を入れすぎました"],
  ["n5-321", "刺身に醤油をつけます"],
  ["n5-352", "この本は千円です"],
  ["n5-367", "空に鳥が飛んでいます"],
  ["n5-392", "机の上に食べ物があります"],
  ["n5-417", "部屋に新しい机を置きました"],
  ["n5-440", "毎朝、電車で学校へ行きます"],
  ["n5-514", "冷たい飲み物を買いました"],
  ["n5-533", "パンにバターを塗ります"],
  ["n5-592", "教科書を一ページずつ読みます"],
  ["n5-604", "この服には大きなポケットがあります"],
  ["n5-633", "この時計は一万円です"],
  ["n5-681", "昨夜、雪が降りました"],
  ["n5-055", "今日は仕事が忙しいです"],
  ["n5-056", "足が痛いです"],
  ["n5-114", "寝る時間が遅いです"],
  ["n5-379", "この時計は高いです"],
  ["n5-692", "弟は体が弱いです"],
  ["n5-711", "若い人がたくさん集まりました"],
]);

function entryTemplateSignature(entry) {
  if (!entry || typeof entry !== "object" || !Array.isArray(entry.examples) || entry.examples.length !== 3) {
    return "";
  }
  const variants = Array.isArray(entry.variants) ? entry.variants : [];
  const terms = [entry.headword, entry.source_form, ...variants]
    .map(compactText)
    .filter(Boolean)
    .sort((left, right) => right.length - left.length);
  return entry.examples
    .map((example) => {
      let sentence = compactText(example?.ja);
      terms.forEach((term) => {
        sentence = sentence.split(term).join("{term}");
      });
      return sentence;
    })
    .sort()
    .join("|");
}

function validateVocabSource(label, data, expectedCount) {
  check(data && Array.isArray(data.entries), `${label} vocabulary must expose entries`);
  if (!Array.isArray(data?.entries)) return;
  check(
    data.schema?.entry_count === data.entries.length,
    `${label} schema.entry_count must match the ${data.entries.length} retained entries`,
  );
  check(
    data.entries.length === expectedCount,
    `${label} entry count: expected ${expectedCount}, received ${data.entries.length}`,
  );

  const requiredFields = [
    "id",
    "headword",
    "reading",
    "romaji",
    "part_of_speech",
    "meaning_zh",
  ];
  data.entries.forEach((entry, index) => {
    if (!entry || typeof entry !== "object" || Array.isArray(entry)) {
      addError(`${label} entry ${index} must be an object`);
      return;
    }
    requiredFields.forEach((field) => {
      check(
        typeof entry[field] === "string" && entry[field].trim(),
        `${label} entry ${entry.id || index} is missing ${field}`,
      );
    });
    if (Object.hasOwn(entry, "speech_reading")) {
      check(
        typeof entry.speech_reading === "string" &&
          entry.speech_reading.trim() &&
          !/[・／/~〜～]/u.test(entry.speech_reading),
        `${label} entry ${entry.id || index} speech_reading must be one directly pronounceable reading`,
      );
    }
    if (Object.hasOwn(entry, "merged_source_ids")) {
      check(
        Array.isArray(entry.merged_source_ids) && entry.merged_source_ids.length > 0,
        `${label} entry ${entry.id || index} merged_source_ids must be a non-empty array`,
      );
      const mergedIds = Array.isArray(entry.merged_source_ids) ? entry.merged_source_ids : [];
      check(
        new Set(mergedIds).size === mergedIds.length,
        `${label} entry ${entry.id || index} repeats a merged source id`,
      );
      mergedIds.forEach((mergedId) => {
        check(
          /^n[45]-\d{3}$/u.test(mergedId) && mergedId !== entry.id,
          `${label} entry ${entry.id || index} has invalid merged source id ${mergedId}`,
        );
      });
    }
    if (Object.hasOwn(entry, "learning_category")) {
      check(
        allowedLearningCategories.has(entry.learning_category),
        `${label} entry ${entry.id || index} has invalid learning_category ${entry.learning_category}`,
      );
    }
    check(
      Array.isArray(entry.examples) && entry.examples.length === 3,
      `${label} entry ${entry.id || index} must contain exactly three examples`,
    );
    if (!Array.isArray(entry.examples)) return;
    entry.examples.forEach((example, exampleIndex) => {
      if (!example || typeof example !== "object" || Array.isArray(example)) {
        addError(`${label} entry ${entry.id || index} example ${exampleIndex + 1} must be an object`);
        return;
      }
      check(
        typeof example.ja === "string" && example.ja.trim(),
        `${label} entry ${entry.id || index} example ${exampleIndex + 1} is missing ja`,
      );
      check(
        typeof example.zh === "string" && example.zh.trim(),
        `${label} entry ${entry.id || index} example ${exampleIndex + 1} is missing zh`,
      );
      check(
        !/[／/]/u.test(example.zh || ""),
        `${label} entry ${entry.id || index} example ${exampleIndex + 1} must use one unambiguous Chinese translation`,
      );
    });
    const duplicateExamples = duplicateGroups(entry.examples, (example) =>
      example && typeof example === "object"
        ? `${compactText(example.ja)}\u0000${compactText(example.zh)}`
        : "",
    );
    if (duplicateExamples.length) {
      addError(`${label} entry ${entry.id || index} repeats an example semantically`);
    }
  });

  const duplicateIds = duplicateGroups(data.entries, (entry) => entry?.id);
  if (duplicateIds.length) {
    addError(
      `${label} duplicate source ids: ${sample(duplicateIds.map((group) => group.map((entry) => entry.id).join("/")))}`,
    );
  }

  const semanticDuplicates = duplicateGroups(data.entries, (entry) =>
    [entry?.headword, entry?.reading, entry?.meaning_zh, entry?.part_of_speech]
      .map(compactText)
      .join("|"),
  );
  if (semanticDuplicates.length) {
    addError(
      `${label} semantic duplicate entries: ${sample(
        semanticDuplicates.map((group) => group.map((entry) => entry.id).join("/")),
      )}`,
    );
  }

  const exampleSetDuplicates = duplicateGroups(data.entries, (entry) =>
    Array.isArray(entry?.examples)
      ? entry.examples
          .map((example) => `${compactText(example?.ja)}\u0000${compactText(example?.zh)}`)
          .sort()
          .join("|")
      : "",
  );
  if (exampleSetDuplicates.length) {
    addError(
      `${label} entries reuse an identical three-example set: ${sample(
        exampleSetDuplicates.map((group) => group.map((entry) => entry.id).join("/")),
      )}`,
    );
  }

  if (label === "N5") {
    const byId = new Map(data.entries.map((entry) => [entry.id, entry]));
    const forbiddenTemplates = data.entries.filter((entry) =>
      knownN5ForbiddenTemplateFamilies.includes(entryTemplateSignature(entry)),
    );
    if (forbiddenTemplates.length) {
      addError(
        `N5 still contains ${forbiddenTemplates.length} entries from confirmed unsafe template families: ${sample(
          forbiddenTemplates.map((entry) => entry.id),
          12,
        )}`,
      );
    }

    const remainingForbiddenExamples = [];
    data.entries.forEach((entry) => {
      (entry.examples || []).forEach((example) => {
        if (forbiddenN5Examples.includes(compactText(example?.ja))) {
          remainingForbiddenExamples.push(`${entry.id}: ${example.ja}`);
        }
      });
    });
    if (remainingForbiddenExamples.length) {
      addError(
        `N5 still contains confirmed unnatural or temporally invalid examples: ${sample(
          remainingForbiddenExamples,
          12,
        )}`,
      );
    }

    requiredN5ContentFixtures.forEach((expectedExample, id) => {
      const entry = data.entries.find((candidate) => candidate.id === id);
      check(Boolean(entry), `N5 content fixture ${id} is missing`);
      check(
        (entry?.examples || []).some(
          (example) => compactText(example?.ja) === compactText(expectedExample),
        ),
        `N5 ${id} must retain the reviewed example ${expectedExample}`,
      );
    });

    ["n5-063", "n5-255", "n5-487", "n5-565", "n5-582", "n5-643", "n5-653", "n5-673", "n5-688"]
      .forEach((id) => {
        check(
          byId.get(id)?.part_of_speech === "numeral/counter",
          `${id} native Japanese counter must be classified as numeral/counter`,
        );
      });
    ["n5-057", "n5-201", "n5-216", "n5-243", "n5-288", "n5-290", "n5-300", "n5-314", "n5-351", "n5-352", "n5-496", "n5-536", "n5-569", "n5-633", "n5-703", "n5-709"]
      .forEach((id) => {
        check(byId.get(id)?.part_of_speech === "numeral", `${id} must be classified as a numeral`);
      });
    check(
      byId.get("n5-050")?.part_of_speech === "interrogative/pronoun",
      "n5-050 いくつ must be classified as an interrogative pronoun, not a counter suffix",
    );
    check(byId.get("n5-100")?.part_of_speech === "pre-noun", "n5-100 大きな must be pre-noun");
    check(byId.get("n5-400")?.part_of_speech === "pre-noun", "n5-400 小さな must be pre-noun");
    check(
      byId.get("n5-403")?.part_of_speech === "noun/adverb",
      "n5-403 近く must model both noun and adverb uses",
    );
    check(
      byId.get("n5-682")?.headword === "ゆっくり" &&
        byId.get("n5-682")?.reading === "ゆっくり" &&
        byId.get("n5-682")?.variants?.includes("ゆっくりと"),
      "n5-682 must model dictionary-form ゆっくり and optional-particle ゆっくりと separately",
    );
    check(
      byId.get("n5-036")?.part_of_speech === "noun/adverb" &&
        byId.get("n5-036")?.variants?.includes("あまり"),
      "n5-036 余り must document its common kana adverb use",
    );
    check(
      byId.get("n5-212")?.reading === "キログラム" &&
        byId.get("n5-212")?.romaji === "kiroguramu",
      "n5-212 must use the full キログラム reading",
    );
    check(
      byId.get("n5-213")?.reading === "キロメートル" &&
        byId.get("n5-213")?.romaji === "kiromeetoru",
      "n5-213 must use the full キロメートル reading",
    );
    check(
      byId.get("n5-360")?.reading === "そして" && byId.get("n5-360")?.romaji === "soshite",
      "n5-360 そして must not use the different expression そうして as its reading",
    );
    check(
      byId.get("n5-590")?.speech_reading === "ふん" &&
        byId.get("n5-590")?.examples?.[0]?.ja === "十分間待ちます。",
      "n5-590 must separate its pronounceable TTS sample and unambiguous counter example",
    );
    check(
      byId.get("n5-697")?.headword === "ラジカセ" && byId.get("n5-697")?.reading === "ラジカセ",
      "n5-697 must use the standard abbreviation ラジカセ",
    );
    ["n5-714", "n5-715"].forEach((id) => {
      check(byId.get(id)?.part_of_speech === "pronoun", `${id} 私 must be classified as a pronoun`);
    });
    const forbiddenReviewedExamples = [
      "指で地図を差します",
      "名前をつけます",
      "道は太くありません",
    ].map(compactText);
    data.entries.forEach((entry) => {
      (entry.examples || []).forEach((example) => {
        check(
          !forbiddenReviewedExamples.includes(compactText(example.ja)),
          `${entry.id} reintroduced a confirmed spelling or collocation error: ${example.ja}`,
        );
      });
    });
  }

  if (label === "N4") {
    const byId = new Map(data.entries.map((entry) => [entry.id, entry]));
    check(byId.get("n4-068")?.part_of_speech === "numeral", "n4-068 億 must be a numeral");
    check(
      byId.get("n4-033")?.kanji_readings?.some(
        ({ form, reading }) => form === "一杯" && reading === "いっぱい",
      ),
      "n4-033 いっぱい must document the 一杯 spelling for its one-cup sense",
    );
    check(
      !byId.get("n4-661")?.meaning_zh?.includes("辞职") &&
        byId.get("n4-661")?.note_zh?.includes("辞める"),
      "n4-661 止める / やめる must remain distinct from 辞める / resign",
    );
    const administrativeCapital = data.entries.find((entry) => entry.id === "n4-465");
    const reviewedCapitalExamples = [
      "日本の都道府県では、都は東京都だけです",
      "東京都の都庁は新宿にあります",
    ].map(compactText);
    check(Boolean(administrativeCapital), "N4 content fixture n4-465 is missing");
    check(
      administrativeCapital?.reading === "と" && administrativeCapital?.romaji === "to",
      "N4 n4-465 都 must retain the administrative reading と / to",
    );
    reviewedCapitalExamples.forEach((expectedExample) => {
      check(
        (administrativeCapital?.examples || []).some(
          (example) => compactText(example?.ja) === expectedExample,
        ),
        `N4 n4-465 must retain reviewed administrative example ${expectedExample}`,
      );
    });

    const templatedEntries = data.entries.filter((entry) =>
      knownN4TemplateFamilies.includes(entryTemplateSignature(entry)),
    );
    if (templatedEntries.length) {
      addError(
        `N4 still contains ${templatedEntries.length} entries from the five forbidden template families: ${sample(
          templatedEntries.map((entry) => entry.id),
          12,
        )}`,
      );
    }

    const normalizedTemplateDuplicates = duplicateGroups(data.entries, entryTemplateSignature);
    if (normalizedTemplateDuplicates.length) {
      addError(
        `N4 normalized three-example template signatures are reused across entries: ${sample(
          normalizedTemplateDuplicates.map((group) =>
            group.map((entry) => entry.id).join("/"),
          ),
          12,
        )}`,
      );
    }
    check(
      byId.get("n4-246")?.headword === "混む" && byId.get("n4-246")?.variants?.includes("込む"),
      "n4-246 must keep 混む as the canonical crowding spelling and 込む as a variant",
    );
    check(byId.get("n4-376")?.headword === "全然", "n4-376 must canonically merge 全然/ぜんぜん");
    check(byId.get("n4-612")?.headword === "真面目", "n4-612 must canonically merge 真面目/まじめ");
    check(
      byId.get("n4-615")?.romaji === "matawa" &&
        byId.get("n4-615")?.examples?.every((example) => example.zh.includes("或")),
      "n4-615 または must mean or and use particle pronunciation wa",
    );
    check(
      byId.get("n4-647")?.headword === "最も" && byId.get("n4-647")?.meaning_zh === "最；最为",
      "n4-647 must not conflate 最も with 尤も",
    );
    check(!byId.has("n4-756"), "the malformed n4-756 ～月 entry must remain removed");
  }

  if (label === "N3") {
    data.entries.forEach((entry) => {
      check(/^n3-\d{4}$/u.test(entry.id), `N3 source id has unexpected format: ${entry.id}`);
      check(entry.jlpt === "N3", `${entry.id} must be labelled jlpt N3`);
      check(!Object.hasOwn(entry, "merged_source_ids"), `${entry.id} is new in N3 and has no merged sources`);
    });
    const normalizedTemplateDuplicates = duplicateGroups(data.entries, entryTemplateSignature);
    if (normalizedTemplateDuplicates.length) {
      addError(
        `N3 normalized three-example template signatures are reused across entries: ${sample(
          normalizedTemplateDuplicates.map((group) =>
            group.map((entry) => entry.id).join("/"),
          ),
          12,
        )}`,
      );
    }
  }
}

const headwordKanaRomaji = new Map(Object.entries({
  あ: "a", い: "i", う: "u", え: "e", お: "o",
  か: "ka", き: "ki", く: "ku", け: "ke", こ: "ko",
  が: "ga", ぎ: "gi", ぐ: "gu", げ: "ge", ご: "go",
  さ: "sa", し: "shi", す: "su", せ: "se", そ: "so",
  ざ: "za", じ: "ji", ず: "zu", ぜ: "ze", ぞ: "zo",
  た: "ta", ち: "chi", つ: "tsu", て: "te", と: "to",
  だ: "da", ぢ: "ji", づ: "zu", で: "de", ど: "do",
  な: "na", に: "ni", ぬ: "nu", ね: "ne", の: "no",
  は: "ha", ひ: "hi", ふ: "fu", へ: "he", ほ: "ho",
  ば: "ba", び: "bi", ぶ: "bu", べ: "be", ぼ: "bo",
  ぱ: "pa", ぴ: "pi", ぷ: "pu", ぺ: "pe", ぽ: "po",
  ま: "ma", み: "mi", む: "mu", め: "me", も: "mo",
  や: "ya", ゆ: "yu", よ: "yo",
  ら: "ra", り: "ri", る: "ru", れ: "re", ろ: "ro",
  わ: "wa", を: "o", ゔ: "vu",
  ぁ: "a", ぃ: "i", ぅ: "u", ぇ: "e", ぉ: "o",
}));
const headwordDigraphRomaji = new Map(Object.entries({
  しゃ: "sha", しゅ: "shu", しょ: "sho", しぇ: "she",
  じゃ: "ja", じゅ: "ju", じょ: "jo", じぇ: "je",
  ちゃ: "cha", ちゅ: "chu", ちょ: "cho", ちぇ: "che",
  てぃ: "ti", でぃ: "di", ふぁ: "fa", ふぃ: "fi", ふぇ: "fe", ふぉ: "fo",
  うぃ: "wi", うぇ: "we", うぉ: "wo",
}));

function escapeRegExp(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/gu, "\\$&");
}

// Builds a pattern for the reviewed Hepburn spelling of one headword reading:
// は / へ may be the particles wa / e, を is always o, n' is required inside a
// word before a vowel or y, and a space may separate any two morae.
function headwordRomajiPattern(reading) {
  const kana = [...reading.replace(/[~〜～]/gu, "")]
    .map((character) => {
      const code = character.codePointAt(0);
      return code >= 0x30a1 && code <= 0x30f6 ? String.fromCodePoint(code - 0x60) : character;
    })
    .join("");
  const morae = [];
  for (let index = 0; index < kana.length; index += 1) {
    const pair = kana.slice(index, index + 2);
    if (headwordDigraphRomaji.has(pair)) {
      morae.push({ kana: pair, romaji: headwordDigraphRomaji.get(pair) });
      index += 1;
    } else if (/[ゃゅょ]/u.test(kana[index + 1] || "") && headwordKanaRomaji.has(kana[index])) {
      const base = headwordKanaRomaji.get(kana[index]);
      const glide = { ゃ: "a", ゅ: "u", ょ: "o" }[kana[index + 1]];
      morae.push({ kana: pair, romaji: `${base.slice(0, -1)}y${glide}` });
      index += 1;
    } else {
      morae.push({ kana: kana[index], romaji: headwordKanaRomaji.get(kana[index]) ?? null });
    }
  }
  let pattern = "";
  let previous = "";
  morae.forEach((mora, index) => {
    const next = morae[index + 1];
    let piece;
    if (mora.kana === "ー") {
      piece = previous ? escapeRegExp(previous.at(-1)) : null;
    } else if (mora.kana === "っ") {
      piece = next?.romaji ? escapeRegExp(next.romaji[0] === "c" ? "t" : next.romaji[0]) : null;
    } else if (mora.kana === "ん") {
      piece = next?.romaji && /^[aeiouy]/u.test(next.romaji) ? "n(?:'| )" : "n";
    } else if (mora.kana === "は") {
      piece = "(?:ha|wa)";
    } else if (mora.kana === "へ") {
      piece = "(?:he|e)";
    } else {
      piece = mora.romaji === null ? null : escapeRegExp(mora.romaji);
    }
    if (piece === null) {
      pattern = null;
      return;
    }
    if (pattern !== null) pattern += `${pattern ? " ?" : ""}${piece}`;
    if (mora.romaji) previous = mora.romaji;
  });
  return pattern === null ? null : new RegExp(`^${pattern}$`, "u");
}

// Readings whose final は is part of the word and read ha (母 はは).
const readingFinalHaWords = new Set(["はは"]);

// The headword romaji is shown on every vocabulary card; check it against the
// reading so particle spellings (では → dewa, を → o) and n' cannot drift.
function validateHeadwordRomaji(label, data) {
  (data?.entries || []).forEach((entry) => {
    const readings = String(entry.reading || "").split("・");
    const romajiForms = String(entry.romaji || "").split(" / ");
    if (readings.length !== romajiForms.length) {
      addError(`${label} ${entry.id} romaji ${entry.romaji} does not list one form per reading`);
      return;
    }
    readings.forEach((reading, index) => {
      const romaji = romajiForms[index];
      const affixed = /[~〜～]/u.test(reading);
      check(
        /^[a-z' ~]+$/u.test(romaji) && !/^ | $|  /u.test(romaji),
        `${label} ${entry.id} romaji ${romaji} must be lower-case Hepburn with single spaces`,
      );
      check(
        affixed === romaji.includes("~"),
        `${label} ${entry.id} romaji ${romaji} must mark the affix with ~ exactly when the reading does`,
      );
      const pattern = headwordRomajiPattern(reading);
      check(Boolean(pattern), `${label} ${entry.id} reading ${reading} has kana the romaji check cannot spell`);
      if (!pattern) return;
      check(
        pattern.test(romaji.replace(/~/gu, "")),
        `${label} ${entry.id} romaji ${romaji} does not spell reading ${reading}`,
      );
      if (reading.includes("では")) {
        check(/de ?wa/u.test(romaji), `${label} ${entry.id} romaji ${romaji} must spell では as dewa`);
      }
      // A final は after other kana is the fused topic particle (または,
      // あるいは, こんにちは, 実は) and is read wa; the pattern above accepts
      // either spelling, and the word audio is spoken from this romaji.
      if (/.は$/u.test(reading) && !readingFinalHaWords.has(reading)) {
        check(/wa$/u.test(romaji), `${label} ${entry.id} romaji ${romaji} must spell the final は of ${reading} as wa`);
      }
    });
  });
}

// Pure grammar patterns are taught by grammar cards only (see CLAUDE.md);
// retired vocabulary cards migrate through retiredVocabSourceIds.
// Bare forms are listed for particles and formal nouns; verbs and adjectives that
// are also ordinary words (始める, 出す) are only forbidden as ～ suffix patterns.
const grammarOnlyVocabHeadwords = new Set([
  "ため", "ために", "について", "によると", "ばかり", "だけ", "など", "つもり", "はず",
  "～ため", "～ために", "～について", "～によると", "～ばかり", "～だけ", "～など", "～つもり",
  "～はず", "～がる", "～やすい", "～にくい", "～まま", "～おき", "～始める", "～終わる", "～出す",
  "～てしまう",
  // N3 grammar patterns
  "うちに", "とたん", "につれて", "にしたがって", "おかげで", "せいで", "によって", "に対して", "に関して", "として", "にとって", "わりに",
  "くせに", "に違いない", "に決まっている", "っけ", "っぽい", "がち", "ついでに", "ごとに", "にかけて", "をはじめ", "を通して", "を通じて",
  "をこめて", "をもとに", "に比べて", "に加えて", "っぱなし", "だらけ", "べき",
  "～うちに", "～最中に", "～とたん", "～とともに", "～につれて", "～にしたがって", "～ばかりでなく", "～だけでなく", "～おかげで", "～せいで",
  "～によって", "～に対して", "～に関して", "～として", "～にとって", "～にしては", "～わりに", "～くせに", "～わけだ", "～わけではない", "～に違いない",
  "～に決まっている", "～っけ", "～っぽい", "～がち", "～気味", "～ことはない", "～しかない", "～さえ", "～こそ", "～なんか", "～なんて", "～ずに",
  "～かわりに", "～に代わって", "～たびに", "～ついでに", "～ごとに", "～にかけて", "～を中心に", "～をはじめ", "～を通して", "～を通じて", "～をこめて",
  "～をもとに", "～に比べて", "～に加えて", "～とおり", "～どおり", "～っぱなし", "～きる", "～きれない", "～かける", "～直す", "～合う", "～込む",
  "～たて", "～だらけ", "～向き", "～向け", "～的", "～べきだ", "～み", "～一方だ", "～おそれがある", "～ぶり",
]);

function validateGrammarOnlyVocab(n5Data, n4Data, n3Data) {
  [...(n5Data?.entries || []), ...(n4Data?.entries || []), ...(n3Data?.entries || [])].forEach((entry) => {
    [...new Set([entry.headword, ...(entry.variants || [])])].forEach((form) => {
      const normalized = String(form || "").replace(/[~〜]/gu, "～");
      check(
        !grammarOnlyVocabHeadwords.has(normalized),
        `${entry.id} ${form} is a grammar pattern and must be taught by a grammar card`,
      );
    });
  });
}

function validateVocabLevelBoundaries(n5Data, n4Data, n3Data) {
  const signature = (entry) =>
    `${canonicalText(entry?.headword)}\u0000${canonicalText(entry?.reading)}`;
  [["N5", n5Data], ["N4", n4Data], ["N3", n3Data]].forEach(([label, data]) => {
    const duplicates = duplicateGroups(data.entries, signature);
    if (duplicates.length) {
      addError(
        `${label} repeats an exact headword/reading entry: ${sample(
          duplicates.map((group) => group.map((entry) => entry.id).join("/")),
        )}`,
      );
    }
  });

  const n4BySignature = new Map(n4Data.entries.map((entry) => [signature(entry), entry]));
  const overlaps = n5Data.entries.flatMap((n5Entry) => {
    const n4Entry = n4BySignature.get(signature(n5Entry));
    return n4Entry ? [[n5Entry, n4Entry]] : [];
  });
  const actualPairs = new Set(overlaps.map(([n5Entry, n4Entry]) => `${n5Entry.id}/${n4Entry.id}`));
  allowedCrossLevelVocabOverlaps.forEach((pair) => {
    check(actualPairs.has(pair), `reviewed distinct-sense cross-level pair is missing: ${pair}`);
  });
  overlaps.forEach(([n5Entry, n4Entry]) => {
    const pair = `${n5Entry.id}/${n4Entry.id}`;
    check(
      allowedCrossLevelVocabOverlaps.has(pair),
      `unreviewed exact cross-level vocabulary overlap: ${pair} ${n5Entry.headword}`,
    );
    check(
      canonicalText(n5Entry.meaning_zh) !== canonicalText(n4Entry.meaning_zh) &&
        n5Entry.note_zh && n4Entry.note_zh,
      `${pair} must document genuinely distinct meanings in both level notes`,
    );
  });

  // N3 is built from words the lower levels do not teach: an exact
  // headword/reading match with N5 or N4 needs a reviewed distinct-sense pair.
  const lowerBySignature = new Map(
    [...n5Data.entries, ...n4Data.entries].map((entry) => [signature(entry), entry]),
  );
  const n3Overlaps = n3Data.entries.flatMap((n3Entry) => {
    const lowerEntry = lowerBySignature.get(signature(n3Entry));
    return lowerEntry ? [[lowerEntry, n3Entry]] : [];
  });
  const actualN3Pairs = new Set(n3Overlaps.map(([lowerEntry, n3Entry]) => `${lowerEntry.id}/${n3Entry.id}`));
  allowedN3CrossLevelVocabOverlaps.forEach((pair) => {
    check(actualN3Pairs.has(pair), `reviewed distinct-sense N3 cross-level pair is missing: ${pair}`);
  });
  n3Overlaps.forEach(([lowerEntry, n3Entry]) => {
    const pair = `${lowerEntry.id}/${n3Entry.id}`;
    check(
      allowedN3CrossLevelVocabOverlaps.has(pair),
      `unreviewed exact cross-level vocabulary overlap: ${pair} ${n3Entry.headword}`,
    );
    check(
      canonicalText(lowerEntry.meaning_zh) !== canonicalText(n3Entry.meaning_zh) &&
        lowerEntry.note_zh && n3Entry.note_zh,
      `${pair} must document genuinely distinct meanings in both level notes`,
    );
  });

  const allEntries = [...n5Data.entries, ...n4Data.entries, ...n3Data.entries];
  const actualCategories = new Map(
    allEntries
      .filter((entry) => entry.learning_category)
      .map((entry) => [entry.id, entry.learning_category]),
  );
  expectedLearningCategories.forEach((category, entryId) => {
    check(
      actualCategories.get(entryId) === category,
      `${entryId} must retain reviewed learning_category ${category}`,
    );
  });
  actualCategories.forEach((category, entryId) => {
    check(
      expectedLearningCategories.get(entryId) === category,
      `unexpected learning_category ${category} on ${entryId}`,
    );
  });
}

function stripSentencePeriods(text = "") {
  return String(text).trim().replace(/[。．.]+$/gu, "");
}

function validateGrammarSource(grammarData, expectedCount) {
  check(grammarData && Array.isArray(grammarData.entries), "grammar-data.js must expose entries");
  if (!Array.isArray(grammarData?.entries)) return;
  check(
    grammarData.entries.length === expectedCount,
    `grammar entry count: expected ${expectedCount}, received ${grammarData.entries.length}`,
  );
  const requiredFields = [
    "answerJa",
    "contrast",
    "formation",
    "group",
    "id",
    "level",
    "meaningZh",
    "pattern",
    "promptZh",
  ];
  const groups = Array.isArray(grammarData.groups) ? grammarData.groups : [];
  check(groups.length > 0, "grammar-data.js must define groups");
  const groupsById = new Map(groups.map((group) => [group.id, group]));
  check(groupsById.size === groups.length, "grammar group ids must be unique");
  groups.forEach((group) => {
    check(
      /^n[345]-[a-z]+$/u.test(group.id) && group.id.startsWith(String(group.level).toLowerCase()),
      `grammar group ${group.id} id must start with its level`,
    );
    check(typeof group.label === "string" && group.label.trim(), `grammar group ${group.id} needs a label`);
    check(
      grammarData.entries.some((entry) => entry.group === group.id),
      `grammar group ${group.id} has no entries`,
    );
  });
  grammarData.entries.forEach((entry, index) => {
    if (!entry || typeof entry !== "object" || Array.isArray(entry)) {
      addError(`grammar entry ${index} must be an object`);
      return;
    }
    requiredFields.forEach((field) => {
      check(
        typeof entry[field] === "string" && entry[field].trim(),
        `grammar entry ${entry.id || index} is missing ${field}`,
      );
    });
    check(["N3", "N4", "N5"].includes(entry.level), `grammar entry ${entry.id} has invalid level`);
    check(
      groupsById.get(entry.group)?.level === entry.level,
      `grammar entry ${entry.id} must belong to a group of its own level`,
    );
    // 说明 rows are split on full-width spaces.
    ["contrast", "formation", "meaningZh", "note"].forEach((field) => {
      check(!String(entry[field] || "").includes("　"), `grammar entry ${entry.id}.${field} must not contain a full-width space`);
    });
    // Every example is a fill-in drill, so a point is practised in each of its
    // sentences rather than in one memorised answer.
    const drills = Array.isArray(entry.drills) ? entry.drills : [];
    const examples = Array.isArray(entry.examples) ? entry.examples : [];
    check(
      drills.length === examples.length &&
        new Set(drills.map((drill) => drill?.example)).size === examples.length &&
        drills.every((drill) => Number.isInteger(drill?.example) && examples[drill.example]),
      `grammar entry ${entry.id} needs exactly one drill per example`,
    );
    drills.forEach((drill) => {
      const label = `grammar entry ${entry.id} drill ${drill?.example}`;
      const drillText = stripSentencePeriods(examples[drill?.example]?.ja || "");
      check(
        drillText && typeof drill?.blank === "string" && drill.blank &&
          drillText.split(drill.blank).length === 2,
        `${label} blank must occur exactly once in its example`,
      );
      const distractors = Array.isArray(drill?.distractors) ? drill.distractors : [];
      check(distractors.length === 3, `${label} needs three distractors`);
      const optionTexts = [drill?.blank, ...distractors.map((distractor) => distractor?.text)];
      check(
        new Set(optionTexts).size === 4 && optionTexts.every((text) => typeof text === "string" && text),
        `${label} options must be four different texts`,
      );
      distractors.forEach((distractor) => {
        check(
          typeof distractor?.why === "string" && distractor.why.trim() && !/[。．]$/u.test(distractor.why),
          `${label} distractor ${distractor?.text} needs a reason without a closing period`,
        );
      });
    });
    // 例句 highlight the reviewed pattern span(s) of each sentence, in order.
    examples.forEach((example, exampleIndex) => {
      const text = stripSentencePeriods(example?.ja || "");
      const focus = Array.isArray(example?.focus) ? example.focus : [];
      let from = 0;
      const inOrder = focus.length > 0 && focus.every((span) => {
        if (typeof span !== "string" || !span) return false;
        const at = text.indexOf(span, from);
        if (at < 0) return false;
        from = at + span.length;
        return true;
      });
      check(inOrder, `grammar entry ${entry.id} example ${exampleIndex} needs focus spans found in order`);
    });
    check(
      new RegExp(`^${String(entry.level).toLowerCase()}-grammar-\\d{3}$`, "u").test(entry.id),
      `grammar entry ${entry.id} id does not match its level ${entry.level}`,
    );
    if (Object.hasOwn(entry, "retiredVocabSourceIds")) {
      check(
        Array.isArray(entry.retiredVocabSourceIds) && entry.retiredVocabSourceIds.length > 0,
        `grammar entry ${entry.id || index} retiredVocabSourceIds must be a non-empty array`,
      );
      const retiredIds = Array.isArray(entry.retiredVocabSourceIds)
        ? entry.retiredVocabSourceIds
        : [];
      check(
        new Set(retiredIds).size === retiredIds.length,
        `grammar entry ${entry.id || index} repeats a retired vocabulary source id`,
      );
      retiredIds.forEach((retiredId) => {
        check(
          /^n[45]-\d{3}$/u.test(retiredId),
          `grammar entry ${entry.id || index} has invalid retired vocabulary source id ${retiredId}`,
        );
      });
    }
    check(
      Array.isArray(entry.examples) && entry.examples.length === 3,
      `grammar entry ${entry.id || index} must contain exactly three examples`,
    );
    (Array.isArray(entry.examples) ? entry.examples : []).forEach((example, exampleIndex) => {
      if (!example || typeof example !== "object" || Array.isArray(example)) {
        addError(`grammar entry ${entry.id || index} example ${exampleIndex + 1} must be an object`);
        return;
      }
      check(
        typeof example.ja === "string" && example.ja.trim(),
        `grammar entry ${entry.id || index} example ${exampleIndex + 1} is missing ja`,
      );
      check(
        typeof example.zh === "string" && example.zh.trim(),
        `grammar entry ${entry.id || index} example ${exampleIndex + 1} is missing zh`,
      );
      check(
        !/[／/]/u.test(example.zh || ""),
        `grammar entry ${entry.id || index} example ${exampleIndex + 1} must use one unambiguous Chinese translation`,
      );
    });
  });
  const duplicateIds = duplicateGroups(grammarData.entries, (entry) => entry?.id);
  if (duplicateIds.length) {
    addError(`duplicate grammar ids: ${sample(duplicateIds.map((group) => group[0].id))}`);
  }
  const semanticDuplicates = duplicateGroups(grammarData.entries, (entry) =>
    [entry?.level, entry?.pattern, entry?.meaningZh, entry?.formation].map(compactText).join("|"),
  );
  if (semanticDuplicates.length) {
    addError(
      `semantic duplicate grammar entries: ${sample(
        semanticDuplicates.map((group) => group.map((entry) => entry.id).join("/")),
      )}`,
    );
  }

  const exampleRecords = grammarData.entries.flatMap((entry) =>
    (entry.examples || []).map((example) => ({ entryId: entry.id, ...example })),
  );
  const duplicateExamples = duplicateGroups(
    exampleRecords,
    (example) => `${compactText(example?.ja)}\u0000${compactText(example?.zh)}`,
  );
  if (duplicateExamples.length) {
    addError(
      `grammar entries repeat exact examples: ${sample(
        duplicateExamples.map((group) => group.map((example) => example.entryId).join("/")),
        10,
      )}`,
    );
  }

  const grammarById = new Map(grammarData.entries.map((entry) => [entry.id, entry]));
  const requireFragments = (id, field, fragments) => {
    const entry = grammarById.get(id);
    check(Boolean(entry), `grammar regression fixture ${id} is missing`);
    fragments.forEach((fragment) => {
      check(
        String(entry?.[field] || "").includes(fragment),
        `${id}.${field} must retain reviewed fragment ${fragment}`,
      );
    });
  };
  // 〜で and 〜の were split into one card per use (场所/手段/原因, 连接/代替名词).
  requireFragments("n5-grammar-091", "meaningZh", ["原因"]);
  requireFragments("n5-grammar-010", "formation", ["N + の + N"]);
  requireFragments("n5-grammar-092", "formation", ["な形 + な + の"]);
  requireFragments("n5-grammar-012", "formation", ["語幹 + なだけ", "过去/否定普通形 + だけ"]);
  requireFragments("n5-grammar-015", "formation", ["な形/N肯定非过去", "过去/否定普通形 + か"]);
  requireFragments("n5-grammar-033", "formation", ["いい → よすぎる", "ない → なさすぎる"]);
  requireFragments("n5-grammar-043", "formation", ["語幹/N + なので", "过去/否定普通形 + ので"]);
  requireFragments("n5-grammar-044", "formation", ["丁寧形 + けど"]);
  requireFragments("n5-grammar-045", "formation", ["丁寧形 + けれども"]);
  requireFragments("n5-grammar-063", "formation", ["动作性N"]);
  requireFragments("n5-grammar-067", "formation", ["いい → よくなる"]);
  requireFragments("n5-grammar-068", "formation", ["語幹/N + なんです", "过去/否定普通形 + んです"]);
  requireFragments("n5-grammar-069", "formation", ["語幹/N + なのです", "过去/否定普通形 + のです"]);
  requireFragments("n5-grammar-073", "formation", ["語幹 + なとき", "N + のとき"]);
  requireFragments("n5-grammar-074", "formation", ["語幹/N + でしょう", "过去/否定普通形 + でしょう"]);
  requireFragments("n5-grammar-075", "formation", ["語幹/N + だろう", "过去/否定普通形 + だろう"]);
  requireFragments("n5-grammar-030", "note", ["〜ている／〜でいる", "〜てる／〜でる"]);
  requireFragments("n4-grammar-001", "formation", ["語幹 + な間", "N + の間"]);
  requireFragments("n4-grammar-002", "formation", ["語幹 + な間に", "N + の間に"]);
  requireFragments("n4-grammar-005", "formation", ["う段→え段 + ば", "いい→よければ"]);
  requireFragments("n4-grammar-006", "formation", ["語幹 + な場合は", "N + の場合は"]);
  requireFragments("n4-grammar-012", "formation", ["なのではないか", "过去・否定普通形"]);
  requireFragments("n4-grammar-013", "formation", ["V/い形普通形", "な形/N肯定非过去"]);
  requireFragments("n4-grammar-018", "formation", ["あります → ございます"]);
  requireFragments("n4-grammar-020", "formation", ["語幹 + なはず", "N + のはず"]);
  requireFragments("n4-grammar-021", "formation", ["語幹 + なはずがない", "N + のはずがない"]);
  requireFragments("n4-grammar-026", "formation", ["な形/N肯定非过去", "过去/否定普通形 + かどうか"]);
  requireFragments("n4-grammar-029", "formation", ["な形/N肯定非过去", "过去/否定普通形 + かもしれない"]);
  requireFragments("n4-grammar-030", "formation", ["な形/N肯定非过去", "过去/否定普通形 + かな"]);
  requireFragments("n4-grammar-033", "formation", ["时间点 + ごろ", "語幹 + な頃", "N + の頃"]);
  requireFragments("n4-grammar-034", "formation", ["語幹 + なこと", "N + であること"]);
  requireFragments("n4-grammar-039", "formation", ["いい→よくする"]);
  requireFragments("n4-grammar-042", "formation", ["い形 + まま", "な形語幹 + なまま"]);
  requireFragments("n4-grammar-044", "formation", ["な形/N肯定非过去", "过去・否定普通形"]);
  requireFragments("n4-grammar-054", "formation", ["な形/N肯定非过去", "过去/否定普通形 + なら"]);
  requireFragments("n4-grammar-057", "formation", ["語幹 + なことに気がつく", "N + であることに気がつく"]);
  requireFragments("n4-grammar-058", "formation", ["いい→よく見える"]);
  requireFragments("n4-grammar-062", "formation", ["語幹/N + なのに", "过去/否定普通形 + のに"]);
  requireFragments("n4-grammar-064", "formation", ["なのは", "过去・否定普通形 + のは"]);
  requireFragments("n4-grammar-065", "pattern", ["お／ご〜ください"]);
  requireFragments("n4-grammar-066", "pattern", ["お／ご〜になる"]);
  requireFragments("n4-grammar-140", "note", ["按い形容词活用", "子供らしく"]);
  requireFragments("n4-grammar-073", "formation", ["词尾为「す」的动词不缩约", "来る→来させられる"]);
  requireFragments("n4-grammar-088", "formation", ["いい→よかったら", "ではなかったら"]);
  requireFragments("n4-grammar-091", "formation", ["いい→よくて", "ではなくて"]);
  requireFragments("n4-grammar-102", "formation", ["〜てしまう → 〜ちゃう", "〜でしまう → 〜じゃう"]);
  requireFragments("n4-grammar-107", "formation", ["いい→よくても", "ではなくても"]);
  requireFragments("n4-grammar-108", "formation", ["非过去普通形", "語幹/N + だと", "否定非过去普通形"]);
  requireFragments("n4-grammar-119", "formation", ["う→われる"]);
  requireFragments("n4-grammar-125", "formation", ["語幹 + なようだ", "过去・否定普通形 + ようだ"]);
  requireFragments("n4-grammar-126", "formation", ["上述形态 + ように + V/形容詞", "ような + N"]);
  requireFragments("n4-grammar-133", "note", ["有意志行为", "〜ように"]);
  requireFragments("n4-grammar-134", "formation", ["な形語幹 + な + ため", "N + の + ため"]);
  requireFragments("n4-grammar-135", "formation", ["N + について", "N + についての + N"]);
  requireFragments("n4-grammar-136", "note", ["消息来源", "〜そうだ"]);
  requireFragments("n4-grammar-137", "note", ["净是", "刚刚"]);
  check(!grammarById.has("n4-grammar-059"), "redundant n4-grammar-059 must remain removed");
  check(
    !grammarById.get("n4-grammar-018")?.meaningZh.includes("是"),
    "n4-grammar-018 ございます must not be conflated with でございます",
  );
  check(
    !grammarById.get("n4-grammar-040")?.meaningZh.includes("急忙"),
    "n4-grammar-040 急に must not be translated as 急忙地",
  );
  check(
    grammarById.get("n5-grammar-020")?.examples?.some(
      (example) => example.ja === "日本語の勉強は大変ではありません。" &&
        example.zh === "学习日语并不辛苦。",
    ),
    "n5-grammar-020 must retain the corrected non-opposite translation",
  );
  check(
    grammarById.get("n4-grammar-104")?.examples?.every((example) =>
      /てやり/u.test(example.ja),
    ),
    "every n4-grammar-104 example must directly demonstrate Vてやる",
  );
  check(
    grammarById.get("n5-grammar-081")?.examples?.[1]?.ja === "この漢字をどうやって覚えますか。",
    "n5-grammar-081 must demonstrate a genuine method question",
  );
  check(
    grammarById.get("n4-grammar-055")?.examples?.[2]?.zh === "不懂的地方去问老师。",
    "n4-grammar-055 must retain the complete command translation",
  );
  check(
    grammarById.get("n4-grammar-118")?.examples?.[2]?.ja === "『お花見』って、どういう意味ですか。",
    "n4-grammar-118 must directly demonstrate って",
  );
  check(
    grammarById.get("n4-grammar-120")?.examples?.[0]?.ja ===
      "兄は背が高いですが、私は背が低いです。",
    "n4-grammar-120 must use 背が低い for a person's height",
  );

  const visibleAdjective = grammarData.entries.find((entry) => entry.id === "n4-grammar-058");
  check(Boolean(visibleAdjective), "grammar fixture n4-grammar-058 is missing");
  check(
    visibleAdjective?.formation.includes("い形去い + く見える") &&
      !visibleAdjective?.formation.includes("い形 + に見える"),
    "n4-grammar-058 must model い-adjectives as い形去い + く見える",
  );
}

function validateCardSchema(cards, tabDecks) {
  const requiredStringFields = ["id", "deck", "type", "prompt", "answer", "speech"];
  const invalidCards = [];
  cards.forEach((card, index) => {
    const missing = requiredStringFields.filter(
      (field) => typeof card[field] !== "string" || !card[field].trim(),
    );
    if (missing.length) invalidCards.push(`${card.id || index} missing ${missing.join(",")}`);
    check(
      Object.hasOwn(card, "meta") && typeof card.meta === "string",
      `card ${card.id || index} must provide string meta (blank is allowed)`,
    );
    check(
      Object.hasOwn(card, "frontSpeech") && typeof card.frontSpeech === "string",
      `card ${card.id || index} must explicitly model frontSpeech (blank is allowed)`,
    );
    check(
      allowedLanguageTags.has(card.promptLang),
      `card ${card.id || index} must provide an allowed promptLang (${[...allowedLanguageTags].join(", ")})`,
    );
    check(
      allowedLanguageTags.has(card.answerLang),
      `card ${card.id || index} must provide an allowed answerLang (${[...allowedLanguageTags].join(", ")})`,
    );
    if (card.subtle) {
      check(
        allowedLanguageTags.has(card.subtleLang),
        `card ${card.id || index} has visible subtle text without an allowed subtleLang`,
      );
    } else if (Object.hasOwn(card, "subtleLang") && card.subtleLang) {
      check(
        allowedLanguageTags.has(card.subtleLang),
        `card ${card.id || index} has an unsupported subtleLang ${card.subtleLang}`,
      );
    }
    check(tabDecks.has(card.deck), `card ${card.id || index} maps to missing deck ${card.deck}`);
    if (card.isVocab || card.isGrammar || Object.hasOwn(card, "examples")) {
      check(Array.isArray(card.examples), `card ${card.id || index} must provide an examples array`);
    }
    if (
      [
        "vocab-zh-ja",
        "vocab-n4-zh-ja",
        "vocab-n3-zh-ja",
        "grammar-n5-zh-ja",
        "grammar-n4-zh-ja",
        "grammar-n3-zh-ja",
      ].includes(card.deck)
    ) {
      check(!card.frontSpeech, `${card.id} must not expose its Japanese answer as frontSpeech`);
    }
  });
  if (invalidCards.length) addError(`generated card schema failures: ${sample(invalidCards, 10)}`);

  const duplicateIds = duplicateGroups(cards, (card) => card.id);
  if (duplicateIds.length) {
    addError(
      `duplicate generated card ids: ${sample(duplicateIds.map((group) => group[0].id), 10)}`,
    );
  }

  const semanticDuplicates = duplicateGroups(cards, (card) =>
    [card.deck, card.prompt, card.answer, card.subtle, card.meta, card.speech]
      .map(canonicalText)
      .join("|"),
  );
  if (semanticDuplicates.length) {
    addError(
      `semantic duplicate generated cards: ${sample(
        semanticDuplicates.map((group) => group.map((card) => card.id).join("/")),
        10,
      )}`,
    );
  }
}

function validateDisplayedRomaji(cards) {
  const uniqueExamples = new Map();
  cards.forEach((card) => {
    (Array.isArray(card.examples) ? card.examples : []).forEach((example, index) => {
      if (!example || typeof example !== "object" || Array.isArray(example)) return;
      const key = JSON.stringify([
        example.ja,
        example.zh,
        example.romaji || "",
        example.romajiStatus,
        example.romajiUnavailable,
        example.hasRomaji,
      ]);
      if (!uniqueExamples.has(key)) uniqueExamples.set(key, { cardId: card.id, example, index });
    });
  });

  const japaneseInRomaji = [];
  const nonAsciiRomaji = [];
  const implicitBlanks = [];
  const contradictoryMarkers = [];
  uniqueExamples.forEach(({ cardId, example, index }) => {
    const romaji = typeof example.romaji === "string" ? example.romaji.trim() : "";
    const explicitlyUnavailable =
      example.romajiStatus === "unavailable" ||
      example.romajiUnavailable === true ||
      example.hasRomaji === false;
    if (!romaji && !explicitlyUnavailable) {
      implicitBlanks.push(`${cardId}#${index + 1}`);
    }
    if (romaji && explicitlyUnavailable) {
      contradictoryMarkers.push(`${cardId}#${index + 1}`);
    }
    if (romaji && hasJapaneseScript(romaji)) {
      japaneseInRomaji.push(`${cardId}: ${romaji}`);
    }
    if (romaji && !/^[A-Za-z0-9][A-Za-z0-9\t ,.'!?;:"()\/_~+&-]*$/u.test(romaji)) {
      nonAsciiRomaji.push(`${cardId}: ${romaji}`);
    }
  });
  if (japaneseInRomaji.length) {
    addError(
      `${japaneseInRomaji.length} displayed romaji values still contain Japanese script: ${sample(
        japaneseInRomaji,
        8,
      )}`,
    );
  }
  if (nonAsciiRomaji.length) {
    addError(
      `${nonAsciiRomaji.length} displayed romaji values contain characters outside the Latin/ASCII allowlist: ${sample(
        nonAsciiRomaji,
        8,
      )}`,
    );
  }
  if (implicitBlanks.length) {
    addError(
      `${implicitBlanks.length} displayed romaji values are blank without an explicit unavailable marker: ${sample(
        implicitBlanks,
        8,
      )}`,
    );
  }
  if (contradictoryMarkers.length) {
    addError(
      `romaji values conflict with unavailable markers: ${sample(contradictoryMarkers, 8)}`,
    );
  }
}

function validateRomajiCoverage(cards) {
  const uniqueExamples = new Map();
  cards.forEach((card) => {
    (Array.isArray(card.examples) ? card.examples : []).forEach((example) => {
      if (!example || typeof example !== "object" || Array.isArray(example)) return;
      const key = JSON.stringify([compactText(example.ja), compactText(example.zh)]);
      if (!uniqueExamples.has(key)) uniqueExamples.set(key, example);
    });
  });

  const examples = [...uniqueExamples.values()];
  const available = examples.filter(
    (example) => example.romajiStatus === "available" && compactText(example.romaji),
  ).length;
  const coverage = examples.length ? available / examples.length : 0;
  check(
    coverage >= minimumReviewedRomajiCoverage,
    `displayed romaji coverage fell to ${(coverage * 100).toFixed(1)}% (${available}/${examples.length}); expected at least ${(minimumReviewedRomajiCoverage * 100).toFixed(0)}%`,
  );
}

function allGeneratedExamples(cards) {
  return cards.flatMap((card) => Array.isArray(card.examples) ? card.examples : []);
}

function validateRomajiCorpusLock(runtime) {
  const assertMutationFailsClosed = (label, mutate) => {
    const changedData = {
      grammar: cloneJson(runtime.data.grammar),
      n3: cloneJson(runtime.data.n3),
      n4: cloneJson(runtime.data.n4),
      n5: cloneJson(runtime.data.n5),
    };
    mutate(changedData);
    const changedCardData = loadCardData(changedData);
    const changedExamples = allGeneratedExamples([
      ...changedCardData.makeVocabCards(),
      ...changedCardData.makeGrammarCards(),
    ]);
    check(changedExamples.length > 0, `${label} corpus-lock probe generated no examples`);
    check(
      changedExamples.every(
        (example) => example.romaji === "" && example.romajiStatus === "unavailable",
      ),
      `${label} must fail closed instead of displaying unreviewed sentence romaji`,
    );
  };

  assertMutationFailsClosed("changed Japanese example", (data) => {
    data.n5.entries[0].examples[0].ja += "ね";
  });
  assertMutationFailsClosed("changed vocabulary reading metadata", (data) => {
    data.n5.entries[0].reading = "あー";
  });
}

function validateKanaMarkClassification(kanaCards) {
  const markedCards = kanaCards.filter((card) => card.id?.startsWith("special-marked-"));
  const byPrompt = new Map(markedCards.map((card) => [card.prompt, card]));
  const handakuten = ["ぱ", "ぴ", "ぷ", "ぺ", "ぽ"];
  const dakuten = [
    "が", "ぎ", "ぐ", "げ", "ご",
    "ざ", "じ", "ず", "ぜ", "ぞ",
    "だ", "ぢ", "づ", "で", "ど",
    "ば", "び", "ぶ", "べ", "ぼ",
  ];

  handakuten.forEach((kana) => {
    check(Boolean(byPrompt.get(kana)), `kana fixture ${kana} is missing`);
    check(byPrompt.get(kana)?.type === "半浊音", `${kana} must be classified as 半浊音`);
  });
  dakuten.forEach((kana) => {
    check(Boolean(byPrompt.get(kana)), `kana fixture ${kana} is missing`);
    check(byPrompt.get(kana)?.type === "浊音", `${kana} must be classified as 浊音`);
  });
}

function validatePromptDisambiguation(cards) {
  const collisions = duplicateGroups(cards, (card) =>
    `${card.deck}\u0000${compactText(card.prompt)}`,
  );
  const ambiguous = collisions.filter((group) => {
    const subtles = group.map((card) => compactText(card.subtle));
    return subtles.some((subtle) => !subtle) || new Set(subtles).size !== subtles.length;
  });
  if (ambiguous.length) {
    addError(
      `${ambiguous.length} prompt collisions lack unique visible disambiguation: ${sample(
        ambiguous.map(
          (group) =>
            `${group[0].deck} ${JSON.stringify(group[0].prompt)} [${group.map((card) => card.id).join(", ")}]`,
        ),
        10,
      )}`,
    );
  }
}

// Homophone groups cover every set of vocab words that share a reading (one word
// split by sense, and affixes, aside) exactly once, in reviewed frequency order;
// each gloss is a segment of the word's own reviewed meaning, so the list adds
// no unreviewed translation.
function validateHomophoneData(homophones, n5Json, n4Json, n3Json, vocabCards) {
  const groups = homophones?.groups;
  if (!Array.isArray(groups)) {
    addError("homophone-data.js does not expose AYAYA_HOMOPHONES.groups");
    return;
  }
  const entries = [...n5Json.entries, ...n4Json.entries, ...n3Json.entries];
  const vocabById = new Map(entries.map((entry) => [entry.id, entry]));
  const glossesOf = (entry) =>
    String(entry.meaning_zh || "")
      .split("；")
      .flatMap((segment) => [segment, segment.replace(/（[^）]*）/gu, "")])
      .filter(Boolean);
  const grouped = new Map();
  groups.forEach((group) => {
    const [reading, members] = Array.isArray(group) ? group : [];
    if (typeof reading !== "string" || !Array.isArray(members) || members.length < 2) {
      addError(`homophone group ${JSON.stringify(group)?.slice(0, 60)} needs a reading and two or more words`);
      return;
    }
    const headwords = new Set();
    members.forEach(([id, gloss]) => {
      const entry = vocabById.get(id);
      if (!entry) {
        addError(`homophone ${reading} lists unknown vocab ${id}`);
        return;
      }
      check(entry.reading === reading, `homophone ${reading} lists ${id} ${entry.headword}, read ${entry.reading}`);
      check(!/[～〜]/u.test(entry.headword), `homophone ${reading} lists the affix ${entry.headword}`);
      check(!grouped.has(id), `vocab ${id} is in two homophone groups`);
      check(!headwords.has(entry.headword), `homophone ${reading} lists ${entry.headword} twice`);
      check(
        typeof gloss === "string" && glossesOf(entry).includes(gloss),
        `homophone gloss ${JSON.stringify(gloss)} for ${id} ${entry.headword} is not part of its meaning ${entry.meaning_zh}`,
      );
      headwords.add(entry.headword);
      grouped.set(id, reading);
    });
  });
  const byReading = new Map();
  entries
    .filter((entry) => !/[～〜]/u.test(entry.headword))
    .forEach((entry) => {
      if (!byReading.has(entry.reading)) byReading.set(entry.reading, []);
      byReading.get(entry.reading).push(entry);
    });
  byReading.forEach((list, reading) => {
    if (list.length < 2 || new Set(list.map((entry) => entry.headword)).size < list.length) return;
    list.forEach((entry) => {
      check(grouped.get(entry.id) === reading, `homophone ${reading}: ${entry.id} ${entry.headword} is not in its group`);
    });
  });
  const kami = groups.find(([reading]) => reading === "かみ");
  check(
    JSON.stringify(kami?.[1]?.map(([id]) => vocabById.get(id)?.headword)) === JSON.stringify(["神", "髪", "紙"]),
    `homophone regression: かみ should read 神, 髪, 紙 by frequency, received ${JSON.stringify(kami?.[1])}`,
  );
  const paperCard = vocabCards.find((card) => card.id === "vocab-entry-n5-175-ja");
  check(
    paperCard?.homophoneKey === "かみ" &&
      JSON.stringify(paperCard.homophones) ===
        JSON.stringify([
          { word: "神", gloss: "神", accent: "①" },
          { word: "髪", gloss: "头发", accent: "②" },
          { word: "紙", gloss: "纸", accent: "②", isCurrent: true },
        ]),
    `vocab card 紙 does not list its homophones with accents: ${JSON.stringify(paperCard?.homophones)}`,
  );
}

// Pitch accents come from reviewed Kanjium data; anything that cannot be tied to
// a vocab entry or exceeds the reading's morae must fail validation, and the
// manually rejected senses must stay unannotated.
function validatePitchAccentData(pitchAccent, n5Json, n4Json, n3Json, vocabCards) {
  const entries = pitchAccent?.entries;
  if (!entries || typeof entries !== "object") {
    addError("pitch-accent-data.js does not expose AYAYA_PITCH_ACCENT.entries");
    return;
  }
  check(
    /CC BY-SA 4\.0/u.test(pitchAccent.license || "") && /kanjium/iu.test(pitchAccent.source || ""),
    "pitch accent data lost its Kanjium CC BY-SA 4.0 attribution",
  );
  const vocabById = new Map(
    [...n5Json.entries, ...n4Json.entries, ...n3Json.entries].map((entry) => [entry.id, entry]),
  );
  const smallKana = /[ぁぃぅぇぉゃゅょゎァィゥェォャュョヮ]/u;
  Object.entries(entries).forEach(([id, positions]) => {
    const entry = vocabById.get(id);
    if (!entry) {
      addError(`pitch accent ${id} has no matching vocab entry`);
      return;
    }
    const morae = [...entry.reading].filter((character) => !smallKana.test(character)).length;
    check(
      Array.isArray(positions) &&
        positions.length > 0 &&
        positions.every((position) => Number.isInteger(position) && position >= 0 && position <= morae),
      `pitch accent ${id} (${entry.headword}/${entry.reading}) is not a valid mora index list`,
    );
  });
  ["n5-001", "n5-091", "n4-195", "n4-426", "n4-222"].forEach((id) => {
    check(!(id in entries), `pitch accent ${id} was rejected in review but is annotated again`);
  });
  [
    ["n5-268", [0]],
    ["n5-368", [0]],
    ["n5-037", [1]],
    ["n5-038", [0]],
    ["n5-526", [2]],
    ["n5-527", [1]],
  ].forEach(([id, expected]) => {
    check(
      JSON.stringify(entries[id]) === JSON.stringify(expected),
      `pitch accent regression for ${id}: expected ${JSON.stringify(expected)}, received ${JSON.stringify(entries[id])}`,
    );
  });
  const rainCard = vocabCards.find((card) => card.id === "vocab-entry-n5-037-ja");
  check(
    rainCard?.meta?.startsWith("读音：あめ ①"),
    `vocab meta does not show the reviewed pitch accent: ${rainCard?.meta}`,
  );
  const unannotatedCard = vocabCards.find((card) => card.id === "vocab-entry-n5-001-ja");
  check(
    unannotatedCard && !/[⓪①-⑩]/u.test(unannotatedCard.meta),
    "a vocab entry without reviewed pitch data shows an accent",
  );
}

// Every displayed example romaji must use a reviewed word division from
// romaji-word-spacing.js, and that file must not keep entries for examples that
// no longer display romaji.
function validateRomajiWordSpacing(cards, spacingData) {
  const displayed = allGeneratedExamples(cards).filter((example) => example.romajiStatus === "available");
  const unreviewed = [...new Set(
    displayed.filter((example) => example.romajiSpacing !== "reviewed").map((example) => example.ja),
  )];
  check(
    unreviewed.length === 0,
    `${unreviewed.length} displayed examples lack reviewed word spacing: ${sample(unreviewed, 8)}`,
  );
  const entries = Array.isArray(spacingData?.entries) ? spacingData.entries : [];
  const keys = entries.map((spaced) => spaced.replace(/[ -]/gu, ""));
  const displayedTexts = new Set(displayed.map((example) => example.ja));
  const stale = keys.filter((key) => !displayedTexts.has(key));
  check(stale.length === 0, `${stale.length} romaji spacing entries match no displayed example: ${sample(stale, 8)}`);
  const duplicates = keys.filter((key, index) => keys.indexOf(key) !== index);
  check(duplicates.length === 0, `duplicate romaji spacing entries: ${sample(duplicates, 8)}`);
  const malformed = entries.filter(
    (spaced) => /^[ -]|[ -]$|[ -]{2,}|[ -][、。！？]|[、。！？][ -]/u.test(spaced),
  );
  check(malformed.length === 0, `malformed romaji spacing entries: ${sample(malformed, 8)}`);
  // Quote brackets are dropped from romaji, so a quote needs its own word
  // breaks (に「こんにちは」 would otherwise read nikonnichiwa): 「 after a word
  // is followed by a space, and 」 before a word is followed by one.
  const fusedQuotes = entries.filter(
    (spaced) =>
      /[^\s、。！？「」『』][「『](?! )/u.test(spaced) || /[」』][^\s、。！？「」『』]/u.test(spaced),
  );
  check(
    fusedQuotes.length === 0,
    `romaji spacing entries need a word break at quote brackets: ${sample(fusedQuotes, 8)}`,
  );
}

function validateDeckCoverage(cards, tabDecks, data) {
  const deckCounts = cards.reduce((counts, card) => {
    counts[card.deck] = (counts[card.deck] || 0) + 1;
    return counts;
  }, {});
  tabDecks.forEach((deck) => {
    check(deckCounts[deck] > 0, `HTML deck ${deck} has no generated cards`);
  });

  const expectedDeckCounts = {
    "vocab-ja-zh": data.n5.entries.length,
    "vocab-zh-ja": data.n5.entries.length,
    "vocab-n4-ja-zh": data.n4.entries.length,
    "vocab-n4-zh-ja": data.n4.entries.length,
    "vocab-n3-ja-zh": data.n3.entries.length,
    "vocab-n3-zh-ja": data.n3.entries.length,
  };
  ["N5", "N4", "N3"].forEach((level) => {
    const levelKey = level.toLowerCase();
    const entries = data.grammar.entries.filter((entry) => entry.level === level);
    ["zh-ja", "ja-zh", "pattern-zh"].forEach((suffix) => {
      expectedDeckCounts[`grammar-${levelKey}-${suffix}`] = entries.length;
    });
    // One fill-in card per drilled example.
    expectedDeckCounts[`grammar-${levelKey}-choice`] =
      entries.reduce((sum, entry) => sum + entry.drills.length, 0);
  });
  Object.entries(expectedDeckCounts).forEach(([deck, expected]) => {
    check(
      deckCounts[deck] === expected,
      `${deck} count: expected ${expected}, received ${deckCounts[deck] || 0}`,
    );
  });
}

function expectedVocabCategoryLabel(entry) {
  const explicitLabels = {
    collocation: "搭配",
    compound: "复合词",
    "derived-form": "派生形式",
    "fixed-expression": "固定表达",
  };
  if (explicitLabels[entry.learning_category]) return explicitLabels[entry.learning_category];
  const partOfSpeech = String(entry.part_of_speech || "");
  if (partOfSpeech.includes("counter")) return "量词";
  if (partOfSpeech.includes("suffix") || partOfSpeech.includes("prefix")) return "词缀";
  if (partOfSpeech.includes("expression")) return "表达";
  if (partOfSpeech.includes("particle")) return "助词";
  return "词汇";
}

function validateVocabCategoryLabels(runtime) {
  [...runtime.data.n5.entries, ...runtime.data.n4.entries, ...runtime.data.n3.entries].forEach((entry) => {
    const expectedLabel = expectedVocabCategoryLabel(entry);
    const cards = runtime.vocabCards.filter((card) => card.sourceId === entry.id);
    check(cards.length === 2, `${entry.id} must produce two category-labelled vocabulary cards`);
    cards.forEach((card) => {
      check(
        card.type.includes(` ${expectedLabel} `),
        `${card.id} must display learning category ${expectedLabel}, received ${card.type}`,
      );
    });
  });
}

function sortedCardIds(cards) {
  return cards.map((card) => card.id).sort();
}

function validateLevelSpecificBuilders(runtime) {
  const vocabDecksByLevel = {
    N5: new Set(["vocab-ja-zh", "vocab-zh-ja"]),
    N4: new Set(["vocab-n4-ja-zh", "vocab-n4-zh-ja"]),
    N3: new Set(["vocab-n3-ja-zh", "vocab-n3-zh-ja"]),
  };

  ["N5", "N4", "N3"].forEach((level) => {
    const vocabDecks = vocabDecksByLevel[level];
    const lazyVocabCards = runtime.vocabCardsByLevel[level];
    const expectedVocabCards = runtime.vocabCards.filter((card) => vocabDecks.has(card.deck));
    const sourceVocabCount = runtime.data[level.toLowerCase()].entries.length;
    check(
      lazyVocabCards.length === sourceVocabCount * 2,
      `${level} lazy vocab builder expected ${sourceVocabCount * 2} cards, received ${lazyVocabCards.length}`,
    );
    check(
      lazyVocabCards.every(
        (card) => vocabDecks.has(card.deck) && String(card.sourceId || "").startsWith(level.toLowerCase()),
      ),
      `${level} lazy vocab builder returned cards from another level or deck`,
    );
    check(
      JSON.stringify(sortedCardIds(lazyVocabCards)) ===
        JSON.stringify(sortedCardIds(expectedVocabCards)),
      `${level} lazy vocab builder does not match the corresponding full-builder cards`,
    );

    const levelKey = level.toLowerCase();
    const grammarDecks = new Set(
      ["zh-ja", "ja-zh", "pattern-zh", "choice"].map(
        (suffix) => `grammar-${levelKey}-${suffix}`,
      ),
    );
    const lazyGrammarCards = runtime.grammarCardsByLevel[level];
    const expectedGrammarCards = runtime.grammarCards.filter((card) => grammarDecks.has(card.deck));
    const sourceGrammar = runtime.data.grammar.entries.filter((entry) => entry.level === level);
    const expectedLazyCount = sourceGrammar.reduce((sum, entry) => sum + 3 + entry.drills.length, 0);
    check(
      lazyGrammarCards.length === expectedLazyCount,
      `${level} lazy grammar builder expected ${expectedLazyCount} cards, received ${lazyGrammarCards.length}`,
    );
    check(
      lazyGrammarCards.every(
        (card) => grammarDecks.has(card.deck) && card.grammarLevel === level,
      ),
      `${level} lazy grammar builder returned cards from another level or deck`,
    );
    check(
      JSON.stringify(sortedCardIds(lazyGrammarCards)) ===
        JSON.stringify(sortedCardIds(expectedGrammarCards)),
      `${level} lazy grammar builder does not match the corresponding full-builder cards`,
    );
  });
}

function vocabIdMap(entries, cards, deckJaZh, deckZhJa, label) {
  const jaCards = cards.filter((card) => card.deck === deckJaZh);
  const zhCards = cards.filter((card) => card.deck === deckZhJa);
  check(jaCards.length === entries.length, `${label} ja-zh cards do not align with source entries`);
  check(zhCards.length === entries.length, `${label} zh-ja cards do not align with source entries`);
  const map = new Map();
  entries.forEach((entry, index) => {
    const jaCard = jaCards[index];
    const zhCard = zhCards[index];
    if (!jaCard || !zhCard) return;
    const expectedBaseId = `vocab-entry-${entry.id}`;
    check(
      jaCard.id === `${expectedBaseId}-ja` && zhCard.id === `${expectedBaseId}-zh`,
      `${label} cards for ${entry.id} need exact source-derived ids (${jaCard.id}, ${zhCard.id})`,
    );
    check(
      jaCard.sourceId === entry.id && zhCard.sourceId === entry.id,
      `${label} cards for ${entry.id} must preserve sourceId`,
    );
    check(
      jaCard.wordKey === expectedBaseId && zhCard.wordKey === expectedBaseId,
      `${label} cards for ${entry.id} must share the stable wordKey ${expectedBaseId}`,
    );
    check(
      canonicalText(jaCard.prompt) === canonicalText(entry.headword),
      `${label} ja-zh card ${jaCard.id} is not aligned with source ${entry.id}`,
    );
    check(
      canonicalText(zhCard.answer) === canonicalText(entry.headword),
      `${label} zh-ja card ${zhCard.id} is not aligned with source ${entry.id}`,
    );
    map.set(entry.id, {
      ids: [jaCard.id, zhCard.id],
      legacyIds: [
        Array.isArray(jaCard.legacyIds) ? [...jaCard.legacyIds].sort() : [],
        Array.isArray(zhCard.legacyIds) ? [...zhCard.legacyIds].sort() : [],
      ],
    });
  });
  return map;
}

function validateStableVocabIds(runtime) {
  const originalMaps = {
    N5: vocabIdMap(
      runtime.data.n5.entries,
      runtime.vocabCards,
      "vocab-ja-zh",
      "vocab-zh-ja",
      "N5",
    ),
    N4: vocabIdMap(
      runtime.data.n4.entries,
      runtime.vocabCards,
      "vocab-n4-ja-zh",
      "vocab-n4-zh-ja",
      "N4",
    ),
    N3: vocabIdMap(
      runtime.data.n3.entries,
      runtime.vocabCards,
      "vocab-n3-ja-zh",
      "vocab-n3-zh-ja",
      "N3",
    ),
  };

  const reordered = {
    grammar: cloneJson(runtime.data.grammar),
    n3: cloneJson(runtime.data.n3),
    n4: cloneJson(runtime.data.n4),
    n5: cloneJson(runtime.data.n5),
  };
  reordered.n3.entries.reverse();
  reordered.n4.entries.reverse();
  reordered.n5.entries.reverse();
  const reorderedCardData = loadCardData(reordered);
  const reorderedCards = reorderedCardData.makeVocabCards();
  const reorderedMaps = {
    N5: vocabIdMap(
      reordered.n5.entries,
      reorderedCards,
      "vocab-ja-zh",
      "vocab-zh-ja",
      "N5 reordered",
    ),
    N4: vocabIdMap(
      reordered.n4.entries,
      reorderedCards,
      "vocab-n4-ja-zh",
      "vocab-n4-zh-ja",
      "N4 reordered",
    ),
    N3: vocabIdMap(
      reordered.n3.entries,
      reorderedCards,
      "vocab-n3-ja-zh",
      "vocab-n3-zh-ja",
      "N3 reordered",
    ),
  };

  ["N5", "N4", "N3"].forEach((label) => {
    const changed = [...originalMaps[label]].filter(
      ([sourceId, mapping]) =>
        JSON.stringify(mapping) !== JSON.stringify(reorderedMaps[label].get(sourceId)),
    );
    if (changed.length) {
      addError(
        `${label} card identity or legacy aliases change when source entries are reordered: ${sample(
          changed.map(([sourceId, mapping]) => {
            const reorderedMapping = reorderedMaps[label].get(sourceId);
            return `${sourceId} ${JSON.stringify(mapping)} -> ${JSON.stringify(reorderedMapping)}`;
          }),
          8,
        )}`,
      );
    }
  });
}

function validateMergedVocabSources(runtime) {
  const entries = [...runtime.data.n5.entries, ...runtime.data.n4.entries, ...runtime.data.n3.entries];
  const activeIds = new Set(entries.map((entry) => entry.id));
  const actualTargets = new Map();

  entries.forEach((entry) => {
    (Array.isArray(entry.merged_source_ids) ? entry.merged_source_ids : []).forEach(
      (mergedId) => {
        check(
          !activeIds.has(mergedId),
          `${entry.id} merged source ${mergedId} is still active and must not be aliased`,
        );
        check(
          !actualTargets.has(mergedId),
          `${mergedId} is assigned to more than one retained vocabulary entry`,
        );
        actualTargets.set(mergedId, entry.id);
      },
    );
  });

  expectedMergedSourceTargets.forEach((targetId, mergedId) => {
    check(
      actualTargets.get(mergedId) === targetId,
      `retired source ${mergedId} must migrate to ${targetId}, received ${actualTargets.get(mergedId) || "(missing)"}`,
    );
  });
  actualTargets.forEach((targetId, mergedId) => {
    check(
      expectedMergedSourceTargets.get(mergedId) === targetId,
      `unexpected retired source mapping ${mergedId} -> ${targetId}`,
    );
  });

  // Word speech is the reading without the affix mark ～; only a particle は/へ
  // may be spelled わ/え (では → でわ), which validateExampleSpeech pins down.
  const sameSpeech = (speech = "", expected = "") =>
    speech.length === expected.length &&
    [...speech].every((character, index) =>
      character === expected[index] ||
      (expected[index] === "は" && character === "わ") ||
      (expected[index] === "へ" && character === "え"),
    );
  entries.forEach((entry) => {
    const expectedSpeech = (entry.speech_reading || entry.reading).replace(/[～〜]/gu, "");
    const cards = runtime.vocabCards.filter((card) => card.sourceId === entry.id);
    check(cards.length === 2, `${entry.id} must produce two vocabulary cards for speech validation`);
    cards.forEach((card) => {
      check(
        sameSpeech(card.speech, expectedSpeech),
        `${card.id} speech must use ${entry.speech_reading ? "speech_reading" : "reading"}: ${expectedSpeech}`,
      );
    });
  });
}

function expectedRetiredVocabAliases(sourceId, direction) {
  const sourceNumber = Number.parseInt(String(sourceId).split("-").at(-1), 10);
  const prefix = String(sourceId).startsWith("n4-") ? "vocab-n4" : "vocab";
  return [
    `vocab-entry-${sourceId}-${direction}`,
    `${prefix}-${sourceNumber - 1}-${direction}`,
  ];
}

function validateRetiredVocabGrammarMigrations(runtime) {
  const activeVocabIds = new Set(
    [...runtime.data.n5.entries, ...runtime.data.n4.entries, ...runtime.data.n3.entries].map(
      (entry) => entry.id,
    ),
  );
  const actualTargets = new Map();

  runtime.data.grammar.entries.forEach((entry) => {
    (Array.isArray(entry.retiredVocabSourceIds) ? entry.retiredVocabSourceIds : []).forEach(
      (sourceId) => {
        check(
          !activeVocabIds.has(sourceId),
          `${entry.id} retired vocabulary source ${sourceId} is still active`,
        );
        check(
          !actualTargets.has(sourceId),
          `${sourceId} is assigned to more than one grammar migration target`,
        );
        actualTargets.set(sourceId, entry.id);

        ["ja", "zh"].forEach((direction) => {
          const card = runtime.grammarCards.find(
            (candidate) =>
              candidate.grammarKey === entry.id && candidate.id.endsWith(`-${direction}`),
          );
          check(Boolean(card), `${entry.id} is missing its ${direction} grammar card`);
          const actualAliases = new Set(Array.isArray(card?.legacyIds) ? card.legacyIds : []);
          expectedRetiredVocabAliases(sourceId, direction).forEach((legacyId) => {
            check(
              actualAliases.has(legacyId),
              `${entry.id} ${direction} card is missing retired vocabulary alias ${legacyId}`,
            );
          });
        });
      },
    );
  });

  expectedRetiredVocabGrammarTargets.forEach((targetId, sourceId) => {
    check(
      actualTargets.get(sourceId) === targetId,
      `retired vocabulary source ${sourceId} must migrate to ${targetId}, received ${actualTargets.get(sourceId) || "(missing)"}`,
    );
  });
  actualTargets.forEach((targetId, sourceId) => {
    check(
      expectedRetiredVocabGrammarTargets.get(sourceId) === targetId,
      `unexpected vocabulary-to-grammar migration ${sourceId} -> ${targetId}`,
    );
  });

  const allCards = [...runtime.vocabCards, ...runtime.grammarCards];
  const stableIds = new Set(allCards.map((card) => card.id));
  const aliasTargets = new Map();
  allCards.forEach((card) => {
    (Array.isArray(card.legacyIds) ? card.legacyIds : []).forEach((legacyId) => {
      check(!stableIds.has(legacyId), `${card.id} legacy alias collides with a stable card id`);
      check(
        !aliasTargets.has(legacyId),
        `${legacyId} is assigned to both ${aliasTargets.get(legacyId)} and ${card.id}`,
      );
      aliasTargets.set(legacyId, card.id);
    });
  });
}

function expectedCompatibilityExamples(entries) {
  const candidates = new Map();
  entries.forEach((entry) => {
    const keys = new Set([
      entry.headword,
      ...(entry.variants || []),
      ...String(entry.source_form || "").split(";"),
    ].map((key) => key.trim()).filter(Boolean));
    keys.forEach((key) => {
      const matches = candidates.get(key) || [];
      matches.push(entry.examples);
      candidates.set(key, matches);
    });
  });
  return Object.fromEntries(
    [...candidates.entries()]
      .filter(([, matches]) => matches.length === 1)
      .map(([key, [examples]]) => [key, examples]),
  );
}

function validateCompatibilityExampleIndexes(n5Window, n4Window, n3Window) {
  [
    ["N5", n5Window?.AYAYA_N5_CODEX_VOCAB, n5Window?.AYAYA_N5_TATOEBA_EXAMPLES],
    ["N4", n4Window?.AYAYA_N4_CODEX_VOCAB, n4Window?.AYAYA_N4_TATOEBA_EXAMPLES],
    ["N3", n3Window?.AYAYA_N3_CODEX_VOCAB, n3Window?.AYAYA_N3_TATOEBA_EXAMPLES],
  ].forEach(([label, data, actual]) => {
    check(actual && typeof actual === "object", `${label} compatibility example index is missing`);
    if (!data || !actual) return;
    const expected = expectedCompatibilityExamples(data.entries);
    check(
      JSON.stringify(actual) === JSON.stringify(expected),
      `${label} compatibility example index must cover every unambiguous headword, variant and source form`,
    );
  });
  check(Boolean(n5Window?.AYAYA_N5_TATOEBA_EXAMPLES?.かける), "N5 compatibility index must retain かける");
  check(Boolean(n4Window?.AYAYA_N4_TATOEBA_EXAMPLES?.込む), "N4 compatibility index must retain 込む");
  check(
    !Object.hasOwn(n5Window?.AYAYA_N5_TATOEBA_EXAMPLES || {}, "キロ"),
    "ambiguous キロ alias must not overwrite one of its two vocabulary meanings",
  );
}

function validateProductionLegacyVocabIds(runtime) {
  const stableIds = new Set(runtime.vocabCards.map((card) => card.id));
  const aliasRecords = [];

  runtime.vocabCards.forEach((card) => {
    // N3 shipped with stable source-derived IDs, so it has no older IDs to alias.
    const isN3 = String(card.sourceId || "").startsWith("n3-");
    check(
      Array.isArray(card.legacyIds) && (isN3 ? card.legacyIds.length === 0 : card.legacyIds.length > 0),
      isN3
        ? `${card.id} is a new N3 card and must not expose legacy aliases`
        : `${card.id} must expose at least one production legacyIds alias`,
    );
    (Array.isArray(card.legacyIds) ? card.legacyIds : []).forEach((legacyId) => {
      check(
        /^(?:vocab(?:-n4)?-\d+|vocab-entry-n[45]-\d{3}|grammar-n[45]-grammar-\d{3})-(?:ja|zh)$/u.test(legacyId),
        `${card.id} has malformed legacy alias ${legacyId}`,
      );
      check(
        legacyId.endsWith(card.id.endsWith("-ja") ? "-ja" : "-zh"),
        `${card.id} legacy alias has the wrong direction: ${legacyId}`,
      );
      check(!stableIds.has(legacyId), `${card.id} legacy alias collides with a stable target: ${legacyId}`);
      aliasRecords.push({ legacyId, targetId: card.id });
    });
  });

  const duplicateAliases = duplicateGroups(aliasRecords, (record) => record.legacyId);
  if (duplicateAliases.length) {
    addError(
      `production legacy aliases must be globally unique: ${sample(
        duplicateAliases.map((group) =>
          `${group[0].legacyId} -> ${group.map((record) => record.targetId).join(",")}`,
        ),
        12,
      )}`,
    );
  }

  const levelConfigs = {
    N5: {
      data: runtime.data.n5.entries,
      deckJaZh: "vocab-ja-zh",
      deckZhJa: "vocab-zh-ja",
      legacyPrefix: "vocab",
      sourcePrefix: "n5",
    },
    N4: {
      data: runtime.data.n4.entries,
      deckJaZh: "vocab-n4-ja-zh",
      deckZhJa: "vocab-n4-zh-ja",
      legacyPrefix: "vocab-n4",
      sourcePrefix: "n4",
    },
  };

  const retiredGrammarEntries = runtime.data.grammar?.retiredEntries || [];
  Object.entries(levelConfigs).forEach(([label, config]) => {
    config.data.forEach((entry) => {
      const idMatch = new RegExp(`^${config.sourcePrefix}-(\\d{3})$`, "u").exec(entry.id);
      check(Boolean(idMatch), `${label} source id has unexpected format: ${entry.id}`);
      if (!idMatch) return;
      const sourceNumber = Number.parseInt(idMatch[1], 10);
      const legacyIndexes = [sourceNumber - 1];
      if (entry.id === "n5-040") legacyIndexes.push(40);

      [
        [config.deckJaZh, "ja"],
        [config.deckZhJa, "zh"],
      ].forEach(([deck, direction]) => {
        const card = runtime.vocabCards.find(
          (candidate) => candidate.sourceId === entry.id && candidate.deck === deck,
        );
        check(Boolean(card), `${label} ${entry.id} is missing its ${direction} production card`);
        if (!card) return;
        const mergedArrayAliases = (Array.isArray(entry.merged_source_ids)
          ? entry.merged_source_ids
          : []).flatMap((mergedId) => {
          const mergedNumber = Number.parseInt(mergedId.split("-").at(-1), 10);
          if (!Number.isInteger(mergedNumber) || mergedNumber < 1) return [];
          const mergedPrefix = mergedId.startsWith("n4-") ? "vocab-n4" : "vocab";
          const indexes = [mergedNumber - 1];
          if (mergedId === "n5-040") indexes.push(40);
          return [...new Set(indexes)].map(
            (legacyIndex) => `${mergedPrefix}-${legacyIndex}-${direction}`,
          );
        });
        const expectedAliases = [
          ...legacyIndexes.map(
            (legacyIndex) => `${config.legacyPrefix}-${legacyIndex}-${direction}`,
          ),
          ...mergedArrayAliases,
          ...(Array.isArray(entry.merged_source_ids) ? entry.merged_source_ids : []).map(
            (mergedId) => `vocab-entry-${mergedId}-${direction}`,
          ),
          ...retiredGrammarEntries
            .filter((retired) => retired.vocabId === entry.id)
            .map((retired) => `grammar-${retired.id}-${direction}`),
        ].sort();
        const actualAliases = Array.isArray(card.legacyIds) ? [...card.legacyIds].sort() : [];
        check(
          JSON.stringify(actualAliases) === JSON.stringify(expectedAliases),
          `${card.id} legacy mapping expected [${expectedAliases.join(", ")}], received [${actualAliases.join(", ")}]`,
        );
      });
    });
  });
}

function validatePreferredReadingRegressions(runtime) {
  const sourceEntry = runtime.data.n4.entries.find((entry) => entry.id === "n4-569");
  check(Boolean(sourceEntry), "N4 preferred-reading fixture n4-569 is missing");
  if (!sourceEntry) return;
  check(
    sourceEntry.headword === "開く" && sourceEntry.reading === "ひらく",
    "n4-569 must remain the transitive 開く / ひらく entry",
  );

  const card = runtime.vocabCards.find(
    (candidate) => candidate.sourceId === "n4-569" && candidate.deck === "vocab-n4-ja-zh",
  );
  check(Boolean(card), "n4-569 is missing its generated N4 ja-zh card");
  if (!card) return;
  const example = (Array.isArray(card.examples) ? card.examples : []).find(
    (candidate) => compactText(candidate?.ja) === compactText("来週、会議を開きます"),
  );
  check(Boolean(example), "n4-569 must retain the example 来週、会議を開きます");
  if (example) {
    check(
      canonicalText(example.romaji).includes("hirakimasu"),
      `n4-569 example romaji must use hirakimasu, received ${example.romaji || "(blank)"}`,
    );
  }

  const preferredFurigana = (Array.isArray(example?.furiganaEntries)
    ? example.furiganaEntries
    : []
  ).find(
    ([surface]) => surface === "開き",
  );
  check(
    preferredFurigana?.[1] === "ひらき",
    `preferred furigana for 開き must be ひらき, received ${preferredFurigana?.[1] || "(missing)"}`,
  );
  const ambiguousGlobalFurigana = runtime.cardData.furiganaEntries.find(
    ([surface]) => surface === "開き",
  );
  check(
    !ambiguousGlobalFurigana,
    `ambiguous 開き must not use a global fallback reading (${ambiguousGlobalFurigana?.[1]})`,
  );

  const n5OpenCard = runtime.vocabCards.find(
    (candidate) => candidate.sourceId === "n5-009" && candidate.deck === "vocab-ja-zh",
  );
  const n5OpenExample = (n5OpenCard?.examples || []).find((candidate) =>
    compactText(candidate?.ja).includes(compactText("店は九時に開きます")),
  );
  check(Boolean(n5OpenExample), "n5-009 must retain the example 店は九時に開きます");
  check(
    canonicalText(n5OpenExample?.romaji).includes("akimasu"),
    `n5-009 example romaji must use akimasu, received ${n5OpenExample?.romaji || "(blank)"}`,
  );

  const grammarExamples = runtime.grammarCards.flatMap((grammarCard) => grammarCard.examples || []);
  // These readings are ambiguous in the shared tables (後 ご/あと, 降り ふり/おり,
  // 私, 着い, 中 ちゅう/じゅう, 話 はなし/わ); example-readings.js resolves them for
  // these exact sentences only.
  const sentenceReviewedFixtures = new Map([
    ["卒業後", "sotsugyougo"],
    ["雨が降り始めました", "ame ga furihajimemashita"],
    ["私は中国人です", "watashi wa chuugokujin desu"],
    ["田中さんはもう着いた", "tanaka-san wa mou tsuita"],
    ["試験中", "shikenchuu"],
    ["夢みたいな話", "yume mitai na hanashi"],
  ]);
  sentenceReviewedFixtures.forEach((romaji, needle) => {
    const grammarExample = grammarExamples.find((candidate) => candidate.ja?.includes(needle));
    check(Boolean(grammarExample), `sentence-reviewed reading fixture is missing: ${needle}`);
    if (!grammarExample) return;
    check(
      grammarExample.romajiStatus === "available" && grammarExample.romaji.includes(romaji),
      `${needle} must use its sentence-reviewed reading ${romaji}; received ${grammarExample.romaji || "(blank)"} / ${grammarExample.romajiStatus}`,
    );
  });

  const longerSafeExample = grammarExamples.find((candidate) =>
    candidate.ja?.includes("雨が急に降り出しました"),
  );
  check(Boolean(longerSafeExample), "longer safe-reading fixture 雨が急に降り出しました is missing");
  check(
    canonicalText(longerSafeExample?.romaji).includes("furidashimashita") &&
      longerSafeExample?.romajiStatus === "available",
    `longer safe reading 降り出す must remain available, received ${longerSafeExample?.romaji || "(blank)"}`,
  );

  ["後", "降", "降り", "人", "着", "中", "話", "背", "来"].forEach((surface) => {
    const unsafeGlobal = runtime.cardData.furiganaEntries.find(
      ([candidateSurface]) => candidateSurface === surface,
    );
    check(
      !unsafeGlobal,
      `ambiguous surface ${surface} must not use global fallback reading ${unsafeGlobal?.[1]}`,
    );
  });

  check(
    !runtime.cardData.furiganaEntries.some(([surface]) => /[~〜～]/u.test(surface)),
    "global fallback must not expose prefix/suffix notation as a lexical surface",
  );

  const reviewedRomajiFixtures = new Map([
    ["ここへ来てください", "koko e kite kudasai"],
    ["あの人は外国人です", "ano hito wa gaikokujin desu"],
    ["思い出は心に残ります", "omoide wa kokoro ni nokorimasu"],
    ["体の調子がいいです", "karada no choushi ga ii desu"],
    ["気温が急に下がりました", "kion ga kyuu ni sagarimashita"],
    ["木で小さな小屋を建てました", "ki de chiisana koya o tatemashita"],
    ["温かいうちに召し上がってください", "atatakai uchi ni meshiagatte kudasai"],
    ["区役所まで歩いて行きます", "kuyakusho made aruite ikimasu"],
    ["六か月かかります", "rokkagetsu kakarimasu"],
    ["電車に間に合いました", "densha ni maniaimashita"],
    ["新しい展覧会が開かれています", "atarashii tenrankai ga hirakarete imasu"],
    ["昔の友達を思い出しました", "mukashi no tomodachi o omoidashimashita"],
    ["木製の机を買いました", "mokusei no tsukue o kaimashita"],
    ["物語の終わりは少し悲しかったです", "monogatari no owari wa sukoshi kanashikatta desu"],
    ["自分の気持ちを正直に話しました", "jibun no kimochi o shoujiki ni hanashimashita"],
    ["あの子は近所の小学生です", "ano ko wa kinjo no shougakusei desu"],
    ["市役所は市民の意見を聞きました", "shiyakusho wa shimin no iken o kikimashita"],
    ["この建物は明治時代に建てられました", "kono tatemono wa meiji jidai ni tateraremashita"],
    ["乗り換えの時間は十分間です", "norikae no jikan wa juppunkan desu"],
    ["集合場所は駅の南口です", "shuugoubasho wa eki no minamiguchi desu"],
    ["日本の食文化に興味があります", "nihon no shokubunka ni kyoumi ga arimasu"],
    ["この仕事は速さと正確さの両方が必要です", "kono shigoto wa hayasa to seikakusa no ryouhou ga hitsuyou desu"],
    ["日本の都道府県では、都は東京都だけです", "nihon no todoufuken de wa, to wa toukyouto dake desu"],
    ["東京都の都庁は新宿にあります", "toukyouto no tochou wa shinjuku ni arimasu"],
    ["このはさみは紙を切るのに使います", "kono hasami wa kami o kiru noni tsukaimasu"],
    ["今日は休みのはずです", "kyou wa yasumi no hazu desu"],
    ["では、始めましょう", "dewa, hajimemashou"],
    ["日本へ行けたらいいかなと思います", "nihon e iketara ii kana to omoimasu"],
    ["人がたくさんいます", "hito ga takusan imasu"],
    ["下町には小さな店がたくさんあります", "shitamachi ni wa chiisana mise ga takusan arimasu"],
    ["彼がそんなことを言うはずがありません", "kare ga sonna koto o iu hazu ga arimasen"],
    ["長い間、大変お世話になりました", "nagai aida, taihen osewa ni narimashita"],
    ["本をたくさん読みます", "hon o takusan yomimasu"],
    ["もちろん行きます", "mochiron ikimasu"],
    ["この本はあの本より新しいです", "kono hon wa ano hon yori atarashii desu"],
    ["金曜日に学校へ行きます", "kin'youbi ni gakkou e ikimasu"],
    ["今夜は月がよく見えます", "kon'ya wa tsuki ga yoku miemasu"],
    ["翻訳の仕事をしています", "hon'yaku no shigoto o shite imasu"],
    ["あの店の店員はとても親切です", "ano mise no ten'in wa totemo shinsetsu desu"],
    ["警察が事故の原因を調べています", "keisatsu ga jiko no gen'in o shirabete imasu"],
    ["本屋で本を買います", "hon'ya de hon o kaimasu"],
    ["何を食べますか", "nani o tabemasu ka"],
    ["この坂を下ると駅があります", "kono saka o kudaru to eki ga arimasu"],
    ["銀行でお金を下ろします", "ginkou de okane o oroshimasu"],
    ["財布が空になりました", "saifu ga kara ni narimashita"],
    ["目を閉じてください", "me o tojite kudasai"],
    ["遠くで信号が光りました", "tooku de shingou ga hikarimashita"],
    // 十分 as "ten minutes", 上がる, and ん before a separate word.
    ["駅まで十分かかります", "eki made juppun kakarimasu"],
    ["十分くらい待ちました", "juppun kurai machimashita"],
    ["バスを十分待ちました", "basu o juppun machimashita"],
    ["時間は十分あります", "jikan wa juubun arimasu"],
    ["火から白い煙が上がっています", "hi kara shiroi kemuri ga agatte imasu"],
    ["彼はすっと立ち上がりました", "kare wa sutto tachiagarimashita"],
    ["明日はたぶん雨です", "ashita wa tabun ame desu"],
    ["学校に学生が百人います", "gakkou ni gakusei ga hyakunin imasu"],
    // Reviewed word division keeps verb kana, conjunctions, and loanwords whole.
    ["合格できて本当にうれしかったです", "goukaku dekite hontou ni ureshikatta desu"],
    ["階段ですべらないように気をつけてください", "kaidan de suberanai you ni ki o tsukete kudasai"],
    ["失敗しても、もう一度やります", "shippai shite mo, mou ichido yarimasu"],
    ["日本語ももちろん勉強しています", "nihongo mo mochiron benkyou shite imasu"],
    ["友達へのプレゼントを選びました", "tomodachi e no purezento o erabimashita"],
    ["九時までに駅に来てください", "kuji made ni eki ni kite kudasai"],
    ["京都とか奈良とかへ行きたいです", "kyouto toka nara toka e ikitai desu"],
    ["行きたいです。でも、時間がありません", "ikitai desu. demo, jikan ga arimasen"],
    ["危ない！車が来ます", "abunai! kuruma ga kimasu"],
    ["家族は妹を「花ちゃん」と呼んでいます", "kazoku wa imouto o hana-chan to yonde imasu"],
    ["今晩は出かけないつもりです", "konban wa dekakenai tsumori desu"],
    ["会議はオンラインで行うことになりました", "kaigi wa onrain de okonau koto ni narimashita"],
    ["先生に正しい泳ぎ方を教わりました", "sensei ni tadashii oyogikata o osowarimashita"],
  ]);
  const reviewedExamples = [...runtime.vocabCards, ...runtime.grammarCards]
    .flatMap((card) => card.examples || []);
  reviewedRomajiFixtures.forEach((expectedRomaji, japanese) => {
    const reviewedExample = reviewedExamples.find(
      (candidate) => compactText(candidate?.ja) === compactText(japanese),
    );
    check(Boolean(reviewedExample), `reviewed romaji fixture is missing: ${japanese}`);
    check(
      reviewedExample?.romajiStatus === "available" &&
        canonicalText(reviewedExample?.romaji) === canonicalText(expectedRomaji),
      `${japanese} romaji expected ${expectedRomaji}, received ${reviewedExample?.romaji || "(blank)"} / ${reviewedExample?.romajiStatus || "(missing status)"}`,
    );
  });
}

// Grammar entries that only taught an adverb or conjunction (もう, きっと, それに)
// are retired into the vocab card for the same word; their IDs must never come
// back as grammar entries, and the vocab target must be that word.
function validateRetiredGrammarEntries(runtime) {
  const retired = runtime.data.grammar?.retiredEntries || [];
  const liveIds = new Set(runtime.data.grammar.entries.map((entry) => entry.id));
  const vocabById = new Map(
    [...runtime.data.n5.entries, ...runtime.data.n4.entries].map((entry) => [entry.id, entry]),
  );
  check(new Set(retired.map((entry) => entry.id)).size === retired.length, "retired grammar ids must be unique");
  retired.forEach(({ id, pattern, vocabId }) => {
    check(/^n[45]-grammar-\d{3}$/u.test(id), `retired grammar id ${id} is malformed`);
    check(!liveIds.has(id), `retired grammar id ${id} is still a grammar entry`);
    const vocab = vocabById.get(vocabId);
    check(Boolean(vocab), `retired grammar ${id} points to unknown vocab ${vocabId}`);
    check(
      Boolean(vocab) && String(pattern).includes(vocab.headword),
      `retired grammar ${id} ${pattern} does not match vocab ${vocabId} ${vocab?.headword}`,
    );
  });
}

// A grammar point retired into a near-identical point at another level
// (retiredGrammarIds) must not come back as a live entry, belongs to a single
// target, and every card of the target carries the matching card's ID.
function validateRetiredGrammarMerges(runtime) {
  const entries = runtime.data.grammar.entries;
  const liveIds = new Set(entries.map((entry) => entry.id));
  const vocabRetired = new Set((runtime.data.grammar?.retiredEntries || []).map((entry) => entry.id));
  const seen = new Set();
  entries.forEach((entry) => {
    if (!Object.hasOwn(entry, "retiredGrammarIds")) return;
    const retiredIds = entry.retiredGrammarIds;
    check(
      Array.isArray(retiredIds) && retiredIds.length > 0,
      `${entry.id} retiredGrammarIds must be a non-empty array`,
    );
    (Array.isArray(retiredIds) ? retiredIds : []).forEach((retiredId) => {
      check(/^n[345]-grammar-\d{3}$/u.test(retiredId), `retired grammar id ${retiredId} is malformed`);
      check(!liveIds.has(retiredId), `retired grammar id ${retiredId} is still a grammar entry`);
      check(!vocabRetired.has(retiredId), `${retiredId} is retired both into vocab and into ${entry.id}`);
      check(!seen.has(retiredId), `${retiredId} is retired into more than one grammar entry`);
      seen.add(retiredId);
      const cards = runtime.grammarCards.filter((card) => card.grammarKey === entry.id);
      const expected = new Map([
        [`grammar-${entry.id}-zh`, `grammar-${retiredId}-zh`],
        [`grammar-${entry.id}-ja`, `grammar-${retiredId}-ja`],
        [`grammar-${entry.id}-pattern`, `grammar-${retiredId}-pattern`],
        ...entry.drills.map((drill, index) => {
          const suffix = index === 0 ? "" : `-${index + 1}`;
          return [`grammar-${entry.id}-choice${suffix}`, `grammar-${retiredId}-choice${suffix}`];
        }),
      ]);
      expected.forEach((alias, cardId) => {
        const card = cards.find((candidate) => candidate.id === cardId);
        check(
          Boolean(card) && Array.isArray(card.legacyIds) && card.legacyIds.includes(alias),
          `${cardId} must carry retired grammar alias ${alias}`,
        );
      });
    });
  });
}

// 选择题 cards are fill-in drills built from a reviewed example: the prompt is
// that sentence with exactly one blank, the correct option restores it, and
// each wrong option carries its own reviewed reason.
function validateGrammarChoices(grammarCards, grammarData) {
  const grammarById = new Map(grammarData.entries.map((entry) => [entry.id, entry]));
  // An example under the pattern gives its meaning away, so 文型 fronts show
  // the pattern alone.
  const patternCardsWithExample = grammarCards.filter(
    (card) => card.deck.endsWith("-pattern-zh") && card.subtle,
  );
  check(
    patternCardsWithExample.length === 0,
    `文型 cards must not show an example on the front: ${sample(patternCardsWithExample.map((card) => card.id), 5)}`,
  );
  const choiceCards = grammarCards.filter((card) => card.isChoice);
  const drillCount = grammarData.entries.reduce((sum, entry) => sum + (entry.drills?.length || 0), 0);
  check(
    choiceCards.length === drillCount,
    `every grammar drill needs one fill-in card: ${choiceCards.length}/${drillCount}`,
  );
  choiceCards.forEach((card) => {
    check(Array.isArray(card.choices) && card.choices.length === 4, `${card.id} needs four choices`);
    if (!Array.isArray(card.choices)) return;
    const correct = card.choices.filter((choice) => choice.isCorrect);
    check(correct.length === 1, `${card.id} needs exactly one correct choice`);
    check(
      correct[0]?.id === card.correctChoiceId,
      `${card.id} correctChoiceId does not reference its correct choice`,
    );
    const choiceIds = card.choices.map((choice) => choice.id).filter(Boolean);
    check(new Set(choiceIds).size === card.choices.length, `${card.id} choice ids must be unique`);
    const choiceTexts = card.choices.map((choice) => canonicalText(choice.text)).filter(Boolean);
    check(
      new Set(choiceTexts).size === card.choices.length,
      `${card.id} choice texts must be unique after normalization`,
    );
    const owner = grammarById.get(card.grammarKey);
    check(Boolean(owner), `${card.id} references unknown grammarKey ${card.grammarKey}`);
    card.choices.forEach((choice) => {
      check(typeof choice.id === "string" && choice.id, `${card.id} has a choice without id`);
      check(typeof choice.text === "string" && choice.text, `${card.id} has a choice without text`);
      check(typeof choice.reason === "string" && choice.reason, `${card.id} has a choice without reason`);
    });
    if (!owner) return;
    const drillIndex = Number(/-choice-(\d+)$/u.exec(card.id)?.[1] || 1) - 1;
    const drill = owner.drills?.[drillIndex];
    check(Boolean(drill), `${card.id} does not match a drill of ${owner.id}`);
    const example = stripSentencePeriods(owner.examples?.[drill?.example]?.ja || "");
    check(
      card.prompt.split("（　　）").length === 2 &&
        card.prompt.replace("（　　）", correct[0]?.text || "") === example,
      `${card.id} prompt must be its example with one blank the correct option fills`,
    );
    check(card.answer === example, `${card.id} answer must be the completed example`);
    check(card.subtle === stripSentencePeriods(owner.examples?.[drill?.example]?.zh || ""),
      `${card.id} must show its example's Chinese translation as the cue`);
  });
}

// Furigana must come from the same context-guarded segmentation as romaji:
// a Kanji compound is either annotated by one reviewed reading or left bare,
// never assembled from per-character readings (明日 → 明(あか)日(ひ)).
function validateExampleFurigana(cards, reviewedWordSplitsAt = () => []) {
  const kanji = /[\u3400-\u9fff]/u;
  const examples = new Map();
  cards.forEach((card) =>
    (card.examples || []).forEach((example) => {
      if (!examples.has(example.ja)) examples.set(example.ja, example);
    }),
  );
  const malformed = [];
  const splitCompounds = [];
  const unannotated = [];
  examples.forEach((example, text) => {
    const segments = Array.isArray(example.ruby) ? example.ruby : null;
    if (
      !segments ||
      segments.map(([surface]) => surface).join("") !== text ||
      segments.some(([surface, reading]) => !surface || (reading !== null && !reading))
    ) {
      malformed.push(text);
      return;
    }
    const characters = segments.flatMap(([surface, reading], segmentIndex) =>
      [...surface].map((character) => ({ character, reading, segmentIndex })),
    );
    for (let start = 0; start < characters.length; ) {
      if (!kanji.test(characters[start].character)) {
        start += 1;
        continue;
      }
      let end = start;
      while (end < characters.length && kanji.test(characters[end].character)) end += 1;
      const run = characters.slice(start, end);
      const annotated = run.filter((item) => item.reading);
      // A run may only be annotated in several pieces at the word boundaries of
      // a reviewed word division (毎朝|三十分|歩き), never character by character.
      const pieceBoundaries = run
        .map((item, offset) => (offset && item.segmentIndex !== run[offset - 1].segmentIndex ? offset : null))
        .filter((offset) => offset !== null);
      // The division may start before the run (三か月|勉強 covers the run 月勉強).
      const reviewedDivision = !pieceBoundaries.length ||
        Array.from({ length: start + 1 }, (_, spanStart) => spanStart).some((spanStart) =>
          reviewedWordSplitsAt(text, spanStart).some((surfaces) => {
            const wordBoundaries = new Set();
            surfaces.reduce((offset, word) => {
              wordBoundaries.add(offset + word.length);
              return offset + word.length;
            }, spanStart);
            return pieceBoundaries.every((offset) => wordBoundaries.has(start + offset));
          }),
        );
      if (!annotated.length) unannotated.push(`${run.map((item) => item.character).join("")} in ${text}`);
      if (annotated.length && (annotated.length !== run.length || !reviewedDivision)) {
        splitCompounds.push(`${run.map((item) => item.character).join("")} in ${text}`);
      }
      start = end;
    }
  });
  check(!malformed.length, `${malformed.length} examples have malformed ruby segments: ${sample(malformed, 8)}`);
  check(
    !unannotated.length,
    `${unannotated.length} example Kanji have no reviewed furigana: ${sample(unannotated, 8)}`,
  );
  check(
    !splitCompounds.length,
    `${splitCompounds.length} Kanji compounds are annotated piecewise: ${sample(splitCompounds, 8)}`,
  );

  const renderedFixtures = new Map([
    ["明日は雨でしょう", "明日(あした)は雨(あめ)でしょう"],
    ["六か月かかります", "六(ろっ)か月(げつ)かかります"],
    ["夜空で星が光っています", "夜空(よぞら)で星(ほし)が光(ひか)っています"],
    ["店は九時に開きます", "店(みせ)は九時(くじ)に開(あ)きます"],
    ["電車に間に合いました", "電車(でんしゃ)に間(ま)に合(あ)いました"],
    ["昔の友達を思い出しました", "昔(むかし)の友達(ともだち)を思(おも)い出(だ)しました"],
    ["新しい展覧会が開かれています", "新(あたら)しい展覧会(てんらんかい)が開(ひら)かれています"],
    ["会議は三時から行われます", "会議(かいぎ)は三時(さんじ)から行(おこな)われます"],
    ["先生はもう昼ご飯を召し上がりました", "先生(せんせい)はもう昼(ひる)ご飯(はん)を召(め)し上(あ)がりました"],
    ["湖に一そうの舟が浮かんでいます", "湖(みずうみ)に一(いっ)そうの舟(ふね)が浮(う)かんでいます"],
    ["火から白い煙が上がっています", "火(ひ)から白(しろ)い煙(けむり)が上(あ)がっています"],
    ["彼はすっと立ち上がりました", "彼(かれ)はすっと立(た)ち上(あ)がりました"],
    ["駅まで十分ほどかかります", "駅(えき)まで十分(じゅっぷん)ほどかかります"],
    ["時間は十分あります", "時間(じかん)は十分(じゅうぶん)あります"],
    ["壁の塗り方を父に教わりました", "壁(かべ)の塗(ぬ)り方(かた)を父(ちち)に教(おそ)わりました"],
    ["教科書の三十ページを開いてください", "教科書(きょうかしょ)の三十(さんじゅう)ページを開(ひら)いてください"],
    ["毎朝三十分歩きます", "毎朝(まいあさ)三十分(さんじゅっぷん)歩(ある)きます"],
    ["もう一度申します", "もう一度(いちど)申(もう)します"],
    ["今日は一日家にいます", "今日(きょう)は一日(いちにち)家(いえ)にいます"],
    ["この薬を一日三回飲んでください", "この薬(くすり)を一日(いちにち)三回(さんかい)飲(の)んでください"],
    ["ドアが開いています", "ドアが開(あ)いています"],
  ]);
  renderedFixtures.forEach((expected, text) => {
    const rendered = (examples.get(text)?.ruby || [])
      .map(([surface, reading]) => (reading ? `${surface}(${reading})` : surface))
      .join("");
    check(rendered === expected, `furigana for ${text} expected ${expected}, received ${rendered || "(missing)"}`);
  });
  ["明日、先生に会います", "観光客が多いです", "一日三回薬を飲みます"].forEach((text) => {
    const example = examples.get(text);
    if (!example) return;
    const wrong = example.ruby.filter(([surface, reading]) =>
      reading && ["明", "日", "光", "観光"].includes(surface),
    );
    check(!wrong.length, `furigana for ${text} must not annotate ${wrong.map(([surface, reading]) => `${surface}(${reading})`).join(", ")}`);
  });
}

// Browser voices pick their own reading for Kanji (毎年 → まいとし while the card
// shows まいねん), so every spoken sentence must be the reviewed kana, and that kana
// must romanize to exactly the romaji the card displays.
// Every spoken text needs a VOICEVOX clip whose reading build-audio.js verified
// (or a reported skip), so edited readings cannot keep playing a stale clip
// unnoticed; texts without a clip fall back to speechSynthesis.
function validateAudioClips(runtime, html) {
  const manifest = loadAudioManifest();
  if (!manifest) {
    addError("audio-manifest.js is missing; run npm run build:audio with a VOICEVOX engine");
    return;
  }
  check(
    typeof manifest.credit === "string" && html.includes(`音声：${manifest.credit}`),
    `index.html must show the VOICEVOX voice credit 音声：${manifest.credit}`,
  );
  const keys = new Set(manifest.keys.split(" ").filter(Boolean));
  const missingFiles = [...keys].filter(
    (key) => !fs.existsSync(path.join(rootDir, `${manifest.directory}${key}.mp3`)),
  );
  check(!missingFiles.length, `audio-manifest.js lists clips with no file: ${sample(missingFiles)}`);

  const reportPath = path.join(rootDir, audioReportFile);
  const reportRows = fs.existsSync(reportPath)
    ? fs.readFileSync(reportPath, "utf8").trim().split("\n").slice(1).map((line) => line.split("\t"))
    : [];
  const reported = new Map(
    reportRows.map(([key, status, method, text, detail]) => [text, { key, status, method, detail }]),
  );
  const unreported = [];
  const unlisted = [];
  collectSpokenTexts(runtime).forEach((sources, text) => {
    const key = audioClipKey(text);
    const row = reported.get(text);
    if (!row || row.key !== key) unreported.push(text);
    else if (row.status === "ok" && !keys.has(key)) unlisted.push(text);
  });
  check(
    !unreported.length,
    `${unreported.length} spoken text(s) have no verified VOICEVOX clip; run npm run build:audio: ${sample(unreported)}`,
  );
  check(!unlisted.length, `verified clips missing from audio-manifest.js: ${sample(unlisted)}`);

  // Reviewed prosody must belong to a spoken text and be what the clip was rendered with.
  const spoken = collectSpokenTexts(runtime);
  const stale = [];
  const unapplied = [];
  loadAudioProsody().forEach((notation, text) => {
    const row = reported.get(text);
    if (!spoken.has(text)) stale.push(text);
    else if (row?.status !== "ok" || !row.method.endsWith("+prosody") || row.detail.split(" ← ")[0] !== notation) {
      unapplied.push(`${text} → ${notation}`);
    }
  });
  check(!stale.length, `${audioProsodyFile} lists texts the app never speaks: ${sample(stale)}`);
  check(
    !unapplied.length,
    `${unapplied.length} reviewed prosody line(s) are not what the clip was rendered with; run npm run build:audio: ${sample(unapplied)}`,
  );
}

function validateExampleSpeech(cards, kanaToRomaji) {
  const kanji = /[\u3400-\u9fff々]/u;
  const letters = (value) => value.toLowerCase().replace(/[^a-z]/gu, "");
  // Every card's copy is checked: the same sentence can carry different
  // preferred readings under different entries.
  const examples = new Map();
  const missing = [];
  const mismatched = [];
  cards.forEach((card) =>
    (card.examples || []).forEach((example) => {
      const text = example.ja;
      if (!examples.has(text)) examples.set(text, example);
      if (typeof example.speech !== "string" || !example.speech || kanji.test(example.speech)) {
        missing.push(`${card.id}: ${text}`);
        return;
      }
      // を is read o in speech; the plain kana table spells it wo.
      if (letters(kanaToRomaji(example.speech.replace(/を/gu, "お"))) !== letters(example.romaji)) {
        mismatched.push(`${card.id}: ${text} → ${example.speech} / ${example.romaji}`);
      }
    }),
  );
  check(!missing.length, `${missing.length} examples have no reviewed kana speech: ${sample(missing, 8)}`);
  check(
    !mismatched.length,
    `${mismatched.length} example speech readings differ from their romaji: ${sample(mismatched, 8)}`,
  );
  const kanjiSpeech = cards
    .filter((card) => kanji.test(card.speech || "") || kanji.test(card.frontSpeech || ""))
    .map((card) => card.id);
  check(!kanjiSpeech.length, `${kanjiSpeech.length} cards speak Kanji text: ${sample(kanjiSpeech, 8)}`);
  const affixSpeech = cards.filter((card) => /[～〜]/u.test(`${card.speech || ""}${card.frontSpeech || ""}`));
  check(
    !affixSpeech.length,
    `${affixSpeech.length} cards speak the affix mark ～: ${sample(affixSpeech.map((card) => card.id), 8)}`,
  );
  const wordSpeech = new Map([
    ["vocab-entry-n5-433-ja", "でわ"],
    ["vocab-entry-n5-370-ja", "それでわ"],
    ["vocab-entry-n4-615-ja", "またわ"],
    ["vocab-entry-n5-094-ja", "えん"],
    ["vocab-entry-n5-517-ja", "は"],
    ["vocab-entry-n5-519-ja", "はい"],
  ]);
  // Cards list every standard reading so an example read the other way (何を → なに)
  // never contradicts the card; phrase forms such as そう → そうです are not readings.
  const readingLabels = new Map([
    ["vocab-entry-n5-488-ja", "读音：なん（也读 なに）"],
    ["vocab-entry-n5-619-ja", "读音：まいねん（也读 まいとし）"],
    ["vocab-entry-n5-269-ja", "读音：～ごろ"],
    ["vocab-entry-n5-358-ja", "读音：そう"],
    ["vocab-entry-n5-590-ja", "读音：～ふん・～ぷん"],
  ]);
  readingLabels.forEach((expected, id) => {
    const subtle = cards.find((card) => card.id === id)?.subtle;
    check(subtle === expected, `reading label for ${id} expected ${expected}, received ${subtle || "(missing)"}`);
  });
  wordSpeech.forEach((expected, id) => {
    const speech = cards.find((card) => card.id === id)?.speech;
    check(speech === expected, `speech for ${id} expected ${expected}, received ${speech || "(missing)"}`);
  });
  const fixtures = new Map([
    ["毎年、夏に海へ行きます", "まいねん、なつにうみえいきます"],
    ["今日は一日家にいます", "きょうわいちにちいえにいます"],
    ["駅まで十分ほどかかります", "えきまでじゅっぷんほどかかります"],
  ]);
  fixtures.forEach((expected, text) => {
    const speech = examples.get(text)?.speech;
    check(speech === expected, `speech for ${text} expected ${expected}, received ${speech || "(missing)"}`);
  });
}

function checkReadmeDarkOnly(readme) {
  const positiveToggleClaims = readme
    .split(/\r?\n/u)
    .filter((line) => /(?:浅色|暗色|深色)/u.test(line) && /切换/u.test(line))
    .filter((line) => !/(?:没有|不提供|不能|无法|固定|仅|只)/u.test(line));
  check(
    positiveToggleClaims.length === 0,
    `README must not claim that the dark-only UI can switch themes: ${sample(positiveToggleClaims)}`,
  );
  check(
    /(?:固定|仅|只|始终).{0,12}(?:暗色|深色)|(?:暗色|深色).{0,20}(?:不提供|没有|无需).{0,8}(?:主题)?切换/su.test(
      readme,
    ),
    "README must explicitly document the dark-only theme contract",
  );
}

function checkDarkOnlyRuntime(tags, appSource, stylesSource) {
  const toggleNamePattern =
    /(?:theme[-_\s]?(?:toggle|switch)|(?:toggle|switch)[-_\s]?theme|(?:light|dark)[-_\s]?(?:mode|theme|toggle|switch)|(?:mode|theme|toggle|switch)[-_\s]?(?:light|dark)|主题.{0,6}切换|切换.{0,6}主题|(?:浅色|深色|暗色).{0,6}(?:模式|切换))/iu;
  const themeControls = tags.filter((tag) =>
    ["id", "class", "aria-label", "title", "data-action"].some((attribute) =>
      toggleNamePattern.test(tag.attributes[attribute] || ""),
    ),
  );
  check(
    themeControls.length === 0,
    `dark-only HTML must not expose runtime theme controls: ${sample(themeControls.map(tagLabel))}`,
  );

  const appThemePatterns = [
    /prefers-color-scheme/iu,
    /(?:dataset\.theme|setAttribute\(\s*["']data-theme["'])/iu,
    /(?:themeToggle|toggleTheme|switchTheme|setTheme|applyTheme|lightMode|darkMode|colorScheme)\b/u,
    /localStorage[^\n;]{0,80}(?:theme|主题)/iu,
  ];
  check(
    appThemePatterns.every((pattern) => !pattern.test(appSource)),
    "dark-only app.js must not contain runtime theme switching logic",
  );

  const adaptiveThemePatterns = [
    /prefers-color-scheme/iu,
    /\[data-theme\s*=\s*["']?light/iu,
    /(?:\.theme-light|\.light-theme)\b/iu,
  ];
  check(
    adaptiveThemePatterns.every((pattern) => !pattern.test(stylesSource)),
    "dark-only styles.css must not contain adaptive or light-theme selectors",
  );
}

function checkFullStudyRevealTarget(stylesSource, appSource) {
  const studyRule = stylesSource.match(/(?:^|\n)\.study-card\s*\{([^}]*)\}/u)?.[1] || "";
  const cardRule = stylesSource.match(/(?:^|\n)\.card\s*\{([^}]*)\}/u)?.[1] || "";
  const revealRule = stylesSource.match(/(?:^|\n)\.card-reveal\s*\{([^}]*)\}/u)?.[1] || "";

  check(/cursor:\s*pointer\s*;/u.test(studyRule), ".study-card must advertise its reveal target");
  check(/position:\s*relative\s*;/u.test(cardRule), ".card must anchor the speech status");
  check(
    !/position:\s*absolute\s*;/u.test(revealRule),
    ".card-reveal must remain in flow so long prompts contribute to intrinsic card height",
  );
  check(
    /width:\s*100%\s*;/u.test(revealRule) && /max-width:\s*100%\s*;/u.test(revealRule),
    ".card-reveal must span the full card width",
  );
  // The speaker sits beside the reading, outside the reveal button; clicks on it
  // (and any other control) must not reveal the card.
  check(
    /function revealFromStudySurface[\s\S]*?closest\?\.\(\s*["']button\b/u.test(appSource),
    "app.js study-surface reveal must ignore clicks on controls such as the speaker",
  );
  check(
    /elements\.studyCard\.addEventListener\(\s*["']click["']\s*,\s*revealFromStudySurface/u.test(
      appSource,
    ),
    "app.js must reveal from non-control clicks across #studyCard",
  );
  check(!appSource.includes("应用已就绪。"), "app.js must not flash a ready-status message");
}

function checkPackageContract(packageJson) {
  check(packageJson?.engines?.node === ">=20", "package.json engines.node must declare >=20");
  check(
    read(".nvmrc").trim() === String(preferredNodeMajor),
    `.nvmrc must select the preferred Node ${preferredNodeMajor}`,
  );
  check(
    packageJson?.scripts?.check ===
      "npm run validate && npm run validate:bundle && npm run test:contracts",
    "package.json check must run validate, validate:bundle, and test:contracts in order",
  );
  check(
    packageJson?.scripts?.["update:manifest"] === "node scripts/update-validation-manifest.js",
    "package.json must expose the deterministic update:manifest command",
  );
}

function main() {
  const nodeMajor = Number.parseInt(process.versions.node.split(".")[0], 10);
  check(
    nodeMajor >= minimumNodeMajor,
    `validation requires Node ${minimumNodeMajor}+, received ${process.versions.node}`,
  );
  checkSyntax();
  const packageJson = capture("could not parse package.json", () => readJson("package.json"));
  if (packageJson) checkPackageContract(packageJson);

  const report = capture("could not load validation-report.json", loadValidationReport);
  if (report) validateReportStructure(report).forEach(addError);
  const sourceFingerprint = capture("could not compute validation source fingerprint", () =>
    computeSourceFingerprint(),
  );
  if (report?.source_fingerprint && sourceFingerprint) {
    check(
      report.source_fingerprint === sourceFingerprint,
      `validation baseline fingerprint is stale; run npm run update:manifest (expected ${report.source_fingerprint}, received ${sourceFingerprint})`,
    );
  }

  const html = read("index.html");
  const appSource = read("app.js");
  const { tabDecks, tags } = checkHtmlAndDomContracts(html, appSource);
  checkReadmeDarkOnly(read("README.md"));
  const stylesSource = read("styles.css");
  checkDarkOnlyRuntime(tags, appSource, stylesSource);
  checkFullStudyRevealTarget(stylesSource, appSource);

  const n5Json = capture("could not parse n5-codex-vocab.json", () =>
    readJson("n5-codex-vocab.json"),
  );
  const n4Json = capture("could not parse ayaya-n4-codex-vocab.json", () =>
    readJson("ayaya-n4-codex-vocab.json"),
  );
  const n3Json = capture("could not parse ayaya-n3-codex-vocab.json", () =>
    readJson("ayaya-n3-codex-vocab.json"),
  );
  const n5Window = capture("could not load n5-codex-vocab.js", () =>
    runBrowserScript("n5-codex-vocab.js"),
  );
  const n4Window = capture("could not load ayaya-n4-codex-vocab.js", () =>
    runBrowserScript("ayaya-n4-codex-vocab.js"),
  );
  const n3Window = capture("could not load ayaya-n3-codex-vocab.js", () =>
    runBrowserScript("ayaya-n3-codex-vocab.js"),
  );
  const n5Js = n5Window?.AYAYA_N5_CODEX_VOCAB;
  const n4Js = n4Window?.AYAYA_N4_CODEX_VOCAB;
  const n3Js = n3Window?.AYAYA_N3_CODEX_VOCAB;
  const grammarData = capture("could not load grammar-data.js", () =>
    loadScriptGlobal("grammar-data.js", "AYAYA_GRAMMAR_DATA"),
  );

  if (n5Json && n5Js) {
    check(
      JSON.stringify(n5Json) === JSON.stringify(n5Js),
      "n5-codex-vocab.js and n5-codex-vocab.json are out of sync",
    );
  }
  if (n4Json && n4Js) {
    check(
      JSON.stringify(n4Json) === JSON.stringify(n4Js),
      "ayaya-n4-codex-vocab.js and ayaya-n4-codex-vocab.json are out of sync",
    );
  }
  if (n3Json && n3Js) {
    check(
      JSON.stringify(n3Json) === JSON.stringify(n3Js),
      "ayaya-n3-codex-vocab.js and ayaya-n3-codex-vocab.json are out of sync",
    );
  }
  if (n5Json && n4Json && n3Json) validateVocabLevelBoundaries(n5Json, n4Json, n3Json);
  if (n5Json) validateHeadwordRomaji("N5", n5Json);
  if (n4Json) validateHeadwordRomaji("N4", n4Json);
  if (n3Json) validateHeadwordRomaji("N3", n3Json);
  if (n5Json && n4Json && n3Json) validateGrammarOnlyVocab(n5Json, n4Json, n3Json);
  if (n5Window && n4Window && n3Window) validateCompatibilityExampleIndexes(n5Window, n4Window, n3Window);

  if (report?.expected_counts) {
    if (n5Json) validateVocabSource("N5", n5Json, report.expected_counts.n5_entries);
    if (n4Json) validateVocabSource("N4", n4Json, report.expected_counts.n4_entries);
    if (n3Json) validateVocabSource("N3", n3Json, report.expected_counts.n3_entries);
    if (grammarData) validateGrammarSource(grammarData, report.expected_counts.grammar_entries);
  }

  const runtime = capture("card builder runtime failed", () => buildRuntime(loadBundledData()));
  if (runtime && report?.expected_counts) {
    compareCounts(runtime.counts, report.expected_counts).forEach((error) =>
      addError(`runtime count drift: ${error}`),
    );
    const cards = [...runtime.kanaCards, ...runtime.vocabCards, ...runtime.grammarCards];
    validateLevelSpecificBuilders(runtime);
    validateKanaMarkClassification(runtime.kanaCards);
    validateCardSchema(cards, tabDecks);
    validateDeckCoverage(cards, tabDecks, runtime.data);
    validateVocabCategoryLabels(runtime);
    validateDisplayedRomaji(cards);
    validateRomajiCoverage(cards);
    capture("reviewed romaji corpus-lock check failed", () => validateRomajiCorpusLock(runtime));
    validatePromptDisambiguation(cards);
    capture("stable vocab id regression check failed", () => validateStableVocabIds(runtime));
    validateMergedVocabSources(runtime);
    validateRetiredVocabGrammarMigrations(runtime);
    validateProductionLegacyVocabIds(runtime);
    validatePreferredReadingRegressions(runtime);
    validateGrammarChoices(runtime.grammarCards, runtime.data.grammar);
    validateRetiredGrammarEntries(runtime);
    validateRetiredGrammarMerges(runtime);
    validateExampleFurigana(cards, runtime.cardData.reviewedWordSplitsAt);
    validateExampleSpeech(cards, runtime.cardData.kanaToRomaji);
    capture("audio clip check failed", () => validateAudioClips(runtime, html));
    capture("romaji word spacing check failed", () =>
      validateRomajiWordSpacing(cards, loadScriptGlobal("romaji-word-spacing.js", "AYAYA_ROMAJI_SPACING")),
    );
    if (n5Json && n4Json && n3Json) {
      capture("homophone check failed", () =>
        validateHomophoneData(
          loadScriptGlobal("homophone-data.js", "AYAYA_HOMOPHONES"),
          n5Json,
          n4Json,
          n3Json,
          runtime.vocabCards,
        ),
      );
      capture("pitch accent check failed", () =>
        validatePitchAccentData(
          loadScriptGlobal("pitch-accent-data.js", "AYAYA_PITCH_ACCENT"),
          n5Json,
          n4Json,
          n3Json,
          runtime.vocabCards,
        ),
      );
    }
  }

  if (validationErrors.length) {
    console.error(`Validation failed with ${validationErrors.length} issue(s):`);
    validationErrors.forEach((error, index) => console.error(`${index + 1}. ${error}`));
    process.exitCode = 1;
    return;
  }
  console.log("Validation passed: source, runtime, content, DOM, and documentation contracts are green.");
}

main();
