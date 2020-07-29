import { marginRight } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

marginRight.name_ = 'marginRight'
testStringValuesOn(
  marginRight,
  'margin-right:',
  ';',
  '!important;',
  value => value
)
testNumberValuesOn(marginRight, 'margin-right:', ';', '!important;', value => [
  value,
  'px',
])
testObjectValuesOn(
  marginRight,
  'margin-right:',
  ';',
  '!important;',
  value => [value, 'px'],
  value => value
)
testIllegalValuesOn(marginRight)
