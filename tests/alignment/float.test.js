import { float } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

float.name_ = 'float'
testStringValuesOn(float, 'float:', ';', '!important;', value => value)
testNumberValuesOn(float, 'float:', ';', '!important;', value => value)
testObjectValuesOn(
  float,
  'float:',
  ';',
  '!important;',
  value => value,
  value => value
)
testIllegalValuesOn(float)
