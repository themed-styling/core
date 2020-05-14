/**
 * Returns a function that takes an object containing css and theme properties.
 *
 * This function is meant to be used with styled-components. Call this function within your styled-component's template literal like so:
 *
 * @example
 * const MyComponent = styled.div`
 *   ${css()}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${css('width: 300px;')}
 * `
 * @example
 * const MyComponent = styled.div`
 *   ${css({
 *     breakpoint1: `width: 300px;
 *     height: 500px;`,
 *     breakpoint2: `width: 500px;
 *     height: 300px;`
 *   })}
 * `
 *
 * @param {(Object.<(string|number|bigint)>|Array.<(string|number|bigint)>|string|number|bigint)=} fallback - A fallback value for when the object passed to the returned function does not contain a margin value
 * @param {boolean=} [propless=false] - Whether the component should be without prop
 * @returns {function(props)} Function to take component props passed by styled-components
 * @name css
 * @memberOf core
 */
export default (fallback, propless = false) =>
  propless
    ? ({ theme }) => {
        switch (typeof fallback) {
          case 'object':
            const { standard, ...breakpoints } = fallback
            return [
              standard,
              ...Object.entries(breakpoints).flatMap(([key, value]) => [
                '@media screen and (min-width:',
                theme.breakpoints[key],
                '){',
                value,
                ';}',
              ]),
            ].flat()
          case 'string':
            return fallback
          case 'undefined':
            return null
          default:
            throw new TypeError('Value has to be of type object or string')
        }
      }
    : ({ css, theme }) => {
        const value = css || fallback
        switch (typeof value) {
          case 'object':
            const { standard, ...breakpoints } = value
            return [
              standard,
              ...Object.entries(breakpoints).flatMap(([key, value]) => [
                '@media screen and (min-width:',
                theme.breakpoints[key],
                '){',
                value,
                ';}',
              ]),
            ].flat()
          case 'string':
            return value
          case 'undefined':
            return null
          default:
            throw new TypeError('Value has to be of type object or string')
        }
      }
