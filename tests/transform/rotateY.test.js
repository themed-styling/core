import { rotateY } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

rotateY.name_ = 'rotateY'
testStringValuesOn(
  rotateY,
  'transform:rotateY(',
  ');',
  ')!important;',
  value => value
)
testNumberValuesOn(
  rotateY,
  'transform:rotateY(',
  ');',
  ')!important;',
  value => [value, 'deg']
)
testObjectValuesOn(
  rotateY,
  'transform:rotateY(',
  ');',
  ')!important;',
  value => [value, 'deg'],
  value => value
)
testIllegalValuesOn(rotateY)
