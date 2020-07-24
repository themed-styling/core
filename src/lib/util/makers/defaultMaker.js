import pxTransformer from '../transformers/pxTransformer'

export default cssBeforeValue => (transformer = pxTransformer) => (
  cssAfterValue = ';'
) => value => [cssBeforeValue, transformer(value), cssAfterValue]
