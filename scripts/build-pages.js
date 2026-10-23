"use strict";

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const { isDeepStrictEqual } = require("util");
const vm = require("vm");

const { loadAudioManifest } = require("./audio-lib");

const rootDir = path.resolve(__dirname, "..");
const outputDir = path.join(rootDir, "_site");
const runtimeAssets = [
  "styles.css",
  "n5-codex-vocab.js",
  "ayaya-n4-codex-vocab.js",
  "ayaya-n3-codex-vocab.js",
  "grammar-data.js",
  "pitch-accent-data.js",
  "homophone-data.js",
  "romaji-word-spacing.js",
  "example-readings.js",
  "audio-manifest.js",
  "card-data.js",
  "kana-cards.js",
  "app.js",
];

// Copied as is, without ?v=: the service worker (its URL must stay stable for
// the browser to find updates) and the home-screen install files.
const staticAssets = [
  "sw.js",
  "manifest.webmanifest",
  "icons/icon.svg",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/apple-touch-icon.png",
];

// Data files that open with one large `window.NAME = {...};` literal. In the
// artifact that literal becomes JSON.parse('<minified JSON>'): smaller, and
// faster for engines to parse than an object literal of this size. The source
// files stay readable; the code after the literal is copied unchanged.
const compactDataAssets = new Set([
  "n5-codex-vocab.js",
  "ayaya-n4-codex-vocab.js",
  "ayaya-n3-codex-vocab.js",
  "grammar-data.js",
  "pitch-accent-data.js",
  "homophone-data.js",
  "romaji-word-spacing.js",
  "example-readings.js",
]);

function runWithWindow(source, filename) {
  const window = {};
  vm.runInNewContext(source, { window }, { filename });
  return JSON.stringify(window);
}

function compactDataScript(relativePath) {
  const source = fs.readFileSync(path.join(rootDir, relativePath), "utf8");
  const head = /^window\.([A-Z0-9_]+) = \{$/m.exec(source);
  if (!head) throw new Error(`${relativePath}: no leading window.NAME = { literal`);
  const literalStart = head.index + head[0].length - 1;
  const literalEnd = source.indexOf("\n};", literalStart);
  if (literalEnd === -1) throw new Error(`${relativePath}: unterminated data literal`);
  const literal = source.slice(literalStart, literalEnd + 2);

  // Fail closed: the minified JSON must hold exactly the literal's values
  // (JSON would silently drop undefined or turn NaN into null) ...
  const value = vm.runInThisContext(`(${literal})`, { filename: relativePath });
  const json = JSON.stringify(value);
  if (!isDeepStrictEqual(JSON.parse(json), value)) {
    throw new Error(`${relativePath}: data literal does not survive a JSON round trip`);
  }
  const quoted = json.replace(/\\/g, "\\\\").replace(/'/g, "\\'");
  const compact =
    `${source.slice(0, head.index)}window.${head[1]} = JSON.parse('${quoted}');` +
    source.slice(literalEnd + 3);

  // ... and the whole script must define the same globals as the source.
  if (runWithWindow(compact, relativePath) !== runWithWindow(source, relativePath)) {
    throw new Error(`${relativePath}: compacted script defines different data`);
  }
  return compact;
}

function artifactContent(relativePath) {
  return compactDataAssets.has(relativePath)
    ? Buffer.from(compactDataScript(relativePath), "utf8")
    : fs.readFileSync(path.join(rootDir, relativePath));
}

// Each asset is versioned by its own (built) content, so a deploy that changes
// only app.js does not make returning visitors download the multi-megabyte
// data files again (a commit-wide version invalidated every file on every push).
function contentVersion(content) {
  return crypto.createHash("sha256").update(content).digest("hex").slice(0, 16);
}

function versionHtml(html, versions) {
  runtimeAssets.forEach((relativePath) => {
    const escapedPath = relativePath.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const assetPattern = new RegExp(`(href|src)=(['"])\\./${escapedPath}(?:\\?v=[^'"]*)?\\2`, "gu");
    html = html.replace(assetPattern, `$1=$2./${relativePath}?v=${versions.get(relativePath)}$2`);
  });
  return html;
}

function main() {
  const contents = new Map(runtimeAssets.map((relativePath) => [relativePath, artifactContent(relativePath)]));
  const versions = new Map(
    runtimeAssets.map((relativePath) => [relativePath, contentVersion(contents.get(relativePath))]),
  );
  fs.rmSync(outputDir, { force: true, recursive: true });
  fs.mkdirSync(outputDir, { recursive: true });

  runtimeAssets.forEach((relativePath) => {
    fs.mkdirSync(path.dirname(path.join(outputDir, relativePath)), { recursive: true });
    fs.writeFileSync(path.join(outputDir, relativePath), contents.get(relativePath));
  });
  staticAssets.forEach((relativePath) => {
    fs.mkdirSync(path.dirname(path.join(outputDir, relativePath)), { recursive: true });
    fs.copyFileSync(path.join(rootDir, relativePath), path.join(outputDir, relativePath));
  });

  // Clip names hash the spoken text, not the audio: a clip re-rendered in place
  // (after an audio-prosody.tsv fix) keeps its URL, so browsers may replay the
  // old take until GitHub Pages' 10-minute cache expires. No ?v= is added.
  const audio = loadAudioManifest();
  const clipKeys = audio ? audio.keys.split(" ").filter(Boolean) : [];
  if (clipKeys.length) {
    fs.mkdirSync(path.join(outputDir, audio.directory), { recursive: true });
    clipKeys.forEach((key) => {
      const relativePath = `${audio.directory}${key}.mp3`;
      fs.copyFileSync(path.join(rootDir, relativePath), path.join(outputDir, relativePath));
    });
  }

  const sourceHtml = fs.readFileSync(path.join(rootDir, "index.html"), "utf8");
  fs.writeFileSync(path.join(outputDir, "index.html"), versionHtml(sourceHtml, versions));
  fs.writeFileSync(path.join(outputDir, ".nojekyll"), "");

  const builtHtml = fs.readFileSync(path.join(outputDir, "index.html"), "utf8");
  runtimeAssets.forEach((relativePath) => {
    const expected = `./${relativePath}?v=${versions.get(relativePath)}`;
    if (!builtHtml.includes(expected)) {
      throw new Error(`Could not attach the deployment version to ${relativePath}`);
    }
  });

  console.log(
    `Built GitHub Pages artifact with ${versions.size} content-versioned assets and ${clipKeys.length} audio clips`,
  );
}

main();
