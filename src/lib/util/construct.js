import themeGet from '@styled-system/theme-get'
import px from './transformers/px'

/**
 * Constructs an array for a given value and CSS property
 *
 * The array is made up of strings and {@link themeGet} calls.
 *
 * This function is an abstraction to be used for functions representing CSS properties.
 *
 * @param {(valueCollection|string|number|bigint)=} value - The value to be used
 * @param {theme} theme - A theme object passed by styled-components
 * @param {string} cssProperty - The CSS property to be set
 * @param {function((string|number|bigint))=} transformer - A function to transform the value depending on its type and the CSS property
 * @default {@link px}
 * @returns {Array.<(string|function(props))>} An array of strings and {@link themeGet} calls
 */
export default (value, theme, cssProperty, transformer = px) => {
  switch (typeof value) {
    case 'object':
      return Object.entries(value).flatMap(([key, value]) => [
        '@media screen and (min-width:',
        theme.breakpoints[key],
        '){',
        cssProperty,
        ':',
        themeGet(value, transformer(value)),
        ';}',
      ])
    case 'string':
    case 'number':
    case 'bigint':
      return [cssProperty, ':', themeGet(value, transformer(value)), ';']
    case 'undefined':
      return null
    default:
      throw new TypeError(
        'Value has to be of type object, string, number or bigint'
      )
  }
}
