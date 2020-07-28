import { width } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

width.name_ = 'width'
testStringValuesOn(width, 'width:', ';', '!important;', value => value)
testNumberValuesOn(width, 'width:', ';', '!important;', value => [value, 'px'])
testObjectValuesOn(
  width,
  'width:',
  ';',
  '!important;',
  value => [value, 'px'],
  value => value
)
testIllegalValuesOn(width)
