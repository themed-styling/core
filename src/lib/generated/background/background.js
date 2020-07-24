import core from '../../util/core'
import propless from '../../util/propless'
import defaultMaker from '../../util/makers/defaultMaker'
import colorTransformer from '../../util/transformers/colorTransformer'

/**
 * Returns a function that takes an object containing background and theme properties.
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
const background = core(
  'background',
  defaultMaker('background:')(colorTransformer)()
)
background.important = background.i = core(
  'background',
  defaultMaker('background:')(colorTransformer)('!important;')
)

background.propless = background.l = propless(
  defaultMaker('background:')(colorTransformer)()
)
background.propless.important = background.l.i = propless(
  defaultMaker('background:')(colorTransformer)('!important;')
)

export default background
