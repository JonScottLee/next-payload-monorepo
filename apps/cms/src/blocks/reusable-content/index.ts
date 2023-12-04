import type { Block, Field } from 'payload/types'

const fields: Field[] = [
  {
    name: 'reusableContent',
    type: 'relationship',
    relationTo: 'reusable-content',
    required: true,
  },
]

export const ReusableContent: Block = {
  slug: 'reusable-content-block',
  interfaceName: 'IReusableContentBlock',
  fields: [],
}
