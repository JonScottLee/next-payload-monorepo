import { FC } from 'react'
import Link from 'next/link'
import { getCurrentPath, getData } from '@/utils'
import { type Page, type MainMenu } from '@org/cms'

const getMenuData = async (): Promise<MainMenu> => {
  const menu = await getData<MainMenu>(`${process.env.NEXT_PUBLIC_PAYLOAD_API}/globals/main-menu`)

  return menu
}

type HeaderProps = {
  className?: string
}

export const Header: FC<HeaderProps> = async ({ className }) => {
  const menuData = await getMenuData()

  const currentPath = getCurrentPath()

  return (
    <header className={`${className}`}>
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
