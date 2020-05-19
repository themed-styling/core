import blur from '../../src/lib/filter/blur'
import { coreTest } from '../utilities'

test('constructs array (number -> px)', () => {
  coreTest(blur(5)({}), ['filter:blur(', '5px', ');'], 'filter:blur(5px);')
})

test('constructs array (string)', () => {
  coreTest(
    blur('1rem')({}),
    ['filter:blur(', '1rem', ');'],
    'filter:blur(1rem);'
  )
})
