import get from './util/get.js'
import resolveFunction from './util/resolveFunction.js'
import MissingKeyError from './util/errors/MissingKeyError.js'

export default fallback => {
  const fn = ({ theme, ...props }) => {
    const resolvedValue = resolveFunction(
      fn.propless_ ? fallback : props[fn.propName_] || fallback,
      props
    )

    if (typeof resolvedValue === 'undefined') {
      return
    }

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

        const breakpoint = theme.breakpoints?.[key]
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
          make(resolveFunction(get(standard, theme) || standard, props), props),
          ...forBreakpoints,
        ]
      }

      return forBreakpoints
    }

    return resolveFunction(get(resolvedValue, theme) || resolvedValue, props)
  }

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
