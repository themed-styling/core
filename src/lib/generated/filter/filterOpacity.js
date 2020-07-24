import propless from '../util/propless'
import universal from '../util/universal'
import percent from '../util/transformers/percent'

/**
 * Returns a function that takes an object containing filterOpacity and theme properties.
 *
 * This function is meant to be used with styled-components. Call this function within your styled-component's template literal like so:
 *
 * @example
 * const MyComponent = styled.div`
 *   ${filterOpacity()}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${filterOpacity(0.5)}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${filterOpacity(1)}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${filterOpacity(30)}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${filterOpacity({ breakpoint1: 0.5, breakpoint2: 30})}
 * `
 *
 * @param {(Object.<(string|number|bigint)>|Array.<(string|number|bigint)>|string|number|bigint)=} fallback - A fallback value for when the object passed to the returned function does not contain a filterOpacity value
 * @param {boolean=} [propless=false] - Whether the component should be without prop
 * @returns {function({props})} Function to take component props passed by styled-components
 * @name filterOpacity
 * @memberOf core
 */
export default propless(
  (value, theme) => universal(value, theme, 'filter:opacity(', ');', percent),
  'filterOpacity'
)
