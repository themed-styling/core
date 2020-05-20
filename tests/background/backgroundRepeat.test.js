import backgroundRepeat from '../../src/lib/background/backgroundRepeat'
import { coreTest } from '../utilities'

test('constructs array (string)', () => {
  coreTest(
    backgroundRepeat('no-repeat')({}),
    [['background-repeat', ':'], 'no-repeat', ';'],
    'background-repeat:no-repeat;'
  )
})
