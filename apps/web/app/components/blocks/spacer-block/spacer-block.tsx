import { StripBlockFields } from '@/utils'
import { ISpacerBlock } from '@org/cms'
import classNames from 'classnames'
import { FC } from 'react'

export const SpacerBlock: FC<StripBlockFields<ISpacerBlock>> = ({ space }) => {
  const classes = classNames({
    'mt-4 lg:mt-6': space === 'small',
    'mt-8 lg:mt-10': space === 'medium',
    'mt-16 lg:mt-20': space === 'large',
  })

  return <div className={classes} />
}
