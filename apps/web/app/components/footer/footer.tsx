import { FC } from 'react'
import { getData } from '@/utils'
import { type Page, type Footer as FooterType } from '@org/cms'
import Link from 'next/link'

const getFooterData = async (): Promise<FooterType> => {
  const footer = await getData<FooterType>('http://localhost:3000/api/globals/footer')

  return footer
}

export const Footer: FC = async () => {
  const footerData = await getFooterData()

  return (
    <footer>
      {(footerData.columns || []).map((column) => {
        return (
          <div key={column.heading}>
            <h2>{column.heading}</h2>
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
