import { flexShrink } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

flexShrink.name_ = 'flexShrink'
testStringValuesOn(
  flexShrink,
  'flex-shrink:',
  ';',
  '!important;',
  value => value
)
testNumberValuesOn(
  flexShrink,
  'flex-shrink:',
  ';',
  '!important;',
  value => value
)
testObjectValuesOn(
  flexShrink,
  'flex-shrink:',
  ';',
  '!important;',
  value => value,
  value => value
)
testIllegalValuesOn(flexShrink)
