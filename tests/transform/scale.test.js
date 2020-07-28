import { scale } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

scale.name_ = 'scale'
testStringValuesOn(
  scale,
  'transform:scale(',
  ');',
  ')!important;',
  value => value
)
testNumberValuesOn(
  scale,
  'transform:scale(',
  ');',
  ')!important;',
  value => value
)
testObjectValuesOn(
  scale,
  'transform:scale(',
  ');',
  ')!important;',
  value => value,
  value => value
)
testIllegalValuesOn(scale)
