import { marginLeft } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

marginLeft.name_ = 'marginLeft'
testStringValuesOn(
  marginLeft,
  'margin-left:',
  ';',
  '!important;',
  value => value
)
testNumberValuesOn(marginLeft, 'margin-left:', ';', '!important;', value => [
  value,
  'px',
])
testObjectValuesOn(
  marginLeft,
  'margin-left:',
  ';',
  '!important;',
  value => [value, 'px'],
  value => value
)
testIllegalValuesOn(marginLeft)
