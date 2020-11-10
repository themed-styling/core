import 'jest-styled-components'

import { hyphenate } from '../../src/index.js'

import { testAllOn } from '../utilities.js'

testAllOn(hyphenate, 'hyphenate')
