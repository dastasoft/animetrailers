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
  return (
    <div>
      <Cover url={coverURL} />
      <RootContainer>
        <Detail
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
        {streaming && streaming.length > 0 && (
          <StreamingList streaming={streaming} />
        )}
      </RootContainer>
    </div>
  )
}
