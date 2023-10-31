import { AllBlocks } from '@/app/components/render-blocks/types'

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
