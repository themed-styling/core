import { brightness } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

brightness.name_ = 'brightness'
testStringValuesOn(
  brightness,
  'filter:brightness(',
  ');',
  ')!important;',
  value => value
)
testNumberValuesOn(
  brightness,
  'filter:brightness(',
  ');',
  ')!important;',
  value => {
    if (value <= 1) {
      return [value * 100, '%']
    }
    return [value, '%']
  }
)
testObjectValuesOn(
  brightness,
  'filter:brightness(',
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
testIllegalValuesOn(brightness)
