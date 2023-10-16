import { FC } from 'react'
import NotFoundPage from '../404/page'
import { type Page } from '@org/cms'
import { Header, Footer, RichText } from '@components'
import { H1 } from '@org/uikit'
import { RenderBlocks } from '../components/render-blocks/render-blocks'
import { getPageData } from '@/utils'

type DynamicRouteProps = {
  params: {
    slug: string[]
  }
}

export { generateMetadata } from './generate-meta-data'

const Page: FC<DynamicRouteProps> = async (props) => {
  const { params } = props
  const { slug = ['home'] } = params

  const pageData = await getPageData(slug[0])

  if (!pageData) return <NotFoundPage />

  const { title, content, blocks } = pageData

  return (
    <div className="flex flex-col h-screen justify-between">
      <Header className="mb-4" />
      <main>
        <H1>{title}</H1>

        {content && <RichText content={content} />}

        <RenderBlocks blocks={blocks} />
      </main>

      <Footer className="mt-4" />
    </div>
  )
}

export default Page
