import { Block } from 'payload/types'

export const TextBlock: Block = {
  slug: 'map-block',
  fields: [
    {
      name: 'text',
      label: 'Text',
      type: 'richText',
      required: true,
    },
  ],
}
