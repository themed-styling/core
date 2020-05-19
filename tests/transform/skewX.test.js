import skewX from '../../src/lib/transform/skewX'
import { coreTest } from '../utilities'

test('constructs array (number)', () => {
  coreTest(
    skewX(18)({}),
    ['transform:skewX(', [18, 'deg'], ');'],
    'transform:skewX(18deg);'
  )
})

test('constructs array (string)', () => {
  coreTest(
    skewX('2rad')({}),
    ['transform:skewX(', '2rad', ');'],
    'transform:skewX(2rad);'
  )
})
