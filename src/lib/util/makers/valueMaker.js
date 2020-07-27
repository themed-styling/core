export default (cssLineStart, transformer, cssLineTerminate) => value => [
  cssLineStart,
  transformer(value),
  cssLineTerminate,
]
