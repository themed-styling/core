import { saturate } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

saturate.name_ = 'saturate'
testStringValuesOn(
  saturate,
  'filter:saturate(',
  ');',
  ')!important;',
  value => value
)
testNumberValuesOn(
  saturate,
  'filter:saturate(',
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
  saturate,
  'filter:saturate(',
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
testIllegalValuesOn(saturate)
