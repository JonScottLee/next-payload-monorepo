import React from 'react'
import ReactSelect from 'react-select'
import { CountryField } from '@payloadcms/plugin-form-builder/dist/types'
import { Controller, Control, FieldValues } from 'react-hook-form'
import { countryOptions } from './options'
import { Error } from '../error'

import { FieldErrorsType } from '../types'

export type CountryProps = CountryField & {
  control: Control<FieldValues, unknown>
  errors: FieldErrorsType
}

export const Country: React.FC<CountryProps> = ({ name, label, control, required, errors }) => (
  <>
    <div>
      <label htmlFor={name}>{label}</label>
      <Controller
        control={control}
        rules={{ required }}
        name={name}
        defaultValue=""
        render={({ field: { onChange, value } }) => (
          <ReactSelect
            instanceId={name}
            options={countryOptions}
            value={countryOptions.find((c) => c.value === value)}
            onChange={(val) => {
              if (val) {
                onChange(val.value)
              }
            }}
            classNamePrefix="rs"
          />
        )}
      />
      {required && errors[name] && <Error />}
    </div>
  </>
)
