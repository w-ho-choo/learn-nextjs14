import styles from '../styles/movie-info.module.css'
import { URL } from '../app/(home)/page'

const API_URL = URL

const getMovie = async (id: string) => {
  console.log(`Fetching Movies: ${Date.now()}`)
  const response = await fetch(`${API_URL}/${id}`)
  return response.json()
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id)
  return (
    <div className={styles.container}>
      <img
        src={movie.poster_path}
        alt={movie.title}
        className={styles.poster}
      />
      <div>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3>⭐{movie.vote_average.toFixed(2)}</h3>
        <p className={styles.info}>{movie.overview}</p>
        <a
          href={movie.homepage}
          target='_blank'
        >
          HomePage &rarr;
        </a>
      </div>
    </div>
  )
}
