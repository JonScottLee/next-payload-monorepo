import { Block, Field } from 'payload/types'
import { getContentBlockConfig } from '../content-block'

const fields: Field[] = [
  {
    name: 'number',
    label: 'Number',
    type: 'number',
    required: true,
    admin: {
      width: '25%',
    },
  },
  {
    name: 'numberSuffix',
    label: 'Number suffix',
    type: 'text',
    admin: {
      width: '10%',
    },
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
]

export const NumberTout: Block = getContentBlockConfig({
  slug: 'number-tout-block',
  interfaceName: 'INumberTout',
  fields,
})
