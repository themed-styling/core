import construct from '../util/construct'

/**
 * Returns a function that takes an object containing paddingBottom and theme properties.
 *
 * This function is meant to be used with styled-components. Call this function within your styled-component's template literal like so:
 *
 * @example
 * const MyComponent = styled.div`
 *   ${paddingBottom()}
 * `
 * @example
 * const MyComponentWithFallback = styled.div`
 *   ${paddingBottom({ breakpoint1: '1rem', breakpoint2: 10})}
 * `
 *
 * @param {(Object.<(string|number|bigint)>|Array.<(string|number|bigint)>|string|number|bigint)=} fallback - A fallback value for when the object passed to the returned function does not contain a paddingBottom value
 * @returns {function(props)} Component props passed by styled-components
 * @name paddingBottom
 * @memberOf core
 */
export default (fallback) => ({ paddingBottom, theme }) =>
  construct(paddingBottom || fallback, theme, 'padding-bottom')
