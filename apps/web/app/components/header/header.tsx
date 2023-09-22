import { FC } from 'react'
import Link from 'next/link'
import { getData } from '@/utils'
import { type Page, type MainMenu } from '@org/cms'
import { headers } from 'next/headers'

const getMenuData = async (): Promise<MainMenu> => {
  const menu = await getData<MainMenu>('http://localhost:3000/api/globals/main-menu')

  return menu
}

export const Header: FC = async () => {
  const menuData = await getMenuData()
  const headersList = headers()

  const currentPath = (headersList.get('x-pathname') || '/').split('/')[1] || undefined

  return (
    <header>
      <ul>
        {menuData.navItems?.map((item) => {
          const reference = item.link.reference.value as Page

          const slug = reference.slug || '/'

          const isCurrentPage = slug === currentPath

          const ariaCurrent = isCurrentPage ? 'page' : undefined

          return (
            <li key={item.id}>
              <Link legacyBehavior href={slug}>
                <a className={`${isCurrentPage ? 'underline' : null}`} aria-current={ariaCurrent}>
                  {item.link.label}
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
    </header>
  )
}
