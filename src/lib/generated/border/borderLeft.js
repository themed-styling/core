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
 * @name borderLeft
 * @memberOf core.border
 */
const borderLeft = core('borderLeft', defaultMaker('border-left:')(plain)())
borderLeft.important = borderLeft.i = core(
  'borderLeft',
  defaultMaker('border-left:')(plain)('!important;')
)

borderLeft.propless = borderLeft.l = propless(
  defaultMaker('border-left:')(plain)()
)
borderLeft.propless.important = borderLeft.l.i = propless(
  defaultMaker('border-left:')(plain)('!important;')
)

export default borderLeft
