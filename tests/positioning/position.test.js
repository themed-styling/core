import { position } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

position.name_ = 'position'
testStringValuesOn(position, 'position:', ';', '!important;', value => value)
testNumberValuesOn(position, 'position:', ';', '!important;', value => value)
testObjectValuesOn(
  position,
  'position:',
  ';',
  '!important;',
  value => value,
  value => value
)
testIllegalValuesOn(position)
