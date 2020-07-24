import core from '../../util/core'
import propless from '../../util/propless'
import defaultMaker from '../../util/makers/defaultMaker'
import plainTransformer from '../../util/transformers/plainTransformer'

/**
 * Returns a function that takes an object containing gridColumnEnd and theme properties.
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
 * @name gridColumnEnd
 * @memberOf core.grid
 */
const gridColumnEnd = core(
  'gridColumnEnd',
  defaultMaker('grid-column-end:')(plainTransformer)()
)
gridColumnEnd.important = gridColumnEnd.i = core(
  'gridColumnEnd',
  defaultMaker('grid-column-end:')(plainTransformer)('!important;')
)

gridColumnEnd.propless = gridColumnEnd.l = propless(
  defaultMaker('grid-column-end:')(plainTransformer)()
)
gridColumnEnd.propless.important = gridColumnEnd.l.i = propless(
  defaultMaker('grid-column-end:')(plainTransformer)('!important;')
)

export default gridColumnEnd
