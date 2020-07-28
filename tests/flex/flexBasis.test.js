import { flexBasis } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

flexBasis.name_ = 'flexBasis'
testStringValuesOn(flexBasis, 'flex-basis:', ';', '!important;', value => value)
testNumberValuesOn(flexBasis, 'flex-basis:', ';', '!important;', value => value)
testObjectValuesOn(
  flexBasis,
  'flex-basis:',
  ';',
  '!important;',
  value => value,
  value => value
)
testIllegalValuesOn(flexBasis)
