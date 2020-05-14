import construct from '../util/construct'
import plain from '../util/transformers/plain'

/**
 * Returns a function that takes an object containing grid and theme properties.
 *
 * This function is meant to be used with styled-components. Call this function within your styled-component's template literal like so:
 *
 * @example
 * const MyComponent = styled.div`
 *   ${grid()}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${grid('1 / 3')}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${grid({ breakpoint1: '1 / 3', breakpoint2: '3 / 1'})}
 * `
 *
 * @param {(Object.<(string|number|bigint)>|Array.<(string|number|bigint)>|string|number|bigint)=} fallback - A fallback value for when the object passed to the returned function does not contain a margin value
 * @param {boolean=} [propless=false] - Whether the component should be without prop
 * @returns {function(props)} Function to take component props passed by styled-components
 * @name grid
 * @memberOf core
 */
export default (fallback, propless = false) =>
  propless
    ? ({ theme }) => construct(fallback, theme, 'grid', plain)
    : ({ grid, theme }) => construct(grid || fallback, theme, 'grid', plain)
