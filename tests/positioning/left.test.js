import { left } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

left.name_ = 'left'
testStringValuesOn(left, 'left:', ';', '!important;', value => value)
testNumberValuesOn(left, 'left:', ';', '!important;', value => [value, 'px'])
testObjectValuesOn(
  left,
  'left:',
  ';',
  '!important;',
  value => [value, 'px'],
  value => value
)
testIllegalValuesOn(left)
