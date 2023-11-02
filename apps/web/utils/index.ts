import { PageDataResponse } from '@/app/[...slug]/types'
import { type Page } from '@org/cms'

export const getData = async <T>(endpoint: string): Promise<T> => {
  const res = await fetch(endpoint, { next: { revalidate: 10 } })

  if (!res.ok) {
    throw new Error(`Failed to fetch data - ${endpoint} - ${res.status}`)
  }

  const data: T = await res.json()

  return data
}

const getPageFromSlug = ({ pages, slug }: { pages: any; slug: string }): Page | null => {
  const page = pages.docs.find((page: Page) => page.slug === slug) as Page

  if (!page) {
    return null
  }

  return page
}

export const getPageData = async (slug: string): Promise<Page | null> => {
  const pages = await getData<PageDataResponse>(`${process.env.NEXT_PUBLIC_PAYLOAD_API}/pages`)

  return getPageFromSlug({ pages, slug })
}
