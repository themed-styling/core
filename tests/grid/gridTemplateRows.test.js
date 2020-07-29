import { gridTemplateRows } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

gridTemplateRows.name_ = 'gridTemplateRows'
testStringValuesOn(
  gridTemplateRows,
  'grid-template-rows:',
  ';',
  '!important;',
  value => value
)
testNumberValuesOn(
  gridTemplateRows,
  'grid-template-rows:',
  ';',
  '!important;',
  value => value
)
testObjectValuesOn(
  gridTemplateRows,
  'grid-template-rows:',
  ';',
  '!important;',
  value => value,
  value => value
)
testIllegalValuesOn(gridTemplateRows)
