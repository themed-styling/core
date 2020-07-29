import { font } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

font.name_ = 'font'
testStringValuesOn(font, 'font:', ';', '!important;', value => value)
testNumberValuesOn(font, 'font:', ';', '!important;', value => value)
testObjectValuesOn(
  font,
  'font:',
  ';',
  '!important;',
  value => value,
  value => value
)
testIllegalValuesOn(font)
