import { Block, Field } from 'payload/types'
import { textEffects } from '../../fields/text-effects'
import { getContentBlockConfig } from '../content-block'

const fields: Field[] = [
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
]

export const MediaBlock: Block = getContentBlockConfig({
  slug: 'media-block',
  interfaceName: 'IMediaBlock',
  fields,
})
