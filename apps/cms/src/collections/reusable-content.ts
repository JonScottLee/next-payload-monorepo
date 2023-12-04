import { Field, type CollectionConfig } from 'payload/types'
import { isAdmin, isAdminOrEditor, publishedOnly } from '../access'

const fields: Field[] = [
  {
    name: 'title',
    type: 'text',
    required: true,
  },
  {
    name: 'layout',
    type: 'blocks',
    required: true,
    blocks: [],
  },
]

export const ReusableContent: CollectionConfig = {
  slug: 'reusable-content',
  admin: {
    defaultColumns: ['title', 'status'],
    useAsTitle: 'title',
  },
  versions: {
    drafts: true,
  },
  labels: {
    singular: 'Reusable Content',
    plural: 'Reusable Content',
  },
  access: {
    create: isAdminOrEditor,
    read: publishedOnly,
    readVersions: isAdminOrEditor,
    update: isAdminOrEditor,
    delete: isAdmin,
  },
  fields: [],
}
