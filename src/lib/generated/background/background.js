import core from './util/core'
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
 * @name background
 * @memberOf core.background
 */
const background = core('background', defaultMaker('background:')(color)())
background.important = background.i = core(
  'background',
  defaultMaker('background:')(color)('!important;')
)

background.propless = background.l = propless(
  defaultMaker('background:')(color)()
)
background.propless.important = background.l.i = propless(
  defaultMaker('background:')(color)('!important;')
)

export default background
