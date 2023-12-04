import { type Media } from '@org/cms'
import NextImage from 'next/image'
import { FC } from 'react'

const breakpoints = {
  s: 768,
  m: 1024,
  l: 1679,
}

export const Image: FC<Media> = (props) => {
  const { filename, alt, width, height } = props

  return (
    <NextImage
      className="w-full h-auto"
      width={width || 0}
      height={height || 0}
      src={`/media/${filename}`}
      alt={alt}
    />
  )
}
