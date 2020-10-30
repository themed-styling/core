import get from './util/get'
import resolveFunction from './util/resolveFunction'

export default fallback => {
  const fn = ({ theme, ...props }) => {
    const resolvedValue = resolveFunction(
      fn.propless_ ? fallback : props[fn.propName_] || fallback,
      props
    )

    if (typeof resolvedValue === 'object') {
      const { standard, ...breakpoints } = resolvedValue
      if (standard !== undefined) {
        return [
          resolveFunction(get(standard, theme) || standard, props),
          ...Object.entries(breakpoints).map(([key, value]) => [
            (theme.mediaQueries && theme.mediaQueries[key]) || [
              '@media screen and (min-width:',
              theme.breakpoints[key],
              ')',
            ],
            '{',
            resolveFunction(get(value, theme) || value),
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
        resolveFunction(get(value, theme) || value),
        '}',
      ])
    }

    return resolvedValue
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
