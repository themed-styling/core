import core from '../../util/core'
import propless from '../../util/propless'
import defaultMaker from '../../util/makers/defaultMaker'

/**
 * Returns a function that takes an object containing gridGap and theme properties.
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
 * @name gridGap
 * @memberOf core.grid
 */
const gridGap = core('gridGap', defaultMaker('grid-gap:')()())
gridGap.important = gridGap.i = core(
  'gridGap',
  defaultMaker('grid-gap:')()('!important;')
)

gridGap.propless = gridGap.l = propless(defaultMaker('grid-gap:')()())
gridGap.propless.important = gridGap.l.i = propless(
  defaultMaker('grid-gap:')()('!important;')
)

export default gridGap
