import { FC, Fragment } from 'react'
import { TextBlock } from '../text-block/text-block'
import { MapBlock } from '../map-block/map-block'
import {
  IFancyTextBlock,
  IFormBlock,
  IMapBlock,
  IMediaBlock,
  IResponsiveGrid,
  ITextBlock,
  type Page,
} from '@org/cms'
import { FormBlock } from '../form-builder/form'
import { MediaBlock } from '../media-block/media-block'
import { FancyTextBlock } from '../fancy-text-block/fancy-text-block'
import { ResponsiveGridBlock } from '../responsive-grid-block/responsive-grid-block'

type BlockTypes = 'fancy-text-block' | 'form-block' | 'map-block' | 'media-block' | 'text-block'

type Block = IFancyTextBlock | IFormBlock | IMapBlock | IMediaBlock | ITextBlock | IResponsiveGrid

type BlockProps = {
  [key in BlockTypes]: Block
}

const cmsBlockComponents: Record<string, FC<any>> = {
  'fancy-text-block': FancyTextBlock,
  'form-block': FormBlock,
  'map-block': MapBlock,
  'media-block': MediaBlock,
  'text-block': TextBlock,
}

type BlockWithBlocks = {
  blocks: Block[]
}

type RenderBlocksProps = {
  blocks?: Block[] | BlockWithBlocks[]
}

const renderBlock = (block: Block) => {
  const Block = cmsBlockComponents[block.blockType]

  if (!Block) return null

  return (
    <Fragment key={block.id}>
      <Block {...block} />
    </Fragment>
  )
}

export const RenderBlocks: FC<RenderBlocksProps> = ({ blocks }) => {
  if (!blocks) return null

  return (
    <>
      {blocks.map((block, i) => {
        const hasNestedBlocks = 'blocks' in block && block.blocks

        if (hasNestedBlocks) {
          return (block.blocks as Block[]).map((nestedBlock) => renderBlock(nestedBlock))
        } else {
          return renderBlock(block as Block)
        }
      })}
    </>
  )
}
