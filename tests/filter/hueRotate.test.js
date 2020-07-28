import { hueRotate } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

hueRotate.name_ = 'hueRotate'
testStringValuesOn(
  hueRotate,
  'filter:hue-rotate(',
  ');',
  ')!important;',
  value => value
)
testNumberValuesOn(
  hueRotate,
  'filter:hue-rotate(',
  ');',
  ')!important;',
  value => [value, 'deg']
)
testObjectValuesOn(
  hueRotate,
  'filter:hue-rotate(',
  ');',
  ')!important;',
  value => [value, 'deg'],
  value => value
)
testIllegalValuesOn(hueRotate)
