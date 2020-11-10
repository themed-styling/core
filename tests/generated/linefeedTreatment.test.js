import 'jest-styled-components'

import { linefeedTreatment } from '../../src/index.js'

import { testAllOn } from '../utilities.js'

testAllOn(linefeedTreatment, 'linefeedTreatment')
