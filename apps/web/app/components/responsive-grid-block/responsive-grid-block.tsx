import { FC } from 'react'
import { RichText } from '../rich-text/rich-text'
import { StripBlockFields } from '@/utils'
import { IResponsiveGrid, IReusableContentBlock } from '@org/cms'
import {
  AllBlocks,
  isReusableContentBlock,
  normalizeBlocks,
  renderBlock,
} from '../render-blocks/render-blocks'
import classNames from 'classnames'
import { renderReusableContentBlock } from '../render-blocks/render-blocks'

export const ResponsiveGridBlock: FC<StripBlockFields<IResponsiveGrid>> = ({
  headerText,
  blocks: _blocks,
  trailingContent,
}) => {
  if (!_blocks) return null

  let blocks: AllBlocks[] = normalizeBlocks(_blocks)

  const columns = blocks?.length || 0

  const classes = classNames('flex flex-col md:grid gap-8', {
    'md:grid-cols-2': [2, 4, 5].indexOf(columns) > -1,
    'md:grid-cols-3': columns % 3 === 0,
  })

  return (
    <>
      <RichText className="mb-4" content={headerText} />
      <div className={classes}>{blocks?.map((block) => renderBlock(block))}</div>
      <RichText className="mt-10" content={trailingContent} />
    </>
  )
}
