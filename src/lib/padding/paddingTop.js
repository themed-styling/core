import construct from '../util/construct'

/**
 * Returns a function that takes an object containing paddingTop and theme properties.
 *
 * This function is meant to be used with styled-components. Call this function within your styled-component's template literal like so:
 *
 * @example
 * const MyComponent = styled.div`
 *   ${paddingTop()}
 * `
 * @example
 * const MyComponentWithFallback = styled.div`
 *   ${paddingTop({ breakpoint1: '1rem', breakpoint2: 10})}
 * `
 *
 * @param {(Object.<(string|number|bigint)>|Array.<(string|number|bigint)>|string|number|bigint)=} fallback - A fallback value for when the object passed to the returned function does not contain a paddingTop value
 * @returns {function(props)} Component props passed by styled-components
 * @name paddingTop
 * @memberOf core
 */
export default (fallback) => ({ paddingTop, theme }) =>
  construct(paddingTop || fallback, theme, 'padding-top')
