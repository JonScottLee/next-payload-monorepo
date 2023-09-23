import { Field } from 'payload/types'

const validateHexColor = (value: string): true | string => {
  if (!value) return true

  return (
    value.match(/^#(?:[0-9a-fA-F]{3}){1,2}$/) !== null ||
    `Hex colors must be in the format #000 or #000000`
  )
}

type ColorFieldProps = {
  name?: string
  label?: string
  required?: boolean
  fieldWidth?: string
}

export const color = ({
  name = 'color',
  label,
  required = false,
  fieldWidth = '100%',
}: ColorFieldProps): Field => ({
  name,
  label,
  type: 'text',
  validate: validateHexColor,
  required,
  admin: {
    width: fieldWidth,
  },
})
