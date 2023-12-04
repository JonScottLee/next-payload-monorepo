import { webpackBundler } from '@payloadcms/bundler-webpack'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { slateEditor } from '@payloadcms/richtext-slate'
import { buildConfig } from 'payload/config'
import path from 'path'
import { Users } from './collections/users'
import { Media } from './collections/media'
import { Pages } from './collections/pages'
import { Address, Footer, MainMenu, ThemeVariables } from './globals'

export default buildConfig({
  collections: [Pages, Users, Media],
  globals: [Footer, MainMenu, ThemeVariables, Address],
  admin: {
    bundler: webpackBundler(),
  },
  cors: ['http://localhost:3000'], //
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  editor: slateEditor({}),
  db: mongooseAdapter({
    url: process.env.MONGODB_URL as string,
  }),
})
