import React from 'react'
import serialize from './serialize'

type RichTextProps = {
  className?: string
  content: any
}

export const RichText: React.FC<RichTextProps> = ({ className, content }) => {
  if (!content) {
    return null
  }

  return <div className={className}>{serialize(content)}</div>
}
