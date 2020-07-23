import get from '../get'
import fromObject from './fromObject'

export default (value, cssMaker) => ({ theme }) => {
  const value_ = get(value, theme) || value
  switch (typeof value_) {
    case 'object':
      return fromObject(value_, cssMaker)
    case 'string':
    case 'number':
    case 'bigint':
      return cssMaker(get(value_, theme) || value_)
    case 'undefined':
    default:
      throw new TypeError(
        `Value has to be of type object, string, number or bigint but got ${value}`
      )
  }
}
