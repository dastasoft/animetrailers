import { useCallback, useState } from 'react'

// import { getTopAnime } from '../infrastructure/JikanAPI'
import { getTopAnime } from '../infrastructure/FakeAPI'
import { Anime } from '../types'

export default function useAnime() {
  const [animeList, setAnimeList] = useState<Anime[]>([])

  const topAnime = useCallback(async () => {
    console.count('topAnime')
    const data = await getTopAnime()
    setAnimeList(data)
  }, [])

  return {
    animeList,
    topAnime,
  }
}
