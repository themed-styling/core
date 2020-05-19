import borderRightStyle from '../../src/lib/border/borderRightStyle'
import { coreTest } from '../utilities'

test('constructs array (string)', () => {
  coreTest(
    borderRightStyle('dotted')({}),
    [['border-right-style', ':'], 'dotted', ';'],
    'border-right-style:dotted;'
  )
})
