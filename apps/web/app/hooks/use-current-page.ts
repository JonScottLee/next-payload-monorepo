import { getCurrentPath } from '@/utils/get-current-path'
import { ILink, type Page } from '@org/cms'

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
