import core from '../../util/core'
import propless from '../../util/propless'
import defaultMaker from '../../util/makers/defaultMaker'

/**
 * Returns a function that takes an object containing maxHeight and theme properties.
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
 * @name maxHeight
 * @memberOf core.dimensions
 */
const maxHeight = core('maxHeight', defaultMaker('max-height:')()())
maxHeight.important = maxHeight.i = core(
  'maxHeight',
  defaultMaker('max-height:')()('!important;')
)

maxHeight.propless = maxHeight.l = propless(defaultMaker('max-height:')()())
maxHeight.propless.important = maxHeight.l.i = propless(
  defaultMaker('max-height:')()('!important;')
)

export default maxHeight