import { alignSelf } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

alignSelf.name_ = 'alignSelf'
testStringValuesOn(alignSelf, 'align-self:', ';', '!important;', value => value)
testNumberValuesOn(alignSelf, 'align-self:', ';', '!important;', value => value)
testObjectValuesOn(
  alignSelf,
  'align-self:',
  ';',
  '!important;',
  value => value,
  value => value
)
testIllegalValuesOn(alignSelf)
