import { background } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

background.name_ = 'background'
testStringValuesOn(
  background,
  'background:',
  ';',
  '!important;',
  value => value
)
testNumberValuesOn(background, 'background:', ';', '!important;', value => [
  '#',
  value,
])
testObjectValuesOn(
  background,
  'background:',
  ';',
  '!important;',
  value => ['#', value],
  value => value
)
testIllegalValuesOn(background)
