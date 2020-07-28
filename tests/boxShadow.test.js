import { boxShadow } from '../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from './utilities'

boxShadow.name_ = 'boxShadow'
testStringValuesOn(boxShadow, 'box-shadow:', ';', '!important;', value => value)
testNumberValuesOn(boxShadow, 'box-shadow:', ';', '!important;', value => value)
testObjectValuesOn(
  boxShadow,
  'box-shadow:',
  ';',
  '!important;',
  value => value,
  value => value
)
testIllegalValuesOn(boxShadow)
