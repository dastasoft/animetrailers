import { useContext } from 'react'

import { FavContext } from '../../context/FavContext'
import { Anime } from '../../types'
import { RootContainer } from '../shared/RootContainer'
import Spacer from '../UI/Spacer'
import Cover from './Cover'
import Detail from './Detail'
import Genres from './Genres'
import StreamingList from './StreamingList'
import Summary from './Summary'
import Trailer from './Trailer'

type AnimeDetailProps = Anime

export default function AnimeDetail({
  id,
  coverURL,
  episodeCount,
  genres,
  score,
  status,
  streaming,
  synopsis,
  title,
  type,
  videoURL,
  votes,
  year,
}: AnimeDetailProps) {
  const { favList, toggleFav } = useContext(FavContext)
  const liked = favList?.find((fav) => fav.id === id) != null

  return (
    <div>
      <Cover url={coverURL} />
      <RootContainer>
        <Detail
          liked={liked}
          toggleFav={() =>
            toggleFav(id, { id, coverURL, title, status, score, type, year })
          }
          title={title}
          type={type}
          episodeCount={episodeCount}
          score={score}
          status={status}
          year={year}
          votes={votes}
        />
        <Spacer direction="column" spacing={1} />
        <Genres genres={genres} />
        <Spacer direction="column" spacing={1} />
        {videoURL && <Trailer videoURL={videoURL} />}
        <Spacer direction="column" spacing={1} />
        <Summary synopsis={synopsis} />
        <Spacer direction="column" spacing={1} />
        {streaming != null && streaming.length > 0 && (
          <StreamingList streaming={streaming} />
        )}
      </RootContainer>
    </div>
  )
}
