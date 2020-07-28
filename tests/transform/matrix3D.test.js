import { matrix3D } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

matrix3D.name_ = 'matrix3D'
testStringValuesOn(
  matrix3D,
  'transform:matrix3d(',
  ');',
  ')!important;',
  value => value
)
testNumberValuesOn(
  matrix3D,
  'transform:matrix3d(',
  ');',
  ')!important;',
  value => value
)
testObjectValuesOn(
  matrix3D,
  'transform:matrix3d(',
  ');',
  ')!important;',
  value => value,
  value => value
)
testIllegalValuesOn(matrix3D)
