import construct from './util/construct'
import color from './util/transformers/color'

/**
 * Returns a function that takes an object containing background and theme properties.
 *
 * This function is meant to be used with styled-components. Call this function within your styled-component's template literal like so:
 *
 * @example
 * const MyComponent = styled.div`
 *   ${background()}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${background('DarkSlateBlue')}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${background({ breakpoint1: 'DarkSlateBlue', breakpoint2: 'white'})}
 * `
 *
 * @param {(Object.<(string|number|bigint)>|Array.<(string|number|bigint)>|string|number|bigint)=} fallback - A fallback value for when the object passed to the returned function does not contain a margin value
 * @param {boolean=} [propless=false] - Whether the component should be without prop
 * @returns {function(props)} Function to take component props passed by styled-components
 * @name background
 * @memberOf core
 */
export default (fallback, propless = false) =>
  propless
    ? ({ theme }) => construct(fallback, theme, 'background', color)
    : ({ background, theme }) =>
        construct(background || fallback, theme, 'background', color)
