import { alignItems } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

alignItems.name_ = 'alignItems'
testStringValuesOn(
  alignItems,
  'align-items:',
  ';',
  '!important;',
  value => value
)
testNumberValuesOn(
  alignItems,
  'align-items:',
  ';',
  '!important;',
  value => value
)
testObjectValuesOn(
  alignItems,
  'align-items:',
  ';',
  '!important;',
  value => value,
  value => value
)
testIllegalValuesOn(alignItems)
