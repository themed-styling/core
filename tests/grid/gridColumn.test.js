import { gridColumn } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

gridColumn.name_ = 'gridColumn'
testStringValuesOn(
  gridColumn,
  'grid-column:',
  ';',
  '!important;',
  value => value
)
testNumberValuesOn(
  gridColumn,
  'grid-column:',
  ';',
  '!important;',
  value => value
)
testObjectValuesOn(
  gridColumn,
  'grid-column:',
  ';',
  '!important;',
  value => value,
  value => value
)
testIllegalValuesOn(gridColumn)
