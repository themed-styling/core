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
  expect(result.flat().join('')).toBe(expectedString)
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
      fn.propless(value)({}),
      [cssBeforeValue, valueTransformation(value), cssAfterValue],
      `${cssBeforeValue}${valueTransformation(value)}${cssAfterValue}`
    )
    expectToEqual(
      fn.l(value)({}),
      [cssBeforeValue, valueTransformation(value), cssAfterValue],
      `${cssBeforeValue}${valueTransformation(value)}${cssAfterValue}`
    )
  })

  /* FALLBACK, !important & EMPTY PROPS */
  test(`${
    fn.name_
  }(${typeof value}) constructs important with fallback and empty props`, () => {
    expectToEqual(
      fn.important(value)({}),
      [cssBeforeValue, valueTransformation(value), importantCSSAfterValue],
      `${cssBeforeValue}${valueTransformation(value)}!important${cssAfterValue}`
    )
    expectToEqual(
      fn.i(value)({}),
      [cssBeforeValue, valueTransformation(value), importantCSSAfterValue],
      `${cssBeforeValue}${valueTransformation(value)}!important${cssAfterValue}`
    )
  })

  /* FALLBACK, !important & PROP NAMED value */
  test(`${
    fn.name_
  }(${typeof value}) constructs important with fallback and prop named value`, () => {
    expectToEqual(
      fn.important(null).propName('value')({ value: value }),
      [cssBeforeValue, valueTransformation(value), importantCSSAfterValue],
      `${cssBeforeValue}${valueTransformation(value)}!important${cssAfterValue}`
    )
    expectToEqual(
      fn.important(null).p('value')({ value: value }),
      [cssBeforeValue, valueTransformation(value), importantCSSAfterValue],
      `${cssBeforeValue}${valueTransformation(value)}!important${cssAfterValue}`
    )
    expectToEqual(
      fn.i(null).propName('value')({ value: value }),
      [cssBeforeValue, valueTransformation(value), importantCSSAfterValue],
      `${cssBeforeValue}${valueTransformation(value)}!important${cssAfterValue}`
    )
    expectToEqual(
      fn.i(null).p('value')({ value: value }),
      [cssBeforeValue, valueTransformation(value), importantCSSAfterValue],
      `${cssBeforeValue}${valueTransformation(value)}!important${cssAfterValue}`
    )
  })

  /* PROPLESS & !important */
  test(`${
    fn.name_
  }(${typeof value}) constructs propless !important with fallback`, () => {
    expectToEqual(
      fn.propless.important(value)({}),
      [cssBeforeValue, valueTransformation(value), importantCSSAfterValue],
      `${cssBeforeValue}${valueTransformation(value)}!important${cssAfterValue}`
    )
    expectToEqual(
      fn.l.i(value)({}),
      [cssBeforeValue, valueTransformation(value), importantCSSAfterValue],
      `${cssBeforeValue}${valueTransformation(value)}!important${cssAfterValue}`
    )
  })

  // /* CALC */
  // test(`${fn.name_}(${typeof value}) constructs calc with fallback`, () => {
  //   expectToEqual(
  //     fn.calc(value)({}),
  //     [cssBeforeValue, 'calc(', valueTransformation(value), ')', cssAfterValue],
  //     `${cssBeforeValue}calc(${valueTransformation(value)})${cssAfterValue}`
  //   )
  //   expectToEqual(
  //     fn.c(value)({}),
  //     [cssBeforeValue, 'calc(', valueTransformation(value), ')', cssAfterValue],
  //     `${cssBeforeValue}calc(${valueTransformation(value)})${cssAfterValue}`
  //   )
  // })
  //
  // /* CALC & !important */
  // test(`${
  //   fn.name_
  // }(${typeof value}) constructs calc !important with fallback`, () => {
  //   expectToEqual(
  //     fn.calc.important(value)({}),
  //     [cssBeforeValue, 'calc(', valueTransformation(value), ')', cssAfterValue],
  //     `${cssBeforeValue}calc(${valueTransformation(value)})${cssAfterValue}`
  //   )
  //   expectToEqual(
  //     fn.c.i(value)({}),
  //     [
  //       cssBeforeValue,
  //       'calc(',
  //       valueTransformation(value),
  //       ')',
  //       importantCSSAfterValue,
  //     ],
  //     `${cssBeforeValue}calc(${valueTransformation(
  //       value
  //     )})!important${cssAfterValue}`
  //   )
  // })
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

export const testIllegalValuesOn = fn => {
  expect(fn).toBeDefined()

  test(`${fn.name_} throws error on null value`, () => {
    /* FUNCTION */
    expect(() => fn(null)({})).toThrow(TypeError)
    expect(() => fn.propName('value')({ value: null })).toThrow(TypeError)
    expect(() => fn.p('value')({ value: null })).toThrow(TypeError)

    /* IMPORTANT */
    expect(() => fn.important(null)({})).toThrow(TypeError)
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

export const theme = {
  breakpoints: {
    myCoolBreakpoint: '200px',
    mobile: '375px',
    tablet: '768px',
    desktop: '1440px',
  },
}
