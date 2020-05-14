import construct from './util/construct'
import _color from './util/transformers/color'

/**
 * Returns a function that takes an object containing color and theme properties.
 *
 * This function is meant to be used with styled-components. Call this function within your styled-component's template literal like so:
 *
 * @example
 * const MyComponent = styled.div`
 *   ${color()}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${color('white')}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${color({ breakpoint1: 'white', breakpoint2: 'DarkSlateBlue'})}
 * `
 *
 * @param {(Object.<(string|number|bigint)>|Array.<(string|number|bigint)>|string|number|bigint)=} fallback - A fallback value for when the object passed to the returned function does not contain a margin value
 * @param {boolean=} [propless=false] - Whether the component should be without prop
 * @returns {function({props})} Function to take component props passed by styled-components
 * @name color
 * @memberOf core
 */
export default (fallback, propless = false) =>
  propless
    ? ({ theme }) => construct(fallback, theme, 'color', _color)
    : ({ color, theme }) => construct(color || fallback, theme, 'color', _color)
