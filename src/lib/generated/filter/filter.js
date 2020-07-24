import propless from '../util/propless'
import construct from '../util/construct'
import plain from '../util/transformers/plain'

/**
 * Returns a function that takes an object containing filter and theme properties.
 *
 * This function is meant to be used with styled-components. Call this function within your styled-component's template literal like so:
 *
 * @example
 * const MyComponent = styled.div`
 *   ${filter()}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${filter('blur(5px)')}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${filter({ breakpoint1: 'blur(5px)', breakpoint2: 'url(filter.com/blur)'})}
 * `
 *
 * @param {(Object.<(string|number|bigint)>|Array.<(string|number|bigint)>|string|number|bigint)=} fallback - A fallback value for when the object passed to the returned function does not contain a filter value
 * @param {boolean=} [propless=false] - Whether the component should be without prop
 * @returns {function({props})} Function to take component props passed by styled-components
 * @name filter
 * @memberOf core
 */
export default propless(
  (value, theme) => construct(value, theme, 'filter', plain),
  'filter'
)
