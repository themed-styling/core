import core from './util/core'
import plainTransformer from './util/transformers/plainTransformer'
import colorTransformer from './util/transformers/colorTransformer'
import pxTransformer from './util/transformers/pxTransformer'

export const alignContent = core(
  'alignContent',
  'align-content:',
  ';',
  plainTransformer
)
export const alignItems = core(
  'alignItems',
  'align-items:',
  ';',
  plainTransformer
)
export const alignSelf = core('alignSelf', 'align-self:', ';', plainTransformer)
export const alignmentBaseline = core(
  'alignmentBaseline',
  'alignment-baseline:',
  ';',
  plainTransformer
)
export const all = core('all', 'all:', ';', plainTransformer)
export const animation = core('animation', 'animation:', ';', plainTransformer)
export const animationDelay = core(
  'animationDelay',
  'animation-delay:',
  ';',
  plainTransformer
)
export const animationDirection = core(
  'animationDirection',
  'animation-direction:',
  ';',
  plainTransformer
)
export const animationDuration = core(
  'animationDuration',
  'animation-duration:',
  ';',
  plainTransformer
)
export const animationFillMode = core(
  'animationFillMode',
  'animation-fill-mode:',
  ';',
  plainTransformer
)
export const animationIterationCount = core(
  'animationIterationCount',
  'animation-iteration-count:',
  ';',
  plainTransformer
)
export const animationName = core(
  'animationName',
  'animation-name:',
  ';',
  plainTransformer
)
export const animationPlayState = core(
  'animationPlayState',
  'animation-play-state:',
  ';',
  plainTransformer
)
export const animationTimingFunction = core(
  'animationTimingFunction',
  'animation-timing-function:',
  ';',
  plainTransformer
)
export const appearance = core(
  'appearance',
  'appearance:',
  ';',
  plainTransformer
)
export const aspectRatio = core(
  'aspectRatio',
  'aspect-ratio:',
  ';',
  plainTransformer
)
export const azimuth = core('azimuth', 'azimuth:', ';', plainTransformer)
export const background = core(
  'background',
  'background:',
  ';',
  colorTransformer
)
export const backgroundAttachment = core(
  'backgroundAttachment',
  'background-attachment:',
  ';',
  plainTransformer
)
export const backgroundBlendMode = core(
  'backgroundBlendMode',
  'background-blend-mode:',
  ';',
  plainTransformer
)
export const backgroundClip = core(
  'backgroundClip',
  'background-clip:',
  ';',
  plainTransformer
)
export const backgroundColor = core(
  'backgroundColor',
  'background-color:',
  ';',
  colorTransformer
)
export const backgroundImage = core(
  'backgroundImage',
  'background-image:',
  ';',
  colorTransformer
)
export const backgroundOrigin = core(
  'backgroundOrigin',
  'background-origin:',
  ';',
  plainTransformer
)
export const backgroundPosition = core(
  'backgroundPosition',
  'background-position:',
  ';',
  colorTransformer
)
export const backgroundRepeat = core(
  'backgroundRepeat',
  'background-repeat:',
  ';',
  plainTransformer
)
export const backgroundSize = core(
  'backgroundSize',
  'background-size:',
  ';',
  colorTransformer
)
export const baselineShift = core(
  'baselineShift',
  'baseline-shift:',
  ';',
  plainTransformer
)
export const baselineSource = core(
  'baselineSource',
  'baseline-source:',
  ';',
  plainTransformer
)
export const blockEllipsis = core(
  'blockEllipsis',
  'block-ellipsis:',
  ';',
  plainTransformer
)
export const blockSize = core('blockSize', 'block-size:', ';', plainTransformer)
export const bookmarkLabel = core(
  'bookmarkLabel',
  'bookmark-label:',
  ';',
  plainTransformer
)
export const bookmarkLevel = core(
  'bookmarkLevel',
  'bookmark-level:',
  ';',
  plainTransformer
)
export const bookmarkState = core(
  'bookmarkState',
  'bookmark-state:',
  ';',
  plainTransformer
)
export const border = core('border', 'border:', ';', colorTransformer)
export const borderBlock = core(
  'borderBlock',
  'border-block:',
  ';',
  plainTransformer
)
export const borderBlockColor = core(
  'borderBlockColor',
  'border-block-color:',
  ';',
  plainTransformer
)
export const borderBlockEnd = core(
  'borderBlockEnd',
  'border-block-end:',
  ';',
  plainTransformer
)
export const borderBlockEndColor = core(
  'borderBlockEndColor',
  'border-block-end-color:',
  ';',
  plainTransformer
)
export const borderBlockEndStyle = core(
  'borderBlockEndStyle',
  'border-block-end-style:',
  ';',
  plainTransformer
)
export const borderBlockEndWidth = core(
  'borderBlockEndWidth',
  'border-block-end-width:',
  ';',
  plainTransformer
)
export const borderBlockStart = core(
  'borderBlockStart',
  'border-block-start:',
  ';',
  plainTransformer
)
export const borderBlockStartColor = core(
  'borderBlockStartColor',
  'border-block-start-color:',
  ';',
  plainTransformer
)
export const borderBlockStartStyle = core(
  'borderBlockStartStyle',
  'border-block-start-style:',
  ';',
  plainTransformer
)
export const borderBlockStartWidth = core(
  'borderBlockStartWidth',
  'border-block-start-width:',
  ';',
  plainTransformer
)
export const borderBlockStyle = core(
  'borderBlockStyle',
  'border-block-style:',
  ';',
  plainTransformer
)
export const borderBlockWidth = core(
  'borderBlockWidth',
  'border-block-width:',
  ';',
  plainTransformer
)
export const borderBottom = core(
  'borderBottom',
  'border-bottom:',
  ';',
  colorTransformer
)
export const borderBottomColor = core(
  'borderBottomColor',
  'border-bottom-color:',
  ';',
  plainTransformer
)
export const borderBottomLeftRadius = core(
  'borderBottomLeftRadius',
  'border-bottom-left-radius:',
  ';',
  pxTransformer
)
export const borderBottomRightRadius = core(
  'borderBottomRightRadius',
  'border-bottom-right-radius:',
  ';',
  pxTransformer
)
export const borderBottomStyle = core(
  'borderBottomStyle',
  'border-bottom-style:',
  ';',
  plainTransformer
)
export const borderBottomWidth = core(
  'borderBottomWidth',
  'border-bottom-width:',
  ';',
  plainTransformer
)
export const borderBoundary = core(
  'borderBoundary',
  'border-boundary:',
  ';',
  plainTransformer
)
export const borderCollapse = core(
  'borderCollapse',
  'border-collapse:',
  ';',
  plainTransformer
)
export const borderColor = core(
  'borderColor',
  'border-color:',
  ';',
  colorTransformer
)
export const borderEndEndRadius = core(
  'borderEndEndRadius',
  'border-end-end-radius:',
  ';',
  pxTransformer
)
export const borderEndStartRadius = core(
  'borderEndStartRadius',
  'border-end-start-radius:',
  ';',
  pxTransformer
)
export const borderImage = core(
  'borderImage',
  'border-image:',
  ';',
  plainTransformer
)
export const borderImageOutset = core(
  'borderImageOutset',
  'border-image-outset:',
  ';',
  pxTransformer
)
export const borderImageRepeat = core(
  'borderImageRepeat',
  'border-image-repeat:',
  ';',
  plainTransformer
)
export const borderImageSlice = core(
  'borderImageSlice',
  'border-image-slice:',
  ';',
  plainTransformer
)
export const borderImageSource = core(
  'borderImageSource',
  'border-image-source:',
  ';',
  colorTransformer
)
export const borderImageWidth = core(
  'borderImageWidth',
  'border-image-width:',
  ';',
  pxTransformer
)
export const borderInline = core(
  'borderInline',
  'border-inline:',
  ';',
  plainTransformer
)
export const borderInlineColor = core(
  'borderInlineColor',
  'border-inline-color:',
  ';',
  plainTransformer
)
export const borderInlineEnd = core(
  'borderInlineEnd',
  'border-inline-end:',
  ';',
  plainTransformer
)
export const borderInlineEndColor = core(
  'borderInlineEndColor',
  'border-inline-end-color:',
  ';',
  plainTransformer
)
export const borderInlineEndStyle = core(
  'borderInlineEndStyle',
  'border-inline-end-style:',
  ';',
  plainTransformer
)
export const borderInlineEndWidth = core(
  'borderInlineEndWidth',
  'border-inline-end-width:',
  ';',
  plainTransformer
)
export const borderInlineStart = core(
  'borderInlineStart',
  'border-inline-start:',
  ';',
  plainTransformer
)
export const borderInlineStartColor = core(
  'borderInlineStartColor',
  'border-inline-start-color:',
  ';',
  plainTransformer
)
export const borderInlineStartStyle = core(
  'borderInlineStartStyle',
  'border-inline-start-style:',
  ';',
  plainTransformer
)
export const borderInlineStartWidth = core(
  'borderInlineStartWidth',
  'border-inline-start-width:',
  ';',
  plainTransformer
)
export const borderInlineStyle = core(
  'borderInlineStyle',
  'border-inline-style:',
  ';',
  plainTransformer
)
export const borderInlineWidth = core(
  'borderInlineWidth',
  'border-inline-width:',
  ';',
  plainTransformer
)
export const borderLeft = core(
  'borderLeft',
  'border-left:',
  ';',
  colorTransformer
)
export const borderLeftColor = core(
  'borderLeftColor',
  'border-left-color:',
  ';',
  colorTransformer
)
export const borderLeftStyle = core(
  'borderLeftStyle',
  'border-left-style:',
  ';',
  plainTransformer
)
export const borderLeftWidth = core(
  'borderLeftWidth',
  'border-left-width:',
  ';',
  plainTransformer
)
export const borderRadius = core(
  'borderRadius',
  'border-radius:',
  ';',
  pxTransformer
)
export const borderRight = core(
  'borderRight',
  'border-right:',
  ';',
  colorTransformer
)
export const borderRightColor = core(
  'borderRightColor',
  'border-right-color:',
  ';',
  colorTransformer
)
export const borderRightStyle = core(
  'borderRightStyle',
  'border-right-style:',
  ';',
  plainTransformer
)
export const borderRightWidth = core(
  'borderRightWidth',
  'border-right-width:',
  ';',
  plainTransformer
)
export const borderSpacing = core(
  'borderSpacing',
  'border-spacing:',
  ';',
  pxTransformer
)
export const borderStartEndRadius = core(
  'borderStartEndRadius',
  'border-start-end-radius:',
  ';',
  pxTransformer
)
export const borderStartStartRadius = core(
  'borderStartStartRadius',
  'border-start-start-radius:',
  ';',
  pxTransformer
)
export const borderStyle = core(
  'borderStyle',
  'border-style:',
  ';',
  plainTransformer
)
export const borderTop = core('borderTop', 'border-top:', ';', colorTransformer)
export const borderTopColor = core(
  'borderTopColor',
  'border-top-color:',
  ';',
  colorTransformer
)
export const borderTopLeftRadius = core(
  'borderTopLeftRadius',
  'border-top-left-radius:',
  ';',
  pxTransformer
)
export const borderTopRightRadius = core(
  'borderTopRightRadius',
  'border-top-right-radius:',
  ';',
  pxTransformer
)
export const borderTopStyle = core(
  'borderTopStyle',
  'border-top-style:',
  ';',
  plainTransformer
)
export const borderTopWidth = core(
  'borderTopWidth',
  'border-top-width:',
  ';',
  plainTransformer
)
export const borderWidth = core(
  'borderWidth',
  'border-width:',
  ';',
  plainTransformer
)
export const bottom = core('bottom', 'bottom:', ';', pxTransformer)
export const boxDecorationBreak = core(
  'boxDecorationBreak',
  'box-decoration-break:',
  ';',
  plainTransformer
)
export const boxShadow = core('boxShadow', 'box-shadow:', ';', plainTransformer)
export const boxSizing = core('boxSizing', 'box-sizing:', ';', plainTransformer)
export const boxSnap = core('boxSnap', 'box-snap:', ';', plainTransformer)
export const breakAfter = core(
  'breakAfter',
  'break-after:',
  ';',
  plainTransformer
)
export const breakBefore = core(
  'breakBefore',
  'break-before:',
  ';',
  plainTransformer
)
export const breakInside = core(
  'breakInside',
  'break-inside:',
  ';',
  plainTransformer
)
export const captionSide = core(
  'captionSide',
  'caption-side:',
  ';',
  plainTransformer
)
export const caret = core('caret', 'caret:', ';', plainTransformer)
export const caretColor = core(
  'caretColor',
  'caret-color:',
  ';',
  colorTransformer
)
export const caretShape = core(
  'caretShape',
  'caret-shape:',
  ';',
  plainTransformer
)
export const clear = core('clear', 'clear:', ';', plainTransformer)
export const clip = core('clip', 'clip:', ';', plainTransformer)
export const clipPath = core('clipPath', 'clip-path:', ';', plainTransformer)
export const clipRule = core('clipRule', 'clip-rule:', ';', plainTransformer)
export const color = core('color', 'color:', ';', colorTransformer)
export const colorAdjust = core(
  'colorAdjust',
  'color-adjust:',
  ';',
  plainTransformer
)
export const colorInterpolationFilters = core(
  'colorInterpolationFilters',
  'color-interpolation-filters:',
  ';',
  plainTransformer
)
export const colorScheme = core(
  'colorScheme',
  'color-scheme:',
  ';',
  plainTransformer
)
export const columnCount = core(
  'columnCount',
  'column-count:',
  ';',
  plainTransformer
)
export const columnFill = core(
  'columnFill',
  'column-fill:',
  ';',
  plainTransformer
)
export const columnGap = core('columnGap', 'column-gap:', ';', pxTransformer)
export const columnRule = core(
  'columnRule',
  'column-rule:',
  ';',
  plainTransformer
)
export const columnRuleColor = core(
  'columnRuleColor',
  'column-rule-color:',
  ';',
  colorTransformer
)
export const columnRuleStyle = core(
  'columnRuleStyle',
  'column-rule-style:',
  ';',
  plainTransformer
)
export const columnRuleWidth = core(
  'columnRuleWidth',
  'column-rule-width:',
  ';',
  plainTransformer
)
export const columnSpan = core(
  'columnSpan',
  'column-span:',
  ';',
  plainTransformer
)
export const columnWidth = core(
  'columnWidth',
  'column-width:',
  ';',
  pxTransformer
)
export const columns = core('columns', 'columns:', ';', plainTransformer)
export const contain = core('contain', 'contain:', ';', plainTransformer)
export const containIntrinsicSize = core(
  'containIntrinsicSize',
  'contain-intrinsic-size:',
  ';',
  plainTransformer
)
export const content = core('content', 'content:', ';', colorTransformer)
export const contentVisibility = core(
  'contentVisibility',
  'content-visibility:',
  ';',
  plainTransformer
)
export const cssContinue = core(
  'cssContinue',
  'continue:',
  ';',
  plainTransformer
)
export const counterIncrement = core(
  'counterIncrement',
  'counter-increment:',
  ';',
  plainTransformer
)
export const counterReset = core(
  'counterReset',
  'counter-reset:',
  ';',
  plainTransformer
)
export const counterSet = core(
  'counterSet',
  'counter-set:',
  ';',
  plainTransformer
)
export const cue = core('cue', 'cue:', ';', plainTransformer)
export const cueAfter = core('cueAfter', 'cue-after:', ';', plainTransformer)
export const cueBefore = core('cueBefore', 'cue-before:', ';', plainTransformer)
export const cursor = core('cursor', 'cursor:', ';', plainTransformer)
export const direction = core('direction', 'direction:', ';', plainTransformer)
export const display = core('display', 'display:', ';', plainTransformer)
export const dominantBaseline = core(
  'dominantBaseline',
  'dominant-baseline:',
  ';',
  plainTransformer
)
export const elevation = core('elevation', 'elevation:', ';', plainTransformer)
export const emptyCells = core(
  'emptyCells',
  'empty-cells:',
  ';',
  plainTransformer
)
export const filter = core('filter', 'filter:', ';', plainTransformer)
export const flex = core('flex', 'flex:', ';', plainTransformer)
export const flexBasis = core('flexBasis', 'flex-basis:', ';', plainTransformer)
export const flexDirection = core(
  'flexDirection',
  'flex-direction:',
  ';',
  plainTransformer
)
export const flexFlow = core('flexFlow', 'flex-flow:', ';', plainTransformer)
export const flexGrow = core('flexGrow', 'flex-grow:', ';', plainTransformer)
export const flexShrink = core(
  'flexShrink',
  'flex-shrink:',
  ';',
  plainTransformer
)
export const flexWrap = core('flexWrap', 'flex-wrap:', ';', plainTransformer)
export const float = core('float', 'float:', ';', plainTransformer)
export const floodColor = core(
  'floodColor',
  'flood-color:',
  ';',
  plainTransformer
)
export const floodOpacity = core(
  'floodOpacity',
  'flood-opacity:',
  ';',
  plainTransformer
)
export const flowFrom = core('flowFrom', 'flow-from:', ';', plainTransformer)
export const flowInto = core('flowInto', 'flow-into:', ';', plainTransformer)
export const font = core('font', 'font:', ';', plainTransformer)
export const fontFamily = core(
  'fontFamily',
  'font-family:',
  ';',
  plainTransformer
)
export const fontFeatureSettings = core(
  'fontFeatureSettings',
  'font-feature-settings:',
  ';',
  plainTransformer
)
export const fontKerning = core(
  'fontKerning',
  'font-kerning:',
  ';',
  plainTransformer
)
export const fontLanguageOverride = core(
  'fontLanguageOverride',
  'font-language-override:',
  ';',
  plainTransformer
)
export const fontOpticalSizing = core(
  'fontOpticalSizing',
  'font-optical-sizing:',
  ';',
  plainTransformer
)
export const fontPalette = core(
  'fontPalette',
  'font-palette:',
  ';',
  plainTransformer
)
export const fontSize = core('fontSize', 'font-size:', ';', pxTransformer)
export const fontSizeAdjust = core(
  'fontSizeAdjust',
  'font-size-adjust:',
  ';',
  plainTransformer
)
export const fontStretch = core(
  'fontStretch',
  'font-stretch:',
  ';',
  colorTransformer
)
export const fontStyle = core('fontStyle', 'font-style:', ';', plainTransformer)
export const fontSynthesis = core(
  'fontSynthesis',
  'font-synthesis:',
  ';',
  plainTransformer
)
export const fontSynthesisSmallCaps = core(
  'fontSynthesisSmallCaps',
  'font-synthesis-small-caps:',
  ';',
  plainTransformer
)
export const fontSynthesisStyle = core(
  'fontSynthesisStyle',
  'font-synthesis-style:',
  ';',
  plainTransformer
)
export const fontSynthesisWeight = core(
  'fontSynthesisWeight',
  'font-synthesis-weight:',
  ';',
  plainTransformer
)
export const fontVariant = core(
  'fontVariant',
  'font-variant:',
  ';',
  plainTransformer
)
export const fontVariantAlternates = core(
  'fontVariantAlternates',
  'font-variant-alternates:',
  ';',
  plainTransformer
)
export const fontVariantCaps = core(
  'fontVariantCaps',
  'font-variant-caps:',
  ';',
  plainTransformer
)
export const fontVariantEastAsian = core(
  'fontVariantEastAsian',
  'font-variant-east-asian:',
  ';',
  plainTransformer
)
export const fontVariantEmoji = core(
  'fontVariantEmoji',
  'font-variant-emoji:',
  ';',
  plainTransformer
)
export const fontVariantLigatures = core(
  'fontVariantLigatures',
  'font-variant-ligatures:',
  ';',
  plainTransformer
)
export const fontVariantNumeric = core(
  'fontVariantNumeric',
  'font-variant-numeric:',
  ';',
  plainTransformer
)
export const fontVariantPosition = core(
  'fontVariantPosition',
  'font-variant-position:',
  ';',
  plainTransformer
)
export const fontVariationSettings = core(
  'fontVariationSettings',
  'font-variation-settings:',
  ';',
  plainTransformer
)
export const fontWeight = core(
  'fontWeight',
  'font-weight:',
  ';',
  plainTransformer
)
export const footnoteDisplay = core(
  'footnoteDisplay',
  'footnote-display:',
  ';',
  plainTransformer
)
export const footnotePolicy = core(
  'footnotePolicy',
  'footnote-policy:',
  ';',
  plainTransformer
)
export const forcedColorAdjust = core(
  'forcedColorAdjust',
  'forced-color-adjust:',
  ';',
  plainTransformer
)
export const gap = core('gap', 'gap:', ';', plainTransformer)
export const glyphOrientationVertical = core(
  'glyphOrientationVertical',
  'glyph-orientation-vertical:',
  ';',
  plainTransformer
)
export const grid = core('grid', 'grid:', ';', plainTransformer)
export const gridArea = core('gridArea', 'grid-area:', ';', plainTransformer)
export const gridAutoColumns = core(
  'gridAutoColumns',
  'grid-auto-columns:',
  ';',
  colorTransformer
)
export const gridAutoFlow = core(
  'gridAutoFlow',
  'grid-auto-flow:',
  ';',
  plainTransformer
)
export const gridAutoRows = core(
  'gridAutoRows',
  'grid-auto-rows:',
  ';',
  colorTransformer
)
export const gridColumn = core(
  'gridColumn',
  'grid-column:',
  ';',
  plainTransformer
)
export const gridColumnEnd = core(
  'gridColumnEnd',
  'grid-column-end:',
  ';',
  plainTransformer
)
export const gridColumnStart = core(
  'gridColumnStart',
  'grid-column-start:',
  ';',
  plainTransformer
)
export const gridRow = core('gridRow', 'grid-row:', ';', plainTransformer)
export const gridRowEnd = core(
  'gridRowEnd',
  'grid-row-end:',
  ';',
  plainTransformer
)
export const gridRowStart = core(
  'gridRowStart',
  'grid-row-start:',
  ';',
  plainTransformer
)
export const gridTemplate = core(
  'gridTemplate',
  'grid-template:',
  ';',
  colorTransformer
)
export const gridTemplateAreas = core(
  'gridTemplateAreas',
  'grid-template-areas:',
  ';',
  plainTransformer
)
export const gridTemplateColumns = core(
  'gridTemplateColumns',
  'grid-template-columns:',
  ';',
  colorTransformer
)
export const gridTemplateRows = core(
  'gridTemplateRows',
  'grid-template-rows:',
  ';',
  colorTransformer
)
export const hangingPunctuation = core(
  'hangingPunctuation',
  'hanging-punctuation:',
  ';',
  plainTransformer
)
export const height = core('height', 'height:', ';', pxTransformer)
export const hyphenateCharacter = core(
  'hyphenateCharacter',
  'hyphenate-character:',
  ';',
  plainTransformer
)
export const hyphenateLimitChars = core(
  'hyphenateLimitChars',
  'hyphenate-limit-chars:',
  ';',
  plainTransformer
)
export const hyphenateLimitLast = core(
  'hyphenateLimitLast',
  'hyphenate-limit-last:',
  ';',
  plainTransformer
)
export const hyphenateLimitLines = core(
  'hyphenateLimitLines',
  'hyphenate-limit-lines:',
  ';',
  plainTransformer
)
export const hyphenateLimitZone = core(
  'hyphenateLimitZone',
  'hyphenate-limit-zone:',
  ';',
  plainTransformer
)
export const hyphens = core('hyphens', 'hyphens:', ';', plainTransformer)
export const imageOrientation = core(
  'imageOrientation',
  'image-orientation:',
  ';',
  plainTransformer
)
export const imageRendering = core(
  'imageRendering',
  'image-rendering:',
  ';',
  plainTransformer
)
export const imageResolution = core(
  'imageResolution',
  'image-resolution:',
  ';',
  plainTransformer
)
export const initialLetter = core(
  'initialLetter',
  'initial-letter:',
  ';',
  plainTransformer
)
export const initialLetterAlign = core(
  'initialLetterAlign',
  'initial-letter-align:',
  ';',
  plainTransformer
)
export const initialLetterWrap = core(
  'initialLetterWrap',
  'initial-letter-wrap:',
  ';',
  plainTransformer
)
export const inlineSize = core(
  'inlineSize',
  'inline-size:',
  ';',
  plainTransformer
)
export const inlineSizing = core(
  'inlineSizing',
  'inline-sizing:',
  ';',
  plainTransformer
)
export const inset = core('inset', 'inset:', ';', plainTransformer)
export const insetBlock = core(
  'insetBlock',
  'inset-block:',
  ';',
  plainTransformer
)
export const insetBlockEnd = core(
  'insetBlockEnd',
  'inset-block-end:',
  ';',
  plainTransformer
)
export const insetBlockStart = core(
  'insetBlockStart',
  'inset-block-start:',
  ';',
  plainTransformer
)
export const insetInline = core(
  'insetInline',
  'inset-inline:',
  ';',
  plainTransformer
)
export const insetInlineEnd = core(
  'insetInlineEnd',
  'inset-inline-end:',
  ';',
  plainTransformer
)
export const insetInlineStart = core(
  'insetInlineStart',
  'inset-inline-start:',
  ';',
  plainTransformer
)
export const isolation = core('isolation', 'isolation:', ';', plainTransformer)
export const justifyContent = core(
  'justifyContent',
  'justify-content:',
  ';',
  plainTransformer
)
export const justifyItems = core(
  'justifyItems',
  'justify-items:',
  ';',
  plainTransformer
)
export const justifySelf = core(
  'justifySelf',
  'justify-self:',
  ';',
  plainTransformer
)
export const leadingTrim = core(
  'leadingTrim',
  'leading-trim:',
  ';',
  plainTransformer
)
export const left = core('left', 'left:', ';', pxTransformer)
export const letterSpacing = core(
  'letterSpacing',
  'letter-spacing:',
  ';',
  pxTransformer
)
export const lightingColor = core(
  'lightingColor',
  'lighting-color:',
  ';',
  plainTransformer
)
export const lineBreak = core('lineBreak', 'line-break:', ';', plainTransformer)
export const lineClamp = core('lineClamp', 'line-clamp:', ';', plainTransformer)
export const lineGrid = core('lineGrid', 'line-grid:', ';', plainTransformer)
export const lineHeight = core('lineHeight', 'line-height:', ';', pxTransformer)
export const linePadding = core(
  'linePadding',
  'line-padding:',
  ';',
  plainTransformer
)
export const lineSnap = core('lineSnap', 'line-snap:', ';', plainTransformer)
export const listStyle = core('listStyle', 'list-style:', ';', plainTransformer)
export const listStyleImage = core(
  'listStyleImage',
  'list-style-image:',
  ';',
  plainTransformer
)
export const listStylePosition = core(
  'listStylePosition',
  'list-style-position:',
  ';',
  plainTransformer
)
export const listStyleType = core(
  'listStyleType',
  'list-style-type:',
  ';',
  plainTransformer
)
export const margin = core('margin', 'margin:', ';', pxTransformer)
export const marginBlock = core(
  'marginBlock',
  'margin-block:',
  ';',
  plainTransformer
)
export const marginBlockEnd = core(
  'marginBlockEnd',
  'margin-block-end:',
  ';',
  plainTransformer
)
export const marginBlockStart = core(
  'marginBlockStart',
  'margin-block-start:',
  ';',
  plainTransformer
)
export const marginBottom = core(
  'marginBottom',
  'margin-bottom:',
  ';',
  pxTransformer
)
export const marginInline = core(
  'marginInline',
  'margin-inline:',
  ';',
  plainTransformer
)
export const marginInlineEnd = core(
  'marginInlineEnd',
  'margin-inline-end:',
  ';',
  plainTransformer
)
export const marginInlineStart = core(
  'marginInlineStart',
  'margin-inline-start:',
  ';',
  plainTransformer
)
export const marginLeft = core('marginLeft', 'margin-left:', ';', pxTransformer)
export const marginRight = core(
  'marginRight',
  'margin-right:',
  ';',
  pxTransformer
)
export const marginTop = core('marginTop', 'margin-top:', ';', pxTransformer)
export const markerSide = core(
  'markerSide',
  'marker-side:',
  ';',
  plainTransformer
)
export const mask = core('mask', 'mask:', ';', colorTransformer)
export const maskBorder = core(
  'maskBorder',
  'mask-border:',
  ';',
  plainTransformer
)
export const maskBorderMode = core(
  'maskBorderMode',
  'mask-border-mode:',
  ';',
  plainTransformer
)
export const maskBorderOutset = core(
  'maskBorderOutset',
  'mask-border-outset:',
  ';',
  pxTransformer
)
export const maskBorderRepeat = core(
  'maskBorderRepeat',
  'mask-border-repeat:',
  ';',
  plainTransformer
)
export const maskBorderSlice = core(
  'maskBorderSlice',
  'mask-border-slice:',
  ';',
  plainTransformer
)
export const maskBorderSource = core(
  'maskBorderSource',
  'mask-border-source:',
  ';',
  colorTransformer
)
export const maskBorderWidth = core(
  'maskBorderWidth',
  'mask-border-width:',
  ';',
  pxTransformer
)
export const maskClip = core('maskClip', 'mask-clip:', ';', plainTransformer)
export const maskComposite = core(
  'maskComposite',
  'mask-composite:',
  ';',
  plainTransformer
)
export const maskImage = core('maskImage', 'mask-image:', ';', colorTransformer)
export const maskMode = core('maskMode', 'mask-mode:', ';', plainTransformer)
export const maskOrigin = core(
  'maskOrigin',
  'mask-origin:',
  ';',
  plainTransformer
)
export const maskPosition = core(
  'maskPosition',
  'mask-position:',
  ';',
  colorTransformer
)
export const maskRepeat = core(
  'maskRepeat',
  'mask-repeat:',
  ';',
  plainTransformer
)
export const maskSize = core('maskSize', 'mask-size:', ';', colorTransformer)
export const maskType = core('maskType', 'mask-type:', ';', plainTransformer)
export const maxBlockSize = core(
  'maxBlockSize',
  'max-block-size:',
  ';',
  plainTransformer
)
export const maxHeight = core('maxHeight', 'max-height:', ';', pxTransformer)
export const maxInlineSize = core(
  'maxInlineSize',
  'max-inline-size:',
  ';',
  plainTransformer
)
export const maxLines = core('maxLines', 'max-lines:', ';', plainTransformer)
export const maxWidth = core('maxWidth', 'max-width:', ';', pxTransformer)
export const minBlockSize = core(
  'minBlockSize',
  'min-block-size:',
  ';',
  plainTransformer
)
export const minHeight = core('minHeight', 'min-height:', ';', pxTransformer)
export const minInlineSize = core(
  'minInlineSize',
  'min-inline-size:',
  ';',
  plainTransformer
)
export const minWidth = core('minWidth', 'min-width:', ';', pxTransformer)
export const mixBlendMode = core(
  'mixBlendMode',
  'mix-blend-mode:',
  ';',
  plainTransformer
)
export const navDown = core('navDown', 'nav-down:', ';', plainTransformer)
export const navLeft = core('navLeft', 'nav-left:', ';', plainTransformer)
export const navRight = core('navRight', 'nav-right:', ';', plainTransformer)
export const navUp = core('navUp', 'nav-up:', ';', plainTransformer)
export const objectFit = core('objectFit', 'object-fit:', ';', plainTransformer)
export const objectPosition = core(
  'objectPosition',
  'object-position:',
  ';',
  colorTransformer
)
export const offset = core('offset', 'offset:', ';', plainTransformer)
export const offsetAnchor = core(
  'offsetAnchor',
  'offset-anchor:',
  ';',
  colorTransformer
)
export const offsetDistance = core(
  'offsetDistance',
  'offset-distance:',
  ';',
  pxTransformer
)
export const offsetPath = core(
  'offsetPath',
  'offset-path:',
  ';',
  plainTransformer
)
export const offsetPosition = core(
  'offsetPosition',
  'offset-position:',
  ';',
  colorTransformer
)
export const offsetRotate = core(
  'offsetRotate',
  'offset-rotate:',
  ';',
  plainTransformer
)
export const opacity = core('opacity', 'opacity:', ';', plainTransformer)
export const order = core('order', 'order:', ';', plainTransformer)
export const orphans = core('orphans', 'orphans:', ';', plainTransformer)
export const outline = core('outline', 'outline:', ';', plainTransformer)
export const outlineColor = core(
  'outlineColor',
  'outline-color:',
  ';',
  colorTransformer
)
export const outlineOffset = core(
  'outlineOffset',
  'outline-offset:',
  ';',
  pxTransformer
)
export const outlineStyle = core(
  'outlineStyle',
  'outline-style:',
  ';',
  plainTransformer
)
export const outlineWidth = core(
  'outlineWidth',
  'outline-width:',
  ';',
  plainTransformer
)
export const overflow = core('overflow', 'overflow:', ';', plainTransformer)
export const overflowBlock = core(
  'overflowBlock',
  'overflow-block:',
  ';',
  plainTransformer
)
export const overflowClipMargin = core(
  'overflowClipMargin',
  'overflow-clip-margin:',
  ';',
  plainTransformer
)
export const overflowInline = core(
  'overflowInline',
  'overflow-inline:',
  ';',
  plainTransformer
)
export const overflowWrap = core(
  'overflowWrap',
  'overflow-wrap:',
  ';',
  plainTransformer
)
export const overflowX = core('overflowX', 'overflow-x:', ';', plainTransformer)
export const overflowY = core('overflowY', 'overflow-y:', ';', plainTransformer)
export const padding = core('padding', 'padding:', ';', pxTransformer)
export const paddingBlock = core(
  'paddingBlock',
  'padding-block:',
  ';',
  plainTransformer
)
export const paddingBlockEnd = core(
  'paddingBlockEnd',
  'padding-block-end:',
  ';',
  plainTransformer
)
export const paddingBlockStart = core(
  'paddingBlockStart',
  'padding-block-start:',
  ';',
  plainTransformer
)
export const paddingBottom = core(
  'paddingBottom',
  'padding-bottom:',
  ';',
  pxTransformer
)
export const paddingInline = core(
  'paddingInline',
  'padding-inline:',
  ';',
  plainTransformer
)
export const paddingInlineEnd = core(
  'paddingInlineEnd',
  'padding-inline-end:',
  ';',
  plainTransformer
)
export const paddingInlineStart = core(
  'paddingInlineStart',
  'padding-inline-start:',
  ';',
  plainTransformer
)
export const paddingLeft = core(
  'paddingLeft',
  'padding-left:',
  ';',
  pxTransformer
)
export const paddingRight = core(
  'paddingRight',
  'padding-right:',
  ';',
  pxTransformer
)
export const paddingTop = core('paddingTop', 'padding-top:', ';', pxTransformer)
export const page = core('page', 'page:', ';', plainTransformer)
export const pageBreakAfter = core(
  'pageBreakAfter',
  'page-break-after:',
  ';',
  plainTransformer
)
export const pageBreakBefore = core(
  'pageBreakBefore',
  'page-break-before:',
  ';',
  plainTransformer
)
export const pageBreakInside = core(
  'pageBreakInside',
  'page-break-inside:',
  ';',
  plainTransformer
)
export const pause = core('pause', 'pause:', ';', plainTransformer)
export const pauseAfter = core(
  'pauseAfter',
  'pause-after:',
  ';',
  plainTransformer
)
export const pauseBefore = core(
  'pauseBefore',
  'pause-before:',
  ';',
  plainTransformer
)
export const pitch = core('pitch', 'pitch:', ';', plainTransformer)
export const pitchRange = core(
  'pitchRange',
  'pitch-range:',
  ';',
  plainTransformer
)
export const placeContent = core(
  'placeContent',
  'place-content:',
  ';',
  plainTransformer
)
export const placeItems = core(
  'placeItems',
  'place-items:',
  ';',
  plainTransformer
)
export const placeSelf = core('placeSelf', 'place-self:', ';', plainTransformer)
export const playDuring = core(
  'playDuring',
  'play-during:',
  ';',
  plainTransformer
)
export const position = core('position', 'position:', ';', plainTransformer)
export const quotes = core('quotes', 'quotes:', ';', plainTransformer)
export const regionFragment = core(
  'regionFragment',
  'region-fragment:',
  ';',
  plainTransformer
)
export const resize = core('resize', 'resize:', ';', plainTransformer)
export const rest = core('rest', 'rest:', ';', plainTransformer)
export const restAfter = core('restAfter', 'rest-after:', ';', plainTransformer)
export const restBefore = core(
  'restBefore',
  'rest-before:',
  ';',
  plainTransformer
)
export const richness = core('richness', 'richness:', ';', plainTransformer)
export const right = core('right', 'right:', ';', pxTransformer)
export const rowGap = core('rowGap', 'row-gap:', ';', pxTransformer)
export const rubyAlign = core('rubyAlign', 'ruby-align:', ';', plainTransformer)
export const rubyMerge = core('rubyMerge', 'ruby-merge:', ';', plainTransformer)
export const rubyOverhang = core(
  'rubyOverhang',
  'ruby-overhang:',
  ';',
  plainTransformer
)
export const rubyPosition = core(
  'rubyPosition',
  'ruby-position:',
  ';',
  plainTransformer
)
export const running = core('running', 'running:', ';', plainTransformer)
export const scrollBehavior = core(
  'scrollBehavior',
  'scroll-behavior:',
  ';',
  plainTransformer
)
export const scrollMargin = core(
  'scrollMargin',
  'scroll-margin:',
  ';',
  pxTransformer
)
export const scrollMarginBlock = core(
  'scrollMarginBlock',
  'scroll-margin-block:',
  ';',
  pxTransformer
)
export const scrollMarginBlockEnd = core(
  'scrollMarginBlockEnd',
  'scroll-margin-block-end:',
  ';',
  pxTransformer
)
export const scrollMarginBlockStart = core(
  'scrollMarginBlockStart',
  'scroll-margin-block-start:',
  ';',
  pxTransformer
)
export const scrollMarginBottom = core(
  'scrollMarginBottom',
  'scroll-margin-bottom:',
  ';',
  pxTransformer
)
export const scrollMarginInline = core(
  'scrollMarginInline',
  'scroll-margin-inline:',
  ';',
  pxTransformer
)
export const scrollMarginInlineEnd = core(
  'scrollMarginInlineEnd',
  'scroll-margin-inline-end:',
  ';',
  pxTransformer
)
export const scrollMarginInlineStart = core(
  'scrollMarginInlineStart',
  'scroll-margin-inline-start:',
  ';',
  pxTransformer
)
export const scrollMarginLeft = core(
  'scrollMarginLeft',
  'scroll-margin-left:',
  ';',
  pxTransformer
)
export const scrollMarginRight = core(
  'scrollMarginRight',
  'scroll-margin-right:',
  ';',
  pxTransformer
)
export const scrollMarginTop = core(
  'scrollMarginTop',
  'scroll-margin-top:',
  ';',
  pxTransformer
)
export const scrollPadding = core(
  'scrollPadding',
  'scroll-padding:',
  ';',
  pxTransformer
)
export const scrollPaddingBlock = core(
  'scrollPaddingBlock',
  'scroll-padding-block:',
  ';',
  pxTransformer
)
export const scrollPaddingBlockEnd = core(
  'scrollPaddingBlockEnd',
  'scroll-padding-block-end:',
  ';',
  pxTransformer
)
export const scrollPaddingBlockStart = core(
  'scrollPaddingBlockStart',
  'scroll-padding-block-start:',
  ';',
  pxTransformer
)
export const scrollPaddingBottom = core(
  'scrollPaddingBottom',
  'scroll-padding-bottom:',
  ';',
  pxTransformer
)
export const scrollPaddingInline = core(
  'scrollPaddingInline',
  'scroll-padding-inline:',
  ';',
  pxTransformer
)
export const scrollPaddingInlineEnd = core(
  'scrollPaddingInlineEnd',
  'scroll-padding-inline-end:',
  ';',
  pxTransformer
)
export const scrollPaddingInlineStart = core(
  'scrollPaddingInlineStart',
  'scroll-padding-inline-start:',
  ';',
  pxTransformer
)
export const scrollPaddingLeft = core(
  'scrollPaddingLeft',
  'scroll-padding-left:',
  ';',
  pxTransformer
)
export const scrollPaddingRight = core(
  'scrollPaddingRight',
  'scroll-padding-right:',
  ';',
  pxTransformer
)
export const scrollPaddingTop = core(
  'scrollPaddingTop',
  'scroll-padding-top:',
  ';',
  pxTransformer
)
export const scrollSnapAlign = core(
  'scrollSnapAlign',
  'scroll-snap-align:',
  ';',
  plainTransformer
)
export const scrollSnapStop = core(
  'scrollSnapStop',
  'scroll-snap-stop:',
  ';',
  plainTransformer
)
export const scrollSnapType = core(
  'scrollSnapType',
  'scroll-snap-type:',
  ';',
  plainTransformer
)
export const shapeImageThreshold = core(
  'shapeImageThreshold',
  'shape-image-threshold:',
  ';',
  plainTransformer
)
export const shapeInside = core(
  'shapeInside',
  'shape-inside:',
  ';',
  plainTransformer
)
export const shapeMargin = core(
  'shapeMargin',
  'shape-margin:',
  ';',
  pxTransformer
)
export const shapeOutside = core(
  'shapeOutside',
  'shape-outside:',
  ';',
  colorTransformer
)
export const spatialNavigationAction = core(
  'spatialNavigationAction',
  'spatial-navigation-action:',
  ';',
  plainTransformer
)
export const spatialNavigationContain = core(
  'spatialNavigationContain',
  'spatial-navigation-contain:',
  ';',
  plainTransformer
)
export const spatialNavigationFunction = core(
  'spatialNavigationFunction',
  'spatial-navigation-function:',
  ';',
  plainTransformer
)
export const speak = core('speak', 'speak:', ';', plainTransformer)
export const speakAs = core('speakAs', 'speak-as:', ';', plainTransformer)
export const speakHeader = core(
  'speakHeader',
  'speak-header:',
  ';',
  plainTransformer
)
export const speakNumeral = core(
  'speakNumeral',
  'speak-numeral:',
  ';',
  plainTransformer
)
export const speakPunctuation = core(
  'speakPunctuation',
  'speak-punctuation:',
  ';',
  plainTransformer
)
export const speechRate = core(
  'speechRate',
  'speech-rate:',
  ';',
  plainTransformer
)
export const stress = core('stress', 'stress:', ';', plainTransformer)
export const stringSet = core('stringSet', 'string-set:', ';', plainTransformer)
export const tabSize = core('tabSize', 'tab-size:', ';', pxTransformer)
export const tableLayout = core(
  'tableLayout',
  'table-layout:',
  ';',
  plainTransformer
)
export const textAlign = core('textAlign', 'text-align:', ';', plainTransformer)
export const textAlignAll = core(
  'textAlignAll',
  'text-align-all:',
  ';',
  plainTransformer
)
export const textAlignLast = core(
  'textAlignLast',
  'text-align-last:',
  ';',
  plainTransformer
)
export const textCombineUpright = core(
  'textCombineUpright',
  'text-combine-upright:',
  ';',
  plainTransformer
)
export const textDecoration = core(
  'textDecoration',
  'text-decoration:',
  ';',
  plainTransformer
)
export const textDecorationColor = core(
  'textDecorationColor',
  'text-decoration-color:',
  ';',
  colorTransformer
)
export const textDecorationLine = core(
  'textDecorationLine',
  'text-decoration-line:',
  ';',
  plainTransformer
)
export const textDecorationSkip = core(
  'textDecorationSkip',
  'text-decoration-skip:',
  ';',
  plainTransformer
)
export const textDecorationSkipBox = core(
  'textDecorationSkipBox',
  'text-decoration-skip-box:',
  ';',
  plainTransformer
)
export const textDecorationSkipInk = core(
  'textDecorationSkipInk',
  'text-decoration-skip-ink:',
  ';',
  plainTransformer
)
export const textDecorationSkipInset = core(
  'textDecorationSkipInset',
  'text-decoration-skip-inset:',
  ';',
  plainTransformer
)
export const textDecorationSkipSelf = core(
  'textDecorationSkipSelf',
  'text-decoration-skip-self:',
  ';',
  plainTransformer
)
export const textDecorationSkipSpaces = core(
  'textDecorationSkipSpaces',
  'text-decoration-skip-spaces:',
  ';',
  plainTransformer
)
export const textDecorationStyle = core(
  'textDecorationStyle',
  'text-decoration-style:',
  ';',
  plainTransformer
)
export const textDecorationThickness = core(
  'textDecorationThickness',
  'text-decoration-thickness:',
  ';',
  pxTransformer
)
export const textEdge = core('textEdge', 'text-edge:', ';', plainTransformer)
export const textEmphasis = core(
  'textEmphasis',
  'text-emphasis:',
  ';',
  plainTransformer
)
export const textEmphasisColor = core(
  'textEmphasisColor',
  'text-emphasis-color:',
  ';',
  colorTransformer
)
export const textEmphasisPosition = core(
  'textEmphasisPosition',
  'text-emphasis-position:',
  ';',
  plainTransformer
)
export const textEmphasisSkip = core(
  'textEmphasisSkip',
  'text-emphasis-skip:',
  ';',
  plainTransformer
)
export const textEmphasisStyle = core(
  'textEmphasisStyle',
  'text-emphasis-style:',
  ';',
  plainTransformer
)
export const textGroupAlign = core(
  'textGroupAlign',
  'text-group-align:',
  ';',
  plainTransformer
)
export const textIndent = core('textIndent', 'text-indent:', ';', pxTransformer)
export const textJustify = core(
  'textJustify',
  'text-justify:',
  ';',
  plainTransformer
)
export const textOrientation = core(
  'textOrientation',
  'text-orientation:',
  ';',
  plainTransformer
)
export const textOverflow = core(
  'textOverflow',
  'text-overflow:',
  ';',
  plainTransformer
)
export const textShadow = core(
  'textShadow',
  'text-shadow:',
  ';',
  plainTransformer
)
export const textSpaceCollapse = core(
  'textSpaceCollapse',
  'text-space-collapse:',
  ';',
  plainTransformer
)
export const textSpaceTrim = core(
  'textSpaceTrim',
  'text-space-trim:',
  ';',
  plainTransformer
)
export const textSpacing = core(
  'textSpacing',
  'text-spacing:',
  ';',
  plainTransformer
)
export const textTransform = core(
  'textTransform',
  'text-transform:',
  ';',
  plainTransformer
)
export const textUnderlineOffset = core(
  'textUnderlineOffset',
  'text-underline-offset:',
  ';',
  pxTransformer
)
export const textUnderlinePosition = core(
  'textUnderlinePosition',
  'text-underline-position:',
  ';',
  plainTransformer
)
export const textWrap = core('textWrap', 'text-wrap:', ';', plainTransformer)
export const top = core('top', 'top:', ';', pxTransformer)
export const transform = core('transform', 'transform:', ';', colorTransformer)
export const transformBox = core(
  'transformBox',
  'transform-box:',
  ';',
  plainTransformer
)
export const transformOrigin = core(
  'transformOrigin',
  'transform-origin:',
  ';',
  pxTransformer
)
export const transition = core(
  'transition',
  'transition:',
  ';',
  plainTransformer
)
export const transitionDelay = core(
  'transitionDelay',
  'transition-delay:',
  ';',
  plainTransformer
)
export const transitionDuration = core(
  'transitionDuration',
  'transition-duration:',
  ';',
  plainTransformer
)
export const transitionProperty = core(
  'transitionProperty',
  'transition-property:',
  ';',
  plainTransformer
)
export const transitionTimingFunction = core(
  'transitionTimingFunction',
  'transition-timing-function:',
  ';',
  plainTransformer
)
export const unicodeBidi = core(
  'unicodeBidi',
  'unicode-bidi:',
  ';',
  plainTransformer
)
export const userSelect = core(
  'userSelect',
  'user-select:',
  ';',
  plainTransformer
)
export const verticalAlign = core(
  'verticalAlign',
  'vertical-align:',
  ';',
  pxTransformer
)
export const visibility = core(
  'visibility',
  'visibility:',
  ';',
  plainTransformer
)
export const voiceBalance = core(
  'voiceBalance',
  'voice-balance:',
  ';',
  plainTransformer
)
export const voiceDuration = core(
  'voiceDuration',
  'voice-duration:',
  ';',
  plainTransformer
)
export const voiceFamily = core(
  'voiceFamily',
  'voice-family:',
  ';',
  plainTransformer
)
export const voicePitch = core(
  'voicePitch',
  'voice-pitch:',
  ';',
  plainTransformer
)
export const voiceRange = core(
  'voiceRange',
  'voice-range:',
  ';',
  plainTransformer
)
export const voiceRate = core('voiceRate', 'voice-rate:', ';', plainTransformer)
export const voiceStress = core(
  'voiceStress',
  'voice-stress:',
  ';',
  plainTransformer
)
export const voiceVolume = core(
  'voiceVolume',
  'voice-volume:',
  ';',
  plainTransformer
)
export const volume = core('volume', 'volume:', ';', plainTransformer)
export const whiteSpace = core(
  'whiteSpace',
  'white-space:',
  ';',
  plainTransformer
)
export const widows = core('widows', 'widows:', ';', plainTransformer)
export const width = core('width', 'width:', ';', pxTransformer)
export const willChange = core(
  'willChange',
  'will-change:',
  ';',
  plainTransformer
)
export const wordBoundaryDetection = core(
  'wordBoundaryDetection',
  'word-boundary-detection:',
  ';',
  plainTransformer
)
export const wordBoundaryExpansion = core(
  'wordBoundaryExpansion',
  'word-boundary-expansion:',
  ';',
  plainTransformer
)
export const wordBreak = core('wordBreak', 'word-break:', ';', plainTransformer)
export const wordSpacing = core(
  'wordSpacing',
  'word-spacing:',
  ';',
  pxTransformer
)
export const wordWrap = core('wordWrap', 'word-wrap:', ';', plainTransformer)
export const wrapAfter = core('wrapAfter', 'wrap-after:', ';', plainTransformer)
export const wrapBefore = core(
  'wrapBefore',
  'wrap-before:',
  ';',
  plainTransformer
)
export const wrapFlow = core('wrapFlow', 'wrap-flow:', ';', plainTransformer)
export const wrapInside = core(
  'wrapInside',
  'wrap-inside:',
  ';',
  plainTransformer
)
export const wrapThrough = core(
  'wrapThrough',
  'wrap-through:',
  ';',
  plainTransformer
)
export const writingMode = core(
  'writingMode',
  'writing-mode:',
  ';',
  plainTransformer
)
export const zIndex = core('zIndex', 'z-index:', ';', plainTransformer)
export const allSpaceTreatment = core(
  'allSpaceTreatment',
  'all-space-treatment:',
  ';',
  plainTransformer
)
export const backgroundBreak = core(
  'backgroundBreak',
  'background-break:',
  ';',
  plainTransformer
)
export const bikeshedding = core(
  'bikeshedding',
  'bikeshedding:',
  ';',
  plainTransformer
)
export const bleed = core('bleed', 'bleed:', ';', pxTransformer)
export const blockOverflow = core(
  'blockOverflow',
  'block-overflow:',
  ';',
  plainTransformer
)
export const blockProgression = core(
  'blockProgression',
  'block-progression:',
  ';',
  plainTransformer
)
export const bookmarkTarget = core(
  'bookmarkTarget',
  'bookmark-target:',
  ';',
  plainTransformer
)
export const borderBreak = core(
  'borderBreak',
  'border-break:',
  ';',
  plainTransformer
)
export const borderLength = core(
  'borderLength',
  'border-length:',
  ';',
  plainTransformer
)
export const boxAlign = core('boxAlign', 'box-align:', ';', plainTransformer)
export const boxDirection = core(
  'boxDirection',
  'box-direction:',
  ';',
  plainTransformer
)
export const boxFlex = core('boxFlex', 'box-flex:', ';', plainTransformer)
export const boxFlexGroup = core(
  'boxFlexGroup',
  'box-flex-group:',
  ';',
  plainTransformer
)
export const boxHeight = core('boxHeight', 'box-height:', ';', plainTransformer)
export const boxLines = core('boxLines', 'box-lines:', ';', plainTransformer)
export const boxOrdinalGroup = core(
  'boxOrdinalGroup',
  'box-ordinal-group:',
  ';',
  plainTransformer
)
export const boxOrient = core('boxOrient', 'box-orient:', ';', plainTransformer)
export const boxPack = core('boxPack', 'box-pack:', ';', plainTransformer)
export const boxSuppress = core(
  'boxSuppress',
  'box-suppress:',
  ';',
  plainTransformer
)
export const boxWidth = core('boxWidth', 'box-width:', ';', plainTransformer)
export const clearAfter = core(
  'clearAfter',
  'clear-after:',
  ';',
  plainTransformer
)
export const clipPath = core('clipPath', 'clipPath:', ';', plainTransformer)
export const colorProfile = core(
  'colorProfile',
  'color-profile:',
  ';',
  plainTransformer
)
export const columnBreakAfter = core(
  'columnBreakAfter',
  'column-break-after:',
  ';',
  plainTransformer
)
export const columnBreakBefore = core(
  'columnBreakBefore',
  'column-break-before:',
  ';',
  plainTransformer
)
export const contentOrder = core(
  'contentOrder',
  'content-order:',
  ';',
  plainTransformer
)
export const crop = core('crop', 'crop:', ';', plainTransformer)
export const displayInside = core(
  'displayInside',
  'display-inside:',
  ';',
  plainTransformer
)
export const displayList = core(
  'displayList',
  'display-list:',
  ';',
  plainTransformer
)
export const displayModel = core(
  'displayModel',
  'display-model:',
  ';',
  plainTransformer
)
export const displayOutside = core(
  'displayOutside',
  'display-outside:',
  ';',
  plainTransformer
)
export const displayRole = core(
  'displayRole',
  'display-role:',
  ';',
  plainTransformer
)
export const enableBackground = core(
  'enableBackground',
  'enable-background:',
  ';',
  plainTransformer
)
export const feBlend = core('feBlend', 'feBlend:', ';', plainTransformer)
export const feColorMatrix = core(
  'feColorMatrix',
  'feColorMatrix:',
  ';',
  plainTransformer
)
export const feComponentTransfer = core(
  'feComponentTransfer',
  'feComponentTransfer:',
  ';',
  plainTransformer
)
export const feComposite = core(
  'feComposite',
  'feComposite:',
  ';',
  plainTransformer
)
export const feConvolveMatrix = core(
  'feConvolveMatrix',
  'feConvolveMatrix:',
  ';',
  plainTransformer
)
export const feCustom = core('feCustom', 'feCustom:', ';', plainTransformer)
export const feCustomParam = core(
  'feCustomParam',
  'feCustomParam:',
  ';',
  plainTransformer
)
export const feCustomSource = core(
  'feCustomSource',
  'feCustomSource:',
  ';',
  plainTransformer
)
export const feDiffuseLighting = core(
  'feDiffuseLighting',
  'feDiffuseLighting:',
  ';',
  plainTransformer
)
export const feDisplacementMap = core(
  'feDisplacementMap',
  'feDisplacementMap:',
  ';',
  plainTransformer
)
export const feDistantLight = core(
  'feDistantLight',
  'feDistantLight:',
  ';',
  plainTransformer
)
export const feDropShadow = core(
  'feDropShadow',
  'feDropShadow:',
  ';',
  plainTransformer
)
export const feFlood = core('feFlood', 'feFlood:', ';', plainTransformer)
export const feFuncA = core('feFuncA', 'feFuncA:', ';', plainTransformer)
export const feFuncB = core('feFuncB', 'feFuncB:', ';', plainTransformer)
export const feFuncG = core('feFuncG', 'feFuncG:', ';', plainTransformer)
export const feFuncR = core('feFuncR', 'feFuncR:', ';', plainTransformer)
export const feGaussianBlur = core(
  'feGaussianBlur',
  'feGaussianBlur:',
  ';',
  plainTransformer
)
export const feImage = core('feImage', 'feImage:', ';', plainTransformer)
export const feMerge = core('feMerge', 'feMerge:', ';', plainTransformer)
export const feMergeNode = core(
  'feMergeNode',
  'feMergeNode:',
  ';',
  plainTransformer
)
export const feMorphology = core(
  'feMorphology',
  'feMorphology:',
  ';',
  plainTransformer
)
export const feOffset = core('feOffset', 'feOffset:', ';', plainTransformer)
export const fePointLight = core(
  'fePointLight',
  'fePointLight:',
  ';',
  plainTransformer
)
export const feSpecularLighting = core(
  'feSpecularLighting',
  'feSpecularLighting:',
  ';',
  plainTransformer
)
export const feSpotLight = core(
  'feSpotLight',
  'feSpotLight:',
  ';',
  plainTransformer
)
export const feTile = core('feTile', 'feTile:', ';', plainTransformer)
export const feTurbulence = core(
  'feTurbulence',
  'feTurbulence:',
  ';',
  plainTransformer
)
export const feUnsharpMask = core(
  'feUnsharpMask',
  'feUnsharpMask:',
  ';',
  plainTransformer
)
export const filterMargin = core(
  'filterMargin',
  'filter-margin:',
  ';',
  plainTransformer
)
export const filterMarginBottom = core(
  'filterMarginBottom',
  'filter-margin-bottom:',
  ';',
  plainTransformer
)
export const filterMarginLeft = core(
  'filterMarginLeft',
  'filter-margin-left:',
  ';',
  plainTransformer
)
export const filterMarginRight = core(
  'filterMarginRight',
  'filter-margin-right:',
  ';',
  plainTransformer
)
export const filterMarginTop = core(
  'filterMarginTop',
  'filter-margin-top:',
  ';',
  plainTransformer
)
export const flexAlign = core('flexAlign', 'flex-align:', ';', plainTransformer)
export const flexItemAlign = core(
  'flexItemAlign',
  'flex-item-align:',
  ';',
  plainTransformer
)
export const flexLinePack = core(
  'flexLinePack',
  'flex-line-pack:',
  ';',
  plainTransformer
)
export const flexOrder = core('flexOrder', 'flex-order:', ';', plainTransformer)
export const flexPack = core('flexPack', 'flex-pack:', ';', plainTransformer)
export const floatDisplace = core(
  'floatDisplace',
  'float-displace:',
  ';',
  plainTransformer
)
export const floatDisplaceAlternative2 = core(
  'floatDisplaceAlternative2',
  'float-displace--alternative-2:',
  ';',
  plainTransformer
)
export const floatDisplaceAlternative3 = core(
  'floatDisplaceAlternative3',
  'float-displace--alternative-3:',
  ';',
  plainTransformer
)
export const fontMaxSize = core(
  'fontMaxSize',
  'font-max-size:',
  ';',
  plainTransformer
)
export const fontMinSize = core(
  'fontMinSize',
  'font-min-size:',
  ';',
  plainTransformer
)
export const glyphOrientationHorizontal = core(
  'glyphOrientationHorizontal',
  'glyph-orientation-horizontal:',
  ';',
  plainTransformer
)
export const gridAfter = core('gridAfter', 'grid-after:', ';', plainTransformer)
export const gridAutoPosition = core(
  'gridAutoPosition',
  'grid-auto-position:',
  ';',
  plainTransformer
)
export const gridBefore = core(
  'gridBefore',
  'grid-before:',
  ';',
  plainTransformer
)
export const gridCell = core('gridCell', 'grid-cell:', ';', plainTransformer)
export const gridCellStacking = core(
  'gridCellStacking',
  'grid-cell-stacking:',
  ';',
  plainTransformer
)
export const gridColumnAlign = core(
  'gridColumnAlign',
  'grid-column-align:',
  ';',
  plainTransformer
)
export const gridColumnGap = core(
  'gridColumnGap',
  'grid-column-gap:',
  ';',
  pxTransformer
)
export const gridColumnPosition = core(
  'gridColumnPosition',
  'grid-column-position:',
  ';',
  plainTransformer
)
export const gridColumnSizing = core(
  'gridColumnSizing',
  'grid-column-sizing:',
  ';',
  plainTransformer
)
export const gridColumnSpan = core(
  'gridColumnSpan',
  'grid-column-span:',
  ';',
  plainTransformer
)
export const gridColumns = core(
  'gridColumns',
  'grid-columns:',
  ';',
  plainTransformer
)
export const gridDefinitionColumns = core(
  'gridDefinitionColumns',
  'grid-definition-columns:',
  ';',
  plainTransformer
)
export const gridDefinitionRows = core(
  'gridDefinitionRows',
  'grid-definition-rows:',
  ';',
  plainTransformer
)
export const gridEnd = core('gridEnd', 'grid-end:', ';', plainTransformer)
export const gridFlow = core('gridFlow', 'grid-flow:', ';', plainTransformer)
export const gridGap = core('gridGap', 'grid-gap:', ';', plainTransformer)
export const gridPosition = core(
  'gridPosition',
  'grid-position:',
  ';',
  plainTransformer
)
export const gridRowAlign = core(
  'gridRowAlign',
  'grid-row-align:',
  ';',
  plainTransformer
)
export const gridRowGap = core(
  'gridRowGap',
  'grid-row-gap:',
  ';',
  pxTransformer
)
export const gridRowPosition = core(
  'gridRowPosition',
  'grid-row-position:',
  ';',
  plainTransformer
)
export const gridRowSizing = core(
  'gridRowSizing',
  'grid-row-sizing:',
  ';',
  plainTransformer
)
export const gridRowSpan = core(
  'gridRowSpan',
  'grid-row-span:',
  ';',
  plainTransformer
)
export const gridRows = core('gridRows', 'grid-rows:', ';', plainTransformer)
export const gridSpan = core('gridSpan', 'grid-span:', ';', plainTransformer)
export const gridStart = core('gridStart', 'grid-start:', ';', plainTransformer)
export const hyphenate = core('hyphenate', 'hyphenate:', ';', plainTransformer)
export const hyphenateAfter = core(
  'hyphenateAfter',
  'hyphenate-after:',
  ';',
  plainTransformer
)
export const hyphenateBefore = core(
  'hyphenateBefore',
  'hyphenate-before:',
  ';',
  plainTransformer
)
export const hyphenateDictionary = core(
  'hyphenateDictionary',
  'hyphenate-dictionary:',
  ';',
  plainTransformer
)
export const hyphenateLimitAfter = core(
  'hyphenateLimitAfter',
  'hyphenate-limit-after:',
  ';',
  plainTransformer
)
export const hyphenateLimitBefore = core(
  'hyphenateLimitBefore',
  'hyphenate-limit-before:',
  ';',
  plainTransformer
)
export const hyphenateLines = core(
  'hyphenateLines',
  'hyphenate-lines:',
  ';',
  plainTransformer
)
export const hyphenateResource = core(
  'hyphenateResource',
  'hyphenate-resource:',
  ';',
  plainTransformer
)
export const indentEdgeReset = core(
  'indentEdgeReset',
  'indent-edge-reset:',
  ';',
  plainTransformer
)
export const initialLetters = core(
  'initialLetters',
  'initial-letters:',
  ';',
  plainTransformer
)
export const initialLettersAlign = core(
  'initialLettersAlign',
  'initial-letters-align:',
  ';',
  plainTransformer
)
export const initialLettersWrap = core(
  'initialLettersWrap',
  'initial-letters-wrap:',
  ';',
  plainTransformer
)
export const kerningMode = core(
  'kerningMode',
  'kerning-mode:',
  ';',
  plainTransformer
)
export const kerningPairThreshold = core(
  'kerningPairThreshold',
  'kerning-pair-threshold:',
  ';',
  plainTransformer
)
export const leadingTrimOver = core(
  'leadingTrimOver',
  'leading-trim-over:',
  ';',
  plainTransformer
)
export const leadingTrimUnder = core(
  'leadingTrimUnder',
  'leading-trim-under:',
  ';',
  plainTransformer
)
export const lineGridMode = core(
  'lineGridMode',
  'line-grid-mode:',
  ';',
  plainTransformer
)
export const lineGridProgression = core(
  'lineGridProgression',
  'line-grid-progression:',
  ';',
  plainTransformer
)
export const lineSizing = core(
  'lineSizing',
  'line-sizing:',
  ';',
  plainTransformer
)
export const linefeedTreatment = core(
  'linefeedTreatment',
  'linefeed-treatment:',
  ';',
  plainTransformer
)
export const mark = core('mark', 'mark:', ';', plainTransformer)
export const markAfter = core('markAfter', 'mark-after:', ';', plainTransformer)
export const markBefore = core(
  'markBefore',
  'mark-before:',
  ';',
  plainTransformer
)
export const marks = core('marks', 'marks:', ';', plainTransformer)
export const marquee = core('marquee', 'marquee:', ';', plainTransformer)
export const marqueeDirection = core(
  'marqueeDirection',
  'marquee-direction:',
  ';',
  plainTransformer
)
export const marqueeLoop = core(
  'marqueeLoop',
  'marquee-loop:',
  ';',
  plainTransformer
)
export const marqueePlayCount = core(
  'marqueePlayCount',
  'marquee-play-count:',
  ';',
  plainTransformer
)
export const marqueeRepetition = core(
  'marqueeRepetition',
  'marquee-repetition:',
  ';',
  plainTransformer
)
export const marqueeSpeed = core(
  'marqueeSpeed',
  'marquee-speed:',
  ';',
  plainTransformer
)
export const marqueeStyle = core(
  'marqueeStyle',
  'marquee-style:',
  ';',
  plainTransformer
)
export const maskBox = core('maskBox', 'mask-box:', ';', plainTransformer)
export const maskBoxOutset = core(
  'maskBoxOutset',
  'mask-box-outset:',
  ';',
  plainTransformer
)
export const maskBoxRepeat = core(
  'maskBoxRepeat',
  'mask-box-repeat:',
  ';',
  plainTransformer
)
export const maskBoxSlice = core(
  'maskBoxSlice',
  'mask-box-slice:',
  ';',
  plainTransformer
)
export const maskBoxSource = core(
  'maskBoxSource',
  'mask-box-source:',
  ';',
  plainTransformer
)
export const maskBoxWidth = core(
  'maskBoxWidth',
  'mask-box-width:',
  ';',
  plainTransformer
)
export const maskSourceType = core(
  'maskSourceType',
  'mask-source-type:',
  ';',
  plainTransformer
)
export const maxFontSize = core(
  'maxFontSize',
  'max-font-size:',
  ';',
  plainTransformer
)
export const maxZoom = core('maxZoom', 'max-zoom:', ';', plainTransformer)
export const minFontSize = core(
  'minFontSize',
  'min-font-size:',
  ';',
  plainTransformer
)
export const minZoom = core('minZoom', 'min-zoom:', ';', plainTransformer)
export const moveTo = core('moveTo', 'move-to:', ';', plainTransformer)
export const offsetAfter = core(
  'offsetAfter',
  'offset-after:',
  ';',
  plainTransformer
)
export const offsetBefore = core(
  'offsetBefore',
  'offset-before:',
  ';',
  plainTransformer
)
export const offsetEnd = core('offsetEnd', 'offset-end:', ';', plainTransformer)
export const offsetStart = core(
  'offsetStart',
  'offset-start:',
  ';',
  plainTransformer
)
export const orientation = core(
  'orientation',
  'orientation:',
  ';',
  plainTransformer
)
export const overflowClip = core(
  'overflowClip',
  'overflow-clip:',
  ';',
  plainTransformer
)
export const overflowStyle = core(
  'overflowStyle',
  'overflow-style:',
  ';',
  plainTransformer
)
export const pagePolicy = core(
  'pagePolicy',
  'page-policy:',
  ';',
  plainTransformer
)
export const phonemes = core('phonemes', 'phonemes:', ';', plainTransformer)
export const polarAnchor = core(
  'polarAnchor',
  'polar-anchor:',
  ';',
  plainTransformer
)
export const polarAngle = core(
  'polarAngle',
  'polar-angle:',
  ';',
  plainTransformer
)
export const polarDistance = core(
  'polarDistance',
  'polar-distance:',
  ';',
  plainTransformer
)
export const polarOrigin = core(
  'polarOrigin',
  'polar-origin:',
  ';',
  plainTransformer
)
export const presentationLevel = core(
  'presentationLevel',
  'presentation-level:',
  ';',
  plainTransformer
)
export const punctuationTrim = core(
  'punctuationTrim',
  'punctuation-trim:',
  ';',
  plainTransformer
)
export const regionOverflow = core(
  'regionOverflow',
  'region-overflow:',
  ';',
  plainTransformer
)
export const renderingIntent = core(
  'renderingIntent',
  'rendering-intent:',
  ';',
  plainTransformer
)
export const resizer = core('resizer', 'resizer:', ';', plainTransformer)
export const resolution = core(
  'resolution',
  'resolution:',
  ';',
  plainTransformer
)
export const rotation = core('rotation', 'rotation:', ';', plainTransformer)
export const rotationPoint = core(
  'rotationPoint',
  'rotation-point:',
  ';',
  plainTransformer
)
export const scrollSnapMargin = core(
  'scrollSnapMargin',
  'scroll-snap-margin:',
  ';',
  plainTransformer
)
export const scrollSnapMarginBlock = core(
  'scrollSnapMarginBlock',
  'scroll-snap-margin-block:',
  ';',
  plainTransformer
)
export const scrollSnapMarginBlockEnd = core(
  'scrollSnapMarginBlockEnd',
  'scroll-snap-margin-block-end:',
  ';',
  plainTransformer
)
export const scrollSnapMarginBlockStart = core(
  'scrollSnapMarginBlockStart',
  'scroll-snap-margin-block-start:',
  ';',
  plainTransformer
)
export const scrollSnapMarginBottom = core(
  'scrollSnapMarginBottom',
  'scroll-snap-margin-bottom:',
  ';',
  plainTransformer
)
export const scrollSnapMarginInline = core(
  'scrollSnapMarginInline',
  'scroll-snap-margin-inline:',
  ';',
  plainTransformer
)
export const scrollSnapMarginInlineEnd = core(
  'scrollSnapMarginInlineEnd',
  'scroll-snap-margin-inline-end:',
  ';',
  plainTransformer
)
export const scrollSnapMarginInlineStart = core(
  'scrollSnapMarginInlineStart',
  'scroll-snap-margin-inline-start:',
  ';',
  plainTransformer
)
export const scrollSnapMarginLeft = core(
  'scrollSnapMarginLeft',
  'scroll-snap-margin-left:',
  ';',
  plainTransformer
)
export const scrollSnapMarginRight = core(
  'scrollSnapMarginRight',
  'scroll-snap-margin-right:',
  ';',
  plainTransformer
)
export const scrollSnapMarginTop = core(
  'scrollSnapMarginTop',
  'scroll-snap-margin-top:',
  ';',
  plainTransformer
)
export const scrollSnapPadding = core(
  'scrollSnapPadding',
  'scroll-snap-padding:',
  ';',
  plainTransformer
)
export const scrollSnapPaddingBlock = core(
  'scrollSnapPaddingBlock',
  'scroll-snap-padding-block:',
  ';',
  plainTransformer
)
export const scrollSnapPaddingBlockEnd = core(
  'scrollSnapPaddingBlockEnd',
  'scroll-snap-padding-block-end:',
  ';',
  plainTransformer
)
export const scrollSnapPaddingBlockStart = core(
  'scrollSnapPaddingBlockStart',
  'scroll-snap-padding-block-start:',
  ';',
  plainTransformer
)
export const scrollSnapPaddingBottom = core(
  'scrollSnapPaddingBottom',
  'scroll-snap-padding-bottom:',
  ';',
  plainTransformer
)
export const scrollSnapPaddingInline = core(
  'scrollSnapPaddingInline',
  'scroll-snap-padding-inline:',
  ';',
  plainTransformer
)
export const scrollSnapPaddingInlineEnd = core(
  'scrollSnapPaddingInlineEnd',
  'scroll-snap-padding-inline-end:',
  ';',
  plainTransformer
)
export const scrollSnapPaddingInlineStart = core(
  'scrollSnapPaddingInlineStart',
  'scroll-snap-padding-inline-start:',
  ';',
  plainTransformer
)
export const scrollSnapPaddingLeft = core(
  'scrollSnapPaddingLeft',
  'scroll-snap-padding-left:',
  ';',
  plainTransformer
)
export const scrollSnapPaddingRight = core(
  'scrollSnapPaddingRight',
  'scroll-snap-padding-right:',
  ';',
  plainTransformer
)
export const scrollSnapPaddingTop = core(
  'scrollSnapPaddingTop',
  'scroll-snap-padding-top:',
  ';',
  plainTransformer
)
export const size = core('size', 'size:', ';', plainTransformer)
export const somethingOrOther = core(
  'somethingOrOther',
  'something-or-other:',
  ';',
  plainTransformer
)
export const speakability = core(
  'speakability',
  'speakability:',
  ';',
  plainTransformer
)
export const tabSide = core('tabSide', 'tab-side:', ';', plainTransformer)
export const target = core('target', 'target:', ';', plainTransformer)
export const targetName = core(
  'targetName',
  'target-name:',
  ';',
  plainTransformer
)
export const targetNew = core('targetNew', 'target-new:', ';', plainTransformer)
export const targetPosition = core(
  'targetPosition',
  'target-position:',
  ';',
  plainTransformer
)
export const textAlignFirst = core(
  'textAlignFirst',
  'text-align-first:',
  ';',
  plainTransformer
)
export const textAutospace = core(
  'textAutospace',
  'text-autospace:',
  ';',
  plainTransformer
)
export const textBlink = core('textBlink', 'text-blink:', ';', plainTransformer)
export const textCombine = core(
  'textCombine',
  'text-combine:',
  ';',
  plainTransformer
)
export const textCombineMode = core(
  'textCombineMode',
  'text-combine-mode:',
  ';',
  plainTransformer
)
export const textJustifyTrim = core(
  'textJustifyTrim',
  'text-justify-trim:',
  ';',
  plainTransformer
)
export const textKashidaSpace = core(
  'textKashidaSpace',
  'text-kashida-space:',
  ';',
  plainTransformer
)
export const textLineThrough = core(
  'textLineThrough',
  'text-line-through:',
  ';',
  plainTransformer
)
export const textLineThroughColor = core(
  'textLineThroughColor',
  'text-line-through-color:',
  ';',
  plainTransformer
)
export const textLineThroughMode = core(
  'textLineThroughMode',
  'text-line-through-mode:',
  ';',
  plainTransformer
)
export const textLineThroughStyle = core(
  'textLineThroughStyle',
  'text-line-through-style:',
  ';',
  plainTransformer
)
export const textLineThroughWidth = core(
  'textLineThroughWidth',
  'text-line-through-width:',
  ';',
  plainTransformer
)
export const textOutline = core(
  'textOutline',
  'text-outline:',
  ';',
  plainTransformer
)
export const textOverflowEllipsis = core(
  'textOverflowEllipsis',
  'text-overflow-ellipsis:',
  ';',
  plainTransformer
)
export const textOverflowMode = core(
  'textOverflowMode',
  'text-overflow-mode:',
  ';',
  plainTransformer
)
export const textOverline = core(
  'textOverline',
  'text-overline:',
  ';',
  plainTransformer
)
export const textOverlineColor = core(
  'textOverlineColor',
  'text-overline-color:',
  ';',
  plainTransformer
)
export const textOverlineMode = core(
  'textOverlineMode',
  'text-overline-mode:',
  ';',
  plainTransformer
)
export const textOverlineStyle = core(
  'textOverlineStyle',
  'text-overline-style:',
  ';',
  plainTransformer
)
export const textOverlineWidth = core(
  'textOverlineWidth',
  'text-overline-width:',
  ';',
  plainTransformer
)
export const textReplace = core(
  'textReplace',
  'text-replace:',
  ';',
  plainTransformer
)
export const textScript = core(
  'textScript',
  'text-script:',
  ';',
  plainTransformer
)
export const textTrim = core('textTrim', 'text-trim:', ';', plainTransformer)
export const textUnderline = core(
  'textUnderline',
  'text-underline:',
  ';',
  plainTransformer
)
export const textUnderlineColor = core(
  'textUnderlineColor',
  'text-underline-color:',
  ';',
  plainTransformer
)
export const textUnderlineMode = core(
  'textUnderlineMode',
  'text-underline-mode:',
  ';',
  plainTransformer
)
export const textUnderlineStyle = core(
  'textUnderlineStyle',
  'text-underline-style:',
  ';',
  plainTransformer
)
export const textUnderlineWidth = core(
  'textUnderlineWidth',
  'text-underline-width:',
  ';',
  plainTransformer
)
export const userZoom = core('userZoom', 'user-zoom:', ';', plainTransformer)
export const verticalPosition = core(
  'verticalPosition',
  'vertical-position:',
  ';',
  plainTransformer
)
export const voicePitchRange = core(
  'voicePitchRange',
  'voice-pitch-range:',
  ';',
  plainTransformer
)
export const whiteSpaceCollapse = core(
  'whiteSpaceCollapse',
  'white-space-collapse:',
  ';',
  plainTransformer
)
export const whiteSpaceCollapsing = core(
  'whiteSpaceCollapsing',
  'white-space-collapsing:',
  ';',
  plainTransformer
)
export const whiteSpaceTreatment = core(
  'whiteSpaceTreatment',
  'white-space-treatment:',
  ';',
  plainTransformer
)
export const wordBreakCjk = core(
  'wordBreakCjk',
  'word-break-cjk:',
  ';',
  plainTransformer
)
export const wordBreakInside = core(
  'wordBreakInside',
  'word-break-inside:',
  ';',
  plainTransformer
)
export const wrap = core('wrap', 'wrap:', ';', plainTransformer)
export const wrapMargin = core(
  'wrapMargin',
  'wrap-margin:',
  ';',
  plainTransformer
)
export const wrapOption = core(
  'wrapOption',
  'wrap-option:',
  ';',
  plainTransformer
)
export const wrapPadding = core(
  'wrapPadding',
  'wrap-padding:',
  ';',
  plainTransformer
)
export const zoom = core('zoom', 'zoom:', ';', colorTransformer)
