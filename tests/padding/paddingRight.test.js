import { paddingRight } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

paddingRight.name_ = 'paddingRight'
testStringValuesOn(
  paddingRight,
  'padding-right:',
  ';',
  '!important;',
  value => value
)
testNumberValuesOn(
  paddingRight,
  'padding-right:',
  ';',
  '!important;',
  value => [value, 'px']
)
testObjectValuesOn(
  paddingRight,
  'padding-right:',
  ';',
  '!important;',
  value => [value, 'px'],
  value => value
)
testIllegalValuesOn(paddingRight)
