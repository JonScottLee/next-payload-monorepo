import React from 'react'
import ReactSelect from 'react-select'
import { SelectField } from '@payloadcms/plugin-form-builder/dist/types'
import { Controller } from 'react-hook-form'
import { Error } from '../error'

import { ControlType, FieldErrorsType } from '../types'

export type SelectProps = SelectField & {
  control: ControlType
  errors: FieldErrorsType
}

export const Select: React.FC<SelectProps> = ({
  name,
  label,
  options,
  control,
  required,
  errors,
}) => (
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
            options={options}
            value={options.find((s) => s.value === value)}
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
