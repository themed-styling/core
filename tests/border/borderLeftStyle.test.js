import borderLeftStyle from '../../src/lib/border/borderLeftStyle'
import { coreTest } from '../utilities'

test('constructs array (string)', () => {
  coreTest(
    borderLeftStyle('dotted')({}),
    [['border-left-style', ':'], 'dotted', ';'],
    'border-left-style:dotted;'
  )
})
