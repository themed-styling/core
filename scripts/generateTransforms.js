import transformTemplate from './util/templates/transformTemplate.js'
import { writeFunctions, writeIndex } from './util/write.js'

const transformFunction = name => transformerType => ({
  name,
  namespace: 'transform',
  cssFunctionName: name.replace(/3D/g, '3d'),
  transformerType,
})

export const transformFunctions = [
  transformFunction('matrix')('plain'),
  transformFunction('matrix3D')('plain'),
  transformFunction('translate')('plain'),
  transformFunction('translate3D')('plain'),
  transformFunction('translateX')('px'),
  transformFunction('translateY')('px'),
  transformFunction('translateZ')('px'),
  transformFunction('scale')('plain'),
  transformFunction('scale3D')('plain'),
  transformFunction('scaleX')('plain'),
  transformFunction('scaleY')('plain'),
  transformFunction('scaleZ')('plain'),
  transformFunction('rotate')('degrees'),
  transformFunction('rotate3D')('plain'),
  transformFunction('rotateX')('degrees'),
  transformFunction('rotateY')('degrees'),
  transformFunction('rotateZ')('degrees'),
  transformFunction('skew')('plain'),
  transformFunction('skewX')('degrees'),
  transformFunction('skewY')('degrees'),
  transformFunction('perspective')('plain'),
]

writeFunctions(transformFunctions, transformTemplate)
writeIndex(transformFunctions)
