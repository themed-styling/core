import core from '../../util/core'
import propless from '../../util/propless'
import defaultMaker from '../../util/makers/defaultMaker'

/**
 * Returns a function that takes an object containing padding and theme properties.
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
 * @name padding
 * @memberOf core.padding
 */
const padding = core('padding', defaultMaker('padding:')()())
padding.important = padding.i = core(
  'padding',
  defaultMaker('padding:')()('!important;')
)

padding.propless = padding.l = propless(defaultMaker('padding:')()())
padding.propless.important = padding.l.i = propless(
  defaultMaker('padding:')()('!important;')
)

export default padding
