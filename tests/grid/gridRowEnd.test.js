import { gridRowEnd } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

gridRowEnd.name_ = 'gridRowEnd'
testStringValuesOn(
  gridRowEnd,
  'grid-row-end:',
  ';',
  '!important;',
  value => value
)
testNumberValuesOn(
  gridRowEnd,
  'grid-row-end:',
  ';',
  '!important;',
  value => value
)
testObjectValuesOn(
  gridRowEnd,
  'grid-row-end:',
  ';',
  '!important;',
  value => value,
  value => value
)
testIllegalValuesOn(gridRowEnd)
