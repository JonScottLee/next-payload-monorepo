import { UseFormRegister, FieldValues, FieldErrorsImpl, Control } from 'react-hook-form'

export type FieldErrorsType = Partial<
  FieldErrorsImpl<{
    [x: string]: string
  }>
>

export type UseFormRegisterType = UseFormRegister<FieldValues & unknown>

export type ControlType = Control<FieldValues, unknown>
