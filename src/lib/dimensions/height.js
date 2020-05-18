import propless from '../util/propless'
import construct from '../util/construct'

/**
 * Returns a function that takes an object containing height and theme properties.
 *
 * This function is meant to be used with styled-components. Call this function within your styled-component's template literal like so:
 *
 * @example
 * const MyComponent = styled.div`
 *   ${height()}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${height(300)}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${height('50vh')}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${height({ breakpoint1: 300, breakpoint2: '50vh'})}
 * `
 *
 * @param {(Object.<(string|number|bigint)>|Array.<(string|number|bigint)>|string|number|bigint)=} fallback - A fallback value for when the object passed to the returned function does not contain a margin value
 * @param {boolean=} [propless=false] - Whether the component should be without prop
 * @returns {function({props})} Function to take component props passed by styled-components
 * @name height
 * @memberOf core
 */
export default propless(
  (value, theme) => construct(value, theme, 'height'),
  'height'
)
