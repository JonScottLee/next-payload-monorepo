import { Block } from 'payload/types'
import { textEffects } from '../../fields/text-effects'
import { blockHeader } from '../../fields/block-header'

export const ImageGalleryBlock: Block = {
  slug: 'image-gallery-block',
  interfaceName: 'IImageGalleryBlock',
  fields: [
    blockHeader,
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
  ],
}
