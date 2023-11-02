import type { Block } from 'payload/types'

export const ReusableContent: Block = {
  slug: 'reusable-content-block',
  interfaceName: 'IReusableContentBlock',
  fields: [
    {
      name: 'reusableContent',
      type: 'relationship',
      relationTo: 'reusable-content',
      required: true,
    },
  ],
}
