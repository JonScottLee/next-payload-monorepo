import { Block } from 'payload/types'
import { TextBlock } from '../text-block'
import { CallToActionBlock } from '../call-to-action'
import { NumberTout } from '../number-tout'
import { MediaBlock } from '../media-block'
import { TestimonialBlock } from '../testimonial-block'
import { ReusableContent } from '../reusable-content'
import { blockHeader } from '../../fields/block-header'

export const ResponsiveGridBlock: Block = {
  slug: 'responsive-grid-block',
  interfaceName: 'IResponsiveGrid',
  fields: [
    blockHeader,
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
      blocks: [
        TextBlock,
        CallToActionBlock,
        NumberTout,
        MediaBlock,
        TestimonialBlock,
        ReusableContent,
      ],
    },
  ],
}
