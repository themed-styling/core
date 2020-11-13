/**
 * Transforms numbers into percentages and leaves strings as they are.
 *
 * Numbers below 1 are multiplied by 100.
 *
 * @example
 * const percentage = percent(0.5)    // 50%
 * @example
 * const percentage = percent(50)     // 50%
 *
 * @param {(string|number|bigint)} value - The value to be transformed
 * @returns {(string|Array.<string>)} The transformed value as a string or an array
 * @name percent
 * @memberOf util
 */
export default value => {
  switch (typeof value) {
    case 'number':
    case 'bigint':
      if (value <= 1) {
        return [value * 100, '%']
      }
      return [value, '%']
    case 'string':
      return value
    default:
      throw new TypeError(
        `Value has to be of type string, number or bigint but got ${JSON.stringify(
          value
        )}`
      )
  }
}
