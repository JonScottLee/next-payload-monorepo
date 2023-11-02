import { Block } from 'payload/types'
import { textEffects } from '../../fields/text-effects'
import { blockHeader } from '../../fields/block-header'

export const FancyTextBlock: Block = {
  slug: 'fancy-text-block',
  interfaceName: 'IFancyTextBlock',
  fields: [
    blockHeader,
    {
      name: 'text',
      label: 'Text',
      type: 'richText',
      required: true,
    },
    textEffects,
  ],
}
