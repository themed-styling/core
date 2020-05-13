# @themed-styling/core <!--emoji is here-->🎁<!---->

*themed-styling* is a collection of functions to help you write quick and highly reusable *styled-components*. It integrates perfectly with themes and gives you enormous control over the responsiveness of your components. Keeping your breakpoints consistent and grouping them in an easy to understand way. 

## Usage

All functions work the same way. They add a prop with the same name, that stands for a specific CSS property. The function `fontSize` adds a prop called `fontSize` to your component and sets `font-size: <value>;` in your component's template literal.

>Props and functions are camelCase, as is convention in JS. `grid-template-rows` becomes `gridTemplateRows`, for instance.

You can pass a fallback or default value to the function when you use it in your *styled-component*, which is used when no prop is set. The prop value takes priority over the fallback value, though.

You can specify objects or arrays as values, too. If you do this, you need to specify a `breakpoints` property with the same type in your `theme`. *themed-styling* tries to match the keys in your value to the keys in your `breakpoints`.  So your `breakpoints` has to have the same or more keys as the values you use.

>The keys in `breakpoints` are arbitrary. You're only required to use the same keys as in your values.

### Example

```react
import React from 'react'
import styled from 'styled-components'
import { background, color, fontSize } from '@themed-styling/core'

const MyParagraph = styled.p`
  ${background('DarkSlateBlue')}
  ${color('colors.text')}
  ${fontSize()}
`

const MyApp = () => (
  <>
    // Raw values as strings or numbers. Numbers will be converted to px values.
    <MyParagraph fontSize={'1.5rem'}>
      This is my component with rem based font size
    </MyParagraph>
    <MyParagraph fontSize={24}>
      This is my component with px based font size
    </MyParagraph>

    // Theme paths 
    <MyParagraph fontSize={'fontSizes.root'}>
      This is my component with font size from theme
    </MyParagraph>

    // Or an object or array with keys corresponding to breakpoints in your theme
    <MyParagraph fontSize={{
      standard: '18px',
      myBreakpoint: '1ch',
      mobile: 16,
      tablet: '1.5rem',
      desktop: 'fontSizes.large'
    }}>
      This is my component with responsive object font size
    </MyParagraph>
    <MyParagraph fontSize={[
      16,
      '1.5rem',
      'fontSizes.large',
      '1ch'
    ]}>
      This is my component with responsive array font size
    </MyParagraph>
  </>
)
```

## How it works

*themed-styling* leverages the power of *[@styled-system/theme-get](https://www.npmjs.com/package/@styled-system/theme-get)* and its ability to get values from your theme based on string paths.

*themed-styling* assumes your theme has an object with key `breakpoints`. `breakpoints`'s keys are arbitrary and you can add as many as you want. When you pass an object as a value, *themed-styling* matches the keys in that object to the keys in your `breakpoints` and creates  `screen and (min-width: <breakpoint>)` media queries for each key in the object.

### Example with `props`

`theme.js`:
```javascript
export default {
  breakpoints: {
    myCoolBreakpoint: '200px',
    mobile: '375px',
    tablet: '768px',
    desktop: '1440px'
  }
}
```

`MyParagraph.js`:
```react
import styled from 'styled-components'
import { fontSize } from '@themed-styling/core'

export default styled.p`
  ${fontSize()}
`
```

`MyApp.js`:
```react
import React from 'react'
import { ThemeProvider } from 'styled-components'

import theme from './theme'

export default () => (
  <ThemeProvider theme={theme}>
    <MyParagraph fontSize={{           // breakpoints: {
      myCoolBreakpoint: 10             //   myCoolBreakpoint: '200px'
      mobile: '1rem',                  //   mobile: '375px',
      tablet: '2rem',                  //   tablet: '768px',
      desktop: '4rem',                 //   desktop: '1440px',
    }}>                                // }
      Welcome to my app!
    </MyParagraph>
  </ThemeProvider>
)
```

`MyParagraph`'s style will include
```css
@media screen and (min-width: 200px) {
  font-size: 10px;
}

@media screen and (min-width: 375px) {
  font-size: 1rem;
}

@media screen and (min-width: 768px) {
  font-size: 2rem;
}

@media screen and (min-width: 1440px) {
  font-size: 4rem;
}
```

#### IMPORTANT

Keys are matched in order and media queries are in your component's style in that order. You have to add your values from smallest breakpoint to largest due to how CSS priorities work. Doing it otherwise leads to weird behaviour.

<!--emoji-->❌<!---->:
```react
<MyParagraph fontSize={{
  desktop: '4rem',
  tablet: '2rem',
  mobile: '1rem',
  myCoolBreakpoint: 10
}}>
  Welcome to my app!
</MyParagraph>
```

<!--emoji-->✔️<!---->:
```react
<MyParagraph fontSize={{
  myCoolBreakpoint: 10
  mobile: '1rem',
  tablet: '2rem',
  desktop: '4rem',
}}>
  Welcome to my app!
</MyParagraph>
```

Think of it as each breakpoint later in the object overriding the ones before, similar to how HTML elements are drawn over the ones before.

In case you don't need one of the breakpoints, just leave it out of the object.

`MyApp.js`:
```react
import React from 'react'

export default () => (
  <MyParagraph fontSize={{        // breakpoints: {
    myCoolBreakpoint: 10          //   myCoolBreakpoint: '200px'
    mobile: '1rem',               //   mobile: '375px',
    desktop: '4rem',              //   desktop: '1440px',
  }}>                             // }
    Welcome to my app!
  </MyParagraph>
)
```

And `MyParagraph`'s style will include
```css
@media screen and (min-width: 200px) {
  font-size: 10px;
}

@media screen and (min-width: 375px) {
  font-size: 1rem;
}

@media screen and (min-width: 1440px) {
  font-size: 4rem;
}
```

### The `standard` breakpoint

`standard` is a reserved key in object values. You can use it to define a style that should apply when no breakpoints match.

`MyApp.js`:
```react
import React from 'react'

export default () => (
  <MyParagraph fontSize={{        // breakpoints: {
    standard: 18,
    myCoolBreakpoint: 10          //   myCoolBreakpoint: '200px'
    mobile: 16,                   //   mobile: '375px',
  }}>                             // }
    Welcome to my app!
  </MyParagraph>
)
```

Results in
```css
font-size: 18px;

@media screen and (min-width: 200px) {
  fontSize: 10px;
}

@media screen and (min-width: 375px) {
  fontSize: 16px;
}
```

>You can't define a `standard` breakpoint in your theme. *themed-styling* catches the `standard` property of values and doesn't match it with `breakpoints` keys.

>It doesn't matter where `standard` is defined in your object.

### Example with fallback

Assume the same theme as [before](#example-with-props). You probably noticed the function call in `MyParagraph.js`. This is deliberate. You can pass your fallback value to this function, or leave it out if you don't want one.

`MyParagraph.js`:
```react
import styled from 'styled-components'
import { fontSize } from '@themed-styling/core'

export default styled.p`
  ${fontSize({                  // breakpoints: {
    standard: 18,
    mobile: '1rem',             //   mobile: '375px',
    desktop: '3rem'             //   desktop: '1440px',
  })}                           // }
`
```

>Objects and arrays are overridden, not merged. If your fallback specifies `desktop`, `tablet` and `mobile` but your prop value only specifies `desktop` and `mobile`, your component won't have a `tablet` media query. The same applies to arrays (fallback: `['1rem', '1.5rem', '2rem']`, prop: `['2rem', '2.5rem']` => only two media queries).

### Arrays

You can also use arrays to specify your breakpoints and values.

`theme.js`:
```react
export default {
  breakpoints: ['200px', '375px', '768px', '1440px']
}
```

`MyParagraph.js`:
```react
import styled from 'styled-components'
import { fontSize } from '@themed-styling/core'

export default styled.p`
  ${fontSize([                  // breakpoints: [
      10,                       //   '200px',
      16,                       //   '375px',
      18,                       //   '768px',
      20                        //   '1440px'
    ])}                         // ]
`
```

You can use object values to skip breakpoints like before, due to how [`Object.entries()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries) interacts with arrays.

`MyParagraph.js`:
```react
import styled from 'styled-components'
import { fontSize } from '@themed-styling/core'

export default styled.p`
  ${fontSize({                  // breakpoints: [
      0: 10,                    //   '200px',
      2: 16,                    //   '375px',
      3: 18                     //   '1440px',
    })}                         // ]
`
```

## Get started

Install with npm
```shell script
$ npm i @themed-styling/core
```
and check out the [changelog](CHANGELOG.md) and [API reference](https://themed-styling.github.io/core/).
