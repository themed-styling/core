import { gridTemplateColumns } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

gridTemplateColumns.name_ = 'gridTemplateColumns'
testStringValuesOn(
  gridTemplateColumns,
  'grid-template-columns:',
  ';',
  '!important;',
  value => value
)
testNumberValuesOn(
  gridTemplateColumns,
  'grid-template-columns:',
  ';',
  '!important;',
  value => value
)
testObjectValuesOn(
  gridTemplateColumns,
  'grid-template-columns:',
  ';',
  '!important;',
  value => value,
  value => value
)
testIllegalValuesOn(gridTemplateColumns)
