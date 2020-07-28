import { borderStyle } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

borderStyle.name_ = 'borderStyle'
testStringValuesOn(
  borderStyle,
  'border-style:',
  ';',
  '!important;',
  value => value
)
testNumberValuesOn(
  borderStyle,
  'border-style:',
  ';',
  '!important;',
  value => value
)
testObjectValuesOn(
  borderStyle,
  'border-style:',
  ';',
  '!important;',
  value => value,
  value => value
)
testIllegalValuesOn(borderStyle)
