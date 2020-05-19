import propless from '../util/propless'
import universal from '../util/universal'
import degrees from '../util/transformers/degrees'

/**
 * Returns a function that takes an object containing skewX and theme properties.
 *
 * This function is meant to be used with styled-components. Call this function within your styled-component's template literal like so:
 *
 * @example
 * const MyComponent = styled.div`
 *   ${skewX()}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${skewX(18)}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${skewX('2rad')}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${skewX({ breakpoint1: 18, breakpoint2: '2rad'})}
 * `
 *
 * @param {(Object.<(string|number|bigint)>|Array.<(string|number|bigint)>|string|number|bigint)=} fallback - A fallback value for when the object passed to the returned function does not contain a skewX value
 * @param {boolean=} [propless=false] - Whether the component should be without prop
 * @returns {function({props})} Function to take component props passed by styled-components
 * @name skewX
 * @memberOf core
 */
export default propless(
  (value, theme) => universal(value, theme, 'transform:skewX(', ');', degrees),
  'skewX'
)
