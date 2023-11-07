import { Block, Field } from 'payload/types'
import { TextBlock } from '../text-block'
import { CallToActionBlock } from '../call-to-action'
import { NumberTout } from '../number-tout'
import { MediaBlock } from '../media-block'
import { TestimonialBlock } from '../testimonial-block'
import { ReusableContent } from '../reusable-content'
import { ImageBlock } from '../image'
import { getContentBlockConfig } from '../content-block'

const fields: Field[] = [
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
]

export const SliderBlock: Block = getContentBlockConfig({
  slug: 'slider-block',
  interfaceName: 'ISlider',
  fields,
})
