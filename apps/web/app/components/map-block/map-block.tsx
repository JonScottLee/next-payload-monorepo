import { FC } from 'react'
import { type Address, type ThemeVariable } from '@org/cms'
import { getData } from '@/utils'
import { Globals } from '@/enums'

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

export const MapBlock: FC = async () => {
  const address = await getAddressData()
  const apiKey = await getMapsApiKey()

  const query = encodeURIComponent(
    `${address.street} ${address.city} ${address.state} ${address.zip}`
  )

  if (!apiKey) return <h1>Wat</h1>

  return (
    <iframe
      title="Google Map"
      width="100%"
      height="350"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${query}`}
    />
  )
}
