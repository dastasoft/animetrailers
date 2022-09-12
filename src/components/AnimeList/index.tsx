import { useCallback, useEffect, useRef, useState } from 'react'

import {
  getTopAnime,
  JikanAPIResponse,
  parseRawAnimeData,
  RawAnimeData,
} from '../../api/jikanAPI'
import useFetch from '../../hooks/useFetch'
import { Anime } from '../../types'
import AnimeGrid from '../AnimeGrid'

export default function AnimeList() {
  const [animeList, setAnimeList] = useState<Anime[]>([])
  const [page, setPage] = useState(1)
  const { data, loading, error } = useFetch<JikanAPIResponse<RawAnimeData[]>>(
    getTopAnime(page)
  )

  const observer = useRef<IntersectionObserver>()
  const lastAnimeRef = useCallback(
    (node: HTMLImageElement) => {
      if (loading) return
      if (observer.current) observer.current.disconnect()
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && data?.pagination.has_next_page) {
          setPage((prevValue) => prevValue + 1)
        }
      })
      if (node) observer.current.observe(node)
    },
    [loading, data?.pagination.has_next_page]
  )

  useEffect(() => {
    if (data) {
      setAnimeList((prevValue) => [
        ...prevValue,
        ...data.data.map((anime) => parseRawAnimeData(anime)),
      ])
    }
  }, [data])

  return (
    <>
      <AnimeGrid animeList={animeList} lastAnimeRef={lastAnimeRef} />
      {loading && <div>Loading...</div>}
      {error && <div>Error</div>}
    </>
  )
}
