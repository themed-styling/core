import sepia from '../../src/lib/filter/sepia'
import { coreTest } from '../utilities'

test('constructs array (number <= 1 -> %)', () => {
  coreTest(
    sepia(0.5)({}),
    ['filter:sepia(', [50, '%'], ');'],
    'filter:sepia(50%);'
  )
  coreTest(
    sepia(1)({}),
    ['filter:sepia(', [100, '%'], ');'],
    'filter:sepia(100%);'
  )
})

test('constructs array (number > 1 -> %)', () => {
  coreTest(sepia(2)({}), ['filter:sepia(', [2, '%'], ');'], 'filter:sepia(2%);')
})

test('constructs array (string)', () => {
  coreTest(
    sepia('3.14159%')({}),
    ['filter:sepia(', '3.14159%', ');'],
    'filter:sepia(3.14159%);'
  )
})
