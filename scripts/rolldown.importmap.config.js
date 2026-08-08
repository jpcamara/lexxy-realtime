import { defineConfig } from 'rolldown';

// Builds the import-map assets the Rails gem ships: one self-contained
// ES module per pin. `lexical` is the only module both lexxy and
// lexxy-realtime import, so it is external in both bundles and shared
// through its own pin; everything else is baked into the bundle that
// uses it. `@rails/activestorage` stays external in the Lexxy bundle
// because Rails ships its own pinnable copy and Lexxy only loads it on
// upload.
//
// IMPORTMAP_ASSETS_OUT overrides the output directory; the test suite
// builds into the test server's public directory so test runs never
// touch the committed gem assets. CI rebuilds with the default and
// fails if the committed copies are stale.
const ASSETS = process.env.IMPORTMAP_ASSETS_OUT || 'rails/app/assets/javascript/lexxy_realtime';

// Like Lexxy's gem asset, each pin ships readable (with a sourcemap)
// and minified; the pins reference the readable file.
const build = (input, file, external = []) => ({
  input,
  external,
  output: [
    { file: `${ASSETS}/${file}.js`, format: 'esm', sourcemap: true },
    { file: `${ASSETS}/${file}.min.js`, format: 'esm', minify: true },
  ],
});

export default defineConfig([
  build('scripts/importmap/lexical.js', 'lexical'),
  build('scripts/importmap/lexxy.js', 'lexxy', ['lexical', '@rails/activestorage']),
  build('src/index.js', 'lexxy-realtime', ['lexical']),
]);
