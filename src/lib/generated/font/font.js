import core from '../../util/core'
import propless from '../../util/propless'
import defaultMaker from '../../util/makers/defaultMaker'
import plainTransformer from '../../util/transformers/plainTransformer'

/**
 * Returns a function that takes an object containing font and theme properties.
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
 * @name font
 * @memberOf core.font
 */
const font = core('font', defaultMaker('font:')(plainTransformer)())
font.important = font.i = core(
  'font',
  defaultMaker('font:')(plainTransformer)('!important;')
)

font.propless = font.l = propless(defaultMaker('font:')(plainTransformer)())
font.propless.important = font.l.i = propless(
  defaultMaker('font:')(plainTransformer)('!important;')
)

export default font
