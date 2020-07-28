import { rotateX } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

rotateX.name_ = 'rotateX'
testStringValuesOn(
  rotateX,
  'transform:rotateX(',
  ');',
  ')!important;',
  value => value
)
testNumberValuesOn(
  rotateX,
  'transform:rotateX(',
  ');',
  ')!important;',
  value => [value, 'deg']
)
testObjectValuesOn(
  rotateX,
  'transform:rotateX(',
  ');',
  ')!important;',
  value => [value, 'deg'],
  value => value
)
testIllegalValuesOn(rotateX)
