import fs from 'fs'
import prettier from 'prettier'

import prettierConfig from './util/prettierConfig.js'

const array = array => ({
  includesOneOf: values => {
    for (const value of values) {
      if (array.includes(value)) {
        return true
      }
    }
  },
})

// pascalCases the property (from dashes)
const getFunctionName = cssProperty => {
  switch (cssProperty) {
    case 'continue':
      return 'cssContinue'
    default:
      const split = cssProperty.split('-')
      const [first, ...rest] = split
      return `${first}${rest
        .map(word => word.replace(/^\w/, character => character.toUpperCase()))
        .join('')}`
  }
}

// returns an appropriate transformer for a given set of legal values
const getTransformer = values => {
  if (typeof values === 'undefined') {
    return 'plainTransformer'
  }

  if (array(values).includesOneOf(['color', '<color>'])) {
    return 'colorTransformer'
  }

  if (
    array(values).includesOneOf([
      'length',
      '<length>',
      'length-percentage',
      '<length-percentage>',
    ])
  ) {
    return 'pxTransformer'
  }

  if (array(values).includesOneOf(['percentage', '<percentage>'])) {
    return 'colorTransformer'
  }

  return 'plainTransformer'
}

// read scraped properties
const properties = JSON.parse(fs.readFileSync('resources/properties.json'))

// collect which transformers are used
const transformerSet = new Set()
// create an array of expressions
const expressions = properties
  .filter(({ name }) => name !== '--*')
  .map(({ name, values }) => {
    const functionName = getFunctionName(name)
    const transformer = getTransformer(values)
    transformerSet.add(transformer)

    return `export const ${functionName} = core('${functionName}', '${name}:', ';', ${transformer})`
  })

// create an array of import statements
const transformerImports = [...transformerSet].map(
  transformer =>
    `import ${transformer} from './util/transformers/${transformer}'`
)

// write file
fs.writeFileSync(
  'src/lib/generated.js',
  prettier.format(
    `import core from './util/core'
${transformerImports.join('\n')}

${expressions.join('\n')}
`,
    { ...prettierConfig, parser: 'babel' }
  )
)
