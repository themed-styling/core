import propless from '../util/propless'
import construct from '../util/construct'

/**
 * Returns a function that takes an object containing borderTopWidth and theme properties.
 *
 * This function is meant to be used with styled-components. Call this function within your styled-component's template literal like so:
 *
 * @example
 * const MyComponent = styled.div`
 *   ${borderTopWidth()}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${borderTopWidth(3)}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${borderTopWidth({ breakpoint1: 3, breakpoint2: '1rem'})}
 * `
 *
 * @param {(Object.<(string|number|bigint)>|Array.<(string|number|bigint)>|string|number|bigint)=} fallback - A fallback value for when the object passed to the returned function does not contain a borderTopWidth value
 * @param {boolean=} [propless=false] - Whether the component should be without prop
 * @returns {function({props})} Function to take component props passed by styled-components
 * @name borderTopWidth
 * @memberOf core
 */
export default propless(
  (value, theme) => construct(value, theme, 'border-top-width'),
  'borderTopWidth'
)
