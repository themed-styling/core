import { borderBottomStyle } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

borderBottomStyle.name_ = 'borderBottomStyle'
testStringValuesOn(
  borderBottomStyle,
  'border-bottom-style:',
  ';',
  '!important;',
  value => value
)
testNumberValuesOn(
  borderBottomStyle,
  'border-bottom-style:',
  ';',
  '!important;',
  value => value
)
testObjectValuesOn(
  borderBottomStyle,
  'border-bottom-style:',
  ';',
  '!important;',
  value => value,
  value => value
)
testIllegalValuesOn(borderBottomStyle)
