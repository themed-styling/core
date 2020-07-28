import { scale3D } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

scale3D.name_ = 'scale3D'
testStringValuesOn(
  scale3D,
  'transform:scale3d(',
  ');',
  ')!important;',
  value => value
)
testNumberValuesOn(
  scale3D,
  'transform:scale3d(',
  ');',
  ')!important;',
  value => value
)
testObjectValuesOn(
  scale3D,
  'transform:scale3d(',
  ');',
  ')!important;',
  value => value,
  value => value
)
testIllegalValuesOn(scale3D)
