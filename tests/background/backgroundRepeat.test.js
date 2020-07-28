import { backgroundRepeat } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

backgroundRepeat.name_ = 'backgroundRepeat'
testStringValuesOn(
  backgroundRepeat,
  'background-repeat:',
  ';',
  '!important;',
  value => value
)
testNumberValuesOn(
  backgroundRepeat,
  'background-repeat:',
  ';',
  '!important;',
  value => value
)
testObjectValuesOn(
  backgroundRepeat,
  'background-repeat:',
  ';',
  '!important;',
  value => value,
  value => value
)
testIllegalValuesOn(backgroundRepeat)
