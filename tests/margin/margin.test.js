import { margin } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

margin.name_ = 'margin'
testStringValuesOn(margin, 'margin:', ';', '!important;', value => value)
testNumberValuesOn(margin, 'margin:', ';', '!important;', value => [
  value,
  'px',
])
testObjectValuesOn(
  margin,
  'margin:',
  ';',
  '!important;',
  value => [value, 'px'],
  value => value
)
testIllegalValuesOn(margin)
