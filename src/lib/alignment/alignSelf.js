import construct from '../util/construct'

/**
 * Returns a function that takes an object containing alignSelf and theme properties.
 *
 * This function is meant to be used with styled-components. Call this function within your styled-component's template literal like so:
 *
 * @example
 * const MyComponent = styled.div`
 *   ${alignSelf()}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${alignSelf('start')}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${alignSelf({ breakpoint1: 'start', breakpoint2: 'center'})}
 * `
 *
 * @param {(Object.<(string|number|bigint)>|Array.<(string|number|bigint)>|string|number|bigint)=} fallback - A fallback value for when the object passed to the returned function does not contain a alignSelf value
 * @returns {function(props)} Component props passed by styled-components
 * @name alignSelf
 * @memberOf core
 */
export default (fallback) => ({ alignSelf, theme }) =>
  construct(alignSelf || fallback, theme, 'align-self')
