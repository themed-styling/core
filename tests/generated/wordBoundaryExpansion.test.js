import 'jest-styled-components'

import { wordBoundaryExpansion } from '../../src/index.js'

import { testAllOn } from '../utilities.js'

testAllOn(wordBoundaryExpansion, 'wordBoundaryExpansion')
