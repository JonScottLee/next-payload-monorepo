import React from 'react'
import { TextField } from '@payloadcms/plugin-form-builder/dist/types'
import { Error } from '../error'

import { FieldErrorsType, UseFormRegisterType } from '../types'
import { InputLabel } from '../label'

export type NumberProps = TextField & {
  register: UseFormRegisterType
  errors: FieldErrorsType
}

export const Number: React.FC<NumberProps> = ({
  name,
  label,
  register,
  required: requiredFromProps,
  errors,
}) => (
  <>
    <div>
      <input placeholder=" " type="number" {...register(name, { required: requiredFromProps })} />
      <InputLabel htmlFor={name}>{label}</InputLabel>
      {requiredFromProps && errors[name] && <Error />}
    </div>
  </>
)
