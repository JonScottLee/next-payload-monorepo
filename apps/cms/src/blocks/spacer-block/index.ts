import type { Block, Field } from 'payload/types'

const fields: Field[] = [
  {
    name: 'space',
    type: 'radio',
    label: 'Space',
    defaultValue: 'small',
    options: [
      {
        label: 'Small',
        value: 'small',
      },
      {
        label: 'Medium',
        value: 'medium',
      },
      {
        label: 'Large',
        value: 'large',
      },
    ],
    admin: {
      description: 'The amount of space to add',
    },
  },
]

export const SpacerBlock: Block = {
  slug: 'spacer-block',
  interfaceName: 'ISpacerBlock',
  fields,
}
