import propless from '../util/propless'
import universal from '../util/universal'
import percent from '../util/transformers/percent'

/**
 * Returns a function that takes an object containing contrast and theme properties.
 *
 * This function is meant to be used with styled-components. Call this function within your styled-component's template literal like so:
 *
 * @example
 * const MyComponent = styled.div`
 *   ${contrast()}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${contrast(0.5)}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${contrast(1)}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${contrast(30)}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${contrast({ breakpoint1: 0.5, breakpoint2: 30})}
 * `
 *
 * @param {(Object.<(string|number|bigint)>|Array.<(string|number|bigint)>|string|number|bigint)=} fallback - A fallback value for when the object passed to the returned function does not contain a contrast value
 * @param {boolean=} [propless=false] - Whether the component should be without prop
 * @returns {function({props})} Function to take component props passed by styled-components
 * @name contrast
 * @memberOf core
 */
export default propless(
  (value, theme) => universal(value, theme, 'filter:contrast(', ');', percent),
  'contrast'
)
