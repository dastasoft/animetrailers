import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import {
  getAnimeByName,
  JikanAPIResponse,
  parseRawAnimeData,
  RawAnimeData,
} from '../api/jikanAPI'
import AnimeGrid from '../components/AnimeGrid'
import useFetch from '../hooks/useFetch'
import { Anime } from '../types'

export default function Search() {
  const [searchTerm, setSearchTerm] = useSearchParams({ q: '' })
  const [animeList, setAnimeList] = useState<Anime[]>([])
  const [page, setPage] = useState(1)
  const inputRef = useRef<HTMLInputElement>(null!)

  const { data, loading, error } = useFetch<JikanAPIResponse<RawAnimeData[]>>(
    getAnimeByName(page, searchTerm.get('q')!),
    {
      initialFetch: false,
      delayFetch: 500,
    }
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
    inputRef.current.focus()
  }, [])

  useEffect(() => {
    if (data && searchTerm.get('q')) {
      setAnimeList((prevValue) => [
        ...prevValue,
        ...data.data.map((anime) => parseRawAnimeData(anime)),
      ])
    }
  }, [data])

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const q = e.target.value

    if (searchTerm.get('q') !== q) {
      setAnimeList([])
      setPage(1)
    }

    setSearchTerm({ q })
  }

  return (
    <div>
      <input
        name="animeSearch"
        type="text"
        ref={inputRef}
        value={searchTerm.get('q')!}
        onChange={onChangeHandler}
      />

      <AnimeGrid animeList={animeList} lastAnimeRef={lastAnimeRef} />
      {loading && <div>Loading...</div>}
      {error && <div>Error</div>}
    </div>
  )
}
