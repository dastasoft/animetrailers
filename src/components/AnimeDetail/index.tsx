import { Anime } from '../../types'
import Cover from './Cover'
import Detail from './Detail'
import StreamingList from './StreamingList'
import Summary from './Summary'
import Trailer from './Trailer'

type AnimeDetailProps = Anime

export default function AnimeDetail({
  coverURL,
  title,
  episodeCount,
  status,
  synopsis,
  genres,
  videoURL,
  streaming,
}: AnimeDetailProps) {
  return (
    <div>
      <Cover url={coverURL} />
      <Detail title={title} episodeCount={episodeCount} status={status} />
      <Summary synopsis={synopsis} genres={genres} />
      {videoURL && <Trailer videoURL={videoURL} />}
      {streaming && <StreamingList streaming={streaming} />}
    </div>
  )
}
