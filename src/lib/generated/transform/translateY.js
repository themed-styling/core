import propless from '../util/propless'
import universal from '../util/universal'
import plain from '../util/transformers/plain'

/**
 * Returns a function that takes an object containing translateY and theme properties.
 *
 * This function is meant to be used with styled-components. Call this function within your styled-component's template literal like so:
 *
 * @example
 * const MyComponent = styled.div`
 *   ${translateY()}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${translateY(10)}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${translateY('20px')}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${translateY({ breakpoint1: 10, breakpoint2: '20px'})}
 * `
 *
 * @param {(Object.<(string|number|bigint)>|Array.<(string|number|bigint)>|string|number|bigint)=} fallback - A fallback value for when the object passed to the returned function does not contain a translateY value
 * @param {boolean=} [propless=false] - Whether the component should be without prop
 * @returns {function({props})} Function to take component props passed by styled-components
 * @name translateY
 * @memberOf core
 */
export default propless(
  (value, theme) => universal(value, theme, 'transform:translateY(', ');'),
  'translateY'
)
