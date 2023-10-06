import { FC } from 'react'
import { Checkbox, CheckboxProps } from './checkbox'
import { Country, CountryProps } from './country'
import { Email, EmailProps } from './email'
import { Message, MessageProps } from './message'
import { Number, NumberProps } from './number'
import { Select, SelectProps } from './select'
import { State, StateProps } from './state'
import { Text, TextProps } from './text'
import { Textarea, TextareaProps } from './textarea'

export type Fields = {
  checkbox: FC<CheckboxProps>
  country: FC<CountryProps>
  email: FC<EmailProps>
  message: FC<MessageProps>
  number: FC<NumberProps>
  select: FC<SelectProps>
  state: FC<StateProps>
  text: FC<TextProps>
  textarea: FC<TextareaProps>
}

export const fields: Record<string, FC<any>> = {
  checkbox: Checkbox,
  country: Country,
  email: Email,
  message: Message,
  number: Number,
  select: Select,
  state: State,
  text: Text,
  textarea: Textarea,
}
