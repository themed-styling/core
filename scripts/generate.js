import { writeFunctions, writeIndex } from './util/write.js'

import { regularFunctions } from './generateRegulars.js'
import { filterFunctions } from './generateFilters.js'
import { transformFunctions } from './generateTransforms.js'

import regularTemplate from './util/templates/regularTemplate.js'
import filterTemplate from './util/templates/filterTemplate.js'
import transformTemplate from './util/templates/transformTemplate.js'

writeFunctions(regularFunctions, regularTemplate)
writeFunctions(filterFunctions, filterTemplate)
writeFunctions(transformFunctions, transformTemplate)

writeIndex([...filterFunctions, ...transformFunctions, ...regularFunctions])
