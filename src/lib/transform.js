import core from './util/core'
import pxTransformer from './util/transformers/pxTransformer'
import plainTransformer from './util/transformers/plainTransformer'
import degreesTransformer from './util/transformers/degreesTransformer'

export const matrix = core(
  'matrix',
  'transform:matrix(',
  ');',
  plainTransformer
)
export const matrix3D = core(
  'matrix3D',
  'transform:matrix3d(',
  ');',
  plainTransformer
)
export const translate = core(
  'translate',
  'transform:translate(',
  ');',
  plainTransformer
)
export const translate3D = core(
  'translate3D',
  'transform:translate3d(',
  ');',
  plainTransformer
)
export const translateX = core(
  'translateX',
  'transform:translateX(',
  ');',
  pxTransformer
)
export const translateY = core(
  'translateY',
  'transform:translateY(',
  ');',
  pxTransformer
)
export const translateZ = core(
  'translateZ',
  'transform:translateZ(',
  ');',
  pxTransformer
)
export const scale = core('scale', 'transform:scale(', ');', plainTransformer)
export const scale3D = core(
  'scale3D',
  'transform:scale3d(',
  ');',
  plainTransformer
)
export const scaleX = core(
  'scaleX',
  'transform:scaleX(',
  ');',
  plainTransformer
)
export const scaleY = core(
  'scaleY',
  'transform:scaleY(',
  ');',
  plainTransformer
)
export const scaleZ = core(
  'scaleZ',
  'transform:scaleZ(',
  ');',
  plainTransformer
)
export const rotate = core(
  'rotate',
  'transform:rotate(',
  ');',
  degreesTransformer
)
export const rotate3D = core(
  'rotate3D',
  'transform:rotate3d(',
  ');',
  plainTransformer
)
export const rotateX = core(
  'rotateX',
  'transform:rotateX(',
  ');',
  degreesTransformer
)
export const rotateY = core(
  'rotateY',
  'transform:rotateY(',
  ');',
  degreesTransformer
)
export const rotateZ = core(
  'rotateZ',
  'transform:rotateZ(',
  ');',
  degreesTransformer
)
export const skew = core('skew', 'transform:skew(', ');', plainTransformer)
export const skewX = core('skewX', 'transform:skewX(', ');', degreesTransformer)
export const skewY = core('skewY', 'transform:skewY(', ');', degreesTransformer)
export const perspective = core(
  'perspective',
  'transform:perspective(',
  ');',
  plainTransformer
)
