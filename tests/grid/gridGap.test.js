import gridGap from '../../src/lib/grid/gridGap'
import { coreTest } from '../utilities'

test('constructs array (number)', () => {
  coreTest(gridGap(20)({}), [['grid-gap', ':'], '20px', ';'], 'grid-gap:20px;')
})

test('constructs array (string)', () => {
  coreTest(
    gridGap('1rem 2rem')({}),
    [['grid-gap', ':'], '1rem 2rem', ';'],
    'grid-gap:1rem 2rem;'
  )
})
