import core from '../../util/core'
import propless from '../../util/propless'
import defaultMaker from '../../util/makers/defaultMaker'
import plainTransformer from '../../util/transformers/plainTransformer'

/**
 * Returns a function that takes an object containing gridTemplateColumns and theme properties.
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
 * @name gridTemplateColumns
 * @memberOf core.grid
 */
const gridTemplateColumns = core(
  'gridTemplateColumns',
  defaultMaker('grid-template-columns:')(plainTransformer)()
)
gridTemplateColumns.important = gridTemplateColumns.i = core(
  'gridTemplateColumns',
  defaultMaker('grid-template-columns:')(plainTransformer)('!important;')
)

gridTemplateColumns.propless = gridTemplateColumns.l = propless(
  defaultMaker('grid-template-columns:')(plainTransformer)()
)
gridTemplateColumns.propless.important = gridTemplateColumns.l.i = propless(
  defaultMaker('grid-template-columns:')(plainTransformer)('!important;')
)

export default gridTemplateColumns