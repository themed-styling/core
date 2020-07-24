import core from '../../util/core'
import propless from '../../util/propless'
import defaultMaker from '../../util/makers/defaultMaker'

/**
 * Returns a function that takes an object containing left and theme properties.
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
 * @name left
 * @memberOf core.positioning
 */
const left = core('left', defaultMaker('left:')()())
left.important = left.i = core('left', defaultMaker('left:')()('!important;'))

left.propless = left.l = propless(defaultMaker('left:')()())
left.propless.important = left.l.i = propless(
  defaultMaker('left:')()('!important;')
)

export default left
