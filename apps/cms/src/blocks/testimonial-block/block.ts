import { Block } from 'payload/types'
import { blockHeader } from '../../fields/block-header'

export const TestimonialBlock: Block = {
  slug: 'testimonial-block',
  interfaceName: 'ITestimonialBlock',
  fields: [
    blockHeader,
    {
      name: 'text',
      label: 'Text',
      type: 'richText',
      required: true,
    },
    {
      name: 'author',
      label: 'Author',
      type: 'text',
      required: true,
    },
    {
      name: 'title',
      label: 'Title',
      type: 'text',
    },
    {
      name: 'image',
      label: 'Image',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
