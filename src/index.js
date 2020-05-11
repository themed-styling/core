/**
 * An object containing <code>breakpoints</code>
 * @typedef {Object} theme
 * @property {(Object.<(string|number|bigint)>|Array.<(string|number|bigint)>)} breakpoints - An object or array of CSS <code>min-width</code> values or numbers
 */

/**
 * An object containing {@link theme}
 * @typedef {Object} props
 * @property {theme} theme - An object containing a <code>breakpoints</code> object or array
 */

/**
 * Core functions
 * @namespace core
 */

/**
 * Utility Functions
 * @namespace util
 */

export { default as background } from './lib/background'
export { default as color } from './lib/color'
export { default as fontSize } from './lib/fontSize'
export { default as grid } from './lib/grid/grid'
export { default as gridColumn } from './lib/grid/gridColumn'
export { default as gridColumnEnd } from './lib/grid/gridColumnEnd'
export { default as gridColumnStart } from './lib/grid/gridColumnStart'
export { default as gridRow } from './lib/grid/gridRow'
export { default as gridRowEnd } from './lib/grid/gridRowEnd'
export { default as gridRowStart } from './lib/grid/gridRowStart'
export { default as gridTemplate } from './lib/grid/gridTemplate'
export { default as gridTemplateRows } from './lib/grid/gridTemplateRows'
export { default as gridTemplateColumns } from './lib/grid/gridTemplateColumns'
export { default as height } from './lib/height'
export { default as margin } from './lib/margin/margin'
export { default as marginTop } from './lib/margin/marginTop'
export { default as marginLeft } from './lib/margin/marginLeft'
export { default as marginBottom } from './lib/margin/marginBottom'
export { default as marginRight } from './lib/margin/marginRight'
export { default as padding } from './lib/padding/padding'
export { default as paddingTop } from './lib/padding/paddingTop'
export { default as paddingLeft } from './lib/padding/paddingLeft'
export { default as paddingBottom } from './lib/padding/paddingBottom'
export { default as paddingRight } from './lib/padding/paddingRight'
export { default as width } from './lib/width'
