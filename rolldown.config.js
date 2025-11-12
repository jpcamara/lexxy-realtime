import { defineConfig } from 'rolldown';
import terser from '@rollup/plugin-terser';

export default defineConfig({
  input: 'src/index.js',
  output: [{
    file: 'dist/lexxy-realtime.js',
    format: 'esm',
  }, {
    file: 'dist/lexxy-realtime.min.js',
    format: 'esm',
    plugins: [ terser() ]
  }],
});