import propless from '../util/propless'
import construct from '../util/construct'
import plain from '../util/transformers/plain'

/**
 * Returns a function that takes an object containing flex and theme properties.
 *
 * This function is meant to be used with styled-components. Call this function within your styled-component's template literal like so:
 *
 * @example
 * const MyComponent = styled.div`
 *   ${flex()}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${flex(1)}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${flex({ breakpoint1: 1, breakpoint2: '1 0 50px'})}
 * `
 *
 * @param {(Object.<(string|number|bigint)>|Array.<(string|number|bigint)>|string|number|bigint)=} fallback - A fallback value for when the object passed to the returned function does not contain a flex value
 * @param {boolean=} [propless=false] - Whether the component should be without prop
 * @returns {function({props})} Function to take component props passed by styled-components
 * @name flex
 * @memberOf core
 */
export default propless(
  (value, theme) => construct(value, theme, 'flex', plain),
  'flex'
)
