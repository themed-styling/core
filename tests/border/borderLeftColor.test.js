import { borderLeftColor } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

borderLeftColor.name_ = 'borderLeftColor'
testStringValuesOn(
  borderLeftColor,
  'border-left-color:',
  ';',
  '!important;',
  value => value
)
testNumberValuesOn(
  borderLeftColor,
  'border-left-color:',
  ';',
  '!important;',
  value => ['#', value]
)
testObjectValuesOn(
  borderLeftColor,
  'border-left-color:',
  ';',
  '!important;',
  value => ['#', value],
  value => value
)
testIllegalValuesOn(borderLeftColor)
