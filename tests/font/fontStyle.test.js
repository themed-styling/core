import { fontStyle } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

fontStyle.name_ = 'fontStyle'
testStringValuesOn(fontStyle, 'font-style:', ';', '!important;', value => value)
testNumberValuesOn(fontStyle, 'font-style:', ';', '!important;', value => value)
testObjectValuesOn(
  fontStyle,
  'font-style:',
  ';',
  '!important;',
  value => value,
  value => value
)
testIllegalValuesOn(fontStyle)
