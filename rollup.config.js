import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
// import { terser } from 'rollup-plugin-terser'

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/core.cjs.js',
      format: 'cjs',
    },
    {
      file: 'dist/core.esm.js',
      format: 'es',
    },
  ],
  external: ['prop-types'],
  plugins: [
    commonjs(),
    babel({ babelHelpers: 'bundled' }),
    // terser(),
  ],
}
