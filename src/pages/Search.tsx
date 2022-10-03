import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import {
  getAnimeByName,
  JikanAPIResponse,
  parseRawAnimeData,
  RawAnimeData,
} from '../api/jikanAPI'
import AnimeGrid from '../components/AnimeGrid'
import SEO from '../components/SEO'
import { ContainerBg } from '../components/shared/ContainerBg'
import { Liner } from '../components/shared/Liner'
import { RootContainer } from '../components/shared/RootContainer'
import Heading from '../components/UI/Heading'
import Input from '../components/UI/Input'
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
      <SEO />
      <ContainerBg>
        <Input
          name="animeSearch"
          type="text"
          ref={inputRef}
          value={searchTerm.get('q')!}
          onChange={onChangeHandler}
        />
      </ContainerBg>
      <RootContainer>
        {animeList.length > 0 && (
          <>
            <Heading size="4xl" variant="secondary" as="h2">
              Results
            </Heading>
            <Liner />
            <AnimeGrid animeList={animeList} lastAnimeRef={lastAnimeRef} />
          </>
        )}
        {loading && <div>Loading...</div>}
        {error && <div>Error</div>}
      </RootContainer>
    </div>
  )
}
