import { useEffect, useRef, useState } from 'react'
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
  const inputRef = useRef<HTMLInputElement>(null!)

  const { data, loading, error } = useFetch<JikanAPIResponse<RawAnimeData[]>>(
    getAnimeByName(searchTerm.get('q')!),
    {
      initialFetch: false,
      delayFetch: 500,
    }
  )

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  useEffect(() => {
    if (data && searchTerm.get('q')) {
      setAnimeList(data.data.map((anime) => parseRawAnimeData(anime)))
    } else {
      setAnimeList([])
    }
  }, [data, searchTerm])

  return (
    <div>
      <input
        name="animeSearch"
        type="text"
        ref={inputRef}
        value={searchTerm.get('q')!}
        onChange={(e) => setSearchTerm({ q: e.target.value })}
      />

      <AnimeGrid animeList={animeList} />
      {loading && <div>Loading...</div>}
      {error && <div>Error</div>}
    </div>
  )
}
