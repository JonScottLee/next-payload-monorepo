import { ILink, type Page } from '@org/cms'

const getLinkObject = (link: ILink) => {
  const isCustomUrl = link.type === 'custom'

  const href = isCustomUrl ? link.url : (link.reference.value as Page).slug || '/'

  return {
    href,
    label: link.label,
  }
}

export const useLink = () => {
  return {
    getLinkObject,
  }
}
