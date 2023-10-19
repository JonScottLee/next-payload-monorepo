'use client'

import { FC } from 'react'
import { RichText } from '../rich-text/rich-text'
import { StripBlockFields } from '@/utils'
import { ICallToAction, IFancyTextBlock, Media } from '@org/cms'
import { useInView } from 'react-intersection-observer'
import classNames from 'classnames'
import { useTextEffects } from '@hooks/use-text-effects'
import Link from 'next/link'
import { useLink } from '@hooks/use-link'

export const CallToActionBlock: FC<StripBlockFields<ICallToAction>> = ({
  alignment,
  background,
  text,
  textEffects = {},
  link,
}) => {
  const { ref, inView } = useInView()
  const { baseClasses: baseTextClasses, visibleClasses: visibleTextClasses } = useTextEffects({
    textEffects,
  })

  const backgroundImageString = (background as Media)?.url

  const { getLinkObject } = useLink()

  const wrapperClasses = classNames(`min-h-[350px] bg-cover text-center flex items-center`, {
    'justify-center': alignment === 'center',
    'justify-end': alignment === 'right',
    'justify-start': alignment === 'left',
  })

  const contentClasses = classNames(`flex flex-col ${baseTextClasses}`, {
    [visibleTextClasses]: inView,
    'items-center': alignment === 'center',
    'items-start': alignment === 'left',
    'items-end': alignment === 'right',
  })

  const { href, label } = getLinkObject(link)

  return (
    <div
      ref={ref}
      className={wrapperClasses}
      style={{ backgroundImage: `url(${backgroundImageString})` }}
    >
      <div className={contentClasses}>
        <RichText content={text} />
        <Link className="link" href={href}>
          {label}
        </Link>
      </div>
    </div>
  )
}
