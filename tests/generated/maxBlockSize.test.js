import 'jest-styled-components'

import { maxBlockSize } from '../../src/index.js'

import { testAllOn } from '../utilities.js'

testAllOn(maxBlockSize, 'maxBlockSize')
