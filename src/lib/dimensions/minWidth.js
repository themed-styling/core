import construct from '../util/construct'

/**
 * Returns a function that takes an object containing minWidth and theme properties.
 *
 * This function is meant to be used with styled-components. Call this function within your styled-component's template literal like so:
 *
 * @example
 * const MyComponent = styled.div`
 *   ${minWidth()}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${minWidth(300)}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${minWidth('50vw')}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${minWidth({ breakpoint1: 300, breakpoint2: '50vw'})}
 * `
 *
 * @param {(Object.<(string|number|bigint)>|Array.<(string|number|bigint)>|string|number|bigint)=} fallback - A fallback value for when the object passed to the returned function does not contain a margin value
 * @returns {function(props)} Function to take component props passed by styled-components
 * @name minWidth
 * @memberOf core
 */
export default (fallback) => ({ minWidth, theme }) =>
  construct(minWidth || fallback, theme, 'min-width')
