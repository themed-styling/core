import { borderWidth } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

borderWidth.name_ = 'borderWidth'
testStringValuesOn(
  borderWidth,
  'border-width:',
  ';',
  '!important;',
  value => value
)
testNumberValuesOn(borderWidth, 'border-width:', ';', '!important;', value => [
  value,
  'px',
])
testObjectValuesOn(
  borderWidth,
  'border-width:',
  ';',
  '!important;',
  value => [value, 'px'],
  value => value
)
testIllegalValuesOn(borderWidth)
