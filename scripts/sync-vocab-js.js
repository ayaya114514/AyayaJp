"use strict";

// Regenerates the runtime vocabulary JS mirrors from their canonical JSON
// sources. Only the data object literal is rewritten; the file header and the
// compatibility helpers that follow it are preserved verbatim.

const fs = require("fs");
const path = require("path");

const rootDir = path.resolve(__dirname, "..");
const mirrors = [
  { json: "n5-codex-vocab.json", js: "n5-codex-vocab.js", global: "AYAYA_N5_CODEX_VOCAB" },
  { json: "ayaya-n4-codex-vocab.json", js: "ayaya-n4-codex-vocab.js", global: "AYAYA_N4_CODEX_VOCAB" },
];

function renderMirror({ json, js, global }) {
  // The mirror embeds the JSON text verbatim so both files stay diffable.
  const jsonText = fs.readFileSync(path.join(rootDir, json), "utf8").trimEnd();
  JSON.parse(jsonText);
  const source = fs.readFileSync(path.join(rootDir, js), "utf8");
  const opening = `window.${global} = `;
  const start = source.indexOf(opening);
  const end = source.indexOf("\n};\n", start);
  if (start < 0 || end < 0) {
    throw new Error(`${js} does not contain a recognizable window.${global} object literal`);
  }
  return `${source.slice(0, start + opening.length)}${jsonText}${source.slice(end + 2)}`;
}

function main() {
  const checkOnly = process.argv.includes("--check");
  const stale = [];

  mirrors.forEach((mirror) => {
    const target = path.join(rootDir, mirror.js);
    const next = renderMirror(mirror);
    if (fs.readFileSync(target, "utf8") === next) return;
    stale.push(mirror.js);
    if (!checkOnly) fs.writeFileSync(target, next);
  });

  if (checkOnly && stale.length) {
    console.error(`Vocabulary JS mirrors are stale: ${stale.join(", ")}; run npm run sync:vocab`);
    process.exitCode = 1;
    return;
  }
  console.log(stale.length ? `Regenerated ${stale.join(", ")}` : "Vocabulary JS mirrors are up to date");
}

main();
