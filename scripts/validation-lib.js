"use strict";

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const rootDir = path.resolve(__dirname, "..");

const manifestArtifactType = "validation-baseline";
const manifestPurpose =
  "Committed source fingerprint and expected counts; this manifest is not a record that checks passed.";
const minimumNodeMajor = 20;
const preferredNodeMajor = 22;
const sourceFingerprintFiles = [
  "app.js",
  "ayaya-n4-codex-vocab.js",
  "ayaya-n4-codex-vocab.json",
  "card-data.js",
  "grammar-data.js",
  "index.html",
  "n5-codex-vocab.js",
  "n5-codex-vocab.json",
  "styles.css",
];

const countKeys = [
  "n5_entries",
  "n4_entries",
  "grammar_entries",
  "kana_cards",
  "vocab_cards",
  "grammar_cards",
  "total_cards_from_api",
];

const requiredContracts = [
  "source-js-json-sync",
  "generated-card-schema",
  "stable-source-derived-vocab-ids",
  "semantic-duplicate-signatures",
  "vocab-level-boundary-deduplication",
  "vocab-learning-category-labels",
  "display-romaji-script-safety",
  "prompt-collision-disambiguation",
  "same-level-grammar-distractors",
  "dom-selector-and-aria-controls",
  "dark-only-readme",
  "app-regressions",
  "lazy-level-builder-parity",
  "production-legacy-id-migration-map",
  "retired-source-id-migration",
  "vocab-to-grammar-progress-migration",
  "vocab-speech-reading",
  "compatibility-example-index",
  "html-structure-and-script-order",
  "strict-language-tags",
  "dark-only-runtime",
  "validation-source-fingerprint",
  "preferred-homograph-readings",
  "reviewed-romaji-fixtures",
  "reviewed-romaji-corpus-lock",
  "romaji-coverage-regression",
  "kana-mark-classification",
  "n5-content-regressions",
  "reviewed-vocab-facts",
  "grammar-formation-regressions",
  "grammar-content-regressions",
  "full-study-reveal-target",
];

function read(relativePath) {
  return fs.readFileSync(path.join(rootDir, relativePath), "utf8");
}

function readJson(relativePath) {
  return JSON.parse(read(relativePath));
}

function cloneJson(value) {
  return JSON.parse(JSON.stringify(value));
}

function runBrowserScript(relativePath, windowObject = {}) {
  const context = { window: windowObject };
  context.globalThis = context;
  vm.createContext(context);
  vm.runInContext(read(relativePath), context, { filename: relativePath, timeout: 5000 });
  return context.window;
}

function loadScriptGlobal(relativePath, globalName) {
  return runBrowserScript(relativePath)[globalName];
}

function loadBundledData() {
  return {
    grammar: loadScriptGlobal("grammar-data.js", "AYAYA_GRAMMAR_DATA"),
    n4: loadScriptGlobal("ayaya-n4-codex-vocab.js", "AYAYA_N4_CODEX_VOCAB"),
    n5: loadScriptGlobal("n5-codex-vocab.js", "AYAYA_N5_CODEX_VOCAB"),
  };
}

function loadCardData({ grammar, n4, n5 }) {
  const windowObject = {
    AYAYA_GRAMMAR_DATA: grammar,
    AYAYA_N4_CODEX_VOCAB: n4,
    AYAYA_N5_CODEX_VOCAB: n5,
  };
  return runBrowserScript("card-data.js", windowObject).AYAYA_JP_CARD_DATA;
}

function buildRuntime(data = loadBundledData()) {
  const cardData = loadCardData(data);
  if (!cardData) {
    throw new Error("card-data.js did not expose AYAYA_JP_CARD_DATA");
  }

  const kanaCards = cardData.makeKanaCards();
  const vocabCards = cardData.makeVocabCards();
  const grammarCards = cardData.makeGrammarCards();
  const vocabCardsByLevel = {
    N4: cardData.makeVocabCards("N4"),
    N5: cardData.makeVocabCards("N5"),
  };
  const grammarCardsByLevel = {
    N4: cardData.makeGrammarCards("N4"),
    N5: cardData.makeGrammarCards("N5"),
  };
  const counts = {
    n5_entries: data.n5?.entries?.length,
    n4_entries: data.n4?.entries?.length,
    grammar_entries: data.grammar?.entries?.length,
    kana_cards: kanaCards.length,
    vocab_cards: vocabCards.length,
    grammar_cards: grammarCards.length,
  };
  counts.total_cards_from_api =
    counts.kana_cards + counts.vocab_cards + counts.grammar_cards;

  return {
    cardData,
    counts,
    data,
    grammarCards,
    grammarCardsByLevel,
    kanaCards,
    vocabCards,
    vocabCardsByLevel,
  };
}

function computeSourceFingerprint() {
  const hash = crypto.createHash("sha256");
  hash.update("ayaya-jp-validation-source-v1\0");
  sourceFingerprintFiles.forEach((relativePath) => {
    hash.update(relativePath);
    hash.update("\0");
    hash.update(fs.readFileSync(path.join(rootDir, relativePath)));
    hash.update("\0");
  });
  return `sha256:${hash.digest("hex")}`;
}

function loadValidationReport() {
  return readJson("validation-report.json");
}

function validateReportStructure(report) {
  const errors = [];
  if (!report || typeof report !== "object" || Array.isArray(report)) {
    return ["validation-report.json must contain an object"];
  }
  if (report.schema_version !== 3) {
    errors.push("validation-report.json schema_version must be 3");
  }
  if (report.artifact_type !== manifestArtifactType) {
    errors.push(`validation-report.json artifact_type must be ${manifestArtifactType}`);
  }
  if (report.purpose !== manifestPurpose) {
    errors.push("validation-report.json must describe itself as a baseline, not a test outcome");
  }
  if (report.verification_command !== "npm run check") {
    errors.push("validation-report.json verification_command must be npm run check");
  }
  if (report.minimum_node_major !== minimumNodeMajor) {
    errors.push(`validation-report.json minimum_node_major must be ${minimumNodeMajor}`);
  }
  if (report.preferred_node_major !== preferredNodeMajor) {
    errors.push(`validation-report.json preferred_node_major must be ${preferredNodeMajor}`);
  }
  if (!/^sha256:[a-f0-9]{64}$/u.test(report.source_fingerprint || "")) {
    errors.push("validation-report.json source_fingerprint must be a SHA-256 value");
  }
  if (
    !Array.isArray(report.source_fingerprint_files) ||
    JSON.stringify(report.source_fingerprint_files) !== JSON.stringify(sourceFingerprintFiles)
  ) {
    errors.push("validation-report.json source_fingerprint_files does not match the validator scope");
  }

  const expectedCounts = report.expected_counts;
  if (!expectedCounts || typeof expectedCounts !== "object" || Array.isArray(expectedCounts)) {
    errors.push("validation-report.json expected_counts must be an object");
  } else {
    countKeys.forEach((key) => {
      if (!Number.isInteger(expectedCounts[key]) || expectedCounts[key] < 0) {
        errors.push(`validation-report.json expected_counts.${key} must be a non-negative integer`);
      }
    });
    if (
      Number.isInteger(expectedCounts.total_cards_from_api) &&
      expectedCounts.total_cards_from_api !==
        expectedCounts.kana_cards + expectedCounts.vocab_cards + expectedCounts.grammar_cards
    ) {
      errors.push("validation-report.json total card count does not equal its card subtotals");
    }
  }

  if (!Array.isArray(report.required_contracts)) {
    errors.push("validation-report.json required_contracts must be an array");
  } else {
    const missing = requiredContracts.filter(
      (contract) => !report.required_contracts.includes(contract),
    );
    if (missing.length) {
      errors.push(`validation-report.json is missing required contracts: ${missing.join(", ")}`);
    }
    if (new Set(report.required_contracts).size !== report.required_contracts.length) {
      errors.push("validation-report.json required_contracts contains duplicates");
    }
  }
  return errors;
}

function compareCounts(actual, expected) {
  return countKeys
    .filter((key) => actual[key] !== expected[key])
    .map((key) => `${key}: expected ${expected[key]}, received ${actual[key]}`);
}

function canonicalText(value) {
  return String(value ?? "")
    .normalize("NFKC")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

function compactText(value) {
  return canonicalText(value).replace(/[\s。、，；;:：.!！?？（）()「」『』]/g, "");
}

function hasJapaneseScript(value) {
  return /[\u3005\u3006\u303b\u3040-\u30ff\u3400-\u9fff\uff66-\uff9f]/u.test(
    String(value ?? ""),
  );
}

function sample(items, limit = 5) {
  const values = items.slice(0, limit);
  return `${values.join("; ")}${items.length > limit ? `; ... (+${items.length - limit})` : ""}`;
}

module.exports = {
  buildRuntime,
  canonicalText,
  cloneJson,
  compactText,
  compareCounts,
  computeSourceFingerprint,
  countKeys,
  hasJapaneseScript,
  loadBundledData,
  loadCardData,
  loadScriptGlobal,
  loadValidationReport,
  manifestArtifactType,
  manifestPurpose,
  minimumNodeMajor,
  preferredNodeMajor,
  read,
  readJson,
  requiredContracts,
  rootDir,
  runBrowserScript,
  sample,
  sourceFingerprintFiles,
  validateReportStructure,
};
