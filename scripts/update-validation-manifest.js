"use strict";

const fs = require("fs");
const path = require("path");

const {
  buildRuntime,
  computeSourceFingerprint,
  loadBundledData,
  manifestArtifactType,
  manifestPurpose,
  minimumNodeMajor,
  preferredNodeMajor,
  readJson,
  requiredContracts,
  rootDir,
  sourceFingerprintFiles,
} = require("./validation-lib");

function assertSourceCopiesMatch(data) {
  const pairs = [
    ["N5", readJson("n5-codex-vocab.json"), data.n5],
    ["N4", readJson("ayaya-n4-codex-vocab.json"), data.n4],
    ["N3", readJson("ayaya-n3-codex-vocab.json"), data.n3],
    ["N2", readJson("ayaya-n2-codex-vocab.json"), data.n2],
  ];
  pairs.forEach(([label, jsonData, jsData]) => {
    if (JSON.stringify(jsonData) !== JSON.stringify(jsData)) {
      throw new Error(`${label} JS/JSON sources are out of sync; refusing to update the manifest`);
    }
  });
}

function main() {
  const nodeMajor = Number.parseInt(process.versions.node.split(".")[0], 10);
  if (nodeMajor < minimumNodeMajor) {
    throw new Error(
      `manifest update requires Node ${minimumNodeMajor}+, received ${process.versions.node}`,
    );
  }

  const data = loadBundledData();
  assertSourceCopiesMatch(data);
  const runtime = buildRuntime(data);
  const manifest = {
    schema_version: 3,
    artifact_type: manifestArtifactType,
    purpose: manifestPurpose,
    verification_command: "npm run check",
    minimum_node_major: minimumNodeMajor,
    preferred_node_major: preferredNodeMajor,
    source_fingerprint_files: sourceFingerprintFiles,
    source_fingerprint: computeSourceFingerprint(),
    expected_counts: runtime.counts,
    required_contracts: requiredContracts,
  };
  const destination = path.join(rootDir, "validation-report.json");
  fs.writeFileSync(destination, `${JSON.stringify(manifest, null, 2)}\n`);
  console.log(`Updated ${path.relative(process.cwd(), destination) || "validation-report.json"}`);
  console.log(`Source fingerprint: ${manifest.source_fingerprint}`);
}

main();
