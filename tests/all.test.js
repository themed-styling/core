import * as coreFunctions from '../src'
import { color } from '../src'

import {
  testStringValuesOn,
  testNumberValuesOn,
  testIllegalValuesOn,
} from './utilities'

const colorFunctions = { color }

Object.entries(colorFunctions).map(([key, fn], index) => {
  fn.name_ = key
  testStringValuesOn(
    fn,
    `${key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()}:`,
    ';',
    '!important;'
  )
  testNumberValuesOn(
    fn,
    `${key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()}:`,
    ';',
    '!important;',
    value => `#${value}`
  )
  testIllegalValuesOn(fn)
})
