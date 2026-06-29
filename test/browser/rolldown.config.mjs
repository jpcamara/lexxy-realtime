import { defineConfig } from "rolldown";
import { fileURLToPath } from "node:url";

// Bundle the browser test apps into the test server's public/ dir. Everything is
// inlined (no externals) so each page is a single self-contained script: Lexxy,
// lexxy-realtime, Yjs, y-protocols, and the ActionCable consumer.
const alias = {
  // File uploads aren't exercised by the collaboration tests.
  "@rails/activestorage": fileURLToPath(new URL("./stubs/activestorage.js", import.meta.url)),
};

const bundle = (input, file) =>
  defineConfig({
    input,
    resolve: { alias },
    output: { file, format: "esm", inlineDynamicImports: true },
  });

export default [
  bundle("test/browser/app.js", "test/server/public/app.js"),
  bundle("test/browser/lifecycle_app.js", "test/server/public/lifecycle.js"),
];
