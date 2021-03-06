const get = (path, object) => {
  const split = path.split(/\.(.+)/)
  if (split.length > 1) {
    return get(split[1], object[split[0]])
  } else {
    return object[path]
  }
}

/**
 * Gets a value from an object based on a string path.
 *
 * @param {string} path - The value's path
 * @param {object} object - The theme
 * @returns A value, undefined or null
 * @name get
 * @memberOf util
 */
export default (path, object) => {
  try {
    return get(path, object)
  } catch (e) {
    return null
  }
}
