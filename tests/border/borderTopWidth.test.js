import { borderTopWidth } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

borderTopWidth.name_ = 'borderTopWidth'
testStringValuesOn(
  borderTopWidth,
  'border-top-width:',
  ';',
  '!important;',
  value => value
)
testNumberValuesOn(
  borderTopWidth,
  'border-top-width:',
  ';',
  '!important;',
  value => [value, 'px']
)
testObjectValuesOn(
  borderTopWidth,
  'border-top-width:',
  ';',
  '!important;',
  value => [value, 'px'],
  value => value
)
testIllegalValuesOn(borderTopWidth)
