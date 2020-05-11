import construct from '../util/construct'

/**
 * Returns a function that takes an object containing gridTemplate and theme properties.
 *
 * This function is meant to be used with styled-components. Call this function within your styled-component's template literal like so:
 *
 * @example
 * const MyComponent = styled.div`
 *   ${gridTemplate()}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${gridTemplate({ breakpoint1: '1fr 2fr / auto', breakpoint2: 1fr / auto})}
 * `
 *
 * @param {(Object.<(string|number|bigint)>|Array.<(string|number|bigint)>|string|number|bigint)=} fallback - A fallback value for when the object passed to the returned function does not contain a margin value
 * @returns {function(props)} Component props passed by styled-components
 * @name gridTemplate
 * @memberOf core
 */
export default (fallback) => ({ gridTemplate, theme }) =>
  construct(gridTemplate || fallback, theme, 'grid-template')
