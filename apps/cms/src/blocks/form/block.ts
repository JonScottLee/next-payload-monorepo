import { Block } from 'payload/types'
import { richText } from '../../fields/rich-text'
import { blockHeader } from '../../fields/block-header'

export const FormBlock: Block = {
  slug: 'form-block',
  interfaceName: 'IFormBlock',
  labels: {
    singular: 'Form',
    plural: 'Form',
  },
  graphQL: {
    singularName: 'FormBlock',
  },
  fields: [
    blockHeader,
    {
      name: 'form',
      type: 'relationship',
      relationTo: 'forms',
      required: true,
    },
    {
      name: 'enableIntro',
      label: 'Enable Intro Content',
      type: 'checkbox',
    },
    richText({
      name: 'introContent',
      label: 'Intro Content',
      admin: {
        condition: (_, { enableIntro }) => Boolean(enableIntro),
      },
    }),
  ],
}
