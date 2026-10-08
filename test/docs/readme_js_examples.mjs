// Bundles every ```js block in README.md against the package source.
// Imports resolve into src/, so an example that uses a renamed or removed
// export fails. The examples don't run, since most of them need a browser.
// This checks their imports, exports, and syntax.
import { mkdtempSync, writeFileSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { rolldown } from "rolldown";

const root = join(dirname(fileURLToPath(import.meta.url)), "..", "..");
const readme = readFileSync(join(root, "README.md"), "utf8");

const blocks = [...readme.matchAll(/^```js\n([\s\S]*?)^```/gm)].map((m) => m[1]);
if (blocks.length === 0) {
  console.error("found no ```js blocks in README.md, so block extraction is broken");
  process.exit(1);
}

// Packages the examples may import without bundling. Every other import must
// resolve.
const EXTERNAL = [
  "@37signals/lexxy",
  "@rails/actioncable",
  "@anycable/web",
  "yjs",
  "y-protocols",
  "y-websocket",
  "@lexical/yjs",
  "lexical",
];

// Examples reference page-level values without declaring them.
const AMBIENT = "let documentId, currentUserName, render;\n";

const dir = mkdtempSync(join(tmpdir(), "readme-js-"));
let failures = 0;

for (const [i, block] of blocks.entries()) {
  const file = join(dir, `example_${i}.mjs`);
  writeFileSync(file, AMBIENT + block);
  const problems = [];
  try {
    const bundle = await rolldown({
      input: file,
      external: EXTERNAL,
      resolve: { alias: { "lexxy-realtime": join(root, "src", "index.js") } },
      onLog(level, log) {
        if (level === "warn") problems.push(log.message || String(log));
      },
    });
    await bundle.generate({});
    await bundle.close();
  } catch (error) {
    problems.push(error.message || String(error));
  }
  if (problems.length > 0) {
    failures++;
    console.error(`FAIL example ${i + 1}/${blocks.length}:`);
    for (const p of problems) console.error(`  ${p.split("\n")[0]}`);
    console.error(block.split("\n").slice(0, 3).map((l) => `  | ${l}`).join("\n"));
  } else {
    console.log(`ok example ${i + 1}/${blocks.length}`);
  }
}

rmSync(dir, { recursive: true, force: true });

// Every attribute on <lexxy-collaboration> in the ```html examples must be one
// the element reads with getAttribute.
const source = readFileSync(join(root, "src", "editor_collaboration.js"), "utf8");
const known = new Set([...source.matchAll(/getAttribute\('([^']+)'\)/g)].map((m) => m[1]));
const htmlBlocks = [...readme.matchAll(/^```html\n([\s\S]*?)^```/gm)].map((m) => m[1]);
for (const block of htmlBlocks) {
  const tag = block.match(/<lexxy-collaboration\b([\s\S]*?)>/);
  if (!tag) continue;
  for (const [, attr] of tag[1].matchAll(/([a-z-]+)=/g)) {
    if (!known.has(attr)) {
      failures++;
      console.error(`FAIL html example: attribute "${attr}" is not read by the element (knows: ${[...known].join(", ")})`);
    }
  }
}
if (htmlBlocks.length > 0 && failures === 0) console.log("ok html example attributes");

console.log(failures === 0 ? "README JS EXAMPLES OK" : `${failures} example(s) failed`);
process.exit(failures === 0 ? 0 : 1);
