import fs from 'fs'

const namespaces = ({ name, namespace }) => {
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
      return namespace
  }
}

const prep = process.argv.slice(2).map(arg => {
  const css = arg.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
  const nameSplit = css.split('-')
  // if (nameSplit.length === 1) {
  //   return {
  //     name: arg,
  //     css,
  //   }
  // }
  return {
    name: arg,
    css,
    namespace: namespaces({ name: arg, namespace: nameSplit[0] }),
  }
})

const template = ({ name, css, namespace }) => `import core from './util/core'
import propless from './util/propless'
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
const ${name} = core('${name}', defaultMaker('${css}:')()())
${name}.important = ${name}.i = core(
  '${name}',
  defaultMaker('${css}:')()('!important;')
)

${name}.propless = ${name}.l = propless(defaultMaker('${css}:')()())
${name}.propless.important = ${name}.l.i = propless(
  defaultMaker('${css}:')()('!important;')
)

export default ${name}
`

for (let { name, css, namespace } of prep) {
  fs.writeFile(
    namespace
      ? `./generated/lib/${namespace}/${name}.js`
      : `./generated/lib/${name}.js`,
    template({ name, css, namespace: namespace ? `.${namespace}` : '' }),
    error => {
      if (error) {
        console.error(`${name}: ${error.message}`)
      } else {
        console.info(`${name} OK`)
      }
    }
  )
}

const index = prep.map(({ name, namespace }) =>
  namespace
    ? `export { default as ${name} } from './lib/${namespace}/${name}'`
    : `export { default as ${name} } from './lib/${name}'`
)

fs.writeFile('./generated/index.js', index.join('\n'), error => {
  if (error) {
    console.error(`index: ${error.message}`)
  } else {
    console.info(`index OK`)
  }
})
