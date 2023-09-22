// @ts-nocheck

import React, { Fragment } from 'react'
import escapeHTML from 'escape-html'
import { Text } from 'slate'
import { H1, H2, H3, H4 } from '@org/uikit'

// eslint-disable-next-line no-use-before-define
export type RichTextType = Leaf[]

type Leaf = {
  type: string
  value?: {
    url: string
    alt: string
  }
  children?: RichTextType
  url?: string
  [key: string]: unknown
}

const serialize = (children: RichTextType): React.ReactElement[] => {
  if (typeof children.map !== 'function') return null

  return children.map((node, i) => {
    if (Text.isText(node)) {
      let text = <span dangerouslySetInnerHTML={{ __html: escapeHTML(node.text) }} />

      if (node.bold) {
        text = <strong key={i}>{text}</strong>
      }

      if (node.code) {
        text = <code key={i}>{text}</code>
      }

      if (node.italic) {
        text = <em key={i}>{text}</em>
      }

      if (node.underline) {
        text = (
          <span style={{ textDecoration: 'underline' }} key={i}>
            {text}
          </span>
        )
      }

      if (node.strikethrough) {
        text = (
          <span style={{ textDecoration: 'line-through' }} key={i}>
            {text}
          </span>
        )
      }

      return <Fragment key={i}>{text}</Fragment>
    }

    if (!node) {
      return null
    }

    const { children } = node

    switch (node.type) {
      case 'h1':
        return <H1 key={i}>{serialize(children)}</H1>
      case 'h2':
        return <H2 key={i}>{serialize(children)}</H2>
      case 'h3':
        return <H3 key={i}>{serialize(children)}</H3>
      case 'h4':
        return <H4 key={i}>{serialize(children)}</H4>
      case 'h5':
        return <h5 key={i}>{serialize(children)}</h5>
      case 'h6':
        return <h6 key={i}>{serialize(children)}</h6>
      case 'quote':
        return <blockquote key={i}>{serialize(children)}</blockquote>
      case 'ul':
        return <ul key={i}>{serialize(children)}</ul>
      case 'ol':
        return <ol key={i}>{serialize(children)}</ol>
      case 'li':
        return <li key={i}>{serialize(children)}</li>
      case 'link':
        return (
          <a href={escapeHTML(node.url)} key={i}>
            {serialize(children)}
          </a>
        )

      default:
        return <p key={i}>{serialize(children)}</p>
    }
  })
}

export default serialize
