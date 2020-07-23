import px from '../transformers/px'

export default (
  cssLineStart,
  transformer = px,
  cssLineTerminate = ';'
) => value => [cssLineStart, transformer(value), cssLineTerminate]
