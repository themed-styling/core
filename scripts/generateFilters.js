import fs from 'fs'
import prettier from 'prettier'

import prettierConfig from './util/prettierConfig.js'

export const filters = [
  {
    name: 'blur',
    cssFunctionName: 'blur',
    transformer: 'pixelsTransformer',
  },
  {
    name: 'brightness',
    cssFunctionName: 'brightness',
    transformer: 'percentTransformer',
  },
  {
    name: 'contrast',
    cssFunctionName: 'contrast',
    transformer: 'percentTransformer',
  },
  {
    name: 'dropShadow',
    cssFunctionName: 'drop-shadow',
    transformer: 'plainTransformer',
  },
  {
    name: 'grayscale',
    cssFunctionName: 'grayscale',
    transformer: 'percentTransformer',
  },
  {
    name: 'hueRotate',
    cssFunctionName: 'hue-rotate',
    transformer: 'degreesTransformer',
  },
  {
    name: 'invert',
    cssFunctionName: 'invert',
    transformer: 'percentTransformer',
  },
  {
    name: 'filterOpacity',
    cssFunctionName: 'opacity',
    transformer: 'percentTransformer',
  },
  {
    name: 'saturate',
    cssFunctionName: 'saturate',
    transformer: 'percentTransformer',
  },
  {
    name: 'sepia',
    cssFunctionName: 'sepia',
    transformer: 'percentTransformer',
  },
  {
    name: 'filterURL',
    cssFunctionName: 'url',
    transformer: 'plainTransformer',
  },
]

const expressions = filters.map(
  ({ name, cssFunctionName, transformer }) =>
    `export const ${name} = core('${name}', 'filter:${cssFunctionName}(', ');', ${transformer})`
)

const imports = [
  'pixelsTransformer',
  'percentTransformer',
  'plainTransformer',
  'degreesTransformer',
].map(
  transformer =>
    `import ${transformer} from './util/transformers/${transformer}'`
)

// write file
fs.writeFileSync(
  'src/lib/filter.js',
  prettier.format(
    `import core from './util/core'
${imports.join('\n')}

${expressions.join('\n')}
`,
    { ...prettierConfig, parser: 'babel' }
  )
)
