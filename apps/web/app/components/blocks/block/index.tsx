import { IBlockHeader } from '@org/cms'
import { PropsWithChildren, FC } from 'react'
import { RichText } from '../../fields/rich-text/rich-text'
import cx from 'classnames'

interface BlockHeaderProps extends IBlockHeader {
  className?: string
}

const hasHeaderText = (headerText: any): boolean => {
  if (!headerText) return false

  try {
    //@ts-ignore
    return headerText[0].children[0].text
  } catch {
    return false
  }
}

const BlockRoot: FC<PropsWithChildren<Record<string, unknown>>> = ({ className, children }) => {
  return <div className={`my-4 ${className}`}>{children}</div>
}

const BlockHeader: FC<BlockHeaderProps> = ({ headerText, className, headerAlginment }) => {
  if (!hasHeaderText(headerText)) return null

  const classNames = cx(className, {
    'text-center': headerAlginment === 'center',
    'text-left': headerAlginment === 'left',
    'text-right': headerAlginment === 'right',
  })

  return (
    <div className={`${classNames}`}>
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
