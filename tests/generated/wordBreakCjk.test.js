import 'jest-styled-components'

import { wordBreakCjk } from '../../src/index.js'

import { testAllOn } from '../utilities.js'

testAllOn(wordBreakCjk, 'wordBreakCjk')
