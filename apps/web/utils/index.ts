export const getData = async <T>(endpoint: string): Promise<T> => {
  const res = await fetch(endpoint, { next: { revalidate: 10 } })

  if (!res.ok) {
    throw new Error(`Failed to fetch data - ${endpoint} - ${res.status}`)
  }

  const data: T = await res.json()

  return data
}
