import { borderColor } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

borderColor.name_ = 'borderColor'
testStringValuesOn(
  borderColor,
  'border-color:',
  ';',
  '!important;',
  value => value
)
testNumberValuesOn(borderColor, 'border-color:', ';', '!important;', value => [
  '#',
  value,
])
testObjectValuesOn(
  borderColor,
  'border-color:',
  ';',
  '!important;',
  value => ['#', value],
  value => value
)
testIllegalValuesOn(borderColor)
