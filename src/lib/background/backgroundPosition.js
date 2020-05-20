import propless from '../util/propless'
import construct from '../util/construct'
import plain from '../util/transformers/plain'

/**
 * Returns a function that takes an object containing backgroundPosition and theme properties.
 *
 * This function is meant to be used with styled-components. Call this function within your styled-component's template literal like so:
 *
 * @example
 * const MyComponent = styled.div`
 *   ${backgroundPosition()}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${backgroundPosition('center')}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${backgroundPosition({ breakpoint1: 'center', breakpoint2: 'left center'})}
 * `
 *
 * @param {(Object.<(string|number|bigint)>|Array.<(string|number|bigint)>|string|number|bigint)=} fallback - A fallback value for when the object passed to the returned function does not contain a backgroundPosition value
 * @param {boolean=} [propless=false] - Whether the component should be without prop
 * @returns {function({props})} Function to take component props passed by styled-components
 * @name backgroundPosition
 * @memberOf core
 */
export default propless(
  (value, theme) => construct(value, theme, 'background-position', plain),
  'backgroundPosition'
)
