import flexBasis from '../../src/lib/flex/flexBasis'
import { coreTest } from '../utilities'

test('constructs array (number)', () => {
  coreTest(
    flexBasis(20)({}),
    [['flex-basis', ':'], '20px', ';'],
    'flex-basis:20px;'
  )
})

test('constructs array (string)', () => {
  coreTest(
    flexBasis('1rem')({}),
    [['flex-basis', ':'], '1rem', ';'],
    'flex-basis:1rem;'
  )
})
