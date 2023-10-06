import { Block } from 'payload/types'

export const TextBlock: Block = {
  slug: 'text-block',
  interfaceName: 'ITextBlock',
  fields: [
    {
      name: 'text',
      label: 'Text',
      type: 'richText',
      required: true,
    },
  ],
}
