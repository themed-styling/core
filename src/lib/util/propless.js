import proplessConstructor from './constructors/proplessConstructor'

/**
 * Universal function to create propless functions.
 *
 * Returns a function that takes a value and returns a function which
 * takes an object containing a theme property. This function returns an array
 * based on the value.
 *
 * @param {cssMaker} cssMaker - A function that takes a CSS value and returns an array
 * @returns {proplessFunction} A function that takes a value
 * @name propless
 * @memberOf util
 */
export default cssMaker => value => proplessConstructor(value, cssMaker)
