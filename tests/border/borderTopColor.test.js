import { borderTopColor } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

borderTopColor.name_ = 'borderTopColor'
testStringValuesOn(
  borderTopColor,
  'border-top-color:',
  ';',
  '!important;',
  value => value
)
testNumberValuesOn(
  borderTopColor,
  'border-top-color:',
  ';',
  '!important;',
  value => ['#', value]
)
testObjectValuesOn(
  borderTopColor,
  'border-top-color:',
  ';',
  '!important;',
  value => ['#', value],
  value => value
)
testIllegalValuesOn(borderTopColor)
