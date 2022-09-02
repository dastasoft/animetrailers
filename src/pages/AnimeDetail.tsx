import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import {
  getAnimeFullById,
  JikanAPIResponse,
  parseRawAnimeData,
  RawAnimeData,
} from '../api/jikanAPI'
import ADetail from '../components/AnimeDetail'
import useFetch from '../hooks/useFetch'
import { Anime } from '../types'

export default function AnimeDetail() {
  const [anime, setAnime] = useState<Anime | null>(null)
  const { id } = useParams()
  const { data, loading, error } = useFetch<JikanAPIResponse<RawAnimeData>>(
    getAnimeFullById(Number(id))
  )

  useEffect(() => {
    setAnime(data ? parseRawAnimeData(data.data) : null)
  }, [data])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error</div>

  return anime && <ADetail {...anime} />
}
