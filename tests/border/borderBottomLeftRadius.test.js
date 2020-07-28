import { borderBottomLeftRadius } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

borderBottomLeftRadius.name_ = 'borderBottomLeftRadius'
testStringValuesOn(
  borderBottomLeftRadius,
  'border-bottom-left-radius:',
  ';',
  '!important;',
  value => value
)
testNumberValuesOn(
  borderBottomLeftRadius,
  'border-bottom-left-radius:',
  ';',
  '!important;',
  value => [value, 'px']
)
testObjectValuesOn(
  borderBottomLeftRadius,
  'border-bottom-left-radius:',
  ';',
  '!important;',
  value => [value, 'px'],
  value => value
)
testIllegalValuesOn(borderBottomLeftRadius)
