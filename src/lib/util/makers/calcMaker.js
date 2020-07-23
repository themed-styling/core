import px from '../transformers/px'

export default (
  cssLineStart,
  calculation,
  transformer = px,
  cssLineTerminate = ';'
) => value => [cssLineStart, 'calc(', transformer(value), ')', cssLineTerminate]
