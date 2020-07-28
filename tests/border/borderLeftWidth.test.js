import { borderLeftWidth } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

borderLeftWidth.name_ = 'borderLeftWidth'
testStringValuesOn(
  borderLeftWidth,
  'border-left-width:',
  ';',
  '!important;',
  value => value
)
testNumberValuesOn(
  borderLeftWidth,
  'border-left-width:',
  ';',
  '!important;',
  value => [value, 'px']
)
testObjectValuesOn(
  borderLeftWidth,
  'border-left-width:',
  ';',
  '!important;',
  value => [value, 'px'],
  value => value
)
testIllegalValuesOn(borderLeftWidth)
