import coreConstructor from './constructors/coreConstructor'
import get from './get'
import fromObject from './constructors/fromObject'
import universalMaker from './makers/universalMaker'
import resolveFunction from './resolveFunction'

/**
 * Universal function to create core functions.
 *
 * Returns a function that takes a fallback value and returns a function which
 * takes an object containing a theme property and a specified property. This
 * function returns an array based on the fallback value or the specified
 * property. This function also has properties propName and p of type function, which
 * takes a string and returns the same function but with the specified property
 * being the string that was passed.
 *
 * @returns {coreFunction} A function that takes a fallback value
 * @name core
 * @memberOf util
 */
export default (
  propName,
  cssBeforeValue,
  cssAfterValue,
  transformer
) => fallback => {
  const fn = ({ theme, ...props }) => {
    const value = resolveFunction(
      fn.propless_ ? fallback : props[fn.propName_] || fallback,
      props
    )

    const make = universalMaker(
      cssBeforeValue,
      cssAfterValue,
      fn.doCalc_,
      fn.calc_,
      fn.important_,
      transformer
    )

    if (typeof value === 'object') {
      // return fromObject(value, theme, make, props)
      const { standard, ...breakpoints } = value
      if (standard !== undefined) {
        return [
          make(resolveFunction(get(standard, theme) || standard, props)),
          ...Object.entries(breakpoints).map(([key, value]) => [
            (theme.mediaQueries && theme.mediaQueries[key]) || [
              '@media screen and (min-width:',
              theme.breakpoints[key],
              ')',
            ],
            '{',
            make(resolveFunction(get(value, theme) || value)),
            '}',
          ]),
        ]
      }
      return Object.entries(breakpoints).map(([key, value]) => [
        (theme.mediaQueries && theme.mediaQueries[key]) || [
          '@media screen and (min-width:',
          theme.breakpoints[key],
          ')',
        ],
        '{',
        make(resolveFunction(get(value, theme) || value)),
        '}',
      ])
    }

    return make(value)
  }

  fn.propless_ = false
  fn.propless = () => {
    fn.propless_ = true
    return fn
  }
  fn.l = fn.propless

  fn.propName_ = propName
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
