import { borderRightColor } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

borderRightColor.name_ = 'borderRightColor'
testStringValuesOn(
  borderRightColor,
  'border-right-color:',
  ';',
  '!important;',
  value => value
)
testNumberValuesOn(
  borderRightColor,
  'border-right-color:',
  ';',
  '!important;',
  value => ['#', value]
)
testObjectValuesOn(
  borderRightColor,
  'border-right-color:',
  ';',
  '!important;',
  value => ['#', value],
  value => value
)
testIllegalValuesOn(borderRightColor)
