import coreConstructor from './constructors/coreConstructor'
import px from './transformers/px'
import get from './get'

/**
 * Universal function to create core functions.
 *
 * Returns a function that takes a fallback value and returns a function which
 * takes an object containing a theme property and a specified property. This
 * function returns an array based on the fallback value or the specified
 * property. This function also has properties propName and p of type function, which
 * takes a string and returns the same function but with the specified property
 * being the string that was passed.
 *
 * @param {string} defaultPropName - The name of the specified property to be used by default
 * @param {string|Array.<string>} cssLineStart - The CSS code before the value
 * @param {string|Array.<string>} cssLineTerminate - The CSS code after the value
 * @param {function((string|number|bigint))=} transformer - A function to transform the value depending on its type and the CSS property
 * @default {@link px}
 * @returns {function((Object.<(string|number|bigint)>|Array.<(string|number|bigint)>|string|number|bigint))} A function that takes a fallback value.
 * @name core
 * @memberOf util
 */
export default (defaultPropName, cssMaker) => fallback => {
  const fn = coreConstructor(fallback, defaultPropName, cssMaker)
  fn.propName = propName => coreConstructor(fallback, propName, cssMaker)
  fn.p = fn.propName
  return fn
}