import { defineConfig } from 'rolldown';
import { fileURLToPath } from 'node:url';

// Builds the import-map asset the Rails gem ships: lexxy-realtime as one
// ES module. `@37signals/lexxy` stays external and the generator pins it
// at the app's own Lexxy asset, while bare `lexical` imports are aliased
// to a generated shim that reaches Lexxy's embedded copy through its
// documented `Lexical` re-export (scripts/gen_lexical_shim.mjs runs
// before this config). The page runs exactly one lexical: the editor's.
// Everything else (yjs, y-protocols, @lexical/yjs, the Action Cable
// client) is baked in.
//
// IMPORTMAP_ASSETS_OUT overrides the output directory; the test suite
// builds into the test server's public directory so test runs never
// touch the committed gem assets. In that mode a self-contained Lexxy
// build is also produced, standing in for the real Lexxy gem's asset.
// CI rebuilds with the default and fails if the committed copies are
// stale.
const ASSETS = process.env.IMPORTMAP_ASSETS_OUT || 'rails/app/assets/javascript/lexxy_realtime';
const TEST_MODE = Boolean(process.env.IMPORTMAP_ASSETS_OUT);

const shim = fileURLToPath(new URL('./importmap/lexical_shim.js', import.meta.url));

// Like Lexxy's gem asset, each pin ships readable (with a sourcemap)
// and minified; the pins reference the readable file.
const build = (input, file, options = {}) => ({
  input,
  ...options,
  output: [
    { file: `${ASSETS}/${file}.js`, format: 'esm', sourcemap: true, codeSplitting: false },
    { file: `${ASSETS}/${file}.min.js`, format: 'esm', minify: true, codeSplitting: false },
  ],
});

const configs = [
  build('src/index.js', 'lexxy-realtime', {
    external: ['@37signals/lexxy'],
    resolve: { alias: { lexical: shim } },
  }),
];

if (TEST_MODE) {
  // The stand-in for the Lexxy gem's own asset: fully self-contained,
  // lexical embedded, exactly as the real gem ships it.
  configs.push(build('scripts/importmap/lexxy.js', 'lexxy'));
}

export default defineConfig(configs);
