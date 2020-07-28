import { contrast } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

contrast.name_ = 'contrast'
testStringValuesOn(
  contrast,
  'filter:contrast(',
  ');',
  ')!important;',
  value => value
)
testNumberValuesOn(
  contrast,
  'filter:contrast(',
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
  contrast,
  'filter:contrast(',
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
testIllegalValuesOn(contrast)
