import { gridColumnEnd } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

gridColumnEnd.name_ = 'gridColumnEnd'
testStringValuesOn(
  gridColumnEnd,
  'grid-column-end:',
  ';',
  '!important;',
  value => value
)
testNumberValuesOn(
  gridColumnEnd,
  'grid-column-end:',
  ';',
  '!important;',
  value => value
)
testObjectValuesOn(
  gridColumnEnd,
  'grid-column-end:',
  ';',
  '!important;',
  value => value,
  value => value
)
testIllegalValuesOn(gridColumnEnd)
