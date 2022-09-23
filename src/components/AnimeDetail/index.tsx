import { useNavigate } from 'react-router-dom'

import { Anime } from '../../types'
import Spacer from '../UI/Spacer'
import { Container } from './Container'
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
  const navigate = useNavigate()

  return (
    <div>
      <Cover url={coverURL} />
      <Container>
        <button onClick={() => navigate(-1)}>Back</button>
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
        {streaming && <StreamingList streaming={streaming} />}
      </Container>
    </div>
  )
}
