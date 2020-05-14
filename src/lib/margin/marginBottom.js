import construct from '../util/construct'

/**
 * Returns a function that takes an object containing marginBottom and theme properties.
 *
 * This function is meant to be used with styled-components. Call this function within your styled-component's template literal like so:
 *
 * @example
 * const MyComponent = styled.div`
 *   ${marginBottom()}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${marginBottom(20)}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${marginBottom('1.5rem')}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${marginBottom({ breakpoint1: 20, breakpoint2: '1.5rem'})}
 * `
 *
 * @param {(Object.<(string|number|bigint)>|Array.<(string|number|bigint)>|string|number|bigint)=} fallback - A fallback value for when the object passed to the returned function does not contain a marginBottom value
 * @param {boolean=} [propless=false] - Whether the component should be without prop
 * @returns {function({props})} Function to take component props passed by styled-components
 * @name marginBottom
 * @memberOf core
 */
export default (fallback, propless = false) =>
  propless
    ? ({ theme }) => construct(fallback, theme, 'margin-bottom')
    : ({ marginBottom, theme }) =>
        construct(marginBottom || fallback, theme, 'margin-bottom')
