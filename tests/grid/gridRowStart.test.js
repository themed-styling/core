import { gridColumnStart } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

gridColumnStart.name_ = 'gridColumnStart'
testStringValuesOn(
  gridColumnStart,
  'grid-column-start:',
  ';',
  '!important;',
  value => value
)
testNumberValuesOn(
  gridColumnStart,
  'grid-column-start:',
  ';',
  '!important;',
  value => value
)
testObjectValuesOn(
  gridColumnStart,
  'grid-column-start:',
  ';',
  '!important;',
  value => value,
  value => value
)
testIllegalValuesOn(gridColumnStart)
