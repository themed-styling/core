import { borderRadius } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

borderRadius.name_ = 'borderRadius'
testStringValuesOn(
  borderRadius,
  'border-radius:',
  ';',
  '!important;',
  value => value
)
testNumberValuesOn(
  borderRadius,
  'border-radius:',
  ';',
  '!important;',
  value => [value, 'px']
)
testObjectValuesOn(
  borderRadius,
  'border-radius:',
  ';',
  '!important;',
  value => [value, 'px'],
  value => value
)
testIllegalValuesOn(borderRadius)
