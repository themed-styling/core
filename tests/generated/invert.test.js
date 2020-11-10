import 'jest-styled-components'

import { invert } from '../../src/index.js'

import { testAllOn } from '../utilities.js'

testAllOn(invert, 'invert')
