// import {
//   find as find_,
//   findAll,
//   findOne,
//   getAttributeValue,
//   nextElementSibling,
// } from 'domutils'
import domutils from 'domutils'

// wrapper for semantically calling functions
const find = (test, options = { recurse: true }) => ({
  in: nodes => domutils.find(test, nodes, options),
})
find.all = (test, options) => ({
  in: nodes => domutils.findAll(test, nodes, options),
})
find.one = (test, options) => ({
  in: nodes => domutils.findOne(test, nodes, options),
})
find.nextSibling = test => ({
  of: node => {
    let sibling = domutils.nextElementSibling(node)
    while (sibling) {
      if (test(sibling)) {
        return sibling
      }
      sibling = domutils.nextElementSibling(sibling)
    }
    return sibling
  },
})

// functions to semantically create find tests
export const ofType = type => ({ type: nodeType }) => nodeType === type
export const withName = name => ({ name: nodeName }) => nodeName === name
export const withAttribute = attribute => ({
  equaling: value => node =>
    domutils.getAttributeValue(node, attribute) === value,
})

export const withAll = (...tests) => node => {
  for (const test of tests) {
    if (!test(node)) {
      return false
    }
  }
  return true
}

export default find
