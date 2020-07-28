import { translate3D } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

translate3D.name_ = 'translate3D'
testStringValuesOn(
  translate3D,
  'transform:translate3d(',
  ');',
  ')!important;',
  value => value
)
testNumberValuesOn(
  translate3D,
  'transform:translate3d(',
  ');',
  ')!important;',
  value => value
)
testObjectValuesOn(
  translate3D,
  'transform:translate3d(',
  ');',
  ')!important;',
  value => value,
  value => value
)
testIllegalValuesOn(translate3D)
