import { Block } from 'payload/types'
import { TextBlock } from '../text-block/block'
import { CallToActionBlock } from '../call-to-action/block'
import { NumberTout } from '../number-tout/block'
import { MediaBlock } from '../media-block/block'
import { TestimonialBlock } from '../testimonial-block/block'
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
