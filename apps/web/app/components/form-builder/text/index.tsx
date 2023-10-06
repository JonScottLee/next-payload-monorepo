import React from 'react'
import { TextField } from '@payloadcms/plugin-form-builder/dist/types'
import { Error } from '../error'
import { InputLabel } from '../label'
import { FieldErrorsType, UseFormRegisterType } from '../types'

export type TextProps = TextField & {
  register: UseFormRegisterType
  errors: FieldErrorsType
}

export const Text: React.FC<TextProps> = ({
  name,
  label,
  register,
  required: requiredFromProps,
  errors,
}) => (
  <>
    <div>
      <input type="text" placeholder=" " {...register(name, { required: requiredFromProps })} />
      <InputLabel htmlFor={name}>{label}</InputLabel>
      {requiredFromProps && errors[name] && <Error />}
    </div>
  </>
)
