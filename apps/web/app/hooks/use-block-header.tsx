import { RichText } from '../components/fields/rich-text/rich-text'
import { IBlockHeader } from '@org/cms/src/payload-types'

export const useBlockHeader = (blockHeader: IBlockHeader | undefined): JSX.Element | null => {
  const { headerText, showHeader } = blockHeader || {}

  if (!showHeader) return null

  return <RichText content={headerText} />
}
