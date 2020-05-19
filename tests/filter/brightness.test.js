import brightness from '../../src/lib/filter/brightness'
import { coreTest } from '../utilities'

test('constructs array (number <= 1 -> %)', () => {
  coreTest(
    brightness(0.5)({}),
    ['filter:brightness(', [50, '%'], ');'],
    'filter:brightness(50%);'
  )
  coreTest(
    brightness(1)({}),
    ['filter:brightness(', [100, '%'], ');'],
    'filter:brightness(100%);'
  )
})

test('constructs array (number > 1 -> %)', () => {
  coreTest(
    brightness(2)({}),
    ['filter:brightness(', [2, '%'], ');'],
    'filter:brightness(2%);'
  )
})

test('constructs array (string)', () => {
  coreTest(
    brightness('3.14159%')({}),
    ['filter:brightness(', '3.14159%', ');'],
    'filter:brightness(3.14159%);'
  )
})
