import path from 'path'

import { buildConfig } from 'payload/config'

import { Categories } from './collections/categories'
import { FormSubmissions } from './collections/form-submissions'
import { Media } from './collections/media'
import { Posts } from './collections/posts'
import { Pages } from './collections/pages'
import { Tags } from './collections/tags'
import { Users } from './collections/users'
import { seed } from './seed'
import { MainMenu, Footer, Address, ThemeVariables } from './globals'

import { type Page } from './payload-types'
import { PluginConfig as SEOPluginConfig } from '@payloadcms/plugin-seo/dist/types'
import seo from '@payloadcms/plugin-seo'

interface SeoPageObject extends Omit<Page, 'title'> {
  title: {
    value: string
  }
}

const SEOPluginOptions: SEOPluginConfig = {
  collections: ['pages'],
  uploadsCollection: 'media',
  generateTitle: ({ doc }) => {
    const seoDoc = doc as SeoPageObject

    return `DublinEndo.com — ${seoDoc.title.value}`
  },
  tabbedUI: true,
}

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL as string,
  i18n: {
    lng: 'en',
  },
  admin: {
    user: Users.slug,
    css: path.resolve(__dirname, './custom.scss'),
    webpack: (config) => {
      return {
        ...config,
        resolve: {
          ...config.resolve,
          alias: {
            ...config?.resolve?.alias,
            react: path.join(__dirname, '../node_modules/react'),
            'react-dom': path.join(__dirname, '../node_modules/react-dom'),
            'react-i18next': path.join(__dirname, '../node_modules/react-i18next'),
            payload: path.join(__dirname, '../node_modules/payload'),
            '@faceless-ui/modal': path.join(__dirname, '../node_modules/@faceless-ui/modal'),
          },
        },
      }
    },
  },
  collections: [Pages, Posts, Media, Categories, Tags, Users, FormSubmissions],
  localization: {
    locales: ['en', 'es', 'fr'],
    defaultLocale: 'en',
    fallback: true,
  },
  plugins: [seo(SEOPluginOptions)],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  onInit: async (payload) => {
    // If the `env` var `PAYLOAD_SEED` is set, seed the db
    if (process.env.PAYLOAD_SEED != null) {
      await seed(payload)
    }
  },
  globals: [Footer, MainMenu, ThemeVariables, Address],
})
