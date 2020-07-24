import core from '../../util/core'
import propless from '../../util/propless'
import defaultMaker from '../../util/makers/defaultMaker'

/**
 * Returns a function that takes an object containing marginBottom and theme properties.
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
 * @name marginBottom
 * @memberOf core.margin
 */
const marginBottom = core('marginBottom', defaultMaker('margin-bottom:')()())
marginBottom.important = marginBottom.i = core(
  'marginBottom',
  defaultMaker('margin-bottom:')()('!important;')
)

marginBottom.propless = marginBottom.l = propless(
  defaultMaker('margin-bottom:')()()
)
marginBottom.propless.important = marginBottom.l.i = propless(
  defaultMaker('margin-bottom:')()('!important;')
)

export default marginBottom
