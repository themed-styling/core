import { sepia } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

sepia.name_ = 'sepia'
testStringValuesOn(sepia, 'filter:sepia(', ');', ')!important;', value => value)
testNumberValuesOn(sepia, 'filter:sepia(', ');', ')!important;', value => {
  if (value <= 1) {
    return [value * 100, '%']
  }
  return [value, '%']
})
testObjectValuesOn(
  sepia,
  'filter:sepia(',
  ');',
  ')!important;',
  value => {
    if (value <= 1) {
      return [value * 100, '%']
    }
    return [value, '%']
  },
  value => value
)
testIllegalValuesOn(sepia)
