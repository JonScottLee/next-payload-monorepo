import { FC } from 'react'
import { RichText } from '../../rich-text/rich-text'
import { StripBlockFields } from '@/utils'
import { ITestimonialBlock } from '@org/cms'
import classNames from 'classnames'
import { Block } from '../block/block'

export const TestimonialBlock: FC<StripBlockFields<ITestimonialBlock>> = ({
  author,
  blockHeader,
  text,
  title,
}) => {
  return (
    <Block>
      <Block.Header {...blockHeader} />
      <Block.Body>
        <RichText content={text} />
        <ul className="mt-4">
          <li>{author}</li>
          <li>{title}</li>
        </ul>
      </Block.Body>
    </Block>
  )
}
