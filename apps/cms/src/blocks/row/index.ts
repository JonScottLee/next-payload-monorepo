import { Block } from 'payload/types'
import { TextBlock } from '../text-block'
import { CallToActionBlock } from '../call-to-action'
import { NumberTout } from '../number-tout'
import { MediaBlock } from '../media-block'
import { TestimonialBlock } from '../testimonial-block'
import { blockHeader } from '../../fields/block-header'

export const RowBlock: Block = {
  slug: 'row-block',
  interfaceName: 'IRowBlock',
  fields: [
    blockHeader,
    {
      name: 'wrap',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'blocks',
      label: 'Blocks',
      type: 'blocks',
      blocks: [TextBlock, CallToActionBlock, NumberTout, MediaBlock, TestimonialBlock],
    },
  ],
}
