import React from 'react'
import { MessageField } from '@payloadcms/plugin-form-builder/dist/types'
import { RichText } from '../../rich-text/rich-text'

export type MessageProps = MessageField

export const Message: React.FC<MessageField> = ({ message }) => <RichText content={message} />
