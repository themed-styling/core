import construct from '../util/construct'

/**
 * Returns a function that takes an object containing paddingLeft and theme properties.
 *
 * This function is meant to be used with styled-components. Call this function within your styled-component's template literal like so:
 *
 * @example
 * const MyComponent = styled.div`
 *   ${paddingLeft()}
 * `
 * @example
 * const MyComponentWithFallback = styled.div`
 *   ${paddingLeft({ breakpoint1: '1rem', breakpoint2: 10})}
 * `
 *
 * @param {(Object.<(string|number|bigint)>|Array.<(string|number|bigint)>|string|number|bigint)=} fallback - A fallback value for when the object passed to the returned function does not contain a paddingLeft value
 * @returns {function(props)} Component props passed by styled-components
 * @name paddingLeft
 * @memberOf core
 */
export default (fallback) => ({ paddingLeft, theme }) =>
  construct(paddingLeft || fallback, theme, 'padding-left')
