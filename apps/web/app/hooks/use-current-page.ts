import { getCurrentPath } from '@/utils'
import { ILink, type Page } from '@org/cms'
import { useLink } from '@hooks/use-link'

const linkIsCurrentPage = (link: ILink): boolean => {
  const currentPath = getCurrentPath()
  const { reference } = link
  const slug = ((reference?.value ?? {}) as Page).slug

  if (!slug) return false

  return slug === currentPath
}

export const useCurrentPage = () => {
  return {
    linkIsCurrentPage,
  }
}
