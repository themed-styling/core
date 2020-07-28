import { invert } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

invert.name_ = 'invert'
testStringValuesOn(
  invert,
  'filter:invert(',
  ');',
  ')!important;',
  value => value
)
testNumberValuesOn(invert, 'filter:invert(', ');', ')!important;', value => {
  if (value <= 1) {
    return [value * 100, '%']
  }
  return [value, '%']
})
testObjectValuesOn(
  invert,
  'filter:invert(',
  ');',
  ')!important;',
  value => {
    if (value <= 1) {
      return [value * 100, '%']
    }
    return [value, '%']
  },
  value => value
)
testIllegalValuesOn(invert)
