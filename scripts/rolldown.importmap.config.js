import { defineConfig } from 'rolldown';
import terser from '@rollup/plugin-terser';

// Builds the import-map assets the Rails gem ships: one self-contained
// ES module per pin. `lexical` is the only module both lexxy and
// lexxy-realtime import, so it is external in both bundles and shared
// through its own pin; everything else is baked into the bundle that
// uses it. `@rails/activestorage` stays external in the Lexxy bundle
// because Rails ships its own pinnable copy and Lexxy only loads it on
// upload.
const ASSETS = 'rails/app/assets/javascripts/lexxy_realtime';

const build = (input, file, external = []) => ({
  input,
  external,
  output: [{ file: `${ASSETS}/${file}`, format: 'esm', plugins: [terser()] }],
});

export default defineConfig([
  build('scripts/importmap/lexical.js', 'lexical.js'),
  build('scripts/importmap/lexxy.js', 'lexxy.js', ['lexical', '@rails/activestorage']),
  build('src/index.js', 'lexxy-realtime.js', ['lexical']),
]);
