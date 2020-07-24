import core from '../../util/core'
import propless from '../../util/propless'
import defaultMaker from '../../util/makers/defaultMaker'
import plainTransformer from '../../util/transformers/plainTransformer'

/**
 * Returns a function that takes an object containing flexGrow and theme properties.
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
 * @name flexGrow
 * @memberOf core.flex
 */
const flexGrow = core(
  'flexGrow',
  defaultMaker('flex-grow:')(plainTransformer)()
)
flexGrow.important = flexGrow.i = core(
  'flexGrow',
  defaultMaker('flex-grow:')(plainTransformer)('!important;')
)

flexGrow.propless = flexGrow.l = propless(
  defaultMaker('flex-grow:')(plainTransformer)()
)
flexGrow.propless.important = flexGrow.l.i = propless(
  defaultMaker('flex-grow:')(plainTransformer)('!important;')
)

export default flexGrow