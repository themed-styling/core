import { skew } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

skew.name_ = 'skew'
testStringValuesOn(
  skew,
  'transform:skew(',
  ');',
  ')!important;',
  value => value
)
testNumberValuesOn(
  skew,
  'transform:skew(',
  ');',
  ')!important;',
  value => value
)
testObjectValuesOn(
  skew,
  'transform:skew(',
  ');',
  ')!important;',
  value => value,
  value => value
)
testIllegalValuesOn(skew)
