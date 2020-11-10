import 'jest-styled-components'

import { speakNumeral } from '../../src/index.js'

import { testAllOn } from '../utilities.js'

testAllOn(speakNumeral, 'speakNumeral')
