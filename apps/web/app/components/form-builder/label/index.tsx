import { FC, PropsWithChildren } from 'react'

type InputLabelProps = {
  htmlFor: string
}

export const InputLabel: FC<PropsWithChildren<InputLabelProps>> = ({
  htmlFor: htmlForValue,
  children,
}) => (
  <label htmlFor={htmlForValue}>
    <span>{children}</span>
  </label>
)
