import { borderTopRightRadius } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

borderTopRightRadius.name_ = 'borderTopRightRadius'
testStringValuesOn(
  borderTopRightRadius,
  'border-top-right-radius:',
  ';',
  '!important;',
  value => value
)
testNumberValuesOn(
  borderTopRightRadius,
  'border-top-right-radius:',
  ';',
  '!important;',
  value => [value, 'px']
)
testObjectValuesOn(
  borderTopRightRadius,
  'border-top-right-radius:',
  ';',
  '!important;',
  value => [value, 'px'],
  value => value
)
testIllegalValuesOn(borderTopRightRadius)
