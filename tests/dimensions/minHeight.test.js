import { minHeight } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

minHeight.name_ = 'minHeight'
testStringValuesOn(minHeight, 'min-height:', ';', '!important;', value => value)
testNumberValuesOn(minHeight, 'min-height:', ';', '!important;', value => [
  value,
  'px',
])
testObjectValuesOn(
  minHeight,
  'min-height:',
  ';',
  '!important;',
  value => [value, 'px'],
  value => value
)
testIllegalValuesOn(minHeight)
