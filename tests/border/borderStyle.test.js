import borderStyle from '../../src/lib/border/borderStyle'
import { coreTest } from '../utilities'

test('constructs array (string)', () => {
  coreTest(
    borderStyle('dotted')({}),
    [['border-style', ':'], 'dotted', ';'],
    'border-style:dotted;'
  )
})
