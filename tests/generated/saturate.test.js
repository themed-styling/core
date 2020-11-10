import 'jest-styled-components'

import { saturate } from '../../src/index.js'

import { testAllOn } from '../utilities.js'

testAllOn(saturate, 'saturate')
