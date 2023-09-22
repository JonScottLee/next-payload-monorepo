import { FC } from 'react'
import NotFoundPage from '../404/page'
import { getData } from '@/utils'
import { type MainMenu, type Page, type Footer } from '@org/cms'
import Link from 'next/link'
import { Header } from '@components'

interface PageData {
  docs: Page[]
}

const getPageFromSlug = ({ pages, slug }: { pages: any; slug: string }): Page | null => {
  const page = pages.docs.find((page: Page) => page.slug === slug) as Page

  if (!page) {
    return null
  }

  return page
}

const getFooterData = async (): Promise<Footer> => {
  const footer = await getData<Footer>('http://localhost:3000/api/globals/footer')

  return footer
}

const getPageData = async (slug: string): Promise<Page | null> => {
  const pages = await getData<PageData>('http://localhost:3000/api/pages')

  return getPageFromSlug({ pages, slug })
}

type PageProps = {
  params: {
    slug: string[]
  }
}

const Page: FC<PageProps> = async ({ params }) => {
  const { slug = ['home'] } = params

  const pageData = await getPageData(slug[0])
  const footerData = await getFooterData()

  if (!pageData) return <NotFoundPage />

  return (
    <>
      <Header />

      <h1>{pageData.title}</h1>

      <footer>
        {(footerData.columns || []).map((column) => {
          return (
            <div key={column.heading}>
              <h2>{column.heading}</h2>
              <nav aria-label="Site map">
                <ul>
                  {(column.navItems || []).map((item) => {
                    const { link } = item

                    const isCustomUrl = link.type === 'custom'

                    const href = isCustomUrl ? link.url : (link.reference.value as Page).slug || '/'

                    return (
                      <li key={item.id}>
                        <Link href={href}>{link.label}</Link>
                      </li>
                    )
                  })}
                </ul>
              </nav>
            </div>
          )
        })}
      </footer>
    </>
  )
}

export default Page
