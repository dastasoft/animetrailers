import { useEffect } from 'react'

import useAnime from '../hooks/useAnime'

export default function Home() {
  const { animeList, topAnime } = useAnime()

  useEffect(() => {
    topAnime()
  }, [topAnime])

  return (
    <div>
      {animeList.map((anime) => {
        return (
          <div key={anime.id}>
            <p>{anime.title}</p>
            <img src={anime.coverURL} alt={anime.title} />
          </div>
        )
      })}
    </div>
  )
}
