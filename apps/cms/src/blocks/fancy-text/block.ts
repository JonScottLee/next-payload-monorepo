import { Block } from 'payload/types'
import { textEffects } from '../../fields/text-effects'

export const FancyTextBlock: Block = {
  slug: 'fancy-text-block',
  interfaceName: 'IFancyTextBlock',
  fields: [
    {
      name: 'text',
      label: 'Text',
      type: 'richText',
      required: true,
    },
    textEffects,
  ],
}
