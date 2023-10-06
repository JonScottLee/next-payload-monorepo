import { type CollectionConfig } from 'payload/types'

import { isAdmin, isAdminOrEditor, publishedOnly } from '../access'

import { slugField } from '../fields/slug'
import { TextBlock, MapBlock } from '../blocks'
import { FormBlock } from '../blocks/form/block'
import { MediaBlock } from '../blocks/media-block/block'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    defaultColumns: ['title', 'status'],
    useAsTitle: 'title',
  },
  versions: {
    drafts: true,
  },
  labels: {
    singular: 'Page',
    plural: 'Pages',
  },
  access: {
    create: isAdminOrEditor,
    read: publishedOnly,
    readVersions: isAdminOrEditor,
    update: isAdminOrEditor,
    delete: isAdmin,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Details',
          fields: [
            {
              name: 'title',
              type: 'text',
              localized: true,
              required: true,
            },
          ],
        },
        {
          label: 'Content',
          fields: [
            {
              name: 'content',
              type: 'richText',
              localized: true,
              required: true,
            },
          ],
        },
        {
          label: 'Blocks',
          fields: [
            {
              name: 'blocks',
              admin: {
                description: 'Add blocks to the page layout',
              },
              label: 'Blocks',
              type: 'blocks',
              blocks: [TextBlock, MapBlock, FormBlock, MediaBlock],
            },
          ],
        },
      ],
    },
    slugField(),
    {
      name: 'publishedOn',
      type: 'date',
      required: true,
      defaultValue: () => new Date(),
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
        position: 'sidebar',
      },
    },
  ],
}
