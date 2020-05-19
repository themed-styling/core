import filterOpacity from '../../src/lib/filter/filterOpacity'
import { coreTest } from '../utilities'

test('constructs array (number <= 1 -> %)', () => {
  coreTest(
    filterOpacity(0.5)({}),
    ['filter:opacity(', [50, '%'], ');'],
    'filter:opacity(50%);'
  )
  coreTest(
    filterOpacity(1)({}),
    ['filter:opacity(', [100, '%'], ');'],
    'filter:opacity(100%);'
  )
})

test('constructs array (number > 1 -> %)', () => {
  coreTest(
    filterOpacity(2)({}),
    ['filter:opacity(', [2, '%'], ');'],
    'filter:opacity(2%);'
  )
})

test('constructs array (string)', () => {
  coreTest(
    filterOpacity('3.14159%')({}),
    ['filter:opacity(', '3.14159%', ');'],
    'filter:opacity(3.14159%);'
  )
})
