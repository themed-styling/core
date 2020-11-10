import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import faker_ from 'faker'
import renderer from 'react-test-renderer'
import MissingKeyError from '../src/lib/util/errors/MissingKeyError'

const testFn = (fn, name, Wrapper = React.Fragment) => ({
  renders: (valueDescription, generator, contentGenerator = generator) => {
    test(`${name} renders ${valueDescription}`, () => {
      const Div = styled('div').withConfig({ shouldForwardProp: () => false })`
        ${fn(generator())}
      `

      const content = contentGenerator()

      const props = {}
      props[name] = generator()

      const render = renderer
        .create(
          <Wrapper>
            <Div>{content}</Div>
            <Div testProp>{content}</Div>
            <Div {...props}>{content}</Div>
            <Div {...props} testProp>
              {content}
            </Div>
          </Wrapper>
        )
        .toJSON()

      expect(render).toMatchSnapshot()
    })
  },
})

const stringToSeed = string =>
  parseInt(
    string
      .split('')
      .map(char => char.charCodeAt(0))
      .join('')
  )

const theme = {
  colors: {
    primary: 'DarkSlateBlue',
    mySpecialColor: 'DeepSkyBlue',
  },
  fontSizes: {
    h1: {
      standard: '1rem',
      mobile: '1.2rem',
      tablet: '1.4rem',
      desktop: '1.6rem',
      myCoolBreakpoint: '2rem',
    },
  },
}

const seed = stringToSeed('themed-styling/core')

const getObject = (keyGenerator, length = 5, valueGenerator = keyGenerator) => {
  const object = {}
  for (let i = 0; i < length; i++) {
    object[keyGenerator()] = valueGenerator()
  }
  return object
}

const getKeyedObject = (keys, valueGenerator) => {
  let index = 0
  return getObject(() => keys[index++], keys.length, valueGenerator)
}

const ThemeWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

const themeWrapper = theme => ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

const testAllOn = (fn, name, faker = faker_) => {
  faker.seed(seed)

  beforeEach(() => {
    faker.seed(seed)
  })

  testFn(fn, name).renders('undefined', () => undefined, faker.random.words)

  testFn(fn, name).renders(
    'postitive number',
    () => Math.abs(faker.random.number()),
    faker.random.words
  )

  testFn(fn, name).renders(
    'negative number',
    () => -Math.abs(faker.random.number()),
    faker.random.words
  )

  testFn(fn, name).renders('0', () => 0, faker.random.words)

  testFn(fn, name).renders('string', faker.date.month, faker.random.words)

  testFn(fn, name, ThemeWrapper).renders(
    'valid theme path',
    () => (faker.random.boolean ? 'colors.primary' : 'colors.mySpecialColor'),
    faker.random.words
  )

  test(`${name} gets theme path`, () => {
    expect(fn('colors.primary')({ theme }).flat(10).join('')).toContain(
      'DarkSlateBlue'
    )
  })

  testFn(fn, name, ThemeWrapper).renders(
    'invalid theme path',
    () => (faker.random.boolean ? 'invalid.path.1' : 'invalid.path.2'),
    faker.random.words
  )

  test(`${name} leaves invalid theme path`, () => {
    expect(fn('invalid.path')({ theme }).flat(10).join('')).toContain(
      'invalid.path'
    )
  })

  const breakpoints = getObject(faker.date.month)
  testFn(fn, name, themeWrapper({ ...theme, breakpoints })).renders(
    'object [breakpoints]',
    () => getKeyedObject(Object.keys(breakpoints), faker.date.month),
    faker.random.words
  )
  testFn(fn, name, themeWrapper({ ...theme, breakpoints })).renders(
    'object [breakpoints + standard]',
    () =>
      getKeyedObject(
        ['standard', ...Object.keys(breakpoints)],
        faker.date.month
      ),
    faker.random.words
  )

  test(`${name} creates breakpoints`, () => {
    const breakpoints = getObject(faker.date.month)
    const object = getKeyedObject(Object.keys(breakpoints), faker.date.month)
    const render = fn(object)({ theme: { ...theme, breakpoints } })
      .flat(10)
      .join('')

    for (const [key, value] of Object.entries(object)) {
      expect(render).toContain(
        `@media screen and (min-width:${breakpoints[key]})`
      )
      expect(render).toContain(value)
    }
  })

  const mediaQueries = getObject(
    faker.date.month,
    undefined,
    () => `@media ${faker.date.month()}`
  )
  testFn(fn, name, themeWrapper({ ...theme, mediaQueries })).renders(
    'object [mediaQueries]',
    () => getKeyedObject(Object.keys(mediaQueries), faker.date.month),
    faker.random.words
  )
  testFn(fn, name, themeWrapper({ ...theme, mediaQueries })).renders(
    'object [mediaQueries + standart]',
    () =>
      getKeyedObject(
        ['standard', ...Object.keys(mediaQueries)],
        faker.date.month
      ),
    faker.random.words
  )

  test(`${name} creates mediaQueries`, () => {
    const mediaQueries = getObject(
      faker.date.month,
      undefined,
      () => `@media ${faker.date.month()}`
    )
    const object = getKeyedObject(Object.keys(mediaQueries), faker.date.month)
    const render = fn(object)({ theme: { ...theme, mediaQueries } })
      .flat(10)
      .join('')

    for (const [key, value] of Object.entries(object)) {
      expect(render).toContain(mediaQueries[key])
      expect(render).toContain(value)
    }
  })

  testFn(fn, name, ThemeWrapper).renders(
    'function',
    () => ({ testProp }) => (testProp ? 'has' : 'hasnot'),
    faker.random.words
  )

  test(`${name} resolves function`, () => {
    const fnValue = ({ testProp }) => (testProp ? 'has' : 'not')
    expect(fn(fnValue)({}).flat(10).join('')).toContain('not')
    expect(fn(fnValue)({ testProp: true }).flat(10).join('')).toContain('has')
  })

  test(`${name} does propless`, () => {
    const prop0 = faker.date.month()
    const props0 = {}
    props0[name] = prop0
    const render0 = fn('test').propless()(props0).flat(10).join('')
    expect(render0).not.toContain(prop0)
    expect(render0).toContain('test')

    const prop1 = faker.date.month()
    const props1 = {}
    props1[name] = prop1
    const render1 = fn('test').l()(props1).flat(10).join('')
    expect(render1).not.toContain(prop1)
    expect(render1).toContain('test')
  })

  test(`${name} renames prop`, () => {
    const prop0 = faker.date.month()
    const render0 = fn()
      .propName('differentProp')({ differentProp: prop0 })
      .flat(10)
      .join('')
    expect(render0).toContain(prop0)

    const prop1 = faker.date.month()
    const render1 = fn()
      .p('differentProp')({ differentProp: prop1 })
      .flat(10)
      .join('')
    expect(render1).toContain(prop1)
  })

  test(`${name} adds !important`, () => {
    const value0 = faker.date.month()
    const render0 = fn(value0).important()({}).flat(10).join('')
    expect(render0).toContain(`${value0}!important`)

    const value1 = faker.date.month()
    const render1 = fn(value1).i()({}).flat(10).join('')
    expect(render1).toContain(`${value1}!important`)
  })

  test(`${name} calcs`, () => {
    const value0 = faker.date.month()
    const render0 = fn(value0).calc('*2')({}).flat(10).join('')
    expect(render0).toContain(`calc(${value0}*2)`)

    const value1 = faker.date.month()
    const render1 = fn(value1).c('*3')({}).flat(10).join('')
    expect(render1).toContain(`calc(${value1}*3)`)
  })

  test(`${name} throws error`, () => {
    expect(() => fn({ test: 'test' })({})).toThrow(TypeError)
    expect(() => fn({ test: 'test' })({ theme })).toThrow(TypeError)
    expect(() => fn({ test: 'test' })({ theme: { breakpoints: {} } })).toThrow(
      MissingKeyError
    )
  })
}

export { testAllOn }
