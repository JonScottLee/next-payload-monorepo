'use client'

import { FC } from 'react'
import { RichText } from '../../fields/rich-text/rich-text'
import { StripBlockFields } from '@utils/strip-block-fields'
import { IFancyTextBlock } from '@org/cms'
import { useInView } from 'react-intersection-observer'
import classNames from 'classnames'
import { useTextEffects } from '@hooks/use-text-effects'
import { Block } from '@blocks/block'

export const FancyTextBlock: FC<StripBlockFields<IFancyTextBlock>> = ({
  blockHeader,
  text,
  textEffects = {},
}) => {
  const { ref, inView } = useInView()
  const { baseClasses, visibleClasses } = useTextEffects({ textEffects })

  const classes = classNames(baseClasses, {
    [visibleClasses]: inView,
  })

  return (
    <Block>
      <Block.Header {...blockHeader} />
      <Block.Body>
        <div ref={ref} className={classes}>
          <RichText content={text} />
        </div>
      </Block.Body>
    </Block>
  )
}
