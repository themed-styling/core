import React from 'react'
import renderer from 'react-test-renderer'
import styled, { ThemeProvider } from 'styled-components'
import faker from 'faker'
import 'jest-styled-components'

import * as themedStyling from '../src'

const { propType, css, theme: _, ...functions } = themedStyling

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
console.info(`🌱 ${seed}`)
faker.seed(seed)

const breakpoints = {
  smallCustomBreakpoint: faker.date.month(),
  mobile: faker.date.month(),
  mediumCustomBreakpoint: faker.date.month(),
  tablet: faker.date.month(),
  desktop: faker.date.month(),
  wide: faker.date.month(),
  largeCustomBreakpoint: faker.date.month(),
}

const mediaQueries = {
  smallCustomBreakpoint: `@media ${faker.date.month()}`,
  mobile: `@media ${faker.date.month()}`,
  mediumCustomBreakpoint: `@media ${faker.date.month()}`,
  tablet: `@media ${faker.date.month()}`,
  desktop: `@media ${faker.date.month()}`,
  wide: `@media ${faker.date.month()}`,
  largeCustomBreakpoint: `@media ${faker.date.month()}`,
}

for (const [name, fn] of Object.entries(functions)) {
  test(`${name} renders number values`, () => {
    const Div = styled.div`
      ${fn(faker.random.number())}
    `

    const render = renderer.create(<Div>{faker.random.words()}</Div>).toJSON()

    expect(render).toMatchSnapshot()
  })

  test(`${name} renders string values`, () => {
    const Div = styled.div`
      ${fn(faker.date.month())}
    `

    const render = renderer.create(<Div>{faker.random.words()}</Div>).toJSON()

    expect(render).toMatchSnapshot()
  })

  test(`${name} renders number object values using breakpoints`, () => {
    const Div = styled.div`
      ${fn(
        JSON.parse(
          `{${faker.fake(
            '"smallCustomBreakpoint": {{random.number}}, "mobile": {{random.number}}, "mediumCustomBreakpoint": {{random.number}}, "tablet": {{random.number}}, "desktop": {{random.number}}, "wide": {{random.number}}, "largeCustomBreakpoint": {{random.number}}, "standard": {{random.number}}'
          )}}`
        )
      )}
    `

    const render = renderer
      .create(
        <ThemeProvider theme={{ ...theme, breakpoints }}>
          <Div>{faker.random.words()}</Div>
        </ThemeProvider>
      )
      .toJSON()

    expect(render).toMatchSnapshot()
  })

  test(`${name} renders string object values using breakpoints`, () => {
    const Div = styled.div`
      ${fn(
        JSON.parse(
          `{${faker.fake(
            '"smallCustomBreakpoint": "{{date.month}}", "mobile": "{{date.month}}", "mediumCustomBreakpoint": "{{date.month}}", "tablet": "{{date.month}}", "desktop": "{{date.month}}", "wide": "{{date.month}}", "largeCustomBreakpoint": "{{date.month}}", "standard": "{{date.month}}"'
          )}}`
        )
      )}
    `

    const render = renderer
      .create(
        <ThemeProvider theme={{ ...theme, breakpoints }}>
          <Div>{faker.random.words()}</Div>
        </ThemeProvider>
      )
      .toJSON()

    expect(render).toMatchSnapshot()
  })

  test(`${name} renders mixed object values using breakpoints`, () => {
    const Div = styled.div`
      ${fn(
        JSON.parse(
          `{${faker.fake(
            '"smallCustomBreakpoint": "{{random.number}}", "mobile": "{{date.month}}", "mediumCustomBreakpoint": "{{random.number}}", "tablet": "{{date.month}}", "desktop": "{{random.number}}", "wide": "{{date.month}}", "largeCustomBreakpoint": "{{random.number}}", "standard": "{{date.month}}"'
          )}}`
        )
      )}
    `

    const render = renderer
      .create(
        <ThemeProvider theme={{ ...theme, breakpoints }}>
          <Div>{faker.random.words()}</Div>
        </ThemeProvider>
      )
      .toJSON()

    expect(render).toMatchSnapshot()
  })

  test(`${name} renders number object values using mediaQueries`, () => {
    const Div = styled.div`
      ${fn(
        JSON.parse(
          `{${faker.fake(
            '"smallCustomBreakpoint": {{random.number}}, "mobile": {{random.number}}, "mediumCustomBreakpoint": {{random.number}}, "tablet": {{random.number}}, "desktop": {{random.number}}, "wide": {{random.number}}, "largeCustomBreakpoint": {{random.number}}, "standard": {{random.number}}'
          )}}`
        )
      )}
    `

    const render = renderer
      .create(
        <ThemeProvider theme={{ ...theme, mediaQueries }}>
          <Div>{faker.random.words()}</Div>
        </ThemeProvider>
      )
      .toJSON()

    expect(render).toMatchSnapshot()
  })

  test(`${name} renders string object values using mediaQueries`, () => {
    const Div = styled.div`
      ${fn(
        JSON.parse(
          `{${faker.fake(
            '"smallCustomBreakpoint": "{{date.month}}", "mobile": "{{date.month}}", "mediumCustomBreakpoint": "{{date.month}}", "tablet": "{{date.month}}", "desktop": "{{date.month}}", "wide": "{{date.month}}", "largeCustomBreakpoint": "{{date.month}}", "standard": "{{date.month}}"'
          )}}`
        )
      )}
    `

    const render = renderer
      .create(
        <ThemeProvider theme={{ ...theme, mediaQueries }}>
          <Div>{faker.random.words()}</Div>
        </ThemeProvider>
      )
      .toJSON()

    expect(render).toMatchSnapshot()
  })

  test(`${name} renders mixed object values using mediaQueries`, () => {
    const Div = styled.div`
      ${fn(
        JSON.parse(
          `{${faker.fake(
            '"smallCustomBreakpoint": "{{random.number}}", "mobile": "{{date.month}}", "mediumCustomBreakpoint": "{{random.number}}", "tablet": "{{date.month}}", "desktop": "{{random.number}}", "wide": "{{date.month}}", "largeCustomBreakpoint": "{{random.number}}", "standard": "{{date.month}}"'
          )}}`
        )
      )}
    `

    const render = renderer
      .create(
        <ThemeProvider theme={{ ...theme, mediaQueries }}>
          <Div>{faker.random.words()}</Div>
        </ThemeProvider>
      )
      .toJSON()

    expect(render).toMatchSnapshot()
  })
}
