import { FC } from 'react'
import Link from 'next/link'
import { getCurrentPath, getData } from '@/utils'
import { type Page, type MainMenu } from '@org/cms'
import cx from 'classnames'

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
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">Dublin Endo</span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <ul className="text-sm lg:flex-grow">
            {menuData.navItems?.map((item) => {
              const reference = item.link.reference.value as Page

              const slug = reference.slug || '/'

              const isCurrentPage = slug === currentPath

              const ariaCurrent = isCurrentPage ? 'page' : undefined

              const classes = cx('text-brand-secondary', {
                underline: isCurrentPage,
                '!text-brand-primary': isCurrentPage,
              })

              return (
                <li
                  key={item.id}
                  className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                >
                  <Link legacyBehavior href={slug}>
                    <a className={classes} aria-current={ariaCurrent}>
                      {item.link.label}
                    </a>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </header>
  )
}
