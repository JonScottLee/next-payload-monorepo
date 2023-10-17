'use client'

import { FC } from 'react'
import { RichText } from '../rich-text/rich-text'
import { StripBlockFields } from '@/utils'
import { ICallToAction, IFancyTextBlock } from '@org/cms'
import { useInView } from 'react-intersection-observer'
import classNames from 'classnames'
import { useTextEffects } from '@hooks/use-text-effects'
import Link from 'next/link'
import { useLink } from '@hooks/use-link'

export const CallToActionBlock: FC<StripBlockFields<ICallToAction>> = ({
  text,
  textEffects = {},
  link,
}) => {
  const { ref, inView } = useInView()
  const { baseClasses, visibleClasses } = useTextEffects({ textEffects })

  const { getLinkObject } = useLink()

  const classes = classNames(baseClasses, {
    [visibleClasses]: inView,
  })

  const { href, label } = getLinkObject(link)

  return (
    <div ref={ref} className={classes}>
      <RichText content={text} />
      <Link className="link" href={href}>
        {label}
      </Link>
    </div>
  )
}
