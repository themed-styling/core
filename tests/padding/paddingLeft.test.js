import { paddingLeft } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

paddingLeft.name_ = 'paddingLeft'
testStringValuesOn(
  paddingLeft,
  'padding-left:',
  ';',
  '!important;',
  value => value
)
testNumberValuesOn(paddingLeft, 'padding-left:', ';', '!important;', value => [
  value,
  'px',
])
testObjectValuesOn(
  paddingLeft,
  'padding-left:',
  ';',
  '!important;',
  value => [value, 'px'],
  value => value
)
testIllegalValuesOn(paddingLeft)
