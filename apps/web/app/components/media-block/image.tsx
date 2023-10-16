import { type Media } from '@org/cms'
import NextImage from 'next/image'
import { FC } from 'react'

const breakpoints = {
  s: 768,
  m: 1024,
  l: 1679,
}

export const Image: FC<Media> = (props) => {
  const { filename, alt, width, height, sizes } = props

  return (
    <NextImage
      className="w-full h-auto"
      width={width}
      height={height}
      // sizes={sizes as string}
      src={`/media/${filename}`}
      alt={alt}
    />
  )
}
