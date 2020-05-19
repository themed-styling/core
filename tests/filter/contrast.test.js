import contrast from '../../src/lib/filter/contrast'
import { coreTest } from '../utilities'

test('constructs array (number <= 1 -> %)', () => {
  coreTest(
    contrast(0.5)({}),
    ['filter:contrast(', [50, '%'], ');'],
    'filter:contrast(50%);'
  )
  coreTest(
    contrast(1)({}),
    ['filter:contrast(', [100, '%'], ');'],
    'filter:contrast(100%);'
  )
})

test('constructs array (number > 1 -> %)', () => {
  coreTest(
    contrast(2)({}),
    ['filter:contrast(', [2, '%'], ');'],
    'filter:contrast(2%);'
  )
})

test('constructs array (string)', () => {
  coreTest(
    contrast('3.14159%')({}),
    ['filter:contrast(', '3.14159%', ');'],
    'filter:contrast(3.14159%);'
  )
})
