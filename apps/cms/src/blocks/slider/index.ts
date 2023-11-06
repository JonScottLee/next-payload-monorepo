import { Block } from 'payload/types'
import { TextBlock } from '../text-block'
import { CallToActionBlock } from '../call-to-action'
import { NumberTout } from '../number-tout'
import { MediaBlock } from '../media-block'
import { TestimonialBlock } from '../testimonial-block'
import { ReusableContent } from '../reusable-content'
import { blockHeader } from '../../fields/block-header'
import { ImageBlock } from '../image'

export const SliderBlock: Block = {
  slug: 'slider-block',
  interfaceName: 'ISlider',
  fields: [
    blockHeader,
    {
      name: 'slidesPerView',
      label: 'Slides Per View',
      type: 'number',
      defaultValue: 3,
    },
    {
      name: 'blocks',
      admin: {
        description: 'Add blocks to the page layout',
      },
      label: 'Blocks',
      type: 'blocks',
      blocks: [
        CallToActionBlock,
        ImageBlock,
        MediaBlock,
        NumberTout,
        ReusableContent,
        TestimonialBlock,
        TextBlock,
      ],
    },
  ],
}
