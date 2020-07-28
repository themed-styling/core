import { skewY } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

skewY.name_ = 'skewY'
testStringValuesOn(
  skewY,
  'transform:skewY(',
  ');',
  ')!important;',
  value => value
)
testNumberValuesOn(skewY, 'transform:skewY(', ');', ')!important;', value => [
  value,
  'deg',
])
testObjectValuesOn(
  skewY,
  'transform:skewY(',
  ');',
  ')!important;',
  value => [value, 'deg'],
  value => value
)
testIllegalValuesOn(skewY)
