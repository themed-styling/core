import { borderRightStyle } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

borderRightStyle.name_ = 'borderRightStyle'
testStringValuesOn(
  borderRightStyle,
  'border-right-style:',
  ';',
  '!important;',
  value => value
)
testNumberValuesOn(
  borderRightStyle,
  'border-right-style:',
  ';',
  '!important;',
  value => value
)
testObjectValuesOn(
  borderRightStyle,
  'border-right-style:',
  ';',
  '!important;',
  value => value,
  value => value
)
testIllegalValuesOn(borderRightStyle)
