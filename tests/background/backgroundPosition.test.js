import { backgroundPosition } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

backgroundPosition.name_ = 'backgroundPosition'
testStringValuesOn(
  backgroundPosition,
  'background-position:',
  ';',
  '!important;',
  value => value
)
testNumberValuesOn(
  backgroundPosition,
  'background-position:',
  ';',
  '!important;',
  value => value
)
testObjectValuesOn(
  backgroundPosition,
  'background-position:',
  ';',
  '!important;',
  value => value,
  value => value
)
testIllegalValuesOn(backgroundPosition)
