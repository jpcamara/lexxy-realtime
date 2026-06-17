import { defineConfig } from "rolldown";
import { fileURLToPath } from "node:url";

// Bundle the browser test app into the test server's public/ dir. Everything is
// inlined (no externals) so the page is a single self-contained script: Lexxy,
// lexxy-realtime, Yjs, y-protocols, and the ActionCable consumer.
export default defineConfig({
  input: "test/browser/app.js",
  resolve: {
    alias: {
      // File uploads aren't exercised by the collaboration tests.
      "@rails/activestorage": fileURLToPath(new URL("./stubs/activestorage.js", import.meta.url)),
    },
  },
  output: {
    file: "test/server/public/app.js",
    format: "esm",
    inlineDynamicImports: true,
  },
});
