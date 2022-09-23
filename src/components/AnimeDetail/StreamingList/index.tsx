import Heading from '../../UI/Heading'
import Text from '../../UI/Text'

type StreamingListProps = {
  streaming: {
    name: string
    url: string
  }[]
}

export default function StreamingList({ streaming }: StreamingListProps) {
  return (
    <div>
      <Heading size="2xl" color="#FFE99C" as="h3">
        Where to watch
      </Heading>
      <ul>
        {streaming.map(({ name, url }) => {
          return (
            <li key={name}>
              <a href={url} target="_blank" rel="noopener noreferrer">
                {name}
              </a>
            </li>
          )
        })}
      </ul>

      <Text size="xs">*Some titles may not be available in your country</Text>
    </div>
  )
}
