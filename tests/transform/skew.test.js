import skew from '../../src/lib/transform/skew'
import { coreTest } from '../utilities'

test('constructs array (number)', () => {
  coreTest(
    skew(18)({}),
    ['transform:skew(', [18, 'deg'], ');'],
    'transform:skew(18deg);'
  )
})

test('constructs array (string)', () => {
  coreTest(
    skew('36deg,2rad')({}),
    ['transform:skew(', '36deg,2rad', ');'],
    'transform:skew(36deg,2rad);'
  )
})
