import { clear } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

clear.name_ = 'clear'
testStringValuesOn(clear, 'clear:', ';', '!important;', value => value)
testNumberValuesOn(clear, 'clear:', ';', '!important;', value => value)
testObjectValuesOn(
  clear,
  'clear:',
  ';',
  '!important;',
  value => value,
  value => value
)
testIllegalValuesOn(clear)
