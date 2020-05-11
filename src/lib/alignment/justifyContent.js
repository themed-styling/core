import construct from '../util/construct'

/**
 * Returns a function that takes an object containing justifyContent and theme properties.
 *
 * This function is meant to be used with styled-components. Call this function within your styled-component's template literal like so:
 *
 * @example
 * const MyComponent = styled.div`
 *   ${justifyContent()}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${justifyContent('start')}
 * `
 * @example
 * const MyComponentWithFallback = styled.div`
 *   ${justifyContent({ breakpoint1: 'start', breakpoint2: 'center'})}
 * `
 *
 * @param {(Object.<(string|number|bigint)>|Array.<(string|number|bigint)>|string|number|bigint)=} fallback - A fallback value for when the object passed to the returned function does not contain a justifyContent value
 * @returns {function(props)} Component props passed by styled-components
 * @name justifyContent
 * @memberOf core
 */
export default (fallback) => ({ justifyContent, theme }) =>
  construct(justifyContent || fallback, theme, 'justify-content')
