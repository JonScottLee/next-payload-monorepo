import type { GlobalConfig } from 'payload/types'

import { isAdmin } from '../access/isAdmin'
import link from '../fields/link'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
    update: isAdmin,
  },
  fields: [
    {
      name: 'columns',
      type: 'array',
      required: true,
      minRows: 1,
      maxRows: 3,
      fields: [
        {
          name: 'heading',
          type: 'text',
          label: 'Column Heading',
        },
        {
          name: 'navItems',
          type: 'array',
          fields: [link()],
        },
      ],
    },
  ],
}
