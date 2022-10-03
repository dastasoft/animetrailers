import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'

import {
  getAnimeFullById,
  JikanAPIResponse,
  parseRawAnimeData,
  RawAnimeData,
} from '../api/jikanAPI'
import ADetail from '../components/AnimeDetail'
import { CONSTANTS } from '../constants'
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
    anime != null && (
      <>
        <Helmet>
          <title>
            {CONSTANTS.TITLE} - {anime.title}
          </title>
          <meta name="description" content={anime.synopsis} />
          <link
            rel="canonical"
            href={`${CONSTANTS.URL}${encodeURIComponent(anime.title)}`}
          />
          <meta property="og:image" content={anime.largeImageURL} />
          <meta
            property="og:title"
            content={`${CONSTANTS.TITLE} - ${anime.title}`}
          />
          <meta property="og:description" content={anime.synopsis} />
          <meta
            property="og:url"
            content={`${CONSTANTS.URL}${encodeURIComponent(anime.title)}`}
          />
          <meta property="og:image:height" content="200" />
          <meta property="og:image:width" content="200" />
          <meta property="og:locale" content="en" />
        </Helmet>
        <ADetail {...anime} />
      </>
    )
  )
}
