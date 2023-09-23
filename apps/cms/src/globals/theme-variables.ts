import type { GlobalConfig } from 'payload/types'

import { isAdmin } from '../access/isAdmin'
import link from '../fields/link'

export const ThemeVariables: GlobalConfig = {
  slug: 'theme-variables',
  access: {
    read: () => true,
    update: isAdmin,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Theme Colors',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'brandPrimary',
                  label: 'Brand Primary Color',
                  type: 'text',
                  admin: {
                    width: '33%',
                  },
                },
                {
                  name: 'brandSecondary',
                  label: 'Brand Secondary Color',
                  type: 'text',
                  admin: {
                    width: '33%',
                  },
                },
                {
                  name: 'brandTertiary',
                  label: 'Brand Tertiary Color',
                  type: 'text',
                  admin: {
                    width: '33%',
                  },
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'linkColor',
                  label: 'Link Color',
                  type: 'text',
                  admin: {
                    width: '33%',
                  },
                },
                {
                  name: 'activeLinkColor',
                  label: 'Active Link Color',
                  type: 'text',
                  admin: {
                    width: '33%',
                  },
                },
                {
                  name: 'visitedLinkColor',
                  label: 'Visited Link Color',
                  type: 'text',
                  admin: {
                    width: '33%',
                  },
                },
              ],
            },
          ],
        },
        {
          label: 'Google',
          fields: [
            {
              name: 'mapsApiKey',
              label: 'Google Maps API Key',
              type: 'text',
              required: true,
            },
            {
              name: 'analyticsSnippet',
              label: 'Analytics Snippet',
              type: 'textarea',
              admin: {
                description: 'Paste your analytics snippet here',
              },
            },
          ],
        },
      ],
    },
  ],
}
