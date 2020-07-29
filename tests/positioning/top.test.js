import { top } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

top.name_ = 'top'
testStringValuesOn(top, 'top:', ';', '!important;', value => value)
testNumberValuesOn(top, 'top:', ';', '!important;', value => [value, 'px'])
testObjectValuesOn(
  top,
  'top:',
  ';',
  '!important;',
  value => [value, 'px'],
  value => value
)
testIllegalValuesOn(top)
