import 'jest-styled-components'

import { animationIterationCount } from '../../src/index.js'

import { testAllOn } from '../utilities.js'

testAllOn(animationIterationCount, 'animationIterationCount')
