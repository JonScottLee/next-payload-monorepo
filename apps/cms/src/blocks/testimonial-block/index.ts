import { Block, Field } from 'payload/types'
import { getContentBlockConfig } from '../content-block'

const fields: Field[] = [
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
]

export const TestimonialBlock: Block = getContentBlockConfig({
  slug: 'testimonial-block',
  interfaceName: 'ITestimonialBlock',
  fields,
})
