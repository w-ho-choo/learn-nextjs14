import styles from './home.module.css'
import Movie from '../../components/movie'
import { URL } from '../constants'

export const metadata = {
  title: 'Home',
}

const getMovies = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 1000))
  const response = await fetch(URL)
  const json = await response.json()
  return json
}

export default async function HomePage() {
  const movies = await getMovies()
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  )
}
