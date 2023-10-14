import { FC, Fragment } from 'react'
import {
  ICallToAction,
  IFancyTextBlock,
  IFormBlock,
  IMapBlock,
  IMediaBlock,
  INumberTout,
  IResponsiveGrid,
  IRowBlock,
  ITestimonialBlock,
  ITextBlock,
} from '@org/cms'
import { FormBlock } from '../form-builder/form'
import { MediaBlock } from '../media-block/media-block'
import { FancyTextBlock } from '../fancy-text-block/fancy-text-block'
import { ResponsiveGridBlock } from '../responsive-grid-block/responsive-grid-block'
import { MapBlock } from '../map-block/map-block'
import { TextBlock } from '../text-block/text-block'
import { CallToActionBlock } from '../call-to-action-block/call-to-action-block'
import { NumberToutBlock } from '../number-tout-block/number-tout-block'
import { RowBlock } from '../row-block/row-block'
import { TestimonialBlock } from '../testimonial-block/testimonial-block'

type Block =
  | IFancyTextBlock
  | IFormBlock
  | IMapBlock
  | IMediaBlock
  | ITextBlock
  | IResponsiveGrid
  | ICallToAction
  | INumberTout
  | IRowBlock
  | ITestimonialBlock

export const cmsBlockComponents: Record<string, FC<any>> = {
  'call-to-action-block': CallToActionBlock,
  'fancy-text-block': FancyTextBlock,
  'form-block': FormBlock,
  'map-block': MapBlock,
  'media-block': MediaBlock,
  'number-tout-block': NumberToutBlock,
  'responsive-grid-block': ResponsiveGridBlock,
  'row-block': RowBlock,
  'text-block': TextBlock,
  'testimonial-block': TestimonialBlock,
}

type BlockWithBlocks = {
  blocks: Block[]
}

type RenderBlocksProps = {
  blocks?: Block[] | BlockWithBlocks[]
}

export const renderBlock = (block: Block) => {
  const BlockComponent = cmsBlockComponents[block.blockType]

  if (!BlockComponent) return null

  return (
    <div key={block.id} className="mb-4">
      <BlockComponent {...block} />
    </div>
  )
}

export const RenderBlocks: FC<RenderBlocksProps> = ({ blocks }) => {
  if (!blocks) return null

  return (
    <>
      {blocks.map((block, i) => {
        if ('blocks' in block && block.blocks) {
          // return (
          //   <Fragment key={(block as Block).id}>
          //     {renderBlock(block as Block)}

          //     <RenderBlocks blocks={block.blocks} />
          //   </Fragment>
          // )
          return renderBlock(block as Block)
        } else {
          return renderBlock(block as Block)
        }
      })}
    </>
  )
}
