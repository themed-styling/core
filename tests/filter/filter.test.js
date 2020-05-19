import filter from '../../src/lib/filter/filter'
import { coreTest } from '../utilities'

test('constructs array (string)', () => {
  coreTest(
    filter('blur(5px)')({}),
    [['filter', ':'], 'blur(5px)', ';'],
    'filter:blur(5px);'
  )
})
