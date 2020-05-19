import propless from './util/propless'
import construct from './util/construct'
import plain from './util/transformers/plain'

/**
 * Returns a function that takes an object containing boxShadow and theme properties.
 *
 * This function is meant to be used with styled-components. Call this function within your styled-component's template literal like so:
 *
 * @example
 * const MyComponent = styled.div`
 *   ${boxShadow()}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${boxShadow('0 0 5px DarkSlateBlue')}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${boxShadow({ breakpoint1: '0 0 5px DarkSlateBlue', breakpoint2: '0 0 10px DarkSlateBlue'})}
 * `
 *
 * @param {(Object.<(string|number|bigint)>|Array.<(string|number|bigint)>|string|number|bigint)=} fallback - A fallback value for when the object passed to the returned function does not contain a boxShadow value
 * @param {boolean=} [propless=false] - Whether the component should be without prop
 * @returns {function({props})} Function to take component props passed by styled-components
 * @name boxShadow
 * @memberOf core
 */
export default propless(
  (value, theme) => construct(value, theme, 'box-shadow', plain),
  'boxShadow'
)
