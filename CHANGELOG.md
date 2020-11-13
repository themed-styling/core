# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- Compiled bundles with babel for better compatibility

### Removed

- Removed everything from this package that isn't functionality (tests, configs, docs)

## [3.0.3] - 2020-11-12

### Fixed

- All functions not resolving function values with props

## [3.0.2] - 2020-11-04

### Fixed

- All functions not getting string paths from the theme

## [3.0.1] - 2020-11-04

### Fixed

- All functions throwing an error when not passed any value

## [3.0.0] - 2020-11-03

### Added

- All CSS properties with `WD` status or higher

  https://www.w3.org/Style/CSS/all-properties.en.html

- `theme` - function to take values from your theme based on string paths

  ```javascript
  const Component = styled.div`
    color: ${theme('colors.primary')};
  `
  ```

- You can now pass functions as values which are passed props and whose return value is used

  ```javascript
  const Component = styled.div`
    ${color(props => (props.someCondition ? 'colors.primary' : 'White'))}
  `
  ```

  > Functions **cannot** return functions (that wouldn't make sense).
  >
  > Functions _can_ return objects.
  >
  > Objects _can_ contain functions (or a mix of numbers, strings and functions).
  >
  > Setting _propless_ will not prevent that prop from being passed to your function.

### Changed

- `pxTransformer`
  - Renamed to `pixelsTransformer` for consistency
  - Returns `0` instead of `0px` when passed `0`

## [2.0.2] - 2020-09-09

### Fixed

- `css` name and prop name

## [2.0.1] - 2020-08-31

### Fixed

- Passing string theme paths throwing a TypeError

## [2.0.0] - 2020-08-20

### Added

- Modifier functions to change all functions' behaviour
- `backgroundColor`
- `filterURL` (`filter: url(<value>);`)
- `font`
- `fontFamily`
- `fontStyle`
- `fontWeight`
- `propType`

### Changed

- Renamed all transformers to include '_Transformer_'

### Removed

- Propless parameter

## [1.2.0] - 2020-05-20

### Added

- `display`
- `boxShadow`

#### Background

- `backgroundAttachment`
- `backgroundPosition`
- `backgroundRepeat`
- `backgroundSize`

#### Border

- `border`
- `borderBottom`
- `borderBottomColor`
- `borderBottomLeftRadius`
- `borderBottomRightRadius`
- `borderBottomStyle`
- `borderBottomWidth`
- `borderColor`
- `borderLeft`
- `borderLeftColor`
- `borderLeftStyle`
- `borderLeftWidth`
- `borderRadius`
- `borderRight`
- `borderRightColor`
- `borderRightStyle`
- `borderRightWidth`
- `borderStyle`
- `borderTop`
- `borderTopColor`
- `borderTopLeftRadius`
- `borderTopRightRadius`
- `borderTopStyle`
- `borderTopWidth`
- `borderWidth`

#### Filter

- `filter`
- `blur`
- `brightness`
- `contrast`
- `dropShadow`
- `filterOpacity`
- `grayscale`
- `hueRotate`
- `invert`
- `saturate`
- `sepia`

#### Flex

- `flex`
- `flexBasis`
- `flexGrow`
- `flexShrink`

#### Grid

- `gridGap`
- `gridColumnGap`
- `gridRowGap`

#### Positioning

- `position`
- `bottom`
- `left`
- `right`
- `top`

#### Transform

- `transform`
- `matrix`
- `matrix3D`
- `perspective`
- `rotate`
- `rotate3D`
- `rotateX`
- `rotateY`
- `rotateZ`
- `scale`
- `scale3D`
- `scaleX`
- `scaleY`
- `scaleZ`
- `skew`
- `skewX`
- `skewY`
- `translate`
- `translate3D`
- `translateX`
- `translateY`
- `translateZ`

#### Utilities

- `universal` constructor
- `get` theme getter
- `degrees` transformer
- `percent` transformer
- `propless` utility

## [1.1.0] - 2020-05-15

### Added

- New, second parameter to all functions to specify that the component should not have a prop
  - Defaults to `false`

## [1.0.0] - 2020-05-13

### Added

- alignItems
- alignSelf
- background
- clear
- color
- css
- float
- fontSize
- grid
- gridColumn
- gridColumnEnd
- gridColumnStart
- gridRow
- gridRowEnd
- gridRowStart
- gridTemplate
- gridTemplateColumns
- gridTemplateRows
- height
- justifyContent
- justifySelf
- margin
- marginTop
- marginLeft
- marginBottom
- marginRight
- maxHeight
- maxWidth
- minHeight
- minWidth
- padding
- paddingTop
- paddingLeft
- paddingBottom
- paddingRight
- width
