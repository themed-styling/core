import themeGet from '@styled-system/theme-get'
import px from './transformers/px'

/**
 * Constructs an array for a given value and CSS property.
 *
 * The array is made up of strings and {@link themeGet} calls. This function is an abstraction to be used for functions representing CSS properties.
 *
 * @param {(Object.<(string|number|bigint)>|Array.<(string|number|bigint)>|string|number|bigint)=} value - The value to be used
 * @param {theme} theme - A theme object passed by styled-components
 * @param {string|Array.<string>} cssLineStart - The CSS code before the value
 * @param {string|Array.<string>} cssLineTerminate - The CSS code after the value
 * @param {function((string|number|bigint))=} transformer - A function to transform the value depending on its type and the CSS property
 * @default {@link px}
 * @returns {Array.<(boolean|string|function({props}))>} An array of strings and {@link themeGet} calls
 * @name construct
 * @memberOf util
 */
export default (
  value,
  theme,
  cssLineStart,
  cssLineTerminate,
  transformer = px
) => {
  switch (typeof value) {
    case 'object':
      const { standard, ...breakpoints } = value
      return [
        standard !== undefined && [
          cssLineStart,
          themeGet(standard, transformer(standard)),
          cssLineTerminate,
        ],
        ...Object.entries(breakpoints).map(([key, value]) => [
          (theme.mediaQueries && theme.mediaQueries[key]) || [
            '@media screen and (min-width:',
            theme.breakpoints[key],
            '){',
          ],
          cssLineStart,
          themeGet(value, transformer(value)),
          cssLineTerminate,
          '}',
        ]),
      ]
    case 'string':
    case 'number':
    case 'bigint':
      return [
        cssLineStart,
        themeGet(value, transformer(value)),
        cssLineTerminate,
      ]
    case 'undefined':
      return null
    default:
      throw new TypeError(
        'Value has to be of type object, string, number or bigint'
      )
  }
}
