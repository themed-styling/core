import { backgroundColor } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

backgroundColor.name_ = 'backgroundColor'
testStringValuesOn(
  backgroundColor,
  'background-color:',
  ';',
  '!important;',
  value => value
)
testNumberValuesOn(
  backgroundColor,
  'background-color:',
  ';',
  '!important;',
  value => ['#', value]
)
testObjectValuesOn(
  backgroundColor,
  'background-color:',
  ';',
  '!important;',
  value => ['#', value],
  value => value
)
testIllegalValuesOn(backgroundColor)
