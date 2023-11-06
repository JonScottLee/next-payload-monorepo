import { Block } from 'payload/types'
import { blockHeader } from '../../fields/block-header'

export const ImageBlock: Block = {
  slug: 'image-block',
  interfaceName: 'IImageBlock',
  fields: [
    blockHeader,
    {
      name: 'image',
      label: 'Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
