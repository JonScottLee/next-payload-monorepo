import { FC } from 'react'
import NotFoundPage from '../404/page'
import { getData } from '@/utils'
import { type MainMenu, type Page } from '@org/cms'
import Link from 'next/link'
import { headers } from 'next/headers'
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

const getMenuData = async (): Promise<MainMenu> => {
  const menu = await getData<MainMenu>('http://localhost:3000/api/globals/main-menu')

  return menu
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
  const menuData = await getMenuData()
  const headersList = headers()
  const currentPath = (headersList.get('x-pathname') || '/').split('/')[1] || undefined

  if (!pageData) return <NotFoundPage />

  return (
    <>
      <header>
        <ul>
          {menuData.navItems?.map((item) => {
            const reference = item.link.reference.value as Page

            const slug = reference.slug || '/'

            const isCurrentPage = slug === currentPath

            const ariaCurrent = isCurrentPage ? 'page' : undefined

            return (
              <li key={item.id}>
                <Link legacyBehavior href={slug}>
                  <a className={`${isCurrentPage ? 'underline' : null}`} aria-current={ariaCurrent}>
                    {item.link.label}
                  </a>
                </Link>
              </li>
            )
          })}
        </ul>
      </header>
      <h1>{pageData.title}</h1>
    </>
  )
}

export default Page
