import construct from '../util/construct'

/**
 * Returns a function that takes an object containing alignItems and theme properties.
 *
 * This function is meant to be used with styled-components. Call this function within your styled-component's template literal like so:
 *
 * @example
 * const MyComponent = styled.div`
 *   ${alignItems()}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${alignItems('start')}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${alignItems({ breakpoint1: 'start', breakpoint2: 'center'})}
 * `
 *
 * @param {(Object.<(string|number|bigint)>|Array.<(string|number|bigint)>|string|number|bigint)=} fallback - A fallback value for when the object passed to the returned function does not contain a alignItems value
 * @returns {function(props)} Component props passed by styled-components
 * @name alignItems
 * @memberOf core
 */
export default (fallback) => ({ alignItems, theme }) =>
  construct(alignItems || fallback, theme, 'align-items')
