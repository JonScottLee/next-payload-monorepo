import { FC } from 'react'
import { RichText } from '../rich-text/rich-text'
import { StripBlockFields } from '@/utils'
import { IResponsiveGrid } from '@org/cms'
import { renderBlock } from '../render-blocks/render-blocks'
import classNames from 'classnames'

export const ResponsiveGridBlock: FC<StripBlockFields<IResponsiveGrid>> = ({
  headerText,
  blocks,
}) => {
  const columns = blocks?.length || 0

  const classes = classNames('md:grid gap-4', {
    'md:grid-cols-2 xl:grid-cols-4': [4, 5].indexOf(columns) > -1,
    'md:grid-cols-3': columns % 3 === 0,
    'md:grid-cols-2': columns === 2,
  })

  return (
    <>
      <RichText content={headerText} />
      <div className={classes}>{blocks?.map((block, i) => renderBlock(block))}</div>
    </>
  )
}
