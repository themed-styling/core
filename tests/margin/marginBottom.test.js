import { marginBottom } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

marginBottom.name_ = 'marginBottom'
testStringValuesOn(
  marginBottom,
  'margin-bottom:',
  ';',
  '!important;',
  value => value
)
testNumberValuesOn(
  marginBottom,
  'margin-bottom:',
  ';',
  '!important;',
  value => [value, 'px']
)
testObjectValuesOn(
  marginBottom,
  'margin-bottom:',
  ';',
  '!important;',
  value => [value, 'px'],
  value => value
)
testIllegalValuesOn(marginBottom)
