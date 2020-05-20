import backgroundPosition from '../../src/lib/background/backgroundPosition'
import { coreTest } from '../utilities'

test('constructs array (string)', () => {
  coreTest(
    backgroundPosition('left center')({}),
    [['background-position', ':'], 'left center', ';'],
    'background-position:left center;'
  )
})
