import 'jest-styled-components'

import { transitionTimingFunction } from '../../src/index.js'

import { testAllOn } from '../utilities.js'

testAllOn(transitionTimingFunction, 'transitionTimingFunction')
