import { maxWidth } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

maxWidth.name_ = 'maxWidth'
testStringValuesOn(maxWidth, 'max-width:', ';', '!important;', value => value)
testNumberValuesOn(maxWidth, 'max-width:', ';', '!important;', value => [
  value,
  'px',
])
testObjectValuesOn(
  maxWidth,
  'max-width:',
  ';',
  '!important;',
  value => [value, 'px'],
  value => value
)
testIllegalValuesOn(maxWidth)
