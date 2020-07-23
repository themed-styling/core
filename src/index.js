/**
 * An object containing a <code>breakpoints</code> or a <code>mediaQueries</code> property.
 * @note These properties are not necessary, when no object or array values are used.
 * @typedef {object} theme
 * @property {(object.<(string|number|bigint)>|array.<(string|number|bigint)>)=} breakpoints - An object or array of CSS <code>min-width</code> values
 * @property {(object.<string>|array.<string>)=} mediaQueries - An object or array of strings containing valid media queries
 *
 * @example
 * {
 *   breakpoints: {
 *     mobile: '320px',
 *     tablet: '768px',
 *     desktop: '1024px'
 *   }
 * }
 * @example
 * {
 *   mediaQueries: {
 *     mobile: '@media screen and (min-width: 320px)',
 *     tablet: '@media screen and (min-width: 768px)',
 *     desktop: '@media screen and (min-width: 1024px)'
 *   }
 * }
 */

/**
 * An object containing a <code>{@link theme}</code> property
 * @typedef {object} props
 * @property {theme} theme - A <code>{@link theme}</code> object
 */

/**
 * Core functions
 * @namespace core
 */

/**
 * Utility Functions
 * @namespace util
 */

/**
 * @typedef {function} coreFunction
 * @param {(object.<(string|number|bigint)>|array.<(string|number|bigint)>|string|number|bigint)=} fallback - A fallback value to use when no prop value is passed
 * @property {function({string})} propName - Function to set the name of the prop the component should have
 * @returns {function({props})} Function to take component props passed by styled-components
 */

/**
 * @typedef {function} proplessFunction
 * @param {(object.<(string|number|bigint)>|array.<(string|number|bigint)>|string|number|bigint)} value - The value to use
 * @returns {function({props})} Function to take component props passed by styled-components
 */

export { default as alignItems } from './lib/alignment/alignItems'
export { default as alignSelf } from './lib/alignment/alignSelf'
export { default as background } from './lib/background/background'
export { default as backgroundAttachment } from './lib/background/backgroundAttachment'
export { default as backgroundPosition } from './lib/background/backgroundPosition'
export { default as backgroundRepeat } from './lib/background/backgroundRepeat'
export { default as backgroundSize } from './lib/background/backgroundSize'
export { default as blur } from './lib/filter/blur'
export { default as border } from './lib/border/border'
export { default as borderBottom } from './lib/border/borderBottom'
export { default as borderBottomColor } from './lib/border/borderBottomColor'
export { default as borderBottomLeftRadius } from './lib/border/borderBottomLeftRadius'
export { default as borderBottomRightRadius } from './lib/border/borderBottomRightRadius'
export { default as borderBottomStyle } from './lib/border/borderBottomStyle'
export { default as borderBottomWidth } from './lib/border/borderBottomWidth'
export { default as borderColor } from './lib/border/borderColor'
export { default as borderLeft } from './lib/border/borderLeft'
export { default as borderLeftColor } from './lib/border/borderLeftColor'
export { default as borderLeftStyle } from './lib/border/borderLeftStyle'
export { default as borderLeftWidth } from './lib/border/borderLeftWidth'
export { default as borderRadius } from './lib/border/borderRadius'
export { default as borderRight } from './lib/border/borderRight'
export { default as borderRightColor } from './lib/border/borderRightColor'
export { default as borderRightStyle } from './lib/border/borderRightStyle'
export { default as borderRightWidth } from './lib/border/borderRightWidth'
export { default as borderStyle } from './lib/border/borderStyle'
export { default as borderTop } from './lib/border/borderTop'
export { default as borderTopColor } from './lib/border/borderTopColor'
export { default as borderTopLeftRadius } from './lib/border/borderTopLeftRadius'
export { default as borderTopRightRadius } from './lib/border/borderTopRightRadius'
export { default as borderTopStyle } from './lib/border/borderTopStyle'
export { default as borderTopWidth } from './lib/border/borderTopWidth'
export { default as borderWidth } from './lib/border/borderWidth'
export { default as bottom } from './lib/positioning/bottom'
export { default as boxShadow } from './lib/boxShadow'
export { default as brightness } from './lib/filter/brightness'
export { default as clear } from './lib/alignment/clear'
export { default as color } from './lib/color'
export { default as contrast } from './lib/filter/contrast'
export { default as css } from './lib/css'
export { default as display } from './lib/display'
export { default as dropShadow } from './lib/filter/dropShadow'
export { default as filter } from './lib/filter/filter'
export { default as filterOpacity } from './lib/filter/filterOpacity'
export { default as flex } from './lib/flex/flex'
export { default as flexBasis } from './lib/flex/flexBasis'
export { default as flexGrow } from './lib/flex/flexGrow'
export { default as flexShrink } from './lib/flex/flexShrink'
export { default as float } from './lib/alignment/float'
export { default as fontSize } from './lib/fontSize'
export { default as grayscale } from './lib/filter/grayscale'
export { default as grid } from './lib/grid/grid'
export { default as gridColumn } from './lib/grid/gridColumn'
export { default as gridColumnEnd } from './lib/grid/gridColumnEnd'
export { default as gridColumnGap } from './lib/grid/gridColumnGap'
export { default as gridColumnStart } from './lib/grid/gridColumnStart'
export { default as gridGap } from './lib/grid/gridGap'
export { default as gridRow } from './lib/grid/gridRow'
export { default as gridRowEnd } from './lib/grid/gridRowEnd'
export { default as gridRowGap } from './lib/grid/gridRowGap'
export { default as gridRowStart } from './lib/grid/gridRowStart'
export { default as gridTemplate } from './lib/grid/gridTemplate'
export { default as gridTemplateColumns } from './lib/grid/gridTemplateColumns'
export { default as gridTemplateRows } from './lib/grid/gridTemplateRows'
export { default as height } from './lib/dimensions/height'
export { default as hueRotate } from './lib/filter/hueRotate'
export { default as invert } from './lib/filter/invert'
export { default as justifyContent } from './lib/alignment/justifyContent'
export { default as justifySelf } from './lib/alignment/justifySelf'
export { default as left } from './lib/positioning/left'
export { default as margin } from './lib/margin/margin'
export { default as marginTop } from './lib/margin/marginTop'
export { default as marginLeft } from './lib/margin/marginLeft'
export { default as marginBottom } from './lib/margin/marginBottom'
export { default as marginRight } from './lib/margin/marginRight'
export { default as matrix } from './lib/transform/matrix'
export { default as matrix3D } from './lib/transform/matrix3D'
export { default as maxHeight } from './lib/dimensions/maxHeight'
export { default as maxWidth } from './lib/dimensions/maxWidth'
export { default as minHeight } from './lib/dimensions/minHeight'
export { default as minWidth } from './lib/dimensions/minWidth'
export { default as padding } from './lib/padding/padding'
export { default as paddingTop } from './lib/padding/paddingTop'
export { default as paddingLeft } from './lib/padding/paddingLeft'
export { default as paddingBottom } from './lib/padding/paddingBottom'
export { default as paddingRight } from './lib/padding/paddingRight'
export { default as perspective } from './lib/transform/perspective'
export { default as position } from './lib/positioning/position'
export { default as right } from './lib/positioning/right'
export { default as rotate } from './lib/transform/rotate'
export { default as rotate3D } from './lib/transform/rotate3D'
export { default as rotateX } from './lib/transform/rotateX'
export { default as rotateY } from './lib/transform/rotateY'
export { default as rotateZ } from './lib/transform/rotateZ'
export { default as saturate } from './lib/filter/saturate'
export { default as scale } from './lib/transform/scale'
export { default as scale3D } from './lib/transform/scale3D'
export { default as scaleX } from './lib/transform/scaleX'
export { default as scaleY } from './lib/transform/scaleY'
export { default as scaleZ } from './lib/transform/scaleZ'
export { default as sepia } from './lib/filter/sepia'
export { default as skew } from './lib/transform/skew'
export { default as skewX } from './lib/transform/skewX'
export { default as skewY } from './lib/transform/skewY'
export { default as top } from './lib/positioning/top'
export { default as transform } from './lib/transform/transform'
export { default as translate } from './lib/transform/translate'
export { default as translate3D } from './lib/transform/translate3D'
export { default as translateX } from './lib/transform/translateX'
export { default as translateY } from './lib/transform/translateY'
export { default as translateZ } from './lib/transform/translateZ'
export { default as width } from './lib/dimensions/width'
