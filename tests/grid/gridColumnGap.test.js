import { gridColumnGap } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

gridColumnGap.name_ = 'gridColumnGap'
testStringValuesOn(
  gridColumnGap,
  'grid-column-gap:',
  ';',
  '!important;',
  value => value
)
testNumberValuesOn(
  gridColumnGap,
  'grid-column-gap:',
  ';',
  '!important;',
  value => [value, 'px']
)
testObjectValuesOn(
  gridColumnGap,
  'grid-column-gap:',
  ';',
  '!important;',
  value => [value, 'px'],
  value => value
)
testIllegalValuesOn(gridColumnGap)
