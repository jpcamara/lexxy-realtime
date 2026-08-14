import { defineConfig } from "rolldown";
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The pages link Lexxy's real stylesheets so the harness looks like an
// actual Lexxy editor (icons, chrome, typography), not a bare page.
const root = dirname(dirname(dirname(fileURLToPath(import.meta.url))));
const cssTarget = join(root, "test", "server", "public", "lexxy-css");
mkdirSync(cssTarget, { recursive: true });
for (const f of ["lexxy.css", "lexxy-variables.css", "lexxy-content.css", "lexxy-editor.css"]) {
  copyFileSync(join(root, "node_modules", "@37signals", "lexxy", "dist", "stylesheets", f), join(cssTarget, f));
}

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
