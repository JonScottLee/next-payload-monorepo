'use client'

import { FC } from 'react'
import { RichText } from '../rich-text/rich-text'
import { StripBlockFields } from '@/utils'
import { IFancyTextBlock } from '@org/cms'
import { useInView } from 'react-intersection-observer'
import classNames from 'classnames'

export const FancyTextBlock: FC<StripBlockFields<IFancyTextBlock>> = ({ text, textEffects }) => {
  const { fadeIn, sliding } = textEffects || {}

  const { ref, inView, entry } = useInView()

  const basevisibleClasses = classNames('transition ease duration-500 transform', {
    '-translate-x-12': sliding === 'left',
    'translate-x-12': sliding === 'right',
    '-translate-y-12': sliding === 'up',
    'translate-y-12': sliding === 'down',
    'opacity-0': fadeIn,
  })

  const visibleClasses = classNames({
    '!translate-x-0 !translate-y-0 opacity-100': inView,
  })

  return (
    <div ref={ref} className={`${basevisibleClasses} ${visibleClasses}`}>
      <RichText content={text} />
    </div>
  )
}
