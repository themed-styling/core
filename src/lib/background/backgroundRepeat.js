import propless from '../util/propless'
import construct from '../util/construct'
import plain from '../util/transformers/plain'

/**
 * Returns a function that takes an object containing backgroundRepeat and theme properties.
 *
 * This function is meant to be used with styled-components. Call this function within your styled-component's template literal like so:
 *
 * @example
 * const MyComponent = styled.div`
 *   ${backgroundRepeat()}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${backgroundRepeat('repeat')}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${backgroundRepeat({ breakpoint1: 'repeat', breakpoint2: 'no-repeat'})}
 * `
 *
 * @param {(Object.<(string|number|bigint)>|Array.<(string|number|bigint)>|string|number|bigint)=} fallback - A fallback value for when the object passed to the returned function does not contain a backgroundRepeat value
 * @param {boolean=} [propless=false] - Whether the component should be without prop
 * @returns {function({props})} Function to take component props passed by styled-components
 * @name backgroundRepeat
 * @memberOf core
 */
export default propless(
  (value, theme) => construct(value, theme, 'background-repeat', plain),
  'backgroundRepeat'
)