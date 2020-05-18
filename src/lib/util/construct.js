import themeGet from '@styled-system/theme-get'
import px from './transformers/px'
import universal from './universal'

/**
 * Constructs an array for a given value and CSS property.
 *
 * The array is made up of strings and {@link themeGet} calls. This function is an abstraction to be used for functions representing CSS properties.
 *
 * @param {(Object.<(string|number|bigint)>|Array.<(string|number|bigint)>|string|number|bigint)=} value - The value to be used
 * @param {theme} theme - A theme object passed by styled-components
 * @param {string} cssProperty - The CSS property to be set
 * @param {function((string|number|bigint))=} transformer - A function to transform the value depending on its type and the CSS property
 * @returns {Array.<(string|function(props))>} An array of strings and {@link themeGet} calls
 * @name construct
 * @memberOf util
 */
export default (value, theme, cssProperty, transformer) =>
  universal(value, theme, [cssProperty, ':'], ';', transformer)
