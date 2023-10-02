import { GlobalConfig } from 'payload/types'
import { isAdmin } from '../access'
import { zip } from '../fields/zip'

export const Address: GlobalConfig = {
  slug: 'address',
  access: {
    read: (): boolean => true,
    update: isAdmin,
  },
  label: 'Address',
  fields: [
    {
      name: 'street',
      label: 'Street',
      type: 'text',
      required: true,
    },
    {
      name: 'unit',
      label: 'Unit',
      type: 'text',
      admin: {
        description: 'Building unit, apartment #, etc.',
      },
    },
    {
      name: 'city',
      label: 'City',
      type: 'text',
      required: true,
    },
    {
      name: 'state',
      label: 'State',
      type: 'text',
      required: true,
    },
    zip,
    {
      name: 'phone',
      label: 'Phone Number',
      type: 'number',
      required: true,
    },
    {
      name: 'email',
      label: 'Email Address',
      type: 'text',
      required: true,
    },
  ],
}
