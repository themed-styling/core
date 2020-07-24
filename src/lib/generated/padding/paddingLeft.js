import core from '../../util/core'
import propless from '../../util/propless'
import defaultMaker from '../../util/makers/defaultMaker'

/**
 * Returns a function that takes an object containing paddingLeft and theme properties.
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
 * @name paddingLeft
 * @memberOf core.padding
 */
const paddingLeft = core('paddingLeft', defaultMaker('padding-left:')()())
paddingLeft.important = paddingLeft.i = core(
  'paddingLeft',
  defaultMaker('padding-left:')()('!important;')
)

paddingLeft.propless = paddingLeft.l = propless(
  defaultMaker('padding-left:')()()
)
paddingLeft.propless.important = paddingLeft.l.i = propless(
  defaultMaker('padding-left:')()('!important;')
)

export default paddingLeft
