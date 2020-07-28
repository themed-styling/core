import { rotateZ } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

rotateZ.name_ = 'rotateZ'
testStringValuesOn(
  rotateZ,
  'transform:rotateZ(',
  ');',
  ')!important;',
  value => value
)
testNumberValuesOn(
  rotateZ,
  'transform:rotateZ(',
  ');',
  ')!important;',
  value => [value, 'deg']
)
testObjectValuesOn(
  rotateZ,
  'transform:rotateZ(',
  ');',
  ')!important;',
  value => [value, 'deg'],
  value => value
)
testIllegalValuesOn(rotateZ)
