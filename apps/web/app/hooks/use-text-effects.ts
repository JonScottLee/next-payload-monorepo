import { ITextEffects } from '@org/cms'
import classNames from 'classnames'

type UseFancyTextProps = {
  textEffects: ITextEffects
}

type UseFancyTextReturn = {
  baseClasses: string
  visibleClasses: string
}

export const useTextEffects = ({ textEffects }: UseFancyTextProps): UseFancyTextReturn => {
  const { fadeIn, sliding } = textEffects

  const baseClasses = classNames('transition ease duration-700 transform', {
    '-translate-x-12': sliding === 'left',
    'translate-x-12': sliding === 'right',
    '-translate-y-12': sliding === 'up',
    'translate-y-12': sliding === 'down',
    'opacity-0': fadeIn,
  })

  const visibleClasses = '!translate-x-0 !translate-y-0 opacity-100'

  return {
    baseClasses,
    visibleClasses,
  }
}
