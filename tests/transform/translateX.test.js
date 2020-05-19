import translateX from '../../src/lib/transform/translateX'
import { coreTest } from '../utilities'

test('constructs array (number)', () => {
  coreTest(
    translateX(10)({}),
    ['transform:translateX(', '10px', ');'],
    'transform:translateX(10px);'
  )
})

test('constructs array (string)', () => {
  coreTest(
    translateX('20px')({}),
    ['transform:translateX(', '20px', ');'],
    'transform:translateX(20px);'
  )
})
