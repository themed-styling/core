import { translateX } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

translateX.name_ = 'translateX'
testStringValuesOn(
  translateX,
  'transform:translateX(',
  ');',
  ')!important;',
  value => value
)
testNumberValuesOn(
  translateX,
  'transform:translateX(',
  ');',
  ')!important;',
  value => [value, 'px']
)
testObjectValuesOn(
  translateX,
  'transform:translateX(',
  ');',
  ')!important;',
  value => [value, 'px'],
  value => value
)
testIllegalValuesOn(translateX)
