import crypto from 'crypto'

export const coreTest = (call, array, string) => {
  expect(call).toBeDefined()
  expect(array).toBeDefined()
  expect(string).toBeDefined()

  expect(call).toStrictEqual(array)
  expect(call.flat().join('')).toBe(string)
}

const expectToEqual = (result, expected, expectedString) => {
  expect(result).toStrictEqual(expected)
  expect(result.flat(3).join('')).toBe(expectedString)
}

const testAnyValueOn = (
  fn,
  value,
  cssBeforeValue,
  cssAfterValue,
  importantCSSAfterValue,
  valueTransformation
) => {
  expect(fn).toBeDefined()
  expect(value).toBeDefined()
  expect(cssBeforeValue).toBeDefined()
  expect(cssAfterValue).toBeDefined()
  expect(importantCSSAfterValue).toBeDefined()
  expect(valueTransformation).toBeDefined()

  const valueTransformationResult = valueTransformation(value)
  const valueTransformationString =
    typeof valueTransformationResult === 'object'
      ? valueTransformationResult.join('')
      : `${valueTransformationResult}`
  const valueType = typeof value

  /* FALLBACK & EMPTY PROPS */
  test(`${fn.name_}(${valueType}) constructs with fallback and empty props`, () => {
    expectToEqual(
      fn(value)({}),
      [cssBeforeValue, valueTransformationResult, cssAfterValue],
      `${cssBeforeValue}${valueTransformationString}${cssAfterValue}`
    )
  })

  /* FALLBACK & PROP NAMED value */
  test(`${fn.name_}(${valueType}) constructs with fallback and undefined prop named value`, () => {
    expectToEqual(
      fn(value).propName('value')({}),
      [cssBeforeValue, valueTransformationResult, cssAfterValue],
      `${cssBeforeValue}${valueTransformationString}${cssAfterValue}`
    )
    expectToEqual(
      fn(value).p('value')({}),
      [cssBeforeValue, valueTransformationResult, cssAfterValue],
      `${cssBeforeValue}${valueTransformationString}${cssAfterValue}`
    )
  })

  test(`${fn.name_}(${valueType}) constructs without fallback and prop named value`, () => {
    expectToEqual(
      fn().propName('value')({ value: value }),
      [cssBeforeValue, valueTransformationResult, cssAfterValue],
      `${cssBeforeValue}${valueTransformationString}${cssAfterValue}`
    )
    expectToEqual(
      fn().p('value')({ value: value }),
      [cssBeforeValue, valueTransformationResult, cssAfterValue],
      `${cssBeforeValue}${valueTransformationString}${cssAfterValue}`
    )
  })
  test(`${fn.name_}(${valueType}) constructs with illegal fallback and prop named value`, () => {
    expectToEqual(
      fn(null).propName('value')({ value: value }),
      [cssBeforeValue, valueTransformationResult, cssAfterValue],
      `${cssBeforeValue}${valueTransformationString}${cssAfterValue}`
    )
    expectToEqual(
      fn(null).p('value')({ value: value }),
      [cssBeforeValue, valueTransformationResult, cssAfterValue],
      `${cssBeforeValue}${valueTransformationString}${cssAfterValue}`
    )
  })

  /* PROPLESS */
  test(`${fn.name_}(${valueType}) constructs propless with fallback`, () => {
    expectToEqual(
      fn(value).propless()({}),
      [cssBeforeValue, valueTransformationResult, cssAfterValue],
      `${cssBeforeValue}${valueTransformationString}${cssAfterValue}`
    )
    expectToEqual(
      fn(value).l()({}),
      [cssBeforeValue, valueTransformationResult, cssAfterValue],
      `${cssBeforeValue}${valueTransformationString}${cssAfterValue}`
    )
  })

  /* FALLBACK, !important & EMPTY PROPS */
  test(`${fn.name_}(${valueType}) constructs important with fallback and empty props`, () => {
    expectToEqual(
      fn(value).important()({}),
      [cssBeforeValue, valueTransformationResult, importantCSSAfterValue],
      `${cssBeforeValue}${valueTransformationString}${importantCSSAfterValue}`
    )
    expectToEqual(
      fn(value).i()({}),
      [cssBeforeValue, valueTransformationResult, importantCSSAfterValue],
      `${cssBeforeValue}${valueTransformationString}${importantCSSAfterValue}`
    )
  })

  /* FALLBACK, !important & PROP NAMED value */
  test(`${fn.name_}(${valueType}) constructs important with fallback and prop named value`, () => {
    expectToEqual(
      fn(null).important().propName('value')({ value: value }),
      [cssBeforeValue, valueTransformationResult, importantCSSAfterValue],
      `${cssBeforeValue}${valueTransformationString}${importantCSSAfterValue}`
    )
    expectToEqual(
      fn(null).important().p('value')({ value: value }),
      [cssBeforeValue, valueTransformationResult, importantCSSAfterValue],
      `${cssBeforeValue}${valueTransformationString}${importantCSSAfterValue}`
    )
    expectToEqual(
      fn(null).i().propName('value')({ value: value }),
      [cssBeforeValue, valueTransformationResult, importantCSSAfterValue],
      `${cssBeforeValue}${valueTransformationString}${importantCSSAfterValue}`
    )
    expectToEqual(
      fn(null).i().p('value')({ value: value }),
      [cssBeforeValue, valueTransformationResult, importantCSSAfterValue],
      `${cssBeforeValue}${valueTransformationString}${importantCSSAfterValue}`
    )
  })

  /* PROPLESS & !important */
  test(`${fn.name_}(${valueType}) constructs propless !important with fallback`, () => {
    expectToEqual(
      fn(value).propless().important()({}),
      [cssBeforeValue, valueTransformationResult, importantCSSAfterValue],
      `${cssBeforeValue}${valueTransformationString}${importantCSSAfterValue}`
    )
    expectToEqual(
      fn(value).l().i()({}),
      [cssBeforeValue, valueTransformationResult, importantCSSAfterValue],
      `${cssBeforeValue}${valueTransformationString}${importantCSSAfterValue}`
    )
  })

  /* CALC */
  test(`${fn.name_}(${valueType}) constructs calc with fallback`, () => {
    expectToEqual(
      fn(value).calc('*2')({}),
      [
        cssBeforeValue,
        'calc(',
        valueTransformationResult,
        '*2',
        ')',
        cssAfterValue,
      ],
      `${cssBeforeValue}calc(${valueTransformationString}*2)${cssAfterValue}`
    )
    expectToEqual(
      fn(value).c('/3')({}),
      [
        cssBeforeValue,
        'calc(',
        valueTransformationResult,
        '/3',
        ')',
        cssAfterValue,
      ],
      `${cssBeforeValue}calc(${valueTransformationString}/3)${cssAfterValue}`
    )
  })

  /* CALC & !important */
  test(`${fn.name_}(${valueType}) constructs calc !important with fallback`, () => {
    expectToEqual(
      fn(value).calc('/3').important()({}),
      [
        cssBeforeValue,
        'calc(',
        valueTransformationResult,
        '/3',
        ')',
        importantCSSAfterValue,
      ],
      `${cssBeforeValue}calc(${valueTransformationString}/3)${importantCSSAfterValue}`
    )
    expectToEqual(
      fn(value).c('*2').i()({}),
      [
        cssBeforeValue,
        'calc(',
        valueTransformationResult,
        '*2',
        ')',
        importantCSSAfterValue,
      ],
      `${cssBeforeValue}calc(${valueTransformationString}*2)${importantCSSAfterValue}`
    )
  })
}

export const testStringValuesOn = (
  fn,
  cssBeforeValue,
  cssAfterValue,
  importantCSSAfterValue,
  valueTransformation = value => value
) => {
  const randomString = crypto.randomBytes(8).toString('hex')

  testAnyValueOn(
    fn,
    randomString,
    cssBeforeValue,
    cssAfterValue,
    importantCSSAfterValue,
    valueTransformation
  )
}

export const testNumberValuesOn = (
  fn,
  cssBeforeValue,
  cssAfterValue,
  importantCSSAfterValue,
  valueTransformation = value => value
) => {
  const randomNumber = Math.round(Math.random() * 1000)

  testAnyValueOn(
    fn,
    randomNumber,
    cssBeforeValue,
    cssAfterValue,
    importantCSSAfterValue,
    valueTransformation
  )
}

export const testObjectValuesOn = (
  fn,
  cssBeforeValue,
  cssAfterValue,
  importantCSSAfterValue,
  numberValueTransformation,
  stringValueTransformation
) => {
  expect(fn).toBeDefined()
  expect(cssBeforeValue).toBeDefined()
  expect(cssAfterValue).toBeDefined()
  expect(importantCSSAfterValue).toBeDefined()
  expect(numberValueTransformation).toBeDefined()
  expect(stringValueTransformation).toBeDefined()

  const standard = crypto.randomBytes(8).toString('hex')
  const standardTransformed = stringValueTransformation(standard)
  const standardTransformedString =
    typeof standardTransformed === 'object'
      ? standardTransformed.join('')
      : `${standardTransformed}`
  const mobile = Math.round(Math.random() * 1000)
  const mobileTransformed = numberValueTransformation(mobile)
  const mobileTransformedString =
    typeof mobileTransformed === 'object'
      ? mobileTransformed.join('')
      : `${mobileTransformed}`
  const tablet = crypto.randomBytes(8).toString('hex')
  const tabletTransformed = stringValueTransformation(tablet)
  const tabletTransformedString =
    typeof tabletTransformed === 'object'
      ? tabletTransformed.join('')
      : `${tabletTransformed}`
  const desktop = Math.round(Math.random() * 1000)
  const desktopTransformed = numberValueTransformation(desktop)
  const desktopTransformedString =
    typeof desktopTransformed === 'object'
      ? desktopTransformed.join('')
      : `${desktopTransformed}`
  const randomName = crypto.randomBytes(8).toString('hex')
  const randomValue = crypto.randomBytes(8).toString('hex')
  const randomValueTransformed = stringValueTransformation(randomValue)
  const randomValueTransformedString =
    typeof randomValueTransformed === 'object'
      ? randomValueTransformed.join('')
      : `${randomValueTransformed}`

  const object = { standard, mobile, tablet, desktop }
  object[randomName] = randomValue

  const breakpointTheme = {
    breakpoints: {
      mobile: '100px',
      tablet: '200px',
      desktop: '300px',
    },
  }
  breakpointTheme.breakpoints[randomName] = '500px'

  test(`${fn.name_}(object) constructs with breakpoints`, () => {
    expectToEqual(
      fn(object)({ theme: breakpointTheme }),
      [
        [cssBeforeValue, standardTransformed, cssAfterValue],
        [
          ['@media screen and (min-width:', '100px', ')'],
          '{',
          [cssBeforeValue, mobileTransformed, cssAfterValue],
          '}',
        ],
        [
          ['@media screen and (min-width:', '200px', ')'],
          '{',
          [cssBeforeValue, tabletTransformed, cssAfterValue],
          '}',
        ],
        [
          ['@media screen and (min-width:', '300px', ')'],
          '{',
          [cssBeforeValue, desktopTransformed, cssAfterValue],
          '}',
        ],
        [
          ['@media screen and (min-width:', '500px', ')'],
          '{',
          [cssBeforeValue, randomValueTransformed, cssAfterValue],
          '}',
        ],
      ],
      `${cssBeforeValue}${standardTransformedString}${cssAfterValue}@media screen and (min-width:100px){${cssBeforeValue}${mobileTransformedString}${cssAfterValue}}@media screen and (min-width:200px){${cssBeforeValue}${tabletTransformedString}${cssAfterValue}}@media screen and (min-width:300px){${cssBeforeValue}${desktopTransformedString}${cssAfterValue}}@media screen and (min-width:500px){${cssBeforeValue}${randomValueTransformedString}${cssAfterValue}}`
    )
  })

  test(`${fn.name_}(object) constructs important with breakpoints`, () => {
    expectToEqual(
      fn(object).important()({ theme: breakpointTheme }),
      [
        [cssBeforeValue, standardTransformed, importantCSSAfterValue],
        [
          ['@media screen and (min-width:', '100px', ')'],
          '{',
          [cssBeforeValue, mobileTransformed, importantCSSAfterValue],
          '}',
        ],
        [
          ['@media screen and (min-width:', '200px', ')'],
          '{',
          [cssBeforeValue, tabletTransformed, importantCSSAfterValue],
          '}',
        ],
        [
          ['@media screen and (min-width:', '300px', ')'],
          '{',
          [cssBeforeValue, desktopTransformed, importantCSSAfterValue],
          '}',
        ],
        [
          ['@media screen and (min-width:', '500px', ')'],
          '{',
          [cssBeforeValue, randomValueTransformed, importantCSSAfterValue],
          '}',
        ],
      ],
      `${cssBeforeValue}${standardTransformedString}${importantCSSAfterValue}@media screen and (min-width:100px){${cssBeforeValue}${mobileTransformedString}${importantCSSAfterValue}}@media screen and (min-width:200px){${cssBeforeValue}${tabletTransformedString}${importantCSSAfterValue}}@media screen and (min-width:300px){${cssBeforeValue}${desktopTransformedString}${importantCSSAfterValue}}@media screen and (min-width:500px){${cssBeforeValue}${randomValueTransformedString}${importantCSSAfterValue}}`
    )
  })

  const mediaQueriesTheme = {
    breakpoints: {
      mobile: '100px',
      tablet: '200px',
      desktop: '300px',
    },
    mediaQueries: {
      mobile: 'mobile_mq_test',
      tablet: 'tablet_mq_test',
      desktop: 'desktop_mq_test',
    },
  }
  mediaQueriesTheme.mediaQueries[randomName] = 'randomName_mq_test'

  test(`${fn.name_}(object) constructs with mediaQueries`, () => {
    expectToEqual(
      fn(object)({ theme: mediaQueriesTheme }),
      [
        [cssBeforeValue, standardTransformed, cssAfterValue],
        [
          'mobile_mq_test',
          '{',
          [cssBeforeValue, mobileTransformed, cssAfterValue],
          '}',
        ],
        [
          'tablet_mq_test',
          '{',
          [cssBeforeValue, tabletTransformed, cssAfterValue],
          '}',
        ],
        [
          'desktop_mq_test',
          '{',
          [cssBeforeValue, desktopTransformed, cssAfterValue],
          '}',
        ],
        [
          'randomName_mq_test',
          '{',
          [cssBeforeValue, randomValueTransformed, cssAfterValue],
          '}',
        ],
      ],
      `${cssBeforeValue}${standardTransformedString}${cssAfterValue}mobile_mq_test{${cssBeforeValue}${mobileTransformedString}${cssAfterValue}}tablet_mq_test{${cssBeforeValue}${tabletTransformedString}${cssAfterValue}}desktop_mq_test{${cssBeforeValue}${desktopTransformedString}${cssAfterValue}}randomName_mq_test{${cssBeforeValue}${randomValueTransformedString}${cssAfterValue}}`
    )
  })

  test(`${fn.name_}(object) constructs important with mediaQueries`, () => {
    expectToEqual(
      fn(object).important()({ theme: mediaQueriesTheme }),
      [
        [cssBeforeValue, standardTransformed, importantCSSAfterValue],
        [
          'mobile_mq_test',
          '{',
          [cssBeforeValue, mobileTransformed, importantCSSAfterValue],
          '}',
        ],
        [
          'tablet_mq_test',
          '{',
          [cssBeforeValue, tabletTransformed, importantCSSAfterValue],
          '}',
        ],
        [
          'desktop_mq_test',
          '{',
          [cssBeforeValue, desktopTransformed, importantCSSAfterValue],
          '}',
        ],
        [
          'randomName_mq_test',
          '{',
          [cssBeforeValue, randomValueTransformed, importantCSSAfterValue],
          '}',
        ],
      ],
      `${cssBeforeValue}${standardTransformedString}${importantCSSAfterValue}mobile_mq_test{${cssBeforeValue}${mobileTransformedString}${importantCSSAfterValue}}tablet_mq_test{${cssBeforeValue}${tabletTransformedString}${importantCSSAfterValue}}desktop_mq_test{${cssBeforeValue}${desktopTransformedString}${importantCSSAfterValue}}randomName_mq_test{${cssBeforeValue}${randomValueTransformedString}${importantCSSAfterValue}}`
    )
  })
}

export const testIllegalValuesOn = fn => {
  expect(fn).toBeDefined()

  test(`${fn.name_} throws error on null value`, () => {
    /* FUNCTION */
    expect(() => fn(null)({})).toThrow(TypeError)
    expect(() => fn.propName('value')({ value: null })).toThrow(TypeError)
    expect(() => fn.p('value')({ value: null })).toThrow(TypeError)

    /* IMPORTANT */
    expect(() => fn(null).important()({})).toThrow(TypeError)
    expect(() => fn.important.propName('value')({ value: null })).toThrow(
      TypeError
    )
    expect(() => fn.important.p('value')({ value: null })).toThrow(TypeError)
    expect(() => fn.i.propName('value')({ value: null })).toThrow(TypeError)
    expect(() => fn.i.p('value')({ value: null })).toThrow(TypeError)

    /* CALC */
    expect(() => fn.calc(null)({})).toThrow(TypeError)
    expect(() => fn.calc.propName('value')({ value: null })).toThrow(TypeError)
    expect(() => fn.calc.p('value')({ value: null })).toThrow(TypeError)
    expect(() => fn.c.propName('value')({ value: null })).toThrow(TypeError)
    expect(() => fn.c.p('value')({ value: null })).toThrow(TypeError)
  })

  test(`${fn.name_}.propless throws error without value`, () => {
    expect(() => fn.propless()({})).toThrow(TypeError)
    expect(() => fn.l()({})).toThrow(TypeError)
    expect(() => fn.propless.important()({})).toThrow(TypeError)
    expect(() => fn.l.i()({})).toThrow(TypeError)
  })
}
