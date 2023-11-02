import { Field } from 'payload/types'

// Jon: use this in all blocks, basically. Don't forget to regenerate types, and probably create
// a blockHeader component to handle all the guts.
export const blockHeader: Field = {
  name: 'blockHeader',
  interfaceName: 'IBlockHeader',
  label: 'Block Header',
  type: 'group',
  fields: [
    {
      name: 'headerText',
      label: 'Block Header Text',
      type: 'richText',
    },
  ],
}
