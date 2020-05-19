import grayscale from '../../src/lib/filter/grayscale'
import { coreTest } from '../utilities'

test('constructs array (number <= 1 -> %)', () => {
  coreTest(
    grayscale(0.5)({}),
    ['filter:grayscale(', [50, '%'], ');'],
    'filter:grayscale(50%);'
  )
  coreTest(
    grayscale(1)({}),
    ['filter:grayscale(', [100, '%'], ');'],
    'filter:grayscale(100%);'
  )
})

test('constructs array (number > 1 -> %)', () => {
  coreTest(
    grayscale(2)({}),
    ['filter:grayscale(', [2, '%'], ');'],
    'filter:grayscale(2%);'
  )
})

test('constructs array (string)', () => {
  coreTest(
    grayscale('3.14159%')({}),
    ['filter:grayscale(', '3.14159%', ');'],
    'filter:grayscale(3.14159%);'
  )
})
