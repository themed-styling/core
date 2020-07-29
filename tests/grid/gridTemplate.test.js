import { gridTemplate } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

gridTemplate.name_ = 'gridTemplate'
testStringValuesOn(
  gridTemplate,
  'grid-template:',
  ';',
  '!important;',
  value => value
)
testNumberValuesOn(
  gridTemplate,
  'grid-template:',
  ';',
  '!important;',
  value => value
)
testObjectValuesOn(
  gridTemplate,
  'grid-template:',
  ';',
  '!important;',
  value => value,
  value => value
)
testIllegalValuesOn(gridTemplate)
