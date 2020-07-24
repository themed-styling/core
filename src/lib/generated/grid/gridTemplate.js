import core from './util/core'
import propless from './util/propless'
import defaultMaker from './util/makers/defaultMaker'
import defaultMaker from './util/makers/defaultMaker'

/**
 * Returns a function that takes an object containing fontSize and theme properties.
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
 * @name gridTemplate
 * @memberOf core.grid
 */
const gridTemplate = core(
  'gridTemplate',
  defaultMaker('grid-template:')(plain)()
)
gridTemplate.important = gridTemplate.i = core(
  'gridTemplate',
  defaultMaker('grid-template:')(plain)('!important;')
)

gridTemplate.propless = gridTemplate.l = propless(
  defaultMaker('grid-template:')(plain)()
)
gridTemplate.propless.important = gridTemplate.l.i = propless(
  defaultMaker('grid-template:')(plain)('!important;')
)

export default gridTemplate
