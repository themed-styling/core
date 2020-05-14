import construct from '../util/construct'

/**
 * Returns a function that takes an object containing width and theme properties.
 *
 * This function is meant to be used with styled-components. Call this function within your styled-component's template literal like so:
 *
 * @example
 * const MyComponent = styled.div`
 *   ${width()}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${width(300)}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${width('50vw')}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${width({ breakpoint1: 300, breakpoint2: '50vw'})}
 * `
 *
 * @param {(Object.<(string|number|bigint)>|Array.<(string|number|bigint)>|string|number|bigint)=} fallback - A fallback value for when the object passed to the returned function does not contain a margin value
 * @param {boolean=} [propless=false] - Whether the component should be without prop
 * @returns {function(props)} Function to take component props passed by styled-components
 * @name width
 * @memberOf core
 */
export default (fallback, propless = false) =>
  propless
    ? ({ theme }) => construct(fallback, theme, 'width')
    : ({ width, theme }) => construct(width || fallback, theme, 'width')
