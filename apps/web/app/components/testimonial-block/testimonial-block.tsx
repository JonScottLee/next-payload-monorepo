import { FC } from 'react'
import { RichText } from '../rich-text/rich-text'
import { StripBlockFields } from '@/utils'
import { ITestimonialBlock } from '@org/cms'
import classNames from 'classnames'

export const TestimonialBlock: FC<StripBlockFields<ITestimonialBlock>> = ({
  text,
  author,
  headline,
}) => {
  const classes = classNames('text-center sm:text-left')

  return (
    <div className={classes}>
      <h3 className="text-xl mb-2">{headline}</h3>
      <RichText content={text} />
      <p className="mt-4">-{author}</p>
    </div>
  )
}
