import type { GlobalConfig } from 'payload/types'

import { isAdmin } from '../access/isAdmin'
import { color } from '../fields/color'

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
                color({
                  name: 'brandPrimary',
                  label: 'Brand Primary Color',
                  fieldWidth: '33%',
                }),
                color({
                  name: 'brandSecondary',
                  label: 'Brand Secondary Color',
                  fieldWidth: '33%',
                }),
                color({
                  name: 'brandTertiary',
                  label: 'Brand Tertiary Color',
                  fieldWidth: '33%',
                }),
              ],
            },
            {
              type: 'row',
              fields: [
                color({
                  name: 'linkColor',
                  label: 'Link Color',
                  fieldWidth: '33%',
                }),
                color({
                  name: 'linkHoverColor',
                  label: 'Link Hover Color',
                  fieldWidth: '33%',
                }),
                color({
                  name: 'linkActiveColor',
                  label: 'Link Active Color',
                  fieldWidth: '33%',
                }),
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
