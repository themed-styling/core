import propless from '../util/propless'
import universal from '../util/universal'
import plain from '../util/transformers/plain'

/**
 * Returns a function that takes an object containing matrix and theme properties.
 *
 * This function is meant to be used with styled-components. Call this function within your styled-component's template literal like so:
 *
 * @example
 * const MyComponent = styled.div`
 *   ${matrix()}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${matrix('1,2,3,4,5,6')}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${matrix({ breakpoint1: '1,2,3,4,5,6', breakpoint2: '2,1,4,3,6,5'})}
 * `
 *
 * @param {(Object.<(string|number|bigint)>|Array.<(string|number|bigint)>|string|number|bigint)=} fallback - A fallback value for when the object passed to the returned function does not contain a matrix value
 * @param {boolean=} [propless=false] - Whether the component should be without prop
 * @returns {function({props})} Function to take component props passed by styled-components
 * @name matrix
 * @memberOf core
 */
export default propless(
  (value, theme) => universal(value, theme, 'transform:matrix(', ');', plain),
  'matrix'
)
