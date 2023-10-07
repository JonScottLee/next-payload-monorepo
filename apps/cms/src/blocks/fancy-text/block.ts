import { Block } from 'payload/types'

export const FancyTextBlock: Block = {
  slug: 'fancy-text-block',
  interfaceName: 'IFancyTextBlock',
  fields: [
    {
      name: 'text',
      label: 'Text',
      type: 'richText',
      required: true,
    },
    {
      name: 'textEffects',
      label: 'Text Effects',
      type: 'group',
      fields: [
        {
          name: 'fadeIn',
          label: 'Fade In Text',
          type: 'checkbox',
          defaultValue: false,
          admin: {
            description: 'Choose whether the text should fade into view',
          },
        },
        {
          name: 'sliding',
          label: 'Sliding',
          type: 'radio',
          defaultValue: 'none',
          admin: {
            layout: 'horizontal',
            description: 'Choose the direction the text will slide',
          },
          options: [
            {
              label: 'None',
              value: 'none',
            },
            {
              label: 'From Left',
              value: 'left',
            },
            {
              label: 'From Right',
              value: 'right',
            },
            {
              label: 'From Top',
              value: 'up',
            },
            {
              label: 'From Bottom',
              value: 'down',
            },
          ],
        },
      ],
    },
  ],
}
