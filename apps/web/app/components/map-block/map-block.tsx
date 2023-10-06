import { FC } from 'react'
import { type Address, type ThemeVariable } from '@org/cms'
import { getData } from '@/utils'
import { Globals } from '@/enums'
import { StripBlockFields } from '@/utils'
import { IMapBlock } from '@org/cms'

const getAddressData = async (): Promise<Address> => {
  const address = await getData<Address>(
    `${process.env.NEXT_PUBLIC_PAYLOAD_API}/globals/${Globals.ADDRESS}`
  )

  return address
}

const getMapsApiKey = async (): Promise<ThemeVariable['mapsApiKey']> => {
  const themeVariables = await getData<ThemeVariable>(
    `${process.env.NEXT_PUBLIC_PAYLOAD_API}/globals/${Globals.THEME_VARIABLES}`
  )

  return themeVariables?.mapsApiKey
}

const getDefaultMapQuery = async (): Promise<string> => {
  const address = await getAddressData()

  return `${address.street} ${address.city} ${address.state} ${address.zip}`
}

export const MapBlock: FC<StripBlockFields<IMapBlock>> = async ({ mapQuery }) => {
  const apiKey = await getMapsApiKey()

  let queryString = mapQuery || (await getDefaultMapQuery())

  if (!apiKey || !queryString) return null

  return (
    <iframe
      title="Google Map"
      width="100%"
      height="350"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${queryString}`}
    />
  )
}
