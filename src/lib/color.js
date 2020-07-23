import core from './util/core'
import propless from './util/propless'
import calc from './util/calc'
import plainMaker from './util/makers/plainMaker'
import calcMaker from './util/makers/calcMaker'
import colorTransformer from './util/transformers/color'

/**
 * Returns a function that takes an object containing color and theme properties.
 *
 * This function is meant to be used with styled-components. Call this function
 * within your styled-component's template literal like so:
 *
 * @example
 * const MyComponent = styled.div`
 *   ${color()}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${color('white')}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${color({ breakpoint1: 'white', breakpoint2: 'DarkSlateBlue'})}
 * `
 *
 * @type {coreFunction}
 * @property {coreFunction} important - Function to add styling and prop, and mark the value as !important
 * @property {coreFunction} i - Shorthand for .important
 * @property {proplessFunction} propless - Function to add styling without adding a prop
 * @property {proplessFunction} l - Shorthand for .propless
 * @property {proplessFunction} propless.important - Function to add styling without adding a prop and mark the value as !important
 * @property {proplessFunction} l.i - Shorthand for .propless.important
 * @name color
 * @memberOf core
 */
const color = core('color', plainMaker('color:', colorTransformer))
color.important = color.i = core(
  'color',
  plainMaker('color:', colorTransformer, '!important;')
)

color.propless = color.l = propless(plainMaker('color:', colorTransformer))
color.propless.important = color.l.i = propless(
  plainMaker('color:', colorTransformer, '!important;')
)

// color.calc = color.c = core('color', calcMaker('color:', colorTransformer))
// color.calc.important = color.c.i = core(
//   'color',
//   calcMaker('color:', colorTransformer, '!important;')
// )

// color.transform =

export default color
