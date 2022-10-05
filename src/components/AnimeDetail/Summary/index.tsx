import Heading from '../../UI/Heading'
import Text from '../../UI/Text'

type SummaryProps = {
  synopsis: string
}

export default function Summary({ synopsis }: SummaryProps) {
  return (
    <div>
      <Heading size="2xl" variant="secondary" as="h3">
        Summary
      </Heading>
      <Text size="lg">{synopsis}</Text>
    </div>
  )
}
