import core from '../../util/core'
import propless from '../../util/propless'
import defaultMaker from '../../util/makers/defaultMaker'

/**
 * Returns a function that takes an object containing gridColumnGap and theme properties.
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
 * @name gridColumnGap
 * @memberOf core.grid
 */
const gridColumnGap = core(
  'gridColumnGap',
  defaultMaker('grid-column-gap:')()()
)
gridColumnGap.important = gridColumnGap.i = core(
  'gridColumnGap',
  defaultMaker('grid-column-gap:')()('!important;')
)

gridColumnGap.propless = gridColumnGap.l = propless(
  defaultMaker('grid-column-gap:')()()
)
gridColumnGap.propless.important = gridColumnGap.l.i = propless(
  defaultMaker('grid-column-gap:')()('!important;')
)

export default gridColumnGap
