import construct from '../util/construct'

/**
 * Returns a function that takes an object containing minHeight and theme properties.
 *
 * This function is meant to be used with styled-components. Call this function within your styled-component's template literal like so:
 *
 * @example
 * const MyComponent = styled.div`
 *   ${minHeight()}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${minHeight(300)}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${minHeight('50vh')}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${minHeight({ breakpoint1: 300, breakpoint2: '50vh'})}
 * `
 *
 * @param {(Object.<(string|number|bigint)>|Array.<(string|number|bigint)>|string|number|bigint)=} fallback - A fallback value for when the object passed to the returned function does not contain a margin value
 * @param {boolean=} [propless=false] - Whether the component should be without prop
 * @returns {function(props)} Function to take component props passed by styled-components
 * @name minHeight
 * @memberOf core
 */
export default (fallback, propless = false) =>
  propless
    ? ({ theme }) => construct(fallback, theme, 'min-height')
    : ({ minHeight, theme }) =>
        construct(minHeight || fallback, theme, 'min-height')
