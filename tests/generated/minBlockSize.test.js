import 'jest-styled-components'

import { minBlockSize } from '../../src/index.js'

import { testAllOn } from '../utilities.js'

testAllOn(minBlockSize, 'minBlockSize')
