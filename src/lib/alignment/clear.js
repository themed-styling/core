import construct from '../util/construct'

/**
 * Returns a function that takes an object containing clear and theme properties.
 *
 * This function is meant to be used with styled-components. Call this function within your styled-component's template literal like so:
 *
 * @example
 * const MyComponent = styled.div`
 *   ${clear()}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${clear('start')}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${clear({ breakpoint1: 'start', breakpoint2: 'center'})}
 * `
 *
 * @param {(Object.<(string|number|bigint)>|Array.<(string|number|bigint)>|string|number|bigint)=} fallback - A fallback value for when the object passed to the returned function does not contain a clear value
 * @returns {function(props)} Function to take component props passed by styled-components
 * @name clear
 * @memberOf core
 */
export default (fallback) => ({ clear, theme }) =>
  construct(clear || fallback, theme, 'clear')
