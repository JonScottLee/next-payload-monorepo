import { FC } from 'react'
import { RichText } from '../../rich-text/rich-text'
import { StripBlockFields } from '@/utils'
import { ITextBlock } from '@org/cms'
import { Block } from '../block/block'

export const TextBlock: FC<StripBlockFields<ITextBlock>> = ({ blockHeader, text }) => (
  <Block>
    <Block.Header {...blockHeader} />

    <Block.Body>
      <RichText content={text} />
    </Block.Body>
  </Block>
)
