'use client' // Error components must be Client Components

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div>
      <h1>500</h1>
      <h2>Something went wrong!</h2>
      <p>Please refresh the page or try again later.</p>
    </div>
  )
}
