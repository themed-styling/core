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

const limitValues = values => {
  const indexOfWhere = values?.indexOf('where')
  if (!indexOfWhere || indexOfWhere === -1) {
    return values
  }
  return values.slice(0, indexOfWhere)
}

// returns an appropriate transformer for a given set of legal values
const getTransformer = values => {
  if (
    typeof values === 'undefined' ||
    array(values).includesOneOf(['<line-style>'])
  ) {
    return 'plainTransformer'
  }

  if (
    array(values).includesOneOf([
      '<length>',
      '<length-percentage>',
      '<column-gap>',
      '<row-gap>',
      '<line-width>',
      '<bg-size>',
      '<border-top-width>',
    ])
  ) {
    return 'pixelsTransformer'
  }

  if (array(values).includesOneOf(['<color>', '<border-top-color>'])) {
    return 'colorTransformer'
  }

  if (array(values).includesOneOf(['<percentage>'])) {
    return 'colorTransformer'
  }

  return 'plainTransformer'
}

// read properties
const allowedStatuses = ['WD', 'CRD', 'CR', 'PR', 'REC']

const properties = JSON.parse(
  fs.readFileSync('resources/properties.json')
).filter(({ statuses }) => {
  for (const status of statuses) {
    if (allowedStatuses.includes(status)) {
      return true
    }
  }
  return false
})

// collect which transformers are used
const transformerSet = new Set()
// create an array of expressions
const expressions = properties
  .filter(({ property }) => property !== '--*')
  .map(({ property, values }) => {
    const functionName = getFunctionName(property)
    const transformer = getTransformer(limitValues(values))
    transformerSet.add(transformer)

    return `export const ${functionName} = core('${functionName}', '${property}:', ';', ${transformer})`
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
