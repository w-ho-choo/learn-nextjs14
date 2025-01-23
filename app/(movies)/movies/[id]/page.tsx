import { Suspense } from 'react'
import { URL } from '../../../(home)/page'
import MovieInfo from '../../../../components/movie-info'
import MovieVideos from '../../../../components/movie-videos'

export const metadata = {
  title: 'Movie',
}

export default async function MoviePage({ params }) {
  const { id } = await params

  return (
    <div>
      <h3>Movie Detail Page</h3>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  )
}
