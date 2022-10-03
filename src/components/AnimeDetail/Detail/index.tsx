import { AnimeType } from '../../../types'
import LikeButton from '../../LikeButton'
import { Liner } from '../../shared/Liner'
import Heading from '../../UI/Heading'
import Text from '../../UI/Text'

interface DetailProps {
  liked: boolean
  toggleFav: () => void
  title: string
  type: AnimeType
  episodeCount: number
  score: number
  status: string
  year: number
  votes: number
}

export default function Detail({
  liked,
  toggleFav,
  title,
  type,
  episodeCount,
  score,
  status,
  year,
  votes,
}: DetailProps) {
  return (
    <div>
      <Heading size="4xl" variant="secondary" as="h2">
        <LikeButton liked={liked} handleLike={toggleFav} /> {title}
      </Heading>
      <Liner />
      <div>
        <Text as="span" size="md">
          {type === 'TV' ? '📺' : '🎥'} -
        </Text>{' '}
        {score && (
          <>
            <Text as="span" size="md">
              {score} Score
            </Text>{' '}
          </>
        )}
        {votes && (
          <>
            <Text as="span" size="md">
              ({votes} votes)
            </Text>{' '}
          </>
        )}
        {episodeCount && (
          <>
            <Text as="span" size="md">
              - {episodeCount} episodes
            </Text>{' '}
          </>
        )}
        <Text as="span" size="md">
          ({status})
        </Text>{' '}
        <Text as="span" size="md">
          - {year}
        </Text>
      </div>
    </div>
  )
}
