import { useEffect } from 'react'

import useAnime from '../../hooks/useAnime'
import Card from './Card'
import { Grid } from './Grid'

export default function AnimeList() {
  const { animeList, topAnime, loading, error } = useAnime()

  useEffect(() => {
    topAnime()
  }, [topAnime])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error</div>

  return (
    <Grid>
      {animeList.map(({ id, coverURL, title }) => (
        <Card key={id} id={id} coverURL={coverURL} title={title} />
      ))}
    </Grid>
  )
}
