import { FC } from 'react'
import { type Page } from '@org/cms'
import NotFoundPage from '../404/page'

const getPageFromSlug = ({ pages, slug }: { pages: any; slug: string }): Page | null => {
  const page = pages.docs.find((page: Page) => page.slug === slug) as Page

  if (!page) {
    return null
  }

  return page
}

const getData = async (slug: string) => {
  const res = await fetch('http://localhost:3000/api/pages', { next: { revalidate: 10 } })

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  const pages = await res.json()

  return getPageFromSlug({ pages, slug })
}

type PageProps = {
  params: {
    slug: string[]
  }
}

const Page: FC<PageProps> = async ({ params }) => {
  const { slug = ['home'] } = params

  const data = await getData(slug[0])

  if (!data) return <NotFoundPage />

  return <div>{data.title}</div>
}

export default Page
