import { height } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

height.name_ = 'height'
testStringValuesOn(height, 'height:', ';', '!important;', value => value)
testNumberValuesOn(height, 'height:', ';', '!important;', value => [
  value,
  'px',
])
testObjectValuesOn(
  height,
  'height:',
  ';',
  '!important;',
  value => [value, 'px'],
  value => value
)
testIllegalValuesOn(height)
