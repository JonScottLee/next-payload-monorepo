import { Block } from 'payload/types'
import { textEffects } from '../../fields/text-effects'
import { blockHeader } from '../../fields/block-header'

export const MediaBlock: Block = {
  slug: 'media-block',
  interfaceName: 'IMediaBlock',
  fields: [
    blockHeader,
    {
      name: 'orientation',
      label: 'Orientation',
      type: 'radio',
      defaultValue: 'responsive',
      options: [
        {
          label: 'Vertical',
          value: 'vertical',
        },
        {
          label: 'Horizontal',
          value: 'horizontal',
        },
        {
          label: 'Responsive',
          value: 'responsive',
        },
      ],
    },
    {
      name: 'text',
      label: 'Text',
      type: 'richText',
      required: true,
    },
    textEffects,
    {
      name: 'image',
      label: 'Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'position',
      label: 'Position',
      type: 'radio',
      defaultValue: 'left',
      options: [
        {
          label: 'Left',
          value: 'left',
        },
        {
          label: 'Right',
          value: 'right',
        },
      ],
      admin: {
        condition: (_, siblingData): boolean => siblingData.orientation !== 'vertical',
      },
    },
  ],
}
