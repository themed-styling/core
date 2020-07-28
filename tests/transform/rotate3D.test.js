import { rotate3D } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

rotate3D.name_ = 'rotate3D'
testStringValuesOn(
  rotate3D,
  'transform:rotate3d(',
  ');',
  ')!important;',
  value => value
)
testNumberValuesOn(
  rotate3D,
  'transform:rotate3d(',
  ');',
  ')!important;',
  value => value
)
testObjectValuesOn(
  rotate3D,
  'transform:rotate3d(',
  ');',
  ')!important;',
  value => value,
  value => value
)
testIllegalValuesOn(rotate3D)
