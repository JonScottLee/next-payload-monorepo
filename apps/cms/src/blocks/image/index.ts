import { Block, Field } from 'payload/types'
import { getContentBlockConfig } from '../content-block'

const fields: Field[] = [
  {
    name: 'image',
    label: 'Image',
    type: 'upload',
    relationTo: 'media',
    required: true,
  },
]

export const ImageBlock: Block = getContentBlockConfig({
  slug: 'image-block',
  interfaceName: 'IImageBlock',
  fields,
})
