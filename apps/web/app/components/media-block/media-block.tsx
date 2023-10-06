import { FC } from 'react'
import { RichText } from '../rich-text/rich-text'
import { type RichText as RichTextType } from '../rich-text/serialize'
import { IMediaBlock, Media } from '@org/cms'
import classNames from 'classnames'
import { StripBlockFields } from '@/utils'

export const MediaBlock: FC<StripBlockFields<IMediaBlock>> = ({ text, Image }) => {
  const { image } = Image as { image: Media }
  const { position } = Image

  const imageClassNames = classNames('w-1/2', {
    'order-first': position === 'left',
    'order-last': position === 'right',
  })

  return (
    <div className="flex justify-between items-center">
      <div className="w-1/2">
        <RichText className="w-1/2 mx-auto" content={text} />
      </div>

      <img className={imageClassNames} src={image.url} alt={image.alt} />
    </div>
  )
}
