import { useEffect, useState } from 'react'

import {
  getTopAnime,
  JikanAPIResponse,
  parseRawAnimeData,
  RawAnimeData,
} from '../../api/jikanAPI'
import useFetch from '../../hooks/useFetch'
import { Anime } from '../../types'
import Card from './Card'
import { Grid } from './Grid'

export default function AnimeList() {
  const [animeList, setAnimeList] = useState<Anime[]>([])
  const { data, loading, error } = useFetch<JikanAPIResponse<RawAnimeData[]>>(
    getTopAnime()
  )

  useEffect(() => {
    setAnimeList(data ? data.data.map((anime) => parseRawAnimeData(anime)) : [])
  }, [data])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error</div>

  return (
    <Grid>
      {data &&
        animeList.map(({ id, coverURL, title }) => (
          <Card key={id} id={id} coverURL={coverURL} title={title} />
        ))}
    </Grid>
  )
}
