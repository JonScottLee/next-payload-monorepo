import { headers } from 'next/headers'

export const getCurrentPath = (): string => {
  const headersList = headers()
  const currentPath = (headersList.get('x-pathname') || '/').split('/')[1] || 'home'

  return currentPath
}
