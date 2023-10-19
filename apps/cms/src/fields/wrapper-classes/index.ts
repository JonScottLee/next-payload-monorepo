import { Field } from 'payload/types'

export const wrapperClasses: Field = {
  name: 'wrapperClasses',
  type: 'text',
  label: 'Wrapper Classes',
  admin: {
    description: 'Classes to be applied to the wrapper of this block',
  },
}
