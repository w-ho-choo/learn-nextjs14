import { URL } from '../app/(home)/page'

const API_URL = URL

const getMovie = async (id: string) => {
  console.log(`Fetching Movies: ${Date.now()}`)
  // await new Promise((resolve) => setTimeout(resolve, 5000))
  const response = await fetch(`${API_URL}/${id}`)
  return response.json()
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id)
  return <h6>{JSON.stringify(movie)}</h6>
}
