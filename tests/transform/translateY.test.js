import { translateY } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

translateY.name_ = 'translateY'
testStringValuesOn(
  translateY,
  'transform:translateY(',
  ');',
  ')!important;',
  value => value
)
testNumberValuesOn(
  translateY,
  'transform:translateY(',
  ');',
  ')!important;',
  value => [value, 'px']
)
testObjectValuesOn(
  translateY,
  'transform:translateY(',
  ');',
  ')!important;',
  value => [value, 'px'],
  value => value
)
testIllegalValuesOn(translateY)
