import fs from 'fs'
import prettier from 'prettier'

const packageJSON = JSON.parse(fs.readFileSync('./package.json'))
const prettierConfig = {
  ...packageJSON.prettier,
  parser: 'babel',
}
console.info('Using prettier config from package\n', prettierConfig)

const format = string => prettier.format(string, prettierConfig)

const namespaces = ({ name, nameSplit }) => {
  switch (name) {
    case 'float':
    case 'clear':
    case 'alignItems':
    case 'alignSelf':
    case 'justifySelf':
    case 'justifyContent':
      return 'alignment'
    case 'height':
    case 'minHeight':
    case 'maxHeight':
    case 'width':
    case 'minWidth':
    case 'maxWidth':
      return 'dimensions'
    case 'bottom':
    case 'left':
    case 'position':
    case 'right':
    case 'top':
      return 'positioning'
    case 'css':
    case 'boxShadow':
    case 'display':
    case 'color':
      return undefined
    default:
      return nameSplit
  }
}

const transformers = ({ name, namespace }) => {
  if (name === 'background') return 'color'
  if (name === 'backgroundSize') return 'px'
  if (name === 'color') return 'color'
  if (name === 'fontSize') return 'px'
  if (namespace === 'border' && name.includes('Color')) return 'color'
  if (namespace === 'border' && name.includes('Width')) return 'px'
  if (namespace === 'border' && name.includes('Radius')) return 'px'
  if (namespace === 'grid' && name.includes('Gap')) return 'px'

  if (namespace === 'margin') return 'px'
  if (namespace === 'padding') return 'px'
  if (namespace === 'dimensions') return 'px'
  if (namespace === 'positioning' && name !== 'position') return 'px'
  return 'plain'
}

const prep = process.argv.slice(2).map(arg => {
  const css = arg.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
  const nameSplit = css.split('-')
  const name = arg
  const namespace = namespaces({ name, nameSplit: nameSplit[0] })
  const transformer = transformers({ name, namespace })
  return {
    name,
    css,
    namespace,
    transformer,
  }
})

const template = ({
  name,
  css,
  namespace,
  transformer,
}) => `import core from './util/core'
import propless from './util/propless'
import defaultMaker from './util/makers/defaultMaker'
import defaultMaker from './util/makers/defaultMaker'

/**
 * Returns a function that takes an object containing fontSize and theme properties.
 *
 * This function is meant to be used with styled-components within your
 * component's template literal.
 *
 * @type {coreFunction}
 * @property {coreFunction} important - Function to add styling and prop, and mark the value as !important
 * @property {coreFunction} i - Shorthand for .important
 * @property {proplessFunction} propless - Function to add styling without adding a prop
 * @property {proplessFunction} l - Shorthand for .propless
 * @property {proplessFunction} propless.important - Function to add styling without adding a prop and mark the value as !important
 * @property {proplessFunction} l.i - Shorthand for .propless.important
 * @name ${name}
 * @memberOf core${namespace}
 */
const ${name} = core('${name}', defaultMaker('${css}:')(${transformer})())
${name}.important = ${name}.i = core(
  '${name}',
  defaultMaker('${css}:')(${transformer})('!important;')
)

${name}.propless = ${name}.l = propless(
  defaultMaker('${css}:')(${transformer})()
)
${name}.propless.important = ${name}.l.i = propless(
  defaultMaker('${css}:')(${transformer})('!important;')
)

export default ${name}
`

for (let { name, css, namespace, transformer } of prep) {
  fs.writeFile(
    namespace
      ? `./src/lib/generated/${namespace}/${name}.js`
      : `./src/lib/generated/${name}.js`,
    format(
      template({
        name,
        css,
        namespace: namespace ? `.${namespace}` : '',
        transformer: transformer !== 'px' ? transformer : '',
      })
    ),
    error => {
      if (error) {
        console.error(`${name}: ${error.message}`)
      } else {
        console.info(
          namespace
            ? `OK ${namespace}/${name} (${transformer}, ${css})`
            : `OK ${name} (${transformer}, ${css})`
        )
      }
    }
  )
}

const index = prep.map(({ name, namespace }) =>
  namespace
    ? `export { default as ${name} } from './lib/generated/${namespace}/${name}'`
    : `export { default as ${name} } from './lib/generated/${name}'`
)

fs.writeFile(
  './src/lib/generated/index.js',
  format(index.join('\n')),
  error => {
    if (error) {
      console.error(`index: ${error.message}`)
    } else {
      console.info(`index OK`)
    }
  }
)
