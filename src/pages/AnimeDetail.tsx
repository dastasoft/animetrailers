import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import {
  getAnimeFullById,
  JikanAPIResponse,
  parseRawAnimeData,
  RawAnimeData,
} from '../api/jikanAPI'
import ADetail from '../components/AnimeDetail'
import SEO from '../components/SEO'
import useFetch from '../hooks/useFetch'
import { Anime } from '../types'

export default function AnimeDetail() {
  const [anime, setAnime] = useState<Anime | null>(null)
  const { id } = useParams()
  const { data, loading, error } = useFetch<JikanAPIResponse<RawAnimeData>>(
    getAnimeFullById(Number(id))
  )

  useEffect(() => {
    setAnime(data != null ? parseRawAnimeData(data.data) : null)
  }, [data])

  if (loading) return <div>Loading...</div>
  if (error != null) return <div>Error</div>

  return (
    <>
      <SEO />
      {anime && <ADetail {...anime} />}
    </>
  )
}
