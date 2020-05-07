import themeGet from '@styled-system/theme-get'

export default (fallback) => ({ margin, theme }) => {
  const value = margin || fallback
  switch (typeof value) {
    case 'object':
      return Object.entries(value).flatMap(([key, value]) => [
        '@media screen and (min-width:',
        theme.breakpoints[key],
        '){margin:',
        themeGet(value, value),
        ';}',
      ])
    case 'string':
      return ['margin:', themeGet(value, value), ';']
    case 'number':
    case 'bigint':
      return ['margin:', themeGet(value, `${value}px`), ';']
    default:
      throw new TypeError('Value has to be of type object, string or number')
  }
}
