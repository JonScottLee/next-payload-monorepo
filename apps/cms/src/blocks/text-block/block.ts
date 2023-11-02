import { Block } from 'payload/types'
import { blockHeader } from '../../fields/block-header'

export const TextBlock: Block = {
  slug: 'text-block',
  interfaceName: 'ITextBlock',
  fields: [
    blockHeader,
    {
      name: 'text',
      label: 'Text',
      type: 'richText',
      required: true,
    },
  ],
}
