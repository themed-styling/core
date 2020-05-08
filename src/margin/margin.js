import themeGet from '@styled-system/theme-get'

/**
 * Returns a function that takes an object containing margin and theme properties
 *
 * This function is meant to be used with styled-components. Call this function within your styled-component's template literal like so:
 *
 * @example
 * const MyComponent = styled.div`
 *   ${margin()}
 * `
 * @example
 * const MyComponentWithFallback = styled.div`
 *   ${margin({ breakpoint1: "1rem", breakpoint2: 10})}
 * `
 *
 * @param {(Object<(string|number|bigint)>|string|number|bigint)=} fallback - A fallback value for when the object passed to the returned function does not contain a margin value
 * @returns {function(props)} Component props passed by styled-components
 */
export default (fallback) => ({ margin, theme }) => {
  const value = margin || fallback
  switch (typeof value) {
    case 'object':
      return Object.entries(value).flatMap(([key, value]) => [
        '@media screen and (min-width:',
        theme.breakpoints[key],
        '){margin:',
        themeGet(value, value),
        ';}',
      ])
    case 'string':
      return ['margin:', themeGet(value, value), ';']
    case 'number':
    case 'bigint':
      return ['margin:', themeGet(value, `${value}px`), ';']
    default:
      throw new TypeError('Value has to be of type object, string or number')
  }
}
