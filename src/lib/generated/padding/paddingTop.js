import core from '../../util/core'
import propless from '../../util/propless'
import defaultMaker from '../../util/makers/defaultMaker'

/**
 * Returns a function that takes an object containing paddingTop and theme properties.
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
 * @name paddingTop
 * @memberOf core.padding
 */
const paddingTop = core('paddingTop', defaultMaker('padding-top:')()())
paddingTop.important = paddingTop.i = core(
  'paddingTop',
  defaultMaker('padding-top:')()('!important;')
)

paddingTop.propless = paddingTop.l = propless(defaultMaker('padding-top:')()())
paddingTop.propless.important = paddingTop.l.i = propless(
  defaultMaker('padding-top:')()('!important;')
)

export default paddingTop
