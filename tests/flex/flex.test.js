import { flex } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

flex.name_ = 'flex'
testStringValuesOn(flex, 'flex:', ';', '!important;', value => value)
testNumberValuesOn(flex, 'flex:', ';', '!important;', value => value)
testObjectValuesOn(
  flex,
  'flex:',
  ';',
  '!important;',
  value => value,
  value => value
)
testIllegalValuesOn(flex)
