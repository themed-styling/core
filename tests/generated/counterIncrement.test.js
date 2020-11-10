import 'jest-styled-components'

import { counterIncrement } from '../../src/index.js'

import { testAllOn } from '../utilities.js'

testAllOn(counterIncrement, 'counterIncrement')
