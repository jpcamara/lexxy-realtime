import { defineConfig } from "rolldown";
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The test pages link Lexxy's stylesheets so the editors look like real Lexxy
// editors, with icons, toolbar, and typography.
const root = dirname(dirname(dirname(fileURLToPath(import.meta.url))));
const cssTarget = join(root, "test", "server", "public", "lexxy-css");
mkdirSync(cssTarget, { recursive: true });
for (const f of ["lexxy.css", "lexxy-variables.css", "lexxy-content.css", "lexxy-editor.css"]) {
  copyFileSync(join(root, "node_modules", "@37signals", "lexxy", "dist", "stylesheets", f), join(cssTarget, f));
}

// Bundle the browser test apps into the test server's public/ directory.
// Nothing is external, so each page loads one script containing Lexxy,
// lexxy-realtime, Yjs, y-protocols, the Action Cable consumer, and
// @rails/activestorage. The uploads e2e uses the real DirectUpload.
const bundle = (input, file) =>
  defineConfig({
    input,
    output: { file, format: "esm", codeSplitting: false },
  });

export default [
  bundle("test/browser/navigation_app.js", "test/server/public/navigation.js"),
  bundle("test/browser/app.js", "test/server/public/app.js"),
  bundle("test/browser/lifecycle_app.js", "test/server/public/lifecycle.js"),
];
