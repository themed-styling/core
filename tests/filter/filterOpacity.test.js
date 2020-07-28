import { filterOpacity } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

filterOpacity.name_ = 'filterOpacity'
testStringValuesOn(
  filterOpacity,
  'filter:opacity(',
  ');',
  ')!important;',
  value => value
)
testNumberValuesOn(
  filterOpacity,
  'filter:opacity(',
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
  filterOpacity,
  'filter:opacity(',
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
testIllegalValuesOn(filterOpacity)
