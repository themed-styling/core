import { blur } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

blur.name_ = 'blur'
testStringValuesOn(blur, 'filter:blur(', ');', ')!important;', value => value)
testNumberValuesOn(blur, 'filter:blur(', ');', ')!important;', value => [
  value,
  'px',
])
testObjectValuesOn(
  blur,
  'filter:blur(',
  ');',
  ')!important;',
  value => [value, 'px'],
  value => value
)
testIllegalValuesOn(blur)
