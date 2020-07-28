import { borderBottomColor } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

borderBottomColor.name_ = 'borderBottomColor'
testStringValuesOn(
  borderBottomColor,
  'border-bottom-color:',
  ';',
  '!important;',
  value => value
)
testNumberValuesOn(
  borderBottomColor,
  'border-bottom-color:',
  ';',
  '!important;',
  value => ['#', value]
)
testObjectValuesOn(
  borderBottomColor,
  'border-bottom-color:',
  ';',
  '!important;',
  value => ['#', value],
  value => value
)
testIllegalValuesOn(borderBottomColor)
