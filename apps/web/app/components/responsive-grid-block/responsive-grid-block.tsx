import { FC } from 'react'
import { RichText } from '../rich-text/rich-text'
import { StripBlockFields } from '@/utils'
import { IResponsiveGrid } from '@org/cms'
import { renderBlock } from '../render-blocks/render-blocks'
import classNames from 'classnames'

export const ResponsiveGridBlock: FC<StripBlockFields<IResponsiveGrid>> = ({
  headerText,
  blocks,
  trailingContent,
}) => {
  const columns = blocks?.length || 0

  const classes = classNames('flex flex-col md:grid gap-8', {
    'md:grid-cols-2': [2, 4, 5].indexOf(columns) > -1,
    'md:grid-cols-3': columns % 3 === 0,
  })

  return (
    <>
      <RichText content={headerText} />
      <div className={classes}>{blocks?.map((block, i) => renderBlock(block))}</div>
      <RichText className="mt-10" content={trailingContent} />
    </>
  )
}
