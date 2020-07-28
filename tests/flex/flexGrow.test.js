import { flexGrow } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

flexGrow.name_ = 'flexGrow'
testStringValuesOn(flexGrow, 'flex-grow:', ';', '!important;', value => value)
testNumberValuesOn(flexGrow, 'flex-grow:', ';', '!important;', value => value)
testObjectValuesOn(
  flexGrow,
  'flex-grow:',
  ';',
  '!important;',
  value => value,
  value => value
)
testIllegalValuesOn(flexGrow)
