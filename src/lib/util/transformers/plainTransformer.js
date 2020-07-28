/**
 * Transforms numbers into hex values and leaves strings as they are.
 *
 * This transformer is used in core functions that take special values.
 *
 * @example
 * const numberValue = plain(3)
 * const stringValue = plain('1 / 3')
 *
 * numberValue === 3
 * stringValue === '1 / 3'
 *
 * @param {(string|number|bigint)} value - A value that should be a string, number or bigint
 * @returns {(string|number|bigint)} The value that was passed
 * @name plain
 * @memberOf util
 */
export default value => value
