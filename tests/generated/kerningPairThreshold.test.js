import 'jest-styled-components'

import { kerningPairThreshold } from '../../src/index.js'

import { testAllOn } from '../utilities.js'

testAllOn(kerningPairThreshold, 'kerningPairThreshold')
