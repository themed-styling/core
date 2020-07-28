import { filter } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

filter.name_ = 'filter'
testStringValuesOn(filter, 'filter:', ';', '!important;', value => value)
testNumberValuesOn(filter, 'filter:', ';', '!important;', value => value)
testObjectValuesOn(
  filter,
  'filter:',
  ';',
  '!important;',
  value => value,
  value => value
)
testIllegalValuesOn(filter)
