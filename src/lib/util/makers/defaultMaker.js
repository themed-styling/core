import px from '../transformers/px'

export default cssBeforeValue => (transformer = px) => (
  cssAfterValue = ';'
) => value => [cssBeforeValue, transformer(value), cssAfterValue]
