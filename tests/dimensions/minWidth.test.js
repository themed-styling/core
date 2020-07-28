import { minWidth } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

minWidth.name_ = 'minWidth'
testStringValuesOn(minWidth, 'min-width:', ';', '!important;', value => value)
testNumberValuesOn(minWidth, 'min-width:', ';', '!important;', value => [
  value,
  'px',
])
testObjectValuesOn(
  minWidth,
  'min-width:',
  ';',
  '!important;',
  value => [value, 'px'],
  value => value
)
testIllegalValuesOn(minWidth)
