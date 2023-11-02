import { FC } from 'react'
import { RichText } from '../../fields/rich-text/rich-text'
import { StripBlockFields } from '@utils/strip-block-fields'
import { ITestimonialBlock } from '@org/cms'
import { Block } from '@blocks/block'

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
