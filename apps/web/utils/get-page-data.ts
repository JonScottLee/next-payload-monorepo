import { PageDataResponse } from '@/app/[...slug]/types'
import { Page } from '@org/cms'
import { getData } from '@utils/get-data'
import { getPageFromSlug } from '@utils/get-page-from-slug'

export const getPageData = async (slug: string): Promise<Page | null> => {
  const pages = await getData<PageDataResponse>(`${process.env.NEXT_PUBLIC_PAYLOAD_API}/pages`)

  return getPageFromSlug({ pages, slug })
}
