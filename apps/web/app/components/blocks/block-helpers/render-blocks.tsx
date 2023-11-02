import { FC } from 'react'
import { IReusableContentBlock, type Page } from '@org/cms'

type RenderBlockProps = {
  block: NonNullable<Page['blocks']>[0]
  componentMap: Record<string, FC<any>>
}

type RenderBlocksProps = {
  blocks?: Page['blocks']
  componentMap: Record<string, FC<any>>
  classNames?: string
}

export const renderBlock: FC<RenderBlockProps> = ({ componentMap, block }) => {
  const BlockComponent = componentMap[block.blockType]

  if (!BlockComponent) return null

  return <BlockComponent {...block} />
}

export const RenderBlocks: FC<RenderBlocksProps> = ({ classNames, componentMap, blocks = [] }) => {
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
