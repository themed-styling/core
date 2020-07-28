import { filterURL } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

filterURL.name_ = 'filterURL'
testStringValuesOn(
  filterURL,
  'filter:url(',
  ');',
  ')!important;',
  value => value
)
testNumberValuesOn(
  filterURL,
  'filter:url(',
  ');',
  ')!important;',
  value => value
)
testObjectValuesOn(
  filterURL,
  'filter:url(',
  ');',
  ')!important;',
  value => value,
  value => value
)
testIllegalValuesOn(filterURL)
