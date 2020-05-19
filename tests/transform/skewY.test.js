import skewY from '../../src/lib/transform/skewY'
import { coreTest } from '../utilities'

test('constructs array (number)', () => {
  coreTest(
    skewY(18)({}),
    ['transform:skewY(', [18, 'deg'], ');'],
    'transform:skewY(18deg);'
  )
})

test('constructs array (string)', () => {
  coreTest(
    skewY('2rad')({}),
    ['transform:skewY(', '2rad', ');'],
    'transform:skewY(2rad);'
  )
})
