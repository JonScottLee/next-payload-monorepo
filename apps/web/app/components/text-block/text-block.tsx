import { FC } from 'react'
import { RichText } from '../rich-text/rich-text'
import { StripBlockFields } from '@/utils'
import { ITextBlock } from '@org/cms'

export const TextBlock: FC<StripBlockFields<ITextBlock>> = ({ text }) => <RichText content={text} />
