import { padding } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

padding.name_ = 'padding'
testStringValuesOn(padding, 'padding:', ';', '!important;', value => value)
testNumberValuesOn(padding, 'padding:', ';', '!important;', value => [
  value,
  'px',
])
testObjectValuesOn(
  padding,
  'padding:',
  ';',
  '!important;',
  value => [value, 'px'],
  value => value
)
testIllegalValuesOn(padding)
