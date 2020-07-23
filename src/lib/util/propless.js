import proplessConstructor from './constructors/proplessConstructor'

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
export default cssMaker => value => proplessConstructor(value, cssMaker)
