'use client'

import { FC } from 'react'
import { RichText } from '../rich-text/rich-text'
import { IMediaBlock, Media } from '@org/cms'
import classNames from 'classnames'
import { StripBlockFields } from '@/utils'
import { useTextEffects } from '@hooks'
import { useInView } from 'react-intersection-observer'

export const MediaBlock: FC<StripBlockFields<IMediaBlock>> = ({
  text,
  Image,
  textEffects = {},
}) => {
  const { image } = Image as { image: Media }
  const { position } = Image

  const { ref, inView } = useInView()

  const imageClasses = classNames('w-1/2', {
    'order-first': position === 'left',
    'order-last': position === 'right',
  })

  const { baseClasses: textBaseClasses, visibleClasses: textVisibleClasses } = useTextEffects({
    textEffects,
  })

  const textClasses = classNames(textBaseClasses, {
    [textVisibleClasses]: inView,
  })

  return (
    <div className="flex justify-between items-center">
      <div ref={ref} className={`w-1/2 ${textClasses}`}>
        <RichText className="w-1/2 mx-auto" content={text} />
      </div>

      <img className={imageClasses} src={image.url} alt={image.alt} />
    </div>
  )
}
