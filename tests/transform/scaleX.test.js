import { scaleX } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

scaleX.name_ = 'scaleX'
testStringValuesOn(
  scaleX,
  'transform:scaleX(',
  ');',
  ')!important;',
  value => value
)
testNumberValuesOn(
  scaleX,
  'transform:scaleX(',
  ');',
  ')!important;',
  value => value
)
testObjectValuesOn(
  scaleX,
  'transform:scaleX(',
  ');',
  ')!important;',
  value => value,
  value => value
)
testIllegalValuesOn(scaleX)
