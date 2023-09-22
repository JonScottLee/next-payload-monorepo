import { FC } from 'react'
import { RichText } from '../rich-text/rich-text'
import { RichTextType } from '../rich-text/serialize'

export const TextBlock: FC<{ text: RichTextType }> = ({ text }) => <RichText content={text} />
