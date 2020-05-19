import propless from '../util/propless'
import construct from '../util/construct'

/**
 * Returns a function that takes an object containing borderLeftWidth and theme properties.
 *
 * This function is meant to be used with styled-components. Call this function within your styled-component's template literal like so:
 *
 * @example
 * const MyComponent = styled.div`
 *   ${borderLeftWidth()}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${borderLeftWidth(3)}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${borderLeftWidth({ breakpoint1: 3, breakpoint2: '1rem'})}
 * `
 *
 * @param {(Object.<(string|number|bigint)>|Array.<(string|number|bigint)>|string|number|bigint)=} fallback - A fallback value for when the object passed to the returned function does not contain a borderLeftWidth value
 * @param {boolean=} [propless=false] - Whether the component should be without prop
 * @returns {function({props})} Function to take component props passed by styled-components
 * @name borderLeftWidth
 * @memberOf core
 */
export default propless(
  (value, theme) => construct(value, theme, 'border-left-width'),
  'borderLeftWidth'
)
