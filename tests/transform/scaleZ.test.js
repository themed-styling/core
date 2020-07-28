import { scaleZ } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

scaleZ.name_ = 'scaleZ'
testStringValuesOn(
  scaleZ,
  'transform:scaleZ(',
  ');',
  ')!important;',
  value => value
)
testNumberValuesOn(
  scaleZ,
  'transform:scaleZ(',
  ');',
  ')!important;',
  value => value
)
testObjectValuesOn(
  scaleZ,
  'transform:scaleZ(',
  ');',
  ')!important;',
  value => value,
  value => value
)
testIllegalValuesOn(scaleZ)
