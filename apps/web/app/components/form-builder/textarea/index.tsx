import React from 'react'
import { TextField } from '@payloadcms/plugin-form-builder/dist/types'
import { Error } from '../error'

import { InputLabel } from '../label'
import { FieldErrorsType, UseFormRegisterType } from '../types'

export type TextareaProps = TextField & {
  register: UseFormRegisterType
  rows?: number
  errors: FieldErrorsType
}

export const Textarea: React.FC<TextareaProps> = ({
  name,
  label,
  rows = 3,
  register,
  required: requiredFromProps,
  errors,
}) => (
  <>
    <div>
      <textarea placeholder=" " rows={rows} {...register(name, { required: requiredFromProps })} />
      <InputLabel htmlFor={name}>{label}</InputLabel>
      {requiredFromProps && errors[name] && <Error />}
    </div>
  </>
)
