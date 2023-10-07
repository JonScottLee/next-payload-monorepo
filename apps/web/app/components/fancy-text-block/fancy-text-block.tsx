'use client'

import { FC } from 'react'
import { RichText } from '../rich-text/rich-text'
import { StripBlockFields } from '@/utils'
import { IFancyTextBlock } from '@org/cms'
import { useInView } from 'react-intersection-observer'
import classNames from 'classnames'
import { useTextEffects } from '@/app/hooks/use-text-effects'

export const FancyTextBlock: FC<StripBlockFields<IFancyTextBlock>> = ({
  text,
  textEffects = {},
}) => {
  const { ref, inView } = useInView()
  const { baseClasses, visibleClasses } = useTextEffects({ textEffects })

  const classes = classNames(baseClasses, {
    [visibleClasses]: inView,
  })

  return (
    <div ref={ref} className={classes}>
      <RichText content={text} />
    </div>
  )
}
