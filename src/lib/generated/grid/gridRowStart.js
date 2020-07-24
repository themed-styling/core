import core from '../../util/core'
import propless from '../../util/propless'
import defaultMaker from '../../util/makers/defaultMaker'
import plainTransformer from '../../util/transformers/plainTransformer'

/**
 * Returns a function that takes an object containing gridRowStart and theme properties.
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
 * @name gridRowStart
 * @memberOf core.grid
 */
const gridRowStart = core(
  'gridRowStart',
  defaultMaker('grid-row-start:')(plainTransformer)()
)
gridRowStart.important = gridRowStart.i = core(
  'gridRowStart',
  defaultMaker('grid-row-start:')(plainTransformer)('!important;')
)

gridRowStart.propless = gridRowStart.l = propless(
  defaultMaker('grid-row-start:')(plainTransformer)()
)
gridRowStart.propless.important = gridRowStart.l.i = propless(
  defaultMaker('grid-row-start:')(plainTransformer)('!important;')
)

export default gridRowStart
