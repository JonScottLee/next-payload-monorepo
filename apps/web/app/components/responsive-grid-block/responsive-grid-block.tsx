import { FC } from 'react'
import { RichText } from '../rich-text/rich-text'
import { StripBlockFields } from '@/utils'
import { IResponsiveGrid } from '@org/cms'
import { RenderBlocks } from '../render-blocks/render-blocks'
import classNames from 'classnames'
import { AllBlocks } from '../render-blocks/types'
import { TestimonialBlock } from '../testimonial-block/testimonial-block'
import { CallToActionBlock } from '../call-to-action-block/call-to-action-block'
import { FancyTextBlock } from '../fancy-text-block/fancy-text-block'
import { FormBlock } from '../form-builder/form'
import { MediaBlock } from '../media-block/media-block'
import { NumberToutBlock } from '../number-tout-block/number-tout-block'
import { TextBlock } from '../text-block/text-block'
import { normalizeBlocks } from '@/utils/normalize-blocks'
import { BlockHeaderField } from '../block-header-field/block-header-field'

const childBlocks = {
  'call-to-action-block': CallToActionBlock,
  'fancy-text-block': FancyTextBlock,
  'form-block': FormBlock,
  'media-block': MediaBlock,
  'number-tout-block': NumberToutBlock,
  'text-block': TextBlock,
  'testimonial-block': TestimonialBlock,
}

export const ResponsiveGridBlock: FC<StripBlockFields<IResponsiveGrid>> = ({
  blockHeader,
  blocks: _blocks,
  trailingContent,
}) => {
  const { showHeader, headerText } = blockHeader || {}

  let blocks: AllBlocks[] = normalizeBlocks(_blocks || [])

  const columns = blocks?.length || 0

  const classes = classNames('flex flex-col md:grid gap-8', {
    'md:grid-cols-2': [2, 4, 5].indexOf(columns) > -1,
    'md:grid-cols-3': columns % 3 === 0,
  })

  return (
    <>
      <div className="mb-4">
        <BlockHeaderField showHeader={showHeader} headerText={headerText} />
      </div>

      <div className={classes}>
        <RenderBlocks componentMap={childBlocks} blocks={blocks} />
      </div>

      <div className="mt-10">
        <RichText content={trailingContent} />
      </div>
    </>
  )
}
