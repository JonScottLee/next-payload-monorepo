import { Block, Field } from 'payload/types'
import { TextBlock } from '../text-block'
import { CallToActionBlock } from '../call-to-action'
import { NumberTout } from '../number-tout'
import { MediaBlock } from '../media-block'
import { ReusableContent } from '../reusable-content'
import { getContentBlockConfig } from '../content-block'

const fields: Field[] = [
  {
    name: 'blocks',
    admin: {
      description: 'Add blocks to the page layout',
    },
    label: 'Blocks',
    type: 'blocks',
    blocks: [], // TextBlock, CallToActionBlock, NumberTout, MediaBlock
  },
]

export const ResponsiveGridBlock: Block = getContentBlockConfig({
  slug: 'responsive-grid-block',
  interfaceName: 'IResponsiveGrid',
  fields: [],
})
