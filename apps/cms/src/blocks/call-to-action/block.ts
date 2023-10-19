import { Block } from 'payload/types'
import { textEffects } from '../../fields/text-effects'
import { link } from '../../fields/link'
import { background } from '../../fields/background'
import { contentAlignment } from '../../fields/content-alignment'

export const CallToActionBlock: Block = {
  slug: 'call-to-action-block',
  interfaceName: 'ICallToAction',
  fields: [
    {
      name: 'text',
      required: true,
      type: 'richText',
    },
    contentAlignment,
    background,
    textEffects,
    link(),
  ],
}
