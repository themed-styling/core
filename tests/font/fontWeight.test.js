import { fontWeight } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

fontWeight.name_ = 'fontWeight'
testStringValuesOn(
  fontWeight,
  'font-weight:',
  ';',
  '!important;',
  value => value
)
testNumberValuesOn(
  fontWeight,
  'font-weight:',
  ';',
  '!important;',
  value => value
)
testObjectValuesOn(
  fontWeight,
  'font-weight:',
  ';',
  '!important;',
  value => value,
  value => value
)
testIllegalValuesOn(fontWeight)
