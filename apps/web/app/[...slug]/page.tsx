import { FC } from 'react'
import NotFoundPage from '../404/page'
import { getData } from '@/utils'
import { type Page } from '@org/cms'
import { Header, Footer, RichText } from '@components'
import { H1 } from '@org/uikit'
import { RenderBlocks } from '../components/render-blocks/render-blocks'

const getPageFromSlug = ({ pages, slug }: { pages: any; slug: string }): Page | null => {
  const page = pages.docs.find((page: Page) => page.slug === slug) as Page

  if (!page) {
    return null
  }

  return page
}

const getPageData = async (slug: string): Promise<Page | null> => {
  const pages = await getData<PageData>('http://localhost:3000/api/pages')

  return getPageFromSlug({ pages, slug })
}

type PageData = {
  docs: Page[]
}

type PageProps = {
  params: {
    slug: string[]
  }
}

const Page: FC<PageProps> = async ({ params }) => {
  const { slug = ['home'] } = params

  const pageData = await getPageData(slug[0])

  if (!pageData) return <NotFoundPage />

  const { title, content, blocks } = pageData

  return (
    <>
      <Header className="mb-4" />
      <main>
        <H1>{title}</H1>

        {content && <RichText content={content} />}

        <RenderBlocks blocks={blocks} />
      </main>

      <Footer className="mt-4" />
    </>
  )
}

export default Page
