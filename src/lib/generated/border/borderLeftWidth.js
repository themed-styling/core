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
 * @name borderLeftWidth
 * @memberOf core.border
 */
const borderLeftWidth = core(
  'borderLeftWidth',
  defaultMaker('border-left-width:')()()
)
borderLeftWidth.important = borderLeftWidth.i = core(
  'borderLeftWidth',
  defaultMaker('border-left-width:')()('!important;')
)

borderLeftWidth.propless = borderLeftWidth.l = propless(
  defaultMaker('border-left-width:')()()
)
borderLeftWidth.propless.important = borderLeftWidth.l.i = propless(
  defaultMaker('border-left-width:')()('!important;')
)

export default borderLeftWidth
