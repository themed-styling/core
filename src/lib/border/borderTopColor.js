import propless from '../util/propless'
import construct from '../util/construct'
import color from '../util/transformers/color'

/**
 * Returns a function that takes an object containing borderTopColor and theme properties.
 *
 * This function is meant to be used with styled-components. Call this function within your styled-component's template literal like so:
 *
 * @example
 * const MyComponent = styled.div`
 *   ${borderTopColor()}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${borderTopColor(333)}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${borderTopColor('DarkSlateBlue')}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${borderTopColor({ breakpoint1: 333, breakpoint2: 'DarkSlateBlue'})}
 * `
 *
 * @param {(Object.<(string|number|bigint)>|Array.<(string|number|bigint)>|string|number|bigint)=} fallback - A fallback value for when the object passed to the returned function does not contain a borderTopColor value
 * @param {boolean=} [propless=false] - Whether the component should be without prop
 * @returns {function({props})} Function to take component props passed by styled-components
 * @name borderTopColor
 * @memberOf core
 */
export default propless(
  (value, theme) => construct(value, theme, 'border-top-color', color),
  'borderTopColor'
)
