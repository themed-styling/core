import { gridGap } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

gridGap.name_ = 'gridGap'
testStringValuesOn(gridGap, 'grid-gap:', ';', '!important;', value => value)
testNumberValuesOn(gridGap, 'grid-gap:', ';', '!important;', value => [
  value,
  'px',
])
testObjectValuesOn(
  gridGap,
  'grid-gap:',
  ';',
  '!important;',
  value => [value, 'px'],
  value => value
)
testIllegalValuesOn(gridGap)
