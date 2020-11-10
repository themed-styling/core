import 'jest-styled-components'

import { counterReset } from '../../src/index.js'

import { testAllOn } from '../utilities.js'

testAllOn(counterReset, 'counterReset')
