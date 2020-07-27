import get from '../get'

export default ({ standard, ...breakpoints }, theme, cssMaker) => {
  return [
    standard !== undefined && cssMaker(get(standard, theme) || standard),
    ...Object.entries(breakpoints).map(([key, value]) => [
      (theme.mediaQueries && theme.mediaQueries[key]) || [
        '@media screen and (min-width:',
        theme.breakpoints[key],
        ')',
      ],
      '{',
      cssMaker(get(value, theme) || value),
      '}',
    ]),
  ]
}
