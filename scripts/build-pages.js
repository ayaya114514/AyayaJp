"use strict";

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "..");
const outputDir = path.join(rootDir, "_site");
const runtimeAssets = [
  "styles.css",
  "n5-codex-vocab.js",
  "ayaya-n4-codex-vocab.js",
  "grammar-data.js",
  "pitch-accent-data.js",
  "romaji-word-spacing.js",
  "example-readings.js",
  "card-data.js",
  "app.js",
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

  runtimeAssets.forEach((relativePath) => {
    fs.copyFileSync(path.join(rootDir, relativePath), path.join(outputDir, relativePath));
  });

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

  console.log(`Built GitHub Pages artifact with asset version ${version}`);
}

main();
