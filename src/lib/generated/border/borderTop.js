import core from '../../util/core'
import propless from '../../util/propless'
import defaultMaker from '../../util/makers/defaultMaker'
import plainTransformer from '../../util/transformers/plainTransformer'

/**
 * Returns a function that takes an object containing borderTop and theme properties.
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
 * @name borderTop
 * @memberOf core.border
 */
const borderTop = core(
  'borderTop',
  defaultMaker('border-top:')(plainTransformer)()
)
borderTop.important = borderTop.i = core(
  'borderTop',
  defaultMaker('border-top:')(plainTransformer)('!important;')
)

borderTop.propless = borderTop.l = propless(
  defaultMaker('border-top:')(plainTransformer)()
)
borderTop.propless.important = borderTop.l.i = propless(
  defaultMaker('border-top:')(plainTransformer)('!important;')
)

export default borderTop
