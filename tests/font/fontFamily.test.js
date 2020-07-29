import { fontFamily } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

fontFamily.name_ = 'fontFamily'
testStringValuesOn(
  fontFamily,
  'font-family:',
  ';',
  '!important;',
  value => value
)
testNumberValuesOn(
  fontFamily,
  'font-family:',
  ';',
  '!important;',
  value => value
)
testObjectValuesOn(
  fontFamily,
  'font-family:',
  ';',
  '!important;',
  value => value,
  value => value
)
testIllegalValuesOn(fontFamily)
