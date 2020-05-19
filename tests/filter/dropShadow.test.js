import dropShadow from '../../src/lib/filter/dropShadow'
import { coreTest } from '../utilities'

test('constructs array (string)', () => {
  coreTest(
    dropShadow('0 0 10px black')({}),
    ['filter:drop-shadow(', '0 0 10px black', ');'],
    'filter:drop-shadow(0 0 10px black);'
  )
})
