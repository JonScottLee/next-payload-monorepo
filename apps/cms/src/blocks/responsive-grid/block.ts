import { Block } from 'payload/types'
import { TextBlock } from '../text-block/block'
import { CallToActionBlock } from '../call-to-action/block'
import { NumberTout } from '../number-tout/block'
import { MediaBlock } from '../media-block/block'
import { TestimonialBlock } from '../testimonial-block/block'

export const ResponsiveGridBlock: Block = {
  slug: 'responsive-grid-block',
  interfaceName: 'IResponsiveGrid',
  fields: [
    {
      name: 'headerText',
      type: 'richText',
    },
    {
      name: 'trailingContent',
      type: 'richText',
    },
    {
      name: 'blocks',
      admin: {
        description: 'Add blocks to the page layout',
      },
      label: 'Blocks',
      type: 'blocks',
      blocks: [TextBlock, CallToActionBlock, NumberTout, MediaBlock, TestimonialBlock],
    },
  ],
}
