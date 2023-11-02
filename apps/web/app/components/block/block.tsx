import { IBlockHeader } from '@org/cms'
import { PropsWithChildren, FC } from 'react'
import { RichText } from '../rich-text/rich-text'

interface BlockHeaderProps extends IBlockHeader {
  className?: string
}

const BlockRoot: FC<PropsWithChildren<Record<string, unknown>>> = ({ children }) => {
  return <div className="my-4">{children}</div>
}

const BlockHeader: FC<BlockHeaderProps> = ({ headerText, showHeader, className }) => {
  if (!showHeader) return null

  return (
    <div className={className}>
      <RichText content={headerText} />
    </div>
  )
}

const BlockBody: FC<PropsWithChildren<{ className?: string }>> = ({ children, className }) => (
  <div className={className}>{children}</div>
)

const BlockFooter: FC<PropsWithChildren<Record<string, unknown>>> = ({ children }) => (
  <div className="mt-10">{children}</div>
)

export const Block = Object.assign(BlockRoot, {
  Header: BlockHeader,
  Body: BlockBody,
  Footer: BlockFooter,
})
