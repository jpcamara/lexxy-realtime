import { defineConfig } from 'rolldown';

export default defineConfig({
  input: 'src/index.js',
  external: [
    'yjs',
    '@lexical/yjs',
    'lexical',
    'y-protocols',
    '@37signals/lexxy'
  ],
  output: [{
    file: 'dist/lexxy-realtime.js',
    format: 'esm',
  }, {
    file: 'dist/lexxy-realtime.min.js',
    format: 'esm',
    minify: true
  }],
});