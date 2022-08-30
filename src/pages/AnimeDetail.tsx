import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import ADetail from '../components/AnimeDetail'
import useAnime from '../hooks/useAnime'

export default function AnimeDetail() {
  const { id } = useParams()
  const { animeList, animeById, loading, error } = useAnime()

  useEffect(() => {
    animeById(Number(id))
  }, [animeById])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error</div>

  return animeList[0] && <ADetail {...animeList[0]} />
}
