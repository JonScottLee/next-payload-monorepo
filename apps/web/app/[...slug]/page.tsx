import { FC } from 'react'
import NotFoundPage from '../404/page'
import { getData } from '@/utils'
import { type Page } from '@org/cms'
import { Header, Footer, RichText } from '@components'
import { H1 } from '@org/uikit'
import { RenderBlocks } from '../components/render-blocks/render-blocks'
import { Metadata, ResolvingMetadata } from 'next'
import { headers } from 'next/headers'
import { getPageData } from '@/utils'

type DynamicRouteProps = {
  params: {
    slug: string[]
  }
}

type MetaDataProps = {
  params: { productId: string }
}

export { generateMetadata } from './generate-meta-data'

const Page: FC<DynamicRouteProps> = async (props) => {
  const { params } = props
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
