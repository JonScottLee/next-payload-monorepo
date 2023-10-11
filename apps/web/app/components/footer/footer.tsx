import { FC } from 'react'
import { getData } from '@/utils'
import { type Page, type Footer as FooterType } from '@org/cms'
import Link from 'next/link'
import { H2 } from '@org/uikit'
import { useLink } from '@hooks/use-link'
import { useCurrentPage } from '@hooks/use-current-page'

const getFooterData = async (): Promise<FooterType> => {
  const footer = await getData<FooterType>(`${process.env.NEXT_PUBLIC_PAYLOAD_API}/globals/footer`)

  return footer
}

type FooterProps = {
  classNameName?: string
}

export const Footer: FC<FooterProps> = async ({ classNameName }) => {
  const footerData = await getFooterData()

  return (
    <footer className="bg-white dark:bg-gray-900 mt-10">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Dublin Endodontics
            </span>
          </a>
          {(footerData.columns || []).map((column) => {
            return (
              <div key={column.heading}>
                <H2>{column.heading}</H2>
                <nav aria-label="Site map">
                  <ul>
                    {(column.navItems || []).map((item) => {
                      const { link } = item
                      const { href, label } = useLink(link);
                      const isCurrentPage = useCurrentPage(link);

                      return (
                        <li key={item.id} className="mr-4 hover:underline md:mr-6">
                          <Link href={href}>{link.label}</Link>
                          
                          <Link legacyBehavior href={href}>
                            <a aria-current={isCurrentPage}>
                              {label}
                            </a>
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </nav>
              </div>
            )
          })}
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{' '}
          <a href="https://flowbite.com/" className="hover:underline">
            Dublin Endodontics
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
    // <footer classNameName={`${classNameName}`}>
    //   {(footerData.columns || []).map((column) => {
    //     return (
    //       <div key={column.heading}>
    //         <H2>{column.heading}</H2>
    //         <nav aria-label="Site map">
    //           <ul>
    //             {(column.navItems || []).map((item) => {
    //               const { link } = item

    //               const isCustomUrl = link.type === 'custom'

    //               const href = isCustomUrl ? link.url : (link.reference.value as Page).slug || '/'

    //               return (
    //                 <li key={item.id}>
    //                   <Link href={href}>{link.label}</Link>
    //                 </li>
    //               )
    //             })}
    //           </ul>
    //         </nav>
    //       </div>
    //     )
    //   })}
    // </footer>
  )
}
