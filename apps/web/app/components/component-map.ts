import { FC } from 'react'
import { CallToActionBlock } from './call-to-action-block/call-to-action-block'
import { FancyTextBlock } from './fancy-text-block/fancy-text-block'
import { FormBlock } from './form-builder/form'
import { MapBlock } from './map-block/map-block'
import { MediaBlock } from './media-block/media-block'
import { NumberToutBlock } from './number-tout-block/number-tout-block'
import { ResponsiveGridBlock } from './responsive-grid-block/responsive-grid-block'
import { RowBlock } from './row-block/row-block'
import { SpacerBlock } from './spacer-block/spacer-block'
import { TestimonialBlock } from './testimonial-block/testimonial-block'
import { TextBlock } from './text-block/text-block'
import { SliderBlock } from './slider-block/slider'

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
