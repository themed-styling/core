import { bottom } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

bottom.name_ = 'bottom'
testStringValuesOn(bottom, 'bottom:', ';', '!important;', value => value)
testNumberValuesOn(bottom, 'bottom:', ';', '!important;', value => [
  value,
  'px',
])
testObjectValuesOn(
  bottom,
  'bottom:',
  ';',
  '!important;',
  value => [value, 'px'],
  value => value
)
testIllegalValuesOn(bottom)
