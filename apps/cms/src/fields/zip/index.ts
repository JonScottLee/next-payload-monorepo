import { Field } from 'payload/types'
import postalCodes from 'postal-codes-js'

export const zip: Field = {
  name: 'zip',
  label: 'Zip Code',
  type: 'number',
  validate: (val) => {
    const validated = postalCodes.validate('USA', val)

    if (validated === true) {
      return true
    }

    return `${val} is not a valid zip code for the United States. Please enter a valid zip code.`
  },
}
