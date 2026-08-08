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
const ASSETS = process.env.IMPORTMAP_ASSETS_OUT || 'rails/app/assets/javascripts/lexxy_realtime';

const build = (input, file, external = []) => ({
  input,
  external,
  output: [{ file: `${ASSETS}/${file}`, format: 'esm', minify: true }],
});

export default defineConfig([
  build('scripts/importmap/lexical.js', 'lexical.js'),
  build('scripts/importmap/lexxy.js', 'lexxy.js', ['lexical', '@rails/activestorage']),
  build('src/index.js', 'lexxy-realtime.js', ['lexical']),
]);
