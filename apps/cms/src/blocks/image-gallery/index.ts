import { Block, Field } from 'payload/types'
import { getContentBlockConfig } from '../content-block'

const fields: Field[] = [
  {
    name: 'images',
    label: 'Images',
    type: 'array',
    required: true,
    fields: [
      {
        name: 'image',
        label: 'Image',
        type: 'upload',
        relationTo: 'media',
        required: true,
      },
      {
        name: 'caption',
        label: 'Caption',
        type: 'text',
      },
    ],
  },
]

export const ImageGalleryBlock: Block = getContentBlockConfig({
  slug: 'image-gallery-block',
  interfaceName: 'IImageGalleryBlock',
  fields,
})
