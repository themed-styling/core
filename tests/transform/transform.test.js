import { transform } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

transform.name_ = 'transform'
testStringValuesOn(transform, 'transform:', ';', '!important;', value => value)
testNumberValuesOn(transform, 'transform:', ';', '!important;', value => value)
testObjectValuesOn(
  transform,
  'transform:',
  ';',
  '!important;',
  value => value,
  value => value
)
testIllegalValuesOn(transform)
