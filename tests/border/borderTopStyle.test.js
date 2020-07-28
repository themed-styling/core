import { borderTopStyle } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

borderTopStyle.name_ = 'borderTopStyle'
testStringValuesOn(
  borderTopStyle,
  'border-top-style:',
  ';',
  '!important;',
  value => value
)
testNumberValuesOn(
  borderTopStyle,
  'border-top-style:',
  ';',
  '!important;',
  value => value
)
testObjectValuesOn(
  borderTopStyle,
  'border-top-style:',
  ';',
  '!important;',
  value => value,
  value => value
)
testIllegalValuesOn(borderTopStyle)
