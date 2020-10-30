import React from 'react'
import renderer from 'react-test-renderer'
import styled, { ThemeProvider } from 'styled-components'
import faker from 'faker'
import 'jest-styled-components'

import * as themedStyling from '../src'

const { propType, css, ...functions_ } = themedStyling

const {
  alignItems,
  alignSelf,
  clear,
  color,
  float,
  justifyContent,
  justifySelf,
  background,
  backgroundAttachment,
  backgroundColor,
  backgroundPosition,
  backgroundRepeat,
  backgroundSize,
  border,
  borderBottom,
  borderBottomColor,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  borderBottomStyle,
  borderBottomWidth,
  borderColor,
  borderLeft,
  borderLeftColor,
  borderLeftStyle,
  borderLeftWidth,
  borderRadius,
  borderRight,
  borderRightColor,
  borderRightStyle,
  borderRightWidth,
  borderTop,
  borderTopColor,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderTopStyle,
  borderTopWidth,
  borderWidth,
  bottom,
  boxShadow,
  height,
  width,
  blur,
  brightness,
  contrast,
  dropShadow,
  filter,
  filterOpacity,
  filterURL,
  flex,
  flexBasis,
  flexGrow,
  flexShrink,
  font,
  fontFamily,
  fontSize,
  fontStyle,
  fontWeight,
  grayscale,
  grid,
  gridColumn,
  gridColumnEnd,
  gridColumnGap,
  gridColumnStart,
  gridGap,
  gridRow,
  gridRowEnd,
  gridRowGap,
  gridRowStart,
  gridTemplate,
  gridTemplateColumns,
  gridTemplateRows,
  hueRotate,
  invert,
  left,
  margin,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  matrix,
  matrix3D,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  padding,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  perspective,
  position,
  right,
  rotate,
  rotate3D,
  rotateX,
  rotateY,
  rotateZ,
  saturate,
  scale,
  scaleX,
  scaleY,
  scaleZ,
  sepia,
  skew,
  skewX,
  skewY,
  top,
  transform,
  translate,
  translate3D,
  translateX,
  translateY,
  translateZ,
  display,
  borderStyle,
  scale3D,
} = functions_

const functions = {
  alignItems,
  alignSelf,
  background,
  backgroundAttachment,
  backgroundColor,
  backgroundPosition,
  backgroundRepeat,
  backgroundSize,
  blur,
  border,
  borderBottom,
  borderBottomColor,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  borderBottomStyle,
  borderBottomWidth,
  borderColor,
  borderLeft,
  borderLeftColor,
  borderLeftStyle,
  borderLeftWidth,
  borderRadius,
  borderRight,
  borderRightColor,
  borderRightStyle,
  borderRightWidth,
  borderStyle,
  borderTop,
  borderTopColor,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderTopStyle,
  borderTopWidth,
  borderWidth,
  bottom,
  boxShadow,
  brightness,
  clear,
  color,
  contrast,
  display,
  dropShadow,
  filter,
  filterOpacity,
  filterURL,
  flex,
  flexBasis,
  flexGrow,
  flexShrink,
  float,
  font,
  fontFamily,
  fontSize,
  fontStyle,
  fontWeight,
  grayscale,
  grid,
  gridColumn,
  gridColumnEnd,
  gridColumnGap,
  gridColumnStart,
  gridGap,
  gridRow,
  gridRowEnd,
  gridRowGap,
  gridRowStart,
  gridTemplate,
  gridTemplateColumns,
  gridTemplateRows,
  height,
  hueRotate,
  invert,
  justifyContent,
  justifySelf,
  left,
  margin,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  matrix,
  matrix3D,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  padding,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  perspective,
  position,
  right,
  rotate,
  rotate3D,
  rotateX,
  rotateY,
  rotateZ,
  saturate,
  scale,
  scale3D,
  scaleX,
  scaleY,
  scaleZ,
  sepia,
  skew,
  skewX,
  skewY,
  top,
  transform,
  translate,
  translate3D,
  translateX,
  translateY,
  translateZ,
  width,
}

const stringToSeed = string =>
  parseInt(
    string
      .split('')
      .map(char => char.charCodeAt(0))
      .join('')
  )

const functionsArray = Object.values(functions)

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
  smallCustomBreakpoint: faker.random.word(),
  mobile: faker.random.word(),
  mediumCustomBreakpoint: faker.random.word(),
  tablet: faker.random.word(),
  desktop: faker.random.word(),
  wide: faker.random.word(),
  largeCustomBreakpoint: faker.random.word(),
}

const mediaQueries = {
  smallCustomBreakpoint: `@media ${faker.random.word()}`,
  mobile: `@media ${faker.random.word()}`,
  mediumCustomBreakpoint: `@media ${faker.random.word()}`,
  tablet: `@media ${faker.random.word()}`,
  desktop: `@media ${faker.random.word()}`,
  wide: `@media ${faker.random.word()}`,
  largeCustomBreakpoint: `@media ${faker.random.word()}`,
}

const content = faker.random.word()

const number = faker.random.number()
const NumberDiv = styled.div`
  ${functionsArray.map(fn => fn(number))}
`

const string = faker.random.word()
const StringDiv = styled.div`
  ${functionsArray.map(fn => fn(string))}
`

const numberObject = JSON.parse(
  `{${faker.fake(
    '"smallCustomBreakpoint": {{random.number}}, "mobile": {{random.number}}, "mediumCustomBreakpoint": {{random.number}}, "tablet": {{random.number}}, "desktop": {{random.number}}, "wide": {{random.number}}, "largeCustomBreakpoint": {{random.number}}, "standard": {{random.number}}'
  )}}`
)
const NumberObjectDiv = styled.div`
  ${functionsArray.map(fn => fn(numberObject))}
`

const stringObject = JSON.parse(
  `{${faker.fake(
    '"smallCustomBreakpoint": "{{random.word}}", "mobile": "{{random.word}}", "mediumCustomBreakpoint": "{{random.word}}", "tablet": "{{random.word}}", "desktop": "{{random.word}}", "wide": "{{random.word}}", "largeCustomBreakpoint": "{{random.word}}", "standard": "{{random.word}}"'
  )}}`
)
const StringObjectDiv = styled.div`
  ${functionsArray.map(fn => fn(stringObject))}
`

const mixedObject = JSON.parse(
  `{${faker.fake(
    '"smallCustomBreakpoint": "{{random.number}}", "mobile": "{{random.word}}", "mediumCustomBreakpoint": "{{random.number}}", "tablet": "{{random.word}}", "desktop": "{{random.number}}", "wide": "{{random.word}}", "largeCustomBreakpoint": "{{random.number}}", "standard": "{{random.word}}"'
  )}}`
)
const MixedObjectDiv = styled.div`
  ${functionsArray.map(fn => fn(mixedObject))}
`

it('renders number values', () => {
  const render = renderer.create(<NumberDiv>{content}</NumberDiv>).toJSON()
  expect(render).toMatchSnapshot()
})

it('renders string values', () => {
  const render = renderer.create(<StringDiv>{content}</StringDiv>).toJSON()
  expect(render).toMatchSnapshot()
})

it('renders number object with breakpoints', () => {
  const render = renderer
    .create(
      <ThemeProvider theme={{ ...theme, breakpoints }}>
        <NumberObjectDiv>{content}</NumberObjectDiv>
      </ThemeProvider>
    )
    .toJSON()
  expect(render).toMatchSnapshot()
})

it('renders string object with breakpoints', () => {
  const render = renderer
    .create(
      <ThemeProvider theme={{ ...theme, breakpoints }}>
        <StringObjectDiv>{content}</StringObjectDiv>
      </ThemeProvider>
    )
    .toJSON()
  expect(render).toMatchSnapshot()
})

it('renders mixed object with breakpoints', () => {
  const render = renderer
    .create(
      <ThemeProvider theme={{ ...theme, breakpoints }}>
        <MixedObjectDiv>{content}</MixedObjectDiv>
      </ThemeProvider>
    )
    .toJSON()
  expect(render).toMatchSnapshot()
})

it('renders number object with mediaQueries', () => {
  const render = renderer
    .create(
      <ThemeProvider theme={{ ...theme, mediaQueries }}>
        <NumberObjectDiv>{content}</NumberObjectDiv>
      </ThemeProvider>
    )
    .toJSON()
  expect(render).toMatchSnapshot()
})

it('renders string object with mediaQueries', () => {
  const render = renderer
    .create(
      <ThemeProvider theme={{ ...theme, mediaQueries }}>
        <StringObjectDiv>{content}</StringObjectDiv>
      </ThemeProvider>
    )
    .toJSON()
  expect(render).toMatchSnapshot()
})

it('renders mixed object with mediaQueries', () => {
  const render = renderer
    .create(
      <ThemeProvider theme={{ ...theme, mediaQueries }}>
        <MixedObjectDiv>{content}</MixedObjectDiv>
      </ThemeProvider>
    )
    .toJSON()
  expect(render).toMatchSnapshot()
})
