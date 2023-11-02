export type StripBlockFields<T> = Omit<T, 'id' | 'blockName' | 'blockType'>
