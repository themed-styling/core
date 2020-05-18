import propless from '../util/propless'
import construct from '../util/construct'
import plain from '../util/transformers/plain'

/**
 * Returns a function that takes an object containing clear and theme properties.
 *
 * This function is meant to be used with styled-components. Call this function within your styled-component's template literal like so:
 *
 * @example
 * const MyComponent = styled.div`
 *   ${clear()}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${clear('both')}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${clear({ breakpoint1: 'both', breakpoint2: 'none'})}
 * `
 *
 * @param {(Object.<(string|number|bigint)>|Array.<(string|number|bigint)>|string|number|bigint)=} fallback - A fallback value for when the object passed to the returned function does not contain a clear value
 * @param {boolean=} [propless=false] - Whether the component should be without prop
 * @returns {function({props})} Function to take component props passed by styled-components
 * @name clear
 * @memberOf core
 */
export default propless(
  (value, theme) => construct(value, theme, 'clear', plain),
  'clear'
)
