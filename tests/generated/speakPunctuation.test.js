import 'jest-styled-components'

import { speakPunctuation } from '../../src/index.js'

import { testAllOn } from '../utilities.js'

testAllOn(speakPunctuation, 'speakPunctuation')
