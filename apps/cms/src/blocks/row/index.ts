import { Block, Field } from 'payload/types'
import { TextBlock } from '../text-block'
import { CallToActionBlock } from '../call-to-action'
import { NumberTout } from '../number-tout'
import { MediaBlock } from '../media-block'
import { TestimonialBlock } from '../testimonial-block'
import { getContentBlockConfig } from '../content-block'

const fields: Field[] = [
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
]

export const RowBlock: Block = getContentBlockConfig({
  slug: 'row-block',
  interfaceName: 'IRowBlock',
  fields,
})
