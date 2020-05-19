import scale from '../../src/lib/transform/scale'
import { coreTest } from '../utilities'

test('constructs array (number)', () => {
  coreTest(
    scale(1.5)({}),
    ['transform:scale(', 1.5, ');'],
    'transform:scale(1.5);'
  )
})

test('constructs array (string)', () => {
  coreTest(
    scale('1.5,2')({}),
    ['transform:scale(', '1.5,2', ');'],
    'transform:scale(1.5,2);'
  )
})
