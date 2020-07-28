import { borderLeftStyle } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

borderLeftStyle.name_ = 'borderLeftStyle'
testStringValuesOn(
  borderLeftStyle,
  'border-left-style:',
  ';',
  '!important;',
  value => value
)
testNumberValuesOn(
  borderLeftStyle,
  'border-left-style:',
  ';',
  '!important;',
  value => value
)
testObjectValuesOn(
  borderLeftStyle,
  'border-left-style:',
  ';',
  '!important;',
  value => value,
  value => value
)
testIllegalValuesOn(borderLeftStyle)
