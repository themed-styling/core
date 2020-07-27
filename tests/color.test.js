import { color } from '../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from './utilities'

color.name_ = 'color'
testStringValuesOn(color, 'color:', ';', '!important;')
testNumberValuesOn(color, 'color:', ';', '!important;', value => `#${value}`)
testObjectValuesOn(color, 'color:', ';', '!important;', value => `#${value}`)
testIllegalValuesOn(color)
