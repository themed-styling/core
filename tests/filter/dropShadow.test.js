import { dropShadow } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

dropShadow.name_ = 'dropShadow'
testStringValuesOn(
  dropShadow,
  'filter:drop-shadow(',
  ');',
  ')!important;',
  value => value
)
testNumberValuesOn(
  dropShadow,
  'filter:drop-shadow(',
  ');',
  ')!important;',
  value => value
)
testObjectValuesOn(
  dropShadow,
  'filter:drop-shadow(',
  ');',
  ')!important;',
  value => value,
  value => value
)
testIllegalValuesOn(dropShadow)
