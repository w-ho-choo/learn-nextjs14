import { Suspense } from 'react'
import MovieInfo, { getMovie } from '@components/movie-info'
import MovieVideos from '@components/movie-videos'
import MovieCredits from '@components/movie-credits'

interface IParams {
  params: { id: string }
}

export async function generateMetadata({ params }) {
  const { id } = await params
  const movie = await getMovie(id)
  return {
    title: movie.title,
  }
}

export default async function MoviePage({ params }) {
  const { id } = await params
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie credits</h1>}>
        <MovieCredits id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  )
}
