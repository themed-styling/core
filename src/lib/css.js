import propless from './util/propless'
import universal from './util/universal'
import plain from './util/transformers/plain'

/**
 * Returns a function that takes an object containing css and theme properties.
 *
 * This function is meant to be used with styled-components. Call this function within your styled-component's template literal like so:
 *
 * @example
 * const MyComponent = styled.div`
 *   ${css()}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${css('width: 300px;')}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${css({
 *     breakpoint1: `width: 300px;
 *     height: 500px;`,
 *     breakpoint2: `width: 500px;
 *     height: 300px;`
 *   })}
 * `
 *
 * @param {(Object.<(string|number|bigint)>|Array.<(string|number|bigint)>|string|number|bigint)=} fallback - A fallback value for when the object passed to the returned function does not contain a margin value
 * @param {boolean=} [propless=false] - Whether the component should be without prop
 * @returns {function({props})} Function to take component props passed by styled-components
 * @name css
 * @memberOf core
 */
export default propless(
  (value, theme) => universal(value, theme, undefined, undefined, plain),
  'css'
)
