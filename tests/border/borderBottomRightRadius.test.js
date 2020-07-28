import { borderBottomRightRadius } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

borderBottomRightRadius.name_ = 'borderBottomRightRadius'
testStringValuesOn(
  borderBottomRightRadius,
  'border-bottom-right-radius:',
  ';',
  '!important;',
  value => value
)
testNumberValuesOn(
  borderBottomRightRadius,
  'border-bottom-right-radius:',
  ';',
  '!important;',
  value => [value, 'px']
)
testObjectValuesOn(
  borderBottomRightRadius,
  'border-bottom-right-radius:',
  ';',
  '!important;',
  value => [value, 'px'],
  value => value
)
testIllegalValuesOn(borderBottomRightRadius)
