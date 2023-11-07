import { Block, Field } from 'payload/types'
import { getContentBlockConfig } from '../content-block'

const fields: Field[] = [
  {
    name: 'text',
    label: 'Text',
    type: 'richText',
    required: true,
  },
]

export const TextBlock: Block = getContentBlockConfig({
  slug: 'text-block',
  interfaceName: 'ITextBlock',
  fields,
})
