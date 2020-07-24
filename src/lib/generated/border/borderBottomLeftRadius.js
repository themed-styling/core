import core from '../../util/core'
import propless from '../../util/propless'
import defaultMaker from '../../util/makers/defaultMaker'

/**
 * Returns a function that takes an object containing borderBottomLeftRadius and theme properties.
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
 * @name borderBottomLeftRadius
 * @memberOf core.border
 */
const borderBottomLeftRadius = core(
  'borderBottomLeftRadius',
  defaultMaker('border-bottom-left-radius:')()()
)
borderBottomLeftRadius.important = borderBottomLeftRadius.i = core(
  'borderBottomLeftRadius',
  defaultMaker('border-bottom-left-radius:')()('!important;')
)

borderBottomLeftRadius.propless = borderBottomLeftRadius.l = propless(
  defaultMaker('border-bottom-left-radius:')()()
)
borderBottomLeftRadius.propless.important = borderBottomLeftRadius.l.i = propless(
  defaultMaker('border-bottom-left-radius:')()('!important;')
)

export default borderBottomLeftRadius
