import propless from '../util/propless'
import universal from '../util/universal'
import percent from '../util/transformers/percent'

/**
 * Returns a function that takes an object containing saturate and theme properties.
 *
 * This function is meant to be used with styled-components. Call this function within your styled-component's template literal like so:
 *
 * @example
 * const MyComponent = styled.div`
 *   ${saturate()}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${saturate(0.5)}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${saturate(1)}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${saturate(30)}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${saturate({ breakpoint1: 0.5, breakpoint2: 30})}
 * `
 *
 * @param {(Object.<(string|number|bigint)>|Array.<(string|number|bigint)>|string|number|bigint)=} fallback - A fallback value for when the object passed to the returned function does not contain a saturate value
 * @param {boolean=} [propless=false] - Whether the component should be without prop
 * @returns {function({props})} Function to take component props passed by styled-components
 * @name saturate
 * @memberOf core
 */
export default propless(
  (value, theme) => universal(value, theme, 'filter:saturate(', ');', percent),
  'saturate'
)
