import propless from '../util/propless'
import construct from '../util/construct'
import plain from '../util/transformers/plain'

/**
 * Returns a function that takes an object containing position and theme properties.
 *
 * This function is meant to be used with styled-components. Call this function within your styled-component's template literal like so:
 *
 * @example
 * const MyComponent = styled.div`
 *   ${position()}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${position('relative')}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${position({ breakpoint1: 'relative', breakpoint2: 'absolute'})}
 * `
 *
 * @param {(Object.<(string|number|bigint)>|Array.<(string|number|bigint)>|string|number|bigint)=} fallback - A fallback value for when the object passed to the returned function does not contain a position value
 * @param {boolean=} [propless=false] - Whether the component should be without prop
 * @returns {function({props})} Function to take component props passed by styled-components
 * @name position
 * @memberOf core
 */
export default propless(
  (value, theme) => construct(value, theme, 'position', plain),
  'position'
)
