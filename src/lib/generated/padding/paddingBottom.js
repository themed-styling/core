import core from '../../util/core'
import propless from '../../util/propless'
import defaultMaker from '../../util/makers/defaultMaker'

/**
 * Returns a function that takes an object containing paddingBottom and theme properties.
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
 * @name paddingBottom
 * @memberOf core.padding
 */
const paddingBottom = core('paddingBottom', defaultMaker('padding-bottom:')()())
paddingBottom.important = paddingBottom.i = core(
  'paddingBottom',
  defaultMaker('padding-bottom:')()('!important;')
)

paddingBottom.propless = paddingBottom.l = propless(
  defaultMaker('padding-bottom:')()()
)
paddingBottom.propless.important = paddingBottom.l.i = propless(
  defaultMaker('padding-bottom:')()('!important;')
)

export default paddingBottom