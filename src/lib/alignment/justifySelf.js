import construct from '../util/construct'

/**
 * Returns a function that takes an object containing justifySelf and theme properties.
 *
 * This function is meant to be used with styled-components. Call this function within your styled-component's template literal like so:
 *
 * @example
 * const MyComponent = styled.div`
 *   ${justifySelf()}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${justifySelf('start')}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${justifySelf({ breakpoint1: 'start', breakpoint2: 'center'})}
 * `
 *
 * @param {(Object.<(string|number|bigint)>|Array.<(string|number|bigint)>|string|number|bigint)=} fallback - A fallback value for when the object passed to the returned function does not contain a justifySelf value
 * @param {boolean=} [propless=false] - Whether the component should be without prop
 * @returns {function({props})} Function to take component props passed by styled-components
 * @name justifySelf
 * @memberOf core
 */
export default (fallback, propless = false) =>
  propless
    ? ({ theme }) => construct(fallback, theme, 'justify-self')
    : ({ justifySelf, theme }) =>
        construct(justifySelf || fallback, theme, 'justify-self')
