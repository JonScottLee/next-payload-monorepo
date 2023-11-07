import { Block, Field } from 'payload/types'
import { textEffects } from '../../fields/text-effects'
import { link } from '../../fields/link'
import { background } from '../../fields/background'
import { contentAlignment } from '../../fields/content-alignment'
import { getContentBlockConfig } from '../content-block'

const fields: Field[] = [
  {
    name: 'text',
    required: true,
    type: 'richText',
  },
  contentAlignment,
  background,
  textEffects,
  link(),
]

export const CallToActionBlock: Block = getContentBlockConfig({
  slug: 'call-to-action-block',
  interfaceName: 'ICallToAction',
  fields,
})
