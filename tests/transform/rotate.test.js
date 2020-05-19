import rotate from '../../src/lib/transform/rotate'
import { coreTest } from '../utilities'

test('constructs array (number)', () => {
  coreTest(
    rotate(36)({}),
    ['transform:rotate(', [36, 'deg'], ');'],
    'transform:rotate(36deg);'
  )
  coreTest(
    rotate(-36)({}),
    ['transform:rotate(', [-36, 'deg'], ');'],
    'transform:rotate(-36deg);'
  )
})

test('constructs array (string)', () => {
  coreTest(
    rotate('2rad')({}),
    ['transform:rotate(', '2rad', ');'],
    'transform:rotate(2rad);'
  )
})
