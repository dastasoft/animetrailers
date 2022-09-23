import Heading from '../../UI/Heading'

type SummaryProps = {
  synopsis: string
}

export default function Summary({ synopsis }: SummaryProps) {
  return (
    <div>
      <Heading size="2xl" color="#FFE99C" as="h3">
        Summary
      </Heading>
      <p>{synopsis}</p>
    </div>
  )
}
