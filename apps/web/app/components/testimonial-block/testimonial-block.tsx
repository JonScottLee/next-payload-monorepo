import { FC } from 'react'
import { RichText } from '../rich-text/rich-text'
import { StripBlockFields } from '@/utils'
import { ITestimonialBlock } from '@org/cms'
import classNames from 'classnames'

export const TestimonialBlock: FC<StripBlockFields<ITestimonialBlock>> = ({
  author,
  headline,
  text,
  title,
}) => {
  return (
    <div>
      <h3 className="text-xl mb-2">{headline}</h3>
      <RichText content={text} />
      <ul className="mt-4">
        <li>{author}</li>
        <li>{title}</li>
      </ul>
    </div>
  )
}
