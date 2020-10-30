import core from './util/core'
import pxTransformer from './util/transformers/pxTransformer'
import percentTransformer from './util/transformers/percentTransformer'
import plainTransformer from './util/transformers/plainTransformer'
import degreesTransformer from './util/transformers/degreesTransformer'

export const blur = core('blur', 'filter:blur(', ');', pxTransformer)
export const brightness = core(
  'brightness',
  'filter:brightness(',
  ');',
  percentTransformer
)
export const contrast = core(
  'contrast',
  'filter:contrast(',
  ');',
  percentTransformer
)
export const dropShadow = core(
  'dropShadow',
  'filter:drop-shadow(',
  ');',
  plainTransformer
)
export const grayscale = core(
  'grayscale',
  'filter:grayscale(',
  ');',
  percentTransformer
)
export const hueRotate = core(
  'hueRotate',
  'filter:hue-rotate(',
  ');',
  degreesTransformer
)
export const invert = core('invert', 'filter:invert(', ');', percentTransformer)
export const filterOpacity = core(
  'filterOpacity',
  'filter:opacity(',
  ');',
  percentTransformer
)
export const saturate = core(
  'saturate',
  'filter:saturate(',
  ');',
  percentTransformer
)
export const sepia = core('sepia', 'filter:sepia(', ');', percentTransformer)
export const filterURL = core(
  'filterURL',
  'filter:url(',
  ');',
  plainTransformer
)
