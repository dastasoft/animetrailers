import { useEffect } from 'react'

import useAnime from '../../hooks/useAnime'
import Card from './Card'
import { Grid } from './Grid'

export default function AnimeList() {
  const { animeList, topAnime } = useAnime()

  useEffect(() => {
    topAnime()
  }, [topAnime])

  return (
    <Grid>
      {animeList.map(({ id, coverURL, title }) => (
        <Card key={id} coverURL={coverURL} title={title} />
      ))}
    </Grid>
  )
}
