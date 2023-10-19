import React from 'react'
import serialize from './serialize'

type RichTextProps = {
  content: any
}

export const RichText: React.FC<RichTextProps> = ({ content }) => {
  if (!content) {
    return null
  }

  return <>{serialize(content)}</>
}
