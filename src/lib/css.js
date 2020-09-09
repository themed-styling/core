import valueConstructor from './util/constructors/valueConstructor'

/**
 * Returns a function that takes an object containing <code>css</code> and <code>theme</code> properties.
 *
 * This function is meant to be used with styled-components within your
 * component's template literal.
 *
 * @type {coreFunction}
 * @name css
 * @memberOf core
 */

export default fallback => {
  const fn = ({ theme, ...props }) =>
    valueConstructor(
      fn.propless_ ? fallback : props[fn.propName_] || fallback,
      theme,
      value => value
    )
  fn.propless_ = false
  fn.propless = () => {
    fn.propless_ = true
    return fn
  }
  fn.l = fn.propless

  fn.propName_ = 'css'
  fn.propName = propName => {
    fn.propName_ = propName
    return fn
  }
  fn.p = fn.propName

  return fn
}
