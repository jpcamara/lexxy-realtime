// Writes the cursor stylesheet as real files from the same source the
// runtime injects: dist/lexxy-realtime.css for npm consumers and the gem's
// asset for Rails apps. Both are for apps whose Content-Security-Policy
// blocks injected style tags; the :root marker tells the runtime the file
// is loaded so it skips injection. Runs as part of `npm run build` and
// `npm run build:importmap`, and CI's asset drift check covers the
// committed gem copy.
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { CURSOR_CSS } from "../src/cursor_theme.js";

const root = dirname(dirname(fileURLToPath(import.meta.url)));

const banner = `/* lexxy-realtime remote cursor styles. Optional: the element injects
 * these rules itself; include this file instead when your Content-Security-
 * Policy blocks inline style tags. Generated from src/cursor_theme.js. */
:root { --lexxy-realtime-cursor-styles: file; }
`;

const css = banner + CURSOR_CSS.trimStart();

for (const target of [
  join(root, "dist", "lexxy-realtime.css"),
  join(root, "rails", "app", "assets", "stylesheets", "lexxy_realtime.css"),
]) {
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, css);
  console.log(`wrote ${target}`);
}
