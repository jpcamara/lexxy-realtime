import { defineConfig } from 'rolldown';
import { copyFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

// Builds the import-map assets the Rails gem ships. Each module that has
// to be one instance per page gets its own asset and pin, and every other
// asset leaves it external:
//
//   yjs.js             yjs (Yjs checks constructors with instanceof)
//   yrby-client.js     yrby-client and yrby-client/element, with yjs and
//                      @rails/actioncable external
//   lexxy-realtime.js  this package and @lexical/yjs, with yjs,
//                      yrby-client, and @37signals/lexxy external
//
// Bare `lexical` imports are aliased to a generated shim that reaches
// Lexxy's embedded copy through its documented `Lexical` re-export
// (scripts/gen_lexical_shim.mjs runs before this config), so the page runs
// one lexical: the editor's. @rails/actioncable resolves to Rails' own
// actioncable.esm.js pin. y-protocols and lib0 have no shared state that
// crosses assets, so they stay bundled.
//
// IMPORTMAP_ASSETS_OUT overrides the output directory; the test suite
// builds into the test server's public directory so test runs never
// touch the committed gem assets. In that mode a self-contained Lexxy
// build is also produced, standing in for the real Lexxy gem's asset, and
// Rails' actioncable.esm.js is copied next to it. CI rebuilds with the
// default and fails if the committed copies are stale.
const ASSETS = process.env.IMPORTMAP_ASSETS_OUT || 'rails/app/assets/javascript/lexxy_realtime';
const TEST_MODE = Boolean(process.env.IMPORTMAP_ASSETS_OUT);

const shim = fileURLToPath(new URL('./importmap/lexical_shim.js', import.meta.url));
const yrbyClient = /^yrby-client(\/|$)/;

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
  build('scripts/importmap/yjs.js', 'yjs'),
  build('scripts/importmap/yrby_client.js', 'yrby-client', {
    external: ['yjs', '@rails/actioncable'],
  }),
  build('src/index.js', 'lexxy-realtime', {
    external: ['@37signals/lexxy', 'yjs', yrbyClient, '@rails/actioncable'],
    resolve: { alias: { lexical: shim } },
  }),
];

if (TEST_MODE) {
  // The stand-in for the Lexxy gem's own asset: fully self-contained,
  // lexical embedded, exactly as the real gem ships it.
  configs.push(build('scripts/importmap/lexxy.js', 'lexxy'));
  // Rails serves this file from the actioncable gem.
  mkdirSync(ASSETS, { recursive: true });
  copyFileSync(
    fileURLToPath(new URL('../node_modules/@rails/actioncable/app/assets/javascripts/actioncable.esm.js', import.meta.url)),
    `${ASSETS}/actioncable.esm.js`
  );
}

export default defineConfig(configs);
