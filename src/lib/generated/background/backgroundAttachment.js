import core from '../../util/core'
import propless from '../../util/propless'
import defaultMaker from '../../util/makers/defaultMaker'
import plainTransformer from '../../util/transformers/plainTransformer'

/**
 * Returns a function that takes an object containing backgroundAttachment and theme properties.
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
 * @name backgroundAttachment
 * @memberOf core.background
 */
const backgroundAttachment = core(
  'backgroundAttachment',
  defaultMaker('background-attachment:')(plainTransformer)()
)
backgroundAttachment.important = backgroundAttachment.i = core(
  'backgroundAttachment',
  defaultMaker('background-attachment:')(plainTransformer)('!important;')
)

backgroundAttachment.propless = backgroundAttachment.l = propless(
  defaultMaker('background-attachment:')(plainTransformer)()
)
backgroundAttachment.propless.important = backgroundAttachment.l.i = propless(
  defaultMaker('background-attachment:')(plainTransformer)('!important;')
)

export default backgroundAttachment
