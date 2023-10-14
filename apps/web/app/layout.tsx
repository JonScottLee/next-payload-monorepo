import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import { FC, PropsWithChildren } from 'react'

import './css/globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Home',
  description: 'Generated by create next app',
  openGraph: {
    title: 'Home',
    description: 'Generated by create next app',
  },
}

const RootLayout: FC<PropsWithChildren<Record<string, unknown>>> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
export default RootLayout
