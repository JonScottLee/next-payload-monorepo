import { Block } from 'payload/types'

export const MediaBlock: Block = {
  slug: 'media-block',
  interfaceName: 'IMediaBlock',
  fields: [
    {
      name: 'text',
      label: 'Text',
      type: 'richText',
      required: true,
    },
    {
      type: 'group',
      name: 'Image',
      fields: [
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
        },
      ],
    },
  ],
}
