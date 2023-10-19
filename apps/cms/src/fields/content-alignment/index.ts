import { Field } from 'payload/types'

export const contentAlignment: Field = {
  name: 'alignment',
  label: 'Content Alignment',
  type: 'radio',
  defaultValue: 'center',
  options: [
    {
      label: 'Left',
      value: 'left',
    },
    {
      label: 'Center',
      value: 'center',
    },
    {
      label: 'Right',
      value: 'right',
    },
  ],
}
