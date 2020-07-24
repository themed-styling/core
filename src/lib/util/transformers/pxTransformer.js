/**
 * Transforms numbers into px values and leaves strings as they are.
 *
 * This is the default transformer for the <code>construct</code> function.
 *
 * @example
 * const pxValue = px(100)
 * const stringValue = px('1rem')
 *
 * pxValue === '100px'
 * stringValue === '1rem'
 *
 * @param {(string|number|bigint)} value - The value to be transformed
 * @returns {string} The transformed value as a string
 * @name px
 * @memberOf util
 */
export default (value) => {
  switch (typeof value) {
    case 'number':
    case 'bigint':
      return `${value}px`
    case 'string':
      return value
    default:
      throw new TypeError('Value has to be of type string, number or bigint')
  }
}
