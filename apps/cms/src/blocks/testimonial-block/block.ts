import { Block } from 'payload/types'

export const TestimonialBlock: Block = {
  slug: 'testimonial-block',
  interfaceName: 'ITestimonialBlock',
  fields: [
    {
      name: 'headline',
      label: 'Headline',
      type: 'text',
      required: true,
    },
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
