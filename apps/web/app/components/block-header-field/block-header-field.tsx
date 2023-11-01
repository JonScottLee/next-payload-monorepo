import { StripBlockFields } from '@/utils'
import { IBlockHeader } from '@org/cms'
import { FC } from 'react'
import { RichText } from '../rich-text/rich-text'

export const BlockHeaderField: FC<StripBlockFields<IBlockHeader>> = ({
  showHeader,
  headerText,
}) => (
  <>
    {showHeader && (
      <div className="mb-4">
        <RichText content={headerText} />
      </div>
    )}
  </>
)
