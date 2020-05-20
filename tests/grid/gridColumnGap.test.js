import gridColumnGap from '../../src/lib/grid/gridColumnGap'
import { coreTest } from '../utilities'

test('constructs array (number)', () => {
  coreTest(
    gridColumnGap(20)({}),
    [['grid-column-gap', ':'], '20px', ';'],
    'grid-column-gap:20px;'
  )
})

test('constructs array (string)', () => {
  coreTest(
    gridColumnGap('1rem 2rem')({}),
    [['grid-column-gap', ':'], '1rem 2rem', ';'],
    'grid-column-gap:1rem 2rem;'
  )
})
