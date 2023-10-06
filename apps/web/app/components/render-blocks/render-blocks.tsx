import { FC, Fragment } from 'react'
import { TextBlock } from '../text-block/text-block'
import { MapBlock } from '../map-block/map-block'
import { type Page } from '@org/cms'
import { FormBlock } from '../form-builder/form'

const cmsBlockComponents: Record<string, FC<any>> = {
  'form-block': FormBlock,
  'map-block': MapBlock,
  'text-block': TextBlock,
}

type RenderBlocksProps = {
  blocks: Page['blocks']
}

export const RenderBlocks: FC<RenderBlocksProps> = ({ blocks }) => {
  if (!blocks) return null

  return (
    <>
      {blocks.map((block, i) => {
        const Block = cmsBlockComponents[block.blockType]

        if (!Block) return null

        const key = block.id || `${block.blockType}-${i}`

        return (
          <Fragment key={key}>
            <Block {...block} />
          </Fragment>
        )
      })}
    </>
  )
}
