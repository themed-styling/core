import scaleY from '../../src/lib/transform/scaleY'
import { coreTest } from '../utilities'

test('constructs array (number)', () => {
  coreTest(
    scaleY(1.5)({}),
    ['transform:scaleY(', 1.5, ');'],
    'transform:scaleY(1.5);'
  )
})

test('constructs array (string)', () => {
  coreTest(
    scaleY('2')({}),
    ['transform:scaleY(', '2', ');'],
    'transform:scaleY(2);'
  )
})
