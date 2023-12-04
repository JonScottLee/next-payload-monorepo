import { RichText } from '../components/fields/rich-text/rich-text'
import { IBlockHeader } from '@org/cms/src/payload-types'

export const useBlockHeader = (blockHeader: IBlockHeader | undefined): JSX.Element | null => {
  const { headerText } = blockHeader || {}

  return <RichText content={headerText} />
}
