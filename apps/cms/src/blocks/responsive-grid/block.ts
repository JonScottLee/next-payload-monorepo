import { Block } from 'payload/types'
// import { textEffects } from '../../fields/text-effects'
import { TextBlock } from '../text-block/block'

export const ResponsiveGrid: Block = {
  slug: 'responsive-grid-block',
  interfaceName: 'IResponsiveGrid',
  fields: [
    {
      name: 'headerText',
      required: true,
      type: 'richText',
    },
    {
      name: 'blocks',
      admin: {
        description: 'Add blocks to the page layout',
      },
      label: 'Blocks',
      type: 'blocks',
      blocks: [TextBlock],
    },
  ],
}
