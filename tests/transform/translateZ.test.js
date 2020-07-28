import { translateZ } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

translateZ.name_ = 'translateZ'
testStringValuesOn(
  translateZ,
  'transform:translateZ(',
  ');',
  ')!important;',
  value => value
)
testNumberValuesOn(
  translateZ,
  'transform:translateZ(',
  ');',
  ')!important;',
  value => [value, 'px']
)
testObjectValuesOn(
  translateZ,
  'transform:translateZ(',
  ');',
  ')!important;',
  value => [value, 'px'],
  value => value
)
testIllegalValuesOn(translateZ)
