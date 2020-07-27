import get from '../get'
import fromObject from './fromObject'

export default (fallback, propName, cssMaker) => ({ theme, ...props }) => {
  const value = props[propName] || fallback
  const value_ = get(value, theme) || value
  switch (typeof value) {
    case 'object':
      return fromObject(value_, theme, cssMaker)
    case 'string':
    case 'number':
    case 'bigint':
      return cssMaker(get(value, theme) || value)
    case 'undefined':
      return null
    default:
      throw new TypeError(
        `Value has to be of type object, string, number or bigint but got ${value}`
      )
  }
}
