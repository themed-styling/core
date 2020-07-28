import { borderLeft } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

borderLeft.name_ = 'borderLeft'
testStringValuesOn(
  borderLeft,
  'border-left:',
  ';',
  '!important;',
  value => value
)
testNumberValuesOn(
  borderLeft,
  'border-left:',
  ';',
  '!important;',
  value => value
)
testObjectValuesOn(
  borderLeft,
  'border-left:',
  ';',
  '!important;',
  value => value,
  value => value
)
testIllegalValuesOn(borderLeft)
