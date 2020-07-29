import { paddingTop } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

paddingTop.name_ = 'paddingTop'
testStringValuesOn(
  paddingTop,
  'padding-top:',
  ';',
  '!important;',
  value => value
)
testNumberValuesOn(paddingTop, 'padding-top:', ';', '!important;', value => [
  value,
  'px',
])
testObjectValuesOn(
  paddingTop,
  'padding-top:',
  ';',
  '!important;',
  value => [value, 'px'],
  value => value
)
testIllegalValuesOn(paddingTop)
