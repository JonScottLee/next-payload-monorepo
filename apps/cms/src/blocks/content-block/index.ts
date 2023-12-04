import { Block, Field } from 'payload/types'
import { blockHeader } from '../../fields/block-header'

interface IContentBlockProps {
  slug: string
  interfaceName: string
  fields?: Field[]
}

export const contentBlock = ({ slug, interfaceName, fields = [] }: IContentBlockProps): Block => ({
  slug,
  interfaceName,
  fields: [
    blockHeader,
    {
      name: 'trailingContent',
      label: 'Block Trailing Content',
      type: 'richText',
    },
    ...fields,
  ],
})

interface GetContentBlockConfig {
  slug: string
  interfaceName: string
  fields: Field[]
  [key: string]: unknown
}

export const getContentBlockConfig = ({
  slug,
  interfaceName,
  fields = [],
}: GetContentBlockConfig): Block =>
  contentBlock({
    slug,
    interfaceName,
    fields,
  })
