'use client' // Error components must be Client Components

import { useEffect } from 'react'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div>
      <h1>500</h1>
      <h2>Something went wrong!</h2>
      <p>Please refresh the page or try again later.</p>
    </div>
  )
}
