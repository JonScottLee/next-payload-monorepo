import type { Block } from 'payload/types'

export const SpacerBlock: Block = {
  slug: 'spacer-block',
  interfaceName: 'ISpacerBlock',
  fields: [
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
  ],
}
