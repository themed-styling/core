import get from './get.js'
import resolveFunction from './resolveFunction.js'
import MissingKeyError from './errors/MissingKeyError.js'

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
    const resolvedValue = resolveFunction(
      fn.propless_ ? fallback : props[fn.propName_] || fallback,
      props
    )

    if (typeof resolvedValue === 'undefined') {
      return
    }

    const make = value => [
      cssBeforeValue,
      fn.doCalc_
        ? ['calc(', transformer(value), fn.calc_, ')']
        : transformer(value),
      fn.important_ && '!important',
      cssAfterValue,
    ]

    if (typeof resolvedValue === 'object') {
      const { standard, ...breakpoints } = resolvedValue

      const forBreakpoints = Object.entries(breakpoints).map(([key, value]) => {
        const valueAndCurlies = [
          '{',
          make(resolveFunction(get(value, theme) || value), props),
          '}',
        ]

        const mediaQuery = theme.mediaQueries?.[key]
        if (mediaQuery !== undefined) {
          return [mediaQuery, ...valueAndCurlies]
        }

        const breakpoint = theme.breakpoints[key]
        if (breakpoint !== undefined) {
          return [
            '@media screen and (min-width:',
            breakpoint,
            ')',
            ...valueAndCurlies,
          ]
        }

        throw new MissingKeyError(
          `Missing key '${key}' in 'mediaQueries' and 'breakpoints'`
        )
      })

      if (standard !== undefined) {
        return [
          make(resolveFunction(get(standard, theme) || standard), props),
          ...forBreakpoints,
        ]
      }

      return forBreakpoints
    }

    return make(
      resolveFunction(get(resolvedValue, theme) || resolvedValue),
      props
    )
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
