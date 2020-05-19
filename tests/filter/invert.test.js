import invert from '../../src/lib/filter/invert'
import { coreTest } from '../utilities'

test('constructs array (number <= 1 -> %)', () => {
  coreTest(
    invert(0.5)({}),
    ['filter:invert(', [50, '%'], ');'],
    'filter:invert(50%);'
  )
  coreTest(
    invert(1)({}),
    ['filter:invert(', [100, '%'], ');'],
    'filter:invert(100%);'
  )
})

test('constructs array (number > 1 -> %)', () => {
  coreTest(
    invert(2)({}),
    ['filter:invert(', [2, '%'], ');'],
    'filter:invert(2%);'
  )
})

test('constructs array (string)', () => {
  coreTest(
    invert('3.14159%')({}),
    ['filter:invert(', '3.14159%', ');'],
    'filter:invert(3.14159%);'
  )
})
