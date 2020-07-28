import { borderRightWidth } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

borderRightWidth.name_ = 'borderRightWidth'
testStringValuesOn(
  borderRightWidth,
  'border-right-width:',
  ';',
  '!important;',
  value => value
)
testNumberValuesOn(
  borderRightWidth,
  'border-right-width:',
  ';',
  '!important;',
  value => [value, 'px']
)
testObjectValuesOn(
  borderRightWidth,
  'border-right-width:',
  ';',
  '!important;',
  value => [value, 'px'],
  value => value
)
testIllegalValuesOn(borderRightWidth)
