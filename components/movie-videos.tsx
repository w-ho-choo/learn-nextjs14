import { URL } from '../app/(home)/page'

const API_URL = URL
const getVideos = async (id: string) => {
  console.log(`Fetching Videos: ${Date.now()}`)
  await new Promise((resolve) => setTimeout(resolve, 3000))
  // throw new Error('뭔가 고장났어요!')
  const response = await fetch(`${API_URL}/${id}/videos`)
  return response.json()
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id)
  return <h6>{JSON.stringify(videos)}</h6>
}
