# @themed-styling/core 🎁

![Build badge](https://img.shields.io/github/workflow/status/themed-styling/core/CI)
![npm version](https://img.shields.io/npm/v/@themed-styling/core)

_themed-styling_ is a collection of functions to help you quickly create highly reusable _styled-components_. It integrates perfectly with themes and gives you enormous control over the responsiveness of your components. Keeping your breakpoints consistent and grouping them in an easy to understand way.

[![Edit on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/busy-sea-7cq1k?file=/src/App.js:0-1359)

```javascript
import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import {
  background,
  color,
  fontSize,
  margin,
  padding,
} from '@themed-styling/core'

const myTheme = {
  colors: {
    primary: 'DarkSlateBlue',
    mySpecialColor: 'DeepSkyBlue',
  },
  breakpoints: {
    mobile: '375px',
    tablet: '768px',
    desktop: '1024px',
    myCoolBreakpoint: '1440px',
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

const MyHeading = styled.h1`
  ${background({
    standard: 'colors.primary',
    myCoolBreakpoint: 'colors.mySpecialColor',
  })}
  ${color('white')}
  ${fontSize('fontSizes.h1')}
  ${padding({
    standard: 10,
    mobile: '1.5rem',
    desktop: 35,
  })}
`

const MyParagraph = styled.p`
  ${color()}
  ${fontSize({
    standard: 11,
    mobile: 16,
    tablet: 18,
    desktop: 20,
  })}
  ${margin({
    standard: 10,
    mobile: '1.5rem',
    desktop: 35,
  })}
`

export default () => (
  <ThemeProvider theme={myTheme}>
    <MyHeading>Hello CodeSandbox!</MyHeading>
    <MyParagraph color={'gray'}>
      Please play around with the functions and their values by editing App.js!
      Make sure to resize your window to check out responsiveness.
    </MyParagraph>
  </ThemeProvider>
)
```

```css
.MyHeading {
  background: DarkSlateBlue;
  color: white;
  font-size: 1rem;
  padding: 10px;

  @media screen and (min-width: 375px) {
    font-size: 1.2rem;
    padding: 1.5rem;
  }

  @media screen and (min-width: 768px) {
    font-size: 1.4rem;
  }

  @media screen and (min-width: 1024px) {
    font-size: 1.6rem;
    padding: 35px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 2rem;
    background: DeepSkyBlue;
  }
}

.MyParagraph {
  color: gray;
  font-size: 11px;
  margin: 10px;

  @media screen and (min-width: 375px) {
    font-size: 16px;
    margin: 1.5rem;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 20px;
    margin: 35px;
  }
}
```

### Use a different prop

```javascript
const MyParagraph = styled.p`
  ${fontSize('1rem').propName('differentProp')}
`

const MyApp = () => <MyParagraph differentProp={'2rem'} /> // font-size: 2rem;
```

> Use shorthand `p` to do the same (`fontSize().propName('differentProp')` and `fontSize().p('differentProp')` are equivalent).

### Don't use any prop

```javascript
const MyParagraph = styled.p`
  ${fontSize('1rem').propless()}
`

const MyApp = () => <MyParagraph fontSize={'2rem'} /> // font-size: 1rem;
```

> Use shorthand `l` to do the same (`fontSize().propless()` and `fontSize().l()` are equivalent).

### Add `!important`

```javascript
const MyParagraph = styled.p`
  ${fontSize('1rem').important()}
`

const MyApp = () => (
  <>
    <MyParagraph /> // font-size: 1rem !important;
    <MyParagraph fontSize={'2rem'} /> // font-size: 2rem !important;
  </>
)
```

> Use shorthand `i` to do the same (`fontSize().important()` and `fontSize().i()` are equivalent).

### `calc(` a value `)`

```javascript
const MyParagraph = styled.p`
  ${fontSize('1rem').calc('*2')}
`

const MyApp = () => (
  <>
    <MyParagraph /> // font-size: calc(1rem * 2);
    <MyParagraph fontSize={'2rem'} /> // font-size: calc(2rem * 2);
  </>
)
```

> Use shorthand `c` to do the same (`fontSize().calc('*2')` and `fontSize().c('*2')` are equivalent).

### Do it all!

You can chain these functions to your heart's content. The order doesn't matter.

```javascript
const MyParagraph = styled.p`
  ${fontSize('1rem').calc('*2').important()}
  ${height('20px').p('myHeight').calc('*4')}
  ${width('100px').i().calc('/3').propless()}
`

const MyApp = () => (
  <>
    /* font-size: calc(1rem * 2) !important; height: calc(20px * 4); width:
    calc(100px / 3) !important; */
    <MyParagraph height={'300px'} width={'400px'} />
    /* font-size: calc(2rem * 2) !important; height: calc(100px * 4); width:
    calc(100px / 3) !important; */
    <MyParagraph fontSize={'2rem'} myHeight={'100px'} width={'400px'} />
  </>
)
```

## Get started

Install with npm

```shell script
$ npm i @themed-styling/core
```

and check out the [changelog](CHANGELOG.md) and [API reference](https://themed-styling.github.io/core/).

## Usage

All functions work the same way. They add a prop with the same name, that stands for a specific CSS property. The function `fontSize` adds a `fontSize` prop to your component and sets `font-size: <value>;` in your component's template literal.

> Props and functions are camelCase, as is convention in JS. `grid-template-rows` becomes `gridTemplateRows`, for instance.

You can pass a fallback value to the function when you use it, which is used when no prop is set. The prop value takes priority over the fallback value.

You can specify objects or arrays as values, too. If you do this, you need to specify a `breakpoints` property in your `theme`. _themed-styling_ tries to match the keys in your value to the keys in your `breakpoints`. So your `breakpoints` has to have the same or more keys as the values you use.

> The keys in `breakpoints` are arbitrary. You're only required to use the same keys as in your values. If you want more control, you can specify `mediaQueries` instead (`theme = { mediaQueries: { mobile: '@media screen and (max-width: 300px) and (min-width: 200px)'} }`).

## Notes

> **IMPORTANT:**<br/>
> Keys are matched in order and media queries are in your component's style in that order. You have to add your values from smallest breakpoint to largest due to how CSS priorities work. Doing it otherwise leads to weird behaviour.
>
> ❌:
>
> ```javascript
> <MyParagraph
>   fontSize={{
>     desktop: '4rem',
>     myCoolBreakpoint: '6rem',
>     tablet: '2rem',
>     mobile: '1rem',
>   }}
> >
>   Hello readme!
> </MyParagraph>
> ```
>
> ✔️:
>
> ```javascript
> <MyParagraph
>   fontSize={{
>     mobile: '1rem',
>     tablet: '2rem',
>     desktop: '4rem',
>     myCoolBreakpoint: '6rem',
>   }}
> >
>   Hello readme!
> </MyParagraph>
> ```
