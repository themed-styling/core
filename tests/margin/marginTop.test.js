import { marginTop } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

marginTop.name_ = 'marginTop'
testStringValuesOn(marginTop, 'margin-top:', ';', '!important;', value => value)
testNumberValuesOn(marginTop, 'margin-top:', ';', '!important;', value => [
  value,
  'px',
])
testObjectValuesOn(
  marginTop,
  'margin-top:',
  ';',
  '!important;',
  value => [value, 'px'],
  value => value
)
testIllegalValuesOn(marginTop)
