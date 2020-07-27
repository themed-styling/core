import valueConstructor from '../../util/constructors/valueConstructor'
import valueMaker from '../../util/makers/valueMaker'
import calcValueMaker from '../../util/makers/calcValueMaker'
import degreesTransformer from '../../util/transformers/degreesTransformer'

/**
 * Returns a function that takes an object containing <code>skewY</code> and <code>theme</code> properties.
 *
 * This function is meant to be used with styled-components within your
 * component's template literal.
 *
 * @type {coreFunction}
 * @name skewY
 * @memberOf core.transform
 */

export default fallback => {
  const fn = ({ theme, ...props }) =>
    valueConstructor(
      fn.propless_ ? fallback : props[fn.propName_] || fallback,
      theme,
      fn.doCalc_
        ? calcValueMaker(
            'transform:skewY(',
            degreesTransformer,
            fn.calc_,
            fn.important_ ? ')!important;' : ');'
          )
        : valueMaker(
            'transform:skewY(',
            degreesTransformer,
            fn.important_ ? ')!important;' : ');'
          )
    )
  fn.propless_ = false
  fn.propless = () => {
    fn.propless_ = true
    return fn
  }
  fn.l = fn.propless

  fn.propName_ = 'skewY'
  fn.propName = propName => {
    fn.propName_ = propName
    return fn
  }
  fn.p = fn.propName

  fn.important_ = false
  fn.important = () => {
    fn.important_ = true
    return fn
  }
  fn.i = fn.important

  fn.calc_ = undefined
  fn.doCalc_ = false
  fn.calc = calc => {
    fn.calc_ = calc
    fn.doCalc_ = true
    return fn
  }
  fn.c = fn.calc

  return fn
}
