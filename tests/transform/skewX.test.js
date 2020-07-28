import { skewX } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

skewX.name_ = 'skewX'
testStringValuesOn(
  skewX,
  'transform:skewX(',
  ');',
  ')!important;',
  value => value
)
testNumberValuesOn(skewX, 'transform:skewX(', ');', ')!important;', value => [
  value,
  'deg',
])
testObjectValuesOn(
  skewX,
  'transform:skewX(',
  ');',
  ')!important;',
  value => [value, 'deg'],
  value => value
)
testIllegalValuesOn(skewX)
