import Heading from '../../UI/Heading'
import Spacer from '../../UI/Spacer'
import Text from '../../UI/Text'
import PlatformLink from './PlatformLink'
import { Links } from './PlatformLink/Links'

type StreamingListProps = {
  streaming: Array<{
    name: string
    url: string
  }>
}

export default function StreamingList({ streaming }: StreamingListProps) {
  return (
    <div>
      <Heading size="2xl" variant="secondary" as="h3">
        Where to watch
      </Heading>
      <Spacer direction="column" spacing={0.5} />
      <Links>
        {streaming.map(({ name, url }) => (
          <PlatformLink key={name} name={name} url={url} />
        ))}
      </Links>

      <Text size="xs">*Some titles may not be available in your country</Text>
    </div>
  )
}
