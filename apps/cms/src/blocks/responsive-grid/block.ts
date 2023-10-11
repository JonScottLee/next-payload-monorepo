import { Block } from 'payload/types'
import { TextBlock } from '../text-block/block'
import { CallToActionBlock } from '../call-to-action/block'

export const ResponsiveGridBlock: Block = {
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
      blocks: [TextBlock, CallToActionBlock],
    },
  ],
}
