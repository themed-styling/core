import { matrix } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

matrix.name_ = 'matrix'
testStringValuesOn(
  matrix,
  'transform:matrix(',
  ');',
  ')!important;',
  value => value
)
testNumberValuesOn(
  matrix,
  'transform:matrix(',
  ');',
  ')!important;',
  value => value
)
testObjectValuesOn(
  matrix,
  'transform:matrix(',
  ');',
  ')!important;',
  value => value,
  value => value
)
testIllegalValuesOn(matrix)
