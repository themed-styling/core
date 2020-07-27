import filterTemplate from './util/templates/filterTemplate.js'
import { writeFunctions, writeIndex } from './util/write.js'

const filterFunction = name => cssFunctionName => transformerType => ({
  name,
  namespace: 'filter',
  cssFunctionName:
    cssFunctionName || name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(),
  transformerType,
})

export const filterFunctions = [
  filterFunction('blur')()('px'),
  filterFunction('brightness')()('percent'),
  filterFunction('contrast')()('percent'),
  filterFunction('dropShadow')()('percent'),
  filterFunction('grayscale')()('percent'),
  filterFunction('hueRotate')()('degrees'),
  filterFunction('invert')()('percent'),
  filterFunction('filterOpacity')('opacity')('percent'),
  filterFunction('saturate')()('percent'),
  filterFunction('sepia')()('percent'),
  filterFunction('filterURL')('url')('plain'),
]

writeFunctions(filterFunctions, filterTemplate)
writeIndex(filterFunctions)
