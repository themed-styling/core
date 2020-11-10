import 'jest-styled-components'

import { phonemes } from '../../src/index.js'

import { testAllOn } from '../utilities.js'

testAllOn(phonemes, 'phonemes')
