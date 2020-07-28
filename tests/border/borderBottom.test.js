import { borderBottom } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

borderBottom.name_ = 'borderBottom'
testStringValuesOn(
  borderBottom,
  'border-bottom:',
  ';',
  '!important;',
  value => value
)
testNumberValuesOn(
  borderBottom,
  'border-bottom:',
  ';',
  '!important;',
  value => value
)
testObjectValuesOn(
  borderBottom,
  'border-bottom:',
  ';',
  '!important;',
  value => value,
  value => value
)
testIllegalValuesOn(borderBottom)
