'use client'

import { FC } from 'react'
import { RichText } from '../../rich-text/rich-text'
import { IMediaBlock, Media } from '@org/cms'
import classNames from 'classnames'
import { StripBlockFields } from '@/utils'
import { useTextEffects } from '@hooks/use-text-effects'
import { useInView } from 'react-intersection-observer'
import { Image } from './image'
import { Block } from '../block/block'

export const MediaBlock: FC<StripBlockFields<IMediaBlock>> = ({
  blockHeader,
  orientation,
  position,
  text,
  image: stringableImage,
  textEffects = {},
}) => {
  const isVertical = orientation === 'vertical'

  const image = stringableImage as Media

  const { ref, inView } = useInView()

  const imageClasses = classNames({
    'sm:w-1/2': !isVertical,
    'order-first': position === 'left',
    'order-last': position === 'right',
  })

  const { baseClasses: textBaseClasses, visibleClasses: textVisibleClasses } = useTextEffects({
    textEffects,
  })

  const textWrapperClasses = classNames(textBaseClasses, {
    'sm:w-1/2': !isVertical,
    [textVisibleClasses]: inView,
  })

  const textClasses = classNames({
    'sm:w-1/2 sm:mx-auto': !isVertical,
  })

  const wrapperClasses = classNames('flex text-center flex-col items-center', {
    'sm:text-left sm:flex-row sm:justify-between sm:items-center': orientation === 'responsive',
    'text-left flex-row justify-between items-center': orientation === 'horizontal',
  })

  return (
    <Block className={wrapperClasses}>
      <Block.Header {...blockHeader} />

      <Block.Body>
        <div ref={ref} className={textWrapperClasses}>
          <div className={textClasses}>
            <RichText content={text} />
          </div>
        </div>

        <div className={imageClasses}>
          {/*eslint-disable-next-line jsx-a11y/alt-text*/}
          <Image {...image} />
        </div>
      </Block.Body>
    </Block>
  )
}
