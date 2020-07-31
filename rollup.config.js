import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/core.cjs.js',
      format: 'cjs',
    },
    {
      file: 'dist/core.esm.js',
      format: 'esm',
    },
  ],
  external: ['prop-types'],
  plugins: [
    commonjs(),
    resolve({
      extensions: ['.js'],
    }),
  ],
}
