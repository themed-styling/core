export default (
  cssLineStart,
  transformer,
  calculation,
  cssLineTerminate
) => value => [
  cssLineStart,
  'calc(',
  transformer(value),
  calculation,
  ')',
  cssLineTerminate,
]
