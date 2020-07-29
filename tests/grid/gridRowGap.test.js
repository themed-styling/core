import { gridRowGap } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

gridRowGap.name_ = 'gridRowGap'
testStringValuesOn(
  gridRowGap,
  'grid-row-gap:',
  ';',
  '!important;',
  value => value
)
testNumberValuesOn(gridRowGap, 'grid-row-gap:', ';', '!important;', value => [
  value,
  'px',
])
testObjectValuesOn(
  gridRowGap,
  'grid-row-gap:',
  ';',
  '!important;',
  value => [value, 'px'],
  value => value
)
testIllegalValuesOn(gridRowGap)
