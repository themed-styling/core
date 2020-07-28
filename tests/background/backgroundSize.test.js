import { backgroundSize } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

backgroundSize.name_ = 'backgroundSize'
testStringValuesOn(
  backgroundSize,
  'background-size:',
  ';',
  '!important;',
  value => value
)
testNumberValuesOn(
  backgroundSize,
  'background-size:',
  ';',
  '!important;',
  value => [value, 'px']
)
testObjectValuesOn(
  backgroundSize,
  'background-size:',
  ';',
  '!important;',
  value => [value, 'px'],
  value => value
)
testIllegalValuesOn(backgroundSize)
