import { gridRowStart } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

gridRowStart.name_ = 'gridRowStart'
testStringValuesOn(
  gridRowStart,
  'grid-row-start:',
  ';',
  '!important;',
  value => value
)
testNumberValuesOn(
  gridRowStart,
  'grid-row-start:',
  ';',
  '!important;',
  value => value
)
testObjectValuesOn(
  gridRowStart,
  'grid-row-start:',
  ';',
  '!important;',
  value => value,
  value => value
)
testIllegalValuesOn(gridRowStart)
