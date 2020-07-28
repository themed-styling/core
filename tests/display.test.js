import { display } from '../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from './utilities'

display.name_ = 'display'
testStringValuesOn(display, 'display:', ';', '!important;', value => value)
testNumberValuesOn(display, 'display:', ';', '!important;', value => value)
testObjectValuesOn(
  display,
  'display:',
  ';',
  '!important;',
  value => value,
  value => value
)
testIllegalValuesOn(display)
