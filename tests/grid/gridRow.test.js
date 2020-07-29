import { gridRow } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

gridRow.name_ = 'gridRow'
testStringValuesOn(gridRow, 'grid-row:', ';', '!important;', value => value)
testNumberValuesOn(gridRow, 'grid-row:', ';', '!important;', value => value)
testObjectValuesOn(
  gridRow,
  'grid-row:',
  ';',
  '!important;',
  value => value,
  value => value
)
testIllegalValuesOn(gridRow)
