import { borderTop } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

borderTop.name_ = 'borderTop'
testStringValuesOn(borderTop, 'border-top:', ';', '!important;', value => value)
testNumberValuesOn(borderTop, 'border-top:', ';', '!important;', value => value)
testObjectValuesOn(
  borderTop,
  'border-top:',
  ';',
  '!important;',
  value => value,
  value => value
)
testIllegalValuesOn(borderTop)
