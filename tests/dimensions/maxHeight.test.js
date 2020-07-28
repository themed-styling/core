import { maxHeight } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

maxHeight.name_ = 'maxHeight'
testStringValuesOn(maxHeight, 'max-height:', ';', '!important;', value => value)
testNumberValuesOn(maxHeight, 'max-height:', ';', '!important;', value => [
  value,
  'px',
])
testObjectValuesOn(
  maxHeight,
  'max-height:',
  ';',
  '!important;',
  value => [value, 'px'],
  value => value
)
testIllegalValuesOn(maxHeight)
