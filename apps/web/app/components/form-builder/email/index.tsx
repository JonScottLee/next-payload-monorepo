import React from 'react'
import { EmailField } from '@payloadcms/plugin-form-builder/dist/types'
import { UseFormRegister, FieldValues } from 'react-hook-form'
import { Error } from '../error'
import { FieldErrorsType } from '../types'
import { InputLabel } from '../label'

export type EmailProps = EmailField & {
  register: UseFormRegister<FieldValues & unknown>
  errors: FieldErrorsType
}

export const Email: React.FC<EmailProps> = ({
  name,
  label,
  register,
  required: requiredFromProps,
  errors,
}) => (
  <>
    <div>
      <input
        placeholder=" "
        type="text"
        {...register(name, {
          required: requiredFromProps,
          pattern: /^\S+@\S+$/i,
        })}
      />
      <InputLabel htmlFor={name}>{label}</InputLabel>
      {requiredFromProps && errors[name] && <Error />}
    </div>
  </>
)
