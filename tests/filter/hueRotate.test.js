import hueRotate from '../../src/lib/filter/hueRotate'
import { coreTest } from '../utilities'

test('constructs array (number)', () => {
  coreTest(
    hueRotate(0)({}),
    ['filter:hue-rotate(', [0, 'deg'], ');'],
    'filter:hue-rotate(0deg);'
  )
  coreTest(
    hueRotate(360)({}),
    ['filter:hue-rotate(', [360, 'deg'], ');'],
    'filter:hue-rotate(360deg);'
  )
})

test('constructs array (string)', () => {
  coreTest(
    hueRotate('asdasd')({}),
    ['filter:hue-rotate(', 'asdasd', ');'],
    'filter:hue-rotate(asdasd);'
  )
})
