import { URL } from '../app/(home)/page'
import styles from '@styles/movie-credits.module.css'

const API_URL = URL
const getCredits = async (id: string) => {
  const response = await fetch(`${API_URL}/${id}/credits`)
  return response.json()
}

export default async function MovieCredits({ id }: { id: string }) {
  const credits = await getCredits(id)

  return (
    <div className={styles.container}>
      {credits.map((credit, index) => (
        <div key={index}>
          <img
            src={credit.profile_path}
            alt={credit.name}
            className={styles.poster}
          />
          <div className={styles.name_box}>
            <p>{credit.name}</p>
            <p>{credit.character}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
