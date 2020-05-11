import construct from '../util/construct'
import plain from '../util/transformers/plain'

/**
 * Returns a function that takes an object containing gridRowEnd and theme properties.
 *
 * This function is meant to be used with styled-components. Call this function within your styled-component's template literal like so:
 *
 * @example
 * const MyComponent = styled.div`
 *   ${gridRowEnd()}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${gridRowEnd(3)}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${gridRowEnd({ breakpoint1: 3, breakpoint2: '1'})}
 * `
 *
 * @param {(Object.<(string|number|bigint)>|Array.<(string|number|bigint)>|string|number|bigint)=} fallback - A fallback value for when the object passed to the returned function does not contain a margin value
 * @returns {function(props)} Component props passed by styled-components
 * @name gridRowEnd
 * @memberOf core
 */
export default (fallback) => ({ gridRowEnd, theme }) =>
  construct(gridRowEnd || fallback, theme, 'grid-row-end', plain)
