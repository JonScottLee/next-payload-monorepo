import { FC, Fragment } from 'react'
import {
  ICallToAction,
  IFancyTextBlock,
  IFormBlock,
  IMapBlock,
  IMediaBlock,
  INumberTout,
  IResponsiveGrid,
  IReusableContentBlock,
  IRowBlock,
  ITestimonialBlock,
  ITextBlock,
  ISpacerBlock,
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
import { type ReusableContent as relatedCollectionType } from '@org/cms'
import { SpacerBlock } from '../spacer-block/spacer-block'

export type AllBlocks =
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
  | IReusableContentBlock
  | ISpacerBlock

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
  'spacer-block': SpacerBlock,
}

type BlockWithBlocks = AllBlocks & {
  blocks: AllBlocks[]
}

type RenderBlocksProps = {
  blocks?: AllBlocks[] | BlockWithBlocks[]
}

export const normalizeBlocks = (blocks: AllBlocks[]): AllBlocks[] => {
  let normalizedBlocks: AllBlocks[] = []

  try {
    //@ts-ignore
    normalizedBlocks = blocks[0].reusableContent.layout
  } catch {
    normalizedBlocks = blocks
  }

  return normalizedBlocks
}

export const renderBlock = (block: AllBlocks) => {
  const BlockComponent = cmsBlockComponents[block.blockType]

  if (!BlockComponent) return null

  return (
    <div key={block.id} className="mb-4">
      <BlockComponent {...block} />
    </div>
  )
}

export const renderReusableContentBlock = (block: IReusableContentBlock) => {
  const relatedCollection = block.reusableContent as unknown as relatedCollectionType

  return (
    <>
      {relatedCollection.layout.map((block) => (
        <Fragment key={block.id}>{renderBlock(block as AllBlocks)}</Fragment>
      ))}
    </>
  )
}

export const isReusableContentBlock = (block: AllBlocks): block is IReusableContentBlock => {
  return 'reusableContent' in block
}

export const RenderBlocks: FC<RenderBlocksProps> = ({ blocks }) => {
  if (!blocks) return null

  return (
    <>
      {blocks.map((block) => (
        <Fragment key={block.id}>
          {isReusableContentBlock(block) ? renderReusableContentBlock(block) : renderBlock(block)}
        </Fragment>
      ))}
    </>
  )
}
