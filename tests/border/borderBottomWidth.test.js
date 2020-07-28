import { borderBottomWidth } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

borderBottomWidth.name_ = 'borderBottomWidth'
testStringValuesOn(
  borderBottomWidth,
  'border-bottom-width:',
  ';',
  '!important;',
  value => value
)
testNumberValuesOn(
  borderBottomWidth,
  'border-bottom-width:',
  ';',
  '!important;',
  value => [value, 'px']
)
testObjectValuesOn(
  borderBottomWidth,
  'border-bottom-width:',
  ';',
  '!important;',
  value => [value, 'px'],
  value => value
)
testIllegalValuesOn(borderBottomWidth)
