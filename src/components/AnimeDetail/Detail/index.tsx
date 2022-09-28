import { AnimeType } from '../../../types'
import { Liner } from '../../shared/Liner'
import Heading from '../../UI/Heading'
import Text from '../../UI/Text'

type DetailProps = {
  title: string
  type: AnimeType
  episodeCount: number
  score: number
  status: string
  year: number
  votes: number
}

export default function Detail({
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
      <Heading size="4xl" color="#FFE99C" as="h2">
        {title}
      </Heading>
      <Liner />
      <div>
        <Text as="span" size="md">
          {type === 'TV' ? '📺' : '🎥'} -
        </Text>{' '}
        <Text as="span" size="md">
          {score} Score ({votes} votes)
        </Text>{' '}
        <Text as="span" size="md">
          - {episodeCount} episodes ({status})
        </Text>{' '}
        <Text as="span" size="md">
          - {year}
        </Text>
      </div>
    </div>
  )
}
