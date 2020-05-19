import saturate from '../../src/lib/filter/saturate'
import { coreTest } from '../utilities'

test('constructs array (number <= 1 -> %)', () => {
  coreTest(
    saturate(0.5)({}),
    ['filter:saturate(', [50, '%'], ');'],
    'filter:saturate(50%);'
  )
  coreTest(
    saturate(1)({}),
    ['filter:saturate(', [100, '%'], ');'],
    'filter:saturate(100%);'
  )
})

test('constructs array (number > 1 -> %)', () => {
  coreTest(
    saturate(2)({}),
    ['filter:saturate(', [2, '%'], ');'],
    'filter:saturate(2%);'
  )
})

test('constructs array (string)', () => {
  coreTest(
    saturate('3.14159%')({}),
    ['filter:saturate(', '3.14159%', ');'],
    'filter:saturate(3.14159%);'
  )
})
