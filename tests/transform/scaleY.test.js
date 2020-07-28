import { scaleY } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

scaleY.name_ = 'scaleY'
testStringValuesOn(
  scaleY,
  'transform:scaleY(',
  ');',
  ')!important;',
  value => value
)
testNumberValuesOn(
  scaleY,
  'transform:scaleY(',
  ');',
  ')!important;',
  value => value
)
testObjectValuesOn(
  scaleY,
  'transform:scaleY(',
  ');',
  ')!important;',
  value => value,
  value => value
)
testIllegalValuesOn(scaleY)
