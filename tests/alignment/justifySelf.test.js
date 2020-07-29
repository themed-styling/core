import { justifySelf } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

justifySelf.name_ = 'justifySelf'
testStringValuesOn(
  justifySelf,
  'justify-self:',
  ';',
  '!important;',
  value => value
)
testNumberValuesOn(
  justifySelf,
  'justify-self:',
  ';',
  '!important;',
  value => value
)
testObjectValuesOn(
  justifySelf,
  'justify-self:',
  ';',
  '!important;',
  value => value,
  value => value
)
testIllegalValuesOn(justifySelf)
