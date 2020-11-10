import 'jest-styled-components'

import { wordBoundaryDetection } from '../../src/index.js'

import { testAllOn } from '../utilities.js'

testAllOn(wordBoundaryDetection, 'wordBoundaryDetection')
