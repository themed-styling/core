import { paddingBottom } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

paddingBottom.name_ = 'paddingBottom'
testStringValuesOn(
  paddingBottom,
  'padding-bottom:',
  ';',
  '!important;',
  value => value
)
testNumberValuesOn(
  paddingBottom,
  'padding-bottom:',
  ';',
  '!important;',
  value => [value, 'px']
)
testObjectValuesOn(
  paddingBottom,
  'padding-bottom:',
  ';',
  '!important;',
  value => [value, 'px'],
  value => value
)
testIllegalValuesOn(paddingBottom)
