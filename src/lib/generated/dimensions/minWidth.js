import core from '../../util/core'
import propless from '../../util/propless'
import defaultMaker from '../../util/makers/defaultMaker'

/**
 * Returns a function that takes an object containing minWidth and theme properties.
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
 * @name minWidth
 * @memberOf core.dimensions
 */
const minWidth = core('minWidth', defaultMaker('min-width:')()())
minWidth.important = minWidth.i = core(
  'minWidth',
  defaultMaker('min-width:')()('!important;')
)

minWidth.propless = minWidth.l = propless(defaultMaker('min-width:')()())
minWidth.propless.important = minWidth.l.i = propless(
  defaultMaker('min-width:')()('!important;')
)

export default minWidth
