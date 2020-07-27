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

  /* FALLBACK & EMPTY PROPS */
  test(`${
    fn.name_
  }(${typeof value}) constructs with fallback and empty props`, () => {
    expectToEqual(
      fn(value)({}),
      [cssBeforeValue, valueTransformation(value), cssAfterValue],
      `${cssBeforeValue}${valueTransformation(value)}${cssAfterValue}`
    )
  })

  /* FALLBACK & PROP NAMED value */
  test(`${
    fn.name_
  }(${typeof value}) constructs with fallback and undefined prop named value`, () => {
    expectToEqual(
      fn(value).propName('value')({}),
      [cssBeforeValue, valueTransformation(value), cssAfterValue],
      `${cssBeforeValue}${valueTransformation(value)}${cssAfterValue}`
    )
    expectToEqual(
      fn(value).p('value')({}),
      [cssBeforeValue, valueTransformation(value), cssAfterValue],
      `${cssBeforeValue}${valueTransformation(value)}${cssAfterValue}`
    )
  })

  test(`${
    fn.name_
  }(${typeof value}) constructs without fallback and prop named value`, () => {
    expectToEqual(
      fn().propName('value')({ value: value }),
      [cssBeforeValue, valueTransformation(value), cssAfterValue],
      `${cssBeforeValue}${valueTransformation(value)}${cssAfterValue}`
    )
    expectToEqual(
      fn().p('value')({ value: value }),
      [cssBeforeValue, valueTransformation(value), cssAfterValue],
      `${cssBeforeValue}${valueTransformation(value)}${cssAfterValue}`
    )
  })
  test(`${
    fn.name_
  }(${typeof value}) constructs with illegal fallback and prop named value`, () => {
    expectToEqual(
      fn(null).propName('value')({ value: value }),
      [cssBeforeValue, valueTransformation(value), cssAfterValue],
      `${cssBeforeValue}${valueTransformation(value)}${cssAfterValue}`
    )
    expectToEqual(
      fn(null).p('value')({ value: value }),
      [cssBeforeValue, valueTransformation(value), cssAfterValue],
      `${cssBeforeValue}${valueTransformation(value)}${cssAfterValue}`
    )
  })

  /* PROPLESS */
  test(`${fn.name_}(${typeof value}) constructs propless with fallback`, () => {
    expectToEqual(
      fn(value).propless()({}),
      [cssBeforeValue, valueTransformation(value), cssAfterValue],
      `${cssBeforeValue}${valueTransformation(value)}${cssAfterValue}`
    )
    expectToEqual(
      fn(value).l()({}),
      [cssBeforeValue, valueTransformation(value), cssAfterValue],
      `${cssBeforeValue}${valueTransformation(value)}${cssAfterValue}`
    )
  })

  /* FALLBACK, !important & EMPTY PROPS */
  test(`${
    fn.name_
  }(${typeof value}) constructs important with fallback and empty props`, () => {
    expectToEqual(
      fn(value).important()({}),
      [cssBeforeValue, valueTransformation(value), importantCSSAfterValue],
      `${cssBeforeValue}${valueTransformation(value)}!important${cssAfterValue}`
    )
    expectToEqual(
      fn(value).i()({}),
      [cssBeforeValue, valueTransformation(value), importantCSSAfterValue],
      `${cssBeforeValue}${valueTransformation(value)}!important${cssAfterValue}`
    )
  })

  /* FALLBACK, !important & PROP NAMED value */
  test(`${
    fn.name_
  }(${typeof value}) constructs important with fallback and prop named value`, () => {
    expectToEqual(
      fn(null).important().propName('value')({ value: value }),
      [cssBeforeValue, valueTransformation(value), importantCSSAfterValue],
      `${cssBeforeValue}${valueTransformation(value)}!important${cssAfterValue}`
    )
    expectToEqual(
      fn(null).important().p('value')({ value: value }),
      [cssBeforeValue, valueTransformation(value), importantCSSAfterValue],
      `${cssBeforeValue}${valueTransformation(value)}!important${cssAfterValue}`
    )
    expectToEqual(
      fn(null).i().propName('value')({ value: value }),
      [cssBeforeValue, valueTransformation(value), importantCSSAfterValue],
      `${cssBeforeValue}${valueTransformation(value)}!important${cssAfterValue}`
    )
    expectToEqual(
      fn(null).i().p('value')({ value: value }),
      [cssBeforeValue, valueTransformation(value), importantCSSAfterValue],
      `${cssBeforeValue}${valueTransformation(value)}!important${cssAfterValue}`
    )
  })

  /* PROPLESS & !important */
  test(`${
    fn.name_
  }(${typeof value}) constructs propless !important with fallback`, () => {
    expectToEqual(
      fn(value).propless().important()({}),
      [cssBeforeValue, valueTransformation(value), importantCSSAfterValue],
      `${cssBeforeValue}${valueTransformation(value)}!important${cssAfterValue}`
    )
    expectToEqual(
      fn(value).l().i()({}),
      [cssBeforeValue, valueTransformation(value), importantCSSAfterValue],
      `${cssBeforeValue}${valueTransformation(value)}!important${cssAfterValue}`
    )
  })

  /* CALC */
  test(`${fn.name_}(${typeof value}) constructs calc with fallback`, () => {
    expectToEqual(
      fn(value).calc('*2')({}),
      [
        cssBeforeValue,
        'calc(',
        valueTransformation(value),
        '*2',
        ')',
        cssAfterValue,
      ],
      `${cssBeforeValue}calc(${valueTransformation(value)}*2)${cssAfterValue}`
    )
    expectToEqual(
      fn(value).c('/3')({}),
      [
        cssBeforeValue,
        'calc(',
        valueTransformation(value),
        '/3',
        ')',
        cssAfterValue,
      ],
      `${cssBeforeValue}calc(${valueTransformation(value)}/3)${cssAfterValue}`
    )
  })

  /* CALC & !important */
  test(`${
    fn.name_
  }(${typeof value}) constructs calc !important with fallback`, () => {
    expectToEqual(
      fn(value).calc('/3').important()({}),
      [
        cssBeforeValue,
        'calc(',
        valueTransformation(value),
        '/3',
        ')',
        importantCSSAfterValue,
      ],
      `${cssBeforeValue}calc(${valueTransformation(
        value
      )}/3)!important${cssAfterValue}`
    )
    expectToEqual(
      fn(value).c('*2').i()({}),
      [
        cssBeforeValue,
        'calc(',
        valueTransformation(value),
        '*2',
        ')',
        importantCSSAfterValue,
      ],
      `${cssBeforeValue}calc(${valueTransformation(
        value
      )}*2)!important${cssAfterValue}`
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
  numberValueTransformation = value => value,
  stringValueTransformation = value => value
) => {
  expect(fn).toBeDefined()

  const standard = crypto.randomBytes(8).toString('hex')
  const mobile = Math.round(Math.random() * 1000)
  const tablet = crypto.randomBytes(8).toString('hex')
  const desktop = Math.round(Math.random() * 1000)
  const randomName = crypto.randomBytes(8).toString('hex')
  const randomValue = crypto.randomBytes(8).toString('hex')

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
        [cssBeforeValue, stringValueTransformation(standard), cssAfterValue],
        [
          ['@media screen and (min-width:', '100px', ')'],
          '{',
          [cssBeforeValue, numberValueTransformation(mobile), cssAfterValue],
          '}',
        ],
        [
          ['@media screen and (min-width:', '200px', ')'],
          '{',
          [cssBeforeValue, stringValueTransformation(tablet), cssAfterValue],
          '}',
        ],
        [
          ['@media screen and (min-width:', '300px', ')'],
          '{',
          [cssBeforeValue, numberValueTransformation(desktop), cssAfterValue],
          '}',
        ],
        [
          ['@media screen and (min-width:', '500px', ')'],
          '{',
          [
            cssBeforeValue,
            stringValueTransformation(randomValue),
            cssAfterValue,
          ],
          '}',
        ],
      ],
      `${cssBeforeValue}${stringValueTransformation(
        standard
      )};@media screen and (min-width:100px){${cssBeforeValue}${numberValueTransformation(
        mobile
      )};}@media screen and (min-width:200px){${cssBeforeValue}${stringValueTransformation(
        tablet
      )};}@media screen and (min-width:300px){${cssBeforeValue}${numberValueTransformation(
        desktop
      )};}@media screen and (min-width:500px){${cssBeforeValue}${stringValueTransformation(
        randomValue
      )};}`
    )
  })

  test(`${fn.name_}(object) constructs important with breakpoints`, () => {
    expectToEqual(
      fn(object).important()({ theme: breakpointTheme }),
      [
        [
          cssBeforeValue,
          stringValueTransformation(standard),
          importantCSSAfterValue,
        ],
        [
          ['@media screen and (min-width:', '100px', ')'],
          '{',
          [
            cssBeforeValue,
            numberValueTransformation(mobile),
            importantCSSAfterValue,
          ],
          '}',
        ],
        [
          ['@media screen and (min-width:', '200px', ')'],
          '{',
          [
            cssBeforeValue,
            stringValueTransformation(tablet),
            importantCSSAfterValue,
          ],
          '}',
        ],
        [
          ['@media screen and (min-width:', '300px', ')'],
          '{',
          [
            cssBeforeValue,
            numberValueTransformation(desktop),
            importantCSSAfterValue,
          ],
          '}',
        ],
        [
          ['@media screen and (min-width:', '500px', ')'],
          '{',
          [
            cssBeforeValue,
            stringValueTransformation(randomValue),
            importantCSSAfterValue,
          ],
          '}',
        ],
      ],
      `${cssBeforeValue}${stringValueTransformation(
        standard
      )}!important;@media screen and (min-width:100px){${cssBeforeValue}${numberValueTransformation(
        mobile
      )}!important;}@media screen and (min-width:200px){${cssBeforeValue}${stringValueTransformation(
        tablet
      )}!important;}@media screen and (min-width:300px){${cssBeforeValue}${numberValueTransformation(
        desktop
      )}!important;}@media screen and (min-width:500px){${cssBeforeValue}${stringValueTransformation(
        randomValue
      )}!important;}`
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
        [cssBeforeValue, stringValueTransformation(standard), cssAfterValue],
        [
          'mobile_mq_test',
          '{',
          [cssBeforeValue, numberValueTransformation(mobile), cssAfterValue],
          '}',
        ],
        [
          'tablet_mq_test',
          '{',
          [cssBeforeValue, stringValueTransformation(tablet), cssAfterValue],
          '}',
        ],
        [
          'desktop_mq_test',
          '{',
          [cssBeforeValue, numberValueTransformation(desktop), cssAfterValue],
          '}',
        ],
        [
          'randomName_mq_test',
          '{',
          [
            cssBeforeValue,
            stringValueTransformation(randomValue),
            cssAfterValue,
          ],
          '}',
        ],
      ],
      `${cssBeforeValue}${stringValueTransformation(
        standard
      )};mobile_mq_test{${cssBeforeValue}${numberValueTransformation(
        mobile
      )};}tablet_mq_test{${cssBeforeValue}${stringValueTransformation(
        tablet
      )};}desktop_mq_test{${cssBeforeValue}${numberValueTransformation(
        desktop
      )};}randomName_mq_test{${cssBeforeValue}${stringValueTransformation(
        randomValue
      )};}`
    )
  })

  test(`${fn.name_}(object) constructs important with mediaQueries`, () => {
    expectToEqual(
      fn(object).important()({ theme: mediaQueriesTheme }),
      [
        [
          cssBeforeValue,
          stringValueTransformation(standard),
          importantCSSAfterValue,
        ],
        [
          'mobile_mq_test',
          '{',
          [
            cssBeforeValue,
            numberValueTransformation(mobile),
            importantCSSAfterValue,
          ],
          '}',
        ],
        [
          'tablet_mq_test',
          '{',
          [
            cssBeforeValue,
            stringValueTransformation(tablet),
            importantCSSAfterValue,
          ],
          '}',
        ],
        [
          'desktop_mq_test',
          '{',
          [
            cssBeforeValue,
            numberValueTransformation(desktop),
            importantCSSAfterValue,
          ],
          '}',
        ],
        [
          'randomName_mq_test',
          '{',
          [
            cssBeforeValue,
            stringValueTransformation(randomValue),
            importantCSSAfterValue,
          ],
          '}',
        ],
      ],
      `${cssBeforeValue}${stringValueTransformation(
        standard
      )}!important;mobile_mq_test{${cssBeforeValue}${numberValueTransformation(
        mobile
      )}!important;}tablet_mq_test{${cssBeforeValue}${stringValueTransformation(
        tablet
      )}!important;}desktop_mq_test{${cssBeforeValue}${numberValueTransformation(
        desktop
      )}!important;}randomName_mq_test{${cssBeforeValue}${stringValueTransformation(
        randomValue
      )}!important;}`
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
