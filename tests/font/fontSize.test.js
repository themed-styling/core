import { fontSize } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

fontSize.name_ = 'fontSize'
testStringValuesOn(fontSize, 'font-size:', ';', '!important;', value => value)
testNumberValuesOn(fontSize, 'font-size:', ';', '!important;', value => [
  value,
  'px',
])
testObjectValuesOn(
  fontSize,
  'font-size:',
  ';',
  '!important;',
  value => [value, 'px'],
  value => value
)
testIllegalValuesOn(fontSize)
