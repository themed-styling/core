/**
 * Adds a parameter to specify whether or not a component should have a prop.
 *
 * Takes a callback to construct the array and the name of the prop the component will have, should it have a prop.
 *
 * @param {function((Object.<(string|number|bigint)>|Array.<(string|number|bigint)>|string|number|bigint)=, theme)} callback - A callback to pass a value and {@link theme} to
 * @param {string} propName - The name of the prop the function that is returned by the returned function should have
 * @returns {function((Object.<(string|number|bigint)>|Array.<(string|number|bigint)>|string|number|bigint)=, boolean=)} A function that takes a fallback value and flag whether the returned function should return a function that takes a prop
 * @name propless
 * @memberOf util
 */
export default (callback, propName) => (fallback, propless = false) =>
  propless
    ? ({ theme }) => callback(fallback, theme)
    : ({ theme, ...props }) => callback(props[propName] || fallback, theme)
