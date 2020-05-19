import propless from '../util/propless'
import universal from '../util/universal'
import plain from '../util/transformers/plain'

/**
 * Returns a function that takes an object containing translateZ and theme properties.
 *
 * This function is meant to be used with styled-components. Call this function within your styled-component's template literal like so:
 *
 * @example
 * const MyComponent = styled.div`
 *   ${translateZ()}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${translateZ(10)}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${translateZ('20px')}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${translateZ({ breakpoint1: 10, breakpoint2: '20px'})}
 * `
 *
 * @param {(Object.<(string|number|bigint)>|Array.<(string|number|bigint)>|string|number|bigint)=} fallback - A fallback value for when the object passed to the returned function does not contain a translateZ value
 * @param {boolean=} [propless=false] - Whether the component should be without prop
 * @returns {function({props})} Function to take component props passed by styled-components
 * @name translateZ
 * @memberOf core
 */
export default propless(
  (value, theme) => universal(value, theme, 'transform:translateZ(', ');'),
  'translateZ'
)
