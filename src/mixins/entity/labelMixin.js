import {
  show,
  distanceDisplayCondition,
  text,
  font,
  labelStyle,
  scale,
  showBackground,
  backgroundColor,
  backgroundPadding,
  pixelOffset,
  eyeOffset,
  horizontalOrigin,
  verticalOrigin,
  heightReference,
  fillColor,
  outlineColor,
  outlineWidth,
  translucencyByDistance,
  pixelOffsetScaleByDistance,
  scaleByDistance,
  disableDepthTestDistance
} from '@/mixins/entity/allProps'

export default {
  mixins: [
    show,
    distanceDisplayCondition,
    text,
    font,
    labelStyle,
    scale,
    showBackground,
    backgroundColor,
    backgroundPadding,
    pixelOffset,
    eyeOffset,
    horizontalOrigin,
    verticalOrigin,
    heightReference,
    fillColor,
    outlineColor,
    outlineWidth,
    translucencyByDistance,
    pixelOffsetScaleByDistance,
    scaleByDistance,
    disableDepthTestDistance
  ]
}