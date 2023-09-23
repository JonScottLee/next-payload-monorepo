import { getPageData } from '@/utils'
import { Metadata } from 'next'
import { headers } from 'next/headers'

type MetaDataProps = {
  params: { productId: string }
}

export async function generateMetadata(): Promise<Metadata> {
  const headersList = headers()
  const currentPath = (headersList.get('x-pathname') || '/').split('/')[1] || 'home'

  const pageData = await getPageData(currentPath)

  const defaultMetadata = {
    title: 'Not found',
    description: 'Page Not Found',
  }

  if (!pageData?.meta) {
    return defaultMetadata
  }

  const { meta } = pageData

  return {
    title: meta.title,
    description: meta.description,
  }
}
