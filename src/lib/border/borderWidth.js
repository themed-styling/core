import propless from '../util/propless'
import construct from '../util/construct'

/**
 * Returns a function that takes an object containing borderWidth and theme properties.
 *
 * This function is meant to be used with styled-components. Call this function within your styled-component's template literal like so:
 *
 * @example
 * const MyComponent = styled.div`
 *   ${borderWidth()}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${borderWidth(3)}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${borderWidth({ breakpoint1: 3, breakpoint2: '1rem'})}
 * `
 *
 * @param {(Object.<(string|number|bigint)>|Array.<(string|number|bigint)>|string|number|bigint)=} fallback - A fallback value for when the object passed to the returned function does not contain a borderWidth value
 * @param {boolean=} [propless=false] - Whether the component should be without prop
 * @returns {function({props})} Function to take component props passed by styled-components
 * @name borderWidth
 * @memberOf core
 */
export default propless(
  (value, theme) => construct(value, theme, 'border-width'),
  'borderWidth'
)
