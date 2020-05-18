import propless from '../util/propless'
import universal from '../util/universal'

/**
 * Returns a function that takes an object containing blur and theme properties.
 *
 * This function is meant to be used with styled-components. Call this function within your styled-component's template literal like so:
 *
 * @example
 * const MyComponent = styled.div`
 *   ${blur()}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${blur(5)}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${blur('1rem')}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${blur({ breakpoint1: 5, breakpoint2: '1rem'})}
 * `
 *
 * @param {(Object.<(string|number|bigint)>|Array.<(string|number|bigint)>|string|number|bigint)=} fallback - A fallback value for when the object passed to the returned function does not contain a blur value
 * @param {boolean=} [propless=false] - Whether the component should be without prop
 * @returns {function({props})} Function to take component props passed by styled-components
 * @name blur
 * @memberOf core
 */
export default propless(
  (value, theme) => universal(value, theme, 'filter:blur(', ');'),
  'blur'
)
