import construct from './util/construct'

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
 * const MyComponentWithFallback = styled.div`
 *   ${height({ breakpoint1: '1rem', breakpoint2: 18})}
 * `
 *
 * @param {(Object.<(string|number|bigint)>|Array.<(string|number|bigint)>|string|number|bigint)=} fallback - A fallback value for when the object passed to the returned function does not contain a margin value
 * @returns {function(props)} Component props passed by styled-components
 * @name height
 * @memberOf core
 */
export default (fallback) => ({ height, theme }) =>
  construct(height || fallback, theme, 'height')
