import { Block } from 'payload/types'
import { blockHeader } from '../../fields/block-header'

export const MapBlock: Block = {
  slug: 'map-block',
  interfaceName: 'IMapBlock',
  fields: [
    blockHeader,
    {
      name: 'mapQuery',
      label: 'Map Query String',
      type: 'text',
      admin: {
        description:
          'If you do not include a query string, the map will default to the address provided by the Address global',
        placeholder: 'E.g. 123 Main St, City, State',
      },
    },
  ],
}
