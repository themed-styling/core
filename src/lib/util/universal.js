import px from './transformers/px'
import get from './get'

/**
 * Constructs an array for a given value and CSS property.
 *
 * The array is made up of strings and numbers, depending on the transformer. This function is an abstraction to be used for functions representing CSS properties.
 *
 * @param {(Object.<(string|number|bigint)>|Array.<(string|number|bigint)>|string|number|bigint)=} value - The value to be used
 * @param {theme} theme - A theme object passed by styled-components
 * @param {string|Array.<string>} cssLineStart - The CSS code before the value
 * @param {string|Array.<string>} cssLineTerminate - The CSS code after the value
 * @param {function((string|number|bigint))=} transformer - A function to transform the value depending on its type and the CSS property
 * @default {@link px}
 * @returns {Array.<(boolean|string|function({props}))>} An array of strings and numbers
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
  const _value = get(value, theme) || value
  switch (typeof _value) {
    case 'object':
      const { standard, ...breakpoints } = _value
      return [
        standard !== undefined && [
          cssLineStart,
          get(standard, theme) || transformer(standard),
          cssLineTerminate,
        ],
        ...Object.entries(breakpoints).map(([key, value]) => [
          (theme.mediaQueries && theme.mediaQueries[key]) || [
            '@media screen and (min-width:',
            theme.breakpoints[key],
            ')',
          ],
          '{',
          cssLineStart,
          get(value, theme) || transformer(value),
          cssLineTerminate,
          '}',
        ]),
      ]
    case 'string':
    case 'number':
    case 'bigint':
      return [
        cssLineStart,
        get(_value, theme) || transformer(_value),
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
