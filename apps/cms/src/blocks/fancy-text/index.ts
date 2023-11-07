import { Block, Field } from 'payload/types'
import { textEffects } from '../../fields/text-effects'
import { getContentBlockConfig } from '../content-block'

const fields: Field[] = [
  {
    name: 'text',
    label: 'Text',
    type: 'richText',
    required: true,
  },
  textEffects,
]

export const FancyTextBlock: Block = getContentBlockConfig({
  slug: 'fancy-text-block',
  interfaceName: 'IFancyTextBlock',
  fields,
})
