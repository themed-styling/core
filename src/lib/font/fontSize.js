import core from './util/core'
import propless from './util/propless'
import defaultMaker from './util/makers/defaultMaker'

/**
 * Returns a function that takes an object containing fontSize and theme properties.
 *
 * This function is meant to be used with styled-components. Call this function within your styled-component's template literal like so:
 *
 * @example
 * const MyComponent = styled.div`
 *   ${fontSize()}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${fontSize(16)}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${fontSize('1.5rem')}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${fontSize({ breakpoint1: 16, breakpoint2: '1.5rem'})}
 * `
 *
 * @type {coreFunction}
 * @property {coreFunction} important - Function to add styling and prop, and mark the value as !important
 * @property {coreFunction} i - Shorthand for .important
 * @property {proplessFunction} propless - Function to add styling without adding a prop
 * @property {proplessFunction} l - Shorthand for .propless
 * @property {proplessFunction} propless.important - Function to add styling without adding a prop and mark the value as !important
 * @property {proplessFunction} l.i - Shorthand for .propless.important
 * @name fontSize
 * @memberOf core.font
 */
const fontSize = core('fontSize', defaultMaker('font-size:')()())
fontSize.important = fontSize.i = core(
  'fontSize',
  defaultMaker('font-size:')()('!important;')
)

fontSize.propless = fontSize.l = propless(defaultMaker('font-size:')()())
fontSize.propless.important = fontSize.l.i = propless(
  defaultMaker('font-size:')()('!important;')
)

export default fontSize
