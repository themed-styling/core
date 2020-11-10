import core from './util/core.js'
import pixelsTransformer from './util/transformers/pixelsTransformer.js'
import percentTransformer from './util/transformers/percentTransformer.js'
import plainTransformer from './util/transformers/plainTransformer.js'
import degreesTransformer from './util/transformers/degreesTransformer.js'

export const blur = core('blur', 'filter:blur(', ');', pixelsTransformer)
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
