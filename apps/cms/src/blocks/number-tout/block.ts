import { Block } from 'payload/types'
import { textEffects } from '../../fields/text-effects'

export const NumberTout: Block = {
  slug: 'number-tout-block',
  interfaceName: 'INumberTout',
  fields: [
    {
      name: 'number',
      label: 'Number',
      type: 'number',
      required: true,
      admin: {
        width: '25%',
      }
    },
    {
      name: 'numberSuffix',
      label: 'Number suffix',
      type: 'text',
      admin: {
        width: '10%',
      }
    },
    {
      name: 'countUp',
      label: 'Count up',
      type: 'checkbox',
    },
    {
      type: 'text',
      name: 'text',
      label: 'Text',
      required: true,
    },
  ],
}
