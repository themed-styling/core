import construct from '../util/construct'

/**
 * Returns a function that takes an object containing marginTop and theme properties.
 *
 * This function is meant to be used with styled-components. Call this function within your styled-component's template literal like so:
 *
 * @example
 * const MyComponent = styled.div`
 *   ${marginTop()}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${marginTop(20)}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${marginTop('1.5rem')}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${marginTop({ breakpoint1: 20, breakpoint2: '1.5rem'})}
 * `
 *
 * @param {(Object.<(string|number|bigint)>|Array.<(string|number|bigint)>|string|number|bigint)=} fallback - A fallback value for when the object passed to the returned function does not contain a marginTop value
 * @returns {function(props)} Component props passed by styled-components
 * @name marginTop
 * @memberOf core
 */
export default (fallback) => ({ marginTop, theme }) =>
  construct(marginTop || fallback, theme, 'margin-top')
