import { Field } from 'payload/types'

export const background: Field = {
  name: 'background',
  label: 'Background Image',
  type: 'upload',
  relationTo: 'media',
}
