import { translate } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

translate.name_ = 'translate'
testStringValuesOn(
  translate,
  'transform:translate(',
  ');',
  ')!important;',
  value => value
)
testNumberValuesOn(
  translate,
  'transform:translate(',
  ');',
  ')!important;',
  value => value
)
testObjectValuesOn(
  translate,
  'transform:translate(',
  ');',
  ')!important;',
  value => value,
  value => value
)
testIllegalValuesOn(translate)
