import { FC } from 'react'
import { IRowBlock } from '@org/cms'
import classNames from 'classnames'
import { RichText } from '../rich-text/rich-text'
import { RenderBlocks } from '../render-blocks/render-blocks'
import { CallToActionBlock } from '../call-to-action-block/call-to-action-block'
import { FancyTextBlock } from '../fancy-text-block/fancy-text-block'
import { FormBlock } from '../form-builder/form'
import { MediaBlock } from '../media-block/media-block'
import { NumberToutBlock } from '../number-tout-block/number-tout-block'
import { TestimonialBlock } from '../testimonial-block/testimonial-block'
import { TextBlock } from '../text-block/text-block'
import { useBlockHeader } from '@/app/hooks/use-block-header'

const childBlocks = {
  'call-to-action-block': CallToActionBlock,
  'fancy-text-block': FancyTextBlock,
  'form-block': FormBlock,
  'media-block': MediaBlock,
  'number-tout-block': NumberToutBlock,
  'text-block': TextBlock,
  'testimonial-block': TestimonialBlock,
}

export const RowBlock: FC<IRowBlock> = ({ blockHeader, blocks, wrap }) => {
  const header = useBlockHeader(blockHeader)

  const classes = classNames('flex', {
    'flex-wrap': wrap,
  })

  return (
    <div>
      {header}
      <div className={classes}>
        <RenderBlocks blocks={blocks} componentMap={childBlocks} classNames="flex-1" />
      </div>
    </div>
  )
}
