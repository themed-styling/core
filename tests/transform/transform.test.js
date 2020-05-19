import transform from '../../src/lib/transform/transform'
import { coreTest } from '../utilities'

test('constructs array (string)', () => {
  coreTest(
    transform('scale(1.1)')({}),
    [['transform', ':'], 'scale(1.1)', ';'],
    'transform:scale(1.1);'
  )
})
