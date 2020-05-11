import construct from '../util/construct'

/**
 * Returns a function that takes an object containing paddingRight and theme properties.
 *
 * This function is meant to be used with styled-components. Call this function within your styled-component's template literal like so:
 *
 * @example
 * const MyComponent = styled.div`
 *   ${paddingRight()}
 * `
 * @example
 * const MyComponentWithFallback = styled.div`
 *   ${paddingRight({ breakpoint1: '1rem', breakpoint2: 10})}
 * `
 *
 * @param {(Object.<(string|number|bigint)>|Array.<(string|number|bigint)>|string|number|bigint)=} fallback - A fallback value for when the object passed to the returned function does not contain a paddingRight value
 * @returns {function(props)} Component props passed by styled-components
 * @name paddingRight
 * @memberOf core
 */
export default (fallback) => ({ paddingRight, theme }) =>
  construct(paddingRight || fallback, theme, 'padding-right')
