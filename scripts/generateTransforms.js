import fs from 'fs'
import prettier from 'prettier'

import prettierConfig from './util/prettierConfig.js'

export const transforms = [
  {
    name: 'matrix',
    cssFunctionName: 'matrix',
    transformer: 'plainTransformer',
  },
  {
    name: 'matrix3D',
    cssFunctionName: 'matrix3d',
    transformer: 'plainTransformer',
  },
  {
    name: 'translate',
    cssFunctionName: 'translate',
    transformer: 'plainTransformer',
  },
  {
    name: 'translate3D',
    cssFunctionName: 'translate3d',
    transformer: 'plainTransformer',
  },
  {
    name: 'translateX',
    cssFunctionName: 'translateX',
    transformer: 'pxTransformer',
  },
  {
    name: 'translateY',
    cssFunctionName: 'translateY',
    transformer: 'pxTransformer',
  },
  {
    name: 'translateZ',
    cssFunctionName: 'translateZ',
    transformer: 'pxTransformer',
  },
  {
    name: 'scale',
    cssFunctionName: 'scale',
    transformer: 'plainTransformer',
  },
  {
    name: 'scale3D',
    cssFunctionName: 'scale3d',
    transformer: 'plainTransformer',
  },
  {
    name: 'scaleX',
    cssFunctionName: 'scaleX',
    transformer: 'plainTransformer',
  },
  {
    name: 'scaleY',
    cssFunctionName: 'scaleY',
    transformer: 'plainTransformer',
  },
  {
    name: 'scaleZ',
    cssFunctionName: 'scaleZ',
    transformer: 'plainTransformer',
  },
  {
    name: 'rotate',
    cssFunctionName: 'rotate',
    transformer: 'degreesTransformer',
  },
  {
    name: 'rotate3D',
    cssFunctionName: 'rotate3d',
    transformer: 'plainTransformer',
  },
  {
    name: 'rotateX',
    cssFunctionName: 'rotateX',
    transformer: 'degreesTransformer',
  },
  {
    name: 'rotateY',
    cssFunctionName: 'rotateY',
    transformer: 'degreesTransformer',
  },
  {
    name: 'rotateZ',
    cssFunctionName: 'rotateZ',
    transformer: 'degreesTransformer',
  },
  {
    name: 'skew',
    cssFunctionName: 'skew',
    transformer: 'plainTransformer',
  },
  {
    name: 'skewX',
    cssFunctionName: 'skewX',
    transformer: 'degreesTransformer',
  },
  {
    name: 'skewY',
    cssFunctionName: 'skewY',
    transformer: 'degreesTransformer',
  },
  {
    name: 'perspective',
    cssFunctionName: 'perspective',
    transformer: 'plainTransformer',
  },
]

const expressions = transforms.map(
  ({ name, cssFunctionName, transformer }) =>
    `export const ${name} = core('${name}', 'transform:${cssFunctionName}(', ');', ${transformer})`
)

const imports = ['pxTransformer', 'plainTransformer', 'degreesTransformer'].map(
  transformer =>
    `import ${transformer} from './util/transformers/${transformer}'`
)

// write file
fs.writeFileSync(
  'src/lib/transform.js',
  prettier.format(
    `import core from './util/core'
${imports.join('\n')}

${expressions.join('\n')}
`,
    { ...prettierConfig, parser: 'babel' }
  )
)
