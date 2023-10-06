import React from 'react'
import ReactSelect from 'react-select'
import { StateField } from '@payloadcms/plugin-form-builder/dist/types'
import { Controller } from 'react-hook-form'
import { stateOptions } from './options'
import { Error } from '../error'

import { ControlType, FieldErrorsType } from '../types'

export type StateProps = StateField & {
  control: ControlType
  errors: FieldErrorsType
}

export const State: React.FC<StateProps> = ({ name, label, control, required, errors }) => (
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
            options={stateOptions}
            value={stateOptions.find((t) => t.value === value)}
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
