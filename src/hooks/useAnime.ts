import { useCallback, useState } from 'react'

// import { getTopAnime, getAnimeById } from '../infrastructure/JikanAPI'
import { getAnimeById, getTopAnime } from '../infrastructure/FakeAPI'
import { Anime } from '../types'

export default function useAnime() {
  const [animeList, setAnimeList] = useState<Anime[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | unknown>('')

  const topAnime = useCallback(async () => {
    console.count('topAnime')
    setLoading(true)

    try {
      const data = await getTopAnime()
      setAnimeList(data)
    } catch (error) {
      setError(error)
    }

    setLoading(false)
  }, [])

  const animeById = useCallback(async (id: number) => {
    console.count('getAnimeById')
    setLoading(true)

    try {
      const data = await getAnimeById(id)
      setAnimeList(data)
    } catch (error) {
      setError(error)
    }

    setLoading(false)
  }, [])

  return {
    loading,
    error,
    animeList,
    topAnime,
    animeById,
  }
}
