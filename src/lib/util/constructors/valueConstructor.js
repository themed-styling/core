import get from '../get'
import fromObject from './fromObject'

export default (value, theme, cssMaker) => {
  const value_ = get(value, theme) || value
  switch (typeof value_) {
    case 'object':
      return fromObject(value_, theme, cssMaker)
    case 'string':
    case 'number':
    case 'bigint':
      return cssMaker(get(value_, theme) || value_)
    case 'undefined':
      return null
    default:
      throw new TypeError(
        `Value has to be of type object, string, number or bigint but got ${JSON.stringify(value_)}`
      )
  }
}
