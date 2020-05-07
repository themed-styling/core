# @themed-styling/core 🎁

*themed-styling* is a collection of functions to help you write quick and highly reusable *styled-components*. It integrates perfectly with themes and gives you enormous control over the responsiveness of your components. 

## Usage

```shell script
$ npm i @themed-styling/core
```

```react
import { margin } from '@themed-styling/core'

const MyComponent = styled.div`
  ${margin()}
`

const MyApp = () => (
  <>
    // Raw values as strings or numbers. Numbers will be converted to px values.
    <MyComponent margin={"100rem"}>
      This is my component with rem based margin
    </MyComponent>
    <MyComponent margin={100}>
      This is my component with px based margin
    </MyComponent>

    // Theme paths 
    <MyComponent margin={"spaces.small"}>
      This is my component with theme margin
    </MyComponent>

    // Or an object with keys corresponding to a breakpoints opject in your theme
    <MyComponent margin={{
      mobile: "spaces.small",
      desktop: "100rem"
    }}>
      This is my component with responsive margin
    </MyComponent>
  </>
)
```

## How it works

*themed-styling* leverages the power of *[@styled-system/theme-get](https://www.npmjs.com/package/@styled-system/theme-get)* and its ability to get values from your theme based on string paths.

*themed-styling* assumes your theme has an object called `breakpoints`. `breakpoints`' keys are arbitrary and you can add as many as you want. When you pass an object as a value, *themed-styling* matches the keys in that object to the keys in your `breakpoints` and creates  `screen and (min-width: <breakpoint>)` media queries for each key in the object.

### Example with `props`

`theme.js`:
```react
export default {
  breakpoints: {
    desktop: '1440px',
    tablet: '768px',
    mobile: '375px',
    myCoolBreakpoint: '200px'
  }
}
```

`MyComponent.js`:
```react
import styled from 'styled-components'
import { margin } from '@themed-styling/core'

export default styled.div`
  ${margin()}
`
```

`MyApp.js`:
```react
import React from 'react'

export default () => (
  <MyComponent margin={{
    desktop: '4rem',
    tablet: '2rem',
    mobile: '1rem',
    myCoolBreakpoint: '3px',
  }}>
    Welcome to my app!
  </MyComponent>
)
```

`MyComponent`'s style will include
```css
@media screen and (min-width: 1440px) {
  margin: 4rem;
}

@media screen and (min-width: 768px) {
  margin: 2rem;
}

@media screen and (min-width: 375px) {
  margin: 1rem;
}

@media screen and (min-width: 200px) {
  margin: 3px;
}
```

In case you don't need one of the breakpoints, just leave it out of the object.

`MyApp.js`:
```react
import React from 'react'

export default () => (
  <MyComponent margin={{
    desktop: '4rem',
    mobile: '1rem',
    myCoolBreakpoint: '3px',
  }}>
    Welcome to my app!
  </MyComponent>
)
```

And `MyComponent`'s style will include
```css
@media screen and (min-width: 1440px) {
  margin: 4rem;
}

@media screen and (min-width: 375px) {
  margin: 1rem;
}

@media screen and (min-width: 200px) {
  margin: 3px;
}
```

### Example with fallback

Assume the same theme as [before](#example-with-props). You probably noticed the function call in `MyComponent.js`. This is deliberate. You can pass your fallback value to this function, or leave it out if you don't want a value.

`MyFallbackComponent.js`:
```react
import styled from 'styled-components'
import { margin } from '@themed-styling/core'

export default styled.div`
  ${margin({
    desktop: '3rem',
    mobile: '1rem'
  })}
`
```

>If you pass a `margin` prop to `MyFallbackComponent`, the value in the prop will be used. Props have priority over fallback values.

>Objects are not merged. If your fallback specifies `desktop`, `tablet` and `mobile` but your prop value only specifies `desktop` and `mobile`, your component won't have a `tablet` media query.


## API

All functions work the same way. They add a prop with the same name, that stands for a specific CSS property. The function `margin` adds a prop called `margin` to your component and sets `margin: <value>;` in your component's template literal, basically.

>Props and functions are camelCase, as is convention in JS. `margin-bottom` becomes `marginBottom`, for instance.

You can pass a fallback or default value to the function when you use it in your *styled-component*, which is used when no prop is set. The prop value takes priority over the fallback value, though.

Objects are not merged. If your fallback value is a set of keys *K* and your prop value *P; P ⊂ K*, your component will have *|P|* keys.

### Reference

#### margin

| name | allowed value types |
| --- | --- |
| margin | Object, String, Number, BigInt |
