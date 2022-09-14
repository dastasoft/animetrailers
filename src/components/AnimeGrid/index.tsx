/* eslint-disable no-unused-vars */
import { Anime } from '../../types'
import Card from './Card'
import { Grid } from './Grid'

type AnimeGridProps = {
  animeList: Anime[]
  lastAnimeRef?: (node: HTMLImageElement) => void
}

export default function AnimeGrid({ animeList, lastAnimeRef }: AnimeGridProps) {
  return (
    <Grid>
      {animeList.map(({ id, coverURL, title }, index) => {
        if (animeList.length === index + 1)
          return (
            <Card
              key={`${id}-${index}`}
              ref={lastAnimeRef}
              id={id}
              coverURL={coverURL}
              title={title}
            />
          )

        return (
          <Card
            key={`${id}-${index}`}
            id={id}
            coverURL={coverURL}
            title={title}
          />
        )
      })}
    </Grid>
  )
}
