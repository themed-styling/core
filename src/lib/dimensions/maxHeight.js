import construct from '../util/construct'

/**
 * Returns a function that takes an object containing maxHeight and theme properties.
 *
 * This function is meant to be used with styled-components. Call this function within your styled-component's template literal like so:
 *
 * @example
 * const MyComponent = styled.div`
 *   ${maxHeight()}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${maxHeight(300)}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${maxHeight('50vh')}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${maxHeight({ breakpoint1: 300, breakpoint2: '50vh'})}
 * `
 *
 * @param {(Object.<(string|number|bigint)>|Array.<(string|number|bigint)>|string|number|bigint)=} fallback - A fallback value for when the object passed to the returned function does not contain a margin value
 * @param {boolean=} [propless=false] - Whether the component should be without prop
 * @returns {function(props)} Function to take component props passed by styled-components
 * @name maxHeight
 * @memberOf core
 */
export default (fallback, propless = false) =>
  propless
    ? ({ theme }) => construct(fallback, theme, 'max-height')
    : ({ maxHeight, theme }) =>
        construct(maxHeight || fallback, theme, 'max-height')
