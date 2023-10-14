import type { GlobalConfig } from 'payload/types'

import { isAdmin } from '../access/isAdmin'
import { color } from '../fields/color'
import { GlobalAfterChangeHook } from 'payload/types'

const afterChangeHook: GlobalAfterChangeHook = async ({ doc }) => {
  fetch(`http://localhost:3000/write-css-variables`)

  return doc
}

export const ThemeVariables: GlobalConfig = {
  slug: 'theme-variables',
  access: {
    read: () => true,
    update: isAdmin,
  },
  fields: [
    {
      type: 'tabs',
      label: 'Globals',
      tabs: [
        {
          label: 'Colors',
          name: 'colors',
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
          label: 'Layout',
          name: 'layout',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'columnGutter',
                  label: 'Column Gutter',
                  defaultValue: '20px',
                  type: 'text',
                  admin: {
                    width: '33%',
                  },
                },
                {
                  name: 'maxWidth',
                  label: 'Large Scren Max Width',
                  defaultValue: '1560',
                  type: 'text',
                  admin: {
                    width: '33%',
                    description:
                      'On screens >= 1560px, the content will be centered and the width will be limited to this value, to avoid making the site uncomfortably wide',
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
        {
          label: 'Global Styles',
          name: 'elements',
          fields: [
            {
              type: 'row',
              fields: [
                color({
                  name: 'Background',
                  label: 'Primary BG Color',
                  fieldWidth: '33%',
                }),
                color({
                  name: 'Color',
                  label: 'Text Color',
                  fieldWidth: '33%',
                }),
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'tabs',
      label: 'Site Elements',
      tabs: [
        {
          name: 'header',
          label: 'Header',
          fields: [
            {
              type: 'row',
              fields: [
                color({
                  name: 'Background',
                  label: 'Header Background Color',
                  fieldWidth: '33%',
                }),
                color({
                  name: 'Color',
                  label: 'Header Text Color',
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
          name: 'footer',
          label: 'Footer',
          fields: [
            color({
              name: 'Background',
              label: 'Footer Background Color',
              fieldWidth: '33%',
            }),
            color({
              name: 'Color',
              label: 'Footer Text Color',
              fieldWidth: '33%',
            }),
          ],
        },
      ],
    },
  ],
  hooks: {
    afterChange: [afterChangeHook],
  },
}
