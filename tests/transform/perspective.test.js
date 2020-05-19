import perspective from '../../src/lib/transform/perspective'
import { coreTest } from '../utilities'

test('constructs array (number)', () => {
  coreTest(
    perspective(100)({}),
    ['transform:perspective(', '100px', ');'],
    'transform:perspective(100px);'
  )
})

test('constructs array (string)', () => {
  coreTest(
    perspective('200px')({}),
    ['transform:perspective(', '200px', ');'],
    'transform:perspective(200px);'
  )
})
