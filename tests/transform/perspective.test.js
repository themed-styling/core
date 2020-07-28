import { perspective } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

perspective.name_ = 'perspective'
testStringValuesOn(
  perspective,
  'transform:perspective(',
  ');',
  ')!important;',
  value => value
)
testNumberValuesOn(
  perspective,
  'transform:perspective(',
  ');',
  ')!important;',
  value => value
)
testObjectValuesOn(
  perspective,
  'transform:perspective(',
  ');',
  ')!important;',
  value => value,
  value => value
)
testIllegalValuesOn(perspective)
