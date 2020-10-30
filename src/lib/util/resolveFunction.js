export default (value, props) => {
  if (typeof value === 'function') {
    return value(props)
  }
  return value
}
