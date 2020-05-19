import propless from '../util/propless'
import universal from '../util/universal'
import plain from '../util/transformers/plain'

/**
 * Returns a function that takes an object containing rotate3D and theme properties.
 *
 * This function is meant to be used with styled-components. Call this function within your styled-component's template literal like so:
 *
 * @example
 * const MyComponent = styled.div`
 *   ${rotate3D()}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${rotate3D('1,1,1,36deg')}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${rotate3D({ breakpoint1: '1,1,1,36deg', breakpoint2: '3,3,3,2rad'})}
 * `
 *
 * @param {(Object.<(string|number|bigint)>|Array.<(string|number|bigint)>|string|number|bigint)=} fallback - A fallback value for when the object passed to the returned function does not contain a rotate3D value
 * @param {boolean=} [propless=false] - Whether the component should be without prop
 * @returns {function({props})} Function to take component props passed by styled-components
 * @name rotate3D
 * @memberOf core
 */
export default propless(
  (value, theme) => universal(value, theme, 'transform:rotate3d(', ');', plain),
  'rotate3D'
)
