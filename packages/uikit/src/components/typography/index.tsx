import { FC, PropsWithChildren } from 'react'

export const H1: FC<PropsWithChildren<Record<string, unknown>>> = ({ children }) => (
  <h1 className="text-4xl">{children}</h1>
)

export const H2: FC<PropsWithChildren<Record<string, unknown>>> = ({ children }) => (
  <h2 className="text-2xl">{children}</h2>
)

export const H3: FC<PropsWithChildren<Record<string, unknown>>> = ({ children }) => (
  <h3 className="text-xl">{children}</h3>
)

export const H4: FC<PropsWithChildren<Record<string, unknown>>> = ({ children }) => (
  <h4 className="uppercase tracking-wider">{children}</h4>
)
