import { grayscale } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

grayscale.name_ = 'grayscale'
testStringValuesOn(
  grayscale,
  'filter:grayscale(',
  ');',
  ')!important;',
  value => value
)
testNumberValuesOn(
  grayscale,
  'filter:grayscale(',
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
  grayscale,
  'filter:grayscale(',
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
testIllegalValuesOn(grayscale)
