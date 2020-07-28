import { border } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

border.name_ = 'border'
testStringValuesOn(border, 'border:', ';', '!important;', value => value)
testNumberValuesOn(border, 'border:', ';', '!important;', value => value)
testObjectValuesOn(
  border,
  'border:',
  ';',
  '!important;',
  value => value,
  value => value
)
testIllegalValuesOn(border)
