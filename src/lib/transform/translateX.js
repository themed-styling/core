import propless from '../util/propless'
import universal from '../util/universal'
import plain from '../util/transformers/plain'

/**
 * Returns a function that takes an object containing translateX and theme properties.
 *
 * This function is meant to be used with styled-components. Call this function within your styled-component's template literal like so:
 *
 * @example
 * const MyComponent = styled.div`
 *   ${translateX()}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${translateX(10)}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${translateX('20px')}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${translateX({ breakpoint1: 10, breakpoint2: '20px'})}
 * `
 *
 * @param {(Object.<(string|number|bigint)>|Array.<(string|number|bigint)>|string|number|bigint)=} fallback - A fallback value for when the object passed to the returned function does not contain a translateX value
 * @param {boolean=} [propless=false] - Whether the component should be without prop
 * @returns {function({props})} Function to take component props passed by styled-components
 * @name translateX
 * @memberOf core
 */
export default propless(
  (value, theme) => universal(value, theme, 'transform:translateX(', ');'),
  'translateX'
)
