import gridRowGap from '../../src/lib/grid/gridRowGap'
import { coreTest } from '../utilities'

test('constructs array (number)', () => {
  coreTest(
    gridRowGap(20)({}),
    [['grid-row-gap', ':'], '20px', ';'],
    'grid-row-gap:20px;'
  )
})

test('constructs array (string)', () => {
  coreTest(
    gridRowGap('1rem 2rem')({}),
    [['grid-row-gap', ':'], '1rem 2rem', ';'],
    'grid-row-gap:1rem 2rem;'
  )
})
