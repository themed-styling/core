/**
 * Transforms numbers into hex values and leaves strings as they are.
 *
 * This transformer is used in color related core functions.
 *
 * @example
 * const hexValue = color(000)
 * const stringValue = color('DarkSlateBlue')
 *
 * hexValue === '#000'
 * stringValue === 'DarkSlateBlue'
 *
 * @param {(string|number|bigint)} value - The value to be transformed
 * @returns {string} The transformed value as a string
 * @name color
 * @memberOf util
 */
export default value => {
  switch (typeof value) {
    case 'number':
    case 'bigint':
      return ['#', value]
    case 'string':
      return value
    default:
      throw new TypeError(`Value has to be of type object, string, number or bigint but got ${JSON.stringify(value)}`)
  }
}
