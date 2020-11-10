import 'jest-styled-components'

import { hyphenateLimitChars } from '../../src/index.js'

import { testAllOn } from '../utilities.js'

testAllOn(hyphenateLimitChars, 'hyphenateLimitChars')
