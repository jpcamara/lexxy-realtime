import { defineConfig } from "rolldown";

// Bundle the browser test apps into the test server's public/ dir. Everything is
// inlined (no externals) so each page is a single self-contained script: Lexxy,
// lexxy-realtime, Yjs, y-protocols, the ActionCable consumer, and the real
// @rails/activestorage (the uploads e2e drives DirectUpload for real).
const bundle = (input, file) =>
  defineConfig({
    input,
    output: { file, format: "esm", codeSplitting: false },
  });

export default [
  bundle("test/browser/app.js", "test/server/public/app.js"),
  bundle("test/browser/lifecycle_app.js", "test/server/public/lifecycle.js"),
];
