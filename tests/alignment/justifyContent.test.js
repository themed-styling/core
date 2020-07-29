import { justifyContent } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

justifyContent.name_ = 'justifyContent'
testStringValuesOn(
  justifyContent,
  'justify-content:',
  ';',
  '!important;',
  value => value
)
testNumberValuesOn(
  justifyContent,
  'justify-content:',
  ';',
  '!important;',
  value => value
)
testObjectValuesOn(
  justifyContent,
  'justify-content:',
  ';',
  '!important;',
  value => value,
  value => value
)
testIllegalValuesOn(justifyContent)
