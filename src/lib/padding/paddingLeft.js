import construct from '../util/construct'

/**
 * Returns a function that takes an object containing paddingLeft and theme properties.
 *
 * This function is meant to be used with styled-components. Call this function within your styled-component's template literal like so:
 *
 * @example
 * const MyComponent = styled.div`
 *   ${paddingLeft()}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${paddingLeft(20)}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${paddingLeft('1.5rem')}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${paddingLeft({ breakpoint1: 20, breakpoint2: '1.5rem'})}
 * `
 *
 * @param {(Object.<(string|number|bigint)>|Array.<(string|number|bigint)>|string|number|bigint)=} fallback - A fallback value for when the object passed to the returned function does not contain a paddingLeft value
 * @param {boolean=} [propless=false] - Whether the component should be without prop
 * @returns {function({props})} Function to take component props passed by styled-components
 * @name paddingLeft
 * @memberOf core
 */
export default (fallback, propless = false) =>
  propless
    ? ({ theme }) => construct(fallback, theme, 'padding-left')
    : ({ paddingLeft, theme }) =>
        construct(paddingLeft || fallback, theme, 'padding-left')
