import px from './transformers/px'
import get from './get'

/**
 * Universal function to create propless functions.
 *
 * Returns a function that takes a value and returns a function which
 * takes an object containing a theme property. This function returns an array
 * based on the value.
 *
 * @param {string|Array.<string>} cssLineStart - The CSS code before the value
 * @param {string|Array.<string>} cssLineTerminate - The CSS code after the value
 * @param {function((string|number|bigint))=} transformer - A function to transform the value depending on its type and the CSS property
 * @default {@link px}
 * @returns {function((Object.<(string|number|bigint)>|Array.<(string|number|bigint)>|string|number|bigint))} A function that takes a props object and returns an array
 * @name propless
 * @memberOf util
 */
export default (cssLineStart, cssLineTerminate, transformer = px) => value => ({
  theme,
}) => {
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
    default:
      throw new TypeError(
        `Value has to be of type object, string, number or bigint but got ${_value}`
      )
  }
}
