import { buildConfig } from 'payload/config'
import { Categories } from './collections/categories'
import { MainMenu, Footer, Address, ThemeVariables } from './globals'
import { Media } from './collections/media'
import { Pages } from './collections/pages'
import { Posts } from './collections/posts'
import { seed } from './seed'
import { Tags } from './collections/tags'
import { type Page } from './payload-types'
import { type PluginConfig as FormBuilderPluginConfig } from '@payloadcms/plugin-form-builder/dist/types'
import { type PluginConfig as SEOPluginConfig } from '@payloadcms/plugin-seo/dist/types'
import { Users } from './collections/users'
import FormBuilder from '@payloadcms/plugin-form-builder'
import path from 'path'
import seo from '@payloadcms/plugin-seo'

interface SeoPageObject extends Omit<Page, 'title'> {
  title: {
    value: string
  }
}

const formBuilderPluginOptions: FormBuilderPluginConfig = {
  fields: {
    payment: false,
  },
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
  collections: [Pages, Posts, Media, Categories, Tags, Users],
  localization: {
    locales: ['en', 'es', 'fr'],
    defaultLocale: 'en',
    fallback: true,
  },
  plugins: [seo(SEOPluginOptions), FormBuilder(formBuilderPluginOptions)],
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
