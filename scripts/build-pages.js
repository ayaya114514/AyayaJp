"use strict";

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");

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
  "romaji-word-spacing.js",
  "example-readings.js",
  "audio-manifest.js",
  "card-data.js",
  "app.js",
];

// Home-screen install files: copied as is, they are not cached alongside the
// versioned runtime assets.
const staticAssets = [
  "manifest.webmanifest",
  "icons/icon.svg",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/apple-touch-icon.png",
];

function contentVersion() {
  const hash = crypto.createHash("sha256");
  runtimeAssets.forEach((relativePath) => {
    hash.update(relativePath);
    hash.update("\0");
    hash.update(fs.readFileSync(path.join(rootDir, relativePath)));
    hash.update("\0");
  });
  return hash.digest("hex").slice(0, 16);
}

function versionHtml(html, version) {
  runtimeAssets.forEach((relativePath) => {
    const escapedPath = relativePath.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const assetPattern = new RegExp(`(href|src)=(['"])\\./${escapedPath}(?:\\?v=[^'"]*)?\\2`, "gu");
    html = html.replace(assetPattern, `$1=$2./${relativePath}?v=${version}$2`);
  });
  return html;
}

function main() {
  const version = process.env.GITHUB_SHA?.slice(0, 16) || contentVersion();
  fs.rmSync(outputDir, { force: true, recursive: true });
  fs.mkdirSync(outputDir, { recursive: true });

  [...runtimeAssets, ...staticAssets].forEach((relativePath) => {
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
  fs.writeFileSync(path.join(outputDir, "index.html"), versionHtml(sourceHtml, version));
  fs.writeFileSync(path.join(outputDir, ".nojekyll"), "");

  const builtHtml = fs.readFileSync(path.join(outputDir, "index.html"), "utf8");
  runtimeAssets.forEach((relativePath) => {
    const expected = `./${relativePath}?v=${version}`;
    if (!builtHtml.includes(expected)) {
      throw new Error(`Could not attach the deployment version to ${relativePath}`);
    }
  });

  console.log(`Built GitHub Pages artifact with asset version ${version} and ${clipKeys.length} audio clips`);
}

main();
