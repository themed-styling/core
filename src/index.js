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
 * @typedef {function} modifier
 * @returns {coreFunction} The function it was called on
 */

/**
 * @typedef {function} stringModifier
 * @param {string} string - A string value
 * @returns {coreFunction} The function it was called on
 */

/**
 * @typedef {function} coreFunction
 * @param {(object.<(string|number|bigint)>|array.<(string|number|bigint)>|string|number|bigint)=} fallback - A fallback value to use when no prop value is passed
 * @property {stringModifier} propName - Function to set the name of the prop the component should have
 * @property {stringModifier} p - Shorthand for {@link propName}
 * @property {modifier} important - Function to mark the value as !important
 * @property {modifier} i - Shorthand for {@link important}
 * @property {modifier} propless - Function to disable using a prop
 * @property {modifier} l - Shorthand for {@link propless}
 * @property {stringModifier} calc - Function to add css calc() to transform the value
 * @property {stringModifier} c - Shorthand for {@link calc}
 * @returns {function({props})} Function to take component props passed by styled-components
 */

/**
 * @typedef {function} cssMaker
 * @param {(object.<(string|number|bigint)>|array.<(string|number|bigint)>|string|number|bigint)} value - A CSS value
 * @returns {array.<(string|number|bigint)>} An array that represents a line of CSS code when joined
 */

export * from './lib/generated'
export { default as css } from './lib/css'
export { default as propTypes } from './lib/propTypes'
