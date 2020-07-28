import { rotate } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

rotate.name_ = 'rotate'
testStringValuesOn(
  rotate,
  'transform:rotate(',
  ');',
  ')!important;',
  value => value
)
testNumberValuesOn(rotate, 'transform:rotate(', ');', ')!important;', value => [
  value,
  'deg',
])
testObjectValuesOn(
  rotate,
  'transform:rotate(',
  ');',
  ')!important;',
  value => [value, 'deg'],
  value => value
)
testIllegalValuesOn(rotate)
