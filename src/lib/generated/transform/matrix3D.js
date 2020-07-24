import propless from '../util/propless'
import universal from '../util/universal'
import plain from '../util/transformers/plain'

/**
 * Returns a function that takes an object containing matrix3D and theme properties.
 *
 * This function is meant to be used with styled-components. Call this function within your styled-component's template literal like so:
 *
 * @example
 * const MyComponent = styled.div`
 *   ${matrix3D()}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${matrix3D('1,2,2,4,1,2,5,4,1,1,3,6,1,4,8,4')}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${matrix3D({ breakpoint1: '1,2,2,4,1,2,5,4,1,1,3,6,1,4,8,4', breakpoint2: '1,2,1,4,1,1,5,4,1,1,3,1,1,4,2,1'})}
 * `
 *
 * @param {(Object.<(string|number|bigint)>|Array.<(string|number|bigint)>|string|number|bigint)=} fallback - A fallback value for when the object passed to the returned function does not contain a matrix3D value
 * @param {boolean=} [propless=false] - Whether the component should be without prop
 * @returns {function({props})} Function to take component props passed by styled-components
 * @name matrix3D
 * @memberOf core
 */
export default propless(
  (value, theme) => universal(value, theme, 'transform:matrix3d(', ');', plain),
  'matrix3D'
)
