import core from '../../util/core'
import propless from '../../util/propless'
import defaultMaker from '../../util/makers/defaultMaker'

/**
 * Returns a function that takes an object containing borderTopRightRadius and theme properties.
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
 * @name borderTopRightRadius
 * @memberOf core.border
 */
const borderTopRightRadius = core(
  'borderTopRightRadius',
  defaultMaker('border-top-right-radius:')()()
)
borderTopRightRadius.important = borderTopRightRadius.i = core(
  'borderTopRightRadius',
  defaultMaker('border-top-right-radius:')()('!important;')
)

borderTopRightRadius.propless = borderTopRightRadius.l = propless(
  defaultMaker('border-top-right-radius:')()()
)
borderTopRightRadius.propless.important = borderTopRightRadius.l.i = propless(
  defaultMaker('border-top-right-radius:')()('!important;')
)

export default borderTopRightRadius
