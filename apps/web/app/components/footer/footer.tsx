import { FC } from 'react'
import { getData } from '@/utils'
import { type Page, type Footer as FooterType } from '@org/cms'
import Link from 'next/link'
import { H2 } from '@org/uikit'

const getFooterData = async (): Promise<FooterType> => {
  const footer = await getData<FooterType>(`${process.env.NEXT_PUBLIC_PAYLOAD_API}/globals/footer`)

  return footer
}

type FooterProps = {
  className?: string
}

export const Footer: FC<FooterProps> = async ({ className }) => {
  const footerData = await getFooterData()

  return (
    <footer className={`${className}`}>
      {(footerData.columns || []).map((column) => {
        return (
          <div key={column.heading}>
            <H2>{column.heading}</H2>
            <nav aria-label="Site map">
              <ul>
                {(column.navItems || []).map((item) => {
                  const { link } = item

                  const isCustomUrl = link.type === 'custom'

                  const href = isCustomUrl ? link.url : (link.reference.value as Page).slug || '/'

                  return (
                    <li key={item.id}>
                      <Link href={href}>{link.label}</Link>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </div>
        )
      })}
    </footer>
  )
}
