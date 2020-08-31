/**
 * Transforms numbers into degrees and leaves strings as they are.
 *
 * @example
 * const degrees = degrees(10)    // 10deg
 * @example
 * const degrees = degrees(360)     // 360deg
 *
 * @param {(string|number|bigint)} value - The value to be transformed
 * @returns {(string|Array.<string>)} The transformed value as a string or an array
 * @name degrees
 * @memberOf util
 */
export default value => {
  switch (typeof value) {
    case 'number':
    case 'bigint':
      return [value, 'deg']
    case 'string':
      return value
    default:
      throw new TypeError(`Value has to be of type object, string, number or bigint but got ${JSON.stringify(value)}`)
  }
}
