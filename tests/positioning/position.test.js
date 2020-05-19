import position from '../../src/lib/positioning/position'
import { coreTest } from '../utilities'

test('constructs array (string)', () => {
  coreTest(
    position('relative')({}),
    [['position', ':'], 'relative', ';'],
    'position:relative;'
  )
  coreTest(
    position('absolute')({}),
    [['position', ':'], 'absolute', ';'],
    'position:absolute;'
  )
})
