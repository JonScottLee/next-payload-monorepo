'use client'

import React, { FC, useState, useCallback } from 'react'
import { buildInitialFormState } from './build-initial-form-state'
import { fields } from './fields'
import { type FormFieldBlock, Form as FormType } from '@payloadcms/plugin-form-builder/dist/types'
import { RichText } from '../fields/rich-text/rich-text'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'

type FormFieldType = FormFieldBlock & {
  width?: number
}

export type Value = unknown

export interface Property {
  [key: string]: Value
}

export interface Data {
  [key: string]: Value | Property | Property[]
}

export type FormBlockType = {
  blockName?: string
  blockType?: 'formBlock'
  enableIntro: boolean
  form: FormType
  introContent?: {
    [k: string]: unknown
  }[]
}

export const FormBlock: FC<
  FormBlockType & {
    id?: string
  }
> = (props) => {
  const {
    enableIntro,
    introContent,
    form: formFromProps,
    form: { id: formID, submitButtonLabel, confirmationType, redirect, confirmationMessage } = {},
  } = props

  const formMethods = useForm({
    defaultValues: buildInitialFormState(formFromProps.fields),
  })

  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = formMethods

  const [isLoading, setIsLoading] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState<boolean>()
  const [error, setError] = useState<{ status?: string; message: string } | undefined>()

  const { push } = useRouter()

  const onSubmit = useCallback(
    (data: Data) => {
      let loadingTimerID: NodeJS.Timer

      const submitForm = async () => {
        setError(undefined)

        const dataToSend = Object.entries(data).map(([name, value]) => ({
          field: name,
          value,
        }))

        // delay loading indicator by 1s
        loadingTimerID = setTimeout(() => {
          setIsLoading(true)
        }, 1000)

        try {
          const req = await fetch(`${process.env.NEXT_PUBLIC_PAYLOAD_API}/form-submissions`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              form: formID,
              submissionData: dataToSend,
            }),
          })

          const res = await req.json()

          clearTimeout(loadingTimerID)

          if (req.status >= 400) {
            setIsLoading(false)
            setError({
              status: res.status,
              message: res.errors?.[0]?.message || 'Internal Server Error',
            })

            return
          }

          setIsLoading(false)
          setHasSubmitted(true)

          if (confirmationType === 'redirect' && redirect) {
            const { url } = redirect

            const redirectUrl = url

            if (redirectUrl) push(redirectUrl)
          }
        } catch (err) {
          console.warn(err)
          setIsLoading(false)
          setError({
            message: 'Something went wrong.',
          })
        }
      }

      submitForm()
    },
    [push, formID, redirect, confirmationType]
  )

  return (
    <>
      <div>
        {enableIntro && introContent && !hasSubmitted && (
          <div>
            <RichText content={introContent} />
          </div>
        )}
        {!isLoading && hasSubmitted && confirmationType === 'message' && (
          <RichText content={confirmationMessage} />
        )}

        {isLoading && !hasSubmitted && <p>Loading, please wait...</p>}

        {error && <div>{`${error.status || '500'}: ${error.message || ''}`}</div>}

        <form id={formID} onSubmit={handleSubmit(onSubmit)}>
          <div>
            {formFromProps &&
              formFromProps.fields &&
              formFromProps.fields.map((field: FormFieldType, index) => {
                const Field: FC<Record<string, unknown>> = fields?.[field.blockType]

                if (!Field) return null

                return (
                  <div key={index}>
                    <Field
                      form={formFromProps}
                      {...field}
                      {...formMethods}
                      register={register}
                      errors={errors}
                      control={control}
                    />
                  </div>
                )
              })}
          </div>

          <button type="submit">{submitButtonLabel}</button>
        </form>
      </div>
    </>
  )
}
