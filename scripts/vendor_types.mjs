// Vendors yrby-client's own .d.ts files into types/vendor/yrby-client/.
// The build bundles yrby-client's JS into dist, so the shipped declarations
// come from the same installed version rather than a hand-written copy.
// Run after bumping the yrby-client devDependency:
//
//   npm run vendor:types
//
// --check compares instead of writing (the test suite runs this), so a
// yrby-client bump without re-vendoring fails the build.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const source = join(root, "node_modules", "yrby-client", "dist");
const target = join(root, "types", "vendor", "yrby-client");
const FILES = ["actioncable_provider.d.ts", "y_protocol_session.d.ts", "reliable_sync.d.ts"];

const strip = (content) => content.replace(/^\/\/# sourceMappingURL=.*\n?/m, "");
const check = process.argv.includes("--check");

let stale = false;
for (const file of FILES) {
  const expected = strip(readFileSync(join(source, file), "utf8"));
  if (check) {
    let actual = null;
    try {
      actual = readFileSync(join(target, file), "utf8");
    } catch {
      // missing counts as stale
    }
    if (actual !== expected) {
      console.error(`STALE: types/vendor/yrby-client/${file} does not match the installed yrby-client. Run: npm run vendor:types`);
      stale = true;
    }
  } else {
    mkdirSync(target, { recursive: true });
    writeFileSync(join(target, file), expected);
    console.log(`vendored types/vendor/yrby-client/${file}`);
  }
}

if (check && !stale) console.log("PASS: vendored yrby-client declarations match the installed version");
process.exit(stale ? 1 : 0);
