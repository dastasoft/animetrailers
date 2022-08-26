import { Heading } from '../../shared/Heading'
import { Bottom } from './Bottom'
import { Container } from './Container'
import { StyledCard } from './StyledCard'

type CardProps = {
  id?: string
  coverURL: string
  title: string
}

export default function Card({ coverURL, title }: CardProps) {
  return (
    <Container>
      <StyledCard role="button" aria-hidden>
        <img src={coverURL} alt={`${title} cover`} />
      </StyledCard>
      <Bottom>
        <Heading as="h2">{title}</Heading>
      </Bottom>
    </Container>
  )
}
