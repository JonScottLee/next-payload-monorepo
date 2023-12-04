export const normalizeBlocks = (blocks: any[]): any[] => {
  let normalizedBlocks = []

  try {
    //@ts-ignore
    normalizedBlocks = blocks[0].reusableContent.layout
  } catch {
    normalizedBlocks = blocks
  }

  return normalizedBlocks
}
