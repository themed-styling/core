import construct from '../util/construct'
import plain from '../util/transformers/plain'

/**
 * Returns a function that takes an object containing gridColumn and theme properties.
 *
 * This function is meant to be used with styled-components. Call this function within your styled-component's template literal like so:
 *
 * @example
 * const MyComponent = styled.div`
 *   ${gridColumn()}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${gridColumn(1)}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${gridColumn('1 / 3')}
 * `
 * @example
 * const MyComponentWithFallback = styled.div`
 *   ${gridColumn({ breakpoint1: 1, breakpoint2: '1 / 3'})}
 * `
 *
 * @param {(Object.<(string|number|bigint)>|Array.<(string|number|bigint)>|string|number|bigint)=} fallback - A fallback value for when the object passed to the returned function does not contain a margin value
 * @returns {function(props)} Component props passed by styled-components
 * @name gridColumn
 * @memberOf core
 */
export default (fallback) => ({ gridColumn, theme }) =>
  construct(gridColumn || fallback, theme, 'grid-column', plain)
