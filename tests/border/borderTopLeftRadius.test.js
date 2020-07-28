import { borderTopLeftRadius } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

borderTopLeftRadius.name_ = 'borderTopLeftRadius'
testStringValuesOn(
  borderTopLeftRadius,
  'border-top-left-radius:',
  ';',
  '!important;',
  value => value
)
testNumberValuesOn(
  borderTopLeftRadius,
  'border-top-left-radius:',
  ';',
  '!important;',
  value => [value, 'px']
)
testObjectValuesOn(
  borderTopLeftRadius,
  'border-top-left-radius:',
  ';',
  '!important;',
  value => [value, 'px'],
  value => value
)
testIllegalValuesOn(borderTopLeftRadius)
