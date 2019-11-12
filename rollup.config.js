import { terser } from 'rollup-plugin-terser'

export default [
  {
    input: 'src/index.js',
    plugins: [terser()],
    output: {
      file: 'umd/strings.js',
      format: 'umd',
      name: 'strings',
      esModule: false,
    },
  },
  {
    input: 'src/index.js',
    output: {
      file: 'esm/strings.js',
      format: 'esm',
    },
  },
]
