import { FC } from 'react'
import { CallToActionBlock } from './blocks/call-to-action-block/call-to-action-block'
import { FancyTextBlock } from './blocks/fancy-text-block/fancy-text-block'
import { FormBlock } from './form-builder/form'
import { MapBlock } from './blocks/map-block/map-block'
import { MediaBlock } from './blocks/media-block/media-block'
import { NumberToutBlock } from './blocks/number-tout-block/number-tout-block'
import { ResponsiveGridBlock } from './blocks/responsive-grid-block/responsive-grid-block'
import { RowBlock } from './blocks/row-block/row-block'
import { SpacerBlock } from './blocks/spacer-block/spacer-block'
import { TestimonialBlock } from './blocks/testimonial-block/testimonial-block'
import { TextBlock } from './blocks/text-block/text-block'
import { SliderBlock } from './blocks/slider-block/slider-block'

export const allComponents: Record<string, FC<any>> = {
  'call-to-action-block': CallToActionBlock,
  'fancy-text-block': FancyTextBlock,
  'form-block': FormBlock,
  'map-block': MapBlock,
  'media-block': MediaBlock,
  'number-tout-block': NumberToutBlock,
  'responsive-grid-block': ResponsiveGridBlock,
  'row-block': RowBlock,
  'slider-block': SliderBlock,
  'spacer-block': SpacerBlock,
  'testimonial-block': TestimonialBlock,
  'text-block': TextBlock,
}
