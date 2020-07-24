import coreConstructor from './constructors/coreConstructor'
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
 * @param {cssMaker} cssMaker - A function that takes a CSS value and returns an array
 * @returns {coreFunction} A function that takes a fallback value
 * @name core
 * @memberOf util
 */
export default (defaultPropName, cssMaker) => fallback => {
  const fn = coreConstructor(fallback, defaultPropName, cssMaker)
  fn.propName = propName => coreConstructor(fallback, propName, cssMaker)
  fn.p = fn.propName
  return fn
}
