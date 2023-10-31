import { FC, Fragment } from 'react'
import { IReusableContentBlock } from '@org/cms'
import { AllBlocks } from './types'

type BlockWithBlocks = AllBlocks & {
  blocks: AllBlocks[]
}

type RenderBlocksProps = {
  blocks?: AllBlocks[] | BlockWithBlocks[]
  componentMap: Record<string, FC<any>>
  classNames?: string
}

export const isReusableContentBlock = (block: AllBlocks): block is IReusableContentBlock => {
  return 'reusableContent' in block
}

export const RenderBlocks: FC<RenderBlocksProps> = ({ classNames, componentMap, blocks }) => {
  if (!blocks) return null

  return (
    <>
      {blocks.map((block) => {
        const BlockComponent = componentMap[block.blockType]

        if (!BlockComponent) return null

        return (
          <div key={block.id} className={`mb-4 ${classNames}`}>
            <BlockComponent {...block} />
          </div>
        )
      })}
    </>
  )
}
