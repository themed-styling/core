import backgroundSize from '../../src/lib/background/backgroundSize'
import { coreTest } from '../utilities'

test('constructs array (number)', () => {
  coreTest(
    backgroundSize(0.3)({}),
    [['background-size', ':'], [30, '%'], ';'],
    'background-size:30%;'
  )
  coreTest(
    backgroundSize(30)({}),
    [['background-size', ':'], [30, '%'], ';'],
    'background-size:30%;'
  )
})

test('constructs array (string)', () => {
  coreTest(
    backgroundSize('10px 20px')({}),
    [['background-size', ':'], '10px 20px', ';'],
    'background-size:10px 20px;'
  )
})
