import 'jest-styled-components'

import { voiceVolume } from '../../src/index.js'

import { testAllOn } from '../utilities.js'

testAllOn(voiceVolume, 'voiceVolume')
