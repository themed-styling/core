import { right } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

right.name_ = 'right'
testStringValuesOn(right, 'right:', ';', '!important;', value => value)
testNumberValuesOn(right, 'right:', ';', '!important;', value => [value, 'px'])
testObjectValuesOn(
  right,
  'right:',
  ';',
  '!important;',
  value => [value, 'px'],
  value => value
)
testIllegalValuesOn(right)
