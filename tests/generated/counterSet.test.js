import 'jest-styled-components'

import { counterSet } from '../../src/index.js'

import { testAllOn } from '../utilities.js'

testAllOn(counterSet, 'counterSet')
