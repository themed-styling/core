import { borderRight } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

borderRight.name_ = 'borderRight'
testStringValuesOn(
  borderRight,
  'border-right:',
  ';',
  '!important;',
  value => value
)
testNumberValuesOn(
  borderRight,
  'border-right:',
  ';',
  '!important;',
  value => value
)
testObjectValuesOn(
  borderRight,
  'border-right:',
  ';',
  '!important;',
  value => value,
  value => value
)
testIllegalValuesOn(borderRight)
