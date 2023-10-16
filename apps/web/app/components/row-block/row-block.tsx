import { FC } from 'react'
import { IRowBlock } from '@org/cms'
import classNames from 'classnames'
import { RichText } from '../rich-text/rich-text'
import { renderBlock } from '../render-blocks/render-blocks'

export const RowBlock: FC<IRowBlock> = ({ headerText, blocks, wrap }) => {
  const classes = classNames('flex', {
    'flex-wrap': wrap,
  })

  return (
    <div>
      <RichText content={headerText} />
      <div className={classes}>
        {blocks?.map((block, i) => {
          return (
            <div key={block.id} className="flex-1">
              {renderBlock(block)}
            </div>
          )
        })}
      </div>
    </div>
  )
}
