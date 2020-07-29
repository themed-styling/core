import { grid } from '../../src/'
import {
  testStringValuesOn,
  testNumberValuesOn,
  testObjectValuesOn,
  testIllegalValuesOn,
} from '../utilities'

grid.name_ = 'grid'
testStringValuesOn(grid, 'grid:', ';', '!important;', value => value)
testNumberValuesOn(grid, 'grid:', ';', '!important;', value => value)
testObjectValuesOn(
  grid,
  'grid:',
  ';',
  '!important;',
  value => value,
  value => value
)
testIllegalValuesOn(grid)
