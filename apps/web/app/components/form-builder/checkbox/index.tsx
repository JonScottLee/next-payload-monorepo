import React, { useState } from 'react'
import { CheckboxField } from '@payloadcms/plugin-form-builder/dist/types'
import { UseFormRegister, FieldValues } from 'react-hook-form'
import { Error } from '../error'
import { FieldErrorsType } from '../types'

export type CheckboxProps = CheckboxField & {
  register: UseFormRegister<FieldValues & Record<string, unknown>>
  setValue: (name: string, checked: boolean) => void
  getValues: (name: string) => boolean
  errors: FieldErrorsType
}

export const Checkbox: React.FC<CheckboxProps> = ({
  name,
  label,
  register,
  setValue,
  getValues,
  required: requiredFromProps,
  errors,
}) => {
  const [checked, setChecked] = useState(false)
  const isCheckboxChecked = getValues(name)

  return (
    <>
      <div>
        <div>
          <input
            type="checkbox"
            {...register(name, { required: requiredFromProps })}
            checked={isCheckboxChecked}
          />
          <button
            type="button"
            onClick={() => {
              setValue(name, !checked)
              setChecked(!checked)
            }}
          >
            <span>✓</span>
          </button>
          <span>{label}</span>
        </div>
        {requiredFromProps && errors[name] && checked === false && <Error />}
      </div>
    </>
  )
}
